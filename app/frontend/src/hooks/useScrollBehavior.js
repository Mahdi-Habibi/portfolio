import { useEffect, useRef, useState } from "react";

/**
 * Navbar: hides on scroll down, shows on scroll up (works on every section).
 * Scroll-to-top: visible whenever the hero section has been passed.
 */
export function useScrollBehavior() {
    const [navVisible, setNavVisible] = useState(true);
    const [scrollTopVisible, setScrollTopVisible] = useState(false);
    const lastY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const hero = document.getElementById("home");
        if (!hero) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrollTopVisible(!entry.isIntersecting);
            },
            { threshold: 0, rootMargin: "-10% 0px 0px 0px" }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const update = () => {
            const y = window.scrollY ?? document.documentElement.scrollTop;

            if (y <= 16) {
                setNavVisible(true);
            } else if (y > lastY.current + 2) {
                setNavVisible(false);
            } else if (y < lastY.current - 2) {
                setNavVisible(true);
            }

            lastY.current = y;
            ticking.current = false;
        };

        const onScroll = () => {
            if (!ticking.current) {
                ticking.current = true;
                requestAnimationFrame(update);
            }
        };

        lastY.current = window.scrollY ?? document.documentElement.scrollTop;
        onScroll();

        window.addEventListener("scroll", onScroll, { passive: true });
        document.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            document.removeEventListener("scroll", onScroll);
        };
    }, []);

    return { navVisible, scrollTopVisible };
}
