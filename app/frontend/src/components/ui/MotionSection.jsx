import { motion, useReducedMotion } from "framer-motion";

export default function MotionSection({ children, className, delay = 0, as = "div" }) {
    const reduceMotion = useReducedMotion();
    const Component = motion[as] ?? motion.div;

    if (reduceMotion) {
        const Static = as;
        return <Static className={className}>{children}</Static>;
    }

    return (
        <Component
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Component>
    );
}
