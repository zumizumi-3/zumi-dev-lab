# Task Relay UI Mock

Chatworkの文脈からAIが拾った「自分のタスク候補」をレビューするための静的UIモックです。

## 開き方

`index.html`をブラウザで開くだけで動きます。外部APIやビルド手順はありません。

## 今の範囲

- Chatwork由来のタスク候補一覧
- 会話コンテキストとAI判定理由
- タスク名、詳細、期限、優先度、反映先の編集
- 採用、保留、却下の状態変更
- 検索とステータスフィルタ

## 次に本実装へ移す場所

- `candidates`: DBの`task_candidates`に置き換え
- `messages`: Chatwork Webhookで保存した`messages`に置き換え
- `status`: 採用/却下操作のAPI更新に置き換え
- `destinations`: Google Tasks、Calendar、Sheets連携の設定に置き換え
