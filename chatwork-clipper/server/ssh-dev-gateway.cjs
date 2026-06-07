"use strict";

const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { handleNodeRequest } = require("./clipper-core.cjs");
const { loadLocalEnv } = require("./local-env.cjs");

loadLocalEnv();

const host = process.env.SSH_DEV_GATEWAY_HOST || "127.0.0.1";
const port = Number(process.env.SSH_DEV_GATEWAY_PORT || 18080);
const basePath = normalizeBasePath(process.env.CHATWORK_CLIPPER_GATEWAY_BASE_PATH || "/zumi-dev-lab");
const env = {
  ...process.env,
  CHATWORK_CLIPPER_DRY_RUN: process.env.CHATWORK_CLIPPER_DRY_RUN || "true",
};

function normalizeBasePath(value) {
  const trimmed = String(value || "").trim();

  if (!trimmed || trimmed === "/") {
    return "";
  }

  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
}

function stripBasePath(pathname) {
  if (!basePath) {
    return pathname;
  }

  if (pathname === basePath) {
    return "/";
  }

  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || "/";
  }

  return "";
}

function clipperRouteForPath(pathname) {
  if (pathname === "/api/clipper/destinations") {
    return "destinations";
  }

  if (pathname === "/api/clipper/share") {
    return "share";
  }

  if (pathname === "/api/clipper/inbox") {
    return "inbox";
  }

  return "";
}

function serveHtml(res, status, html) {
  res.statusCode = status;
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.end(html);
}

function serveJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function serveGatewayIndex(res) {
  const clipperHref = `${basePath}/chatwork-clipper/bookmarklet`;
  const destinationsHref = `${basePath}/api/clipper/destinations`;

  serveHtml(
    res,
    200,
    `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SSH Dev Gateway</title>
    <style>
      :root { color-scheme: light; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic", Meiryo, sans-serif; }
      body { margin: 0; background: #f6f7f9; color: #101828; }
      main { width: min(760px, calc(100vw - 32px)); margin: 0 auto; padding: 32px 0; }
      h1 { margin: 0 0 8px; font-size: 32px; letter-spacing: 0; }
      p { margin: 0 0 18px; color: #667085; line-height: 1.7; }
      ul { display: grid; gap: 10px; padding: 0; list-style: none; }
      a { display: block; border: 1px solid #d0d5dd; border-radius: 8px; padding: 14px; background: #fff; color: #1455d9; font-weight: 700; text-decoration: none; }
    </style>
  </head>
  <body>
    <main>
      <h1>SSH Dev Gateway</h1>
      <p>SSHトンネル1本で、開発中のローカル機能へ入るための入口です。</p>
      <ul>
        <li><a href="${clipperHref}">Chatwork Clipper Bookmarklet</a></li>
        <li><a href="${destinationsHref}">Chatwork Clipper Destinations API</a></li>
      </ul>
    </main>
  </body>
</html>`
  );
}

function serveBookmarkletPage(res) {
  const filePath = path.join(__dirname, "..", "bookmarklet", "index.html");

  fs.readFile(filePath, "utf8", (error, html) => {
    if (error) {
      serveHtml(res, 500, "Bookmarklet page is not available.");
      return;
    }

    serveHtml(res, 200, html);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || `${host}:${port}`}`);
  const strippedPath = stripBasePath(url.pathname);

  if (url.pathname === "/" || url.pathname === basePath || strippedPath === "/") {
    serveGatewayIndex(res);
    return;
  }

  if (!strippedPath) {
    serveJson(res, 404, { success: false, error: { code: "not_found", message: "Not found." } });
    return;
  }

  if (strippedPath === "/chatwork-clipper/bookmarklet") {
    serveBookmarkletPage(res);
    return;
  }

  const clipperRoute = clipperRouteForPath(strippedPath);

  if (clipperRoute) {
    handleNodeRequest(req, res, clipperRoute, env);
    return;
  }

  serveJson(res, 404, { success: false, error: { code: "not_found", message: "Not found." } });
});

server.on("error", (error) => {
  if (error && error.code === "EADDRINUSE") {
    process.stderr.write(
      `SSH Dev Gateway port ${port} is already in use. Set SSH_DEV_GATEWAY_PORT if you intentionally need another gateway.\n`
    );
    process.exit(1);
  }

  throw error;
});

server.listen(port, host, () => {
  process.stdout.write(`SSH Dev Gateway listening on http://${host}:${port}${basePath || "/"}\n`);
  process.stdout.write(`Chatwork Clipper bookmarklet: http://${host}:${port}${basePath}/chatwork-clipper/bookmarklet\n`);
});
