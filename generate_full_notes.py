import json

notes = []

# Helper to build a note structure
def add_note(note_id, num, title, category, description, tags, search, sections):
    notes.append({
        "id": note_id,
        "num": num,
        "title": title,
        "category": category,
        "description": description,
        "tags": tags,
        "search": search,
        "sections": sections
    })

# 1. intro
add_note(
    "intro", "01", "What is Jenkins?", "introduction",
    "Comprehensive guide explaining Jenkins architecture, features, and role in DevOps CI/CD pipelines.",
    ["Jenkins", "Introduction", "DevOps"],
    "jenkins what is jenkins automation server master-agent core definition introduction",
    [
        {
            "type": "lead",
            "text": "Jenkins is an open-source, Java-based <strong>automation server</strong>. It is the backbone of modern DevOps, designed to orchestrate and automate the continuous integration (CI) and continuous delivery/deployment (CD) lifecycle of software applications."
        },
        {
            "type": "ascii",
            "label": "Jenkins Ecosystem & Flow",
            "diagram": """
[ Developer ]
      │ (Pushes Code)
      ▼
┌──────────────┐      ┌─────────────────────────┐
│ Git / GitHub │ ───> │   Jenkins Controller    │
└──────────────┘      │                         │
                      │  (Orchestrator/Sched)   │
                      └─────────────────────────┘
                                   │
                     ┌─────────────┴─────────────┐
                     ▼                           ▼
        ┌─────────────────────────┐ ┌─────────────────────────┐
        │     Jenkins Agent 1     │ │     Jenkins Agent 2     │
        │  (Runs Docker Build)    │ │   (Runs Unit Tests)     │
        └─────────────────────────┘ └─────────────────────────┘
                     │                           │
                     └─────────────┬─────────────┘
                                   ▼
                      ┌─────────────────────────┐
                      │    Staging / Prod       │
                      │  (Deploy Environments)  │
                      └─────────────────────────┘
"""
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "Central Orchestrator",
                    "text": "Acts as the command center. Schedules builds, monitors executions, and manages environments."
                },
                {
                    "title": "Rich Plugin Ecosystem",
                    "text": "Over 1,800+ community plugins available to integrate with virtually any DevOps tool."
                },
                {
                    "title": "Pipeline as Code",
                    "text": "Pipelines are declared inside a version-controlled file called a 'Jenkinsfile'."
                },
                {
                    "title": "Distributed Arch",
                    "text": "Build tasks are offloaded from the main controller to scale-out worker agents."
                }
            ]
        },
        {
            "type": "callout",
            "tone": "info",
            "html": "<strong>Why choose Jenkins over managed solutions?</strong> Jenkins is fully self-hosted, has zero licensing fees at scale, and gives organizations absolute control over their underlying build infrastructure and security policies."
        }
    ]
)

# 2. cicd
add_note(
    "cicd", "02", "CI / CD Concepts", "introduction",
    "Detailed guide to Continuous Integration, Continuous Delivery, and Continuous Deployment with comparison tables.",
    ["CI/CD", "DevOps", "Theory"],
    "ci cd continuous integration delivery deployment concepts theory pipeline lifecycle",
    [
        {
            "type": "lead",
            "text": "CI/CD automates the transition of code modifications from a developer's workspace into running production systems, drastically increasing release velocity while lowering risk."
        },
        {
            "type": "ascii",
            "label": "CI vs CDelivery vs CDeployment",
            "diagram": """
Continuous Integration (CI):
[Code] ──> [Build] ──> [Test] (Fast feedback loop on commits)

Continuous Delivery (CD):
[CI Loop] ──> [Package] ──> [Release to Staging] ──> [Manual Gate] ──> [Deploy to Prod]

Continuous Deployment (Fully Automated):
[CI Loop] ──> [Package] ──> [Release to Staging] ──> [Auto Deploy to Prod]
"""
        },
        {
            "type": "table",
            "headers": ["Phase", "Process Definition", "Primary Automation Goal"],
            "rows": [
                ["Continuous Integration", "Integrating code into main branch multiple times daily.", "Automatic compilation, static code analysis, and unit testing."],
                ["Continuous Delivery", "Ensuing codebase is always in a deployable, stable state.", "Auto-packaging artifacts (JARs, Docker images) and staging deploys."],
                ["Continuous Deployment", "Completely removing human intervention from production release.", "Tested changes go live directly to customers automatically."]
            ]
        },
        {
            "type": "callout",
            "tone": "success",
            "html": "<strong>The Golden Rule:</strong> The main branch must always be green and buildable. If a build breaks, fixing it is the team's absolute highest priority."
        }
    ]
)

# 3. install
add_note(
    "install", "03", "Installation Guide", "introduction",
    "Cross-platform Jenkins installation guides (Debian/Ubuntu, Docker Compose, Windows) and EC2 port setups.",
    ["Installation", "Setup", "Docker"],
    "install installation setup port open ubuntu docker compose security ec2 java requirements",
    [
        {
            "type": "lead",
            "text": "Jenkins requires Java (JDK 11 or 17 LTS) to execute. It can be installed as a system service natively or containerized using Docker."
        },
        {
            "type": "ascii",
            "label": "Installation Architecture",
            "diagram": """
┌──────────────────────────────────────────────┐
│                  AWS EC2                     │
│  ┌─────────────────┐    ┌─────────────────┐  │
│  │  Inbound Rule   │ ──>│  Host System    │  │
│  │  TCP Port 8080  │    │  (Ubuntu/JDK17) │  │
│  └─────────────────┘    └────────┬────────┘  │
│                                  ▼           │
│                         ┌─────────────────┐  │
│                         │  Jenkins Server │  │
│                         └─────────────────┘  │
└──────────────────────────────────────────────┘
"""
        },
        {
            "type": "code",
            "title": "Option A: Native Ubuntu/Debian Installation",
            "code": """# Update OS packages
sudo apt update && sudo apt upgrade -y

# Install JDK 17 (Required runtime)
sudo apt install -y fontconfig openjdk-17-jre
java -version

# Add Jenkins repository GPG key
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \\
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

# Append Jenkins repository to system sources
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \\
  https://pkg.jenkins.io/debian-stable binary/" | \\
  sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

# Install & enable service
sudo apt update
sudo apt install -y jenkins
sudo systemctl start jenkins
sudo systemctl enable jenkins

# Retrieve First-time Setup Password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword""",
            "explanation": [
                { "keyword": "openjdk-17-jre", "detail": "Java Runtime Environment version 17. Jenkins is written in Java and requires JDK 11 or 17 to execute." },
                { "keyword": "jenkins-keyring.asc", "detail": "The GPG keys used to sign the Jenkins packages, ensuring standard security authenticity during APT download." },
                { "keyword": "/etc/apt/sources.list.d/jenkins.list", "detail": "Registers the official Jenkins Debian repository so standard APT tools scan for updates." },
                { "keyword": "systemctl start jenkins", "detail": "Systemd command to start the background daemon service process representing Jenkins server." },
                { "keyword": "initialAdminPassword", "detail": "A dynamically generated bootstrap password required to log in for the very first time." }
            ]
        },
        {
            "type": "code",
            "title": "Option B: Containerized Docker Compose Setup",
            "code": """# docker-compose.yml
version: '3.8'
services:
  jenkins:
    image: jenkins/jenkins:lts-jdk17
    container_name: jenkins-lts
    ports:
      - "8080:8080"
      - "50000:50000" # JNLP Agent connection port
    volumes:
      - jenkins_home:/var/jenkins_home
    restart: unless-stopped

volumes:
  jenkins_home:""",
            "explanation": [
                { "keyword": "jenkins/jenkins:lts-jdk17", "detail": "Official LTS container image of Jenkins compiled with JDK 17 pre-installed." },
                { "keyword": "8080:8080", "detail": "Binds host port 8080 to container port 8080, exposing the main web UI interface." },
                { "keyword": "50000:50000", "detail": "Binds host port 50000, used by inbound JNLP executors to coordinate build nodes." },
                { "keyword": "jenkins_home", "detail": "Persistent volume mounting to preserve pipeline code configurations, logs, users, and credentials." }
            ]
        },
        {
            "type": "callout",
            "tone": "warn",
            "html": "<strong>AWS EC2 Config Warning:</strong> Always configure your Security Groups to limit TCP port 8080 traffic to your own public IP address instead of exposing it to the entire internet (0.0.0.0/0) in non-production tests."
        }
    ]
)

# 3-A. aws_ec2_setup
add_note(
    "aws_ec2_setup", "03-A", "Jenkins on AWS EC2", "introduction",
    "Detailed guide to provision an AWS EC2 VM, configure Security Groups, install Java and Jenkins natively, and unlock the administration dashboard.",
    ["AWS", "EC2", "Setup", "VM"],
    "aws ec2 setup virtual machine security group ports ubuntu install java setup initialadminpassword systemctl",
    [
        {
            "type": "lead",
            "text": "Deploying Jenkins on a cloud VM like AWS EC2 provides absolute control over build resources, storage mounts, and network access control lists."
        },
        {
            "type": "ascii",
            "label": "AWS EC2 Setup & Architecture",
            "diagram": """
┌─────────────────────────────────────────────────────────────────┐
│                           AWS Cloud                             │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                     EC2 Virtual Machine                   │  │
│  │  ┌─────────────────────────┐   ┌───────────────────────┐  │  │
│  │  │  Security Group (Rules) │   │     Ubuntu OS VM      │  │  │
│  │  │  - Port 22   (SSH)      │ ─>│   - Installs JDK 17   │  │  │
│  │  │  - Port 8080 (Web UI)   │   │   - Installs Jenkins  │  │  │
│  │  └─────────────────────────┘   └───────────┬───────────┘  │  │
│  └────────────────────────────────────────────┼──────────────┘  │
└───────────────────────────────────────────────┼─────────────────┘
                                                ▼
                                    ┌───────────────────────┐
                                    │  http://<IP>:8080     │
                                    └───────────────────────┘
"""
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "AWS Security Group",
                    "text": "Must explicitly configure Inbound rules: TCP Port 8080 (for Web UI) and TCP Port 22 (for SSH remote terminal access)."
                },
                {
                    "title": "Instance Sizing",
                    "text": "Use at least a t3.medium or t2.medium instance type in production (minimum 2 vCPUs and 4GB RAM) for smooth execution."
                },
                {
                    "title": "Elastic IP Allocation",
                    "text": "Associate an Elastic IP to your EC2 instance so that the public URL address doesn't change when rebooting the host VM."
                },
                {
                    "title": "Storage (EBS)",
                    "text": "Provision at least 30GB+ of gp3 EBS SSD storage. Build caches, Docker layers, and logs consume disk space rapidly."
                }
            ]
        },
        {
            "type": "code",
            "title": "AWS EC2 Setup & Provisioning Script",
            "code": """# Connect to your freshly provisioned AWS EC2 Instance
ssh -i web-key.pem ubuntu@54.210.85.99

# Run the automated setup commands
sudo apt update -y
sudo apt install openjdk-17-jre -y

# Import the GPG key to verify package signatures safely
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \\
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

# Configure the official Jenkins repository source list
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \\
  https://pkg.jenkins.io/debian-stable binary/" | sudo tee \\
  /etc/apt/sources.list.d/jenkins.list > /dev/null

# Install the Jenkins server package
sudo apt update -y
sudo apt install jenkins -y

# Launch and register the background service process
sudo systemctl start jenkins
sudo systemctl enable jenkins

# View the dynamic admin password to unlock the portal
sudo cat /var/lib/jenkins/secrets/initialAdminPassword""",
            "explanation": [
                { "keyword": "ubuntu@54.210.85.99", "detail": "SSH user and public IP address used to authenticate and connect to your EC2 instance." },
                { "keyword": "openjdk-17-jre", "detail": "The Java Runtime Environment 17. Jenkins is compiled in Java and requires JDK/JRE 11 or 17." },
                { "keyword": "/usr/share/keyrings/jenkins-keyring.asc", "detail": "The keyring location holding GPG keys to establish safe cryptographic package downloads." },
                { "keyword": "/etc/apt/sources.list.d/jenkins.list", "detail": "Registers the official Debian-stable Jenkins package repository on your system." },
                { "keyword": "systemctl start jenkins", "detail": "Starts the active background Jenkins system service process under systemd supervision." },
                { "keyword": "initialAdminPassword", "detail": "A secure bootstrap pass-token printed to the console workspace, used to configure the admin account." }
            ]
        },
        {
            "type": "callout",
            "tone": "info",
            "html": "<strong>Initial Unlock Note:</strong> Once the installation script completes, navigate to <code>http://&lt;EC2_PUBLIC_IP&gt;:8080</code> in your browser. Copy the output of the <code>initialAdminPassword</code> command to unlock your Jenkins portal."
        }
    ]
)

