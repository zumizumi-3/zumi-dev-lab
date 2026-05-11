#!/usr/bin/env node
import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const previewRoot = path.resolve(rootDir, process.env.PREVIEW_DIR ?? "preview-output");
const port = Number(process.env.PORT ?? 1455);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".png", "image/png"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
]);

createServer((request, response) => {
  const url = new URL(request.url ?? "/", "http://localhost");
  const pathname = decodeURIComponent(url.pathname);
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const resolvedPath = path.resolve(previewRoot, `.${requestedPath}`);

  if (!resolvedPath.startsWith(previewRoot)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  let filePath = resolvedPath;
  try {
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }
  } catch {
    response.writeHead(404);
    response.end("Not Found");
    return;
  }

  response.writeHead(200, {
    "content-type": mimeTypes.get(path.extname(filePath)) ?? "application/octet-stream",
    "cache-control": "no-store",
  });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Serving ${previewRoot}`);
  console.log(`Open http://127.0.0.1:${port}/`);
});
