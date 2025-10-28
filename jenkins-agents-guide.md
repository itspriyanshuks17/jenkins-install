# Jenkins Agents & Distributed Builds Guide

## 🎯 Why Jenkins Agents Are Needed

### Scalability Issues with Single Jenkins Master
* **Resource Limitations**: Single master handles all builds, tests, and deployments
* **Performance Bottleneck**: CPU, memory, and disk I/O constraints
* **Build Queue Delays**: Jobs wait in queue when master is busy
* **Single Point of Failure**: If master goes down, entire CI/CD stops

### Benefits of Distributed Architecture
* **Parallel Execution**: Multiple builds run simultaneously across agents
* **Resource Distribution**: Workload spread across multiple machines
* **Environment Isolation**: Different OS, tools, and configurations per agent
* **Fault Tolerance**: Agent failure doesn't stop other builds
* **Cost Optimization**: Use different instance types for different workloads

---

## 🏗️ Jenkins Master-Agent Architecture

```
┌─────────────────┐    SSH/JNLP    ┌─────────────────┐
│  Jenkins Master │◄──────────────►│   Agent Node 1  │
│                 │                │   (Linux/Java)  │
│  • Schedules    │                └─────────────────┘
│  • Manages      │    
│  • Monitors     │    SSH/JNLP    ┌─────────────────┐
│  • Web UI       │◄──────────────►│   Agent Node 2  │
│                 │                │  (Windows/.NET) │
└─────────────────┘                └─────────────────┘
                      SSH/JNLP    ┌─────────────────┐
                   ◄──────────────►│   Agent Node 3  │
                                   │   (Docker/K8s)  │
                                   └─────────────────┘
```

### Master Responsibilities
* **Job Scheduling**: Assigns builds to available agents
* **Configuration Management**: Stores job definitions and system settings
* **User Interface**: Provides web-based dashboard and API
* **Plugin Management**: Handles plugin installation and updates
* **Security**: Manages authentication and authorization

### Agent Responsibilities
* **Build Execution**: Runs actual build, test, and deployment tasks
* **Tool Hosting**: Provides specific tools (Maven, Docker, Node.js)
* **Environment Provision**: Offers different OS and runtime environments
* **Resource Provision**: Supplies CPU, memory, and storage for builds

---

## 🔐 SSH Key Authentication Deep Dive

### Understanding SSH Key Pairs

**Public Key Cryptography Basics:**
* **Private Key**: Secret key stored on Jenkins master (never shared)
* **Public Key**: Shared key placed on agent machines
* **Authentication**: Master proves identity using private key

### Step-by-Step SSH Key Setup

#### 1. Generate SSH Key Pair on Jenkins Master

```bash
# Generate RSA key pair (4096-bit for security)
ssh-keygen -t rsa -b 4096 -f ~/.ssh/jenkins_agent_key

# Alternative: Generate Ed25519 key (more secure, smaller)
ssh-keygen -t ed25519 -f ~/.ssh/jenkins_agent_ed25519

# Set proper permissions
chmod 600 ~/.ssh/jenkins_agent_key
chmod 644 ~/.ssh/jenkins_agent_key.pub
```

**Key Generation Options:**
```bash
# Interactive generation with custom comment
ssh-keygen -t rsa -b 4096 -C "jenkins-master@company.com"

# Non-interactive generation (for automation)
ssh-keygen -t rsa -b 4096 -f ~/.ssh/jenkins_key -N ""
```

#### 2. Copy Public Key to Agent

**Method 1: Using ssh-copy-id (Recommended)**
```bash
ssh-copy-id -i ~/.ssh/jenkins_agent_key.pub jenkins@agent-ip
```

**Method 2: Manual Copy**
```bash
# Display public key
cat ~/.ssh/jenkins_agent_key.pub

# On agent machine
mkdir -p ~/.ssh
echo "ssh-rsa AAAAB3NzaC1yc2EAAAA..." >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

**Method 3: Using SCP**
```bash
scp ~/.ssh/jenkins_agent_key.pub jenkins@agent-ip:~/temp_key.pub
ssh jenkins@agent-ip "cat ~/temp_key.pub >> ~/.ssh/authorized_keys && rm ~/temp_key.pub"
```

#### 3. Test SSH Connection

```bash
# Test connection with specific key
ssh -i ~/.ssh/jenkins_agent_key jenkins@agent-ip

