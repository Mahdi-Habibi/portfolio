import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import TextReveal from "../ui/TextReveal";
import BorderBeam from "../ui/BorderBeam";
import FadeIn from "../ui/FadeIn";

export default function Hero({ content }) {
    const [name, tagline] = content.title.includes(" - ")
        ? content.title.split(" - ")
        : [content.title, ""];

    return (
        <section id="home" className="section min-h-[92vh] flex items-center pt-20">
            <div className="container-portfolio w-full">
                <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    <div>
                        <FadeIn delay={0}>
                            <p className="font-mono text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
                                {content.kicker}
                            </p>
                        </FadeIn>

                        <h1 className="font-display mt-5 text-4xl font-bold leading-[1.08] text-[var(--color-text)] sm:text-5xl lg:text-[3.4rem]">
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
                            <a href="#projects" className="btn-cyber btn-cyber-primary">
                                {content.primary}
                                <span aria-hidden>&#8250;</span>
                            </a>
                            <a href="#contact" className="btn-cyber btn-cyber-ghost">
                                {content.secondary}
                            </a>
                        </FadeIn>

                        <FadeIn delay={0.5} className="mt-6 font-mono text-xs text-[var(--color-muted)]">
                            📍 {content.location}
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.15} className="flex flex-col items-center gap-8">
                        <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
                            <div
                                className="absolute -inset-8 rounded-full opacity-40 blur-3xl animate-float"
                                style={{ background: "var(--gradient-brand)" }}
                            />
                            <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-[var(--shadow-card)]">
                                <BorderBeam size={140} duration={6} />
                                <div className="relative flex h-full w-full flex-col items-center justify-center rounded-2xl bg-[var(--color-base)]/60 backdrop-blur-sm">
                                    <span className="font-display text-6xl font-bold text-gradient sm:text-7xl">MH</span>
                                    <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--color-accent)]">
                                        Full-Stack Dev
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid w-full max-w-md grid-cols-3 gap-3">
                            {content.stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-4 text-center backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.55 + i * 0.1, type: "spring", stiffness: 140 }}
                                    whileHover={{ y: -4, boxShadow: "var(--shadow-warm)" }}
                                >
                                    <p className="font-display text-2xl font-bold text-gradient">{stat.value}</p>
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
