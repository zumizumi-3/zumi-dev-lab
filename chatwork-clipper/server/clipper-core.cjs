"use strict";

const crypto = require("node:crypto");

const MAX_BODY_BYTES = 64 * 1024;
const CHATWORK_API_BASE = "https://api.chatwork.com/v2";
const DEFAULT_DESTINATIONS = [
  { type: "action_inbox", id: "default", name: "Action Inbox" },
  { type: "copy", id: "copy", name: "リンク形式でコピー" },
];
const DESTINATION_TYPES = new Set(["chatwork_room", "action_inbox", "copy"]);

class ClipperError extends Error {
  constructor(status, code, message) {
    super(message);
    this.name = "ClipperError";
    this.status = status;
    this.code = code;
  }
}

function ok(status, data) {
  return {
    status,
    body: {
      success: true,
      data,
    },
  };
}

function fail(status, code, message) {
  return {
    status,
    body: {
      success: false,
      error: {
        code,
        message,
      },
    },
  };
}

function normalizeError(error) {
  if (error instanceof ClipperError) {
    return fail(error.status, error.code, error.message);
  }

  return fail(500, "internal_error", "Request failed.");
}

function getHeader(headers, name) {
  if (!headers) {
    return "";
  }

  if (typeof headers.get === "function") {
    return headers.get(name) || "";
  }

  const lowerName = name.toLowerCase();
  const key = Object.keys(headers).find((candidate) => candidate.toLowerCase() === lowerName);
  const value = key ? headers[key] : "";

  return Array.isArray(value) ? value[0] || "" : value || "";
}

function timingSafeEqual(a, b) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  if (left.length !== right.length) {
    return false;
  }

  return crypto.timingSafeEqual(left, right);
}

function extractToken(headers) {
  const directToken = getHeader(headers, "x-clipper-token").trim();

  if (directToken) {
    return directToken;
  }

  const authorization = getHeader(headers, "authorization").trim();
  const bearerMatch = authorization.match(/^Bearer\s+(.+)$/i);

  return bearerMatch ? bearerMatch[1].trim() : "";
}

function assertAuthorized(headers, env) {
  const expectedToken = (env.CHATWORK_CLIPPER_EXTENSION_TOKEN || "").trim();

  if (!expectedToken) {
    return;
  }

  const providedToken = extractToken(headers);

  if (!providedToken || !timingSafeEqual(providedToken, expectedToken)) {
    throw new ClipperError(401, "unauthorized", "Invalid extension token.");
  }
}

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function requiredString(input, key, maxLength) {
  const value = input[key];

  if (typeof value !== "string" || !value.trim()) {
    throw new ClipperError(400, "invalid_payload", `${key} is required.`);
  }

  const normalized = value.trim();

  if (normalized.length > maxLength) {
    throw new ClipperError(400, "invalid_payload", `${key} must be ${maxLength} characters or fewer.`);
  }

  return normalized;
}

function optionalString(input, key, maxLength) {
  const value = input[key];

  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value !== "string") {
    throw new ClipperError(400, "invalid_payload", `${key} must be a string.`);
  }

  const normalized = value.trim();

  if (!normalized) {
    return undefined;
  }

  if (normalized.length > maxLength) {
    throw new ClipperError(400, "invalid_payload", `${key} must be ${maxLength} characters or fewer.`);
  }

  return normalized;
}

function assertChatworkSourceUrl(value) {
  let parsed;

  try {
    parsed = new URL(value);
  } catch (_error) {
    throw new ClipperError(400, "invalid_payload", "source_url must be a valid URL.");
  }

  const isChatworkHost =
    parsed.hostname === "chatwork.com" ||
    parsed.hostname === "www.chatwork.com" ||
    parsed.hostname.endsWith(".chatwork.com");

  if (parsed.protocol !== "https:" || !isChatworkHost) {
    throw new ClipperError(400, "invalid_payload", "source_url must be a Chatwork HTTPS URL.");
  }
}

function normalizeDestination(destination) {
  if (!isObject(destination)) {
    throw new ClipperError(400, "invalid_payload", "destination is required.");
  }

  const type = requiredString(destination, "type", 80);

  if (!DESTINATION_TYPES.has(type)) {
    throw new ClipperError(400, "invalid_payload", "destination.type is not supported.");
  }

  const id =
    type === "chatwork_room"
      ? requiredString(destination, "id", 120)
      : optionalString(destination, "id", 120) || type;
  const name = optionalString(destination, "name", 200) || id;

  return { type, id, name };
}

