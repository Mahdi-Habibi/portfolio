import { cn } from "../../lib/utils";

export default function Marquee({ items, className, speed = 28 }) {
    const track = [...items, ...items];

    return (
        <div className={cn("marquee-mask relative overflow-hidden", className)}>
            <div
                className="marquee-track flex w-max gap-3"
                style={{ "--marquee-speed": `${speed}s` }}
            >
                {track.map((item, i) => {
                    const label = typeof item === "string" ? item : item.label;
                    const href = typeof item === "string" ? null : item.href;

                    return href ? (
                        <a
                            key={`${label}-${i}`}
                            href={href}
                            className="chip shrink-0 whitespace-nowrap"
                        >
                            {label}
                        </a>
                    ) : (
                        <span key={`${label}-${i}`} className="chip shrink-0 whitespace-nowrap">
                            {label}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
