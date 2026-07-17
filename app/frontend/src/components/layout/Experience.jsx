import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";
import SpotlightCard from "../ui/SpotlightCard";

export default function Experience({ content }) {
    return (
        <section id="experience" className="section section-alt relative overflow-hidden">
            <div className="container-portfolio">
                <SectionHeader label={content.title} subtitle="Career timeline" />

                <div className="relative mx-auto max-w-3xl">
                    <motion.div
                        className="absolute left-[11px] top-0 bottom-0 w-px origin-top bg-[var(--color-border)]"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            className="absolute inset-x-0 top-0 h-24 bg-[var(--gradient-brand)] blur-sm"
                            animate={{ y: ["0%", "400%", "0%"] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                    <div className="space-y-6">
                        {content.items.map((job, i) => (
                            <motion.div
                                key={job.role + job.company}
                                className="relative pl-10"
                                initial={{ opacity: 0, x: -28 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <motion.span
                                    className="absolute left-0 top-6 h-6 w-6 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-base)]"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 + 0.2, type: "spring", stiffness: 260 }}
                                    animate={{ boxShadow: ["0 0 0px transparent", "0 0 16px var(--color-glow-gold)", "0 0 0px transparent"] }}
                                    style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
                                />
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
                                            <motion.li
                                                key={bullet}
                                                className="flex gap-2"
                                                whileHover={{ x: 4 }}
                                            >
                                                <span className="text-[var(--color-accent-secondary)]">›</span>
                                                <span>{bullet}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
