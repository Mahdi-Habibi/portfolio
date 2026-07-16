import React from "react";

const particles = [
    { top: "12%", left: "8%", size: 6, duration: "7s", delay: "0s" },
    { top: "28%", left: "85%", size: 4, duration: "9s", delay: "1s" },
    { top: "55%", left: "15%", size: 5, duration: "11s", delay: "2s" },
    { top: "72%", left: "78%", size: 7, duration: "8s", delay: "0.5s" },
    { top: "88%", left: "42%", size: 4, duration: "10s", delay: "1.5s" },
    { top: "40%", left: "55%", size: 3, duration: "12s", delay: "3s" },
];

export default function TechBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-50" />

            <div
                className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full animate-float"
                style={{ background: "var(--color-glow-gold)", filter: "blur(120px)", opacity: 0.2 }}
            />
            <div
                className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full animate-float-delayed"
                style={{ background: "var(--color-glow-amber)", filter: "blur(100px)", opacity: 0.16 }}
            />
            <div
                className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full animate-float"
                style={{ background: "var(--color-soft-plum)", filter: "blur(90px)", opacity: 0.5 }}
            />

            {particles.map((p, i) => (
                <span
                    key={i}
                    className="particle"
                    style={{
                        top: p.top,
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        "--duration": p.duration,
                        "--delay": p.delay,
                    }}
                />
            ))}

            <div className="absolute inset-0 scanlines opacity-30" />
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 0%, var(--color-base) 90%)" }}
            />
        </div>
    );
}
