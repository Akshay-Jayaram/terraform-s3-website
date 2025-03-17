# One Click to Host Your Static Website Using S3 Websites

Easily deploy your static website on AWS S3 with a single Terraform command. This setup automates bucket creation, public access settings, file uploads, and website hosting—without needing to use the AWS Console!

## Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/terraform-s3-website.git
cd terraform-s3-website
```

### 2️⃣ Add Your Static Website Files
Place your **HTML, CSS, JS** files inside the `build/` folder.
```sh
cp -r /path/to/your/build/* ./build/
```

### 3️⃣ Configure AWS Credentials
Ensure you have AWS CLI installed and configured:
```sh
aws configure
```
You will need to provide:
- AWS Access Key ID
- AWS Secret Access Key
- Default region name (e.g., `us-west-1`)
- Default output format (leave blank for default)

### 4️⃣ Initialize and Apply Terraform
```sh
terraform init
terraform apply -auto-approve
```

Terraform will:
- Create an S3 bucket
- Set public access permissions
- Apply a bucket policy for public reads
- Upload your website files from `build/`
- Configure the bucket as a static website

### 5️⃣ Access Your Website 🎉
Once deployment is complete, Terraform will output the website URL.
```sh
bucket_url = "{name}.s3-website-us-east-1.amazonaws.com"
```
Open the link in your browser, and your website should be live! 🚀

## 🔄 Updating Your Website
To update your site, just replace the files in the `build/` folder and re-run:
```sh
terraform apply -auto-approve
```

## ❌ Destroying the Infrastructure
If you want to remove the S3 website:
```sh
terraform destroy -auto-approve
```
This will delete the S3 bucket and all associated resources.

---
### Done! Enjoy hassle-free website hosting with Terraform and AWS S3. 

