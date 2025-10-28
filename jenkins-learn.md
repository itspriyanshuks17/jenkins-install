# Jenkins Notes

## 📌 What is Jenkins?

* **Jenkins** is an **open-source automation server** written in Java.
* It is widely used for **Continuous Integration (CI)** and **Continuous Delivery (CD)** in DevOps.
* Helps automate parts of the **software development lifecycle (SDLC)** such as:

  * Building code
  * Running tests
  * Deploying applications
* Supports integration with thousands of tools (e.g., **Git, Docker, Kubernetes, Maven, Ansible, Slack**).
* Provides a **web-based user interface** and an extensive plugin ecosystem.

👉 In short: Jenkins helps teams **deliver software faster and more reliably** by automating repetitive tasks.

---

## ⚙️ Key Features

* Easy installation & web-based UI.
* Supports **distributed builds** (master-slave architecture).
* Large plugin ecosystem (>1800 plugins).
* Integrates with most version control systems (Git, SVN, etc.).
* Automates build, test, and deployment.

---

## 🛠️ Installation

1. Install **Java (JDK 11 or later)**.
2. Download Jenkins `.war` file or use package manager (`apt`, `yum`).

   ```bash
   java -jar jenkins.war
   ```
3. Access Jenkins on `http://localhost:8080`.
4. Unlock Jenkins using initial admin password.
5. Install recommended plugins.

### 🌐 Accessing Jenkins

* By default, Jenkins runs on port **8080**.
* Open in browser:

  ```
  http://localhost:8080/
  ```

### 🔒 Firewall Configuration (Linux)

If firewall is enabled, allow port **8080**:

```bash
sudo firewall-cmd --permanent --zone=public --add-port=8080/tcp
sudo firewall-cmd --reload
```

---

## 🏗️ Jenkins Architecture

* **Master**: Controls the pipeline, schedules jobs, manages nodes.
* **Agent (Slave)**: Executes build tasks on different machines.
* **Jobs/Pipelines**: Units of work to be executed.

---

## 📂 Jenkins Jobs

Types of jobs:

* **Freestyle Project**: Simple job (build + test + deploy).
* **Pipeline**: Defined using `Jenkinsfile` (scripted/declarative).
* **Multibranch Pipeline**: Runs pipelines for multiple branches.
* **Folder**: Organize multiple jobs.

---

## 🔒 Groovy Sandbox

* **Security mechanism** that restricts Groovy script execution in Jenkins pipelines.
* Prevents malicious code from accessing system resources or Jenkins internals.
* **Enabled by default** for pipeline scripts to ensure safe execution.
* Allows only **approved methods and classes** to be used in scripts.
* Administrators can approve/reject script methods via **Script Security Plugin**.

### Key Points:
* Scripts run in sandbox cannot access file system directly
* Cannot execute arbitrary system commands without approval
* Provides **whitelist of safe operations**
* Can be disabled for trusted scripts (not recommended)

---

## 📝 Declarative Pipeline

**Structured, simpler syntax** with predefined sections:

```groovy
pipeline {
    agent any
    
    environment {
        DEPLOY_ENV = 'staging'
    }
    
    stages {
        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'mvn clean compile'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'mvn test'
            }
            post {
                always {
                    junit 'target/test-reports/*.xml'
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to staging...'
                sh 'docker build -t myapp .'
            }
        }
    }
    
    post {
        failure {
            mail to: 'team@company.com',
                 subject: 'Build Failed',
                 body: 'Pipeline failed'
        }
    }
}
```

### Features:
* **Predefined structure** (pipeline, agent, stages, steps)
* Built-in **error handling** with `post` blocks
* **Conditional execution** with `when` directive
* **Environment variables** support
* **Easier to read** and maintain

---

## 🛠️ Scripted Pipeline

**Flexible, Groovy-based** with full programming capabilities:

```groovy
node('linux') {
    try {
        def buildNumber = env.BUILD_NUMBER
        def gitCommit
        
        stage('Checkout') {
            gitCommit = checkout(scm).GIT_COMMIT
            echo "Building commit: ${gitCommit}"
        }
        
        stage('Build') {
            if (env.BRANCH_NAME == 'main') {
                sh 'mvn clean package -Pprod'
            } else {
                sh 'mvn clean package'
            }
        }
        
        stage('Test') {
            parallel (
                'Unit Tests': {
                    sh 'mvn test'
                },
                'Integration Tests': {
                    sh 'mvn integration-test'
                }
            )
        }
        
        stage('Deploy') {
            if (env.BRANCH_NAME == 'main') {
                input message: 'Deploy to production?', ok: 'Deploy'
                sh "docker run -d -p 8080:8080 myapp:${buildNumber}"
            }
        }
        
    } catch (Exception e) {
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        cleanWs()
    }
}
```

