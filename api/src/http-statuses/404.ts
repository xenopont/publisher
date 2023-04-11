import { ServerResponse } from "node:http";

export const status404 = (
  response: ServerResponse,
  message = "Not Found"
): void => {
  response.writeHead(404, message).end();
};
