# Plain Business PPT Source Evidence

This file records public-safe extraction evidence for `plain-business-ppt`. It does not include original PPTX files, Drive IDs, private URLs, OAuth material, screenshots, or source images.

## Input Set

- Source files: 17 PPTX
- Total slides inspected: 807
- Canvas: 16:9 in all files
- Semantic title coverage: 785 / 807 slides, 97.3%
- Common title box: left 3.3%, top 4.2%, height 4.6%
- Common body text box: directly below title, around top 10.5%
- Detected placeholders across slides: `title=774`, `body=764`, `pic=15`
- Detected no useful `subTitle`, `sldNum`, `ftr`, or `dt` placeholder pattern in the source set

## Source Labels

| Source | Deck type |
|---|---|
| S01 | Sales proposal |
| S02 | New product introduction |
| S03 | Marketing strategy proposal |
| S04 | Business plan |
| S05 | Client report |
| S06 | Budget plan |
| S07 | Project kickoff |
| S08 | Project progress report |
| S09 | Recruiting event deck |
| S10 | Training material |
| S11 | Acquisition strategy discussion |
| S12 | Cost reduction proposal |
| S13 | Performance improvement proposal |
| S14 | Competitor analysis |
| S15 | Regular meeting deck |
| S16 | Business diagram template |
| S17 | Business slide template |

## Semantic Slot Evidence

| Slot | Evidence |
|---|---|
| TITLE | Most normal slides use a small top-left `title` placeholder. Cover/title-only pages place the title in the middle or center band. |
| LABEL | Repeated rectangles and small text boxes act as lane names, step labels, status labels, or chart annotations. |
| BODY | Main explanation appears as the title-adjacent body placeholder, table rows, cards, lanes, paragraph boxes, or object-built diagrams. |
| TABLE | Some files use native tables; many use rectangle-built tables. The base supports both through semantic table slots. |
| FOOTNOTE | Unit labels, source notes, page numbers, and assumptions often sit near chart/table edges or slide footer. |

## Extraction Order

1. Prefer `p:ph type="title"` as the slide title.
2. Treat the normal body placeholder directly below the title as body copy. It is not a separate slot.
3. On cover slides, treat the body placeholder under the cover title as body context.
4. If a BIZ chapter/title page has no title placeholder, infer title from the largest upper text block.
5. Treat bottom-right `‹#›` text shapes as page numbers, not content.
6. Treat lower-band small citations, units, and assumptions as footnotes.
7. Keep short node labels such as `01`, `KGI`, `KPI`, `Before`, and `After` as labels inside the diagram.

## Pattern Mapping

| Pattern | Representative sources | Extracted structure |
|---|---|---|
| PB-00 Cover | S01-S15, S16-S17 | Center or top title, short context, optional date/version metadata |
| PB-01 Agenda | S10, S15, S17 | Numbered rows with topic and short purpose/time |
| PB-02 Executive summary | S05, S08, S15, S17 | Three or four key points with metric/implication |
| PB-03 Issue and direction | S01, S07, S12, S13 | Current symptom, cause, response direction |
| PB-04 3C / environment analysis | S03, S04, S17 | Three equal lanes plus bottom implication |
| PB-05 KPI tree | S11, S15, S16 | KGI/KPI/KSF or goal/driver/action node columns |
| PB-06 Data table | S04, S05, S06, S08, S15 | Dense figures with comment, unit, or interpretation column |
| PB-07 Progress summary | S05, S08, S15 | Status, progress, risk, and next action rows |
| PB-08 Budget plan | S06, S11, S12 | Cost category, variance, ROI/return note |
| PB-09 Schedule | S07, S08, S10 | Milestone rail with owner/status or decision gate |
| PB-10 Competitor comparison | S14, S17 | Criteria-by-company matrix with implication column |
| PB-11 Proposal options | S01, S12, S13, S17 | Plan A/B/C lanes and recommendation note |
| PB-12 Action plan | S05, S08, S15 | Task, owner, deadline, dependency, status |
| PB-13 Training flow | S10, S09 | Objective, modules, exercise, confirmation |
| PB-14 Meeting decision log | S15, S08 | Agenda item, decision, open issue, owner |
| PB-15 Appendix table | S04, S06, S14, S17 | Dense reference rows kept out of main argument |
| PB-16 SWOT / 2x2 | S03, S14, S17 | Four quadrants with short implication per quadrant |
| PB-17 Before / After | S01, S12, S13, S16 | Current state, change mechanism, target state |
| PB-18 Interview / voice | S09, S05 | Person/role, short quote, implication |
| PB-19 Selection / process rail | S09, S10, S07 | Step rail with gate or confirmation condition |

## Extraction Rules Kept

- The base keeps structure only; it removes brand colors, logos, decorative backgrounds, source images, and original copy.
- Title, body, table, label, and footnote slots must be explicit in HTML.
- Main slides stay decision-oriented; dense backup material moves to PB-15.
- Tables need captions or unit/footnote slots so figures do not become untyped body text.
