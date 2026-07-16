import React from "react";

export default function TechBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-60" />
            <div
                className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full animate-float"
                style={{ background: "var(--color-glow-cyan)", filter: "blur(120px)", opacity: 0.18 }}
            />
            <div
                className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full animate-float-delayed"
                style={{ background: "var(--color-glow-purple)", filter: "blur(100px)", opacity: 0.14 }}
            />
            <div
                className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-float"
                style={{ background: "var(--color-glow-pink)", filter: "blur(140px)", opacity: 0.08 }}
            />
            <div className="absolute inset-0 scanlines opacity-40" />
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to bottom, transparent 0%, var(--color-base) 85%)",
                }}
            />
        </div>
    );
}
