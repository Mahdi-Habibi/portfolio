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
                    onAnimationEnd={() => {
                        if (i !== words.length - 1) return;
                        // #region agent log
                        fetch('http://127.0.0.1:7846/ingest/b1423bf0-a65e-43f4-94de-40744853aff2',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'296c64'},body:JSON.stringify({sessionId:'296c64',runId:'post-fix',hypothesisId:'H7',location:'TextReveal.jsx:css-complete',message:'CSS text reveal completed',data:{text,visibilityState:document.visibilityState,opacity:1},timestamp:Date.now()})}).catch(()=>{});
                        // #endregion
                    }}
                >
                    {word}
                    {i < words.length - 1 ? "\u00A0" : ""}
                </span>
            ))}
        </span>
    );
}
