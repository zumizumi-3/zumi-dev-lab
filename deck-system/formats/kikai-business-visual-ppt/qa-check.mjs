import fs from "node:fs";
import path from "node:path";

const root = path.dirname(new URL(import.meta.url).pathname);
const requiredFiles = [
  "format.md",
  "tokens.css",
  "brand-visual-style.md",
  "image-prompt-template.md",
  "visual-slots.json",
  "index.html"
];

const fail = (message) => {
  console.error(`[kikai-business-visual-ppt QA] ${message}`);
  process.exitCode = 1;
};

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    fail(`Missing required file: ${file}`);
  }
}

const manifestPath = path.join(root, "visual-slots.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const parentManifest = path.resolve(root, manifest.parent.slotManifest);
if (!fs.existsSync(parentManifest)) {
  fail(`Missing parent slot manifest: ${manifest.parent.slotManifest}`);
}

const tokens = fs.readFileSync(path.join(root, "tokens.css"), "utf8");
const tokenChecks = [
  ["--kbv-primary: #fc754a", "primary orange token must be #FC754A"],
  ["--kbv-primary-soft: #fef8f6", "soft orange token must be #FEF8F6"],
  ["--kbv-slide-bg: #ffffff", "slide background token must be white"],
  ["--kbv-card-border: 3pt", "card border token must be 3pt"],
  [".kbv-media-slot", "media slot primitive must exist"],
  ["box-shadow: none", "media/inner object shadow reset must exist"]
];
for (const [needle, message] of tokenChecks) {
  if (!tokens.toLowerCase().includes(needle)) {
    fail(message);
  }
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const slideMatches = [...html.matchAll(/<section\b[^>]*class="[^"]*\bslide\b[^"]*"[^>]*>/g)];
if (slideMatches.length < 6) {
  fail(`Expected at least 6 demo slides, found ${slideMatches.length}`);
}

for (const match of slideMatches) {
  const tag = match[0];
  const idMatch = tag.match(/\bid="([^"]+)"/);
  const id = idMatch ? idMatch[1] : "(missing id)";
  for (const attr of manifest.requiredHtmlAttributes) {
    if (!tag.includes(`${attr}=`)) {
      fail(`Slide ${id} is missing ${attr}`);
    }
  }
}

if (html.includes("border-left: 8px") || html.includes("border-left: 10px")) {
  fail("Demo HTML should not add left orange lines to visual objects");
}

if (!html.includes("../kikai-business-ppt/assets/3.png")) {
  fail("Demo HTML should use the inherited Kikai compact logo asset");
}

if (!process.exitCode) {
  console.log(`[kikai-business-visual-ppt QA] ok: ${slideMatches.length} demo slides checked`);
}