# 4. ui
add_note(
    "ui", "04", "Jenkins UI Tour", "introduction",
    "Touring the core views of the Jenkins user interface, logs, and global configuration dashboards.",
    ["UI", "Configuration", "Logs"],
    "ui tour user interface dashboard settings navigation manage logs console",
    [
        {
            "type": "lead",
            "text": "The Jenkins UI is split into operational, management, and real-time log analysis layouts designed to help developers control and configure automation jobs."
        },
        {
            "type": "ascii",
            "label": "Jenkins UI Mockup Map",
            "diagram": """
┌────────────────────────────────────────────────────────┐
│ Jenkins Logo  [Searchbox...]               [User Profile]│
├────────────────────────────────────────────────────────┤
│ ┌───────────────┐ ┌──────────────────────────────────┐ │
│ │  New Item     │ │  Dashboard > All Jobs            │ │
│ │  People       │ ├──────────────────────────────────┤ │
│ │  Build History│ │ Job Name  Status  Last Success   │ │
│ │  Manage Jenkins│ │ my-app-ci  [Green] 2 mins ago     │ │
│ │               │ │ test-db    [Red]   1 hour ago      │ │
│ │ ───────────── │ └──────────────────────────────────┘ │
│ │ Build Executor│ ┌──────────────────────────────────┐ │
│ │ [Master Idle] │ │  Console Output Logs             │ │
│ │ [Agent Busy ] │ │  + git fetch --tags              │ │
│ └───────────────┘ └──────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
"""
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "Manage Jenkins",
                    "text": "The administrative panel. Configure credentials, system settings, plugins, nodes, and global security."
                },
                {
                    "title": "Console Output",
                    "text": "Primary debugging workspace. Prints stdout logs of the pipeline in real-time."
                },
                {
                    "title": "Workspace View",
                    "text": "Allows manual inspection of checked-out repository files directly on the executor agent node."
                },
                {
                    "title": "Build Queue",
                    "text": "Displays pending jobs waiting to run. Highly useful for diagnosing resource bottlenecks."
                }
            ]
        }
    ]
)

# 5. jobs
add_note(
    "jobs", "05", "Jobs & Builds", "core_concepts",
    "Understanding the difference between Jobs and Builds, workspace dynamics, and tracking builds.",
    ["Jobs", "Builds", "Core Concepts"],
    "jobs builds workspace execution workspace items tracking config baseline",
    [
        {
            "type": "lead",
            "text": "In Jenkins, a <strong>Job</strong> (or Item) represents the configured automation logic, whereas a <strong>Build</strong> is a specific execution event of that Job."
        },
        {
            "type": "ascii",
            "label": "Job vs Build Lifecycle",
            "diagram": """
   ┌────────────────────────────────┐
   │         Job Definition         │  <--- Saved in config.xml
   └───────────────┬────────────────┘
                   │
         [ Trigger Event ]  <--- Webhook, Cron, Manual Run
                   │
                   ▼
   ┌────────────────────────────────┐
   │     Build Execution #1         │  <--- Injects dynamic variables
   │  ┌──────────────────────────┐  │       (WORKSPACE, BUILD_NUMBER)
   │  │ logs, artifacts, results │  │
   │  └──────────────────────────┘  │
   └────────────────────────────────┘
"""
        },
        {
            "type": "table",
            "headers": ["Job Type", "Best Practical Use Case", "Configuration Method"],
            "rows": [
                ["Freestyle", "Simple shell/batch executions, small scripts.", "Full GUI-based clicks."],
                ["Pipeline", "Complex, production multi-stage CI/CD pipelines.", "Jenkinsfile (Pipeline-as-Code)"],
                ["Multibranch Pipeline", "Dynamic environments with active branch strategies.", "Auto SCM scanning"],
                ["Folder", "Access control & project isolation in multi-tenant servers.", "Logical grouping GUI"]
            ]
        },
        {
            "type": "callout",
            "tone": "info",
            "html": "<strong>Log Rotation Tip:</strong> Under 'Options', always configure 'Discard Old Builds' to prevent your disk from filling up with hundreds of old build logs and artifacts."
        }
    ]
)

# 6. freestyle
add_note(
    "freestyle", "06", "Freestyle Projects", "core_concepts",
    "How to configure Freestyle jobs, SCM settings, build steps, and why they are deprecated for advanced projects.",
    ["Freestyle", "SCM", "Jobs"],
    "freestyle project GUI configure setup post build steps limitations",
    [
        {
            "type": "lead",
            "text": "Freestyle Projects are traditional Jenkins jobs managed completely through the web UI. While simple to set up for beginners, they scale poorly and cannot be version-controlled."
        },
        {
            "type": "ascii",
            "label": "Freestyle Job Components",
            "diagram": """
┌─────────────────────────────────────────────────────────┐
│                     Freestyle Job                       │
│  ┌─────────────────────────┐   ┌─────────────────────┐  │
│  │   SCM (Git Repository)  │ ─>│   Build Triggers    │  │
│  └─────────────────────────┘   └──────────┬──────────┘  │
│                                           ▼             │
│  ┌─────────────────────────┐   ┌─────────────────────┐  │
│  │   Post-Build Actions    │<──│ Build Steps (Bash)  │  │
│  └─────────────────────────┘   └─────────────────────┘  │
└─────────────────────────────────────────────────────────┘
"""
        },
        {
            "type": "flow",
            "steps": [
                {
                    "title": "Define Project Metadata",
                    "text": "Provide description and assign logical parameters (e.g. choice, string parameters)."
                },
                {
                    "title": "Connect Source Code",
                    "text": "Enable SCM Git, supply repository endpoint URL, select SSH or access token credentials."
                },
                {
                    "title": "Specify Build Steps",
                    "text": "Execute multiple sequential tasks (e.g. 'Execute Shell' for Unix, 'Execute Windows Batch')."
                },
                {
                    "title": "Post-Build Publishers",
                    "text": "Send warnings, archive target binaries, run downstream jobs, publish JUnit test reports."
                }
            ]
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "GUI Input Parameters",
                    "text": "Supports interactive user inputs on build triggers: String (custom version/commit), Choice (select branch/environment), and Boolean (force deploy toggle)."
                },
                {
                    "title": "Build Triggers",
                    "text": "Automates execution: 'Poll SCM' (scans Git changes), 'Build Periodically' (runs custom cron schedules e.g., 'H/15 * * * *'), or 'GitHub Hook' (webhook triggers)."
                },
                {
                    "title": "Upstream/Downstream",
                    "text": "Chains multiple jobs together. Triggering another project ('Build other projects') dynamically based on success, failure, or unstable status."
                },
                {
                    "title": "Post-Build Publishers",
                    "text": "Automates post-execution reports: archiving compiled binaries, sending Slack/Email updates, or registering JUnit XML test outcomes."
                }
            ]
        },
        {
            "type": "code",
            "title": "Production Freestyle Execute Shell Build Script Example",
            "code": """# --- Build Step: Execute Shell ---
# Clean workspace target directories
rm -rf dist/ build/
mkdir -p dist

# Install dependencies and compile assets
npm install
npm run build

# Run quality check suites
npm run lint
npm run test -- --passWithNoTests

# Package the release bundle
tar -czf dist/app-package.tar.gz public/ package.json node_modules/

# Print completion stats
echo "Freestyle build compiled successfully."
echo "Bundle size: $(du -sh dist/app-package.tar.gz | cut -f1)""",
            "explanation": [
                { "keyword": "rm -rf dist/", "detail": "Recursively deletes old build artifacts to guarantee clean compilation runs." },
                { "keyword": "npm install", "detail": "Downloads standard project dependencies based on the packages.json file definition." },
                { "keyword": "tar -czf", "detail": "Compresses folders recursively into a compact tarball archive ready for deployment." },
                { "keyword": "du -sh", "detail": "Calculates and prints disk usage information of target files in human-readable sizes." }
            ]
        },
        {
            "type": "callout",
            "tone": "warn",
            "html": "<strong>Why Freestyle is discouraged in production:</strong> Changes to Freestyle jobs are immediate and unversioned. There is no Git audit trail for who edited a configuration, and no code review process."
        }
    ]
)

# 7. pipeline-types
add_note(
    "pipeline-types", "07", "Pipeline Types", "core_concepts",
    "Detailed comparison between Declarative and Scripted pipelines, SCM execution models, and multibranch setups.",
    ["Pipeline", "Declarative", "Scripted"],
    "pipeline types declarative scripted structure syntax groovy comparisons",
    [
        {
            "type": "lead",
            "text": "Jenkins supports two pipeline programming syntaxes: <strong>Declarative</strong> (newer, simplified structure) and <strong>Scripted</strong> (original, direct procedural Groovy execution)."
        },
        {
            "type": "ascii",
            "label": "Structure Comparison",
            "diagram": """
┌───────────────────────────────┐ ┌───────────────────────────────┐
│      Declarative Syntax       │ │        Scripted Syntax        │
├───────────────────────────────┤ ├───────────────────────────────┤
│ pipeline {                    │ │ node('linux') {               │
│   agent any                   │ │   stage('Build') {            │
│   stages {                    │ │     sh 'make'                 │
│     stage('Build') {          │ │   }                           │
│       steps {                 │ │   if (isRelease) {            │
│         sh 'make'             │ │     stage('Deploy') { ... }   │
│       }                       │ │   }                           │
│     }                         │ │ }                               │
│   }                           │ │                               │
│ }                             │ │                               │
└───────────────────────────────┘ └───────────────────────────────┘
"""
        },
        {
            "type": "table",
            "headers": ["Feature", "Declarative Pipeline", "Scripted Pipeline"],
            "rows": [
                ["Syntax Style", "Structured, highly opinionated blocks.", "Procedural, direct Groovy script."],
                ["Complexity", "Easy for beginners; standard formatting.", "Requires Groovy and runtime knowledge."],
                ["Conditional Logic", "Enforced through declarative 'when {}' blocks.", "Standard native programmatic logic (if-else, loops)."],
                ["Error Recovery", "Predefined post execution blocks (success/failure).", "Try-catch blocks."]
            ]
        }
    ]
)

# 8. jenkinsfile
add_note(
    "jenkinsfile", "08", "Jenkinsfile", "core_concepts",
    "Guide to Pipeline-as-Code. File structures, placing Jenkinsfiles, SCM checkouts, and validation tools.",
    ["Jenkinsfile", "Pipeline", "Git"],
    "jenkinsfile pipeline as code scm validation placement project setup base",
    [
        {
            "type": "lead",
            "text": "A <strong>Jenkinsfile</strong> is a plain text configuration file stored directly inside your software source code repository. It standardizes builds and allows pipeline configurations to change automatically alongside the application code."
        },
        {
            "type": "ascii",
            "label": "Pipeline-as-Code Workflow",
            "diagram": """
 ┌──────────────┐
 │ Developer    │ ── (Pushes Jenkinsfile) ──> ┌────────────────┐
 └──────────────┘                             │ Git Repository │
                                              └───────+────────┘
                                                      │ (Triggers Build)
                                                      ▼
 ┌──────────────┐                             ┌────────────────┐
 │ Jenkins Agent│ <─── (Parses Jenkinsfile) ──│ Jenkins Master │
 └──────────────┘                             └────────────────┘
"""
        },
        {
            "type": "code",
            "title": "Minimal Production-Ready Jenkinsfile Template",
            "code": """pipeline {
    agent any

    options {
        timeout(time: 1, unit: 'HOURS')
        buildDiscarder(logRotator(numToKeepStr: '15'))
        disableConcurrentBuilds()
    }

    stages {
        stage('Initialize') {
            steps {
                echo "Initializing Build #${env.BUILD_NUMBER} on Node: ${env.NODE_NAME}"
            }
        }
        stage('Compile') {
            steps {
                sh 'echo "Running compilation steps..."'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}""",
            "explanation": [
                { "keyword": "pipeline", "detail": "The required entry block wrapper that marks this script as a Declarative Jenkins Pipeline." },
                { "keyword": "agent any", "detail": "Allocates any available worker execution agent node and directory to run this pipeline." },
                { "keyword": "options", "detail": "Enforces global pipeline settings like build timeouts, concurrency, and retention logic." },
                { "keyword": "stages", "detail": "The container block containing the sequential list of execution stages." },
                { "keyword": "post", "detail": "Triggers execution blocks based on overall pipeline outcomes like success, failure, or always." },
                { "keyword": "cleanWs()", "detail": "Built-in function utility to wipe the current workspace directory clean of compiled garbage after a run." }
            ]
        },
        {
            "type": "callout",
            "tone": "success",
            "html": "<strong>Best Practice:</strong> Always name this file exactly <code>Jenkinsfile</code> (no file extension, capital J) and keep it in the root folder of your project."
        }
    ]
)

# 9. declarative
add_note(
    "declarative", "09", "Declarative Pipeline", "pipelines",
    "Complete technical reference for Declarative pipelines. Parameters, parameters, options, environment variables, stages, steps, triggers.",
    ["Declarative", "Reference", "Syntax"],
    "declarative pipeline syntax reference triggers tools parameters options when post",
    [
        {
            "type": "lead",
            "text": "Declarative syntax offers a clean, robust, and highly structured framework to build secure, robust CI/CD systems."
        },
        {
            "type": "ascii",
            "label": "Declarative Pipeline Blueprint Map",
            "diagram": """
pipeline {
  agent [any | none | node label | docker container]
  environment { ... }
  options { ... }
  parameters { ... }
  stages {
    stage('Build') {
      steps { ... }
      post { ... }
    }
  }
  post { [always | success | failure | unstable] }
}
"""
        },
        {
            "type": "code",
            "title": "Enterprise-Grade Declarative Pipeline Reference Configuration",
            "code": """pipeline {
    agent { label 'production-runner' }

    tools {
        nodejs 'node-18'
        jdk 'java-17'
    }

    parameters {
        choice(name: 'DEPLOY_ENV', choices: ['development', 'staging', 'production'], description: 'Target Deploy Environment')
        string(name: 'VERSION_TAG', defaultValue: '1.0.0', description: 'Application Version override')
        booleanParam(name: 'FORCE_DEPLOY', defaultValue: false, description: 'Force deployment execution on failure')
    }

    environment {
        APP_NAME = "payment-gateway"
        DB_CREDENTIALS = credentials('prod-database-credentials')
        DEPLOY_PATH = "/var/www/apps/${env.APP_NAME}"
    }

    stages {
        stage('Pull SCM Source') {
            steps {
                checkout scm
            }
        }
        
        stage('Verify & Test') {
            steps {
                sh 'npm ci'
                sh 'npm run test -- --coverage'
            }
        }
        
        stage('SonarQube Security Scan') {
            steps {
                withSonarQubeEnv('SonarQube-Server') {
                    sh 'npm run sonar-scan'
                }
            }
        }
        
        stage('Package Container & Release') {
            when {
                expression {
                    return (currentBuild.result == 'SUCCESS' || params.FORCE_DEPLOY == true)
                }
            }
            steps {
                sh "docker build -t ${env.APP_NAME}:${params.VERSION_TAG} ."
                sh "docker tag ${env.APP_NAME}:${params.VERSION_TAG} ${env.APP_NAME}:latest"
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            slackSend(color: '#2eb886', message: "SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER} is live on ${params.DEPLOY_ENV}!")
        }
        failure {
            slackSend(color: '#a30200', message: "CRITICAL: ${env.JOB_NAME} #${env.BUILD_NUMBER} has failed during execution stages!")
        }
    }
}""",
            "explanation": [
                { "keyword": "tools", "detail": "Installs and registers predefined compiler configurations directly on the agent's active execution path." },
                { "keyword": "credentials('id')", "detail": "Retrieves encrypted passwords or credentials from the Jenkins storage vault cleanly without printing logs." },
                { "keyword": "currentBuild.result", "detail": "Native object tracking the current execution state of pipeline steps (e.g. SUCCESS, FAILURE)." },
                { "keyword": "withSonarQubeEnv", "detail": "A custom plugin environment wrapper injecting server configs and secrets dynamically to execute quality audits." }
            ]
        }
    ]
)

