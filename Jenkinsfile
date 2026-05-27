pipeline {
  agent any

  stages {

    stage('Setup') {
      steps {
        echo 'Testing parallel execution of stages...'
        // You can add any setup commands here, such as installing dependencies
        // For example, if you need to install Python dependencies, you could do:
        // sh 'pip install -r requirements.txt'
      }
    }


    stage('Parallel Tests') {
      parallel {
        stage('test') {
          steps {
            echo 'Running test.py'
            sh 'python3 test.py'
          }
        }
        stage('test-2') {
          steps {
            echo 'Running test-2.py'
            sh 'python3 test-2.py'
          }
        }
        stage('test-3') {
          steps {
            echo 'Running test-3.py'
            sh 'python3 test-3.py'
          }
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
    success {
      echo 'All parallel tests completed successfully.'
    }
    failure {
      echo 'One or more parallel tests failed.'
    }
  }
}
