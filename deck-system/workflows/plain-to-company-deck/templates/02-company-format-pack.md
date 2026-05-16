# 02 Company Format Pack

## Format Metadata

- format_id:
- display_name:
- parent_base_format: `plain-neutral` or `plain-business-ppt`
- purpose:
- output_path: `deck-system/formats/<format-id>/`
- version: 1

## Brand Tokens

```yaml
fonts:
  heading:
  body:
colors:
  background:
  ink:
  muted:
  line:
  accent_primary:
  accent_secondary:
logo:
  asset:
  placement:
  safe_area:
```

## Layout Rules

- canvas:
- grid:
- margins:
- title_style:
- body_density:
- section_divider:
- footer:
- page_numbers:
- image_treatment:
- chart_table_treatment:

## Pattern Mapping

| Parent Base Pattern | Company Variant | Use When |
|---|---|---|
| PN-00 Cover |  |  |
| PN-01 Section divider |  |  |
| PN-02 Message with 3 cards |  |  |
| PN-04 Comparison |  |  |
| PN-05 Process |  |  |
| PN-06 Table |  |  |
| PN-07 Closing |  |  |
| PB-01 Agenda |  |  |
| PB-02 Executive summary |  |  |
| PB-06 Data table |  |  |
| PB-07 Progress summary |  |  |
| PB-10 Competitor comparison |  |  |
| PB-12 Action plan |  |  |
| PB-20 Chapter / TOC |  |  |
| PB-21 Standard body canvas |  |  |
| PB-22 Two-column agenda |  |  |
| PB-23 Horizontal 3-step |  |  |
| PB-24 Left-label / right-description stack |  |  |
| PB-25 Requirements stack |  |  |
| PB-26 Hub / tree diagram |  |  |
| PB-27 VS comparison |  |  |
| PB-28 Table/chart + commentary |  |  |
| PB-29 Left table / right visual |  |  |
| PB-30 Dense diagram / lecture |  |  |
| PB-31 Placeholderless section |  |  |
| PB-32 Image2 body full |  |  |
| PB-33 Image2 body split |  |  |
| PB-34 Image2 body diagram |  |  |

## Derivation Metadata

- Keep parent slot roles in `data-role`, `data-source-slot`, and `data-corporate-role` attributes.
- Do not print helper role labels such as title/body/lead markers in the visible slide.
- For `image2` body variants, keep the slide title and short body context as editable text and mark the generated body region with `data-renderer="image2"`.

## Source Evidence

- TBD

## Assumptions And Open Questions

- TBD

## Completion Gate

- Brand tokens are separated from the selected Plain base format.
- Reusable pattern variants are listed.
- Missing assets or unconfirmed brand rules are documented.
