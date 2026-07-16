import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function Experience({ content }) {
    return (
        <section id="experience" className="section section-alt">
            <div className="container-portfolio">
                <SectionHeader label={content.title} />

                <div className="mx-auto max-w-3xl space-y-8">
                    {content.items.map((job, i) => (
                        <motion.article
                            key={job.role + job.company}
                            className="relative border-l-2 border-[var(--color-border)] pl-8"
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-base)]" />
                            <div className="flex flex-wrap items-start justify-between gap-2">
                                <div>
                                    <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{job.role}</h3>
                                    <p className="text-sm text-[var(--color-accent)]">{job.company}</p>
                                </div>
                                <span className="chip">{job.period}</span>
                            </div>
                            <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                                {job.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-2">
                                        <span className="text-[var(--color-accent)]">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
