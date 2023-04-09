import * as http from "node:http";

import { ROUTER } from "./routes";

const port = process.env.port || 3000;
http
  .createServer(function (request, response) {
    console.log(ROUTER);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
  })
  .listen(port);
