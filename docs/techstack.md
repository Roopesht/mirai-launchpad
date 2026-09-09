# Tech Stack

| Layer | Tool | Purpose |
|---|---|---|
| Runtime | Node.js 20 (LTS) | JavaScript runtime for local dev and CI builds. |
| Framework | React 18 | UI component framework. |
| Build tool | Vite | Dev server + production bundler, outputs static `dist/`. |
| Language | TypeScript | Static typing across components and data schemas. |
| Styling | Tailwind CSS | Utility-first CSS, theme via CSS variables. |
| Components | shadcn/ui | Copy-in, accessible UI primitives (Radix-based). |
| Primitives | Radix UI | Unstyled accessible component behavior under shadcn/ui. |
| Routing | React Router | Client-side routes for each section/page. |
| Animation | Framer Motion | Section/page transitions, respects reduced-motion. |
| Icons | lucide-react | Icon set used across nav, cards, theme switcher. |
| Validation | zod | Runtime schema validation for all `src/data/*.json` files. |
| Blog content | gray-matter + react-markdown | Parses Markdown frontmatter and renders post bodies. |
| Contact form | Formspree | Static-site-friendly form submission endpoint. |
| SEO | react-helmet-async | Per-route meta tags and Open Graph data. |
| Testing | Vitest | Test runner, including the OjasaMirai badge integrity check. |
| Testing | React Testing Library | Component rendering assertions in tests. |
| Linting | ESLint | Code-quality checks. |
| Formatting | Prettier | Consistent code style. |
| Setup CLI | prompts | Interactive `npm run setup` script for forkers. |
| Package manager | npm | Dependency installation and scripts. |
| CI/CD | GitHub Actions | Builds on push/PR, runs tests, deploys on merge to `main`. |
| Deployment | actions/upload-pages-artifact, actions/deploy-pages | Publishes `dist/` to GitHub Pages. |
| Hosting | GitHub Pages | Static hosting for the deployed site. |
| License | MIT | Permissive license for the forkable template. |
