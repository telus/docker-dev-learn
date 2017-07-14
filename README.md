We've added a simple Node v6 Alpine Docker container to this project. See `Dockerfile` for implementation.

To build the container, run:
```
docker build . -t demo
```

To run the container:
```
docker run -d -p 3000:3000 demo
```

To see it running:
```
docker ps
```

You should be able to hit `http://localhost:3000`

To stop the container:
```
docker stop <container ID>
```
