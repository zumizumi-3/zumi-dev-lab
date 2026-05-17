# Kikai Business PPT Format

## Position

Kikai Business PPT Format is a company format derived from `plain-business-ppt`.

Use it when:

- creating dense business slides for Kikai / Vibe Coding Salon contexts
- using the 85-pattern Plain Business PPT base with Kikai logo treatment
- the deck should stay practical and document-like, not promotional
- titles and body copy should use the logo's dark gray rather than pure black

## Parent Base

- parent_base_format: `plain-business-ppt`
- parent_path: `deck-system/base-formats/plain-business-ppt/`
- derived_path: `deck-system/formats/kikai-business-ppt/`

Preserve the parent structure:

- 16:9 canvas
- header, title, optional lead, body, footer
- body centered inside the available body zone
- explicit `data-role`, `data-source-slot`, and `data-corporate-role` metadata
- tables, diagrams, SVG body figures, and image2 regions remain semantically distinct

## Brand Direction

- mood: calm, technical, executive, restrained
- text color: logo dark gray `#414242`
- background: near-white with cool gray page surround
- accent: logo orange `#ff7143`, used sparingly
- secondary structural color: logo light gray `#bac2c8`
- logo placement: compact logo in header, wide lockup on cover/closing
- density: business-report dense, but cards and tables should remain aligned and scannable

## Brand Tokens

```yaml
fonts:
  heading: "system-ui, -apple-system, BlinkMacSystemFont, Hiragino Sans, Yu Gothic, Meiryo, sans-serif"
  body: "system-ui, -apple-system, BlinkMacSystemFont, Hiragino Sans, Yu Gothic, Meiryo, sans-serif"
colors:
  paper: "#fbfcfc"
  page_bg: "#eff2f3"
  ink: "#414242"
  muted: "#6d7375"
  line: "#cfd6d9"
  line_soft: "#e5eaec"
  logo_light_gray: "#bac2c8"
  accent_orange: "#ff7143"
assets:
  icon_gray_bg: "assets/1.png"
  icon_white_bg: "assets/2.png"
  compact_logo: "assets/3.png"
  long_logo_a: "assets/4.png"
  long_logo_b: "assets/5.png"
  full_lockup: "assets/6.png"
```

## Layout Rules

- Use `#414242` for all headings and main text.
- Use orange only as a thin accent: left rule, small dots, status chips, page marks, or one key emphasis per slide.
- Keep backgrounds flat and light; do not use full orange backgrounds.
- Keep the compact logo in the top-right header on content pages.
- Use the wide logo only on covers, section dividers, and closing slides.
- Keep tables and diagrams close to the parent base density.
- For SVG diagrams, recolor strokes and labels with Kikai gray tokens, not brand-heavy fills.
- For image2 regions, keep the title and lead as editable HTML and use Kikai framing around the generated body.

## Pattern Mapping

All `plain-business-ppt` patterns PB-00 through PB-84 are imported as Kikai-styled layout instances in `business-plain-patterns.html`. The preview deck demonstrates representative variants:

| Base Pattern | Kikai Variant | Use |
|---|---|---|
| PB-00 Cover | KBP-00 Cover | Proposal, report, or workshop opening |
| PB-01 Agenda | KBP-01 Agenda | Meeting or proposal flow |
| PB-02 Executive summary | KBP-02 Executive summary | Management-ready first answer |
| PB-03 / PB-04 Analysis | KBP-03 Issue analysis | Issue, cause, direction, and implication |
| PB-06 / PB-10 Table | KBP-04 Decision table | Numeric or criteria-based comparison |
| PB-43 Dashboard | KBP-05 KPI dashboard | Regular report summary |
| PB-71 Roadmap bars | KBP-06 Roadmap | Phase plan with horizontal bars |
| PB-73 Venn overlap | KBP-07 Overlap diagram | Fit, strategic overlap, and common value |
| PB-67 / PB-68 SVG diagrams | KBP-08 SVG diagram | Cycle, fishbone, and connector-heavy explanations |
| PB-32 to PB-34 image2 | KBP-09 Image body | Generated body image region with editable title/lead |

## Source Evidence

- Logo source: six PNG assets provided through Google Drive and stored under `assets/`.
- Dominant logo dark gray extracted from PNG pixels: `#414242`.
- Dominant logo orange extracted from PNG pixels: `#ff7143`.
- Light logo gray from icon: approximately `#bac2c8`.

## Assumptions

- The provided PNG files are approved for use in this public static format library.
- No dedicated brand font file was provided, so system Japanese sans-serif is used.
- The existing Kikai / Vibe Coding Salon visual language should remain restrained: gray-first, orange-second.

## Validation Gate

- Logo renders on cover, header, and closing slides.
- Text uses the logo dark gray and remains readable.
- Orange is not overused.
- Parent body placement rules still pass.
- SVG and table patterns remain readable at desktop and mobile preview sizes.
