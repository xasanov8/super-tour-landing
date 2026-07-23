import { useLanguage } from "../i18n/LanguageContext.jsx";
import { TELEGRAM_BOOKING_URL } from "../constants.js";
import Icon from "./Icon.jsx";

export default function Destinations() {
  const { t } = useLanguage();
  const d = t.destinations;

  return (
    <section className="destinations" id="yonalishlar">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <span className="eyebrow">{d.eyebrow}</span>
          <h2>{d.heading}</h2>
          <p>{d.sub}</p>
        </div>

        <div className="destinations__grid">
          {d.items.map((item, i) => (
            <article
              className="dest-card"
              data-reveal="up"
              data-reveal-delay={(i % 3) * 90}
              key={i}
            >
              <div className="dest-card__top">
                <div>
                  <p className="dest-card__country">{item.country}</p>
                  <p className="dest-card__tag">{item.tag}</p>
                </div>
                <span className="icon-badge icon-badge--gold icon-badge--sm">
                  <Icon id={item.icon} className="ic-sm" />
                </span>
              </div>
              <p className="dest-card__desc">{item.desc}</p>
              <div className="dest-card__foot">
                <span className="dest-card__price">{item.price}</span>
                <a
                  href={TELEGRAM_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dest-card__link"
                  aria-label={item.country}
                >
                  <Icon id="ic-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="destinations__note">{d.priceNote}</p>
      </div>
    </section>
  );
}
