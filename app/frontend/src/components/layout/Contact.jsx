import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";
import BorderBeam from "../ui/BorderBeam";
import FadeIn from "../ui/FadeIn";
import Aurora from "../ui/Aurora";

export default function Contact({ content }) {
    return (
        <section id="contact" className="section section-alt relative overflow-hidden">
            <div className="absolute inset-0 opacity-60">
                <Aurora />
            </div>

            <div className="container-portfolio relative z-10">
                <SectionHeader label={content.title} subtitle={content.heading} />

                <FadeIn className="mx-auto max-w-2xl">
                    <motion.div
                        className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-8 text-center backdrop-blur-md sm:p-10"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <BorderBeam duration={8} />
                        <motion.div
                            className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl"
                            style={{ background: "var(--color-glow-gold)" }}
                            animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        <p className="relative z-10 text-lg leading-relaxed text-[var(--color-muted)]">{content.body}</p>

                        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-4">
                            {content.links.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    className="btn-cyber btn-cyber-primary shimmer-btn"
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    whileHover={{ scale: 1.06, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    {link.label}
                                    <span aria-hidden>&#8250;</span>
                                </motion.a>
                            ))}
                        </div>

                        <p className="relative z-10 mt-8 font-mono text-sm text-[var(--color-muted)]">
                            📍 {content.location}
                        </p>
                    </motion.div>
                </FadeIn>
            </div>
        </section>
    );
}