# 9-A. declarative-keywords
add_note(
    "declarative-keywords", "09-A", "Declarative Pipeline Keywords", "pipelines",
    "Complete breakdown of every keyword used in a Declarative Pipeline — pipeline, agent, stages, stage, steps, sh, echo, environment, parameters, when, post — plus how to define and use variables.",
    ["Declarative", "Keywords", "Variables"],
    "declarative pipeline keywords agent stages stage steps sh echo environment parameters when post variables env",
    [
        {
            "type": "lead",
            "text": "A Declarative Pipeline is built from a fixed set of structured keywords. Each keyword has a specific role and must appear in the correct place. Understanding each one is the foundation for writing real-world CI/CD pipelines."
        },
        {
            "type": "ascii",
            "label": "Declarative Pipeline Keyword Structure",
            "diagram": """
pipeline {                        ← root wrapper block
  agent any                       ← where to run
  environment { KEY = "value" }   ← global vars
  parameters { ... }             ← user inputs
  stages {                        ← list of stages
    stage('Name') {               ← one stage
      when { ... }                ← conditional
      steps {                     ← commands to run
        sh 'command'
        echo 'message'
      }
      post { ... }                ← stage-level outcomes
    }
  }
  post {                          ← pipeline-level outcomes
    success { ... }
    failure { ... }
    always  { ... }
  }
}
"""
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "pipeline { }",
                    "text": "The mandatory outermost block. Every Declarative Pipeline must start with 'pipeline {'. Nothing can live outside this block."
                },
                {
                    "title": "agent",
                    "text": "'agent any' runs on any available node. 'agent none' defers agent selection to individual stages. 'agent { label \"linux\" }' targets a specific labelled node."
                },
                {
                    "title": "stages { }",
                    "text": "A container that holds all your stage() blocks. There must be at least one stage inside stages. Stages run sequentially by default."
                },
                {
                    "title": "stage('Name') { }",
                    "text": "Represents one logical unit of work (e.g. Build, Test, Deploy). Each stage has a name shown in the pipeline visualization graph."
                },
                {
                    "title": "steps { }",
                    "text": "Lives inside a stage. Contains the actual commands: sh, echo, checkout, script, etc. All shell work and plugin steps go here."
                },
                {
                    "title": "post { }",
                    "text": "Defines what happens after stages complete. Blocks: always, success, failure, unstable, cleanup. Can be at pipeline level or inside a stage."
                }
            ]
        },
        {
            "type": "code",
            "title": "Step Commands Inside steps { } — Complete Reference",
            "code": """pipeline {
    agent any
    stages {
        stage('Step Commands Demo') {
            steps {
                // Print a message to console output
                echo 'Starting build process...'

                // Run a single shell command
                sh 'npm install'

                // Run multiple shell commands in one block
                sh '''
                    npm run build
                    npm run lint
                    npm test
                '''

                // Checkout source code from SCM (Git)
                checkout scm

                // Read a file into a variable
                def content = readFile('config.json')

                // Write content to a file
                writeFile file: 'output.txt', text: 'Build complete'

                // Sleep / wait for N seconds
                sleep 5

                // Run a script block for Groovy logic inside steps
                script {
                    def result = sh(script: 'cat version.txt', returnStdout: true).trim()
                    echo "App version: ${result}"
                }
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "echo", "detail": "Prints a plain text string to the Jenkins console output log." },
                { "keyword": "sh 'cmd'", "detail": "Runs a single shell command on a Unix/Linux agent. Use triple quotes (sh ''') for multi-line blocks." },
                { "keyword": "checkout scm", "detail": "Pulls source code from the SCM configured in the job (e.g. GitHub). Shorthand for a full git checkout step." },
                { "keyword": "readFile / writeFile", "detail": "Built-in pipeline steps to read from and write to files in the workspace directory." },
                { "keyword": "script { }", "detail": "Escape hatch inside steps that allows free-form Groovy scripting — useful for conditional logic and variable capture." },
                { "keyword": "returnStdout: true", "detail": "When used with sh(), captures the shell command output as a return value instead of just printing it." }
            ]
        },
        {
            "type": "code",
            "title": "environment { } — Defining and Using Variables",
            "code": """pipeline {
    agent any

    environment {
        // Static string variable — available throughout the pipeline
        APP_NAME    = "my-web-app"
        DEPLOY_ENV  = "production"

        // Use a shell command to set a variable at runtime
        GIT_COMMIT_SHORT = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()

        // Reference a Jenkins credential stored securely in Credentials Manager
        DOCKER_PASS = credentials('docker-hub-password')
    }

    stages {
        stage('Use Variables') {
            steps {
                // Access environment variables using ${env.VAR_NAME}
                echo "App: ${env.APP_NAME}"
                echo "Env: ${env.DEPLOY_ENV}"
                echo "Git SHA: ${env.GIT_COMMIT_SHORT}"

                // Built-in Jenkins environment variables
                echo "Build #:    ${env.BUILD_NUMBER}"
                echo "Job Name:   ${env.JOB_NAME}"
                echo "Workspace:  ${env.WORKSPACE}"
                echo "Node Name:  ${env.NODE_NAME}"
                echo "Build URL:  ${env.BUILD_URL}"

                // Use vars inside sh commands with double-quotes
                sh "docker build -t ${env.APP_NAME}:${env.BUILD_NUMBER} ."
            }
        }

        stage('Stage-level Variable') {
            environment {
                // Stage-scoped variable — only available in this stage
                STAGE_SECRET = credentials('stage-api-key')
            }
            steps {
                echo "Stage secret is masked in logs: ${env.STAGE_SECRET}"
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "environment { }", "detail": "Defines key=value variables scoped to the whole pipeline. Also supports credentials() to inject secrets safely." },
                { "keyword": "env.VAR_NAME", "detail": "The standard way to access any environment variable inside a Groovy string (${env.VAR_NAME})." },
                { "keyword": "credentials('id')", "detail": "Injects a Jenkins-stored secret (password, token, SSH key) into a variable without exposing it in logs." },
                { "keyword": "env.BUILD_NUMBER", "detail": "Built-in variable: sequential number of the current build run (e.g. 42)." },
                { "keyword": "env.WORKSPACE", "detail": "Built-in variable: absolute path to the current job's workspace directory on the agent." },
                { "keyword": "env.BUILD_URL", "detail": "Built-in variable: full HTTP URL link to the current build's console/status page in Jenkins." }
            ]
        },
        {
            "type": "code",
            "title": "parameters { } — User Input at Build Time",
            "code": """pipeline {
    agent any

    parameters {
        // Text input — user types a string value
        string(name: 'VERSION', defaultValue: '1.0.0', description: 'Release version to deploy')

        // Dropdown selection
        choice(name: 'ENVIRONMENT', choices: ['dev', 'staging', 'production'], description: 'Target environment')

        // Boolean toggle — true/false checkbox
        booleanParam(name: 'RUN_TESTS', defaultValue: true, description: 'Run test suite before deploy?')

        // Password — hidden in the UI
        password(name: 'API_SECRET', defaultValue: '', description: 'API secret key')
    }

    stages {
        stage('Deploy') {
            steps {
                // Access parameters via params.NAME
                echo "Deploying version: ${params.VERSION}"
                echo "Target env:        ${params.ENVIRONMENT}"

                script {
                    if (params.RUN_TESTS) {
                        sh 'npm test'
                    }
                    sh "deploy.sh --env ${params.ENVIRONMENT} --version ${params.VERSION}"
                }
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "parameters { }", "detail": "Declares user-facing input fields shown on 'Build with Parameters' page before the build starts." },
                { "keyword": "string()", "detail": "Creates a free-text input field. Args: name, defaultValue, description." },
                { "keyword": "choice()", "detail": "Creates a dropdown select. The 'choices' array defines available options; first item is the default." },
                { "keyword": "booleanParam()", "detail": "Creates a checkbox. Returns true/false, useful for toggling optional pipeline stages." },
                { "keyword": "params.NAME", "detail": "How you read a parameter value inside the pipeline. Note: use params., not env., for parameters." }
            ]
        },
        {
            "type": "code",
            "title": "when { } — Conditional Stage Execution",
            "code": """pipeline {
    agent any
    parameters {
        choice(name: 'BRANCH', choices: ['main', 'dev', 'feature'], description: 'Branch to build')
    }
    stages {
        stage('Build') {
            steps { sh 'npm run build' }
        }

        // Only runs when building the main branch
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to production...'
            }
        }

        // Only runs when a parameter equals a specific value
        stage('Integration Tests') {
            when {
                expression { params.BRANCH == 'main' }
            }
            steps {
                sh 'npm run test:integration'
            }
        }

        // Combines multiple conditions (all must be true)
        stage('Release') {
            when {
                allOf {
                    branch 'main'
                    expression { params.BRANCH != 'feature' }
                }
            }
            steps {
                sh './scripts/release.sh'
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "when { }", "detail": "Conditional block inside a stage. The stage only runs if the condition is met." },
                { "keyword": "branch 'main'", "detail": "Built-in condition that checks if the current Git branch matches the given name." },
                { "keyword": "expression { }", "detail": "Evaluates any Groovy boolean expression. The stage runs only if it returns true." },
                { "keyword": "allOf { }", "detail": "Logical AND — all inner conditions must be true for the stage to execute." },
                { "keyword": "anyOf { }", "detail": "Logical OR — the stage runs if at least one inner condition is true." }
            ]
        },
        {
            "type": "callout",
            "tone": "tip",
            "html": "<strong>Variable scoping rules:</strong> Variables defined in <code>environment { }</code> are accessible via <code>env.NAME</code>. Variables defined with <code>def</code> inside a <code>script { }</code> block are local to that block only. Parameters are accessed via <code>params.NAME</code>, never <code>env.NAME</code>."
        }
    ]
)

# 10. scripted
add_note(
    "scripted", "10", "Scripted Pipeline", "pipelines",
    "Deep dive into Scripted pipelines, procedural Groovy scripts, loops, exception handling, and custom code integration.",
    ["Scripted", "Groovy", "Advanced"],
    "scripted pipeline syntax groovy node scripting loops try catch exception dynamic",
    [
        {
            "type": "lead",
            "text": "Scripted Pipelines are built directly on top of the Groovy programming engine, offering maximum execution flexibility and direct programmatic logic control."
        },
        {
            "type": "ascii",
            "label": "Scripted Pipeline Logic flow",
            "diagram": """
  ┌────────────────────────────────────┐
  │         node('worker-node')        │  <--- Allocate build workspace
  └─────────────────┬──────────────────┘
                    ▼
  ┌────────────────────────────────────┐
  │        stage('Environment')        │  <--- Standard code execution
  └─────────────────┬──────────────────┘
                    ▼
                    ├── [isRelease == true] ──> [stage('Deploy')]
                    └── [isRelease == false] ──> [Skip deployment stage]
"""
        },
        {
            "type": "code",
            "title": "Advanced Scripted Pipeline with Complex Controls",
            "code": """node('linux') {
    def appName = 'analytics-service'
    def environments = ['staging', 'production']

    try {
        stage('Checkout Source') {
            checkout scm
        }

        stage('Parallel Compile') {
            parallel(
                "build-amd64": { sh "echo 'Building x86 architecture binary'" },
                "build-arm64": { sh "echo 'Building arm64 architecture binary'" }
            )
        }

        stage('Multi-Environment Deployment') {
            for (envName in environments) {
                if (envName == 'production') {
                    // Manual Approval checkpoint via Groovy step
                    input message: "Authorize release to Production?", ok: "Release"
                }
                echo "Deploying ${appName} to server pool: ${envName}"
            }
        }

    } catch (Exception err) {
        currentBuild.result = 'FAILED'
        echo "Pipeline failed with error: ${err.toString()}"
        throw err
    } finally {
        stage('Post-cleanup') {
            cleanWs()
        }
    }
}""",
            "explanation": [
                { "keyword": "node('linux')", "detail": "The essential scripted block allocating an execution node and workspace matching target label." },
                { "keyword": "def", "detail": "Standard Groovy keyword to declare dynamic local variables." },
                { "keyword": "parallel", "detail": "Built-in scripted step running list of asynchronous block closures concurrently." },
                { "keyword": "try-catch-finally", "detail": "Standard programming exception pattern to execute custom error behaviors and clean workspace states." },
                { "keyword": "input", "detail": "Halts pipeline execution waiting for a physical user approval prompt." }
            ]
        }
    ]
)

