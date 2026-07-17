import { motion } from "framer-motion";

export default function SectionDivider() {
    return (
        <div className="container-portfolio py-2">
            <motion.div
                className="relative h-px w-full overflow-hidden bg-[var(--color-border)]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div
                    className="absolute inset-y-0 w-24 bg-[var(--gradient-brand)] blur-sm"
                    animate={{ x: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </div>
    );
}
