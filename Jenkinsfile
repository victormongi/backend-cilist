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
