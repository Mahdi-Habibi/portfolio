import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function Experience({ content }) {
    return (
        <motion.section
            id="experience"
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <SectionHeader label={content.title} index="03" />

            <div className="relative space-y-0">
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-secondary)] to-transparent opacity-30" />

                {content.items.map((job, i) => (
                    <motion.article
                        key={job.role}
                        className="glass-panel glass-panel-hover neon-border relative ml-10 rounded-xl p-6 mb-5 last:mb-0"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                        <span className="absolute -left-10 top-7 flex h-2.5 w-2.5 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-base)] shadow-[0_0_8px_var(--color-glow-cyan)]" />

                        <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                                <h3 className="font-display text-xl font-bold text-[var(--color-text)]">{job.role}</h3>
                                <p className="mt-1 font-mono text-sm text-[var(--color-accent)]">{job.company}</p>
                            </div>
                            <span className="chip">{job.period}</span>
                        </div>
                        <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-muted)]">
                            {job.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-3">
                                    <span className="mt-1.5 font-mono text-[var(--color-accent-secondary)]">›</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
}
