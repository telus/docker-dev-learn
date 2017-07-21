let http = require('http');

let server = http.createServer(function (request, response) {

  response.writeHead(200, {"Content-Type": "text/plain"});

  response.end("Hello Delivery Pipeline\n");

});

server.listen(3000);

console.log("Server running at http://localhost:3000/");

