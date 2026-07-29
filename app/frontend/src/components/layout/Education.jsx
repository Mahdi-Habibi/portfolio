import FadeIn from "../ui/FadeIn";

export default function Education({ t }) {
    const s = t.sections.education;

    return (
        <section id="education" className="section-block section-border">
            <div className="container-x">
                <FadeIn className="section-head-row">
                    <div>
                        <p className="eyebrow">{s.eyebrow}</p>
                        <h2 className="section-title">{s.title}</h2>
                    </div>
                    <a href="#contact" className="link-underline section-link cursor-pointer">
                        {s.cta} →
                    </a>
                </FadeIn>
                <div className="writing-grid">
                    {t.education.items.map((item, idx) => (
                        <FadeIn key={item.school} delay={idx * 0.06} className="writing-card glass-panel">
                            <h3>{item.school}</h3>
                            <p>{item.degree}. {item.note}</p>
                            <span>{item.period} ↗</span>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
