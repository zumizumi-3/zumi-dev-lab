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
- Representative screenshots:
  - P01 cover
  - P20 golden route
  - P34 before/after

## Result

- HTML parse: pass
- whitespace: pass
- secret scan: pass
- viewport overflow: pass, 34 slides x 5 viewport sizes
- representative visual review: pass

## Known Open Items

- CTA分岐は元資料でも未確定のため、今回の最終スライドはBefore/Afterで締めています。
- 既存PDFの実ビジュアル、登壇者写真、製品スクリーンショットは未提供のため、HTML内では差し替え可能な図解・UIプレースホルダーで表現しています。
- 元資料中の統計や売上実績は、参照資料の記載をそのまま使っています。外部一次情報の追加検証は未実施です。
