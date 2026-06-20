# Format Check

## Request

- company / client: kikai
- deck purpose: visual-rich-seminar

## Existing Format Search

| Candidate | Path | Company fit | Purpose fit | Capability score | Visual slots | Brand visual style | Prompt template | QA gate |
|---|---|---|---|---:|---|---|---|---|
| kikai-business-visual-ppt | deck-system/formats/kikai-business-visual-ppt | yes | match (2) | 9/9 | yes | yes | yes | yes |
| kikai-business-ppt | deck-system/formats/kikai-business-ppt | yes | match (1) | 6/9 | no | no | no | yes |
| kikai-vibe-coding-salon | deck-system/formats/kikai-vibe-coding-salon | yes | match (1) | 5/9 | no | no | no | yes |

## Decision

- decision: `use-existing-format`
- selected candidate: kikai-business-visual-ppt
- selected path: deck-system/formats/kikai-business-visual-ppt

## Missing Capabilities On Selected Candidate

- none

## Next Step

- proceed to Script → Content Pack



## Notes

This is a mechanical scan. The agent must still confirm purpose fit, brand fit, and whether the user wants a new visual direction.

## Agent Review

- For a Kikai visual-rich seminar deck, `kikai-business-visual-ppt` is the correct entry point because it has fixed visual slots, brand visual style, image prompt template, and QA.
- `kikai-business-ppt` remains useful for dense business-report decks, but it should not be the default for image2/SVG-rich seminar material because it lacks the visual prompt contract.
- `kikai-vibe-coding-salon` is brand-relevant but too plain for the current visual workflow.

## Workflow Result

Start from existing format:

- `deck-system/formats/kikai-business-visual-ppt/`

Next workflow step:

- `Script → Content Pack`
