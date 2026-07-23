import { useEffect, useState } from "react";
import LogoMark from "./LogoMark.jsx";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setTimeout(() => setHidden(true), 350);
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
      return () => window.removeEventListener("load", hide);
    }
  }, []);

  return (
    <div className={`page-loader${hidden ? " is-hidden" : ""}`} aria-hidden="true">
      <LogoMark className="loader-mark" />
      <div className="loader-bar">
        <span></span>
      </div>
    </div>
  );
}
