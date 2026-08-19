import { motion } from "framer-motion";

export const Preloader = () => (
  <motion.div
    data-testid="intro-preloader"
    exit={{ y: "-100%" }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    className="fixed inset-0 z-[100] bg-[#080706] flex flex-col items-center justify-center gap-4"
  >
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="font-mono text-xs tracking-[0.3em] uppercase text-[#8E897F]"
    >
      Portfolio 2021—2026
    </motion.p>
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="block font-serif font-light tracking-tighter text-[#F2EFE9] text-4xl md:text-6xl"
      >
        Vinayak Awati<span className="text-[#D9381E]">.</span>
      </motion.span>
    </span>
    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="block w-24 h-px bg-[#D9381E] origin-left"
    />
  </motion.div>
);
