import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import "../../styles/global.css";

export default function ScrollToTop({ visible, label = "Scroll to top" }) {
    const lenis = useLenis();
    const reduceMotion = useReducedMotion();

    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.1 });
            return;
        }

        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        const started = performance.now();
        const sync = () => {
            window.dispatchEvent(new Event("scroll"));
            if ((window.scrollY || 0) > 2 && performance.now() - started < 1500) {
                requestAnimationFrame(sync);
            }
        };
        requestAnimationFrame(sync);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    aria-label={label}
                    onClick={scrollToTop}
                    className="scroll-top-btn fixed bottom-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[image:var(--gradient-brand)] text-[var(--color-on-accent)] shadow-[var(--shadow-warm)] [inset-inline-end:1.5rem]"
                    initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.85 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={reduceMotion ? undefined : { scale: 1.08, y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path d="M12 19V5" />
                        <path d="M5 12l7-7 7 7" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
