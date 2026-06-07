# Artifact Contracts

This file defines the handoff artifacts used by `script-to-visual-deck`.

## Format Check

File:

- `format-check.md`

Required fields:

- company / client
- purpose
- candidate existing formats
- company fit
- purpose fit
- capability score
- selected format id or missing-format decision
- missing capabilities
- next step: `use-existing-format` or `create-format`

Helper:

- `scripts/deck-format-check.mjs` can produce the first mechanical scan. The agent must still add an `Agent Review` section for purpose fit and user context.

## Company / Purpose Format

Folder:

- `deck-system/formats/<format-id>/`

Required files:

- `format.md`
- `tokens.css`
- `brand-visual-style.md`
- `visual-slots.json`
- `image-prompt-template.md`
- `index.html` or `patterns.html`

Required fields in `format.md`:

- parent base format
- intended deck types
- brand tokens
- typography rules
- card/table/image/SVG treatment
- visual slot inheritance
- prompt composition rule
- QA gate

## Content Pack

Folder:

- `deck-system/decks/<deck-id>/`

Example:

- `examples/kikai-content-pack.md`

Position:

- This is the normalized version of the existing `03-script-input.md`, `04-slide-plan.md`, deck `brief.md`, deck `slide-plan.md`, deck `script.md`, and deck `image-prompts.md` artifacts.
- It is not a new blank process. It formalizes the source-to-slide planning work already present in older decks.

Required files:

- `brief.md`
- `narrative.md`
- `slide-plan.md`
- `speaker-notes.md`
- `claims.md`

Required slide-plan columns:

- slide id
- section
- source reference
- core message
- title
- lead
- body points
- add / clarify notes
- speaker note goal
- claim status
- density target
- visual need
- current visual fit
- suggested visual depiction
- avoid notes
- status

Legacy-compatible aliases:

- `headline` may map to `title`
- `intent` may map to `core message`
- `visual need` may map to `visual_need`
- `script.md` may remain as a delivery script when needed

Completion gate:

- target audience and desired action are clear
- facts, claims, numbers, assumptions, and open questions are separated
- each slide has one message
- each slide has density and early visual judgment
- speaker notes carry detail that should not be crammed into slide body
- exact layout slots are deferred to the Visual Plan

Deprecated minimum-only fields:

- intent
- source

## Visual Plan

File:

- `visual-plan.json`

Required fields per slide:

- slide id
- selected format id
- pattern id
- visual policy
- visual unit
- aspect ratio
- type scale
- density action
- visual slots

Required fields per slot:

- slot name
- type
- aspect ratio
- semantic role
- depiction
- source type: `generate`, `supplied`, `draw-svg`, `none`
- avoid

## Asset Prompts

File:

- `asset-prompts.json`

Required fields per asset:

- slide id
- slot name
- visual policy
- aspect ratio
- prompt template
- prompt inputs
- final prompt
- expected output path

After generation:

- `asset-manifest.json`

Required fields:

- generated file path
- slide id
- slot name
- source prompt id
- generated date
- usage status
- replacement notes

## Deck Output

Required files:

- `index.html`
- `brief.md`
- `slide-plan.md`
- `visual-plan.json`
- `asset-prompts.json`
- `qa-report.md`

Optional files:

- `exports/`
- `speaker-notes.md`
- `image-prompts.md`
- `quality-audit.md`

## QA Report

File:

- `qa-report.md`

Required sections:

- format used
- source content used
- render checks
- page-by-page findings
- image/SVG audit
- text/readability audit
- unresolved issues
- final status
