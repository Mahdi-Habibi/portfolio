import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

export default function TiltCard({ children, className, intensity = 12 }) {
    const ref = useRef(null);
    const x = useSpring(0, { stiffness: 300, damping: 30 });
    const y = useSpring(0, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity]);

    const handleMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(px);
        y.set(py);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={cn("tilt-card", className)}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {children}
        </motion.div>
    );
}
