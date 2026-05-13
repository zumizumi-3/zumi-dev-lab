# Plain Neutral Base Format

## Position

Plain Neutral is the default base format for slide generation. It intentionally avoids brand colors, logos, patterned backgrounds, decorative gradients, and strong visual identity.

Use it when:

- a company-specific or purpose-specific format has not been created yet
- the user wants a conservative document-like deck
- an existing brand deck will be analyzed later and applied as a derived format
- the slide structure needs to be reviewed before visual styling

## Base Rules

- 16:9 slide canvas
- white slide background
- no background illustration, gradient, grid, or decorative texture
- black/gray typography only
- thin neutral borders for cards, panels, and tables
- one slide, one message
- body points should stay at 2 to 3 points
- details belong in speaker notes or source docs

## Core Patterns

| ID | Pattern | Use |
|---|---|---|
| PN-00 | Cover | Title and deck context |
| PN-01 | Section divider | Chapter transition |
| PN-02 | Message with 3 cards | Principle, conclusion, core points |
| PN-03 | Split | Claim plus proof, text plus visual |
| PN-04 | Comparison | Before/After, current/future |
| PN-05 | Process | 3 to 5 step flow |
| PN-06 | Table | Structured comparison |
| PN-07 | Closing | Summary or core rule |
| PN-08 | Agenda | Chapter flow and deck overview |
| PN-09 | Key numbers | Metric summary with 3 numbers |
| PN-10 | Callout | Main point plus supporting details |
| PN-11 | Checklist | Completion criteria and review gates |
| PN-12 | Decision branch | Yes/No or go/no-go decisions |
| PN-13 | Timeline | Milestones and staged work |
| PN-14 | Matrix | 2x2 positioning and prioritization |
| PN-15 | Hierarchy | Pyramid or layered structure |
| PN-16 | Anatomy | Break down an object into parts |
| PN-17 | Visual canvas | Placeholder for screenshots, visuals, or diagrams |
| PN-18 | Case | Persona plus situation and question |
| PN-19 | Prompt breakdown | Decompose instructions or scripts |
| PN-20 | Roadmap | Now / Next / Later execution plan |
| PN-21 | Q&A | Anticipated questions and answer frame |
| PN-22 | Do / Don't | Rules, guidelines, or operating principles |
| PN-23 | Appendix list | References, source links, and open items |
| PN-24 | Pattern set closing | Format rules and derivation summary |
| PN-25 | Title + generated image | Keep only the title as text; use an AI-generated image for the remaining message |
| PN-26 | Title + lead + generated image | Keep title and lead as text; use an AI-generated image for supporting context |
| PN-27 | Text-only narrative | Express the slide entirely with prose |
| PN-28 | Text-only two column | Long-form text split into two reading columns |
| PN-29 | Light separator | Soft transition between topics or slides |
| PN-30 | Pause / break | Short break, demo setup, or work transition |
| PN-31 | EOF | End-of-file or final closing slide |

## Image-Generation Patterns

Use PN-25 and PN-26 when the slide should rely on generated imagery for everything beyond the protected text.

- PN-25 keeps only the title as HTML text.
- PN-26 keeps the title and lead as HTML text.
- The generated image should carry scene, metaphor, mood, and supporting detail.
- Do not put precise claims, numbers, legal text, or source citations inside the generated image.
- If the generated image needs text, place that text in HTML instead unless it is purely incidental.

## Text-Only Patterns

Use PN-27 and PN-28 when the slide should be entirely verbal.

- Use PN-27 for narrative, editorial, or principle-based pages.
- Use PN-28 when long text needs two reading lanes.
- Avoid cards, icons, diagrams, and image placeholders in these patterns.
- Keep paragraph roles clear: conclusion, context, implication, next action.

## Transition Patterns

Use PN-29, PN-30, and PN-31 for pacing.

- PN-29 is a light separator between adjacent topics.
- PN-30 is a pause or work-break slide.
- PN-31 is EOF and should be the final slide unless a purpose-specific format adds contact or appendix pages after it.

## Derivation Rule

When making a purpose-specific format from this base, keep layout and density rules stable. Add brand-specific tokens only in the derived format:

- font family
- brand colors
- logo placement
- footer/header rules
- section divider treatment
- background treatment
- chart/table style
- screenshot frame style
