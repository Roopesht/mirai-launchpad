# Portfolio Template — Requirements

## 1. Purpose

Build a personal portfolio/profile web app that is significantly more visually engaging than the current [roopesht.github.io](https://roopesht.github.io) (which is a plain, text-only single-page resume). Beyond serving as Roopesh's own site, the repo is designed as a **public, forkable template**: anyone can fork it, edit a handful of JSON files, run a setup script, and deploy their own portfolio to GitHub Pages — with no root-user-page assumptions baked in, and every configurable value visible and overridable by the forker.

**Target audience: Gen Z (ages 20–28)**, early-career professionals using this to land a job. This shapes tone, typography, and motion choices across the design (see §6) — the design should feel current and energetic to this age group, not like a traditional corporate resume site.

## 2. Reference Analysis — current site

Captured from https://roopesht.github.io for contrast, not to be replicated:

- Single page, plain text, no color palette, no imagery.
- Sections: Header (name/title/contact), Professional Summary, Current Ventures, Previous Experience, Education, Skills, Contact/Social.
- No theming, no navigation, no interactivity, no responsive design considerations evident.

The new site should keep the same *substance* (it's still fundamentally a resume) but present it with real visual design, navigation, motion, and structure.

## 3. Tech Stack

| Concern | Choice | Notes |
|---|---|---|
| Runtime | Node.js 20 (LTS) | Pinned via `engines.node` in `package.json` and `node-version: 20` in the GitHub Actions workflow, so local dev and CI match. |
| Framework | React 18+ with Vite | Fast dev server, first-class static build for GitHub Pages, no server runtime needed. Vite 5+ requires Node 18+; Node 20 satisfies this. |
| Language | TypeScript | Type-safe JSON content schemas via `interface`/`zod`. |
| Styling / Components | Tailwind CSS + shadcn/ui | shadcn components are copied into the repo (not an npm dependency), built on Radix primitives, and themed entirely through CSS variables — this is what makes a multi-theme switcher clean to implement and extend. |
| Routing | React Router (`BrowserRouter`) | See §7 for base-path handling. |
| Animation | Framer Motion | Section reveals, page transitions, theme-switch transition. Must respect `prefers-reduced-motion`. |
| Content | Local JSON files (+ Markdown for blog posts) | See §5. No CMS, no backend. |
| Icons | lucide-react | Pairs natively with shadcn/ui. |
| Forms (Contact) | Formspree (or similar static-friendly form endpoint) | GitHub Pages is static; no backend for form submission. Endpoint is a config value, not hardcoded. |
| Deployment | GitHub Actions → GitHub Pages (`actions/deploy-pages`) | See §8. |
| License | MIT | Repo is meant to be forked and reused freely. |

## 4. Suggested Sections (beyond Resume / Projects / Hobbies)

Confirmed for v1:

1. **About / Story** — short narrative bio, philosophy, what drives the person (expands the old "Professional Summary").
2. **Skills** — visual grid/bars, split into technical vs. non-technical (e.g. entrepreneurial) categories.
3. **Resume** — standard resume sections: contact info, summary, work experience, education, skills, certifications, awards/achievements. Includes a "Download PDF" action.
4. **Projects** — cards with title, description, tech tags, links (repo/live demo), optional image, "featured" flag.
5. **Hobbies** — lighter, more personal section; icon/image + short blurb per hobby.
6. **Blog / Writing** — list + detail view for posts, authored as Markdown files with frontmatter. No CMS.
7. **Testimonials** — quotes with name/role/company/avatar, carousel or grid.
8. **Contact + Gallery/Now** — contact section (email, socials, optional working form) combined with either a photo gallery or a "what I'm doing now" block.

Navigation, section order, and which sections are enabled at all must be **configurable** (see `site.config.json` in §5) — a forker who doesn't want a Blog or Testimonials section should be able to turn it off without deleting code.

## 5. Content Data Model (JSON-driven)

All personal content lives under `src/data/`, kept separate from component code so a fork only needs to touch this directory (plus `content/blog/` for posts).

```
src/data/
  site.config.json     # site-wide settings, nav, enabled sections, theme config
  personal.json         # name, title, tagline, avatar, bio, location, contact
  experience.json        # work history
  education.json
  skills.json
  certifications.json
  awards.json
  projects.json
  hobbies.json
  testimonials.json
  socials.json
content/
  blog/
    2026-01-01-my-first-post.md   # frontmatter: title, date, tags, excerpt
```

Representative schemas (TypeScript, validated at runtime with `zod`):

```ts
// site.config.json
interface SiteConfig {
  siteTitle: string;
  tagline: string;
  basePath: string;              // "/" for a root user page, "/repo-name/" for a project page
  defaultTheme: ThemeId;
  availableThemes: ThemeId[];
  favicon: string;
  seo: { description: string; ogImage: string };
  navigation: { id: string; label: string; enabled: boolean; order: number }[];
  contactForm?: { provider: "formspree"; endpoint: string };
}

// personal.json
interface Personal {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  avatarUrl: string;
  bio: string;               // "About / Story" body, markdown allowed
  resumePdfUrl?: string;
}

// projects.json
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}
```

Similar shapes for `experience.json` (company/role/dates/highlights[]), `education.json`, `skills.json` (category → items with proficiency), `certifications.json`, `awards.json`, `hobbies.json` (title/description/icon), `testimonials.json` (name/role/company/quote/avatar), `socials.json` (platform/url/icon).

All JSON files ship with **realistic placeholder/sample data** (standard resume boilerplate) so the app runs and looks complete immediately after cloning, before any editing.

## 6. Theming System

- Ships with **4 default themes**, selectable at runtime by the visitor via a theme switcher in the header. Per the Gen Z target audience (§1), **3 of the 4 lean into current, energetic Gen Z visual trends**; **Blue Professional is the deliberate exception** — kept conservative for anyone who wants a safer, recruiter-formal look:
  1. **Modern Minimal** — light, bold oversized type, one loud accent color, chunky rounded shapes/thick borders (soft-brutalist touches rather than sterile whitespace-only minimalism) — clean but with personality.
  2. **Dark Tech** — dark background, monospace/code accents, neon glow highlights, subtle cyberpunk/synthwave edge — "builder/founder" feel that reads as current, not just "dark mode."
  3. **Vibrant Creative** — gradient mesh backgrounds, duotone imagery, glassmorphism cards, playful blob/shape accents — the most maximalist and trend-forward of the four.
  4. **Blue Professional** — light, corporate-safe navy/blue palette, conservative type, minimal motion — intentionally **not** Gen-Z-styled; the "safe default" option.
- Themes are implemented as CSS-variable token sets (shadcn/ui convention: `--background`, `--foreground`, `--primary`, `--accent`, `--radius`, etc.), one file per theme under `src/themes/`.
- **Extensible by design**: adding a 5th theme means adding one token file and one entry in `site.config.json.availableThemes` — no component code changes required.
- Selected theme persists per-visitor via `localStorage`; falls back to `defaultTheme` from config, independent of OS light/dark preference (each theme is a complete palette, not just a light/dark pair).
- All 4 themes must meet WCAG AA contrast for text/background pairs.

## 7. Routing & GitHub Pages Constraints

The template must not assume it will live at a root user page (`username.github.io`) — it must work equally well at a project page (`username.github.io/repo-name/`) or a custom domain, and every forker-visible setting must live in plain config, not hidden logic.

- **Router**: `BrowserRouter` with `basename` driven directly from `site.config.json.basePath` (single source of truth, also feeds Vite's `base` config at build time — one value to change, not two).
- **Deep-link fallback**: standard GitHub Pages SPA trick — build step copies `index.html` to `404.html` so refreshing/sharing a deep route (e.g. `/projects`) doesn't 404. Included and pre-wired; no forker action needed.
- **Asset paths**: all asset references must be relative/base-aware (no hardcoded `/assets/...`), so the same build works unmodified whether deployed at `/` or `/some-repo/`.
- **Custom domain**: optional `CNAME` file, empty/absent by default, documented in README for anyone who wants one — never assumed.
- No server-side rendering, no API routes, no environment secrets required at runtime (Formspree endpoint is a public-safe config value).

## 8. Fork & Setup Workflow

1. Fork / use-this-template on GitHub.
2. Clone locally.
3. Run `npm install && npm run setup` — an interactive CLI (Node script, e.g. using `prompts`) that asks for: site title, your name/title/tagline, GitHub username, GitHub repo name (used to derive `basePath` and, combined with the username, `package.json.homepage`), contact email, social links, and default theme — then writes these directly into `site.config.json` / `personal.json` / `socials.json` and updates `package.json` (`name`, `homepage`).
4. Edit the remaining `src/data/*.json` files (experience, projects, hobbies, etc.) and `content/blog/*.md` with real content — placeholders show the expected shape.
5. `npm run dev` to preview locally.
6. Push to `main` — GitHub Actions workflow builds and deploys to GitHub Pages automatically (see §9).
7. Enable GitHub Pages in repo settings with source = "GitHub Actions" (one-time, manual, documented in README since it can't be automated from inside the repo).

README must document all of the above explicitly, plus how to add a 5th theme and how to enable/disable/reorder sections via `site.config.json.navigation`.

## 9. Build & Deployment Pipeline

- GitHub Actions workflow (`.github/workflows/deploy.yml`): on push to `main`, run `npm ci && npm run build`, then deploy `dist/` via `actions/upload-pages-artifact` + `actions/deploy-pages`.
- Chosen over committing a `docs/` build folder or a `gh-pages` branch because it requires no committed build artifacts, works identically for a user-page or project-page repo, and is the current GitHub-recommended approach.
- The existing empty `docs/` folder in this repo is not used by this workflow — flag to the user for cleanup/removal once the new setup is in place, since keeping an unused folder around invites confusion about which deploy method is active.
- PR builds: optionally run `npm run build` (no deploy) as a CI check on pull requests, to catch broken forks/content early.

## 10. Non-Functional Requirements

- **Responsive**: mobile-first layout, tested at common breakpoints (mobile/tablet/desktop).
- **Accessibility**: semantic HTML, keyboard-navigable theme switcher and nav, WCAG AA contrast in every theme, `prefers-reduced-motion` respected for all Framer Motion animations.
- **Performance**: images lazy-loaded and served appropriately sized; target a Lighthouse performance score ≥ 90 on the built site.
- **SEO**: per-section meta tags/OpenGraph via `react-helmet-async` (title, description, og:image from `site.config.json.seo`); `sitemap.xml` and `robots.txt` generated at build time.
- **Print-friendly**: a print stylesheet (or a distinct "resume view") so the Resume section prints/exports cleanly, in addition to the linked PDF download.
- **Fork hygiene**: no personally-identifying content hardcoded outside `src/data/` and `content/`; a fresh clone with only placeholder data must build and deploy successfully with zero errors.

## 11. Deliverable: Maintainer Guide

A `MAINTAINER-GUIDE.md` (or `docs/maintainer-guide.md`) is a required deliverable, written and handed over **after implementation is complete** (documents the app as actually built, not as planned). Must cover, in plain non-framework-jargon steps:

- **Updating data**: which JSON file to edit for each section (personal info, experience, projects, hobbies, skills, testimonials, etc.), the expected shape of each field, and how to add/remove/reorder entries (e.g. add a project, add a job, add a hobby).
- **Adding a blog post**: file naming convention, required frontmatter fields.
- **Adding a new theme**: where the token file goes, which variables must be set, how to register it in `site.config.json`.
- **Enabling/disabling/reordering sections**: via `site.config.json.navigation`.
- **Adding a wholly new section/component** (not covered by existing data files): where new components live, how to wire a new nav entry + route, and the minimum a new "section" component needs (props shape, theming hooks) to fit the existing pattern.
- **Local run & deploy**: `npm install`, `npm run dev`, `npm run build`, how the GitHub Actions deploy is triggered, and how to check it succeeded.

Goal: someone with no React experience can update content confidently; someone with basic React experience can add a new component/section without reverse-engineering the codebase.

## 12. Out of Scope (v1)

- CMS / admin UI for editing content (JSON + Markdown files are the "CMS").
- User accounts, comments, or any backend/database.
- Server-rendered pages or analytics beyond a config-driven, optional tracking snippet.
- Automated multi-language/i18n support (may be a future enhancement).

## 13. Sponsor Attribution (OjasaMirai)

The template carries a permanent, non-configurable attribution badge promoting OjasaMirai ("training industry-ready professionals"), the site owner's training institute. Unlike every other piece of content, this is **not** a forker-editable data file — it's intentionally outside the JSON customization path so a fork retains it by default.

- **Placement**: global footer, rendered on every page.
- **Content**: OjasaMirai logo (`https://images.ojasamirai.com/ojasa/common/logo.png`), final locked tagline text **"Trained at OjasaMirai — training industry-ready professionals"**, link to `https://ojasamirai.com` (`target="_blank" rel="noopener noreferrer"`). Rendered compact — logo + tagline inline, single line.
- **Implementation**: hardcoded directly in the core `Footer` component — not read from `site.config.json` or any other `src/data/*.json` file, so it cannot be turned off via normal content editing.
- **Styling**: adapts visually to each of the 4 active themes (uses the same CSS-variable tokens as the rest of the site) so it reads as a native, intentional part of the design in every theme, not a bolted-on ad.
- **Enforcement**: a dedicated automated test (e.g. Vitest + React Testing Library) asserts the `Footer` renders the exact logo `src`, link `href`, and link text. This test runs in the PR build-check workflow (Epic 8 / §9) and the test must pass for CI to go green — removing or altering the badge breaks the build, not just "looks different."
- **Transparency**: the README/Maintainer Guide explicitly documents that this badge exists, why, and that it's enforced by CI — so forkers understand it upfront rather than discovering it as a surprise build failure.
- Not intended as a hard technical impossibility to remove (anyone can edit source and delete the test too) — the goal is: out of the normal customization path, attractive enough to want to keep, and backed by a CI check that makes casual removal immediately visible as a broken build.

## 14. In-App Customize Guide Page

A dedicated in-app page (not just README/Maintainer Guide) explaining how to customize the site, so a forker sees orientation immediately when running the app, without leaving the browser.

- **Route**: e.g. `/customize` — a real page in the app, built the same way as any other section.
- **Content**: plain-language walkthrough covering which `src/data/*.json` file to edit for each section, how to add a blog post, how to add/register a new theme, how to use `site.config.json.navigation` to enable/disable/reorder sections, and how to run `npm run setup`. This mirrors the Maintainer Guide (§11) but lives inside the running app itself.
- **Visibility toggle**: controlled by a new `site.config.json` flag, e.g. `showCustomizeGuide: boolean` — **default `true`** so it's visible out of the box on a fresh clone. The forker flips it to `false` once done customizing, before sharing the live link (e.g. with recruiters), to remove the nav link advertising it — the route itself still works if visited directly; this only stops pointing visitors at it.
- Linked from the **main header nav** (not footer-only) while the flag is `true`.
- Unlike the OjasaMirai badge (§13), this page is fully forker-controlled — it's meant to be turned off, not protected.

## 15. Open Assumptions to Confirm During Build

- Blog posts are static Markdown parsed at build time (no pagination/CMS) — flag if a different approach is wanted once the Blog section is actually built.
- Contact form uses Formspree as the default provider; swappable via `site.config.json.contactForm.provider` if another static-form service is preferred.
- `docs/` now holds planning documentation (requirements, assumptions, stories, tech stack) rather than being a GitHub Pages build source — confirmed, no longer an open assumption.
- All remaining open decisions were resolved via `docs/questionnaire.md` (2026-09-09) — see that file and the updated `docs/stories.md` for the final, locked answers (site IA, theme colors/fonts, nav behavior, content section details, OjasaMirai tagline, license holder, etc.). Nothing is open at this point; per-epic build specs live in `docs/stories/epic-*.md`.
