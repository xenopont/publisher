import { RequestHandler } from "express";

export const graphql: RequestHandler = (request, response) => {
  response.writeHead(501).end();
};
