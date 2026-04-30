pipeline {
    agent any

    environment {
        IMAGE_NAME = "mintukumarpatan/my-node-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build --no-cache -t $IMAGE_NAME:$IMAGE_TAG ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "docker push $IMAGE_NAME:$IMAGE_TAG"
                }
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh """
                kubectl set image deployment/my-node-app \
                my-node-app=$IMAGE_NAME:$IMAGE_TAG
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                sh "kubectl rollout status deployment/my-node-app"
            }
        }
    }
}