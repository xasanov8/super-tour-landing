import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { HOT_DEAL_IMAGES, TELEGRAM_BOOKING_URL } from "../constants.js";
import { smoothHorizontalScrollTo } from "../utils/smoothScroll.js";
import Icon from "./Icon.jsx";

export default function HotDeals() {
  const { t } = useLanguage();
  const d = t.hotDeals;
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    smoothHorizontalScrollTo(track, track.scrollLeft + dir * track.clientWidth * 0.75);
  };

  return (
    <section className="hot-deals">
      <div className="container">
        <div className="hot-deals__head" data-reveal="up">
          <div className="section-head section-head--left">
            <span className="eyebrow">
              <Icon id="ic-tag" className="ic ic-xs" /> {d.eyebrow}
            </span>
            <h2>{d.heading}</h2>
            <p>{d.sub}</p>
          </div>
          <div className="hot-deals__nav">
            <button className="hot-deals__arrow hot-deals__arrow--prev" aria-label="Oldingi" onClick={() => scrollBy(-1)}>
              <Icon id="ic-chevron" />
            </button>
            <button className="hot-deals__arrow hot-deals__arrow--next" aria-label="Keyingi" onClick={() => scrollBy(1)}>
              <Icon id="ic-chevron" />
            </button>
          </div>
        </div>
      </div>

      <div className="hot-deals__wrap">
        <div className="hot-deals__track" ref={trackRef} data-reveal="up">
          {d.items.map((item, i) => (
            <a
              key={i}
              href={TELEGRAM_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hot-deal-card"
            >
              <img src={HOT_DEAL_IMAGES[i]} alt={item.country} className="hot-deal-card__img" />
              <div className="hot-deal-card__scrim" />
              <span className="hot-deal-card__ribbon">
                <Icon id="ic-sun" className="ic-xs" /> {d.hitLabel}
              </span>
              <div className="hot-deal-card__text">
                <strong>{item.country}</strong>
                <span>{item.tag}</span>
              </div>
              <div className="hot-deal-card__foot">
                <span className="hot-deal-card__price">{item.price}</span>
                <span className="hot-deal-card__go">
                  <Icon id="ic-arrow-right" className="ic-xs" />
                </span>
              </div>
            </a>
          ))}
          <div className="hot-deals__track-spacer" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
