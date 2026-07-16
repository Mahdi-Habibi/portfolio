import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';

export default function Hero({ content }) {
    return (
        <motion.section
            id="home"
            className="glass-panel neon-border relative overflow-hidden rounded-2xl px-6 py-12 sm:px-10 md:px-14"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    background: "radial-gradient(ellipse at 20% 0%, var(--color-glow-cyan) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, var(--color-glow-purple) 0%, transparent 50%)",
                }}
            />

            <div className="relative">
                <div className="flex items-center gap-3">
                    <span className="status-dot" />
                    <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
                        {content.kicker}
                    </p>
                </div>

                <h1 className="font-display mt-6 text-4xl font-bold leading-[1.1] md:text-6xl">
                    <span className="text-gradient">{content.title}</span>
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
                    {content.subtitle}
                </p>

                <motion.div
                    className="mt-8 flex flex-wrap items-center gap-4"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
                    }}
                >
                    <motion.a
                        href="#projects"
                        className="btn-cyber btn-cyber-primary"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >
                        {content.primary}
                        <span aria-hidden className="text-base">&#8250;</span>
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn-cyber btn-cyber-ghost"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >
                        {content.secondary}
                    </motion.a>
                    <motion.span
                        className="font-mono text-xs tracking-wider text-[var(--color-muted)]"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >
                        <span className="text-[var(--color-accent)]">//</span> {content.location}
                    </motion.span>
                </motion.div>

                <motion.div
                    className="mt-12 grid gap-4 sm:grid-cols-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                >
                    {content.stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            className="glass-panel glass-panel-hover rounded-xl px-5 py-6 text-center"
                            variants={{
                                hidden: { opacity: 0, y: 12, scale: 0.96 },
                                show: { opacity: 1, y: 0, scale: 1 },
                            }}
                        >
                            <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
                            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
