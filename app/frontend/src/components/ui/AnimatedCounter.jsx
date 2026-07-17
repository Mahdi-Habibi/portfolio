import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value, className }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (!inView) return undefined;

        const match = String(value).match(/^(\d+)(.*)$/);
        if (!match) {
            setDisplay(value);
            return undefined;
        }

        const target = parseInt(match[1], 10);
        const suffix = match[2] || "";
        const duration = 1200;
        const start = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(`${Math.round(target * eased)}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        return undefined;
    }, [inView, value]);

    return (
        <motion.span ref={ref} className={className}>
            {display}
        </motion.span>
    );
}
