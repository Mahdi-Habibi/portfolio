import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

export default function Experience({ t, journeySectionRef, journeyProgress }) {
    const reduceMotion = useReducedMotion();
    const s = t.sections.experience;
    const progressWidth = `${Math.round(journeyProgress * 100)}%`;

    return (
        <section id="experience" ref={journeySectionRef} className="section-block section-border journey-section">
            <div className="container-x journey-layout">
                <FadeIn className="journey-intro">
                    <p className="eyebrow">{s.eyebrow}</p>
                    <h2 className="section-title">{s.title}</h2>
                    <p className="section-copy">{s.copy}</p>
                    <div className="journey-progress">
                        <div className="journey-progress-labels">
                            <span>{s.progressStart}</span>
                            <span>{s.progressEnd}</span>
                        </div>
                        <div className="journey-progress-bar">
                            {reduceMotion ? (
                                <span style={{ width: progressWidth, display: "block", height: "100%" }} />
                            ) : (
                                <motion.span
                                    style={{ width: progressWidth }}
                                    initial={false}
                                    animate={{ width: progressWidth }}
                                    transition={{ type: "spring", stiffness: 120, damping: 24 }}
                                />
                            )}
                        </div>
                    </div>
                </FadeIn>
                <ol className="journey-list">
                    {t.experience.items.map((item, idx) => {
                        const itemProgress = (idx + 1) / t.experience.items.length;
                        const isActive = journeyProgress >= itemProgress - 0.12;
                        return (
                            <FadeIn
                                key={`${item.role}-${item.company}`}
                                delay={idx * 0.04}
                                as="li"
                                className={`journey-item ${isActive ? "is-active" : ""}`}
                            >
                                <span className="journey-dot" aria-hidden="true" />
                                <p className="journey-role">{item.company} · {item.role.split(",")[0]}</p>
                                <p className="journey-meta">{item.role} · {item.period}</p>
                                <h3>{item.bullets[0]?.split(".")[0] || item.role}</h3>
                                <ul>
                                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                </ul>
                            </FadeIn>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
