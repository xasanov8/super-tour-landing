import { useLanguage } from "../i18n/LanguageContext.jsx";
import Icon from "./Icon.jsx";

export default function HowItWorks() {
  const { t } = useLanguage();
  const how = t.how;

  return (
    <section className="how" id="qanday-ishlaydi">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <span className="eyebrow eyebrow--light">{how.eyebrow}</span>
          <h2 style={{ color: "#fff" }}>{how.heading}</h2>
        </div>

        <div className="how__steps">
          {how.steps.map((step, i) => (
            <div className="how-step" data-reveal="up" data-reveal-delay={i * 100} key={i}>
              <span className="how-step__num">
                {i === how.steps.length - 1 ? <Icon id="ic-check" className="ic-sm" /> : i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
