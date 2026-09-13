# docs/

Planning documentation for this repo (requirements, assumptions, delivery backlog, per-epic build specs, tech stack). **Not** a GitHub Pages build source — the site deploys via GitHub Actions (`.github/workflows/deploy.yml`), building `website/` and publishing `website/dist/` through `actions/deploy-pages`. Pointing GitHub Pages at this folder, or at a `docs/` build-folder legacy setup, would do nothing useful here.

The app itself lives under [`website/`](../website/).
