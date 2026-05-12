```bash id="p8dx4m"
#!/bin/bash

# Jenkins Installation Script for Fedora
# Includes:
# - Java 17
# - Jenkins
# - Firewall Configuration
# - Docker Permission for Jenkins

set -e

echo "======================================="
echo " Updating Fedora System"
echo "======================================="
sudo dnf update -y

echo "======================================="
echo " Installing Java 17"
echo "======================================="
sudo dnf install -y java-17-openjdk java-17-openjdk-devel

echo "======================================="
echo " Checking Java Version"
echo "======================================="
java -version

echo "======================================="
echo " Adding Jenkins Repository"
echo "======================================="
sudo wget -O /etc/yum.repos.d/jenkins.repo \
https://pkg.jenkins.io/redhat-stable/jenkins.repo

echo "======================================="
echo " Importing Jenkins GPG Key"
echo "======================================="
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key

echo "======================================="
echo " Installing Jenkins"
echo "======================================="
sudo dnf install -y jenkins

echo "======================================="
echo " Starting Jenkins Service"
echo "======================================="
sudo systemctl enable --now jenkins

echo "======================================="
echo " Configuring Firewall"
echo "======================================="
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload

echo "======================================="
echo " Adding Jenkins User to Docker Group"
echo "======================================="
sudo usermod -aG docker jenkins || true

echo "======================================="
echo " Restarting Jenkins"
echo "======================================="
sudo systemctl restart jenkins

echo "======================================="
echo " Jenkins Status"
echo "======================================="
systemctl status jenkins --no-pager

echo "======================================="
echo " Initial Jenkins Admin Password"
echo "======================================="
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

echo ""
echo "======================================="
echo " Jenkins Installation Complete!"
echo "======================================="
echo ""
echo "Access Jenkins at:"
echo "http://localhost:8080"
echo ""
echo "Or:"
echo "http://YOUR-IP:8080"
echo ""
echo "Useful Commands:"
echo "sudo systemctl status jenkins"
echo "sudo systemctl restart jenkins"
echo "journalctl -u jenkins -f"
```

Save it:

```bash id="r4kw2n"
nano install-jenkins-fedora.sh
```

Make executable:

```bash id="v7hz9q"
chmod +x install-jenkins-fedora.sh
```

Run:

```bash id="m2pc8x"
./install-jenkins-fedora.sh
```

After installation, open:

```text id="s5lt1y"
http://localhost:8080
```

Paste the generated admin password and complete setup.
