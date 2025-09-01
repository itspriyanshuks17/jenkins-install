<p align="center">
  <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins Logo" width="150"/>
</p>

<h1 align="center">Jenkins Installation Guide</h1>

This guide provides step-by-step instructions to install **Jenkins** on multiple platforms:  
- Debian/Ubuntu (Linux)  
- WSL (Windows Subsystem for Linux)  
- Windows  
- macOS  

---

## 1. Install Jenkins on Debian/Ubuntu

### Step 1: Update system
```bash
sudo apt update
sudo apt upgrade -y
````

### Step 2: Install Java (required for Jenkins)

```bash
sudo apt install openjdk-17-jdk -y
```

Verify installation:

```bash
java -version
```

### Step 3: Add Jenkins repository

```bash
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
```

### Step 4: Install Jenkins

```bash
sudo apt update
sudo apt install jenkins -y
```

### Step 5: Start and enable Jenkins

```bash
sudo systemctl enable jenkins
sudo systemctl start jenkins
```

### Step 6: Access Jenkins

* Open browser: `http://localhost:8080`
* Retrieve initial password:

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

---

## 2. Install Jenkins on WSL (Windows Subsystem for Linux)

Since WSL runs Debian/Ubuntu-like environments, follow the **same steps as above** for Debian/Ubuntu.

> ⚠️ Jenkins runs inside WSL, so access it via `http://localhost:8080` in your Windows browser.

---

## 3. Install Jenkins on Windows

### Step 1: Download Jenkins

* Go to [Jenkins Windows Installer](https://www.jenkins.io/download/)
* Download the `.msi` installer.

### Step 2: Run installer

* Double-click `.msi` file
* Follow setup wizard
* Jenkins will install as a **Windows service**.

### Step 3: Start Jenkins

* Jenkins runs automatically after installation.
* Access Jenkins at: [http://localhost:8080](http://localhost:8080)

### Step 4: Get initial password

Check file:

```
C:\Program Files\Jenkins\secrets\initialAdminPassword
```

---

## 4. Install Jenkins on macOS

### Option 1: Using Homebrew (Recommended)

```bash
brew update
brew install jenkins-lts
```

Start Jenkins:

```bash
brew services start jenkins-lts
```

### Option 2: Manual Download

* Download `.war` from [Jenkins official site](https://www.jenkins.io/download/).
* Run:

```bash
java -jar jenkins.war
```

### Access Jenkins

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Verification

After installation on any platform, open:

```
http://localhost:8080
```

Use the **initial admin password** from your system to unlock Jenkins and complete setup.

---

## References

* [Jenkins Official Downloads](https://www.jenkins.io/download/)
* [Jenkins Documentation](https://www.jenkins.io/doc/)

