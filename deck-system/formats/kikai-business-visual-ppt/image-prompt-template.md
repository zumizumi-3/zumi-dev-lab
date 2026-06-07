# Image Prompt Template

Use this template for every generated image or SVG slot.

## Variable Schema

| Variable | Source | Required | Notes |
|---|---|---|---|
| `{deck_title}` | content pack | optional | Deck-level context. |
| `{slide_id}` | slide plan | required | Example: `P13`. |
| `{slide_message}` | slide plan | required | One-message headline or intent. |
| `{pattern_id}` | base format | required | Parent layout pattern. |
| `{visual_policy}` | base slot contract | required | `image2_card_media`, `svg_diagram`, etc. |
| `{slot_name}` | base slot contract | required | Semantic slot name. |
| `{semantic_role}` | base slot contract + content pack | required | What the slot means. |
| `{depiction}` | content pack | required | Concrete thing to depict. |
| `{brand_style}` | Kikai format | required | From `brand-visual-style.md`. |
| `{composition}` | base slot contract | required | Placement, crop, aspect ratio, object-fit intent. |
| `{aspect_ratio}` | base slot contract | required | `16:9`, `4:3`, `3:2`, `1:1`, `body-fit`, or `wide`. |
| `{must_avoid}` | Kikai format + content pack | required | Negative prompt and page-specific risks. |

## Prompt

```text
Create a visual asset for a Kikai business presentation.

Deck:
{deck_title}

Slide:
{slide_id}

Slide message:
{slide_message}

Parent layout pattern:
{pattern_id}

Visual policy:
{visual_policy}

Visual slot:
{slot_name}

Semantic role:
{semantic_role}

What the asset should depict:
{depiction}

Brand style:
{brand_style}

Composition and crop:
{composition}

Aspect ratio:
{aspect_ratio}

Avoid:
{must_avoid}
```

## Output Manifest Entry

Every generated asset should be logged like this:

```json
{
  "slide": "P13",
  "slot": "card-2-crm-media-top",
  "visualPolicy": "image2_card_media",
  "aspectRatio": "4:3",
  "file": "assets/generated/p13-card-2-crm.png",
  "promptTemplate": "kikai-business-visual-ppt/image-prompt-template.md",
  "promptInputs": {
    "slideMessage": "受託テーマは具体的な業務課題から作れる",
    "semanticRole": "CRM app example card media",
    "depiction": "A clean CRM dashboard handoff scene for a small business client"
  }
}
```

## QA Notes

- If the prompt cannot explain why the visual supports the slide, do not generate the image.
- If the slot is inside a card, the image should not include its own frame.
- If the slide contains a table or operational checklist, prefer editable HTML and use only small status icons if needed.
- If the slot is a real person, real company, real product, or proof point, use supplied real assets whenever available.

