# Epic 7 — Fork & Setup Workflow

**Status: entire epic superseded, 2026-09-13 — should not be implemented.**

The original goal was "a forker goes from clone to configured site with one CLI run," via an interactive `npm run setup` script. That's dropped in favor of Epic 13's local JSON editor: once it exists, a forker configures `site.config.json`/`personal.json`/`socials.json` by editing fields directly, with schema validation, instead of answering CLI prompts that write the same files.

## What this actually costs (read before treating this as free)

The CLI would have *computed* two things a forker now has to get right by hand:

- **`basePath`** — was `/<entered-repo-name>/`, computed from the repo name typed into the prompt. Now the forker must know the convention and set `site.config.json.basePath` to `/<repo-name>/` themselves.
- **`package.json`'s `homepage`** — was `https://<username>.github.io/<repo-name>/`, built from GitHub username + repo name. Epic 13 only edits `src/data/*.json`, not `package.json`, so this field has no guided path at all now — it's a plain manual edit.

**Action item for Epic 10 (README/Maintainer Guide)**: this needs an explicit, worked-example section — "set `basePath` to `/your-repo-name/`, set `package.json.homepage` to `https://your-username.github.io/your-repo-name/`" — so dropping the CLI doesn't quietly make forking harder without anyone noticing. Don't let Epic 10 skip this because "there's no setup script to document."

## Stories (all superseded)

| ID | Story | Priority |
|---|---|---|
| ST-066 | ~~Interactive setup CLI~~ | Must |
| ST-067 | ~~Writes config incl. `basePath`~~ | Must |
| ST-068 | ~~Updates `package.json` fields~~ | Should |
| ST-069 | ~~Safely re-runnable~~ (moot once ST-066/067/068 are dropped) | Should |

Full acceptance criteria: `docs/stories.md` Epic 7.
