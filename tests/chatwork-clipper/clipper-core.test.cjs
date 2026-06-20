const assert = require("node:assert/strict");
const test = require("node:test");

const {
  buildDestinationsResponse,
  buildShareMessage,
  handleClipperRequest,
  normalizeCapturePayload,
} = require("../../chatwork-clipper/server/clipper-core.cjs");

const validPayload = {
  source_platform: "chatwork",
  source_url: "https://www.chatwork.com/#!rid123-456",
  selected_text: "木曜午前までにたたきがあると安心です。",
  captured_text: "助かります。できれば木曜午前までにたたきがあると安心です。",
  company_name: "北辰フーズ株式会社",
  project_name: "広告運用 PJ",
  user_note: "週次レポートのたたき台にする",
  destination: {
    type: "chatwork_room",
    id: "998877",
    name: "タスク共有",
  },
  created_at: "2026-05-19T21:30:00+09:00",
};

test("normalizes optional capture fields and preserves the required contract", () => {
  const normalized = normalizeCapturePayload(validPayload);

  assert.equal(normalized.source_platform, "chatwork");
  assert.equal(normalized.source_url, validPayload.source_url);
  assert.equal(normalized.destination.type, "chatwork_room");
  assert.equal(normalized.selected_text, validPayload.selected_text);
});

test("rejects invalid payloads without leaking internal details", () => {
  assert.throws(
    () =>
      normalizeCapturePayload({
        source_platform: "chatwork",
        destination: { type: "copy" },
        created_at: "2026-05-19T21:30:00+09:00",
      }),
    /source_url is required/
  );
});

test("builds a Chatwork info message from the capture payload", () => {
  const message = buildShareMessage(validPayload);

  assert.match(message, /^\[info\]\[title\]Chatwork Clipper\[\/title\]/);
  assert.match(message, /北辰フーズ株式会社 \/ 広告運用 PJ/);
  assert.match(message, /木曜午前までにたたきがあると安心です。/);
  assert.match(message, /元メッセージ:/);
  assert.match(message, /週次レポートのたたき台にする/);
});

test("returns configured destinations without exposing secrets", () => {
  const response = buildDestinationsResponse({
    CHATWORK_CLIPPER_DESTINATIONS: JSON.stringify([
      { type: "chatwork_room", id: "998877", name: "タスク共有" },
      { type: "action_inbox", id: "default", name: "Action Inbox" },
    ]),
    CHATWORK_API_TOKEN: "secret-token",
  });

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.deepEqual(response.body.data.destinations, [
    { type: "chatwork_room", id: "998877", name: "タスク共有" },
    { type: "action_inbox", id: "default", name: "Action Inbox" },
  ]);
  assert.doesNotMatch(JSON.stringify(response.body), /secret-token/);
});

test("requires the extension token when configured", async () => {
  const response = await handleClipperRequest({
    method: "POST",
    headers: { "content-type": "application/json" },
    body: validPayload,
    route: "share",
    env: {
      CHATWORK_CLIPPER_EXTENSION_TOKEN: "expected-token",
      CHATWORK_CLIPPER_DRY_RUN: "true",
    },
  });

  assert.equal(response.status, 401);
  assert.equal(response.body.success, false);
});

test("accepts a dry-run share request with a valid extension token", async () => {
  const response = await handleClipperRequest({
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-clipper-token": "expected-token",
    },
    body: validPayload,
    route: "share",
    env: {
      CHATWORK_CLIPPER_EXTENSION_TOKEN: "expected-token",
      CHATWORK_CLIPPER_DRY_RUN: "true",
    },
  });

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.equal(response.body.data.mode, "dry_run");
  assert.match(response.body.data.formatted_text, /Chatwork Clipper/);
});
