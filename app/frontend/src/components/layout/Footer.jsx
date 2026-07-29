import { languages } from "../../i18n/translations";

export default function Footer({ t, language, setLanguage }) {
    return (
        <footer id="footer" className="site-footer">
            <div className="container-x footer-row">
                <p>{t.footer?.summary || t.sidebar.summary}</p>
                <div className="footer-actions">
                    <div className="lang-switch" role="group" aria-label={t.languageLabel}>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                type="button"
                                onClick={() => setLanguage(lang.code)}
                                className={language === lang.code ? "is-active" : ""}
                            >
                                {lang.code}
                            </button>
                        ))}
                    </div>
                    <a href="#home" className="link-underline cursor-pointer">{t.sections.footer.backToTop}</a>
                </div>
            </div>
        </footer>
    );
}
