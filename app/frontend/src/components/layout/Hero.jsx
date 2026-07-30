import { useEffect, useRef } from "react";
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
    const titleRef = useRef(null);
    const s = t.sections.hero;
    const locationParts = splitLocation(t.hero.location.replace(/\([^)]*\)/, "").trim());
    const heroCred = `${t.hero.stats[0]?.value || "12"} ${s.credRepos} · ${t.hero.stats[1]?.value || "6+"} ${s.credApps} · ${t.hero.stats[2]?.value || "TS / PY"} ${s.credStack}`;

    useEffect(() => {
        const title = titleRef.current;
        const sample = (label) => {
            const style = title ? getComputedStyle(title) : null;
            const rect = title?.getBoundingClientRect();
            const children = title
                ? [...title.querySelectorAll("span")].map((node) => {
                    const childStyle = getComputedStyle(node);
                    return {
                        text: node.textContent?.trim(),
                        opacity: childStyle.opacity,
                        filter: childStyle.filter,
                        transform: childStyle.transform,
                    };
                })
                : [];
            // #region agent log
            fetch('http://127.0.0.1:7846/ingest/b1423bf0-a65e-43f4-94de-40744853aff2',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'296c64'},body:JSON.stringify({sessionId:'296c64',runId:'pre-fix',hypothesisId:'H1,H2,H4',location:'Hero.jsx:title-sample',message:label,data:{text:title?.innerText,opacity:style?.opacity,visibility:style?.visibility,display:style?.display,overflow:style?.overflow,rect:rect?{top:rect.top,left:rect.left,width:rect.width,height:rect.height}:null,children,viewport:{width:innerWidth,height:innerHeight},reduceMotion,documentTitle:document.title},timestamp:Date.now()})}).catch(()=>{});
            // #endregion
        };
        sample("Hero title mounted");
        const t1 = window.setTimeout(() => sample("Hero title +300ms"), 300);
        const t2 = window.setTimeout(() => sample("Hero title +1000ms"), 1000);
        const t3 = window.setTimeout(() => sample("Hero title +2000ms"), 2000);
        return () => {
            window.clearTimeout(t1);
            window.clearTimeout(t2);
            window.clearTimeout(t3);
            // #region agent log
            fetch('http://127.0.0.1:7846/ingest/b1423bf0-a65e-43f4-94de-40744853aff2',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'296c64'},body:JSON.stringify({sessionId:'296c64',runId:'pre-fix',hypothesisId:'H4',location:'Hero.jsx:unmount',message:'Hero title unmounted',data:{language:document.documentElement.lang},timestamp:Date.now()})}).catch(()=>{});
            // #endregion
        };
    }, [reduceMotion]);

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

                    <h1 ref={titleRef} className="hero-name-display">
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

                <FadeIn delay={0.15} className="hero-visual hero-visual--mobile">
                    <div className="hero-portrait-ring hero-portrait-ring--mobile">
                        <ImageOrFallback src={profileImage} alt={t.sections.ui.portraitAlt} fallbackText="MH" />
                    </div>
                </FadeIn>

                <FadeIn delay={0.15} className="hero-visual hero-visual--desktop">
                    <OrbitalRings />
                    <div className="hero-portrait-ring">
                        <ImageOrFallback src={profileImage} alt={t.sections.ui.portraitAlt} fallbackText="MH" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
