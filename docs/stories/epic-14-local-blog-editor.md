# Epic 14 — Local Development Blog Editor

**Goal**: Epic 13's counterpart for `content/blog/*.md` — write and edit blog posts locally without hand-editing Markdown files, launched from the same `/customize` dev-tools hub.

## Why a separate epic from Epic 13

The `src/data/*.json` files Epic 13 edits are a **fixed, known list** — 12 files, always present, always the same names. Blog posts are **user-named files** (`YYYY-MM-DD-slug.md`) that get created over time. That difference drives real UI differences (a "new post" flow that derives a filename from a title; a growing/shrinking file list instead of a fixed one), so this stays its own epic rather than a case inside Epic 13's file picker — but it reuses Epic 13's patterns throughout: raw-text editing (not a form), schema validation before save, a dev-server middleware for the write-back, and the same `import.meta.env.DEV` production-safety guarantee.

## Locked decisions

- **Launched from `/customize`**: same hub as the JSON editor (Epic 13's ST-111), not a separately-discovered tool.
- **New post flow**: enter a title → filename is derived as `YYYY-MM-DD-slug.md` (today's date + a slugified title) → opens pre-filled with the required frontmatter (`title`, `date`, `tags`, `excerpt`) and an empty body.
- **Editing surface**: one raw text editor per post covering frontmatter + body together — consistent with Epic 13's "raw text, not a form" choice, and simpler than splitting frontmatter fields from a body textarea.
- **Validation**: reuses the existing frontmatter zod schema (currently inline in `src/lib/content/blog.ts`) — parsed the same way `vite-plugin-blog-posts.ts` already parses every post at build time.
- **Persistence**: extends (or sits alongside) Epic 13's dev-server middleware, scoped to `content/blog/` instead of `src/data/`. A save either creates a new file or overwrites an existing one.
- **Production safety**: identical guarantee to Epic 13 (ST-109/ST-117) — dev-only route, dev-only middleware, no code path that runs against a deployed site.

## Stories

| ID | Story | Priority |
|---|---|---|
| ST-112 | Local-only blog editor route, lists existing posts | Must |
| ST-113 | "New post" flow derives filename from a title | Must |
| ST-114 | Edit an existing post's frontmatter + body as one raw text block | Must |
| ST-115 | Validate frontmatter against the existing schema before saving | Must |
| ST-116 | Save writes to `content/blog/` (create or overwrite) | Must |
| ST-117 | Completely absent from the production build/deployed site | Must |

Full acceptance criteria: `docs/stories.md` Epic 14.
