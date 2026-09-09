# Delivery Backlog — User Stories

Derived from `docs/requirements.md`. Covers the entire delivery: scaffolding, data layer, theming, sections, routing, CI/CD, non-functional requirements, and documentation. Nothing here is implemented yet unless marked **Done**.

Roles used: **Visitor** (views the deployed site), **Forker** (clones the template to make their own site), **Maintainer** (owns content/updates after setup).

Priority: **Must** (v1 blocker) · **Should** (v1, not blocking) · **Could** (nice-to-have).

## Epic 1 — Project Scaffolding & Tooling

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-001 | As a Maintainer, I want a Vite + React + TypeScript project scaffolded, so I have a working dev/build baseline. | `npm run dev` and `npm run build` succeed on a clean clone. | Must | Pending |
| ST-002 | As a Maintainer, I want Node 20 pinned, so local and CI environments match. | `engines.node` set in `package.json`; workflow uses `node-version: 20`. | Must | Pending |
| ST-003 | As a Maintainer, I want Tailwind CSS configured, so components can be styled and themed via CSS variables. | `tailwind.config`, PostCSS, base styles wired in. | Must | Pending |
| ST-004 | As a Maintainer, I want shadcn/ui installed and configured, so I have accessible, theme-aware component primitives. | `components.json` configured; Button, Card, Dialog, NavigationMenu generated and rendering. | Must | Pending |
| ST-005 | As a Maintainer, I want React Router installed with a route tree, so navigation between sections works as real routes. | Routes defined for every section/page in §4 of requirements. | Must | Pending |
| ST-006 | As a Maintainer, I want Framer Motion installed, so section/page transitions are possible. | Library installed; at least one transition wired as proof. | Should | Pending |
| ST-007 | As a Maintainer, I want lucide-react installed, so icons are available across components. | Library installed; used in nav/theme switcher. | Should | Pending |
| ST-008 | As a Maintainer, I want zod installed with a shared validation utility, so JSON content can be runtime-validated. | Utility function exists and is reused by every data loader. | Must | Pending |
| ST-009 | As a Maintainer, I want ESLint + Prettier configured, so code style stays consistent across contributions/forks. | Lint script passes on a clean checkout. | Should | Pending |
| ST-010 | As a Maintainer, I want a sensible `.gitignore` (node_modules, dist, .env), so build artifacts and secrets aren't committed. | File present and effective. | Must | Pending |

## Epic 2 — Data Layer & Schemas

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-011 | As a Forker, I want `site.config.json` with a typed schema and loader, so site-wide settings are structured and validated. | Interface + zod schema + loader implemented per §5. | Must | Pending |
| ST-012 | As a Forker, I want `personal.json` with a typed schema and loader, so my identity/bio content is structured and validated. | Same as above for `Personal`. | Must | Pending |
| ST-013 | As a Forker, I want `experience.json` with a typed schema and loader, so my work history is structured and validated. | Schema covers company/role/dates/highlights[]. | Must | Pending |
| ST-014 | As a Forker, I want `education.json` with a typed schema and loader, so my education history is structured and validated. | Schema covers institution/degree/field/dates. | Must | Pending |
| ST-015 | As a Forker, I want `skills.json` with a typed schema and loader, so skills render by category with proficiency. | Schema covers category → items with proficiency. | Must | Pending |
| ST-016 | As a Forker, I want `certifications.json` with a typed schema and loader, so certifications appear on the Resume page. | Schema + loader implemented. | Must | Pending |
| ST-017 | As a Forker, I want `awards.json` with a typed schema and loader, so awards/achievements appear on the Resume page. | Schema + loader implemented. | Must | Pending |
| ST-018 | As a Forker, I want `projects.json` with a typed schema and loader, so my projects render as cards. | Schema matches `Project` interface in §5. | Must | Pending |
| ST-019 | As a Forker, I want `hobbies.json` with a typed schema and loader, so my hobbies render as a section. | Schema + loader implemented. | Must | Pending |
| ST-020 | As a Forker, I want `testimonials.json` with a typed schema and loader, so quotes render as a section. | Schema covers name/role/company/quote/avatar. | Must | Pending |
| ST-021 | As a Forker, I want `socials.json` with a typed schema and loader, so social links render in header/footer/contact. | Schema covers platform/url/icon. | Must | Pending |
| ST-022 | As a Maintainer, I want blog posts authored as Markdown files with frontmatter, parsed at build time, so I can write posts without a CMS. | `content/blog/*.md` parsed for title/date/tags/excerpt + body. | Must | Pending |
| ST-023 | As a Forker, I want every JSON file to ship with realistic placeholder data, so the app looks complete immediately after cloning. | Fresh clone renders every section fully populated before any edits. | Must | Pending |
| ST-024 | As a Forker, I want a clear validation error at dev/build time when a data file doesn't match its schema, so I know exactly what to fix instead of seeing a blank page. | Malformed JSON produces a readable error naming file + field. | Should | Pending |

