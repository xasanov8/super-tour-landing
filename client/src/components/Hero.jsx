import { useLanguage } from "../i18n/LanguageContext.jsx";
import { PHONE_TEL, TELEGRAM_BOOKING_URL } from "../constants.js";
import Icon from "./Icon.jsx";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const routes = t.destinations.items.slice(0, 4);

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
        <div className="hero__rays"></div>
      </div>

      <div className="container hero__grid">
        <div className="hero__text" data-reveal="left">
          <span className="eyebrow eyebrow--light">
            <Icon id="ic-shield" className="ic ic-xs" /> {h.eyebrow}
          </span>
          <h1 className="hero__title">
            {h.titleLine1}
            <span className="accent">{h.titleAccent}</span>
          </h1>
          <p className="hero__lead">{h.lead}</p>

          <div className="hero__ctas">
            <a href={TELEGRAM_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <Icon id="ic-telegram" /> {h.ctaPrimary}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn btn--ghost-light">
              <Icon id="ic-phone" /> {h.ctaSecondary}
            </a>
          </div>

          <div className="hero__stats">
            {h.stats.map((s, i) => (
              <div className="hero__stat" key={i}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__panel" data-reveal="right" data-reveal-delay="150">
          <div className="hero__badge-float hero__badge-float--1">
            <span className="icon-badge icon-badge--sm icon-badge--gold">
              <Icon id="ic-medical" className="ic-sm" />
            </span>
            <div>
              <strong>{t.why.items[3].title}</strong>
            </div>
          </div>

          <div className="hero__card">
            <div className="hero__card-head">
              <span className="icon-badge">
                <Icon id="ic-plane" />
              </span>
              <div>
                <strong>{t.destinations.eyebrow}</strong>
                <span>{t.destinations.heading}</span>
              </div>
            </div>
            <div className="hero__route-list">
              {routes.map((r, i) => (
                <div className="hero__route" key={i}>
                  <span className="icon-badge icon-badge--gold">
                    <Icon id={r.icon} />
                  </span>
                  <div>
                    <p className="hero__route-name">{r.country}</p>
                    <p className="hero__route-desc">{r.tag}</p>
                  </div>
                  <span className="hero__route-price">{r.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__badge-float hero__badge-float--2">
            <span className="icon-badge icon-badge--sm">
              <Icon id="ic-shield" className="ic-sm" />
            </span>
            <div>
              <strong>24/7</strong>
              <span>{h.stats[2].label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
