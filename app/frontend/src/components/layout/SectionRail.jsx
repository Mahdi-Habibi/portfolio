export default function SectionRail({ sections, activeSection, ariaLabel = "Section navigation" }) {
    return (
        <nav className="section-rail" aria-label={ariaLabel}>
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`cursor-pointer ${activeSection === section.id ? "is-active" : ""}`}
                    aria-current={activeSection === section.id ? "true" : undefined}
                >
                    <span>{section.label}</span>
                    <span />
                </a>
            ))}
        </nav>
    );
}