function normalizeCapturePayload(input) {
  if (!isObject(input)) {
    throw new ClipperError(400, "invalid_payload", "JSON object payload is required.");
  }

  const sourcePlatform = requiredString(input, "source_platform", 40);

  if (sourcePlatform !== "chatwork") {
    throw new ClipperError(400, "invalid_payload", "source_platform must be chatwork.");
  }

  const sourceUrl = requiredString(input, "source_url", 2000);
  assertChatworkSourceUrl(sourceUrl);

  const createdAt = requiredString(input, "created_at", 80);

  if (Number.isNaN(Date.parse(createdAt))) {
    throw new ClipperError(400, "invalid_payload", "created_at must be an ISO-compatible date.");
  }

  return {
    source_platform: sourcePlatform,
    source_url: sourceUrl,
    source_room_name: optionalString(input, "source_room_name", 200),
    source_room_id: optionalString(input, "source_room_id", 120),
    source_message_id: optionalString(input, "source_message_id", 120),
    selected_text: optionalString(input, "selected_text", 4000),
    captured_text: optionalString(input, "captured_text", 8000),
    company_name: optionalString(input, "company_name", 200),
    project_name: optionalString(input, "project_name", 200),
    user_note: optionalString(input, "user_note", 2000),
    destination: normalizeDestination(input.destination),
    created_at: createdAt,
  };
}

function sanitizeChatworkText(value) {
  return String(value || "")
    .replace(/\[(\/?)(info|title)\]/gi, "($1$2)")
    .replace(/\r\n/g, "\n")
    .trim();
}

function buildShareMessage(input) {
  const payload = normalizeCapturePayload(input);
  const title = [payload.company_name, payload.project_name].filter(Boolean).join(" / ");
  const bodyText = payload.selected_text || payload.captured_text || "";
  const lines = ["[info][title]Chatwork Clipper[/title]"];

  if (title) {
    lines.push(sanitizeChatworkText(title), "");
  }

  if (bodyText) {
    lines.push(sanitizeChatworkText(bodyText), "");
  }

  lines.push("元メッセージ:", payload.source_url);

  if (payload.user_note) {
    lines.push("", "メモ:", sanitizeChatworkText(payload.user_note));
  }

  lines.push("[/info]");

  return lines.join("\n");
}

function parseDestinations(env) {
  const raw = env.CHATWORK_CLIPPER_DESTINATIONS;

  if (!raw) {
    return DEFAULT_DESTINATIONS;
  }

  let parsed;

  try {
    parsed = JSON.parse(raw);
  } catch (_error) {
    throw new ClipperError(500, "invalid_configuration", "Destination configuration is invalid.");
  }

  if (!Array.isArray(parsed)) {
    throw new ClipperError(500, "invalid_configuration", "Destination configuration must be an array.");
  }

  return parsed.map(normalizeDestination);
}

function buildDestinationsResponse(env = process.env) {
  try {
    return ok(200, { destinations: parseDestinations(env) });
  } catch (error) {
    return normalizeError(error);
  }
}

function shouldDryRun(env) {
  const value = String(env.CHATWORK_CLIPPER_DRY_RUN || "").toLowerCase();

  return value === "1" || value === "true" || value === "yes";
}

async function postChatworkRoom({ payload, env, fetchImpl }) {
  const token = (env.CHATWORK_API_TOKEN || "").trim();

  if (!token) {
    throw new ClipperError(500, "missing_configuration", "CHATWORK_API_TOKEN is not configured.");
  }

  const fetcher = fetchImpl || globalThis.fetch;

  if (typeof fetcher !== "function") {
    throw new ClipperError(500, "missing_runtime", "fetch is not available in this runtime.");
  }

  const body = new URLSearchParams({ body: buildShareMessage(payload) });
  const response = await fetcher(`${CHATWORK_API_BASE}/rooms/${encodeURIComponent(payload.destination.id)}/messages`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-chatworktoken": token,
    },
    body,
  });

  if (!response.ok) {
    throw new ClipperError(502, "chatwork_post_failed", "Chatwork room share failed.");
  }

  const responseBody = await safeReadJson(response);

  return ok(200, {
    mode: "chatwork_room",
    destination: payload.destination,
    chatwork_response: responseBody || null,
  });
}

