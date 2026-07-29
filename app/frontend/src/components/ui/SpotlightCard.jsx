import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function SpotlightCard({ children, className, featured = false }) {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    const handleMove = (e) => {
        if (!ref.current || reduceMotion) return;
        const rect = ref.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={ref}
            className={cn(
                "spotlight-card group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]",
                featured && "border-[color-mix(in_srgb,var(--accent)_35%,var(--line))]",
                className,
            )}
            onMouseMove={handleMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
            {!reduceMotion && (
                <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        background: hovering
                            ? `radial-gradient(480px circle at ${position.x}px ${position.y}px, rgba(233,184,114,0.14), transparent 42%)`
                            : "none",
                    }}
                />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
