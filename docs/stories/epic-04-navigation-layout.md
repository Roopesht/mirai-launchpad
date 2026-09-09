# Epic 4 — Navigation & Layout Shell

**Goal**: the header/footer/mobile-nav shell every page shares.

## Locked decisions
- **Logo**: text wordmark (site owner's name/title) only — no icon/monogram.
- **Header scroll behavior**: shrinks/condenses past a scroll threshold (reduced height/padding), stays visible (not hide-on-scroll).
- **Mobile nav**: fixed **bottom tab bar** (not a hamburger drawer) — app-like, thumb-reachable.
- **Customize guide link**: appears in the **main header nav** when `showCustomizeGuide` is `true` (see Epic 12), not footer-only.
- **Footer**: social links (`socials.json`) + copyright + the OjasaMirai badge (Epic 11).
- Accessibility: skip-to-content link, semantic landmarks (`header`/`nav`/`main`/`footer`).

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-036 | Header: wordmark + nav, shrinks on scroll | Must |
| ST-037 | Nav items driven by `site.config.json.navigation` | Must |
| ST-038 | Mobile bottom tab bar | Must |
| ST-039 | Footer: socials + copyright | Should |
| ST-040 | Skip-to-content + landmarks | Should |

Full acceptance criteria: `docs/stories.md` Epic 4.
