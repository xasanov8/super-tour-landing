import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import Icon from "./Icon.jsx";

export default function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container faq__layout">
        <div className="section-head section-head--left faq__head" data-reveal="left">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2>{f.heading}</h2>
        </div>

        <div className="faq__list" data-reveal="right">
          {f.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={i}>
                <button className="faq-item__q" onClick={() => setOpen(isOpen ? -1 : i)}>
                  {item.q}
                  <Icon id="ic-chevron" className="ic" />
                </button>
                <div className="faq-item__a">
                  <div className="faq-item__a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
