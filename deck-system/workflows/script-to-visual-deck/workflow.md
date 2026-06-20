# Script to Visual Deck Workflow

## Purpose

台本、Markdown、議事録、構成案を、既存または新規の Company / Purpose Format に流し込み、画像・SVG・HTMLを含む高品質なスライドデッキへ変換する。

このワークフローは、単発の資料生成ではなく、再利用可能な「AI対応スライド生成工程」を固定するためのもの。

## Core Flow

```text
0. Format Check
   ↓
1A. Existing Company / Purpose Format
   or
1B. Plain Base → Company / Purpose Format
   ↓
2. Script → Content Pack
   ↓
3. Content Pack → Slide Plan
   ↓
4. Slide Plan × Format → Visual Plan
   ↓
5. Visual Plan × Brand Style → Asset Prompts
   ↓
6. Compose HTML Deck
   ↓
7. QA / Audit / Export
```

## Gate 0: Format Check

最初に、対象企業/用途のフォーマットが存在するか確認する。

This workflow does not make a candidate format canonical by using it once. A candidate format can be used for testing, but it must be normalized before it becomes the default source of truth.

### If Format Exists

Start from:

```text
Company / Purpose Format
+ Script
```

Skip plain-to-company-format creation unless the existing format is outdated or missing required visual-slot/prompt rules.

### If Format Does Not Exist

Start from:

```text
Plain Base Format
+ Brand / Company Inputs
+ Purpose Inputs
```

Create or update a Company / Purpose Format before composing the deck.

## Required Format Capabilities

A format is ready for this workflow only if it defines:

- parent base format
- layout pattern catalog
- title / lead / body / footer spacing rules
- body vertical-centering rule
- typography scale
- card/table/SVG/image treatment
- visual slot contract
- brand visual style
- image/SVG prompt template
- QA rules

If any of these are missing, treat the format as incomplete and run the format creation/update step first.

## Current Kikai Format Status

| Format | Path | Status | Default use |
|---|---|---|---|
| Kikai Business PPT | `deck-system/formats/kikai-business-ppt/` | canonical | Dense Kikai business reports and document-like decks |
| Kikai Business Visual PPT | `deck-system/formats/kikai-business-visual-ppt/` | candidate/current | Kikai visual-rich seminar decks after normalization review |
| Kikai Vibe Coding Salon | `deck-system/formats/kikai-vibe-coding-salon/` | canonical but narrow | Calm, lighter Kikai seminar/course decks |

`kikai-business-visual-ppt` is the current best candidate for visual-rich Kikai decks because it has fixed visual slots, brand visual style, prompt template, and QA rules. It should still be reviewed against `slide-system-normalization.md` before being treated as a canonical company format.

## Step 1B: Plain Base to Company / Purpose Format

Use when the company/purpose format does not exist.

Input:

- selected base format
- brand assets: logo, color, font, examples
- purpose: seminar, sales proposal, report, investor deck, workshop, etc.
- visual direction: restrained, rich, dense, executive, teaching, etc.

Output:

- `deck-system/formats/<format-id>/format.md`
- `tokens.css`
- `brand-visual-style.md`
- `visual-slots.json`
- `image-prompt-template.md`
- `patterns.html` or `index.html`
- format QA script/checklist

Gate:

- visual slots are fixed by pattern
- brand colors and image rules are documented
- image prompt variables are defined
- browser preview renders without layout breakage

## Step 2: Script to Content Pack

Convert script/source material into structured slide-ready content.

This step formalizes the existing `plain-to-company-deck` script intake and slide-plan artifacts. It should reuse the older `03-script-input.md`, `04-slide-plan.md`, deck `brief.md`, deck `slide-plan.md`, deck `script.md`, and deck `image-prompts.md` concepts rather than starting from a blank new process.

Output:

- `brief.md`
- `narrative.md`
- `slide-plan.md`
- `speaker-notes.md`
- `claims.md`

Gate:

- target audience and desired action are clear
- every slide has one message
- facts, claims, numbers, and assumptions are separated
- every slide has density target and early visual judgment
- suggested visuals describe what they explain, not just the mood
- speaker notes carry detail that should not be crammed into the slide
- exact layout pattern, fixed visual slot, and final asset prompt are deferred to later steps

## Step 3: Slide Plan

Convert the narrative into slide rows.

Each slide row must define:

- slide id
- section
- source reference
- core message
- intent
- title
- optional lead
- body content
- speaker note goal
- claim status
- density expectation
- visual need
- current visual fit
- suggested visual depiction
- avoid notes

Gate:

- the deck flow is coherent
- slide count matches the user constraint
- sparse slides are flagged before design

## Step 4: Visual Plan

Map each slide to the chosen format.

For each slide:

- choose pattern id
- choose visual policy: `none`, `icon`, `svg_diagram`, `image2_body`, `image2_split`, `image2_card_media`, `photo_or_screenshot`, `hybrid`
- inherit fixed visual slots from the format
- fill each slot with a semantic depiction
- decide aspect ratio
- decide whether an image should be generated, supplied, drawn as SVG, or omitted

Gate:

- no vague slots such as `body`, `card`, `card whole`, or `side image`
- every visual has a semantic reason
- no image is planned only to fill whitespace
- table/operational slides remain editable when possible

## Step 5: Asset Prompts

Generate prompts for image2/SVG/icon/photo slots.

Prompt composition:

```text
Base slot contract
+ Brand visual style
+ Slide message
+ Slot depiction
+ Composition/aspect ratio
+ Negative prompt
```

Output:

- `asset-prompts.json`
- optional `asset-manifest.json` after generation

Gate:

- each asset maps to one slide and one slot
- prompt includes aspect ratio
- prompt includes what to avoid
- generated images do not contain readable text/logos unless explicitly required

## Step 6: Compose HTML Deck

Use the selected format pack and content pack to render the deck.

Rules:

- title/lead/body text stays HTML wherever possible
- generated images are inserted only into declared slots
- SVGs are semantic diagrams, not decoration
- card images do not carry their own borders
- format metadata stays in `data-*` attributes

Gate:

- all slides have required metadata
- all asset paths resolve
- no unintended format drift

## Step 7: QA / Audit / Export

Run page-by-page validation.

Minimum checks:

- all slides fit viewport
- body is centered in the available body zone
- font sizes are readable
- background is correct
- card borders, shadows, and image frames match format rules
- generated images are not reused across unrelated slots
- image aspect ratio is not distorted
- SVGs carry meaning
- tables have no empty filler rows
- screenshots/contact sheets are reviewed

Output:

- `qa-report.md`
- screenshots/contact sheet under deck exports or temp validation path
- final deck URL or file path

## Reuse Principle

Do not let steps communicate through conversation memory only. If the next step needs a decision, write it to the relevant artifact.

This is what makes the workflow resumable, reviewable, and reusable across companies.

## Relationship To Plain To Company Deck

`plain-to-company-deck` remains the simpler canonical workflow for ordinary format creation and script-to-deck work.

`script-to-visual-deck` is the richer workflow for decks that need explicit visual slots, image2/SVG planning, asset prompt manifests, and page-by-page visual QA.

Do not duplicate concepts between the two. When a concept already exists in `plain-to-company-deck`, normalize and extend it here instead of rebuilding it under a new name.
