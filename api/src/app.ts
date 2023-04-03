import * as http from "node:http";

const port = process.env.port || 3000;
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(port);
