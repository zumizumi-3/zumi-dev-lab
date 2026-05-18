# Page Visual Audit

This audit covers every page in `plain-business-visual-ppt` after a rendered, page-by-page review. The previous pass removed the broadest slots, but too many instructions still read like ordinal placeholders. This pass rewrites them as semantic page-element slots.

## Summary

- Audited pages: 86
- Visual pages: 74
- No-visual pages: 12
- Required visual counts: icon+svg=27, icon=21, image2=4, none=12, svg=3, photo_or_screenshot+icon=2, icon+image2=7, image2+svg=1, icon+photo_or_screenshot=1, image2+icon=1, svg+icon=7
- Status counts: reviewed=74, intentional-none=12
- Method: Rendered all 86 slides into contact sheets, reviewed each page visually, then rewrote broad/ordinal slot names into semantic page-element slots.

## Criteria

- Every visual slide names the target page element and what that element means.
- Card-like pages target card-internal media/icon/sparkline slots, not the whole card.
- SVG pages identify diagram parts such as nodes, branches, axes, rings, gates, and callouts.
- Table pages target rows, columns, commentary frames, or mini-chart positions.
- Image2 body-frame pages are treated as exceptions and must keep title/lead text editable in HTML.
- `none` pages remain intentional, not forgotten.

## Findings

