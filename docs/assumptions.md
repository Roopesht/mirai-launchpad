# Assumptions

Not confirmed with the user — flag/correct before implementation locks these in.

## Content / scope

- "Standard resume sections" = contact, summary, experience, education, skills, certifications, awards.
- Blog = static Markdown, no pagination, no CMS.
- Gallery/Now combined into one simple section (no format spec given).
- Testimonials = name + role + company + quote + avatar.
- Contact form provider = Formspree.
- All JSON ships with placeholder data by default.

## Confirmed (no longer assumptions)

- Node.js 20 (LTS) as the runtime, pinned in `engines` and CI.
- GitHub Pages deployment is the target (feasibility confirmed).
- Repository name: **mirai-launchpad** — "Mirai" ties to the OjasaMirai brand (future), "Launchpad" signals the site's purpose (launching a career/securing a job). Used as the GitHub repo name and `package.json` `name` field.

## Technical

- React 18 + Vite (not Next.js/CRA/Remix).
- TypeScript throughout.
- Tailwind CSS as shadcn/ui's required companion.
- `BrowserRouter` + config-driven `basename` (not `HashRouter`) — user gave a principle ("override anything visible"), not this specific choice.
- Framer Motion for animation.
- lucide-react for icons.
- zod for runtime JSON validation.
- Theme persistence via `localStorage`.
- WCAG AA contrast target for all themes.
- Lighthouse performance ≥90 target (arbitrary bar, not requested).
- Deploy via GitHub Actions (`actions/deploy-pages`), not `gh-pages` branch or `docs/` folder.
- 404.html-copy SPA fallback trick assumed necessary for deep links.
- npm as package manager (not yarn/pnpm).
- Setup CLI assumed Node + `prompts` library, not scaffolded/verified.
- No i18n, no backend, no analytics beyond an optional config snippet.
- Existing `docs/` folder assumed safe to remove later — not confirmed with user.
- Single repo, no monorepo/workspaces.
