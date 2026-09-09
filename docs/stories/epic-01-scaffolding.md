# Epic 1 — Project Scaffolding & Tooling

**Goal**: a working, typed, lintable dev/build baseline.

## Locked decisions
- Runtime: Node.js 22 (LTS), pinned in `engines.node` + CI `node-version`.
- Stack: Vite + React 18+ (installed: React 19) + TypeScript, Tailwind CSS v4 (CSS-first config via `@tailwindcss/vite`) + shadcn/ui (Radix base, not the newer Base UI default), React Router, Framer Motion, lucide-react, zod.
- Lint/format: ESLint (flat config) + Prettier, default recommended rule sets. `create-vite`'s newer default linter, Oxlint, was explicitly swapped out for ESLint via `--eslint` to match this project's tooling choice.
- **Repo layout**: the app lives under `website/` (not the repo root) — `website/src`, `website/package.json`, etc. `docs/` stays at the repo root as planning documentation only. CI workflows (Epic 8) and the setup script (Epic 7) must run/write relative to `website/`.
- GitHub account: `roopesht`. Repo name: `mirai-launchpad` (public). Default branch: `main`.
- `package.json` `name`: `mirai-launchpad`.

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-001 | Vite + React + TS scaffold | Must |
| ST-002 | Node 22 pinned (engines + CI) | Must |
| ST-003 | Tailwind CSS configured | Must |
| ST-004 | shadcn/ui installed + configured | Must |
| ST-005 | React Router + route tree | Must |
| ST-006 | Framer Motion installed | Should |
| ST-007 | lucide-react installed | Should |
| ST-008 | zod + shared validation utility | Must |
| ST-009 | ESLint + Prettier configured | Should |
| ST-010 | `.gitignore` baseline | Must |
| ST-104 | Vitest + React Testing Library + `npm test` script | Must |

Full acceptance criteria: `docs/stories.md` Epic 1.
