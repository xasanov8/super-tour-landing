import { useEffect, useState } from "react";

/** Tracks page scroll to drive the navbar's frosted state and the back-to-top button. */
export default function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [backTopVisible, setBackTopVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 40);
      setBackTopVisible(y > 700);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, backTopVisible };
}
