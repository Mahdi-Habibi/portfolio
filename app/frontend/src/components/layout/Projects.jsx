import React from "react";
import { motion } from "framer-motion";
import '../../styles/global.css';
import SectionHeader from "../ui/SectionHeader";
import SpotlightCard from "../ui/SpotlightCard";
import TiltCard from "../ui/TiltCard";

export default function Projects({ content }) {
    return (
        <section id="projects" className="section relative">
            <div className="container-portfolio">
                <SectionHeader label={content.title} subtitle="Selected work & outcomes" />

                <motion.div
                    className="bento-grid"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
                >
                    {content.cards.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={index === 0 ? "bento-span-2" : ""}
                            variants={{ hidden: { opacity: 0, y: 36, rotateX: 8 }, show: { opacity: 1, y: 0, rotateX: 0 } }}
                        >
                            <TiltCard className="h-full">
                                <SpotlightCard className="h-full p-6 sm:p-7">
                                    <div className="flex h-full flex-col">
                                        <motion.div
                                            className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-soft)] font-display text-xl font-bold text-[var(--color-accent)]"
                                            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {project.title.charAt(0)}
                                        </motion.div>
                                        <h3 className="font-display text-xl font-bold text-[var(--color-text)] sm:text-2xl">
                                            {project.title}
                                        </h3>
                                        <span className="mt-2 inline-block w-fit chip">{project.result}</span>
                                        <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                                            {project.description}
                                        </p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.stack?.map((item) => (
                                                <span key={item} className="chip">{item}</span>
                                            ))}
                                        </div>
                                        <motion.p
                                            className="mt-6 text-sm font-semibold text-[var(--color-accent)]"
                                            whileHover={{ x: 6 }}
                                        >
                                            {content.cta} &#8250;
                                        </motion.p>
                                    </div>
                                </SpotlightCard>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
