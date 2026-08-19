import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MaskedLine } from "./MaskedLine";
import { profile } from "../../data/portfolio";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.08]);
  const imgBlur = useTransform(scrollYProgress, [0, 0.7], ["blur(0px)", "blur(10px)"]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-screen flex flex-col px-6 md:px-12 pt-28 pb-8 overflow-hidden">
      <motion.div style={{ y: textY }} className="relative z-10">
        <MaskedLine delay={0.15}>
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#8E897F]">
            {profile.years} — {profile.location}
          </span>
        </MaskedLine>
        <h1 className="font-serif font-light leading-[0.9] tracking-tighter text-[#F2EFE9] mt-6 text-[clamp(3.2rem,11vw,9.5rem)]">
          <MaskedLine delay={0.3}>VINAYAK</MaskedLine>
          <MaskedLine delay={0.42}>
            <span>
              AWATI<span className="text-[#D9381E]">.</span>
            </span>
          </MaskedLine>
        </h1>
        <MaskedLine delay={0.6} className="mt-6 max-w-md">
          <span className="font-serif italic text-lg md:text-xl text-[#8E897F]">{profile.tagline}</span>
        </MaskedLine>
      </motion.div>

      <motion.div
        style={{ y: imgY }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-0 mt-12 md:mt-8 -mx-6 md:-mx-12"
      >
        <motion.img
          src={`${process.env.PUBLIC_URL || ""}/images/p01_0.jpg`}
          alt="Portfolio cover render"
          data-testid="hero-image"
          style={{ opacity: imgOpacity, scale: imgScale, filter: imgBlur }}
          className="hero-blend w-full h-auto object-cover will-change-transform"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="relative z-10 flex items-end justify-between mt-auto pt-10"
      >
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#8E897F] max-w-[220px]">
          Selected works — architecture, drawings & photographs
        </p>
        <button
          onClick={() => window.__lenis?.scrollTo("#about", { duration: 1.6 })}
          data-testid="hero-scroll-button"
          aria-label="Scroll to about"
          className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-[#F2EFE9] group"
        >
          Scroll
          <span className="grid place-items-center w-9 h-9 border border-[#F2EFE9]/25 rounded-full transition-transform duration-500 group-hover:translate-y-1">
            <ArrowDown size={14} />
          </span>
        </button>
      </motion.div>
    </section>
  );
};
