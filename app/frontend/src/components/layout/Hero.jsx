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
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">
                            {content.kicker}
                        </p>
                        <h1 className="font-display mt-4 text-4xl font-bold leading-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                            Hi, I'm{" "}
                            <span className="text-gradient">{name.trim()}</span>
                        </h1>
                        {tagline && (
                            <p className="mt-3 font-display text-xl font-medium text-[var(--color-muted)] sm:text-2xl">
                                {tagline.trim()}
                            </p>
                        )}
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                            {content.subtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a href="#projects" className="btn-cyber btn-cyber-primary">
                                {content.primary}
                                <span aria-hidden>&#8250;</span>
                            </a>
                            <a href="#contact" className="btn-cyber btn-cyber-ghost">
                                {content.secondary}
                            </a>
                        </div>

                        <p className="mt-6 font-mono text-xs text-[var(--color-muted)]">
                            📍 {content.location}
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center gap-8"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative">
                            <div
                                className="absolute -inset-4 rounded-full opacity-60 blur-2xl"
                                style={{ background: "var(--gradient-cyber)" }}
                            />
                            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)] sm:h-56 sm:w-56">
                                <span className="font-display text-5xl font-bold text-gradient sm:text-6xl">MH</span>
                            </div>
                        </div>

                        <div className="grid w-full max-w-sm grid-cols-3 gap-4">
                            {content.stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-4 text-center"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                >
                                    <p className="font-display text-2xl font-bold text-[var(--color-accent)]">{stat.value}</p>
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
