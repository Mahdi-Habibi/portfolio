import React from "react";
import '../../styles/global.css';

const focusAreas = [
    "Ship React + Django products with resilient APIs and thoughtful UX.",
    "Mentor developers and guide Agile delivery with clean architecture.",
    "Optimize performance and accessibility with modern tooling.",
];

const toolbelt = [
    "React",
    "Django",
    "TypeScript",
    "Python",
    "REST",
    "Tailwind",
    "Sass",
    "MongoDB",
    "MySQL",
    "SQLite",
    "GitHub",
    "Docker (basic)",
];

export default function About() {
    return (
        <section id="about" className="space-y-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-2xl shadow-black/30 sm:px-10">
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">About</p>
            </div>
            <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-white">Crafting scalable, human web products.</h2>
                    <p className="text-slate-300">
                        Full-stack developer with a React/Django core, strong Python background, and a track record of
                        shipping reliable REST APIs and usable interfaces. I collaborate closely with teams, translate
                        business needs into technical plans, and keep codebases clean and maintainable.
                    </p>
                    <div className="space-y-2">
                        {focusAreas.map((item) => (
                            <div key={item} className="flex gap-3 text-sm text-slate-200">
                                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                                <p className="leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Toolbelt</p>
                    <div className="flex flex-wrap gap-2">
                        {toolbelt.map((tool) => (
                            <span
                                key={tool}
                                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                        <p className="font-semibold text-white">Recent win</p>
                        <p className="mt-1 text-slate-300">
                            Cut Largest Contentful Paint to 1.2s for a multi-brand landing system by redesigning the
                            asset pipeline and removing 70% of unused CSS.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
