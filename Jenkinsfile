pipeline {
  agent any
  environment {
     REGISTRY   = 'irwankilay' 
  }
    stages{
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