# 11. stages
add_note(
    "stages", "11", "Stages & Steps", "pipelines",
    "Comprehensive directory of common pipeline steps including directory manipulation, environment management, credentials wrapping, and script execution.",
    ["Stages", "Steps", "Commands"],
    "stages steps common commands shell credentials withcredentials stash unstash env variables",
    [
        {
            "type": "lead",
            "text": "Steps are the fundamental building blocks of execution inside a stage. Jenkins provides native steps to manage workspace files, environments, stashes, and passwords."
        },
        {
            "type": "ascii",
            "label": "Workspace Stashing Logic",
            "diagram": """
   ┌───────────────────────┐
   │     Build Executor    │ ─── (stash) ───> [ Jenkins Controller Storage ]
   │  (Compiles binaries)  │                         │
   └───────────────────────┘                         │
                                                 (unstash)
   ┌───────────────────────┐                         │
   │    Deploy Executor    │ <───────────────────────┘
   │  (Runs deploy steps)  │
   └───────────────────────┘
"""
        },
        {
            "type": "code",
            "title": "Directory Utilities, Stashing, and Dynamic Scripting",
            "code": """pipeline {
    agent none // Explicitly allocate workspace per stage
    
    stages {
        stage('Build Artifact') {
            agent { label 'build-agent' }
            steps {
                // Ensure a clean target directory
                dir('workspace-build') {
                    sh 'mkdir -p target && echo "Compiled Binary Content" > target/app.jar'
                }
                // Save target folder to Jenkins storage without permanent archiving
                stash name: 'compiled-jar', includes: 'workspace-build/target/**'
            }
        }
        
        stage('Deploy Artifact') {
            agent { label 'deploy-agent' }
            steps {
                // Retrieve files from Jenkins storage into current workspace
                unstash 'compiled-jar'
                sh 'ls -R workspace-build/target/'
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "agent none", "detail": "Prevents allocating a global node directory. Enforces custom nodes inside individual stage directives." },
                { "keyword": "dir('workspace-build')", "detail": "Changes the file context execution directory path to a specific folder within the workspace." },
                { "keyword": "stash", "detail": "Saves target workspace files into controller storage under a specific reference key." },
                { "keyword": "unstash", "detail": "Retrieves stashed file pools back into the active agent workspace. Great for heterogeneous multi-node deploys." }
            ]
        },
        {
            "type": "table",
            "headers": ["Built-in Step Command", "Primary Action", "Usage Context"],
            "rows": [
                ["sh 'command'", "Runs Unix shell command. Failures abort pipeline.", "Build, compilation, execution."],
                ["dir('path') { ... }", "Switches execution directory scope.", "Executing tasks in sub-folders."],
                ["stash / unstash", "Saves temporary workspace binaries across stages.", "Offloading deployment from build agent."],
                ["archiveArtifacts", "Saves permanent post-build binaries in controller.", "Publishing released binaries permanently."]
            ]
        }
    ]
)

# 12. agents
add_note(
    "agents", "12", "Agents & Nodes", "pipelines",
    "Detailed study of Master-Agent architecture, configuring nodes via SSH/JNLP, and running pipelines inside Docker containers.",
    ["Agents", "Nodes", "Architectures"],
    "agents nodes controller master worker distributed dynamic docker agent jnlp ssh labels",
    [
        {
            "type": "lead",
            "text": "Jenkins distributes task execution from a central Controller node out to secondary worker Agents, scaling operational capacity and preventing execution overload on the host platform."
        },
        {
            "type": "ascii",
            "label": "Master-Agent Communication Architecture",
            "diagram": """
┌───────────────────────────────────────────────────────┐
│                 Jenkins Controller                    │
│    (Schedules builds, processes user logins, UI)      │
└────────┬──────────────────────┬───────────────────────┘
         │ (SSH Port 22)        │ (JNLP Port 50000)
         ▼                      ▼
┌─────────────────┐    ┌─────────────────┐
│ Linux Agent 01  │    │ Windows Agent   │
│ (System Node)   │    │ (Native Runner) │
└─────────────────┘    └─────────────────┘
"""
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "Controller Node",
                    "text": "Acts as the administrative center. Scheduling, parsing pipelines, UI, and log storage."
                },
                {
                    "title": "Static Permanent Agent",
                    "text": "Dedicated VM/Hardware running java agent process continuously."
                },
                {
                    "title": "Dynamic Docker Agent",
                    "text": "Launches a dynamic container at the start of a stage and destroys it immediately on completion."
                },
                {
                    "title": "Cloud Scale-Out Agents",
                    "text": "Auto-scaling agents triggered on Kubernetes or AWS ECS during high job queues."
                }
            ]
        },
        {
            "type": "code",
            "title": "Running Stages inside Isolated Docker Containers",
            "code": """pipeline {
    agent none // Do not bind a root executor workspace

    stages {
        stage('Frontend Compilation') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-v /tmp:/tmp-cache'
                }
            }
            steps {
                sh 'node -v'
                sh 'npm install && npm run build'
            }
        }
        
        stage('Java Backend Compilation') {
            agent {
                docker {
                    image 'maven:3.9-eclipse-temurin-17'
                }
            }
            steps {
                sh 'mvn -version'
                sh 'mvn clean package'
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "docker", "detail": "Declares that the agent must be instantiated inside an isolated Docker container." },
                { "keyword": "image", "detail": "The public or private registry image reference (e.g. node:18-alpine) containing compile frameworks." },
                { "keyword": "args", "detail": "Standard CLI parameters passed during container startup, such as directory mappings (`-v`)." }
            ]
        },
        {
            "type": "code",
            "title": "Configuring a Remote Jenkins SSH Worker Node",
            "code": """# =================================================================
# STEP 1: On the Jenkins CONTROLLER Node
# =================================================================
# Generate dynamic high-security SSH key pair for agent authorization
ssh-keygen -t ed25519 -f ~/.ssh/jenkins_agent_key -N ""

# Print the public key string to manually append to target agent
cat ~/.ssh/jenkins_agent_key.pub

# =================================================================
# STEP 2: On the Remote Jenkins AGENT Worker Node
# =================================================================
# Create a dedicated system user group and user for execution
sudo groupadd -g 10000 jenkins
sudo useradd -u 10000 -g jenkins -m -d /var/jenkins -s /bin/bash jenkins

# Provision target SSH directories with secure permissions
sudo mkdir -p /var/jenkins/.ssh
sudo chmod 700 /var/jenkins/.ssh

# Authorize the controller key for non-interactive connections
echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI..." | sudo tee -a /var/jenkins/.ssh/authorized_keys
sudo chmod 600 /var/jenkins/.ssh/authorized_keys
sudo chown -R jenkins:jenkins /var/jenkins

# Install Java JDK (Must match controller system JRE version)
sudo apt update && sudo apt install openjdk-17-jdk -y""",
            "explanation": [
                { "keyword": "ssh-keygen -t ed25519", "detail": "Generates a highly secure Ed25519 dynamic asymmetric cryptographic SSH key pair." },
                { "keyword": "/var/jenkins", "detail": "The designated system user workspace directory on the worker agent node." },
                { "keyword": "authorized_keys", "detail": "SSH authorization file that stores public keys permitted to connect natively without password requests." },
                { "keyword": "openjdk-17-jdk", "detail": "Java Development Kit. Required so the Agent slave JAR processes execute compiler requests locally." }
            ]
        },
        {
            "type": "callout",
            "tone": "warn",
            "html": "<strong>Controller Executor Rule:</strong> Always configure the number of executors on your main Controller node to <strong>0</strong>. This protects the master node from running application builds, keeping it responsive for users."
        }
    ]
)

# 13. parallel
add_note(
    "parallel", "13", "Parallel Execution", "pipelines",
    "Running multi-branch execution, dynamic tasks in parallel, and handling error propagation.",
    ["Parallel", "Concurrency", "Speed"],
    "parallel execution concurrent runtime speed stages failfast branches multi platform",
    [
        {
            "type": "lead",
            "text": "Running pipeline stages concurrently reduces total build times and accelerates software feedback loops."
        },
        {
            "type": "ascii",
            "label": "Sequential vs Parallel Execution",
            "diagram": """
Sequential Execution (Time: 30m):
[Checkout] ──> [Build] ──> [Unit Test: 10m] ──> [Integration Test: 15m] ──> [Deploy: 5m]

Parallel Execution (Time: 18m):
                           ┌───> [Unit Test: 10m] ────────┐
[Checkout] ──> [Build] ───>├───> [Integration Test: 15m] ─┼───> [Deploy: 5m]
                           └───> [Static Lint: 2m] ───────┘
"""
        },
        {
            "type": "code",
            "title": "Parallel Pipeline with Fail-Fast Configuration",
            "code": """pipeline {
    agent any

    stages {
        stage('Compile') {
            steps {
                sh 'echo "Compiling system binaries..."'
            }
        }

        stage('Comprehensive Auditing') {
            // Terminate other parallel jobs immediately if one of them fails
            failFast true
            
            parallel {
                stage('Execution Suite A') {
                    steps {
                        sh 'echo "Running suite A tests..."'
                    }
                }
                stage('Execution Suite B') {
                    steps {
                        sh 'echo "Running suite B tests..."'
                    }
                }
                stage('Static SonarQube Scan') {
                    steps {
                        sh 'echo "Analyzing code quality metrics..."'
                    }
                }
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "failFast true", "detail": "Aborts all other parallel sibling execution stages immediately if one of them encounters a failure, saving agent resources." },
                { "keyword": "parallel", "detail": "Declares that the wrapped stages within the block run simultaneously in parallel executors." }
            ]
        }
    ]
)

# 14. git
add_note(
    "git", "14", "Git & GitHub Integration", "integrations",
    "Detailed guide on Git integrations, setting up SCM checkouts, branch strategies, and SSH configuration.",
    ["Git", "GitHub", "SCM"],
    "git github integration scm ssh keys credentials clone branch fetch strategy",
    [
        {
            "type": "lead",
            "text": "Connecting Jenkins to Git/GitHub allows developers to automate builds on code delivery. Authentication can be established securely using HTTPS tokens or SSH keys."
        },
        {
            "type": "ascii",
            "label": "Git Secure Connection Methods",
            "diagram": """
┌─────────────────────────────────┐
│         Jenkins Server          │
│  ┌──────────────────────────┐   │
│  │ Credentials Provider     │   │
│  │   - SSH Private Key      │   │
│  │   - GitHub PAT (HTTPS)   │   │
│  └──────────────────────────┘   │
└───────────────┬─────────────────┘
                │ (Git TLS handshake)
                ▼
┌─────────────────────────────────┐
│     GitHub Secure Server        │
│  ┌──────────────────────────┐   │
│  │ Repo Access / Permissions│   │
│  └──────────────────────────┘   │
└─────────────────────────────────┘
"""
        },
        {
            "type": "code",
            "title": "Advanced SCM Checkout with Sub-directory Isolation",
            "code": """pipeline {
    agent any
    
    stages {
        stage('Checkout Specific Repository Branch') {
            steps {
                // Perform complex checkout configuration instead of standard checkout scm
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/release-v2']],
                    userRemoteConfigs: [[
                        url: 'git@github.com:myprofile/analytics-engine.git',
                        credentialsId: 'jenkins-ssh-private-key'
                    ]],
                    extensions: [
                        // Clone source code into a subfolder of the workspace
                        [$class: 'RelativeTargetDirectory', relativeTargetDir: 'source-code'],
                        // Fetch submodules recursively
                        [$class: 'SubmoduleOption', recursiveSubmodules: true]
                    ]
                ])
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "GitSCM", "detail": "The underlying Java class used to initialize robust Git repository connections." },
                { "keyword": "credentialsId", "detail": "Standard token reference indicating the credential entry containing target SSH keys or credentials." },
                { "keyword": "RelativeTargetDirectory", "detail": "Forces SCM checkout clone directly inside a custom nested sub-folder rather than base root workspace." },
                { "keyword": "SubmoduleOption", "detail": "Plugin configurations to resolve git repositories nested as submodules automatically." }
            ]
        }
    ]
)

# 15. webhooks
add_note(
    "webhooks", "15", "Webhooks & Triggers", "integrations",
    "How to configure webhooks, poll SCM, cron triggers, and secure webhook endpoint authentications.",
    ["Webhooks", "Triggers", "GitHub"],
    "webhooks triggers webhook github event poll scm cron triggers scheduling automated",
    [
        {
            "type": "lead",
            "text": "Triggers remove manual effort from CI/CD pipelines. Webhooks push notifications from GitHub to Jenkins instantly, while Cron configurations run builds on scheduled intervals."
        },
        {
            "type": "ascii",
            "label": "Git Push Event Webhook Loop",
            "diagram": """
┌───────────┐         (Push Commit)        ┌──────────────┐
│ Developer │ ───────────────────────────> │ Git Server   │
└───────────┘                              └───────┬──────┘
                                                   │
                                         (HTTP POST /webhook)
                                                   │
                                                   ▼
┌───────────┐       (Triggers Build)       ┌──────────────┐
│ Build Run │ <─────────────────────────── │   Jenkins    │
└───────────┘                              └──────────────┘
"""
        },
        {
            "type": "flow",
            "steps": [
                {
                    "title": "Install System Plugins",
                    "text": "Go to Manage Jenkins -> Plugins. Add the 'GitHub Integration' plugin."
                },
                {
                    "title": "Configure Job Triggers",
                    "text": "Inside your pipeline configuration UI, check 'GitHub hook trigger for GITScm polling'."
                },
                {
                    "title": "Register Webhook inside GitHub",
                    "text": "Open repository settings in GitHub. Add a Webhook pointing to: http://<jenkins-url>:8080/github-webhook/"
                },
                {
                    "title": "Verify Payload Delivery",
                    "text": "Submit a code commit. Confirm GitHub successfully posts the event and triggers Jenkins."
                }
            ]
        },
        {
            "type": "callout",
            "tone": "info",
            "html": "<strong>Webhook vs Polling:</strong> Webhooks are instant and put zero resource overhead on your Jenkins server. Polling scans the repository at scheduled intervals (e.g. every 5 minutes), generating unnecessary SCM traffic."
        }
    ]
)

