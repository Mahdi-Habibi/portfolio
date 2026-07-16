import React, { useEffect, useState, Suspense, lazy } from 'react';
import '../styles/global.css';
import TechBackground from '../components/ui/TechBackground';
import SideBar from '../components/layout/SideBar';
import Hero from '../components/layout/Hero';
const About = lazy(() => import('../components/layout/About'));
const Projects = lazy(() => import('../components/layout/Projects'));
const Experience = lazy(() => import('../components/layout/Experience'));
const Education = lazy(() => import('../components/layout/Education'));
const Contact = lazy(() => import('../components/layout/Contact'));
import { languages, translations } from '../i18n/translations';

function SectionLoader() {
    return (
        <div role="status" aria-live="polite" className="flex items-center gap-3 py-8">
            <span className="status-dot" />
            <span className="font-mono text-xs tracking-widest text-[var(--color-muted)]">Loading module…</span>
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
    }, [language]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="relative min-h-screen bg-[var(--color-base)] text-[var(--color-text)]">
            <TechBackground />

            <SideBar links={t.nav} summary={t.sidebar.summary} ctaText={t.sidebar.cta} navLabel={t.navLabel} />

            <main className="px-4 py-10 sm:px-6 md:pl-80 lg:pl-[20rem] lg:pr-10" role="main">
                <div className="mx-auto max-w-5xl space-y-12">
                    {/* HUD control bar */}
                    <div className="glass-panel sticky top-0 z-20 -mx-2 mb-2 flex flex-wrap items-center gap-4 rounded-xl px-5 py-3">
                        <div className="flex items-center gap-2">
                            <span className="status-dot" style={{ width: 6, height: 6 }} />
                            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                                {t.languageLabel}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {languages.map((lang) => {
                                const isActive = lang.code === language;
                                return (
                                    <button
                                        key={lang.code}
                                        type="button"
                                        onClick={() => setLanguage(lang.code)}
                                        className={`rounded-md px-3 py-1 font-mono text-xs font-medium tracking-wider transition-all duration-300 ${
                                            isActive
                                                ? "bg-[var(--color-accent)] text-[var(--color-base)] shadow-[0_0_12px_var(--color-glow-cyan)]"
                                                : "border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
                                        }`}
                                    >
                                        {lang.label}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                aria-pressed={theme === 'light'}
                                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                                className="chip cursor-pointer transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[0_0_12px_var(--color-glow-cyan)]"
                            >
                                {theme === 'dark' ? '◐ DARK' : '◑ LIGHT'}
                            </button>
                        </div>
                    </div>

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
                </div>
            </main>
        </div>
    );
}
