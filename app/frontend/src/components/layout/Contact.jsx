import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";
import BorderBeam from "../ui/BorderBeam";
import FadeIn from "../ui/FadeIn";

export default function Contact({ content }) {
    return (
        <section id="contact" className="section section-alt">
            <div className="container-portfolio">
                <SectionHeader label={content.title} subtitle={content.heading} />

                <FadeIn className="mx-auto max-w-2xl">
                    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center sm:p-10">
                        <BorderBeam duration={10} />
                        <p className="relative z-10 text-lg leading-relaxed text-[var(--color-muted)]">{content.body}</p>

                        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-4">
                            {content.links.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    className="btn-cyber btn-cyber-primary"
                                    whileHover={{ scale: 1.04 }}
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
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
