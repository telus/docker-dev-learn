We've now defined an OpenShift ImageStream and Build.

The image stream is a Docker image repostiory. The build will clone our source from github, compile it, and push it to the image repository.

To install:
```
oc login --server=https://api.telusdigitalsandbox.openshift.com
oc new-project <your name>-dev-learn
oc apply -f imagestream.yml
oc apply -f build.yml
```

Now navigate to https://console.telusdigitalsandbox.openshift.com/console/

Click on your project. Under the builds tab, start your build. Observe the created image in the images tab.
