# Task 2: Jenkins CI/CD Pipeline with Docker

## Tools Used
Jenkins – for setting up the CI/CD pipeline

Docker – to containerize and run the Node.js app

EC2 Instance – as the deployment server

GitHub – source code and Jenkinsfile

# What I Did
Set up Jenkins on an AWS EC2 Ubuntu instance.

Installed required plugins: Git, Docker, Pipeline, etc.

Wrote a simple Node.js app with one endpoint:

GET / returns “Node.js App Deployed via Jenkins!”

Created a Dockerfile to build the Node.js app image.

Wrote a Jenkinsfile with the following pipeline stages:

Build: Build Docker image

Test: Run basic curl test

Deploy: Run the container

Configured Jenkins to pull code from GitHub on commit.

Added GitHub webhook pointing to Jenkins URL with /github-webhook/

Exposed port 5000 in Docker and EC2 security group

Exposed port 5000 in the Docker container.

Accessed the app using: http://<ec2-public-ip>:5000

