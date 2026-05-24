window.JENKINS_CATEGORIES = [
  {
    "id": "introduction",
    "label": "Introduction",
    "kicker": "Track 01"
  },
  {
    "id": "core_concepts",
    "label": "Core Concepts",
    "kicker": "Track 02"
  },
  {
    "id": "pipelines",
    "label": "Pipelines",
    "kicker": "Track 03"
  },
  {
    "id": "integrations",
    "label": "Integrations",
    "kicker": "Track 04"
  },
  {
    "id": "advanced",
    "label": "Advanced",
    "kicker": "Track 05"
  },
  {
    "id": "projects",
    "label": "Projects",
    "kicker": "Track 06"
  },
  {
    "id": "reference",
    "label": "Reference",
    "kicker": "Track 07"
  }
];

window.JENKINS_NOTES = [
  {
    "id": "intro",
    "num": "01",
    "title": "What is Jenkins?",
    "category": "introduction",
    "description": "Comprehensive guide explaining Jenkins architecture, features, and role in DevOps CI/CD pipelines.",
    "tags": [
      "Jenkins",
      "Introduction",
      "DevOps"
    ],
    "search": "jenkins what is jenkins automation server master-agent core definition introduction",
    "sections": [
      {
        "type": "lead",
        "text": "Jenkins is an open-source, Java-based <strong>automation server</strong>. It is the backbone of modern DevOps, designed to orchestrate and automate the continuous integration (CI) and continuous delivery/deployment (CD) lifecycle of software applications."
      },
      {
        "type": "ascii",
        "label": "Jenkins Ecosystem & Flow",
        "diagram": "\n[ Developer ]\n      │ (Pushes Code)\n      ▼\n┌──────────────┐      ┌─────────────────────────┐\n│ Git / GitHub │ ───> │   Jenkins Controller    │\n└──────────────┘      │                         │\n                      │  (Orchestrator/Sched)   │\n                      └─────────────────────────┘\n                                   │\n                     ┌─────────────┴─────────────┐\n                     ▼                           ▼\n        ┌─────────────────────────┐ ┌─────────────────────────┐\n        │     Jenkins Agent 1     │ │     Jenkins Agent 2     │\n        │  (Runs Docker Build)    │ │   (Runs Unit Tests)     │\n        └─────────────────────────┘ └─────────────────────────┘\n                     │                           │\n                     └─────────────┬─────────────┘\n                                   ▼\n                      ┌─────────────────────────┐\n                      │    Staging / Prod       │\n                      │  (Deploy Environments)  │\n                      └─────────────────────────┘\n"
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
  },
  {
    "id": "cicd",
    "num": "02",
    "title": "CI / CD Concepts",
    "category": "introduction",
    "description": "Detailed guide to Continuous Integration, Continuous Delivery, and Continuous Deployment with comparison tables.",
    "tags": [
      "CI/CD",
      "DevOps",
      "Theory"
    ],
    "search": "ci cd continuous integration delivery deployment concepts theory pipeline lifecycle",
    "sections": [
      {
        "type": "lead",
        "text": "CI/CD automates the transition of code modifications from a developer's workspace into running production systems, drastically increasing release velocity while lowering risk."
      },
      {
        "type": "ascii",
        "label": "CI vs CDelivery vs CDeployment",
        "diagram": "\nContinuous Integration (CI):\n[Code] ──> [Build] ──> [Test] (Fast feedback loop on commits)\n\nContinuous Delivery (CD):\n[CI Loop] ──> [Package] ──> [Release to Staging] ──> [Manual Gate] ──> [Deploy to Prod]\n\nContinuous Deployment (Fully Automated):\n[CI Loop] ──> [Package] ──> [Release to Staging] ──> [Auto Deploy to Prod]\n"
      },
      {
        "type": "table",
        "headers": [
          "Phase",
          "Process Definition",
          "Primary Automation Goal"
        ],
        "rows": [
          [
            "Continuous Integration",
            "Integrating code into main branch multiple times daily.",
            "Automatic compilation, static code analysis, and unit testing."
          ],
          [
            "Continuous Delivery",
            "Ensuing codebase is always in a deployable, stable state.",
            "Auto-packaging artifacts (JARs, Docker images) and staging deploys."
          ],
          [
            "Continuous Deployment",
            "Completely removing human intervention from production release.",
            "Tested changes go live directly to customers automatically."
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "success",
        "html": "<strong>The Golden Rule:</strong> The main branch must always be green and buildable. If a build breaks, fixing it is the team's absolute highest priority."
      }
    ]
  },
  {
    "id": "install",
    "num": "03",
    "title": "Installation Guide",
    "category": "introduction",
    "description": "Cross-platform Jenkins installation guides (Debian/Ubuntu, Docker Compose, Windows) and EC2 port setups.",
    "tags": [
      "Installation",
      "Setup",
      "Docker"
    ],
    "search": "install installation setup port open ubuntu docker compose security ec2 java requirements",
    "sections": [
      {
        "type": "lead",
        "text": "Jenkins requires Java (JDK 11 or 17 LTS) to execute. It can be installed as a system service natively or containerized using Docker."
      },
      {
        "type": "ascii",
        "label": "Installation Architecture",
        "diagram": "\n┌──────────────────────────────────────────────┐\n│                  AWS EC2                     │\n│  ┌─────────────────┐    ┌─────────────────┐  │\n│  │  Inbound Rule   │ ──>│  Host System    │  │\n│  │  TCP Port 8080  │    │  (Ubuntu/JDK17) │  │\n│  └─────────────────┘    └────────┬────────┘  │\n│                                  ▼           │\n│                         ┌─────────────────┐  │\n│                         │  Jenkins Server │  │\n│                         └─────────────────┘  │\n└──────────────────────────────────────────────┘\n"
      },
      {
        "type": "code",
        "title": "Option A: Native Ubuntu/Debian Installation",
        "code": "# Update OS packages\nsudo apt update && sudo apt upgrade -y\n\n# Install JDK 17 (Required runtime)\nsudo apt install -y fontconfig openjdk-17-jre\njava -version\n\n# Add Jenkins repository GPG key\nsudo wget -O /usr/share/keyrings/jenkins-keyring.asc \\\n  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key\n\n# Append Jenkins repository to system sources\necho \"deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \\\n  https://pkg.jenkins.io/debian-stable binary/\" | \\\n  sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null\n\n# Install & enable service\nsudo apt update\nsudo apt install -y jenkins\nsudo systemctl start jenkins\nsudo systemctl enable jenkins\n\n# Retrieve First-time Setup Password\nsudo cat /var/lib/jenkins/secrets/initialAdminPassword",
        "explanation": [
          {
            "keyword": "openjdk-17-jre",
            "detail": "Java Runtime Environment version 17. Jenkins is written in Java and requires JDK 11 or 17 to execute."
          },
          {
            "keyword": "jenkins-keyring.asc",
            "detail": "The GPG keys used to sign the Jenkins packages, ensuring standard security authenticity during APT download."
          },
          {
            "keyword": "/etc/apt/sources.list.d/jenkins.list",
            "detail": "Registers the official Jenkins Debian repository so standard APT tools scan for updates."
          },
          {
            "keyword": "systemctl start jenkins",
            "detail": "Systemd command to start the background daemon service process representing Jenkins server."
          },
          {
            "keyword": "initialAdminPassword",
            "detail": "A dynamically generated bootstrap password required to log in for the very first time."
          }
        ]
      },
      {
        "type": "code",
        "title": "Option B: Containerized Docker Compose Setup",
        "code": "# docker-compose.yml\nversion: '3.8'\nservices:\n  jenkins:\n    image: jenkins/jenkins:lts-jdk17\n    container_name: jenkins-lts\n    ports:\n      - \"8080:8080\"\n      - \"50000:50000\" # JNLP Agent connection port\n    volumes:\n      - jenkins_home:/var/jenkins_home\n    restart: unless-stopped\n\nvolumes:\n  jenkins_home:",
        "explanation": [
          {
            "keyword": "jenkins/jenkins:lts-jdk17",
            "detail": "Official LTS container image of Jenkins compiled with JDK 17 pre-installed."
          },
          {
            "keyword": "8080:8080",
            "detail": "Binds host port 8080 to container port 8080, exposing the main web UI interface."
          },
          {
            "keyword": "50000:50000",
            "detail": "Binds host port 50000, used by inbound JNLP executors to coordinate build nodes."
          },
          {
            "keyword": "jenkins_home",
            "detail": "Persistent volume mounting to preserve pipeline code configurations, logs, users, and credentials."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "warn",
        "html": "<strong>AWS EC2 Config Warning:</strong> Always configure your Security Groups to limit TCP port 8080 traffic to your own public IP address instead of exposing it to the entire internet (0.0.0.0/0) in non-production tests."
      }
    ]
  },
  {
    "id": "aws_ec2_setup",
    "num": "03-A",
    "title": "Jenkins on AWS EC2",
    "category": "introduction",
    "description": "Detailed guide to provision an AWS EC2 VM, configure Security Groups, install Java and Jenkins natively, and unlock the administration dashboard.",
    "tags": [
      "AWS",
      "EC2",
      "Setup",
      "VM"
    ],
    "search": "aws ec2 setup virtual machine security group ports ubuntu install java setup initialadminpassword systemctl",
    "sections": [
      {
        "type": "lead",
        "text": "Deploying Jenkins on a cloud VM like AWS EC2 provides absolute control over build resources, storage mounts, and network access control lists."
      },
      {
        "type": "ascii",
        "label": "AWS EC2 Setup & Architecture",
        "diagram": "\n┌─────────────────────────────────────────────────────────────────┐\n│                           AWS Cloud                             │\n│  ┌───────────────────────────────────────────────────────────┐  │\n│  │                     EC2 Virtual Machine                   │  │\n│  │  ┌─────────────────────────┐   ┌───────────────────────┐  │  │\n│  │  │  Security Group (Rules) │   │     Ubuntu OS VM      │  │  │\n│  │  │  - Port 22   (SSH)      │ ─>│   - Installs JDK 17   │  │  │\n│  │  │  - Port 8080 (Web UI)   │   │   - Installs Jenkins  │  │  │\n│  │  └─────────────────────────┘   └───────────┬───────────┘  │  │\n│  └────────────────────────────────────────────┼──────────────┘  │\n└───────────────────────────────────────────────┼─────────────────┘\n                                                ▼\n                                    ┌───────────────────────┐\n                                    │  http://<IP>:8080     │\n                                    └───────────────────────┘\n"
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
        "code": "# Connect to your freshly provisioned AWS EC2 Instance\nssh -i web-key.pem ubuntu@54.210.85.99\n\n# Run the automated setup commands\nsudo apt update -y\nsudo apt install openjdk-17-jre -y\n\n# Import the GPG key to verify package signatures safely\nsudo mkdir -p /etc/apt/keyrings\ncurl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \\\n  /usr/share/keyrings/jenkins-keyring.asc > /dev/null\n\n# Configure the official Jenkins repository source list\necho \"deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \\\n  https://pkg.jenkins.io/debian-stable binary/\" | sudo tee \\\n  /etc/apt/sources.list.d/jenkins.list > /dev/null\n\n# Install the Jenkins server package\nsudo apt update -y\nsudo apt install jenkins -y\n\n# Launch and register the background service process\nsudo systemctl start jenkins\nsudo systemctl enable jenkins\n\n# View the dynamic admin password to unlock the portal\nsudo cat /var/lib/jenkins/secrets/initialAdminPassword",
        "explanation": [
          {
            "keyword": "ubuntu@54.210.85.99",
            "detail": "SSH user and public IP address used to authenticate and connect to your EC2 instance."
          },
          {
            "keyword": "openjdk-17-jre",
            "detail": "The Java Runtime Environment 17. Jenkins is compiled in Java and requires JDK/JRE 11 or 17."
          },
          {
            "keyword": "/usr/share/keyrings/jenkins-keyring.asc",
            "detail": "The keyring location holding GPG keys to establish safe cryptographic package downloads."
          },
          {
            "keyword": "/etc/apt/sources.list.d/jenkins.list",
            "detail": "Registers the official Debian-stable Jenkins package repository on your system."
          },
          {
            "keyword": "systemctl start jenkins",
            "detail": "Starts the active background Jenkins system service process under systemd supervision."
          },
          {
            "keyword": "initialAdminPassword",
            "detail": "A secure bootstrap pass-token printed to the console workspace, used to configure the admin account."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "html": "<strong>Initial Unlock Note:</strong> Once the installation script completes, navigate to <code>http://&lt;EC2_PUBLIC_IP&gt;:8080</code> in your browser. Copy the output of the <code>initialAdminPassword</code> command to unlock your Jenkins portal."
      }
    ]
  },
  {
    "id": "ui",
    "num": "04",
    "title": "Jenkins UI Tour",
    "category": "introduction",
    "description": "Touring the core views of the Jenkins user interface, logs, and global configuration dashboards.",
    "tags": [
      "UI",
      "Configuration",
      "Logs"
    ],
    "search": "ui tour user interface dashboard settings navigation manage logs console",
    "sections": [
      {
        "type": "lead",
        "text": "The Jenkins UI is split into operational, management, and real-time log analysis layouts designed to help developers control and configure automation jobs."
      },
      {
        "type": "ascii",
        "label": "Jenkins UI Mockup Map",
        "diagram": "\n┌────────────────────────────────────────────────────────┐\n│ Jenkins Logo  [Searchbox...]             [User Profile]│\n├────────────────────────────────────────────────────────┤\n│ ┌───────────────┐ ┌──────────────────────────────────┐ │\n│ │  New Item     │ │  Dashboard > All Jobs            │ │\n│ │  People       │ ├──────────────────────────────────┤ │\n│ │  Build History│ │ Job Name  Status  Last Success   │ │\n│ │ Manage Jenkins│ │ my-app-ci  [Green] 2 mins ago    │ │\n│ │               │ │ test-db    [Red]   1 hour ago    │ │\n│ │ ───────────── │ └──────────────────────────────────┘ │\n│ │ Build Executor│ ┌──────────────────────────────────┐ │\n│ │ [Master Idle] │ │  Console Output Logs             │ │\n│ │ [Agent Busy ] │ │  + git fetch --tags              │ │\n│ └───────────────┘ └──────────────────────────────────┘ │\n└────────────────────────────────────────────────────────┘\n"
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
  },
  {
    "id": "jobs",
    "num": "05",
    "title": "Jobs & Builds",
    "category": "core_concepts",
    "description": "Understanding the difference between Jobs and Builds, workspace dynamics, and tracking builds.",
    "tags": [
      "Jobs",
      "Builds",
      "Core Concepts"
    ],
    "search": "jobs builds workspace execution workspace items tracking config baseline",
    "sections": [
      {
        "type": "lead",
        "text": "In Jenkins, a <strong>Job</strong> (or Item) represents the configured automation logic, whereas a <strong>Build</strong> is a specific execution event of that Job."
      },
      {
        "type": "ascii",
        "label": "Job vs Build Lifecycle",
        "diagram": "\n   ┌────────────────────────────────┐\n   │         Job Definition         │  <--- Saved in config.xml\n   └───────────────┬────────────────┘\n                   │\n         [ Trigger Event ]  <--- Webhook, Cron, Manual Run\n                   │\n                   ▼\n   ┌────────────────────────────────┐\n   │     Build Execution #1         │  <--- Injects dynamic variables\n   │  ┌──────────────────────────┐  │       (WORKSPACE, BUILD_NUMBER)\n   │  │ logs, artifacts, results │  │\n   │  └──────────────────────────┘  │\n   └────────────────────────────────┘\n"
      },
      {
        "type": "table",
        "headers": [
          "Job Type",
          "Best Practical Use Case",
          "Configuration Method"
        ],
        "rows": [
          [
            "Freestyle",
            "Simple shell/batch executions, small scripts.",
            "Full GUI-based clicks."
          ],
          [
            "Pipeline",
            "Complex, production multi-stage CI/CD pipelines.",
            "Jenkinsfile (Pipeline-as-Code)"
          ],
          [
            "Multibranch Pipeline",
            "Dynamic environments with active branch strategies.",
            "Auto SCM scanning"
          ],
          [
            "Folder",
            "Access control & project isolation in multi-tenant servers.",
            "Logical grouping GUI"
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "html": "<strong>Log Rotation Tip:</strong> Under 'Options', always configure 'Discard Old Builds' to prevent your disk from filling up with hundreds of old build logs and artifacts."
      }
    ]
  },
  {
    "id": "freestyle",
    "num": "06",
    "title": "Freestyle Projects",
    "category": "core_concepts",
    "description": "How to configure Freestyle jobs, SCM settings, build steps, and why they are deprecated for advanced projects.",
    "tags": [
      "Freestyle",
      "SCM",
      "Jobs"
    ],
    "search": "freestyle project GUI configure setup post build steps limitations",
    "sections": [
      {
        "type": "lead",
        "text": "Freestyle Projects are traditional Jenkins jobs managed completely through the web UI. While simple to set up for beginners, they scale poorly and cannot be version-controlled."
      },
      {
        "type": "ascii",
        "label": "Freestyle Job Components",
        "diagram": "\n┌─────────────────────────────────────────────────────────┐\n│                     Freestyle Job                       │\n│  ┌─────────────────────────┐   ┌─────────────────────┐  │\n│  │   SCM (Git Repository)  │ ─>│   Build Triggers    │  │\n│  └─────────────────────────┘   └──────────┬──────────┘  │\n│                                           ▼             │\n│  ┌─────────────────────────┐   ┌─────────────────────┐  │\n│  │   Post-Build Actions    │<──│ Build Steps (Bash)  │  │\n│  └─────────────────────────┘   └─────────────────────┘  │\n└─────────────────────────────────────────────────────────┘\n"
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
        "code": "# --- Build Step: Execute Shell ---\n# Clean workspace target directories\nrm -rf dist/ build/\nmkdir -p dist\n\n# Install dependencies and compile assets\nnpm install\nnpm run build\n\n# Run quality check suites\nnpm run lint\nnpm run test -- --passWithNoTests\n\n# Package the release bundle\ntar -czf dist/app-package.tar.gz public/ package.json node_modules/\n\n# Print completion stats\necho \"Freestyle build compiled successfully.\"\necho \"Bundle size: $(du -sh dist/app-package.tar.gz | cut -f1)",
        "explanation": [
          {
            "keyword": "rm -rf dist/",
            "detail": "Recursively deletes old build artifacts to guarantee clean compilation runs."
          },
          {
            "keyword": "npm install",
            "detail": "Downloads standard project dependencies based on the packages.json file definition."
          },
          {
            "keyword": "tar -czf",
            "detail": "Compresses folders recursively into a compact tarball archive ready for deployment."
          },
          {
            "keyword": "du -sh",
            "detail": "Calculates and prints disk usage information of target files in human-readable sizes."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "warn",
        "html": "<strong>Why Freestyle is discouraged in production:</strong> Changes to Freestyle jobs are immediate and unversioned. There is no Git audit trail for who edited a configuration, and no code review process."
      }
    ]
  },
  {
    "id": "pipeline-types",
    "num": "07",
    "title": "Pipeline Types",
    "category": "core_concepts",
    "description": "Detailed comparison between Declarative and Scripted pipelines, SCM execution models, and multibranch setups.",
    "tags": [
      "Pipeline",
      "Declarative",
      "Scripted"
    ],
    "search": "pipeline types declarative scripted structure syntax groovy comparisons",
    "sections": [
      {
        "type": "lead",
        "text": "Jenkins supports two pipeline programming syntaxes: <strong>Declarative</strong> (newer, simplified structure) and <strong>Scripted</strong> (original, direct procedural Groovy execution)."
      },
      {
        "type": "ascii",
        "label": "Structure Comparison",
        "diagram": "\n┌───────────────────────────────┐ ┌───────────────────────────────┐\n│      Declarative Syntax       │ │        Scripted Syntax        │\n├───────────────────────────────┤ ├───────────────────────────────┤\n│ pipeline {                    │ │ node('linux') {               │\n│   agent any                   │ │   stage('Build') {            │\n│   stages {                    │ │     sh 'make'                 │\n│     stage('Build') {          │ │   }                           │\n│       steps {                 │ │   if (isRelease) {            │\n│         sh 'make'             │ │     stage('Deploy') { ... }   │\n│       }                       │ │   }                           │\n│     }                         │ │ }                             │\n│   }                           │ │                               │\n│ }                             │ │                               │\n└───────────────────────────────┘ └───────────────────────────────┘\n"
      },
      {
        "type": "table",
        "headers": [
          "Feature",
          "Declarative Pipeline",
          "Scripted Pipeline"
        ],
        "rows": [
          [
            "Syntax Style",
            "Structured, highly opinionated blocks.",
            "Procedural, direct Groovy script."
          ],
          [
            "Complexity",
            "Easy for beginners; standard formatting.",
            "Requires Groovy and runtime knowledge."
          ],
          [
            "Conditional Logic",
            "Enforced through declarative 'when {}' blocks.",
            "Standard native programmatic logic (if-else, loops)."
          ],
          [
            "Error Recovery",
            "Predefined post execution blocks (success/failure).",
            "Try-catch blocks."
          ]
        ]
      }
    ]
  },
  {
    "id": "jenkinsfile",
    "num": "08",
    "title": "Jenkinsfile",
    "category": "core_concepts",
    "description": "Guide to Pipeline-as-Code. File structures, placing Jenkinsfiles, SCM checkouts, and validation tools.",
    "tags": [
      "Jenkinsfile",
      "Pipeline",
      "Git"
    ],
    "search": "jenkinsfile pipeline as code scm validation placement project setup base",
    "sections": [
      {
        "type": "lead",
        "text": "A <strong>Jenkinsfile</strong> is a plain text configuration file stored directly inside your software source code repository. It standardizes builds and allows pipeline configurations to change automatically alongside the application code."
      },
      {
        "type": "ascii",
        "label": "Pipeline-as-Code Workflow",
        "diagram": "\n ┌──────────────┐\n │ Developer    │ ── (Pushes Jenkinsfile) ──> ┌────────────────┐\n └──────────────┘                             │ Git Repository │\n                                              └───────+────────┘\n                                                      │ (Triggers Build)\n                                                      ▼\n ┌──────────────┐                             ┌────────────────┐\n │ Jenkins Agent│ <─── (Parses Jenkinsfile) ──│ Jenkins Master │\n └──────────────┘                             └────────────────┘\n"
      },
      {
        "type": "code",
        "title": "Minimal Production-Ready Jenkinsfile Template",
        "code": "pipeline {\n    agent any\n\n    options {\n        timeout(time: 1, unit: 'HOURS')\n        buildDiscarder(logRotator(numToKeepStr: '15'))\n        disableConcurrentBuilds()\n    }\n\n    stages {\n        stage('Initialize') {\n            steps {\n                echo \"Initializing Build #${env.BUILD_NUMBER} on Node: ${env.NODE_NAME}\"\n            }\n        }\n        stage('Compile') {\n            steps {\n                sh 'echo \"Running compilation steps...\"'\n            }\n        }\n    }\n    \n    post {\n        always {\n            cleanWs()\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "pipeline",
            "detail": "The required entry block wrapper that marks this script as a Declarative Jenkins Pipeline."
          },
          {
            "keyword": "agent any",
            "detail": "Allocates any available worker execution agent node and directory to run this pipeline."
          },
          {
            "keyword": "options",
            "detail": "Enforces global pipeline settings like build timeouts, concurrency, and retention logic."
          },
          {
            "keyword": "stages",
            "detail": "The container block containing the sequential list of execution stages."
          },
          {
            "keyword": "post",
            "detail": "Triggers execution blocks based on overall pipeline outcomes like success, failure, or always."
          },
          {
            "keyword": "cleanWs()",
            "detail": "Built-in function utility to wipe the current workspace directory clean of compiled garbage after a run."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "success",
        "html": "<strong>Best Practice:</strong> Always name this file exactly <code>Jenkinsfile</code> (no file extension, capital J) and keep it in the root folder of your project."
      }
    ]
  },
  {
    "id": "declarative",
    "num": "09",
    "title": "Declarative Pipeline",
    "category": "pipelines",
    "description": "Complete technical reference for Declarative pipelines. Parameters, parameters, options, environment variables, stages, steps, triggers.",
    "tags": [
      "Declarative",
      "Reference",
      "Syntax"
    ],
    "search": "declarative pipeline syntax reference triggers tools parameters options when post",
    "sections": [
      {
        "type": "lead",
        "text": "Declarative syntax offers a clean, robust, and highly structured framework to build secure, robust CI/CD systems."
      },
      {
        "type": "ascii",
        "label": "Declarative Pipeline Blueprint Map",
        "diagram": "\npipeline {\n  agent [any | none | node label | docker container]\n  environment { ... }\n  options { ... }\n  parameters { ... }\n  stages {\n    stage('Build') {\n      steps { ... }\n      post { ... }\n    }\n  }\n  post { [always | success | failure | unstable] }\n}\n"
      },
      {
        "type": "code",
        "title": "Enterprise-Grade Declarative Pipeline Reference Configuration",
        "code": "pipeline {\n    agent { label 'production-runner' }\n\n    tools {\n        nodejs 'node-18'\n        jdk 'java-17'\n    }\n\n    parameters {\n        choice(name: 'DEPLOY_ENV', choices: ['development', 'staging', 'production'], description: 'Target Deploy Environment')\n        string(name: 'VERSION_TAG', defaultValue: '1.0.0', description: 'Application Version override')\n        booleanParam(name: 'FORCE_DEPLOY', defaultValue: false, description: 'Force deployment execution on failure')\n    }\n\n    environment {\n        APP_NAME = \"payment-gateway\"\n        DB_CREDENTIALS = credentials('prod-database-credentials')\n        DEPLOY_PATH = \"/var/www/apps/${env.APP_NAME}\"\n    }\n\n    stages {\n        stage('Pull SCM Source') {\n            steps {\n                checkout scm\n            }\n        }\n        \n        stage('Verify & Test') {\n            steps {\n                sh 'npm ci'\n                sh 'npm run test -- --coverage'\n            }\n        }\n        \n        stage('SonarQube Security Scan') {\n            steps {\n                withSonarQubeEnv('SonarQube-Server') {\n                    sh 'npm run sonar-scan'\n                }\n            }\n        }\n        \n        stage('Package Container & Release') {\n            when {\n                expression {\n                    return (currentBuild.result == 'SUCCESS' || params.FORCE_DEPLOY == true)\n                }\n            }\n            steps {\n                sh \"docker build -t ${env.APP_NAME}:${params.VERSION_TAG} .\"\n                sh \"docker tag ${env.APP_NAME}:${params.VERSION_TAG} ${env.APP_NAME}:latest\"\n            }\n        }\n    }\n\n    post {\n        always {\n            cleanWs()\n        }\n        success {\n            slackSend(color: '#2eb886', message: \"SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER} is live on ${params.DEPLOY_ENV}!\")\n        }\n        failure {\n            slackSend(color: '#a30200', message: \"CRITICAL: ${env.JOB_NAME} #${env.BUILD_NUMBER} has failed during execution stages!\")\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "tools",
            "detail": "Installs and registers predefined compiler configurations directly on the agent's active execution path."
          },
          {
            "keyword": "credentials('id')",
            "detail": "Retrieves encrypted passwords or credentials from the Jenkins storage vault cleanly without printing logs."
          },
          {
            "keyword": "currentBuild.result",
            "detail": "Native object tracking the current execution state of pipeline steps (e.g. SUCCESS, FAILURE)."
          },
          {
            "keyword": "withSonarQubeEnv",
            "detail": "A custom plugin environment wrapper injecting server configs and secrets dynamically to execute quality audits."
          }
        ]
      }
    ]
  },
  {
    "id": "declarative-keywords",
    "num": "09-A",
    "title": "Declarative Pipeline Keywords",
    "category": "pipelines",
    "description": "Complete breakdown of every keyword used in a Declarative Pipeline — pipeline, agent, stages, stage, steps, sh, echo, environment, parameters, when, post — plus how to define and use variables.",
    "tags": [
      "Declarative",
      "Keywords",
      "Variables"
    ],
    "search": "declarative pipeline keywords agent stages stage steps sh echo environment parameters when post variables env",
    "sections": [
      {
        "type": "lead",
        "text": "A Declarative Pipeline is built from a fixed set of structured keywords. Each keyword has a specific role and must appear in the correct place. Understanding each one is the foundation for writing real-world CI/CD pipelines."
      },
      {
        "type": "ascii",
        "label": "Declarative Pipeline Keyword Structure",
        "diagram": "\npipeline {                        ← root wrapper block\n  agent any                       ← where to run\n  environment { KEY = \"value\" }   ← global vars\n  parameters { ... }             ← user inputs\n  stages {                        ← list of stages\n    stage('Name') {               ← one stage\n      when { ... }                ← conditional\n      steps {                     ← commands to run\n        sh 'command'\n        echo 'message'\n      }\n      post { ... }                ← stage-level outcomes\n    }\n  }\n  post {                          ← pipeline-level outcomes\n    success { ... }\n    failure { ... }\n    always  { ... }\n  }\n}\n"
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
        "code": "pipeline {\n    agent any\n    stages {\n        stage('Step Commands Demo') {\n            steps {\n                // Print a message to console output\n                echo 'Starting build process...'\n\n                // Run a single shell command\n                sh 'npm install'\n\n                // Run multiple shell commands in one block\n                sh '''\n                    npm run build\n                    npm run lint\n                    npm test\n                '''\n\n                // Checkout source code from SCM (Git)\n                checkout scm\n\n                // Read a file into a variable\n                def content = readFile('config.json')\n\n                // Write content to a file\n                writeFile file: 'output.txt', text: 'Build complete'\n\n                // Sleep / wait for N seconds\n                sleep 5\n\n                // Run a script block for Groovy logic inside steps\n                script {\n                    def result = sh(script: 'cat version.txt', returnStdout: true).trim()\n                    echo \"App version: ${result}\"\n                }\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "echo",
            "detail": "Prints a plain text string to the Jenkins console output log."
          },
          {
            "keyword": "sh 'cmd'",
            "detail": "Runs a single shell command on a Unix/Linux agent. Use triple quotes (sh ''') for multi-line blocks."
          },
          {
            "keyword": "checkout scm",
            "detail": "Pulls source code from the SCM configured in the job (e.g. GitHub). Shorthand for a full git checkout step."
          },
          {
            "keyword": "readFile / writeFile",
            "detail": "Built-in pipeline steps to read from and write to files in the workspace directory."
          },
          {
            "keyword": "script { }",
            "detail": "Escape hatch inside steps that allows free-form Groovy scripting — useful for conditional logic and variable capture."
          },
          {
            "keyword": "returnStdout: true",
            "detail": "When used with sh(), captures the shell command output as a return value instead of just printing it."
          }
        ]
      },
      {
        "type": "code",
        "title": "environment { } — Defining and Using Variables",
        "code": "pipeline {\n    agent any\n\n    environment {\n        // Static string variable — available throughout the pipeline\n        APP_NAME    = \"my-web-app\"\n        DEPLOY_ENV  = \"production\"\n\n        // Use a shell command to set a variable at runtime\n        GIT_COMMIT_SHORT = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()\n\n        // Reference a Jenkins credential stored securely in Credentials Manager\n        DOCKER_PASS = credentials('docker-hub-password')\n    }\n\n    stages {\n        stage('Use Variables') {\n            steps {\n                // Access environment variables using ${env.VAR_NAME}\n                echo \"App: ${env.APP_NAME}\"\n                echo \"Env: ${env.DEPLOY_ENV}\"\n                echo \"Git SHA: ${env.GIT_COMMIT_SHORT}\"\n\n                // Built-in Jenkins environment variables\n                echo \"Build #:    ${env.BUILD_NUMBER}\"\n                echo \"Job Name:   ${env.JOB_NAME}\"\n                echo \"Workspace:  ${env.WORKSPACE}\"\n                echo \"Node Name:  ${env.NODE_NAME}\"\n                echo \"Build URL:  ${env.BUILD_URL}\"\n\n                // Use vars inside sh commands with double-quotes\n                sh \"docker build -t ${env.APP_NAME}:${env.BUILD_NUMBER} .\"\n            }\n        }\n\n        stage('Stage-level Variable') {\n            environment {\n                // Stage-scoped variable — only available in this stage\n                STAGE_SECRET = credentials('stage-api-key')\n            }\n            steps {\n                echo \"Stage secret is masked in logs: ${env.STAGE_SECRET}\"\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "environment { }",
            "detail": "Defines key=value variables scoped to the whole pipeline. Also supports credentials() to inject secrets safely."
          },
          {
            "keyword": "env.VAR_NAME",
            "detail": "The standard way to access any environment variable inside a Groovy string (${env.VAR_NAME})."
          },
          {
            "keyword": "credentials('id')",
            "detail": "Injects a Jenkins-stored secret (password, token, SSH key) into a variable without exposing it in logs."
          },
          {
            "keyword": "env.BUILD_NUMBER",
            "detail": "Built-in variable: sequential number of the current build run (e.g. 42)."
          },
          {
            "keyword": "env.WORKSPACE",
            "detail": "Built-in variable: absolute path to the current job's workspace directory on the agent."
          },
          {
            "keyword": "env.BUILD_URL",
            "detail": "Built-in variable: full HTTP URL link to the current build's console/status page in Jenkins."
          }
        ]
      },
      {
        "type": "code",
        "title": "parameters { } — User Input at Build Time",
        "code": "pipeline {\n    agent any\n\n    parameters {\n        // Text input — user types a string value\n        string(name: 'VERSION', defaultValue: '1.0.0', description: 'Release version to deploy')\n\n        // Dropdown selection\n        choice(name: 'ENVIRONMENT', choices: ['dev', 'staging', 'production'], description: 'Target environment')\n\n        // Boolean toggle — true/false checkbox\n        booleanParam(name: 'RUN_TESTS', defaultValue: true, description: 'Run test suite before deploy?')\n\n        // Password — hidden in the UI\n        password(name: 'API_SECRET', defaultValue: '', description: 'API secret key')\n    }\n\n    stages {\n        stage('Deploy') {\n            steps {\n                // Access parameters via params.NAME\n                echo \"Deploying version: ${params.VERSION}\"\n                echo \"Target env:        ${params.ENVIRONMENT}\"\n\n                script {\n                    if (params.RUN_TESTS) {\n                        sh 'npm test'\n                    }\n                    sh \"deploy.sh --env ${params.ENVIRONMENT} --version ${params.VERSION}\"\n                }\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "parameters { }",
            "detail": "Declares user-facing input fields shown on 'Build with Parameters' page before the build starts."
          },
          {
            "keyword": "string()",
            "detail": "Creates a free-text input field. Args: name, defaultValue, description."
          },
          {
            "keyword": "choice()",
            "detail": "Creates a dropdown select. The 'choices' array defines available options; first item is the default."
          },
          {
            "keyword": "booleanParam()",
            "detail": "Creates a checkbox. Returns true/false, useful for toggling optional pipeline stages."
          },
          {
            "keyword": "params.NAME",
            "detail": "How you read a parameter value inside the pipeline. Note: use params., not env., for parameters."
          }
        ]
      },
      {
        "type": "code",
        "title": "when { } — Conditional Stage Execution",
        "code": "pipeline {\n    agent any\n    parameters {\n        choice(name: 'BRANCH', choices: ['main', 'dev', 'feature'], description: 'Branch to build')\n    }\n    stages {\n        stage('Build') {\n            steps { sh 'npm run build' }\n        }\n\n        // Only runs when building the main branch\n        stage('Deploy to Production') {\n            when {\n                branch 'main'\n            }\n            steps {\n                echo 'Deploying to production...'\n            }\n        }\n\n        // Only runs when a parameter equals a specific value\n        stage('Integration Tests') {\n            when {\n                expression { params.BRANCH == 'main' }\n            }\n            steps {\n                sh 'npm run test:integration'\n            }\n        }\n\n        // Combines multiple conditions (all must be true)\n        stage('Release') {\n            when {\n                allOf {\n                    branch 'main'\n                    expression { params.BRANCH != 'feature' }\n                }\n            }\n            steps {\n                sh './scripts/release.sh'\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "when { }",
            "detail": "Conditional block inside a stage. The stage only runs if the condition is met."
          },
          {
            "keyword": "branch 'main'",
            "detail": "Built-in condition that checks if the current Git branch matches the given name."
          },
          {
            "keyword": "expression { }",
            "detail": "Evaluates any Groovy boolean expression. The stage runs only if it returns true."
          },
          {
            "keyword": "allOf { }",
            "detail": "Logical AND — all inner conditions must be true for the stage to execute."
          },
          {
            "keyword": "anyOf { }",
            "detail": "Logical OR — the stage runs if at least one inner condition is true."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "html": "<strong>Variable scoping rules:</strong> Variables defined in <code>environment { }</code> are accessible via <code>env.NAME</code>. Variables defined with <code>def</code> inside a <code>script { }</code> block are local to that block only. Parameters are accessed via <code>params.NAME</code>, never <code>env.NAME</code>."
      }
    ]
  },
  {
    "id": "scripted",
    "num": "10",
    "title": "Scripted Pipeline",
    "category": "pipelines",
    "description": "Deep dive into Scripted pipelines, procedural Groovy scripts, loops, exception handling, and custom code integration.",
    "tags": [
      "Scripted",
      "Groovy",
      "Advanced"
    ],
    "search": "scripted pipeline syntax groovy node scripting loops try catch exception dynamic",
    "sections": [
      {
        "type": "lead",
        "text": "Scripted Pipelines are built directly on top of the Groovy programming engine, offering maximum execution flexibility and direct programmatic logic control."
      },
      {
        "type": "ascii",
        "label": "Scripted Pipeline Logic flow",
        "diagram": "\n  ┌────────────────────────────────────┐\n  │         node('worker-node')        │  <--- Allocate build workspace\n  └─────────────────┬──────────────────┘\n                    ▼\n  ┌────────────────────────────────────┐\n  │        stage('Environment')        │  <--- Standard code execution\n  └─────────────────┬──────────────────┘\n                    ▼\n                    ├── [isRelease == true] ──> [stage('Deploy')]\n                    └── [isRelease == false] ──> [Skip deployment stage]\n"
      },
      {
        "type": "code",
        "title": "Advanced Scripted Pipeline with Complex Controls",
        "code": "node('linux') {\n    def appName = 'analytics-service'\n    def environments = ['staging', 'production']\n\n    try {\n        stage('Checkout Source') {\n            checkout scm\n        }\n\n        stage('Parallel Compile') {\n            parallel(\n                \"build-amd64\": { sh \"echo 'Building x86 architecture binary'\" },\n                \"build-arm64\": { sh \"echo 'Building arm64 architecture binary'\" }\n            )\n        }\n\n        stage('Multi-Environment Deployment') {\n            for (envName in environments) {\n                if (envName == 'production') {\n                    // Manual Approval checkpoint via Groovy step\n                    input message: \"Authorize release to Production?\", ok: \"Release\"\n                }\n                echo \"Deploying ${appName} to server pool: ${envName}\"\n            }\n        }\n\n    } catch (Exception err) {\n        currentBuild.result = 'FAILED'\n        echo \"Pipeline failed with error: ${err.toString()}\"\n        throw err\n    } finally {\n        stage('Post-cleanup') {\n            cleanWs()\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "node('linux')",
            "detail": "The essential scripted block allocating an execution node and workspace matching target label."
          },
          {
            "keyword": "def",
            "detail": "Standard Groovy keyword to declare dynamic local variables."
          },
          {
            "keyword": "parallel",
            "detail": "Built-in scripted step running list of asynchronous block closures concurrently."
          },
          {
            "keyword": "try-catch-finally",
            "detail": "Standard programming exception pattern to execute custom error behaviors and clean workspace states."
          },
          {
            "keyword": "input",
            "detail": "Halts pipeline execution waiting for a physical user approval prompt."
          }
        ]
      }
    ]
  },
  {
    "id": "stages",
    "num": "11",
    "title": "Stages & Steps",
    "category": "pipelines",
    "description": "Comprehensive directory of common pipeline steps including directory manipulation, environment management, credentials wrapping, and script execution.",
    "tags": [
      "Stages",
      "Steps",
      "Commands"
    ],
    "search": "stages steps common commands shell credentials withcredentials stash unstash env variables",
    "sections": [
      {
        "type": "lead",
        "text": "Steps are the fundamental building blocks of execution inside a stage. Jenkins provides native steps to manage workspace files, environments, stashes, and passwords."
      },
      {
        "type": "ascii",
        "label": "Workspace Stashing Logic",
        "diagram": "\n   ┌───────────────────────┐\n   │     Build Executor    │ ─── (stash) ───> [ Jenkins Controller Storage ]\n   │  (Compiles binaries)  │                         │\n   └───────────────────────┘                         │\n                                                 (unstash)\n   ┌───────────────────────┐                         │\n   │    Deploy Executor    │ <───────────────────────┘\n   │  (Runs deploy steps)  │\n   └───────────────────────┘\n"
      },
      {
        "type": "code",
        "title": "Directory Utilities, Stashing, and Dynamic Scripting",
        "code": "pipeline {\n    agent none // Explicitly allocate workspace per stage\n    \n    stages {\n        stage('Build Artifact') {\n            agent { label 'build-agent' }\n            steps {\n                // Ensure a clean target directory\n                dir('workspace-build') {\n                    sh 'mkdir -p target && echo \"Compiled Binary Content\" > target/app.jar'\n                }\n                // Save target folder to Jenkins storage without permanent archiving\n                stash name: 'compiled-jar', includes: 'workspace-build/target/**'\n            }\n        }\n        \n        stage('Deploy Artifact') {\n            agent { label 'deploy-agent' }\n            steps {\n                // Retrieve files from Jenkins storage into current workspace\n                unstash 'compiled-jar'\n                sh 'ls -R workspace-build/target/'\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "agent none",
            "detail": "Prevents allocating a global node directory. Enforces custom nodes inside individual stage directives."
          },
          {
            "keyword": "dir('workspace-build')",
            "detail": "Changes the file context execution directory path to a specific folder within the workspace."
          },
          {
            "keyword": "stash",
            "detail": "Saves target workspace files into controller storage under a specific reference key."
          },
          {
            "keyword": "unstash",
            "detail": "Retrieves stashed file pools back into the active agent workspace. Great for heterogeneous multi-node deploys."
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Built-in Step Command",
          "Primary Action",
          "Usage Context"
        ],
        "rows": [
          [
            "sh 'command'",
            "Runs Unix shell command. Failures abort pipeline.",
            "Build, compilation, execution."
          ],
          [
            "dir('path') { ... }",
            "Switches execution directory scope.",
            "Executing tasks in sub-folders."
          ],
          [
            "stash / unstash",
            "Saves temporary workspace binaries across stages.",
            "Offloading deployment from build agent."
          ],
          [
            "archiveArtifacts",
            "Saves permanent post-build binaries in controller.",
            "Publishing released binaries permanently."
          ]
        ]
      }
    ]
  },
  {
    "id": "agents",
    "num": "12",
    "title": "Agents & Nodes",
    "category": "pipelines",
    "description": "Detailed study of Master-Agent architecture, configuring nodes via SSH/JNLP, and running pipelines inside Docker containers.",
    "tags": [
      "Agents",
      "Nodes",
      "Architectures"
    ],
    "search": "agents nodes controller master worker distributed dynamic docker agent jnlp ssh labels",
    "sections": [
      {
        "type": "lead",
        "text": "Jenkins distributes task execution from a central Controller node out to secondary worker Agents, scaling operational capacity and preventing execution overload on the host platform."
      },
      {
        "type": "ascii",
        "label": "Master-Agent Communication Architecture",
        "diagram": "\n┌───────────────────────────────────────────────────────┐\n│                 Jenkins Controller                    │\n│    (Schedules builds, processes user logins, UI)      │\n└────────┬──────────────────────┬───────────────────────┘\n         │ (SSH Port 22)        │ (JNLP Port 50000)\n         ▼                      ▼\n┌─────────────────┐    ┌─────────────────┐\n│ Linux Agent 01  │    │ Windows Agent   │\n│ (System Node)   │    │ (Native Runner) │\n└─────────────────┘    └─────────────────┘\n"
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
        "code": "pipeline {\n    agent none // Do not bind a root executor workspace\n\n    stages {\n        stage('Frontend Compilation') {\n            agent {\n                docker {\n                    image 'node:18-alpine'\n                    args '-v /tmp:/tmp-cache'\n                }\n            }\n            steps {\n                sh 'node -v'\n                sh 'npm install && npm run build'\n            }\n        }\n        \n        stage('Java Backend Compilation') {\n            agent {\n                docker {\n                    image 'maven:3.9-eclipse-temurin-17'\n                }\n            }\n            steps {\n                sh 'mvn -version'\n                sh 'mvn clean package'\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "docker",
            "detail": "Declares that the agent must be instantiated inside an isolated Docker container."
          },
          {
            "keyword": "image",
            "detail": "The public or private registry image reference (e.g. node:18-alpine) containing compile frameworks."
          },
          {
            "keyword": "args",
            "detail": "Standard CLI parameters passed during container startup, such as directory mappings (`-v`)."
          }
        ]
      },
      {
        "type": "code",
        "title": "Configuring a Remote Jenkins SSH Worker Node",
        "code": "# =================================================================\n# STEP 1: On the Jenkins CONTROLLER Node\n# =================================================================\n# Generate dynamic high-security SSH key pair for agent authorization\nssh-keygen -t ed25519 -f ~/.ssh/jenkins_agent_key -N \"\"\n\n# Print the public key string to manually append to target agent\ncat ~/.ssh/jenkins_agent_key.pub\n\n# =================================================================\n# STEP 2: On the Remote Jenkins AGENT Worker Node\n# =================================================================\n# Create a dedicated system user group and user for execution\nsudo groupadd -g 10000 jenkins\nsudo useradd -u 10000 -g jenkins -m -d /var/jenkins -s /bin/bash jenkins\n\n# Provision target SSH directories with secure permissions\nsudo mkdir -p /var/jenkins/.ssh\nsudo chmod 700 /var/jenkins/.ssh\n\n# Authorize the controller key for non-interactive connections\necho \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI...\" | sudo tee -a /var/jenkins/.ssh/authorized_keys\nsudo chmod 600 /var/jenkins/.ssh/authorized_keys\nsudo chown -R jenkins:jenkins /var/jenkins\n\n# Install Java JDK (Must match controller system JRE version)\nsudo apt update && sudo apt install openjdk-17-jdk -y",
        "explanation": [
          {
            "keyword": "ssh-keygen -t ed25519",
            "detail": "Generates a highly secure Ed25519 dynamic asymmetric cryptographic SSH key pair."
          },
          {
            "keyword": "/var/jenkins",
            "detail": "The designated system user workspace directory on the worker agent node."
          },
          {
            "keyword": "authorized_keys",
            "detail": "SSH authorization file that stores public keys permitted to connect natively without password requests."
          },
          {
            "keyword": "openjdk-17-jdk",
            "detail": "Java Development Kit. Required so the Agent slave JAR processes execute compiler requests locally."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "warn",
        "html": "<strong>Controller Executor Rule:</strong> Always configure the number of executors on your main Controller node to <strong>0</strong>. This protects the master node from running application builds, keeping it responsive for users."
      }
    ]
  },
  {
    "id": "ssh-agent-troubleshooting",
    "num": "12-A",
    "title": "SSH Agent Troubleshooting",
    "category": "advanced",
    "description": "Real-world fixes for the most common Jenkins SSH agent connection failures — known_hosts, key permissions, credential config, Java mismatch, disk space, and connection instability.",
    "tags": [
      "SSH",
      "Agents",
      "Troubleshooting"
    ],
    "search": "ssh agent troubleshooting known_hosts permission denied java mismatch disk space publickey aws ubuntu",
    "sections": [
      {
        "type": "lead",
        "text": "These are real issues encountered while connecting a Jenkins SSH agent to an AWS Ubuntu node. Each issue includes the exact error, its root cause, and the precise fix commands."
      },
      {
        "type": "ascii",
        "label": "Final Working Architecture",
        "diagram": "\nJenkins Master (Controller)\n       |\n       |  SSH — key-based authentication\n       |  Port 22\n       ↓\nAWS Ubuntu Agent Node\n  ├── Java 21 installed (openjdk-21-jdk)\n  ├── Jenkins remoting running (jar via SSH)\n  ├── ~/.ssh/known_hosts configured\n  └── Authorized public key in place\n\nAgent Status: ✅ Connected and Online\nProtocol   : Standard in/out (Remoting)\n"
      },
      {
        "type": "code",
        "title": "Issue 1 — Missing known_hosts File",
        "code": "# Error:\n# No Known Hosts file was found at /var/lib/jenkins/.ssh/known_hosts\n# Key exchange was not finished, connection is closed.\n#\n# Cause: Jenkins cannot verify the remote host fingerprint.\n# Fix: Create the .ssh directory and scan the agent's fingerprint into known_hosts.\n\nsudo mkdir -p /var/lib/jenkins/.ssh\nsudo ssh-keyscan -H 52.66.248.36 | sudo tee -a /var/lib/jenkins/.ssh/known_hosts\n\n# Set correct ownership and permissions\nsudo chown -R jenkins:jenkins /var/lib/jenkins/.ssh\nsudo chmod 700 /var/lib/jenkins/.ssh\nsudo chmod 644 /var/lib/jenkins/.ssh/known_hosts",
        "explanation": [
          {
            "keyword": "ssh-keyscan -H",
            "detail": "Scans the target host and outputs its public key fingerprint in hashed form, safe to store in known_hosts."
          },
          {
            "keyword": "tee -a",
            "detail": "Appends the scanned key to known_hosts without overwriting existing entries."
          },
          {
            "keyword": "chmod 700 .ssh",
            "detail": "Restricts the .ssh directory to owner-only access — required by SSH security policy."
          },
          {
            "keyword": "chmod 644 known_hosts",
            "detail": "Allows world-read on known_hosts so SSH can verify remote host fingerprints."
          }
        ]
      },
      {
        "type": "code",
        "title": "Issue 2 — SSH Private Key Permission Denied",
        "code": "# Error:\n# Load key \"ansible-master-key\": Permission denied\n#\n# Cause: The key file is in the wrong location or has incorrect permissions.\n# Fix: Move key to Jenkins home, fix ownership and mode.\n\nsudo mv ansible-master-key /var/lib/jenkins/.ssh/\nsudo chown jenkins:jenkins /var/lib/jenkins/.ssh/ansible-master-key\nsudo chmod 600 /var/lib/jenkins/.ssh/ansible-master-key\n\n# Verify the key works manually as the jenkins user:\nsudo -u jenkins ssh -i /var/lib/jenkins/.ssh/ansible-master-key ubuntu@52.66.248.36",
        "explanation": [
          {
            "keyword": "chmod 600",
            "detail": "Private keys MUST be 600 (owner read/write only). SSH will refuse any key that is group- or world-readable."
          },
          {
            "keyword": "chown jenkins:jenkins",
            "detail": "The Jenkins service runs as the 'jenkins' OS user. The key file must be owned by this user."
          },
          {
            "keyword": "sudo -u jenkins ssh",
            "detail": "Tests the SSH connection running as the jenkins user — exactly how Jenkins itself would connect."
          }
        ]
      },
      {
        "type": "code",
        "title": "Issue 3 — Jenkins Credential Misconfiguration",
        "code": "# Error:\n# Server rejected the private key\n# PEM problem: unknown type\n#\n# Cause: The private key pasted in Jenkins is corrupted or in the wrong format.\n# Fix: Re-add the credential correctly in Jenkins UI.\n\n# Navigate to:\n# Manage Jenkins → Credentials → Global → Add Credentials\n\n# Settings:\n#   Kind     : SSH Username with private key\n#   ID       : jenkins-aws-ssh\n#   Username : ubuntu\n#   Private Key: Enter directly → paste key content\n\n# The key must start and end with exactly:\n# -----BEGIN OPENSSH PRIVATE KEY-----\n# ...key body...\n# -----END OPENSSH PRIVATE KEY-----\n\n# Verify the key format locally:\nfile /path/to/your-key\n# Should output: PEM RSA private key  OR  OpenSSH private key",
        "explanation": [
          {
            "keyword": "PEM problem: unknown type",
            "detail": "Jenkins received a key that doesn't start with a valid PEM header. Copy the raw key file content, not a path."
          },
          {
            "keyword": "SSH Username with private key",
            "detail": "The credential Kind required for agent SSH connections. Username must match the OS user on the agent (e.g. ubuntu, ec2-user)."
          },
          {
            "keyword": "Enter directly",
            "detail": "Paste the full private key content including the BEGIN/END header lines. Do NOT paste a file path."
          }
        ]
      },
      {
        "type": "code",
        "title": "Issue 4 — Java Version Mismatch on Agent",
        "code": "# Error:\n# UnsupportedClassVersionError\n# class file version 65.0 but runtime supports up to 61.0\n#\n# Cause: Agent Java is too old for the Jenkins remoting JAR.\n#   class file 65.0 = compiled with Java 21\n#   runtime 61.0    = running on Java 17  ← too old\n#\n# Fix: Install Java 21 on the agent node.\n\nsudo apt update\nsudo apt install openjdk-21-jdk -y\n\n# Verify the correct version is active:\njava -version\n# Expected: openjdk version \"21.x.x\"\n\n# If multiple Java versions are installed, select the right one:\nsudo update-alternatives --config java",
        "explanation": [
          {
            "keyword": "class file version 65.0",
            "detail": "Each Java version has a class file version number: Java 17=61, Java 21=65. Mismatches cause this error."
          },
          {
            "keyword": "openjdk-21-jdk",
            "detail": "Install the full JDK (not just JRE) on the agent. Jenkins remoting requires the JDK."
          },
          {
            "keyword": "update-alternatives --config java",
            "detail": "Lets you switch the default java binary when multiple versions are installed on the same machine."
          }
        ]
      },
      {
        "type": "code",
        "title": "Issue 5 — Disk Space Below Threshold",
        "code": "# Error:\n# Disk space is below threshold of 1.00 GiB\n#\n# Fix: Free up space on the agent node.\n\n# Clear temp files\nsudo rm -rf /tmp/*\n\n# Clear apt package cache\nsudo apt clean\n\n# Check disk usage to confirm\ndf -h\n\n# Find large files consuming space\ndu -sh /var/log/* | sort -rh | head -10\nsudo journalctl --vacuum-size=100M",
        "explanation": [
          {
            "keyword": "apt clean",
            "detail": "Removes cached .deb package files from /var/cache/apt/archives that are no longer needed."
          },
          {
            "keyword": "df -h",
            "detail": "Shows disk usage for all mounted filesystems in human-readable format. Check the / (root) filesystem."
          },
          {
            "keyword": "journalctl --vacuum-size",
            "detail": "Trims systemd journal logs to the specified size limit, freeing significant space on long-running servers."
          }
        ]
      },
      {
        "type": "grid",
        "items": [
          {
            "title": "Issue 6 — Publickey Auth Failure",
            "text": "Error: 'Publickey authentication failed'. Verify the public key on the agent is in ~/.ssh/authorized_keys. Check that the Jenkins credential uses the matching private key and the username is 'ubuntu'."
          },
          {
            "title": "Issue 7 — Channel Termination",
            "text": "Error: 'Unexpected termination of the channel'. Usually caused by Java version mismatch or remoting crash. Align Java version on both controller and agent, and ensure stable network connectivity."
          },
          {
            "title": "Key Permission Rules",
            "text": "Private key: chmod 600. The .ssh directory: chmod 700. known_hosts: chmod 644. All files must be owned by the jenkins OS user (chown jenkins:jenkins)."
          },
          {
            "title": "Manual SSH Test",
            "text": "Always test the connection manually first: sudo -u jenkins ssh -i /var/lib/jenkins/.ssh/key ubuntu@<IP>. If this works, Jenkins can connect. If it fails, fix the OS-level issue first."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "success",
        "html": "<strong>Final Result:</strong> Agent successfully connected and online. <code>Remoting version: 3355.v388858a_47b_33</code> — Communication Protocol: Standard in/out. Key learnings: SSH key permissions are critical, Java version compatibility is mandatory, and always test SSH manually as the jenkins OS user before configuring in the UI."
      },
      {
        "type": "flow",
        "title": "Step-by-Step Resolution Checklist",
        "steps": [
          {
            "title": "Step 1 — Test SSH manually first",
            "text": "Before touching Jenkins, verify the raw SSH connection works as the jenkins OS user: sudo -u jenkins ssh -i /var/lib/jenkins/.ssh/your-key ubuntu@<agent-IP>. If this fails, fix the OS-level issue first."
          },
          {
            "title": "Step 2 — Fix known_hosts",
            "text": "Run: sudo ssh-keyscan -H <agent-IP> | sudo tee -a /var/lib/jenkins/.ssh/known_hosts. Then set permissions: sudo chmod 700 /var/lib/jenkins/.ssh && sudo chmod 644 /var/lib/jenkins/.ssh/known_hosts && sudo chown -R jenkins:jenkins /var/lib/jenkins/.ssh"
          },
          {
            "title": "Step 3 — Fix private key permissions",
            "text": "Move the key: sudo mv your-key /var/lib/jenkins/.ssh/. Set permissions: sudo chmod 600 /var/lib/jenkins/.ssh/your-key && sudo chown jenkins:jenkins /var/lib/jenkins/.ssh/your-key. The key must be 600 — SSH rejects anything looser."
          },
          {
            "title": "Step 4 — Re-add the Jenkins credential",
            "text": "Go to Manage Jenkins → Credentials → Global → Add Credentials. Choose 'SSH Username with private key', set Username to 'ubuntu', and paste the full raw private key content (including the -----BEGIN OPENSSH PRIVATE KEY----- header lines)."
          },
          {
            "title": "Step 5 — Check Java version on the agent",
            "text": "Run java -version on the agent. If it shows version 17 but Jenkins remoting needs 21, install: sudo apt install openjdk-21-jdk -y. If multiple versions exist, run: sudo update-alternatives --config java and select Java 21."
          },
          {
            "title": "Step 6 — Free up disk space if needed",
            "text": "If Jenkins reports disk threshold warnings: sudo apt clean && sudo rm -rf /tmp/* && sudo journalctl --vacuum-size=100M. Confirm with: df -h. Jenkins requires at least 1 GiB free to accept the agent."
          },
          {
            "title": "Step 7 — Launch the agent from Jenkins UI",
            "text": "Go to Manage Jenkins → Nodes → your-agent → Launch agent. Watch the agent log for the line 'Agent successfully connected and online'. If it still fails, click the agent log link and read the exact error message for the next fix."
          }
        ]
      },
      {
        "type": "code",
        "title": "Complete Resolution Command Reference — Run in Order",
        "code": "# ── STEP 1: Test SSH as jenkins user ──────────────────────────────\nsudo -u jenkins ssh -i /var/lib/jenkins/.ssh/your-key ubuntu@<AGENT_IP>\n\n# ── STEP 2: Fix known_hosts ───────────────────────────────────────\nsudo mkdir -p /var/lib/jenkins/.ssh\nsudo ssh-keyscan -H <AGENT_IP> | sudo tee -a /var/lib/jenkins/.ssh/known_hosts\nsudo chown -R jenkins:jenkins /var/lib/jenkins/.ssh\nsudo chmod 700 /var/lib/jenkins/.ssh\nsudo chmod 644 /var/lib/jenkins/.ssh/known_hosts\n\n# ── STEP 3: Fix private key permissions ──────────────────────────\nsudo mv your-key /var/lib/jenkins/.ssh/\nsudo chown jenkins:jenkins /var/lib/jenkins/.ssh/your-key\nsudo chmod 600 /var/lib/jenkins/.ssh/your-key\n\n# ── STEP 4: Verify key format (before pasting into Jenkins) ──────\nfile /var/lib/jenkins/.ssh/your-key\n# Expected: OpenSSH private key  OR  PEM RSA private key\n\n# ── STEP 5: Fix Java version on agent node ───────────────────────\njava -version                          # check current version\nsudo apt update\nsudo apt install openjdk-21-jdk -y\nsudo update-alternatives --config java  # select Java 21 if needed\njava -version                           # confirm: openjdk 21.x.x\n\n# ── STEP 6: Free disk space on agent ─────────────────────────────\nsudo apt clean\nsudo rm -rf /tmp/*\nsudo journalctl --vacuum-size=100M\ndf -h                                   # confirm >1 GiB free\n\n# ── STEP 7: Verify agent public key is authorized ────────────────\n# On the AGENT node — ensure Jenkins master public key is present:\ncat ~/.ssh/authorized_keys              # should contain the pub key\n# If missing, append it:\necho \"<paste-master-pub-key>\" >> ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/authorized_keys",
        "explanation": [
          {
            "keyword": "sudo -u jenkins ssh",
            "detail": "Simulates exactly how Jenkins connects. If this works, Jenkins can connect too. Always start here."
          },
          {
            "keyword": "ssh-keyscan -H",
            "detail": "Fetches and hashes the remote host fingerprint. The -H flag hashes the hostname for security."
          },
          {
            "keyword": "chmod 700 .ssh / chmod 600 key",
            "detail": "SSH enforces strict permission checks. .ssh must be 700, private keys must be 600, or SSH refuses to use them."
          },
          {
            "keyword": "update-alternatives --config java",
            "detail": "Interactively selects which Java installation is the system default when multiple are installed."
          },
          {
            "keyword": "authorized_keys",
            "detail": "File on the agent containing public keys that are allowed to SSH in. The Jenkins master's public key must be here."
          }
        ]
      }
    ]
  },
  {
    "id": "parallel",
    "num": "13",
    "title": "Parallel Execution",
    "category": "pipelines",
    "description": "Running multi-branch execution, dynamic tasks in parallel, and handling error propagation.",
    "tags": [
      "Parallel",
      "Concurrency",
      "Speed"
    ],
    "search": "parallel execution concurrent runtime speed stages failfast branches multi platform",
    "sections": [
      {
        "type": "lead",
        "text": "Running pipeline stages concurrently reduces total build times and accelerates software feedback loops."
      },
      {
        "type": "ascii",
        "label": "Sequential vs Parallel Execution",
        "diagram": "\nSequential Execution (Time: 30m):\n[Checkout] ──> [Build] ──> [Unit Test: 10m] ──> [Integration Test: 15m] ──> [Deploy: 5m]\n\nParallel Execution (Time: 18m):\n                           ┌───> [Unit Test: 10m] ────────┐\n[Checkout] ──> [Build] ───>├───> [Integration Test: 15m] ─┼───> [Deploy: 5m]\n                           └───> [Static Lint: 2m] ───────┘\n"
      },
      {
        "type": "code",
        "title": "Parallel Pipeline with Fail-Fast Configuration",
        "code": "pipeline {\n    agent any\n\n    stages {\n        stage('Compile') {\n            steps {\n                sh 'echo \"Compiling system binaries...\"'\n            }\n        }\n\n        stage('Comprehensive Auditing') {\n            // Terminate other parallel jobs immediately if one of them fails\n            failFast true\n            \n            parallel {\n                stage('Execution Suite A') {\n                    steps {\n                        sh 'echo \"Running suite A tests...\"'\n                    }\n                }\n                stage('Execution Suite B') {\n                    steps {\n                        sh 'echo \"Running suite B tests...\"'\n                    }\n                }\n                stage('Static SonarQube Scan') {\n                    steps {\n                        sh 'echo \"Analyzing code quality metrics...\"'\n                    }\n                }\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "failFast true",
            "detail": "Aborts all other parallel sibling execution stages immediately if one of them encounters a failure, saving agent resources."
          },
          {
            "keyword": "parallel",
            "detail": "Declares that the wrapped stages within the block run simultaneously in parallel executors."
          }
        ]
      }
    ]
  },
  {
    "id": "git",
    "num": "14",
    "title": "Git & GitHub Integration",
    "category": "integrations",
    "description": "Detailed guide on Git integrations, setting up SCM checkouts, branch strategies, and SSH configuration.",
    "tags": [
      "Git",
      "GitHub",
      "SCM"
    ],
    "search": "git github integration scm ssh keys credentials clone branch fetch strategy",
    "sections": [
      {
        "type": "lead",
        "text": "Connecting Jenkins to Git/GitHub allows developers to automate builds on code delivery. Authentication can be established securely using HTTPS tokens or SSH keys."
      },
      {
        "type": "ascii",
        "label": "Git Secure Connection Methods",
        "diagram": "\n┌─────────────────────────────────┐\n│         Jenkins Server          │\n│  ┌──────────────────────────┐   │\n│  │ Credentials Provider     │   │\n│  │   - SSH Private Key      │   │\n│  │   - GitHub PAT (HTTPS)   │   │\n│  └──────────────────────────┘   │\n└───────────────┬─────────────────┘\n                │ (Git TLS handshake)\n                ▼\n┌─────────────────────────────────┐\n│     GitHub Secure Server        │\n│  ┌──────────────────────────┐   │\n│  │ Repo Access / Permissions│   │\n│  └──────────────────────────┘   │\n└─────────────────────────────────┘\n"
      },
      {
        "type": "code",
        "title": "Advanced SCM Checkout with Sub-directory Isolation",
        "code": "pipeline {\n    agent any\n    \n    stages {\n        stage('Checkout Specific Repository Branch') {\n            steps {\n                // Perform complex checkout configuration instead of standard checkout scm\n                checkout([\n                    $class: 'GitSCM',\n                    branches: [[name: '*/release-v2']],\n                    userRemoteConfigs: [[\n                        url: 'git@github.com:myprofile/analytics-engine.git',\n                        credentialsId: 'jenkins-ssh-private-key'\n                    ]],\n                    extensions: [\n                        // Clone source code into a subfolder of the workspace\n                        [$class: 'RelativeTargetDirectory', relativeTargetDir: 'source-code'],\n                        // Fetch submodules recursively\n                        [$class: 'SubmoduleOption', recursiveSubmodules: true]\n                    ]\n                ])\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "GitSCM",
            "detail": "The underlying Java class used to initialize robust Git repository connections."
          },
          {
            "keyword": "credentialsId",
            "detail": "Standard token reference indicating the credential entry containing target SSH keys or credentials."
          },
          {
            "keyword": "RelativeTargetDirectory",
            "detail": "Forces SCM checkout clone directly inside a custom nested sub-folder rather than base root workspace."
          },
          {
            "keyword": "SubmoduleOption",
            "detail": "Plugin configurations to resolve git repositories nested as submodules automatically."
          }
        ]
      }
    ]
  },
  {
    "id": "webhooks",
    "num": "15",
    "title": "Webhooks & Triggers",
    "category": "integrations",
    "description": "How to configure webhooks, poll SCM, cron triggers, and secure webhook endpoint authentications.",
    "tags": [
      "Webhooks",
      "Triggers",
      "GitHub"
    ],
    "search": "webhooks triggers webhook github event poll scm cron triggers scheduling automated",
    "sections": [
      {
        "type": "lead",
        "text": "Triggers remove manual effort from CI/CD pipelines. Webhooks push notifications from GitHub to Jenkins instantly, while Cron configurations run builds on scheduled intervals."
      },
      {
        "type": "ascii",
        "label": "Git Push Event Webhook Loop",
        "diagram": "\n┌───────────┐         (Push Commit)        ┌──────────────┐\n│ Developer │ ───────────────────────────> │ Git Server   │\n└───────────┘                              └───────┬──────┘\n                                                   │\n                                         (HTTP POST /webhook)\n                                                   │\n                                                   ▼\n┌───────────┐       (Triggers Build)       ┌──────────────┐\n│ Build Run │ <─────────────────────────── │   Jenkins    │\n└───────────┘                              └──────────────┘\n"
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
  },
  {
    "id": "docker",
    "num": "16",
    "title": "Docker Integration",
    "category": "integrations",
    "description": "Integrating Docker containers with pipelines. Packaging, vulnerability scanning, and managing Docker sockets.",
    "tags": [
      "Docker",
      "Containers",
      "DevOps"
    ],
    "search": "docker integration container build push scan docker socket registry trivy socket daemon",
    "sections": [
      {
        "type": "lead",
        "text": "Combining Jenkins with Docker guarantees that your application builds in a predictable, isolated container ecosystem."
      },
      {
        "type": "ascii",
        "label": "Docker Socket Mounting Architecture",
        "diagram": "\n┌────────────────────────────────────────────────────────┐\n│                      Host Server                       │\n│  ┌───────────────────────┐   ┌──────────────────────┐  │\n│  │    Jenkins Container  │   │     Docker Daemon    │  │\n│  │                       │   │                      │  │\n│  │   - docker command    │   │                      │  │\n│  │   - mounted socket:   ├──>│                      │  │\n│  │   /var/run/docker.sock│   │  /var/run/docker.sock│  │\n│  └───────────────────────┘   └──────────────────────┘  │\n└────────────────────────────────────────────────────────┘\n"
      },
      {
        "type": "code",
        "title": "Production Pipeline: Build, Trivy Security Scan, and Push",
        "code": "pipeline {\n    agent any\n    \n    environment {\n        IMAGE_NAME = \"docker.io/myprofile/payment-api\"\n        IMAGE_TAG = \"${env.BUILD_NUMBER}\"\n        FULL_IMAGE = \"${env.IMAGE_NAME}:${env.IMAGE_TAG}\"\n    }\n    \n    stages {\n        stage('Lint & Compile') {\n            steps {\n                sh 'echo \"Performing code analysis...\"'\n            }\n        }\n        \n        stage('Docker Packaging') {\n            steps {\n                sh \"docker build -t ${env.FULL_IMAGE} .\"\n            }\n        }\n        \n        stage('Trivy Security Audit') {\n            steps {\n                // Exit build if image contains HIGH or CRITICAL level vulnerabilities\n                sh \"trivy image --severity HIGH,CRITICAL --exit-code 1 ${env.FULL_IMAGE}\"\n            }\n        }\n        \n        stage('Publish Image') {\n            steps {\n                withCredentials([usernamePassword(\n                    credentialsId: 'docker-registry-creds',\n                    usernameVariable: 'REGISTRY_USER',\n                    passwordVariable: 'REGISTRY_PASS'\n                )]) {\n                    sh \"echo ${env.REGISTRY_PASS} | docker login -u ${env.REGISTRY_USER} --password-stdin\"\n                    sh \"docker push ${env.FULL_IMAGE}\"\n                    sh \"docker logout\"\n                }\n            }\n        }\n    }\n    \n    post {\n        always {\n            // Clean local build images to avoid disk bloat\n            sh \"docker rmi ${env.FULL_IMAGE} || true\"\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "trivy image",
            "detail": "Executes vulnerability scan on the built Docker image before pushing."
          },
          {
            "keyword": "--exit-code 1",
            "detail": "Forces the Trivy execution command to crash the build if matching severity limits are caught."
          },
          {
            "keyword": "docker login --password-stdin",
            "detail": "Feeds password from secure environmental inputs safely without leaking logs."
          },
          {
            "keyword": "docker rmi",
            "detail": "Forces deletion of local built docker images after completion, freeing disk space."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "warn",
        "html": "<strong>Permission Denied Fix:</strong> If Jenkins fails to communicate with your Docker daemon, run: <code>sudo usermod -aG docker jenkins && sudo systemctl restart jenkins</code> on your agent node to grant permission."
      }
    ]
  },
  {
    "id": "credentials",
    "num": "17",
    "title": "Credentials & Secrets",
    "category": "integrations",
    "description": "Managing passwords, API tokens, SSH keys, and using withCredentials wrapper safely.",
    "tags": [
      "Credentials",
      "Security",
      "Secrets"
    ],
    "search": "credentials secrets security passwords api tokens keys wrapper secure store masking",
    "sections": [
      {
        "type": "lead",
        "text": "Jenkins features a secure credentials storage vault that masks sensitive credentials in console logs and prevents secrets from leaking."
      },
      {
        "type": "ascii",
        "label": "Credentials Masking Mechanism",
        "diagram": "\n ┌──────────────────────┐\n │   Credentials Store  │ ---> [ Secret token: \"my-super-secret-key\" ]\n └──────────┬───────────┘\n            │ (Injected via withCredentials)\n            ▼\n ┌──────────────────────┐\n │   Pipeline Engine    │ ---> [ Console logs: \"Authenticating with *****\" ]\n └──────────────────────┘\n"
      },
      {
        "type": "code",
        "title": "Using Multiple Credential Types Securely",
        "code": "pipeline {\n    agent any\n    \n    stages {\n        stage('Deploy with SSH Key') {\n            steps {\n                withCredentials([\n                    sshUserPrivateKey(\n                        credentialsId: 'prod-target-ssh',\n                        keyFileVariable: 'PRIVATE_KEY_PATH',\n                        usernameVariable: 'SSH_USER_NAME'\n                    ),\n                    string(\n                        credentialsId: 'external-api-token',\n                        variable: 'API_TOKEN'\n                    )\n                ]) {\n                    sh \"\"\"\n                        echo \"Executing secure API connection...\"\n                        curl -H \"Authorization: Bearer \\$API_TOKEN\" https://api.prod.com/health\n                        \n                        ssh -i \\$PRIVATE_KEY_PATH -o StrictHostKeyChecking=no \\$SSH_USER_NAME@prod.server.com \"docker restart app\"\n                    \"\"\"\n                }\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "withCredentials",
            "detail": "The built-in block wrapper allocating secure bindings and automatic log masking."
          },
          {
            "keyword": "sshUserPrivateKey",
            "detail": "Binds username and creates a secure temp file path reference holding private SSH credentials."
          },
          {
            "keyword": "StrictHostKeyChecking=no",
            "detail": "Prevents SSH connections from prompting or failing due to unverified new server hosts."
          },
          {
            "keyword": "API_TOKEN",
            "detail": "Variable holding secure raw API tokens mapped directly from credential store settings."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "warn",
        "html": "<strong>Security best practice:</strong> Never use <code>echo</code> to print variable names containing credentials. Jenkins will attempt to mask them, but complex formatting or base64 encoding can bypass standard log filters."
      }
    ]
  },
  {
    "id": "rbac_user_management",
    "num": "17-A",
    "title": "Role-Based Access Control (RBAC)",
    "category": "integrations",
    "description": "Comprehensive guide to configure Role-based Authorization Strategy, define Global & Project roles, and assign user policies.",
    "tags": [
      "Security",
      "RBAC",
      "User Management"
    ],
    "search": "rbac user management role based access control security authorization strategy authorization global project roles pattern matching",
    "sections": [
      {
        "type": "lead",
        "text": "Role-Based Access Control (RBAC) in Jenkins provides a secure, granular way to configure authorization permissions using the <strong>Role-based Authorization Strategy</strong> plugin."
      },
      {
        "type": "ascii",
        "label": "Jenkins Authorization Map",
        "diagram": "\n┌─────────────────────────────────────────────────────────────────┐\n│                    Jenkins Authorization Map                    │\n├─────────────────────────────────────────────────────────────────┤\n│                                                                 │\n│             ┌──────────────┐         ┌──────────────────┐       │\n│             │ Active Users │ ──────> │   Assigned Roles │       │\n│             └──────────────┘         └────────┬─────────┘       │\n│                                               │                 │\n│                      ┌────────────────────────┴─────────┐       │\n│                      ▼                                  ▼       │\n│           ┌────────────────────┐             ┌────────────────┐ │\n│           │    Global Roles    │             │  Project Roles │ │\n│           │ - Admin: Full      │             │ - Dev: dev-*   │ │\n│           │ - ReadOnly: Read   │             │ - QA: qa-*     │ │\n│           └────────────────────┘             └────────────────┘ │\n└─────────────────────────────────────────────────────────────────┘\n"
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
        "code": "// Jenkins Role-Based Access Control Setup Logic\nclass JenkinsRBACConfiguration {\n    static void configureStrategy() {\n        // 1. Enable Role-Based Authorization Strategy programmatically\n        def authStrategy = new com.michelin.cio.hudson.plugins.rolestrategy.RoleBasedAuthorizationStrategy()\n        jenkins.model.Jenkins.instance.setAuthorizationStrategy(authStrategy)\n        \n        // 2. Define Global Roles (Overall Permissions)\n        authStrategy.addRole(\"globalRoles\", new Role(\"admin\", \"Overall/Administer\"))\n        authStrategy.addRole(\"globalRoles\", new Role(\"readonly\", \"Overall/Read, Job/Read\"))\n        \n        // 3. Define Project-Scoped (Item) Roles with regex matching pattern\n        authStrategy.addRole(\"projectRoles\", new Role(\"developer\", \"Job/Read, Job/Build, Job/Cancel\", \"dev-.*\"))\n        authStrategy.addRole(\"projectRoles\", new Role(\"tester\", \"Job/Read, Job/Discover\", \"qa-.*\"))\n        \n        // 4. Map active users to their respective roles\n        authStrategy.assignRole(\"globalRoles\", \"admin\", \"admin_user\")\n        authStrategy.assignRole(\"projectRoles\", \"developer\", \"john_dev\")\n    }\n}",
        "explanation": [
          {
            "keyword": "RoleBasedAuthorizationStrategy",
            "detail": "The core Java class provided by the RBAC plugin to replace default security systems."
          },
          {
            "keyword": "globalRoles",
            "detail": "Role category that handles server-wide actions like plugin management, configuration, and audit logs."
          },
          {
            "keyword": "dev-.*",
            "detail": "A regex pattern matching any job name that starts with 'dev-' to apply developers permissions."
          },
          {
            "keyword": "assignRole",
            "detail": "Associates a defined user account or security group with a specific global or project role."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "html": "<strong>GUI Configuration Tip:</strong> Always make sure to define at least one <code>admin</code> global role containing the <code>Overall/Administer</code> permission before enabling the Role-Based Strategy globally, otherwise you may lock yourself out of the system."
      }
    ]
  },
  {
    "id": "plugins",
    "num": "18",
    "title": "Essential Plugins",
    "category": "integrations",
    "description": "Plugin architecture, managing installations, must-have plugins for DevOps integration, and troubleshooting failures.",
    "tags": [
      "Plugins",
      "Configuration",
      "Extensions"
    ],
    "search": "plugins manage installation lifecycle extensions modules ecosystem list restart failures",
    "sections": [
      {
        "type": "lead",
        "text": "Plugins extend the core capabilities of Jenkins, allowing teams to integrate external cloud platforms, messaging services, and metrics collection tools easily."
      },
      {
        "type": "ascii",
        "label": "Core Extensibility Architecture",
        "diagram": "\n ┌───────────────────────────────────────────────┐\n │               Jenkins Core Engine             │\n └───────────────────────┬───────────────────────┘\n                         │ (Plugin API Interface)\n        ┌────────────────┼────────────────┐\n        ▼                ▼                ▼\n ┌─────────────┐  ┌─────────────┐  ┌─────────────┐\n │ Git Plugin  │  │Slack Plugin │  │Sonar Plugin │\n └─────────────┘  └─────────────┘  └─────────────┘\n"
      },
      {
        "type": "table",
        "headers": [
          "Must-Have Plugin",
          "Purpose",
          "Production Value"
        ],
        "rows": [
          [
            "Pipeline",
            "Enables Declarative and Scripted Jenkinsfiles.",
            "Essential"
          ],
          [
            "Git / GitHub",
            "Allows cloning repositories and receiving webhook triggers.",
            "Essential"
          ],
          [
            "Docker Pipeline",
            "Provides native DSL to build, scan, and run Docker containers.",
            "High"
          ],
          [
            "Slack Notification",
            "Post real-time build results into channels.",
            "Medium"
          ],
          [
            "SonarQube Scanner",
            "Enforces quality gates and security audits.",
            "High"
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "warn",
        "html": "<strong>Plugin Dependency Bloat:</strong> Limit the number of installed plugins. Too many active plugins consume system memory, slow down boot times, and increase the server's security attack surface."
      }
    ]
  },
  {
    "id": "devsecops_pipeline",
    "num": "18-A",
    "title": "DevSecOps Security Scanning",
    "category": "integrations",
    "description": "Comprehensive guide to integrate SonarQube SAST, OWASP Dependency SCA, and Trivy container audits directly in Jenkins files.",
    "tags": [
      "Security",
      "DevSecOps",
      "Trivy",
      "SonarQube"
    ],
    "search": "devsecops pipeline security scanning owasp dependency check trivy docker scan sonarqube quality gates vulnerabilities static code analysis",
    "sections": [
      {
        "type": "lead",
        "text": "<strong>DevSecOps</strong> shifts security left by running automated static code analysis (SonarQube SAST), software composition analysis (OWASP Dependency-Check SCA), and container audits (Trivy) on every build stage."
      },
      {
        "type": "ascii",
        "label": "DevSecOps Pipeline Scan Architecture",
        "diagram": "\n┌─────────────────────────────────────────────────────────────────┐\n│                     DevSecOps Scanning Flow                     │\n├─────────────────────────────────────────────────────────────────┤\n│                                                                 │\n│  ┌──────────────┐      ┌──────────────┐      ┌───────────────┐  │\n│  │ SonarQube    │ ───> │ OWASP Check  │ ───> │ Trivy Image   │  │\n│  │ (SAST Scan)  │      │ (SCA Scan)   │      │ (Container)   │  │\n│  └──────────────┘      └──────────────┘      └───────────────┘  │\n│                                                                 │\n│           ┌─────────────────────────────────────────┐           │\n│           │            Jenkins Pipeline             │           │\n│           │       (Enforces Quality Gates)          │           │\n│           └─────────────────────────────────────────┘           │\n└─────────────────────────────────────────────────────────────────┘\n"
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
        "code": "pipeline {\n    agent any\n    \n    environment {\n        SCANNER_HOME = tool 'SonarQube-Scanner'\n        IMAGE_NAME = \"enterprise-app:latest\"\n    }\n    \n    stages {\n        stage('Checkout Code') {\n            steps {\n                checkout scm\n            }\n        }\n        \n        stage('SonarQube SAST Audit') {\n            steps {\n                withSonarQubeEnv('SonarQube-Server') {\n                    sh \"\\${env.SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectName=enterprise-app\"\n                }\n                timeout(time: 10, unit: 'MINUTES') {\n                    script {\n                        def qg = waitForQualityGate()\n                        if (qg.status != 'OK') {\n                            error \"SonarQube Quality Gate failed! Aborting build.\"\n                        }\n                    }\n                }\n            }\n        }\n        \n        stage('OWASP Dependency Check (SCA)') {\n            steps {\n                // Run library vulnerability audits and output XML/HTML reports\n                dependencyCheck additionalArguments: '--format XML --format HTML', odocName: 'dependency-check-report'\n                dependencyCheckPublisher pattern: 'target/dependency-check-report.xml'\n            }\n        }\n        \n        stage('Docker Compile') {\n            steps {\n                sh \"docker build -t \\${env.IMAGE_NAME} .\"\n            }\n        }\n        \n        stage('Trivy Container Scan') {\n            steps {\n                // Scan Docker container image for security CVE leaks and fail the build on HIGH/CRITICAL\n                sh \"trivy image --severity HIGH,CRITICAL --format table --exit-code 1 \\${env.IMAGE_NAME}\"\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "waitForQualityGate",
            "detail": "Built-in webhook listener that pauses pipeline until SonarQube returns standard green quality check status."
          },
          {
            "keyword": "dependencyCheck",
            "detail": "OWASP scanner plugin utility scanning client jar files and package locks against CVE catalogs."
          },
          {
            "keyword": "trivy image",
            "detail": "A lightweight standalone security scan command assessing target containers directly before push staging."
          },
          {
            "keyword": "--exit-code 1",
            "detail": "Tells Trivy scanner to return system failure exit code 1 if matching high/critical severity security flaws are found."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "warn",
        "html": "<strong>DevSecOps Tip:</strong> Run vulnerability audits before compiling the Docker container. This keeps base builds clean, avoids waste, and prevents developers from shipping unsecured packages."
      }
    ]
  },
  {
    "id": "shared-libs",
    "num": "19",
    "title": "Shared Libraries",
    "category": "advanced",
    "description": "How to build Global Shared Libraries, folder structures, vars/ files, custom classes, and importing libraries.",
    "tags": [
      "Shared Libraries",
      "Advanced",
      "Groovy"
    ],
    "search": "shared libraries global vars class resources groovy dynamic code dry reusable configuration",
    "sections": [
      {
        "type": "lead",
        "text": "Shared Libraries allow teams to extract duplicate Jenkinsfile logic into a dedicated repository, keeping pipelines DRY (Don't Repeat Yourself) across the organization."
      },
      {
        "type": "ascii",
        "label": "Shared Library Repository Structure",
        "diagram": "\nshared-library-repository/\n├── src/                       # Custom Object Classes (Groovy)\n│   └── org/\n│       └── company/\n│           └── Helper.groovy\n├── vars/                      # Global step scripts (Reusable in Jenkinsfiles)\n│   ├── buildDocker.groovy\n│   └── notifySlack.groovy\n└── resources/                 # Non-Groovy templates (JSON, YAML, XML)\n    └── configs/\n        └── template.json\n"
      },
      {
        "type": "code",
        "title": "Global Step Definition: vars/buildDocker.groovy",
        "code": "// vars/buildDocker.groovy\ndef call(Map config = [:]) {\n    def imageName = config.imageName ?: 'app'\n    def imageTag = config.imageTag ?: 'latest'\n    \n    echo \"Running custom library docker build for ${imageName}:${imageTag}\"\n    sh \"docker build -t ${imageName}:${imageTag} .\"\n}",
        "explanation": [
          {
            "keyword": "def call",
            "detail": "The designated method entry point in Groovy that Jenkins triggers when loading custom step scripts."
          },
          {
            "keyword": "Map config",
            "detail": "Allows developers to pass multiple parameter arguments into the shared library function steps."
          }
        ]
      },
      {
        "type": "code",
        "title": "Using the Shared Library in a Jenkinsfile",
        "code": "// Import library dynamically from Git\n@Library('my-shared-library@main') _\n\npipeline {\n    agent any\n    \n    stages {\n        stage('Docker Build') {\n            steps {\n                // Call global custom step defined in shared library\n                buildDocker(\n                    imageName: 'my-custom-app',\n                    imageTag: \"${env.BUILD_NUMBER}\"\n                )\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "@Library",
            "detail": "Tells Jenkins to fetch the Global Shared Library configuration containing target step codes."
          },
          {
            "keyword": "_",
            "detail": "Underlying wildcard telling Jenkins to expose all global library variables immediately."
          },
          {
            "keyword": "buildDocker",
            "detail": "Triggers the custom step script compiled in the shared library vars folder directly."
          }
        ]
      },
      {
        "type": "code",
        "title": "Enterprise Shared Library Wrapper: vars/standardPipeline.groovy",
        "code": "// vars/standardPipeline.groovy\ndef call(Map config = [:]) {\n    pipeline {\n        agent { label config.agentLabel ?: 'any' }\n        \n        stages {\n            stage('Initialize App') {\n                steps {\n                    echo \"Starting build pipeline for application ${config.appName}\"\n                }\n            }\n            stage('Compile & Test') {\n                steps {\n                    sh config.buildScript ?: 'npm run build'\n                }\n            }\n            stage('Trigger Deployment') {\n                when { branch 'main' }\n                steps {\n                    echo \"Deploying application to environment: ${config.environment ?: 'staging'}\"\n                }\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "def call(Map config)",
            "detail": "Declares a parametrized global function trigger block that acts as the pipeline template engine."
          },
          {
            "keyword": "config.agentLabel",
            "detail": "Dynamic map variable parsed at runtime to specify which dynamic agent handles target builds."
          },
          {
            "keyword": "when { branch 'main' }",
            "detail": "Enforces a release guard ensuring deployment processes trigger only on the main Git branch."
          }
        ]
      },
      {
        "type": "code",
        "title": "Invoking the Enterprise Pipeline Template in a Jenkinsfile",
        "code": "// Import the enterprise shared library pipeline template\n@Library('enterprise-shared-library@v1.2') _\n\nstandardPipeline(\n    appName: 'inventory-service',\n    agentLabel: 'kubernetes-runner',\n    buildScript: 'mvn clean package -DskipTests=true',\n    environment: 'production'\n)",
        "explanation": [
          {
            "keyword": "@Library('enterprise-shared-library@v1.2')",
            "detail": "Safely locks standard pipeline templates to a specific version tag or release branch."
          },
          {
            "keyword": "standardPipeline",
            "detail": "Invokes the global pipeline step wrapper which automatically structures stages, tests, and guards."
          }
        ]
      },
      {
        "type": "code",
        "title": "Real-time Slack Notification Step: vars/notifySlack.groovy",
        "code": "// vars/notifySlack.groovy\ndef call(String buildStatus) {\n    def color = '#A30200' // Red for failures\n    def emoji = '❌'\n    \n    if (buildStatus == 'SUCCESS') {\n        color = '#2EB886' // Green for success\n        emoji = '✅'\n    } else if (buildStatus == 'UNSTABLE') {\n        color = '#DAA038' // Yellow for unstable\n        emoji = '⚠️'\n    }\n    \n    slackSend(\n        color: color,\n        message: \"\\${emoji} *Build #\\${env.BUILD_NUMBER}* for *\\${env.JOB_NAME}*\\n\" +\n                 \"Status: *\\${buildStatus}*\\n\" +\n                 \"Commit: \\`\\${sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()}\\`\"\n    )\n}",
        "explanation": [
          {
            "keyword": "buildStatus",
            "detail": "Active string parameter indicating the current state of build outcomes (SUCCESS, FAILURE)."
          },
          {
            "keyword": "slackSend",
            "detail": "Plugin command dispatching formatted messages directly to integrated team messaging channels."
          }
        ]
      },
      {
        "type": "code",
        "title": "Real-time Quality Gates Step: vars/runStaticAnalysis.groovy",
        "code": "// vars/runStaticAnalysis.groovy\ndef call(Map config = [:]) {\n    def sonarHost = config.sonarHost ?: 'http://sonarqube.internal:9000'\n    \n    echo \"Starting static code analysis with SonarQube...\"\n    withSonarQubeEnv(config.serverName ?: 'SonarQube-Server') {\n        sh \"mvn sonar:sonar -Dsonar.host.url=\\${sonarHost} -Dsonar.projectName=\\${config.projectName}\"\n    }\n    \n    timeout(time: 10, unit: 'MINUTES') {\n        def qg = waitForQualityGate()\n        if (qg.status != 'OK') {\n            error \"Pipeline aborted due to SonarQube Quality Gate failure: \\${qg.status}\"\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "withSonarQubeEnv",
            "detail": "Secure scope injecting configured server authentication details without logs leaks."
          },
          {
            "keyword": "waitForQualityGate",
            "detail": "Blocks progress programmatically until SonarQube server replies with gate test feedback."
          }
        ]
      },
      {
        "type": "code",
        "title": "Comprehensive Shared Library Demo Pipeline",
        "code": "// Import the global enterprise shared library\n@Library('enterprise-shared-library@main') _\n\npipeline {\n    agent { label 'docker-executor' }\n    \n    stages {\n        stage('Checkout') {\n            steps {\n                checkout scm\n            }\n        }\n        stage('Quality Gates') {\n            steps {\n                // Call reusable SonarQube scan step\n                runStaticAnalysis(\n                    projectName: 'order-service-api',\n                    sonarHost: 'https://sonar.company.com'\n                )\n            }\n        }\n        stage('Docker Compile') {\n            steps {\n                // Call custom reusable Docker build step\n                buildDocker(\n                    imageName: 'order-service-api',\n                    imageTag: \"\\${env.BUILD_NUMBER}\"\n                )\n            }\n        }\n    }\n    \n    post {\n        always {\n            // Call reusable Slack notification step\n            notifySlack(currentBuild.result ?: 'SUCCESS')\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "runStaticAnalysis",
            "detail": "Invokes the static analysis shared helper, ensuring strict code gates are verified."
          },
          {
            "keyword": "notifySlack",
            "detail": "Triggers the dynamic status notification wrapper block to dispatch post-build success/failure logs."
          }
        ]
      }
    ]
  },
  {
    "id": "multibranch",
    "num": "20",
    "title": "Multibranch Pipelines",
    "category": "advanced",
    "description": "Setting up Multibranch pipelines, SCM branch detection, Pull Request builds, and build isolation.",
    "tags": [
      "Multibranch",
      "Advanced",
      "Git"
    ],
    "search": "multibranch pipeline branch detection pull request github scanning indexing strategy automation",
    "sections": [
      {
        "type": "lead",
        "text": "Multibranch Pipelines dynamically scan your SCM repository for any branch containing a <code>Jenkinsfile</code>, auto-creating active pipelines for active code branches."
      },
      {
        "type": "ascii",
        "label": "Multibranch Auto-Discovery",
        "diagram": "\n ┌──────────────────────┐\n │ Git Repo Repository  │\n │  ├── main            │ ── (SCM Scan) ──> [ Jenkins Job: my-project/main ]\n │  ├── feature/auth    │ ── (SCM Scan) ──> [ Jenkins Job: my-project/feature-auth ]\n │  └── release-v1      │ ── (SCM Scan) ──> [ Jenkins Job: my-project/release-v1 ]\n └──────────────────────┘\n"
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
  },
  {
    "id": "env-vars",
    "num": "21",
    "title": "Environment Variables",
    "category": "advanced",
    "description": "Comprehensive guide to environment variables. Built-in variables, setting custom env variables, and executing dynamic scripts.",
    "tags": [
      "Environment Variables",
      "Configuration",
      "Syntax"
    ],
    "search": "environment variables env vars env block builtin dynamic variables execution",
    "sections": [
      {
        "type": "lead",
        "text": "Environment variables provide system configuration data to shell steps during pipeline runs, containing both standard build information and user-defined variables."
      },
      {
        "type": "ascii",
        "label": "Environment Scope Levels",
        "diagram": "\n┌──────────────────────────────────────────────┐\n│ Global Server Env Variables                  │\n│  ┌────────────────────────────────────────┐  │\n│  │ Pipeline Env Block (All Stages)        │  │\n│  │  ┌──────────────────────────────────┐  │  │\n│  │  │ Stage Env Block (Single Stage)   │  │  │\n│  │  │  ┌────────────────────────────┐  │  │  │\n│  │  │  │ Shell Process Variable     │  │  │  │\n│  │  │  └────────────────────────────┘  │  │  │\n│  │  └──────────────────────────────────┘  │  │\n│  └────────────────────────────────────────┘  │\n└──────────────────────────────────────────────┘\n"
      },
      {
        "type": "code",
        "title": "Setting and Reading Dynamic Variables in Pipelines",
        "code": "pipeline {\n    agent any\n    \n    environment {\n        // Global pipeline environment variable\n        DEPLOY_SERVER = \"prod-server-01\"\n    }\n    \n    stages {\n        stage('Generate Dynamic Variables') {\n            environment {\n                STAGE_SPECIFIC = \"local-value\"\n            }\n            steps {\n                // Accessing built-in environment variables\n                echo \"Executing Build Number: ${env.BUILD_NUMBER}\"\n                echo \"Running inside Workspace: ${env.WORKSPACE}\"\n                \n                // Fetch variable outputs from shell scripts\n                script {\n                    env.GIT_SHORT_SHA = sh(\n                        script: 'git rev-parse --short HEAD', \n                        returnStdout: true\n                    ).trim()\n                }\n                \n                echo \"Dynamically calculated SHA: ${env.GIT_SHORT_SHA}\"\n            }\n        }\n        \n        stage('Validate Environment Context') {\n            steps {\n                // Read variables inside bash execution\n                sh 'echo \"Target Deployment Server: $DEPLOY_SERVER\"'\n                sh 'echo \"Short commit SHA: $GIT_SHORT_SHA\"'\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "env.BUILD_NUMBER",
            "detail": "The unique auto-incrementing identifier allocated by Jenkins to identify the current run."
          },
          {
            "keyword": "env.WORKSPACE",
            "detail": "A built-in variable referencing the exact local path on worker agent hosting target files."
          },
          {
            "keyword": "returnStdout: true",
            "detail": "Tells the shell step command execution to capture and output logs directly as string results."
          },
          {
            "keyword": ".trim()",
            "detail": "Groovy syntax tool to remove blank space or newline characters returned from script executables."
          }
        ]
      }
    ]
  },
  {
    "id": "notifications",
    "num": "22",
    "title": "Notifications & Alerts",
    "category": "advanced",
    "description": "Sending build notifications via Slack and emails during success or failure pipeline post events.",
    "tags": [
      "Notifications",
      "Alerts",
      "Slack"
    ],
    "search": "notifications slack email alerts alerts communications messaging integrations",
    "sections": [
      {
        "type": "lead",
        "text": "Automated alert configurations ensure the team is immediately informed of build warnings, successes, and pipeline failures."
      },
      {
        "type": "ascii",
        "label": "Pipeline Notification Loop",
        "diagram": "\n┌────────────────────┐\n│ Pipeline Execution │\n│  - Fail or Success │\n└─────────┬──────────┘\n          │ (Triggers post step)\n          ▼\n┌────────────────────┐          (HTTPS webhook API)         ┌──────────────┐\n│ Notification step  │ ───────────────────────────────────> │ Slack / Teams│\n└────────────────────┘                                      └──────────────┘\n"
      },
      {
        "type": "code",
        "title": "Configuring Slack Alerts inside Post Blocks",
        "code": "pipeline {\n    agent any\n    \n    stages {\n        stage('Test Suite') {\n            steps {\n                sh 'npm run test'\n            }\n        }\n    }\n    \n    post {\n        success {\n            slackSend(\n                color: '#36a64f',\n                message: \"SUCCESS: Job '${env.JOB_NAME}' [Build #${env.BUILD_NUMBER}] successfully verified and completed.\"\n            )\n        }\n        failure {\n            slackSend(\n                color: '#danger',\n                message: \"FAILURE: Job '${env.JOB_NAME}' [Build #${env.BUILD_NUMBER}] has failed! Please inspect logs at: ${env.BUILD_URL}\"\n            )\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "slackSend",
            "detail": "Built-in integration step command from Slack plugin to dispatch formatted UI notifications."
          },
          {
            "keyword": "#36a64f",
            "detail": "Standard green HSL color hex indicating build success reports."
          },
          {
            "keyword": "env.BUILD_URL",
            "detail": "A built-in variable providing absolute server URL link to the current job run dashboard."
          }
        ]
      },
      {
        "type": "code",
        "title": "Customized HTML Emails with Attachments: emailext",
        "code": "pipeline {\n    agent any\n    \n    stages {\n        stage('Compile') {\n            steps {\n                sh 'echo \"Compiling codebase...\"'\n            }\n        }\n    }\n    \n    post {\n        always {\n            // Trigger highly customized emails using Email Extension Plugin\n            emailext(\n                to: 'devops-team@company.com, engineering-leads@company.com',\n                subject: \"Jenkins Build Alert: Job '\\${env.JOB_NAME}' - Run #\\${env.BUILD_NUMBER} - Status: \\${currentBuild.currentResult}\",\n                body: \"\"\"<h3>Enterprise Build Notification Report</h3>\n                         <p>The build orchestration pipeline has concluded with status: <strong>\\${currentBuild.currentResult}</strong></p>\n                         <p>To inspect terminal outputs or check artifacts, visit: <a href=\"\\${env.BUILD_URL}\">\\${env.BUILD_URL}</a></p>\n                         <br>\n                         <p><i>Note: Full execution console logs have been attached to this email.</i></p>\n                         <br>\n                         <p>--- System generated message from Jenkins Controller ---</p>\"\"\",\n                mimeType: 'text/html',\n                attachLog: true\n            )\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "emailext",
            "detail": "Extended mail utility from Email Extension plugin that supports advanced templates and attachments."
          },
          {
            "keyword": "attachLog: true",
            "detail": "Instructs Jenkins to automatically capture and append raw console build logs to the email."
          },
          {
            "keyword": "currentBuild.currentResult",
            "detail": "Dynamic variable holding the overall build execution result (e.g. SUCCESS, FAILURE)."
          },
          {
            "keyword": "mimeType: 'text/html'",
            "detail": "Specifies that the email body contains HTML layout structures rather than simple raw text."
          }
        ]
      }
    ]
  },
  {
    "id": "project1",
    "num": "P1",
    "title": "Node.js CI Project",
    "category": "projects",
    "description": "Project 1: Setup a fully automated Continuous Integration pipeline for a Node.js web application.",
    "tags": [
      "Project",
      "Node.js",
      "CI"
    ],
    "search": "project 1 nodejs ci continuous integration test package jest lint check workspace cache project1",
    "sections": [
      {
        "type": "lead",
        "text": "<strong>Project 1 Objective:</strong> Configure an automated CI pipeline that checks out code, installs dependencies, runs static analysis checks, and executes unit tests for a modern Node.js web app."
      },
      {
        "type": "ascii",
        "label": "Node.js Pipeline Lifecycle",
        "diagram": "\n[ Git Commit ]\n      │\n      ▼\n┌──────────────┐      ┌──────────────┐      ┌──────────────┐      ┌──────────────┐\n│   Checkout   │ ───> │ Dependency   │ ───> │  ESLint Check│ ───> │  Jest Tests  │\n│  Repository  │      │ Installation │      │  (Analysis)  │      │  (Coverage)  │\n└──────────────┘      └──────────────┘      └──────────────┘      └──────────────┘\n"
      },
      {
        "type": "code",
        "title": "Comprehensive Node.js CI Pipeline Configuration",
        "code": "pipeline {\n    agent { label 'node-runner' }\n    \n    options {\n        timeout(time: 15, unit: 'MINUTES')\n        buildDiscarder(logRotator(numToKeepStr: '10'))\n    }\n    \n    stages {\n        stage('SCM Checkout') {\n            steps {\n                checkout scm\n            }\n        }\n        \n        stage('Dependency Installation') {\n            steps {\n                sh 'npm ci' // Clean installation for reproducible builds\n            }\n        }\n        \n        stage('Static Code Analysis') {\n            steps {\n                sh 'npm run lint'\n            }\n        }\n        \n        stage('Unit Testing') {\n            steps {\n                sh 'npm test -- --coverage'\n            }\n        }\n    }\n    \n    post {\n        always {\n            // Save coverage outputs permanently in Jenkins\n            archiveArtifacts artifacts: 'coverage/**', allowEmptyArchive: true\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "npm ci",
            "detail": "Installs strict npm project dependencies using package-lock locks, preventing build mutations."
          },
          {
            "keyword": "archiveArtifacts",
            "detail": "Instructs Jenkins to archive and store folders permanently (like test coverages) inside the master node repository."
          }
        ]
      }
    ]
  },
  {
    "id": "project2",
    "num": "P2",
    "title": "Docker CI/CD Project",
    "category": "projects",
    "description": "Project 2: Continuous Integration & Deployment pipeline using containerized Docker platforms.",
    "tags": [
      "Project",
      "Docker",
      "CD"
    ],
    "search": "project 2 docker cd trivy dockerhub containerized registry image scan project2",
    "sections": [
      {
        "type": "lead",
        "text": "<strong>Project 2 Objective:</strong> Create a containerized pipeline. We build a production Docker image, run security scans to ensure safety, and upload to DockerHub."
      },
      {
        "type": "ascii",
        "label": "Containerized Build Flow",
        "diagram": "\n┌──────────────┐      ┌────────────────┐      ┌───────────────────┐      ┌─────────────────┐\n│  Git Source  │ ───> │  Docker Build  │ ───> │    Trivy Scan     │ ───> │  Push Registry  │\n│  Repository  │      │ (Docker Image) │      │ (Vulnerabilities) │      │  (Docker Hub)   │\n└──────────────┘      └────────────────┘      └───────────────────┘      └─────────────────┘\n"
      },
      {
        "type": "code",
        "title": "Complete Docker CI/CD Pipeline Configuration",
        "code": "pipeline {\n    agent any\n    \n    environment {\n        HUB_ACCOUNT = \"mypublicaccount\"\n        APP_NAME = \"docker-web-service\"\n        IMAGE_NAME = \"${env.HUB_ACCOUNT}/${env.APP_NAME}\"\n        IMAGE_TAG = \"build-${env.BUILD_NUMBER}\"\n    }\n    \n    stages {\n        stage('Source Clone') {\n            steps {\n                checkout scm\n            }\n        }\n        \n        stage('Container Build') {\n            steps {\n                sh \"docker build -t ${env.IMAGE_NAME}:${env.IMAGE_TAG} .\"\n            }\n        }\n        \n        stage('Image Vulnerability Audit') {\n            steps {\n                sh \"trivy image --severity HIGH,CRITICAL ${env.IMAGE_NAME}:${env.IMAGE_TAG}\"\n            }\n        }\n        \n        stage('Upload Registry') {\n            steps {\n                withCredentials([usernamePassword(\n                    credentialsId: 'docker-hub-credentials',\n                    usernameVariable: 'REGISTRY_USER',\n                    passwordVariable: 'REGISTRY_PASS'\n                )]) {\n                    sh \"echo \\$REGISTRY_PASS | docker login -u \\$REGISTRY_USER --password-stdin\"\n                    sh \"docker push ${env.IMAGE_NAME}:${env.IMAGE_TAG}\"\n                }\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "docker build",
            "detail": "Packages application codes into an isolated container layout using definitions set inside Dockerfile."
          },
          {
            "keyword": "trivy image --severity HIGH,CRITICAL",
            "detail": "Instructs Trivy scanner tool to execute audit checks focusing only on high and critical level security issues."
          }
        ]
      }
    ]
  },
  {
    "id": "project3",
    "num": "P3",
    "title": "AWS EC2 Deployment",
    "category": "projects",
    "description": "Project 3: Deep dive project explaining secure continuous deployment to remote AWS EC2 server stacks via SSH keys.",
    "tags": [
      "Project",
      "AWS",
      "EC2"
    ],
    "search": "project 3 aws ec2 deploy ssh deployment setup variables configuration project3",
    "sections": [
      {
        "type": "lead",
        "text": "<strong>Project 3 Objective:</strong> Complete continuous deployment pipeline that securely connects to an AWS EC2 instance using an SSH key and deploys application services."
      },
      {
        "type": "ascii",
        "label": "AWS Deployment Pipeline",
        "diagram": "\n ┌──────────────────┐\n │  Jenkins Server  │ ────── (Deploy Trigger) ───┐\n └──────────────────┘                            │\n                                                 ▼\n ┌──────────────────────────────────────────────────────────────────┐\n │                       AWS EC2 Instance                           │\n │  ┌──────────────────────┐            ┌───────────────────────┐   │\n │  │      SSH Port 22     │ ─────────> │   Docker Deployment   │   │\n │  └──────────────────────┘            └───────────────────────┘   │\n └──────────────────────────────────────────────────────────────────┘\n"
      },
      {
        "type": "code",
        "title": "AWS Production Deployment Pipeline Configuration",
        "code": "pipeline {\n    agent any\n    \n    environment {\n        AWS_EC2_IP = \"54.210.85.99\"\n        SSH_CRED_ID = \"aws-ec2-private-key\"\n    }\n    \n    stages {\n        stage('Source Fetch') {\n            steps {\n                checkout scm\n            }\n        }\n        \n        stage('Deploy to EC2 Instance') {\n            steps {\n                withCredentials([sshUserPrivateKey(\n                    credentialsId: env.SSH_CRED_ID,\n                    keyFileVariable: 'PRIVATE_KEY_PATH',\n                    usernameVariable: 'SSH_USER'\n                )]) {\n                    // Connect and deploy on target server\n                    sh \"\"\"\n                        ssh -i \\$PRIVATE_KEY_PATH -o StrictHostKeyChecking=no \\$SSH_USER@${env.AWS_EC2_IP} \\\n                        \"docker pull myrepo/app:latest && \\\n                         docker stop web-app || true && \\\n                         docker rm web-app || true && \\\n                         docker run -d --name web-app -p 80:80 myrepo/app:latest\"\n                    \"\"\"\n                }\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "sshUserPrivateKey",
            "detail": "Accesses EC2 private key securely from credentials database to construct active SSH tunnels."
          },
          {
            "keyword": "StrictHostKeyChecking=no",
            "detail": "Disables checking the target server host key footprint, avoiding pipeline lock issues."
          },
          {
            "keyword": "docker run -d",
            "detail": "Launches the newly pulled application container detached in the background on port 80."
          }
        ]
      }
    ]
  },
  {
    "id": "project4",
    "num": "P4",
    "title": "Kubernetes & ArgoCD GitOps",
    "category": "projects",
    "description": "Project 4: Complete GitOps continuous delivery pipeline targeting Kubernetes clusters, automated syncs with ArgoCD, and Prometheus monitoring.",
    "tags": [
      "Project",
      "Kubernetes",
      "ArgoCD",
      "GitOps"
    ],
    "search": "project 4 kubernetes argocd prometheus gitops cd deployment pipeline sync cluster k8s manifest",
    "sections": [
      {
        "type": "lead",
        "text": "<strong>Project 4 Objective:</strong> Build a state-of-the-art enterprise GitOps workflow. Jenkins builds application containers, updates manifest Git repositories, auto-deploys via ArgoCD to Kubernetes, and monitors health using Prometheus."
      },
      {
        "type": "ascii",
        "label": "K8s, ArgoCD & Prometheus GitOps Workflow",
        "diagram": "\n[ Developer ]\n      │ (Pushes Code)\n      ▼\n┌──────────────┐      ┌────────────────────┐      ┌────────────────┐\n│  Git (App)   │ ───> │  Jenkins Pipeline  │ ───> │ Docker Registry│\n└──────────────┘      │(Builds/Tests/Pushes│      │  (Docker Hub)  │\n                      └─────────┬──────────┘      └────────────────┘\n                                │ (Updates Manifest Tag)\n                                ▼\n┌──────────────┐      ┌────────────────────┐      ┌────────────────┐\n│  ArgoCD Sync │ <─── │   Git (Manifest)   │ <────│   Kubernetes   │\n│  (Auto-Sync) │      └────────────────────┘      │ (Monitored by  │\n└──────┬───────┘                                  │  Prometheus)   │\n       │                                          └────────────────┘\n       └─────────────── (Deploys Pods to Cluster) ───────┘\n"
      },
      {
        "type": "code",
        "title": "Jenkinsfile GitOps Pipeline (Automated Manifest Promotion)",
        "code": "pipeline {\n    agent { label 'k8s-agent' }\n    \n    environment {\n        DOCKER_HUB_REGISTRY = \"docker.io/enterprise-dev\"\n        APP_NAME = \"order-processor-api\"\n        GIT_OPS_REPO = \"github.com/enterprise-dev/gitops-infra-config.git\"\n        CRED_DOCKER = credentials('docker-hub-credentials')\n        CRED_GITHUB = credentials('github-gitops-token')\n    }\n    \n    stages {\n        stage('Initialize Workspace') {\n            steps {\n                script {\n                    env.COMMIT_SHA = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()\n                }\n            }\n        }\n        \n        stage('Dockerize Build & Push') {\n            steps {\n                sh \"docker build -t ${env.DOCKER_HUB_REGISTRY}/${env.APP_NAME}:${env.COMMIT_SHA} .\"\n                sh \"echo ${env.CRED_DOCKER_PASS} | docker login -u ${env.CRED_DOCKER_USER} --password-stdin\"\n                sh \"docker push ${env.DOCKER_HUB_REGISTRY}/${env.APP_NAME}:${env.COMMIT_SHA}\"\n            }\n        }\n        \n        stage('Prometheus Instrumentation Check') {\n            steps {\n                // Ensure prometheus scrape annotations exist in deployment template\n                sh \"grep -q 'prometheus.io/scrape' k8s/deployment.yaml || (echo 'Missing Prometheus scrape annotation!' && exit 1)\"\n            }\n        }\n        \n        stage('GitOps Manifest Update') {\n            steps {\n                // Clone the separate GitOps configuration infrastructure repo\n                sh \"git clone https://${env.CRED_GITHUB_USR}:${env.CRED_GITHUB_PSW}@${env.GIT_OPS_REPO} gitops-config\"\n                \n                dir('gitops-config') {\n                    // Update deployment manifest image reference using sed\n                    sh \"sed -i 's|image: ${env.DOCKER_HUB_REGISTRY}/${env.APP_NAME}:.*|image: ${env.DOCKER_HUB_REGISTRY}/${env.APP_NAME}:${env.COMMIT_SHA}|g' apps/${env.APP_NAME}/deployment.yaml\"\n                    \n                    // Commit and push manifest update back to trigger ArgoCD Sync\n                    sh \"git config user.name 'Jenkins CI/CD Bot'\"\n                    sh \"git config user.email 'jenkins-bot@enterprise.com'\"\n                    sh \"git add .\"\n                    sh \"git commit -m 'Auto-promoted ${env.APP_NAME} to version ${env.COMMIT_SHA} [Skip CI]'\"\n                    sh \"git push origin main\"\n                }\n            }\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "git rev-parse --short HEAD",
            "detail": "Retrieves the short Git commit hash of the current checkout code branch to use as immutable image version."
          },
          {
            "keyword": "gitops-infra-config.git",
            "detail": "A dedicated, isolated infrastructure configuration repository containing the Kubernetes manifest templates."
          },
          {
            "keyword": "sed -i",
            "detail": "Stream editor command executing inline substitution replacement of image tag values dynamically."
          },
          {
            "keyword": "ArgoCD Sync",
            "detail": "The GitOps agent process monitors this config repo and immediately schedules rolling Kubernetes Pod updates."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "success",
        "html": "<strong>Prometheus Monitoring Tip:</strong> Include the annotations <code>prometheus.io/scrape: 'true'</code> and <code>prometheus.io/port: '8080'</code> inside your pod templates so Prometheus can auto-discover your services and collect performance metrics."
      }
    ]
  },
  {
    "id": "commands",
    "num": "R1",
    "title": "CLI & Commands",
    "category": "reference",
    "description": "List of essential administration commands, service management commands, and Jenkins CLI usage.",
    "tags": [
      "Reference",
      "CLI",
      "Commands"
    ],
    "search": "commands reference cli control restart service backup logs diagnostic systemctl",
    "sections": [
      {
        "type": "lead",
        "text": "Jenkins can be managed via operating system commands and its built-in CLI jar file, facilitating remote automation."
      },
      {
        "type": "ascii",
        "label": "Jenkins CLI Mechanism",
        "diagram": "\n  ┌─────────────────┐\n  │   Jenkins CLI   │ ─── (HTTP request) ───> [ Jenkins Server URL ]\n  │ (jar file tool) │                                 │\n  └─────────────────┘                         (Performs Action)\n                                                      │\n                                                      ▼\n                                              [ System Restart ]\n"
      },
      {
        "type": "code",
        "title": "Host OS & CLI Commands Reference",
        "code": "# --- Systemd Service Controls ---\n# Start Jenkins service\nsudo systemctl start jenkins\n\n# Stop Jenkins service\nsudo systemctl stop jenkins\n\n# Restart Jenkins service\nsudo systemctl restart jenkins\n\n# Inspect startup logs\nsudo journalctl -u jenkins --no-pager | tail -n 50\n\n# --- Jenkins CLI tool usage ---\n# Download the CLI client directly from your server\nwget http://localhost:8080/jnlpJars/jenkins-cli.jar\n\n# Execute safe restart using your API token\njava -jar jenkins-cli.jar -s http://localhost:8080/ -auth admin:mytoken safe-restart\n\n# List all active jobs configured on the system\njava -jar jenkins-cli.jar -s http://localhost:8080/ -auth admin:mytoken list-jobs",
        "explanation": [
          {
            "keyword": "systemctl restart jenkins",
            "detail": "Restarts the systemd system service manager process for Jenkins server."
          },
          {
            "keyword": "journalctl -u jenkins",
            "detail": "Retrieves internal startup system logs printed by the main Jenkins daemon process."
          },
          {
            "keyword": "jenkins-cli.jar",
            "detail": "A built-in jar adapter tool allowing terminal developers to interact with server nodes via CLI."
          },
          {
            "keyword": "safe-restart",
            "detail": "Tells Jenkins CLI to wait for all currently active builds to conclude safely before executing host reboot."
          }
        ]
      }
    ]
  },
  {
    "id": "troubleshoot",
    "num": "R2",
    "title": "Troubleshooting",
    "category": "reference",
    "description": "Solving common server errors, memory issues (OOM), permissions, and offline agent errors.",
    "tags": [
      "Reference",
      "Troubleshooting",
      "Debug"
    ],
    "search": "troubleshoot debug error log out of memory oom offline agent permissions",
    "sections": [
      {
        "type": "lead",
        "text": "This guide provides practical solutions to resolve common issues like memory starvation, file permission errors, and agent disconnects."
      },
      {
        "type": "ascii",
        "label": "System Diagnostic Chart",
        "diagram": "\n   [ Critical Failure ]\n            │\n            ├─ (Job fails instantly) ────> [ Check Workspace Permissions ]\n            │\n            ├─ (Server unresponsive) ───> [ Check JVM CPU/Memory Status ]\n            │\n            └─ (Build Queue Pending) ───> [ Check Agent Connection Status ]\n"
      },
      {
        "type": "table",
        "headers": [
          "Error Message / Fault",
          "Root Cause",
          "Actionable Solution"
        ],
        "rows": [
          [
            "java.lang.OutOfMemoryError",
            "Server JVM heap space exhausted.",
            "Increase memory allocation. Run: 'JAVA_ARGS=\"-Xmx2g\"' inside /etc/default/jenkins."
          ],
          [
            "permission denied: docker.sock",
            "Jenkins system user not in docker group.",
            "Run: 'sudo usermod -aG docker jenkins && sudo systemctl restart jenkins'."
          ],
          [
            "Agent Offline / Disconnected",
            "Failed SSH key handshakes or network loss.",
            "Verify agent port connectivity. Regenerate user SSH keys."
          ],
          [
            "No Space Left on Device",
            "Old builds and Docker cache filling host drive.",
            "Configure build discard rules. Schedule periodic 'docker system prune -f' tasks."
          ]
        ]
      }
    ]
  },
  {
    "id": "bestpractices",
    "num": "R3",
    "title": "Best Practices",
    "category": "reference",
    "description": "Production checklist for security, back-ups, job configuration, and performance optimization.",
    "tags": [
      "Reference",
      "Best Practices",
      "Security"
    ],
    "search": "bestpractices checklist production performance backup audit permissions security",
    "sections": [
      {
        "type": "lead",
        "text": "To guarantee high availability and stability, production Jenkins controllers should be secured, regularly backed up, and optimized."
      },
      {
        "type": "ascii",
        "label": "Enterprise Security Model",
        "diagram": "\n┌────────────────────────────────────────────────────────┐\n│                   Secure Server Space                  │\n│  ┌───────────────────────┐   ┌──────────────────────┐  │\n│  │   Backup Executions   │   │  HTTPS Reverse Proxy │  │\n│  │ (Automated thinBackup)│   │       (Nginx)        │  │\n│  └───────────────────────┘   └──────────┬───────────┘  │\n│                                         ▼              │\n│  ┌───────────────────────┐   ┌──────────────────────┐  │\n│  │   Audit Trail / Log   │<──│ Role-Based Security  │  │\n│  └───────────────────────┘   └──────────────────────┘  │\n└────────────────────────────────────────────────────────┘\n"
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
  },
  {
    "id": "links",
    "num": "R4",
    "title": "Repo & Links",
    "category": "reference",
    "description": "Direct resource links to tutorial sources, official repositories, and community documentation websites.",
    "tags": [
      "Reference",
      "Links",
      "Resources"
    ],
    "search": "links resources repository tutorial videos documentation learn links",
    "sections": [
      {
        "type": "lead",
        "text": "Continuous learning resources to keep you up-to-date with new Jenkins developments and DevOps strategies."
      },
      {
        "type": "ascii",
        "label": "DevOps Learning Path Map",
        "diagram": "\n[ Jenkins Basics ] ──> [ Advanced Pipelines ] ──> [ Cloud Integrations ]\n                                                           │\n                                                           ▼\n                                                 [ Production Mastery ]\n"
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
  }
];

window.JENKINS_PROJECTS = [
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
