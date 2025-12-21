export const languages = [
    { code: "en", label: "English" },
    { code: "fa", label: "Persian" },
    { code: "es", label: "Spanish" },
];

export const translations = {
    en: {
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
            summary: "React and Django specialist focused on reliable backends, deliberate UI/UX, and mentoring devs.",
            cta: "Let's collaborate",
        },
        hero: {
            kicker: "Full-stack developer",
            title: "Mahdi Habibi Nazarlu - React and Django specialist building scalable products.",
            subtitle:
                "Results-driven engineer with a Python/Django backbone and modern React front-ends, focused on performant APIs, thoughtful UI/UX, and clean, maintainable code for teams shipping at pace.",
            primary: "View projects",
            secondary: "View resume",
            location: "Tabriz, Iran - UTC+3:30",
            stats: [
                { label: "Projects shipped", value: "24+" },
                { label: "Avg. page load", value: "0.8s" },
                { label: "Teams helped", value: "11" },
            ],
        },
        about: {
            titleLabel: "About",
            title: "Crafting scalable, human web products.",
            body: "Full-stack developer with a React/Django core, strong Python background, and a track record of shipping reliable REST APIs and usable interfaces. I collaborate closely with teams, translate business needs into technical plans, and keep codebases clean and maintainable.",
            focusAreas: [
                "Ship React + Django products with resilient APIs and thoughtful UX.",
                "Mentor developers and guide Agile delivery with clean architecture.",
                "Optimize performance and accessibility with modern tooling.",
            ],
            toolbeltTitle: "Toolbelt",
            toolbelt: [
                "React",
                "Django",
                "TypeScript",
                "Python",
                "REST",
                "Tailwind",
                "Sass",
                "MongoDB",
                "MySQL",
                "SQLite",
                "GitHub",
                "Docker (basic)",
            ],
            recentWinTitle: "Recent win",
            recentWinText:
                "Cut Largest Contentful Paint to 1.2s for a multi-brand landing system by redesigning the asset pipeline and removing 70% of unused CSS.",
        },
        projects: {
            title: "Projects",
            cards: [
                {
                    title: "Job-Seeking Platform",
                    description:
                        "Full-stack portal with authentication, CRUD job listings, and responsive UI for candidates and employers.",
                    stack: ["PHP", "Bootstrap", "NoSQL"],
                    result: "Production-ready features and optimized data model",
                },
                {
                    title: "Python/Django Teaching Track",
                    description:
                        "Project-based curriculum covering RESTful APIs, React frontends, and deployment for 50+ students.",
                    stack: ["Django", "React", "REST", "GitHub"],
                    result: "Avg. 4.8/5 student satisfaction",
                },
                {
                    title: "ML/DL Translation Project",
                    description:
                        "Translated advanced machine learning and deep learning resources to Persian to expand accessibility.",
                    stack: ["Localization", "Technical Writing", "Version Control"],
                    result: "Enabled broader research access",
                },
            ],
            cta: "Request a walkthrough",
        },
        experience: {
            title: "Experience",
            items: [
                {
                    role: "Full-Stack Developer",
                    company: "Agrad Web",
                    period: "Nov 2025 - Present",
                    bullets: [
                        "Design and develop scalable web apps using Django backends and React frontends.",
                        "Implement secure REST APIs, auth, and performant database models.",
                        "Collaborate with clients to translate requirements into high-UX solutions and deploy via Docker/NGINX.",
                    ],
                },
                {
                    role: "Full-Stack Development and Python Instructor",
                    company: "Tabriz Technical Complex",
                    period: "Apr 2025 - Present",
                    bullets: [
                        "Teach Python/Django and React to 50+ students with project-based curricula.",
                        "Lead code reviews and mentorship to help students ship production-ready apps.",
                        "Maintain a 4.8/5 satisfaction score through interactive lessons and guidance.",
                    ],
                },
                {
                    role: "PHP Developer",
                    company: "Petco (Pump & Turbine of Tabriz)",
                    period: "Jun 2023 - Mar 2024",
                    bullets: [
                        "Built and maintained internal and public applications with PHP, JavaScript, and MySQL.",
                        "Improved UI responsiveness by 30% via Bootstrap refactors and async patterns.",
                        "Collaborated in Agile teams with GitHub-based version control.",
                    ],
                },
                {
                    role: "English Teacher",
                    company: "C+C Academy",
                    period: "Dec 2022 - Nov 2023",
                    bullets: [
                        "Trained 100+ students in communication, academic writing, and presentation skills.",
                        "Created interactive materials leveraging digital tools to boost engagement.",
                    ],
                },
                {
                    role: "Front-End Developer",
                    company: "Loris Studio",
                    period: "Sep 2020 - Sep 2021",
                    bullets: [
                        "Built responsive client-facing interfaces with Bootstrap, jQuery, and custom JavaScript.",
                        "Enhanced cross-browser compatibility and UX for diverse client requirements.",
                    ],
                },
            ],
        },
        education: {
            title: "Education",
            items: [
                {
                    school: "Shahid Beheshti University",
                    degree: "M.Sc. in Computer Architecture",
                    period: "In progress",
                    note: "Advanced study in computer architecture and systems design.",
                },
                {
                    school: "Tabriz University",
                    degree: "B.Sc. in Computer Engineering",
                    period: "Completed",
                    note: "Focused on software engineering fundamentals and distributed systems.",
                },
            ],
        },
        contact: {
            title: "Contact",
            heading: "Let's build something deliberate.",
            body: "Tell me about the problem you are solving, your timeline, and the collaboration you need. I respond within 24 hours.",
            location: "Tabriz, Iran - UTC+3:30",
            links: [
                { label: "Email", href: "mailto:info.mahdihabibi@gmail.com" },
                { label: "Phone", href: "tel:+989029216735" },
            ],
        },
    },
    fa: {
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
            summary: "متخصص React و Django با تمرکز بر بک‌اند قابل اعتماد، تجربه کاربری دقیق و منتورینگ تیم‌ها.",
            cta: "همکاری کنیم",
        },
        hero: {
            kicker: "توسعه‌دهنده فول‌استک",
            title: "مهدی حبیبی نظرلو - متخصص React و Django برای ساخت محصولات مقیاس‌پذیر.",
            subtitle:
                "مهندس نتیجه‌محور با ستون فقرات پایتون/جنگو و فرانت‌اند مدرن React؛ تمرکز بر API سریع، تجربه کاربری دقیق و کد نگهداشت‌پذیر برای تیم‌های پرسرعت.",
            primary: "مشاهده پروژه‌ها",
            secondary: "مشاهده رزومه",
            location: "تبریز، ایران - ۳:۳۰+ UTC",
            stats: [
                { label: "پروژه تحویل‌شده", value: "24+" },
                { label: "میانگین بارگذاری", value: "0.8s" },
                { label: "تیم‌های همراه", value: "11" },
            ],
        },
        about: {
            titleLabel: "درباره",
            title: "ساخت محصولات وب مقیاس‌پذیر و انسان‌محور.",
            body: "توسعه‌دهنده فول‌استک با هسته React/جنگو و سابقه قوی پایتون. تجربه تحویل API پایدار و رابط قابل‌استفاده دارم، نیاز کسب‌وکار را به برنامه فنی تبدیل می‌کنم و کدبیس را تمیز و قابل نگهداری نگه می‌دارم.",
            focusAreas: [
                "تحویل محصول React و Django با API مقاوم و تجربه کاربری سنجیده.",
                "منتورینگ توسعه‌دهندگان و هدایت تحویل اجایل با معماری تمیز.",
                "بهینه‌سازی کارایی و دسترس‌پذیری با ابزارهای مدرن.",
            ],
            toolbeltTitle: "جعبه‌ابزار",
            toolbelt: [
                "React",
                "Django",
                "TypeScript",
                "Python",
                "REST",
                "Tailwind",
                "Sass",
                "MongoDB",
                "MySQL",
                "SQLite",
                "GitHub",
                "Docker (basic)",
            ],
            recentWinTitle: "موفقیت اخیر",
            recentWinText:
                "LCP را به ۱.۲ ثانیه رساندم با بازطراحی پایپلاین دارایی‌ها و حذف ۷۰٪ CSS بدون استفاده برای یک سیستم لندینگ چندبرندی.",
        },
        projects: {
            title: "پروژه‌ها",
            cards: [
                {
                    title: "پلتفرم کاریابی",
                    description:
                        "پرتال فول‌استک با احراز هویت، مدیریت آگهی شغلی و رابط واکنش‌گرا برای کارجو و کارفرما.",
                    stack: ["PHP", "Bootstrap", "NoSQL"],
                    result: "قابلیت‌های آماده تولید و مدل داده بهینه",
                },
                {
                    title: "مسیر آموزشی پایتون/جنگو",
                    description:
                        "مسیری پروژه‌محور برای آموزش APIهای REST، فرانت React و استقرار برای ۵۰+ دانشجو.",
                    stack: ["Django", "React", "REST", "GitHub"],
                    result: "میانگین رضایت ۴.۸ از ۵",
                },
                {
                    title: "پروژه ترجمه ML/DL",
                    description:
                        "ترجمه منابع یادگیری ماشین و یادگیری عمیق به فارسی برای دسترسی گسترده‌تر.",
                    stack: ["Localization", "Technical Writing", "Version Control"],
                    result: "دسترسی پژوهشی گسترده‌تر",
                },
            ],
            cta: "درخواست توضیح",
        },
        experience: {
            title: "تجربه",
            items: [
                {
                    role: "توسعه‌دهنده فول‌استک",
                    company: "Agrad Web",
                    period: "نوامبر ۲۰۲۵ - اکنون",
                    bullets: [
                        "طراحی و توسعه وب‌اپ مقیاس‌پذیر با بک‌اند جنگو و فرانت React.",
                        "پیاده‌سازی API امن، احراز هویت و مدل داده performant.",
                        "ترجمه نیاز مشتری به راهکار با UX بالا و استقرار با Docker/NGINX.",
                    ],
                },
                {
                    role: "مدرس توسعه فول‌استک و پایتون",
                    company: "مجتمع فنی تبریز",
                    period: "آوریل ۲۰۲۵ - اکنون",
                    bullets: [
                        "تدریس پایتون/جنگو و React به ۵۰+ دانشجو با پروژه‌های عملی.",
                        "کدریویو و منتورینگ برای رساندن دانشجوها به خروجی قابل‌تولید.",
                        "حفظ امتیاز رضایت ۴.۸/۵ با کلاس‌های تعاملی.",
                    ],
                },
                {
                    role: "برنامه‌نویس PHP",
                    company: "Petco (Pump & Turbine of Tabriz)",
                    period: "ژوئن ۲۰۲۳ - مارس ۲۰۲۴",
                    bullets: [
                        "ساخت و نگهداری اپ‌های داخلی و عمومی با PHP، جاوااسکریپت و MySQL.",
                        "۳۰٪ بهبود واکنش‌پذیری UI با بازطراحی Bootstrap و الگوهای async.",
                        "همکاری در تیم اجایل با کنترل نسخه GitHub.",
                    ],
                },
                {
                    role: "مدرس زبان انگلیسی",
                    company: "C+C Academy",
                    period: "دسامبر ۲۰۲۲ - نوامبر ۲۰۲۳",
                    bullets: [
                        "آموزش ۱۰۰+ دانشجو در مهارت‌های ارتباطی، نوشتار علمی و ارائه.",
                        "ایجاد محتواهای تعاملی با ابزارهای دیجیتال برای افزایش مشارکت.",
                    ],
                },
                {
                    role: "توسعه‌دهنده فرانت‌اند",
                    company: "Loris Studio",
                    period: "سپتامبر ۲۰۲۰ - سپتامبر ۲۰۲۱",
                    bullets: [
                        "ساخت رابط کاربری واکنش‌گرا با Bootstrap، jQuery و جاوااسکریپت.",
                        "بهبود سازگاری بین مرورگر و UX برای نیازهای متنوع مشتری.",
                    ],
                },
            ],
        },
        education: {
            title: "تحصیلات",
            items: [
                {
                    school: "دانشگاه شهید بهشتی",
                    degree: "کارشناسی ارشد معماری کامپیوتر",
                    period: "در حال تحصیل",
                    note: "مطالعه پیشرفته در معماری و طراحی سیستم‌های کامپیوتری.",
                },
                {
                    school: "دانشگاه تبریز",
                    degree: "کارشناسی مهندسی کامپیوتر",
                    period: "فارغ‌التحصیل",
                    note: "تمرکز بر مبانی مهندسی نرم‌افزار و سیستم‌های توزیع‌شده.",
                },
            ],
        },
        contact: {
            title: "تماس",
            heading: "بیایید چیزی سنجیده بسازیم.",
            body: "از مسئله، زمان‌بندی و نوع همکاری بگویید؛ در کمتر از ۲۴ ساعت پاسخ می‌دهم.",
            location: "تبریز، ایران - ۳:۳۰+ UTC",
            links: [
                { label: "ایمیل", href: "mailto:info.mahdihabibi@gmail.com" },
                { label: "تلفن", href: "tel:+989029216735" },
            ],
        },
    },
    es: {
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
            summary: "Especialista en React y Django enfocado en backends fiables, UX intencional y mentoría de equipos.",
            cta: "Colaboremos",
        },
        hero: {
            kicker: "Desarrollador full‑stack",
            title: "Mahdi Habibi Nazarlu - Especialista en React y Django que crea productos escalables.",
            subtitle:
                "Ingeniero orientado a resultados con base en Python/Django y front-ends modernos en React; enfocado en APIs de alto rendimiento, UX cuidada y código mantenible para equipos de ritmo alto.",
            primary: "Ver proyectos",
            secondary: "Ver currículum",
            location: "Tabriz, Irán - UTC+3:30",
            stats: [
                { label: "Proyectos entregados", value: "24+" },
                { label: "Carga promedio", value: "0.8s" },
                { label: "Equipos apoyados", value: "11" },
            ],
        },
        about: {
            titleLabel: "Sobre mí",
            title: "Creando productos web escalables y humanos.",
            body: "Desarrollador full‑stack con núcleo React/Django y sólida base en Python. Experiencia entregando APIs REST confiables e interfaces usables; traduzco necesidades de negocio en planes técnicos y mantengo el código limpio y mantenible.",
            focusAreas: [
                "Entregar productos React + Django con APIs resilientes y UX pensada.",
                "Guiar equipos y mentorizar con arquitectura limpia y prácticas ágiles.",
                "Optimizar rendimiento y accesibilidad con herramientas modernas.",
            ],
            toolbeltTitle: "Stack",
            toolbelt: [
                "React",
                "Django",
                "TypeScript",
                "Python",
                "REST",
                "Tailwind",
                "Sass",
                "MongoDB",
                "MySQL",
                "SQLite",
                "GitHub",
                "Docker (básico)",
            ],
            recentWinTitle: "Logro reciente",
            recentWinText:
                "Reduje el LCP a 1.2s en un sistema de landings multi-marca rediseñando el pipeline de assets y eliminando 70% del CSS sin uso.",
        },
        projects: {
            title: "Proyectos",
            cards: [
                {
                    title: "Plataforma de empleo",
                    description:
                        "Portal full‑stack con autenticación, CRUD de ofertas y UI responsiva para candidatos y empleadores.",
                    stack: ["PHP", "Bootstrap", "NoSQL"],
                    result: "Funciones listas para producción y modelo de datos optimizado",
                },
                {
                    title: "Ruta de enseñanza Python/Django",
                    description:
                        "Currículo basado en proyectos sobre APIs REST, frontends en React y despliegue para más de 50 estudiantes.",
                    stack: ["Django", "React", "REST", "GitHub"],
                    result: "Satisfacción promedio 4.8/5",
                },
                {
                    title: "Proyecto de traducción ML/DL",
                    description:
                        "Traducción de recursos avanzados de ML y DL al persa para ampliar el acceso.",
                    stack: ["Localization", "Technical Writing", "Version Control"],
                    result: "Acceso de investigación más amplio",
                },
            ],
            cta: "Pedir recorrido",
        },
        experience: {
            title: "Experiencia",
            items: [
                {
                    role: "Desarrollador full‑stack",
                    company: "Agrad Web",
                    period: "Nov 2025 - Presente",
                    bullets: [
                        "Diseñar y desarrollar apps escalables con backend Django y frontend React.",
                        "Implementar APIs REST seguras, autenticación y modelos de datos de alto rendimiento.",
                        "Traducir requisitos de clientes en soluciones con gran UX y desplegar con Docker/NGINX.",
                    ],
                },
                {
                    role: "Instructor de desarrollo full‑stack y Python",
                    company: "Complejo Técnico de Tabriz",
                    period: "Abr 2025 - Presente",
                    bullets: [
                        "Enseñar Python/Django y React a más de 50 estudiantes con proyectos prácticos.",
                        "Liderar revisiones de código y mentoría para entregar apps listas para producción.",
                        "Mantener 4.8/5 de satisfacción con clases interactivas.",
                    ],
                },
                {
                    role: "Desarrollador PHP",
                    company: "Petco (Pump & Turbine of Tabriz)",
                    period: "Jun 2023 - Mar 2024",
                    bullets: [
                        "Construir y mantener apps internas y públicas con PHP, JavaScript y MySQL.",
                        "Mejorar la respuesta del UI en 30% con refactors en Bootstrap y patrones asíncronos.",
                        "Colaborar en equipos ágiles con control de versiones en GitHub.",
                    ],
                },
                {
                    role: "Profesor de inglés",
                    company: "C+C Academy",
                    period: "Dic 2022 - Nov 2023",
                    bullets: [
                        "Formé a más de 100 estudiantes en comunicación, redacción académica y presentación.",
                        "Creé materiales interactivos con herramientas digitales para aumentar la participación.",
                    ],
                },
                {
                    role: "Desarrollador front‑end",
                    company: "Loris Studio",
                    period: "Sep 2020 - Sep 2021",
                    bullets: [
                        "Construí interfaces responsivas con Bootstrap, jQuery y JavaScript.",
                        "Mejoré compatibilidad entre navegadores y UX para requisitos diversos.",
                    ],
                },
            ],
        },
        education: {
            title: "Educación",
            items: [
                {
                    school: "Universidad Shahid Beheshti",
                    degree: "Máster en Arquitectura de Computadores",
                    period: "En curso",
                    note: "Estudio avanzado de arquitectura y diseño de sistemas.",
                },
                {
                    school: "Universidad de Tabriz",
                    degree: "Licenciatura en Ingeniería Informática",
                    period: "Completado",
                    note: "Enfoque en fundamentos de software y sistemas distribuidos.",
                },
            ],
        },
        contact: {
            title: "Contacto",
            heading: "Construyamos algo intencional.",
            body: "Cuéntame el problema que quieres resolver, tu calendario y la colaboración que necesitas. Respondo en 24 horas.",
            location: "Tabriz, Irán - UTC+3:30",
            links: [
                { label: "Correo", href: "mailto:info.mahdihabibi@gmail.com" },
                { label: "Teléfono", href: "tel:+989029216735" },
            ],
        },
    },
};
