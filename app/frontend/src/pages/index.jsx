import { useEffect, useMemo, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import "../styles/global.css";
import ScrollToTop from "../components/ui/ScrollToTop";
import TechBackground from "../components/ui/TechBackground";
import CasePreviewPanel from "../components/shared/CasePreviewPanel";
import Header from "../components/layout/Header";
import SectionRail from "../components/layout/SectionRail";
import Hero from "../components/layout/Hero";
import Projects from "../components/layout/Projects";
import ClientsMarquee from "../components/layout/ClientsMarquee";
import Highlights from "../components/layout/Highlights";
import About from "../components/layout/About";
import Systems from "../components/layout/Systems";
import Experience from "../components/layout/Experience";
import Education from "../components/layout/Education";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import { useScrollBehavior } from "../hooks/useScrollBehavior";
import { assetUrl, projectImageUrl } from "../lib/assets";
import { translations } from "../i18n/translations";

export default function IndexPage() {
    const [language, setLanguage] = useState(() => {
        const saved = window.localStorage.getItem("portfolio-language");
        return saved && translations[saved] ? saved : "en";
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [casePreview, setCasePreview] = useState(null);
    const [journeyProgress, setJourneyProgress] = useState(0);
    const journeySectionRef = useRef(null);
    const t = translations[language] || translations.en;
    const { navVisible, scrollTopVisible } = useScrollBehavior();
    const profileImage = assetUrl("profile.svg");

    const featuredSkills = useMemo(() => t.about.toolbelt, [t.about.toolbelt]);
    const clientTags = useMemo(() => {
        const tags = new Map();

        t.projects.cards.forEach((card) => {
            card.stack.forEach((tag) => {
                if (!tags.has(tag)) tags.set(tag, `#project-${card.id || card.title}`);
            });
        });
        t.about.toolbelt.slice(0, 12).forEach((tag) => {
            if (!tags.has(tag)) tags.set(tag, "#systems");
        });

        return [...tags].map(([label, href]) => ({ label, href }));
    }, [t.about.toolbelt, t.projects.cards]);

    const impactCards = useMemo(
        () => [
            {
                initials: "MH",
                quote: t.about.recentWinText,
                name: t.about.recentWinTitle,
                role: t.sections.highlights.recentDelivery,
            },
            ...t.hero.stats.map((stat) => ({
                initials: stat.value.replace(/[^0-9A-Za-z+]/g, "").slice(0, 2) || "MH",
                quote: `${stat.value} — ${t.sections.highlights.statQuote}`,
                name: stat.label,
                role: t.sections.highlights.impactMetric,
            })),
        ],
        [t.about.recentWinText, t.about.recentWinTitle, t.hero.stats, t.sections.highlights],
    );

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
        window.localStorage.setItem("portfolio-language", language);
        document.title = t.siteTitle || "Mahdi Habibi | React & Django Specialist";
        document.documentElement.setAttribute("data-theme", "dark");

        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute("content", t.sections.meta.description);
    }, [language, t.siteTitle, t.sections.meta.description]);

    useEffect(() => {
        if (!menuOpen) return undefined;
        document.body.classList.add("menu-open");
        const onKeyDown = (event) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.classList.remove("menu-open");
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        const close = () => setMenuOpen(false);
        window.addEventListener("resize", close);
        return () => window.removeEventListener("resize", close);
    }, [menuOpen]);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
        );
        t.sections.rail.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) sectionObserver.observe(el);
        });
        return () => sectionObserver.disconnect();
    }, [language, t.sections.rail]);

    useEffect(() => {
        const updateJourneyProgress = () => {
            const section = journeySectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            const scrollable = section.offsetHeight - window.innerHeight * 0.35;
            if (scrollable <= 0) {
                setJourneyProgress(rect.top <= window.innerHeight * 0.5 ? 1 : 0);
                return;
            }
            const travelled = Math.min(Math.max(window.innerHeight * 0.25 - rect.top, 0), scrollable);
            setJourneyProgress(travelled / scrollable);
        };
        updateJourneyProgress();
        window.addEventListener("scroll", updateJourneyProgress, { passive: true });
        window.addEventListener("resize", updateJourneyProgress);
        return () => {
            window.removeEventListener("scroll", updateJourneyProgress);
            window.removeEventListener("resize", updateJourneyProgress);
        };
    }, [language]);

    useLenis(() => {
        const section = journeySectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight * 0.35;
        if (scrollable <= 0) {
            setJourneyProgress(rect.top <= window.innerHeight * 0.5 ? 1 : 0);
            return;
        }
        const travelled = Math.min(Math.max(window.innerHeight * 0.25 - rect.top, 0), scrollable);
        setJourneyProgress(travelled / scrollable);
    }, [language]);

    const showCasePreview = (card, idx, event) => {
        if (window.matchMedia("(max-width: 1024px)").matches) return;
        const offset = 24;
        setCasePreview({
            title: card.title,
            result: card.result,
            image: projectImageUrl(card.image),
            index: String(idx + 1).padStart(2, "0"),
            x: Math.min(event.clientX + offset, window.innerWidth - 340),
            y: Math.min(event.clientY + offset, window.innerHeight - 280),
        });
    };

    const moveCasePreview = (event) => {
        setCasePreview((prev) => {
            if (!prev) return prev;
            const offset = 24;
            return {
                ...prev,
                x: Math.min(event.clientX + offset, window.innerWidth - 340),
                y: Math.min(event.clientY + offset, window.innerHeight - 280),
            };
        });
    };

    const hideCasePreview = () => setCasePreview(null);

    return (
        <div className="grain">
            <TechBackground />
            <Header
                t={t}
                language={language}
                setLanguage={setLanguage}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                navVisible={navVisible}
            />
            <SectionRail
                sections={t.sections.rail}
                activeSection={activeSection}
                ariaLabel={t.sections.ui.sectionNavigation}
            />

            <main onMouseMove={moveCasePreview}>
                <Hero t={t} profileImage={profileImage} />
                <Projects t={t} onShowPreview={showCasePreview} onHidePreview={hideCasePreview} />
                <ClientsMarquee t={t} tags={clientTags} />
                <Highlights t={t} impactCards={impactCards} />
                <About t={t} profileImage={profileImage} featuredSkills={featuredSkills} />
                <Systems t={t} />
                <Experience t={t} journeySectionRef={journeySectionRef} journeyProgress={journeyProgress} />
                <Education t={t} />
                <Contact t={t} />
            </main>

            <Footer t={t} language={language} setLanguage={setLanguage} />
            <ScrollToTop visible={scrollTopVisible} label={t.sections.ui.scrollTop} />
            <CasePreviewPanel preview={casePreview} />
        </div>
    );
}
