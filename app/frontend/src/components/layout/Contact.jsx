import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function Contact({ content }) {
    return (
        <section id="contact" className="section section-alt">
            <div className="container-portfolio">
                <SectionHeader label={content.title} subtitle={content.heading} />

                <motion.div
                    className="mx-auto max-w-2xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-lg leading-relaxed text-[var(--color-muted)]">{content.body}</p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {content.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="btn-cyber btn-cyber-primary"
                            >
                                {link.label}
                                <span aria-hidden>&#8250;</span>
                            </a>
                        ))}
                    </div>

                    <p className="mt-8 font-mono text-sm text-[var(--color-muted)]">
                        📍 {content.location}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
