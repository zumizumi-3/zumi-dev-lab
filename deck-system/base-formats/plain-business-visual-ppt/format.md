# Plain Business Visual PPT Base Format

## Position

Plain Business Visual PPT is a visual-aware successor to `plain-business-ppt`.

Use it when:

- the deck is business-oriented, but the final output must feel richer than a plain report
- the slide should keep a white base while using large typography, Bordeaux emphasis, Gold/Orange navigation, image2, and SVG diagrams
- an agent needs to decide per slide whether to add generated images, generated SVGs, card images, icons, or no visual
- the deck will later become a company-specific format, but the plain layer must already describe visual judgment rules

This is still a plain format. It does not include company logos, source deck images, campaign-specific copy, or brand-locked layout. It does include reusable visual decision rules learned from the Kikai collab seminar deck production.

## Relationship To Existing Formats

- Parent structural source: `../plain-business-ppt/`
- New layer: visual policy, type scale policy, color role policy, density policy, and final quality gates
- Company derivation target: a company/purpose format can map the abstract color roles and visual slots to its own logo, colors, and assets

Do not overwrite `plain-business-ppt`. Use this format when the requested output needs richer business slides from the start.

## Core Principle

The plain layer should not answer only "where does text go?" It should also answer:

- should this pattern use image2?
- should this pattern use inline SVG?
- should each card get its own image?
- should the page stay text/table-only?
- what aspect ratio should the visual area have?
- how large should title, lead, body, and card text be?
- where can Bordeaux be used without making the page feel red?

## Structural Contract

Every slide keeps the same core structure:

1. header
2. title
3. optional lead
4. body
5. footer

Body placement rule:

- With a lead: center the body midpoint inside the vertical region between the lead's bottom edge and the footer's top edge.
- Without a lead: center the body midpoint inside the vertical region between the title's bottom edge and the footer's top edge.
- Do not center the body against the whole slide canvas.
- Use `data-body-valign="center"` by default. Use top alignment only for dense appendix or source-faithful imports.

## Per-Slide Visual Contract

Every `<section class="slide">` in `index.html` carries explicit generation metadata:

| Attribute | Purpose |
|---|---|
| `data-visual-policy` | Decides whether the page should use no visual, icons, SVG, image2 body, image2 split, image2 card media, real photo/screenshot, or a hybrid. |
| `data-visual-unit` | Decides whether the visual is per element, per row, per node, SVG part, targeted image frame, real asset, or not used. |
| `data-aspect-ratio` | Prevents image distortion by declaring `16:9`, `4:3`, `3:2`, `1:1`, `body-fit`, or `none`. |
| `data-type-scale` | Selects the typography scale: cover, headline, large body, dense table, card catalog, or diagram. |
| `data-color-role` | Maps the plain color intent to the derived company format. |
| `data-density-action` | Tells the generator whether to keep, add evidence, add card media, replace a visual, or switch layout. |
| `data-visual-required` | Declares the required concrete visual kind for that paper: `image2`, `svg`, `icon`, `photo_or_screenshot`, `svg+image2`, or `none`. |
| `data-visual-insert` | Declares the exact semantic insertion slot plan, for example `card-1-conclusion-media-top:image2:4:3`, `table-row-2-risk-status-icon:icon:1:1`, or `svg-axis-x-effectiveness:svg:wide`. |
| `data-visual-spec` | Links the slide to the page-level spec entry in `page-visual-slots.json`. |

These fields are part of the format, not just notes. A derived company format or deck generator should read them before choosing layouts and assets.

Do not stop at `data-visual-policy`. The policy is the category; `data-visual-insert` and `page-visual-slots.json` are the concrete page-by-page instruction for what to insert.

Slot names must include both location and semantic role, not only asset type or ordinal position. Use names like `card-1-conclusion-media-top`, `box-2-competitor-media-top`, `row-4-decision-left`, `field-3-channel-top-left`, and `svg-risk-event-center-icon`. Avoid `body`, `body-center`, `side-panel`, `card`, and `card-1` as standalone instructions. The only exception is a named image2 frame such as `image2-frame-main-composite-body`, where the slide pattern is explicitly a body-frame image2 variant and title/lead remain editable HTML.

## Typography Policy

The format is tuned for projected seminar/business material, not dense printed reports.

| Role | Default intent | Practical range |
|---|---|---|
| Cover title | first impression, readable at distance | 68-86px equivalent |
| Slide title | one-message headline | 44-56px equivalent |
| Lead | reading guide or thesis | 24-30px equivalent |
| Body | primary explanation | 20-24px equivalent |
| Card heading | item-level claim | 26-32px equivalent |
| Card body | supporting detail | 18-21px equivalent |
| Table text | compact structured facts | 16-20px equivalent |
| Header/footer | metadata only | 14-16px equivalent |

Rules:

