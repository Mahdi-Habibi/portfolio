import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal driven by IntersectionObserver + CSS.
 *
 * Deliberately not built on framer-motion `whileInView`: its rAF loop is paused
 * while the tab is hidden, which strands elements on their `initial` state and
 * makes content permanently invisible. Here the element is revealed eagerly
 * whenever we cannot guarantee an animation will run.
 */
export default function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!node || prefersReducedMotion || typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries.some((entry) => entry.isIntersecting)) return;
                setVisible(true);
                observer.disconnect();
            },
            { rootMargin: "0px 0px -10% 0px" },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return [ref, visible];
}
