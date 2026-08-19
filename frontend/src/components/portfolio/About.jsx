import { FadeUp } from "./MaskedLine";
import { profile } from "../../data/portfolio";

const Label = ({ children }) => (
  <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9381E] mb-4">{children}</p>
);

const Row = ({ title, place, years }) => (
  <div className="flex items-baseline justify-between gap-6 py-4 border-b border-[#F2EFE9]/10">
    <div>
      <p className="font-serif text-xl md:text-2xl text-[#F2EFE9]">{title}</p>
      {place && <p className="text-sm text-[#8E897F] mt-1">{place}</p>}
    </div>
    {years && <span className="font-mono text-xs text-[#8E897F] shrink-0">{years}</span>}
  </div>
);

export const About = () => (
  <section id="about" data-testid="about-section" className="px-6 md:px-12 py-32 md:py-40">
    <div className="grid grid-cols-12 gap-y-16 md:gap-x-12">
      <FadeUp className="col-span-12 md:col-span-7">
        <Label>01 — Manifesto</Label>
        <p className="font-serif font-light text-3xl md:text-5xl leading-[1.15] tracking-tight text-[#F2EFE9]">
          “{profile.bioLead}”
        </p>
        <p className="text-base leading-relaxed text-[#8E897F] mt-12 max-w-lg">{profile.bioBody}</p>
      </FadeUp>
      <FadeUp delay={0.15} className="col-span-8 col-start-3 md:col-span-4 md:col-start-9 md:self-end">
        <img src="/images/portrait.jpg" alt="Vinayak Awati portrait" data-testid="about-portrait" className="portrait-blend w-full h-auto grayscale" loading="lazy" />
        <p className="font-serif italic text-xl text-[#F2EFE9] mt-4" data-testid="about-portrait-caption">Vinayak</p>
      </FadeUp>
    </div>

    <div className="grid grid-cols-12 gap-y-16 md:gap-x-12 mt-32">
      <FadeUp className="col-span-12 md:col-span-5">
        <Label>02 — Education</Label>
        {profile.education.map((e, i) => <Row key={i} {...e} />)}
      </FadeUp>
      <FadeUp delay={0.1} className="col-span-12 md:col-span-5 md:col-start-8">
        <Label>03 — Experience & Leads</Label>
        {profile.experience.map((e, i) => <Row key={i} {...e} />)}
      </FadeUp>

      <FadeUp className="col-span-12 md:col-span-5">
        <Label>04 — Software</Label>
        {profile.software.map((s, i) => (
          <div key={i} className="py-4 border-b border-[#F2EFE9]/10">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#8E897F]">{s.group}</p>
            <p className="font-serif text-xl md:text-2xl text-[#F2EFE9] mt-1">{s.tools}</p>
          </div>
        ))}
      </FadeUp>
      <FadeUp delay={0.1} className="col-span-12 md:col-span-5 md:col-start-8">
        <Label>05 — Capabilities</Label>
        {profile.capabilities.map((c, i) => (
          <p key={i} className="font-serif text-xl md:text-2xl text-[#F2EFE9] py-4 border-b border-[#F2EFE9]/10">{c}</p>
        ))}
        <div className="mt-10">
          <Label>06 — Competitions</Label>
          {profile.competitions.map((c, i) => (
            <p key={i} className="font-mono text-xs tracking-[0.15em] uppercase text-[#8E897F] py-3 border-b border-[#F2EFE9]/10">{c}</p>
          ))}
        </div>
      </FadeUp>

      <FadeUp className="col-span-12 mt-8">
        <Label>07 — Interests</Label>
        <p className="font-serif font-light text-2xl md:text-4xl tracking-tight text-[#F2EFE9]">
          {profile.interests.map((it, i) => (
            <span key={i}>
              {it}
              {i < profile.interests.length - 1 && <span className="text-[#D9381E]"> · </span>}
            </span>
          ))}
        </p>
      </FadeUp>
    </div>
  </section>
);
