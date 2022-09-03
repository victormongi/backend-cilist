pipeline {
  agent any
  environment {
     REGISTRY   = 'irwankilay' 
  }
    stages{
      stage('Pull codes and transfer to ansible') {
        steps {
          sh "scp -r /var/lib/jenkins/workspace/frontend ubuntu@122.248.223.243:/opt/docker"
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