### Features:
* **Full Groovy syntax** (variables, loops, conditions)
* **Dynamic pipeline creation**
* **Exception handling** with try-catch
* **Parallel execution** support
* **More complex logic** possible
* **Greater flexibility** but harder to maintain

---

## 🆚 Declarative vs Scripted Pipeline

| Feature | Declarative | Scripted |
|---------|-------------|----------|
| **Syntax** | Structured, YAML-like | Groovy programming |
| **Learning Curve** | Easier | Steeper |
| **Flexibility** | Limited but sufficient | Full programming power |
| **Error Handling** | Built-in `post` blocks | Manual try-catch |
| **Validation** | Better syntax validation | Runtime errors |
| **Recommended For** | Most CI/CD use cases | Complex, dynamic pipelines |

---

## 🔌 Jenkins Plugins

* **Git Plugin** → integrate Git repositories.
* **Pipeline Plugin** → for CI/CD pipelines.
* **Docker Plugin** → build and deploy using Docker.
* **Blue Ocean** → modern UI for pipelines.
* **Slack Plugin** → send build notifications.

---

### 📂 Jenkins Files Location

* **Linux (default installation via package manager):**

  ```
  /var/lib/jenkins
  ```
* **Windows (when installed as a service):**

  ```
  C:\Program Files (x86)\Jenkins
  ```

  and Jenkins home data is usually in:

  ```
  C:\Users\<YourUsername>\.jenkins
  ```
* **WAR file run manually:**
  Jenkins creates `.jenkins` directory in the user’s home folder:

  ```
  ~/.jenkins
  ```

### 🔑 JENKINS\_HOME

* All configuration, plugins, build logs, and job details are stored in the **JENKINS\_HOME** directory.
* To check where Jenkins home is located, go to:

  * **Dashboard → Manage Jenkins → Configure System** (scroll to Jenkins Home).
  * Or run:

    ```bash
    echo $JENKINS_HOME
    ```

---

## 🔒 Security in Jenkins

* Enable authentication & authorization.
* Use Role-Based Access Control (RBAC).
* Keep Jenkins updated.
* Restrict access to scripts and credentials.

---

## 🚀 CI/CD with Jenkins

1. Developer pushes code to GitHub.
2. Jenkins pulls code via Webhook.
3. Runs build → test → deploy pipeline.
4. Deploys to staging/production server.

---

## 📊 Best Practices

* Store pipelines in `Jenkinsfile` (source-controlled).
* Use **multibranch pipelines** for Git projects.
* Isolate build environments (e.g., Docker).
* Backup Jenkins configuration.
* Monitor Jenkins performance.

---

## 🖥️ Jenkins Nodes & EC2 Agents

### Creating Jenkins Nodes

1. **Navigate to Manage Jenkins**
   * Dashboard → Manage Jenkins → Manage Nodes and Clouds

2. **Add New Node**
   * Click "New Node"
   * Enter node name (e.g., `ec2-agent-1`)
   * Select "Permanent Agent"
   * Click "Create"

3. **Configure Node Settings**
   ```
   Name: ec2-agent-1
   Description: EC2 Ubuntu Agent
   Number of executors: 2
   Remote root directory: /home/ubuntu/jenkins
   Labels: linux ubuntu ec2
   Usage: Use this node as much as possible
   Launch method: Launch agents via SSH
   ```

### EC2 Instance Setup

1. **Launch EC2 Instance**
   * AMI: Ubuntu 22.04 LTS
   * Instance Type: t3.medium (minimum)
   * Security Group: Allow SSH (22) and custom port if needed
   * Key Pair: Create/select existing

2. **Install Java on EC2**
   ```bash
   sudo apt update
   sudo apt install openjdk-17-jdk -y
   java -version
   ```

3. **Create Jenkins User**
   ```bash
   sudo useradd -m -s /bin/bash jenkins
   sudo mkdir -p /home/jenkins/.ssh
   sudo chown jenkins:jenkins /home/jenkins/.ssh
   ```

