import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import SideBar from '../components/layout/SideBar';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About';
import Projects from '../components/layout/Projects';
import Experience from '../components/layout/Experience';
import Education from '../components/layout/Education';
import Contact from '../components/layout/Contact';
import { languages, translations } from '../i18n/translations';

export default function IndexPage() {
    const [language, setLanguage] = useState('en');
    const t = translations[language] || translations.en;

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    }, [language]);

    return (
        <div className="relative min-h-screen bg-[var(--color-base)] text-[var(--color-text)]">
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(69,104,130,0.25),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(35,76,106,0.26),transparent_30%),linear-gradient(135deg,rgba(227,227,227,0.04),rgba(227,227,227,0))]" />
            </div>

            <SideBar links={t.nav} summary={t.sidebar.summary} ctaText={t.sidebar.cta} navLabel={t.navLabel} />
            <main className="px-4 py-10 sm:px-6 md:pl-80 lg:pl-[20rem] lg:pr-10">
                <div className="mx-auto max-w-5xl space-y-10">
                    <div className="sticky top-0 z-20 -mx-2 mb-6 flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[rgba(27,60,83,0.9)] px-4 py-3 shadow-md shadow-black/30 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{t.languageLabel}</p>
                        <div className="flex flex-wrap gap-2">
                            {languages.map((lang) => {
                                const isActive = lang.code === language;
                                return (
                                    <button
                                        key={lang.code}
                                        type="button"
                                        onClick={() => setLanguage(lang.code)}
                                        className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                                            isActive
                                                ? "border-[var(--color-text)] bg-[var(--color-text)] text-[var(--color-base)]"
                                                : "border-[var(--color-border)] text-[var(--color-text)] hover:bg-[rgba(227,227,227,0.08)]"
                                        }`}
                                    >
                                        {lang.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <Hero content={t.hero} />
                    <About content={t.about} />
                    <Projects content={t.projects} />
                    <Experience content={t.experience} />
                    <Education content={t.education} />
                    <Contact content={t.contact} />
                </div>
            </main>
        </div>
    );
}
