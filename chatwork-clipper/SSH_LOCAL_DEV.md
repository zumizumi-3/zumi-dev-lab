# Chatwork Clipper SSH Local Development

Vercelを使わず、SSH先の開発環境だけでChatwork Clipperを動かす手順です。

## 目的

- 普段の開発はVercelへデプロイしない。
- APIはSSH先の開発マシンで起動する。
- 手元PCのブラウザはSSHポートフォワードでAPIへ接続する。
- 秘密値はSSH先の `.env.local` に置き、リポジトリへ入れない。

## 推奨: SSHトンネルは1本だけにする

複数プロジェクトを同時に開発する場合、プロジェクトごとにポートフォワードを増やす運用は続きません。

## VSCode Remote SSHの場合

VSCode Remote SSHでこのワークスペースを開いている場合は、手動の `ssh -L` は基本不要です。

このリポジトリにはVSCode用の設定を入れています。

```text
.vscode/tasks.json
.vscode/settings.json
```

使い方:

1. VSCodeで `/home/zumi-dev/code/zumi-dev-lab` をRemote SSH接続で開く。
2. `Terminal: Run Task` から `Chatwork Clipper: Dev Gateway` を実行する。
3. VSCodeの `Ports` パネルで `18080` がForwardedになっていることを確認する。
4. `Ports` パネルからブラウザで開く。
5. 開いたGateway画面から `Chatwork Clipper Bookmarklet` を開く。

ブラウザで開く最終URLは通常これです。

```text
http://127.0.0.1:18080/zumi-dev-lab/chatwork-clipper/bookmarklet
```

VSCode側が別のローカルポートへ割り当てた場合でも、ブックマークレット生成ページは開いたURLをもとにRouting API URLを自動入力します。

基本形はこれです。

```text
手元ブラウザ
  ↓ localhost:18080 だけ
SSH port forward
  ↓
SSH先の Dev Gateway :18080
  ├─ /zumi-dev-lab/chatwork-clipper/bookmarklet
  └─ /zumi-dev-lab/api/clipper/*
```

手元PCで必要なSSHコマンドはこれだけです。

```bash
ssh -N -L 18080:127.0.0.1:18080 <ssh-host>
```

VSCode Remote SSHを使っている場合、このコマンドはVSCodeのPorts転送で代替できます。

## 1. SSH先でDev Gatewayを起動する

SSH先で実行します。

```bash
cd /home/zumi-dev/code/zumi-dev-lab
npm run clipper:gateway
```

起動先は `127.0.0.1:18080` です。外部公開はしません。

`.env.local` でゲートウェイのポートやベースパスを変えられますが、通常は変えません。

```text
SSH_DEV_GATEWAY_HOST=127.0.0.1
SSH_DEV_GATEWAY_PORT=18080
CHATWORK_CLIPPER_GATEWAY_BASE_PATH=/zumi-dev-lab
```

## 2. 手元PCからポートフォワードする

手元PCのターミナルで実行します。

```bash
ssh -N -L 18080:127.0.0.1:18080 <ssh-host>
```

`<ssh-host>` は普段SSHしているホスト名やエイリアスに置き換えます。

手元PC側の `18080` が埋まっている場合だけ、左側を変えます。

```bash
ssh -N -L 28080:127.0.0.1:18080 <ssh-host>
```

この場合、手元ブラウザでは `http://127.0.0.1:28080/zumi-dev-lab/chatwork-clipper/bookmarklet` を開きます。

## 3. 手元ブラウザでブックマークレットを作る

手元ブラウザで開きます。

```text
http://127.0.0.1:18080/zumi-dev-lab/chatwork-clipper/bookmarklet
```

`Chatwork Clip` をブックマークバーへドラッグします。

Routing API URLは開いたURLに合わせて自動入力されます。ポートフォワードの左側を `28080` にした場合も、そのまま使えます。

## 4. Chatworkで使う

1. 手元ブラウザでChatwork Webを開く。
2. メッセージ本文を選択する。
3. ブックマークバーの `Chatwork Clip` を押す。

初期状態はdry-runなので、ChatworkやAction Inboxへ実送信せず、整形済みテキストを返します。

## ローカルで実送信する場合

SSH先に `.env.local` を作ります。このファイルは `.gitignore` 済みです。

```bash
cd /home/zumi-dev/code/zumi-dev-lab
cp .env.example .env.local
```

例:

```text
CHATWORK_CLIPPER_EXTENSION_TOKEN=local-shared-token
CHATWORK_CLIPPER_DRY_RUN=false
SSH_DEV_GATEWAY_HOST=127.0.0.1
SSH_DEV_GATEWAY_PORT=18080
CHATWORK_CLIPPER_GATEWAY_BASE_PATH=/zumi-dev-lab
CHATWORK_CLIPPER_DESTINATIONS=[{"type":"chatwork_room","id":"998877","name":"タスク共有"},{"type":"copy","id":"copy","name":"リンク形式でコピー"}]
CHATWORK_API_TOKEN=your-chatwork-api-token
CHATWORK_CLIPPER_ALLOWED_ORIGIN=*
```

`.env.local` を変更したら、`npm run clipper:gateway` を再起動します。

ブックマークレット生成画面の `Clipperトークン` には `CHATWORK_CLIPPER_EXTENSION_TOKEN` と同じ値を入れます。

## 動作確認

SSH先で確認:

```bash
npm test
curl -s http://127.0.0.1:18080/zumi-dev-lab/api/clipper/destinations
```

手元PCでポートフォワード越しに確認:

```bash
curl -s http://127.0.0.1:18080/zumi-dev-lab/api/clipper/destinations
```

両方が同じJSONを返せば、ブラウザからも同じAPIへ到達できます。

## この構成でVercelを使う場面

Vercelは本番運用や第三者に試してもらう時だけ使います。日常の開発、dry-run、送信フォーマット確認、Chatwork API連携テストはSSHローカルで完結します。

## 単体APIサーバーを使いたい場合

ゲートウェイではなく、このプロジェクト単体のAPIだけ起動したい場合は次を使えます。

```bash
npm run clipper:api
```

これは `CHATWORK_CLIPPER_PORT` を使います。複数プロジェクト開発では、通常は `clipper:gateway` を優先します。