# Test with verbose output for debugging
ssh -v -i ~/.ssh/jenkins_agent_key jenkins@agent-ip

# Test connection without executing commands
ssh -i ~/.ssh/jenkins_agent_key jenkins@agent-ip "echo 'Connection successful'"
```

---

## 🔧 Jenkins Credentials Management

### Adding SSH Credentials in Jenkins

#### 1. Navigate to Credentials
```
Dashboard → Manage Jenkins → Manage Credentials → System → Global credentials
```

#### 2. Add New Credential
```
Kind: SSH Username with private key
ID: jenkins-agent-ssh-key
Description: SSH key for Jenkins agents
Username: jenkins
Private Key: Enter directly (paste private key content)
Passphrase: [if key is encrypted]
```

#### 3. Private Key Formats

**OpenSSH Format (Preferred):**
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAlwAAAAdzc2gtcn
...
-----END OPENSSH PRIVATE KEY-----
```

**RSA Format (Legacy):**
```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA2Z9QX7Tz8fJ5K8mN3vR2wE9xY4pL6qS8dF7gH9jK2mN5oP3qR
...
-----END RSA PRIVATE KEY-----
```

### Credential Security Best Practices

#### 1. Credential Scoping
```
Global: Available to all jobs
System: Available to Jenkins system operations
Project: Limited to specific folder/project
```

#### 2. Credential Types for Different Use Cases
```
SSH Username with private key: Agent connections
Username with password: Basic authentication
Secret text: API tokens, passwords
Certificate: Client certificates
AWS Credentials: IAM access keys
```

---

## 🚀 Agent Configuration & Launch Methods

### Launch Method 1: SSH (Recommended)

#### Agent Configuration
```
Name: production-linux-agent
Description: Production Linux build agent
Number of executors: 4
Remote root directory: /home/jenkins/workspace
Labels: linux production maven docker
Usage: Use this node as much as possible
Launch method: Launch agents via SSH
```

#### SSH Launch Settings
```
Host: 10.0.1.100
Credentials: jenkins-agent-ssh-key
Host Key Verification Strategy: Known hosts file
Port: 22
JavaPath: /usr/bin/java
JVM Options: -Xmx2048m -XX:+UseG1GC
```

#### Advanced SSH Configuration
```
Connection Timeout: 60 seconds
Maximum Number of Retries: 3
Seconds To Wait Between Retries: 15
Use TCP_NODELAY flag: ✓
```

### Launch Method 2: JNLP (Java Web Start)

#### When to Use JNLP
* Agent behind firewall (outbound connection only)
* Windows agents without SSH
* Dynamic/temporary agents

#### JNLP Configuration
```bash
# Download agent.jar from Jenkins master
wget http://jenkins-master:8080/jnlpJars/agent.jar

# Launch agent with secret
java -jar agent.jar -jnlpUrl http://jenkins-master:8080/computer/agent-name/slave-agent.jnlp -secret <secret-key>
```

### Launch Method 3: Windows Service

#### Install Jenkins Agent as Windows Service
```powershell
# Download and install agent
jenkins-agent.exe install

# Start service
jenkins-agent.exe start

# Configure service
jenkins-agent.exe config
```

---

## 🔍 Agent Connection Troubleshooting

### Common SSH Connection Issues

#### 1. Permission Denied (publickey)
```bash
# Check SSH key permissions
ls -la ~/.ssh/
# Should be: 600 for private key, 644 for public key

# Verify public key on agent
cat ~/.ssh/authorized_keys

# Test SSH connection manually
ssh -i ~/.ssh/jenkins_key -v jenkins@agent-ip
```

#### 2. Host Key Verification Failed
```bash
# Remove old host key
ssh-keygen -R agent-ip

# Add new host key
ssh-keyscan -H agent-ip >> ~/.ssh/known_hosts

# Or disable host key checking (less secure)
# In Jenkins: Host Key Verification Strategy → Non verifying
```

#### 3. Java Not Found on Agent
```bash
# Check Java installation
which java
java -version

# Install Java if missing
sudo apt update && sudo apt install openjdk-17-jdk -y

# Update JavaPath in Jenkins node configuration
# JavaPath: /usr/bin/java
```

