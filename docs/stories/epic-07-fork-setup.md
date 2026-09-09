# Epic 7 — Fork & Setup Workflow

**Goal**: a forker goes from clone to configured site with one CLI run.

## Locked decisions
- `npm run setup` (Node + `prompts`) asks for: site title, name/title/tagline, **GitHub username**, GitHub repo name, contact email, socials, default theme.
- Script computes and writes `basePath` into `site.config.json` from the entered repo name.
- Updates `package.json` `name`/`homepage` — `homepage` is built from username + repo name (`https://<username>.github.io/<repo>/`), which also feeds the live-URL link in README.
- Safely re-runnable — shows existing values as defaults, doesn't duplicate/corrupt.

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-066 | Interactive setup CLI | Must |
| ST-067 | Writes config incl. `basePath` | Must |
| ST-068 | Updates `package.json` fields | Should |
| ST-069 | Safely re-runnable | Should |

Full acceptance criteria: `docs/stories.md` Epic 7.
