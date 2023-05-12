import type { RequestHandler } from "express";

export const heartbeat: RequestHandler = (request, response) => {
  response.writeHead(204).end();
};