# 16. docker
add_note(
    "docker", "16", "Docker Integration", "integrations",
    "Integrating Docker containers with pipelines. Packaging, vulnerability scanning, and managing Docker sockets.",
    ["Docker", "Containers", "DevOps"],
    "docker integration container build push scan docker socket registry trivy socket daemon",
    [
        {
            "type": "lead",
            "text": "Combining Jenkins with Docker guarantees that your application builds in a predictable, isolated container ecosystem."
        },
        {
            "type": "ascii",
            "label": "Docker Socket Mounting Architecture",
            "diagram": """
┌────────────────────────────────────────────────────────┐
│                      Host Server                       │
│  ┌───────────────────────┐   ┌──────────────────────┐  │
│  │    Jenkins Container  │   │     Docker Daemon    │  │
│  │                       │   │                      │  │
│  │   - docker command    │   │                      │  │
│  │   - mounted socket:   ├──>│                      │  │
│  │   /var/run/docker.sock│   │  /var/run/docker.sock│  │
│  └───────────────────────┘   └──────────────────────┘  │
└────────────────────────────────────────────────────────┘
"""
        },
        {
            "type": "code",
            "title": "Production Pipeline: Build, Trivy Security Scan, and Push",
            "code": """pipeline {
    agent any
    
    environment {
        IMAGE_NAME = "docker.io/myprofile/payment-api"
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        FULL_IMAGE = "${env.IMAGE_NAME}:${env.IMAGE_TAG}"
    }
    
    stages {
        stage('Lint & Compile') {
            steps {
                sh 'echo "Performing code analysis..."'
            }
        }
        
        stage('Docker Packaging') {
            steps {
                sh "docker build -t ${env.FULL_IMAGE} ."
            }
        }
        
        stage('Trivy Security Audit') {
            steps {
                // Exit build if image contains HIGH or CRITICAL level vulnerabilities
                sh "trivy image --severity HIGH,CRITICAL --exit-code 1 ${env.FULL_IMAGE}"
            }
        }
        
        stage('Publish Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-registry-creds',
                    usernameVariable: 'REGISTRY_USER',
                    passwordVariable: 'REGISTRY_PASS'
                )]) {
                    sh "echo ${env.REGISTRY_PASS} | docker login -u ${env.REGISTRY_USER} --password-stdin"
                    sh "docker push ${env.FULL_IMAGE}"
                    sh "docker logout"
                }
            }
        }
    }
    
    post {
        always {
            // Clean local build images to avoid disk bloat
            sh "docker rmi ${env.FULL_IMAGE} || true"
        }
    }
}""",
            "explanation": [
                { "keyword": "trivy image", "detail": "Executes vulnerability scan on the built Docker image before pushing." },
                { "keyword": "--exit-code 1", "detail": "Forces the Trivy execution command to crash the build if matching severity limits are caught." },
                { "keyword": "docker login --password-stdin", "detail": "Feeds password from secure environmental inputs safely without leaking logs." },
                { "keyword": "docker rmi", "detail": "Forces deletion of local built docker images after completion, freeing disk space." }
            ]
        },
        {
            "type": "callout",
            "tone": "warn",
            "html": "<strong>Permission Denied Fix:</strong> If Jenkins fails to communicate with your Docker daemon, run: <code>sudo usermod -aG docker jenkins && sudo systemctl restart jenkins</code> on your agent node to grant permission."
        }
    ]
)

