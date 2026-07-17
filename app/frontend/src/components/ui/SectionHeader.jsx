import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ label, subtitle }) {
    return (
        <motion.div
            className="mb-12 text-center md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">
                {label}
            </p>
            {subtitle && (
                <h2 className="font-display mt-3 text-3xl font-bold text-[var(--color-text)] md:text-4xl">
                    {subtitle}
                </h2>
            )}
            <motion.div
                className="section-line mx-auto mt-5"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
            />
        </motion.div>
    );
}
