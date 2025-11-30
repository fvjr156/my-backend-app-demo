import pkg from 'serverless-http';
const { serverless } = pkg;
import app from "./app.js";

export const handler = serverless(app);
