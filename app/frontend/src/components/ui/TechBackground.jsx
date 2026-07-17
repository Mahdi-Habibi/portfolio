import { motion } from "framer-motion";
import Aurora from "./Aurora";

const particles = Array.from({ length: 18 }, (_, i) => ({
    top: `${8 + (i * 17) % 85}%`,
    left: `${5 + (i * 23) % 90}%`,
    size: 3 + (i % 4),
    duration: `${6 + (i % 7)}s`,
    delay: `${(i % 5) * 0.4}s`,
}));

const shapes = [
    { top: "15%", left: "70%", size: 80, rotate: 0 },
    { top: "60%", left: "10%", size: 60, rotate: 45 },
    { top: "75%", left: "80%", size: 50, rotate: 20 },
];

export default function TechBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <Aurora />
            <div className="absolute inset-0 cyber-grid opacity-40" />

            <motion.div
                className="absolute -top-1/4 -left-1/4 h-[700px] w-[700px] rounded-full"
                style={{ background: "var(--color-glow-gold)", filter: "blur(130px)", opacity: 0.22 }}
                animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-1/4 -right-1/4 h-[550px] w-[550px] rounded-full"
                style={{ background: "var(--color-glow-amber)", filter: "blur(110px)", opacity: 0.18 }}
                animate={{ x: [0, -50, 40, 0], y: [0, 35, -25, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            {shapes.map((s, i) => (
                <motion.div
                    key={i}
                    className="geo-shape absolute rounded-2xl border border-[var(--color-border)] bg-[var(--color-soft)]"
                    style={{
                        top: s.top,
                        left: s.left,
                        width: s.size,
                        height: s.size,
                        rotate: s.rotate,
                    }}
                    animate={{
                        rotate: [s.rotate, s.rotate + 180, s.rotate + 360],
                        y: [0, -20, 0],
                        opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{ duration: 14 + i * 3, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}

            {particles.map((p, i) => (
                <motion.span
                    key={i}
                    className="particle absolute rounded-full"
                    style={{
                        top: p.top,
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        background: "var(--gradient-brand)",
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.15, 0.55, 0.15],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: parseFloat(p.duration),
                        delay: parseFloat(p.delay),
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="absolute inset-0 scanlines opacity-25" />
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 0%, var(--color-base) 92%)" }}
            />
        </div>
    );
}
