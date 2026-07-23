import { useEffect, useRef, useState } from "react";

const DURATION = 1400;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// "9 300" -> "9 300" (re-applies the space thousands-grouping while counting)
function formatGrouped(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
 * Renders a stat like "600+", "9 300+" or "24/7", animating the leading
 * number up from 0 once the element scrolls into view (runs once). Anything
 * after the leading digits (the "+", "/7", …) is appended as a static
 * suffix; a space-grouped thousand ("9 300") keeps its grouping while
 * counting.
 *
 * Deliberately NOT IntersectionObserver-based — same rAF-throttled
 * getBoundingClientRect check as useScrollReveal.js, for the same reason:
 * IO callbacks depend on the browser's paint/composite pipeline and can
 * simply never fire in some environments (background tabs, some headless
 * setups), which left this stuck at "0" instead of counting up.
 */
export default function CountUpStat({ value, className }) {
  const match = value.match(/^([\d\s]+)(.*)$/);
  const digits = match ? match[1].replace(/\s/g, "") : null;
  const target = digits ? parseInt(digits, 10) : null;
  const suffix = match ? match[2] : "";
  const grouped = match ? /\s/.test(match[1]) : false;

  const [display, setDisplay] = useState(target === null ? value : "0");
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / DURATION, 1);
        const current = Math.round(target * easeOutCubic(progress));
        setDisplay(grouped ? formatGrouped(current) : String(current));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    let ticking = false;
    const check = () => {
      ticking = false;
      if (done.current) return;
      const rect = el.getBoundingClientRect();
      const triggerLine = window.innerHeight - window.innerHeight * 0.12;
      const visible = rect.top < triggerLine && rect.bottom > 0;
      if (!visible) return;
      done.current = true;
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      animate();
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(check);
        ticking = true;
      }
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check(); // catch it if it's already on-screen at mount

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, grouped]);

  return (
    <strong className={className} ref={ref}>
      {display}
      {suffix}
    </strong>
  );
}
