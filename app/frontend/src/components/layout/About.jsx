import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";
import SpotlightCard from "../ui/SpotlightCard";
import FadeIn from "../ui/FadeIn";
import Marquee from "../ui/Marquee";
import TiltCard from "../ui/TiltCard";

export default function About({ content }) {
    return (
        <section id="about" className="section section-alt relative overflow-hidden">
            <div className="container-portfolio">
                <SectionHeader label={content.titleLabel || "About"} subtitle={content.title} />

                <FadeIn className="mb-10">
                    <Marquee items={content.toolbelt} speed={32} />
                </FadeIn>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                    <FadeIn className="space-y-6">
                        <p className="text-lg leading-relaxed text-[var(--color-muted)]">{content.body}</p>
                        <ul className="space-y-4">
                            {content.focusAreas.map((item, i) => (
                                <motion.li
                                    key={item}
                                    className="flex gap-3 text-[var(--color-text)]"
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    whileHover={{ x: 6 }}
                                >
                                    <motion.span
                                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"
                                        animate={{ boxShadow: ["0 0 4px var(--color-glow-gold)", "0 0 12px var(--color-glow-gold)", "0 0 4px var(--color-glow-gold)"] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                    />
                                    <span className="leading-relaxed">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <TiltCard className="h-full">
                            <SpotlightCard className="h-full p-6 sm:p-8">
                                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                                    {content.toolbeltTitle}
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {content.toolbelt.map((tool) => (
                                        <span key={tool} className="chip">{tool}</span>
                                    ))}
                                </div>
                                <motion.div
                                    className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)]/40 p-5"
                                    whileHover={{ borderColor: "var(--color-border-strong)" }}
                                >
                                    <h4 className="font-display font-semibold text-[var(--color-accent)]">
                                        {content.recentWinTitle}
                                    </h4>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                                        {content.recentWinText}
                                    </p>
                                </motion.div>
                            </SpotlightCard>
                        </TiltCard>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
