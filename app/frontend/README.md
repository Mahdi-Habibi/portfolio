# Frontend

React + Vite portfolio SPA with Tailwind CSS 4, Framer Motion, Lenis, and Lucide icons.

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
| Background | `#070709` |
| Elevated surface | `#0F1014` |
| Soft surface | `#16161C` |
| Brand gold | `#E9B872` |
| Warm foreground | `#F5F2EC` |

The portfolio is intentionally dark-only. Display typography uses Syncopate, body copy uses Inter, and technical labels use Space Mono.

## Content

All copy lives in `src/i18n/translations.js`. Update that file to change experience, projects, skills, or contact links in all languages.

## Responsive and accessibility behavior

- Desktop smooth scrolling uses Lenis; touch devices retain native scrolling.
- Header navigation collapses below 1024px into an animated full-screen menu.
- Project cards use pointer previews on desktop and tap-to-expand details on touch devices.
- Persian switches the document to RTL and uses logical CSS positioning.
- Motion components and CSS loops respect `prefers-reduced-motion`.
- Key layouts are verified at 375px, 768px, 1024px, and 1440px.

## Build notes

- Default Vite `base` is `/static/` for Django serving.
- GitHub Pages overrides `--base` and `--outDir dist` in CI (`/` when `CNAME` exists, else `/portfolio/`).
- React Compiler is enabled via `babel-plugin-react-compiler`.
