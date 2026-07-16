import { useEffect, useRef, useState } from "react";

/**
 * Controls navbar and scroll-to-top visibility based on scroll direction.
 * - At top: navbar visible, scroll-to-top hidden
 * - Scrolling down: navbar hidden, scroll-to-top visible
 * - Scrolling up: navbar visible, scroll-to-top hidden
 */
export function useScrollBehavior(topThreshold = 80, deltaThreshold = 8) {
    const [navVisible, setNavVisible] = useState(true);
    const [scrollTopVisible, setScrollTopVisible] = useState(false);
    const lastY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;

            if (y <= topThreshold) {
                setNavVisible(true);
                setScrollTopVisible(false);
                lastY.current = y;
                return;
            }

            if (Math.abs(y - lastY.current) < deltaThreshold) {
                return;
            }

            const scrollingDown = y > lastY.current;
            setNavVisible(!scrollingDown);
            setScrollTopVisible(scrollingDown);
            lastY.current = y;
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [topThreshold, deltaThreshold]);

    return { navVisible, scrollTopVisible };
}
