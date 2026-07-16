import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ label, subtitle }) {
    return (
        <motion.div
            className="mb-12 text-center md:mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {label}
            </p>
            {subtitle && (
                <h2 className="font-display mt-3 text-3xl font-bold text-[var(--color-text)] md:text-4xl">
                    {subtitle}
                </h2>
            )}
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[var(--gradient-cyber)]" style={{ background: "var(--gradient-cyber)" }} />
        </motion.div>
    );
}