# 17. credentials
add_note(
    "credentials", "17", "Credentials & Secrets", "integrations",
    "Managing passwords, API tokens, SSH keys, and using withCredentials wrapper safely.",
    ["Credentials", "Security", "Secrets"],
    "credentials secrets security passwords api tokens keys wrapper secure store masking",
    [
        {
            "type": "lead",
            "text": "Jenkins features a secure credentials storage vault that masks sensitive credentials in console logs and prevents secrets from leaking."
        },
        {
            "type": "ascii",
            "label": "Credentials Masking Mechanism",
            "diagram": """
 ┌──────────────────────┐
 │   Credentials Store  │ ---> [ Secret token: "my-super-secret-key" ]
 └──────────┬───────────┘
            │ (Injected via withCredentials)
            ▼
 ┌──────────────────────┐
 │   Pipeline Engine    │ ---> [ Console logs: "Authenticating with *****" ]
 └──────────────────────┘
"""
        },
        {
            "type": "code",
            "title": "Using Multiple Credential Types Securely",
            "code": """pipeline {
    agent any
    
    stages {
        stage('Deploy with SSH Key') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'prod-target-ssh',
                        keyFileVariable: 'PRIVATE_KEY_PATH',
                        usernameVariable: 'SSH_USER_NAME'
                    ),
                    string(
                        credentialsId: 'external-api-token',
                        variable: 'API_TOKEN'
                    )
                ]) {
                    sh \"\"\"
                        echo "Executing secure API connection..."
                        curl -H "Authorization: Bearer \$API_TOKEN" https://api.prod.com/health
                        
                        ssh -i \$PRIVATE_KEY_PATH -o StrictHostKeyChecking=no \$SSH_USER_NAME@prod.server.com "docker restart app"
                    \"\"\"
                }
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "withCredentials", "detail": "The built-in block wrapper allocating secure bindings and automatic log masking." },
                { "keyword": "sshUserPrivateKey", "detail": "Binds username and creates a secure temp file path reference holding private SSH credentials." },
                { "keyword": "StrictHostKeyChecking=no", "detail": "Prevents SSH connections from prompting or failing due to unverified new server hosts." },
                { "keyword": "API_TOKEN", "detail": "Variable holding secure raw API tokens mapped directly from credential store settings." }
            ]
        },
        {
            "type": "callout",
            "tone": "warn",
            "html": "<strong>Security best practice:</strong> Never use <code>echo</code> to print variable names containing credentials. Jenkins will attempt to mask them, but complex formatting or base64 encoding can bypass standard log filters."
        }
    ]
)

# 17-A. rbac_user_management
add_note(
    "rbac_user_management", "17-A", "Role-Based Access Control (RBAC)", "integrations",
    "Comprehensive guide to configure Role-based Authorization Strategy, define Global & Project roles, and assign user policies.",
    ["Security", "RBAC", "User Management"],
    "rbac user management role based access control security authorization strategy authorization global project roles pattern matching",
    [
        {
            "type": "lead",
            "text": "Role-Based Access Control (RBAC) in Jenkins provides a secure, granular way to configure authorization permissions using the <strong>Role-based Authorization Strategy</strong> plugin."
        },
        {
            "type": "ascii",
            "label": "Jenkins Authorization Map",
            "diagram": """
┌─────────────────────────────────────────────────────────────────┐
│                    Jenkins Authorization Map                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│             ┌──────────────┐         ┌──────────────────┐       │
│             │ Active Users │ ──────> │   Assigned Roles │       │
│             └──────────────┘         └────────┬─────────┘       │
│                                               │                 │
│                      ┌────────────────────────┴─────────┐       │
│                      ▼                                  ▼       │
│           ┌────────────────────┐             ┌────────────────┐ │
│           │    Global Roles    │             │  Project Roles │ │
│           │ - Admin: Full      │             │ - Dev: dev-*   │ │
│           │ - ReadOnly: Read   │             │ - QA: qa-*     │ │
│           └────────────────────┘             └────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
"""
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "Global Roles",
                    "text": "System-wide roles like 'admin' (full access) or 'readonly' (overall read/view permissions across all pages)."
                },
                {
                    "title": "Item Roles (Project)",
                    "text": "Granular roles matching specific projects using regular expression filters like 'dev-.*' or 'qa-.*' to limit job actions."
                },
                {
                    "title": "Agent Roles",
                    "text": "Restricts execution rights, slave node administration, and agent triggering behaviors to specific operators."
                },
                {
                    "title": "User Mappings",
                    "text": "Assigns local Jenkins accounts or external corporate LDAP/Active Directory group profiles to configured roles."
                }
            ]
        },
        {
            "type": "code",
            "title": "Programmatic Groovy Strategy for Jenkins RBAC",
            "code": """// Jenkins Role-Based Access Control Setup Logic
class JenkinsRBACConfiguration {
    static void configureStrategy() {
        // 1. Enable Role-Based Authorization Strategy programmatically
        def authStrategy = new com.michelin.cio.hudson.plugins.rolestrategy.RoleBasedAuthorizationStrategy()
        jenkins.model.Jenkins.instance.setAuthorizationStrategy(authStrategy)
        
        // 2. Define Global Roles (Overall Permissions)
        authStrategy.addRole("globalRoles", new Role("admin", "Overall/Administer"))
        authStrategy.addRole("globalRoles", new Role("readonly", "Overall/Read, Job/Read"))
        
        // 3. Define Project-Scoped (Item) Roles with regex matching pattern
        authStrategy.addRole("projectRoles", new Role("developer", "Job/Read, Job/Build, Job/Cancel", "dev-.*"))
        authStrategy.addRole("projectRoles", new Role("tester", "Job/Read, Job/Discover", "qa-.*"))
        
        // 4. Map active users to their respective roles
        authStrategy.assignRole("globalRoles", "admin", "admin_user")
        authStrategy.assignRole("projectRoles", "developer", "john_dev")
    }
}""",
            "explanation": [
                { "keyword": "RoleBasedAuthorizationStrategy", "detail": "The core Java class provided by the RBAC plugin to replace default security systems." },
                { "keyword": "globalRoles", "detail": "Role category that handles server-wide actions like plugin management, configuration, and audit logs." },
                { "keyword": "dev-.*", "detail": "A regex pattern matching any job name that starts with 'dev-' to apply developers permissions." },
                { "keyword": "assignRole", "detail": "Associates a defined user account or security group with a specific global or project role." }
            ]
        },
        {
            "type": "callout",
            "tone": "info",
            "html": "<strong>GUI Configuration Tip:</strong> Always make sure to define at least one <code>admin</code> global role containing the <code>Overall/Administer</code> permission before enabling the Role-Based Strategy globally, otherwise you may lock yourself out of the system."
        }
    ]
)

# 18. plugins
add_note(
    "plugins", "18", "Essential Plugins", "integrations",
    "Plugin architecture, managing installations, must-have plugins for DevOps integration, and troubleshooting failures.",
    ["Plugins", "Configuration", "Extensions"],
    "plugins manage installation lifecycle extensions modules ecosystem list restart failures",
    [
        {
            "type": "lead",
            "text": "Plugins extend the core capabilities of Jenkins, allowing teams to integrate external cloud platforms, messaging services, and metrics collection tools easily."
        },
        {
            "type": "ascii",
            "label": "Core Extensibility Architecture",
            "diagram": """
 ┌───────────────────────────────────────────────┐
 │               Jenkins Core Engine             │
 └───────────────────────┬───────────────────────┘
                         │ (Plugin API Interface)
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
 ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
 │ Git Plugin  │  │Slack Plugin │  │Sonar Plugin │
 └─────────────┘  └─────────────┘  └─────────────┘
"""
        },
        {
            "type": "table",
            "headers": ["Must-Have Plugin", "Purpose", "Production Value"],
            "rows": [
                ["Pipeline", "Enables Declarative and Scripted Jenkinsfiles.", "Essential"],
                ["Git / GitHub", "Allows cloning repositories and receiving webhook triggers.", "Essential"],
                ["Docker Pipeline", "Provides native DSL to build, scan, and run Docker containers.", "High"],
                ["Slack Notification", "Post real-time build results into channels.", "Medium"],
                ["SonarQube Scanner", "Enforces quality gates and security audits.", "High"]
            ]
        },
        {
            "type": "callout",
            "tone": "warn",
            "html": "<strong>Plugin Dependency Bloat:</strong> Limit the number of installed plugins. Too many active plugins consume system memory, slow down boot times, and increase the server's security attack surface."
        }
    ]
)

# 18-A. devsecops_pipeline
add_note(
    "devsecops_pipeline", "18-A", "DevSecOps Security Scanning", "integrations",
    "Comprehensive guide to integrate SonarQube SAST, OWASP Dependency SCA, and Trivy container audits directly in Jenkins files.",
    ["Security", "DevSecOps", "Trivy", "SonarQube"],
    "devsecops pipeline security scanning owasp dependency check trivy docker scan sonarqube quality gates vulnerabilities static code analysis",
    [
        {
            "type": "lead",
            "text": "<strong>DevSecOps</strong> shifts security left by running automated static code analysis (SonarQube SAST), software composition analysis (OWASP Dependency-Check SCA), and container audits (Trivy) on every build stage."
        },
        {
            "type": "ascii",
            "label": "DevSecOps Pipeline Scan Architecture",
            "diagram": """
┌─────────────────────────────────────────────────────────────────┐
│                     DevSecOps Scanning Flow                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐      ┌──────────────┐      ┌───────────────┐  │
│  │ SonarQube    │ ───> │ OWASP Check  │ ───> │ Trivy Image   │  │
│  │ (SAST Scan)  │      │ (SCA Scan)   │      │ (Container)   │  │
│  └──────────────┘      └──────────────┘      └───────────────┘  │
│                                                                 │
│           ┌─────────────────────────────────────────┐           │
│           │            Jenkins Pipeline             │           │
│           │       (Enforces Quality Gates)          │           │
│           └─────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────────────┘
"""
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "SonarQube SAST",
                    "text": "Static Application Security Testing. Analyzes your source code lines to detect security hotspots, bugs, and code smells."
                },
                {
                    "title": "OWASP Dependency-Check",
                    "text": "Software Composition Analysis (SCA). Scans application packages and dependencies against known vulnerability databases."
                },
                {
                    "title": "Trivy Container Scan",
                    "text": "Fast, high-fidelity security scanner. Audits Docker base images and layers for system-level package leaks."
                },
                {
                    "title": "Quality Gate Enforcement",
                    "text": "Pipeline automatically aborts build if severity boundaries are violated or quality levels fall below threshold standards."
                }
            ]
        },
        {
            "type": "code",
            "title": "Enterprise-Grade DevSecOps Pipeline Configuration",
            "code": """pipeline {
    agent any
    
    environment {
        SCANNER_HOME = tool 'SonarQube-Scanner'
        IMAGE_NAME = "enterprise-app:latest"
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        
        stage('SonarQube SAST Audit') {
            steps {
                withSonarQubeEnv('SonarQube-Server') {
                    sh "\${env.SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectName=enterprise-app"
                }
                timeout(time: 10, unit: 'MINUTES') {
                    script {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            error "SonarQube Quality Gate failed! Aborting build."
                        }
                    }
                }
            }
        }
        
        stage('OWASP Dependency Check (SCA)') {
            steps {
                // Run library vulnerability audits and output XML/HTML reports
                dependencyCheck additionalArguments: '--format XML --format HTML', odocName: 'dependency-check-report'
                dependencyCheckPublisher pattern: 'target/dependency-check-report.xml'
            }
        }
        
        stage('Docker Compile') {
            steps {
                sh "docker build -t \${env.IMAGE_NAME} ."
            }
        }
        
        stage('Trivy Container Scan') {
            steps {
                // Scan Docker container image for security CVE leaks and fail the build on HIGH/CRITICAL
                sh "trivy image --severity HIGH,CRITICAL --format table --exit-code 1 \${env.IMAGE_NAME}"
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "waitForQualityGate", "detail": "Built-in webhook listener that pauses pipeline until SonarQube returns standard green quality check status." },
                { "keyword": "dependencyCheck", "detail": "OWASP scanner plugin utility scanning client jar files and package locks against CVE catalogs." },
                { "keyword": "trivy image", "detail": "A lightweight standalone security scan command assessing target containers directly before push staging." },
                { "keyword": "--exit-code 1", "detail": "Tells Trivy scanner to return system failure exit code 1 if matching high/critical severity security flaws are found." }
            ]
        },
        {
            "type": "callout",
            "tone": "warn",
            "html": "<strong>DevSecOps Tip:</strong> Run vulnerability audits before compiling the Docker container. This keeps base builds clean, avoids waste, and prevents developers from shipping unsecured packages."
        }
    ]
)

# 19. shared-libs
add_note(
    "shared-libs", "19", "Shared Libraries", "advanced",
    "How to build Global Shared Libraries, folder structures, vars/ files, custom classes, and importing libraries.",
    ["Shared Libraries", "Advanced", "Groovy"],
    "shared libraries global vars class resources groovy dynamic code dry reusable configuration",
    [
        {
            "type": "lead",
            "text": "Shared Libraries allow teams to extract duplicate Jenkinsfile logic into a dedicated repository, keeping pipelines DRY (Don't Repeat Yourself) across the organization."
        },
        {
            "type": "ascii",
            "label": "Shared Library Repository Structure",
            "diagram": """
shared-library-repository/
├── src/                       # Custom Object Classes (Groovy)
│   └── org/
│       └── company/
│           └── Helper.groovy
├── vars/                      # Global step scripts (Reusable in Jenkinsfiles)
│   ├── buildDocker.groovy
│   └── notifySlack.groovy
└── resources/                 # Non-Groovy templates (JSON, YAML, XML)
    └── configs/
        └── template.json
"""
        },
        {
            "type": "code",
            "title": "Global Step Definition: vars/buildDocker.groovy",
            "code": """// vars/buildDocker.groovy
def call(Map config = [:]) {
    def imageName = config.imageName ?: 'app'
    def imageTag = config.imageTag ?: 'latest'
    
    echo "Running custom library docker build for ${imageName}:${imageTag}"
    sh "docker build -t ${imageName}:${imageTag} ."
}""",
            "explanation": [
                { "keyword": "def call", "detail": "The designated method entry point in Groovy that Jenkins triggers when loading custom step scripts." },
                { "keyword": "Map config", "detail": "Allows developers to pass multiple parameter arguments into the shared library function steps." }
            ]
        },
        {
            "type": "code",
            "title": "Using the Shared Library in a Jenkinsfile",
            "code": """// Import library dynamically from Git
@Library('my-shared-library@main') _

pipeline {
    agent any
    
    stages {
        stage('Docker Build') {
            steps {
                // Call global custom step defined in shared library
                buildDocker(
                    imageName: 'my-custom-app',
                    imageTag: "${env.BUILD_NUMBER}"
                )
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "@Library", "detail": "Tells Jenkins to fetch the Global Shared Library configuration containing target step codes." },
                { "keyword": "_", "detail": "Underlying wildcard telling Jenkins to expose all global library variables immediately." },
                { "keyword": "buildDocker", "detail": "Triggers the custom step script compiled in the shared library vars folder directly." }
            ]
        },
        {
            "type": "code",
            "title": "Enterprise Shared Library Wrapper: vars/standardPipeline.groovy",
            "code": """// vars/standardPipeline.groovy
def call(Map config = [:]) {
    pipeline {
        agent { label config.agentLabel ?: 'any' }
        
        stages {
            stage('Initialize App') {
                steps {
                    echo "Starting build pipeline for application ${config.appName}"
                }
            }
            stage('Compile & Test') {
                steps {
                    sh config.buildScript ?: 'npm run build'
                }
            }
            stage('Trigger Deployment') {
                when { branch 'main' }
                steps {
                    echo "Deploying application to environment: ${config.environment ?: 'staging'}"
                }
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "def call(Map config)", "detail": "Declares a parametrized global function trigger block that acts as the pipeline template engine." },
                { "keyword": "config.agentLabel", "detail": "Dynamic map variable parsed at runtime to specify which dynamic agent handles target builds." },
                { "keyword": "when { branch 'main' }", "detail": "Enforces a release guard ensuring deployment processes trigger only on the main Git branch." }
            ]
        },
        {
            "type": "code",
            "title": "Invoking the Enterprise Pipeline Template in a Jenkinsfile",
            "code": """// Import the enterprise shared library pipeline template
@Library('enterprise-shared-library@v1.2') _

standardPipeline(
    appName: 'inventory-service',
    agentLabel: 'kubernetes-runner',
    buildScript: 'mvn clean package -DskipTests=true',
    environment: 'production'
)""",
            "explanation": [
                { "keyword": "@Library('enterprise-shared-library@v1.2')", "detail": "Safely locks standard pipeline templates to a specific version tag or release branch." },
                { "keyword": "standardPipeline", "detail": "Invokes the global pipeline step wrapper which automatically structures stages, tests, and guards." }
            ]
        },
        {
            "type": "code",
            "title": "Real-time Slack Notification Step: vars/notifySlack.groovy",
            "code": """// vars/notifySlack.groovy
def call(String buildStatus) {
    def color = '#A30200' // Red for failures
    def emoji = '❌'
    
    if (buildStatus == 'SUCCESS') {
        color = '#2EB886' // Green for success
        emoji = '✅'
    } else if (buildStatus == 'UNSTABLE') {
        color = '#DAA038' // Yellow for unstable
        emoji = '⚠️'
    }
    
    slackSend(
        color: color,
        message: "\${emoji} *Build #\${env.BUILD_NUMBER}* for *\${env.JOB_NAME}*\\n" +
                 "Status: *\${buildStatus}*\\n" +
                 "Commit: \`\${sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()}\`"
    )
}""",
            "explanation": [
                { "keyword": "buildStatus", "detail": "Active string parameter indicating the current state of build outcomes (SUCCESS, FAILURE)." },
                { "keyword": "slackSend", "detail": "Plugin command dispatching formatted messages directly to integrated team messaging channels." }
            ]
        },
        {
            "type": "code",
            "title": "Real-time Quality Gates Step: vars/runStaticAnalysis.groovy",
            "code": """// vars/runStaticAnalysis.groovy
def call(Map config = [:]) {
    def sonarHost = config.sonarHost ?: 'http://sonarqube.internal:9000'
    
    echo "Starting static code analysis with SonarQube..."
    withSonarQubeEnv(config.serverName ?: 'SonarQube-Server') {
        sh "mvn sonar:sonar -Dsonar.host.url=\${sonarHost} -Dsonar.projectName=\${config.projectName}"
    }
    
    timeout(time: 10, unit: 'MINUTES') {
        def qg = waitForQualityGate()
        if (qg.status != 'OK') {
            error "Pipeline aborted due to SonarQube Quality Gate failure: \${qg.status}"
        }
    }
}""",
            "explanation": [
                { "keyword": "withSonarQubeEnv", "detail": "Secure scope injecting configured server authentication details without logs leaks." },
                { "keyword": "waitForQualityGate", "detail": "Blocks progress programmatically until SonarQube server replies with gate test feedback." }
            ]
        },
        {
            "type": "code",
            "title": "Comprehensive Shared Library Demo Pipeline",
            "code": """// Import the global enterprise shared library
@Library('enterprise-shared-library@main') _

pipeline {
    agent { label 'docker-executor' }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Quality Gates') {
            steps {
                // Call reusable SonarQube scan step
                runStaticAnalysis(
                    projectName: 'order-service-api',
                    sonarHost: 'https://sonar.company.com'
                )
            }
        }
        stage('Docker Compile') {
            steps {
                // Call custom reusable Docker build step
                buildDocker(
                    imageName: 'order-service-api',
                    imageTag: "\${env.BUILD_NUMBER}"
                )
            }
        }
    }
    
    post {
        always {
            // Call reusable Slack notification step
            notifySlack(currentBuild.result ?: 'SUCCESS')
        }
    }
}""",
            "explanation": [
                { "keyword": "runStaticAnalysis", "detail": "Invokes the static analysis shared helper, ensuring strict code gates are verified." },
                { "keyword": "notifySlack", "detail": "Triggers the dynamic status notification wrapper block to dispatch post-build success/failure logs." }
            ]
        }
    ]
)

# 20. multibranch
add_note(
    "multibranch", "20", "Multibranch Pipelines", "advanced",
    "Setting up Multibranch pipelines, SCM branch detection, Pull Request builds, and build isolation.",
    ["Multibranch", "Advanced", "Git"],
    "multibranch pipeline branch detection pull request github scanning indexing strategy automation",
    [
        {
            "type": "lead",
            "text": "Multibranch Pipelines dynamically scan your SCM repository for any branch containing a <code>Jenkinsfile</code>, auto-creating active pipelines for active code branches."
        },
        {
            "type": "ascii",
            "label": "Multibranch Auto-Discovery",
            "diagram": """
 ┌──────────────────────┐
 │ Git Repo Repository  │
 │  ├── main            │ ── (SCM Scan) ──> [ Jenkins Job: my-project/main ]
 │  ├── feature/auth    │ ── (SCM Scan) ──> [ Jenkins Job: my-project/feature-auth ]
 │  └── release-v1      │ ── (SCM Scan) ──> [ Jenkins Job: my-project/release-v1 ]
 └──────────────────────┘
"""
        },
        {
            "type": "flow",
            "steps": [
                {
                    "title": "Create Multibranch Pipeline Job",
                    "text": "Select 'New Item' -> 'Multibranch Pipeline'."
                },
                {
                    "title": "Configure SCM Source",
                    "text": "Select 'GitHub' or 'Git', supply repository, and configure your credentials."
                },
                {
                    "title": "Define Scan Behaviors",
                    "text": "Determine branch discovery filters (e.g. exclude feature branches, focus on PRs)."
                },
                {
                    "title": "Launch SCM Indexing",
                    "text": "Trigger repository scanning. Jenkins scans all repository branches and starts pipelines instantly."
                }
            ]
        }
    ]
)

# 21. env-vars
add_note(
    "env-vars", "21", "Environment Variables", "advanced",
    "Comprehensive guide to environment variables. Built-in variables, setting custom env variables, and executing dynamic scripts.",
    ["Environment Variables", "Configuration", "Syntax"],
    "environment variables env vars env block builtin dynamic variables execution",
    [
        {
            "type": "lead",
            "text": "Environment variables provide system configuration data to shell steps during pipeline runs, containing both standard build information and user-defined variables."
        },
        {
            "type": "ascii",
            "label": "Environment Scope Levels",
            "diagram": """
┌──────────────────────────────────────────────┐
│ Global Server Env Variables                  │
│  ┌────────────────────────────────────────┐  │
│  │ Pipeline Env Block (All Stages)        │  │
│  │  ┌──────────────────────────────────┐  │  │
│  │  │ Stage Env Block (Single Stage)   │  │  │
│  │  │  ┌────────────────────────────┐  │  │  │
│  │  │  │ Shell Process Variable     │  │  │  │
│  │  │  └────────────────────────────┘  │  │  │
│  │  └──────────────────────────────────┘  │  │
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
"""
        },
        {
            "type": "code",
            "title": "Setting and Reading Dynamic Variables in Pipelines",
            "code": """pipeline {
    agent any
    
    environment {
        // Global pipeline environment variable
        DEPLOY_SERVER = "prod-server-01"
    }
    
    stages {
        stage('Generate Dynamic Variables') {
            environment {
                STAGE_SPECIFIC = "local-value"
            }
            steps {
                // Accessing built-in environment variables
                echo "Executing Build Number: ${env.BUILD_NUMBER}"
                echo "Running inside Workspace: ${env.WORKSPACE}"
                
                // Fetch variable outputs from shell scripts
                script {
                    env.GIT_SHORT_SHA = sh(
                        script: 'git rev-parse --short HEAD', 
                        returnStdout: true
                    ).trim()
                }
                
                echo "Dynamically calculated SHA: ${env.GIT_SHORT_SHA}"
            }
        }
        
        stage('Validate Environment Context') {
            steps {
                // Read variables inside bash execution
                sh 'echo "Target Deployment Server: $DEPLOY_SERVER"'
                sh 'echo "Short commit SHA: $GIT_SHORT_SHA"'
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "env.BUILD_NUMBER", "detail": "The unique auto-incrementing identifier allocated by Jenkins to identify the current run." },
                { "keyword": "env.WORKSPACE", "detail": "A built-in variable referencing the exact local path on worker agent hosting target files." },
                { "keyword": "returnStdout: true", "detail": "Tells the shell step command execution to capture and output logs directly as string results." },
                { "keyword": ".trim()", "detail": "Groovy syntax tool to remove blank space or newline characters returned from script executables." }
            ]
        }
    ]
)

# 22. notifications
add_note(
    "notifications", "22", "Notifications & Alerts", "advanced",
    "Sending build notifications via Slack and emails during success or failure pipeline post events.",
    ["Notifications", "Alerts", "Slack"],
    "notifications slack email alerts alerts communications messaging integrations",
    [
        {
            "type": "lead",
            "text": "Automated alert configurations ensure the team is immediately informed of build warnings, successes, and pipeline failures."
        },
        {
            "type": "ascii",
            "label": "Pipeline Notification Loop",
            "diagram": """
┌────────────────────┐
│ Pipeline Execution │
│  - Fail or Success │
└─────────┬──────────┘
          │ (Triggers post step)
          ▼
┌────────────────────┐          (HTTPS webhook API)         ┌──────────────┐
│ Notification step  │ ───────────────────────────────────> │ Slack / Teams│
└────────────────────┘                                      └──────────────┘
"""
        },
        {
            "type": "code",
            "title": "Configuring Slack Alerts inside Post Blocks",
            "code": """pipeline {
    agent any
    
    stages {
        stage('Test Suite') {
            steps {
                sh 'npm run test'
            }
        }
    }
    
    post {
        success {
            slackSend(
                color: '#36a64f',
                message: "SUCCESS: Job '${env.JOB_NAME}' [Build #${env.BUILD_NUMBER}] successfully verified and completed."
            )
        }
        failure {
            slackSend(
                color: '#danger',
                message: "FAILURE: Job '${env.JOB_NAME}' [Build #${env.BUILD_NUMBER}] has failed! Please inspect logs at: ${env.BUILD_URL}"
            )
        }
    }
}""",
            "explanation": [
                { "keyword": "slackSend", "detail": "Built-in integration step command from Slack plugin to dispatch formatted UI notifications." },
                { "keyword": "#36a64f", "detail": "Standard green HSL color hex indicating build success reports." },
                { "keyword": "env.BUILD_URL", "detail": "A built-in variable providing absolute server URL link to the current job run dashboard." }
            ]
        },
        {
            "type": "code",
            "title": "Customized HTML Emails with Attachments: emailext",
            "code": """pipeline {
    agent any
    
    stages {
        stage('Compile') {
            steps {
                sh 'echo "Compiling codebase..."'
            }
        }
    }
    
    post {
        always {
            // Trigger highly customized emails using Email Extension Plugin
            emailext(
                to: 'devops-team@company.com, engineering-leads@company.com',
                subject: "Jenkins Build Alert: Job '\${env.JOB_NAME}' - Run #\${env.BUILD_NUMBER} - Status: \${currentBuild.currentResult}",
                body: \"\"\"<h3>Enterprise Build Notification Report</h3>
                         <p>The build orchestration pipeline has concluded with status: <strong>\${currentBuild.currentResult}</strong></p>
                         <p>To inspect terminal outputs or check artifacts, visit: <a href="\${env.BUILD_URL}">\${env.BUILD_URL}</a></p>
                         <br>
                         <p><i>Note: Full execution console logs have been attached to this email.</i></p>
                         <br>
                         <p>--- System generated message from Jenkins Controller ---</p>\"\"\",
                mimeType: 'text/html',
                attachLog: true
            )
        }
    }
}""",
            "explanation": [
                { "keyword": "emailext", "detail": "Extended mail utility from Email Extension plugin that supports advanced templates and attachments." },
                { "keyword": "attachLog: true", "detail": "Instructs Jenkins to automatically capture and append raw console build logs to the email." },
                { "keyword": "currentBuild.currentResult", "detail": "Dynamic variable holding the overall build execution result (e.g. SUCCESS, FAILURE)." },
                { "keyword": "mimeType: 'text/html'", "detail": "Specifies that the email body contains HTML layout structures rather than simple raw text." }
            ]
        }
    ]
)

# P1. project1
add_note(
    "project1", "P1", "Node.js CI Project", "projects",
    "Project 1: Setup a fully automated Continuous Integration pipeline for a Node.js web application.",
    ["Project", "Node.js", "CI"],
    "project 1 nodejs ci continuous integration test package jest lint check workspace cache project1",
    [
        {
            "type": "lead",
            "text": "<strong>Project 1 Objective:</strong> Configure an automated CI pipeline that checks out code, installs dependencies, runs static analysis checks, and executes unit tests for a modern Node.js web app."
        },
        {
            "type": "ascii",
            "label": "Node.js Pipeline Lifecycle",
            "diagram": """
[ Git Commit ]
      │
      ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   Checkout   │ ───> │ Dependency   │ ───> │  ESLint Check│ ───> │  Jest Tests  │
│  Repository  │      │ Installation │      │  (Analysis)  │      │  (Coverage)  │
└──────────────┘      └──────────────┘      └──────────────┘      └──────────────┘
"""
        },
        {
            "type": "code",
            "title": "Comprehensive Node.js CI Pipeline Configuration",
            "code": """pipeline {
    agent { label 'node-runner' }
    
    options {
        timeout(time: 15, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    
    stages {
        stage('SCM Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Dependency Installation') {
            steps {
                sh 'npm ci' // Clean installation for reproducible builds
            }
        }
        
        stage('Static Code Analysis') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Unit Testing') {
            steps {
                sh 'npm test -- --coverage'
            }
        }
    }
    
    post {
        always {
            // Save coverage outputs permanently in Jenkins
            archiveArtifacts artifacts: 'coverage/**', allowEmptyArchive: true
        }
    }
}""",
            "explanation": [
                { "keyword": "npm ci", "detail": "Installs strict npm project dependencies using package-lock locks, preventing build mutations." },
                { "keyword": "archiveArtifacts", "detail": "Instructs Jenkins to archive and store folders permanently (like test coverages) inside the master node repository." }
            ]
        }
    ]
)

# P2. project2
add_note(
    "project2", "P2", "Docker CI/CD Project", "projects",
    "Project 2: Continuous Integration & Deployment pipeline using containerized Docker platforms.",
    ["Project", "Docker", "CD"],
    "project 2 docker cd trivy dockerhub containerized registry image scan project2",
    [
        {
            "type": "lead",
            "text": "<strong>Project 2 Objective:</strong> Create a containerized pipeline. We build a production Docker image, run security scans to ensure safety, and upload to DockerHub."
        },
        {
            "type": "ascii",
            "label": "Containerized Build Flow",
            "diagram": """
┌──────────────┐      ┌────────────────┐      ┌───────────────────┐      ┌─────────────────┐
│  Git Source  │ ───> │  Docker Build  │ ───> │    Trivy Scan     │ ───> │  Push Registry  │
│  Repository  │      │ (Docker Image) │      │ (Vulnerabilities) │      │  (Docker Hub)   │
└──────────────┘      └────────────────┘      └───────────────────┘      └─────────────────┘
"""
        },
        {
            "type": "code",
            "title": "Complete Docker CI/CD Pipeline Configuration",
            "code": """pipeline {
    agent any
    
    environment {
        HUB_ACCOUNT = "mypublicaccount"
        APP_NAME = "docker-web-service"
        IMAGE_NAME = "${env.HUB_ACCOUNT}/${env.APP_NAME}"
        IMAGE_TAG = "build-${env.BUILD_NUMBER}"
    }
    
    stages {
        stage('Source Clone') {
            steps {
                checkout scm
            }
        }
        
        stage('Container Build') {
            steps {
                sh "docker build -t ${env.IMAGE_NAME}:${env.IMAGE_TAG} ."
            }
        }
        
        stage('Image Vulnerability Audit') {
            steps {
                sh "trivy image --severity HIGH,CRITICAL ${env.IMAGE_NAME}:${env.IMAGE_TAG}"
            }
        }
        
        stage('Upload Registry') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-credentials',
                    usernameVariable: 'REGISTRY_USER',
                    passwordVariable: 'REGISTRY_PASS'
                )]) {
                    sh "echo \$REGISTRY_PASS | docker login -u \$REGISTRY_USER --password-stdin"
                    sh "docker push ${env.IMAGE_NAME}:${env.IMAGE_TAG}"
                }
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "docker build", "detail": "Packages application codes into an isolated container layout using definitions set inside Dockerfile." },
                { "keyword": "trivy image --severity HIGH,CRITICAL", "detail": "Instructs Trivy scanner tool to execute audit checks focusing only on high and critical level security issues." }
            ]
        }
    ]
)

# P3. project3
add_note(
    "project3", "P3", "AWS EC2 Deployment", "projects",
    "Project 3: Deep dive project explaining secure continuous deployment to remote AWS EC2 server stacks via SSH keys.",
    ["Project", "AWS", "EC2"],
    "project 3 aws ec2 deploy ssh deployment setup variables configuration project3",
    [
        {
            "type": "lead",
            "text": "<strong>Project 3 Objective:</strong> Complete continuous deployment pipeline that securely connects to an AWS EC2 instance using an SSH key and deploys application services."
        },
        {
            "type": "ascii",
            "label": "AWS Deployment Pipeline",
            "diagram": """
 ┌──────────────────┐
 │  Jenkins Server  │ ────── (Deploy Trigger) ───┐
 └──────────────────┘                            │
                                                 ▼
 ┌──────────────────────────────────────────────────────────────────┐
 │                       AWS EC2 Instance                           │
 │  ┌──────────────────────┐            ┌───────────────────────┐  │
 │  │      SSH Port 22     │ ─────────> │   Docker Deployment   │  │
 │  └──────────────────────┘            └───────────────────────┘  │
 └──────────────────────────────────────────────────────────────────┘
"""
        },
        {
            "type": "code",
            "title": "AWS Production Deployment Pipeline Configuration",
            "code": """pipeline {
    agent any
    
    environment {
        AWS_EC2_IP = "54.210.85.99"
        SSH_CRED_ID = "aws-ec2-private-key"
    }
    
    stages {
        stage('Source Fetch') {
            steps {
                checkout scm
            }
        }
        
        stage('Deploy to EC2 Instance') {
            steps {
                withCredentials([sshUserPrivateKey(
                    credentialsId: env.SSH_CRED_ID,
                    keyFileVariable: 'PRIVATE_KEY_PATH',
                    usernameVariable: 'SSH_USER'
                )]) {
                    // Connect and deploy on target server
                    sh \"\"\"
                        ssh -i \$PRIVATE_KEY_PATH -o StrictHostKeyChecking=no \$SSH_USER@${env.AWS_EC2_IP} \\
                        "docker pull myrepo/app:latest && \\
                         docker stop web-app || true && \\
                         docker rm web-app || true && \\
                         docker run -d --name web-app -p 80:80 myrepo/app:latest"
                    \"\"\"
                }
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "sshUserPrivateKey", "detail": "Accesses EC2 private key securely from credentials database to construct active SSH tunnels." },
                { "keyword": "StrictHostKeyChecking=no", "detail": "Disables checking the target server host key footprint, avoiding pipeline lock issues." },
                { "keyword": "docker run -d", "detail": "Launches the newly pulled application container detached in the background on port 80." }
            ]
        }
    ]
)

# P4. project4
add_note(
    "project4", "P4", "Kubernetes & ArgoCD GitOps", "projects",
    "Project 4: Complete GitOps continuous delivery pipeline targeting Kubernetes clusters, automated syncs with ArgoCD, and Prometheus monitoring.",
    ["Project", "Kubernetes", "ArgoCD", "GitOps"],
    "project 4 kubernetes argocd prometheus gitops cd deployment pipeline sync cluster k8s manifest",
    [
        {
            "type": "lead",
            "text": "<strong>Project 4 Objective:</strong> Build a state-of-the-art enterprise GitOps workflow. Jenkins builds application containers, updates manifest Git repositories, auto-deploys via ArgoCD to Kubernetes, and monitors health using Prometheus."
        },
        {
            "type": "ascii",
            "label": "K8s, ArgoCD & Prometheus GitOps Workflow",
            "diagram": """
[ Developer ]
      │ (Pushes Code)
      ▼
┌──────────────┐      ┌────────────────────┐      ┌────────────────┐
│  Git (App)   │ ───> │  Jenkins Pipeline  │ ───> │  Docker Registry│
└──────────────┘      │(Builds/Tests/Pushes│      │  (Docker Hub)  │
                      └─────────┬──────────┘      └────────────────┘
                                │ (Updates Manifest Tag)
                                ▼
┌──────────────┐      ┌────────────────────┐      ┌────────────────┐
│  ArgoCD Sync │ <─── │   Git (Manifest)   │ <────│   Kubernetes   │
│  (Auto-Sync) │      └────────────────────┘      │ (Monitored by  │
└──────┬───────┘                                  │  Prometheus)   │
       │                                          └────────────────┘
       └─────────────── (Deploys Pods to Cluster) ───────┘
"""
        },
        {
            "type": "code",
            "title": "Jenkinsfile GitOps Pipeline (Automated Manifest Promotion)",
            "code": """pipeline {
    agent { label 'k8s-agent' }
    
    environment {
        DOCKER_HUB_REGISTRY = "docker.io/enterprise-dev"
        APP_NAME = "order-processor-api"
        GIT_OPS_REPO = "github.com/enterprise-dev/gitops-infra-config.git"
        CRED_DOCKER = credentials('docker-hub-credentials')
        CRED_GITHUB = credentials('github-gitops-token')
    }
    
    stages {
        stage('Initialize Workspace') {
            steps {
                script {
                    env.COMMIT_SHA = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                }
            }
        }
        
        stage('Dockerize Build & Push') {
            steps {
                sh "docker build -t ${env.DOCKER_HUB_REGISTRY}/${env.APP_NAME}:${env.COMMIT_SHA} ."
                sh "echo ${env.CRED_DOCKER_PASS} | docker login -u ${env.CRED_DOCKER_USER} --password-stdin"
                sh "docker push ${env.DOCKER_HUB_REGISTRY}/${env.APP_NAME}:${env.COMMIT_SHA}"
            }
        }
        
        stage('Prometheus Instrumentation Check') {
            steps {
                // Ensure prometheus scrape annotations exist in deployment template
                sh "grep -q 'prometheus.io/scrape' k8s/deployment.yaml || (echo 'Missing Prometheus scrape annotation!' && exit 1)"
            }
        }
        
        stage('GitOps Manifest Update') {
            steps {
                // Clone the separate GitOps configuration infrastructure repo
                sh "git clone https://${env.CRED_GITHUB_USR}:${env.CRED_GITHUB_PSW}@${env.GIT_OPS_REPO} gitops-config"
                
                dir('gitops-config') {
                    // Update deployment manifest image reference using sed
                    sh "sed -i 's|image: ${env.DOCKER_HUB_REGISTRY}/${env.APP_NAME}:.*|image: ${env.DOCKER_HUB_REGISTRY}/${env.APP_NAME}:${env.COMMIT_SHA}|g' apps/${env.APP_NAME}/deployment.yaml"
                    
                    // Commit and push manifest update back to trigger ArgoCD Sync
                    sh "git config user.name 'Jenkins CI/CD Bot'"
                    sh "git config user.email 'jenkins-bot@enterprise.com'"
                    sh "git add ."
                    sh "git commit -m 'Auto-promoted ${env.APP_NAME} to version ${env.COMMIT_SHA} [Skip CI]'"
                    sh "git push origin main"
                }
            }
        }
    }
}""",
            "explanation": [
                { "keyword": "git rev-parse --short HEAD", "detail": "Retrieves the short Git commit hash of the current checkout code branch to use as immutable image version." },
                { "keyword": "gitops-infra-config.git", "detail": "A dedicated, isolated infrastructure configuration repository containing the Kubernetes manifest templates." },
                { "keyword": "sed -i", "detail": "Stream editor command executing inline substitution replacement of image tag values dynamically." },
                { "keyword": "ArgoCD Sync", "detail": "The GitOps agent process monitors this config repo and immediately schedules rolling Kubernetes Pod updates." }
            ]
        },
        {
            "type": "callout",
            "tone": "success",
            "html": "<strong>Prometheus Monitoring Tip:</strong> Include the annotations <code>prometheus.io/scrape: 'true'</code> and <code>prometheus.io/port: '8080'</code> inside your pod templates so Prometheus can auto-discover your services and collect performance metrics."
        }
    ]
)

# R1. commands
add_note(
    "commands", "R1", "CLI & Commands", "reference",
    "List of essential administration commands, service management commands, and Jenkins CLI usage.",
    ["Reference", "CLI", "Commands"],
    "commands reference cli control restart service backup logs diagnostic systemctl",
    [
        {
            "type": "lead",
            "text": "Jenkins can be managed via operating system commands and its built-in CLI jar file, facilitating remote automation."
        },
        {
            "type": "ascii",
            "label": "Jenkins CLI Mechanism",
            "diagram": """
  ┌─────────────────┐
  │   Jenkins CLI   │ ─── (HTTP request) ───> [ Jenkins Server URL ]
  │  (jar file tool) │                                │
  └─────────────────┘                         (Performs Action)
                                                      │
                                                      ▼
                                              [ System Restart ]
"""
        },
        {
            "type": "code",
            "title": "Host OS & CLI Commands Reference",
            "code": """# --- Systemd Service Controls ---
# Start Jenkins service
sudo systemctl start jenkins

# Stop Jenkins service
sudo systemctl stop jenkins

# Restart Jenkins service
sudo systemctl restart jenkins

# Inspect startup logs
sudo journalctl -u jenkins --no-pager | tail -n 50

# --- Jenkins CLI tool usage ---
# Download the CLI client directly from your server
wget http://localhost:8080/jnlpJars/jenkins-cli.jar

# Execute safe restart using your API token
java -jar jenkins-cli.jar -s http://localhost:8080/ -auth admin:mytoken safe-restart

# List all active jobs configured on the system
java -jar jenkins-cli.jar -s http://localhost:8080/ -auth admin:mytoken list-jobs""",
            "explanation": [
                { "keyword": "systemctl restart jenkins", "detail": "Restarts the systemd system service manager process for Jenkins server." },
                { "keyword": "journalctl -u jenkins", "detail": "Retrieves internal startup system logs printed by the main Jenkins daemon process." },
                { "keyword": "jenkins-cli.jar", "detail": "A built-in jar adapter tool allowing terminal developers to interact with server nodes via CLI." },
                { "keyword": "safe-restart", "detail": "Tells Jenkins CLI to wait for all currently active builds to conclude safely before executing host reboot." }
            ]
        }
    ]
)

# R2. troubleshoot
add_note(
    "troubleshoot", "R2", "Troubleshooting", "reference",
    "Solving common server errors, memory issues (OOM), permissions, and offline agent errors.",
    ["Reference", "Troubleshooting", "Debug"],
    "troubleshoot debug error log out of memory oom offline agent permissions",
    [
        {
            "type": "lead",
            "text": "This guide provides practical solutions to resolve common issues like memory starvation, file permission errors, and agent disconnects."
        },
        {
            "type": "ascii",
            "label": "System Diagnostic Chart",
            "diagram": """
   [ Critical Failure ]
            │
            ├─ (Job fails instantly) ────> [ Check Workspace Permissions ]
            │
            ├─ (Server unresponsive) ───> [ Check JVM CPU/Memory Status ]
            │
            └─ (Build Queue Pending) ───> [ Check Agent Connection Status ]
"""
        },
        {
            "type": "table",
            "headers": ["Error Message / Fault", "Root Cause", "Actionable Solution"],
            "rows": [
                ["java.lang.OutOfMemoryError", "Server JVM heap space exhausted.", "Increase memory allocation. Run: 'JAVA_ARGS=\"-Xmx2g\"' inside /etc/default/jenkins."],
                ["permission denied: docker.sock", "Jenkins system user not in docker group.", "Run: 'sudo usermod -aG docker jenkins && sudo systemctl restart jenkins'."],
                ["Agent Offline / Disconnected", "Failed SSH key handshakes or network loss.", "Verify agent port connectivity. Regenerate user SSH keys."],
                ["No Space Left on Device", "Old builds and Docker cache filling host drive.", "Configure build discard rules. Schedule periodic 'docker system prune -f' tasks."]
            ]
        }
    ]
)

# R3. bestpractices
add_note(
    "bestpractices", "R3", "Best Practices", "reference",
    "Production checklist for security, back-ups, job configuration, and performance optimization.",
    ["Reference", "Best Practices", "Security"],
    "bestpractices checklist production performance backup audit permissions security",
    [
        {
            "type": "lead",
            "text": "To guarantee high availability and stability, production Jenkins controllers should be secured, regularly backed up, and optimized."
        },
        {
            "type": "ascii",
            "label": "Enterprise Security Model",
            "diagram": """
┌────────────────────────────────────────────────────────┐
│                   Secure Server Space                  │
│  ┌───────────────────────┐   ┌──────────────────────┐  │
│  │   Backup Executions   │   │  HTTPS Reverse Proxy │  │
│  │ (Automated thinBackup)│   │       (Nginx)        │  │
│  └───────────────────────┘   └──────────┬───────────┘  │
│                                         ▼              │
│  ┌───────────────────────┐   ┌──────────────────────┐  │
│  │   Audit Trail / Log   │<──│ Role-Based Security  │  │
│  └───────────────────────┘   └──────────────────────┘  │
└────────────────────────────────────────────────────────┘
"""
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "Ephemeral Build Agents",
                    "text": "Never run builds directly on the master node. Offload tasks to agent nodes to protect the controller."
                },
                {
                    "title": "Secure Secrets Management",
                    "text": "Always inject secrets securely via 'withCredentials'. Never hardcode passwords or API keys in your repositories."
                },
                {
                    "title": "Log Rotation Policies",
                    "text": "Enable build discard rules globally to keep your disk usage healthy."
                },
                {
                    "title": "Frequent Configuration Backups",
                    "text": "Set up automated thinBackup runs to copy config XML files to remote, secure cloud storage."
                }
            ]
        }
    ]
)

