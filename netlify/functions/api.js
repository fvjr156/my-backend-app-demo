import pkg from 'serverless-http';
const { serverless } = pkg;
import app from "../../src/app.js";

export const handler = serverless(app);
