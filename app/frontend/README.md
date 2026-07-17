# Frontend

React + Vite portfolio SPA with Tailwind CSS 4 and Framer Motion.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build → `../backend/dist` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Key directories

```
src/
├── components/
│   ├── layout/     # Header, Footer, Hero, About, Projects, …
│   └── ui/         # Aurora, SpotlightCard, TiltCard, Marquee, …
├── hooks/          # useScrollBehavior
├── i18n/           # translations.js (en / fa / es)
├── lib/            # cn() helper
├── pages/          # IndexPage
└── styles/         # global.css (palette, motion utilities)
```

## Design system

Brand colors (CSS variables in `styles/global.css`):

| Token | Hex |
|-------|-----|
| Amber gold | `#F0A72E` |
| Deep plum | `#5B2A4A` |
| Bright gold | `#F6B43D` |
| Soft cream | `#F1D36F` |

Dark mode is default; light mode via `data-theme="light"`.

## Content

All copy lives in `src/i18n/translations.js`. Update that file to change experience, projects, skills, or contact links in all languages.

## Build notes

- Default Vite `base` is `/static/` for Django serving.
- GitHub Pages overrides `--base "/portfolio/"` and `--outDir dist` in CI.
- React Compiler is enabled via `babel-plugin-react-compiler`.
