import React from "react";
import '../../styles/global.css';

export default function SideLink({ href, label, icon }) {
    return (
        <a
            href={href}
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xs uppercase tracking-[0.14em] text-cyan-300">
                {icon || '•'}
            </span>
            <span className="tracking-wide">{label}</span>
            <span className="ml-auto h-px w-6 origin-left scale-x-0 bg-gradient-to-r from-transparent via-white/60 to-white/10 transition duration-300 group-hover:scale-x-100" />
        </a>
    );
}
