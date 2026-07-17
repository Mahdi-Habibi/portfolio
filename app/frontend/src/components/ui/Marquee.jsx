import { cn } from "../../lib/utils";

export default function Marquee({ items, className, speed = 28 }) {
    const track = [...items, ...items];

    return (
        <div className={cn("marquee-mask relative overflow-hidden", className)}>
            <div
                className="marquee-track flex w-max gap-3"
                style={{ "--marquee-speed": `${speed}s` }}
            >
                {track.map((item, i) => (
                    <span key={`${item}-${i}`} className="chip shrink-0 whitespace-nowrap">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
