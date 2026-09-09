# Decision Questionnaire — mirai-launchpad

Fill in the **Your answer** line under each question (or just write `default` to accept the recommendation), save, and tell me it's submitted. Once you do, I'll write the per-epic spec docs in `stories/epic-*.md` using these answers — so nothing here should need revisiting mid-build.

**Scope note**: this only covers decisions that shape *how* the app is built (design, behavior, structure). It does **not** ask for your real resume content (name, actual job history, actual projects, actual photos) — v1 ships with placeholder data per ST-023, and you fill in real content later by editing the JSON files directly, per the Fork & Setup workflow (requirements §8). Say so in section A if you'd rather provide real content now instead.

---

## A. Scope & Content Strategy

**A1.** Real content now, or placeholder content now and you fill JSON files in later?
Options: `placeholder now (recommended)` / `I'll provide real content now`
Your answer: prepare the content from the `https://roopesht.github.io`

**A2.** Site structure — how should sections be arranged into pages/routes?
Options:
- `(a) Single long-scroll home page (Hero → About → Skills → Projects preview → Contact), with separate full pages only for Resume, full Projects list, Blog, and Customize` *(recommended — common modern portfolio pattern, still gives Resume/Projects their own shareable URLs)*
- `(b) Fully separate page per section, nav-only, no scroll landing page`
- `(c) Everything on one single scrolling page, no sub-pages at all`
Your answer:a

**A3.** Include a full-height Hero section (big name/tagline + CTA buttons like "View Resume" / "See Projects" / "Let's talk")? This isn't in the current backlog — I'll add it as a new story once confirmed.
Options: `yes (recommended)` / `no`
Your answer: yes

**A4.** Copy tone/voice across the site.
Options: `confident-casual, no emoji spam (recommended)` / `playful Gen Z voice with light emoji use` / `clean professional copy, let the visuals carry the Gen Z energy`
Your answer:clean professional copy, let the visuals carry the Gen Z energy

**A5.** Analytics: include a config-driven tracking snippet slot in v1?
Options: `no, skip entirely for v1 (recommended)` / `yes — Plausible` / `yes — GA4` / `yes, but just leave an empty documented slot for any provider`
Your answer: yes-GA4 (keep it just page visits) - nthing else (include how to configure GA4 in the how to use page)

---

## B. GitHub & Deployment Specifics

**B1.** GitHub username/org this repo will live under (needed to compute the default `basePath`, e.g. `/mirai-launchpad/`):
Your answer:/mirai-launchpad/

**B2.** Repo visibility: confirm **public** (required for free GitHub Pages on a personal account).
Options: `public (recommended)` / `private` *(note: private repos need GitHub Pro/Team for Pages)*
Your answer: public

**B3.** Default git branch name.
Options: `main (recommended)` / other:
Your answer:main

**B4.** Custom domain for this specific deployment, now or later?
Options: `no, use the default github.io URL (recommended for now)` / `yes — domain:`
Your answer:no, use the default github.io URL

---

## C. Theming Specifics

**C1.** Default active theme for a first-time visitor (before they pick one themselves).
Options: `Dark Tech (recommended — strongest Gen Z signal)` / `Modern Minimal` / `Vibrant Creative` / `Blue Professional`
Your answer:Dark Tech

**C2.** Theme switcher UI pattern.
Options: `dropdown/select menu (recommended — scales cleanly if a 5th theme is added later)` / `row of swatch buttons always visible` / `single cycling icon button`
Your answer:dropdown/select

**C3.** Modern Minimal — confirm or override: heading font **Space Grotesk**, body font **Inter**, accent color **#111111 text on white with one loud accent `#FF4D4D`** (placeholder hex, swap freely).
Your answer:confirm

**C4.** Dark Tech — confirm or override: font **JetBrains Mono** (headings + code) / **Space Grotesk** (body), background near-black **#0B0B0F**, neon accent **#39FF88** (green glow) or **#7C5CFF** (purple glow) — pick one or propose your own.
Your answer:confirm

**C5.** Vibrant Creative — confirm or override: font **Sora** (headings) / **Inter** (body), gradient direction/colors — e.g. **purple → pink → orange mesh** — confirm or propose your own palette.
Your answer:confirm

**C6.** Blue Professional — confirm or override: font **Source Sans 3**, navy **#0B2545**, accent blue **#2D7DD2**, white background. (Deliberately conservative — minor tweaks fine, but keep it non-Gen-Z.)
Your answer:confirm

**C7.** Motion intensity: same tasteful-subtle animation level across all 4 themes, or should Vibrant Creative specifically go more maximal (e.g. parallax, hover tilt, floating shapes) while the others stay subtle?
Options: `subtle everywhere (recommended)` / `Vibrant Creative gets more motion than the others`
Your answer:Vibrant Creative gets more motion than the others

---

## D. Navigation & Layout

