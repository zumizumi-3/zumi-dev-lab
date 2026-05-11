# Day 1 スライド実装

`content-outline.md` を正本に、Day 1の72枚を既存のWeb/HTMLスライドフォーマットへ反映した実装です。

講師ノートは `speaker-notes.md` の同一IDブロックを各スライド内の非表示 `aside.speaker-notes` として対応させています。

## ファイル

- `index.html`: Day 1 / Day 2 スライド一式
- `patterns.html`: 構図パターン集21枚
- `styles.css`: 全体の余白、文字、色、表示面の基本スタイル
- `slides.css`: スライド種別ごとのレイアウト、図解、部品スタイル
- `patterns.css`: 構図パターン集専用のレイアウト、カード、図解スタイル
- `print.css`: PDF出力用CSS
- `assets/fonts/noto-sans-jp/`: 日本語表示確認用のNoto Sans JP regular/bold

## 対象スライド

| 範囲 | 内容 |
|---|---|
| D1-00 - D1-07 | 導入、講座の本質、2日間の流れ、今日のゴール |
| D1-08 - D1-13 | 自己診断と失敗理由の仮説化 |
| D1-14 - D1-31 | AI、データ、人間、Agentの関係と制作物の分解 |
| D1-32 - D1-43 | 目的整理、役割分担 |
| D1-44 - D1-57 | 休憩、課題分解、文脈整理 |
| D1-58 - D1-71 | 出力レビュー、学習の残し方、Day 2課題選定、まとめ、任意の環境準備 |

## 文字サイズ方針

画面共有での読みやすさを優先し、文字を小さくして1枚に収めるより、自然にページ送りできる単位を優先します。

今後の展開では、本文が3点を超えるスライド、長い比較、複数段階の手順、本文と図解が同時に主役になるスライドは、別スライドへ分割します。

## 図解方針

`種別` が `図解`、`比較`、`接続`、`Day導入` のスライドは、汎用カードではなく、内容に応じた専用構図を使います。

- 比較: 2カラム比較、役割分離
- 構成要素: 中央概念と周辺要素、4者関係図
- 流れ: ロードマップ、パイプライン、動詞フロー
- 判断: ゲート、レビュー三角形、ガードレール
- 誤解や失敗理由: ファネル、ブロッカー、原因フロー

## 見た目のトーン

講座・セミナーの登壇スライドとして見えるよう、表紙と章扉は濃色背景と強いアクセント帯を使います。本文スライドは白地を基本にしつつ、ラベル、左線、カードの太い境界で講師が説明する順序を見せます。

参考表現として、番号バッジ付きの大きなカード、シンプルな線画アイコン、条件を足し合わせる数式風の図解を使います。色はシックなまま、視覚的な理解を優先します。

## 構図パターン集

`patterns.html` は、今後のスライド量産で使い回すための構図サンプルです。

| id | 構図 | 主な用途 |
|---|---|---|
| P-01 | 大きな結論 + 右側ビジュアル | 章の冒頭、重要判断 |
| P-02 | 質問 + 6択カード | アイスブレイク、自己診断 |
| P-03 | カードを足し合わせる数式図解 | 条件、構成要素、因果 |
| P-04 | Before / After 比較 | 誤解から理解への転換 |
| P-05 | 横一列のステップフロー | 講義の流れ、ワーク手順 |
| P-06 | 中央概念 + 周辺カード | 概念整理、全体像 |
| P-07 | ケース人物 + 状況カード | 具体例、自己投影 |
| P-08 | ワーク問い + 条件カード | ワーク導入 |
| P-09 | 階段型の理解ステップ | 学習段階、到達点 |
| P-10 | 誤解とリフレーム | 認識転換 |
| P-11 | 3列比較カード | 役割分担、比較整理 |
| P-12 | まとめ + 持ち帰り3点 | 章末、Day末 |
| P-13 | チェックリスト + 判定 | 依頼前チェック、ワーク完了条件 |
| P-14 | 判断分岐フロー | 判断基準、次の行動 |
| P-15 | プロンプトの分解図 | 文の分解、プロンプト添削 |
| P-16 | よくある失敗の積み上げ | 失敗例、注意喚起 |
| P-17 | 出力レビュー観点 | AI出力のレビュー、改善手順 |
| P-18 | Dayロードマップ | 講座全体像、次回接続 |
| P-19 | 強い一言 + 補足 | 重要メッセージ、章の締め |
| P-20 | デモ画面 + 観察ポイント | 実演、画面共有前の観察視点 |
| P-21 | 白紙キャンバス + 生成画像 | 生成画像、完成イメージ、空白から作る説明 |

## 表示確認

ブラウザで以下を開きます。

```text
projects/honshitsu-ai-course/slide-design/prototype/index.html
projects/honshitsu-ai-course/slide-design/prototype/patterns.html
```

SSHトンネルや開発サーバが不安定な場合は、静的スクリーンショット一覧を生成します。生成後は `preview-output/index.html` を開くだけで確認できます。

```bash
cd projects/honshitsu-ai-course/slide-design/prototype
node tools/render-static-preview.mjs --slides D1-00..D1-35
```

Chromiumの場所を明示する場合:

```bash
CHROME_PATH=/path/to/chrome node tools/render-static-preview.mjs --slides D1-00..D1-35
```

Cloudflare Tunnel経由で確認する場合は、静的プレビューを `1455` で起動し、Cloudflare Zero TrustのPublic Hostnameをこのoriginへ向けます。

```bash
PORT=1455 node tools/serve-static-preview.mjs
```

Cloudflare側の設定例:

```text
Public Hostname: slides.itakulabo.com
Service: http://127.0.0.1:1455
```

## PDF出力

PlaywrightのChromiumでPDF化します。

```bash
npx --yes playwright@1.56.1 install chromium
npx --yes playwright@1.56.1 pdf \
  --viewport-size=1280,720 \
  file:///home/zumi-dev/code/wah-bootcamp/projects/honshitsu-ai-course/slide-design/prototype/index.html \
  projects/honshitsu-ai-course/slide-design/exports/sample-slides.pdf

npx --yes playwright@1.56.1 pdf \
  --viewport-size=1280,720 \
  file:///home/zumi-dev/code/wah-bootcamp/projects/honshitsu-ai-course/slide-design/prototype/patterns.html \
  projects/honshitsu-ai-course/slide-design/exports/composition-patterns.pdf
```

この作業環境ではChromium実行に必要なOSライブラリが不足していたため、`apt-get download` で一時ディレクトリへライブラリを展開し、`LD_LIBRARY_PATH` を指定してPDFを生成しました。通常の制作環境では、ChromiumまたはPlaywrightの依存関係が入っていれば上記コマンドで生成できます。
