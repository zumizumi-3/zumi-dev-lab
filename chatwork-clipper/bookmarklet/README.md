# Chatwork Clipper Bookmarklet

Chrome拡張を読み込まずに使うための簡易版です。

## 使い方

1. `index.html` を手元ブラウザで開く。
2. Routing API URL、送信先、Clipperトークンを入力する。
3. `Chatwork Clip` をブックマークバーへドラッグする。
4. Chatwork Webでテキストを選択する。
5. ブックマークバーの `Chatwork Clip` を押す。

`copy` 送信先なら、APIのdry-runでも整形済みChatwork記法をクリップボードへコピーできます。

## 注意

- Chatwork APIトークンはブックマークレットに入れません。
- Clipperトークンを入力した場合、その値はブックマークURL内に埋め込まれます。
- 本番利用ではRouting APIをHTTPSで公開してください。
- ブラウザのCORS制約を受けるため、Routing API側はChatworkページからのリクエストを許可する必要があります。
