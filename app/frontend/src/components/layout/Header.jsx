import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import '../../styles/global.css';

function NavLink({ href, label, onClick }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="group relative font-display text-sm font-medium tracking-wide text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
        >
            {label}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--gradient-brand)] transition-all duration-300 group-hover:w-full" />
        </a>
    );
}

export default function Header({
    links,
    ctaText,
    language,
    languages,
    onLanguageChange,
    theme,
    onThemeToggle,
    visible = true,
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const isHeaderVisible = visible || isMenuOpen;

    return (
        <header
            className={`site-header fixed top-0 left-0 right-0 z-[100] border-b border-[var(--color-border)] bg-[var(--color-base)]/92 backdrop-blur-xl shadow-lg ${
                isHeaderVisible ? "site-header--visible" : "site-header--hidden"
            }`}
        >
            <div className="container-portfolio flex h-16 items-center justify-between md:h-20">
                <a href="#home" className="group flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--gradient-brand)] font-display text-sm font-bold text-[var(--color-on-accent)] shadow-[var(--shadow-warm)] transition-transform duration-300 group-hover:scale-105">
                        MH
                    </span>
                    <span className="hidden font-display text-sm font-semibold tracking-wide text-[var(--color-text)] sm:block">
                        Mahdi Habibi
                    </span>
                </a>

                <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
                    {links.map((link) => (
                        <NavLink key={link.href} href={link.href} label={link.label} />
                    ))}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <div className="flex gap-1 rounded-lg border border-[var(--color-border)] p-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                type="button"
                                onClick={() => onLanguageChange(lang.code)}
                                className={`rounded-md px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider transition-all ${
                                    lang.code === language
                                        ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                                        : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                                }`}
                            >
                                {lang.code}
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={onThemeToggle}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-accent)]"
                    >
                        {theme === 'dark' ? '☀' : '☾'}
                    </button>
                    <a href="#contact" className="btn-cyber btn-cyber-primary text-xs">
                        {ctaText}
                    </a>
                </div>

                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] lg:hidden"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <motion.span className="relative block h-3 w-4" aria-hidden>
                        <motion.span
                            className="absolute left-0 top-0 block h-0.5 w-full rounded bg-[var(--color-text)]"
                            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                        />
                        <motion.span
                            className="absolute left-0 top-1.5 block h-0.5 w-full rounded bg-[var(--color-text)]"
                            animate={{ opacity: isMenuOpen ? 0 : 1 }}
                        />
                        <motion.span
                            className="absolute left-0 bottom-0 block h-0.5 w-full rounded bg-[var(--color-text)]"
                            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                        />
                    </motion.span>
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="border-t border-[var(--color-border)] bg-[var(--color-base)]/95 backdrop-blur-xl lg:hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <nav aria-label="Mobile navigation" className="container-portfolio flex flex-col gap-4 py-6">
                            {links.map((link) => (
                                <NavLink key={link.href} href={link.href} label={link.label} onClick={closeMenu} />
                            ))}
                            <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-4">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        type="button"
                                        onClick={() => { onLanguageChange(lang.code); closeMenu(); }}
                                        className={`chip cursor-pointer ${lang.code === language ? "border-[var(--color-border-strong)]" : ""}`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                                <button type="button" onClick={onThemeToggle} className="chip cursor-pointer">
                                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                                </button>
                                <a href="#contact" onClick={closeMenu} className="btn-cyber btn-cyber-primary text-xs">
                                    {ctaText}
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
