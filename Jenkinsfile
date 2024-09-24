pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('DOCKER_USERNAME') // Jenkins credentials ID for Docker username
        DOCKER_PASSWORD = credentials('DOCKER_PASSWORD') // Jenkins credentials ID for Docker password
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Set up Docker Buildx') {
            steps {
                script {
                    sh '''
                    # Set up Docker Buildx if not available
                    docker buildx create --use || true
                    docker buildx inspect --bootstrap
                    '''
                }
            }
        }

        stage('Log in to Docker Hub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'DOCKER_PASSWORD', variable: 'DOCKER_PASSWORD')]) {
                        sh '''
                        echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                        '''
                    }
                }
            }
        }

        stage('Build, Push, and Load Docker Image') {
            steps {
                script {
                    GIT_COMMIT_SHORT = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                    sh """
                    docker buildx build --platform linux/amd64 --push --load \
                    -t ${DOCKER_USERNAME}/my-app:${GIT_COMMIT_SHORT} .

                    docker tag ${DOCKER_USERNAME}/my-app:${GIT_COMMIT_SHORT} \
                    ${DOCKER_USERNAME}/my-app:latest
                    """
                }
            }
        }

        stage('Push Latest Tag') {
            steps {
                script {
                    sh """
                    docker push ${DOCKER_USERNAME}/my-app:latest
                    """
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker logout'
            }
        }
        success {
            echo 'Docker image build, push, and tag succeeded.'
        }
        failure {
            echo 'Docker image build, push, or tag failed.'
        }
    }
}
