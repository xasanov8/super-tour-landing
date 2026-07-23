import { useLanguage } from "../i18n/LanguageContext.jsx";
import Icon from "./Icon.jsx";

export default function WhyUs() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <section id="nega-biz">
      <div className="container why__layout">
        <div className="why__media" data-reveal="left">
          <img src="/assets/images/destinations/uae.jpg" alt="" className="why__img" />
          <div className="why__media-badge">
            <span className="icon-badge icon-badge--gold">
              <Icon id="ic-shield" />
            </span>
            <div>
              <strong>24/7</strong>
              <span>{t.hero.stats[2].label}</span>
            </div>
          </div>
        </div>

        <div className="why__content" data-reveal="right">
          <span className="eyebrow">{w.eyebrow}</span>
          <h2>{w.heading}</h2>
          <p className="why__sub">{w.sub}</p>

          <div className="why__list">
            {w.items.map((item, i) => (
              <div className="why__row" key={i}>
                <span className="why__row-icon">
                  <Icon id={item.icon} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
