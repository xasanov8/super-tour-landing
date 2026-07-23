import express from "express";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4001;

const app = express();
app.disable("x-powered-by");

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "super-tour-landing-server", time: new Date().toISOString() });
});

const distDir = path.join(__dirname, "..", "client", "dist");
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  // SPA fallback — anything not already handled above/by express.static
  // falls back to index.html (there's only one page, so this just covers
  // direct loads/refreshes on the root).
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
  console.log(`Serving built client from ${distDir}`);
} else {
  console.log(
    "client/dist not found — run `npm run build` in client/ first, or keep `npm run dev` running in client/ (Vite dev server) alongside this server."
  );
}

app.listen(PORT, () => {
  console.log(`Super Tour server listening on http://localhost:${PORT}`);
});
