pipeline {
  agent any
  environment {
     REGISTRY   = 'irwankilay' 
  }
    stages{
       stage('Cleanup Workspace') {
           steps {
              cleanWs()
              sh """
              echo "Cleaned Up Workspace For Project"
              """
           }
       }
      stage('Pull codes and transfer to ansible') {
        steps {
         echo 'Pull codes and transfer to ansible' 
        }
      }
      stage('Push docker image to Amazon ECR') {
        steps {
          echo 'Push docker image to Amazon ECR'
        }
      }
      stage('Deploy to kubernetes') {
        steps {
          echo 'deployed to kubernetes'
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
