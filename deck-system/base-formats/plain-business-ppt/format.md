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

Every pattern must make the role of each text area explicit in markup and documentation. These role names are for import, derivation, and validation. They must not be printed as visible labels on the preview slide.

| Slot | Required metadata | PPTX evidence | Use |
|---|---|---|---|
| Primary title | `data-role="title"` plus `data-source-slot="pptx:title"` and `data-corporate-role="slide-title"` | usually `type=title` or first top-left text box | slide message or topic |
| Lead | optional `data-role="lead"` plus `data-source-slot="pptx:body"` and `data-corporate-role="lead-context"` | title-adjacent text placeholder or upper explanatory text box | short context, thesis, subtitle, or reading guide |
| Structure label | `data-role="label"` or local heading text inside cards, rows, and nodes | small rectangles, lane headers, section tags | category, step, status, owner |
| Body | `data-role="body"` plus `data-source-slot="pptx:body"` and `data-corporate-role="body-structure"` | body/text placeholder, paragraph text boxes, bullets, card copy, table, diagram, lane, or generated image area | main evidence, explanation, action, table, diagram, or visual body |
| Table / matrix | `data-role="table"` | native table or object-built table | figures, comparison, action rows |
| Footnote / unit | `data-role="footnote"` | unit labels, source notes, page numbers | unit, source, assumption, date |
| Generated body image | `data-role="body"` plus `data-renderer="image2"` and `data-corporate-role="generated-body-image"` | derived variant from visual-heavy body pages | image-generated diagram, scene, or composite body area |

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
- optional lead zone: short context under the title; omit when the slide should move directly from title to body
- body zone: the remaining vertical space between the lead and footer, or between the title and footer when lead is omitted
- default body vertical alignment: center the body group's midpoint inside the available body zone, not inside the entire slide
- footer zone: optional, small metadata only
- columns: 2, 3, 4, and 5 column structures are supported
- table rows: 4 to 7 rows on a normal slide; more belongs in appendix

## Body Placement Contract

The basic structure is header, title, optional lead, body, and footer.

- With a lead: body midpoint must sit at the vertical center of the region between the lead's bottom edge and the footer's top edge.
- Without a lead: body midpoint must sit at the vertical center of the region between the title's bottom edge and the footer's top edge.
- The body can be a table, lanes, cards, diagram, image2 region, or a group of multiple body elements.
- Use `data-body-valign="center"` as the default. Use `data-body-valign="top"` only when a dense appendix or source-faithful import cannot fit otherwise.
- Do not center body against the whole slide canvas; header, title, lead, and footer are excluded from the body centering calculation.

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
| PB-20 | Chapter / TOC | Section opening with a compact page map |
| PB-21 | Standard body canvas | Normal title, lowered body context, and free body area |
| PB-22 | Two-column agenda | Many topics split into two balanced agenda columns |
| PB-23 | Horizontal 3-step | Method, migration, onboarding, or approval steps |
| PB-24 | Left-label / right-description stack | Definitions, assumptions, scope, or policy explanation |
| PB-25 | Requirements stack | Request, constraint, priority, or vendor requirement page |
| PB-26 | Hub / tree diagram | Central concept with surrounding causes, actions, or effects |
| PB-27 | VS comparison | Two alternatives compared on matching criteria |
| PB-28 | Table/chart + commentary | Numbers on one side and interpretation on the other |
| PB-29 | Left table / right visual | Checklist, evidence table, and supporting visual |
| PB-30 | Dense diagram / lecture | High-density concept explanation built from nodes |
| PB-31 | Placeholderless section | Inferred-title chapter or title page from normal shapes |
| PB-32 | Image2 body full | Full body region generated as an image while title/context stay HTML |
| PB-33 | Image2 body split | Text facts on one side, generated body image on the other |
| PB-34 | Image2 body diagram | Generated diagram body with editable HTML title/context |
| PB-35 | Split cover | Cover with a main title and metadata panel |
| PB-36 | Statement cover | Cover with no lead and a centered body note |
| PB-37 | Section divider number | Chapter divider with large section number |
| PB-38 | Section divider TOC | Chapter divider with mini table of contents |
| PB-39 | Vertical four lanes | Four equal vertical lanes for roles, services, or channels |
| PB-40 | Pyramid hierarchy | Layered concept from purpose to execution |
| PB-41 | Cycle loop | Repeated process such as PDCA or operations loop |
| PB-42 | Positioning map | Two-axis relative comparison |
| PB-43 | Dashboard summary | KPI cards plus cause and next action |
| PB-44 | Swimlane schedule | Owner-by-phase schedule |
| PB-45 | Worksheet form | Workshop, training, or discussion input sheet |
| PB-46 | Funnel conversion | Step-down conversion or process attrition |
| PB-47 | Icon grid | Feature, support, or module catalog |
| PB-48 | Case quote | Photo/screenshot frame plus quote or voice |
| PB-49 | Decision tree | Branching conditions and actions |
| PB-50 | Evaluation grid | Criteria-by-option assessment cards |
| PB-51 | Risk heatmap | Impact and likelihood priority map |
| PB-52 | RACI matrix | Responsibility and approval split |
| PB-53 | Waterfall bridge | Increase/decrease factor breakdown |
| PB-54 | Value chain | Sequential business functions |
| PB-55 | Fishbone cause | Cause-and-effect analysis |
| PB-56 | Logic tree | Issue or hypothesis decomposition |
| PB-57 | Stakeholder map | Actors around a central issue |
| PB-58 | Customer journey | Experience stages and needs |
| PB-59 | OKR alignment | Objective, key results, and actions |
| PB-60 | Business model canvas | One-page business model fields |
| PB-61 | Cost breakdown | Cost structure bars and ratios |
| PB-62 | Roadmap flags | Milestones and checkpoints |
| PB-63 | Scoring matrix | Weighted decision scoring |
| PB-64 | Checklist review | Readiness or control checklist |
| PB-65 | SVG hub spoke | Center concept with explicit relationship connectors |
| PB-66 | SVG chevron flow | Connected arrow process with clear sequence |
| PB-67 | SVG cycle loop | Circular improvement or operation loop |
| PB-68 | SVG fishbone | Cause-and-effect diagram with spine and ribs |
| PB-69 | SVG decision branch | Condition diamond and branch outcomes |
| PB-70 | SVG callout anatomy | Central object with annotated callout lines |
| PB-71 | SVG roadmap bars | Phase bars across a time axis |
| PB-72 | SVG layered system | Horizontal layers plus process flow |
| PB-73 | SVG Venn overlap | Overlapping conditions and shared value |
| PB-74 | SVG concentric rings | Core, surrounding layers, and ecosystem |
| PB-75 | SVG staircase maturity | Level progression or capability growth |
| PB-76 | SVG gap bridge | As-is to to-be bridge with intermediate moves |
| PB-77 | SVG org chart | Hierarchical ownership or reporting structure |
| PB-78 | SVG dependency network | Node relationships and dependencies |
| PB-79 | SVG migration matrix | Movement across a two-axis matrix |
| PB-80 | SVG iceberg | Visible symptoms and hidden causes |
| PB-81 | SVG layer stack | Capability or system layers stacked from foundation to outcome |
| PB-82 | SVG bowtie risk | Causes, central risk event, and outcomes |
| PB-83 | SVG bubble portfolio | Position and relative size of options |
| PB-84 | SVG stage gate board | Pipeline columns and card-level status |

