import { motion, useReducedMotion } from "framer-motion";

export default function OrbitalRings() {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div
                    className="absolute rounded-full border border-[var(--color-border)]"
                    style={{ width: "128%", height: "128%" }}
                />
            </div>
        );
    }

    return (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            {[1, 2, 3].map((ring) => (
                <motion.div
                    key={ring}
                    className="absolute rounded-full border border-[var(--color-border)]"
                    style={{ width: `${100 + ring * 28}%`, height: `${100 + ring * 28}%` }}
                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + ring * 8, repeat: Infinity, ease: "linear" }}
                />
            ))}
            {[0, 1, 2].map((dot) => (
                <motion.span
                    key={dot}
                    className="absolute h-2 w-2 rounded-full bg-[var(--color-accent)]"
                    style={{ boxShadow: "0 0 10px var(--color-glow-gold)", transformOrigin: `${60 + dot * 20}px center` }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8 + dot * 3, repeat: Infinity, ease: "linear" }}
                />
            ))}
        </div>
    );
}
