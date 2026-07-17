import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function SpotlightCard({ children, className }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    const handleMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={ref}
            className={cn(
                "spotlight-card group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]",
                className
            )}
            onMouseMove={handleMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: hovering
                        ? `radial-gradient(480px circle at ${position.x}px ${position.y}px, rgba(240,167,46,0.14), transparent 42%)`
                        : "none",
                }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color-border-strong)] transition-colors duration-500" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
