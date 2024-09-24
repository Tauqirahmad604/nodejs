pipeline {
    agent {
        docker {
          image 'docker:latest'
          args '--privileged'

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub' // Replace with your Docker Hub credentials ID in Jenkins
        DOCKER_IMAGE_NAME = 'tauqir604/jenkins'  // Replace with your Docker Hub username and image name
        DOCKER_IMAGE_TAG = "${GITHUB_SHA}" // Use the Git commit SHA as the tag
    }
        }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t tauqir604/jenkins:null .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Log in to Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        // Push the image to Docker Hub
                        docker.image("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}").push()
                    }
                }
            }
        }
    } 

    post {
        success {
            echo "Docker image pushed successfully: ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
