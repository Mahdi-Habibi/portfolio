export const languages = [
    { code: "en", label: "English" },
    { code: "fa", label: "Persian" },
    { code: "es", label: "Spanish" },
];

const projectCardsEn = [
    {
        id: "pathwise",
        title: "Pathwise (Kia Academy)",
        description:
            "Persian-first adaptive learning platform: phone OTP onboarding, goal assessment, readiness tests, personalized roadmaps, and lesson playback. Full-stack monorepo with Next.js 15, NestJS 11, Prisma, and PostgreSQL.",
        stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "TypeScript"],
        result: "Live demo on GitHub Pages",
        image: "projects/pathwise.svg",
        href: "https://github.com/Mahdi-Habibi/pathwise",
        live: "https://mahdi-habibi.github.io/pathwise/",
        year: "2026",
    },
    {
        id: "pocket-crypto",
        title: "Pocket Crypto",
        description:
            "Python Telegram bot that serves live currency and crypto quotes from CoinMarketCap, plus scheduled automations for hourly-to-monthly price updates. Deployed as a Vercel serverless webhook.",
        stack: ["Python", "Telegram Bot API", "APScheduler", "Vercel"],
        result: "Live market quotes on demand",
        image: "projects/pocket-crypto.svg",
        href: "https://github.com/Mahdi-Habibi/pocket_crypto",
        live: "https://pocketcrypto.vercel.app",
        year: "2025",
    },
    {
        id: "multi-tenant",
        title: "Multi-Tenant Project SaaS",
        description:
            "Production-oriented MVP with workspace tenancy, RBAC (owner/admin/member), invites, projects, tasks, and activity logs. Django REST + SimpleJWT backend with a Next.js App Router frontend.",
        stack: ["Django", "DRF", "Next.js", "PostgreSQL", "JWT"],
        result: "Tenant-isolated workspaces",
        image: "projects/multi-tenant.svg",
        href: "https://github.com/Mahdi-Habibi/Multi-Tenant--Project--Management--SaaS",
        live: null,
        year: "2026",
    },
    {
        id: "smart-home",
        title: "Smart Home IoT Dashboard",
        description:
            "MQTT-enabled dashboard for sensor monitoring and device control. Node/Express + MongoDB backend bridges MQTT topics; React + Recharts frontend visualizes telemetry with JWT auth.",
        stack: ["React", "Node.js", "MQTT", "MongoDB", "Recharts"],
        result: "Realtime device control",
        image: "projects/smart-home.svg",
        href: "https://github.com/Mahdi-Habibi/smart-home-iot-dashboard",
        live: null,
        year: "2026",
    },
    {
        id: "task-platform",
        title: "Task Management Platform",
        description:
            "Full-stack Kanban board with JWT authentication and Socket.IO realtime updates. React + Tailwind client, Express + MongoDB API, and Docker Compose for local orchestration.",
        stack: ["React", "Tailwind", "Express", "Socket.IO", "MongoDB"],
        result: "Realtime collaboration",
        image: "projects/task-platform.svg",
        href: "https://github.com/Mahdi-Habibi/task-management-platform",
        live: null,
        year: "2025",
    },
    {
        id: "budget-tracker",
        title: "Personal Finance Tracker",
        description:
            "Budget tracker with auth, transactions, savings goals, analytics charts, and a simple spend forecast. Express + Prisma API with a React + Chart.js dashboard, deployable on Vercel.",
        stack: ["React", "Express", "Prisma", "Chart.js", "Zod"],
        result: "Spend forecasting built in",
        image: "projects/budget-tracker.svg",
        href: "https://github.com/Mahdi-Habibi/Personal-Finance---Budget-Tracker",
        live: null,
        year: "2026",
    },
];

const skillsFromRepos = [
    "TypeScript",
    "JavaScript",
    "Python",
    "React",
    "Next.js",
    "NestJS",
    "Django",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Docker",
    "MQTT",
    "Socket.IO",
    "JWT",
    "REST API",
    "Vercel",
    "Telegram Bot API",
];

const systemCardsEn = [
    {
        featured: true,
        title: "Adaptive learning platforms",
        body: "Pathwise monorepo — Next.js 15, NestJS 11, Prisma, PostgreSQL, OTP auth, and personalized roadmaps.",
        tags: ["Next.js", "NestJS", "Prisma", "TypeScript"],
    },
    {
        title: "Multi-tenant SaaS",
        body: "Workspace isolation, RBAC, JWT refresh cookies, and Django REST + Next.js delivery.",
        tags: ["Django", "DRF", "Next.js", "PostgreSQL"],
    },
    {
        title: "Realtime & IoT",
        body: "MQTT dashboards, Socket.IO Kanban boards, and Express APIs for live collaboration.",
        tags: ["MQTT", "Socket.IO", "MongoDB", "React"],
    },
    {
        title: "Skills from shipped repositories",
        body: "Stack extracted from public repositories — languages, frameworks, data stores, and deploy targets actually used in code.",
        tags: ["TypeScript", "Python", "React", "Next.js"],
    },
];

