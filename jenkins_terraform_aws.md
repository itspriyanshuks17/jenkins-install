# Configuring AWS Credentials for Jenkins + Terraform + AWS Credentials

If Terraform fails in Jenkins with the error:

```
Error: No valid credential sources found
Error: failed to refresh cached credentials, no EC2 IMDS role found
```

it means AWS credentials are not configured for Jenkins.

---

## Step 1: Confirm Jenkins User
Run:
```bash
ps aux | grep jenkins
```

If you see something like:
```
jenkins   432 ... java -jar /usr/share/java/jenkins.war
```
it means Jenkins runs as the **jenkins** system user.

---

## Step 2: Create AWS Credentials Directory
```bash
sudo mkdir -p /var/lib/jenkins/.aws
```

---

## Step 3: Create the Credentials File
```bash
sudo nano /var/lib/jenkins/.aws/credentials
```

Add the following (replace with your AWS keys):

```ini
[default]
aws_access_key_id = YOUR_AWS_ACCESS_KEY_ID
aws_secret_access_key = YOUR_AWS_SECRET_ACCESS_KEY
```

⚠️ Make sure:
- `[default]` is the first line
- No region or output settings in this file

---

## Step 4: Create the Config File
```bash
sudo nano /var/lib/jenkins/.aws/config
```

Add:
```ini
[default]
region = ap-south-1
output = json
```

---

## Step 5: Fix Permissions
```bash
sudo chown -R jenkins:jenkins /var/lib/jenkins/.aws
sudo chmod 600 /var/lib/jenkins/.aws/credentials
sudo chmod 600 /var/lib/jenkins/.aws/config
```

---

## Step 6: Test as Jenkins User
Run:
```bash
sudo -u jenkins aws sts get-caller-identity
```

Expected output (example):
```json
{
    "UserId": "XXXXXXXX",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/YourUser"
}
```

If you see this, credentials are configured correctly.

---

## Alternative Approaches

### Option A: Environment Variables
Instead of files, add environment variables in your Jenkins job:
```
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_DEFAULT_REGION=ap-south-1
```

### Option B: Jenkins Credentials Plugin (Recommended)
1. Go to **Manage Jenkins → Credentials → Add Credentials**
2. Select **AWS Credentials** and enter your keys.
3. Use in Jenkinsfile:

```groovy
withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-creds-id']]) {
    sh '''
      terraform init
      terraform plan
      terraform apply -auto-approve
    '''
}
```

### Option C: IAM Role (if Jenkins runs on AWS EC2)
- Attach an IAM role with Terraform permissions to the EC2 instance.
- Terraform auto-detects credentials via IMDS.

---

✅ **Recommended:** Use **Option B (Jenkins Credentials Plugin)** for better security.
