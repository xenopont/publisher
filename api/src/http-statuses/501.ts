import { ServerResponse } from "node:http";

export const status501 = (response: ServerResponse): void => {
  response.writeHead(501, "Not Implemented").end();
};
