import fs from "node:fs";
import path from "node:path";

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, ...rest] = arg.replace(/^--/, "").split("=");
    return [key, rest.join("=") || "true"];
  })
);

const root = process.cwd();
const formatsDir = path.join(root, "deck-system", "formats");
const company = (args.get("company") || "").toLowerCase();
const purpose = (args.get("purpose") || "").toLowerCase();
const purposeTerms = purpose.split(/[-_\s]+/).filter(Boolean);

const exists = (filePath) => fs.existsSync(filePath);
const read = (filePath) => (exists(filePath) ? fs.readFileSync(filePath, "utf8") : "");

const capabilitiesFor = (dir) => {
  const formatMd = read(path.join(dir, "format.md"));
  const lowerFormat = formatMd.toLowerCase();
  const hasPatternCatalog =
    exists(path.join(dir, "index.html")) ||
    exists(path.join(dir, "patterns.html")) ||
    exists(path.join(dir, "business-plain-patterns.html"));
  const hasVisualSlots = exists(path.join(dir, "visual-slots.json"));
  const hasBrandVisualStyle = exists(path.join(dir, "brand-visual-style.md"));
  const hasPromptTemplate = exists(path.join(dir, "image-prompt-template.md"));
  const hasQaGate = exists(path.join(dir, "qa-check.mjs")) || lowerFormat.includes("validation gate");
  const hasParentBase = lowerFormat.includes("parent_base_format") || lowerFormat.includes("parent base");
  const hasBodyRule = lowerFormat.includes("body") && lowerFormat.includes("center");

  return {
    formatMd: exists(path.join(dir, "format.md")),
    tokens: exists(path.join(dir, "tokens.css")),
    patternCatalog: hasPatternCatalog,
    parentBase: hasParentBase,
    bodyRule: hasBodyRule,
    visualSlots: hasVisualSlots,
    brandVisualStyle: hasBrandVisualStyle,
    promptTemplate: hasPromptTemplate,
    qaGate: hasQaGate
  };
};

const score = (caps) =>
  Object.values(caps).reduce((sum, value) => sum + (value ? 1 : 0), 0);

const formatDirs = fs
  .readdirSync(formatsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(formatsDir, entry.name));

const candidates = formatDirs
  .map((dir) => {
    const id = path.basename(dir);
    const formatMd = read(path.join(dir, "format.md"));
    const searchable = `${id}\n${formatMd}`.toLowerCase();
    const companyFit = !company || searchable.includes(company);
    const purposeScore = purposeTerms.filter((term) => searchable.includes(term)).length;
    const purposeFit = companyFit && (!purposeTerms.length || purposeScore > 0);
    const caps = capabilitiesFor(dir);
    return {
      id,
      path: path.relative(root, dir),
      companyFit,
      purposeFit,
      purposeScore,
      score: score(caps),
      caps
    };
  })
  .sort(
    (a, b) =>
      Number(b.companyFit) - Number(a.companyFit) ||
      b.purposeScore - a.purposeScore ||
      Number(b.purposeFit) - Number(a.purposeFit) ||
      b.score - a.score
  );

const visualRich = /visual|image|svg|rich|seminar/.test(purpose);
const best = candidates[0];
const readyForVisual = (candidate) =>
  candidate?.caps.formatMd &&
  candidate?.caps.tokens &&
  candidate?.caps.patternCatalog &&
  candidate?.caps.parentBase &&
  candidate?.caps.bodyRule &&
  (!visualRich ||
    (candidate.caps.visualSlots &&
      candidate.caps.brandVisualStyle &&
      candidate.caps.promptTemplate &&
      candidate.caps.qaGate));

let decision = "create-new-format";
const selected = best?.companyFit ? best : null;
if (readyForVisual(selected) && selected.purposeFit) {
  decision = "use-existing-format";
} else if (selected?.purposeFit) {
  decision = "update-existing-format";
}

const yesNo = (value) => (value ? "yes" : "no");
const rows = candidates
  .map(
    (candidate) =>
      `| ${candidate.id} | ${candidate.path} | ${candidate.companyFit ? "yes" : "no"} | ${candidate.purposeFit ? `match (${candidate.purposeScore})` : `partial (${candidate.purposeScore})`} | ${candidate.score}/9 | ${yesNo(candidate.caps.visualSlots)} | ${yesNo(candidate.caps.brandVisualStyle)} | ${yesNo(candidate.caps.promptTemplate)} | ${yesNo(candidate.caps.qaGate)} |`
  )
  .join("\n");

const missing = selected
  ? Object.entries(selected.caps)
      .filter(([, value]) => !value)
      .map(([key]) => `- ${key}`)
      .join("\n") || "- none"
  : "- no candidate formats";

const output = `# Format Check

## Request

- company / client: ${company || "(not specified)"}
- deck purpose: ${purpose || "(not specified)"}

## Existing Format Search

| Candidate | Path | Company fit | Purpose fit | Capability score | Visual slots | Brand visual style | Prompt template | QA gate |
|---|---|---|---|---:|---|---|---|---|
${rows}

## Decision

- decision: \`${decision}\`
- selected candidate: ${selected ? selected.id : "(none)"}
- selected path: ${selected ? selected.path : "(none)"}

## Missing Capabilities On Selected Candidate

${missing}

## Next Step

${decision === "use-existing-format" ? "- proceed to Script → Content Pack" : ""}
${decision === "update-existing-format" ? "- update the selected Company / Purpose Format before script ingestion" : ""}
${decision === "create-new-format" ? "- derive a new Company / Purpose Format from a Plain Base before script ingestion" : ""}

## Notes

This is a mechanical scan. The agent must still confirm purpose fit, brand fit, and whether the user wants a new visual direction.
`;

if (args.has("out")) {
  const outPath = path.resolve(root, args.get("out"));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, output);
} else {
  process.stdout.write(output);
}
