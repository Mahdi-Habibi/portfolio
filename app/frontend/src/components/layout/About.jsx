import MotionSection from "../ui/MotionSection";
import ImageOrFallback from "../shared/ImageOrFallback";

export default function About({ t, profileImage, featuredSkills }) {
    const s = t.sections.about;

    return (
        <section id="about" className="section-block">
            <div className="container-x about-grid">
                <MotionSection className="about-photo-wrap">
                    <div className="about-photo">
                        <ImageOrFallback src={profileImage} alt={t.sections.ui.portraitAlt} fallbackText="MH" />
                    </div>
                    <div className="about-location-badge">{s.locationBadge}</div>
                </MotionSection>
                <MotionSection className="about-copy" delay={0.1}>
                    <p className="eyebrow">{s.eyebrow}</p>
                    <h2>{t.about.title}</h2>
                    <p>{t.about.body}</p>
                    <div className="skill-tags">
                        {featuredSkills.slice(0, 10).map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                </MotionSection>
            </div>
        </section>
    );
}
