import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ label, index }) {
    return (
        <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            {index && (
                <span className="font-mono text-xs font-medium tracking-widest text-[var(--color-accent)]">
                    {String(index).padStart(2, "0")}
                </span>
            )}
            <span className="section-line" />
            <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]">
                {label}
            </p>
        </motion.div>
    );
}
