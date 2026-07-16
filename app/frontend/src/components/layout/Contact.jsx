import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";

export default function Contact({ content }) {
    return (
        <motion.section
            id="contact"
            className="neon-border relative overflow-hidden rounded-2xl px-6 py-12 sm:px-10"
            style={{
                background: "var(--gradient-surface)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-neon), var(--shadow-card)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    background: "radial-gradient(ellipse at 0% 50%, var(--color-glow-cyan) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, var(--color-glow-purple) 0%, transparent 50%)",
                }}
            />

            <div className="relative space-y-6">
                <SectionHeader label={content.title} index="05" />
                <h2 className="font-display text-3xl font-bold md:text-4xl">
                    <span className="text-gradient">{content.heading}</span>
                </h2>
                <p className="max-w-2xl leading-relaxed text-[var(--color-muted)]">{content.body}</p>
                <div className="flex flex-wrap gap-3">
                    {content.links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="btn-cyber btn-cyber-ghost"
                        >
                            {link.label}
                            <span aria-hidden>&#8250;</span>
                        </a>
                    ))}
                </div>
                <p className="font-mono text-xs tracking-wider text-[var(--color-muted)]">
                    <span className="text-[var(--color-accent)]">//</span> {content.location}
                </p>
            </div>
        </motion.section>
    );
}
