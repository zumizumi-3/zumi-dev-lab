# Visual Policy

This file captures the operational rules learned from the final Kikai collab seminar deck and turns them into reusable plain-format guidance.

## Visual Decision Model

For every slide, decide these fields before composing:

| Field | Values |
|---|---|
| `visual_policy` | `none`, `icon`, `svg_diagram`, `image2_body`, `image2_split`, `image2_card_media`, `photo_or_screenshot`, `hybrid` |
| `visual_unit` | `none`, `whole_body`, `side_panel`, `per_card`, `corner_icon`, `real_asset` |
| `aspect_ratio` | `16:9`, `4:3`, `3:2`, `1:1`, `card-fit`, `body-fit` |
| `type_scale` | `cover`, `headline`, `large_body`, `dense_table`, `card_catalog`, `diagram` |
| `color_role` | `white_base`, `bordeaux_emphasis`, `gold_orange_navigation`, `neutral_table` |
| `density_action` | `keep`, `add_evidence`, `add_card_media`, `replace_visual`, `switch_layout`, `split_slide` |

The HTML catalog reflects these decisions directly on each slide section as `data-visual-policy`, `data-visual-unit`, `data-aspect-ratio`, `data-type-scale`, `data-color-role`, and `data-density-action`. Treat those attributes as the category layer when generating a company-specific format or a concrete deck from this plain format.

The concrete insertion layer is `data-visual-required`, `data-visual-insert`, and `data-visual-spec`, backed by `page-visual-slots.json`. Use that page-level layer to decide the actual image2/SVG/icon/photo slots.

After changing any slide pattern or visual slot, update `page-visual-audit.md` so the format keeps an explicit all-page review trail.

## Prompt Fragment For Future Runs

```text
各スライドについて visual_policy / visual_unit / aspect_ratio / type_scale / color_role / density_action を先に決めてください。
次に page-visual-slots.json の該当行を参照し、data-visual-insert に従って具体的な差し込みスロットを作ってください。
画像は意味がある場合だけ使い、同じ画像の使い回しは禁止です。
カード型はカードごとに別の image2 画像またはSVGを入れてください。
プロセス、品質ゲート、比較、ルート、リスクはSVG図解を優先してください。
表や比較表は画像で埋めず、余白が出る場合はコメント列、示唆、ミニ指標を足してください。
背景は白、本文は濃いグレー、Bordeauxは強調、Gold/Orangeはナビゲーションに限定してください。
```

## Pattern-Level Rules

