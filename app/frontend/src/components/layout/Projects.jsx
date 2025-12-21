import React from "react";
import '../../styles/global.css';

export default function Projects({ content }) {
    return (
        <section id="projects" className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[rgba(227,227,227,0.5)]" />
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">{content.title}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
                {content.cards.map((project) => (
                    <article
                        key={project.title}
                        className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[rgba(27,60,83,0.82)] p-5 shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:bg-[rgba(27,60,83,0.94)]"
                    >
                        <div className="flex items-center justify-between gap-2">
                            <h3 className="text-xl font-semibold text-[var(--color-text)]">{project.title}</h3>
                            <span className="rounded-full bg-[rgba(69,104,130,0.25)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--color-text)] text-center">
                                {project.result}
                            </span>
                        </div>
                        <p className="mt-3 text-sm text-[var(--color-muted)]">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack?.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-[var(--color-border)] bg-[rgba(69,104,130,0.18)] px-3 py-1 text-xs font-semibold text-[var(--color-text)]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                            <span>{content.cta}</span>
                            <span aria-hidden className="transition group-hover:translate-x-1">&#8250;</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
