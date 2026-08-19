import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import "@/App.css";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { EditorialMarquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Footer } from "@/components/portfolio/Footer";
import { Preloader } from "@/components/portfolio/Preloader";

function App() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    const t = setTimeout(() => setIntro(false), 1700);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="grain bg-[#0D0C0A] text-[#F2EFE9] antialiased" data-testid="portfolio-app">
      <AnimatePresence>{intro && <Preloader />}</AnimatePresence>
      {!intro && (
        <>
          <Nav />
          <main>
            <Hero />
            <EditorialMarquee />
            <About />
            <Work />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
