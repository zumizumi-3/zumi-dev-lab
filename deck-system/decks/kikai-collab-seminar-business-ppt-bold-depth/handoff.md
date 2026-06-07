# Kikai Seminar Deck Handoff

Use this handoff when starting a separate session for Kikai seminar deck production.

## Copy-Paste Prompt For The New Session

```text
Kikaiセミナー資料制作だけを切り出して進めたいです。

このセッションでは、スライド生成システム化やスキル設計は扱わず、実際のKikaiセミナー資料の品質改善だけを行ってください。

作業対象の主デッキ:
- deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/

主に見るファイル:
- index.html
- brief.md
- slide-plan.md
- script.md
- visual-direction.md
- color-palette.md
- page-depth-audit.md
- quality-audit.md
- image-prompts.md

比較・参照してよい既存デッキ:
- deck-system/decks/kikai-collab-seminar/
- deck-system/decks/kikai-collab-seminar-business-ppt/
- deck-system/decks/kikai-collab-seminar-business-ppt-bold/
- deck-system/decks/kikai-collab-seminar-image2-rich-samples/
- deck-system/decks/kikai-collab-seminar-image2-body-evolution-samples/

触らないでほしいもの:
- deck-system/workflows/
- deck-system/base-formats/
- deck-system/formats/
- README.md
- api/
- chatwork-clipper/
- package.json
- tests/
- .env.example
- その他、Kikaiセミナー資料制作に直接関係しないdirty/untracked files

現在の品質方針:
- スライド背景は白 `#FFFFFF`
- 文字色は濃いグレー `#343230`
- コーポレートカラーは `#FC754A`
- 薄オレンジは `#FEF8F6`
- ワンポイント色は必要な比較・状態差の時だけ `#6697EA`, `#F4F8FD`, `#69B086`, `#F5FAF8`
- カード枠線は3pt
- カード背景はグラデーションにしない
- 画像・SVG・カード内オブジェクトには枠線、左側オレンジライン、シャドウを付けない
- 枠とシャドウはカード側だけが持つ
- 画像は意味があるものにする
- 同じ画像を別文脈で使い回さない
- カード型ではカードごとに意味に合う画像/SVG/アイコンを差し込む
- 縦横比を潰さない
- 汎用の棒グラフ風装飾、盾アイコン、右下の共通飾りなどは避ける
- 本文は読みやすいサイズと行間を優先する
- Bodyはスライド全体中央ではなく、title/lead下からfooter上までの利用可能領域の中央に置く

現行の完成度に近い資料:
- deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/index.html

公開URLの想定:
- https://zumizumi-3.github.io/zumi-dev-lab/deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/

作業の進め方:
1. まず対象デッキ34枚を読み、既存の `page-depth-audit.md` と `quality-audit.md` を確認する
2. 直すべきページを一枚ずつ洗い出す
3. 情報密度、画像/SVGの意味、レイアウト、文字サイズ、余白、カード内配置をページ単位で判断する
4. 必要なページだけ `index.html` と関連ドキュメントを修正する
5. HTML parse、必要ならブラウザ/スクショ確認、`git diff --check` を通す
6. ユーザーがpushを依頼した場合だけpushする

注意:
- システム化作業は別セッションで進めているので、このセッションでは `script-to-visual-deck`、Content Pack、Skill設計、Workflow設計を触らない
- 既存のフォーマット本体やBase Formatへ改善を戻す作業はこのセッションではしない
- 変更前に必ず対象ファイルの現在状態を読み、ユーザーや別作業の変更を巻き戻さない
```

## Current Repo Context

This handoff was written while the repository had unrelated dirty/untracked files. A deck-production session should ignore unrelated files and only touch the deck-production scope unless the user explicitly says otherwise.

Known unrelated or separate-scope paths at handoff time:

- `README.md`
- `.env.example`
- `.vscode/`
- `api/`
- `chatwork-clipper/`
- `docs/chatwork-clipper-instructions.md`
- `package.json`
- `tests/`
- `deck-system/workflows/`
- `deck-system/formats/kikai-business-visual-ppt/`
- `deck-system/index.html`
- `deck-system/formats/index.html`

## Deck Production Scope

Primary writable scope:

- `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/index.html`
- `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/brief.md`
- `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/slide-plan.md`
- `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/script.md`
- `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/visual-direction.md`
- `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/color-palette.md`
- `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/page-depth-audit.md`
- `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/quality-audit.md`
- `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/image-prompts.md`

Optional writable scope only when needed:

- `deck-system/decks/kikai-collab-seminar-business-ppt-bold/assets/generated/`
- `deck-system/decks/index.html`

Reference-only scope:

- `deck-system/decks/kikai-collab-seminar/`
- `deck-system/decks/kikai-collab-seminar-business-ppt/`
- `deck-system/decks/kikai-collab-seminar-business-ppt-bold/`
- `deck-system/decks/kikai-collab-seminar-image2-rich-samples/`
- `deck-system/decks/kikai-collab-seminar-image2-body-evolution-samples/`

## Separation From Systemization

Keep these topics out of the deck-production session:

- workflow pack design
- skill creation
- Content Pack schema evolution
- Visual Plan schema evolution
- Base Format updates
- Company Format promotion
- `kikai-business-visual-ppt` normalization

Those belong to the systemization session.

## Push Rule

Do not push automatically.

If the user asks for push:

1. Run `git status --short`.
2. Review the deck-related diff.
3. Confirm no unrelated files are staged.
4. Commit/push only the files in the deck-production scope, unless the user explicitly expands the scope.
