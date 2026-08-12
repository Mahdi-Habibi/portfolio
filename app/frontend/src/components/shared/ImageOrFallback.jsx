import { useState } from "react";

export default function ImageOrFallback({
    src,
    alt,
    className = "",
    fallbackText = "MH",
    fallbackClassName = "portrait-fallback",
    priority = false,
    width,
    height,
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
            width={width}
            height={height}
            onError={() => setBroken(true)}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding={priority ? "sync" : "async"}
        />
    );
}