# R4. links
add_note(
    "links", "R4", "Repo & Links", "reference",
    "Direct resource links to tutorial sources, official repositories, and community documentation websites.",
    ["Reference", "Links", "Resources"],
    "links resources repository tutorial videos documentation learn links",
    [
        {
            "type": "lead",
            "text": "Continuous learning resources to keep you up-to-date with new Jenkins developments and DevOps strategies."
        },
        {
            "type": "ascii",
            "label": "DevOps Learning Path Map",
            "diagram": """
[ Jenkins Basics ] ──> [ Advanced Pipelines ] ──> [ Cloud Integrations ]
                                                           │
                                                           ▼
                                                 [ Production Mastery ]
"""
        },
        {
            "type": "grid",
            "items": [
                {
                    "title": "Official Portal",
                    "text": "Visit the official portal at: https://www.jenkins.io"
                },
                {
                    "title": "Tutorial Video",
                    "text": "Watch the complete tutorial guide on YouTube: https://www.youtube.com/watch?v=XaSdKR2fOU4"
                },
                {
                    "title": "Project Repository",
                    "text": "Explore project files and codebases at: https://github.com/itspriyanshuks17/jenkins-install"
                },
                {
                    "title": "Plugin Directory",
                    "text": "Find and manage custom extensions at: https://plugins.jenkins.io"
                }
            ]
        }
    ]
)

