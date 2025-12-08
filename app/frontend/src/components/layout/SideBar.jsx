import React from "react";
import '../../styles/global.css';
import SideLink from "../ui/SideLink";

const links = [
    { href: "#home", label: "Intro", icon: "01" },
    { href: "#about", label: "About", icon: "02" },
    { href: "#projects", label: "Projects", icon: "03" },
    { href: "#experience", label: "Experience", icon: "04" },
    { href: "#education", label: "Education", icon: "05" },
    { href: "#contact", label: "Contact", icon: "06" },
];

export default function SideBar() {
    return (
        <>
            <nav className="md:hidden fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-slate-900/90 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200 hover:bg-white/10 hover:text-white"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            <aside className="hidden md:fixed md:top-0 md:left-0 md:flex md:h-screen md:w-72 md:flex-col md:gap-6 border-r border-white/10 bg-slate-950/80 px-6 py-8 backdrop-blur-xl shadow-xl shadow-black/30">
                {/* <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/20" />
                    <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Mahdi Habibi Nazarlu</p>
                        <h1 className="text-lg font-semibold text-white">Full-Stack Dev · React &amp; Django</h1>
                        <p className="text-xs text-slate-400">Tabriz, Iran · UTC+3:30</p>
                    </div>
                </div> */}

                <div className="flex-1 space-y-2">
                    <p className="text-sm text-slate-400">Navigation</p>
                    {links.map((link) => (
                        <SideLink key={link.href} {...link} />
                    ))}
                </div>

                <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-inner shadow-black/20">
                    <p className="text-slate-300">
                        React &amp; Django specialist focused on reliable backends, clean UI/UX, and mentoring devs.
                    </p>
                    <div className="space-y-1 text-xs text-slate-300">
                        <p>info.mahdihabibi@gmail.com</p>
                        <p>+98 902 921 6735</p>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:brightness-110"
                    >
                        Let&apos;s collaborate
                    </a>
                </div>
            </aside>
        </>
    );
}
