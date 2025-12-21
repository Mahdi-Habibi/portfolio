import React from "react";
import '../../styles/global.css';

export default function Hero({ content }) {
    return (
        <section
            id="home"
            className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[rgba(35,76,106,0.65)] via-[rgba(27,60,83,0.92)] to-[rgba(27,60,83,0.95)] px-6 py-10 shadow-2xl shadow-black/40 sm:px-10 md:px-12"
        >
            <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[rgba(69,104,130,0.35)] blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-[rgba(227,227,227,0.12)] blur-3xl" />

            <p className="text-xs uppercase tracking-[0.38em] text-[var(--color-muted)]">{content.kicker}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-text)] md:text-5xl">
                {content.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">{content.subtitle}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-text)] px-5 py-3 text-sm font-semibold text-[var(--color-base)] shadow-lg shadow-black/30 transition hover:shadow-[0_18px_30px_-16px_rgba(0,0,0,0.45)]" style={{ color: 'var(--color-base)' }}
                >
                    {content.primary}
                    <span aria-hidden className="text-base">&#8250;</span>
                </a>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[rgba(69,104,130,0.24)] px-5 py-3 text-sm font-semibold text-[var(--color-base)] transition hover:bg-[rgba(69,104,130,0.36)]"
                    
                >
                    {content.secondary}
                </a>
                <span className="text-sm text-[var(--color-muted)]">{content.location}</span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {content.stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="rounded-2xl border border-[var(--color-border)] bg-[rgba(35,76,106,0.6)] px-4 py-5 text-center shadow-inner shadow-black/30"
                    >
                        <p className="text-3xl font-semibold text-[var(--color-text)]">{stat.value}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
