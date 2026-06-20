# Chatwork Clipper Build Instructions

## Purpose

Build a small Chrome extension that lets a user capture a Chatwork Web message, selected text, or current Chatwork URL and send it somewhere useful without leaving the Chatwork screen.

This is separate from Action Inbox. Treat it as an input/capture utility, not a task manager.

## Product Boundary

### Chatwork Clipper Owns

- Right-click actions on Chatwork Web.
- Capturing the current page URL, selected text, and best-effort message context.
- Showing a compact popup for destination, note, company/project hint, and send action.
- Sending the capture payload to a server-side Routing API.
- Copying a formatted source link to clipboard when requested.

### Chatwork Clipper Does Not Own

- AI task extraction.
- Task review, acceptance, rejection, or completion.
- Google Tasks or Calendar sync.
- Long-term task storage.
- Chatwork API tokens in the browser extension.

Action Inbox may be one destination, but Clipper must still work without Action Inbox.

## Recommended Architecture

```text
Chatwork Web
  ↓ right-click / popup
Chrome Extension
  ↓ HTTPS request
Routing API on Vercel
  ├─ post link to another Chatwork room
  ├─ send capture to Action Inbox
  ├─ append row to Google Sheets
  └─ return formatted copy text
```

## Components

### Chrome Extension

Use Manifest V3.

Suggested files:

```text
extension/
  manifest.json
  service-worker.js
  content-script.js
  popup.html
  popup.js
  options.html
  options.js
  styles.css
```

Responsibilities:

- `service-worker.js`
  - Register context menu items.
  - Receive right-click events.
  - Ask the active Chatwork tab/content script for capture context.
  - Send payload to the Routing API.

- `content-script.js`
  - Runs only on Chatwork Web.
  - Reads selected text.
  - Reads current URL.
  - Best-effort extraction of nearby message text and room title.
  - Avoid scraping full chat history.

- `popup.js`
  - Shows current capture preview.
  - Lets the user choose destination.
  - Lets the user add note, company name, and project name.
  - Sends confirmed payload.

- `options.js`
  - Stores Routing API base URL.
  - Stores extension user token or install key.
  - Stores default destination.

### Routing API

Suggested endpoints:

```text
GET  /api/clipper/destinations
POST /api/clipper/share
POST /api/clipper/inbox
```

Responsibilities:

- Keep Chatwork API token server-side only.
- Validate extension authentication.
- Validate payload shape.
- Decide destination behavior.
- Post to Chatwork rooms when requested.
- Forward captures to Action Inbox when requested.
- Log minimal operational metadata.

## Core User Flows

### 1. Send Message Link to Another Chatwork Room

```text
User right-clicks a Chatwork message or selected text
↓
Chooses "Chatwork Clipper: 共有する"
↓
Popup opens with source preview
↓
User selects destination room
↓
Routing API posts formatted source link to that room
```

### 2. Send to Action Inbox

```text
User right-clicks selected text or current Chatwork message
↓
Chooses "Action Inboxに送る"
↓
Extension captures source URL, selected text, room name, note
↓
Routing API creates an Inbox capture record
```

### 3. Manual Clip Without Message Detection

```text
User opens popup on any Chatwork page
↓
Extension uses current URL + selected text only
↓
User adds company/project/note manually
↓
Payload is sent
```

This fallback is important because Chatwork DOM selectors may change.

## Capture Payload Contract

```json
{
  "source_platform": "chatwork",
  "source_url": "https://www.chatwork.com/...",
  "source_room_name": "広告運用 PJ",
  "source_room_id": "123456",
  "source_message_id": "789012",
  "selected_text": "木曜午前までにたたきがあると安心です。",
  "captured_text": "助かります。できれば木曜午前までにたたきがあると安心です。",
  "company_name": "北辰フーズ株式会社",
  "project_name": "広告運用 PJ",
  "user_note": "週次レポートのたたき台にする",
  "destination": {
    "type": "chatwork_room",
    "id": "998877",
    "name": "タスク共有"
  },
  "created_at": "2026-05-19T21:30:00+09:00"
}
```

