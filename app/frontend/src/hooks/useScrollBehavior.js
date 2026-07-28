import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { getScrollY } from "./useSmoothScroll";

/**
 * Navbar: hide on scroll down, show on scroll up.
 * Go-to-top: show after leaving ~half the hero height.
 */
export function useScrollBehavior() {
    const [navVisible, setNavVisible] = useState(true);
    const [scrollTopVisible, setScrollTopVisible] = useState(false);
    const lastY = useRef(0);
    const heroThreshold = useRef(400);

    const measureHero = useCallback(() => {
        const hero = document.getElementById("home");
        if (hero) {
            heroThreshold.current = Math.max(280, Math.round(hero.offsetHeight * 0.5));
        } else {
            heroThreshold.current = Math.round(window.innerHeight * 0.5);
        }
    }, []);

    const applyScroll = useCallback((y, direction) => {
        const prev = lastY.current;
        const delta = y - prev;

        setScrollTopVisible(y > heroThreshold.current);

        if (y <= 32) {
            setNavVisible(true);
        } else if (direction === 1 || (direction == null && delta > 6)) {
            setNavVisible(false);
        } else if (direction === -1 || (direction == null && delta < -6)) {
            setNavVisible(true);
        }

        lastY.current = y;
    }, []);

    const lenis = useLenis((instance) => {
        applyScroll(instance.scroll, instance.direction);
    });

    useEffect(() => {
        measureHero();
        lastY.current = getScrollY();
        applyScroll(lastY.current);

        if (lenis) return undefined;

        const update = () => applyScroll(getScrollY());

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("scrollend", update, { passive: true });
        window.addEventListener("resize", () => {
            measureHero();
            update();
        }, { passive: true });
        window.addEventListener("wheel", update, { passive: true });
        window.addEventListener("touchmove", update, { passive: true });

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("scrollend", update);
            window.removeEventListener("resize", measureHero);
            window.removeEventListener("wheel", update);
            window.removeEventListener("touchmove", update);
        };
    }, [applyScroll, lenis, measureHero]);

    return { navVisible, scrollTopVisible };
}
