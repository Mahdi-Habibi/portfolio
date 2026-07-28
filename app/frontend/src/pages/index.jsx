import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import "../styles/global.css";
import ScrollToTop from "../components/ui/ScrollToTop";
import { useScrollBehavior } from "../hooks/useScrollBehavior";
import { languages, translations } from "../i18n/translations";

const SECTIONS = [
    { id: "home", label: "Intro" },
    { id: "projects", label: "Work" },
    { id: "clients", label: "Clients" },
    { id: "highlights", label: "Impact" },
    { id: "about", label: "About" },
    { id: "systems", label: "Stack" },
    { id: "experience", label: "Journey" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
];

function ImageOrFallback({ src, alt, className = "", fallbackText = "MH" }) {
    const [broken, setBroken] = useState(false);
    if (broken) {
        return <div className={`portrait-fallback ${className}`.trim()} aria-label={alt}>{fallbackText}</div>;
    }
    return <img src={src} alt={alt} className={className} onError={() => setBroken(true)} />;
}

function splitLocation(location) {
    const [city, rest] = location.split(",");
    return { city: city?.trim() || location, region: rest?.trim() || "Iran" };
}

function CasePreviewPanel({ preview }) {
    if (!preview) return null;
    return (
        <div
            className="case-preview-float"
            style={{ left: preview.x, top: preview.y }}
            aria-hidden="true"
        >
            <div className="case-preview-float-media">
                <ImageOrFallback src={preview.image} alt="" className="case-preview-float-image" fallbackText={preview.index} />
            </div>
            <div className="case-preview-float-body">
                <span className="case-preview-float-index">{preview.index}</span>
                <p className="case-preview-float-title">{preview.title}</p>
                <p className="case-preview-float-result">{preview.result}</p>
            </div>
        </div>
    );
}

function projectImageUrl(imagePath) {
    if (!imagePath) return "";
    const base = import.meta.env.BASE_URL || "/";
    return `${base}${imagePath.replace(/^\//, "")}`;
}

export default function IndexPage() {
    const [language, setLanguage] = useState("en");
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [casePreview, setCasePreview] = useState(null);
    const [journeyProgress, setJourneyProgress] = useState(0);
    const journeySectionRef = useRef(null);
    const t = translations[language] || translations.en;
    const { navVisible, scrollTopVisible } = useScrollBehavior();
    const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;
    const locationParts = splitLocation(t.hero.location.replace(/\([^)]*\)/, "").trim());
    const featuredSkills = useMemo(() => t.about.toolbelt, [t.about.toolbelt]);
    const clientTags = useMemo(() => [...t.about.toolbelt.slice(0, 12), ...t.projects.cards.flatMap((c) => c.stack)], [t.about.toolbelt, t.projects.cards]);

    const impactCards = useMemo(
        () => [
            { initials: "MH", quote: t.about.recentWinText, name: t.about.recentWinTitle, role: "Recent delivery" },
            ...t.hero.stats.map((stat) => ({
                initials: stat.value.replace(/[^0-9A-Za-z+]/g, "").slice(0, 2) || "MH",
                quote: `${stat.value} — measurable outcome across product delivery and mentoring.`,
                name: stat.label,
                role: "Impact metric",
            })),
        ],
        [t.about.recentWinText, t.about.recentWinTitle, t.hero.stats],
    );

    const systemCards = useMemo(
        () => [
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
                title: t.about.toolbeltTitle,
                body: "Stack extracted from public repositories — languages, frameworks, data stores, and deploy targets actually used in code.",
                tags: t.about.toolbelt.slice(0, 4),
            },
        ],
        [t.about],
    );

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
        document.title = t.siteTitle || "Mahdi Habibi | React & Django Specialist";
        document.documentElement.setAttribute("data-theme", "dark");
    }, [language, t.siteTitle]);

    useEffect(() => {
        if (!menuOpen) return;
        const close = () => setMenuOpen(false);
        window.addEventListener("resize", close);
        return () => window.removeEventListener("resize", close);
    }, [menuOpen]);

    useEffect(() => {
        const nodes = document.querySelectorAll(".reveal");
        const revealObserver = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            }),
            { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
        );
        nodes.forEach((node) => revealObserver.observe(node));

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
        );
        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) sectionObserver.observe(el);
        });

        return () => {
            revealObserver.disconnect();
            sectionObserver.disconnect();
        };
    }, [language]);

    useEffect(() => {
        const updateJourneyProgress = () => {
            const section = journeySectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            const scrollable = section.offsetHeight - window.innerHeight * 0.35;
            if (scrollable <= 0) {
                setJourneyProgress(rect.top <= window.innerHeight * 0.5 ? 1 : 0);
                return;
            }
            const travelled = Math.min(Math.max(window.innerHeight * 0.25 - rect.top, 0), scrollable);
            setJourneyProgress(travelled / scrollable);
        };

        updateJourneyProgress();
        window.addEventListener("resize", updateJourneyProgress);
        return () => window.removeEventListener("resize", updateJourneyProgress);
    }, [language]);

    useLenis((lenis) => {
        const section = journeySectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight * 0.35;
        if (scrollable <= 0) {
            setJourneyProgress(rect.top <= window.innerHeight * 0.5 ? 1 : 0);
            return;
        }
        const travelled = Math.min(Math.max(window.innerHeight * 0.25 - rect.top, 0), scrollable);
        setJourneyProgress(travelled / scrollable);
    }, [language]);

    const showCasePreview = (card, idx, event) => {
        if (window.matchMedia("(max-width: 1024px)").matches) return;
        const offset = 24;
        setCasePreview({
            title: card.title,
            result: card.result,
            image: projectImageUrl(card.image),
            index: String(idx + 1).padStart(2, "0"),
            x: Math.min(event.clientX + offset, window.innerWidth - 340),
            y: Math.min(event.clientY + offset, window.innerHeight - 280),
        });
    };

    const moveCasePreview = (event) => {
        setCasePreview((prev) => {
            if (!prev) return prev;
            const offset = 24;
            return {
                ...prev,
                x: Math.min(event.clientX + offset, window.innerWidth - 340),
                y: Math.min(event.clientY + offset, window.innerHeight - 280),
            };
        });
    };

    const hideCasePreview = () => setCasePreview(null);

    const heroTags = "TypeScript / Python / React / Next.js / NestJS / Django";
    const heroCred = `${t.hero.stats[0]?.value || "12"} public repos · ${t.hero.stats[1]?.value || "6+"} selected apps · ${t.hero.stats[2]?.value || "TS / PY"} primary stack`;

    return (
        <div className="grain">
            <header className={`site-header ${navVisible || menuOpen ? "site-header--visible" : "site-header--hidden"}`}>
                <div className="container-x header-inner">
                    <a href="#home" className="brand">Mahdi<span className="brand-accent">.</span></a>
                    <nav className="header-nav" aria-label={t.navLabel || "Navigation"}>
                        {t.nav.map((item) => (
                            <a key={item.href} href={item.href} className="link-underline">{item.label}</a>
                        ))}
                    </nav>
                    <div className="header-actions">
                        <div className="lang-switch" role="group" aria-label={t.languageLabel || "Language"}>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    type="button"
                                    onClick={() => setLanguage(lang.code)}
                                    className={language === lang.code ? "is-active" : ""}
                                >
                                    {lang.code}
                                </button>
                            ))}
                        </div>
                        <a href="#contact" className="btn-accent">{t.sidebar.cta}</a>
                    </div>
                    <button
                        type="button"
                        className="menu-toggle"
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        <span />
                    </button>
                </div>
                {menuOpen && (
                    <div className="mobile-nav" data-lenis-prevent>
                        {t.nav.map((item) => (
                            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
                        ))}
                    </div>
                )}
            </header>

            <nav className="section-rail" aria-label="Section navigation">
                {SECTIONS.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={activeSection === section.id ? "is-active" : ""}
                    >
                        <span>{section.label}</span>
                        <span />
                    </a>
                ))}
            </nav>

            <main onMouseMove={moveCasePreview}>
                <section id="home" className="hero-section">
                    <div className="hero-glow" aria-hidden="true" />
                    <div className="hero-gradient-a" aria-hidden="true" />
                    <div className="hero-gradient-b" aria-hidden="true" />
                    <div className="container-x hero-content">
                        <div className="hero-enter">
                            <div className="hero-meta hero-fade hero-fade-1">
                                <span className="eyebrow">{locationParts.city}, {locationParts.region}</span>
                                <span className="eyebrow eyebrow-faint">{heroTags}</span>
                            </div>
                            <h1 className="hero-name">
                                <span className="line-mask"><span className="line-mask-inner line-mask-inner-1">Mahdi</span></span>
                                <span className="line-mask"><span className="line-mask-inner line-mask-inner-2 hero-name-muted">Habibi</span></span>
                            </h1>
                            <p className="hero-lede hero-fade hero-fade-2">{t.hero.subtitle.split(".")[0]}.</p>
                            <p className="hero-cred hero-fade hero-fade-3">{heroCred}</p>
                            <div className="hero-cta hero-fade hero-fade-4">
                                <a href="#projects" className="btn-solid">{t.hero.primary}</a>
                                <a href="#contact" className="btn-accent">{t.sidebar.cta}</a>
                                <a href={t.hero.secondaryHref} className="btn-ghost" target="_blank" rel="noopener noreferrer">{t.hero.secondary} ↗</a>
                            </div>
                            <a href="#projects" className="hero-scroll-hint link-underline hero-fade hero-fade-5">View my case studies</a>
                        </div>
                    </div>
                </section>

                <section id="projects" className="section-block">
                    <div className="container-x">
                        <div className="section-head-row reveal">
                            <div>
                                <p className="eyebrow">[ Selected repositories ]</p>
                                <h2 className="section-title section-title-wide">Shipped products from my GitHub — learning platforms, SaaS, IoT, and automation.</h2>
                            </div>
                            <a href="https://github.com/Mahdi-Habibi?tab=repositories" className="link-underline" style={{ color: "var(--fg-muted)", fontSize: "0.875rem" }} target="_blank" rel="noopener noreferrer">All repositories →</a>
                        </div>
                        <div className="work-grid">
                            {t.projects.cards.map((card, idx) => (
                                <article
                                    key={card.id || card.title}
                                    className="work-card reveal"
                                    onMouseEnter={(event) => showCasePreview(card, idx, event)}
                                    onMouseLeave={hideCasePreview}
                                    onFocus={(event) => showCasePreview(card, idx, event)}
                                    onBlur={hideCasePreview}
                                >
                                    <a
                                        className="work-card-media"
                                        href={card.live || card.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${card.title} — open project`}
                                    >
                                        <span className="work-card-index">{String(idx + 1).padStart(2, "0")}</span>
                                        <ImageOrFallback
                                            src={projectImageUrl(card.image)}
                                            alt={`${card.title} preview`}
                                            className="work-card-preview-image"
                                            fallbackText={String(idx + 1).padStart(2, "0")}
                                        />
                                        <div className="work-card-media-overlay" />
                                    </a>
                                    <div className="work-card-body">
                                        <div className="work-card-top">
                                            <div>
                                                <h3>
                                                    <a href={card.href} target="_blank" rel="noopener noreferrer">{card.title}</a>
                                                </h3>
                                                <p className="work-card-meta">{card.stack?.[0] || t.hero.kicker} · {card.year || "2026"}</p>
                                            </div>
                                        </div>
                                        <p className="work-card-result">{card.result}</p>
                                        <p>{card.description}</p>
                                        <div className="work-card-tags">
                                            {card.stack.map((tech) => <span key={tech}>{tech}</span>)}
                                        </div>
                                        <div className="work-card-links">
                                            <a href={card.href} target="_blank" rel="noopener noreferrer" className="link-underline">{t.projects.cta}</a>
                                            {card.live ? (
                                                <a href={card.live} target="_blank" rel="noopener noreferrer" className="link-underline">Live demo ↗</a>
                                            ) : null}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="clients" className="section-block section-border clients-panel">
                    <div className="container-x reveal">
                        <p className="eyebrow">[ Stack in public repos ]</p>
                        <h2 className="section-title" style={{ marginInline: "auto", maxWidth: "24ch" }}>Languages and frameworks used across Pathwise, Pocket Crypto, SaaS, IoT, and finance apps.</h2>
                        <p className="section-copy" style={{ marginInline: "auto" }}>Hover a case study to preview its cover, click to open the repo or live demo</p>
                        <div className="clients-marquee" aria-hidden="true">
                            <div className="clients-track">
                                {[...clientTags, ...clientTags].map((tag, i) => <span key={`${tag}-${i}`}>{tag}</span>)}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="highlights" className="section-block section-border">
                    <div className="container-x">
                        <p className="eyebrow reveal">[ Impact signals ]</p>
                        <h2 className="section-title section-title-wide reveal">Outcomes from mentoring, client delivery, and public engineering work.</h2>
                        <div className="masonry">
                            {impactCards.map((card) => (
                                <figure key={`${card.name}-${card.initials}`} className="masonry-card reveal">
                                    <blockquote>{card.quote}</blockquote>
                                    <figcaption>
                                        <span className="avatar-badge">{card.initials}</span>
                                        <span style={{ fontSize: "0.875rem" }}>
                                            <strong style={{ display: "block" }}>{card.name}</strong>
                                            <span style={{ color: "var(--fg-muted)" }}>{card.role}</span>
                                        </span>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="section-block">
                    <div className="container-x about-grid">
                        <div className="about-photo-wrap reveal">
                            <div className="about-photo">
                                <ImageOrFallback src={profileImage} alt="Mahdi Habibi portrait" />
                            </div>
                            <div className="about-location-badge">Iran</div>
                        </div>
                        <div className="about-copy reveal">
                            <p className="eyebrow">[ About ]</p>
                            <h2>{t.about.title}</h2>
                            <p>{t.about.body}</p>
                            <div className="skill-tags">
                                {featuredSkills.slice(0, 10).map((skill) => <span key={skill}>{skill}</span>)}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="systems" className="section-block section-border">
                    <div className="container-x">
                        <div className="reveal">
                            <p className="eyebrow">[ Systems &amp; tooling ]</p>
                            <h2 className="section-title">Tools that power the repositories above.</h2>
                            <p className="section-copy">{t.about.recentWinText}</p>
                        </div>
                        <div className="systems-grid">
                            {systemCards.map((card) => (
                                <article key={card.title} className={`system-card reveal ${card.featured ? "featured" : ""}`}>
                                    <h3>{card.title}</h3>
                                    <p>{card.body}</p>
                                    <div className="system-card-tags">
                                        {card.tags.map((tag) => <span key={tag}>{tag}</span>)}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="experience" ref={journeySectionRef} className="section-block section-border journey-section">
                    <div className="container-x journey-layout">
                        <div className="journey-intro reveal">
                            <p className="eyebrow">[ My journey ]</p>
                            <h2 className="section-title">Where I have worked</h2>
                            <p className="section-copy">Full-stack engineering across product companies, client delivery, and technical education — from foundational web work to AI-enabled platform operations.</p>
                            <div className="journey-progress">
                                <div className="journey-progress-labels">
                                    <span>Foundations</span>
                                    <span>Today</span>
                                </div>
                                <div className="journey-progress-bar">
                                    <span style={{ width: `${Math.round(journeyProgress * 100)}%` }} />
                                </div>
                            </div>
                        </div>
                        <ol className="journey-list">
                            {t.experience.items.map((item, idx) => {
                                const itemProgress = (idx + 1) / t.experience.items.length;
                                const isActive = journeyProgress >= itemProgress - 0.12;
                                return (
                                <li
                                    key={`${item.role}-${item.company}`}
                                    className={`journey-item reveal ${isActive ? "is-active" : ""}`}
                                >
                                    <span className="journey-dot" aria-hidden="true" />
                                    <p className="journey-role">{item.company} · {item.role.split(",")[0]}</p>
                                    <p className="journey-meta">{item.role} · {item.period}</p>
                                    <h3>{item.bullets[0]?.split(".")[0] || item.role}</h3>
                                    <ul>
                                        {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                    </ul>
                                </li>
                                );
                            })}
                        </ol>
                    </div>
                </section>

                <section id="education" className="section-block section-border">
                    <div className="container-x">
                        <div className="section-head-row reveal">
                            <div>
                                <p className="eyebrow">[ Writing ]</p>
                                <h2 className="section-title">Academic foundations and advanced systems study.</h2>
                            </div>
                            <a href="#contact" className="link-underline" style={{ color: "var(--fg-muted)", fontSize: "0.875rem" }}>Get in touch →</a>
                        </div>
                        <div className="writing-grid">
                            {t.education.items.map((item) => (
                                <article key={item.school} className="writing-card reveal">
                                    <h3>{item.school}</h3>
                                    <p>{item.degree}. {item.note}</p>
                                    <span>{item.period} ↗</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="section-block section-border contact-section">
                    <div className="container-x reveal">
                        <p className="eyebrow">[ Contact ]</p>
                        <h2 className="section-title">{t.contact.heading}</h2>
                        <p className="section-copy">{t.contact.body}</p>
                        <div className="contact-links">
                            {t.contact.links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer" className="site-footer">
                <div className="container-x footer-row">
                    <p>{t.footer?.summary || t.sidebar.summary}</p>
                    <a href="#home" className="link-underline">Back to top</a>
                </div>
            </footer>

            <ScrollToTop visible={scrollTopVisible} />
            <CasePreviewPanel preview={casePreview} />
        </div>
    );
}
