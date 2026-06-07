(() => {
  "use strict";

  const MAX_CONTEXT_CHARS = 8000;
  const MESSAGE_SELECTOR = [
    "[data-message-id]",
    "[data-mid]",
    "[id*='message']",
    "[class*='message']",
    "[class*='Message']",
    "li",
    "div[role='listitem']",
  ].join(",");

  function cleanText(value) {
    return String(value || "")
      .replace(/\s+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim();
  }

  function parseUrlIds(url) {
    const match = String(url).match(/rid(\d+)(?:-(\d+))?/);

    return {
      roomId: match ? match[1] : "",
      messageId: match && match[2] ? match[2] : "",
    };
  }

  function findMessageElement(startNode) {
    if (!startNode) {
      return null;
    }

    let current = startNode.nodeType === Node.ELEMENT_NODE ? startNode : startNode.parentElement;
    let depth = 0;

    while (current && depth < 10) {
      if (current.matches && current.matches(MESSAGE_SELECTOR)) {
        const text = cleanText(current.innerText || current.textContent);

        if (text && text.length <= MAX_CONTEXT_CHARS) {
          return current;
        }
      }

      current = current.parentElement;
      depth += 1;
    }

    return null;
  }

  function getSelectedNode(selection) {
    if (!selection || selection.rangeCount === 0) {
      return null;
    }

    return selection.getRangeAt(0).commonAncestorContainer;
  }

  function getRoomName() {
    const candidates = [
      "[data-testid*='room']",
      "[class*='roomTitle']",
      "[class*='RoomTitle']",
      "h1",
    ];

    for (const selector of candidates) {
      const element = document.querySelector(selector);
      const text = cleanText(element && (element.innerText || element.textContent));

      if (text && text.length <= 200) {
        return text;
      }
    }

    return cleanText(document.title.replace(/\s*[-|]\s*Chatwork.*$/i, ""));
  }

  function getMessageIdFromElement(element) {
    if (!element) {
      return "";
    }

    const direct =
      element.getAttribute("data-message-id") ||
      element.getAttribute("data-mid") ||
      element.getAttribute("data-id") ||
      "";

    if (direct) {
      return direct;
    }

    const idMatch = String(element.id || "").match(/(\d{4,})/);

    return idMatch ? idMatch[1] : "";
  }

  function captureContext(fallbackSelectionText) {
    const selection = window.getSelection();
    const selectedText = cleanText(selection && selection.toString()) || cleanText(fallbackSelectionText);
    const selectedNode = getSelectedNode(selection);
    const messageElement = findMessageElement(selectedNode);
    const messageText = cleanText(messageElement && (messageElement.innerText || messageElement.textContent));
    const ids = parseUrlIds(window.location.href);
    const elementMessageId = getMessageIdFromElement(messageElement);

    return {
      source_platform: "chatwork",
      source_url: window.location.href,
      source_room_name: getRoomName(),
      source_room_id: ids.roomId,
      source_message_id: elementMessageId || ids.messageId,
      selected_text: selectedText,
      captured_text: messageText || selectedText,
      captured_at: new Date().toISOString(),
    };
  }

  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (!message || message.type !== "CHATWORK_CLIPPER_GET_CONTEXT") {
      return false;
    }

    sendResponse({
      ok: true,
      capture: captureContext(message.selectionText || ""),
    });

    return true;
  });
})();
