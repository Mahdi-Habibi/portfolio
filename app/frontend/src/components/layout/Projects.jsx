import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";
import SpotlightCard from "../ui/SpotlightCard";
import FadeIn from "../ui/FadeIn";

export default function Projects({ content }) {
    return (
        <section id="projects" className="section">
            <div className="container-portfolio">
                <SectionHeader label={content.title} subtitle="Selected work & outcomes" />

                <motion.div
                    className="bento-grid"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                >
                    {content.cards.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={index === 0 ? "bento-span-2" : ""}
                            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
                        >
                            <SpotlightCard className="h-full p-6 sm:p-7">
                                <div className="flex h-full flex-col">
                                    <div className="mb-5 flex items-start justify-between gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-soft)] font-display text-xl font-bold text-[var(--color-accent)]">
                                            {project.title.charAt(0)}
                                        </div>
                                        <span className="chip shrink-0">{project.result}</span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-[var(--color-text)] sm:text-2xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                                        {project.description}
                                    </p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.stack?.map((item) => (
                                            <span key={item} className="chip">{item}</span>
                                        ))}
                                    </div>
                                    <p className="mt-6 text-sm font-semibold text-[var(--color-accent)]">
                                        {content.cta} &#8250;
                                    </p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
