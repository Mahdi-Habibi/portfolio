import React from "react";
import '../../styles/global.css';

export default function SideLink({ href, label, icon, onClick }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 font-display text-sm font-medium tracking-wide text-[var(--color-muted)] transition-all duration-300 hover:bg-[var(--color-soft)] hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
            <span className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 rounded-full bg-[var(--color-accent)] opacity-0 shadow-[0_0_8px_var(--color-glow-cyan)] transition-all duration-300 group-hover:h-3/4 group-hover:opacity-100" />
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-soft)] font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] transition-colors duration-300 group-hover:border-[var(--color-border-strong)] group-hover:shadow-[0_0_12px_var(--color-glow-cyan)]">
                {icon || '·'}
            </span>
            <span>{label}</span>
            <span className="ml-auto font-mono text-[10px] tracking-widest text-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                &#8250;
            </span>
        </a>
    );
}
