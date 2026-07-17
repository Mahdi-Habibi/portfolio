# Contributing

Thanks for helping improve this portfolio.

## Workflow

1. Create a branch from `main` using the pattern `cursor/<short-description>-4701` when working in this cloud environment, or a clear descriptive name otherwise.
2. Make focused changes (UI, content, or docs — prefer one concern per PR).
3. Run checks locally:

   ```bash
   cd app/frontend
   npm run lint
   npm run build
   ```

4. Commit with a clear message (e.g. `frontend: …`, `content: …`, `docs: …`).
5. Push and open a PR into `main`.

## Content updates

Resume and profile copy belong in `app/frontend/src/i18n/translations.js` for **en**, **fa**, and **es**. Keep languages in sync when changing experience, projects, or contact info.

## UI / motion

- Prefer existing UI primitives under `src/components/ui/` (SpotlightCard, FadeIn, Aurora, etc.).
- Respect `prefers-reduced-motion` (already handled in `global.css`).
- Keep the gold/plum palette via CSS variables — avoid hard-coded one-off colors.

## Deploy

Merges to `main` trigger GitHub Pages via `.github/workflows/pages.yml`. Do not commit secrets or API keys.