# Write output file
output_js = "assets/js/jenkins-notes.js"

with open(output_js, "w", encoding="utf-8") as f:
    f.write("window.JENKINS_CATEGORIES = " + json.dumps([
      { "id": "introduction", "label": "Introduction", "kicker": "Track 01" },
      { "id": "core_concepts", "label": "Core Concepts", "kicker": "Track 02" },
      { "id": "pipelines", "label": "Pipelines", "kicker": "Track 03" },
      { "id": "integrations", "label": "Integrations", "kicker": "Track 04" },
      { "id": "advanced", "label": "Advanced", "kicker": "Track 05" },
      { "id": "projects", "label": "Projects", "kicker": "Track 06" },
      { "id": "reference", "label": "Reference", "kicker": "Track 07" }
    ], indent=2, ensure_ascii=False) + ";\n\n")
    
    f.write("window.JENKINS_NOTES = " + json.dumps(notes, indent=2, ensure_ascii=False) + ";\n\n")
    
    f.write("""window.JENKINS_PROJECTS = [
  {
    "id": "project1",
    "num": "P1",
    "title": "Project 1 — Simple Node.js CI Pipeline",
    "description": "Establish a fully automated Continuous Integration pipeline that checks out code, runs lint analysis, and executes dynamic unit tests on code push events.",
    "level": "Beginner",
    "tags": ["Node.js", "Jest", "Linting", "CI"]
  },
  {
    "id": "project2",
    "num": "P2",
    "title": "Project 2 — Containerized Docker Pipeline",
    "description": "Orchestrate continuous delivery workflows using container platforms. Build images, scan them for security leaks, and upload them to Docker Hub registries.",
    "level": "Intermediate",
    "tags": ["Docker", "Registry", "Security", "CD"]
  },
  {
    "id": "project3",
    "num": "P3",
    "title": "Project 3 — AWS Production EC2 Deployment",
    "description": "A comprehensive continuous deployment pipeline targeting cloud infrastructures. Set up SSH authorizations to run commands securely on remote AWS servers.",
    "level": "Advanced",
    "tags": ["AWS", "EC2", "SSH", "Production"]
  },
  {
    "id": "project4",
    "num": "P4",
    "title": "Project 4 — GitOps CI/CD with Kubernetes, ArgoCD & Prometheus",
    "description": "Architect a modern GitOps pipeline that builds application containers, updates manifest Git repositories, auto-deploys via ArgoCD to Kubernetes, and monitors health using Prometheus metrics.",
    "level": "Advanced",
    "tags": ["Kubernetes", "ArgoCD", "Prometheus", "GitOps"]
  }
];
""")

print("Successfully compiled all 30 advanced notes with direct Unicode support.")
