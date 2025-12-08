import React from "react";
import '../../styles/global.css';

const projects = [
    {
        title: "Job-Seeking Platform",
        description: "Full-stack portal with authentication, CRUD job listings, and responsive UI for candidates and employers.",
        stack: ["PHP", "Bootstrap", "NoSQL"],
        result: "Production-ready features and optimized data model",
    },
    {
        title: "Python/Django Teaching Track",
        description: "Project-based curriculum covering RESTful APIs, React frontends, and deployment for 50+ students.",
        stack: ["Django", "React", "REST", "GitHub"],
        result: "Avg. 4.8/5 student satisfaction",
    },
    {
        title: "ML/DL Translation Project",
        description: "Translated advanced machine learning and deep learning resources to Persian to expand accessibility.",
        stack: ["Localization", "Technical Writing", "Version Control"],
        result: "Enabled broader research access",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Projects</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-cyan-100 text-center">
                                {project.result}
                            </span>
                        </div>
                        <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-200">
                            <span>Request a walkthrough</span>
                            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
