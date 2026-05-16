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
| PB-35 Split cover |  |  |
| PB-36 Statement cover |  |  |
| PB-37 Section divider number |  |  |
| PB-38 Section divider TOC |  |  |
| PB-39 Vertical four lanes |  |  |
| PB-40 Pyramid hierarchy |  |  |
| PB-41 Cycle loop |  |  |
| PB-42 Positioning map |  |  |
| PB-43 Dashboard summary |  |  |
| PB-44 Swimlane schedule |  |  |
| PB-45 Worksheet form |  |  |
| PB-46 Funnel conversion |  |  |
| PB-47 Icon grid |  |  |
| PB-48 Case quote |  |  |
| PB-49 Decision tree |  |  |
| PB-50 Evaluation grid |  |  |
| PB-51 Risk heatmap |  |  |
| PB-52 RACI matrix |  |  |
| PB-53 Waterfall bridge |  |  |
| PB-54 Value chain |  |  |
| PB-55 Fishbone cause |  |  |
| PB-56 Logic tree |  |  |
| PB-57 Stakeholder map |  |  |
| PB-58 Customer journey |  |  |
| PB-59 OKR alignment |  |  |
| PB-60 Business model canvas |  |  |
| PB-61 Cost breakdown |  |  |
| PB-62 Roadmap flags |  |  |
| PB-63 Scoring matrix |  |  |
| PB-64 Checklist review |  |  |
| PB-65 SVG hub spoke |  |  |
| PB-66 SVG chevron flow |  |  |
| PB-67 SVG cycle loop |  |  |
| PB-68 SVG fishbone |  |  |
| PB-69 SVG decision branch |  |  |
| PB-70 SVG callout anatomy |  |  |
| PB-71 SVG roadmap bars |  |  |
| PB-72 SVG layered system |  |  |
| PB-73 SVG Venn overlap |  |  |
| PB-74 SVG concentric rings |  |  |
| PB-75 SVG staircase maturity |  |  |
| PB-76 SVG gap bridge |  |  |
| PB-77 SVG org chart |  |  |
| PB-78 SVG dependency network |  |  |
| PB-79 SVG migration matrix |  |  |
| PB-80 SVG iceberg |  |  |
| PB-81 SVG layer stack |  |  |
| PB-82 SVG bowtie risk |  |  |
| PB-83 SVG bubble portfolio |  |  |
| PB-84 SVG stage gate board |  |  |

## Derivation Metadata

- Keep parent slot roles in `data-role`, `data-source-slot`, and `data-corporate-role` attributes.
- Preserve the header, title, optional lead, centered body, and footer structure.
- Center the body inside the available body zone between lead/title and footer, not inside the full slide canvas.
- Keep body components large enough to occupy the available body zone; do not leave a small body group floating in a wide blank page.
- Preserve deliberate internal alignment inside cards; title, metric, and body copy should not look accidentally top-pinned in tall cards.
- Do not print helper role labels such as title/body/lead markers in the visible slide.
- For `image2` body variants, keep the slide title and short body context as editable text and mark the generated body region with `data-renderer="image2"`.
- For SVG body variants, keep connector, branch, loop, callout, overlap, hierarchy, network, layer, and board structure in inline SVG while keeping long explanatory copy outside the SVG.

## Source Evidence

- TBD

## Assumptions And Open Questions

- TBD

## Completion Gate

- Brand tokens are separated from the selected Plain base format.
- Reusable pattern variants are listed.
- Missing assets or unconfirmed brand rules are documented.
