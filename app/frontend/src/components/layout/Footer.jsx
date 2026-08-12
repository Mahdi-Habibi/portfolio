export default function Footer({ t }) {
    return (
        <footer id="footer" className="site-footer">
            <div className="container-x footer-row">
                <p>{t.footer?.summary || t.sidebar.summary}</p>
            </div>
        </footer>
    );
}
