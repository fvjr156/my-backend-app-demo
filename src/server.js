import { config } from "./config/env.js";
import cors from "cors";
import express from "express";
import { initDB } from "./models/index.js";
import routes from "./routes/index.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import { serverless } from "serverless-http";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use(notFoundHandler);
app.use(errorHandler);

async function startServer() {
  try {
    await initDB();
    app.listen(PORT, function () {
      console.log(`\nServer running on http://localhost:${PORT}`);
      console.log(`API endpoints available at http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

export default app;

if (process.env.NETLIFY !== "true") {
  startServer();
}

export const handler = serverless(app);
