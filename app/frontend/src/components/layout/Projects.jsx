import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function Projects({ content }) {
    return (
        <section id="projects" className="section">
            <div className="container-portfolio">
                <SectionHeader label={content.title} />

                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                >
                    {content.cards.map((project) => (
                        <motion.article
                            key={project.title}
                            className="group flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-neon)]"
                            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-soft)] font-display text-lg font-bold text-[var(--color-accent)]">
                                {project.title.charAt(0)}
                            </div>
                            <h3 className="font-display text-xl font-bold text-[var(--color-text)]">{project.title}</h3>
                            <span className="mt-2 inline-block w-fit rounded-full bg-[var(--color-soft)] px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-secondary)]">
                                {project.result}
                            </span>
                            <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.stack?.map((item) => (
                                    <span key={item} className="chip">{item}</span>
                                ))}
                            </div>
                            <p className="mt-5 text-sm font-semibold text-[var(--color-accent)] transition group-hover:translate-x-1">
                                {content.cta} &#8250;
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
