import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";
import SpotlightCard from "../ui/SpotlightCard";

export default function Experience({ content }) {
    return (
        <section id="experience" className="section section-alt">
            <div className="container-portfolio">
                <SectionHeader label={content.title} subtitle="Career timeline" />

                <div className="mx-auto max-w-3xl space-y-6">
                    {content.items.map((job, i) => (
                        <motion.div
                            key={job.role + job.company}
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                        >
                            <SpotlightCard className="p-6">
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{job.role}</h3>
                                        <p className="mt-1 text-sm text-[var(--color-accent)]">{job.company}</p>
                                    </div>
                                    <span className="chip">{job.period}</span>
                                </div>
                                <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-muted)]">
                                    {job.bullets.map((bullet) => (
                                        <li key={bullet} className="flex gap-2">
                                            <span className="text-[var(--color-accent-secondary)]">›</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
