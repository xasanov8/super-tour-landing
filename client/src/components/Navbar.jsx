import { useState } from "react";
import useNavScroll from "../hooks/useNavScroll.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { LANGUAGES } from "../i18n/translations.js";
import { PHONE_DISPLAY, PHONE_TEL, TELEGRAM_BOOKING_URL } from "../constants.js";
import Icon from "./Icon.jsx";
import LogoMark from "./LogoMark.jsx";

export default function Navbar() {
  const { scrolled } = useNavScroll();
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ["nav", scrolled ? "nav--scrolled" : "", menuOpen ? "nav--menu-open" : ""]
    .filter(Boolean)
    .join(" ");

  const links = [
    { href: "#yonalishlar", label: t.nav.links.destinations },
    { href: "#nega-biz", label: t.nav.links.why },
    { href: "#qanday-ishlaydi", label: t.nav.links.how },
    { href: "#aloqa", label: t.nav.links.contact },
  ];

  return (
    <header className={navClass}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setMenuOpen(false)}>
          <LogoMark />
          <span className="nav__brand-text">
            SUPER-TOUR.UZ
            <span>TRAVEL AGENCY</span>
          </span>
        </a>

        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}

          {/* Off-canvas only (see .nav__links-extra media query) — the phone
              number and Telegram CTA move down here below the nav links
              once the top bar switches to the burger menu. */}
          <div className="nav__links-extra">
            <a href={`tel:${PHONE_TEL}`} className="nav__phone" onClick={() => setMenuOpen(false)}>
              <Icon id="ic-phone" className="ic ic-sm" /> {PHONE_DISPLAY}
            </a>
            <a
              href={TELEGRAM_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              onClick={() => setMenuOpen(false)}
            >
              <Icon id="ic-telegram" className="ic ic-sm" /> {t.nav.cta}
            </a>
          </div>
        </nav>

        <div className="nav__actions">
          <a href={`tel:${PHONE_TEL}`} className="nav__phone nav__phone--bar">
            <Icon id="ic-phone" className="ic ic-sm" /> {PHONE_DISPLAY}
          </a>
          <div className="lang-switch" role="group" aria-label="Til / Язык">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                className={`lang-switch__btn${lang === l.code ? " is-active" : ""}`}
                onClick={() => setLang(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href={TELEGRAM_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm nav__cta--bar"
          >
            <Icon id="ic-telegram" className="ic ic-sm" /> {t.nav.cta}
          </a>
        </div>

        <button
          className="nav__burger"
          aria-label={menuOpen ? "Menyuni yopish" : "Menyu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="nav__backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true"></div>
    </header>
  );
}
