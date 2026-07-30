import { useReducedMotion } from "framer-motion";

export default function TextReveal({ text, className, delay = 0 }) {
    const reduceMotion = useReducedMotion();
    const words = text.split(" ");

    // Critical hero copy must stay readable even if the tab starts hidden
    // and requestAnimationFrame / CSS animations are paused.
    if (reduceMotion) {
        return <span className={className}>{text}</span>;
    }

    return (
        <span className={className}>
            {words.map((word, i) => (
                <span
                    key={`${word}-${i}`}
                    className="inline-block text-reveal-word"
                    style={{ animationDelay: `${(delay + i * 0.04) * 1000}ms` }}
                >
                    {word}
                    {i < words.length - 1 ? "\u00A0" : ""}
                </span>
            ))}
        </span>
    );
}
