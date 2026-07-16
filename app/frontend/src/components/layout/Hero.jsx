import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';

export default function Hero({ content }) {
    const [name, tagline] = content.title.includes(" - ")
        ? content.title.split(" - ")
        : [content.title, ""];

    return (
        <section id="home" className="section min-h-[90vh] flex items-center pt-20">
            <div className="container-portfolio w-full">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.p
                            className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            {content.kicker}
                        </motion.p>
                        <motion.h1
                            className="font-display mt-4 text-4xl font-bold leading-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Hi, I'm{" "}
                            <span className="text-gradient">{name.trim()}</span>
                        </motion.h1>
                        {tagline && (
                            <motion.p
                                className="mt-3 font-display text-xl font-medium text-[var(--color-muted)] sm:text-2xl"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                            >
                                {tagline.trim()}
                            </motion.p>
                        )}
                        <motion.p
                            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                        >
                            {content.subtitle}
                        </motion.p>

                        <motion.div
                            className="mt-8 flex flex-wrap items-center gap-4"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                        >
                            <a href="#projects" className="btn-cyber btn-cyber-primary">
                                {content.primary}
                                <span aria-hidden>&#8250;</span>
                            </a>
                            <a href="#contact" className="btn-cyber btn-cyber-ghost">
                                {content.secondary}
                            </a>
                        </motion.div>

                        <motion.p
                            className="mt-6 font-mono text-xs text-[var(--color-muted)]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.65 }}
                        >
                            📍 {content.location}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center gap-8"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60">
                            <div
                                className="absolute -inset-6 rounded-full opacity-50 blur-3xl animate-float"
                                style={{ background: "var(--gradient-brand)" }}
                            />
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--color-accent)] opacity-30 avatar-ring" />
                            <div className="absolute inset-3 rounded-full border border-[var(--color-border-strong)] opacity-60 avatar-ring-inner" />
                            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[var(--shadow-warm)] sm:h-48 sm:w-48">
                                <span className="font-display text-5xl font-bold text-gradient sm:text-6xl">MH</span>
                            </div>
                        </div>

                        <div className="grid w-full max-w-sm grid-cols-3 gap-4">
                            {content.stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="glass-panel-hover reveal-card rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-4 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 120 }}
                                    whileHover={{ y: -4, scale: 1.03 }}
                                >
                                    <p className="font-display text-2xl font-bold text-gradient">{stat.value}</p>
                                    <p className="mt-1 text-[10px] uppercase tracking-wider text-[var(--color-muted)]">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