- Prefer larger body text before adding more whitespace.
- Do not shrink body text to solve density. Split, summarize, or move detail to notes.
- Cards must have intentional internal alignment. Avoid tall cards with top-stacked small text.
- Long Japanese titles should wrap cleanly and keep line height tight enough to read as one headline.

## Color Role Policy

Default visual role tokens:

- `base`: white
- `text`: dark gray
- `muted`: medium gray
- `emphasis`: Bordeaux
- `navigation`: Gold/Orange
- `line`: pale neutral or pale Gold

Rules learned from the final deck:

- White is the default slide and card background.
- Gold/Orange can guide the eye through side bars, rules, numbers, and progress marks.
- Bordeaux is useful for authority and emphasis, but should stay in text, strokes, labels, and selected diagram lines.
- Avoid large red/Bordeaux surfaces. They make the deck feel heavy and break the white-base expectation.
- Do not use background gradients as a substitute for visual richness.

## Visual Policy Types

Use these values in pattern documentation and generated slide plans:

| Value | Meaning |
|---|---|
| `none` | keep the slide text/table/shape-only |
| `icon` | small symbol only; no generated image |
| `svg_diagram` | inline SVG explains relationship, flow, branch, loop, layer, or map |
| `image2_body` | generated image fills the body region |
| `image2_split` | generated image occupies one side while HTML text remains editable |
| `image2_card_media` | each card gets its own generated image |
| `photo_or_screenshot` | use a real person/photo/product/screenshot when available |
| `hybrid` | combine HTML text, SVG structure, and generated images |

## Pattern Policy Summary

| Pattern group | Recommended visual policy | Notes |
|---|---|---|
| Cover / split cover | `image2_body` or `photo_or_screenshot` | Use when a world view or concrete product/state matters. Keep title editable. |
| Section divider | `image2_body` only when changing mood | Otherwise large type + section number is enough. |
| Three/four cards | `image2_card_media` | Each card should get a different image matched to its claim. |
| Before/After and VS | `svg_diagram` or `hybrid` | Use arrows, bridge, or matched lanes. Avoid decorative icons. |
| Process / roadmap / loop | `svg_diagram` | Lines, arrows, gates, and sequence are the primary information. |
| Profile / case / proof | `photo_or_screenshot` | Real images beat generic generated scenes when available. |
| Tables / matrices | `none` or `icon` | Use density, comments, and hierarchy before adding images. |
| Risk / quality / control | `svg_diagram` | Show bug, review, gate, failure mode, or control flow explicitly. |
| Product / marketplace / UI | `photo_or_screenshot` or `image2_split` | Show the actual interface or a plausible screen-like scene. |
| Closing | `svg_diagram` or `none` | Avoid scattered generic marks. Message and CTA are more important. |

## Density Policy

Every slide needs a density decision before rendering:

1. Is the current message visually self-evident?
2. Is the page sparse because the layout is wrong?
3. Would a generated image clarify the message, or only decorate it?
4. Would SVG better explain the relationship than an image?
5. Does each visual correspond to a specific claim?
6. Are there repeated visuals across unrelated pages?
7. Is the visual distorted by aspect ratio?

If density is low:

- add a meaningful card image, mini SVG diagram, comparison axis, evidence row, metric, or callout
- do not add a generic background image
- do not fill whitespace with repeated graph/security marks

## Asset Rules

- `image2_card_media`: generate per card, not per slide atlas. Use one file per item.
- `image2_body`: specify body-region aspect ratio and keep text outside the image.
- `image2_split`: specify side ratio, object fit, and what the image must depict.
- SVG: use semantic class names and short text only. Long explanations stay in HTML.
- Real photos/logos/screenshots: use supplied assets, do not recreate trademarks or people.
- If an image cannot be described in one sentence as supporting the message, remove or replace it.

## Final Quality Gates

- Slide background and main card surfaces stay white unless the derived company format explicitly overrides them.
- Body is centered in the available body zone.
- Font size is readable for projection.
- Each visual has a semantic reason.
- Similar pages do not reuse the same image unless they intentionally refer to the same object.
- Card images are not distorted. Aspect ratio is specified.
- SVGs are not generic decoration. They express structure.
- Bordeaux is not used as a broad background surface.
- Gold/Orange remains a navigation/accent color.
- The format can be derived into a company pack without rewriting slide structure.

## Companion Files

- `visual-policy.md`: detailed pattern rules and P01-P34 final-deck learning map
- `page-visual-slots.md`: page-by-page insertion contract for image2, SVG, icons, photos/screenshots, or no visual
- `page-visual-slots.json`: machine-readable version of the page-by-page insertion contract
- `page-visual-audit.md`: all-page audit result for the concrete visual insertion contract
- `source-evidence.md`: inherited source PPT evidence plus final deck lessons
- `index.html`: browsable pattern catalog based on `plain-business-ppt`, with visual-aware typography and color role defaults
