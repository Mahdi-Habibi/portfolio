import React, { useEffect, useState, Suspense, lazy } from 'react';
import '../styles/global.css';
import TechBackground from '../components/ui/TechBackground';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/layout/Hero';
const About = lazy(() => import('../components/layout/About'));
const Projects = lazy(() => import('../components/layout/Projects'));
const Experience = lazy(() => import('../components/layout/Experience'));
const Education = lazy(() => import('../components/layout/Education'));
const Contact = lazy(() => import('../components/layout/Contact'));
import { languages, translations } from '../i18n/translations';

function SectionLoader() {
    return (
        <div role="status" aria-live="polite" className="section flex items-center justify-center">
            <span className="font-mono text-xs tracking-widest text-[var(--color-muted)]">Loading…</span>
        </div>
    );
}

export default function IndexPage() {
    const [language, setLanguage] = useState('en');
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });
    const t = translations[language] || translations.en;

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
        document.title = t.siteTitle || 'Mahdi Habibi | Full-Stack Developer';
    }, [language, t.siteTitle]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        const meta = document.getElementById('theme-color-meta');
        if (meta) {
            meta.setAttribute('content', theme === 'light' ? '#FFF9F0' : '#5B2A4A');
        }
    }, [theme]);

    return (
        <div className="page-enter relative min-h-screen bg-[var(--color-base)] text-[var(--color-text)]">
            <TechBackground />

            <Header
                links={t.nav}
                ctaText={t.sidebar.cta}
                language={language}
                languages={languages}
                onLanguageChange={setLanguage}
                theme={theme}
                onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />

            <main role="main">
                <Hero content={t.hero} />

                <Suspense fallback={<SectionLoader />}>
                    <About content={t.about} />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Projects content={t.projects} />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Experience content={t.experience} />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Education content={t.education} />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Contact content={t.contact} />
                </Suspense>
            </main>

            <Footer links={t.nav} location={t.hero.location} />
        </div>
    );
}
