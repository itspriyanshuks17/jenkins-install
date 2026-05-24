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
        "diagram": "\n[ Developer ]\n      \u2502 (Pushes Code)\n      \u25bc\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Git / GitHub \u2502 \u2500\u2500\u2500> \u2502   Jenkins Controller    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2502                         \u2502\n                      \u2502  (Orchestrator/Sched)   \u2502\n                      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                   \u2502\n                     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                     \u25bc                           \u25bc\n        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n        \u2502     Jenkins Agent 1     \u2502 \u2502     Jenkins Agent 2     \u2502\n        \u2502  (Runs Docker Build)    \u2502 \u2502   (Runs Unit Tests)     \u2502\n        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                     \u2502                           \u2502\n                     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                   \u25bc\n                      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                      \u2502    Staging / Prod       \u2502\n                      \u2502  (Deploy Environments)  \u2502\n                      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\nContinuous Integration (CI):\n[Code] \u2500\u2500> [Build] \u2500\u2500> [Test] (Fast feedback loop on commits)\n\nContinuous Delivery (CD):\n[CI Loop] \u2500\u2500> [Package] \u2500\u2500> [Release to Staging] \u2500\u2500> [Manual Gate] \u2500\u2500> [Deploy to Prod]\n\nContinuous Deployment (Fully Automated):\n[CI Loop] \u2500\u2500> [Package] \u2500\u2500> [Release to Staging] \u2500\u2500> [Auto Deploy to Prod]\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                  AWS EC2                     \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n\u2502  \u2502  Inbound Rule   \u2502 \u2500\u2500>\u2502  Host System    \u2502  \u2502\n\u2502  \u2502  TCP Port 8080  \u2502    \u2502  (Ubuntu/JDK17) \u2502  \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n\u2502                                  \u25bc           \u2502\n\u2502                         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n\u2502                         \u2502  Jenkins Server \u2502  \u2502\n\u2502                         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Jenkins Logo  [Searchbox...]               [User Profile]\u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n\u2502 \u2502  New Item     \u2502 \u2502  Dashboard > All Jobs            \u2502 \u2502\n\u2502 \u2502  People       \u2502 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u2502\n\u2502 \u2502  Build History\u2502 \u2502 Job Name  Status  Last Success   \u2502 \u2502\n\u2502 \u2502  Manage Jenkins\u2502 \u2502 my-app-ci  [Green] 2 mins ago     \u2502 \u2502\n\u2502 \u2502               \u2502 \u2502 test-db    [Red]   1 hour ago      \u2502 \u2502\n\u2502 \u2502 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n\u2502 \u2502 Build Executor\u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n\u2502 \u2502 [Master Idle] \u2502 \u2502  Console Output Logs             \u2502 \u2502\n\u2502 \u2502 [Agent Busy ] \u2502 \u2502  + git fetch --tags              \u2502 \u2502\n\u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502         Job Definition         \u2502  <--- Saved in config.xml\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                   \u2502\n         [ Trigger Event ]  <--- Webhook, Cron, Manual Run\n                   \u2502\n                   \u25bc\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502     Build Execution #1         \u2502  <--- Injects dynamic variables\n   \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502       (WORKSPACE, BUILD_NUMBER)\n   \u2502  \u2502 logs, artifacts, results \u2502  \u2502\n   \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                     Freestyle Job                       \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n\u2502  \u2502   SCM (Git Repository)  \u2502 \u2500>\u2502   Build Triggers    \u2502  \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n\u2502                                           \u25bc             \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n\u2502  \u2502   Post-Build Actions    \u2502<\u2500\u2500\u2502 Build Steps (Bash)  \u2502  \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      Declarative Syntax       \u2502 \u2502        Scripted Syntax        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 pipeline {                    \u2502 \u2502 node('linux') {               \u2502\n\u2502   agent any                   \u2502 \u2502   stage('Build') {            \u2502\n\u2502   stages {                    \u2502 \u2502     sh 'make'                 \u2502\n\u2502     stage('Build') {          \u2502 \u2502   }                           \u2502\n\u2502       steps {                 \u2502 \u2502   if (isRelease) {            \u2502\n\u2502         sh 'make'             \u2502 \u2502     stage('Deploy') { ... }   \u2502\n\u2502       }                       \u2502 \u2502   }                           \u2502\n\u2502     }                         \u2502 \u2502 }                               \u2502\n\u2502   }                           \u2502 \u2502                               \u2502\n\u2502 }                             \u2502 \u2502                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502 Developer    \u2502 \u2500\u2500 (Pushes Jenkinsfile) \u2500\u2500> \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                             \u2502 Git Repository \u2502\n                                              \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                                      \u2502 (Triggers Build)\n                                                      \u25bc\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                             \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502 Jenkins Agent\u2502 <\u2500\u2500\u2500 (Parses Jenkinsfile) \u2500\u2500\u2502 Jenkins Master \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                             \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "title": "Full-Featured Declarative Pipeline Blueprint",
        "code": "pipeline {\n    agent { label 'linux-executor' }\n\n    environment {\n        DEPLOY_PORT = \"8080\"\n        REGISTRY_URL = \"docker.io/myprofile\"\n    }\n\n    options {\n        timeout(time: 30, unit: 'MINUTES')\n        retry(3)\n        timestamps()\n    }\n\n    parameters {\n        string(name: 'DEPLOY_ENV', defaultValue: 'staging', description: 'Target Env')\n        booleanParam(name: 'SCAN_IMAGES', defaultValue: true, description: 'Trivy Scan')\n    }\n\n    triggers {\n        cron('H 4 * * 1-5') // Build nightly Mon-Fri\n    }\n\n    stages {\n        stage('Pull SCM') {\n            steps {\n                checkout scm\n            }\n        }\n        stage('Security Analysis') {\n            when {\n                expression { return params.SCAN_IMAGES == true }\n            }\n            steps {\n                sh 'echo \"Scanning workspace vulnerabilities...\"'\n            }\n        }\n        stage('Deploy') {\n            when {\n                branch 'main'\n            }\n            steps {\n                sh \"echo Deploying to port ${env.DEPLOY_PORT} on environment ${params.DEPLOY_ENV}\"\n            }\n        }\n    }\n\n    post {\n        always {\n            echo \"Pipeline run completed.\"\n        }\n        success {\n            echo \"Deployment fully executed!\"\n        }\n        failure {\n            echo \"Critical Pipeline Failure. Triggering rollback procedures.\"\n        }\n    }\n}",
        "explanation": [
          {
            "keyword": "agent { label 'linux-executor' }",
            "detail": "Explicitly binds this build run to agents containing the label 'linux-executor'."
          },
          {
            "keyword": "environment",
            "detail": "Stores static or dynamic pipeline-wide environment variables."
          },
          {
            "keyword": "parameters",
            "detail": "Accepts user inputs (string, boolean, choice) during parameterized builds."
          },
          {
            "keyword": "triggers { cron(...) }",
            "detail": "Automates pipeline scheduling using unix crontab scheduling commands."
          },
          {
            "keyword": "when { expression { ... } }",
            "detail": "Conditional stage wrapper. Runs the stage ONLY if the expression evaluates to true."
          },
          {
            "keyword": "checkout scm",
            "detail": "Clones the code repository associated with the Jenkins build trigger automatically."
          }
        ]
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
        "diagram": "\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502         node('worker-node')        \u2502  <--- Allocate build workspace\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u25bc\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502        stage('Environment')        \u2502  <--- Standard code execution\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u25bc\n                    \u251c\u2500\u2500 [isRelease == true] \u2500\u2500> [stage('Deploy')]\n                    \u2514\u2500\u2500 [isRelease == false] \u2500\u2500> [Skip deployment stage]\n"
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
        "diagram": "\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502     Build Executor    \u2502 \u2500\u2500\u2500 (stash) \u2500\u2500\u2500> [ Jenkins Controller Storage ]\n   \u2502  (Compiles binaries)  \u2502                         \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                         \u2502\n                                                 (unstash)\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                         \u2502\n   \u2502    Deploy Executor    \u2502 <\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n   \u2502  (Runs deploy steps)  \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                 Jenkins Controller                    \u2502\n\u2502    (Schedules builds, processes user logins, UI)      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n         \u2502 (SSH Port 22)        \u2502 (JNLP Port 50000)\n         \u25bc                      \u25bc\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Linux Agent 01  \u2502    \u2502 Windows Agent   \u2502\n\u2502 (System Node)   \u2502    \u2502 (Native Runner) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "type": "callout",
        "tone": "warn",
        "html": "<strong>Controller Executor Rule:</strong> Always configure the number of executors on your main Controller node to <strong>0</strong>. This protects the master node from running application builds, keeping it responsive for users."
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
        "diagram": "\nSequential Execution (Time: 30m):\n[Checkout] \u2500\u2500> [Build] \u2500\u2500> [Unit Test: 10m] \u2500\u2500> [Integration Test: 15m] \u2500\u2500> [Deploy: 5m]\n\nParallel Execution (Time: 18m):\n                           \u250c\u2500\u2500\u2500> [Unit Test: 10m] \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n[Checkout] \u2500\u2500> [Build] \u2500\u2500\u2500>\u251c\u2500\u2500\u2500> [Integration Test: 15m] \u2500\u253c\u2500\u2500\u2500> [Deploy: 5m]\n                           \u2514\u2500\u2500\u2500> [Static Lint: 2m] \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502         Jenkins Server          \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502\n\u2502  \u2502 Credentials Provider     \u2502   \u2502\n\u2502  \u2502   - SSH Private Key      \u2502   \u2502\n\u2502  \u2502   - GitHub PAT (HTTPS)   \u2502   \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                \u2502 (Git TLS handshake)\n                \u25bc\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     GitHub Secure Server        \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502\n\u2502  \u2502 Repo Access / Permissions\u2502   \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         (Push Commit)        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Developer \u2502 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> \u2502 Git Server   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                              \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                                  \u2502\n                                         (HTTP POST /webhook)\n                                                  \u2502\n                                                  \u25bc\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       (Triggers Build)       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Build Run \u2502 <\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2502   Jenkins    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                              \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                      Host Server                       \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n\u2502  \u2502    Jenkins Container  \u2502   \u2502     Docker Daemon    \u2502  \u2502\n\u2502  \u2502                       \u2502   \u2502                      \u2502  \u2502\n\u2502  \u2502   - docker command    \u2502   \u2502                      \u2502  \u2502\n\u2502  \u2502   - mounted socket:   \u251c\u2500\u2500>\u2502                      \u2502  \u2502\n\u2502  \u2502   /var/run/docker.sock\u2502   \u2502  /var/run/docker.sock\u2502  \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502   Credentials Store  \u2502 ---> [ Secret token: \"my-super-secret-key\" ]\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2502 (Injected via withCredentials)\n            \u25bc\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502   Pipeline Engine    \u2502 ---> [ Console logs: \"Authenticating with *****\" ]\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502               Jenkins Core Engine             \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                         \u2502 (Plugin API Interface)\n        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n        \u25bc                \u25bc                \u25bc\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502 Git Plugin  \u2502  \u2502Slack Plugin \u2502  \u2502Sonar Plugin \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\nshared-library-repository/\n\u251c\u2500\u2500 src/                       # Custom Object Classes (Groovy)\n\u2502   \u2514\u2500\u2500 org/\n\u2502       \u2514\u2500\u2500 company/\n\u2502           \u2514\u2500\u2500 Helper.groovy\n\u251c\u2500\u2500 vars/                      # Global step scripts (Reusable in Jenkinsfiles)\n\u2502   \u251c\u2500\u2500 buildDocker.groovy\n\u2502   \u2514\u2500\u2500 notifySlack.groovy\n\u2514\u2500\u2500 resources/                 # Non-Groovy templates (JSON, YAML, XML)\n    \u2514\u2500\u2500 configs/\n        \u2514\u2500\u2500 template.json\n"
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
        "diagram": "\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502 Git Repo Repository  \u2502\n \u2502  \u251c\u2500\u2500 main            \u2502 \u2500\u2500 (SCM Scan) \u2500\u2500> [ Jenkins Job: my-project/main ]\n \u2502  \u251c\u2500\u2500 feature/auth    \u2502 \u2500\u2500 (SCM Scan) \u2500\u2500> [ Jenkins Job: my-project/feature-auth ]\n \u2502  \u2514\u2500\u2500 release-v1      \u2502 \u2500\u2500 (SCM Scan) \u2500\u2500> [ Jenkins Job: my-project/release-v1 ]\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Global Server Env Variables                  \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n\u2502  \u2502 Pipeline Env Block (All Stages)        \u2502  \u2502\n\u2502  \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502  \u2502\n\u2502  \u2502  \u2502 Stage Env Block (Single Stage)   \u2502  \u2502  \u2502\n\u2502  \u2502  \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502  \u2502  \u2502\n\u2502  \u2502  \u2502  \u2502 Shell Process Variable     \u2502  \u2502  \u2502  \u2502\n\u2502  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502  \u2502  \u2502\n\u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502  \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Pipeline Execution \u2502\n\u2502  - Fail or Success \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n          \u2502 (Triggers post step)\n          \u25bc\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510          (HTTPS webhook API)         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Notification step  \u2502 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> \u2502 Slack / Teams\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                                      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n[ Git Commit ]\n      \u2502\n      \u25bc\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   Checkout   \u2502 \u2500\u2500\u2500> \u2502 Dependency   \u2502 \u2500\u2500\u2500> \u2502  ESLint Check\u2502 \u2500\u2500\u2500> \u2502  Jest Tests  \u2502\n\u2502  Repository  \u2502      \u2502 Installation \u2502      \u2502  (Analysis)  \u2502      \u2502  (Coverage)  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  Git Source  \u2502 \u2500\u2500\u2500> \u2502 Docker Build \u2502 \u2500\u2500\u2500> \u2502  Trivy Scan  \u2502 \u2500\u2500\u2500> \u2502 Push Registry\u2502\n\u2502  Repository  \u2502      \u2502 (Docker Image)\u2502     \u2502(Vulnerabilities)\u2502   \u2502 (Docker Hub) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502  Jenkins Server  \u2502 \u2500\u2500\u2500\u2500\u2500\u2500 (Deploy Trigger) \u2500\u2500\u2500\u2510\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                            \u2502\n                                                 \u25bc\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502                       AWS EC2 Instance                          \u2502\n \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510            \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n \u2502  \u2502      SSH Port 22     \u2502 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> \u2502   Docker Deployment   \u2502  \u2502\n \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502   Jenkins CLI   \u2502 \u2500\u2500\u2500 (HTTP request) \u2500\u2500\u2500> [ Jenkins Server URL ]\n  \u2502  (jar file tool) \u2502                                \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                         (Performs Action)\n                                                      \u2502\n                                                      \u25bc\n                                              [ System Restart ]\n"
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
        "diagram": "\n   [ Critical Failure ]\n            \u2502\n            \u251c\u2500 (Job fails instantly) \u2500\u2500\u2500\u2500> [ Check Workspace Permissions ]\n            \u2502\n            \u251c\u2500 (Server unresponsive) \u2500\u2500\u2500> [ Check JVM CPU/Memory Status ]\n            \u2502\n            \u2514\u2500 (Build Queue Pending) \u2500\u2500\u2500> [ Check Agent Connection Status ]\n"
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
        "diagram": "\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                   Secure Server Space                  \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n\u2502  \u2502   Backup Executions   \u2502   \u2502  HTTPS Reverse Proxy \u2502  \u2502\n\u2502  \u2502 (Automated thinBackup)\u2502   \u2502       (Nginx)        \u2502  \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n\u2502                                         \u25bc              \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\n\u2502  \u2502   Audit Trail / Log   \u2502<\u2500\u2500\u2502 Role-Based Security  \u2502  \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"
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
        "diagram": "\n[ Jenkins Basics ] \u2500\u2500> [ Advanced Pipelines ] \u2500\u2500> [ Cloud Integrations ]\n                                                           \u2502\n                                                           \u25bc\n                                                 [ Production Mastery ]\n"
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
  }
];
