import React from "react";
import '../../styles/global.css';

export default function Contact({ content }) {
    return (
        <section
            id="contact"
            className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-r from-[rgba(35,76,106,0.7)] via-[rgba(27,60,83,0.92)] to-[rgba(69,104,130,0.4)] px-6 py-10 shadow-2xl shadow-black/35 sm:px-10"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(227,227,227,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(69,104,130,0.12),transparent_32%)]" />
            <div className="relative space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">{content.title}</p>
                <h2 className="text-3xl font-semibold text-[var(--color-text)]">{content.heading}</h2>
                <p className="max-w-2xl text-[var(--color-muted)]">{content.body}</p>
                <div className="flex flex-wrap gap-3">
                    {content.links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[rgba(69,104,130,0.22)] px-4 py-2 text-sm font-semibold text-[var(--color-base)] transition hover:bg-[rgba(69,104,130,0.32)]"
                            
                        >
                            {link.label}
                            <span aria-hidden>&#8250;</span>
                        </a>
                    ))}
                </div>
                <p className="text-sm text-[var(--color-muted)]">{content.location}</p>
            </div>
        </section>
    );
}
