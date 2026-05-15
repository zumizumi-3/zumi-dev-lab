# Kikai Vibe Coding Salon Format

## Position

Kikai Vibe Coding Salon Format is a company-specific format derived from `plain-neutral`.

Use it when:

- creating slides for Kikai or Vibe Coding Salon
- turning scripts, workshop notes, or course material into a chic branded deck
- the deck should feel calm, technical, and premium without becoming decorative

## Parent Base

- parent_base_format: `plain-neutral`
- parent_path: `deck-system/base-formats/plain-neutral/`
- derived_path: `deck-system/formats/kikai-vibe-coding-salon/`

Keep Plain Neutral's layout discipline:

- 16:9 slide canvas
- one slide, one message
- 2 to 3 body points by default
- details move to speaker notes
- no decorative backgrounds

## Brand Direction

- overall mood: chic, quiet, technical, restrained
- text color: dark gray, not pure black
- background: warm white or very light warm gray
- accent: Kikai orange, used sparingly for dots, rules, numbers, and emphasis
- visual density: medium; avoid crowded slides
- logo usage: consistent right-top lockup; visible but outside the content argument

## Brand Tokens

```yaml
fonts:
  heading: "system-ui, -apple-system, BlinkMacSystemFont, Hiragino Sans, Yu Gothic, Meiryo, sans-serif"
  body: "system-ui, -apple-system, BlinkMacSystemFont, Hiragino Sans, Yu Gothic, Meiryo, sans-serif"
colors:
  background: "#f7f5f1"
  paper: "#fbfaf7"
  ink: "#3f4140"
  muted: "#6f706d"
  line: "#d8d4cc"
  line_soft: "#e9e5dc"
  accent_orange: "#ff7043"
  accent_orange_soft: "#fff0e9"
logo:
  icon: "assets/kikai-icon-light.png"
  primary: "assets/kikai-vibe-coding-salon-logo.png"
  wide: "assets/vibe-coding-salon-kikai-logo.png"
```

## Layout Rules

- Use dark gray headings with high weight.
- Use orange for one accent per slide, not for full backgrounds.
- Keep cards and panels flat with thin warm-gray borders.
- Prefer large whitespace over ornamental backgrounds.
- Fix each page title at the top-left of the slide header.
- Place the primary Kikai logo lockup at the top-right, separated from the title.
- Keep the footer stable: deck name on the left, page/time marker on the right.
- Use large logo treatments only when the slide itself is a cover or brand reveal.

## Pattern Mapping

| Plain Neutral Pattern | Kikai Variant | Use When |
|---|---|---|
| PN-00 Cover | KKV-00 Cover | Opening a course, workshop, or proposal |
| PN-01 Section divider | KKV-01 Section Divider | Moving between chapters |
| PN-02 Message with 3 cards | KKV-02 Three Signals | Presenting principles, checkpoints, or themes |
| PN-03 Split | KKV-03 Split Proof | Pairing a claim with proof, screenshot, or diagram |
| PN-04 Comparison | KKV-04 Before After | Comparing current and desired state |
| PN-05 Process | KKV-05 Process Line | Showing 3 to 5 steps |
| PN-06 Table | KKV-06 Quiet Table | Structured comparison or requirements |
| PN-07 Closing | KKV-07 Closing | Ending with rule, next action, or thanks |
| PN-27 Text-only narrative | KKV-27 Essay | Text-led principle or lecture slide |
| PN-29 Light separator | KKV-29 Quiet Pause | Short transition or breathing point |

## Source Evidence

- Drive folder: `1Mp8GxWm6qhif8BhgIcmLdTrouLqAJtHG`
- Logo files: `1.png` to `6.png`
- Selected assets:
  - `kikai-icon-light.png`
  - `kikai-vibe-coding-salon-logo.png`
  - `vibe-coding-salon-kikai-logo.png`

## Assumptions

- The PNG files are approved for use in the public deck format library.
- No official font file was provided, so system Japanese sans-serif is used.
- Orange is treated as accent only; the main text remains dark gray.

## Validation Gate

- Logo renders clearly on light backgrounds.
- Text remains dark gray and readable.
- No slide relies on heavy color fills.
- Format remains derived from Plain Neutral and does not alter the base format.
