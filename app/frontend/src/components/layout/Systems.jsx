import BorderBeam from "../ui/BorderBeam";
import FadeIn from "../ui/FadeIn";
import SpotlightCard from "../ui/SpotlightCard";

export default function Systems({ t }) {
    const s = t.sections.systems;

    return (
        <section id="systems" className="section-block section-border">
            <div className="container-x">
                <FadeIn>
                    <p className="eyebrow">{s.eyebrow}</p>
                    <h2 className="section-title">{s.title}</h2>
                    <p className="section-copy">{t.about.recentWinText}</p>
                </FadeIn>
                <div className="systems-grid">
                    {t.systemCards.map((card, idx) => (
                        <SpotlightCard
                            key={card.title}
                            featured={card.featured}
                            className={`system-card glass-panel ${card.featured ? "featured" : ""}`}
                        >
                            <FadeIn delay={idx * 0.06}>
                                {card.featured && <BorderBeam size={100} duration={12} />}
                                <h3>{card.title}</h3>
                                <p>{card.body}</p>
                                <div className="system-card-tags">
                                    {card.tags.map((tag) => <span key={tag}>{tag}</span>)}
                                </div>
                            </FadeIn>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
