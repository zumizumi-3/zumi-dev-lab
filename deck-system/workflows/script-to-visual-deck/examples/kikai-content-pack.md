# Kikai Content Pack Example

Status: example / contract test

This example converts the existing Kikai seminar deck artifacts into the normalized Content Pack shape. It does not modify the production deck.

## Source Artifacts

| Source | Type | Location | Status | Notes |
|---|---|---|---|---|
| Kikai bold-depth brief | deck brief | `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/brief.md` | confirmed | Purpose, audience, desired change, assumptions, deliverables |
| Kikai bold-depth slide plan | slide plan | `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/slide-plan.md` | confirmed | 34 slide rows and current visual need |
| Kikai bold-depth visual direction | design notes | `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/visual-direction.md` | confirmed | Palette, typography, density, image/SVG rules |
| Kikai bold-depth quality audit | audit | `deck-system/decks/kikai-collab-seminar-business-ppt-bold-depth/quality-audit.md` | confirmed | Per-slide image/layout fit decisions |
| Original source markdown | private GitHub source | `yuriagtz/vcs_kikai_docs/.../01_コラボセミナー資料.md` | source referenced, not re-fetched in this example | Existing deck says it was fetched through authenticated `gh` |

## Brief

- deck id: `kikai-collab-seminar-business-ppt-bold-depth`
- deck title: Kikai Collab Seminar
- source material: private GitHub seminar script plus existing generated deck artifacts
- selected format id: `kikai-business-ppt` for original deck output; `kikai-business-visual-ppt` is the candidate future format for visual-rich workflow testing
- selected format status: `candidate` for visual workflow
- purpose: コラボセミナー参加者に、AI活用の主戦場が「発信・効率化」だけでなく「プロダクトを作る側」へ移っていることを伝える
- audience: AI活用に興味がある個人、事業者、発信者。AIマーケや業務効率化は知っているが、プロダクト開発は遠いと感じている層
- desired action: Vibe Coding Salon -Kikai- への関心を持ち、次アクションを検討する
- delivery context: セミナー / 投影 / 45分想定
- tone: calm, technical, practical, seminar-friendly
- target slide count: 34
- output format: HTML browser deck
- constraints: 既存デッキ本体と既存フォーマットは上書きしない。統計や実績は元資料の記載を扱い、追加検証は未実施として記録する

## Narrative Arc

| Stage | Role | Key message | Source reference | Notes |
|---|---|---|---|---|
| Opening | Establish why this matters now | AI時代は、サービスを作る側に回れる | P01-P03 | セミナー参加者の視点を「AIを使う」から「AIで作る」へ切り替える |
| Context | Explain the current situation | AIマーケや効率化は当たり前になり、差は「何を作るか」に移っている | P04-P09 | AI活用の二分岐を示す |
| Method | Show the way forward | バイブコーディングにより、言葉から実用サービスを作れる | P10-P16 | 具体例と変化した開発条件を提示 |
| Reality Check | Name the gap, risk, or pain | 成功例だけ見ても再現できない。稼ぐには段階的なルートが必要 | P17-P21 | 課題発見力と蓄積の重要性を示す |
| Proof | Make it believable | 受託案件やコミュニティ内事例から現実的な入口を示す | P22-P27 | 澤田さんとコミュニティ事例 |
| Offer / Decision | Clarify the proposed choice | Kikaiは学習、品質、案件、販売、コミュニティをつなぐ場 | P28-P33 | Kikaiの提供価値 |
| Next action | Define what the audience should do | Kikaiの前後で、AIとの関係を消費者から創り手へ変える | P34 | 強い販売CTAではなく理解定着 |

## Slide Content Plan

