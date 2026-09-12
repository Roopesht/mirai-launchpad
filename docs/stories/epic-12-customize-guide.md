# Epic 12 — In-App Customize Guide Page

**Goal**: a forker gets oriented inside the running app, no README required first.

## Locked decisions
- Route: `/customize`. Linked from the **main header nav** (not footer-only) while `showCustomizeGuide` is `true`.
- Content covers: which JSON file to edit per section, adding a blog post, adding/registering a theme, toggling sections via `site.config.json.navigation`, running `npm run setup`, and **setting up GA4 analytics** (ST-102).
- `showCustomizeGuide: boolean`, default `true`.
- Setting it to `false` removes the nav link only — the `/customize` route itself still works if visited directly; this is a "stop advertising it" switch, not a hard removal/404.

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-094 | `/customize` page, linked in main nav | Must |
| ST-095 | Content covers all six topics | Must |
| ST-096 | `showCustomizeGuide` hides nav link only (route stays reachable) | Must |
| ST-097 | Defaults to `true` | Must |

Full acceptance criteria: `docs/stories.md` Epic 12.

## Status

Implemented out of epic order (done directly after Epic 6, before Epics 7–11) — there's no hard dependency: ST-094/096/097's nav/route mechanics were already in place as a side effect of Epic 4's `Header`/`MobileTabBar` work (they gate a "Customize" nav item on `site.config.json.showCustomizeGuide` and register `/customize` unconditionally in `App.tsx`), and Epic 2 already defaulted the flag to `true`. The only new work was ST-095: the actual page content (`src/pages/CustomizePage.tsx`), covering all 6 required topics in Card-per-topic layout.

**Caveat worth tracking**: the content describes `npm run setup` (Epic 7) and the GA4 analytics snippet (Epic 9) — neither exists yet as working code at the time this page was written. This mirrors how `docs/stories.md` itself documents the locked target design ahead of implementation, so it's intentional, not an oversight — but it means this page's accuracy for those two topics depends on Epics 7 and 9 actually landing as described. Re-check this page's content against the real setup script and analytics wiring once those epics ship.

Verified: a dedicated test (`App.customize-toggle.test.tsx`) mocks `showCustomizeGuide: false` and confirms the nav link disappears while `/customize` still renders the real page directly — proving ST-096's behavior, not just asserting it by construction. Screenshot-verified visually with zero console/network errors.
