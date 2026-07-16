import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function Projects({ content }) {
    return (
        <motion.section
            id="projects"
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <SectionHeader label={content.title} index="02" />

            <motion.div
                className="grid gap-5 md:grid-cols-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
                {content.cards.map((project) => (
                    <motion.article
                        key={project.title}
                        className="glass-panel glass-panel-hover neon-border group flex flex-col rounded-xl p-6"
                        variants={{
                            hidden: { opacity: 0, y: 16, scale: 0.97 },
                            show: { opacity: 1, y: 0, scale: 1 },
                        }}
                    >
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{project.title}</h3>
                            <span className="chip shrink-0 text-[var(--color-accent-secondary)]">
                                {project.result}
                            </span>
                        </div>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                            {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack?.map((item) => (
                                <span key={item} className="chip">{item}</span>
                            ))}
                        </div>
                        <div className="mt-5 flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                            <span>{content.cta}</span>
                            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                                &#8250;
                            </span>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    );
}