| Slide | Section | Source ref | Core message | Title | Lead | Body points | Add / clarify | Speaker note goal | Claim status | Density target | visual_need | current_visual_fit | suggested_visual_depiction | avoid | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P01 | Intro | slide-plan P01 | AI時代は、サービスを作る側に回れる | AI時代は、サービスを作る側に回れる | AI時代の新しいサービスづくり | 消費者から事業者へ / AIを使う側から作る側へ | 表紙としてブランドと主張を明確にする | セミナー全体の視点転換を宣言する | confirmed | medium | none | keep | ロゴと縦アクセントで十分。追加画像よりタイトルの強さを優先 | ロゴ枠、赤背景、過剰な背景画像 | ready |
| P02 | Intro | slide-plan P02 | 澤田さんは非エンジニアから事業化まで経験している | 澤田さんは非エンジニアから事業化まで経験している | 自社アプリ、受託、発信の両輪 | 非エンジニア起点 / 自社アプリ / 受託経験 | 実写真があるなら優先 | 登壇者の信頼性と聞く理由を作る | assumption | medium | photo_or_screenshot | keep | 澤田さん写真と実績メトリクス | 似顔絵生成、人物の再生成、写真の二重枠 | ready |
| P03 | Intro | slide-plan P03 | 今日の45分で、視点と行動が変わる | 今日の45分で、視点と行動が変わる | 3つの到達点 | 転換点を理解 / 自分にもできる / 次の一歩 | 3カードに役割を持たせる | 今日得られるものを整理する | confirmed | medium | image2_card_media | keep | 3つの到達点を別々のカード内メディアで示す | 同じ画像の使い回し、カード全体画像化 | ready |
| P04 | Intro | slide-plan P04 | AIを使うこと自体は、もう優位性ではない | AIを使うこと自体は、もう優位性ではない | AI活用の前提化 | ライティング / 画像生成 / 業務効率化 | Commodity化の構造を補足 | 参加者の現状認識を揃える | confirmed | medium | svg_diagram | keep | 当たり前化したAI活用をノート・PC・業務アイコンで整理 | 意味のない棒線、丸文、汎用AI背景 | ready |
| P05 | Two Paths | slide-plan P05 | AI活用は「伝える」と「作る」に分かれる | AI活用は「伝える」と「作る」に分かれる | AI活用の2つの道 | AI x マーケティング / AI x プロダクト | 対比軸を強くする | 以降の話がプロダクト側であると明確にする | confirmed | high | svg_diagram | keep | 二つの道を左右比較と中央ピボットで示す | 円の中の文字、意図不明な装飾 | ready |
| P06 | Two Paths | slide-plan P06 | AIマーケは、ナレッジを持つ人の拡声器 | AIマーケは、ナレッジを持つ人の拡声器 | 蓄積がある人は伸びる | 蓄積ありは増幅 / ゼロを100倍してもゼロ | 横ばいグラフではなく増幅ロジックを示す | AIマーケの効く条件を説明する | confirmed | high | svg_diagram | keep | 蓄積あり/なしの分岐と矢印プロセス | 横ばいグラフ、意味のないチャート、文字崩れ | ready |
| P07 | Two Paths | slide-plan P07 | AIは「作る側」の壁を壊した | AIは「作る側」の壁を壊した | アイディアからサービスまでの距離が縮んだ | 言葉 / 要件 / 画面 / サービス | 具体的な変化を見せる | プロダクト側への関心を高める | confirmed | high | image2_split | keep | プロンプトからSaaSダッシュボードへ進む作業風景 | 抽象背景、読めるUI文字、ロゴ | ready |
| P08 | Two Paths | slide-plan P08 | 情報が無料化すると「何を作るか」が強くなる | 情報が無料化すると「何を作るか」が強くなる | 売り方から作るものへ | どう売るか / 何を作るか | 表の余白をなくし示唆列を持たせる | 価値の源泉が変わる話を整理する | confirmed | high | none | keep | 表、比較軸、コメント列で密度を作る | 空行、画像化された表、余白埋めの画像 | ready |
| P09 | Two Paths | slide-plan P09 | 私たちはプロダクト側にこだわる | 私たちはプロダクト側にこだわる | 価値を作る人を増やす | 情報消費者ではなく創り手へ | 右側根拠カードで密度を補う | Kikaiの思想へ接続する | confirmed | medium | none | keep | 大きな主張と根拠カード | 意味の薄いイラスト | ready |
| P10 | Vibe Coding | slide-plan P10 | 「作る」の常識が変わる | 「作る」の常識が変わる | バイブコーディングとは何か | 章切り替え | 章扉は過剰にしない | 話題転換を明確にする | confirmed | low | none | keep | 章番号、短い章内アンカー、白背景 | 似た章扉画像の使い回し、画像主張過多 | ready |
| P11 | Vibe Coding | slide-plan P11 | 言葉が、そのまま形になる | 言葉が、そのまま形になる | 日本語でAIと対話しながら開発する | プロンプト / 要件 / データ / ワークフロー / UI | workbench画像は意味がある | バイブコーディングの体験を具体化する | confirmed | high | image2_split | keep | プロンプトから要件、データ、UIプレビューへ進むワークベンチ | UI内の読める文字、ロゴ、過密な小要素 | ready |
| P12 | Vibe Coding | slide-plan P12 | 簡単なものしか作れない、はもう古い | 簡単なものしか作れない、はもう古い | 実用サービスが生まれている | 判断基準 / 実装できる範囲 / 使える条件 | 実装判断の条項を足す | 誤解を解いて現実的な期待値にする | assumption | high | svg_diagram | keep | 実用判定のチェックストリップ | ぼんやりしたワイヤーフレームコラージュ | ready |
| P13 | Vibe Coding | slide-plan P13 | 非エンジニアでも実用サービスは作れる | 非エンジニアでも実用サービスは作れる | 実用アプリ例 | FreePick / ShiftManager / 物販ツール / AI書類抽出 | 各事例を別モチーフで示す | 実用性を具体例で納得させる | assumption | high | image2_card_media | keep | 4つのアプリ事例を別々のUI/業務モチーフで示す | P10と似た画像、1枚画像の潰し込み | ready |
| P14 | Vibe Coding | slide-plan P14 | 開発期間、コスト、必要スキルが変わった | 開発期間、コスト、必要スキルが変わった | 数ヶ月から数日〜数週間へ | Before / After / implication | 表と変化ポイントを密にする | 条件変化の大きさを見せる | assumption | high | none | keep | Before/After表と示唆カード | 表の画像化、余白の多い3カード | ready |
| P15 | Vibe Coding | slide-plan P15 | バイブコーディングには4つの可能性がある | バイブコーディングには4つの可能性がある | 可能性の整理 | No Code / Speed / Quality / Business | 4カードの見分けを強くする | 得られる価値を整理する | confirmed | high | image2_card_media | keep | 4能力それぞれの意味に合うカード内画像 | 同一画像、抽象アイコンだけ | ready |
| P16 | Vibe Coding | slide-plan P16 | 海外では個人 x AIの開発が常識になり始めた | 海外では個人 x AIの開発が常識になり始めた | 個人開発の事例 | 1人 / 数日 / 収益化 | 事例カードを証拠として整理 | 成功例の存在を示す | assumption | medium | icon | keep | Speed/Revenue/Patternを別アイコンで補助 | グラフ風メーター、疑似スクショの過剰使用 | ready |
| P17 | Reality | slide-plan P17 | でも、待ってください | でも、待ってください | 自分にもできそう、の直後に現実を見る | 現実チェック | 次章への緊張感 | 楽観から現実へ切り替える | confirmed | medium | svg_diagram | keep | 期待と現実の間にあるギャップボード | 横棒グラフ、暗い雰囲気画像 | ready |
| P18 | Reality | slide-plan P18 | 目立つ成功の裏で、多くの人が失敗している | 目立つ成功の裏で、多くの人が失敗している | 成功例の裏側 | 80.9% / 4.8% / 80-85% / 300%増 / 月$200 | 数値の出典状態を分離 | 成功例の見方を補正する | assumption | high | svg_diagram | keep | Big numbersとファネル/落とし穴構造 | 未検証数字を断定しすぎる表現 | ready |
| P19 | Reality | slide-plan P19 | 海外スターにも、見えない蓄積がある | 海外スターにも、見えない蓄積がある | 成功の背景 | Pieter Levels / Marc Lou / Danny Postma | 実名は出典・扱い注意 | 表面的な成功だけ見ないようにする | assumption | medium | icon | keep | 人物カードごとの蓄積アイコン | 人物写真の無断生成、共通右下装飾 | ready |
| P20 | Reality | slide-plan P20 | 稼ぐなら、段階的な黄金ルートが必要 | 稼ぐなら、段階的な黄金ルートが必要 | 段階ルート | 学ぶ / 動き出す / 広げる / 磨き込む / 創る | 5ステップを過密にしない | 稼ぐ道筋を現実的に示す | confirmed | high | svg_diagram | keep | ステップラダーとゲート | 汎用ロードマップ背景、文字欠け | ready |
| P21 | Reality | slide-plan P21 | 必要なのはアイディアではなく課題発見力 | 必要なのはアイディアではなく課題発見力 | 作れるだけでは足りない | 課題発見 / ヒアリング / 要件定義 / 顧客関係 | No/Yes差を明確にする | 受託や実用化に必要な能力を示す | confirmed | high | svg_diagram | keep | 課題発見の質問グリッドとNo/Yes比較 | 余白の多い比較カード | ready |
| P22 | Client Work | slide-plan P22 | 受託案件は、身近な業務アプリから始まる | 受託案件は、身近な業務アプリから始まる | 業務アプリの入口 | 日報 / CRM / EC分析ダッシュボード | カード内に意味のあるSVGを置く | 身近な受託テーマへ落とす | confirmed | high | svg_diagram | keep | 3つの業務アプリを別々のカード内SVGで示す | 円数字のズレ、絵が意味を持たない状態 | ready |
| P23 | Client Work | slide-plan P23 | 澤田さんも非エンジニアから始めた | 澤田さんも非エンジニアから始めた | 経験ゼロからの開始 | 経験ゼロ / 開発期間1週間 | タイムライン化 | 自分にも入口があると感じてもらう | assumption | medium | svg_diagram | keep | 起点、学習、初回開発の証拠パネル | 過剰な人物演出 | ready |
| P24 | Client Work | slide-plan P24 | 澤田さんは自社アプリと受託の両輪を持つ | 澤田さんは自社アプリと受託の両輪を持つ | 実績の両輪 | 初月200万円 / 現在400万円 / 13万円 / 50万円案件 | 実績は出典注意 | 信頼性を数字で補強する | assumption | high | none | keep | 数字・内訳・示唆をHTMLで大きく見せる | 数字を画像化、未検証を強く言い切る | ready |
| P25 | Client Work | slide-plan P25 | それは澤田さんだから、という疑問は正しい | それは澤田さんだから、という疑問は正しい | 疑問への正面回答 | 次の証明が生まれている | 反論処理を明確にする | 聞き手の疑念を先回りして扱う | confirmed | medium | svg_diagram | keep | 疑問、確認、仕組みの3段階 | 雰囲気写真だけ、カード重なり | ready |
| P26 | Client Work | slide-plan P26 | コミュニティからマネタイズ済み事例が生まれている | コミュニティからマネタイズ済み事例が生まれている | コミュニティ事例 | X運用ツール / 書類抽出 / Gemini Bot | 各事例を別SVG/アイコンにする | 再現性の兆しを示す | assumption | high | svg_diagram | keep | 3事例を別々の単色SVGで補強 | 同じ画像、グラフ風メーター | ready |
| P27 | Client Work | slide-plan P27 | 再現性のある仕組みが、未経験者を支える | 再現性のある仕組みが、未経験者を支える | 才能ではなく構造 | 学習 / レビュー / 実践 | 仕組みのループを示す | Kikai提供価値への橋渡し | confirmed | medium | svg_diagram | keep | 学習とレビューと実践の支援ループ | ただのミニカード列 | ready |
| P28 | Kikai Value | slide-plan P28 | だから、Kikaiを作りました | だから、Kikaiを作りました | 作る人のためのコミュニティ | コミュニティの意義 | 章扉兼価値提示 | Kikai登場の必然性を示す | confirmed | medium | image2_split | keep | コミュニティハブの具体的シーン | 抽象的な群衆背景、色付き背景 | ready |
| P29 | Kikai Value | slide-plan P29 | Kikaiは黄金ルートの前半を全力で伴走する | Kikaiは黄金ルートの前半を全力で伴走する | 前半伴走 | 学ぶ / 動き出す / 広げる | P20との差を明確にする | Kikaiが担う範囲を具体化する | confirmed | high | svg_diagram | keep | 黄金ルートのうちKikaiが伴走する領域を色分けする | P20と同じ見え方、カード重なり | ready |
| P30 | Kikai Value | slide-plan P30 | Kikaiは5位一体で、学ぶ・作る・売るをつなぐ | Kikaiは5位一体で、学ぶ・作る・売るをつなぐ | 5要素パッケージ | 教育 / 品質 / 案件 / マーケット / コミュニティ | 構造の中心を明確にする | Kikaiの全体像を理解させる | confirmed | high | svg_diagram | keep | 中央Kikai核と5要素アーキテクチャ | 生成画像への依存、読めないパッケージ図 | ready |
| P31 | Kikai Value | slide-plan P31 | 品質チェックが、AI生成コードの不安を減らす | 品質チェックが、AI生成コードの不安を減らす | 品質チェック | プロエンジニア品質チェック | 不安の正体と対策を分ける | AI生成コードへの不安を具体的に解く | confirmed | high | svg_diagram | keep | バグ、セキュリティ、運用、レビューゲートを構造化 | 汎用盾、抽象リスクSVG、円数字ズレ | ready |
| P32 | Kikai Value | slide-plan P32 | 将来的にクローズド案件供給まで広げる | 将来的にクローズド案件供給まで広げる | 案件供給の将来像 | 自分で取る / 運営から降りてくる | Now/Futureの段階を明確にする | 今後の拡張余地を示す | assumption | medium | svg_diagram | keep | Now/Next/Laterまたは案件供給パイプライン | 過剰な未来イラスト | ready |
| P33 | Kikai Value | slide-plan P33 | Made with Kikai は販売の壁を下げる | Made with Kikai は販売の壁を下げる | 販売導線 | 決済まで完結 / Stripe開設不要 | UIライクな見た目を使う | 作ったものを売る導線を示す | assumption | high | image2_split | keep | マーケットプレイスUIと販売フロー | 枠付き画像、実在サービス風ロゴ | ready |
| P34 | Kikai Value | slide-plan P34 | Kikaiの前後で、AIとの関係が変わる | Kikaiの前後で、AIとの関係が変わる | 消費者から創り手へ | Before / After | クロージングは散らさない | 最終メッセージを定着させる | confirmed | medium | none | keep | Before/Afterを大きく見せる。余計なSVGは入れない | グラフ風SVG、盾、散らばった飾り | ready |

