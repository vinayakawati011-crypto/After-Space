import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowLeft, ArrowRight, ZoomIn, ZoomOut } from "lucide-react";
import { FadeUp } from "./MaskedLine";
import { projects } from "../../data/portfolio";

const Lightbox = ({ sheets, index, onClose, onNav }) => {
  const [zoom, setZoom] = useState(1);
  useEffect(() => setZoom(1), [index]);

  useEffect(() => {
    window.__lenis?.stop();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNav]);

  const zoomBy = (d) => setZoom((z) => Math.min(4, Math.max(1, +(z + d).toFixed(2))));

  return (
    <motion.div
      data-testid="sheet-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[80] bg-[#0D0C0A]/95 backdrop-blur-md flex items-center justify-center p-6 md:p-14"
      onClick={onClose}
      onWheel={(e) => zoomBy(e.deltaY > 0 ? -0.4 : 0.4)}
    >
      <button data-testid="lightbox-close" aria-label="Close viewer" onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-10 z-10 grid place-items-center w-11 h-11 border border-[#F2EFE9]/25 rounded-full text-[#F2EFE9] transition-colors duration-300 hover:border-[#D9381E] hover:text-[#D9381E]">
        <X size={16} />
      </button>
      <span className="absolute top-8 left-6 md:left-10 font-mono text-xs tracking-[0.25em] uppercase text-[#8E897F]">
        Sheet {index + 1} / {sheets.length}
      </span>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <button data-testid="lightbox-zoom-out" aria-label="Zoom out" onClick={() => zoomBy(-0.5)} disabled={zoom <= 1}
          className="grid place-items-center w-11 h-11 border border-[#F2EFE9]/25 rounded-full text-[#F2EFE9] transition-colors duration-300 hover:border-[#D9381E] hover:text-[#D9381E] disabled:opacity-30 disabled:hover:border-[#F2EFE9]/25 disabled:hover:text-[#F2EFE9]">
          <ZoomOut size={16} />
        </button>
        <span data-testid="lightbox-zoom-level" className="font-mono text-xs tracking-[0.2em] text-[#8E897F] w-14 text-center">{Math.round(zoom * 100)}%</span>
        <button data-testid="lightbox-zoom-in" aria-label="Zoom in" onClick={() => zoomBy(0.5)} disabled={zoom >= 4}
          className="grid place-items-center w-11 h-11 border border-[#F2EFE9]/25 rounded-full text-[#F2EFE9] transition-colors duration-300 hover:border-[#D9381E] hover:text-[#D9381E] disabled:opacity-30 disabled:hover:border-[#F2EFE9]/25 disabled:hover:text-[#F2EFE9]">
          <ZoomIn size={16} />
        </button>
      </div>
      {sheets.length > 1 && (
        <>
          <button data-testid="lightbox-prev" aria-label="Previous sheet" onClick={(e) => { e.stopPropagation(); onNav(-1); }}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-11 h-11 border border-[#F2EFE9]/25 rounded-full text-[#F2EFE9] transition-colors duration-300 hover:border-[#D9381E] hover:text-[#D9381E]">
            <ArrowLeft size={16} />
          </button>
          <button data-testid="lightbox-next" aria-label="Next sheet" onClick={(e) => { e.stopPropagation(); onNav(1); }}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-11 h-11 border border-[#F2EFE9]/25 rounded-full text-[#F2EFE9] transition-colors duration-300 hover:border-[#D9381E] hover:text-[#D9381E]">
            <ArrowRight size={16} />
          </button>
        </>
      )}
      <motion.img
        key={sheets[index]}
        src={sheets[index]}
        alt={`Sheet ${index + 1}`}
        data-testid="lightbox-image"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: zoom, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        drag={zoom > 1 ? true : "x"}
        dragConstraints={zoom > 1 ? { left: -600, right: 600, top: -450, bottom: 450 } : { left: 0, right: 0 }}
        dragElastic={0.12}
        onDragEnd={(e, info) => {
          if (zoom === 1 && sheets.length > 1) {
            if (info.offset.x < -80) onNav(1);
            else if (info.offset.x > 80) onNav(-1);
          }
        }}
        className={`max-w-full max-h-full object-contain touch-pan-y ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-grab"}`}
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={() => setZoom(zoom > 1 ? 1 : 2.5)}
      />
    </motion.div>
  );
};

const Project = ({ p, flip }) => {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const sheets = p.plates;
  const nav = (dir) => setLightbox((i) => (i + dir + sheets.length) % sheets.length);

  return (
    <article data-testid={`project-${p.id}`} className="py-24 md:py-32 border-t border-[#F2EFE9]/10 first:border-t-0">
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-end">
        <FadeUp className={`col-span-12 md:col-span-7 ${flip ? "md:col-start-6" : ""}`}>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9381E]">Project {p.index}</p>
          <h3 className="font-serif font-light tracking-tighter leading-[0.95] text-[#F2EFE9] text-[clamp(2.6rem,7vw,6rem)] mt-3">
            {p.title}
          </h3>
          <p className="font-serif italic text-lg md:text-xl text-[#8E897F] mt-4 max-w-xl">{p.subtitle}</p>
        </FadeUp>
        <FadeUp delay={0.12} className={`col-span-12 md:col-span-4 ${flip ? "md:col-start-1 md:row-start-1 md:text-left" : "md:col-start-9 md:text-right"}`}>
          <dl className="space-y-3 font-mono text-xs tracking-[0.15em] uppercase">
            <div><dt className="text-[#8E897F]">Location</dt><dd className="text-[#F2EFE9] mt-1">{p.location}</dd></div>
            <div><dt className="text-[#8E897F]">Category</dt><dd className="text-[#F2EFE9] mt-1">{p.category}</dd></div>
          </dl>
          <button
            onClick={() => setOpen(!open)}
            data-testid={`project-toggle-${p.id}`}
            aria-expanded={open}
            className="inline-flex items-center gap-3 mt-8 font-mono text-xs tracking-[0.2em] uppercase text-[#F2EFE9] border border-[#F2EFE9]/20 px-5 py-3 transition-colors duration-300 hover:border-[#D9381E] cursor-pointer"
          >
            {open ? "Close sheets" : `View ${sheets.length} sheet${sheets.length > 1 ? "s" : ""}`}
            <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="grid place-items-center">
              <Plus size={14} className="text-[#D9381E]" />
            </motion.span>
          </button>
        </FadeUp>
        <FadeUp delay={0.18} className="col-span-12 md:col-span-6">
          <p className="text-base leading-relaxed text-[#8E897F]">{p.description}</p>
        </FadeUp>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="sheets"
            data-testid={`project-sheets-${p.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex gap-4 md:gap-5 pt-12 overflow-x-auto pb-4" data-testid={`sheet-row-${p.id}`}>
              {sheets.map((src, i) => (
                <motion.button
                  key={src}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: Math.min(i * 0.07, 0.4), ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setLightbox(i)}
                  data-testid={`sheet-thumb-${p.id}-${i + 1}`}
                  className="plate-frame group shrink-0 w-52 md:w-64 text-left cursor-pointer"
                >
                  <img src={src} alt={`${p.title} sheet ${i + 1}`} loading="lazy"
                    className="plate-img w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <span className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#8E897F] mt-3 transition-colors duration-300 group-hover:text-[#D9381E]">
                    Sheet {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox sheets={sheets} index={lightbox} onClose={() => setLightbox(null)} onNav={nav} />
        )}
      </AnimatePresence>
    </article>
  );
};

export const Work = () => (
  <section id="work" data-testid="work-section" className="px-4 md:px-6 py-32 md:py-40 bg-[#12100E]">
    <FadeUp className="mb-10 flex items-baseline justify-between px-2 md:px-6">
      <h2 className="font-serif font-light tracking-tighter text-[#F2EFE9] text-[clamp(2.6rem,8vw,7rem)] leading-none">
        Selected Work
      </h2>
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#8E897F] hidden md:block">06 Projects — 2021/2026</span>
    </FadeUp>
    {projects.map((p, i) => <Project key={p.id} p={p} flip={i % 2 === 1} />)}
  </section>
);
