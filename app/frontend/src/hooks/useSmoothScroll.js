import { useEffect, useMemo, useState } from "react";

const BASE_SMOOTH_SCROLL_OPTIONS = {
    lerp: 0.075,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.15,
    anchors: { offset: -80 },
    autoRaf: true,
    stopInertiaOnNavigate: true,
};

export const SMOOTH_SCROLL_OPTIONS = BASE_SMOOTH_SCROLL_OPTIONS;

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

/** Native scroll feels better on phones; Lenis stays on desktop pointer devices. */
export function useNativeScrollOnMobile() {
    const [useNativeScroll, setUseNativeScroll] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 767px), (pointer: coarse)");
        const sync = () => setUseNativeScroll(media.matches);
        sync();
        media.addEventListener("change", sync);
        return () => media.removeEventListener("change", sync);
    }, []);

    return useNativeScroll;
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
