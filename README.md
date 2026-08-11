# Mahdi Habibi — Portfolio

Dark, high-tech multilingual portfolio for **Mahdi Habibi Nazarlu**, Full-Stack Engineer.

**Live site:** [https://www.mahdihabibi.com](https://www.mahdihabibi.com) ([GitHub Pages mirror](https://mahdi-habibi.github.io/portfolio/))

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 7, Tailwind CSS 4, Framer Motion |
| Backend | Django 5 (serves built SPA + API routes) |
| Deploy | GitHub Pages (`main` branch → Actions) |
| i18n | English, Persian (RTL), Spanish |

## Project structure

```
app/
├── frontend/          # React + Vite SPA
│   ├── src/
│   │   ├── components/  # layout + UI (Hero, Header, SpotlightCard, …)
│   │   ├── hooks/       # scroll behavior, etc.
│   │   ├── i18n/        # translations
│   │   ├── pages/       # IndexPage
│   │   └── styles/      # design tokens & animations
│   └── public/          # favicon, static assets
└── backend/           # Django project
    ├── core/            # settings, urls, SPA view
    └── dist/            # Vite build output (Django static)
```

## Quick start

### Frontend (development)

```bash
cd app/frontend
npm install
npm run dev
```

Open the Vite URL (usually `http://localhost:5173`).

### Production build

```bash
cd app/frontend
npm run build
```

Output goes to `app/backend/dist` (for Django) or can be overridden for Pages:

```bash
npm run build -- --outDir dist --base "/"
```

### Backend (optional local serve)

```bash
cd app/backend
python3 -m pip install django==5.2.6
python3 manage.py migrate
python3 manage.py runserver
```

Visit `http://127.0.0.1:8000`.

## Features

- Sticky top navbar that hides on scroll down and returns on scroll up
- Go-to-top button after leaving the hero section
- Forced-dark design system with a gold accent and responsive glass surfaces
- Advanced motion: aurora, tilt cards, spotlight cards, marquee, orbital rings, and counters
- Motion-safe fallbacks for `prefers-reduced-motion`
- Multilingual content with complete Persian RTL and Spanish support
- Touch-friendly project previews and full-screen mobile navigation
- Responsive layouts tested at phone, tablet, laptop, and desktop widths
- SEO metadata, JSON-LD person schema, and social preview assets
- GitHub Pages CI via `.github/workflows/pages.yml`

## Documentation

- [Frontend README](app/frontend/README.md)
- [Contributing](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Architecture](docs/ARCHITECTURE.md)
- [21st.dev setup](docs/21ST.md)

## License

Personal portfolio project. Content © Mahdi Habibi Nazarlu.
