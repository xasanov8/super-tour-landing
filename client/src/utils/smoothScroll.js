// Manual rAF-driven smooth scroll — native scrollTo({behavior:"smooth"}) gets
// silently downgraded to an instant jump on some browsers when the OS has a
// "reduce motion" setting on, which made anchor nav links and the
// back-to-top button feel like they teleported. Driving it frame-by-frame
// ourselves sidesteps that.

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

let activeRaf = null;

export function smoothScrollTo(targetY, duration) {
  const clampedTarget = Math.max(0, targetY);
  const startY = window.scrollY || document.documentElement.scrollTop;
  const diff = clampedTarget - startY;

  if (activeRaf) cancelAnimationFrame(activeRaf);
  if (Math.abs(diff) < 2) return;

  const dur = duration ?? Math.min(1100, Math.max(450, Math.abs(diff) * 0.6));
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / dur, 1);
    const eased = easeInOutCubic(progress);
    // behavior:"auto" avoids fighting a CSS scroll-behavior:smooth on <html>,
    // which would otherwise try to smooth-animate each intermediate frame.
    window.scrollTo({ top: startY + diff * eased, left: 0, behavior: "auto" });
    if (progress < 1) {
      activeRaf = requestAnimationFrame(step);
    } else {
      activeRaf = null;
    }
  }
  activeRaf = requestAnimationFrame(step);
}

/** Scrolls to an element by id, offset to clear the fixed navbar. */
export function scrollToId(id, offset = 84) {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const targetY = rect.top + (window.scrollY || document.documentElement.scrollTop) - offset;
  smoothScrollTo(targetY);
}

// One in-flight animation per scrollable element (e.g. the hot-deals strip),
// so clicking an arrow again mid-animation smoothly retargets instead of
// stacking competing rAF loops.
const activeHRaf = new WeakMap();

/**
 * Same manual rAF approach as smoothScrollTo, but for an element's
 * horizontal scrollLeft.
 *
 * CSS scroll-snap (used on horizontally-scrolling strips like hot-deals)
 * fights a JS-driven scrollLeft animation — the browser keeps trying to
 * snap the track back to the nearest card on every intermediate frame,
 * which turned the glide into a stuttery tug-of-war. Suspending
 * scroll-snap-type for the duration of our own animation, then restoring
 * it once we land, avoids that.
 */
export function smoothHorizontalScrollTo(el, targetX, duration) {
  const clampedTarget = Math.max(0, Math.min(targetX, el.scrollWidth - el.clientWidth));
  const startX = el.scrollLeft;
  const diff = clampedTarget - startX;

  const existing = activeHRaf.get(el);
  if (existing) {
    cancelAnimationFrame(existing.raf);
  } else {
    el.dataset.prevScrollSnap = el.style.scrollSnapType || "";
  }
  el.style.scrollSnapType = "none";

  if (Math.abs(diff) < 2) {
    el.style.scrollSnapType = el.dataset.prevScrollSnap;
    delete el.dataset.prevScrollSnap;
    activeHRaf.delete(el);
    return;
  }

  const dur = duration ?? Math.min(900, Math.max(400, Math.abs(diff) * 0.6));
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / dur, 1);
    const eased = easeInOutCubic(progress);
    el.scrollLeft = startX + diff * eased;
    if (progress < 1) {
      activeHRaf.set(el, { raf: requestAnimationFrame(step) });
    } else {
      el.style.scrollSnapType = el.dataset.prevScrollSnap;
      delete el.dataset.prevScrollSnap;
      activeHRaf.delete(el);
    }
  }
  activeHRaf.set(el, { raf: requestAnimationFrame(step) });
}
