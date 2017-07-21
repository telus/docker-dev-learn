Now we've augmented our Jenkinsfile with an actual end to end delivery pipeline script.

We can deploy absolutely everything by triggering the pipeline. To prove this point, you should wipe your dev-learn project clean:
```
oc delete all --all
```

That's a very fun command, eh? `:D`

Notice that we have replaced our previous `deployment.yml`, and wrapped it in an OpenShift template. A template gives us the ability to parameterize a YAML configuration, and apply it with parameters. You can see how it is used with `oc process` in the Deploy stage of the Jenkinsfile.

This template will allow us to pass in the ImageStream URL as a variable, which will be necessary for deploying it across your personal dev-learn project (unlike the previous hardcoded example from step 4).

To apply and trigger the build pipeline, run:
```
oc apply -f build-jenkins.yml
oc start-build dev-learn-pipeline
```

Watch as the Jenkins server spins up, builds your Docker container and deploys it. Visit the `openshiftapps.com` route to see the newly updated Hello page.