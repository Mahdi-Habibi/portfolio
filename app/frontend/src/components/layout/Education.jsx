import React from "react";
import '../../styles/global.css';

export default function Education({ content }) {
    return (
        <section id="education" className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[rgba(227,227,227,0.5)]" />
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">{content.title}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {content.items.map((item) => (
                    <article
                        key={item.school}
                        className="rounded-2xl border border-[var(--color-border)] bg-[rgba(27,60,83,0.82)] p-5 shadow-2xl shadow-black/25"
                    >
                        <h3 className="text-lg font-semibold text-[var(--color-text)]">{item.school}</h3>
                        <p className="text-sm text-[var(--color-muted)]">{item.degree}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{item.period}</p>
                        <p className="mt-3 text-sm text-[var(--color-text)]">{item.note}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
