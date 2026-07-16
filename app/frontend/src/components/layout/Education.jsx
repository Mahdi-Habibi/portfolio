import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function Education({ content }) {
    return (
        <section id="education" className="section">
            <div className="container-portfolio">
                <SectionHeader label={content.title} />

                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                    {content.items.map((item, i) => (
                        <motion.article
                            key={item.school}
                            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                                {item.period}
                            </p>
                            <h3 className="mt-2 font-display text-lg font-bold text-[var(--color-text)]">{item.school}</h3>
                            <p className="mt-1 text-sm font-medium text-[var(--color-muted)]">{item.degree}</p>
                            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.note}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
