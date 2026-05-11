# 本質のAI講座 Slide Format

Reusable HTML/CSS slide format for the course.

## Design Baseline

- 16:9 slide canvas
- White slide background
- Orange as the primary accent color
- Large typography for seminars and lectures
- Reusable layouts for conclusion, choices, formulas, AI-generated diagrams, before/after, flows, work prompts, comparisons, quotes, and takeaways

## Files

- `index.html`: reusable base-format sample deck
- `patterns.html`: 20-slide composition pattern gallery
- `styles.css`: base slide canvas, typography, colors, and navigation-safe layout
- `slides.css`: course slide components and diagram layouts
- `patterns.css`: composition pattern gallery styles
- `print.css`: print/PDF styles
- `assets/fonts/noto-sans-jp/`: local Noto Sans JP font files
- `tools/`: static preview render and preview server helpers

## Reuse

Copy a slide section from `index.html` or `patterns.html`, change the slide id and text, then keep the same class structure. Use the AI figure layout when inserting AI-generated diagrams or concept visuals.

## Preview

Open `index.html` for the reusable format sample.

Open `patterns.html` to browse composition patterns.

## Render

```bash
node tools/render-static-preview.mjs --slides FMT-00,FMT-01,FMT-02,FMT-03,FMT-04,FMT-05,FMT-06,FMT-07,FMT-08,FMT-09,FMT-10,FMT-11
```
