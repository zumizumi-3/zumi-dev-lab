#!/usr/bin/env node
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { access, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const tmpDir = path.join(rootDir, "_preview_work");

const args = new Map();
for (let i = 2; i < process.argv.length; i += 1) {
  if (process.argv[i].startsWith("--")) {
    args.set(process.argv[i].slice(2), process.argv[i + 1]);
    i += 1;
  }
}

const indexPath = path.join(rootDir, args.get("file") ?? "index.html");
const outputDir = path.resolve(rootDir, args.get("out") ?? "preview-output");
const slidesDir = path.join(outputDir, "slides");
const slideIds = parseSlideArg(args.get("slides") ?? "D1-00..D1-70");

const html = await readFile(indexPath, "utf8");
const rawHead = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
if (!rawHead) {
  throw new Error("Could not find <head> in index.html");
}
const head = rawHead.replaceAll('href="./', 'href="../').replaceAll('src="./', 'src="../');

await rm(tmpDir, { recursive: true, force: true });
await mkdir(tmpDir, { recursive: true });
await mkdir(slidesDir, { recursive: true });

for (const slideId of slideIds) {
  const section = extractSlide(html, slideId);
  const singleHtml = `<!doctype html>
<html lang="ja">
  <head>
${head}
    <style>
      body { margin: 0; }
      .deck { padding: 36px 0 0; }
      .slide { width: min(100vw - 48px, 1280px); }
    </style>
  </head>
  <body>
    <main class="deck">
${section}
    </main>
  </body>
</html>
`;
  await writeFile(path.join(tmpDir, `${slideId}.html`), singleHtml);
}

const chrome = await findChrome();
const server = await startStaticServer(rootDir);
try {
  const baseUrl = `http://127.0.0.1:${server.port}`;
  for (const slideId of slideIds) {
    const url = `${baseUrl}/_preview_work/${slideId}.html`;
    const screenshot = path.join(slidesDir, `${slideId}.png`);
    await runChrome(chrome, [
      "--headless",
      "--no-sandbox",
      "--disable-gpu",
      "--hide-scrollbars",
      "--virtual-time-budget=5000",
      "--window-size=1368,900",
      `--screenshot=${screenshot}`,
      url,
    ]);
    console.log(`rendered ${path.relative(rootDir, screenshot)}`);
  }
} finally {
  await new Promise((resolve) => server.instance.close(resolve));
  await rm(tmpDir, { recursive: true, force: true });
}

await writeFile(path.join(outputDir, "index.html"), buildContactSheet(slideIds));
console.log(`\nOpen ${path.join(outputDir, "index.html")}`);

function parseSlideArg(value) {
  if (value.includes("..")) {
    const [start, end] = value.split("..");
    const prefix = start.slice(0, 3);
    const first = Number(start.slice(3));
    const last = Number(end.slice(3));
    return Array.from({ length: last - first + 1 }, (_, i) => `${prefix}${String(first + i).padStart(2, "0")}`);
  }
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function extractSlide(source, slideId) {
  const pattern = new RegExp(`      <section id="${slideId}"[\\s\\S]*?\\n      </section>`);
  const match = source.match(pattern);
  if (!match) {
    throw new Error(`Could not find slide ${slideId}`);
  }
  return match[0];
}

async function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "/home/zumi-dev/.cache/ms-playwright/chromium-1194/chrome-linux/chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      await access(candidate, constants.X_OK);
      return candidate;
    } catch {
      // Try the next candidate.
    }
  }

  throw new Error("Chrome/Chromium was not found. Set CHROME_PATH to a Chromium executable.");
}

async function startStaticServer(root) {
  const instance = createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? "/", "http://127.0.0.1");
      const decodedPath = decodeURIComponent(url.pathname);
      const filePath = path.resolve(root, `.${decodedPath}`);
      if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }
      const body = await readFile(filePath);
      res.writeHead(200, { "content-type": contentType(filePath) });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });

  await new Promise((resolve) => instance.listen(0, "127.0.0.1", resolve));
  return { instance, port: instance.address().port };
}

function contentType(filePath) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".woff2")) return "font/woff2";
  return "application/octet-stream";
}

function runChrome(command, commandArgs) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, commandArgs, {
      env: process.env,
      stdio: ["ignore", "inherit", "inherit"],
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Chrome exited with code ${code}`));
    });
  });
}

function buildContactSheet(ids) {
  const title = ids.every((id) => id.startsWith("D1-"))
    ? "Day 1 slide preview"
    : ids.every((id) => id.startsWith("D2-"))
      ? "Day 2 slide preview"
      : "本質のAI講座 slide preview";
  const cards = ids
    .map((id) => `<article><h2>${id}</h2><img src="./slides/${id}.png" alt="${id}"></article>`)
    .join("\n");
  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        padding: 24px;
        background: #dce5ee;
        color: #111827;
        font-family: system-ui, sans-serif;
      }
      header {
        margin: 0 auto 24px;
        max-width: 1480px;
      }
      h1 {
        margin: 0 0 8px;
        font-size: 28px;
      }
      p {
        margin: 0;
        color: #526174;
        font-weight: 700;
      }
      main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
        gap: 22px;
        max-width: 1480px;
        margin: 0 auto;
      }
      article {
        overflow: hidden;
        border: 1px solid #c9d7e4;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 12px 34px rgba(15, 23, 42, 0.12);
      }
      h2 {
        margin: 0;
        padding: 10px 14px;
        background: #0f172a;
        color: #fff;
        font-size: 16px;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>${title}</h1>
      <p>Generated static screenshots. No dev server or SSH tunnel is required after generation.</p>
    </header>
    <main>
${cards}
    </main>
  </body>
</html>
`;
}