const sectionsEn = {
    rail: [
        { id: "home", label: "Intro" },
        { id: "projects", label: "Work" },
        { id: "clients", label: "Clients" },
        { id: "highlights", label: "Impact" },
        { id: "about", label: "About" },
        { id: "systems", label: "Stack" },
        { id: "experience", label: "Journey" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ],
    hero: {
        tags: "TypeScript / Python / React / Next.js / NestJS / Django",
        firstName: "Mahdi",
        lastName: "Habibi",
        scrollHint: "View my case studies",
        credRepos: "public repos",
        credApps: "selected apps",
        credStack: "primary stack",
    },
    projects: {
        eyebrow: "[ Selected repositories ]",
        title: "Shipped products from my GitHub — learning platforms, SaaS, IoT, and automation.",
        allRepos: "All repositories",
        liveDemo: "Live demo",
    },
    clients: {
        eyebrow: "[ Stack in public repos ]",
        title: "Languages and frameworks used across Pathwise, Pocket Crypto, SaaS, IoT, and finance apps.",
        copy: "Tap a project to open the repo or live demo",
    },
    highlights: {
        eyebrow: "[ Impact signals ]",
        title: "Outcomes from mentoring, client delivery, and public engineering work.",
        recentDelivery: "Recent delivery",
        impactMetric: "Impact metric",
        statQuote: "measurable outcome across product delivery and mentoring.",
    },
    about: {
        eyebrow: "[ About ]",
        locationBadge: "Iran",
    },
    systems: {
        eyebrow: "[ Systems & tooling ]",
        title: "Tools that power the repositories above.",
    },
    experience: {
        eyebrow: "[ My journey ]",
        title: "Where I have worked",
        copy: "Full-stack engineering across product companies, client delivery, and technical education — from foundational web work to AI-enabled platform operations.",
        progressStart: "Foundations",
        progressEnd: "Today",
    },
    education: {
        eyebrow: "[ Writing ]",
        title: "Academic foundations and advanced systems study.",
        cta: "Get in touch",
    },
    contact: {
        eyebrow: "[ Contact ]",
    },
    footer: {
        backToTop: "Back to top",
    },
    ui: {
        projectOpen: "Open project",
        projectPreview: "Project preview",
        portraitAlt: "Portrait of Mahdi Habibi",
        scrollTop: "Scroll to top",
        sectionNavigation: "Section navigation",
        copied: "Copied",
        copyEmail: "Copy email address",
    },
    meta: {
        description: "Mahdi Habibi Nazarlu — Full-stack engineer. Python & JavaScript developer building React, Next.js, Django, and NestJS products.",
    },
    menu: {
        open: "Open menu",
        close: "Close menu",
    },
};

const sectionsFa = {
    ...sectionsEn,
    rail: [
        { id: "home", label: "معرفی" },
        { id: "projects", label: "کار" },
        { id: "clients", label: "مشتری" },
        { id: "highlights", label: "اثر" },
        { id: "about", label: "درباره" },
        { id: "systems", label: "استک" },
        { id: "experience", label: "مسیر" },
        { id: "education", label: "تحصیل" },
        { id: "contact", label: "تماس" },
    ],
    hero: {
        ...sectionsEn.hero,
        tags: "TypeScript / Python / React / Next.js / NestJS / Django",
        firstName: "مهدی",
        lastName: "حبیبی",
        scrollHint: "مطالعات موردی را ببینید",
        credRepos: "مخزن عمومی",
        credApps: "اپ منتخب",
        credStack: "استک اصلی",
    },
    projects: {
        eyebrow: "[ مخازن منتخب ]",
        title: "محصولات تحویل‌شده از گیت‌هاب — پلتفرم یادگیری، SaaS، IoT و اتوماسیون.",
        allRepos: "همه مخازن",
        liveDemo: "دموی زنده",
    },
    clients: {
        eyebrow: "[ استک در مخازن عمومی ]",
        title: "زبان‌ها و فریم‌ورک‌ها در Pathwise، Pocket Crypto، SaaS، IoT و اپ‌های مالی.",
        copy: "برای باز کردن مخزن یا دمو روی پروژه ضربه بزنید",
    },
    highlights: {
        eyebrow: "[ سیگنال‌های اثر ]",
        title: "نتایج منتورینگ، تحویل مشتری و کار مهندسی عمومی.",
        recentDelivery: "تحویل اخیر",
        impactMetric: "معیار اثر",
        statQuote: "نتیجه قابل اندازه‌گیری در تحویل محصول و منتورینگ.",
    },
    about: {
        eyebrow: "[ درباره ]",
        locationBadge: "ایران",
    },
    systems: {
        eyebrow: "[ سیستم‌ها و ابزار ]",
        title: "ابزارهایی که مخازن بالا را پشتیبانی می‌کنند.",
    },
    experience: {
        eyebrow: "[ مسیر من ]",
        title: "جایی که کار کرده‌ام",
        copy: "مهندسی فول‌استک در شرکت‌های محصول، تحویل مشتری و آموزش فنی — از وب پایه تا عملیات پلتفرم مبتنی بر AI.",
        progressStart: "مبانی",
        progressEnd: "امروز",
    },
    education: {
        eyebrow: "[ نوشتار ]",
        title: "مبانی آکادمیک و مطالعه سیستم‌های پیشرفته.",
        cta: "تماس بگیرید",
    },
    contact: { eyebrow: "[ تماس ]" },
    footer: { backToTop: "بازگشت به بالا" },
    ui: {
        projectOpen: "باز کردن پروژه",
        projectPreview: "پیش‌نمایش پروژه",
        portraitAlt: "تصویر مهدی حبیبی",
        scrollTop: "بازگشت به بالای صفحه",
        sectionNavigation: "ناوبری بخش‌ها",
        copied: "کپی شد",
        copyEmail: "کپی آدرس ایمیل",
    },
    meta: {
        description: "مهدی حبیبی نظرلو — مهندس فول‌استک. توسعه‌دهنده Python و JavaScript با React، Next.js، Django و NestJS.",
    },
    menu: { open: "باز کردن منو", close: "بستن منو" },
};

const systemCardsFa = [
    {
        featured: true,
        title: "پلتفرم‌های یادگیری تطبیقی",
        body: "مونوریپو Pathwise — Next.js 15، NestJS 11، Prisma، PostgreSQL، OTP و مسیرهای شخصی‌سازی‌شده.",
        tags: ["Next.js", "NestJS", "Prisma", "TypeScript"],
    },
    {
        title: "SaaS چندمستاجری",
        body: "جداسازی workspace، RBAC، JWT refresh cookie و تحویل Django REST + Next.js.",
        tags: ["Django", "DRF", "Next.js", "PostgreSQL"],
    },
    {
        title: "بلادرنگ و IoT",
        body: "داشبوردهای MQTT، بورد Kanban با Socket.IO و APIهای Express برای همکاری زنده.",
        tags: ["MQTT", "Socket.IO", "MongoDB", "React"],
    },
    {
        title: "مهارت‌ها بر اساس مخازن",
        body: "استک استخراج‌شده از مخازن عمومی — زبان‌ها، فریم‌ورک‌ها، پایگاه داده و اهداف استقرار.",
        tags: ["TypeScript", "Python", "React", "Next.js"],
    },
];

const sectionsEs = {
    ...sectionsEn,
    rail: [
        { id: "home", label: "Inicio" },
        { id: "projects", label: "Trabajo" },
        { id: "clients", label: "Clientes" },
        { id: "highlights", label: "Impacto" },
        { id: "about", label: "Sobre mí" },
        { id: "systems", label: "Stack" },
        { id: "experience", label: "Trayectoria" },
        { id: "education", label: "Educación" },
        { id: "contact", label: "Contacto" },
    ],
    hero: {
        ...sectionsEn.hero,
        scrollHint: "Ver casos de estudio",
        credRepos: "repos públicos",
        credApps: "apps seleccionadas",
        credStack: "stack principal",
    },
    projects: {
        eyebrow: "[ Repositorios seleccionados ]",
        title: "Productos entregados desde GitHub — plataformas de aprendizaje, SaaS, IoT y automatización.",
        allRepos: "Todos los repositorios",
        liveDemo: "Demo en vivo",
    },
    clients: {
        eyebrow: "[ Stack en repos públicos ]",
        title: "Lenguajes y frameworks en Pathwise, Pocket Crypto, SaaS, IoT y apps financieras.",
        copy: "Toca un proyecto para abrir el repo o la demo",
    },
    highlights: {
        eyebrow: "[ Señales de impacto ]",
        title: "Resultados de mentoría, entrega a clientes e ingeniería pública.",
        recentDelivery: "Entrega reciente",
        impactMetric: "Métrica de impacto",
        statQuote: "resultado medible en entrega de producto y mentoría.",
    },
    about: { eyebrow: "[ Sobre mí ]", locationBadge: "Irán" },
    systems: {
        eyebrow: "[ Sistemas y herramientas ]",
        title: "Herramientas que impulsan los repositorios anteriores.",
    },
    experience: {
        eyebrow: "[ Mi trayectoria ]",
        title: "Dónde he trabajado",
        copy: "Ingeniería full-stack en empresas de producto, entrega a clientes y educación técnica — desde web fundamental hasta operaciones con IA.",
        progressStart: "Fundamentos",
        progressEnd: "Hoy",
    },
    education: {
        eyebrow: "[ Escritura ]",
        title: "Fundamentos académicos y estudio avanzado de sistemas.",
        cta: "Contáctame",
    },
    contact: { eyebrow: "[ Contacto ]" },
    footer: { backToTop: "Volver arriba" },
    ui: {
        projectOpen: "Abrir proyecto",
        projectPreview: "Vista previa del proyecto",
        portraitAlt: "Retrato de Mahdi Habibi",
        scrollTop: "Volver arriba",
        sectionNavigation: "Navegación por secciones",
        copied: "Copiado",
        copyEmail: "Copiar correo",
    },
    meta: {
        description: "Mahdi Habibi Nazarlu — Ingeniero full-stack. Desarrollador Python y JavaScript con React, Next.js, Django y NestJS.",
    },
    menu: { open: "Abrir menú", close: "Cerrar menú" },
};

const systemCardsEs = [
    {
        featured: true,
        title: "Plataformas de aprendizaje adaptativo",
        body: "Monorepo Pathwise — Next.js 15, NestJS 11, Prisma, PostgreSQL, OTP y roadmaps personalizados.",
        tags: ["Next.js", "NestJS", "Prisma", "TypeScript"],
    },
    {
        title: "SaaS multi-tenant",
        body: "Aislamiento de workspace, RBAC, cookies JWT refresh y entrega Django REST + Next.js.",
        tags: ["Django", "DRF", "Next.js", "PostgreSQL"],
    },
    {
        title: "Tiempo real e IoT",
        body: "Dashboards MQTT, tableros Kanban Socket.IO y APIs Express para colaboración en vivo.",
        tags: ["MQTT", "Socket.IO", "MongoDB", "React"],
    },
    {
        title: "Skills desde repositorios",
        body: "Stack extraído de repos públicos — lenguajes, frameworks, datos y destinos de despliegue.",
        tags: ["TypeScript", "Python", "React", "Next.js"],
    },
];

export const translations = {
    en: {
        siteTitle: "Mahdi Habibi | Full-stack Engineer",
        languageLabel: "Language",
        navLabel: "Navigation",
        nav: [
            { href: "#home", label: "Intro", icon: "01" },
            { href: "#about", label: "About", icon: "02" },
            { href: "#projects", label: "Projects", icon: "03" },
            { href: "#experience", label: "Experience", icon: "04" },
            { href: "#education", label: "Education", icon: "05" },
            { href: "#contact", label: "Contact", icon: "06" },
        ],
        sidebar: {
            summary:
                "Full-stack engineer and website technical manager building React, Next.js, Django, and NestJS products — with a focus on web performance, marketing technology, and automation.",
            cta: "Let's collaborate",
        },
        footer: {
            summary:
                "Full-stack engineer at Padideh Shamim Ghaem — shipping thoughtful web products, mentoring developers, and exploring AI-assisted systems.",
            navigation: "Navigation",
            contact: "Contact",
        },
        hero: {
            kicker: "Full-stack Engineer",
            title: "Mahdi Habibi Nazarlu — Full-stack engineer building thoughtful web products with React & Django.",
            subtitle:
                "Python & JavaScript developer focused on web performance, technical SEO, marketing technology, and automation. I design and ship full-stack applications end to end — from APIs and data models to interfaces people enjoy using.",
            primary: "View projects",
            secondary: "GitHub profile",
            secondaryHref: "https://github.com/Mahdi-Habibi/",
            location: "Iran",
            stats: [
                { label: "Public repositories", value: "12" },
                { label: "Selected shipped apps", value: "6+" },
                { label: "Primary stack", value: "TS / PY" },
            ],
        },
        about: {
            titleLabel: "About",
            title: "Clear systems, calm interfaces, production-ready delivery.",
            body: "I design and ship full-stack applications end to end — from API design and data models to interfaces people actually enjoy using. Currently Website Technical Manager at Padideh Shamim Ghaem, deepening computer architecture as a Master's student at Shahid Beheshti University, and open to collaboration on AI-driven apps and serious full-stack builds.",
            focusAreas: [
                "Ship TypeScript, React/Next.js, NestJS, and Django applications with secure APIs and intentional UX.",
                "Own web performance, technical SEO, marketing technology, and platform operations in production.",
                "Build automation and AI-assisted workflows that hold up beyond demos.",
            ],
            toolbeltTitle: "Skills from shipped repositories",
            toolbelt: skillsFromRepos,
            recentWinTitle: "Selected work",
            recentWinText:
                "Pathwise (Kia Academy) — adaptive learning platform with Next.js, NestJS, and Prisma, live in demo mode on GitHub Pages.",
        },
        projects: {
            title: "Projects",
            cards: projectCardsEn,
            cta: "View on GitHub",
        },
        experience: {
            title: "Experience",
            items: [
                {
                    role: "Website Technical Manager · Full-Stack, DevOps & AI Operations",
                    company: "Padideh Shamim Ghaem",
                    period: "May 2026 - Present",
                    bullets: [
                        "Lead maintenance, optimization, and deployment of company web platforms for reliability, security, and performance.",
                        "Architect full-stack applications with TypeScript, React, Django, and modern delivery practices.",
                        "Support marketing technology and govern evaluation of AI tools across the organization.",
                    ],
                },
                {
                    role: "JavaScript & Python Instructor",
                    company: "Tabriz Technical Complex",
                    period: "Mar 2025 - Present",
                    bullets: [
                        "Deliver full-stack courses in Python, JavaScript, Django, and React.",
                        "Mentor capstone projects leading to TVTO certification and stronger employability.",
                        "Teach technical concepts in Persian and English to diverse learners.",
                    ],
                },
                {
                    role: "Django Developer",
                    company: "Agrad Web",
                    period: "Oct 2025 - Jan 2026",
                    bullets: [
                        "Built a Django catalog website improving product discoverability across 50+ categories.",
                        "Developed a task management app with assignments, tracking, and status workflows.",
                        "Collaborated with remote backend and design teams to deliver client projects on schedule.",
                    ],
                },
                {
                    role: "Front-end Developer",
                    company: "Loris Studio",
                    period: "Sep 2021 - Aug 2024",
                    bullets: [
                        "Developed responsive interfaces for client projects across international, multilingual experiences.",
                        "Worked in an Agile team shipping pixel-accurate UI with modern React patterns.",
                        "Built advanced React components with hooks and state management for dynamic UIs.",
                    ],
                },
                {
                    role: "Front-end Developer (Internship)",
                    company: "Loris Studio",
                    period: "Sep 2020 - Aug 2021",
                    bullets: [
                        "Supported company websites and landing pages using HTML5, CSS3, and JavaScript.",
                        "Gained hands-on experience with Git and collaborative development workflows.",
                    ],
                },
            ],
        },
        education: {
            title: "Education",
            items: [
                {
                    school: "Shahid Beheshti University",
                    degree: "M.Sc. in Computer Systems Architecture",
                    period: "In progress",
                    note: "Graduate study in computer systems architecture and advanced systems design.",
                },
                {
                    school: "Tabriz University",
                    degree: "B.Sc. in Computer Engineering",
                    period: "Completed",
                    note: "Foundation in software engineering, systems, and computer engineering principles. Capstone published as University-final-project.",
                },
            ],
        },
        contact: {
            title: "Contact",
            heading: "Let's build something deliberate.",
            body: "Open to collaboration on AI-driven apps, automation tools, and serious full-stack builds. Based in Iran — say hello anytime.",
            location: "Iran",
            links: [
                { label: "Email", href: "mailto:info.mahdihabibi@gmail.com" },
                { label: "Phone", href: "tel:+989029216735" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/mahdi-habibi-developer/" },
                { label: "GitHub", href: "https://github.com/Mahdi-Habibi/" },
            ],
        },
        sections: sectionsEn,
        systemCards: systemCardsEn,
    },
    fa: {
        siteTitle: "مهدی حبیبی | مهندس فول‌استک",
        languageLabel: "زبان",
        navLabel: "مسیرها",
        nav: [
            { href: "#home", label: "معرفی", icon: "01" },
            { href: "#about", label: "درباره", icon: "02" },
            { href: "#projects", label: "پروژه‌ها", icon: "03" },
            { href: "#experience", label: "تجربه", icon: "04" },
            { href: "#education", label: "تحصیلات", icon: "05" },
            { href: "#contact", label: "تماس", icon: "06" },
        ],
        sidebar: {
            summary:
                "مهندس فول‌استک و مدیر فنی وب‌سایت — ساخت محصولات React، Next.js، Django و NestJS با تمرکز بر عملکرد وب، مارکتینگ تکنولوژی و اتوماسیون.",
            cta: "همکاری کنیم",
        },
        footer: {
            summary:
                "مهندس فول‌استک در پدیده شمیم قائم — ساخت محصولات وب، منتورینگ و کاوش سیستم‌های مبتنی بر AI.",
            navigation: "مسیرها",
            contact: "تماس",
        },
        hero: {
            kicker: "مهندس فول‌استک",
            title: "مهدی حبیبی نظرلو — مهندس فول‌استک برای ساخت محصولات وب با React و Django.",
            subtitle:
                "توسعه‌دهنده Python و JavaScript با تمرکز بر عملکرد وب، سئوی فنی، مارکتینگ تکنولوژی و اتوماسیون. اپلیکیشن‌های فول‌استک را از API تا رابط کاربری تحویل می‌دهم.",
            primary: "مشاهده پروژه‌ها",
            secondary: "پروفایل گیت‌هاب",
            secondaryHref: "https://github.com/Mahdi-Habibi/",
            location: "ایران",
            stats: [
                { label: "مخزن عمومی", value: "12" },
                { label: "اپلیکیشن منتخب", value: "6+" },
                { label: "استک اصلی", value: "TS / PY" },
            ],
        },
        about: {
            titleLabel: "درباره",
            title: "سیستم‌های شفاف، رابط‌های آرام، تحویل آمادهٔ production.",
            body: "اپلیکیشن‌های فول‌استک را از طراحی API و مدل داده تا رابط کاربری می‌سازم. مدیر فنی وب‌سایت در پدیده شمیم قائم، دانشجوی ارشد معماری سیستم‌ها در دانشگاه شهید بهشتی، و آماده همکاری روی محصولات AI و ساخت فول‌استک جدی.",
            focusAreas: [
                "تحویل اپلیکیشن‌های TypeScript، React/Next.js، NestJS و Django با API امن و UX دقیق.",
                "مالکیت عملکرد وب، سئوی فنی، مارکتینگ تکنولوژی و عملیات پلتفرم در production.",
                "ساخت اتوماسیون و جریان‌های AI که فراتر از دمو دوام بیاورند.",
            ],
            toolbeltTitle: "مهارت‌ها بر اساس مخازن",
            toolbelt: skillsFromRepos,
            recentWinTitle: "کار منتخب",
            recentWinText:
                "Pathwise (آکادمی کیا) — پلتفرم یادگیری تطبیقی با Next.js، NestJS و Prisma، دموی زنده روی GitHub Pages.",
        },
        projects: {
            title: "پروژه‌ها",
            cards: [
                {
                    ...projectCardsEn[0],
                    title: "Pathwise (آکادمی کیا)",
                    description:
                        "پلتفرم یادگیری تطبیقی فارسی‌محور با OTP موبایل، ارزیابی هدف، آزمون آمادگی، مسیر شخصی‌سازی‌شده و پخش درس. مونوریپو Next.js ۱۵، NestJS ۱۱، Prisma و PostgreSQL.",
                    result: "دموی زنده روی GitHub Pages",
                },
                {
                    ...projectCardsEn[1],
                    title: "Pocket Crypto",
                    description:
                        "ربات تلگرام Python برای قیمت لحظه‌ای ارز و کریپتو از CoinMarketCap، به‌همراه اتوماسیون‌های زمان‌بندی‌شده و استقرار webhook روی Vercel.",
                    result: "نقل‌قول لحظه‌ای بازار",
                },
                {
                    ...projectCardsEn[2],
                    title: "SaaS مدیریت پروژه چندمستاجری",
                    description:
                        "MVP تولیدی با tenancy مبتنی بر workspace، RBAC، دعوت‌نامه، پروژه، وظیفه و لاگ فعالیت. بک‌اند Django REST + JWT و فرانت Next.js.",
                    result: "جداسازی tenant در workspace",
                },
                {
                    ...projectCardsEn[3],
                    title: "داشبورد IoT خانه هوشمند",
                    description:
                        "داشبورد MQTT برای پایش سنسور و کنترل دستگاه. بک‌اند Node/Express + MongoDB و فرانت React + Recharts با احراز هویت JWT.",
                    result: "کنترل بلادرنگ دستگاه",
                },
                {
                    ...projectCardsEn[4],
                    title: "پلتفرم مدیریت وظایف",
                    description:
                        "بورد Kanban فول‌استک با JWT و به‌روزرسانی بلادرنگ Socket.IO. کلاینت React + Tailwind، API اکسپرس + MongoDB و Docker Compose.",
                    result: "همکاری بلادرنگ",
                },
                {
                    ...projectCardsEn[5],
                    title: "ردیاب مالی شخصی",
                    description:
                        "ردیاب بودجه با احراز هویت، تراکنش، اهداف پس‌انداز، نمودار تحلیل و پیش‌بینی هزینه. API اکسپرس + Prisma و داشبورد React + Chart.js.",
                    result: "پیش‌بینی هزینه داخلی",
                },
            ],
            cta: "مشاهده در GitHub",
        },
        experience: {
            title: "تجربه",
            items: [
                {
                    role: "مدیر فنی وب‌سایت · فول‌استک، DevOps و عملیات AI",
                    company: "پدیده شمیم قائم",
                    period: "مه ۲۰۲۶ - اکنون",
                    bullets: [
                        "رهبری نگهداری، بهینه‌سازی و استقرار پلتفرم‌های وب شرکت.",
                        "معماری اپلیکیشن‌های فول‌استک با TypeScript، React و Django.",
                        "پشتیبانی از مارکتینگ تکنولوژی و حاکمیت ابزارهای AI.",
                    ],
                },
                {
                    role: "مدرس JavaScript و Python",
                    company: "مجتمع فنی تبریز",
                    period: "مارس ۲۰۲۵ - اکنون",
                    bullets: [
                        "تدریس دوره‌های فول‌استک Python، JavaScript، Django و React.",
                        "منتورینگ پروژه‌های capstone و مسیر گواهی TVTO.",
                        "تدریس به فارسی و انگلیسی برای مخاطبان متنوع.",
                    ],
                },
                {
                    role: "توسعه‌دهنده Django",
                    company: "Agrad Web",
                    period: "اکتبر ۲۰۲۵ - ژانویه ۲۰۲۶",
                    bullets: [
                        "ساخت وب‌سایت کاتالوگ Django با بهبود کشف محصول.",
                        "توسعه اپ مدیریت وظایف با گردش‌کار وضعیت.",
                        "همکاری remote برای تحویل به‌موقع پروژه.",
                    ],
                },
                {
                    role: "توسعه‌دهنده فرانت‌اند",
                    company: "Loris Studio",
                    period: "سپتامبر ۲۰۲۱ - اوت ۲۰۲۴",
                    bullets: [
                        "توسعه رابط‌های responsive برای پروژه‌های بین‌المللی.",
                        "همکاری در تیم Agile با React مدرن.",
                        "پیاده‌سازی کامپوننت‌های پیشرفته React.",
                    ],
                },
                {
                    role: "توسعه‌دهنده فرانت‌اند (کارآموزی)",
                    company: "Loris Studio",
                    period: "سپتامبر ۲۰۲۰ - اوت ۲۰۲۱",
                    bullets: [
                        "پشتیبانی وب‌سایت و لندینگ با HTML5، CSS3 و JavaScript.",
                        "تجربه عملی Git و گردش کار تیمی.",
                    ],
                },
            ],
        },
        education: {
            title: "تحصیلات",
            items: [
                {
                    school: "دانشگاه شهید بهشتی",
                    degree: "کارشناسی ارشد معماری سیستم‌های کامپیوتری",
                    period: "در حال تحصیل",
                    note: "مطالعه پیشرفته معماری سیستم‌ها و طراحی سیستم‌های کامپیوتری.",
                },
                {
                    school: "دانشگاه تبریز",
                    degree: "کارشناسی مهندسی کامپیوتر",
                    period: "فارغ‌التحصیل",
                    note: "مبانی مهندسی نرم‌افزار و سیستم‌ها. پروژه نهایی در University-final-project.",
                },
            ],
        },
        contact: {
            title: "تماس",
            heading: "بیایید چیزی سنجیده بسازیم.",
            body: "آماده همکاری روی اپ‌های AI، ابزارهای اتوماسیون و ساخت فول‌استک جدی. مقیم ایران — پیام بدهید.",
            location: "ایران",
            links: [
                { label: "ایمیل", href: "mailto:info.mahdihabibi@gmail.com" },
                { label: "تلفن", href: "tel:+989029216735" },
                { label: "لینکدین", href: "https://www.linkedin.com/in/mahdi-habibi-developer/" },
                { label: "گیت‌هاب", href: "https://github.com/Mahdi-Habibi/" },
            ],
        },
        sections: sectionsFa,
        systemCards: systemCardsFa,
    },
    es: {
        siteTitle: "Mahdi Habibi | Ingeniero Full-stack",
        languageLabel: "Idioma",
        navLabel: "Navegación",
        nav: [
            { href: "#home", label: "Inicio", icon: "01" },
            { href: "#about", label: "Sobre mí", icon: "02" },
            { href: "#projects", label: "Proyectos", icon: "03" },
            { href: "#experience", label: "Experiencia", icon: "04" },
            { href: "#education", label: "Educación", icon: "05" },
            { href: "#contact", label: "Contacto", icon: "06" },
        ],
        sidebar: {
            summary:
                "Ingeniero full-stack y responsable técnico web — productos con React, Next.js, Django y NestJS, enfocados en rendimiento, marketing technology y automatización.",
            cta: "Colaboremos",
        },
        footer: {
            summary:
                "Ingeniero full-stack en Padideh Shamim Ghaem — productos web, mentoría y sistemas asistidos por IA.",
            navigation: "Navegación",
            contact: "Contacto",
        },
        hero: {
            kicker: "Ingeniero Full-stack",
            title: "Mahdi Habibi Nazarlu — Ingeniero full-stack que crea productos web con React y Django.",
            subtitle:
                "Desarrollador Python y JavaScript centrado en rendimiento web, SEO técnico, marketing technology y automatización. Entrego aplicaciones full-stack de extremo a extremo.",
            primary: "Ver proyectos",
            secondary: "Perfil de GitHub",
            secondaryHref: "https://github.com/Mahdi-Habibi/",
            location: "Irán",
            stats: [
                { label: "Repositorios públicos", value: "12" },
                { label: "Apps seleccionadas", value: "6+" },
                { label: "Stack principal", value: "TS / PY" },
            ],
        },
        about: {
            titleLabel: "Sobre mí",
            title: "Sistemas claros, interfaces calmadas, entrega lista para producción.",
            body: "Diseño y entrego aplicaciones full-stack de extremo a extremo. Actualmente Website Technical Manager en Padideh Shamim Ghaem, estudiante de máster en arquitectura de sistemas en Shahid Beheshti University, abierto a colaborar en apps con IA y builds full-stack serios.",
            focusAreas: [
                "Entregar apps TypeScript, React/Next.js, NestJS y Django con APIs seguras y UX intencional.",
                "Responsabilidad de rendimiento web, SEO técnico, marketing technology y operaciones.",
                "Construir automatización y flujos asistidos por IA que aguanten en producción.",
            ],
            toolbeltTitle: "Skills desde repositorios",
            toolbelt: skillsFromRepos,
            recentWinTitle: "Trabajo seleccionado",
            recentWinText:
                "Pathwise (Kia Academy) — plataforma de aprendizaje adaptativo con Next.js, NestJS y Prisma, demo en vivo en GitHub Pages.",
        },
        projects: {
            title: "Proyectos",
            cards: [
                {
                    ...projectCardsEn[0],
                    title: "Pathwise (Kia Academy)",
                    description:
                        "Plataforma de aprendizaje adaptativo: OTP por teléfono, evaluación de objetivos, tests de preparación, roadmaps personalizados y reproductor de lecciones. Monorepo Next.js 15, NestJS 11, Prisma y PostgreSQL.",
                    result: "Demo en vivo en GitHub Pages",
                },
                {
                    ...projectCardsEn[1],
                    title: "Pocket Crypto",
                    description:
                        "Bot de Telegram en Python para cotizaciones de divisas y crypto desde CoinMarketCap, con automatizaciones programadas y webhook en Vercel.",
                    result: "Cotizaciones de mercado bajo demanda",
                },
                {
                    ...projectCardsEn[2],
                    title: "SaaS multi-tenant de proyectos",
                    description:
                        "MVP con tenancy por workspace, RBAC, invitaciones, proyectos, tareas y activity log. Backend Django REST + JWT y frontend Next.js.",
                    result: "Workspaces aislados por tenant",
                },
                {
                    ...projectCardsEn[3],
                    title: "Panel IoT Smart Home",
                    description:
                        "Dashboard MQTT para sensores y control de dispositivos. Backend Node/Express + MongoDB; frontend React + Recharts con JWT.",
                    result: "Control de dispositivos en tiempo real",
                },
                {
                    ...projectCardsEn[4],
                    title: "Plataforma de gestión de tareas",
                    description:
                        "Kanban full-stack con JWT y actualizaciones Socket.IO. Cliente React + Tailwind, API Express + MongoDB y Docker Compose.",
                    result: "Colaboración en tiempo real",
                },
                {
                    ...projectCardsEn[5],
                    title: "Tracker de finanzas personales",
                    description:
                        "Tracker de presupuestos con auth, transacciones, metas, analytics y forecast de gasto. API Express + Prisma y dashboard React + Chart.js.",
                    result: "Forecast de gasto incluido",
                },
            ],
            cta: "Ver en GitHub",
        },
        experience: {
            title: "Experiencia",
            items: [
                {
                    role: "Website Technical Manager · Full-Stack, DevOps y Operaciones IA",
                    company: "Padideh Shamim Ghaem",
                    period: "May 2026 - Presente",
                    bullets: [
                        "Lidero mantenimiento, optimización y despliegue de plataformas web.",
                        "Arquitecto aplicaciones full-stack con TypeScript, React y Django.",
                        "Apoyo marketing technology y gobernanza de herramientas de IA.",
                    ],
                },
                {
                    role: "Instructor de JavaScript y Python",
                    company: "Complejo Técnico de Tabriz",
                    period: "Mar 2025 - Presente",
                    bullets: [
                        "Imparto cursos full-stack en Python, JavaScript, Django y React.",
                        "Mentorizo proyectos capstone hacia certificación TVTO.",
                        "Enseño en persa e inglés a perfiles diversos.",
                    ],
                },
                {
                    role: "Desarrollador Django",
                    company: "Agrad Web",
                    period: "Oct 2025 - Ene 2026",
                    bullets: [
                        "Catálogo Django con mejor descubrimiento de productos.",
                        "App de gestión de tareas con flujos de estado.",
                        "Colaboración remota para entregar a tiempo.",
                    ],
                },
                {
                    role: "Desarrollador Front-end",
                    company: "Loris Studio",
                    period: "Sep 2021 - Ago 2024",
                    bullets: [
                        "Interfaces responsive para proyectos internacionales.",
                        "Equipo Agile entregando UI precisa con React moderno.",
                        "Componentes React avanzados con hooks.",
                    ],
                },
                {
                    role: "Desarrollador Front-end (Prácticas)",
                    company: "Loris Studio",
                    period: "Sep 2020 - Ago 2021",
                    bullets: [
                        "Sitios y landing pages con HTML5, CSS3 y JavaScript.",
                        "Experiencia práctica con Git y flujos colaborativos.",
                    ],
                },
            ],
        },
        education: {
            title: "Educación",
            items: [
                {
                    school: "Universidad Shahid Beheshti",
                    degree: "Máster en Arquitectura de Sistemas Informáticos",
                    period: "En curso",
                    note: "Estudio avanzado de arquitectura y diseño de sistemas.",
                },
                {
                    school: "Universidad de Tabriz",
                    degree: "Licenciatura en Ingeniería Informática",
                    period: "Completado",
                    note: "Fundamentos de ingeniería de software. Capstone en University-final-project.",
                },
            ],
        },
        contact: {
            title: "Contacto",
            heading: "Construyamos algo intencional.",
            body: "Abierto a colaborar en apps con IA, automatización y builds full-stack serios. Basado en Irán — escríbeme.",
            location: "Irán",
            links: [
                { label: "Correo", href: "mailto:info.mahdihabibi@gmail.com" },
                { label: "Teléfono", href: "tel:+989029216735" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/mahdi-habibi-developer/" },
                { label: "GitHub", href: "https://github.com/Mahdi-Habibi/" },
            ],
        },
        sections: sectionsEs,
        systemCards: systemCardsEs,
    },
};
