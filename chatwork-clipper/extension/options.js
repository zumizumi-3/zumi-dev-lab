"use strict";

const DEFAULT_SETTINGS = {
  apiBaseUrl: "http://127.0.0.1:8787",
  extensionToken: "",
  defaultDestinationId: "",
};

document.addEventListener("DOMContentLoaded", () => {
  init().catch((error) => {
    setStatus(error.message || "設定を読み込めませんでした。", "error");
  });
});

async function init() {
  const settings = await storageGet(Object.keys(DEFAULT_SETTINGS));

  document.getElementById("apiBaseUrl").value = settings.apiBaseUrl || DEFAULT_SETTINGS.apiBaseUrl;
  document.getElementById("extensionToken").value = settings.extensionToken || "";
  document.getElementById("defaultDestinationId").value = settings.defaultDestinationId || "";

  document.getElementById("optionsForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveSettings();
  });

  document.getElementById("permissionButton").addEventListener("click", async () => {
    await requestApiPermission();
  });
}

async function saveSettings() {
  const settings = readForm();

  await chrome.storage.sync.set(settings);
  setStatus("保存しました。", "success");
}

async function requestApiPermission() {
  const origin = originPattern(document.getElementById("apiBaseUrl").value);

  if (!origin) {
    setStatus("Routing API URLを確認してください。", "error");
    return;
  }

  if (origin === "http://127.0.0.1:8787/*" || origin === "http://localhost:8787/*") {
    setStatus("localhost権限は既に許可されています。", "success");
    return;
  }

  const granted = await chrome.permissions.request({ origins: [origin] });

  setStatus(granted ? "API権限を許可しました。" : "API権限は許可されませんでした。", granted ? "success" : "error");
}

function readForm() {
  return {
    apiBaseUrl: document.getElementById("apiBaseUrl").value.trim().replace(/\/+$/, ""),
    extensionToken: document.getElementById("extensionToken").value.trim(),
    defaultDestinationId: document.getElementById("defaultDestinationId").value.trim(),
  };
}

function originPattern(value) {
  try {
    const url = new URL(value);

    return `${url.origin}/*`;
  } catch (_error) {
    return "";
  }
}

function storageGet(keys) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(keys, (result) => {
      const error = chrome.runtime.lastError;

      if (error) {
        reject(error);
        return;
      }

      resolve(result || {});
    });
  });
}

function setStatus(message, tone) {
  const status = document.getElementById("status");
  status.textContent = message;
  status.dataset.tone = tone;
}
