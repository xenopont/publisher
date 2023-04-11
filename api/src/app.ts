import * as http from "node:http";

import { heartbeat } from "./heartbeat";
import { status404 } from "./http-statuses/404";
import { status501 } from "./http-statuses/501";

const port = process.env.port || 3000;
http
  .createServer((request, response): void => {
    switch (request.url) {
      case "/heartbeat": {
        heartbeat(response);
        break;
      }
      case "/graphql": {
        status501(response);
        break;
      }
      default: {
        status404(response);
        break;
      }
    }
  })
  .listen(port);