| Pattern | visual_policy | visual_unit | aspect_ratio | Notes |
|---|---|---|---|---|
| Cover | `image2_body` or `photo_or_screenshot` | `side_panel` or `whole_body` | `4:3` or `16:9` | A cover can use an image to establish world view. Do not use a colored background as the main effect. |
| Split cover | `image2_split` | `side_panel` | `4:3` | Keep title editable and use the image as proof or mood. |
| Statement cover | `none` or `svg_diagram` | `whole_body` | `body-fit` | Large type can be enough. Add SVG only when the statement has a relationship or contrast. |
| Section divider | `none` or `image2_body` | `whole_body` | `16:9` | Use image only for strong chapter mood shift. Avoid generic divider art. |
| Agenda | `icon` | `per_row` | `1:1` | Small icons may help, but agenda pages usually need clear sequence more than images. |
| Executive summary | `image2_card_media` | `per_card` | `4:3` | Use when each summary point is distinct. Otherwise keep as cards. |
| Issue / direction | `svg_diagram` | `whole_body` | `body-fit` | Show symptom, cause, and response as connected structure. |
| 3C / environment | `image2_card_media` or `icon` | `per_lane` | `4:3` | Use distinct visuals for customer, competitor, company only when they add meaning. |
| KPI tree | `svg_diagram` | `whole_body` | `body-fit` | Tree relationships are SVG-first. |
| Data table | `none` | `none` | `none` | Add comments, units, or implication columns instead of decoration. |
| Progress summary | `svg_diagram` or `icon` | `whole_body` | `body-fit` | Status/risk/action can use gates or lane markers. |
| Budget plan | `svg_diagram` | `whole_body` | `body-fit` | Bars or waterfall are better than generic finance imagery. |
| Schedule | `svg_diagram` | `whole_body` | `body-fit` | Milestones and owners should be structural. |
| Competitor comparison | `none` or `svg_diagram` | `whole_body` | `body-fit` | Matrix first; use SVG only for positioning or gap. |
| Proposal options | `image2_card_media` | `per_option` | `4:3` | Options can get separate visuals when the differences are concrete. |
| Action plan | `none` | `none` | `none` | Keep it editable and operational. |
| Training flow | `svg_diagram` | `whole_body` | `body-fit` | Modules, practice, and confirmation benefit from flow diagrams. |
| Decision log | `none` | `none` | `none` | Text and table clarity matter more than images. |
| SWOT / 2x2 | `svg_diagram` | `whole_body` | `body-fit` | Axes and quadrants are the visual. |
| Before / After | `svg_diagram` or `hybrid` | `whole_body` | `body-fit` | Use lanes, bridge, or arrow. The change should be visible. |
| Interview / voice | `photo_or_screenshot` | `real_asset` | `3:2` or `4:3` | Use real portrait or actual voice evidence when possible. |
| Selection / process rail | `svg_diagram` | `whole_body` | `body-fit` | Steps and gates should be explicit. |
| Chapter / TOC | `none` or `image2_body` | `whole_body` | `16:9` | Use image only if chapter mood matters. |
| Standard body canvas | `none` | `none` | `none` | Increase body size/density before adding visuals. |
| Left table / right visual | `image2_split` or `photo_or_screenshot` | `side_panel` | `4:3` | Right visual must correspond to the table. |
| Dense diagram / lecture | `svg_diagram` | `whole_body` | `body-fit` | Use SVG to preserve reading order. |
| Image2 body full | `image2_body` | `whole_body` | `body-fit` | Title/lead remain HTML. Image has minimal text. |
| Image2 body split | `image2_split` | `side_panel` | `4:3` | Text side carries facts; visual side makes them concrete. |
| Image2 body diagram | `image2_body` | `whole_body` | `body-fit` | Use when the body is an illustrative composite or complex conceptual scene. |
| Vertical lanes | `image2_card_media` or `icon` | `per_lane` | `4:3` | Each lane may have a distinct visual if the lanes represent different entities. |
| Pyramid / hierarchy | `svg_diagram` | `whole_body` | `body-fit` | Structure is the point. |
| Cycle loop | `svg_diagram` | `whole_body` | `body-fit` | Avoid repeated generic circular icons; label the cycle. |
| Positioning map | `svg_diagram` | `whole_body` | `body-fit` | Axes and relative position are core. |
| Dashboard summary | `none` or `photo_or_screenshot` | `side_panel` | `16:9` | Real dashboard screenshots are useful; generic charts are not. |
| Worksheet | `none` | `none` | `none` | Keep editable. |
| Icon grid | `icon` or `image2_card_media` | `per_cell` | `1:1` | Use icons for modules; use image2 when cells represent concrete scenes. |
| Case quote | `photo_or_screenshot` | `real_asset` | `3:2` | Real evidence beats generic imagery. |
| Risk heatmap | `svg_diagram` | `whole_body` | `body-fit` | Show impact, likelihood, controls, and review gate. |
| Value chain | `svg_diagram` | `whole_body` | `body-fit` | Sequential structure matters. |
| Fishbone / logic tree / dependency | `svg_diagram` | `whole_body` | `body-fit` | SVG-first. |
| Customer journey | `hybrid` | `whole_body` | `body-fit` | SVG stages plus optional small scenario images. |
| Business model canvas | `none` or `icon` | `per_field` | `1:1` | Use text fields first. |
| Roadmap flags | `svg_diagram` | `whole_body` | `body-fit` | Timeline and checkpoints are visual structure. |
| Checklist review | `none` | `none` | `none` | Operational clarity first. |
| SVG patterns PB-65 to PB-84 | `svg_diagram` | `whole_body` | `body-fit` | Use only when relationships are the message. Do not treat as decoration. |

## Kikai Final Deck Learning Map

