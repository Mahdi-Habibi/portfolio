import { useEffect, useState } from "react";

export const SMOOTH_SCROLL_OPTIONS = {
    lerp: 0.075,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.15,
    anchors: { offset: -80 },
    autoRaf: true,
    stopInertiaOnNavigate: true,
};

export function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const sync = () => setPrefersReducedMotion(media.matches);
        sync();
        media.addEventListener("change", sync);
        return () => media.removeEventListener("change", sync);
    }, []);

    return prefersReducedMotion;
}

export function getScrollY() {
    return (
        window.scrollY
        || window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0
    );
}
