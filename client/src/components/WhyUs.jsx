import { useLanguage } from "../i18n/LanguageContext.jsx";
import Icon from "./Icon.jsx";

export default function WhyUs() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <section id="nega-biz">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <span className="eyebrow">{w.eyebrow}</span>
          <h2>{w.heading}</h2>
          <p>{w.sub}</p>
        </div>

        <div className="why__grid">
          {w.items.map((item, i) => (
            <article className="why-card" data-reveal="up" data-reveal-delay={(i % 3) * 90} key={i}>
              <span className="icon-badge">
                <Icon id={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
