import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projectImageUrl } from "../../lib/assets";
import BorderBeam from "../ui/BorderBeam";
import MotionSection from "../ui/MotionSection";
import TiltCard from "../ui/TiltCard";
import ImageOrFallback from "../shared/ImageOrFallback";

export default function Projects({
    t,
    onShowPreview,
    onHidePreview,
}) {
    const s = t.sections.projects;
    const [expandedId, setExpandedId] = useState(null);

    const toggleMobilePreview = (card) => {
        const id = card.id || card.title;
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="projects" className="section-block">
            <div className="container-x">
                <MotionSection className="section-head-row">
                    <div>
                        <p className="eyebrow">{s.eyebrow}</p>
                        <h2 className="section-title section-title-wide">{s.title}</h2>
                    </div>
                    <a
                        href="https://github.com/Mahdi-Habibi?tab=repositories"
                        className="link-underline section-link cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {s.allRepos} →
                    </a>
                </MotionSection>

                <div className="work-grid">
                    {t.projects.cards.map((card, idx) => {
                        const cardId = card.id || card.title;
                        const isExpanded = expandedId === cardId;

                        return (
                            <TiltCard key={cardId} className="work-card">
                                <article
                                    id={`project-${cardId}`}
                                    onMouseEnter={(event) => onShowPreview?.(card, idx, event)}
                                    onMouseLeave={onHidePreview}
                                >
                                    <a
                                        className="work-card-media cursor-pointer"
                                        href={card.live || card.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${card.title} — ${t.sections.ui.projectOpen}`}
                                        onClick={(e) => {
                                            if (window.matchMedia("(max-width: 1024px)").matches) {
                                                e.preventDefault();
                                                toggleMobilePreview(card);
                                            }
                                        }}
                                    >
                                        <span className="work-card-index">{String(idx + 1).padStart(2, "0")}</span>
                                        <ImageOrFallback
                                            src={projectImageUrl(card.image)}
                                            alt={`${card.title} — ${t.sections.ui.projectPreview}`}
                                            className="work-card-preview-image"
                                            fallbackText={String(idx + 1).padStart(2, "0")}
                                        />
                                        <div className="work-card-media-overlay" />
                                        <BorderBeam size={80} duration={10} />
                                    </a>
                                    <div className="work-card-body">
                                        <div className="work-card-top">
                                            <div>
                                                <h3>
                                                    <a
                                                        href={card.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="cursor-pointer"
                                                    >
                                                        {card.title}
                                                    </a>
                                                </h3>
                                                <p className="work-card-meta">
                                                    {card.stack?.[0] || t.hero.kicker} · {card.year || "2026"}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="work-card-result">{card.result}</p>
                                        <p>{card.description}</p>
                                        {isExpanded && (
                                            <div className="work-card-mobile-preview">
                                                <p className="work-card-result">{card.result}</p>
                                                <a
                                                    href={card.live || card.href}
                                                    className="link-underline cursor-pointer"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {card.live ? s.liveDemo : t.projects.cta} <ExternalLink size={14} aria-hidden="true" />
                                                </a>
                                            </div>
                                        )}
                                        <div className="work-card-tags">
                                            {card.stack.map((tech) => <span key={tech}>{tech}</span>)}
                                        </div>
                                        <div className="work-card-links">
                                            <a
                                                href={card.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link-underline cursor-pointer"
                                            >
                                                {t.projects.cta}
                                            </a>
                                            {card.live ? (
                                                <a
                                                    href={card.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="link-underline cursor-pointer"
                                                >
                                                    {s.liveDemo} ↗
                                                </a>
                                            ) : null}
                                        </div>
                                    </div>
                                </article>
                            </TiltCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
