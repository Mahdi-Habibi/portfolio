import React from "react";
import '../../styles/global.css';

const experiences = [
    {
        role: "Full-Stack Developer",
        company: "Agrad Web",
        period: "Nov 2025 – Present",
        bullets: [
            "Design and develop scalable web apps using Django backends and React frontends.",
            "Implement secure REST APIs, auth, and performant database models.",
            "Collaborate with clients to translate requirements into high-UX solutions and deploy via Docker/NGINX.",
        ],
    },
    {
        role: "Full-Stack Development & Python Instructor",
        company: "Tabriz Technical Complex",
        period: "Apr 2025 – Present",
        bullets: [
            "Teach Python/Django and React to 50+ students with project-based curricula.",
            "Lead code reviews and mentorship to help students ship production-ready apps.",
            "Maintain a 4.8/5 satisfaction score through interactive lessons and guidance.",
        ],
    },
    {
        role: "PHP Developer",
        company: "Petco (Pump & Turbine of Tabriz)",
        period: "Jun 2023 – Mar 2024",
        bullets: [
            "Built and maintained internal and public applications with PHP, JavaScript, and MySQL.",
            "Improved UI responsiveness by 30% via Bootstrap refactors and async patterns.",
            "Collaborated in Agile teams with GitHub-based version control.",
        ],
    },
    {
        role: "English Teacher",
        company: "C+C Academy",
        period: "Dec 2022 – Nov 2023",
        bullets: [
            "Trained 100+ students in communication, academic writing, and presentation skills.",
            "Created interactive materials leveraging digital tools to boost engagement.",
        ],
    },
    {
        role: "Front-End Developer",
        company: "Loris Studio",
        period: "Sep 2020 – Sep 2021",
        bullets: [
            "Built responsive client-facing interfaces with Bootstrap, jQuery, and custom JavaScript.",
            "Enhanced cross-browser compatibility and UX for diverse client requirements.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Experience</p>
            </div>
            <div className="space-y-4">
                {experiences.map((job) => (
                    <article
                        key={job.role}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                                <p className="text-sm text-slate-300">{job.company}</p>
                            </div>
                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                                {job.period}
                            </span>
                        </div>
                        <ul className="mt-4 space-y-2 text-sm text-slate-200">
                            {job.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
