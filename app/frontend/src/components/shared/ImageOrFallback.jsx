import { useState } from "react";

export default function ImageOrFallback({
    src,
    alt,
    className = "",
    fallbackText = "MH",
    fallbackClassName = "portrait-fallback",
}) {
    const [broken, setBroken] = useState(false);

    if (broken || !src) {
        return (
            <div className={`${fallbackClassName} ${className}`.trim()} aria-label={alt} role="img">
                {fallbackText}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setBroken(true)}
            loading="lazy"
            decoding="async"
        />
    );
}