## Epic 3 — Theming System

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-025 | As a Maintainer, I want a defined theme token contract (CSS variables for background/foreground/primary/accent/radius/font/etc.), so every theme implements the same interface. | Token list documented and enforced by a type/shape. | Must | Pending |
| ST-026 | As a Visitor, I want a "Modern Minimal" theme, so I can view the site in a clean light style. | Token file implemented; visually matches description in §6. | Must | Pending |
| ST-027 | As a Visitor, I want a "Dark Tech" theme, so I can view the site in a dark, code-accented style. | Token file implemented; visually matches description in §6. | Must | Pending |
| ST-028 | As a Visitor, I want a "Vibrant Creative" theme, so I can view the site in a colorful, energetic style. | Token file implemented; visually matches description in §6. | Must | Pending |
| ST-029 | As a Visitor, I want a "Blue Professional" theme, so I can view the site in a conservative corporate style. | Token file implemented; visually matches description in §6. | Must | Pending |
| ST-030 | As a Visitor, I want a visible theme switcher control, so I can change the site's look. | Control present in header on every page. | Must | Pending |
| ST-031 | As a Visitor, I want my theme choice applied instantly across the whole site, so the switch feels immediate. | Selecting a theme updates all CSS variables without reload. | Must | Pending |
| ST-032 | As a Visitor, I want my theme choice remembered on return visits, so I don't have to reselect it every time. | Choice persisted in `localStorage`, restored on load, falls back to `defaultTheme`. | Must | Pending |
| ST-033 | As a Visitor using a keyboard/screen reader, I want the theme switcher to be operable and labeled, so I can use it without a mouse. | Switcher is keyboard-reachable, has ARIA label/role. | Must | Pending |
| ST-034 | As a Visitor, I want sufficient text/background contrast in every theme, so content stays readable. | All 4 themes pass WCAG AA contrast checks. | Must | Pending |
| ST-035 | As a Forker, I want new themes discoverable purely via `site.config.json.availableThemes`, so I can add a 5th theme without touching component code. | Adding a token file + config entry is sufficient; verified with a test 5th theme. | Should | Pending |

## Epic 4 — Navigation & Layout Shell

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-036 | As a Visitor, I want a global header showing the site owner's name/title and navigation, so I can orient and move around the site. | Header present on every route, pulls from `personal.json`. | Must | Pending |
| ST-037 | As a Forker, I want nav items rendered from `site.config.json.navigation` (respecting `enabled`/`order`), so I can turn sections on/off or reorder them without editing components. | Disabling/reordering an entry changes rendered nav and available routes. | Must | Pending |
| ST-038 | As a Visitor on mobile, I want a collapsible nav (hamburger/drawer), so navigation doesn't break the layout on small screens. | Nav collapses below a defined breakpoint and is usable. | Must | Pending |
| ST-039 | As a Visitor, I want a footer with social links and copyright, so I can find contact info from any page. | Footer present on every route, pulls from `socials.json`/`personal.json`. | Should | Pending |
| ST-040 | As a Visitor using assistive tech, I want a skip-to-content link and landmark regions, so I can navigate efficiently. | Skip link present; `header`/`nav`/`main`/`footer` landmarks used. | Should | Pending |

