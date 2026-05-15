# Kikai Collab Seminar Validation

## Checks Run

- `git diff --check`
- trailing whitespace scan for `deck-system/decks` and `deck-system/index.html`
- Python `HTMLParser` parse check:
  - `deck-system/decks/index.html`
  - `deck-system/decks/kikai-collab-seminar/index.html`
  - `deck-system/index.html`
- secret string scan for common token patterns in `deck-system` and `README.md`
- Chrome DevTools Protocol viewport overflow check for all 34 slides:
  - 1920x1080
  - 1280x720
  - 768x1024
  - 375x667
  - 667x375
- Fixed canvas behavior:
  - logical slide size fixed at 1600x900
  - browser display uses uniform whole-slide scaling only
  - responsive layout rewrites disabled
- Fixed 16:9 HTML screenshots:
  - 1920x1080 / P01
  - 1280x720 / P07
  - 667x375 / P18
- Direct hash load check:
  - `#P07` activates only P07, with P01 cleared from active state
- Brand header check:
  - enlarged common top-left Kikai lockup reviewed on P07 at 1280x720
- Representative screenshots after visual upgrade:
  - P01 cover with generated hero visual
  - P07 AI wall/bridge visual
  - P18 reality-check visual with statistics
  - P33 marketplace visual

## Result

- HTML parse: pass
- whitespace: pass
- secret scan: pass
- fixed 1600x900 canvas overflow: pass for 34 slides at 1920x1080, 1280x720, 768x1024, 375x667, and 667x375
- direct hash load: pass
- enlarged brand header: pass
- representative visual review: pass
- generated image assets: 6 project-local PNG files under `assets/generated/`

## Known Open Items

- 固定16:9を優先したため、スマホ縦表示ではスライド面が小さくなります。PC、タブレット、またはスマホ横向きでの閲覧を推奨します。
- CTA分岐は元資料でも未確定のため、今回の最終スライドはBefore/Afterで締めています。
- 既存PDFの実ビジュアル、登壇者写真、製品スクリーンショットは未提供のため、HTML内では生成画像と差し替え可能な図解・UI表現で構成しています。
- 元資料中の統計や売上実績は、参照資料の記載をそのまま使っています。外部一次情報の追加検証は未実施です。
