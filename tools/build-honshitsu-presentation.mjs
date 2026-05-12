import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const sourceRoot = "/home/zumi-dev/code/wah-bootcamp/projects/honshitsu-ai-course/slide-design/prototype";
const sourceHtmlPath = path.join(sourceRoot, "index.html");
const outputRoot = path.join(repoRoot, "honshitsu-ai-course");
const presentationRoot = path.join(outputRoot, "presentation");

const html = await readFile(sourceHtmlPath, "utf8");
const sections = [...html.matchAll(/<section id="(D[12]-\d{2})"[\s\S]*?<\/section>/g)].map((match) => ({
  id: match[1],
  html: match[0].replaceAll("./assets/", "../assets/"),
}));

const day1Slides = sections.filter((section) => section.id.startsWith("D1-"));
const day2Slides = sections.filter((section) => section.id.startsWith("D2-"));

if (day1Slides.length === 0 || day2Slides.length === 0) {
  throw new Error("Could not find Day 1 and Day 2 slide sections.");
}

await mkdir(path.join(presentationRoot, "day-1"), { recursive: true });
await mkdir(path.join(presentationRoot, "day-2"), { recursive: true });
await cp(path.join(sourceRoot, "assets"), path.join(presentationRoot, "assets"), { recursive: true, force: true });
await cp(path.join(sourceRoot, "styles.css"), path.join(presentationRoot, "styles.css"), { force: true });
await cp(path.join(sourceRoot, "slides.css"), path.join(presentationRoot, "slides.css"), { force: true });
await cp(path.join(sourceRoot, "print.css"), path.join(presentationRoot, "print.css"), { force: true });

await writeFile(path.join(presentationRoot, "day-1", "index.html"), buildDeckHtml({
  title: "本質のAI講座 Day 1",
  label: "Day 1",
  summary: "AIに任せる前に、自分の課題を整える",
  slides: day1Slides,
  otherDayHref: "../day-2/",
  otherDayLabel: "Day 2",
}), "utf8");

await writeFile(path.join(presentationRoot, "day-2", "index.html"), buildDeckHtml({
  title: "本質のAI講座 Day 2",
  label: "Day 2",
  summary: "自分の業務に戻せるAI活用フローを試作する",
  slides: day2Slides,
  otherDayHref: "../day-1/",
  otherDayLabel: "Day 1",
}), "utf8");

await writeFile(path.join(outputRoot, "index.html"), buildLandingHtml({
  day1Count: day1Slides.length,
  day2Count: day2Slides.length,
}), "utf8");

