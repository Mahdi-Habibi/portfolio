import React, { useEffect, useState, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';
import '../styles/global.css';
import TechBackground from '../components/ui/TechBackground';
import ScrollToTop from '../components/ui/ScrollToTop';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/layout/Hero';
import SectionDivider from '../components/ui/SectionDivider';
import { useScrollBehavior } from '../hooks/useScrollBehavior';
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

function Portal({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(children, document.body);
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
    const { navVisible, scrollTopVisible } = useScrollBehavior();

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
        document.title = t.siteTitle || 'Mahdi Habibi | React & Django Specialist';
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
        <>
            {/* Portal keeps fixed UI on document.body so parent transforms never break them */}
            <Portal>
                <TechBackground />
                <Header
                    links={t.nav}
                    ctaText={t.sidebar.cta}
                    language={language}
                    languages={languages}
                    onLanguageChange={setLanguage}
                    theme={theme}
                    onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    visible={navVisible}
                />
                <ScrollToTop visible={scrollTopVisible} />
            </Portal>

            <div className="relative z-10 min-h-screen bg-transparent text-[var(--color-text)]">
                <main role="main">
                    <Hero content={t.hero} />

                    <SectionDivider />

                    <Suspense fallback={<SectionLoader />}>
                        <About content={t.about} />
                    </Suspense>

                    <SectionDivider />

                    <Suspense fallback={<SectionLoader />}>
                        <Projects content={t.projects} />
                    </Suspense>

                    <SectionDivider />

                    <Suspense fallback={<SectionLoader />}>
                        <Experience content={t.experience} />
                    </Suspense>

                    <SectionDivider />

                    <Suspense fallback={<SectionLoader />}>
                        <Education content={t.education} />
                    </Suspense>

                    <SectionDivider />

                    <Suspense fallback={<SectionLoader />}>
                        <Contact content={t.contact} />
                    </Suspense>
                </main>

                <Footer
                    links={t.nav}
                    location={t.hero.location}
                    summary={t.footer?.summary || t.sidebar.summary}
                    contactLinks={t.contact.links}
                    labels={t.footer}
                />
            </div>
        </>
    );
}