#### 4. Network Connectivity Issues
```bash
# Test network connectivity
ping agent-ip
telnet agent-ip 22

# Check firewall rules
sudo ufw status
sudo iptables -L

# Verify security group (AWS)
# Allow inbound SSH (port 22) from Jenkins master
```

### Jenkins Agent Logs

#### Master-Side Logs
```
Manage Jenkins → System Log → Add new log recorder
Logger: hudson.slaves.SlaveComputer
Log Level: ALL
```

#### Agent-Side Logs
```bash
# SSH agent logs
tail -f /var/log/jenkins/agent.log

# System logs
journalctl -u jenkins-agent -f

# Manual agent execution (for debugging)
java -jar agent.jar -jnlpUrl <url> -secret <secret> -workDir /tmp
```

---

## 📊 Agent Monitoring & Management

### Agent Health Monitoring

#### 1. Built-in Monitoring
```
Dashboard → Manage Jenkins → Manage Nodes and Clouds
- Node status (online/offline)
- Executor status (idle/busy)
- Disk space monitoring
- Response time tracking
```

#### 2. Custom Health Checks
```groovy
// Groovy script for agent health check
import jenkins.model.*
import hudson.model.*

Jenkins.instance.computers.each { computer ->
    println "Agent: ${computer.name}"
    println "Online: ${computer.isOnline()}"
    println "Idle: ${computer.isIdle()}"
    println "Disk Space: ${computer.getMonitorData()}"
}
```

### Agent Scaling Strategies

#### 1. Static Agents
* **Fixed number** of permanent agents
* **Predictable costs** and resources
* **Manual scaling** based on demand

#### 2. Dynamic Agents (Cloud)
* **Auto-scaling** based on build queue
* **Cost-effective** (pay per use)
* **Plugin-based** (EC2, Docker, Kubernetes)

#### 3. Hybrid Approach
* **Core agents** always available
* **Burst capacity** with cloud agents
* **Balanced** cost and performance

---

## 🛡️ Security Best Practices

### SSH Security Hardening

#### 1. SSH Configuration (/etc/ssh/sshd_config)
```bash
# Disable password authentication
PasswordAuthentication no
PubkeyAuthentication yes

# Restrict SSH access
AllowUsers jenkins
DenyUsers root

# Change default SSH port
Port 2222

# Disable root login
PermitRootLogin no
```

#### 2. Network Security
```bash
# Use VPN or private networks
# Restrict SSH access to Jenkins master IP only
# Implement fail2ban for brute force protection

# AWS Security Group example
# Inbound: SSH (22) from Jenkins master security group only
# Outbound: HTTPS (443) for package downloads
```

### Jenkins Security Configuration

#### 1. Agent-to-Master Security
```
Manage Jenkins → Configure Global Security
→ Agents → Agent to master security subsystem
→ Enable: Disable CLI over Remoting
→ Enable: Disable JNLP4-connect
```

#### 2. Credential Management
```
# Use credential binding in pipelines
pipeline {
    agent any
    environment {
        SSH_KEY = credentials('jenkins-agent-ssh-key')
    }
    stages {
        stage('Deploy') {
            steps {
                sh 'ssh -i $SSH_KEY user@server "deploy.sh"'
            }
        }
    }
}
```

---

## 🎛️ Advanced Agent Configurations

### Multi-Platform Agent Setup

#### Linux Agent (Ubuntu/CentOS)
```bash
# Install dependencies
sudo apt update
sudo apt install -y openjdk-17-jdk git maven docker.io

# Configure Docker access
sudo usermod -aG docker jenkins

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

#### Windows Agent
```powershell
# Install Java
choco install openjdk17

# Install Git
choco install git

# Install Visual Studio Build Tools
choco install visualstudio2022buildtools

# Configure Jenkins user
net user jenkins /add
net localgroup "Remote Desktop Users" jenkins /add
```

#### macOS Agent
```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install dependencies
brew install openjdk@17 git maven node

