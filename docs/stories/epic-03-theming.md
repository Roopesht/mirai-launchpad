# Epic 3 — Theming System

**Goal**: 4 runtime-switchable themes, 3 Gen-Z-leaning + 1 conservative exception.

## Locked decisions

| Theme | Fonts (heading / body) | Key colors | Motion |
|---|---|---|---|
| Modern Minimal | Space Grotesk / Inter | `#111111` text on white, accent `#FF4D4D` | Subtle |
| Dark Tech | JetBrains Mono / Space Grotesk | bg `#0B0B0F`, neon accent `#39FF88` | Subtle |
| Vibrant Creative | Sora / Inter | purple→pink→orange gradient mesh | **More motion** (parallax, hover tilt, floating shapes) |
| Blue Professional | Source Sans 3 | navy `#0B2545`, accent `#2D7DD2`, white bg | Minimal (intentionally conservative) |

- **Default theme on first visit**: Dark Tech.
- **Theme switcher UI**: dropdown/select menu in header.
- Token contract (CSS variables): `--background`, `--foreground`, `--primary`, `--accent`, `--radius`, `--font-heading`, `--font-body`, etc. — one file per theme under `src/themes/`.
- Persisted via `localStorage`; falls back to `defaultTheme` from config.
- All 4 themes must pass WCAG AA contrast.

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
