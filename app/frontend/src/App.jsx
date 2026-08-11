import "./styles/main.css";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import IndexPage from "./pages";
import { SMOOTH_SCROLL_OPTIONS, useNativeScrollOnMobile, usePrefersReducedMotion } from "./hooks/useSmoothScroll";

export default function App() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const useNativeScroll = useNativeScrollOnMobile();

    if (prefersReducedMotion || useNativeScroll) {
        return (
            <>
                <IndexPage />
                <Analytics />
                <SpeedInsights />
            </>
        );
    }

    return (
        <ReactLenis root options={SMOOTH_SCROLL_OPTIONS}>
            <IndexPage />
            <Analytics />
            <SpeedInsights />
        </ReactLenis>
    );
}
