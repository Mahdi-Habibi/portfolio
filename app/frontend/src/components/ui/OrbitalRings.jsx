import { motion } from "framer-motion";

export default function OrbitalRings() {
    return (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {[1, 2, 3].map((ring) => (
                <motion.div
                    key={ring}
                    className="absolute rounded-full border border-[var(--color-border)]"
                    style={{
                        width: `${100 + ring * 28}%`,
                        height: `${100 + ring * 28}%`,
                    }}
                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                    transition={{
                        duration: 20 + ring * 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
            {[0, 1, 2].map((dot) => (
                <motion.span
                    key={dot}
                    className="absolute h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-glow-gold)]"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 8 + dot * 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        transformOrigin: `${60 + dot * 20}px center`,
                    }}
                />
            ))}
        </div>
    );
}
