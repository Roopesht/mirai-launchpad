# Epic 13 — Local Development Content Editor

**Goal**: a nicer way to edit `src/data/*.json` while running `npm run dev` locally — not a CMS for the deployed site.

## Why this doesn't reopen the "no CMS" decision

requirements.md §12 puts a "CMS / admin UI for editing content" out of scope for v1: the JSON files themselves are the content model, and the deployed site is static (GitHub Pages, no backend) with nothing to persist a save to. This epic doesn't change that — the editor:

- Only exists inside the local Vite dev server process (a small `configureServer` middleware), never in the production build.
- Edits the exact same `src/data/*.json` files a forker would otherwise open in a text editor — same content model, same schemas, same result.
- Is unreachable on the deployed site: the route itself only renders when `import.meta.env.DEV` is true.

It's a convenience layer over the existing edit-the-JSON-files workflow, not a second one.

## Locked decisions

- **Scope**: `src/data/*.json` only. `content/blog/*.md` is its own epic (14) — different structure/parsing pipeline (see Epic 2's `vite-plugin-blog-posts.ts`) and user-named files rather than a fixed list, which bundling in here would have made a much bigger addition.
- **Entry point**: launched from `/customize`, repurposed as a dev-tools hub (ST-111) rather than the Epic 12 text guide it replaced — see `epic-12-customize-guide.md`'s superseded note.
- **Editing surface**: raw JSON text per file, not a per-field form. The 12 data files each have a different shape; a form editor for all of them is a much bigger job (500+ lines vs. ~150–200) for the same practical benefit at this scope.
- **Validation**: reuses each file's existing zod schema from `src/lib/content/*.ts` — no new schemas, no new validation logic. A save that doesn't parse is rejected with the same kind of error `validateData()` already produces elsewhere.
- **Persistence**: a Vite dev-server middleware (registered via `configureServer`) that writes the validated JSON back to `src/data/<file>.json`, pretty-printed to match the existing files' formatting.
- **Production safety**: the editor route is dev-only (`import.meta.env.DEV` guard) and the write-back middleware is never part of the built output — there is no code path for this to run against a deployed site.

## Stories

| ID | Story | Priority |
|---|---|---|
| ST-105 | Local-only content editor route, lists editable files | Must |
| ST-106 | Select a file, edit its raw JSON | Must |
| ST-107 | Validate edits against the file's existing zod schema before saving | Must |
| ST-108 | Save writes back to the real file on disk (dev-server middleware) | Must |
| ST-109 | Completely absent from the production build/deployed site | Must |
| ST-110 | Distinct success/error feedback after saving | Should |
| ST-111 | `/customize` repurposed as a dev-tools hub (button per tool, prominent localhost-only notice) | Must |

Full acceptance criteria: `docs/stories.md` Epic 13.
