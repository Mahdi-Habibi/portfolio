import AnimatedCounter from "../ui/AnimatedCounter";
import FadeIn from "../ui/FadeIn";
import SpotlightCard from "../ui/SpotlightCard";

export default function Highlights({ t, impactCards }) {
    const s = t.sections.highlights;

    return (
        <section id="highlights" className="section-block section-border">
            <div className="container-x">
                <FadeIn>
                    <p className="eyebrow">{s.eyebrow}</p>
                    <h2 className="section-title section-title-wide">{s.title}</h2>
                </FadeIn>
                <div className="masonry">
                    {impactCards.map((card, idx) => (
                        <SpotlightCard key={`${card.name}-${card.initials}`} featured={idx === 0} className="masonry-card">
                            <FadeIn delay={idx * 0.05} as="figure">
                                <blockquote>{card.quote}</blockquote>
                                <figcaption>
                                    <span className="avatar-badge">
                                        {idx > 0 ? <AnimatedCounter value={card.initials} /> : card.initials}
                                    </span>
                                    <span style={{ fontSize: "0.875rem" }}>
                                        <strong style={{ display: "block" }}>{card.name}</strong>
                                        <span style={{ color: "var(--fg-muted)" }}>{card.role}</span>
                                    </span>
                                </figcaption>
                            </FadeIn>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
