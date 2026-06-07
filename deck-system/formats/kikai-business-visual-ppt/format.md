# Kikai Business Visual PPT Format

## Position

Kikai Business Visual PPT is the current Kikai slide-generation base for rich HTML decks.

It is not a replacement for `kikai-business-ppt`. It is a newer company format derived from `plain-business-visual-ppt`, intended for decks that need fixed visual slots, generated image prompts, SVG diagrams, larger projected typography, and stricter QA.

Use it when:

- the output is an HTML slide deck for Kikai / Vibe Coding Salon
- the deck should keep a white slide background and dark gray text
- the deck should use `#FC754A` as the main orange accent
- each layout pattern needs fixed image/SVG/icon insertion positions
- generated images should be prompted from Base Format x Brand Format x Content Pack
- the result will be reviewed through browser screenshots and semantic slot checks

## Parent Base

- parent_base_format: `plain-business-visual-ppt`
- parent_path: `deck-system/base-formats/plain-business-visual-ppt/`
- derived_path: `deck-system/formats/kikai-business-visual-ppt/`

This format inherits the full visual slot catalog from:

- `../../base-formats/plain-business-visual-ppt/page-visual-slots.json`

The parent decides the reusable layout pattern and fixed insertion slot. This Kikai format decides the brand treatment and image-prompt variables.

## Layer Responsibilities

| Layer | Owns | Does not own |
|---|---|---|
| Base format | slide structure, layout patterns, visual slot position, visual type, aspect ratio | brand color, logo, image style |
| Kikai format | colors, logo placement, card border, image style, prompt fragments, QA rules | slide-specific facts or exact visual subject |
| Content pack | slide message, card meanings, concrete image subject, speaker notes | global brand style or slot geometry |
| Deck output | rendered HTML, generated assets, final prompt log, screenshots | reusable base rules |

## Structure Contract

Every slide keeps:

1. header
2. title
3. optional lead
4. body
5. footer

Body placement:

- With a lead, center the body inside the vertical space between the lead bottom and footer top.
- Without a lead, center the body inside the vertical space between the title bottom and footer top.
- Do not center body against the whole canvas.

Every slide section should include:

```html
data-visual-policy
data-visual-unit
data-aspect-ratio
data-type-scale
data-density-action
data-visual-required
data-visual-insert
data-prompt-template
```

`data-visual-insert` must name semantic slots. Avoid vague values like `body`, `card`, `card whole`, or `side image` unless the parent pattern is explicitly a single body image2 frame.

## Brand Tokens

```yaml
colors:
  slide_background: "#FFFFFF"
  text: "#343230"
  muted: "#64615D"
  primary_orange: "#FC754A"
  primary_soft: "#FEF8F6"
  one_point_blue: "#6697EA"
  one_point_blue_soft: "#F4F8FD"
  one_point_green: "#69B086"
  one_point_green_soft: "#F5FAF8"
card:
  border_width: "3pt"
  background: "#FFFFFF"
  image_border: "none"
  image_shadow: "none"
  inner_object_shadow: "none"
logo:
  compact: "../kikai-business-ppt/assets/3.png"
  full_lockup: "../kikai-business-ppt/assets/6.png"
```

## Visual Rules

- Use white slide backgrounds. Do not use pale tinted slide backgrounds.
- Use `#FC754A` for title rules, page accents, numbers, and route markers.
- Use blue/green only when they encode comparison or status.
- Cards own borders. Images, SVG objects, and card-internal objects do not get their own frame, left orange line, or shadow.
- Card borders are `3pt`.
- Generated image assets must be one file per semantic slot. Do not crop one atlas into unrelated cards.
- Generated images should not include readable text or logos.
- SVGs should explain structure: route, loop, gate, branch, quality check, comparison, risk, or dependency.
- Real photos/screenshots beat generated scenes when the slide is about a real person, product, or proof.

## Prompt Composition Rule

Each generated visual prompt is composed from:

```text
Base slot contract
+ Kikai brand visual style
+ Content pack slide message
+ Content pack slot-specific depiction
+ negative prompts / QA constraints
```

The reusable template lives in `image-prompt-template.md`.

## Files

- `tokens.css`: Kikai visual tokens and reusable card/media primitives
- `brand-visual-style.md`: reusable brand prompt fragments and image rules
- `image-prompt-template.md`: variable prompt template for each slide/slot
- `visual-slots.json`: derived visual slot contract and brand override manifest
- `index.html`: browser QA catalog with representative Kikai visual patterns
- `qa-check.mjs`: local structural QA for the format pack

## Validation Gate

Before using this format to generate a new deck:

- run `node deck-system/formats/kikai-business-visual-ppt/qa-check.mjs`
- open or screenshot `index.html`
- confirm all pattern demo slides fit without scrollbars
- confirm the final deck has no broken image links, no duplicated unrelated generated images, no distorted card media, and no image-side borders

