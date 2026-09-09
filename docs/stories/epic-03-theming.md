# Epic 3 — Theming System

**Goal**: 4 runtime-switchable themes, 3 Gen-Z-leaning + 1 conservative exception.

## Locked decisions

| Theme | Fonts (heading / body) | Key colors | Motion |
|---|---|---|---|
| Modern Minimal | Space Grotesk / Inter | `#111111` text on white, accent `#FF4D4D` | Subtle |
| Dark Tech | JetBrains Mono / Space Grotesk | bg `#0B0B0F`, neon accent `#39FF88` | Subtle |
| Vibrant Creative | Sora / Inter | purple→pink→orange gradient mesh | **More motion** (parallax, hover tilt, floating shapes) |
| Blue Professional | Source Sans 3 | navy `#0B2545`, accent `#256DBF`*, white bg | Minimal (intentionally conservative) |

\* Darkened from the originally drafted `#2D7DD2` — white text on that value cleared WCAG AA only at the large-text threshold (3:1), not normal text (4.5:1). `#256DBF` is the same blue, minor tweak for accessibility, confirmed against an automated contrast test.

- **Default theme on first visit**: Dark Tech.
- **Theme switcher UI**: dropdown/select menu in header — implemented as a native `<select>` (not a Radix/shadcn Select), which is keyboard-operable and labelable with zero extra ARIA wiring.
- Token contract (CSS variables): `background`, `foreground`, `card`/`cardForeground`, `popover`/`popoverForeground`, `primary`/`primaryForeground`, `secondary`/`secondaryForeground`, `muted`/`mutedForeground`, `accent`/`accentForeground`, `destructive`, `border`, `input`, `ring`, `radius`, `fontHeading`, `fontBody` — this is the full shadcn/ui token set actually consumed by Button/Card/Dialog/NavigationMenu (verified by grepping their class names), not just the shorter illustrative list in requirements.md §6. Defined as the `ThemeTokens` TypeScript interface in `src/themes/types.ts`; one file per theme under `src/themes/`, aggregated in `src/themes/index.ts`'s `themes` registry.
- **Extensibility mechanism (ST-035)**: `site.config.json`'s `defaultTheme`/`availableThemes` are validated as plain strings, not a hardcoded zod enum of the 4 shipped ids — the theme registry object is the actual source of truth for which ids are valid. A 5th theme is genuinely just: add a token file, add it to the registry, reference its id in config.
- Applied at runtime by setting each token as a CSS custom property directly on `document.documentElement` (`src/lib/theme/apply-theme.ts`), via a `useLayoutEffect` in `ThemeProvider` (fires before paint, avoiding a flash of the wrong theme). `:root` in `index.css` carries static defaults matching Dark Tech for the brief pre-hydration paint.
- Persisted via `localStorage` (`mirai-launchpad:theme`, wrapped in try/catch for restrictive browser contexts); falls back to `defaultTheme` from config, then the first registered theme.
- Vibrant Creative's gradient-mesh backdrop and glassmorphism are **not** part of the shared token contract (the other 3 themes have no equivalent) — `card`/`border`/`input` use `rgba()` values for translucency, and the literal gradient-mesh background layer is deferred to an Epic 5 section component that can check `themeId === 'vibrant-creative'`. Same for Vibrant Creative's extra motion (parallax/hover-tilt/floating shapes, per questionnaire C7) — that's a per-component Framer Motion concern in Epic 5, not a token.
- All 4 themes must pass WCAG AA contrast — enforced by an automated test (`src/themes/contrast.test.ts`), not just a manual check, so a future color edit that breaks contrast fails CI.
- A minimal `Header` (wordmark + `ThemeSwitcher`) was built now so the switcher has a real, permanent home on every page; Epic 4 replaces/extends it with full nav, scroll-shrink, and the mobile bottom tab bar.
- A `/theme-preview` QA page (not part of the site IA) exercises every token and every shadcn primitive across all 4 themes — used to visually verify this epic, not a shipped site section.

## Stories
| ID | Story | Priority |
|---|---|---|
| ST-025 | Theme token contract defined | Must |
| ST-026 | Modern Minimal theme | Must |
| ST-027 | Dark Tech theme | Must |
| ST-028 | Vibrant Creative theme (extra motion) | Must |
| ST-029 | Blue Professional theme (no Gen-Z styling) | Must |
| ST-030 | Theme switcher control (dropdown) | Must |
| ST-031 | Instant theme application | Must |
| ST-032 | Theme persisted via localStorage, default = Dark Tech | Must |
| ST-033 | Switcher keyboard/ARIA accessible | Must |
| ST-034 | WCAG AA contrast, all themes | Must |
| ST-035 | 5th theme addable via config only | Should |

Full acceptance criteria: `docs/stories.md` Epic 3. Exact hex/fonts above are confirmed defaults — adjust only if a visual review surfaces a contrast or legibility problem.
