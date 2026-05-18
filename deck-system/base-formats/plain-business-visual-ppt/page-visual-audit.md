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
| PBV-00 | visual-policy-guide | svg+image2 | `body:svg:body-fit;support:image2:4:3` | pass | SVGを主構造、image2を補助具体例として使う指定で妥当。役割分担を明記済み。 |
| PB-00 | cover | image2 | `side-panel:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-01 | agenda | icon | `per_row:icon:1:1:count-5` | pass | アイコン差し込みが妥当。小型の単色線画として、セル/行/フィールドごとに個別指定済み。 |
| PB-02 | executive-summary | image2 | `card-1-top:image2:4:3;card-2-top:image2:4:3;card-3-top:image2:4:3` | fixed | 監査後の位置指定プロトタイプとして、3カードそれぞれの上部4:3メディア枠をHTML上に可視化し、insertPlanもtop指定へ修正済み。 |
| PB-03 | issue-direction | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-04 | 3c-analysis | image2 | `lane-1:image2:4:3;lane-2:image2:4:3;lane-3:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-05 | kpi-tree | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-06 | data-table | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-07 | progress-summary | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-08 | budget-plan | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-09 | schedule | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-10 | competitor-comparison | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-11 | proposal-options | image2 | `option-1:image2:4:3;option-2:image2:4:3;option-3:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-12 | action-plan | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-13 | training-flow | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-14 | decision-log | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-15 | appendix-table | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-16 | swot-2x2 | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-17 | before-after | svg+image2 | `body:svg:body-fit;support:image2:4:3` | pass | SVGを主構造、image2を補助具体例として使う指定で妥当。役割分担を明記済み。 |
| PB-18 | interview-voice | photo_or_screenshot | `real-asset:photo_or_screenshot:3:2` | pass | 実写真またはスクリーンショット指定が妥当。生成画像ではなく証跡性のある実素材を優先する。 |
| PB-19 | selection-process | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-20 | chapter-toc | image2 | `body:image2:16:9` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-21 | standard-body-canvas | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-22 | two-column-agenda | icon | `per_row:icon:1:1:count-6` | pass | アイコン差し込みが妥当。小型の単色線画として、セル/行/フィールドごとに個別指定済み。 |
| PB-23 | three-step-horizontal | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-24 | left-label-right-description | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-25 | requirements-stack | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-26 | hub-tree-diagram | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-27 | vs-comparison | svg+image2 | `body:svg:body-fit;support:image2:4:3` | pass | SVGを主構造、image2を補助具体例として使う指定で妥当。役割分担を明記済み。 |
| PB-28 | table-chart-commentary | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-29 | left-table-right-visual | image2 | `side-panel:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-30 | dense-diagram-lecture | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-31 | placeholderless-section | image2 | `body:image2:16:9` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-32 | image2-body-full | image2 | `body:image2:body-fit` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-33 | image2-body-split | image2 | `side-panel:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-34 | image2-body-diagram | image2 | `body:image2:body-fit` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-35 | cover-split | image2 | `side-panel:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-36 | cover-statement | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-37 | section-divider-number | image2 | `body:image2:16:9` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-38 | section-divider-toc | image2 | `body:image2:16:9` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-39 | vertical-four-lanes | image2 | `lane-1:image2:4:3;lane-2:image2:4:3;lane-3:image2:4:3;lane-4:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-40 | pyramid-hierarchy | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-41 | cycle-loop | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-42 | positioning-map | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-43 | dashboard-summary | photo_or_screenshot | `real-asset:photo_or_screenshot:16:9` | pass | 実写真またはスクリーンショット指定が妥当。生成画像ではなく証跡性のある実素材を優先する。 |
| PB-44 | swimlane-schedule | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-45 | worksheet-form | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-46 | funnel-conversion | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-47 | icon-grid | icon | `per_cell:icon:1:1:count-5` | pass | アイコン差し込みが妥当。小型の単色線画として、セル/行/フィールドごとに個別指定済み。 |
| PB-48 | case-quote | photo_or_screenshot | `real-asset:photo_or_screenshot:3:2` | pass | 実写真またはスクリーンショット指定が妥当。生成画像ではなく証跡性のある実素材を優先する。 |
| PB-49 | decision-tree | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-50 | evaluation-grid | image2 | `option-1:image2:4:3;option-2:image2:4:3;option-3:image2:4:3` | pass | image2差し込みが妥当。カード/レーン/本文/サイドパネル単位と縦横比を指定済み。 |
| PB-51 | risk-heatmap | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-52 | raci-matrix | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-53 | waterfall-bridge | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-54 | value-chain | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-55 | fishbone-cause | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-56 | logic-tree | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-57 | stakeholder-map | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-58 | customer-journey | svg+image2 | `body:svg:body-fit;support:image2:4:3` | pass | SVGを主構造、image2を補助具体例として使う指定で妥当。役割分担を明記済み。 |
| PB-59 | okr-alignment | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-60 | business-model-canvas | icon | `per_field:icon:1:1:count-9` | fixed | 監査で9枠キャンバス指定とHTMLセル数の不一致を検出。HTMLを9セルへ修正し、9個の単色アイコン指定に整合済み。 |
| PB-61 | cost-breakdown | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-62 | roadmap-flags | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-63 | scoring-matrix | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-64 | checklist-review | none | `none` | pass | 画像を入れない判断で妥当。密度は表、注釈、単位、コメント列、記入欄、または大きい文字で担保する。 |
| PB-65 | svg-hub-spoke | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-66 | svg-chevron-flow | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-67 | svg-cycle-loop | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-68 | svg-fishbone | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-69 | svg-decision-branch | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-70 | svg-callout-anatomy | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-71 | svg-roadmap-bars | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-72 | svg-layered-system | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-73 | svg-venn-overlap | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-74 | svg-concentric-rings | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-75 | svg-staircase-maturity | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-76 | svg-gap-bridge | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-77 | svg-org-chart | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-78 | svg-dependency-network | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-79 | svg-migration-matrix | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-80 | svg-iceberg | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-81 | svg-layer-stack | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-82 | svg-bowtie-risk | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-83 | svg-bubble-portfolio | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
| PB-84 | svg-stage-gate-board | svg | `body:svg:body-fit` | pass | SVG差し込みが妥当。関係、流れ、階層、軸、ゲート、分岐、原因など構造表現として指定済み。 |
