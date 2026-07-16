import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function About({ content }) {
    return (
        <motion.section
            id="about"
            className="glass-panel neon-border space-y-8 rounded-2xl px-6 py-10 sm:px-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <SectionHeader label={content.titleLabel || "About"} index="01" />

            <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
                <div className="space-y-5">
                    <h2 className="font-display text-3xl font-bold text-[var(--color-text)]">{content.title}</h2>
                    <p className="leading-relaxed text-[var(--color-muted)]">{content.body}</p>
                    <div className="space-y-3">
                        {content.focusAreas.map((item) => (
                            <div key={item} className="flex gap-3 text-sm text-[var(--color-text)]">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_6px_var(--color-glow-cyan)]" />
                                <p className="leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel space-y-5 rounded-xl p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                        {content.toolbeltTitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {content.toolbelt.map((tool) => (
                            <span key={tool} className="chip">{tool}</span>
                        ))}
                    </div>
                    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-soft)] p-4">
                        <p className="font-display text-sm font-semibold text-[var(--color-accent)]">
                            {content.recentWinTitle}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{content.recentWinText}</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
