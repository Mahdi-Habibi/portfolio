import { createElement } from "react";
import useReveal from "../../hooks/useReveal";

export default function FadeIn({ children, className, delay = 0, as = "div" }) {
    const [ref, visible] = useReveal();

    return createElement(
        as,
        {
            ref,
            className: `fade-in-rise${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
            style: { "--fade-delay": `${delay}s` },
        },
        children,
    );
}
