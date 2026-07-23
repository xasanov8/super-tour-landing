import { useLanguage } from "../i18n/LanguageContext.jsx";
import Icon from "./Icon.jsx";
import HeroCarousel from "./HeroCarousel.jsx";
import SearchWidget from "./SearchWidget.jsx";
import CountUpStat from "./CountUpStat.jsx";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
        <div className="hero__rays"></div>
      </div>

      <div className="container">
        <div className="hero__text hero__text--center" data-reveal="up">
          <span className="eyebrow eyebrow--light">
            <Icon id="ic-shield" className="ic ic-xs" /> {h.eyebrow}
          </span>
          <h1 className="hero__title">
            {h.titleLine1}
            <span className="accent">{h.titleAccent}</span>
          </h1>
          <p className="hero__lead">{h.lead}</p>
        </div>

        <SearchWidget />

        <HeroCarousel />

        <div className="hero__stats hero__stats--center" data-reveal="up">
          {h.stats.map((s, i) => (
            <div className="hero__stat" data-reveal="up" data-reveal-delay={i * 100} key={i}>
              <span className="hero__stat-icon">
                <Icon id={["ic-pin", "ic-family", "ic-shield"][i % 3]} />
              </span>
              <CountUpStat value={s.value} className="hero__stat-num" />
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
