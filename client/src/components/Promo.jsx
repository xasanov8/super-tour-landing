import { useLanguage } from "../i18n/LanguageContext.jsx";
import { PHONE_TEL, TELEGRAM_BOOKING_URL } from "../constants.js";
import Icon from "./Icon.jsx";

export default function Promo() {
  const { t } = useLanguage();
  const p = t.promo;

  return (
    <section className="promo" id="aloqa">
      <div className="container">
        <div className="promo__inner" data-reveal="up">
          <Icon id="ic-plane" className="ic promo__plane" />
          <div className="promo__text">
            <span className="promo__badge">
              <Icon id="ic-plane" />
            </span>
            <h2>{p.heading}</h2>
            <p>{p.sub}</p>
          </div>
          <div className="promo__ctas">
            <a href={TELEGRAM_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <Icon id="ic-telegram" /> {p.ctaPrimary}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn btn--ghost-light">
              <Icon id="ic-phone" /> {p.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
