# Epic 6 — Routing & GitHub Pages Compatibility

**Goal**: the app deploys correctly as a GitHub Pages project page, for this repo and any fork.

## Locked decisions
- Router: `BrowserRouter` with `basename` from `site.config.json.basePath`.
- This deployment's values: GitHub account `roopesht`, repo `mirai-launchpad` (public), branch `main`, `basePath = "/mirai-launchpad/"`, live URL `https://roopesht.github.io/mirai-launchpad/`, no custom domain for now.
- `404.html` copy trick for deep-link refresh support (distinct from the in-app Not Found page).
- New: in-app catch-all **Not Found page** (ST-099) for genuinely invalid routes.

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-061 | Router `basename` from config | Must |
| ST-062 | Vite `base` wired to same value | Must |
| ST-063 | `404.html` deep-link fallback | Must |
| ST-064 | Relative/base-aware asset paths | Must |
| ST-065 | Optional `CNAME` support (not used now) | Could |
| ST-099 | In-app Not Found page | Should |

Full acceptance criteria: `docs/stories.md` Epic 6.