## Claims And Evidence

| Claim / number / example | Source | Status | Slide(s) | Handling |
|---|---|---|---|---|
| 非エンジニアから事業化まで経験している | existing brief / source script | assumption | P02, P23 | show on slide, keep details in notes |
| 開発期間が数ヶ月から数日〜数週間へ変わった | existing slide-plan / source script | assumption | P14 | show as directional comparison, avoid overclaiming exact universal result |
| 80.9%、4.8%、80-85%、300%増、月$200 | existing slide-plan / source script | assumption | P18 | show only if source remains documented; otherwise keep caveat in notes |
| 初月200万円、現在400万円、13万円・50万円案件 | existing brief / source script | assumption | P24 | show as source-stated examples, avoid independent verification wording |
| Stripe開設不要で即販売可能 | existing slide-plan / source script | assumption | P33 | show as product/offer claim if current service details are still true |
| CTA分岐は未確定 | existing brief | open | P34 | keep closing as understanding/next-action framing, not hard sales CTA |

## Speaker Note Policy

- Keep source-script detail in speaker notes when it explains examples, background, or caveats.
- Keep high-risk numerical detail in notes unless the slide needs it as proof.
- Keep product-specific mechanics in notes when the rendered slide should stay simple.
- Use notes to bridge sections: AI活用の前提化 → プロダクト側 → 現実チェック → 受託入口 → Kikai提供価値.

## Format Handoff Notes

- selected format for future workflow test: `kikai-business-visual-ppt`
- format status: `candidate/current`
- required body structure: header / title / optional lead / body / footer
- body placement rule: center body in the available vertical region between lead/title and footer, not the full slide
- typography concern: seminar projection needs larger body and card heading type
- color/brand concern: white background, dark gray text, `#FC754A` as main orange, avoid red/gold/Bordeaux drift
- visual slot concern: card visuals must target semantic card slots; no vague `body` or `card whole` instructions
- QA concern: check duplicate images, distorted aspect ratios, generic graph/shield decoration, empty table rows, and card text overlap

## Contract Findings

- The existing `slide-plan.md` already provides section, pattern, core message, body, and visual need.
- The existing `quality-audit.md` supplies `current_visual_fit` and layout judgment, but only in a simplified Keep/Replace language.
- The normalized Content Pack needs `claim_status` because many useful proof points are source-stated but not independently verified.
- The normalized Content Pack should keep `suggested_visual_depiction` separate from final slot names. Exact slot names belong to Visual Plan.
- For visual-rich decks, `density_target`, `visual_need`, `current_visual_fit`, and `avoid` are not optional; they prevent the same mistakes from recurring.
