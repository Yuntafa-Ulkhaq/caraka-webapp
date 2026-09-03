import { Elysia } from "elysia";
import { checkDbConnection } from "./db";

const port = Number(process.env.PORT) || 3000;

const app = new Elysia()
  .get("/", () => ({
    name: "caraka-webapp API",
    version: "1.0.0",
    runtime: "Bun",
    framework: "ElysiaJS",
    timestamp: new Date().toISOString(),
  }))
  .get("/health", async () => {
    const dbStatus = await checkDbConnection();
    return {
      status: "ok",
      uptime: process.uptime(),
      database: dbStatus,
      timestamp: new Date().toISOString(),
    };
  })
  .listen(port);

console.log(`🦊 Elysia server is running at http://${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
