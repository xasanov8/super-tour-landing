import IconSprite from "./components/IconSprite.jsx";
import PageLoader from "./components/PageLoader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Destinations from "./components/Destinations.jsx";
import HotDeals from "./components/HotDeals.jsx";
import WhyUs from "./components/WhyUs.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import FAQ from "./components/FAQ.jsx";
import Promo from "./components/Promo.jsx";
import Social from "./components/Social.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";
import useSmoothAnchors from "./hooks/useSmoothAnchors.js";

export default function App() {
  useScrollReveal();
  useSmoothAnchors();

  return (
    <>
      <IconSprite />
      <PageLoader />

      <Navbar />

      <main>
        <Hero />
        <Destinations />
        <HotDeals />
        <WhyUs />
        <HowItWorks />
        <FAQ />
        <Promo />
        <Social />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
