We've now defined a docker-compose file that specifies how our application is built, tagged, and what ports it exposes.

To start the container we can now run:
```
docker-compose up -d --build
```

To stop the container we can run:
```
docker-compose down
```
