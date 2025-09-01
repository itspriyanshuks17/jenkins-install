#!/bin/bash
# install_jenkins.sh
# Script to install Jenkins on Ubuntu/Debian/WSL

set -e

echo "=== Updating system packages ==="
sudo apt update -y && sudo apt upgrade -y

echo "=== Installing Java (required for Jenkins) ==="
sudo apt install -y fontconfig openjdk-17-jre

echo "=== Adding Jenkins repository key ==="
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

echo "=== Adding Jenkins repository ==="
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

echo "=== Installing Jenkins ==="
sudo apt update -y
sudo apt install -y jenkins

echo "=== Enabling and starting Jenkins service ==="
if command -v systemctl &> /dev/null; then
    sudo systemctl enable jenkins
    sudo systemctl start jenkins
    echo "Jenkins service started with systemd."
else
    echo "Systemd not available (likely WSL). Starting Jenkins manually..."
    sudo service jenkins start || sudo /etc/init.d/jenkins start
fi

echo "=== Installation complete! ==="
echo "Access Jenkins at: http://localhost:8080"
echo "To get admin password, run: sudo cat /var/lib/jenkins/secrets/initialAdminPassword"
