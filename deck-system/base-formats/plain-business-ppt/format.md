# Plain Business PPT Base Format

## Position

Plain Business PPT is a separate base format from Plain Neutral. It is derived from the structural patterns found in a set of existing Japanese business PPTX files, then stripped back to a brand-neutral system.

Use it when:

- the deck should feel like a practical business PowerPoint rather than a sparse presentation
- the source material contains agenda, issue analysis, KPI, budget, schedule, progress, comparison, or action-plan content
- the user wants a reusable plain base before company colors, logos, and visual identity are applied
- the slide needs more table/grid density than Plain Neutral while staying readable

## Source Evidence

The input set contained 17 PPTX files and 807 slides.

- all source decks used a 16:9 canvas
- semantic pass identified a title-bearing slide in 785 of 807 slides, or 97.3%
- common primary-title slot: left 3.3%, top 4.2%, height 4.6% of the slide
- common body text slot: below the title, around top 10.5%, often named as a body or text placeholder in PPTX
- frequent structures: dense diagram/report pages, vertical-lane comparisons, tables/matrices, horizontal cards or steps, visual-plus-explanation pages, and meeting/action pages
- common text scale: 12, 14, 16, 18, 20, 24, 34, and 40+ point roles
- repeated business content types: agenda, company overview, issue analysis, 3C, KPI/status, budget, schedule, comparison, proposal options, training flow, and meeting actions

The source decks are used only as format evidence. This base format does not include source logos, images, brand colors, or original slide copy. Public-safe extraction notes are recorded in `source-evidence.md`.

## Semantic Slot Contract

Every pattern must make the role of each text area explicit. Titles must not be hidden as generic body text.

| Slot | Required Markup / Content Label | PPTX Evidence | Use |
|---|---|---|---|
| Primary title | `TITLE` / `data-role="title"` | usually `type=title` or first top-left text box | slide message or topic |
| Structure label | `LABEL` / `data-role="label"` | small rectangles, lane headers, section tags | category, step, status, owner |
| Body | `BODY` / `data-role="body"` | body/text placeholder, paragraph text boxes, bullets, card copy | context, evidence, explanation, action |
| Table / matrix | `TABLE` / `data-role="table"` | native table or object-built table | figures, comparison, action rows |
| Footnote / unit | `FOOTNOTE` / `data-role="footnote"` | unit labels, source notes, page numbers | unit, source, assumption, date |

When converting PPTX or generating a new deck, map source shapes into these slots first, then choose the visual pattern. Do not choose the visual pattern from shape count alone.

## PPTX Extraction Order

Use this order when importing another PPTX into this base:

1. **Primary title**: prefer `p:ph type="title"`. This is the normal slide title in the source set.
2. **Cover body**: on cover layouts, treat the `body` placeholder under the cover title as body context, not a separate slot.
3. **Standard body**: on normal body slides, treat the `body` placeholder directly under the title as body copy. It should not be top-packed against the title.
4. **Chapter or table-of-contents pages**: when no title placeholder exists, use the largest upper text block as a pseudo-title and mark it as inferred.
5. **Page numbers**: do not rely on `sldNum`; BIZ templates use normal bottom-right text shapes such as `‹#›`.
6. **Footnotes and citations**: classify small bottom-band text as footnote/source, not body.
7. **Figure labels**: short text inside circles, rounded rectangles, or small node labels such as `01`, `KGI`, `Before`, and `After` stays as `LABEL`, not title.

## Base Rules

- 16:9 slide canvas
- white slide background
- no logo, decorative background, gradient, or brand color
- black and neutral gray typography
- dense but bounded information: one headline, one slide message, and one primary structure
- business-document rhythm: small header, large conclusion headline, lowered body context, structured body, optional footer metadata
- prefer tables, lanes, and process grids over loose bullets
- use thin rules and light gray surfaces to show hierarchy
- keep slide-level body text to 12 to 18 point equivalent; move detail to notes or appendix

## Layout System

- outer margin: 5% to 6% of slide width
- header band: small section label, document context, or page number
- title zone: top 18% to 24% of slide height
- body zone: 65% to 72% of slide height
- footer zone: optional, small metadata only
- columns: 2, 3, 4, and 5 column structures are supported
- table rows: 4 to 7 rows on a normal slide; more belongs in appendix

## Typography Roles

| Role | Use |
|---|---|
| Cover title | Document name, proposal title, report title |
| Slide headline | Conclusion or message, not a topic label when possible |
| Label | Section, unit, category, status, owner |
| Body | Context, explanation, implication, or evidence |
| Table text | Dense structured facts |
| Footnote | Unit, assumption, source, date |

## Core Patterns

| ID | Pattern | Use |
|---|---|---|
| PB-00 | Cover | Simple business document cover |
| PB-01 | Agenda | Numbered meeting or proposal flow |
| PB-02 | Executive summary | 3 to 4 key points with implication |
| PB-03 | Issue and direction | Current issue, cause, response |
| PB-04 | 3C / environment analysis | Customer, competitor, company or equivalent three-lane analysis |
| PB-05 | KPI tree | KGI, KPI, KSF, and action linkage |
| PB-06 | Data table | Structured figures with comments and unit note |
| PB-07 | Progress summary | Status blocks, risks, and next action |
| PB-08 | Budget plan | Cost categories, budget, variance, ROI note |
| PB-09 | Schedule | Milestones, owner, due date, status |
| PB-10 | Competitor comparison | Criteria-by-company matrix |
| PB-11 | Proposal options | Multiple plans with recommendation |
| PB-12 | Action plan | Task, owner, deadline, dependency |
| PB-13 | Training flow | Objective, modules, practice, confirmation |
| PB-14 | Meeting decision log | Agenda item, decision, open issue, next owner |
| PB-15 | Appendix table | Dense reference table |
| PB-16 | SWOT / 2x2 | Strength, weakness, opportunity, threat or other 2x2 analysis |
| PB-17 | Before / After | Current state and target state comparison |
| PB-18 | Interview / voice | Person, role, quote, and implication |
| PB-19 | Selection / process rail | Recruiting, onboarding, or approval process |

## Density Rules

- Normal slides use 1 title, 1 lowered body context block, and 1 primary structure.
- Do not mix a large table and a large diagram on the same slide.
- For lane comparisons, keep each lane to 1 label, 1 short claim, and up to 3 evidence rows.
- For cards, use 3 cards by default; 4 cards only when each card is short.
- For schedules and action plans, use 4 to 6 rows on main slides.
- Use PB-15 for dense backup material instead of shrinking the normal pattern.
- Keep title and body slots visible in the source HTML so an agent can tell which text is the slide title and which text is body without visual inference.

## Derivation Rule

When making a company or purpose format from this base, keep the structural patterns stable and add only purpose-specific styling in the derived format:

- company font and color tokens
- logo placement
- cover and section divider treatment
- chart color palette
- screenshot or photo frame style
- footer metadata conventions
- source citation style