**D1.** Logo/site mark in the header.
Options: `text wordmark (your name/site title) only (recommended)` / `initials in a simple monogram badge` / `no logo, nav links only`
Your answer:text wordmark (your name/site title) only 

**D2.** Header scroll behavior.
Options: `sticky, always visible (recommended)` / `hides on scroll down, reappears on scroll up` / `shrinks/condenses on scroll`
Your answer:shrinks/condenses on scroll

**D3.** Mobile nav pattern.
Options: `hamburger + slide-out drawer (recommended — matches ST-038 as written)` / `bottom tab bar (more app-like, common in Gen Z mobile UX)`
Your answer:bottom tab bar

**D4.** When `showCustomizeGuide` is `true`, should its link appear in the main header nav, or only in the footer (less prominent, still discoverable)?
Options: `footer only (recommended — keeps main nav focused on real content)` / `main nav`
Your answer:main nav

---

## E. Content Section Specifics

**E1.** Clicking a project card:
Options: `opens a dedicated project detail page (recommended)` / `opens a modal with more detail` / `no detail view — card's own link buttons (repo/live) are the only action`
Your answer:opens a dedicated project detail page (recommended)

**E2.** Featured projects (`featured: true`) should be:
Options: `sorted first AND visually badged (recommended)` / `sorted first only, no badge` / `badged only, original order kept`
Your answer:`sorted first only, no badge`

**E3.** Testimonials layout.
Options: `grid of cards (recommended — simpler, no JS carousel dependency)` / `auto-rotating carousel`
Your answer:grid of cards (recommended — simpler, no JS carousel dependency)

**E4.** Contact form fields.
Options: `name + email + message (recommended — lower friction)` / `name + email + subject + message`
Your answer:name + email + message (recommended — lower friction)

**E5.** Gallery/Now block (ST-060, currently lowest priority) — include in v1 at all?
Options: `skip for v1, revisit later (recommended — it was already the lowest-priority "Could")` / `yes, as a photo gallery` / `yes, as a "Now" text block` / `yes, both`
Your answer:yes, as a photo gallery,
Photos stay in a folder inside the github
I want to add title for each photo

**E6.** Resume "Download PDF" button when no `resumePdfUrl` is configured (placeholder-data case):
Options: `hide the button entirely (recommended)` / `show it disabled/grayed out`
Your answer:hide the button entirely (recommended)

**E7.** How many sample placeholder blog posts should ship by default?
Options: `2 (recommended)` / `1` / `3` / other:
Your answer:2

**E8.** Blog posts: support syntax-highlighted code blocks?
Options: `yes (recommended — costs little, useful if you ever write technical posts)` / `no, plain text/markdown formatting only`
Your answer:no

---

## F. OjasaMirai Badge Finalization

**F1.** Lock the exact tagline text (this exact string is what the CI test in ST-092 will assert against — word-for-word final, please):
Draft on file: `"Trained at OjasaMirai — training industry-ready professionals"`
Your answer (confirm verbatim, or provide the exact final replacement):We need to have words "OjasaMirai" and "training" 

**F2.** Visual weight of the badge.
Options: `compact single line — logo + tagline inline, small (recommended)` / `slightly larger card with logo + tagline + a short extra sentence about OjasaMirai`
Your answer:compact single line — logo + tagline inline, small (recommended)

---

## G. Customize Guide Page Behavior

**G1.** When `showCustomizeGuide` is `false`, should the `/customize` route fully disappear (404 if visited directly), or just be hidden from nav/footer but still reachable if someone knows the URL?
Options: `fully removed from the router — 404 if visited directly (recommended — cleaner "I'm done customizing" signal)` / `hidden from nav only, still reachable by direct URL`
Your answer:hidden from nav only, still reachable by direct URL

---

## H. Finalization Details

**H1.** Lighthouse performance target — confirm ≥90 (ST-077) or adjust:
Your answer:confirm

**H2.** Exact copyright holder name/year for the MIT `LICENSE` file (e.g. "Copyright (c) 2026 Roopesh Tayaloor"):
Your answer:Copyright (c) 2026 Ojasa Mirai

---

## Resolved Follow-ups (asked after first submission)

- **GitHub account**: `roopesht` — repo: `github.com/roopesht/mirai-launchpad`, live URL: `https://roopesht.github.io/mirai-launchpad/`.
- **Missing content (Projects/Hobbies/Testimonials/Gallery/Resume PDF/Avatar)**: ship obvious placeholder content for v1 (per ST-023); real content added later via JSON/asset edits.
- **OjasaMirai tagline (F1)**: locked verbatim — `"Trained at OjasaMirai — training industry-ready professionals"`. This is now final, used by the ST-092 CI test.
- **LICENSE copyright holder (H2)**: corrected to one-word brand spelling — `"Copyright (c) 2026 OjasaMirai"` (your original answer said "Ojasa Mirai" with a space; confirmed as a typo, not an intentional legal-name distinction).

**Status: CLOSED — all answers final.** Epic docs are being written from this file.
