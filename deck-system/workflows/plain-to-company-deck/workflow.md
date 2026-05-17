# Plain to Company Deck Workflow

## Purpose

用途に合うPlain系ベースフォーマットを親にして、企業別フォーマットを作成し、その企業フォーマットに台本を流し込んでスライド化する。

## Flow

1. **Select Base Format**
   - Parent options:
     - `deck-system/base-formats/plain-neutral/`: sparse, general-purpose, seminar or simple narrative decks
     - `deck-system/base-formats/plain-business-ppt/`: dense business PPT, proposal, report, meeting, KPI, budget, schedule, comparison
     - `deck-system/base-formats/plain-business-visual-ppt/`: rich business deck base with explicit image2/SVG/type/color/density policy
   - Gate: deck purpose, density, and source evidence match the selected parent base format.

2. **Create Company Format Pack**
   - Input: `templates/01-company-format-intake.md`
   - Output: `deck-system/formats/<company-format-id>/`
   - Gate: ロゴ、色、フォント、背景、間仕切り、フッター、パターン差分が仕様化されている。

3. **Input Script**
   - Input: `templates/03-script-input.md`
   - Output: `deck-system/decks/<deck-id>/brief.md`, `slide-plan.md`, `speaker-notes.md`
   - Gate: 台本がスライド単位の意図、見出し、本文、ノートに分解されている。

4. **Compose Deck**
   - Input: company format pack + slide plan
   - Output: `deck-system/decks/<deck-id>/index.html`
   - Gate: 企業フォーマットから逸脱せず、1スライド1メッセージで構成されている。

5. **Validate**
   - Input: rendered deck
   - Output: `templates/05-validation.md` or deck-specific validation report
   - Gate: viewport、PDF、文字溢れ、ロゴ配置、カラー、出典・未確定事項が確認済み。

## Required Inputs

- 企業名またはフォーマット名
- 参照する既存スライド、PDF、スクリーンショット、Webサイト、ロゴ、ブランドガイドのいずれか
- 台本、メモ、講義原稿、営業トーク、構成案のいずれか
- 希望スライド枚数
- 出力形式: HTML、PDF、スクリーンショット、PPTX下書き、Google Slides下書き

## Do Not

- 企業ロゴやブランドカラーをPlain系ベースフォーマットに直接入れない。
- 台本の細かい説明をすべてスライド本文に入れない。
- 未確認の数字、実績、導入事例、顧客名を事実として書かない。
- 企業フォーマット作成前に、台本だけで最終デザインを固定しない。
- `plain-business-ppt` の役割名を、見える補助ラベルとしてスライド上に出さない。派生用の識別は `data-*` 属性と仕様書に残す。
- `plain-business-visual-ppt` の visual_policy を、単なる装飾追加指示として扱わない。画像やSVGはスライドの主張を説明できる場合だけ使う。