## Epic 5 — Content Sections

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-041 | As a Visitor, I want an About/Story section, so I understand who the site owner is and what drives them. | Renders `personal.bio` with heading/layout, markdown supported. | Must | Pending |
| ST-042 | As a Visitor, I want a Skills section with categorized visuals, so I can quickly see technical vs. other skills. | Renders `skills.json` grouped by category with a visual indicator (grid/bars). | Must | Pending |
| ST-043 | As a Visitor, I want a Resume page showing contact info, so I know how to reach the site owner. | Renders email/phone/location from `personal.json`. | Must | Pending |
| ST-044 | As a Visitor, I want the Resume page to show a professional summary, so I get a quick overview. | Renders summary text. | Must | Pending |
| ST-045 | As a Visitor, I want the Resume page to list work experience, so I can review the career history. | Renders `experience.json` chronologically with highlights. | Must | Pending |
| ST-046 | As a Visitor, I want the Resume page to list education, so I can review academic background. | Renders `education.json`. | Must | Pending |
| ST-047 | As a Visitor, I want the Resume page to list certifications, so I can see verified credentials. | Renders `certifications.json`. | Should | Pending |
| ST-048 | As a Visitor, I want the Resume page to list awards/achievements, so I can see recognitions. | Renders `awards.json`. | Should | Pending |
| ST-049 | As a Visitor, I want a "Download PDF" button on the Resume page, so I can save/print an offline copy. | Button links to `personal.resumePdfUrl`, opens/downloads correctly. | Must | Pending |
| ST-050 | As a Visitor, I want a Projects section showing a grid of project cards, so I can browse the site owner's work. | Renders `projects.json` as a responsive card grid. | Must | Pending |
| ST-051 | As a Visitor, I want each project card to show title, description, tech tags, links, and optional image, so I can evaluate a project at a glance. | Card renders all populated `Project` fields; missing optional fields degrade gracefully. | Must | Pending |
| ST-052 | As a Visitor, I want featured projects visually highlighted, so I see the most important work first. | `featured: true` projects are visually distinguished and/or sorted first. | Should | Pending |
| ST-053 | As a Visitor, I want a Hobbies section with icon/image + short blurb per hobby, so I get a personal, human view of the site owner. | Renders `hobbies.json` as a visual list/grid. | Must | Pending |
| ST-054 | As a Visitor, I want a Blog list page showing post title/date/tags/excerpt, so I can browse available writing. | Renders all parsed posts sorted by date descending. | Must | Pending |
| ST-055 | As a Visitor, I want a Blog post detail page rendering full content, so I can read a full article. | Markdown body rendered with correct formatting at `/blog/:slug`. | Must | Pending |
| ST-056 | As a Visitor, I want a Testimonials section showing quotes with name/role/company/avatar, so I can see third-party endorsement. | Renders `testimonials.json` as cards or carousel. | Should | Pending |
| ST-057 | As a Visitor, I want a Contact section showing email and social links, so I know how to get in touch. | Renders `personal.email` + `socials.json`. | Must | Pending |
| ST-058 | As a Visitor, I want a working contact form, so I can send a message directly from the site. | Form submits to the configured Formspree endpoint from `site.config.json.contactForm`. | Should | Pending |
| ST-059 | As a Visitor, I want clear success/error feedback after submitting the contact form, so I know whether my message went through. | UI shows a distinct success state and a distinct error state. | Should | Pending |
| ST-060 | As a Visitor, I want a Gallery/Now block near Contact, so I can see photos or current focus areas. | Renders configured gallery images or "now" text block. | Could | Pending |

