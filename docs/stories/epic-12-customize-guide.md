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
