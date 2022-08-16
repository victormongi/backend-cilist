pipeline {
  agent any
  environment {
        REGISTRY = '898130718046.dkr.ecr.us-east-1.amazonaws.com'
        APPS = 'big-project-backend'
  }
    stages{
      stage('Build with Docker') {
        steps {
          sh "docker build -f Dockerfile -t ${REGISTRY}/${APPS}:${GIT_BRANCH}-${BUILD_NUMBER} -t ${REGISTRY}/${APPS}:latest ."
        }
      }
      stage('Publish Docker Image') {
        steps {
          sh "docker push ${REGISTRY}/${APPS}:${GIT_BRANCH}-${BUILD_NUMBER}"
          sh "docker push ${REGISTRY}/${APPS}:latest"
        }
      }
      stage('Deploy to Kubernetes') {
        steps {
          script {
            if ( env.GIT_BRANCH == 'origin/staging' ) {
              sh "sed -i 's/IMAGE_TAG/${GIT_BRANCH}-${BUILD_NUMBER}/g' deployment.yaml"
              sh "kubectl apply -f deployment.yaml -n staging"
            }
            else if ( env.GIT_BRANCH == 'origin/main' ) {
              sh "sed -i 's/IMAGE_TAG/${GIT_BRANCH}-${BUILD_NUMBER}/g' deployment.yaml"
              sh "kubectl apply -f deployment.yaml -n production"
            }
          }
        }
      }
    }
    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir()
        }
        success {
            echo 'I succeeded!'
        }
        failure {
            echo 'I failed :('
        }
    }
}