async function forwardActionInbox({ payload, env, fetchImpl }) {
  const inboxUrl = (env.ACTION_INBOX_INGEST_URL || "").trim();

  if (!inboxUrl) {
    throw new ClipperError(500, "missing_configuration", "ACTION_INBOX_INGEST_URL is not configured.");
  }

  const fetcher = fetchImpl || globalThis.fetch;

  if (typeof fetcher !== "function") {
    throw new ClipperError(500, "missing_runtime", "fetch is not available in this runtime.");
  }

  let parsed;

  try {
    parsed = new URL(inboxUrl);
  } catch (_error) {
    throw new ClipperError(500, "invalid_configuration", "ACTION_INBOX_INGEST_URL is invalid.");
  }

  const isLocalhost = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";

  if (parsed.protocol !== "https:" && !isLocalhost) {
    throw new ClipperError(500, "invalid_configuration", "ACTION_INBOX_INGEST_URL must use HTTPS.");
  }

  const headers = { "content-type": "application/json" };
  const inboxToken = (env.ACTION_INBOX_API_TOKEN || "").trim();

  if (inboxToken) {
    headers.authorization = `Bearer ${inboxToken}`;
  }

  const response = await fetcher(inboxUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new ClipperError(502, "action_inbox_forward_failed", "Action Inbox forward failed.");
  }

  const responseBody = await safeReadJson(response);

  return ok(200, {
    mode: "action_inbox",
    destination: payload.destination,
    inbox_response: responseBody || null,
  });
}

async function safeReadJson(response) {
  try {
    return await response.json();
  } catch (_error) {
    return null;
  }
}

async function handleClipperRequest({ method, headers, body, route, env = process.env, fetchImpl }) {
  try {
    if (route === "destinations") {
      if (method !== "GET") {
        throw new ClipperError(405, "method_not_allowed", "Use GET for destinations.");
      }

      return buildDestinationsResponse(env);
    }

    if (method !== "POST") {
      throw new ClipperError(405, "method_not_allowed", "Use POST for clipper requests.");
    }

    const contentType = getHeader(headers, "content-type");

    if (contentType && !contentType.toLowerCase().includes("application/json")) {
      throw new ClipperError(415, "unsupported_media_type", "Use application/json.");
    }

    assertAuthorized(headers, env);

    const payload = normalizeCapturePayload(body);

    if (shouldDryRun(env)) {
      return ok(200, {
        mode: "dry_run",
        destination: payload.destination,
        formatted_text: buildShareMessage(payload),
      });
    }

    if (route === "inbox" || payload.destination.type === "action_inbox") {
      return await forwardActionInbox({ payload, env, fetchImpl });
    }

    if (payload.destination.type === "copy") {
      return ok(200, {
        mode: "copy",
        destination: payload.destination,
        formatted_text: buildShareMessage(payload),
      });
    }

    if (payload.destination.type === "chatwork_room") {
      return await postChatworkRoom({ payload, env, fetchImpl });
    }

    throw new ClipperError(400, "invalid_payload", "Unsupported route or destination.");
  } catch (error) {
    return normalizeError(error);
  }
}

function corsHeaders(env) {
  return {
    "access-control-allow-origin": env.CHATWORK_CLIPPER_ALLOWED_ORIGIN || "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type,x-clipper-token,authorization",
    "access-control-max-age": "86400",
    "content-type": "application/json; charset=utf-8",
  };
}

function writeNodeResponse(res, result, env) {
  const headers = corsHeaders(env);

  Object.entries(headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  res.statusCode = result.status;
  res.end(JSON.stringify(result.body));
}

function readJsonBody(req) {
  if (req.body && typeof req.body === "object") {
    return Promise.resolve(req.body);
  }

  if (typeof req.body === "string") {
    return Promise.resolve(JSON.parse(req.body));
  }

  return new Promise((resolve, reject) => {
    let raw = "";

    req.on("data", (chunk) => {
      raw += chunk;

      if (Buffer.byteLength(raw) > MAX_BODY_BYTES) {
        reject(new ClipperError(413, "payload_too_large", "Request body is too large."));
        req.destroy();
      }
    });

    req.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (_error) {
        reject(new ClipperError(400, "invalid_json", "Request body must be valid JSON."));
      }
    });

    req.on("error", reject);
  });
}

async function handleNodeRequest(req, res, route, env = process.env) {
  if (req.method === "OPTIONS") {
    writeNodeResponse(res, ok(204, null), env);
    return;
  }

  try {
    const body = req.method === "GET" ? undefined : await readJsonBody(req);
    const result = await handleClipperRequest({
      method: req.method,
      headers: req.headers,
      body,
      route,
      env,
    });

    writeNodeResponse(res, result, env);
  } catch (error) {
    writeNodeResponse(res, normalizeError(error), env);
  }
}

module.exports = {
  buildDestinationsResponse,
  buildShareMessage,
  handleClipperRequest,
  handleNodeRequest,
  normalizeCapturePayload,
};
