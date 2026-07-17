import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";
import SpotlightCard from "../ui/SpotlightCard";
import FadeIn from "../ui/FadeIn";

export default function About({ content }) {
    return (
        <section id="about" className="section section-alt">
            <div className="container-portfolio">
                <SectionHeader label={content.titleLabel || "About"} subtitle={content.title} />

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                    <FadeIn className="space-y-6">
                        <p className="text-lg leading-relaxed text-[var(--color-muted)]">{content.body}</p>
                        <ul className="space-y-4">
                            {content.focusAreas.map((item) => (
                                <motion.li
                                    key={item}
                                    className="flex gap-3 text-[var(--color-text)]"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                >
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-glow-gold)]" />
                                    <span className="leading-relaxed">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <SpotlightCard className="p-6 sm:p-8">
                            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                                {content.toolbeltTitle}
                            </h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {content.toolbelt.map((tool) => (
                                    <span key={tool} className="chip">{tool}</span>
                                ))}
                            </div>
                            <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)]/40 p-5">
                                <h4 className="font-display font-semibold text-[var(--color-accent)]">
                                    {content.recentWinTitle}
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                                    {content.recentWinText}
                                </p>
                            </div>
                        </SpotlightCard>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
