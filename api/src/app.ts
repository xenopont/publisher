import * as http from "node:http";

const port = process.env.port || 3000;
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
  })
  .listen(port);
