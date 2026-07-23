import { useEffect } from "react";
import { smoothScrollTo, scrollToId } from "../utils/smoothScroll.js";

/**
 * Delegated click handler for every in-page `#anchor` link (nav, footer,
 * CTA buttons) so they animate with our own smoothScrollTo instead of
 * native CSS scroll-behavior, which some browsers disable under an OS
 * reduce-motion setting.
 */
export default function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const id = hash.slice(1);
      if (id === "top") {
        e.preventDefault();
        smoothScrollTo(0);
        return;
      }
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      scrollToId(id);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
