import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

export default function TiltCard({ children, className, intensity = 10 }) {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();
    const x = useSpring(0, { stiffness: 300, damping: 30 });
    const y = useSpring(0, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity]);

    const handleMove = (e) => {
        if (!ref.current || reduceMotion) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    if (reduceMotion) {
        return <div className={cn("tilt-card", className)}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={cn("tilt-card cursor-pointer", className)}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {children}
        </motion.div>
    );
}