| Slide | Pattern | Required | Insert plan | Status | Audit note |
|---|---|---|---|---|---|
| PBV-00 | visual-policy-guide | icon+svg | `policy-card-1-visual-decision-corner:icon:1:1;policy-card-2-type-scale-corner:icon:1:1;policy-card-3-color-policy-corner:icon:1:1;policy-card-4-density-policy-corner:icon:1:1;policy-card-4-density-sparkline-bottom:svg:wide` | reviewed | 表紙的な説明ページだが、ボディ全体に画像を敷かず、visual/type/color/densityの各カード単位に分解した。 |
| PB-00 | cover | icon | `metric-1-pattern-count-corner:icon:1:1;metric-2-lessons-count-corner:icon:1:1;metric-3-canvas-ratio-corner:icon:1:1;metric-4-mode-label-corner:icon:1:1` | reviewed | カバーの主役はタイトルなので、背景画像ではなく下部メトリクスへの意味づけに限定した。 |
| PB-01 | agenda | icon | `row-1-objective-left:icon:1:1;row-2-issues-left:icon:1:1;row-3-discussion-left:icon:1:1;row-4-decision-left:icon:1:1;row-5-next-action-left:icon:1:1` | reviewed | アジェンダは行そのものが構造なので、行別の読解補助に絞った。 |
| PB-02 | executive-summary | image2 | `card-1-conclusion-media-top:image2:4:3;card-2-evidence-media-top:image2:4:3;card-3-next-action-media-top:image2:4:3` | reviewed | 単なるcard-1ではなく、判断材料の役割別に画像を分ける。3枚を同じ絵にしない。 |
| PB-03 | issue-direction | icon+svg | `lane-1-symptom-corner:icon:1:1;lane-2-cause-corner:icon:1:1;lane-3-response-corner:icon:1:1;symptom-cause-response-flow-arrow:svg:wide` | reviewed | 3レーンのカード装飾ではなく、問題解決の読み順を示す補助にした。 |
| PB-04 | 3c-analysis | image2 | `box-1-customer-media-top:image2:4:3;box-2-competitor-media-top:image2:4:3;box-3-company-media-top:image2:4:3` | reviewed | 3Cは3つの対象が違うため、同じ画像の使い回しを禁止し、各ボックス内メディアに限定した。 |
| PB-05 | kpi-tree | icon | `tree-node-1-kgi-left:icon:1:1;tree-node-2-kpi-one-left:icon:1:1;tree-node-3-kpi-two-left:icon:1:1;tree-node-4-kpi-three-left:icon:1:1;tree-node-5-action-one-left:icon:1:1;tree-node-6-action-two-left:icon:1:1;tree-node-7-action-three-left:icon:1:1` | reviewed | ツリー全体を画像化せず、既存のHTMLノードごとに意味を付ける。 |
| PB-06 | data-table | none | `none` | intentional-none | 表を画像化すると編集性が落ちるため、コメント列を主役にする。 |
| PB-07 | progress-summary | icon+svg | `table-row-1-progress-status-icon:icon:1:1;table-row-2-risk-status-icon:icon:1:1;table-row-3-next-action-status-icon:icon:1:1;table-risk-next-action-note:svg:wide` | reviewed | 表全体ではなく、判断に必要な行末ステータスと右側の解釈枠だけを視覚化する。 |
| PB-08 | budget-plan | svg | `metric-1-budget-sparkline-bottom:svg:wide;metric-2-used-sparkline-bottom:svg:wide;metric-3-variance-sparkline-bottom:svg:wide;metric-4-roi-sparkline-bottom:svg:wide` | reviewed | 財務ページは汎用グラフ画像ではなく、各指標カードの下に小さく補助線を置く。 |
| PB-09 | schedule | icon | `timeline-1-week-one-top:icon:1:1;timeline-2-week-two-top:icon:1:1;timeline-3-week-three-top:icon:1:1;timeline-4-week-four-top:icon:1:1;timeline-5-week-five-top:icon:1:1;timeline-6-week-six-top:icon:1:1;box-1-decision-corner:icon:1:1;box-2-risk-corner:icon:1:1;box-3-next-corner:icon:1:1` | reviewed | タイムライン本体と下段注記を混ぜず、週別・判断別の2階層で指定した。 |
| PB-10 | competitor-comparison | icon+svg | `table-col-2-self-header-icon:icon:1:1;table-col-3-competitor-a-header-icon:icon:1:1;table-col-4-competitor-b-header-icon:icon:1:1;table-strength-highlight-cell:svg:wide` | reviewed | 比較表は表のまま残し、列見出しと示唆枠だけを補助する。 |
| PB-11 | proposal-options | image2 | `lane-1-plan-a-media-top:image2:4:3;lane-2-plan-b-media-top:image2:4:3;lane-3-plan-c-media-top:image2:4:3` | reviewed | 提案比較は各案の差が重要なので、選択肢ごとに別画像を必須にした。 |
| PB-12 | action-plan | none | `none` | intentional-none | アクション表は運用資料なので、視覚装飾より編集性を優先する。 |
| PB-13 | training-flow | icon | `process-step-1-objective-top:icon:1:1;process-step-2-lecture-top:icon:1:1;process-step-3-practice-top:icon:1:1;process-step-4-review-top:icon:1:1;process-step-5-confirm-top:icon:1:1` | reviewed | 研修の流れは工程ごとの役割が違うため、ステップ別アイコンにした。 |
| PB-14 | decision-log | none | `none` | intentional-none | 議事録ページは後から更新されるため、HTML表を維持する。 |
| PB-15 | appendix-table | none | `none` | intentional-none | 付録テーブルは参照性と編集性が最優先。 |
| PB-16 | swot-2x2 | icon | `box-1-strength-corner:icon:1:1;box-2-weakness-corner:icon:1:1;box-3-opportunity-corner:icon:1:1;box-4-threat-corner:icon:1:1` | reviewed | 2x2全体を飾らず、象限ごとの意味づけだけを補助する。 |
| PB-17 | before-after | icon+svg | `lane-1-before-corner:icon:1:1;lane-2-change-corner:icon:1:1;lane-3-after-corner:icon:1:1;before-change-after-bridge:svg:wide` | reviewed | Before/Afterは変化の理由が主役なので、橋渡しSVGを1つだけ置く。 |
| PB-18 | interview-voice | photo_or_screenshot+icon | `metric-1-person-photo-corner:photo_or_screenshot:1:1;box-1-voice-quote-icon:icon:1:1;box-2-implication-corner:icon:1:1` | reviewed | 人物・声・示唆を混ぜず、実素材が入る場所を左カードに限定した。 |
| PB-19 | selection-process | icon | `process-step-1-entry-top:icon:1:1;process-step-2-review-top:icon:1:1;process-step-3-interview-top:icon:1:1;process-step-4-decision-top:icon:1:1;process-step-5-start-top:icon:1:1` | reviewed | 選考プロセスは順番とゲートが重要なので、段階別に指定した。 |
| PB-20 | chapter-toc | icon+image2 | `toc-row-1-issue-map-left:icon:1:1;toc-row-2-comparison-left:icon:1:1;toc-row-3-action-plan-left:icon:1:1;toc-row-4-decision-left:icon:1:1;chapter-key-visual-right:image2:4:3` | reviewed | 章扉は小目次とキービジュアルの2要素に分ける。 |
| PB-21 | standard-body-canvas | none | `none` | intentional-none | 上詰め問題の基準ページなので、視覚追加よりボディ位置を確認する。 |
| PB-22 | two-column-agenda | icon | `row-1-search-left:icon:1:1;row-2-organize-left:icon:1:1;row-3-validate-left:icon:1:1;row-4-share-left:icon:1:1;row-5-agree-left:icon:1:1;row-6-next-left:icon:1:1` | reviewed | 左右列の粒度を揃えるため、全6行を同じルールで指定した。 |
| PB-23 | three-step-horizontal | icon+svg | `step-1-research-corner:icon:1:1;step-2-design-corner:icon:1:1;step-3-run-corner:icon:1:1;three-step-flow-arrow:svg:wide;note-gate-icon:icon:1:1` | reviewed | 3ステップ全体を画像化せず、カード別アイコンと下部矢印で十分にする。 |
| PB-24 | left-label-right-description | none | `none` | intentional-none | 用語説明ページはアイコンよりラベル幅と本文密度が重要。 |
| PB-25 | requirements-stack | none | `none` | intentional-none | 依頼事項は編集される前提なので、テキスト構造を優先する。 |
| PB-26 | hub-tree-diagram | icon+svg | `tree-node-1-background-left:icon:1:1;tree-node-2-issue-left:icon:1:1;tree-node-3-solution-left:icon:1:1;tree-node-4-impact-left:icon:1:1;hub-center-message-pin:svg:1:1` | reviewed | ハブ型は中央と周辺の関係が主役なので、全体画像ではなくノード別指定にする。 |
| PB-27 | vs-comparison | icon+svg | `lane-1-current-plan-corner:icon:1:1;lane-2-new-plan-corner:icon:1:1;vs-divider-contrast-line:svg:wide` | reviewed | 対立軸は中央区切りと左右レーンで表現する。 |
| PB-28 | table-chart-commentary | icon+svg | `table-row-1-positive-status-icon:icon:1:1;table-row-2-negative-status-icon:icon:1:1;table-row-3-neutral-status-icon:icon:1:1;commentary-visual-interpretation-frame:svg:wide` | reviewed | 右側の余白を画像で埋めず、解釈枠として機能するSVGだけを指定する。 |
| PB-29 | left-table-right-visual | icon+image2 | `table-row-1-priority-status-icon:icon:1:1;table-row-2-text-body-status-icon:icon:1:1;table-row-3-spec-status-icon:icon:1:1;table-row-4-publication-status-icon:icon:1:1;right-evidence-screenshot-frame:image2:4:3` | reviewed | 左右分割は表と証拠画像の役割を分け、右枠だけを画像化する。 |
| PB-30 | dense-diagram-lecture | icon+svg | `diagram-node-1-input-corner:icon:1:1;diagram-node-2-process-corner:icon:1:1;diagram-node-3-output-corner:icon:1:1;diagram-node-4-learning-corner:icon:1:1;diagram-reading-order-arrow:svg:wide` | reviewed | 講義型図解は情報密度を保ちつつ、順番だけを視覚補助する。 |
| PB-31 | placeholderless-section | icon+image2 | `metric-1-rule-title-corner:icon:1:1;metric-2-rule-lead-corner:icon:1:1;metric-3-rule-body-corner:icon:1:1;metric-4-rule-footer-corner:icon:1:1;section-title-support-strip:image2:16:9` | reviewed | タイトル構造の説明なので、カードごとの意味を示す小アイコンに寄せる。 |
| PB-32 | image2-body-full | image2 | `image2-frame-main-composite-body:image2:body-fit` | reviewed | body-fitは例外。画像化する範囲が本文フレームだけであることをスロット名に明記した。 |
| PB-33 | image2-body-split | icon+image2 | `stack-row-1-fact-left:icon:1:1;stack-row-2-scene-left:icon:1:1;stack-row-3-guardrail-left:icon:1:1;right-image2-scene-frame:image2:4:3` | reviewed | テキスト側と画像側を分け、右フレームだけを生成画像化する。 |
| PB-34 | image2-body-diagram | image2+svg | `image2-diagram-frame-complex-concept:image2:body-fit;svg-diagram-center-node-focus:svg:1:1` | reviewed | 全ページ画像ではなく、図解フレームだけを生成対象にする。 |
| PB-35 | cover-split | icon+image2 | `cover-panel-1-document-purpose-corner:icon:1:1;cover-panel-2-owner-version-corner:icon:1:1;cover-support-visual-submission-image:image2:4:3` | reviewed | 表紙分割は提出情報の読みやすさを優先し、補助画像は右側に限定する。 |
| PB-36 | cover-statement | none | `none` | intentional-none | 強い主張ページは余計な視覚要素を足さない。 |
| PB-37 | section-divider-number | icon+image2 | `chapter-mark-number-center:icon:1:1;divider-panel-thesis-corner:icon:1:1;divider-theme-chapter-strip:image2:16:9` | reviewed | 章扉は番号・論点・雰囲気の3箇所に限定して指定する。 |
| PB-38 | section-divider-toc | icon+image2 | `toc-row-1-overview-left:icon:1:1;toc-row-2-analysis-left:icon:1:1;toc-row-3-next-action-left:icon:1:1;divider-preview-chapter-strip:image2:16:9` | reviewed | 章の小目次と雰囲気画像を分ける。 |
| PB-39 | vertical-four-lanes | icon | `vertical-lane-1-region-a-header-icon:icon:1:1;vertical-lane-2-region-b-header-icon:icon:1:1;vertical-lane-3-region-c-header-icon:icon:1:1;vertical-lane-4-region-d-header-icon:icon:1:1` | reviewed | 縦レーン比較は各列の見出しだけを視覚補助する。 |
| PB-40 | pyramid-hierarchy | icon+svg | `pyramid-row-1-mission-corner:icon:1:1;pyramid-row-2-strategy-corner:icon:1:1;pyramid-row-3-measure-corner:icon:1:1;pyramid-row-4-action-corner:icon:1:1;hierarchy-reading-arrow:svg:wide` | reviewed | ピラミッド全体に画像を重ねず、階層ごとの意味を明示する。 |
| PB-41 | cycle-loop | icon+svg | `cycle-node-1-plan-top:icon:1:1;cycle-node-2-do-top:icon:1:1;cycle-node-3-check-top:icon:1:1;cycle-node-4-act-top:icon:1:1;cycle-return-improvement-arrow:svg:wide` | reviewed | ループは戻り先が重要なので、4ノードと戻り矢印を別スロットにする。 |
| PB-42 | positioning-map | icon+svg | `map-point-1-current-pin:icon:1:1;map-point-2-target-pin:icon:1:1;map-point-3-option-a-pin:icon:1:1;map-point-4-option-b-pin:icon:1:1;map-axis-meaning-labels:svg:wide` | reviewed | 2軸マップは点と軸が情報なので、背景画像は使わない。 |
| PB-43 | dashboard-summary | icon+photo_or_screenshot | `metric-1-sales-status-corner:icon:1:1;metric-2-inflow-status-corner:icon:1:1;metric-3-outbound-status-corner:icon:1:1;box-1-cause-corner:icon:1:1;box-2-next-corner:icon:1:1;dashboard-screenshot-evidence-frame:photo_or_screenshot:16:9` | reviewed | ダッシュボードは本来スクリーンショットが主役なので、画像枠を1つだけ明示した。 |
| PB-44 | swimlane-schedule | icon+svg | `swimlane-cell-7-handoff-pin:icon:1:1;swimlane-cell-8-review-pin:icon:1:1;swimlane-cell-13-dependency-pin:icon:1:1;swimlane-cell-19-blocker-pin:icon:1:1;swimlane-dependency-handoff-arrow:svg:wide` | reviewed | スイムレーンは全体画像にせず、重要セルと依存矢印だけを指定する。 |
| PB-45 | worksheet-form | none | `none` | intentional-none | ワークシートは書き込み用途なので視覚追加しない。 |
| PB-46 | funnel-conversion | icon+svg | `funnel-step-1-recognition-left:icon:1:1;funnel-step-2-entry-left:icon:1:1;funnel-step-3-interest-left:icon:1:1;funnel-step-4-conversion-left:icon:1:1;funnel-dropoff-callout:svg:wide` | reviewed | ファネルは段ごとの減衰が主役なので、ステップ別に視覚化する。 |
| PB-47 | icon-grid | icon | `cell-1-materials-top:icon:1:1;cell-2-support-top:icon:1:1;cell-3-campaign-top:icon:1:1;cell-4-guide-top:icon:1:1;cell-5-report-top:icon:1:1` | reviewed | 項目カタログはセルごとの見分けやすさだけを足す。 |
| PB-48 | case-quote | photo_or_screenshot+icon | `case-photo-person-left:photo_or_screenshot:3:2;quote-panel-voice-corner:icon:1:1` | reviewed | 事例ページは実画像を優先し、発言枠は補助アイコンだけにする。 |
| PB-49 | decision-tree | icon+svg | `tree-node-1-entry-condition-left:icon:1:1;tree-node-2-branch-a-left:icon:1:1;tree-node-3-branch-b-left:icon:1:1;tree-node-4-action-one-left:icon:1:1;tree-node-5-action-two-left:icon:1:1;tree-node-6-action-three-left:icon:1:1;decision-branch-route-arrow:svg:wide` | reviewed | 判断ツリーはノードと分岐を分けて指定する。 |
| PB-50 | evaluation-grid | image2+icon | `eval-card-1-plan-a-media-top:image2:4:3;eval-card-2-plan-b-media-top:image2:4:3;eval-card-3-plan-c-media-top:image2:4:3;eval-card-4-cost-corner:icon:1:1;eval-card-5-feasibility-corner:icon:1:1;eval-card-6-risk-corner:icon:1:1` | reviewed | 評価グリッドは全カード画像ではなく、選択肢カードだけをimage2にする。 |
| PB-51 | risk-heatmap | icon+svg | `heat-cell-4-priority-icon:icon:1:1;heat-cell-7-action-icon:icon:1:1;heat-cell-10-watch-icon:icon:1:1;heatmap-axis-priority-cross:svg:wide` | reviewed | ヒートマップは全セルを飾らず、判断対象セルだけを示す。 |
| PB-52 | raci-matrix | none | `none` | intentional-none | RACIは表記ルールが主役なので装飾しない。 |
| PB-53 | waterfall-bridge | icon+svg | `waterfall-step-1-base-top:icon:1:1;waterfall-step-2-increase-one-top:icon:1:1;waterfall-step-3-decrease-top:icon:1:1;waterfall-step-4-increase-two-top:icon:1:1;waterfall-step-5-target-top:icon:1:1;waterfall-bridge-total-line:svg:wide` | reviewed | ウォーターフォールは増減ステップ単位に分解した。 |
| PB-54 | value-chain | icon | `chain-step-1-input-top:icon:1:1;chain-step-2-process-top:icon:1:1;chain-step-3-output-top:icon:1:1;chain-step-4-delivery-top:icon:1:1;chain-step-5-feedback-top:icon:1:1` | reviewed | 価値連鎖は横並び工程の見分けだけを補助する。 |
| PB-55 | fishbone-cause | icon | `fish-cause-1-people-corner:icon:1:1;fish-cause-2-process-corner:icon:1:1;fish-cause-3-material-corner:icon:1:1;fish-cause-4-environment-corner:icon:1:1;fish-head-effect-corner:icon:1:1` | reviewed | 魚骨全体を画像化せず、原因カテゴリと結果ヘッドを個別指定する。 |
| PB-56 | logic-tree | icon | `tree-node-1-root-issue-left:icon:1:1;tree-node-2-sales-left:icon:1:1;tree-node-3-channel-left:icon:1:1;tree-node-4-material-left:icon:1:1;tree-node-5-visit-left:icon:1:1;tree-node-6-closing-left:icon:1:1;tree-node-7-menu-left:icon:1:1` | reviewed | ツリーはノード別に意味を持たせる。 |
| PB-57 | stakeholder-map | icon+svg | `tree-node-1-decision-maker-left:icon:1:1;tree-node-2-frontline-left:icon:1:1;tree-node-3-user-left:icon:1:1;tree-node-4-support-team-left:icon:1:1;stakeholder-center-issue-pin:svg:1:1` | reviewed | 関係者マップは中心課題と周辺者を分ける。 |
| PB-58 | customer-journey | icon+svg | `journey-step-1-awareness-top:icon:1:1;journey-step-2-compare-top:icon:1:1;journey-step-3-trial-top:icon:1:1;journey-step-4-share-top:icon:1:1;journey-step-5-renew-top:icon:1:1;journey-emotion-curve-line:svg:wide` | reviewed | ジャーニーは段階別行動と感情線を分けて指定する。 |
| PB-59 | okr-alignment | icon+svg | `tree-node-1-objective-left:icon:1:1;tree-node-2-kr-one-left:icon:1:1;tree-node-3-kr-two-left:icon:1:1;tree-node-4-action-one-left:icon:1:1;tree-node-5-action-two-left:icon:1:1;okr-alignment-connection-arrow:svg:wide` | reviewed | OKRは対応関係が主役なので、矢印とノードを分ける。 |
| PB-60 | business-model-canvas | icon | `field-1-customer-segment-top-left:icon:1:1;field-2-value-proposition-top-left:icon:1:1;field-3-channel-top-left:icon:1:1;field-4-revenue-top-left:icon:1:1;field-5-partner-top-left:icon:1:1;field-6-activity-top-left:icon:1:1;field-7-resource-top-left:icon:1:1;field-8-cost-top-left:icon:1:1;field-9-advantage-top-left:icon:1:1` | reviewed | 9枠全体を画像化せず、各入力欄を編集可能なまま小型アイコンだけ付ける。 |
| PB-61 | cost-breakdown | icon | `cost-row-1-labor-left:icon:1:1;cost-row-2-outsourcing-left:icon:1:1;cost-row-3-system-left:icon:1:1;cost-row-4-meeting-left:icon:1:1;cost-row-5-other-left:icon:1:1` | reviewed | 横棒の比率を主役にし、アイコンは行ラベルの補助に留める。 |
| PB-62 | roadmap-flags | icon | `roadmap-flag-1-phase-one-top:icon:1:1;roadmap-flag-2-phase-two-top:icon:1:1;roadmap-flag-3-phase-three-top:icon:1:1;roadmap-flag-4-phase-four-top:icon:1:1;roadmap-flag-5-phase-five-top:icon:1:1` | reviewed | ロードマップはフェーズごとに成果物が違うため個別指定した。 |
| PB-63 | scoring-matrix | none | `none` | intentional-none | 採点表は計算/編集可能性を優先する。 |
| PB-64 | checklist-review | none | `none` | intentional-none | 確認事項は抜け漏れ防止が主役なので装飾しない。 |
| PB-65 | svg-hub-spoke | svg+icon | `svg-center-node-main-message:svg:1:1;svg-spoke-1-background-icon:icon:1:1;svg-spoke-2-action-icon:icon:1:1;svg-spoke-3-control-icon:icon:1:1;svg-spoke-4-impact-icon:icon:1:1` | reviewed | SVG図解ページは図全体ではなく、中心と4スポークごとに指定した。 |
| PB-66 | svg-chevron-flow | svg | `svg-chevron-1-input-stage:svg:wide;svg-chevron-2-sort-stage:svg:wide;svg-chevron-3-design-stage:svg:wide;svg-chevron-4-build-stage:svg:wide` | reviewed | シェブロンは工程面そのものが視覚要素なので、段階別に分けた。 |
| PB-67 | svg-cycle-loop | icon+svg | `svg-cycle-node-1-plan-icon:icon:1:1;svg-cycle-node-2-do-icon:icon:1:1;svg-cycle-node-3-check-icon:icon:1:1;svg-cycle-node-4-act-icon:icon:1:1;svg-cycle-return-arrow:svg:wide` | reviewed | 円環全体ではなく、ノードと戻り矢印を分ける。 |
| PB-68 | svg-fishbone | icon | `svg-effect-head-main-issue:icon:1:1;svg-rib-1-people:icon:1:1;svg-rib-2-process:icon:1:1;svg-rib-3-data:icon:1:1;svg-rib-4-context:icon:1:1` | reviewed | 原因分析のSVGは原因カテゴリ別に指定する。 |
| PB-69 | svg-decision-branch | icon+svg | `svg-decision-root-condition-icon:icon:1:1;svg-branch-yes-route:svg:wide;svg-branch-no-route:svg:wide;svg-outcome-1-execute-icon:icon:1:1;svg-outcome-2-redesign-icon:icon:1:1` | reviewed | 条件分岐は判断点と結果を混ぜずに指定する。 |
| PB-70 | svg-callout-anatomy | icon | `svg-core-object-screen-icon:icon:1:1;svg-callout-1-critical-a:icon:1:1;svg-callout-2-critical-b:icon:1:1;svg-callout-3-related-material:icon:1:1;svg-callout-4-warning:icon:1:1` | reviewed | 注釈図は中央と注釈先を分けて指定する。 |
| PB-71 | svg-roadmap-bars | svg | `svg-roadmap-bar-1-design-phase:svg:wide;svg-roadmap-bar-2-production-phase:svg:wide;svg-roadmap-bar-3-validation-phase:svg:wide;svg-roadmap-bar-4-rollout-phase:svg:wide` | reviewed | フェーズバーは全体画像ではなく、バーごとに意味を持たせる。 |
| PB-72 | svg-layered-system | svg+icon | `svg-layer-1-user-layer:svg:wide;svg-layer-2-business-layer:svg:wide;svg-layer-3-foundation-layer:svg:wide;svg-layer-4-data-flow-layer:svg:wide;svg-interface-right-handoff-icon:icon:1:1` | reviewed | 層構造は層ごとの役割を明確にする。 |
| PB-73 | svg-venn-overlap | svg+icon | `svg-circle-1-need-area:svg:1:1;svg-circle-2-strength-area:svg:1:1;svg-overlap-shared-value-icon:icon:1:1` | reviewed | ベン図は重なりの意味を中心に置く。 |
| PB-74 | svg-concentric-rings | icon+svg | `svg-core-operation-icon:icon:1:1;svg-ring-1-inner-scope:svg:1:1;svg-ring-2-middle-scope:svg:1:1;svg-ring-3-outer-scope:svg:1:1` | reviewed | 同心円は中心から外側への広がりを段階別に持たせる。 |
| PB-75 | svg-staircase-maturity | icon+svg | `svg-level-1-foundation-icon:icon:1:1;svg-level-2-standardization-icon:icon:1:1;svg-level-3-operation-icon:icon:1:1;svg-level-4-improvement-icon:icon:1:1;svg-growth-arrow-upward:svg:wide` | reviewed | 階段図は段階ごとの到達点を分ける。 |
| PB-76 | svg-gap-bridge | icon | `svg-as-is-current-state-icon:icon:1:1;svg-bridge-1-organize-icon:icon:1:1;svg-bridge-2-design-icon:icon:1:1;svg-bridge-3-execute-icon:icon:1:1;svg-to-be-target-state-icon:icon:1:1` | reviewed | 橋渡し図は中間ステップを単なる装飾にしない。 |
| PB-77 | svg-org-chart | icon+svg | `svg-owner-accountable-icon:icon:1:1;svg-team-1-business-icon:icon:1:1;svg-team-2-product-icon:icon:1:1;svg-team-3-operations-icon:icon:1:1;svg-member-row-assignee-line:svg:wide` | reviewed | 組織図は責任の上下と担当者行を分ける。 |
| PB-78 | svg-dependency-network | icon | `svg-center-node-core-issue-icon:icon:1:1;svg-dependency-1-data-icon:icon:1:1;svg-dependency-2-system-icon:icon:1:1;svg-dependency-3-people-icon:icon:1:1;svg-dependency-4-policy-icon:icon:1:1` | reviewed | 依存ネットワークは接続先ごとの意味を明示する。 |
| PB-79 | svg-migration-matrix | svg+icon | `svg-axis-x-effectiveness:svg:wide;svg-axis-y-urgency:svg:wide;svg-current-position-icon:icon:1:1;svg-target-position-icon:icon:1:1;svg-move-arrow-migration:svg:wide` | reviewed | マトリクス移行は軸と移動を分けて扱う。 |
| PB-80 | svg-iceberg | icon+svg | `svg-visible-tip-symptom-icon:icon:1:1;svg-waterline-boundary:svg:wide;svg-hidden-base-root-cause-icon:icon:1:1` | reviewed | 氷山図は上下の意味差を崩さない。 |
| PB-81 | svg-layer-stack | svg+icon | `svg-layer-bottom-foundation:svg:wide;svg-layer-middle-operation:svg:wide;svg-layer-top-outcome:svg:wide;svg-outcome-callout-result-icon:icon:1:1` | reviewed | レイヤースタックは積み上がり順に分解する。 |
| PB-82 | svg-bowtie-risk | icon | `svg-risk-event-center-icon:icon:1:1;svg-cause-1-process:icon:1:1;svg-cause-2-people:icon:1:1;svg-cause-3-system:icon:1:1;svg-impact-1-delay:icon:1:1;svg-impact-2-cost:icon:1:1;svg-impact-3-quality:icon:1:1` | reviewed | ボウタイは原因・事象・影響を混ぜずに指定する。 |
| PB-83 | svg-bubble-portfolio | svg+icon | `svg-axis-x-feasibility:svg:wide;svg-axis-y-impact:svg:wide;svg-bubble-1-option-a-icon:icon:1:1;svg-bubble-2-option-b-icon:icon:1:1;svg-bubble-3-option-c-icon:icon:1:1;svg-bubble-4-option-d-icon:icon:1:1` | reviewed | バブル図は候補ごとの位置と大きさを視覚単位にする。 |
| PB-84 | svg-stage-gate-board | svg+icon | `svg-gate-1-backlog-stage:svg:wide;svg-gate-2-review-stage:svg:wide;svg-gate-3-doing-stage:svg:wide;svg-gate-4-done-stage:svg:wide;svg-card-1-case-a-icon:icon:1:1;svg-card-2-case-b-icon:icon:1:1;svg-card-3-reviewing-icon:icon:1:1;svg-card-4-running-icon:icon:1:1;svg-card-5-blocked-icon:icon:1:1;svg-card-6-complete-icon:icon:1:1` | reviewed | ステージゲートは列とカードを分け、滞留箇所が読めるようにする。 |
