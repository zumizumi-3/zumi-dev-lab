# Content Pack

## Position

This contract formalizes the existing script intake and slide planning artifacts:

- `deck-system/workflows/plain-to-company-deck/templates/03-script-input.md`
- `deck-system/workflows/plain-to-company-deck/templates/04-slide-plan.md`
- existing deck-level `brief.md`, `slide-plan.md`, `script.md`, and `image-prompts.md`

Do not treat Content Pack as a new blank process. It is the normalized handoff between source material and visual planning.

## Brief

- deck id:
- deck title:
- source material:
- selected format id:
- selected format status: `canonical` / `candidate` / `update-needed`
- purpose:
- audience:
- desired action:
- delivery context:
- tone:
- target slide count:
- output format:
- constraints:

## Source Inventory

| Source | Type | Location | Status | Notes |
|---|---|---|---|---|
|  | script / md / ppt / pdf / screenshot / drive / github / interview |  | confirmed / assumption / open |  |

## Narrative Arc

| Stage | Role | Key message | Source reference | Notes |
|---|---|---|---|---|
| Opening | Establish why this matters now |  |  |  |
| Context | Explain the current situation |  |  |  |
| Problem | Name the gap, risk, or pain |  |  |  |
| Method | Show the way forward |  |  |  |
| Proof | Make it believable |  |  |  |
| Offer / Decision | Clarify the proposed choice |  |  |  |
| Next action | Define what the audience should do |  |  |  |

## Slide Content Plan

Use this table before choosing exact layout slots. The `visual_*` fields are judgment inputs for the later Visual Plan, not final asset prompts.

| Slide | Section | Source ref | Core message | Title | Lead | Body points | Add / clarify | Speaker note goal | Claim status | Density target | visual_need | current_visual_fit | suggested_visual_depiction | avoid | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P01 |  |  |  |  |  |  |  |  | confirmed / assumption / open | low / medium / high | none / icon / svg_diagram / image2_body / image2_split / image2_card_media / photo_or_screenshot / hybrid | keep / replace / add / remove / not_applicable |  |  | draft |

## Visual Judgment Guide

Use these fields per slide:

| Field | Values | Meaning |
|---|---|---|
| `density_target` | `low`, `medium`, `high` | How much information the slide should carry for the audience and delivery context. |
| `visual_need` | `none`, `icon`, `svg_diagram`, `image2_body`, `image2_split`, `image2_card_media`, `photo_or_screenshot`, `hybrid` | Early visual judgment before exact pattern mapping. |
| `current_visual_fit` | `keep`, `replace`, `add`, `remove`, `not_applicable` | Whether an existing or obvious visual supports the message. |
| `suggested_visual_depiction` | free text | What the image, SVG, icon, or photo should actually explain. |
| `avoid` | free text | Reused generic images, meaningless graphs, distorted aspect ratios, decorative shields, excess frames, or unsupported facts. |

Rules:

- Use `none` when density should come from editable text, table rows, comments, metrics, or larger typography.
- Use `svg_diagram` for route, loop, gate, branch, comparison, risk, dependency, quality control, or system structure.
- Use `image2_card_media` when cards represent distinct concrete items and each card needs a different visual.
- Use `image2_split` when the slide needs editable text plus a concrete scene, UI, or proof image.
- Use `image2_body` only when the body region itself is a rich visual panel and title/lead remain editable HTML.
- Use `photo_or_screenshot` for real people, products, interfaces, or proof when supplied assets exist.
- Do not add images only to fill whitespace.

## Claims And Evidence

| Claim / number / example | Source | Status | Slide(s) | Handling |
|---|---|---|---|---|
|  |  | confirmed / assumption / open |  | show on slide / keep in note / omit / needs verification |

## Speaker Note Policy

- details to keep out of slide body:
- examples to mention orally:
- caveats:
- transitions between sections:
- CTA or closing wording:

## Format Handoff Notes

- selected format:
- format status:
- required body structure: header / title / optional lead / body / footer
- body placement rule:
- typography concern:
- color/brand concern:
- visual slot concern:
- QA concern:

## Completion Gate

- Target audience and desired action are clear.
- Source facts, numbers, assumptions, and open questions are separated.
- Each planned slide has one core message.
- Slide count matches the user constraint or the mismatch is documented.
- Sparse slides are flagged before design.
- Every slide has a density target.
- Every slide has an initial visual judgment, including `none` when visuals are intentionally omitted.
- Suggested visuals explain the slide message, not just the mood.
- Speaker notes carry detail that should not be crammed into body text.
