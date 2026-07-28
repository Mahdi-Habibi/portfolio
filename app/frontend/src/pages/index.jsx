import React, { useEffect, useMemo, useState } from "react";
import "../styles/global.css";
import ScrollToTop from "../components/ui/ScrollToTop";
import { useScrollBehavior } from "../hooks/useScrollBehavior";
import { languages, translations } from "../i18n/translations";

function ImageOrFallback({ src, alt, imageClassName = "portrait-image", fallbackClassName = "portrait-fallback", fallbackText = "MH" }) {
    const [broken, setBroken] = useState(false);
    if (broken) {
        return <div className={fallbackClassName} aria-label={alt}>{fallbackText}</div>;
    }
    return <img src={src} alt={alt} className={imageClassName} onError={() => setBroken(true)} />;
}

export default function IndexPage() {
    const [language, setLanguage] = useState("en");
    const [theme, setTheme] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark"));
    const [menuOpen, setMenuOpen] = useState(false);
    const t = translations[language] || translations.en;
    const { navVisible, scrollTopVisible } = useScrollBehavior();
    const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;

    const featuredSkills = useMemo(() => t.about.toolbelt.slice(0, 8), [t.about.toolbelt]);

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
        document.title = t.siteTitle || "Mahdi Habibi | React & Django Specialist";
    }, [language, t.siteTitle]);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        const meta = document.getElementById("theme-color-meta");
        if (meta) meta.setAttribute("content", theme === "light" ? "#f7f5f2" : "#0b0b0b");
    }, [theme]);

    useEffect(() => {
        if (!menuOpen) return;
        const close = () => setMenuOpen(false);
        window.addEventListener("resize", close);
        return () => window.removeEventListener("resize", close);
    }, [menuOpen]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;
        const revealNodes = document.querySelectorAll(".reveal-on-scroll");
        if (!revealNodes.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.18, rootMargin: "0px 0px -5% 0px" },
        );

        revealNodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, [language]);

    return (
        <div className="portfolio-root">
            <header className={`site-header ${navVisible || menuOpen ? "site-header--visible" : "site-header--hidden"}`}>
                <div className="site-shell nav-row">
                    <a href="#home" className="brand">Mahdi<span>.</span></a>
                    <nav className="desktop-nav" aria-label={t.navLabel || "Navigation"}>
                        {t.nav.map((item) => (
                            <a key={item.href} href={item.href}>{item.label}</a>
                        ))}
                    </nav>
                    <div className="desktop-actions">
                        <div className="language-switcher" role="group" aria-label={t.languageLabel || "Language"}>
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
                        <button type="button" className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "dark" ? "Light" : "Dark"}
                        </button>
                        <a href="#contact" className="cta-link">{t.sidebar.cta}</a>
                    </div>
                    <button
                        type="button"
                        className="menu-btn"
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        <span />
                        <span />
                    </button>
                </div>
                {menuOpen && (
                    <div className="mobile-panel">
                        {t.nav.map((item) => (
                            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
                        ))}
                    </div>
                )}
            </header>

            <main>
                <section id="home" className="hero-block section-spacer">
                    <div className="site-shell hero-grid">
                        <div className="reveal-on-scroll is-visible">
                            <p className="kicker">{t.hero.kicker}</p>
                            <h1>{t.hero.title}</h1>
                            <p className="lede">{t.hero.subtitle}</p>
                            <div className="hero-cta-row">
                                <a href="#projects" className="button-primary">{t.hero.primary}</a>
                                <a href={t.hero.secondaryHref} className="button-secondary" target="_blank" rel="noopener noreferrer">{t.hero.secondary}</a>
                            </div>
                            <p className="meta-line">{t.hero.location}</p>
                        </div>
                        <div className="hero-portrait-wrap reveal-on-scroll is-visible">
                            <ImageOrFallback src={profileImage} alt="Mahdi Habibi portrait" />
                        </div>
                    </div>
                </section>

                <section id="projects" className="section-spacer section-border-top">
                    <div className="site-shell">
                        <div className="section-head reveal-on-scroll">
                            <p>Selected Case Studies</p>
                            <h2>{t.projects.title}</h2>
                        </div>
                        <div className="case-grid">
                            {t.projects.cards.map((card, idx) => (
                                <article key={card.title} className="case-card reveal-on-scroll">
                                    <span className="case-index">{String(idx + 1).padStart(2, "0")}</span>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <div className="case-preview" aria-hidden="true">
                                        <ImageOrFallback
                                            src={profileImage}
                                            alt="Case preview portrait"
                                            imageClassName="case-preview-image"
                                            fallbackClassName="case-preview-fallback"
                                            fallbackText="MH"
                                        />
                                    </div>
                                    <ul>
                                        {card.stack.map((tech) => <li key={tech}>{tech}</li>)}
                                    </ul>
                                    <p className="case-result">{card.result}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="section-spacer section-border-top">
                    <div className="site-shell split-grid">
                        <div className="reveal-on-scroll">
                            <div className="section-head">
                                <p>{t.about.titleLabel}</p>
                                <h2>{t.about.title}</h2>
                            </div>
                            <p className="copy">{t.about.body}</p>
                            <ul className="focus-list">
                                {t.about.focusAreas.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                            <div className="chip-row">
                                {featuredSkills.map((skill) => <span key={skill}>{skill}</span>)}
                            </div>
                        </div>
                        <aside className="about-card reveal-on-scroll">
                            <ImageOrFallback src={profileImage} alt="Mahdi Habibi black-and-white portrait" />
                            <p className="small-label">{t.about.recentWinTitle}</p>
                            <p>{t.about.recentWinText}</p>
                        </aside>
                    </div>
                </section>

                <section id="experience" className="section-spacer section-border-top">
                    <div className="site-shell">
                        <div className="section-head reveal-on-scroll">
                            <p>My Journey</p>
                            <h2>{t.experience.title}</h2>
                        </div>
                        <div className="timeline">
                            {t.experience.items.map((item) => (
                                <article key={`${item.role}-${item.company}`} className="timeline-item reveal-on-scroll">
                                    <p className="timeline-period">{item.period}</p>
                                    <h3>{item.role}</h3>
                                    <p className="timeline-company">{item.company}</p>
                                    <ul>
                                        {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="education" className="section-spacer section-border-top">
                    <div className="site-shell">
                        <div className="section-head reveal-on-scroll">
                            <p>Academic Track</p>
                            <h2>{t.education.title}</h2>
                        </div>
                        <div className="edu-grid">
                            {t.education.items.map((item) => (
                                <article key={item.school} className="edu-card reveal-on-scroll">
                                    <h3>{item.school}</h3>
                                    <p>{item.degree}</p>
                                    <p className="timeline-period">{item.period}</p>
                                    <p>{item.note}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="section-spacer section-border-top contact-block">
                    <div className="site-shell">
                        <div className="section-head reveal-on-scroll">
                            <p>{t.contact.title}</p>
                            <h2>{t.contact.heading}</h2>
                        </div>
                        <p className="copy reveal-on-scroll">{t.contact.body}</p>
                        <div className="contact-links">
                            {t.contact.links.map((link) => (
                                <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="reveal-on-scroll">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <p className="meta-line">{t.contact.location}</p>
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <div className="site-shell footer-row">
                    <p>{t.footer?.summary || t.sidebar.summary}</p>
                    <a href="#home">Back to top</a>
                </div>
            </footer>
            <ScrollToTop visible={scrollTopVisible} />
        </div>
    );
}
