import { useLanguage } from "../i18n/LanguageContext.jsx";
import { DESTINATION_IMAGES, INSTAGRAM_URL, SOCIAL_STATS, TELEGRAM_CHANNEL_URL } from "../constants.js";
import Icon from "./Icon.jsx";
import CountUpStat from "./CountUpStat.jsx";

export default function Social() {
  const { t } = useLanguage();
  const s = t.social;

  return (
    <section className="social">
      <div className="social__mosaic" aria-hidden="true">
        {DESTINATION_IMAGES.map((src, i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>
      <div className="social__scrim" aria-hidden="true" />

      <div className="container social__layout">
        <div className="social__text" data-reveal="left">
          <span className="eyebrow eyebrow--light">{s.eyebrow}</span>
          <h2>{s.heading}</h2>
          <p>{s.sub}</p>
        </div>

        <div className="social__cards" data-reveal="right">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-card">
            <span className="icon-badge icon-badge--gold">
              <Icon id="ic-instagram" />
            </span>
            <div className="social-card__num">
              <CountUpStat value={SOCIAL_STATS.instagramFollowers} />
              <span>{s.instagramLabel}</span>
            </div>
            <span className="social-card__cta">
              {s.ctaInstagram} <Icon id="ic-arrow-right" className="ic-xs" />
            </span>
          </a>

          <a href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="social-card">
            <span className="icon-badge">
              <Icon id="ic-telegram" />
            </span>
            <div className="social-card__num">
              <CountUpStat value={SOCIAL_STATS.telegramSubscribers} />
              <span>{s.telegramLabel}</span>
            </div>
            <span className="social-card__cta">
              {s.ctaTelegram} <Icon id="ic-arrow-right" className="ic-xs" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
