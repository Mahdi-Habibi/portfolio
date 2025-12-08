import React from "react";
import '../../styles/global.css';

const links = [
    { label: "Email", href: "mailto:info.mahdihabibi@gmail.com" },
    { label: "Phone", href: "tel:+989029216735" },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/20 via-white/5 to-indigo-500/20 px-6 py-10 shadow-2xl shadow-black/30 sm:px-10"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%)]" />
            <div className="relative space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-100">Contact</p>
                <h2 className="text-3xl font-semibold text-white">Let&apos;s build something deliberate.</h2>
                <p className="max-w-2xl text-slate-200">
                    Tell me about the problem you&apos;re solving, your timeline, and the collaboration you need. I
                    respond within 24 hours.
                </p>
                <div className="flex flex-wrap gap-3">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-200/70 hover:text-cyan-50"
                        >
                            {link.label}
                            <span aria-hidden>↗</span>
                        </a>
                    ))}
                </div>
                <p className="text-sm text-slate-300">Tabriz, Iran · UTC+3:30</p>
            </div>
        </section>
    );
}
