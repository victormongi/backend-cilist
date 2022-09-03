pipeline {
  agent any
  environment {
        REGISTRY = 'irwankilay'
        APPS = 'backend2'
  }
    stages{
      stage('Build with Docker') {
        steps {
          sh "docker build -f Dockerfile -t ${REGISTRY}/${APPS}:${BUILD_NUMBER} -t ${REGISTRY}/${APPS}:latest ."
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
            if ( env.GIT_BRANCH == 'staging' ) {
              sh "sed -i 's/IMAGE_TAG/${GIT_BRANCH}-${BUILD_NUMBER}/g' deployment.yaml"
              sh "kubectl apply -f deployment.yaml -n staging"
            }
            else if ( env.GIT_BRANCH == 'main' ) {
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
        }
        success {
            echo 'I succeeded!'
        }
        failure {
            echo 'I failed :('
        }
    }
}
