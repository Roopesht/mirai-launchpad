# Epic 11 — Sponsor Attribution (OjasaMirai)

**Goal**: every fork carries OjasaMirai attribution by default, outside the normal customization path.

## Locked decisions
- **Tagline (final, CI-tested, verbatim)**: `"Trained at OjasaMirai — training industry-ready professionals"`.
- Logo: `https://images.ojasamirai.com/ojasa/common/logo.png`. Link: `https://ojasamirai.com` (`target="_blank" rel="noopener noreferrer"`).
- **Visual weight**: compact — logo + tagline inline, single line, in the footer.
- Styling adapts to the active theme (uses theme CSS-variable tokens).
- Hardcoded in the `Footer` component — not in any `src/data/*.json`.
- Enforced by a Vitest + React Testing Library test asserting the exact logo `src`, link `href`, and link text; wired into the PR workflow (Epic 8, ST-071) so a failing check blocks merge.
- README/Maintainer Guide disclose this badge and its CI enforcement upfront.

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-089 | Footer badge (logo + tagline + link) | Must |
| ST-090 | Hardcoded in `Footer`, not data-driven | Must |
| ST-091 | Adapts per active theme | Must |
| ST-092 | CI test enforces presence/exact content | Must |
| ST-093 | Documented in README/Maintainer Guide | Must |

Full acceptance criteria: `docs/stories.md` Epic 11.
