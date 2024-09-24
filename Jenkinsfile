pipeline {
    agent {
        docker {
            image 'docker:latest'
            args '--privileged' // Use the --privileged flag
        }
    }

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub' // Replace with your Docker Hub credentials ID in Jenkins
        DOCKER_IMAGE_NAME = 'tauqir604/jenkins'  // Replace with your Docker Hub username and image name
        DOCKER_IMAGE_TAG = "${GITHUB_SHA}" // Use the Git commit SHA as the tag
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Set Docker Socket Permissions') {
            steps {
                script {
                    // Change ownership of the Docker socket
                    sh 'sudo chown jenkins:docker /var/run/docker.sock || true'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        sh 'docker push ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}'
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