function buildDeckHtml({ title, label, summary, slides, otherDayHref, otherDayLabel }) {
  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="stylesheet" href="../assets/fonts/noto-sans-jp/noto_sans_jp_regular/css.css">
    <link rel="stylesheet" href="../assets/fonts/noto-sans-jp/noto_sans_jp_bold/css.css">
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../slides.css">
    <link rel="stylesheet" href="../presenter.css">
    <link rel="stylesheet" href="../print.css" media="print">
    <script src="../deck-controller.js" defer></script>
  </head>
  <body class="presentation-mode">
    <nav class="deck-toolbar" aria-label="プレゼン操作">
      <a class="deck-link" href="../../">一覧</a>
      <a class="deck-link" href="${otherDayHref}">${otherDayLabel}</a>
      <a class="deck-link" href="/work/">ワーク</a>
      <div class="deck-spacer"></div>
      <button class="deck-button" type="button" data-deck-action="prev" aria-label="前のスライド">‹</button>
      <span class="deck-counter" aria-live="polite">1 / ${slides.length}</span>
      <button class="deck-button" type="button" data-deck-action="next" aria-label="次のスライド">›</button>
      <button class="deck-button deck-notes-toggle" type="button" data-deck-action="notes" aria-pressed="false">Notes</button>
    </nav>
    <div class="deck-progress" aria-hidden="true"><span></span></div>
    <div class="deck-stage">
      <main class="deck presentation-deck" aria-label="${title}">
${slides.map((slide) => indent(slide.html, 8)).join("\n")}
      </main>
    </div>
    <aside class="notes-drawer" aria-label="講師ノート" aria-hidden="true">
      <header>
        <strong>${label} 講師ノート</strong>
        <button class="deck-button" type="button" data-deck-action="notes-close" aria-label="講師ノートを閉じる">×</button>
      </header>
      <pre class="notes-content"></pre>
    </aside>
    <div class="deck-meta" aria-hidden="true">
      <span>${label}</span>
      <span>${summary}</span>
    </div>
  </body>
</html>
`;
}

function buildLandingHtml({ day1Count, day2Count }) {
  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>本質のAI講座 公開資料</title>
    <style>
      :root {
        color-scheme: light;
        font-family: "Noto Sans JP", "Hiragino Sans", "Yu Gothic", Meiryo, sans-serif;
        --ink: #0f172a;
        --muted: #526174;
        --line: #d7e2eb;
        --paper: #fffdf7;
        --teal: #0f8b7f;
        --blue: #2563eb;
        --amber: #d97706;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        background:
          radial-gradient(circle at 88% 10%, rgba(37, 99, 235, 0.14), transparent 28%),
          linear-gradient(135deg, rgba(15, 139, 127, 0.12), transparent 44%),
          #eef4f7;
        color: var(--ink);
      }
      main {
        width: min(1120px, calc(100vw - 40px));
        margin: 0 auto;
        padding: 56px 0;
      }
      .eyebrow {
        margin: 0 0 14px;
        color: var(--teal);
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      h1 {
        margin: 0;
        max-width: 780px;
        font-size: clamp(40px, 6vw, 78px);
        line-height: 1.08;
        letter-spacing: 0;
      }
      .lead {
        max-width: 760px;
        margin: 24px 0 0;
        color: var(--muted);
        font-size: clamp(18px, 2.2vw, 24px);
        font-weight: 700;
        line-height: 1.7;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
        margin-top: 44px;
      }
      .card {
        display: grid;
        min-height: 180px;
        padding: 28px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: rgba(255, 253, 247, 0.94);
        color: inherit;
        text-decoration: none;
        box-shadow: 0 18px 48px rgba(15, 23, 42, 0.10);
      }
      .card strong {
        display: block;
        margin-bottom: 12px;
        font-size: 28px;
        line-height: 1.2;
      }
      .card span {
        color: var(--muted);
        font-size: 16px;
        font-weight: 700;
        line-height: 1.55;
      }
      .card.primary { border-top: 8px solid var(--teal); }
      .card.secondary { border-top: 8px solid var(--blue); }
      .card.work { border-top: 8px solid var(--amber); }
      .links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
      }
      .pill {
        display: inline-flex;
        min-height: 44px;
        align-items: center;
        padding: 10px 16px;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: #fff;
        color: var(--ink);
        font-weight: 800;
        text-decoration: none;
      }
      @media (max-width: 760px) {
        main { padding: 36px 0; }
        .grid { grid-template-columns: 1fr; }
      }
    </style>
  </head>
  <body>
    <main>
      <p class="eyebrow">Honshitsu AI Course</p>
      <h1>本質のAI講座 公開資料</h1>
      <p class="lead">講義スライドは1枚ずつ送れるプレゼン表示です。ワークページは入力内容をブラウザ内に保存し、講座後にレポート化できます。</p>
      <section class="grid" aria-label="主要リンク">
        <a class="card primary" href="./presentation/day-1/">
          <strong>Day 1 スライド</strong>
          <span>${day1Count}枚 / AIに任せる前に、自分の課題を整える</span>
        </a>
        <a class="card secondary" href="./presentation/day-2/">
          <strong>Day 2 スライド</strong>
          <span>${day2Count}枚 / 自分の業務に戻せるAI活用フローを試作する</span>
        </a>
        <a class="card work" href="/work/">
          <strong>ワークページ</strong>
          <span>Day 1 / Day 2 の入力、保存、レポート化</span>
        </a>
        <a class="card work" href="/work/day2/w-d2-08">
          <strong>アンケート用メモ</strong>
          <span>Day 2最後の振り返り項目。実施後アンケートの下書きとして使います。</span>
        </a>
      </section>
      <nav class="links" aria-label="補助リンク">
        <a class="pill" href="/work/day1">Day 1 ワーク</a>
        <a class="pill" href="/work/day2">Day 2 ワーク</a>
        <a class="pill" href="/work/report">レポート</a>
        <a class="pill" href="/work/instructor">講師確認</a>
        <a class="pill" href="../slide-previews/honshitsu-ai-course/">スクリーンショット一覧</a>
      </nav>
    </main>
  </body>
</html>
`;
}

function indent(value, spaces) {
  const prefix = " ".repeat(spaces);
  return value
    .split("\n")
    .map((line) => (line.length ? `${prefix}${line}` : line))
    .join("\n");
}
