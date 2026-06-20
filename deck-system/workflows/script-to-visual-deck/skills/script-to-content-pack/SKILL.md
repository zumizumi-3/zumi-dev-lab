---
name: script-to-content-pack
description: Convert scripts, Markdown, notes, transcripts, or existing deck drafts into a normalized Content Pack for slide generation, formalizing the existing script intake and slide-plan artifacts instead of inventing a new process.
---

# Script To Content Pack

Use this as Step 2 of `script-to-visual-deck`, after `deck-format-check`.

## Purpose

Turn source material into slide-ready content before layout, image generation, or HTML composition.

This skill formalizes existing deck-system artifacts:

- `plain-to-company-deck/templates/03-script-input.md`
- `plain-to-company-deck/templates/04-slide-plan.md`
- deck-level `brief.md`
- deck-level `slide-plan.md`
- deck-level `script.md`
- deck-level `image-prompts.md`

Do not treat it as a new blank workflow. It is the normalized contract for content, density, and early visual judgment.

## Inputs

- format-check decision
- selected format id and status
- source script, Markdown, transcript, outline, notes, or previous deck
- audience
- desired action
- delivery context
- target slide count
- known facts, numbers, examples, and open questions

## Outputs

Create or update these files under `deck-system/decks/<deck-id>/`:

- `brief.md`
- `narrative.md`
- `slide-plan.md`
- `speaker-notes.md`
- `claims.md`

Optional during migration:

- keep `script.md` when the deck needs a delivery script
- keep `image-prompts.md` as a human-readable legacy prompt log

## Process

1. Read the selected format decision from `format-check.md` or the user's explicit instruction.
2. Inventory the source material and mark each source as confirmed, assumption, or open.
3. Write the deck brief: purpose, audience, desired action, delivery context, tone, constraints, and target count.
4. Build the narrative arc: opening, context, problem, method, proof, offer/decision, next action.
5. Create slide rows with one core message per slide.
6. Separate slide text from speaker detail.
7. Extract claims, numbers, examples, and unknowns into `claims.md`.
8. Add per-slide density and early visual judgment fields.

## Slide Row Required Fields

Each slide row must include:

- slide id
- section
- source reference
- core message
- title
- optional lead
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

## Visual Judgment Boundary

This skill decides whether a slide likely needs a visual and what that visual should communicate.

It does not decide:

- exact layout pattern id
- exact fixed visual slot name
- final image2/SVG prompt text
- final asset file path

Those decisions belong to `slide-plan-to-visual-plan` and `visual-plan-to-asset-prompts`.

## Visual Need Values

Use the same vocabulary as the format system:

- `none`
- `icon`
- `svg_diagram`
- `image2_body`
- `image2_split`
- `image2_card_media`
- `photo_or_screenshot`
- `hybrid`

## Rules

- Do not invent facts.
- Do not copy all script detail into slide body.
- Do not decide final layout from source shape count alone.
- Do not request images only because a page feels empty.
- Use `svg_diagram` for relationships, sequence, branches, gates, loops, systems, or risks.
- Use `image2_card_media` only when individual cards have distinct semantic meanings.
- Use `photo_or_screenshot` when real evidence is available.
- Keep exact slot assignment for the Visual Plan step.

## Completion Gate

- Audience and desired action are explicit.
- The narrative arc is coherent.
- Slide count is fixed or the mismatch is documented.
- Every slide row has one core message.
- Facts and assumptions are separated.
- Every slide has density and visual-need judgment.
- Suggested visuals are concrete enough for the next step.
- Open questions are listed instead of silently resolved.

## Stop Conditions

Stop for user review when:

- slide count conflicts with the user's instruction
- source material lacks enough confirmed facts for the requested deck
- claims are high-stakes and unsourced
- the visual direction would require many generated or real-person assets
- the selected format is marked `candidate` or `update-needed` and the deck depends on missing capabilities
