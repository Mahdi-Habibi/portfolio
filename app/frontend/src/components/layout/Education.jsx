import React from "react";
import '../../styles/global.css';

const education = [
    {
        school: "Shahid Beheshti University",
        degree: "M.Sc. in Computer Architecture",
        period: "In progress",
        note: "Advanced study in computer architecture and systems design.",
    },
    {
        school: "Tabriz University",
        degree: "B.Sc. in Computer Engineering",
        period: "Completed",
        note: "Focused on software engineering fundamentals and distributed systems.",
    },
];

export default function Education() {
    return (
        <section id="education" className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Education</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {education.map((item) => (
                    <article
                        key={item.school}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20"
                    >
                        <h3 className="text-lg font-semibold text-white">{item.school}</h3>
                        <p className="text-sm text-slate-300">{item.degree}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{item.period}</p>
                        <p className="mt-3 text-sm text-slate-200">{item.note}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
