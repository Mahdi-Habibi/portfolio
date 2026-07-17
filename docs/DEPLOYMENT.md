# Deployment

## GitHub Pages (primary)

The site deploys from the **`main`** branch.

Workflow: `.github/workflows/pages.yml`

1. Checkout
2. `npm ci` in `app/frontend`
3. Build with correct base path:
   - Project site: `/portfolio/`
   - User/org site (`*.github.io`): `/`
4. Copy `index.html` → `404.html` (SPA fallback)
5. Add `.nojekyll`
6. Upload artifact and deploy with `actions/deploy-pages`

### Requirements

- Repository **Settings → Pages → Source**: GitHub Actions
- Push or merge to `main` (or run the workflow manually via **Actions → Deploy to GitHub Pages → Run workflow**)

### URL

https://mahdi-habibi.github.io/portfolio/

After deploy, hard-refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) if the browser caches an old bundle.

## Local production preview

```bash
cd app/frontend
npm run build -- --outDir dist --base "/portfolio/"
npm run preview
```

## Django static hosting (optional)

```bash
cd app/frontend && npm run build   # writes to app/backend/dist
cd ../backend && python3 manage.py runserver
```

Django serves `index.html` for `/` and static assets under `/static/`.
