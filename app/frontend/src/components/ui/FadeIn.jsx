import { createElement, useEffect, useState } from "react";

export default function FadeIn({ children, className, delay = 0, as = "div" }) {
    const [visible, setVisible] = useState(() => (
        typeof document !== "undefined" && document.visibilityState !== "visible"
    ));

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (media.matches || document.visibilityState !== "visible") {
            setVisible(true);
            // #region agent log
            fetch('http://127.0.0.1:7846/ingest/b1423bf0-a65e-43f4-94de-40744853aff2',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'296c64'},body:JSON.stringify({sessionId:'296c64',runId:'post-fix',hypothesisId:'H7',location:'FadeIn.jsx:immediate-show',message:'FadeIn shown without waiting for motion',data:{visibilityState:document.visibilityState,reduced:media.matches,delay},timestamp:Date.now()})}).catch(()=>{});
            // #endregion
            return undefined;
        }

        const frame = window.requestAnimationFrame(() => setVisible(true));
        return () => window.cancelAnimationFrame(frame);
    }, [delay]);

    return createElement(
        as,
        {
            className: `fade-in-rise${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
            style: { "--fade-delay": `${delay}s` },
        },
        children,
    );
}