# Configure Java
echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
```

### Container-Based Agents

#### Docker Agent Configuration
```groovy
// Pipeline with Docker agent
pipeline {
    agent {
        docker {
            image 'maven:3.8.6-openjdk-17'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
    }
}
```

#### Kubernetes Agent Configuration
```yaml
# kubernetes-agent.yaml
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: maven
    image: maven:3.8.6-openjdk-17
    command: ['sleep']
    args: ['infinity']
  - name: docker
    image: docker:dind
    securityContext:
      privileged: true
```

---

## 📈 Performance Optimization

### Agent Resource Planning

#### CPU & Memory Guidelines
```
Small builds (web apps): 2 vCPU, 4GB RAM
Medium builds (Java apps): 4 vCPU, 8GB RAM
Large builds (C++, Android): 8+ vCPU, 16+ GB RAM
```

#### Executor Configuration
```
# Rule of thumb: 1 executor per CPU core
# Adjust based on build characteristics:
# - CPU intensive: 1 executor per core
# - I/O intensive: 1.5-2 executors per core
# - Memory intensive: Fewer executors
```

### Build Performance Optimization

#### 1. Parallel Builds
```groovy
pipeline {
    agent none
    stages {
        stage('Parallel Tests') {
            parallel {
                stage('Unit Tests') {
                    agent { label 'linux' }
                    steps { sh 'mvn test' }
                }
                stage('Integration Tests') {
                    agent { label 'docker' }
                    steps { sh 'docker-compose test' }
                }
            }
        }
    }
}
```

#### 2. Build Caching
```bash
# Maven local repository caching
-v /var/jenkins_home/.m2:/root/.m2

# Docker layer caching
docker build --cache-from myapp:latest .

# Node.js dependencies caching
-v /var/jenkins_home/npm_cache:/root/.npm
```

---

## 🔄 Agent Lifecycle Management

### Agent Provisioning Automation

#### Terraform Configuration
```hcl
resource "aws_instance" "jenkins_agent" {
  count           = var.agent_count
  ami             = "ami-0c02fb55956c7d316"  # Ubuntu 22.04
  instance_type   = "t3.medium"
  key_name        = "jenkins-key"
  security_groups = [aws_security_group.jenkins_agent.name]
  
  user_data = file("install_agent.sh")
  
  tags = {
    Name = "jenkins-agent-${count.index + 1}"
    Type = "jenkins-agent"
  }
}
```

#### Agent Installation Script
```bash
#!/bin/bash
# install_agent.sh

# Update system
apt update && apt upgrade -y

# Install Java
apt install -y openjdk-17-jdk

# Create jenkins user
useradd -m -s /bin/bash jenkins
mkdir -p /home/jenkins/.ssh
chown jenkins:jenkins /home/jenkins/.ssh
chmod 700 /home/jenkins/.ssh

# Install additional tools
apt install -y git maven docker.io
usermod -aG docker jenkins

# Configure SSH
echo "${public_key}" >> /home/jenkins/.ssh/authorized_keys
chown jenkins:jenkins /home/jenkins/.ssh/authorized_keys
chmod 600 /home/jenkins/.ssh/authorized_keys
```

### Agent Maintenance

#### Regular Maintenance Tasks
```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Clean up disk space
docker system prune -f
rm -rf /tmp/*
find /var/log -name "*.log" -mtime +30 -delete

# Monitor disk usage
df -h
du -sh /home/jenkins/workspace/*
```

#### Automated Maintenance Pipeline
```groovy
pipeline {
    agent { label 'master' }
    triggers {
        cron('0 2 * * 0')  // Weekly at 2 AM Sunday
    }
    stages {
        stage('Agent Maintenance') {
            steps {
                script {
                    Jenkins.instance.computers.each { computer ->
                        if (computer.isOnline()) {
                            // Run maintenance commands
                            build job: 'agent-maintenance', 
                                  parameters: [string(name: 'AGENT', value: computer.name)]
                        }
                    }
                }
            }
        }
    }
}
```

---

## 📚 References & Resources

### Official Documentation
* [Jenkins Distributed Builds](https://www.jenkins.io/doc/book/scaling/distributed-builds/)
* [SSH Build Agents](https://www.jenkins.io/doc/book/using/using-agents/)
* [Jenkins Security](https://www.jenkins.io/doc/book/security/)

### Community Resources
* [Jenkins Community Forums](https://community.jenkins.io/)
* [Jenkins Plugin Index](https://plugins.jenkins.io/)
* [Jenkins Best Practices](https://www.jenkins.io/doc/book/appendix/best-practices/)

### Cloud Provider Guides
* [AWS EC2 Plugin](https://plugins.jenkins.io/ec2/)
* [Azure VM Agents](https://plugins.jenkins.io/azure-vm-agents/)
* [Google Compute Engine Plugin](https://plugins.jenkins.io/google-compute-engine/)