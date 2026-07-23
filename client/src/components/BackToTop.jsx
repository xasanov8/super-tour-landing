import useNavScroll from "../hooks/useNavScroll.js";
import { smoothScrollTo } from "../utils/smoothScroll.js";

export default function BackToTop() {
  const { backTopVisible } = useNavScroll();

  return (
    <button
      className={`back-top${backTopVisible ? " is-visible" : ""}`}
      aria-label="Наверх"
      onClick={() => smoothScrollTo(0)}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
