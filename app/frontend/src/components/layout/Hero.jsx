import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import TextReveal from "../ui/TextReveal";
import BorderBeam from "../ui/BorderBeam";
import FadeIn from "../ui/FadeIn";
import Aurora from "../ui/Aurora";
import OrbitalRings from "../ui/OrbitalRings";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Hero({ content }) {
    const [name, tagline] = content.title.includes(" - ")
        ? content.title.split(" - ")
        : [content.title, ""];

    return (
        <section id="home" className="section relative min-h-[92vh] flex items-center overflow-hidden pt-20">
            <div className="absolute inset-0">
                <Aurora />
            </div>

            <div className="container-portfolio relative z-10 w-full">
                <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    <div>
                        <FadeIn delay={0}>
                            <motion.p
                                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-soft)] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]"
                                animate={{ boxShadow: ["0 0 0px transparent", "0 0 20px var(--color-glow-gold)", "0 0 0px transparent"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <span className="status-dot" style={{ width: 6, height: 6 }} />
                                {content.kicker}
                            </motion.p>
                        </FadeIn>

                        <h1 className="font-display mt-6 text-4xl font-bold leading-[1.08] text-[var(--color-text)] sm:text-5xl lg:text-[3.4rem]">
                            <span className="block text-[var(--color-muted)] text-2xl sm:text-3xl font-medium mb-2">Hi, I'm</span>
                            <TextReveal text={name.trim()} className="text-gradient" delay={0.1} />
                        </h1>

                        {tagline && (
                            <FadeIn delay={0.2} className="mt-4 font-display text-lg font-medium text-[var(--color-muted)] sm:text-xl">
                                {tagline.trim()}
                            </FadeIn>
                        )}

                        <FadeIn delay={0.3} className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                            {content.subtitle}
                        </FadeIn>

                        <FadeIn delay={0.4} className="mt-8 flex flex-wrap items-center gap-4">
                            <motion.a
                                href="#projects"
                                className="btn-cyber btn-cyber-primary shimmer-btn"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {content.primary}
                                <span aria-hidden>&#8250;</span>
                            </motion.a>
                            <motion.a
                                href={content.secondaryHref || "#contact"}
                                className="btn-cyber btn-cyber-ghost"
                                target={content.secondaryHref ? "_blank" : undefined}
                                rel={content.secondaryHref ? "noopener noreferrer" : undefined}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {content.secondary}
                            </motion.a>
                        </FadeIn>

                        <FadeIn delay={0.5} className="mt-6 font-mono text-xs text-[var(--color-muted)]">
                            📍 {content.location}
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.15} className="flex flex-col items-center gap-8">
                        <div className="tilt-scene relative flex h-60 w-60 items-center justify-center sm:h-72 sm:w-72">
                            <OrbitalRings />
                            <motion.div
                                className="absolute -inset-10 rounded-full opacity-50 blur-3xl"
                                style={{ background: "var(--gradient-brand)" }}
                                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="relative flex h-full w-full items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-2 shadow-[var(--shadow-card)] backdrop-blur-md"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <BorderBeam size={160} duration={5} />
                                <div className="relative flex h-full w-full flex-col items-center justify-center rounded-2xl bg-[var(--color-base)]/50 backdrop-blur-sm">
                                    <motion.span
                                        className="font-display text-6xl font-bold text-gradient sm:text-7xl"
                                        animate={{ filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        MH
                                    </motion.span>
                                    <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--color-accent)]">
                                        React & Django
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="grid w-full max-w-md grid-cols-3 gap-3">
                            {content.stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="stat-card rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-4 text-center backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 24, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.55 + i * 0.1, type: "spring", stiffness: 140 }}
                                    whileHover={{ y: -6, scale: 1.04 }}
                                >
                                    <p className="font-display text-2xl font-bold text-gradient">
                                        <AnimatedCounter value={stat.value} />
                                    </p>
                                    <p className="mt-1 text-[10px] uppercase tracking-wider text-[var(--color-muted)]">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
