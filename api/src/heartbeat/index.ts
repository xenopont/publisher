import type { ServerResponse } from "node:http";

export const heartbeat = (response: ServerResponse) => {
  response.writeHead(204).end();
};
