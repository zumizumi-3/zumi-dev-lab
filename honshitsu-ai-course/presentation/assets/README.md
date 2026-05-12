# Prototype Assets

代表スライド試作では、主要な図解、矢印、構造表現を `index.html` 内のインラインSVGで管理します。

このディレクトリは、後続で外部画像、スクリーンショット、ロゴ、QRコードなどが必要になった場合の置き場所です。

現時点の方針:

- 見出し、本文、ワーク文言はHTMLテキストとして管理する
- 図解、関係線、アイコン、矢印はインラインSVGを優先する
- 文字情報を画像化しない
- PDF出力で線幅、余白、色が崩れないか確認する

## YouTube Thumbnails

`youtube/` には、D2-39のおすすめYouTubeコンテンツで使うチャンネル画像と動画サムネイルを保存しています。リンク先は `content-outline.md` と `speaker-notes.md` のD2-39に記載しています。

## Fonts

`fonts/noto-sans-jp/` には、試作用にNoto Sans JPのregular/boldのみを同梱しています。

この環境では日本語システムフォントが不足していたため、HTML表示とPDF出力で日本語が欠けないようローカルフォントを読み込みます。後続で本番ビルド方式を決める際に、フォント同梱範囲、ライセンス表記、配信方法を整理します。

同梱フォントのライセンスは `fonts/noto-sans-jp/LICENSE_OFL.txt` と `fonts/noto-sans-jp/LICENSE` を参照します。
