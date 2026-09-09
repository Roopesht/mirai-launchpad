# Epic 9 — Non-Functional Requirements

**Goal**: the site is fast, accessible, and discoverable — and not invasive about tracking.

## Locked decisions
- Lighthouse performance target: **≥ 90**, confirmed.
- Analytics: **GA4, page-views only**, config-driven via `site.config.json.analytics` (ST-101) — no other tracking. Setup is documented on the in-app Customize page (ST-102, see Epic 12).
- Responsive, `prefers-reduced-motion` respected, lazy-loaded images, SEO meta/OpenGraph via `react-helmet-async`, `sitemap.xml` + `robots.txt` generated at build, print-friendly Resume view.
- Fork hygiene: fresh clone with placeholder data builds/deploys cleanly; no personal data hardcoded outside `src/data`/`content` (OjasaMirai badge is the documented, intentional exception — it's institutional, not personal).

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-074 | Responsive layout | Must |
| ST-075 | `prefers-reduced-motion` respected | Must |
| ST-076 | Lazy-loaded, sized images | Should |
| ST-077 | Lighthouse ≥ 90 | Should |
| ST-078 | SEO meta/OpenGraph | Should |
| ST-079 | `sitemap.xml` | Could |
| ST-080 | `robots.txt` | Could |
| ST-081 | Print-friendly Resume | Should |
| ST-082 | Fork hygiene / no hardcoded PII | Must |
| ST-101 | GA4 page-view analytics (config-driven) | Should |
| ST-102 | GA4 setup documented on Customize page | Should |

Full acceptance criteria: `docs/stories.md` Epic 9.
