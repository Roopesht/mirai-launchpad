# Epic 5 — Content Sections

**Goal**: every visible section of the site.

## Locked decisions
- **Site structure**: hybrid — home page is a single scroll, plus separate full pages/routes for Resume, full Projects list, Blog, and Customize. The questionnaire's headline pattern ("Hero → About → Skills → Projects preview → Contact") didn't say where Hobbies/Testimonials/Gallery go — since Gallery is separately locked as "near Contact", the full implemented order is: **Hero → About → Skills → Hobbies → Projects preview → Testimonials → Gallery → Contact**.
- **Hero** (new, ST-100): full-height, name + tagline + CTA buttons — "View Resume" → `/resume`, "See Projects" → `/projects`, "Let's talk" → scrolls to the Contact block on the same home page (Contact lives in the scroll, per the site-structure decision above, not its own route).
- **Copy tone**: clean, professional copy — the Gen-Z energy comes from visuals/theme, not slang or emoji.
- **Projects**: clicking a card opens a dedicated project detail page. Featured projects (`featured: true`) are sorted first, no separate badge.
- **Testimonials**: static grid of cards, no carousel.
- **Contact form**: name + email + message only (no subject field).
- **Gallery** (promoted from "Could" to "Must"): titled photo grid, images committed under `public/gallery/`, sourced from `gallery.json` (ST-103). No separate "Now" text block.
- **Resume "Download PDF"**: hidden entirely (not disabled) when `personal.resumePdfUrl` is unset.
- **Blog**: ships with 2 placeholder posts; no syntax highlighting for code blocks (plain Markdown formatting only).

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-100 | Hero section | Must |
| ST-041 | About/Story | Must |
| ST-042 | Skills (categorized, proficiency bars) | Must |
| ST-043–ST-048 | Resume: contact, summary, experience, education, certifications, awards | Must/Should |
| ST-049 | Resume "Download PDF" (hidden if no URL) | Must |
| ST-050–ST-052 | Projects grid, card detail, featured-first | Must/Should |
| ST-053 | Hobbies section | Must |
| ST-054–ST-055 | Blog list + detail (2 placeholder posts, no syntax highlighting) | Must |
| ST-056 | Testimonials grid | Should |
| ST-057–ST-059 | Contact section + form (name/email/message) + feedback states | Must/Should |
| ST-060 | Gallery (titled photos) | Must |

Full acceptance criteria: `docs/stories.md` Epic 5.

## Status

Every section is its own component under `website/src/components/sections/` (`Hero`, `About`, `Skills`, `Hobbies`, `ProjectsPreview`, `Testimonials`, `Gallery`, `Contact`), assembled by `HomePage.tsx` in the order above. `ProjectCard` and `ProficiencyBar` are shared between the home preview and their respective full pages (`ProjectsPage`, `ProjectDetailPage`) to avoid duplication. The Epic 3/4-era `HomePreviewPage` QA prototype was deleted once the real `HomePage` superseded it.

Two real bugs were caught and fixed while building this epic:
- **Markdown wasn't rendering.** `personal.bio` contains `**OjasaMirai**`; rendering it as plain text (not through a Markdown renderer) showed literal asterisks. Fixed by rendering `personal.bio` through `react-markdown` everywhere it appears (About section, Resume summary).
- **Contact form silently failed on success.** `event.currentTarget` becomes `null` after an `await` inside a React event handler (it's only valid during synchronous dispatch) — calling `.reset()` on it post-`fetch` threw, which the `catch` swallowed into the *error* branch even on a successful submit. Fixed by capturing `event.currentTarget` into a local variable before the `await`.

Also: blog Markdown parsing was moved from a client-side `import.meta.glob` + `gray-matter` call into a build-time Vite plugin (`vite-plugin-blog-posts.ts`, exposing `virtual:blog-posts`) — gray-matter is Node-oriented and was pulling in a `Buffer` polyfill and a direct `eval()` call when bundled for the browser, which also didn't match requirements.md's "parsed at build time" framing for ST-022. `gray-matter` moved from `dependencies` to `devDependencies` accordingly.

Verified via the full Vitest suite (73 tests) and Playwright screenshots of Home, Resume, Projects, and Blog with zero console errors.
