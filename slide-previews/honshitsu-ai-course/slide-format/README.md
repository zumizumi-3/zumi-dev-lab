# 本質のAI講座 Slide Format

Reusable HTML/CSS slide format for the course.

## Files

- `index.html`: format-only sample deck without course body text or speaker notes
- `patterns.html`: composition pattern gallery
- `styles.css`: base slide canvas, typography, colors, and navigation-safe layout
- `slides.css`: course slide components and diagram layouts
- `patterns.css`: composition pattern gallery styles
- `print.css`: print/PDF styles
- `assets/fonts/noto-sans-jp/`: local Noto Sans JP font files
- `tools/`: static preview render and preview server helpers

## Preview

Open `index.html` for the reusable format sample.

Open `patterns.html` to browse composition patterns.

## Render

```bash
node tools/render-static-preview.mjs --slides FMT-00,FMT-01,FMT-02,FMT-03
```