## Epic 6 — Routing & GitHub Pages Compatibility

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-061 | As a Forker, I want the router's `basename` driven from `site.config.json.basePath`, so the app works at any deployment path without code changes. | Changing `basePath` alone relocates all routes correctly. | Must | Pending |
| ST-062 | As a Forker, I want Vite's `base` build config wired to the same `basePath` value, so I only change one setting, not two. | Single value drives both router and build config. | Must | Pending |
| ST-063 | As a Visitor, I want deep links (e.g. `/projects`) to work on refresh/direct visit, so shared URLs don't 404. | Build step copies `index.html` to `404.html`; verified on a deployed project-page URL. | Must | Pending |
| ST-064 | As a Forker, I want all asset references to be relative/base-aware, so the same build works unmodified at `/` or `/repo-name/`. | No hardcoded root-relative asset paths in source; verified in both deployment shapes. | Must | Pending |
| ST-065 | As a Forker, I want optional custom-domain support via a `CNAME` file, so I can use my own domain if I want one. | `CNAME` absent by default; documented how to add it. | Could | Pending |

## Epic 7 — Fork & Setup Workflow

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-066 | As a Forker, I want an interactive `npm run setup` CLI, so I can enter my details once instead of hand-editing multiple JSON files. | Script prompts for site title, name/title/tagline, repo name, email, socials, default theme. | Must | Pending |
| ST-067 | As a Forker, I want the setup script to write my answers into `site.config.json`/`personal.json`/`socials.json`, so my inputs take effect immediately. | Files updated correctly after running the script. | Must | Pending |
| ST-068 | As a Forker, I want the setup script to update `package.json` `name`/`homepage`, so packaging metadata matches my fork. | Fields updated to match provided repo/site info. | Should | Pending |
| ST-069 | As a Forker, I want the setup script to be safely re-runnable, so I can correct earlier answers without corrupting my data. | Running it twice doesn't duplicate/corrupt entries; existing values shown as defaults. | Should | Pending |

## Epic 8 — CI/CD & Deployment

> Kept intentionally: GitHub Pages only auto-builds plain Jekyll sites, not a Vite/React app — a build step (here, GitHub Actions) is still required for anything to deploy. Considered deleting this epic on 2026-09-09; decision was to keep it.

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-070 | As a Forker, I want a GitHub Actions workflow that builds and deploys to GitHub Pages on push to `main`, so publishing is automatic. | `.github/workflows/deploy.yml` runs `npm ci && npm run build` then deploys `dist/` via `actions/upload-pages-artifact` + `actions/deploy-pages`. | Must | Pending |
| ST-071 | As a Forker, I want pull requests to run a build-only CI check, so broken content/config is caught before merge. | PR workflow runs `npm run build` without deploying; fails PR on build error. | Should | Pending |
| ST-072 | As a Forker, I want the deploy workflow to require no committed build artifacts, so `dist/`, `gh-pages` branch, etc. never need manual upkeep. | No build output committed to the repo; verified `.gitignore` excludes `dist/`. | Must | Pending |
| ST-073 | As a Maintainer, I want the legacy empty `docs/` build-folder usage removed/clarified now that it holds planning docs instead, so there's no confusion about which deploy method is active. | README/workflow make clear `docs/` is documentation-only, not a Pages source. | Should | Pending |