## Image2 Body Variants

PB-32, PB-33, and PB-34 are generated-image variants of the same business PPT structure. They are not a replacement for semantic text. Keep the slide title and short body context as HTML so the deck remains searchable, editable, and convertible into a corporate format.

Use `image2` only for the body area when:

- the body is a conceptual visual, photo composite, screenshot-like scene, or complex diagram
- fine text inside the image is not required for the slide to be understood
- the prompt can be tied to the slide's body context and source notes
- the generated area has `data-renderer="image2"` and a corporate role such as `generated-body-image` or `generated-body-diagram`

## SVG Body Diagram Variants

PB-65 through PB-84 are inline-SVG variants for PPTX pages that were built from connector lines, arrows, diamonds, fishbone shapes, callouts, overlapping circles, hierarchies, networks, layer stacks, and board-like pipelines. Use them when plain HTML cards lose the intended relationship between elements.

- keep the SVG in the body slot with `data-corporate-role="svg-body-diagram"`
- keep slide title and lead as editable HTML outside the SVG
- keep SVG text short; long explanation belongs in HTML lead, notes, or a separate body card
- use neutral fills and strokes only in the base format; add brand colors in derived company formats
- prefer SVG for explicit connectors, arrowheads, diamonds, callout lines, cyclic arrows, timeline bars, overlap areas, hierarchy lines, and bubble sizing

## Density Rules

- Normal slides use 1 title, optional lead, and 1 centered primary body structure.
- Body structures should use enough of the available body zone to avoid sparse paper-like whitespace. Prefer increasing the body component height before shrinking titles or moving content upward.
- Cards should align their internal title, metric, and body copy intentionally. Avoid top-stacked text floating in a tall card unless the pattern is a table-like row.
- Do not mix a large table and a large diagram on the same slide.
- For lane comparisons, keep each lane to 1 label, 1 short claim, and up to 3 evidence rows.
- For cards, use 3 cards by default; 4 cards only when each card is short.
- For schedules and action plans, use 4 to 6 rows on main slides.
- Use PB-15 for dense backup material instead of shrinking the normal pattern.
- Keep title and body slots explicit in the source HTML metadata so an agent can tell which text is the slide title and which text is body without visual inference.
- Do not add visible slot labels such as role names into slide content. The role belongs in `data-*` attributes, docs, and validation notes.

## Derivation Rule

When making a company or purpose format from this base, keep the structural patterns stable and add only purpose-specific styling in the derived format:

- company font and color tokens
- logo placement
- cover and section divider treatment
- chart color palette
- screenshot or photo frame style
- footer metadata conventions
- source citation style
