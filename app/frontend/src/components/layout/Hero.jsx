import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { splitLocation } from "../../lib/assets";
import Aurora from "../ui/Aurora";
import FadeIn from "../ui/FadeIn";
import OrbitalRings from "../ui/OrbitalRings";
import TextReveal from "../ui/TextReveal";
import ImageOrFallback from "../shared/ImageOrFallback";

export default function Hero({ t, profileImage }) {
    const reduceMotion = useReducedMotion();
    const [showOrbitalRings, setShowOrbitalRings] = useState(false);
    const s = t.sections.hero;
    const locationParts = splitLocation(t.hero.location.replace(/\([^)]*\)/, "").trim());
    const heroCred = `${t.hero.stats[0]?.value || "12"} ${s.credRepos} · ${t.hero.stats[1]?.value || "6+"} ${s.credApps} · ${t.hero.stats[2]?.value || "TS / PY"} ${s.credStack}`;

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)");
        const sync = () => setShowOrbitalRings(media.matches);
        sync();
        media.addEventListener("change", sync);
        return () => media.removeEventListener("change", sync);
    }, []);

    return (
        <section id="home" className="hero-section">
            <Aurora />
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-gradient-a" aria-hidden="true" />
            <div className="hero-gradient-b" aria-hidden="true" />
            <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

            <div className="container-x hero-layout">
                <div className="hero-content">
                    <FadeIn delay={0}>
                        <div className="hero-kicker-badge">
                            <span className="status-dot" style={{ width: 6, height: 6 }} />
                            {t.hero.kicker}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.05}>
                        <div className="hero-meta" style={{ marginTop: "1.25rem" }}>
                            <span className="eyebrow">{locationParts.city}{locationParts.region ? `, ${locationParts.region}` : ""}</span>
                            <span className="eyebrow eyebrow-faint">{s.tags}</span>
                        </div>
                    </FadeIn>

                    <h1 className="hero-name-display">
                        <span className="sr-only">{t.hero.title}</span>
                        <TextReveal text={s.firstName} className="hero-name-accent" delay={0.1} aria-hidden="true" />
                        <br />
                        <TextReveal text={s.lastName} delay={0.2} aria-hidden="true" />
                    </h1>

                    <FadeIn delay={0.25}>
                        <p className="hero-lede">{t.hero.subtitle.split(".")[0]}.</p>
                    </FadeIn>
                    <FadeIn delay={0.32}>
                        <p className="hero-cred">{heroCred}</p>
                    </FadeIn>
                    <FadeIn delay={0.38}>
                        <div className="hero-cta">
                            <a href="#projects" className="btn-solid cursor-pointer">{t.hero.primary}</a>
                            <a href="#contact" className="btn-accent cursor-pointer">{t.sidebar.cta}</a>
                            <a
                                href={t.hero.secondaryHref}
                                className="btn-ghost cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.hero.secondary} ↗
                            </a>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.45}>
                        <a href="#projects" className="hero-scroll-hint link-underline cursor-pointer">
                            {s.scrollHint}
                            {!reduceMotion && (
                                <motion.span
                                    animate={{ y: [0, 4, 0] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ display: "inline-flex" }}
                                >
                                    <ChevronDown size={16} aria-hidden="true" />
                                </motion.span>
                            )}
                        </a>
                    </FadeIn>
                </div>

                <FadeIn delay={0.15} className="hero-visual">
                    {showOrbitalRings && (
                        <div className="hero-orbital" aria-hidden="true">
                            <OrbitalRings />
                        </div>
                    )}
                    <div className="hero-portrait-ring">
                        <ImageOrFallback
                            src={profileImage}
                            alt={t.sections.ui.portraitAlt}
                            fallbackText="MH"
                            priority
                            width={440}
                            height={440}
                        />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
