# Architecture

## Overview

Single-page portfolio application:

1. **React SPA** — all UI, i18n, theme, and motion
2. **Vite** — bundler and production build
3. **Django** — optional host for the built SPA (`FrontendAppView` + static files)
4. **GitHub Pages** — production CDN hosting of the Vite `dist` output

```
Browser
   │
   ├─ GitHub Pages ──► static assets + index.html (base /portfolio/)
   │
   └─ Django (dev/alt) ──► TemplateView(index.html) + /static/*
```

## Frontend data flow

- `IndexPage` owns language + theme state
- Copy comes from `i18n/translations.js`
- Layout sections: Header → Hero → About → Projects → Experience → Education → Contact → Footer
- Non-hero sections are `React.lazy` + `Suspense` for code splitting
- `useScrollBehavior` drives navbar visibility and scroll-to-top

## Design tokens

Defined in `src/styles/global.css` as CSS custom properties (`--color-*`, `--gradient-*`, `--shadow-*`). Components reference variables so dark/light themes stay consistent.

## Motion layer

Framer Motion powers:

- Page/section entrance (`FadeIn`, `TextReveal`)
- Interactive cards (`SpotlightCard`, `TiltCard`)
- Background atmosphere (`Aurora`, `TechBackground`, `OrbitalRings`)
- Micro-interactions (buttons, timeline, marquee)

CSS handles continuous loops (border beam, marquee track, grid drift) and `prefers-reduced-motion`.

## Backend role

`core/views.FrontendAppView` renders `dist/index.html`. `urls.py` mounts admin, `/api/`, home, static files, and a catch-all SPA route. No CMS — content is frontend-owned.
