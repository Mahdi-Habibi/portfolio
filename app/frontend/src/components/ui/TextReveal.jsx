import { motion } from "framer-motion";

export default function TextReveal({ text, className, delay = 0 }) {
    const words = text.split(" ");

    return (
        <motion.span
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.04, delayChildren: delay }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    className="inline-block"
                    variants={{
                        hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                    {word}
                    {i < words.length - 1 ? "\u00A0" : ""}
                </motion.span>
            ))}
        </motion.span>
    );
}
