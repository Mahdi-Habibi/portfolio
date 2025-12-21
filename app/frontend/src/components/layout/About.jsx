import React from "react";
import '../../styles/global.css';

export default function About({ content }) {
    return (
        <section
            id="about"
            className="space-y-6 rounded-3xl border border-[var(--color-border)] bg-[rgba(27,60,83,0.78)] px-6 py-8 shadow-2xl shadow-black/35 sm:px-10"
        >
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[rgba(227,227,227,0.5)]" />
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">{content.titleLabel || "About"}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[var(--color-text)]">{content.title}</h2>
                    <p className="text-[var(--color-muted)]">{content.body}</p>
                    <div className="space-y-2">
                        {content.focusAreas.map((item) => (
                            <div key={item} className="flex gap-3 text-sm text-[var(--color-text)]">
                                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-text)]" />
                                <p className="leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[rgba(35,76,106,0.55)] p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">{content.toolbeltTitle}</p>
                    <div className="flex flex-wrap gap-2">
                        {content.toolbelt.map((tool) => (
                            <span
                                key={tool}
                                className="rounded-full border border-[var(--color-border)] bg-[rgba(69,104,130,0.16)] px-3 py-1 text-xs font-semibold text-[var(--color-text)]"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                    <div className="rounded-xl border border-[var(--color-border)] bg-[rgba(69,104,130,0.18)] p-4 text-sm text-[var(--color-text)]">
                        <p className="font-semibold text-[var(--color-text)]">{content.recentWinTitle}</p>
                        <p className="mt-1 text-[var(--color-muted)]">{content.recentWinText}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
