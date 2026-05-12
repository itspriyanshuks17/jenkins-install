# Install Java (Required)

[Jenkins Official Website](https://www.jenkins.io/?utm_source=chatgpt.com)

Jenkins needs Java 17 or 21.

Install OpenJDK:

```bash id="v9x2pl"
sudo dnf install -y java-17-openjdk java-17-openjdk-devel
```

Verify:

```bash id="t5cw8k"
java -version
```

---

# Add Jenkins Repository

```bash id="g7mq1d"
sudo wget -O /etc/yum.repos.d/jenkins.repo \
https://pkg.jenkins.io/redhat-stable/jenkins.repo
```

Import key:

```bash id="r2bn6f"
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
```

---

# Install Jenkins

```bash id="n4hv8q"
sudo dnf install -y jenkins
```

---

# Start Jenkins Service

```bash id="k8zu3w"
sudo systemctl enable --now jenkins
```

Check status:

```bash id="y1cf5s"
systemctl status jenkins
```

---

# Allow Firewall Port

Jenkins runs on port `8080`.

```bash id="q6ae2m"
sudo firewall-cmd --permanent --add-port=8080/tcp
```

```bash id="u7rw4n"
sudo firewall-cmd --reload
```

---

# Access Jenkins

Open browser:

```text id="f3ld8y"
http://localhost:8080
```

or

```text id="j2ks5v"
http://YOUR-IP:8080
```

---

# Get Initial Admin Password

```bash id="o5np1z"
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

Copy password → paste in browser.

---

# Recommended Plugins For You

Since you work with:

* Kubernetes
* Docker
* Cloud research
* GitHub projects

Install these plugins during setup:

* Docker
* Docker Pipeline
* Kubernetes
* GitHub Integration
* Blue Ocean
* Pipeline
* SSH Agent
* NodeJS
* Terraform

---

# Verify Jenkins User Can Access Docker

Very important for CI/CD pipelines.

Run:

```bash id="l9qx7r"
sudo usermod -aG docker jenkins
```

Restart Jenkins:

```bash id="c1ut6p"
sudo systemctl restart jenkins
```

---

# Test Docker Inside Jenkins

```bash id="b8zk4m"
sudo su - jenkins
```

Then:

```bash id="d3fw9n"
docker ps
```

If no permission error appears, Jenkins can build containers successfully.
