import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { languages } from "../../i18n/translations";

export default function Header({
    t,
    language,
    setLanguage,
    menuOpen,
    setMenuOpen,
    navVisible,
}) {
    const reduceMotion = useReducedMotion();
    const mobileLinks = t.sections?.rail?.length
        ? t.sections.rail.map((section) => ({ href: `#${section.id}`, label: section.label }))
        : t.nav;

    const mobileMenu = createPortal(
        <AnimatePresence>
            {menuOpen && (
                <>
                    <motion.button
                        type="button"
                        className="mobile-nav-backdrop cursor-pointer"
                        aria-label={t.sections.menu.close}
                        onClick={() => setMenuOpen(false)}
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={reduceMotion ? undefined : { opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.2 }}
                    />
                    <motion.div
                        id="mobile-nav-panel"
                        className="mobile-nav-panel"
                        data-lenis-prevent
                        role="dialog"
                        aria-modal="true"
                        initial={reduceMotion ? false : { opacity: 0, x: language === "fa" ? "-100%" : "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, x: language === "fa" ? "-100%" : "100%" }}
                        transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="mobile-nav-panel-header">
                            <span className="brand">Mahdi<span className="brand-accent">.</span></span>
                            <button
                                type="button"
                                className="menu-toggle menu-toggle--open cursor-pointer"
                                aria-label={t.sections.menu.close}
                                onClick={() => setMenuOpen(false)}
                            >
                                <span />
                            </button>
                        </div>
                        <nav className="mobile-nav" aria-label={t.navLabel || "Navigation"}>
                            {mobileLinks.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="cursor-pointer"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        <div className="mobile-nav-footer">
                            <div className="lang-switch" role="group" aria-label={t.languageLabel || "Language"}>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        type="button"
                                        onClick={() => setLanguage(lang.code)}
                                        className={`cursor-pointer ${language === lang.code ? "is-active" : ""}`}
                                    >
                                        {lang.code}
                                    </button>
                                ))}
                            </div>
                            <a
                                href="#contact"
                                className="btn-accent mobile-nav-cta cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            >
                                {t.sidebar.cta}
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body,
    );

    return (
        <>
            <header className={`site-header ${navVisible || menuOpen ? "site-header--visible" : "site-header--hidden"}${menuOpen ? " site-header--menu-open" : ""}`}>
                <div className="container-x header-inner">
                    <a href="#home" className="brand cursor-pointer" onClick={() => setMenuOpen(false)}>
                        Mahdi<span className="brand-accent">.</span>
                    </a>
                    <nav className="header-nav" aria-label={t.navLabel || "Navigation"}>
                        {t.nav.map((item) => (
                            <a key={item.href} href={item.href} className="link-underline cursor-pointer">
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="header-actions">
                        <div className="lang-switch" role="group" aria-label={t.languageLabel || "Language"}>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    type="button"
                                    onClick={() => setLanguage(lang.code)}
                                    className={`cursor-pointer ${language === lang.code ? "is-active" : ""}`}
                                >
                                    {lang.code}
                                </button>
                            ))}
                        </div>
                        <a href="#contact" className="btn-accent cursor-pointer">{t.sidebar.cta}</a>
                    </div>
                    <button
                        type="button"
                        className={`menu-toggle cursor-pointer ${menuOpen ? "menu-toggle--open" : ""}`}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav-panel"
                        aria-label={menuOpen ? t.sections.menu.close : t.sections.menu.open}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        <span />
                    </button>
                </div>
            </header>
            {mobileMenu}
        </>
    );
}
