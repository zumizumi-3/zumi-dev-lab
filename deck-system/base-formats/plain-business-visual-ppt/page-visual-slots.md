# Page Visual Slots

This file is the page-by-page visual insertion contract for `plain-business-visual-ppt`. It is intentionally more concrete than the pattern policy: each paper/slide declares whether to insert image2, SVG, icons, real assets, or no visual.

The matching HTML section carries `data-visual-required`, `data-visual-insert`, and `data-visual-spec`. The JSON version is `page-visual-slots.json`.

## Slot Table

| Slide | Pattern | Required | Insert plan | Concrete brief |
|---|---|---|---|---|
| PBV-00 | visual-policy-guide | svg+image2 | `body:svg:body-fit;support:image2:4:3` | 本文中央にSVG構造を入れ、必要なカードや段階だけimage2小画像を加える。構造と画像の役割を分ける。 |
| PB-00 | cover | image2 | `side-panel:image2:4:3` | 右側または本文側に、業務資料を設計しているワークスペースをimage2で1枚。タイトルとリードはHTMLに残す。 |
| PB-01 | agenda | icon | `per_row:icon:1:1:count-5` | 各行の目的に合う単色線画アイコンを入れる。アイコンは補助で、行テキストを主役にする。 |
| PB-02 | executive-summary | image2 | `card-1:image2:4:3;card-2:image2:4:3;card-3:image2:4:3` | 結論、根拠、次アクションの各カードに、それぞれ異なるimage2カード画像を入れる。抽象背景の使い回しは禁止。 |
| PB-03 | issue-direction | svg | `body:svg:body-fit` | 症状、原因、対応方針を左から右へ接続するSVG。各ノードは短い見出しだけにし、因果の向きが一目で分かるようにする。 |
| PB-04 | 3c-analysis | image2 | `lane-1:image2:4:3;lane-2:image2:4:3;lane-3:image2:4:3` | Customer、Competitor、Companyの各レーンに別々のimage2画像を入れる。顧客、競合、社内資産の違いが見える絵にする。 |
| PB-05 | kpi-tree | svg | `body:svg:body-fit` | KGI、KPI、Actionを枝分かれで結ぶSVGツリー。数式ではなく対応関係を見せる。 |
| PB-06 | data-table | none | `none` | 画像は入れない。コメント列、単位、差分、示唆で密度を上げ、空行を残さない。 |
| PB-07 | progress-summary | svg | `body:svg:body-fit` | 状態、リスク、次アクションをゲート付きの進捗レーンで示すSVG。進捗率だけの横棒は避ける。 |
| PB-08 | budget-plan | svg | `body:svg:body-fit` | 費用、差分、ROIをウォーターフォールまたは積み上げで示すSVG。汎用的な金額アイコンは使わない。 |
| PB-09 | schedule | svg | `body:svg:body-fit` | マイルストーン、担当、依存関係をタイムラインSVGで示す。期間バーだけでなく意思決定点を入れる。 |
| PB-10 | competitor-comparison | svg | `body:svg:body-fit` | 比較軸と差分を示すポジショニングまたはギャップSVG。表だけで弱い場合に補助する。 |
| PB-11 | proposal-options | image2 | `option-1:image2:4:3;option-2:image2:4:3;option-3:image2:4:3` | 各提案オプションに別々のimage2カード画像を入れる。選択肢の違いを一目で分かる絵にする。 |
| PB-12 | action-plan | none | `none` | 画像は入れない。担当、期限、依存関係、判断事項を表で密に見せる。 |
| PB-13 | training-flow | svg | `body:svg:body-fit` | 目的、講義、実践、確認をつなぐ学習フローSVG。受講者の進み方を明示する。 |
| PB-14 | decision-log | none | `none` | 画像は入れない。決定、未決、責任者、期限を編集可能な表で保持する。 |
| PB-15 | appendix-table | none | `none` | 画像は入れない。参照用の表密度を優先する。 |
| PB-16 | swot-2x2 | svg | `body:svg:body-fit` | 4象限そのものをSVGとして扱い、各象限の意味と示唆を短く置く。 |
| PB-17 | before-after | svg+image2 | `body:svg:body-fit;support:image2:4:3` | 本文中央にSVG構造を入れ、必要なカードや段階だけimage2小画像を加える。構造と画像の役割を分ける。 |
| PB-18 | interview-voice | photo_or_screenshot | `real-asset:photo_or_screenshot:3:2` | 実在人物の写真、インタビュー画面、発言メモなどの実素材を入れる。生成された抽象人物で代替しない。 |
| PB-19 | selection-process | svg | `body:svg:body-fit` | 候補、評価、選定、承認をゲート付きレールで表すSVG。 |
| PB-20 | chapter-toc | image2 | `body:image2:16:9` | 章のテーマを示す16:9のimage2画像を本文領域に入れる。章ごとに違うモチーフにする。 |
| PB-21 | standard-body-canvas | none | `none` | 原則画像なし。必要なら次工程でimage2_bodyまたはSVG構図へ差し替える。 |
| PB-22 | two-column-agenda | icon | `per_row:icon:1:1:count-6` | 左右各行に小さな単色アイコンを入れる。並行トピックの違いを示す。 |
| PB-23 | three-step-horizontal | svg | `body:svg:body-fit` | 3ステップを矢印または接続線で見せるSVG。各ステップに成果物を1つ置く。 |
| PB-24 | left-label-right-description | none | `none` | 画像は入れない。左ラベルと右説明の階層を大きい文字で見せる。 |
| PB-25 | requirements-stack | none | `none` | 画像は入れない。要件の積み上がりをテキストブロックで明確にする。 |
| PB-26 | hub-tree-diagram | svg | `body:svg:body-fit` | 中央テーマから左右に枝分かれするハブ型SVG。関係の強弱を線で表現する。 |
| PB-27 | vs-comparison | svg+image2 | `body:svg:body-fit;support:image2:4:3` | 本文中央にSVG構造を入れ、必要なカードや段階だけimage2小画像を加える。構造と画像の役割を分ける。 |
| PB-28 | table-chart-commentary | svg | `body:svg:body-fit` | 表の右側に小型SVGチャートを置き、コメント列の示唆を視覚化する。 |
| PB-29 | left-table-right-visual | image2 | `side-panel:image2:4:3` | 右側に4:3のimage2またはスクリーン風画像を入れ、左の表の示唆を具体化する。 |
| PB-30 | dense-diagram-lecture | svg | `body:svg:body-fit` | 講義順序を保つSVG。箱を並べるだけでなく読み順の矢印を入れる。 |
| PB-31 | placeholderless-section | image2 | `body:image2:16:9` | 章扉の本文領域に16:9のimage2画像を入れる。PPT由来の章テーマを視覚化する。 |
| PB-32 | image2-body-full | image2 | `body:image2:body-fit` | 本文領域全体をimage2で生成する。画像内の細かい文字に依存せず、タイトルと要点はHTMLに残す。 |
| PB-33 | image2-body-split | image2 | `side-panel:image2:4:3` | 右側に4:3のimage2画像を入れ、左側の事実テキストと対応させる。 |
| PB-34 | image2-body-diagram | image2 | `body:image2:body-fit` | 複雑な概念図だけをimage2で生成する。中央概念と3から5個の周辺要素に絞る。 |
| PB-35 | cover-split | image2 | `side-panel:image2:4:3` | 片側に4:3のimage2または実素材を入れる。ロゴやタイトルを画像に焼き込まない。 |
| PB-36 | cover-statement | none | `none` | 画像は入れない。大きな文字と余白で主張を見せる。 |
| PB-37 | section-divider-number | image2 | `body:image2:16:9` | 章番号に対応した16:9のimage2画像を入れる。単なる背景ではなく章のテーマを表す。 |
| PB-38 | section-divider-toc | image2 | `body:image2:16:9` | 章内の流れを示す16:9のimage2画像を入れる。次ページ以降の内容を予告する。 |
| PB-39 | vertical-four-lanes | image2 | `lane-1:image2:4:3;lane-2:image2:4:3;lane-3:image2:4:3;lane-4:image2:4:3` | 4レーンそれぞれに別々のimage2カード画像を入れる。縦横比4:3を固定する。 |
| PB-40 | pyramid-hierarchy | svg | `body:svg:body-fit` | 上位概念から下位要素へ積み上げるピラミッドSVG。各段の役割を明示する。 |
| PB-41 | cycle-loop | svg | `body:svg:body-fit` | 入力、実行、学習、改善が循環するSVG。矢印方向と次の行動を必ず入れる。 |
| PB-42 | positioning-map | svg | `body:svg:body-fit` | 縦横2軸のSVGマップ。競合や選択肢の位置を相対配置で示す。 |
| PB-43 | dashboard-summary | photo_or_screenshot | `real-asset:photo_or_screenshot:16:9` | 実ダッシュボードまたはそれに近いスクリーンショットを右側に置く。汎用グラフ画像は避ける。 |
| PB-44 | swimlane-schedule | svg | `body:svg:body-fit` | 役割別レーンと期間バーを組み合わせたSVG。担当と依存を同時に見せる。 |
| PB-45 | worksheet-form | none | `none` | 画像は入れない。記入欄として使える編集性を守る。 |
| PB-46 | funnel-conversion | svg | `body:svg:body-fit` | 母数から成果までの減衰をファネルSVGで示し、落ちる理由の注釈を置く。 |
| PB-47 | icon-grid | icon | `per_cell:icon:1:1:count-5` | 各セルに個別の単色アイコンを入れる。セルごとに意味が違うため同じアイコンを繰り返さない。 |
| PB-48 | case-quote | photo_or_screenshot | `real-asset:photo_or_screenshot:3:2` | 実写真、実画面、実績証跡を入れる。引用の信頼性を補強する素材を優先する。 |
| PB-49 | decision-tree | svg | `body:svg:body-fit` | 条件分岐と推奨アクションを枝で示すSVG。結論までの道筋を見せる。 |
| PB-50 | evaluation-grid | image2 | `option-1:image2:4:3;option-2:image2:4:3;option-3:image2:4:3` | 各評価候補に別々のimage2カード画像を入れる。評価軸の差が分かる視覚にする。 |
| PB-51 | risk-heatmap | svg | `body:svg:body-fit` | 影響度と発生確率の2軸SVG。対策やレビューゲートを同じ画面に置く。 |
| PB-52 | raci-matrix | none | `none` | 画像は入れない。責任分担の表を読みやすく整える。 |
| PB-53 | waterfall-bridge | svg | `body:svg:body-fit` | 増減要因をブリッジで示すSVG。開始値、増加、減少、着地を分ける。 |
| PB-54 | value-chain | svg | `body:svg:body-fit` | 工程を左から右へつなぐSVG。各工程の入力と出力を短く添える。 |
| PB-55 | fishbone-cause | svg | `body:svg:body-fit` | 原因カテゴリから結果へ集約するフィッシュボーンSVG。装飾ではなく原因分解に使う。 |
| PB-56 | logic-tree | svg | `body:svg:body-fit` | 論点をMECEに分解するロジックツリーSVG。階層の深さを揃える。 |
| PB-57 | stakeholder-map | svg | `body:svg:body-fit` | 関係者を影響度や関与度で置くSVGマップ。中心人物と周辺支援者を分ける。 |
| PB-58 | customer-journey | svg+image2 | `body:svg:body-fit;support:image2:4:3` | 本文中央にSVG構造を入れ、必要なカードや段階だけimage2小画像を加える。構造と画像の役割を分ける。 |
| PB-59 | okr-alignment | svg | `body:svg:body-fit` | Objective、KR、Actionを接続するSVG。目標と実行の距離をなくす。 |
| PB-60 | business-model-canvas | icon | `per_field:icon:1:1:count-9` | 各フィールドに小型アイコンを入れる。キャンバスの編集性を優先し、画像化しない。 |
| PB-61 | cost-breakdown | svg | `body:svg:body-fit` | 費目別の構成比をバーまたは階層で示すSVG。金額アイコンではなく内訳を見せる。 |
| PB-62 | roadmap-flags | svg | `body:svg:body-fit` | 時系列上に旗印と判断ゲートを置くSVG。今、次、後で何が変わるかを示す。 |
| PB-63 | scoring-matrix | none | `none` | 画像は入れない。採点表、重み、コメントを優先する。 |
| PB-64 | checklist-review | none | `none` | 画像は入れない。チェック項目と判定理由を大きめの文字で示す。 |
| PB-65 | svg-hub-spoke | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-66 | svg-chevron-flow | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-67 | svg-cycle-loop | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-68 | svg-fishbone | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-69 | svg-decision-branch | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-70 | svg-callout-anatomy | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-71 | svg-roadmap-bars | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-72 | svg-layered-system | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-73 | svg-venn-overlap | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-74 | svg-concentric-rings | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-75 | svg-staircase-maturity | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-76 | svg-gap-bridge | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-77 | svg-org-chart | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-78 | svg-dependency-network | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-79 | svg-migration-matrix | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-80 | svg-iceberg | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-81 | svg-layer-stack | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-82 | svg-bowtie-risk | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-83 | svg-bubble-portfolio | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |
| PB-84 | svg-stage-gate-board | svg | `body:svg:body-fit` | 本文中央に専用SVGを入れる。既存SVG構図の形だけを使い回さず、ノード文言と矢印をこのページの意味に合わせる。 |

## Enforcement Rules

- Do not leave a slide at pattern-level policy only; use the slide row above as the insertion contract.
- For `image2_card_media`, generate one image per card/lane/option. Do not make an atlas and crop it.
- Keep the declared aspect ratio. If the layout cannot preserve it, change the layout before generating the asset.
- SVG pages must express structure: relationship, flow, hierarchy, gate, map, loop, branch, or cause. Do not add decorative marks.
- `none` pages still need density work: comments, units, evidence rows, annotations, or larger type.
