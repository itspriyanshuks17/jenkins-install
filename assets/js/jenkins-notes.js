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
    "description": "Learn about What is Jenkins? in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins what is jenkins?",
    "sections": [
      {
        "type": "lead",
        "text": "Jenkins is an open-source, Java-based <strong>automation server</strong> used to automate the build, test, and deployment parts of software development. It is the most widely used CI/CD tool in DevOps and integrates with almost every tool in the ecosystem."
      },
      {
        "type": "grid",
        "items": [
          {
            "title": "Open Source",
            "text": "Free, community-driven. 1,800+ plugins available for every use case."
          },
          {
            "title": "Java-based",
            "text": "Requires JDK 11/17. Runs as a war file or system service on any OS."
          },
          {
            "title": "Plugin Ecosystem",
            "text": "Git, Docker, Kubernetes, AWS, Slack \u2014 pluggable for any workflow."
          },
          {
            "title": "Pipeline as Code",
            "text": "Define your entire CI/CD workflow in a <code>Jenkinsfile</code> stored in your repo."
          },
          {
            "title": "Master\u2013Agent",
            "text": "Distribute builds across multiple agents \u2014 Linux, Windows, Docker, cloud."
          },
          {
            "title": "Triggers",
            "text": "GitHub webhooks, SCM polling, cron schedules, or manual triggers."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "html": "\n<strong>Jenkins vs GitHub Actions:</strong> Jenkins is self-hosted, fully customizable, and free at scale. GitHub Actions is cloud-native and simpler. Jenkins is preferred when you need full control, on-prem infra, or complex multi-stage pipelines.\n    "
      }
    ]
  },
  {
    "id": "cicd",
    "num": "02",
    "title": "CI / CD Concepts",
    "category": "introduction",
    "description": "Learn about CI / CD Concepts in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins ci / cd concepts",
    "sections": [
      {
        "type": "table",
        "headers": [
          "Concept",
          "Full Form",
          "What Happens"
        ],
        "rows": [
          [
            "CI",
            "Continuous Integration",
            "Code pushed \u2192 auto build + auto tests run. Catch bugs early."
          ],
          [
            "CD",
            "Continuous Delivery",
            "Tested code auto-packaged and ready for deployment (manual trigger)."
          ],
          [
            "CD",
            "Continuous Deployment",
            "Fully automated \u2014 tested code goes straight to production, no human approval."
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "html": "\n<div class=\"pipe-stage\">\n<div class=\"pipe-box\"><span class=\"stage-icon\">\ud83d\udcbb</span><span class=\"stage-name\">Code Push</span></div>\n<div class=\"pipe-arrow\">\u2192</div>\n</div>\n<div class=\"pipe-stage\">\n<div class=\"pipe-box active\"><span class=\"stage-icon\">\ud83d\udd28</span><span class=\"stage-name\">Build</span></div>\n<div class=\"pipe-arrow\">\u2192</div>\n</div>\n<div class=\"pipe-stage\">\n<div class=\"pipe-box active\"><span class=\"stage-icon\">\ud83e\uddea</span><span class=\"stage-name\">Test</span></div>\n<div class=\"pipe-arrow\">\u2192</div>\n</div>\n<div class=\"pipe-stage\">\n<div class=\"pipe-box active\"><span class=\"stage-icon\">\ud83d\udce6</span><span class=\"stage-name\">Package</span></div>\n<div class=\"pipe-arrow\">\u2192</div>\n</div>\n<div class=\"pipe-stage\">\n<div class=\"pipe-box\"><span class=\"stage-icon\">\u2705</span><span class=\"stage-name\">Deploy</span></div>\n</div>\n"
      },
      {
        "type": "callout",
        "tone": "success",
        "html": "\n<strong>Key Insight:</strong> CI is about integrating code frequently (multiple times/day). CD is about keeping software in a deployable state at all times. Jenkins automates every step in this pipeline.\n    "
      }
    ]
  },
  {
    "id": "install",
    "num": "03",
    "title": "Installation",
    "category": "introduction",
    "description": "Learn about Installation in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins installation",
    "sections": [
      {
        "type": "code",
        "title": "Step 1 \u2014 Install Java (Required)",
        "code": "# Update packages and install JDK 17\nsudo apt update\nsudo apt install -y fontconfig openjdk-17-jre\n\n# Verify\njava -version\n# openjdk version \"17.x.x\" ..."
      },
      {
        "type": "code",
        "title": "Step 2 \u2014 Install Jenkins (Ubuntu/Debian)",
        "code": "# Add Jenkins GPG key\nsudo wget -O /usr/share/keyrings/jenkins-keyring.asc \\\n  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key\n\n# Add Jenkins repo\necho \"deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \\\n  https://pkg.jenkins.io/debian-stable binary/\" | \\\n  sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null\n\n# Install\nsudo apt update\nsudo apt install -y jenkins\n\n# Start and enable service\nsudo systemctl start jenkins\nsudo systemctl enable jenkins\nsudo systemctl status jenkins"
      },
      {
        "type": "code",
        "title": "Step 3 \u2014 First Login Setup",
        "code": "# Get the initial admin password\nsudo cat /var/lib/jenkins/secrets/initialAdminPassword\n\n# Open browser \u2192 http://your-server-ip:8080\n# Paste the password \u2192 Install suggested plugins \u2192 Create admin user"
      },
      {
        "type": "code",
        "title": "Open Port 8080 (AWS EC2)",
        "code": "# In AWS Security Group, add inbound rule:\nType: Custom TCP\nPort: 8080\nSource: 0.0.0.0/0   # or your IP for security"
      },
      {
        "type": "callout",
        "tone": "warn",
        "html": "\n<strong>Production tip:</strong> Always run Jenkins behind an Nginx reverse proxy with HTTPS (port 443). Never expose port 8080 directly in production.\n    "
      }
    ]
  },
  {
    "id": "ui",
    "num": "04",
    "title": "Jenkins UI Tour",
    "category": "introduction",
    "description": "Learn about Jenkins UI Tour in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins jenkins ui tour",
    "sections": [
      {
        "type": "table",
        "headers": [
          "UI Element",
          "What it does"
        ],
        "rows": [
          [
            "Dashboard",
            "Home page \u2014 lists all jobs with build status, health, and last run time"
          ],
          [
            "New Item",
            "Create a new job (Freestyle, Pipeline, Multibranch, Folder)"
          ],
          [
            "Manage Jenkins",
            "Global settings \u2014 plugins, credentials, nodes, security, tools"
          ],
          [
            "Build Queue",
            "Jobs waiting to run (if all executors are busy)"
          ],
          [
            "Build Executor Status",
            "Shows running builds on controller and agents"
          ],
          [
            "Blue Ocean",
            "Modern UI for visualizing pipeline stages (install the plugin)"
          ],
          [
            "Console Output",
            "Real-time log of each build \u2014 your primary debugging window"
          ],
          [
            "Workspace",
            "Directory on the agent where source code is checked out during a build"
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "html": "\n<strong>Build Status Colors:</strong> \ud83d\udd35 Blue = Success, \ud83d\udd34 Red = Failed, \ud83d\udfe1 Yellow = Unstable (tests failed), \u2b1c Grey = Never built / Disabled, \ud83d\udd04 Blinking = Running\n    "
      }
    ]
  },
  {
    "id": "jobs",
    "num": "05",
    "title": "Jobs & Builds",
    "category": "core_concepts",
    "description": "Learn about Jobs & Builds in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins jobs & builds",
    "sections": [
      {
        "type": "lead",
        "text": "A <strong>Job</strong> (or Item) is a runnable task in Jenkins. Each execution of a job is called a <strong>Build</strong>, numbered incrementally (#1, #2, #3\u2026)."
      },
      {
        "type": "grid",
        "items": [
          {
            "title": "Freestyle Project",
            "text": "GUI-configured job. Good for simple shell scripts and basic pipelines."
          },
          {
            "title": "Pipeline",
            "text": "Code-defined job using a Jenkinsfile. The standard for production."
          },
          {
            "title": "Multibranch Pipeline",
            "text": "Auto-creates pipelines for each branch in a Git repo."
          },
          {
            "title": "Folder",
            "text": "Organizes jobs into groups. Each folder has its own credentials and views."
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Build Concept",
          "Description"
        ],
        "rows": [
          [
            "#BUILD_NUMBER",
            "Auto-incremented integer for each run of a job"
          ],
          [
            "Artifact",
            "File produced by a build (JAR, Docker image, ZIP) and saved for later use"
          ],
          [
            "Workspace",
            "Temp directory on the agent where the build runs and files are checked out"
          ],
          [
            "Upstream / Downstream",
            "Job A triggers Job B \u2014 A is upstream, B is downstream"
          ],
          [
            "Parameter",
            "User-provided input to a build (string, boolean, choice, credentials)"
          ]
        ]
      }
    ]
  },
  {
    "id": "freestyle",
    "num": "06",
    "title": "Freestyle Projects",
    "category": "core_concepts",
    "description": "Learn about Freestyle Projects in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins freestyle projects",
    "sections": [
      {
        "type": "lead",
        "text": "Freestyle is the simplest job type \u2014 configured entirely through the Jenkins UI. Good for learning and simple tasks, but Pipeline-as-Code is preferred in production."
      },
      {
        "type": "flow",
        "steps": [
          {
            "title": "New Item \u2192 Freestyle Project",
            "text": "Give it a name and select Freestyle Project."
          },
          {
            "title": "Source Code Management",
            "text": "Select Git, enter repo URL, add credentials, choose branch (<code>*/main</code>)."
          },
          {
            "title": "Build Triggers",
            "text": "Choose when to run: Poll SCM, GitHub webhook, Build periodically (cron), or Manual."
          },
          {
            "title": "Build Steps",
            "text": "Execute shell commands \u2014 <code>npm install</code>, <code>mvn test</code>, <code>docker build</code>, etc."
          },
          {
            "title": "Post-build Actions",
            "text": "Archive artifacts, send email notifications, trigger another job, publish test results."
          }
        ]
      }
    ]
  },
  {
    "id": "pipeline-types",
    "num": "07",
    "title": "Pipeline Types",
    "category": "core_concepts",
    "description": "Learn about Pipeline Types in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins pipeline types",
    "sections": [
      {
        "type": "table",
        "headers": [
          "Type",
          "Syntax",
          "Best For"
        ],
        "rows": [
          [
            "Declarative",
            "Structured, predefined blocks",
            "Most teams \u2014 readable, enforces best practices, easier to learn"
          ],
          [
            "Scripted",
            "Full Groovy code, <code>node{}</code> block",
            "Complex custom logic, legacy pipelines, maximum flexibility"
          ],
          [
            "Multibranch",
            "Auto-detects Jenkinsfiles per branch",
            "Teams using GitFlow / feature branches \u2014 auto PR pipelines"
          ],
          [
            "Shared Library",
            "Reusable Groovy in a separate repo",
            "Large orgs \u2014 DRY pipeline code across 20+ repos"
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "success",
        "html": "\n<strong>Rule of thumb:</strong> Always start with Declarative. Move to Scripted only when you hit a limitation. Use Shared Libraries when you find yourself copy-pasting Jenkinsfiles.\n    "
      }
    ]
  },
  {
    "id": "jenkinsfile",
    "num": "08",
    "title": "Jenkinsfile",
    "category": "core_concepts",
    "description": "Learn about Jenkinsfile in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins jenkinsfile",
    "sections": [
      {
        "type": "lead",
        "text": "A <strong>Jenkinsfile</strong> is a text file stored in the root of your Git repository that defines the entire CI/CD pipeline as code. This enables versioning, code review, and reproducibility."
      },
      {
        "type": "code",
        "title": "Jenkinsfile - Minimal Declarative Jenkinsfile",
        "code": "Jenkinsfilepipeline {\n  agent any             // run on any available agent\n\n  stages {\n    stage('Checkout') {\n      steps {\n        git branch: 'main', url: 'https://github.com/user/repo.git'\n      }\n    }\n    stage('Build') {\n      steps {\n        sh 'npm install'\n      }\n    }\n    stage('Test') {\n      steps {\n        sh 'npm test'\n      }\n    }\n    stage('Deploy') {\n      steps {\n        sh './deploy.sh'\n      }\n    }\n  }\n\n  post {\n    success { echo 'Pipeline succeeded!' }\n    failure { echo 'Pipeline failed!' }\n    always  { cleanWs() }   // clean workspace after every run\n  }\n}"
      },
      {
        "type": "callout",
        "tone": "info",
        "html": "\n<strong>Where to put it:</strong> File named exactly <code>Jenkinsfile</code> (capital J, no extension) in the root of your repository. Jenkins finds it automatically when you configure the Pipeline job.\n    "
      }
    ]
  },
  {
    "id": "declarative",
    "num": "09",
    "title": "Declarative Pipeline \u2014 Full Reference",
    "category": "pipelines",
    "description": "Learn about Declarative Pipeline \u2014 Full Reference in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins declarative pipeline \u2014 full reference",
    "sections": [
      {
        "type": "code",
        "title": "Full Declarative Syntax",
        "code": "pipeline {\n  agent { label 'linux' }   // or: any, none, docker{}\n\n  environment {             // pipeline-wide env vars\n    APP_NAME = 'my-app'\n    DOCKER_REGISTRY = 'docker.io/myuser'\n  }\n\n  options {\n    timeout(time: 30, unit: 'MINUTES')\n    buildDiscarder(logRotator(numToKeepStr: '10'))\n    disableConcurrentBuilds()\n  }\n\n  parameters {\n    string(name: 'DEPLOY_ENV', defaultValue: 'staging', description: 'Target env')\n    booleanParam(name: 'RUN_TESTS', defaultValue: true)\n  }\n\n  stages {\n    stage('Build') {\n      steps {\n        sh 'mvn clean package -DskipTests'\n      }\n    }\n\n    stage('Test') {\n      when { expression { params.RUN_TESTS == true } }\n      steps {\n        sh 'mvn test'\n        junit '**/target/surefire-reports/*.xml'\n      }\n    }\n\n    stage('Deploy') {\n      when { branch 'main' }\n      steps {\n        sh \"./deploy.sh ${params.DEPLOY_ENV}\"\n      }\n    }\n  }\n\n  post {\n    always   { archiveArtifacts artifacts: '**/target/*.jar' }\n    failure  { mail to: 'team@co.com', subject: \"FAILED: ${env.JOB_NAME}\" }\n    success  { echo 'All good!' }\n    unstable { echo 'Tests are failing!' }\n  }\n}"
      },
      {
        "type": "table",
        "headers": [
          "Block",
          "Purpose"
        ],
        "rows": [
          [
            "agent",
            "Where the pipeline/stage runs (any, none, label, docker)"
          ],
          [
            "environment",
            "Define env vars accessible as <code>env.VAR_NAME</code> throughout"
          ],
          [
            "options",
            "Pipeline behaviour \u2014 timeouts, log rotation, concurrent builds"
          ],
          [
            "parameters",
            "Input values users can provide before running the build"
          ],
          [
            "stages",
            "Container for all stage blocks"
          ],
          [
            "stage('name')",
            "A logical step \u2014 shown as a column in the pipeline view"
          ],
          [
            "steps",
            "The actual commands/actions inside a stage"
          ],
          [
            "when",
            "Conditional execution \u2014 branch name, env var, expression, etc."
          ],
          [
            "post",
            "Actions after pipeline finishes \u2014 always, success, failure, unstable, changed"
          ]
        ]
      }
    ]
  },
  {
    "id": "scripted",
    "num": "10",
    "title": "Scripted Pipeline",
    "category": "pipelines",
    "description": "Learn about Scripted Pipeline in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins scripted pipeline",
    "sections": [
      {
        "type": "lead",
        "text": "Scripted pipelines use full Groovy syntax inside a <code>node{}</code> block. More powerful but more complex \u2014 good for advanced conditional logic and loops."
      },
      {
        "type": "code",
        "title": "Scripted Pipeline Example",
        "code": "node('linux') {               // run on agent with label 'linux'\n  def appName = 'my-app'\n  def version = ''\n\n  stage('Checkout') {\n    checkout scm\n    version = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()\n  }\n\n  stage('Build') {\n    sh \"docker build -t ${appName}:${version} .\"\n  }\n\n  try {\n    stage('Test') {\n      sh 'npm test'\n    }\n  } catch (err) {\n    echo \"Tests failed: ${err}\"\n    currentBuild.result = 'UNSTABLE'\n  }\n\n  if (env.BRANCH_NAME == 'main') {\n    stage('Deploy') {\n      sh \"./deploy.sh ${version}\"\n    }\n  }\n}"
      }
    ]
  },
  {
    "id": "stages",
    "num": "11",
    "title": "Stages & Steps \u2014 Common Commands",
    "category": "pipelines",
    "description": "Learn about Stages & Steps \u2014 Common Commands in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins stages & steps \u2014 common commands",
    "sections": [
      {
        "type": "code",
        "title": "Common step() commands",
        "code": "// Shell commands\nsh 'echo hello'\nsh(script: 'ls -la', returnStdout: true).trim()\n\n// Git\ngit url: 'https://github.com/user/repo', branch: 'main'\ncheckout scm                   // use SCM configured in job\n\n// Environment\nwithEnv(['MY_VAR=hello']) { sh 'echo $MY_VAR' }\n\n// Credentials injection\nwithCredentials([usernamePassword(\n  credentialsId: 'docker-creds',\n  usernameVariable: 'USER',\n  passwordVariable: 'PASS'\n)]) {\n  sh 'docker login -u $USER -p $PASS'\n}\n\n// Artifacts\narchiveArtifacts artifacts: '**/*.jar', fingerprint: true\nstash includes: 'dist/**', name: 'build-output'\nunstash 'build-output'\n\n// Input / approval gate\ninput message: 'Deploy to production?', ok: 'Deploy'\n\n// Sleep\nsleep time: 5, unit: 'SECONDS'"
      }
    ]
  },
  {
    "id": "agents",
    "num": "12",
    "title": "Agents & Nodes",
    "category": "pipelines",
    "description": "Learn about Agents & Nodes in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins agents & nodes",
    "sections": [
      {
        "type": "lead",
        "text": "Jenkins uses a <strong>Controller</strong> (master) to schedule jobs and one or more <strong>Agents</strong> (workers) to run them. This enables distributed, parallel builds."
      },
      {
        "type": "code",
        "title": "Agent Directive Options",
        "code": "// Run on any available agent\nagent any\n\n// Run on controller (not recommended for heavy builds)\nagent none\n\n// Run on agent with a specific label\nagent { label 'linux && docker' }\n\n// Run inside a Docker container\nagent {\n  docker {\n    image 'node:18-alpine'\n    args  '-v /tmp:/tmp'\n  }\n}\n\n// Per-stage agent (when pipeline agent is none)\nstage('Build') {\n  agent { label 'build-server' }\n  steps { sh 'make build' }\n}"
      },
      {
        "type": "callout",
        "tone": "info",
        "html": "\n<strong>Adding an Agent:</strong> Manage Jenkins \u2192 Manage Nodes \u2192 New Node \u2192 Set labels, Remote root, Launch method (SSH or JNLP). Install Java on the agent first.\n    "
      }
    ]
  },
  {
    "id": "parallel",
    "num": "13",
    "title": "Parallel Execution",
    "category": "pipelines",
    "description": "Learn about Parallel Execution in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins parallel execution",
    "sections": [
      {
        "type": "lead",
        "text": "Run multiple stages simultaneously to cut pipeline time \u2014 e.g., run Unit Tests and Integration Tests at the same time."
      },
      {
        "type": "code",
        "title": "Parallel Stages",
        "code": "stage('Test') {\n  parallel {\n    stage('Unit Tests') {\n      agent { label 'linux' }\n      steps { sh 'npm run test:unit' }\n    }\n    stage('Integration Tests') {\n      agent { label 'linux' }\n      steps { sh 'npm run test:integration' }\n    }\n    stage('Lint') {\n      agent { label 'linux' }\n      steps { sh 'npm run lint' }\n    }\n  }\n}\n\n// Fail fast: stop all parallel branches if one fails\nstage('Parallel Tests') {\n  failFast true\n  parallel { ... }\n}"
      }
    ]
  },
  {
    "id": "git",
    "num": "14",
    "title": "Git & GitHub Integration",
    "category": "integrations",
    "description": "Learn about Git & GitHub Integration in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins git & github integration",
    "sections": [
      {
        "type": "code",
        "title": "Connecting Jenkins to GitHub",
        "code": "// 1. Install Git plugin (usually pre-installed)\n// 2. Manage Jenkins \u2192 Global Tool Configuration \u2192 Git \u2192 Set path\n\n// 3. In Pipeline job: Pipeline script from SCM\n//    SCM: Git\n//    Repository URL: https://github.com/user/repo.git\n//    Credentials: add GitHub token or SSH key\n//    Branch: */main\n\n// 4. In Jenkinsfile \u2014 checkout is automatic with:\ncheckout scm"
      },
      {
        "type": "code",
        "title": "Using GitHub Personal Access Token",
        "code": "// In GitHub: Settings \u2192 Developer Settings \u2192 Personal Access Tokens\n// Scope needed: repo (full control of private repos)\n\n// In Jenkins: Manage Credentials \u2192 Add Credential\n// Kind: Username with password\n// Username: your-github-username\n// Password: your-PAT-token\n// ID: github-creds  \u2190 reference this ID in Jenkinsfile"
      }
    ]
  },
  {
    "id": "webhooks",
    "num": "15",
    "title": "Webhooks & Triggers",
    "category": "integrations",
    "description": "Learn about Webhooks & Triggers in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins webhooks & triggers",
    "sections": [
      {
        "type": "flow",
        "steps": [
          {
            "title": "Install GitHub Integration Plugin",
            "text": "Manage Jenkins \u2192 Plugins \u2192 Available \u2192 search \"GitHub Integration\" \u2192 Install."
          },
          {
            "title": "Enable GitHub hook trigger in Job",
            "text": "Job \u2192 Configure \u2192 Build Triggers \u2192 \u2705 <strong>GitHub hook trigger for GITScm polling</strong>."
          },
          {
            "title": "Add Webhook in GitHub",
            "text": "Repo \u2192 Settings \u2192 Webhooks \u2192 Add Webhook \u2192 Payload URL: <code>http://your-jenkins-ip:8080/github-webhook/</code> \u2192 Content type: <code>application/json</code> \u2192 Select events: Push."
          },
          {
            "title": "Test it",
            "text": "Push a commit to your repo \u2014 Jenkins should auto-trigger within seconds."
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Trigger Type",
          "Config",
          "Use Case"
        ],
        "rows": [
          [
            "GitHub Webhook",
            "GitHub \u2192 Webhooks",
            "Instant trigger on push/PR \u2014 fastest, recommended"
          ],
          [
            "Poll SCM",
            "<code>H/5 * * * *</code> (every 5 min)",
            "When webhooks not available (no public IP)"
          ],
          [
            "Cron Schedule",
            "<code>0 2 * * *</code> (nightly 2am)",
            "Nightly builds, scheduled reports"
          ],
          [
            "Upstream Job",
            "Build after other projects built",
            "Sequential dependent pipelines"
          ],
          [
            "Manual",
            "Build Now button",
            "On-demand triggered deploys"
          ]
        ]
      }
    ]
  },
  {
    "id": "docker",
    "num": "16",
    "title": "Docker Integration",
    "category": "integrations",
    "description": "Learn about Docker Integration in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins docker integration",
    "sections": [
      {
        "type": "callout",
        "tone": "warn",
        "html": "\n<strong>Pre-requisite:</strong> Docker must be installed on the Jenkins agent. Add the <code>jenkins</code> user to the docker group: <code>sudo usermod -aG docker jenkins</code>, then restart Jenkins.\n    "
      },
      {
        "type": "code",
        "title": "Build & Push Docker Image in Pipeline",
        "code": "pipeline {\n  agent any\n  environment {\n    DOCKER_IMAGE = \"myuser/my-app:${BUILD_NUMBER}\"\n  }\n  stages {\n    stage('Build Image') {\n      steps {\n        sh \"docker build -t ${DOCKER_IMAGE} .\"\n      }\n    }\n    stage('Push to DockerHub') {\n      steps {\n        withCredentials([usernamePassword(\n          credentialsId: 'dockerhub-creds',\n          usernameVariable: 'DOCKER_USER',\n          passwordVariable: 'DOCKER_PASS'\n        )]) {\n          sh \"\"\"\n            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin\n            docker push ${DOCKER_IMAGE}\n            docker logout\n          \"\"\"\n        }\n      }\n    }\n    stage('Deploy Container') {\n      steps {\n        sh \"\"\"\n          docker stop my-app || true\n          docker rm   my-app || true\n          docker run -d --name my-app -p 8000:8000 ${DOCKER_IMAGE}\n        \"\"\"\n      }\n    }\n  }\n  post {\n    always { sh \"docker rmi ${DOCKER_IMAGE} || true\" }\n  }\n}"
      }
    ]
  },
  {
    "id": "credentials",
    "num": "17",
    "title": "Credentials & Secrets",
    "category": "integrations",
    "description": "Learn about Credentials & Secrets in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins credentials & secrets",
    "sections": [
      {
        "type": "table",
        "headers": [
          "Credential Type",
          "Use Case"
        ],
        "rows": [
          [
            "Username with password",
            "Docker Hub, GitHub PAT, database credentials"
          ],
          [
            "SSH Username with private key",
            "SSH into servers, Git over SSH"
          ],
          [
            "Secret text",
            "API tokens, Slack webhooks, any single secret string"
          ],
          [
            "Secret file",
            "Kubeconfig, .env files, certificate PEM files"
          ],
          [
            "Certificate (PKCS#12)",
            "Code signing, SSL client certificates"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Using Credentials in Jenkinsfile",
        "code": "// Secret text\nwithCredentials([string(credentialsId: 'slack-token', variable: 'SLACK_TOKEN')]) {\n  sh 'curl -X POST -d \"token=$SLACK_TOKEN\" ...'\n}\n\n// Secret file (e.g. kubeconfig)\nwithCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_FILE')]) {\n  sh 'kubectl --kubeconfig=$KUBECONFIG_FILE get pods'\n}\n\n// SSH Key\nwithCredentials([sshUserPrivateKey(\n  credentialsId: 'prod-ssh',\n  keyFileVariable: 'SSH_KEY',\n  usernameVariable: 'SSH_USER'\n)]) {\n  sh 'ssh -i $SSH_KEY $SSH_USER@prod-server.com \"docker restart app\"'\n}"
      },
      {
        "type": "callout",
        "tone": "warn",
        "html": "\n<strong>Never hardcode secrets</strong> in Jenkinsfiles. Jenkins masks credential values in logs automatically when using <code>withCredentials</code>, but they must be stored in the Credentials store first.\n    "
      }
    ]
  },
  {
    "id": "plugins",
    "num": "18",
    "title": "Essential Plugins",
    "category": "integrations",
    "description": "Learn about Essential Plugins in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins essential plugins",
    "sections": [
      {
        "type": "table",
        "headers": [
          "Plugin",
          "What it adds"
        ],
        "rows": [
          [
            "Git",
            "Core Git SCM support (usually pre-installed)"
          ],
          [
            "GitHub Integration",
            "Webhook triggers, GitHub PR status updates"
          ],
          [
            "Pipeline",
            "Jenkinsfile-based pipeline support"
          ],
          [
            "Blue Ocean",
            "Modern visual UI for pipelines"
          ],
          [
            "Docker Pipeline",
            "Use Docker inside Jenkinsfiles (<code>docker.build</code>, <code>docker.image</code>)"
          ],
          [
            "Credentials Binding",
            "<code>withCredentials{}</code> support"
          ],
          [
            "Maven Integration",
            "Maven build tool support"
          ],
          [
            "NodeJS",
            "Node/npm version management per job"
          ],
          [
            "Email Extension",
            "Rich HTML email notifications"
          ],
          [
            "Slack Notification",
            "Send Slack messages on build events"
          ],
          [
            "SonarQube Scanner",
            "Code quality analysis integration"
          ],
          [
            "Kubernetes",
            "Dynamic agent provisioning in K8s clusters"
          ]
        ]
      }
    ]
  },
  {
    "id": "shared-libs",
    "num": "19",
    "title": "Shared Libraries",
    "category": "advanced",
    "description": "Learn about Shared Libraries in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins shared libraries",
    "sections": [
      {
        "type": "lead",
        "text": "Shared Libraries let you define reusable Groovy code in a separate Git repo and import it into any Jenkinsfile. Prevents copy-paste across pipelines."
      },
      {
        "type": "code",
        "title": "Library Repo Structure",
        "code": "jenkins-shared-library/\n\u251c\u2500\u2500 vars/\n\u2502   \u251c\u2500\u2500 buildAndPush.groovy   // callable as buildAndPush()\n\u2502   \u2514\u2500\u2500 deployToK8s.groovy    // callable as deployToK8s()\n\u2514\u2500\u2500 src/\n    \u2514\u2500\u2500 org/\n        \u2514\u2500\u2500 myapp/\n            \u2514\u2500\u2500 Utils.groovy  // importable class"
      },
      {
        "type": "code",
        "title": "vars/buildAndPush.groovy",
        "code": "def call(String imageName, String tag) {\n  sh \"\"\"\n    docker build -t ${imageName}:${tag} .\n    docker push ${imageName}:${tag}\n  \"\"\"\n}"
      },
      {
        "type": "code",
        "title": "Using the shared library in Jenkinsfile",
        "code": "// Register in: Manage Jenkins \u2192 Configure System \u2192 Global Pipeline Libraries\n// Name: my-shared-lib  |  Default version: main  |  SCM: Git\n\n@Library('my-shared-lib') _   // import everything\n\npipeline {\n  agent any\n  stages {\n    stage('Build & Push') {\n      steps {\n        buildAndPush('myuser/my-app', env.BUILD_NUMBER)\n      }\n    }\n  }\n}"
      }
    ]
  },
  {
    "id": "multibranch",
    "num": "20",
    "title": "Multibranch Pipelines",
    "category": "advanced",
    "description": "Learn about Multibranch Pipelines in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins multibranch pipelines",
    "sections": [
      {
        "type": "lead",
        "text": "Multibranch Pipeline jobs automatically discover branches (and PRs) in your repo and create a pipeline for each branch that has a Jenkinsfile."
      },
      {
        "type": "code",
        "title": "Setup",
        "code": "// New Item \u2192 Multibranch Pipeline\n// Branch Sources: Add source \u2192 GitHub\n// Set repository URL + credentials\n// Scan Multibranch Pipeline Triggers: 1 minute (optional)\n\n// Jenkins will auto-discover branches and run Jenkinsfile in each one"
      },
      {
        "type": "code",
        "title": "Jenkinsfile with branch-based logic",
        "code": "pipeline {\n  agent any\n  stages {\n    stage('Build')  { steps { sh 'make build' } }\n    stage('Test')   { steps { sh 'make test'  } }\n\n    stage('Deploy Staging') {\n      when { branch 'develop' }\n      steps { sh './deploy.sh staging' }\n    }\n\n    stage('Deploy Production') {\n      when { branch 'main' }\n      steps {\n        input 'Approve deploy to production?'\n        sh './deploy.sh production'\n      }\n    }\n  }\n}"
      }
    ]
  },
  {
    "id": "env-vars",
    "num": "21",
    "title": "Environment Variables",
    "category": "advanced",
    "description": "Learn about Environment Variables in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins environment variables",
    "sections": [
      {
        "type": "table",
        "headers": [
          "Variable",
          "Value"
        ],
        "rows": [
          [
            "BUILD_NUMBER",
            "Current build number (1, 2, 3\u2026)"
          ],
          [
            "BUILD_ID",
            "Same as BUILD_NUMBER"
          ],
          [
            "JOB_NAME",
            "Name of the job (e.g. <code>my-app/main</code>)"
          ],
          [
            "JOB_BASE_NAME",
            "Short job name without folder path"
          ],
          [
            "WORKSPACE",
            "Absolute path to build workspace directory"
          ],
          [
            "JENKINS_URL",
            "Jenkins server URL"
          ],
          [
            "BUILD_URL",
            "Full URL of this build's page"
          ],
          [
            "GIT_COMMIT",
            "Full SHA of the commit being built"
          ],
          [
            "GIT_BRANCH",
            "Branch being built (e.g. <code>origin/main</code>)"
          ],
          [
            "BRANCH_NAME",
            "Branch name in Multibranch (e.g. <code>main</code>)"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Using & Setting Env Vars",
        "code": "environment {\n  IMAGE_TAG = \"v${BUILD_NUMBER}-${GIT_COMMIT.take(7)}\"\n  DEPLOY_URL = \"https://api.${env.BRANCH_NAME == 'main' ? 'prod' : 'staging'}.example.com\"\n}\n\nsteps {\n  echo \"Building image: ${env.IMAGE_TAG}\"\n  sh \"docker build -t myapp:${env.IMAGE_TAG} .\"\n}"
      }
    ]
  },
  {
    "id": "notifications",
    "num": "22",
    "title": "Notifications",
    "category": "advanced",
    "description": "Learn about Notifications in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins notifications",
    "sections": [
      {
        "type": "code",
        "title": "Slack Notification (post block)",
        "code": "post {\n  success {\n    slackSend(\n      channel: '#deployments',\n      color: 'good',\n      message: \"\u2705 *${env.JOB_NAME}* build #${env.BUILD_NUMBER} succeeded!\\n${env.BUILD_URL}\"\n    )\n  }\n  failure {\n    slackSend(\n      channel: '#deployments',\n      color: 'danger',\n      message: \"\u274c *${env.JOB_NAME}* build #${env.BUILD_NUMBER} FAILED!\\n${env.BUILD_URL}\"\n    )\n  }\n}"
      },
      {
        "type": "code",
        "title": "Email Notification",
        "code": "post {\n  failure {\n    emailext(\n      to: 'devteam@company.com',\n      subject: \"FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}\",\n      body: \"\"\"\n        Build failed.\n        Job: ${env.JOB_NAME}\n        Build: #${env.BUILD_NUMBER}\n        URL: ${env.BUILD_URL}\n\n        Check console output for details.\n      \"\"\"\n    )\n  }\n}"
      }
    ]
  },
  {
    "id": "project1",
    "num": "P1",
    "title": "Project 1 \u2014 Simple Node.js CI Pipeline",
    "category": "projects",
    "description": "Learn about Project 1 \u2014 Simple Node.js CI Pipeline in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins project 1 \u2014 simple node.js ci pipeline",
    "sections": [
      {
        "type": "callout",
        "tone": "success",
        "html": "\n<div class=\"project-label\">Project 01 / Beginner</div>\n<h3>Automated CI for a Node.js application</h3>\n<p>Set up a complete Jenkins pipeline that triggers on every GitHub push, installs dependencies, runs tests, and archives build artifacts. The foundation of all CI workflows.</p>\n<div><span class=\"tag\">Node.js</span><span class=\"tag\">GitHub Webhook</span><span class=\"tag\">npm test</span><span class=\"tag\">Artifacts</span></div>\n"
      },
      {
        "type": "code",
        "title": "Jenkinsfile",
        "code": "pipeline {\n  agent any\n\n  tools {\n    nodejs 'NodeJS-18'   // configured in Global Tool Configuration\n  }\n\n  stages {\n    stage('Checkout') {\n      steps { checkout scm }\n    }\n    stage('Install') {\n      steps { sh 'npm install' }\n    }\n    stage('Lint') {\n      steps { sh 'npm run lint' }\n    }\n    stage('Test') {\n      steps {\n        sh 'npm test -- --reporter=junit --reporter-options mochaFile=results/test-results.xml'\n      }\n      post {\n        always {\n          junit 'results/test-results.xml'\n        }\n      }\n    }\n    stage('Build') {\n      steps {\n        sh 'npm run build'\n        archiveArtifacts artifacts: 'dist/**', fingerprint: true\n      }\n    }\n  }\n  post {\n    always { cleanWs() }\n  }\n}"
      }
    ]
  },
  {
    "id": "project2",
    "num": "P2",
    "title": "Project 2 \u2014 Docker CI/CD Pipeline",
    "category": "projects",
    "description": "Learn about Project 2 \u2014 Docker CI/CD Pipeline in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins project 2 \u2014 docker ci/cd pipeline",
    "sections": [
      {
        "type": "callout",
        "tone": "success",
        "html": "\n<div class=\"project-label\">Project 02 / Intermediate</div>\n<h3>Full CI/CD with Docker Build \u2192 Push \u2192 Deploy</h3>\n<p>Build a Docker image on every push, push it to DockerHub with a versioned tag, then SSH into the production server and restart the container with the new image. The classic production CI/CD flow.</p>\n<div><span class=\"tag\">Docker</span><span class=\"tag\">DockerHub</span><span class=\"tag\">SSH Deploy</span><span class=\"tag\">Versioned Tags</span></div>\n"
      },
      {
        "type": "code",
        "title": "Jenkinsfile",
        "code": "pipeline {\n  agent any\n\n  environment {\n    IMAGE_NAME  = \"myuser/wanderlust-app\"\n    IMAGE_TAG   = \"${BUILD_NUMBER}\"\n    FULL_IMAGE  = \"${IMAGE_NAME}:${IMAGE_TAG}\"\n  }\n\n  stages {\n    stage('Checkout') {\n      steps { checkout scm }\n    }\n\n    stage('Build Image') {\n      steps {\n        sh \"docker build -t ${FULL_IMAGE} .\"\n      }\n    }\n\n    stage('Push to DockerHub') {\n      steps {\n        withCredentials([usernamePassword(\n          credentialsId: 'dockerhub-creds',\n          usernameVariable: 'DOCKER_USER',\n          passwordVariable: 'DOCKER_PASS'\n        )]) {\n          sh \"\"\"\n            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin\n            docker push ${FULL_IMAGE}\n            docker tag  ${FULL_IMAGE} ${IMAGE_NAME}:latest\n            docker push ${IMAGE_NAME}:latest\n          \"\"\"\n        }\n      }\n    }\n\n    stage('Deploy to Server') {\n      steps {\n        withCredentials([sshUserPrivateKey(\n          credentialsId: 'prod-ssh-key',\n          keyFileVariable: 'SSH_KEY'\n        )]) {\n          sh \"\"\"\n            ssh -o StrictHostKeyChecking=no -i $SSH_KEY ubuntu@prod-server.com \\\n              \"docker pull ${FULL_IMAGE} && \\\n               docker stop app || true && \\\n               docker rm   app || true && \\\n               docker run -d --name app -p 80:3000 ${FULL_IMAGE}\"\n          \"\"\"\n        }\n      }\n    }\n  }\n\n  post {\n    always {\n      sh \"docker rmi ${FULL_IMAGE} || true\"\n      cleanWs()\n    }\n  }\n}"
      }
    ]
  },
  {
    "id": "project3",
    "num": "P3",
    "title": "Project 3 \u2014 Full Stack CI/CD to AWS EC2",
    "category": "projects",
    "description": "Learn about Project 3 \u2014 Full Stack CI/CD to AWS EC2 in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins project 3 \u2014 full stack ci/cd to aws ec2",
    "sections": [
      {
        "type": "callout",
        "tone": "success",
        "html": "\n<div class=\"project-label\">Project 03 / Advanced</div>\n<h3>Production-grade pipeline \u2014 Code \u2192 Docker \u2192 ECR \u2192 EC2</h3>\n<p>Push the image to AWS ECR (instead of DockerHub), deploy to an EC2 instance using AWS credentials, send Slack notification on success or failure. Covers real-world production patterns.</p>\n<div><span class=\"tag\">AWS ECR</span><span class=\"tag\">EC2 Deploy</span><span class=\"tag\">AWS CLI</span><span class=\"tag\">Slack</span><span class=\"tag\">SonarQube</span></div>\n"
      },
      {
        "type": "code",
        "title": "Jenkinsfile (Production Pattern)",
        "code": "pipeline {\n  agent any\n\n  environment {\n    AWS_REGION     = 'ap-south-1'\n    ECR_REGISTRY   = '123456789.dkr.ecr.ap-south-1.amazonaws.com'\n    ECR_REPO       = 'my-app'\n    IMAGE_TAG      = \"${BUILD_NUMBER}\"\n    FULL_IMAGE     = \"${ECR_REGISTRY}/${ECR_REPO}:${IMAGE_TAG}\"\n  }\n\n  stages {\n    stage('Checkout') {\n      steps { checkout scm }\n    }\n\n    stage('SonarQube Analysis') {\n      steps {\n        withSonarQubeEnv('sonarqube') {\n          sh 'mvn sonar:sonar'\n        }\n      }\n    }\n\n    stage('Quality Gate') {\n      steps {\n        timeout(time: 5, unit: 'MINUTES') {\n          waitForQualityGate abortPipeline: true\n        }\n      }\n    }\n\n    stage('Build & Push to ECR') {\n      steps {\n        withCredentials([[\n          $class: 'AmazonWebServicesCredentialsBinding',\n          credentialsId: 'aws-creds',\n          accessKeyVariable: 'AWS_ACCESS_KEY_ID',\n          secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'\n        ]]) {\n          sh \"\"\"\n            aws ecr get-login-password --region ${AWS_REGION} | \\\n              docker login --username AWS --password-stdin ${ECR_REGISTRY}\n            docker build -t ${FULL_IMAGE} .\n            docker push  ${FULL_IMAGE}\n          \"\"\"\n        }\n      }\n    }\n\n    stage('Deploy to EC2') {\n      steps {\n        withCredentials([sshUserPrivateKey(\n          credentialsId: 'ec2-ssh',\n          keyFileVariable: 'EC2_KEY'\n        )]) {\n          sh \"\"\"\n            ssh -i $EC2_KEY ec2-user@ec2-xx-xx.ap-south-1.compute.amazonaws.com \\\n              \"aws ecr get-login-password --region ${AWS_REGION} | \\\n               docker login --username AWS --password-stdin ${ECR_REGISTRY} && \\\n               docker pull ${FULL_IMAGE} && \\\n               docker stop app || true && docker rm app || true && \\\n               docker run -d --name app -p 80:8080 ${FULL_IMAGE}\"\n          \"\"\"\n        }\n      }\n    }\n  }\n\n  post {\n    success {\n      slackSend channel: '#ci-cd', color: 'good',\n        message: \"\u2705 Deployed ${env.FULL_IMAGE} to production\\n${env.BUILD_URL}\"\n    }\n    failure {\n      slackSend channel: '#ci-cd', color: 'danger',\n        message: \"\u274c Build FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}\\n${env.BUILD_URL}\"\n    }\n    always { cleanWs() }\n  }\n}"
      }
    ]
  },
  {
    "id": "commands",
    "num": "23",
    "title": "CLI & Commands",
    "category": "reference",
    "description": "Learn about CLI & Commands in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins cli & commands",
    "sections": [
      {
        "type": "code",
        "title": "Jenkins Service Management",
        "code": "# Start / stop / restart / status\nsudo systemctl start   jenkins\nsudo systemctl stop    jenkins\nsudo systemctl restart jenkins\nsudo systemctl status  jenkins\n\n# View logs\nsudo journalctl -u jenkins -f\nsudo tail -f /var/log/jenkins/jenkins.log\n\n# Jenkins home directory (jobs, configs, credentials)\nls /var/lib/jenkins/\n\n# Jenkins CLI jar (for scripting Jenkins)\nwget http://localhost:8080/jnlpJars/jenkins-cli.jar\njava -jar jenkins-cli.jar -s http://localhost:8080 -auth user:token list-jobs"
      },
      {
        "type": "code",
        "title": "Useful Jenkins CLI Commands",
        "code": "java -jar jenkins-cli.jar -s http://localhost:8080 -auth u:token \\\n  build     my-job                          # trigger a build\n  build     my-job -p ENV=prod              # build with param\n  list-jobs                                  # list all jobs\n  get-job   my-job                           # export job config (XML)\n  delete-job my-job                          # delete a job\n  safe-restart                               # restart after builds finish\n  install-plugin docker-plugin               # install a plugin"
      }
    ]
  },
  {
    "id": "troubleshoot",
    "num": "24",
    "title": "Troubleshooting",
    "category": "reference",
    "description": "Learn about Troubleshooting in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins troubleshooting",
    "sections": [
      {
        "type": "table",
        "headers": [
          "Problem",
          "Cause",
          "Fix"
        ],
        "rows": [
          [
            "Jenkins not starting",
            "Java not installed / port conflict",
            "Check <code>java -version</code>, check if port 8080 is in use: <code>lsof -i :8080</code>"
          ],
          [
            "Git clone fails",
            "Credentials wrong, SSH key not added",
            "Verify credentials ID in Jenkinsfile matches the stored credential. Test SSH manually."
          ],
          [
            "docker: permission denied",
            "<code>jenkins</code> user not in docker group",
            "<code>sudo usermod -aG docker jenkins &amp;&amp; sudo systemctl restart jenkins</code>"
          ],
          [
            "Webhook not triggering",
            "Jenkins not reachable from GitHub",
            "Check GitHub webhook delivery log. Jenkins must be on public IP or use ngrok for testing."
          ],
          [
            "Build stuck / hanging",
            "Process waiting for input or infinite loop",
            "Check Console Output, add <code>timeout()</code> option, check for hanging <code>sh</code> commands."
          ],
          [
            "Credentials masked but visible",
            "Echoing the variable directly",
            "Never use <code>echo $SECRET</code>. Credentials are masked only in <code>withCredentials{}</code> context."
          ],
          [
            "Out of disk space",
            "Build workspaces and artifacts accumulating",
            "Add <code>buildDiscarder</code> option. Run <code>cleanWs()</code> in post. Configure agent disk cleanup."
          ],
          [
            "Pipeline syntax error",
            "HCL/Groovy mistake in Jenkinsfile",
            "Use the <strong>Pipeline Syntax</strong> tool in Jenkins UI \u2192 Snippet Generator to generate valid steps."
          ]
        ]
      }
    ]
  },
  {
    "id": "bestpractices",
    "num": "25",
    "title": "Best Practices",
    "category": "reference",
    "description": "Learn about Best Practices in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins best practices",
    "sections": [
      {
        "type": "list",
        "items": [
          "<strong>Store Jenkinsfile in Git</strong> \u2014 never configure pipelines through the UI alone. Code is the source of truth.",
          "<strong>Use Declarative pipelines</strong> \u2014 they're more readable, easier to audit, and enforce structure.",
          "<strong>Never hardcode secrets</strong> \u2014 always use the Credentials store and <code>withCredentials{}</code>.",
          "<strong>Set timeouts</strong> \u2014 add <code>timeout(time: 30, unit: 'MINUTES')</code> to prevent hung builds consuming agents forever.",
          "<strong>Clean workspaces</strong> \u2014 always call <code>cleanWs()</code> in the <code>post { always {} }</code> block.",
          "<strong>Use agents for heavy work</strong> \u2014 don't run builds on the controller. Keep the controller for scheduling only.",
          "<strong>Tag Docker images with BUILD_NUMBER</strong> \u2014 never overwrite <code>:latest</code> only. Versioned tags enable rollback.",
          "<strong>Add quality gates</strong> \u2014 integrate SonarQube and fail the pipeline if code quality drops below threshold.",
          "<strong>Use Shared Libraries</strong> \u2014 once you have 3+ repos with similar Jenkinsfiles, extract common logic.",
          "<strong>Lock production deploys</strong> \u2014 use <code>input()</code> for manual approval before deploying to production.",
          "<strong>Monitor Jenkins itself</strong> \u2014 set up disk space alerts, plugin update notifications, and log monitoring."
        ]
      }
    ]
  },
  {
    "id": "links",
    "num": "26",
    "title": "Repo & Links",
    "category": "reference",
    "description": "Learn about Repo & Links in Jenkins.",
    "tags": [
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],
    "search": "jenkins repo & links",
    "sections": [
      {
        "type": "grid",
        "items": [
          {
            "title": "\ud83d\udcfa Video",
            "text": "<a href=\"https://www.youtube.com/watch?v=XaSdKR2fOU4\" style=\"color:var(--jenkins);text-decoration:none;\">Jenkins In One Shot (Hindi)</a><br/>DevOps Production CI/CD"
          },
          {
            "title": "\ud83d\udc19 GitHub Repo",
            "text": "<a href=\"https://github.com/itspriyanshuks17/jenkins-install\" style=\"color:var(--cyan);text-decoration:none;font-family:var(--mono);font-size:12px;\">itspriyanshuks17/jenkins-install</a>"
          },
          {
            "title": "\ud83d\udcd6 Jenkins Docs",
            "text": "<a href=\"https://www.jenkins.io/doc/\" style=\"color:var(--jenkins);text-decoration:none;\">jenkins.io/doc</a> \u2014 Official documentation"
          },
          {
            "title": "\ud83e\udde9 Plugins Index",
            "text": "<a href=\"https://plugins.jenkins.io/\" style=\"color:var(--cyan);text-decoration:none;\">plugins.jenkins.io</a> \u2014 1,800+ plugins"
          }
        ]
      },
      {
        "type": "callout",
        "tone": "success",
        "html": "\n<strong>Next Steps:</strong> Practice each project, then explore Jenkins with Kubernetes (dynamic agents), integrate SonarQube for code quality, and set up a full GitOps flow with ArgoCD for Kubernetes deployments.\n    "
      }
    ]
  }
];

window.JENKINS_PROJECTS = [
  {
    id: "project1",
    level: "Project 01 / Beginner",
    title: "Simple Node.js CI Pipeline",
    description: "Set up a complete Jenkins pipeline that triggers on every GitHub push, installs dependencies, runs tests, and archives build artifacts.",
    tags: ["Node.js", "GitHub Webhook", "npm test", "Artifacts"],
    note: "note.html?id=project1",
    paths: ["https://github.com/itspriyanshuks17/jenkins-install"]
  },
  {
    id: "project2",
    level: "Project 02 / Intermediate",
    title: "Docker CI/CD Pipeline",
    description: "Build a pipeline that tests code inside a Docker container, builds a Docker image, and pushes it to Docker Hub using Jenkins credentials.",
    tags: ["Docker", "Docker Hub", "Credentials", "Pipeline"],
    note: "note.html?id=project2",
    paths: ["https://github.com/itspriyanshuks17/jenkins-install"]
  },
  {
    id: "project3",
    level: "Project 03 / Advanced",
    title: "AWS EC2 Deployment",
    description: "Deploy a live application to AWS EC2 using Jenkins, configuring SSH agents, and setting up an end-to-end continuous deployment workflow.",
    tags: ["AWS EC2", "SSH Agent", "CD", "Production"],
    note: "note.html?id=project3",
    paths: ["https://github.com/itspriyanshuks17/jenkins-install"]
  }
];
