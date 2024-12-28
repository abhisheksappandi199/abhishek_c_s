#!grrovy

pipeline {
    environment {
        registry = "abhisheksappandi/devops"
        registrycredentials = "docker.credentials"
        PATH+EXTRA = "/usr/local/bin"
        SHELL = "/bin/bash"  // Ensure bash is used
    }
    
    agent any

    stages {
        stage('Clone Git Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/abhisheksappandi199/abhishek_c_s'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'echo "Building the Docker image..."'
                script {
                    image = docker.build("${registry}:$BUILD_NUMBER")
                }
            }
        }
        
        stage('Push Docker Image to Registry') {
            steps {
                sh 'echo "Pushing the Docker image to the registry..."'
                script {
                    docker.withRegistry('', registrycredentials) {
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }
    }
}
