import React from "react";
import '../../styles/global.css';

export default function Footer({ links, location }) {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="container-portfolio py-12 md:py-16">
                <div className="grid gap-10 md:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)] font-display text-sm font-bold text-[var(--color-base)]">
                                MH
                            </span>
                            <span className="font-display text-lg font-bold text-[var(--color-text)]">Mahdi Habibi</span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
                            Full-stack developer specializing in React & Django.
                        </p>
                    </div>

                    <div>
                        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                            Navigation
                        </p>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                            Contact
                        </p>
                        <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                            <li>
                                <a href="mailto:info.mahdihabibi@gmail.com" className="transition hover:text-[var(--color-accent)]">
                                    info.mahdihabibi@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+989029216735" className="transition hover:text-[var(--color-accent)]">
                                    +98 902 921 6735
                                </a>
                            </li>
                            <li>{location}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
                    <p className="font-mono text-xs text-[var(--color-muted)]">
                        © {year} Mahdi Habibi Nazarlu. All rights reserved.
                    </p>
                    <p className="font-mono text-xs text-[var(--color-muted)]">
                        Built with React & Django
                    </p>
                </div>
            </div>
        </footer>
    );
}