| Slide | Final layout lesson | visual_policy | plain-format implication |
|---|---|---|---|
| P01 | Cover worked best with white base, large type, logo, side image, and orange vertical rule. | `image2_split` | Cover patterns should include optional side visual, not colored background. |
| P02 | Profile needed real photo and metrics, not abstract image. | `photo_or_screenshot` | Profile/case patterns should prefer real assets. |
| P03 | Three goal cards became stronger when each card had distinct image2 media. | `image2_card_media` | 3-card patterns need per-card image slots. |
| P04 | Commodity message needed structure more than image. | `svg_diagram` | Abstract shifts can use simple diagrams and strong text. |
| P05 | Two paths required clear comparison, not decorative circles. | `svg_diagram` | Compare patterns need explicit bridge/contrast marks. |
| P06 | Flat graph confused the message. | `svg_diagram` | Avoid meaningless graphs; show amplification logic directly. |
| P07 | Visual plus evidence strip helped explain the wall-breaking idea. | `image2_split` | Split proof patterns need visual + evidence strip. |
| P08 | Table looked bad when empty rows remained. | `none` | Table patterns need row-count fit rules and comment density. |
| P09 | Statement page worked without extra visuals. | `none` | Statement patterns can stay text-first if type is large. |
| P10 | Divider needed mood, but not repeated image. | `image2_body` | Divider images should be chapter-specific. |
| P11 | Prompt-to-product benefits from meaningful image. | `image2_split` | Process-to-output pages should show concrete workbench or UI. |
| P12 | Claim needed implementation criteria, not vague collage. | `svg_diagram` | Quote/claim pages need proof strips or criteria. |
| P13 | Product examples needed different visuals per item. | `image2_card_media` | Product cards require per-card images and aspect control. |
| P14 | Before/after table was enough when dense and aligned. | `none` | Tables can be strong if they carry implication. |
| P15 | Four capabilities improved with per-card image2. | `image2_card_media` | 4-card catalog needs a media variant. |
| P16 | Cases needed differentiated imagery and evidence. | `image2_card_media` | Case proof cards should not reuse images. |
| P17 | Reality check worked as structured board, not atmospheric image. | `svg_diagram` | Tension pages need logic structure. |
| P18 | Big numbers plus funnel worked. | `svg_diagram` | Stats pages need data hierarchy and attrition structure. |
| P19 | Card corner visuals should be item-specific. | `icon` | Corner icons are allowed only if per-card semantic. |
| P20 | Golden route is a roadmap/ladder, not generic image. | `svg_diagram` | Route pages should use steps and gates. |
| P21 | Problem board needs before/after capability contrast. | `svg_diagram` | Problem pages need no/yes or issue/solution structure. |
| P22 | App cards needed meaningful card-level visuals. | `image2_card_media` | App/catalog cards require per-item generated image/SVG. |
| P23 | Founder proof worked as timeline/proof panels. | `svg_diagram` | Origin stories need timeline or evidence panels. |
| P24 | Revenue proof is numbers-first. | `none` | Proof pages can stay numeric when density is high. |
| P25 | Objection handling needs clear question/answer structure. | `svg_diagram` | Objection pages should not rely on decorative image. |
| P26 | Community cases needed varied item images. | `image2_card_media` | Community proof should not reuse generic group visuals. |
| P27 | Support loop is structural. | `svg_diagram` | Support/learning systems should be loops. |
| P28 | Community section can use a meaningful generated scene. | `image2_split` | Purpose/community dividers can use image when concrete. |
| P29 | Coverage route is a staged system. | `svg_diagram` | Coverage pages need phase/route diagrams. |
| P30 | 5-in-1 package needed icons/SVG per component. | `svg_diagram` | Package systems should show component architecture. |
| P31 | Risk/security mark was too generic; quality gate needed clearer board. | `svg_diagram` | Risk pages need concrete failure/control/review diagram. |
| P32 | Pipeline roadmap worked as timeline. | `svg_diagram` | Future pages need now/next/later or roadmap bars. |
| P33 | Marketplace needed actual UI-like visual. | `photo_or_screenshot` | Product pages should show the product/interface. |
| P34 | Closing became best after removing scattered generic SVGs and keeping white base. | `none` or `svg_diagram` | Closing should prioritize message and CTA; no generic decoration. |

## Anti-Patterns From This Run

- Large red or Bordeaux backgrounds when the intended base is white.
- Reusing the same generated image across unrelated slides.
- Stretching images into the wrong aspect ratio.
- Generic graph SVGs as decoration.
- Generic security/shield SVGs when no security logic is being explained.
- Filling sparse pages with background texture instead of improving message density.
- Top-aligned body groups that ignore the title/lead/footer body zone.
