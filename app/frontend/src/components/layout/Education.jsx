import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function Education({ content }) {
    return (
        <motion.section
            id="education"
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <SectionHeader label={content.title} index="04" />

            <div className="grid gap-5 md:grid-cols-2">
                {content.items.map((item, i) => (
                    <motion.article
                        key={item.school}
                        className="glass-panel glass-panel-hover neon-border rounded-xl p-6"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                        <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{item.school}</h3>
                        <p className="mt-1 text-sm text-[var(--color-accent)]">{item.degree}</p>
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                            {item.period}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.note}</p>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
}
