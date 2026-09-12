# Epic 4 — Navigation & Layout Shell

**Goal**: the header/footer/mobile-nav shell every page shares.

## Locked decisions
- **Logo**: text wordmark (site owner's name/title) only — no icon/monogram.
- **Header scroll behavior**: shrinks/condenses past a scroll threshold (reduced height/padding), stays visible (not hide-on-scroll).
- **Mobile nav**: fixed **bottom tab bar** (not a hamburger drawer) — app-like, thumb-reachable.
- **Customize guide link**: appears in the **main header nav** when `showCustomizeGuide` is `true` (see Epic 12), not footer-only.
- **Footer**: social links (`socials.json`) + copyright + the OjasaMirai badge (Epic 11).
- Accessibility: skip-to-content link, semantic landmarks (`header`/`nav`/`main`/`footer`).

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-036 | Header: wordmark + nav, shrinks on scroll | Must |
| ST-037 | Nav items driven by `site.config.json.navigation` | Must |
| ST-038 | Mobile bottom tab bar | Must |
| ST-039 | Footer: socials + copyright | Should |
| ST-040 | Skip-to-content + landmarks | Should |

Full acceptance criteria: `docs/stories.md` Epic 4.

## Status

Implemented: `Header` (wordmark from `site.config.json.siteTitle` — not `personal.json`, since `siteTitle` is the field that exists for site-wide branding text; condenses padding past a 24px scroll threshold via a `useScrolled` hook), `MobileTabBar` (fixed bottom bar, icon+label per nav item, `sm:hidden`/`hidden sm:flex` swap with the header nav), `Footer` (socials + copyright, with a marked insertion point for Epic 11's badge), and `SkipLink` (`sr-only` until focused, targets `#main-content` on `<main>`).

`getPrimaryNavItems()` (`src/lib/navigation.ts`) is the single source nav items are derived from — it filters `site.config.json.navigation` by `enabled`, sorts by `order`, and resolves each `id` to a route + icon via a small fixed map (`home`/`resume`/`projects`/`blog`; routes/icons are presentation details for this fixed site IA, not forker-configurable). The Customize link is appended separately, gated on `showCustomizeGuide` (Epic 12), matching the "main nav, not footer" decision.

Note on ST-037's "available routes" clause: disabling a nav entry removes it from both nav surfaces, but the underlying route is not deregistered — visiting it by direct URL still works. This mirrors ST-096's explicit pattern for the Customize page (hide from nav, don't 404 the route) and was extended here for consistency rather than building two different disable behaviors.

Verified visually via Playwright screenshots: full desktop nav, the shrunk header state after scrolling, and the mobile tab bar replacing the header nav below the `sm` breakpoint. All landmarks and nav items covered by Vitest + Testing Library tests.
