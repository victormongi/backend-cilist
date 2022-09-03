pipeline {
  agent any
  environment {
     REGISTRY   = 'irwankilay' 
  }
    stages{
      stage('Pull codes and transfer to ansible') {
        steps {
          sh "scp -r /var/lib/jenkins/workspace/backend ubuntu@122.248.223.243:/opt/docker"
        }
      }
      stage('Cleanup Workspace') {
         steps {
              cleanWs()
              sh """
              echo "Cleanup Workspace"
              """
            }
        } 
    }
    post {
        always {
            echo 'One way or another, I have finished.'
            deleteDir()
        }
        success {
            echo 'I succeeded!'
        }
        failure {
            echo 'I failed.'
        }
    }
}
