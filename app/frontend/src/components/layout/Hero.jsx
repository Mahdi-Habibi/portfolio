import React from "react";
import '../../styles/global.css';

const stats = [
    { label: "Projects shipped", value: "24+" },
    { label: "Avg. page load", value: "0.8s" },
    { label: "Teams helped", value: "11" },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-10 shadow-2xl shadow-black/30 sm:px-10 md:px-12"
        >
            <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-cyan-500/30 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl" />

            <p className="text-xs uppercase tracking-[0.38em] text-cyan-200">Full-stack developer</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                Mahdi Habibi Nazarlu — React &amp; Django specialist building scalable products.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Results-driven engineer with a Python/Django backbone and modern React front-ends, focused on performant
                APIs, thoughtful UI/UX, and clean, maintainable code for teams shipping at pace.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:brightness-110"
                >
                    View projects
                    <span aria-hidden className="text-base">↗</span>
                </a>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-300/70 hover:text-cyan-50"
                >
                    View resume
                </a>
                <span className="text-sm text-slate-400">Tabriz, Iran · UTC+3:30</span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center shadow-inner shadow-black/20"
                    >
                        <p className="text-3xl font-semibold text-white">{stat.value}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
