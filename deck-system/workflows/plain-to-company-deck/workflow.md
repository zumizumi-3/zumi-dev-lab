# Plain to Company Deck Workflow

## Purpose

Plain Neutralを親フォーマットにして、企業別フォーマットを作成し、その企業フォーマットに台本を流し込んでスライド化する。

## Flow

1. **Select Base Format**
   - Parent: `deck-system/base-formats/plain-neutral/`
   - Gate: Plain Neutralの構造・密度・基本パターンを親として使うことを確認する。

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

- 企業ロゴやブランドカラーをPlain Neutralに直接入れない。
- 台本の細かい説明をすべてスライド本文に入れない。
- 未確認の数字、実績、導入事例、顧客名を事実として書かない。
- 企業フォーマット作成前に、台本だけで最終デザインを固定しない。
