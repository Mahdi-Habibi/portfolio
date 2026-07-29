import { motion, useReducedMotion } from "framer-motion";
import Aurora from "./Aurora";

export default function TechBackground() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
            <div className="absolute inset-0" style={{ background: "var(--color-base)" }} />
            <Aurora />
            <div className="absolute inset-0 cyber-grid opacity-50" />

            {!reduceMotion && (
                <>
                    <motion.div
                        className="absolute -top-1/4 -left-1/4 h-[720px] w-[720px] rounded-full"
                        style={{ background: "var(--color-glow-gold)", filter: "blur(120px)", opacity: 0.22 }}
                        animate={{ x: [0, 70, -40, 0], y: [0, -50, 35, 0] }}
                        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full"
                        style={{ background: "var(--color-glow-amber)", filter: "blur(110px)", opacity: 0.18 }}
                        animate={{ x: [0, -55, 45, 0], y: [0, 40, -30, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                </>
            )}

            <div className="absolute inset-0 scanlines opacity-20" />
        </div>
    );
}
