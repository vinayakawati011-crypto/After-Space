import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about", id: "nav-about-link" },
  { label: "Work", href: "#work", id: "nav-work-link" },
  { label: "Contact", href: "#contact", id: "nav-contact-link" },
];

export const Nav = () => {
  const go = (e, href) => {
    e.preventDefault();
    window.__lenis?.scrollTo(href, { duration: 1.6 });
  };
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-5 mix-blend-difference text-[#F7F5F2]"
      data-testid="site-nav"
    >
      <a href="#top" onClick={(e) => go(e, "#top")} data-testid="nav-logo" className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase shrink-0">
        V. Awati — 2026
      </a>
      <nav className="flex items-center gap-4 md:gap-10">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => go(e, l.href)}
            data-testid={l.id}
            className="u-link font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
};
