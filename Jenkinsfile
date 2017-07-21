// DOCS for OpenShift Jenkins plugin:
// https://jenkins.io/doc/pipeline/steps/openshift-pipeline

stage('Checkout') {
  node {
    // ensure OpenShift is configured for your current project
    sh "oc project ${env.PROJECT_NAME}"

    // check out source code
    checkout scm
  }
}

stage('Build') {
  node {
    // apply the ImageStream and Dockerfile BuildConfig
    sh("""
      oc apply -f imagestream.yml
      oc apply -f build-docker.yml
    """)

    // trigger a new build
    openshiftBuild buildConfig: 'dev-learn'
  }
}

stage('Deploy') {
  node {
    // get imagestream URL
    String imageStreamUrl = sh(
      returnStdout: true,
      script: "oc get imagestream dev-learn -o='jsonpath={..dockerImageRepository}'"
    ).trim()

    // update the deployment with the new image & apply service and route
    sh("""
      oc process -f deployment-template.yml -p IMAGE=${imageStreamUrl} | oc apply -f -
      oc apply -f service.yml
      oc apply -f route.yml
    """)

    // monitor the deployment to see that it succeeds
    openshiftVerifyDeployment deploymentConfig: 'dev-learn'
  }
}