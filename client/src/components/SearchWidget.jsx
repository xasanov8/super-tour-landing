import { useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { TELEGRAM_BOOKING_URL } from "../constants.js";
import Icon from "./Icon.jsx";

// The classic travel-site "floating search bar" (Kayak, Airbnb, TourRadar) —
// but since there's no live inventory to search, it composes a pre-filled
// Telegram message instead. Real inquiry, no fake booking flow.
export default function SearchWidget() {
  const { t } = useLanguage();
  const s = t.search;
  const countries = useMemo(() => [...new Set(t.destinations.items.map((d) => d.country))], [t]);

  const [dest, setDest] = useState("");
  const [people, setPeople] = useState(2);

  const href = useMemo(() => {
    const message = dest ? s.messageFor(dest, people) : s.messageAny;
    return `${TELEGRAM_BOOKING_URL}?text=${encodeURIComponent(message)}`;
  }, [dest, people, s]);

  return (
    <div className="search-widget" data-reveal="up">
      <div className="search-widget__field">
        <label htmlFor="sw-dest">
          <Icon id="ic-pin" className="ic ic-sm" /> {s.destLabel}
        </label>
        <select id="sw-dest" value={dest} onChange={(e) => setDest(e.target.value)}>
          <option value="">{s.destAny}</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="search-widget__field search-widget__field--people">
        <label htmlFor="sw-people">
          <Icon id="ic-family" className="ic ic-sm" /> {s.peopleLabel}
        </label>
        <div className="search-widget__stepper">
          <button type="button" aria-label="-" onClick={() => setPeople((v) => Math.max(1, v - 1))}>
            −
          </button>
          <span>
            {people} {s.peopleUnit}
          </span>
          <button type="button" aria-label="+" onClick={() => setPeople((v) => Math.min(20, v + 1))}>
            +
          </button>
        </div>
      </div>

      <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn--primary search-widget__cta">
        <Icon id="ic-telegram" /> {s.cta}
      </a>
    </div>
  );
}
