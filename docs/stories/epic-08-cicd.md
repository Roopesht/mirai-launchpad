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

## Status

Both workflows live under `.github/workflows/`: `deploy.yml` (push to `main` + a manual `workflow_dispatch` trigger) and `pr-checks.yml` (pull requests targeting `main`). The one detail that would have silently broken both if missed: **the app lives under `website/`, not the repo root** — every job sets `defaults.run.working-directory: website`, `actions/setup-node`'s `cache-dependency-path` points at `website/package-lock.json` (otherwise npm's cache never hits), and the deploy workflow's artifact `path` is `website/dist`, not `dist`.

`deploy.yml` uses a `concurrency` group (`pages`, `cancel-in-progress: false`) so overlapping pushes to `main` queue instead of racing; `pr-checks.yml` uses a per-PR concurrency group with `cancel-in-progress: true` so a new push to the same PR cancels its own stale check run rather than wasting a runner on it.

Verified: YAML parses cleanly (checked with `js-yaml`, since `actionlint` wasn't available/wanted in this environment); `npm ci`, `npm run build`, and `npm test` — the exact commands each workflow runs, in `website/` — all pass locally. **Not yet verified**: an actual GitHub Actions run, since that requires pushing to the real repo — recommend watching the first real run after this is pushed, particularly the Pages permissions/environment setup (`pages: write`, `id-token: write`, the `github-pages` environment) which can only be fully confirmed against the real repo's Pages settings.
