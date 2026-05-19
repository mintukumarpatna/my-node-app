pipeline {
    agent any

    environment {
        AWS_REGION = "us-east-1"
        AWS_ACCOUNT_ID = "702358135571"

        IMAGE_NAME = "my-node-app"
        IMAGE_TAG = "${BUILD_NUMBER}"

        ECR_REPO = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_NAME}"

        KUBECONFIG = "/var/lib/jenkins/.kube/config"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                docker build --no-cache -t ${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Login to AWS ECR') {
            steps {
                sh """
                aws ecr get-login-password --region ${AWS_REGION} | \
                docker login --username AWS --password-stdin \
                ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
                """
            }
        }

        stage('Tag Docker Image') {
            steps {
                sh """
                docker tag ${IMAGE_NAME}:${IMAGE_TAG} \
                ${ECR_REPO}:${IMAGE_TAG}

                docker tag ${IMAGE_NAME}:${IMAGE_TAG} \
                ${ECR_REPO}:latest
                """
            }
        }

        stage('Push to ECR') {
            steps {
                sh """
                docker push ${ECR_REPO}:${IMAGE_TAG}
                docker push ${ECR_REPO}:latest
                """
            }
        }

        stage('Update Kubeconfig') {
            steps {
                sh """
                aws eks update-kubeconfig \
                --region ${AWS_REGION} \
                --name my-cluster
                """
            }
        }

        stage('Check Kubernetes Connection') {
            steps {
                sh """
                kubectl get nodes
                """
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh """
                kubectl set image deployment/my-node-app \
                my-node-app=${ECR_REPO}:${IMAGE_TAG}
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                sh """
                kubectl rollout status deployment/my-node-app
                """
            }
        }
    }
}