# Slide System Inventory And Normalization

Date: 2026-05-21

## Purpose

This file normalizes the existing deck-system assets before adding more skills or workflow steps.

The goal is to avoid rebuilding work that already exists, and to make the next skillization pass reuse the strongest current assets.

## Status Labels

| Status | Meaning | Rule |
|---|---|---|
| Canonical | Source of truth for future work | Extend carefully and keep documented |
| Candidate | Good enough to test, but not yet fully normalized | Review before treating as production format |
| Legacy reference | Earlier output that should not be extended directly | Mine for lessons only |
| Sample | Experiment or comparison artifact | Do not use as workflow source of truth |
| Missing contract | Concept exists, but handoff fields are incomplete | Add contract before automation |

## Canonical Vocabulary

| Term | Definition | Current file shape |
|---|---|---|
| Base Format | Brand-neutral structural system | `deck-system/base-formats/<base-id>/` |
| Company / Purpose Format | Brand or purpose-specific format derived from a base | `deck-system/formats/<format-id>/` |
| Content Pack | Script/source material converted into deck-ready content | `brief.md`, `narrative.md`, `slide-plan.md`, `speaker-notes.md`, `claims.md` |
| Visual Plan | Slide-by-slide mapping to layout patterns and visual slots | `visual-plan.json` |
| Asset Prompts | Image2/SVG/icon/photo prompt manifest | `asset-prompts.json` |
| Deck Output | Rendered HTML deck and supporting artifacts | `deck-system/decks/<deck-id>/` |
| QA Report | Page-by-page validation and unresolved risks | `qa-report.md` or `quality-audit.md` |

## Base Formats

| Asset | Path | Status | Use | Notes |
|---|---|---|---|---|
| Plain Neutral | `deck-system/base-formats/plain-neutral/` | Canonical | Sparse, general-purpose, seminar or simple narrative decks | Good for lightweight decks. Visual rules are intentionally weak. |
| Plain Business PPT | `deck-system/base-formats/plain-business-ppt/` | Canonical | Dense business PPT, report, proposal, KPI, schedule, comparison | Strong structural source. PB-00 to PB-84 are the main pattern catalog. |
| Plain Business Visual PPT | `deck-system/base-formats/plain-business-visual-ppt/` | Canonical | Rich business decks that need image2, SVG, icons, large type, density control | This is the preferred parent for future visual-rich business decks. It already has page-level visual slot contracts. |

## Company / Purpose Formats

| Asset | Path | Parent | Status | Use | Gap |
|---|---|---|---|---|---|
| Kikai Vibe Coding Salon | `deck-system/formats/kikai-vibe-coding-salon/` | `plain-neutral` | Canonical but narrow | Calm Kikai seminar/course decks with medium density | Not enough for image2/SVG-heavy visual workflow |
| Kikai Business PPT | `deck-system/formats/kikai-business-ppt/` | `plain-business-ppt` | Canonical | Dense Kikai business reports and document-like decks | No `visual-slots.json`, `brand-visual-style.md`, or prompt template |
| Kikai Business Visual PPT | `deck-system/formats/kikai-business-visual-ppt/` | `plain-business-visual-ppt` | Candidate | Current best candidate for Kikai visual-rich decks | Needs final normalization review before becoming canonical |

## Deck Outputs

| Asset | Path | Status | Use | Reusable lessons |
|---|---|---|---|---|
| Kikai Collab Seminar | `deck-system/decks/kikai-collab-seminar/` | Legacy reference | Original seminar deck output | Early content structure and initial generated assets |
| Kikai Collab Seminar / Business PPT | `deck-system/decks/kikai-collab-seminar-business-ppt/` | Legacy reference | Business PPT-styled remake | Shows how source script was first mapped into `brief.md`, `slide-plan.md`, and `script.md` |
| Kikai Collab Seminar / Bold | `deck-system/decks/kikai-collab-seminar-business-ppt-bold/` | Legacy reference | Visual-rich comparison version | Large generated asset set and many useful image prompts |
| Kikai Collab Seminar / Bold Depth | `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/` | Canonical evidence | Best current completed deck evidence | Promote its palette, card rules, image/SVG lessons, and page audits into format contracts |
| Image2 Rich Samples | `deck-system/decks/kikai-collab-seminar-image2-rich-samples/` | Sample | Body image direction sample | Use only as evidence for what not to overdo |
| Body Image Evolution Samples | `deck-system/decks/kikai-collab-seminar-image2-body-evolution-samples/` | Sample | Body region image evolution sample | Useful for body-panel experiments, not canonical deck flow |

## Workflow Assets

| Asset | Path | Status | Decision |
|---|---|---|---|
| Plain to Company Deck | `deck-system/workflows/plain-to-company-deck/` | Canonical legacy workflow | Keep as the historical/simple workflow. Extend its contracts rather than ignoring it. |
| Script to Visual Deck | `deck-system/workflows/script-to-visual-deck/` | Candidate workflow | Use as the new workflow skeleton, but explicitly map it back to existing `plain-to-company-deck` concepts. |
| Deck Format Check | `deck-system/workflows/script-to-visual-deck/skills/deck-format-check/` | Candidate atomic skill | Keep. It is the correct Step 0 boundary. |

