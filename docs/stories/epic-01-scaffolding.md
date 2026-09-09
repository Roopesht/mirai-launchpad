# Epic 1 — Project Scaffolding & Tooling

**Goal**: a working, typed, lintable dev/build baseline.

## Locked decisions
- Runtime: Node.js 20 (LTS), pinned in `engines.node` + CI `node-version`.
- Stack: Vite + React 18 + TypeScript, Tailwind CSS + shadcn/ui, React Router, Framer Motion, lucide-react, zod.
- Lint/format: ESLint + Prettier, default recommended rule sets.
- GitHub account: `roopesht`. Repo name: `mirai-launchpad` (public). Default branch: `main`.
- `package.json` `name`: `mirai-launchpad`.

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-001 | Vite + React + TS scaffold | Must |
| ST-002 | Node 20 pinned (engines + CI) | Must |
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
