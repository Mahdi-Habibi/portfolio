import React from "react";
import '../../styles/global.css';

export default function Experience({ content }) {
    return (
        <section id="experience" className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[rgba(227,227,227,0.5)]" />
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">{content.title}</p>
            </div>
            <div className="space-y-4">
                {content.items.map((job) => (
                    <article
                        key={job.role}
                        className="rounded-2xl border border-[var(--color-border)] bg-[rgba(27,60,83,0.82)] p-5 shadow-2xl shadow-black/25"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--color-text)]">{job.role}</h3>
                                <p className="text-sm text-[var(--color-muted)]">{job.company}</p>
                            </div>
                            <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold text-[var(--color-text)]">
                                {job.period}
                            </span>
                        </div>
                        <ul className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
                            {job.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-text)]" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