Only `source_platform`, `source_url`, `destination`, and `created_at` are required. Everything else should be optional.

## Context Menu Items

Recommended initial items:

```text
Chatwork Clipper
- Action Inboxに送る
- 別ルームに共有
- リンク形式でコピー
```

The extension should appear only on Chatwork URLs.

## Posting Format for Chatwork Room Share

```text
[info][title]Chatwork Clipper[/title]
北辰フーズ株式会社 / 広告運用 PJ

木曜午前までにたたきがあると安心です。

元メッセージ:
https://www.chatwork.com/...

メモ:
週次レポートのたたき台にする
[/info]
```

Keep formatting simple. Avoid assuming the destination room understands Action Inbox concepts.

## Security Requirements

- Do not store Chatwork API tokens in the extension.
- Do not store OpenAI/API provider keys in the extension.
- Do not send full page HTML.
- Do not scrape full room history.
- Limit host permissions to Chatwork and the Routing API domain.
- Require explicit user action before sending.
- Validate every Routing API request server-side.
- Mask source text in server logs unless debugging is explicitly enabled.
- No analytics, tracking pixels, or third-party scripts.

## Permissions

Start with the smallest useful permission set:

```json
{
  "permissions": ["contextMenus", "activeTab", "storage", "scripting"],
  "host_permissions": [
    "https://www.chatwork.com/*",
    "https://<routing-api-domain>/*"
  ]
}
```

Do not request broad `https://*/*` host access for the MVP.

## Implementation Phases

### Phase 1: Local Extension Skeleton

- Manifest V3 extension loads unpacked in Chrome.
- Context menu appears on Chatwork.
- Popup opens.
- Current URL and selected text are captured.
- Payload is printed to extension console.

Acceptance:

- User can right-click selected text in Chatwork and see capture preview.
- No network request is required yet.

### Phase 2: Routing API

- Add `/api/clipper/share`.
- Validate payload with a schema.
- Store or echo the capture payload.
- Return a normalized response.

Acceptance:

- Extension can send payload to Vercel API.
- API returns success/failure in a stable shape.

### Phase 3: Chatwork Room Share

- Add destination list.
- Server-side Chatwork API token is used to post to a configured room.
- Extension never sees the Chatwork token.

Acceptance:

- Right-click selected text in Chatwork.
- Choose destination room.
- Destination Chatwork room receives formatted source link.

### Phase 4: Action Inbox Destination

- Add destination type `action_inbox`.
- Routing API forwards payload to Action Inbox ingestion endpoint.
- Action Inbox stores it as `sourceType = manual` or `sourceType = chatwork_clip`.

Acceptance:

- Captured message appears in Action Inbox with source URL, company, project, registration date, and note.

### Phase 5: Hardening

- Handle missing selection.
- Handle Chatwork DOM selector failure.
- Add options page.
- Add retry/error state.
- Add basic tests for payload normalization.

## Testing Checklist

- Context menu appears only on Chatwork pages.
- Selected text is captured correctly.
- Current Chatwork URL is captured.
- Popup works with no selected text.
- Destination room share succeeds.
- Action Inbox destination succeeds.
- Invalid API token fails cleanly.
- Network failure shows a useful message.
- No secrets appear in extension source.
- No payload is sent without explicit user action.

## References

- Chrome `contextMenus` API: https://developer.chrome.com/docs/extensions/reference/api/contextMenus
- Chrome content scripts: https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts
- Google Workspace Add-ons overview: https://developers.google.com/workspace/add-ons/overview

## Implemented MVP

The actual MVP lives in:

```text
chatwork-clipper/extension/
chatwork-clipper/server/
api/clipper/
tests/chatwork-clipper/
```

Run the local Routing API:

```bash
npm run clipper:api
```

Run the API contract tests:

```bash
npm test
```

Load the Chrome extension from `chatwork-clipper/extension` using Chrome's unpacked extension flow.
