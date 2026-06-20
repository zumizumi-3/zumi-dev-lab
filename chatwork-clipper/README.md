# Chatwork Clipper

Chatwork Webの選択テキスト、近傍メッセージ、現在URLをRouting APIへ送る小さなキャプチャシステムです。Chrome拡張版と、拡張なしで使うブックマークレット版があります。

## 構成

```text
chatwork-clipper/
  bookmarklet/     Chrome拡張なしで使う簡易ブックマークレット
  extension/       Chrome拡張 Manifest V3
  server/          Routing APIの共通処理とローカルサーバー
api/clipper/       Vercel Serverless Functions用の薄いアダプタ
tests/             Routing API契約テスト
```

## いちばん手軽に試す

Chrome拡張の読み込みを避けたい場合は、ブックマークレットを使います。

SSHローカル開発の詳しい手順は [SSH_LOCAL_DEV.md](SSH_LOCAL_DEV.md) にまとめています。

VSCode Remote SSHの場合:

1. `Terminal: Run Task` から `Chatwork Clipper: Dev Gateway` を実行する。
2. VSCodeの `Ports` パネルで `18080` の `Local Address` をブラウザで開く。
3. 開いたGateway画面から `Chatwork Clipper Bookmarklet` を開く。
4. Routing API URLが自動入力されていることを確認する。
5. `Chatwork Clip` リンクをブックマークバーへドラッグする。
6. Chatwork Webでテキストを選択して、そのブックマークを押す。

手動SSHの場合:

1. SSH先で `npm run clipper:gateway` を起動する。
2. 手元PCから `ssh -N -L 18080:127.0.0.1:18080 <ssh-host>` で1本だけ転送する。
3. 手元ブラウザで `http://127.0.0.1:18080/zumi-dev-lab/chatwork-clipper/bookmarklet` を開く。
4. Routing API URLが自動入力されていることを確認する。
5. `Chatwork Clip` リンクをブックマークバーへドラッグする。
6. Chatwork Webでテキストを選択して、そのブックマークを押す。

VercelなどへAPIを公開している場合は、ポートフォワードなしで `chatwork-clipper/bookmarklet/index.html` を手元ブラウザで開いて使えます。

`copy` 送信先なら、整形済みChatwork記法をクリップボードへコピーします。

## ローカルで動かす

複数プロジェクトを同時に触る場合は、固定ポートを増やさずゲートウェイを使います。

```bash
npm run clipper:gateway
```

ゲートウェイは `http://127.0.0.1:18080/zumi-dev-lab` で起動します。

このプロジェクト単体のAPIだけ起動する場合:

```bash
npm run clipper:api
```

単体APIは `http://127.0.0.1:8787` で起動します。初期状態では `CHATWORK_CLIPPER_DRY_RUN=true` と同じ扱いなので、Chatwork APIやAction Inboxには実送信せず、整形済みテキストを返します。

単体APIのポートを変えたい場合だけ、`.env.local` を使います。

```text
CHATWORK_CLIPPER_HOST=127.0.0.1
CHATWORK_CLIPPER_PORT=8789
```

Chromeで `chrome://extensions` を開き、デベロッパーモードを有効にして `chatwork-clipper/extension` を「パッケージ化されていない拡張機能」として読み込みます。

拡張の設定画面では、まず以下を使います。

```text
Routing API URL: http://127.0.0.1:8787
拡張機能トークン: 空欄
```

Chatwork Webを開き、メッセージまたはテキストを選択して右クリックすると、`Chatwork Clipper` メニューから送信できます。

## 本番環境変数

```text
CHATWORK_CLIPPER_EXTENSION_TOKEN=拡張機能から送る共有トークン
CHATWORK_CLIPPER_DRY_RUN=false
CHATWORK_CLIPPER_DESTINATIONS=[{"type":"chatwork_room","id":"998877","name":"タスク共有"},{"type":"action_inbox","id":"default","name":"Action Inbox"},{"type":"copy","id":"copy","name":"リンク形式でコピー"}]
CHATWORK_API_TOKEN=Chatwork APIトークン
ACTION_INBOX_INGEST_URL=https://example.com/api/inbox/captures
ACTION_INBOX_API_TOKEN=Action Inbox側のBearerトークン
CHATWORK_CLIPPER_ALLOWED_ORIGIN=chrome-extension://拡張ID
```

`CHATWORK_API_TOKEN` と `ACTION_INBOX_API_TOKEN` はサーバー側だけに置きます。拡張機能には入れません。

## API

```text
GET  /api/clipper/destinations
POST /api/clipper/share
POST /api/clipper/inbox
```

`POST` は `application/json` と `x-clipper-token` を受け付けます。`CHATWORK_CLIPPER_EXTENSION_TOKEN` が未設定の環境ではトークン検証を省略します。

## 送信先

`CHATWORK_CLIPPER_DESTINATIONS` はJSON配列で設定します。

```json
[
  { "type": "chatwork_room", "id": "998877", "name": "タスク共有" },
  { "type": "action_inbox", "id": "default", "name": "Action Inbox" },
  { "type": "copy", "id": "copy", "name": "リンク形式でコピー" }
]
```

`chatwork_room` の `id` は投稿先のChatwork room idです。

## 検証

```bash
npm test
node --check chatwork-clipper/extension/service-worker.js
node --check chatwork-clipper/extension/content-script.js
node --check chatwork-clipper/extension/popup.js
node --check chatwork-clipper/extension/options.js
```

## セキュリティ境界

- Chatwork APIトークンを拡張機能へ保存しない。
- OpenAIや他プロバイダーのAPIキーを拡張機能へ保存しない。
- APIはChatwork HTTPS URLだけを受け付ける。
- ページHTML全体やルーム履歴全体は送らない。
- 送信はユーザーの明示操作後だけにする。
- サーバーログへ本文を出す実装は入れない。
