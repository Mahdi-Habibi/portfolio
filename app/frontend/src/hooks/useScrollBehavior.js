import { useEffect, useRef, useState } from "react";

/**
 * Navbar: hide on scroll down, show on scroll up (any section).
 * Go-to-top: show after leaving ~half the hero height.
 */
export function useScrollBehavior() {
    const [navVisible, setNavVisible] = useState(true);
    const [scrollTopVisible, setScrollTopVisible] = useState(false);
    const lastY = useRef(0);
    const heroThreshold = useRef(400);

    useEffect(() => {
        const measure = () => {
            const hero = document.getElementById("home");
            if (hero) {
                heroThreshold.current = Math.max(280, Math.round(hero.offsetHeight * 0.5));
            } else {
                heroThreshold.current = Math.round(window.innerHeight * 0.5);
            }
        };

        const getY = () =>
            window.scrollY
            || window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;

        const update = () => {
            const y = getY();
            const prev = lastY.current;
            const delta = y - prev;

            setScrollTopVisible(y > heroThreshold.current);

            if (y <= 32) {
                setNavVisible(true);
            } else if (delta > 6) {
                setNavVisible(false);
            } else if (delta < -6) {
                setNavVisible(true);
            }

            lastY.current = y;
        };

        measure();
        lastY.current = getY();
        update();

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("scrollend", update, { passive: true });
        window.addEventListener("resize", () => {
            measure();
            update();
        }, { passive: true });

        // Wheel/touch keep navbar responsive even if scroll events are sparse
        window.addEventListener("wheel", update, { passive: true });
        window.addEventListener("touchmove", update, { passive: true });

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("scrollend", update);
            window.removeEventListener("resize", measure);
            window.removeEventListener("wheel", update);
            window.removeEventListener("touchmove", update);
        };
    }, []);

    return { navVisible, scrollTopVisible };
}
