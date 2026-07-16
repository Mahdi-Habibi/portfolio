import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import '../../styles/global.css';
import SideLink from "../ui/SideLink";

export default function SideBar({ links, summary, ctaText, navLabel = "Navigation" }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    const renderNavContent = (isMobile = false) => (
        <div className="flex h-full flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-soft)]">
                    <span className="font-display text-sm font-bold text-gradient">MH</span>
                </div>
                <div>
                    <p className="font-display text-sm font-bold tracking-wider text-[var(--color-text)]">DEV.SYS</p>
                    <div className="flex items-center gap-2">
                        <span className="status-dot" style={{ width: 6, height: 6 }} />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)]">Online</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 space-y-1">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    {navLabel}
                </p>
                {links.map((link) => (
                    <SideLink key={link.href} {...link} onClick={isMobile ? closeMenu : undefined} />
                ))}
            </div>

            <div className="glass-panel space-y-3 rounded-xl p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)]">
                    // terminal
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{summary}</p>
                <div className="space-y-1 font-mono text-xs text-[var(--color-muted)]">
                    <p><span className="text-[var(--color-accent-secondary)]">$</span> info.mahdihabibi@gmail.com</p>
                    <p><span className="text-[var(--color-accent-secondary)]">$</span> +98 902 921 6735</p>
                </div>
                <a href="#contact" className="btn-cyber btn-cyber-primary w-full justify-center text-xs">
                    {ctaText}
                </a>
            </div>
        </div>
    );

    return (
        <>
            <button
                type="button"
                aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={isMenuOpen}
                className="glass-panel fixed top-4 left-4 z-50 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] md:hidden"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <motion.span className="relative block h-3 w-4" aria-hidden>
                    <motion.span
                        className="absolute left-0 top-0 block h-0.5 w-full rounded bg-[var(--color-accent)]"
                        animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    />
                    <motion.span
                        className="absolute left-0 top-1.5 block h-0.5 w-full rounded bg-[var(--color-accent)]"
                        animate={{ opacity: isMenuOpen ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className="absolute left-0 bottom-0 block h-0.5 w-full rounded bg-[var(--color-accent)]"
                        animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    />
                </motion.span>
                Menu
            </button>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={closeMenu}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.aside
                        key="drawer"
                        className="glass-panel fixed top-0 left-0 z-50 h-screen w-72 border-r border-[var(--color-border)] px-6 py-8 md:hidden"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">SYS.NAV</p>
                            <button
                                type="button"
                                onClick={closeMenu}
                                className="chip cursor-pointer"
                            >
                                ESC
                            </button>
                        </div>
                        <nav aria-label={navLabel} className="h-[calc(100%-2.5rem)] overflow-y-auto">
                            {renderNavContent(true)}
                        </nav>
                    </motion.aside>
                )}
            </AnimatePresence>

            <aside className="glass-panel fixed top-0 left-0 hidden h-screen w-72 flex-col border-r border-[var(--color-border)] px-6 py-8 md:flex">
                <nav aria-label={navLabel} className="flex h-full flex-col">
                    {renderNavContent()}
                </nav>
            </aside>
        </>
    );
}