## Existing Content Pack Equivalent

The content-pack idea was not new. It already existed under a different shape:

| Existing artifact | Path | Keep? | Normalize into |
|---|---|---|---|
| Script intake | `deck-system/workflows/plain-to-company-deck/templates/03-script-input.md` | Yes | Content Pack intake fields |
| Slide plan | `deck-system/workflows/plain-to-company-deck/templates/04-slide-plan.md` | Yes | `slide-plan.md` contract |
| Deck brief | `deck-system/decks/*/brief.md` | Yes | `brief.md` contract |
| Speaker script | `deck-system/decks/*/script.md` | Yes | `speaker-notes.md` or `script.md`, depending on delivery need |
| Image prompts | `deck-system/decks/*/image-prompts.md` | Yes | `asset-prompts.json` plus human-readable prompt log |

Do not create `script-to-content-pack` as a completely new idea. Create it as a formalization of the existing script-intake and slide-plan work.

## Missing Contracts

| Contract | Current state | Required normalization |
|---|---|---|
| `narrative.md` | Mostly implicit in brief and slide order | Add opening/context/problem/method/proof/offer/next action |
| `claims.md` | Facts and assumptions are scattered | Separate facts, numbers, sources, assumptions, and open items |
| `visual-plan.json` | Template exists, deck-level use is missing | Generate one per deck before composing HTML |
| `asset-prompts.json` | Template exists, older decks use `image-prompts.md` | Convert prompt planning into slot-based JSON, keep markdown as readable log |
| `asset-manifest.json` | Missing | Record generated file, slide, slot, prompt id, aspect ratio, and replacement notes |
| `qa-report.md` | Older decks use `quality-audit.md` and page-specific audits | Standardize final QA output while preserving existing audit files as evidence |

## Canonical Workflow Decision

The future workflow should be:

```text
0. Format Check
   - use existing Company / Purpose Format
   - update incomplete Company / Purpose Format
   - or create a new Company / Purpose Format from a Base Format

1. Company / Purpose Format Readiness
   - brand tokens
   - typography
   - visual slots
   - prompt template
   - QA gate

2. Script / Source to Content Pack
   - brief.md
   - narrative.md
   - slide-plan.md
   - speaker-notes.md
   - claims.md

3. Content Pack to Visual Plan
   - choose format pattern
   - choose visual policy
   - inherit fixed visual slots
   - decide density action

4. Visual Plan to Asset Prompts
   - generate prompt per semantic slot
   - preserve aspect ratio
   - forbid unrelated reuse

5. Compose HTML Deck
   - keep title, lead, and core text editable
   - insert visuals only into declared slots

6. QA / Audit / Export
   - browser render
   - asset path check
   - image/SVG semantic check
   - page-by-page layout check
```

## Kikai Current Default Path

For a new Kikai visual-rich seminar deck:

```text
deck-format-check
→ use or normalize `deck-system/formats/kikai-business-visual-ppt/`
→ build Content Pack from source script
→ create Visual Plan against `plain-business-visual-ppt` slots
→ create Asset Prompts with Kikai brand style
→ compose HTML
→ QA page-by-page
```

For a Kikai dense business report:

```text
deck-format-check
→ use `deck-system/formats/kikai-business-ppt/`
→ only add visual slots if the request explicitly asks for a visual-rich report
```

## Promotion Rules

Promote a deck lesson back into a format only when it is reusable.

Promote:

- body vertical-centering rule
- white slide background rule
- `#FC754A` as Kikai visual accent
- 3pt card border rule
- no image-side borders
- no left orange line on images or inner objects
- card-level image2 slots
- semantic SVG slot naming
- no unrelated image reuse
- page-by-page visual decision fields

Do not promote:

- one-off slide copy
- one-off generated images
- slide-specific user feedback tied only to the Kikai collab seminar
- temporary Figma import workarounds
- sample-only body image experiments

## Next Skillization Order

1. Finalize `deck-format-check`
2. Normalize `script-to-content-pack` from existing `03-script-input.md`, `04-slide-plan.md`, and deck examples
3. Create `content-to-visual-plan`
4. Create `visual-plan-to-asset-prompts`
5. Create `deck-qa-audit`
6. Normalize `plain-to-company-format`
7. Normalize `deck-compose-html`
8. Create parent `script-to-visual-deck`

## Immediate Next Work

Before adding the next skill, do these in order:

1. Mark `kikai-business-visual-ppt` as candidate/current in the workflow docs, not as silently canonical.
2. Update `script-to-content-pack` wording so it explicitly says it formalizes the existing script intake and slide-plan artifacts.
3. Extend the Content Pack template to include visual judgment inputs: density, image/SVG need, current visual fit, suggested visual depiction, and avoid notes.
4. Keep `plain-to-company-deck` as the simple canonical workflow, and treat `script-to-visual-deck` as the richer workflow.

## Non-Goals

- Do not generate a new deck in this normalization step.
- Do not rewrite existing decks.
- Do not remove legacy decks or samples.
- Do not push until the user explicitly asks.
