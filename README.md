# Mahdi Habibi — Portfolio

Modern multilingual portfolio for **Mahdi Habibi Nazarlu**, React & Django specialist.

**Live site:** [https://mahdi-habibi.github.io/portfolio/](https://mahdi-habibi.github.io/portfolio/)

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
npm run build -- --outDir dist --base "/portfolio/"
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
- Light / dark theme with brand palette (gold + plum)
- Advanced motion: aurora, tilt cards, marquee, orbital rings, counters
- Multilingual content with RTL for Persian
- GitHub Pages CI via `.github/workflows/pages.yml`

## Documentation

- [Frontend README](app/frontend/README.md)
- [Contributing](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Architecture](docs/ARCHITECTURE.md)

## License

Personal portfolio project. Content © Mahdi Habibi Nazarlu.
