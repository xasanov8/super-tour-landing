import { useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { DESTINATION_IMAGES, TELEGRAM_BOOKING_URL } from "../constants.js";
import Icon from "./Icon.jsx";

export default function Destinations() {
  const { t } = useLanguage();
  const d = t.destinations;
  const [filter, setFilter] = useState("all");

  const countries = useMemo(() => [...new Set(d.items.map((item) => item.country))], [d.items]);
  const visible = filter === "all" ? d.items : d.items.filter((item) => item.country === filter);

  return (
    <section className="destinations" id="yonalishlar">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <span className="eyebrow">{d.eyebrow}</span>
          <h2>{d.heading}</h2>
          <p>{d.sub}</p>
        </div>

        <div className="dest-filters" data-reveal="up">
          <button
            className={`dest-filter${filter === "all" ? " is-active" : ""}`}
            onClick={() => setFilter("all")}
          >
            {d.filterAll}
          </button>
          {countries.map((c) => (
            <button
              key={c}
              className={`dest-filter${filter === c ? " is-active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="destinations__grid">
          {visible.map((item, i) => {
            const originalIndex = d.items.indexOf(item);
            return (
              <article className="dest-card" data-reveal="up" data-reveal-delay={(i % 3) * 90} key={originalIndex}>
                <div className="dest-card__media">
                  {DESTINATION_IMAGES[originalIndex] && (
                    <img src={DESTINATION_IMAGES[originalIndex]} alt={item.country} className="dest-card__img" />
                  )}
                  <div className="dest-card__scrim" />
                  <span className="dest-card__tag">{item.tag}</span>
                  <div className="dest-card__media-text">
                    <strong>{item.country}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
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
            );
          })}
        </div>

        <p className="destinations__note">{d.priceNote}</p>
      </div>
    </section>
  );
}
