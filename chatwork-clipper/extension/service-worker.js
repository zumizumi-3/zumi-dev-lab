"use strict";

const MENU = {
  root: "chatwork-clipper-root",
  inbox: "chatwork-clipper-inbox",
  share: "chatwork-clipper-share",
  copy: "chatwork-clipper-copy",
};
const PENDING_KEY = "chatworkClipperPendingCapture";
const CHATWORK_PAGE_PATTERNS = ["https://www.chatwork.com/*"];

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: MENU.root,
      title: "Chatwork Clipper",
      contexts: ["page", "selection", "link"],
      documentUrlPatterns: CHATWORK_PAGE_PATTERNS,
    });

    chrome.contextMenus.create({
      id: MENU.inbox,
      parentId: MENU.root,
      title: "Action Inboxに送る",
      contexts: ["page", "selection", "link"],
      documentUrlPatterns: CHATWORK_PAGE_PATTERNS,
    });

    chrome.contextMenus.create({
      id: MENU.share,
      parentId: MENU.root,
      title: "別ルームに共有",
      contexts: ["page", "selection", "link"],
      documentUrlPatterns: CHATWORK_PAGE_PATTERNS,
    });

    chrome.contextMenus.create({
      id: MENU.copy,
      parentId: MENU.root,
      title: "リンク形式でコピー",
      contexts: ["page", "selection", "link"],
      documentUrlPatterns: CHATWORK_PAGE_PATTERNS,
    });
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  handleMenuClick(info, tab).catch(() => {
    chrome.action.setBadgeText({ text: "!" });
  });
});

async function handleMenuClick(info, tab) {
  if (!tab || !tab.id) {
    return;
  }

  const capture = await captureFromTab(tab, info.selectionText || "");
  const destinationType = destinationTypeForMenu(info.menuItemId);

  await setPendingCapture({
    ...capture,
    requested_destination_type: destinationType,
  });

  chrome.action.setBadgeText({ text: "" });

  if (chrome.action.openPopup) {
    await chrome.action.openPopup({ windowId: tab.windowId });
  }
}

function destinationTypeForMenu(menuId) {
  if (menuId === MENU.inbox) {
    return "action_inbox";
  }

  if (menuId === MENU.copy) {
    return "copy";
  }

  return "chatwork_room";
}

async function captureFromTab(tab, selectionText) {
  try {
    return await requestCapture(tab.id, selectionText);
  } catch (_error) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content-script.js"],
    });

    return await requestCapture(tab.id, selectionText);
  }
}

function requestCapture(tabId, selectionText) {
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
          reject(new Error("Capture failed."));
          return;
        }

        resolve(response.capture);
      }
    );
  });
}

async function setPendingCapture(capture) {
  const value = {
    capture,
    saved_at: new Date().toISOString(),
  };

  try {
    await chrome.storage.session.set({ [PENDING_KEY]: value });
  } catch (_error) {
    await chrome.storage.local.set({ [PENDING_KEY]: value });
  }
}
