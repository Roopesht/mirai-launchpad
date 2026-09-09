# Epic 8 — CI/CD & Deployment

**Goal**: push to `main` deploys automatically; PRs are checked before merge.

## Locked decisions
- Kept (not deleted): GitHub Pages doesn't build a Vite/React app on its own — a build step is required regardless.
- Deploy workflow: `npm ci && npm run build` → `actions/upload-pages-artifact` + `actions/deploy-pages`, triggered on push to `main`.
- PR workflow: runs **both** `npm run build` and `npm test` (the latter needed so the OjasaMirai attribution test, ST-092, actually gates merges) — no deploy.
- No committed build artifacts (`dist/` gitignored); `docs/` is documentation-only, not a Pages source.

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-070 | Deploy workflow (build + deploy on push to main) | Must |
| ST-071 | PR workflow (build + test, no deploy) | Should |
| ST-072 | No committed build artifacts | Must |
| ST-073 | `docs/` clarified as documentation-only | Should |

Full acceptance criteria: `docs/stories.md` Epic 8.
