pipeline {
  agent any
  environment {
     REGISTRY   = 'irwankilay' 
  }
    stages{
      sh "scp -r /var/lib/jenkins/workspace/cilist-frontend ansadmin@122.248.223.243:/opt/docker"
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
