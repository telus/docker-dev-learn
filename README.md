To set up a continuous delivery build pipeline, we'll add a new OpenShift BuildConfig that uses the "Pipeline" strategy.


To apply:
```
oc apply -f build-jenkins.yml
```

This will install a Jenkins server on our project. Once running, you'll have a delivery pipeline available in OpenShift under the Builds tab. If you click build, you should see it succeed with the Hello World message.

You can log into Jenkins using your same OpenShift credentials to view the log output.

If you edit the pipeline in OpenShift, you can get a GitHub Webhook URL. Add this to the GitHub project (under settings), with content type = `application/json`. Now when commits are made, a build should start automatically.