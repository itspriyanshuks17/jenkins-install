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

## 📝 Jenkins Pipeline

Two types:

1. **Declarative Pipeline** (simpler, structured):

   ```groovy
   pipeline {
       agent any
       stages {
           stage('Build') {
               steps {
                   echo 'Building...'
               }
           }
           stage('Test') {
               steps {
                   echo 'Testing...'
               }
           }
           stage('Deploy') {
               steps {
                   echo 'Deploying...'
               }
           }
       }
   }
   ```

2. **Scripted Pipeline** (more flexible, Groovy based):

   ```groovy
   node {
       stage('Build') {
           echo 'Building...'
       }
       stage('Test') {
           echo 'Testing...'
       }
       stage('Deploy') {
           echo 'Deploying...'
       }
   }
   ```

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
