import React, { useState } from "react";
import '../../styles/global.css';
import SideLink from "../ui/SideLink";

export default function SideBar({ links, summary, ctaText, navLabel = "Navigation" }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const renderNavContent = (isMobile = false) => (
        <div className="flex h-full flex-col gap-6">
            <div className="flex-1 space-y-2">
                <p className="text-sm text-[var(--color-muted)]">{navLabel}</p>
                {links.map((link) => (
                    <SideLink key={link.href} {...link} onClick={isMobile ? closeMenu : undefined} />
                ))}
            </div>

            <div className="space-y-3 rounded-2xl border border-[var(--color-border)] bg-[rgba(35,76,106,0.55)] p-4 text-sm text-[var(--color-text)] shadow-lg shadow-black/30">
                <p className="text-[var(--color-text)]">
                    {summary}
                </p>
                <div className="space-y-1 text-xs text-[var(--color-muted)]">
                    <p>info.mahdihabibi@gmail.com</p>
                    <p>+98 902 921 6735</p>
                </div>
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[var(--color-text)] px-4 py-2 text-sm font-semibold text-[var(--color-base)] shadow-lg shadow-black/30 transition hover:shadow-[0_12px_35px_-12px_rgba(0,0,0,0.35)]" style={{ color: 'var(--color-base)' }}
                >
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
                className="md:hidden fixed top-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[rgba(27,60,83,0.9)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] shadow-lg shadow-black/40 backdrop-blur transition hover:bg-[rgba(35,76,106,0.95)]"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <span className="relative block h-3 w-4">
                    <span className="absolute left-0 top-0 block h-0.5 w-full rounded bg-[var(--color-text)]" />
                    <span className="absolute left-0 top-1.5 block h-0.5 w-full rounded bg-[var(--color-text)]" />
                    <span className="absolute left-0 bottom-0 block h-0.5 w-full rounded bg-[var(--color-text)]" />
                </span>
                Menu
            </button>

            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`md:hidden fixed top-0 left-0 z-50 h-screen w-72 transform border-r border-[var(--color-border)] bg-[rgba(27,60,83,0.96)] px-6 py-8 shadow-2xl shadow-black/40 transition-transform duration-300 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Navigate</p>
                    <button
                        type="button"
                        onClick={closeMenu}
                        className="rounded-full border border-[var(--color-border)] bg-[rgba(227,227,227,0.06)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        Close
                    </button>
                </div>
                <div className="mt-6 h-[calc(100%-3.5rem)] overflow-y-auto">
                    {renderNavContent(true)}
                </div>
            </aside>

            <aside className="hidden md:fixed md:top-0 md:left-0 md:flex md:h-screen md:w-72 md:flex-col md:gap-6 border-r border-[var(--color-border)] bg-[rgba(27,60,83,0.9)] px-6 py-8 backdrop-blur-xl shadow-xl shadow-black/30">
                {renderNavContent()}
            </aside>
        </>
    );
}