4. **Setup SSH Key Authentication**
   
   **On Jenkins Master:**
   ```bash
   ssh-keygen -t rsa -b 4096 -f ~/.ssh/jenkins_agent
   cat ~/.ssh/jenkins_agent.pub
   ```
   
   **On EC2 Agent:**
   ```bash
   sudo nano /home/jenkins/.ssh/authorized_keys
   # Paste the public key content
   sudo chown jenkins:jenkins /home/jenkins/.ssh/authorized_keys
   sudo chmod 600 /home/jenkins/.ssh/authorized_keys
   ```

### Configure SSH Connection in Jenkins

1. **Add SSH Credentials**
   * Manage Jenkins → Manage Credentials
   * Add Credentials → SSH Username with private key
   ```
   ID: ec2-ssh-key
   Username: jenkins
   Private Key: [Paste private key content]
   ```

2. **Configure Node Launch Method**
   ```
   Host: [EC2-PUBLIC-IP]
   Credentials: ec2-ssh-key
   Host Key Verification Strategy: Non verifying
   ```

3. **Advanced SSH Settings**
   ```
   Port: 22
   JavaPath: /usr/bin/java
   JVM Options: -Xmx1024m
   ```

### Launch Agent

1. **Save Configuration** and click "Launch agent"
2. **Check Agent Status** - should show "Agent successfully connected"
3. **Verify in Build Executor Status** on Jenkins dashboard

### Using Agents in Pipeline

**Declarative Pipeline:**
```groovy
pipeline {
    agent {
        label 'ec2'
    }
    stages {
        stage('Build on EC2') {
            steps {
                sh 'echo "Running on EC2 agent"'
                sh 'hostname'
            }
        }
    }
}
```

**Scripted Pipeline:**
```groovy
node('ubuntu') {
    stage('Build') {
        sh 'echo "Building on Ubuntu agent"'
    }
}
```

### Troubleshooting Agent Connection

**Common Issues:**

1. **SSH Connection Failed**
   ```bash
   # Test SSH manually
   ssh -i ~/.ssh/jenkins_agent jenkins@[EC2-IP]
   ```

2. **Java Not Found**
   ```bash
   # Check Java path on agent
   which java
   # Update JavaPath in node configuration
   ```

3. **Permission Denied**
   ```bash
   # Fix SSH permissions
   sudo chmod 700 /home/jenkins/.ssh
   sudo chmod 600 /home/jenkins/.ssh/authorized_keys
   ```

4. **Agent Offline**
   * Check EC2 instance status
   * Verify security group rules
   * Check Jenkins logs: Manage Jenkins → System Log

### Best Practices

* **Use IAM roles** instead of hardcoded credentials
* **Label agents** appropriately (os, tools, environment)
* **Monitor agent capacity** and scale as needed
* **Use spot instances** for cost optimization
* **Backup agent configurations**
* **Keep agents updated** with security patches

---


### How to Fix “sudo: a terminal is required” in Jenkins

1. **Allow Jenkins to run commands without a password**

   * Edit sudoers:

     ```bash
     sudo visudo
     ```
   * Add this line:

     ```
     jenkins ALL=(ALL) NOPASSWD:ALL
     ```
   * Or safer: allow only specific commands (example for apt & java install):

     ```
     jenkins ALL=(ALL) NOPASSWD:/usr/bin/apt,/usr/bin/apt-get,/usr/bin/systemctl,/usr/bin/java
     ```

2. **Use `sudo -S` with password in pipeline (less secure ⚠️)**

   ```groovy
   pipeline {
       agent any
       stages {
           stage('Install Java') {
               steps {
                   sh '''
                       echo "yourpassword" | sudo -S apt update -y
                       echo "yourpassword" | sudo -S apt install openjdk-11-jdk -y
                   '''
               }
           }
       }
   }
   ```
   

   👉 This works but is insecure because your password is stored in plain text.


3. **Best Practice: Use Jenkins user with privileges**

   * Pre-configure environment so that Jenkins doesn’t need `sudo` for common tasks.
   * Or run Jenkins inside a Docker container with the right permissions.



> NOTE: ⚠️ Recommendation: For production, use **Option 1 (sudoers NOPASSWD with limited commands)**.

---

## 📖 References

* [Official Jenkins Docs](https://www.jenkins.io/doc/)
* [Jenkins GitHub](https://github.com/jenkinsci/jenkins)
* [Plugin Index](https://plugins.jenkins.io/)
