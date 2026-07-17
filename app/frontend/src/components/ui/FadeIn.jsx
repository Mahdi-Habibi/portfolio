import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function FadeIn({ children, className, delay = 0, as = "div" }) {
    const Component = motion[as] ?? motion.div;
    return (
        <Component
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={delay}
            variants={variants}
        >
            {children}
        </Component>
    );
}
