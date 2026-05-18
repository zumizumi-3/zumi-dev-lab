# Page Visual Slots

This file is the page-by-page visual insertion contract for `plain-business-visual-ppt`. It is intentionally concrete: each paper/slide declares whether to insert image2, SVG, icons, real assets, or no visual, and names the exact page element where the asset belongs.

The matching HTML section carries `data-visual-required`, `data-visual-insert`, and `data-visual-spec`. The JSON version is `page-visual-slots.json`.

## Slot Table

| Slide | Pattern | Required | Insert plan | Concrete brief |
|---|---|---|---|---|
| PBV-00 | visual-policy-guide | icon+svg | `policy-card-1-corner:icon:1:1;policy-card-2-corner:icon:1:1;policy-card-3-corner:icon:1:1;policy-card-4-corner:icon:1:1;policy-card-4-sparkline-bottom:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-00 | cover | icon | `metric-1-corner:icon:1:1;metric-2-corner:icon:1:1;metric-3-corner:icon:1:1;metric-4-corner:icon:1:1` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-01 | agenda | icon | `row-1-left:icon:1:1;row-2-left:icon:1:1;row-3-left:icon:1:1;row-4-left:icon:1:1;row-5-left:icon:1:1` | 各行の目的に合う単色線画アイコンを入れる。アイコンは補助で、行テキストを主役にする。 |
| PB-02 | executive-summary | image2 | `card-1-media-top:image2:4:3;card-2-media-top:image2:4:3;card-3-media-top:image2:4:3` | ページ内の既存構造に合わせ、3個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-03 | issue-direction | icon+svg | `lane-1-corner:icon:1:1;lane-2-corner:icon:1:1;lane-3-corner:icon:1:1;lane-flow-center:svg:wide` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-04 | 3c-analysis | image2 | `box-1-media-top:image2:4:3;box-2-media-top:image2:4:3;box-3-media-top:image2:4:3` | ページ内の既存構造に合わせ、3個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-05 | kpi-tree | icon | `tree-node-1-left:icon:1:1;tree-node-2-left:icon:1:1;tree-node-3-left:icon:1:1;tree-node-4-left:icon:1:1;tree-node-5-left:icon:1:1;tree-node-6-left:icon:1:1;tree-node-7-left:icon:1:1` | ページ内の既存構造に合わせ、7個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-06 | data-table | none | `none` | 画像は入れない。コメント列、単位、差分、示唆で密度を上げ、空行を残さない。 |
| PB-07 | progress-summary | icon+svg | `table-row-1-status-icon:icon:1:1;table-row-2-status-icon:icon:1:1;table-row-3-status-icon:icon:1:1;table-risk-note:svg:wide` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-08 | budget-plan | svg | `metric-1-sparkline-bottom:svg:wide;metric-2-sparkline-bottom:svg:wide;metric-3-sparkline-bottom:svg:wide;metric-4-sparkline-bottom:svg:wide` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-09 | schedule | icon | `timeline-1-top:icon:1:1;timeline-2-top:icon:1:1;timeline-3-top:icon:1:1;timeline-4-top:icon:1:1;timeline-5-top:icon:1:1;timeline-6-top:icon:1:1;box-1-corner:icon:1:1;box-2-corner:icon:1:1;box-3-corner:icon:1:1` | ページ内の既存構造に合わせ、9個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-10 | competitor-comparison | icon+svg | `table-col-2-header:icon:1:1;table-col-3-header:icon:1:1;table-col-4-header:icon:1:1;table-highlight-cell:svg:wide` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-11 | proposal-options | image2 | `lane-1-media-top:image2:4:3;lane-2-media-top:image2:4:3;lane-3-media-top:image2:4:3` | ページ内の既存構造に合わせ、3個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-12 | action-plan | none | `none` | 画像は入れない。担当、期限、依存関係、判断事項を表で密に見せる。 |
| PB-13 | training-flow | icon | `process-step-1-top:icon:1:1;process-step-2-top:icon:1:1;process-step-3-top:icon:1:1;process-step-4-top:icon:1:1;process-step-5-top:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-14 | decision-log | none | `none` | 画像は入れない。決定、未決、責任者、期限を編集可能な表で保持する。 |
| PB-15 | appendix-table | none | `none` | 画像は入れない。参照用の表密度を優先する。 |
| PB-16 | swot-2x2 | icon | `box-1-corner:icon:1:1;box-2-corner:icon:1:1;box-3-corner:icon:1:1;box-4-corner:icon:1:1` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-17 | before-after | icon+svg | `lane-1-corner:icon:1:1;lane-2-corner:icon:1:1;lane-3-corner:icon:1:1;transition-bridge-center:svg:wide` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-18 | interview-voice | photo_or_screenshot+icon | `metric-1-photo-corner:photo_or_screenshot:1:1;box-1-quote-icon:icon:1:1;box-2-corner:icon:1:1` | ページ内の既存構造に合わせ、3個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-19 | selection-process | icon | `process-step-1-top:icon:1:1;process-step-2-top:icon:1:1;process-step-3-top:icon:1:1;process-step-4-top:icon:1:1;process-step-5-top:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-20 | chapter-toc | icon+image2 | `toc-row-1-left:icon:1:1;toc-row-2-left:icon:1:1;toc-row-3-left:icon:1:1;toc-row-4-left:icon:1:1;chapter-key-visual-right:image2:4:3` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-21 | standard-body-canvas | none | `none` | 原則画像なし。必要なら次工程でimage2_bodyまたはSVG構図へ差し替える。 |
| PB-22 | two-column-agenda | icon | `row-1-left:icon:1:1;row-2-left:icon:1:1;row-3-left:icon:1:1;row-4-left:icon:1:1;row-5-left:icon:1:1;row-6-left:icon:1:1` | 左右各行に小さな単色アイコンを入れる。並行トピックの違いを示す。 |
| PB-23 | three-step-horizontal | icon+svg | `step-1-corner:icon:1:1;step-2-corner:icon:1:1;step-3-corner:icon:1:1;step-flow-arrow:svg:wide;note-gate-icon:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-24 | left-label-right-description | none | `none` | 画像は入れない。左ラベルと右説明の階層を大きい文字で見せる。 |
| PB-25 | requirements-stack | none | `none` | 画像は入れない。要件の積み上がりをテキストブロックで明確にする。 |
| PB-26 | hub-tree-diagram | icon+svg | `tree-node-1-left:icon:1:1;tree-node-2-left:icon:1:1;tree-node-3-left:icon:1:1;tree-node-4-left:icon:1:1;hub-center-pin:svg:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-27 | vs-comparison | icon+svg | `lane-1-corner:icon:1:1;lane-2-corner:icon:1:1;vs-divider:svg:wide` | ページ内の既存構造に合わせ、3個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-28 | table-chart-commentary | icon+svg | `table-row-1-status-icon:icon:1:1;table-row-2-status-icon:icon:1:1;table-row-3-status-icon:icon:1:1;commentary-visual-frame:svg:wide` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-29 | left-table-right-visual | icon+image2 | `table-row-1-status-icon:icon:1:1;table-row-2-status-icon:icon:1:1;table-row-3-status-icon:icon:1:1;table-row-4-status-icon:icon:1:1;right-evidence-frame:image2:4:3` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-30 | dense-diagram-lecture | icon+svg | `diagram-node-1-corner:icon:1:1;diagram-node-2-corner:icon:1:1;diagram-node-3-corner:icon:1:1;diagram-node-4-corner:icon:1:1;diagram-flow-arrow:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-31 | placeholderless-section | icon+image2 | `metric-1-corner:icon:1:1;metric-2-corner:icon:1:1;metric-3-corner:icon:1:1;metric-4-corner:icon:1:1;section-theme-strip:image2:16:9` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-32 | image2-body-full | image2 | `image2-frame-main:image2:body-fit` | ページ内の既存構造に合わせ、1個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-33 | image2-body-split | icon+image2 | `stack-row-1-left:icon:1:1;stack-row-2-left:icon:1:1;stack-row-3-left:icon:1:1;right-image2-frame:image2:4:3` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-34 | image2-body-diagram | image2+svg | `image2-diagram-frame:image2:body-fit;diagram-center-node:svg:1:1` | ページ内の既存構造に合わせ、2個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-35 | cover-split | icon+image2 | `cover-panel-1-corner:icon:1:1;cover-panel-2-corner:icon:1:1;cover-support-visual:image2:4:3` | ページ内の既存構造に合わせ、3個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-36 | cover-statement | none | `none` | 画像は入れない。大きな文字と余白で主張を見せる。 |
| PB-37 | section-divider-number | icon+image2 | `chapter-mark-center:icon:1:1;divider-panel-corner:icon:1:1;divider-theme-strip:image2:16:9` | ページ内の既存構造に合わせ、3個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-38 | section-divider-toc | icon+image2 | `toc-row-1-left:icon:1:1;toc-row-2-left:icon:1:1;toc-row-3-left:icon:1:1;divider-preview-strip:image2:16:9` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-39 | vertical-four-lanes | icon | `vertical-lane-1-header-icon:icon:1:1;vertical-lane-2-header-icon:icon:1:1;vertical-lane-3-header-icon:icon:1:1;vertical-lane-4-header-icon:icon:1:1` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-40 | pyramid-hierarchy | icon+svg | `pyramid-row-1-corner:icon:1:1;pyramid-row-2-corner:icon:1:1;pyramid-row-3-corner:icon:1:1;pyramid-row-4-corner:icon:1:1;hierarchy-arrow:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-41 | cycle-loop | icon+svg | `cycle-node-1-top:icon:1:1;cycle-node-2-top:icon:1:1;cycle-node-3-top:icon:1:1;cycle-node-4-top:icon:1:1;cycle-return-arrow:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-42 | positioning-map | icon+svg | `map-point-1-pin:icon:1:1;map-point-2-pin:icon:1:1;map-point-3-pin:icon:1:1;map-point-4-pin:icon:1:1;map-axis-labels:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-43 | dashboard-summary | icon+photo_or_screenshot | `metric-1-corner:icon:1:1;metric-2-corner:icon:1:1;metric-3-corner:icon:1:1;box-1-corner:icon:1:1;box-2-corner:icon:1:1;dashboard-screenshot-frame:photo_or_screenshot:16:9` | ページ内の既存構造に合わせ、6個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-44 | swimlane-schedule | icon+svg | `swimlane-cell-7-pin:icon:1:1;swimlane-cell-8-pin:icon:1:1;swimlane-cell-13-pin:icon:1:1;swimlane-cell-19-pin:icon:1:1;swimlane-dependency-arrow:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-45 | worksheet-form | none | `none` | 画像は入れない。記入欄として使える編集性を守る。 |
| PB-46 | funnel-conversion | icon+svg | `funnel-step-1-left:icon:1:1;funnel-step-2-left:icon:1:1;funnel-step-3-left:icon:1:1;funnel-step-4-left:icon:1:1;funnel-dropoff-callout:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-47 | icon-grid | icon | `cell-1-top:icon:1:1;cell-2-top:icon:1:1;cell-3-top:icon:1:1;cell-4-top:icon:1:1;cell-5-top:icon:1:1` | 各セルに個別の単色アイコンを入れる。セルごとに意味が違うため同じアイコンを繰り返さない。 |
| PB-48 | case-quote | photo_or_screenshot+icon | `case-photo-left:photo_or_screenshot:3:2;quote-panel-corner:icon:1:1` | ページ内の既存構造に合わせ、2個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-49 | decision-tree | icon+svg | `tree-node-1-left:icon:1:1;tree-node-2-left:icon:1:1;tree-node-3-left:icon:1:1;tree-node-4-left:icon:1:1;tree-node-5-left:icon:1:1;tree-node-6-left:icon:1:1;decision-branch-arrow:svg:wide` | ページ内の既存構造に合わせ、7個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-50 | evaluation-grid | image2+icon | `eval-card-1-media-top:image2:4:3;eval-card-2-media-top:image2:4:3;eval-card-3-media-top:image2:4:3;eval-card-4-corner:icon:1:1;eval-card-5-corner:icon:1:1;eval-card-6-corner:icon:1:1` | ページ内の既存構造に合わせ、6個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-51 | risk-heatmap | icon+svg | `heat-cell-4-priority:icon:1:1;heat-cell-7-action:icon:1:1;heat-cell-10-watch:icon:1:1;heatmap-axis-cross:svg:wide` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-52 | raci-matrix | none | `none` | 画像は入れない。責任分担の表を読みやすく整える。 |
| PB-53 | waterfall-bridge | icon+svg | `waterfall-step-1-top:icon:1:1;waterfall-step-2-top:icon:1:1;waterfall-step-3-top:icon:1:1;waterfall-step-4-top:icon:1:1;waterfall-step-5-top:icon:1:1;waterfall-bridge-line:svg:wide` | ページ内の既存構造に合わせ、6個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-54 | value-chain | icon | `chain-step-1-top:icon:1:1;chain-step-2-top:icon:1:1;chain-step-3-top:icon:1:1;chain-step-4-top:icon:1:1;chain-step-5-top:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-55 | fishbone-cause | icon | `fish-cause-1-corner:icon:1:1;fish-cause-2-corner:icon:1:1;fish-cause-3-corner:icon:1:1;fish-cause-4-corner:icon:1:1;fish-head-corner:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-56 | logic-tree | icon | `tree-node-1-left:icon:1:1;tree-node-2-left:icon:1:1;tree-node-3-left:icon:1:1;tree-node-4-left:icon:1:1;tree-node-5-left:icon:1:1;tree-node-6-left:icon:1:1;tree-node-7-left:icon:1:1` | ページ内の既存構造に合わせ、7個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-57 | stakeholder-map | icon+svg | `tree-node-1-left:icon:1:1;tree-node-2-left:icon:1:1;tree-node-3-left:icon:1:1;tree-node-4-left:icon:1:1;stakeholder-center-pin:svg:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-58 | customer-journey | icon+svg | `journey-step-1-top:icon:1:1;journey-step-2-top:icon:1:1;journey-step-3-top:icon:1:1;journey-step-4-top:icon:1:1;journey-step-5-top:icon:1:1;journey-emotion-line:svg:wide` | ページ内の既存構造に合わせ、6個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-59 | okr-alignment | icon+svg | `tree-node-1-left:icon:1:1;tree-node-2-left:icon:1:1;tree-node-3-left:icon:1:1;tree-node-4-left:icon:1:1;tree-node-5-left:icon:1:1;okr-alignment-arrow:svg:wide` | ページ内の既存構造に合わせ、6個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-60 | business-model-canvas | icon | `field-1-top-left:icon:1:1;field-2-top-left:icon:1:1;field-3-top-left:icon:1:1;field-4-top-left:icon:1:1;field-5-top-left:icon:1:1;field-6-top-left:icon:1:1;field-7-top-left:icon:1:1;field-8-top-left:icon:1:1;field-9-top-left:icon:1:1` | 各フィールドに小型アイコンを入れる。キャンバスの編集性を優先し、画像化しない。 |
| PB-61 | cost-breakdown | icon | `cost-row-1-left:icon:1:1;cost-row-2-left:icon:1:1;cost-row-3-left:icon:1:1;cost-row-4-left:icon:1:1;cost-row-5-left:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-62 | roadmap-flags | icon | `roadmap-flag-1-top:icon:1:1;roadmap-flag-2-top:icon:1:1;roadmap-flag-3-top:icon:1:1;roadmap-flag-4-top:icon:1:1;roadmap-flag-5-top:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-63 | scoring-matrix | none | `none` | 画像は入れない。採点表、重み、コメントを優先する。 |
| PB-64 | checklist-review | none | `none` | 画像は入れない。チェック項目と判定理由を大きめの文字で示す。 |
| PB-65 | svg-hub-spoke | svg+icon | `svg-center-node:svg:1:1;svg-spoke-1:icon:1:1;svg-spoke-2:icon:1:1;svg-spoke-3:icon:1:1;svg-spoke-4:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-66 | svg-chevron-flow | svg | `svg-chevron-1:svg:wide;svg-chevron-2:svg:wide;svg-chevron-3:svg:wide;svg-chevron-4:svg:wide` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-67 | svg-cycle-loop | icon+svg | `svg-cycle-node-1:icon:1:1;svg-cycle-node-2:icon:1:1;svg-cycle-node-3:icon:1:1;svg-cycle-node-4:icon:1:1;svg-cycle-return-arrow:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-68 | svg-fishbone | icon | `svg-effect-head:icon:1:1;svg-rib-1:icon:1:1;svg-rib-2:icon:1:1;svg-rib-3:icon:1:1;svg-rib-4:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-69 | svg-decision-branch | icon+svg | `svg-decision-root:icon:1:1;svg-branch-yes:svg:wide;svg-branch-no:svg:wide;svg-outcome-1:icon:1:1;svg-outcome-2:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-70 | svg-callout-anatomy | icon | `svg-core-object:icon:1:1;svg-callout-1:icon:1:1;svg-callout-2:icon:1:1;svg-callout-3:icon:1:1;svg-callout-4:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-71 | svg-roadmap-bars | svg | `svg-roadmap-bar-1:svg:wide;svg-roadmap-bar-2:svg:wide;svg-roadmap-bar-3:svg:wide;svg-roadmap-bar-4:svg:wide` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-72 | svg-layered-system | svg+icon | `svg-layer-1:svg:wide;svg-layer-2:svg:wide;svg-layer-3:svg:wide;svg-layer-4:svg:wide;svg-interface-right:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-73 | svg-venn-overlap | svg+icon | `svg-circle-1:svg:1:1;svg-circle-2:svg:1:1;svg-overlap:icon:1:1` | ページ内の既存構造に合わせ、3個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-74 | svg-concentric-rings | icon+svg | `svg-core:icon:1:1;svg-ring-1:svg:1:1;svg-ring-2:svg:1:1;svg-ring-3:svg:1:1` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-75 | svg-staircase-maturity | icon+svg | `svg-level-1:icon:1:1;svg-level-2:icon:1:1;svg-level-3:icon:1:1;svg-level-4:icon:1:1;svg-growth-arrow:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-76 | svg-gap-bridge | icon | `svg-as-is:icon:1:1;svg-bridge-1:icon:1:1;svg-bridge-2:icon:1:1;svg-bridge-3:icon:1:1;svg-to-be:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-77 | svg-org-chart | icon+svg | `svg-owner:icon:1:1;svg-team-1:icon:1:1;svg-team-2:icon:1:1;svg-team-3:icon:1:1;svg-member-row:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-78 | svg-dependency-network | icon | `svg-center-node:icon:1:1;svg-dependency-1:icon:1:1;svg-dependency-2:icon:1:1;svg-dependency-3:icon:1:1;svg-dependency-4:icon:1:1` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-79 | svg-migration-matrix | svg+icon | `svg-axis-x:svg:wide;svg-axis-y:svg:wide;svg-current:icon:1:1;svg-target:icon:1:1;svg-move-arrow:svg:wide` | ページ内の既存構造に合わせ、5個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-80 | svg-iceberg | icon+svg | `svg-visible-tip:icon:1:1;svg-waterline:svg:wide;svg-hidden-base:icon:1:1` | ページ内の既存構造に合わせ、3個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-81 | svg-layer-stack | svg+icon | `svg-layer-bottom:svg:wide;svg-layer-middle:svg:wide;svg-layer-top:svg:wide;svg-outcome-callout:icon:1:1` | ページ内の既存構造に合わせ、4個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-82 | svg-bowtie-risk | icon | `svg-risk-event:icon:1:1;svg-cause-1:icon:1:1;svg-cause-2:icon:1:1;svg-cause-3:icon:1:1;svg-impact-1:icon:1:1;svg-impact-2:icon:1:1;svg-impact-3:icon:1:1` | ページ内の既存構造に合わせ、7個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-83 | svg-bubble-portfolio | svg+icon | `svg-axis-x:svg:wide;svg-axis-y:svg:wide;svg-bubble-1:icon:1:1;svg-bubble-2:icon:1:1;svg-bubble-3:icon:1:1;svg-bubble-4:icon:1:1` | ページ内の既存構造に合わせ、6個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |
| PB-84 | svg-stage-gate-board | svg+icon | `svg-gate-1:svg:wide;svg-gate-2:svg:wide;svg-gate-3:svg:wide;svg-gate-4:svg:wide;svg-card-1:icon:1:1;svg-card-2:icon:1:1;svg-card-3:icon:1:1;svg-card-4:icon:1:1;svg-card-5:icon:1:1;svg-card-6:icon:1:1` | ページ内の既存構造に合わせ、10個の細粒度スロットへ分けて差し込む。body全体・カード全体の指定は禁止。 |

## Enforcement Rules

- Do not use body-wide or card-wide slots unless the page is explicitly a single generated image frame.
- For card-like pages, name the internal target: `*-media-top`, `*-corner`, `*-sparkline-bottom`, or another element-level slot.
- For SVG pages, specify diagram parts: center node, branch, axis, ring, gate, callout, level, or dependency.
- For table pages, target rows, columns, commentary frames, or mini-chart locations. Do not convert the whole table to an image.
- `none` pages still need density work: comments, units, evidence rows, annotations, or larger type.
