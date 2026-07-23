import { useEffect } from "react";

/**
 * Reveals every [data-reveal] element (adds "in-view", which the stylesheet
 * transitions in) once it scrolls close to the viewport. Uses a plain
 * rAF-throttled scroll/resize check with getBoundingClientRect rather than
 * IntersectionObserver — some browsers don't reliably fire IO callbacks for
 * elements already on-screen at observe() time, which left sections stuck
 * invisible on load.
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    let pending = Array.from(document.querySelectorAll("[data-reveal]:not(.in-view)"));
    pending.forEach((el) => {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) el.style.setProperty("--rd", delay + "ms");
    });
    if (!pending.length) return;

    let ticking = false;
    const check = () => {
      const vh = window.innerHeight;
      const triggerLine = vh - vh * 0.12;
      pending = pending.filter((el) => {
        const rect = el.getBoundingClientRect();
        const alreadyVisible = rect.top < triggerLine && rect.bottom > 0;
        if (alreadyVisible) {
          el.classList.add("in-view");
          return false;
        }
        return true;
      });
      ticking = false;
      if (!pending.length) {
        document.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(check);
        ticking = true;
      }
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
