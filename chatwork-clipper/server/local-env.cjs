"use strict";

const fs = require("node:fs");
const path = require("node:path");

function loadLocalEnv(cwd = process.cwd()) {
  const candidates = [".env.local", ".env"];

  for (const candidate of candidates) {
    const envPath = path.join(cwd, candidate);

    if (!fs.existsSync(envPath) || typeof process.loadEnvFile !== "function") {
      continue;
    }

    process.loadEnvFile(envPath);
  }
}

module.exports = {
  loadLocalEnv,
};
