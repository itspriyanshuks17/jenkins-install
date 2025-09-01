<p align="center">
  <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins Logo" width="150"/>
</p>

<h1 align="center">Jenkins Installation Guide</h1>

This guide provides step-by-step instructions to install **Jenkins** across multiple platforms:

- **Debian/Ubuntu (Linux)**
- **WSL (Windows Subsystem for Linux)**
- **Windows**
- **macOS**

---

## 1. Install Jenkins on Debian/Ubuntu

### Option A: Manual Installation

1. **Update system**
   ```bash
   sudo apt update && sudo apt upgrade -y
    ```

2. **Install Java (required for Jenkins)**

   ```bash
   sudo apt install openjdk-17-jdk -y
   java -version
   ```

3. **Add Jenkins repository**

   ```bash
   curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key \
     | sudo tee /usr/share/keyrings/jenkins-keyring.asc >/dev/null
   echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
     https://pkg.jenkins.io/debian-stable binary/ \
     | sudo tee /etc/apt/sources.list.d/jenkins.list >/dev/null
   ```

4. **Install Jenkins**

   ```bash
   sudo apt update && sudo apt install jenkins -y
   ```

5. **Start and enable Jenkins**

   ```bash
   sudo systemctl enable jenkins
   sudo systemctl start jenkins
   ```

6. **Access Jenkins**

   * Open: `http://localhost:8080`
   * Retrieve initial admin password:

     ```bash
     sudo cat /var/lib/jenkins/secrets/initialAdminPassword
     ```

---

### Option B: Automated Installation via Script

A streamlined way to install Jenkins on Ubuntu or WSL using a prebuilt script:

1. Download the script from GitHub:

   ```bash
   curl -O https://raw.githubusercontent.com/itspriyanshuks17/jenkins-install/main/install_jenkins.sh
   ```

2. Make it executable:

   ```bash
   chmod +x install_jenkins.sh
   ```

3. Run the script:

   ```bash
   ./install_jenkins.sh
   ```

4. When complete, open:

   ```
   http://localhost:8080
   ```

5. Retrieve the initial admin password:

   ```bash
   sudo cat /var/lib/jenkins/secrets/initialAdminPassword
   ```

---

## 2. Install Jenkins on WSL (Windows Subsystem for Linux)

Use either **Option A: Manual** or **Option B: Automated** installation above. Jenkins runs inside WSL and is accessed via `http://localhost:8080` from your Windows browser.

---

## 3. Install Jenkins on Windows

1. **Download** the `.msi` installer from the [Jenkins website](https://www.jenkins.io/download/).
2. **Run** the `.msi` and follow the wizard—it installs as a Windows service.
3. **Access** Jenkins at: `http://localhost:8080`
4. **Retrieve** the initial admin password from:

   ```
   C:\Program Files\Jenkins\secrets\initialAdminPassword
   ```

---

## 4. Install Jenkins on macOS

**Option 1: Homebrew (Recommended)**

```bash
brew update
brew install jenkins-lts
brew services start jenkins-lts
```

**Option 2: Manual Download**

1. Download the `.war` file from [Jenkins official site](https://www.jenkins.io/download/).
2. Run:

   ```bash
   java -jar jenkins.war
   ```

Access Jenkins: `http://localhost:8080`

---

## Verification

Once installed, check:

```
http://localhost:8080
```

Use the initial admin password to unlock Jenkins and complete the setup wizard.

---

## References

* [Jenkins Official Downloads](https://www.jenkins.io/download/)
* [Jenkins Documentation](https://www.jenkins.io/doc/)