## Epic 9 — Non-Functional Requirements

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-074 | As a Visitor on any device, I want a responsive layout, so the site is usable on mobile, tablet, and desktop. | Verified at standard breakpoints with no broken/overflowing layout. | Must | Pending |
| ST-075 | As a Visitor with motion sensitivity, I want animations reduced/disabled when `prefers-reduced-motion` is set, so the site doesn't cause discomfort. | All Framer Motion animations check and respect the media query. | Must | Pending |
| ST-076 | As a Visitor, I want images lazy-loaded and appropriately sized, so pages load quickly. | `loading="lazy"` (or equivalent) applied; images sized for their display context. | Should | Pending |
| ST-077 | As a Maintainer, I want the built site to score ≥90 on Lighthouse performance, so visitors get a fast experience. | Verified on the production build. | Should | Pending |
| ST-078 | As a Maintainer, I want SEO meta tags/OpenGraph tags driven by `site.config.json.seo`, so link previews and search results look correct. | Title/description/og:image render per route via `react-helmet-async`. | Should | Pending |
| ST-079 | As a Maintainer, I want a generated `sitemap.xml`, so search engines can discover all pages. | Generated at build time, includes all routes. | Could | Pending |
| ST-080 | As a Maintainer, I want a `robots.txt`, so crawler behavior is explicit. | Included in build output. | Could | Pending |
| ST-081 | As a Visitor, I want a print-friendly Resume view, so I can print or export it cleanly. | Dedicated print stylesheet (or print-optimized view) produces a clean printed page. | Should | Pending |
| ST-082 | As a Forker, I want a fresh clone with only placeholder data to build and deploy with zero errors, and no personal data hardcoded outside `src/data`/`content`, so forking is safe and reliable. | Clean clone → setup skipped → `npm run build` succeeds; grep confirms no PII outside those directories. | Must | Pending |

## Epic 10 — Documentation Deliverables

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-083 | As a Forker, I want a `README.md` covering fork/setup/customize/deploy steps, so I can get a working site without asking anyone. | Covers all steps in requirements §8, plus adding a theme and toggling sections. | Must | Pending |
| ST-084 | As a Maintainer, I want a `MAINTAINER-GUIDE.md` delivered after implementation, so I know how to update data, add a blog post, add a theme, toggle sections, and add a new component. | Matches scope in requirements §11; written against the app as actually built. | Must | Pending |
| ST-085 | As a Forker, I want an MIT `LICENSE` file, so reuse/modification rights are explicit. | `LICENSE` file present at repo root. | Must | Pending |
| ST-086 | As a stakeholder, I want the requirements captured in `docs/requirements.md`. | File present and current. | Must | **Done** |
| ST-087 | As a stakeholder, I want open assumptions captured in `docs/assumptions.md`. | File present and current. | Must | **Done** |
| ST-088 | As a stakeholder, I want the full delivery backlog captured in `docs/stories.md`. | This file. | Must | **Done** |

## Epic 11 — Sponsor Attribution (OjasaMirai)

See requirements.md §13. Intentionally outside the normal fork-customization path.

| ID | User Story | Acceptance Criteria | Priority | Status |
|---|---|---|---|---|
| ST-089 | As the Publisher, I want a permanent footer badge promoting OjasaMirai (logo + tagline + link), so every fork carries attribution to the training institute by default. | Footer renders `https://images.ojasamirai.com/ojasa/common/logo.png`, tagline "Trained at OjasaMirai — training industry-ready professionals", and a link to `https://ojasamirai.com` (`target="_blank" rel="noopener noreferrer"`) on every page. | Must | Pending |
| ST-090 | As the Publisher, I want the badge hardcoded into the core `Footer` component rather than sourced from any `src/data/*.json` file, so it isn't exposed on the normal content-editing path a forker uses. | Badge markup/content lives directly in the component; no `site.config.json`/other JSON field controls or disables it. | Must | Pending |
| ST-091 | As a Visitor, I want the badge to visually adapt to whichever of the 4 themes is active, so it reads as a native part of the design rather than a bolted-on ad. | Badge uses the active theme's CSS-variable tokens (colors/radius/font); verified across all 4 themes. | Must | Pending |
| ST-092 | As the Publisher, I want an automated test that fails the build if the badge's logo, link, or text is removed or altered, so casual removal is caught by CI, not silently shipped. | A Vitest + React Testing Library test asserts the exact logo `src`, link `href`, and link text render in `Footer`; wired into the PR build-check workflow (Epic 8) and must pass for CI to go green. | Must | Pending |
| ST-093 | As a Forker, I want the README/Maintainer Guide to explicitly explain the OjasaMirai badge and that it's CI-enforced, so I understand it upfront rather than hitting a surprise failed build. | README and `MAINTAINER-GUIDE.md` each contain a short, clearly-labeled section on this badge and why it's protected. | Must | Pending |
