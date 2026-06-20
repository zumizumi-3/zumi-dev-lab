---
name: deck-format-check
description: Decide whether a requested slide deck should use an existing Company/Purpose Format, update an incomplete format, or create a new format from a Plain Base before script-to-deck generation.
---

# Deck Format Check

Use this as Step 0 of `script-to-visual-deck`.

## Purpose

Before reading the script deeply or composing slides, determine the correct format entry point:

- `use-existing-format`: a suitable Company/Purpose Format is ready
- `update-existing-format`: a candidate exists but lacks required capabilities
- `create-new-format`: no suitable format exists, so derive one from a Plain Base

## Inputs

- company/client name
- deck purpose: seminar, sales proposal, business report, investor deck, workshop, etc.
- desired visual richness: plain, business-dense, visual-rich
- required output: HTML, PDF, screenshots, PPTX draft, etc.
- optional candidate format id

## Required Checks

Inspect `deck-system/formats/<format-id>/` candidates and verify:

- `format.md`
- `tokens.css`
- pattern catalog: `index.html`, `patterns.html`, or equivalent
- parent base format is documented
- purpose/use case matches the request
- body placement and type scale are documented
- brand tokens and logo assets are documented
- visual slot contract exists when visual-rich output is requested
- `brand-visual-style.md` exists when generated visuals are expected
- `image-prompt-template.md` exists when image2/SVG prompts are expected
- QA gate exists: `qa-check.mjs` or documented equivalent

## Decision Rules

### Use Existing Format

Return `use-existing-format` when:

- the format purpose matches the request
- it has brand tokens and layout rules
- it has visual slots and prompt templates if the deck needs generated images/SVG
- it has a QA gate

### Update Existing Format

Return `update-existing-format` when:

- the company format exists
- brand identity is usable
- but visual slot, prompt, QA, or purpose-specific rules are missing

### Create New Format

Return `create-new-format` when:

- no company/purpose candidate exists
- or the existing candidate is for a materially different purpose
- or adapting it would be more confusing than deriving from a Plain Base

## Output

Write or update a `format-check.md` artifact with:

- request summary
- candidate table
- selected decision
- selected or recommended format path
- missing capabilities
- next workflow step
- assumptions and open questions

## Helper Script

Use:

```bash
node deck-system/workflows/script-to-visual-deck/scripts/deck-format-check.mjs --company kikai --purpose visual-rich-seminar
```

The script provides a mechanical capability scan. The agent still makes the final judgment using purpose fit and user context.

## Stop Conditions

Stop and ask or present a decision when:

- the best candidate is incomplete and updating it may affect existing decks
- brand/logo usage rights are unclear
- the user explicitly wants a new look instead of an existing format

Otherwise, proceed to the selected next step and record the decision in the artifact.

