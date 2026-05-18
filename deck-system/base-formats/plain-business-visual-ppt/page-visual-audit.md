# Page Visual Audit

This audit covers every page in `plain-business-visual-ppt` after adding page-level image/SVG/icon/photo insertion contracts.

## Summary

- Audited pages: 86
- Result: pass after fixes
- Fixed during audit: PB-02, PB-60
- Required visual counts: svg+image2=4, image2=15, icon=4, svg=48, none=12, photo_or_screenshot=3
- Status counts: pass=84, fixed=2

## Criteria

- Every slide has a concrete visual requirement beyond pattern-level policy.
- Every insert plan names a slot and asset kind.
- Per-card, per-lane, per-option, per-cell, and per-field counts match the actual page structure.
- `none` pages are intentionally text/table/form pages and still carry a density instruction.
- Generated visuals are not reused generically and carry aspect-ratio constraints.

## Findings

| Slide | Pattern | Required | Insert plan | Status | Audit note |
|---|---|---|---|---|---|
| PBV-00 | visual-policy-guide | svg+image2 | `body-center:svg:body-fit;support-right:image2:4:3` | pass | SVGを主構造、image2を補助具体例として使う指定で妥当。役割分担を明記済み。 位置指定は body-center:svg:body-fit;support-right:image2:4:3 として明示。 |
| PB-00 | cover | image2 | `side-panel:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は side-panel:image2:4:3 として明示。 |
| PB-01 | agenda | icon | `row-1-left:icon:1:1;row-2-left:icon:1:1;row-3-left:icon:1:1;row-4-left:icon:1:1;row-5-left:icon:1:1` | pass | アイコン差し込みが妥当。小型の単色線画として、セル/行/フィールドごとに個別指定済み。 位置指定は row-1-left:icon:1:1;row-2-left:icon:1:1;row-3-left:icon:1:1;row-4-left:icon:1:1;row-5-left:icon:1:1 として明示。 |
| PB-02 | executive-summary | image2 | `card-1-top:image2:4:3;card-2-top:image2:4:3;card-3-top:image2:4:3` | fixed | 監査後の位置指定プロトタイプとして、3カードそれぞれの上部4:3メディア枠をHTML上に可視化し、insertPlanもtop指定へ修正済み。 位置指定は card-1-top:image2:4:3;card-2-top:image2:4:3;card-3-top:image2:4:3 として明示。 |
| PB-03 | issue-direction | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-04 | 3c-analysis | image2 | `lane-1-top:image2:4:3;lane-2-top:image2:4:3;lane-3-top:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は lane-1-top:image2:4:3;lane-2-top:image2:4:3;lane-3-top:image2:4:3 として明示。 |
| PB-05 | kpi-tree | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-06 | data-table | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-07 | progress-summary | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-08 | budget-plan | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-09 | schedule | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-10 | competitor-comparison | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-11 | proposal-options | image2 | `option-1-top:image2:4:3;option-2-top:image2:4:3;option-3-top:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は option-1-top:image2:4:3;option-2-top:image2:4:3;option-3-top:image2:4:3 として明示。 |
| PB-12 | action-plan | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-13 | training-flow | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-14 | decision-log | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-15 | appendix-table | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-16 | swot-2x2 | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-17 | before-after | svg+image2 | `body-center:svg:body-fit;support-right:image2:4:3` | pass | SVGを主構造、image2を補助具体例として使う指定で妥当。役割分担を明記済み。 位置指定は body-center:svg:body-fit;support-right:image2:4:3 として明示。 |
| PB-18 | interview-voice | photo_or_screenshot | `photo-frame:photo_or_screenshot:3:2` | pass | 実写真またはスクリーンショット指定が妥当。生成画像ではなく証跡性のある実素材を優先する。 位置指定は photo-frame:photo_or_screenshot:3:2 として明示。 |
| PB-19 | selection-process | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-20 | chapter-toc | image2 | `body-center:image2:16:9` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は body-center:image2:16:9 として明示。 |
| PB-21 | standard-body-canvas | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-22 | two-column-agenda | icon | `row-1-left:icon:1:1;row-2-left:icon:1:1;row-3-left:icon:1:1;row-4-left:icon:1:1;row-5-left:icon:1:1;row-6-left:icon:1:1` | pass | アイコン差し込みが妥当。小型の単色線画として、セル/行/フィールドごとに個別指定済み。 位置指定は row-1-left:icon:1:1;row-2-left:icon:1:1;row-3-left:icon:1:1;row-4-left:icon:1:1;row-5-left:icon:1:1;row-6-left:icon:1:1 として明示。 |
| PB-23 | three-step-horizontal | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-24 | left-label-right-description | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-25 | requirements-stack | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-26 | hub-tree-diagram | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-27 | vs-comparison | svg+image2 | `body-center:svg:body-fit;support-right:image2:4:3` | pass | SVGを主構造、image2を補助具体例として使う指定で妥当。役割分担を明記済み。 位置指定は body-center:svg:body-fit;support-right:image2:4:3 として明示。 |
| PB-28 | table-chart-commentary | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-29 | left-table-right-visual | image2 | `side-panel:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は side-panel:image2:4:3 として明示。 |
| PB-30 | dense-diagram-lecture | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-31 | placeholderless-section | image2 | `body-center:image2:16:9` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は body-center:image2:16:9 として明示。 |
| PB-32 | image2-body-full | image2 | `body-center:image2:body-fit` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は body-center:image2:body-fit として明示。 |
| PB-33 | image2-body-split | image2 | `side-panel:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は side-panel:image2:4:3 として明示。 |
| PB-34 | image2-body-diagram | image2 | `body-center:image2:body-fit` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は body-center:image2:body-fit として明示。 |
| PB-35 | cover-split | image2 | `side-panel:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は side-panel:image2:4:3 として明示。 |
| PB-36 | cover-statement | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-37 | section-divider-number | image2 | `body-center:image2:16:9` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は body-center:image2:16:9 として明示。 |
| PB-38 | section-divider-toc | image2 | `body-center:image2:16:9` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は body-center:image2:16:9 として明示。 |
| PB-39 | vertical-four-lanes | image2 | `lane-1-top:image2:4:3;lane-2-top:image2:4:3;lane-3-top:image2:4:3;lane-4-top:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は lane-1-top:image2:4:3;lane-2-top:image2:4:3;lane-3-top:image2:4:3;lane-4-top:image2:4:3 として明示。 |
| PB-40 | pyramid-hierarchy | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-41 | cycle-loop | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-42 | positioning-map | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-43 | dashboard-summary | photo_or_screenshot | `photo-frame:photo_or_screenshot:16:9` | pass | 実写真またはスクリーンショット指定が妥当。生成画像ではなく証跡性のある実素材を優先する。 位置指定は photo-frame:photo_or_screenshot:16:9 として明示。 |
| PB-44 | swimlane-schedule | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-45 | worksheet-form | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-46 | funnel-conversion | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-47 | icon-grid | icon | `cell-1-top:icon:1:1;cell-2-top:icon:1:1;cell-3-top:icon:1:1;cell-4-top:icon:1:1;cell-5-top:icon:1:1` | pass | アイコン差し込みが妥当。小型の単色線画として、セル/行/フィールドごとに個別指定済み。 位置指定は cell-1-top:icon:1:1;cell-2-top:icon:1:1;cell-3-top:icon:1:1;cell-4-top:icon:1:1;cell-5-top:icon:1:1 として明示。 |
| PB-48 | case-quote | photo_or_screenshot | `photo-frame:photo_or_screenshot:3:2` | pass | 実写真またはスクリーンショット指定が妥当。生成画像ではなく証跡性のある実素材を優先する。 位置指定は photo-frame:photo_or_screenshot:3:2 として明示。 |
| PB-49 | decision-tree | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-50 | evaluation-grid | image2 | `option-1-top:image2:4:3;option-2-top:image2:4:3;option-3-top:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 位置指定は option-1-top:image2:4:3;option-2-top:image2:4:3;option-3-top:image2:4:3 として明示。 |
| PB-51 | risk-heatmap | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-52 | raci-matrix | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-53 | waterfall-bridge | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-54 | value-chain | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-55 | fishbone-cause | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-56 | logic-tree | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-57 | stakeholder-map | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-58 | customer-journey | svg+image2 | `body-center:svg:body-fit;support-right:image2:4:3` | pass | SVGを主構造、image2を補助具体例として使う指定で妥当。役割分担を明記済み。 位置指定は body-center:svg:body-fit;support-right:image2:4:3 として明示。 |
| PB-59 | okr-alignment | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-60 | business-model-canvas | icon | `field-1-top-left:icon:1:1;field-2-top-left:icon:1:1;field-3-top-left:icon:1:1;field-4-top-left:icon:1:1;field-5-top-left:icon:1:1;field-6-top-left:icon:1:1;field-7-top-left:icon:1:1;field-8-top-left:icon:1:1;field-9-top-left:icon:1:1` | fixed | 監査で9枠キャンバス指定とHTMLセル数の不一致を検出。HTMLを9セルへ修正し、9個の単色アイコン指定に整合済み。 位置指定は field-1-top-left:icon:1:1;field-2-top-left:icon:1:1;field-3-top-left:icon:1:1;field-4-top-left:icon:1:1;field-5-top-left:icon:1:1;field-6-top-left:icon:1:1;field-7-top-left:icon:1:1;field-8-top-left:icon:1:1;field-9-top-left:icon:1:1 として明示。 |
| PB-61 | cost-breakdown | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-62 | roadmap-flags | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-63 | scoring-matrix | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-64 | checklist-review | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 位置指定は none として明示。 |
| PB-65 | svg-hub-spoke | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-66 | svg-chevron-flow | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-67 | svg-cycle-loop | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-68 | svg-fishbone | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-69 | svg-decision-branch | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-70 | svg-callout-anatomy | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-71 | svg-roadmap-bars | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-72 | svg-layered-system | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-73 | svg-venn-overlap | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-74 | svg-concentric-rings | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-75 | svg-staircase-maturity | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-76 | svg-gap-bridge | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-77 | svg-org-chart | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-78 | svg-dependency-network | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-79 | svg-migration-matrix | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-80 | svg-iceberg | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-81 | svg-layer-stack | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-82 | svg-bowtie-risk | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-83 | svg-bubble-portfolio | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
| PB-84 | svg-stage-gate-board | svg | `body-center:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 位置指定は body-center:svg:body-fit として明示。 |
