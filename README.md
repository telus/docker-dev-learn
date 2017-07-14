This repo will teach you how to get up and running with Docker and OpenShift. [Accompanying slides](https://docs.google.com/a/telus.com/presentation/d/1HfBpbzbVf5ExpG4wRWG2IhYqvNLXGBO7qbWy81Pdy4o/edit?usp=sharing).

To get started, you will need to [install Docker](https://docs.docker.com/engine/installation/#supported-platforms). You'll also need to install the openshift command line tools, and Node.js:
```
brew install openshift-cli node
```

Finally, to have access to the OpenShift cluster, you will need to be [onboarded](https://github.com/telusdigital/openshift-cluster-provisioning/). Alternatively, you can use [minishift](https://docs.openshift.org/latest/minishift/getting-started/quickstart.html).

To run the hello-world application, you can run:
```
node server.js
```

Then hit `http://localhost:3000`.