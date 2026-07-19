import { motion } from "framer-motion";
import Aurora from "./Aurora";

const particles = Array.from({ length: 24 }, (_, i) => ({
    top: `${6 + (i * 13) % 88}%`,
    left: `${4 + (i * 19) % 92}%`,
    size: 3 + (i % 5),
    duration: 5 + (i % 8),
    delay: (i % 6) * 0.35,
}));

const shapes = [
    { top: "12%", left: "72%", size: 90, rotate: 0 },
    { top: "55%", left: "8%", size: 70, rotate: 45 },
    { top: "78%", left: "82%", size: 55, rotate: 20 },
    { top: "30%", left: "40%", size: 40, rotate: 12 },
];

export default function TechBackground() {
    return (
        <div
            className="pointer-events-none fixed inset-0 overflow-hidden"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        >
            <div className="absolute inset-0" style={{ background: "var(--color-base)" }} />
            <Aurora />
            <div className="absolute inset-0 cyber-grid opacity-50" />

            <motion.div
                className="absolute -top-1/4 -left-1/4 h-[720px] w-[720px] rounded-full"
                style={{ background: "var(--color-glow-gold)", filter: "blur(120px)", opacity: 0.28 }}
                animate={{ x: [0, 70, -40, 0], y: [0, -50, 35, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full"
                style={{ background: "var(--color-glow-amber)", filter: "blur(110px)", opacity: 0.22 }}
                animate={{ x: [0, -55, 45, 0], y: [0, 40, -30, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
                style={{ background: "var(--color-soft-plum)", filter: "blur(100px)", opacity: 0.45 }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {shapes.map((s, i) => (
                <motion.div
                    key={i}
                    className="geo-shape absolute rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-soft)]"
                    style={{
                        top: s.top,
                        left: s.left,
                        width: s.size,
                        height: s.size,
                    }}
                    animate={{
                        rotate: [s.rotate, s.rotate + 180, s.rotate + 360],
                        y: [0, -24, 0],
                        opacity: [0.2, 0.45, 0.2],
                    }}
                    transition={{ duration: 14 + i * 3, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}

            {particles.map((p, i) => (
                <motion.span
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        top: p.top,
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        background: "var(--gradient-brand)",
                        boxShadow: "0 0 10px var(--color-glow-gold)",
                    }}
                    animate={{
                        y: [0, -36, 0],
                        opacity: [0.2, 0.75, 0.2],
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="absolute inset-0 scanlines opacity-20" />
        </div>
    );
}
