import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";
import SpotlightCard from "../ui/SpotlightCard";

export default function Education({ content }) {
    return (
        <section id="education" className="section">
            <div className="container-portfolio">
                <SectionHeader label={content.title} subtitle="Academic background" />

                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                    {content.items.map((item, i) => (
                        <motion.div
                            key={item.school}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.1 }}
                        >
                            <SpotlightCard className="h-full p-6">
                                <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                                    {item.period}
                                </p>
                                <h3 className="mt-2 font-display text-lg font-bold text-[var(--color-text)]">{item.school}</h3>
                                <p className="mt-1 text-sm font-medium text-[var(--color-muted)]">{item.degree}</p>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.note}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
