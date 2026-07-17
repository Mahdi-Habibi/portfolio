# Backend

Django 5 project that can host the Vite-built portfolio SPA.

## Purpose

- Serve `dist/index.html` at `/`
- Serve frontend assets under `/static/`
- Provide `/admin/` and `/api/` hooks for future expansion

## Setup

```bash
cd app/backend
python3 -m pip install django==5.2.6
python3 manage.py migrate
python3 manage.py runserver
```

Build the frontend first so `dist/` exists:

```bash
cd ../frontend && npm run build
```

## Layout

```
backend/
├── core/
│   ├── settings.py
│   ├── urls.py
│   ├── views.py      # FrontendAppView → index.html
│   └── api_urls.py
├── dist/             # Vite build output
├── manage.py
└── .gitignore
```

Content and UI live in the frontend; this backend is primarily a static/SPA host.
