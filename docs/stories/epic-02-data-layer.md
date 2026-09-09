# Epic 2 — Data Layer & Schemas

**Goal**: every piece of content is a typed, validated JSON file (or Markdown for blog posts).

## Locked decisions
- **Content sourcing**: Bio, Experience, Education, Skills, Contact/Socials → real content adapted from roopesht.github.io (content only — the old site's plain layout/design was explicitly not carried forward; Epic 3's theme decisions stand as locked). Projects, Hobbies, Testimonials, Gallery photos, Resume PDF, Avatar → no source exists, ship **obvious placeholder content** (e.g. "Sample Project 1") for the forker to replace later.
- **Positioning (per `docs/new.md`)**: `personal.json.title` is framed as **"AI Engineer"** rather than the old site's literal "Entrepreneur & Tech Educator" — the bio/summary and `skills.json` were adapted to lead with AI/ML-adjacent skills (Machine Learning, Generative AI & LLMs, Data Science) alongside the real background, per an explicit request to make the resume fit an AI Engineer target role. All underlying facts (companies, dates, degree) are unchanged from the source site.
- New data file: **`gallery.json`** — array of `{ id, title, imageFile }`; images committed under `public/gallery/`.
- New config field: **`site.config.json.analytics`** — `{ provider: "ga4", measurementId: string }`, optional, page-views only.
- New config field: **`site.config.json.favicon`** — path to favicon asset.
- **Asset convention**: static images live under `public/images/` (`public/images/avatar.*`, `public/images/projects/*`, `public/images/testimonials/*`), gallery images under `public/gallery/` (kept separate since ST-060/103 reference it directly).
- **Placeholder images**: generated/local (e.g. initials-based avatar, solid-color placeholder blocks) — no third-party stock photos, to avoid licensing questions in a publicly-forked template.
- Skills proficiency: keep as designed in requirements §5 (category → items with proficiency) — represent proficiency as a 1–5 scale bar in the UI (Epic 5 concern, schema just stores the number).

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-011–ST-021 | Schema + loader for site.config, personal, experience, education, skills, certifications, awards, projects, hobbies, testimonials, socials | Must |
| ST-022 | Blog Markdown + frontmatter parsing | Must |
| ST-023 | Placeholder data ships for every file | Must |
| ST-024 | Readable validation errors on malformed data | Should |
| ST-098 | `site.config.json.favicon` support | Should |
| ST-101 | `site.config.json.analytics` (GA4) schema | Should |
| ST-103 | `gallery.json` schema + loader | Must |

Full acceptance criteria: `docs/stories.md` Epic 2 (ST-101 duplicated under Epic 9 — it's one implementation, listed in both epics because it touches data schema and the runtime behavior it enables).

## Status

All schemas + loaders implemented under `website/src/lib/content/` (one file per entity, each using the shared `validateData()` utility from Epic 1), backed by real/placeholder JSON under `website/src/data/` and 2 placeholder posts under `website/content/blog/`. ST-101's schema (the `analytics` field) is in place; the runtime snippet-loading behavior remains an Epic 9 task. All content loaders are covered by a Vitest suite (`src/lib/content/index.test.ts`) proving they load and validate without throwing. Section *rendering* (ST-023's "renders every section" and ST-042's proficiency bars) is deferred to Epic 5 — this epic only covers the data layer.
