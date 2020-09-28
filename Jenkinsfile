pipeline {
    environment {
        CI = 'true'
        // Docker registry information
        registry = "amitmazor/nexus-uploader-dashboard"
        registryCredential = "dockerhub"
        // create an environment to save docker image informations
        dockerImage = ''
   }

    agent none

    stages {
        
        // stage('Install, Test and Build') {
        //     agent {
        //         docker { 
        //             image 'node:14-alpine' 
        //             args '-p 3000:3000'
        //         }
        //     }
        //     stages {
        //         stage('Install npm package') {
        //             steps {
        //                 sh  'npm install'
        //             }
        //         }
                
        //         // parallel {
        //             // stage('Run Tests') {
        //             //     steps {
        //             //         sh 'npm run test'
        //             //     }
        //             // }
        //             stage('Build an Artifact') {
        //                 steps {
        //                     sh 'npm run build'
        //                 }
        //             }
        //         // }
        //     }
        // }
        // Itamar Loves Amit Mazor
        // Building the docker image. It will run the docker build and use the jenkins build number in docker tag.
        // With build number turn easeful to deploy or rollback based in jenkins.
        stage('Amit') {
            agent any
            stages {
                stage('Building the docker image') {
                    steps {
                        script {
                            dockerImage = docker.build registry + ":$BUILD_NUMBER"
                        }
                    }
                }

                // Push the docker image builded to dockerhub.
                stage('Deploy Image') {
                    steps{
                        script {
                            docker.withRegistry( '', registryCredential ) {
                            dockerImage.push()
                            }
                        }
                    }
                }
                // After build and deploy, delete the image to cleanup your server space.
                stage('Remove Unused docker image') {
                    steps{
                        sh "docker rmi $registry:$BUILD_NUMBER"
                    }
                }
            }
        }
    }
}