# Kikai Brand Visual Style

Use this file as the brand-side prompt fragment for image2/SVG/icon generation.

## Fixed Brand Style Fragment

```text
Clean Japanese business presentation style for Kikai / Vibe Coding Salon.
Use a white or very light neutral environment, dark charcoal UI elements, and restrained #FC754A orange accents.
The image should feel like a professional business seminar slide component, not an advertisement.
Prefer clear composition, meaningful objects, and calm visual hierarchy.
No heavy red surfaces, no gold palette, no purple gradients, no decorative background pattern.
No readable text, no logos, no watermark.
No border around the image, no left orange line, no drop shadow.
```

## Visual Mode Fragments

### `image2_card_media`

```text
Create a compact card media image for the top area of one card.
The composition must communicate the card's specific claim in one glance.
Use a simple scene or UI-like object, not a generic abstract background.
Leave clean margins so it can sit inside a bordered HTML card.
```

### `image2_split`

```text
Create a wide supporting image for one side of an HTML slide.
The title, lead, and main explanatory text will remain editable HTML outside the image.
The image should make the slide message concrete through a real-looking business scene or UI composition.
```

### `image2_body`

```text
Create a body-region composite image for a slide.
Use minimal or no text inside the image.
The image should work as a rich diagrammatic scene behind or beside editable HTML labels.
```

### `svg_diagram`

```text
Create a monoline SVG-style diagram concept using dark gray strokes and #FC754A accents.
It should express the relationship, flow, loop, gate, branch, or risk structure.
Avoid decorative chart-like marks that do not carry meaning.
```

### `photo_or_screenshot`

```text
Prefer supplied real assets.
If a generated stand-in is unavoidable, make it clearly a placeholder scene and do not recreate a real person, real logo, or trademark.
```

## Color Rules

- Primary: `#FC754A`
- Text / object stroke: `#343230`
- Soft orange: `#FEF8F6`
- Optional blue: `#6697EA` / `#F4F8FD`
- Optional green: `#69B086` / `#F5FAF8`
- Slide background: `#FFFFFF`

Blue and green are one-point colors. Use them only when the content needs comparison, status, or category separation.

## Negative Prompt Fragment

```text
Do not include readable text, logos, watermarks, UI labels, presentation borders, picture frames, left-side orange bars, drop shadows, random charts, security shield icons unless the slot is explicitly about security, or repeated generic SaaS dashboards.
Do not use red-dominant, gold-dominant, purple-gradient, beige, brown, or dark blue palette.
Do not make the image look like a stock photo unrelated to the slide message.
```

