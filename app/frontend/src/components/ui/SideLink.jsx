import React from "react";
import '../../styles/global.css';

export default function SideLink({ href, label, icon, onClick }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text)] hover:bg-[rgba(227,227,227,0.06)] hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[rgba(69,104,130,0.18)] text-xs uppercase tracking-[0.14em] text-[var(--color-text)]">
                {icon || '·'}
            </span>
            <span className="tracking-wide">{label}</span>
            <span className="ml-auto h-px w-6 origin-left scale-x-0 bg-gradient-to-r from-transparent via-[rgba(227,227,227,0.7)] to-[rgba(227,227,227,0.24)] transition duration-300 group-hover:scale-x-100" />
        </a>
    );
}
