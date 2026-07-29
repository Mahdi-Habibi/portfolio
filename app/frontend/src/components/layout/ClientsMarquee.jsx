import Marquee from "../ui/Marquee";
import MotionSection from "../ui/MotionSection";

export default function ClientsMarquee({ t, tags }) {
    const s = t.sections.clients;

    return (
        <section id="clients" className="section-block section-border clients-panel">
            <div className="container-x">
                <MotionSection>
                    <p className="eyebrow">{s.eyebrow}</p>
                    <h2 className="section-title section-title-center">{s.title}</h2>
                    <p className="section-copy section-copy-center">{s.copy}</p>
                </MotionSection>
                <Marquee items={tags} className="mt-8" speed={32} />
            </div>
        </section>
    );
}
