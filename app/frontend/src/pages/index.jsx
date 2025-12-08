import React from 'react';
import '../styles/global.css';
import SideBar from '../components/layout/SideBar';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About';
import Projects from '../components/layout/Projects';
import Experience from '../components/layout/Experience';
import Education from '../components/layout/Education';
import Contact from '../components/layout/Contact';

export default function IndexPage() {
    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-100">
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
            </div>

            <SideBar />
            <main className="px-4 py-10 sm:px-6 md:pl-80 lg:pl-[20rem] lg:pr-10">
                <div className="mx-auto max-w-5xl space-y-10">
                    <Hero />
                    <About />
                    <Projects />
                    <Experience />
                    <Education />
                    <Contact />
                </div>
            </main>
        </div>
    );
}
