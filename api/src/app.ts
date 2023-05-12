import * as express from "express";

import { graphql } from "./graphql";
import { heartbeat } from "./heartbeat";

const port = process.env.port || 3000;

const app = express();

app.use(express.json({ strict: false }));

app.use("/heartbeat", heartbeat);
app.use("/graphql", graphql);

app.listen(port);
