import { useLanguage } from "../i18n/LanguageContext.jsx";
import {
  ADDRESS,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TELEGRAM_BOOKING_URL,
  TELEGRAM_CHANNEL_URL,
} from "../constants.js";
import Icon from "./Icon.jsx";
import LogoMark from "./LogoMark.jsx";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const nav = t.nav.links;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__blurb">
          <div className="footer__brand">
            <LogoMark />
            <span className="footer__brand-text">SUPER-TOUR.UZ</span>
          </div>
          <p>
            {f.blurbLine1}
            <br />
            {f.blurbLine2}
          </p>
          <div className="footer__socials">
            <a href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Icon id="ic-telegram" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon id="ic-instagram" />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>{f.colNav}</h4>
          <a href="#yonalishlar">{nav.destinations}</a>
          <a href="#nega-biz">{nav.why}</a>
          <a href="#qanday-ishlaydi">{nav.how}</a>
        </div>

        <div className="footer__col">
          <h4>{f.colContact}</h4>
          <a href={`tel:${PHONE_TEL}`}>
            <Icon id="ic-phone" /> {PHONE_DISPLAY}
          </a>
          <span className="footer__row">
            <Icon id="ic-pin" /> {ADDRESS}
          </span>
          <a href={TELEGRAM_BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Icon id="ic-telegram" /> Telegram
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Super Tour. {f.copyright}</p>
      </div>
    </footer>
  );
}
