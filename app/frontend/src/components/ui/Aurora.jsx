import { motion } from "framer-motion";

export default function Aurora() {
    return (
        <div className="aurora pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
                className="aurora-layer aurora-layer-1"
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, -60, 40, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="aurora-layer aurora-layer-2"
                animate={{
                    x: [0, -70, 50, 0],
                    y: [0, 50, -30, 0],
                    scale: [1, 0.9, 1.08, 1],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="aurora-layer aurora-layer-3"
                animate={{
                    x: [0, 40, -60, 0],
                    y: [0, 30, -50, 0],
                }}
                transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}
