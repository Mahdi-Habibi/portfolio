import { useState } from "react";
import { Check, Code2, Copy, Link2, Mail, Phone } from "lucide-react";
import MotionSection from "../ui/MotionSection";

const iconMap = {
    Email: Mail,
    Correo: Mail,
    "ایمیل": Mail,
    Phone: Phone,
    Teléfono: Phone,
    "تلفن": Phone,
    LinkedIn: Link2,
    "لینکدین": Link2,
    GitHub: Code2,
    "گیت‌هاب": Code2,
};

export default function Contact({ t }) {
    const s = t.sections.contact;
    const [copied, setCopied] = useState(false);
    const emailLink = t.contact.links.find((l) => l.href.startsWith("mailto:"));

    const copyEmail = async () => {
        if (!emailLink) return;
        const email = emailLink.href.replace("mailto:", "");
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section-block section-border contact-section">
            <div className="container-x">
                <MotionSection>
                    <p className="eyebrow">{s.eyebrow}</p>
                    <h2 className="section-title">{t.contact.heading}</h2>
                    <p className="section-copy">{t.contact.body}</p>
                    {emailLink && (
                        <button
                            type="button"
                            onClick={copyEmail}
                            className="btn-accent cursor-pointer mt-6"
                            aria-label={t.sections.ui.copyEmail}
                        >
                            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                            {copied ? t.sections.ui.copied : emailLink.label}
                        </button>
                    )}
                    <div className="contact-links">
                        {t.contact.links.map((link) => {
                            const Icon = iconMap[link.label] || Link2;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="cursor-pointer"
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={16} aria-hidden="true" />
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                </MotionSection>
            </div>
        </section>
    );
}
