import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value, className }) {
    const ref = useRef(null);
    const [display, setDisplay] = useState(String(value));
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        const match = String(value).match(/^(\d+)(.*)$/);
        if (!match) {
            setDisplay(String(value));
            return undefined;
        }

        const target = parseInt(match[1], 10);
        const suffix = match[2] || "";

        const run = () => {
            if (started.current) return;
            started.current = true;
            setDisplay(`0${suffix}`);
            const duration = 1100;
            const start = performance.now();

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setDisplay(`${Math.round(target * eased)}${suffix}`);
                if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) run();
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value]);

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    );
}
