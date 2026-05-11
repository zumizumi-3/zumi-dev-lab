# 講義スライド Base Format

White-background, orange-accent HTML slide format for seminars, lectures, and workshops.

## Design Baseline

- 16:9 slide canvas for desktop previews
- White slide background with orange as the primary accent
- Large typography for online seminars and lectures
- Reusable layouts for message slides, choice slides, formulas, AI-generated diagrams, before/after comparisons, flows, work prompts, role splits, quotes, and takeaways
- Keyboard, wheel, and touch navigation with progress indicator

## Files

- `index.html`: new reusable base-format sample deck
- `patterns.html`: new composition pattern gallery
- `base-format.css`: complete visual system, layout patterns, viewport-safe slide base
- `deck-controller.js`: keyboard, wheel, touch navigation, active-slide reveal, progress indicator
- `print.css`: print/PDF styles
- `assets/fonts/noto-sans-jp/`: local Noto Sans JP font files
- `tools/`: static preview render and preview server helpers

## Reuse

Copy a slide section from `index.html` or `patterns.html`, change the slide id and text, then keep the same class structure. Use `.ai-layout` and `.ai-panel` when inserting AI-generated diagrams or concept visuals.

## Preview

Open `index.html` for the reusable format sample.

Open `patterns.html` to browse composition patterns.

## Render

```bash
node tools/render-static-preview.mjs --slides FMT-00,FMT-01,FMT-02,FMT-03,FMT-04,FMT-05,FMT-06,FMT-07,FMT-08,FMT-09,FMT-10,FMT-11
```
