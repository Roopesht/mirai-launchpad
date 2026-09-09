# Epic 5 — Content Sections

**Goal**: every visible section of the site.

## Locked decisions
- **Site structure**: hybrid — home page is a single scroll (Hero → About → Skills → Projects preview → Contact), plus separate full pages/routes for Resume, full Projects list, Blog, and Customize.
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
