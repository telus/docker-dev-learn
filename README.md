Finally we'll expose our deployment with a Service and a Route.

A Service is a load balancer that exposes a Deployment within the OpenShift cluster. A Route lets us expose the Service externally.

To apply:
```
oc apply -f service.yml
oc apply -f route.yml
```

You should now be able to hit your route to see your application deployed, for realsies!
