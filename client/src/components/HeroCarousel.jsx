import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { DESTINATION_GRADIENTS, DESTINATION_IMAGES } from "../constants.js";
import Icon from "./Icon.jsx";

export default function HeroCarousel() {
  const { t } = useLanguage();
  const slides = t.destinations.items.slice(0, 6);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (i) => setActive((i + slides.length) % slides.length);

  return (
    <div className="hero-carousel" data-reveal="up">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-carousel__slide${i === active ? " is-active" : ""}`}
          style={{ background: DESTINATION_GRADIENTS[i % DESTINATION_GRADIENTS.length] }}
        >
          {DESTINATION_IMAGES[i] && (
            <img src={DESTINATION_IMAGES[i]} alt={s.country} className="hero-carousel__img" />
          )}
          <div className="hero-carousel__scrim" />

          <span className="hero-carousel__eyebrow">
            <Icon id="ic-plane" className="ic ic-xs" /> {t.destinations.eyebrow}
          </span>

          <span className="hero-carousel__price">{s.price}</span>

          <div className="hero-carousel__label">
            <strong>{s.country}</strong>
            <span>{s.tag}</span>
          </div>
        </div>
      ))}

      <button className="hero-carousel__arrow hero-carousel__arrow--prev" aria-label="Oldingi" onClick={() => go(active - 1)}>
        <Icon id="ic-chevron" />
      </button>
      <button className="hero-carousel__arrow hero-carousel__arrow--next" aria-label="Keyingi" onClick={() => go(active + 1)}>
        <Icon id="ic-chevron" />
      </button>

      <div className="hero-carousel__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-carousel__dot${i === active ? " is-active" : ""}`}
            aria-label={`${i + 1}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

      <div className="hero-carousel__bar" />
    </div>
  );
}
