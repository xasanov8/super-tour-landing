import { useEffect, useRef, useState } from "react";

const DURATION = 1400;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Renders a stat like "600+" or "24/7", animating the leading number up from
 * 0 once the element scrolls into view (runs once). Anything after the
 * leading digits (the "+", "/7", …) is appended as a static suffix.
 */
export default function CountUpStat({ value, className }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(target === null ? value : "0");
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (target === null) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(String(target));
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (done.current) return;
        if (!entries[0].isIntersecting) return;
        done.current = true;
        observer.disconnect();

        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / DURATION, 1);
          setDisplay(String(Math.round(target * easeOutCubic(progress))));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return (
    <strong className={className} ref={ref}>
      {display}
      {suffix}
    </strong>
  );
}
