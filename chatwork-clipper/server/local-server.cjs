"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { handleNodeRequest } = require("./clipper-core.cjs");
const { loadLocalEnv } = require("./local-env.cjs");

loadLocalEnv();

const port = Number(process.env.CHATWORK_CLIPPER_PORT || process.env.PORT || 8787);
const host = process.env.CHATWORK_CLIPPER_HOST || process.env.HOST || "127.0.0.1";
const env = {
  ...process.env,
  CHATWORK_CLIPPER_DRY_RUN: process.env.CHATWORK_CLIPPER_DRY_RUN || "true",
};

function routeForPath(pathname) {
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

function serveBookmarkletPage(res) {
  const filePath = path.join(__dirname, "..", "bookmarklet", "index.html");

  fs.readFile(filePath, "utf8", (error, html) => {
    if (error) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Bookmarklet page is not available.");
      return;
    }

    res.statusCode = 200;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end(html);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || `${host}:${port}`}`);

  if (url.pathname === "/" || url.pathname === "/bookmarklet") {
    serveBookmarkletPage(res);
    return;
  }

  const route = routeForPath(url.pathname);

  if (!route) {
    res.statusCode = 404;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ success: false, error: { code: "not_found", message: "Not found." } }));
    return;
  }

  handleNodeRequest(req, res, route, env);
});

server.on("error", (error) => {
  if (error && error.code === "EADDRINUSE") {
    process.stderr.write(
      `Chatwork Clipper API port ${port} is already in use. Set CHATWORK_CLIPPER_PORT in .env.local to another value.\n`
    );
    process.exit(1);
  }

  throw error;
});

server.listen(port, host, () => {
  process.stdout.write(`Chatwork Clipper API listening on http://${host}:${port}\n`);
  process.stdout.write("Dry-run mode is enabled by default for local development.\n");
});
