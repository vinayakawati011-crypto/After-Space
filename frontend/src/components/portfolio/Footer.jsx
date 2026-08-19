import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./MaskedLine";
import { profile } from "../../data/portfolio";

const ContactLink = ({ href, label, value, id }) => (
  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" data-testid={id}
    className="group flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-6 py-5 border-b border-[#F2EFE9]/15">
    <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#F2EFE9]/50">{label}</span>
    <span className="font-serif text-lg md:text-3xl font-light text-[#F2EFE9] flex items-center gap-2 break-all transition-colors duration-300 group-hover:text-[#D9381E]">
      {value}
      <ArrowUpRight size={18} className="shrink-0 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
    </span>
  </a>
);

export const Footer = () => (
  <footer id="contact" data-testid="contact-section" className="bg-[#080706] text-[#F2EFE9] px-6 md:px-12 pt-32 md:pt-40 pb-10 border-t border-[#F2EFE9]/10">
    <FadeUp>
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9381E]">08 — Contact</p>
      <h2 className="font-serif font-light tracking-tighter leading-[0.9] text-[clamp(3rem,10vw,8.5rem)] mt-6">
        Let’s build<br />something<span className="text-[#D9381E]">.</span>
      </h2>
    </FadeUp>

    <FadeUp delay={0.15} className="grid grid-cols-12 gap-x-12 mt-20">
      <div className="col-span-12 md:col-span-8 md:col-start-5">
        <ContactLink id="contact-mailto-link" href={`mailto:${profile.email}`} label="Mail" value={profile.email} />
        <ContactLink id="contact-phone-link" href={`tel:${profile.phone.replace(/\s/g, "")}`} label="Phone" value={profile.phone} />
        {profile.instagram.map((ig, i) => (
          <ContactLink key={ig.handle} id={`contact-instagram-link-${i + 1}`} href={ig.url} label="Instagram" value={ig.handle} />
        ))}
        <a href="/vinayak-awati-portfolio.pdf" download data-testid="footer-pdf-download"
          className="group flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-6 py-5 border-b border-[#F2EFE9]/15">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#F2EFE9]/50">Portfolio PDF</span>
          <span className="font-serif text-lg md:text-3xl font-light text-[#F2EFE9] flex items-center gap-2 transition-colors duration-300 group-hover:text-[#D9381E]">
            Download
            <ArrowUpRight size={18} className="shrink-0 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
          </span>
        </a>
      </div>
    </FadeUp>

    <div className="flex items-center justify-between mt-24 font-mono text-xs tracking-[0.2em] uppercase text-[#F2EFE9]/40">
      <span>© 2026 Vinayak Awati</span>
      <button onClick={() => window.__lenis?.scrollTo(0, { duration: 1.8 })} data-testid="back-to-top-button" className="u-link uppercase tracking-[0.2em]">
        Back to top
      </button>
    </div>
  </footer>
);
