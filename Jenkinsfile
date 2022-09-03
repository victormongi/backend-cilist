pipeline {
  agent any
  environment {
        REGISTRY   = 'irwankilay' 
        APPS = 'backend'
        TXT = "${REGISTRY}/${APPS}:${BUILD_NUMBER}"
        ANSIBLE_HOST=122.248.223.243
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
          sh "scp -r /var/lib/jenkins/workspace/backend ubuntu@${ANSIBLE_HOST}:/opt/docker"
          sh "ssh ubuntu@${ANSIBLE_HOST} ansible-playbook -i /opt/docker/hosts /opt/docker/create-docker-image.yml --extra-vars build_number=${BUILD_NUMBER}"
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
