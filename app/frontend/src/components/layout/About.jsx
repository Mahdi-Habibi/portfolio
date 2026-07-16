import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function About({ content }) {
    return (
        <section id="about" className="section section-alt">
            <div className="container-portfolio">
                <SectionHeader label={content.titleLabel || "About"} subtitle={content.title} />

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-lg leading-relaxed text-[var(--color-muted)]">{content.body}</p>
                        <ul className="space-y-4">
                            {content.focusAreas.map((item) => (
                                <li key={item} className="flex gap-3 text-[var(--color-text)]">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div>
                            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                                {content.toolbeltTitle}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {content.toolbelt.map((tool) => (
                                    <span key={tool} className="chip">{tool}</span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                            <h3 className="font-display font-semibold text-[var(--color-accent)]">
                                {content.recentWinTitle}
                            </h3>
                            <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{content.recentWinText}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
