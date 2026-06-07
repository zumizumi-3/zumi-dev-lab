"use strict";

const DEFAULT_SETTINGS = {
  apiBaseUrl: "http://127.0.0.1:8787",
  extensionToken: "",
  defaultDestinationId: "",
};
const PENDING_KEY = "chatworkClipperPendingCapture";

let state = {
  capture: null,
  destinations: [],
  settings: DEFAULT_SETTINGS,
};

document.addEventListener("DOMContentLoaded", () => {
  init().catch((error) => {
    setStatus(error.message || "初期化に失敗しました。", "error");
  });
});

async function init() {
  state.settings = await loadSettings();
  state.capture = await loadPendingCapture();

  if (!state.capture) {
    state.capture = await captureActiveTab();
  }

  state.destinations = await loadDestinations();
  renderCapture();
  renderDestinations();
  bindEvents();
}

function bindEvents() {
  document.getElementById("clipperForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await sendCapture();
  });

  document.getElementById("copyButton").addEventListener("click", async () => {
    await copyFormattedText();
  });
}

async function loadSettings() {
  const settings = await storageGet(chrome.storage.sync, Object.keys(DEFAULT_SETTINGS));

  return {
    ...DEFAULT_SETTINGS,
    ...settings,
  };
}

async function loadPendingCapture() {
  const result = await readPendingStorage();
  const saved = result[PENDING_KEY];

  return saved && saved.capture ? saved.capture : null;
}

async function readPendingStorage() {
  try {
    return await storageGet(chrome.storage.session, [PENDING_KEY]);
  } catch (_error) {
    return await storageGet(chrome.storage.local, [PENDING_KEY]);
  }
}

async function captureActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0];

  if (!tab || !tab.id || !String(tab.url || "").startsWith("https://www.chatwork.com/")) {
    throw new Error("Chatworkの画面で実行してください。");
  }

  try {
    return await requestTabCapture(tab.id, "");
  } catch (_error) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content-script.js"],
    });

    return await requestTabCapture(tab.id, "");
  }
}

function requestTabCapture(tabId, selectionText) {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(
      tabId,
      { type: "CHATWORK_CLIPPER_GET_CONTEXT", selectionText },
      (response) => {
        const error = chrome.runtime.lastError;

        if (error) {
          reject(error);
          return;
        }

        if (!response || !response.ok) {
          reject(new Error("キャプチャできませんでした。"));
          return;
        }

        resolve(response.capture);
      }
    );
  });
}

async function loadDestinations() {
  try {
    const response = await fetch(`${apiBaseUrl()}/api/clipper/destinations`, {
      headers: authHeaders(),
    });
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error((data.error && data.error.message) || "送信先を取得できませんでした。");
    }

    return data.data.destinations;
  } catch (_error) {
    return [
      { type: "action_inbox", id: "default", name: "Action Inbox" },
      { type: "copy", id: "copy", name: "リンク形式でコピー" },
    ];
  }
}

function renderCapture() {
  const capture = state.capture || {};
  const text = capture.selected_text || capture.captured_text || "";

  document.getElementById("sourceRoom").textContent = capture.source_room_name || "Chatwork";
  document.getElementById("sourceText").textContent = text || "選択テキストなし";
  document.getElementById("sourceUrl").textContent = capture.source_url || "";
}

function renderDestinations() {
  const select = document.getElementById("destination");
  const requestedType = state.capture && state.capture.requested_destination_type;
  const defaultKey = state.settings.defaultDestinationId;
  const options = state.destinations.map((destination) => {
    const option = document.createElement("option");
    option.value = destinationKey(destination);
    option.textContent = destination.name;
    option.dataset.type = destination.type;
    option.dataset.id = destination.id;
    return option;
  });

  select.replaceChildren(...options);

  const requested = state.destinations.find((destination) => destination.type === requestedType);
  const configured = state.destinations.find((destination) => destinationKey(destination) === defaultKey);
  const selected = requested || configured || state.destinations[0];

  if (selected) {
    select.value = destinationKey(selected);
  }
}

async function sendCapture() {
  const payload = buildPayload();
  const route = payload.destination.type === "action_inbox" ? "inbox" : "share";

  setStatus("送信中...", "");
  setBusy(true);

  try {
    const response = await fetch(`${apiBaseUrl()}/api/clipper/${route}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...authHeaders(),
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error((data.error && data.error.message) || "送信に失敗しました。");
    }

    if (payload.destination.type === "copy" && data.data.formatted_text) {
      await navigator.clipboard.writeText(data.data.formatted_text);
      setStatus("コピーしました。", "success");
      return;
    }

    setStatus("送信しました。", "success");
  } catch (error) {
    setStatus(error.message || "送信に失敗しました。", "error");
  } finally {
    setBusy(false);
  }
}

async function copyFormattedText() {
  const payload = {
    ...buildPayload(),
    destination: { type: "copy", id: "copy", name: "リンク形式でコピー" },
  };

  try {
    await navigator.clipboard.writeText(buildLocalCopyText(payload));
    setStatus("コピーしました。", "success");
  } catch (_error) {
    setStatus("コピーできませんでした。", "error");
  }
}

function buildPayload() {
  const capture = state.capture || {};
  const destination = selectedDestination();

  return {
    source_platform: "chatwork",
    source_url: capture.source_url,
    source_room_name: capture.source_room_name || "",
    source_room_id: capture.source_room_id || "",
    source_message_id: capture.source_message_id || "",
    selected_text: capture.selected_text || "",
    captured_text: capture.captured_text || "",
    company_name: valueOf("companyName"),
    project_name: valueOf("projectName"),
    user_note: valueOf("userNote"),
    destination,
    created_at: new Date().toISOString(),
  };
}

function selectedDestination() {
  const value = document.getElementById("destination").value;
  const destination = state.destinations.find((candidate) => destinationKey(candidate) === value);

  if (!destination) {
    return { type: "copy", id: "copy", name: "リンク形式でコピー" };
  }

  return {
    type: destination.type,
    id: destination.id,
    name: destination.name,
  };
}

function destinationKey(destination) {
  return `${destination.type}:${destination.id}`;
}

function valueOf(id) {
  return document.getElementById(id).value.trim();
}

function apiBaseUrl() {
  return String(state.settings.apiBaseUrl || DEFAULT_SETTINGS.apiBaseUrl).replace(/\/+$/, "");
}

function authHeaders() {
  const token = String(state.settings.extensionToken || "").trim();

  return token ? { "x-clipper-token": token } : {};
}

function buildLocalCopyText(payload) {
  const title = [payload.company_name, payload.project_name].filter(Boolean).join(" / ");
  const lines = ["[info][title]Chatwork Clipper[/title]"];
  const body = payload.selected_text || payload.captured_text || "";

  if (title) {
    lines.push(title, "");
  }

  if (body) {
    lines.push(body, "");
  }

  lines.push("元メッセージ:", payload.source_url);

  if (payload.user_note) {
    lines.push("", "メモ:", payload.user_note);
  }

  lines.push("[/info]");

  return lines.join("\n");
}

function setStatus(message, tone) {
  const status = document.getElementById("status");
  status.textContent = message;
  status.dataset.tone = tone;
}

function setBusy(isBusy) {
  document.getElementById("sendButton").disabled = isBusy;
  document.getElementById("copyButton").disabled = isBusy;
}

function storageGet(area, keys) {
  return new Promise((resolve, reject) => {
    area.get(keys, (result) => {
      const error = chrome.runtime.lastError;

      if (error) {
        reject(error);
        return;
      }

      resolve(result || {});
    });
  });
}
