# Skill Map

This workflow should become a parent workflow skill that orchestrates smaller atomic skills.

## Parent Workflow Skill

`script-to-visual-deck`

Responsibility:

- run the sequence
- create/resume workflow artifacts
- stop at gates when needed
- choose existing format or trigger format creation
- coordinate content, visual, asset, composition, and QA steps

## Atomic Skills

| Skill | Responsibility | Input | Output |
|---|---|---|---|
| `deck-format-check` | Determine whether a usable Company / Purpose Format exists | company, purpose, deck-system registry | `format-check.md` |
| `plain-to-company-format` | Create/update a format from Plain Base and brand evidence | base format, brand inputs, purpose | format pack |
| `script-to-content-pack` | Formalize existing script intake and slide-plan artifacts into deck-ready content, density judgment, and early visual need | script, audience, goal, format-check | content pack |
| `content-to-slide-plan` | Optional compatibility split when the content pack is created in stages | content pack | `slide-plan.md` |
| `slide-plan-to-visual-plan` | Map slides to layout patterns and visual slots | slide plan, format pack | `visual-plan.json` |
| `visual-plan-to-asset-prompts` | Generate image2/SVG/icon prompt artifacts | visual plan, brand style, prompt template | `asset-prompts.json` |
| `deck-compose-html` | Render HTML deck from format/content/assets | format pack, content pack, assets | `index.html` |
| `deck-qa-audit` | Validate rendered deck page by page | rendered deck | `qa-report.md` |

## Skillization Order

Build skills in this order:

1. `deck-format-check`
2. `script-to-content-pack`
3. `slide-plan-to-visual-plan`
4. `visual-plan-to-asset-prompts`
5. `deck-qa-audit`
6. `plain-to-company-format`
7. `deck-compose-html`
8. parent `script-to-visual-deck`

## Draft Skill Specs

- `skills/deck-format-check/SKILL.md`: Step 0 atomic skill for choosing existing/update/new format path.
- `skills/script-to-content-pack/SKILL.md`: Step 2 atomic skill for normalizing source material into brief, narrative, slide plan, speaker notes, claims, density, and early visual judgment.

## Examples

- `examples/kikai-format-check.md`: mechanical and agent-reviewed format decision for a Kikai visual-rich seminar.
- `examples/kikai-content-pack.md`: 34-slide Content Pack conversion from the existing Kikai seminar deck artifacts.

Reason:

- format check and content pack are the stable entry points
- visual planning and asset prompts are where the recent quality gains came from
- QA must be available before full automation
- composition should come after contracts are stable

## Gate Policy

Stop for review when:

- no existing format is found and a new company format must be derived
- brand assets or usage rights are unclear
- slide count or narrative structure conflicts with the user's request
- visual plan uses many generated images or real-person assets
- QA finds layout or factual issues that require content decisions

Continue autonomously when:

- existing format is valid
- script is clear
- visual slots are specific
- assets are generated placeholders without third-party rights concerns
- QA issues are purely layout/CSS fixes
