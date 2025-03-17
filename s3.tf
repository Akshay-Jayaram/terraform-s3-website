resource "aws_s3_bucket" "s3_bucket" {
  bucket = "akj-article-summaizer"
}

# Enable public access; by default it is disabled
resource "aws_s3_bucket_public_access_block" "static" {
  bucket = aws_s3_bucket.s3_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.s3_bucket.id
  policy = jsonencode({
    Statement = [
      {
        Sid       = "PublicAccess"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.s3_bucket.arn}/*",
      }
    ]
  })
}

resource "aws_s3_bucket_website_configuration" "static_website" {
  bucket = aws_s3_bucket.s3_bucket.id

  index_document {
    suffix = "index.html"
  }
}

resource "null_resource" "upload_folder" {
  triggers = {
    always_run = timestamp()  # Ensures execution on every apply
  }
  
  provisioner "local-exec" {
    command = "aws s3 sync ./build s3://${aws_s3_bucket.s3_bucket.bucket} --delete"
  }
}

