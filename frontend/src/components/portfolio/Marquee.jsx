import Marquee from "react-fast-marquee";

const items = ["Architecture", "Photography", "Experiments", "Creative Work"];

export const EditorialMarquee = () => (
  <div data-testid="editorial-marquee" className="border-y border-[#F2EFE9]/10 py-5 overflow-hidden">
    <Marquee speed={28} gradient={false}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-serif italic font-light text-2xl md:text-3xl text-[#F2EFE9] px-8">{item}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9381E]" />
        </span>
      ))}
    </Marquee>
  </div>
);
