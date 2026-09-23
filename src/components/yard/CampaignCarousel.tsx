import { useRef, useState } from "react";

export type CampaignCard = {
  slogan: string;
  arabic: string;
  note: string;
};

export function CampaignCarousel({
  cards,
  label,
}: {
  cards: CampaignCard[];
  label: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.children[i] as HTMLElement | undefined;
    if (!scroller || !card) return;
    scroller.scrollTo({ left: card.offsetLeft - scroller.offsetLeft, behavior: "smooth" });
    setActive(i);
  };

  const onScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const mid = scroller.getBoundingClientRect().left + scroller.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    Array.from(scroller.children).forEach((child, i) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const d = Math.abs(rect.left + rect.width / 2 - mid);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  const tones = [
    "bg-deep text-cream",
    "bg-orange text-cream",
    "bg-cream text-ink border border-sage",
    "bg-green text-cream",
    "bg-orange-light text-ink",
    "bg-ink text-cream",
  ];

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pt-2 pb-6"
      >
        {cards.map((c, i) => (
          <figure
            key={c.slogan}
            className={`flex w-[78vw] shrink-0 snap-center flex-col justify-between rounded-card p-7 shadow-card transition-transform duration-500 hover:-translate-y-1.5 sm:w-[380px] ${
              tones[i % tones.length]
            }`}
          >
            <blockquote>
              <p className="font-display text-[clamp(24px,4vw,34px)] leading-[1.05] font-extrabold">
                {c.slogan}
              </p>
              <p dir="rtl" className="mt-4 font-body text-lg opacity-80">
                {c.arabic}
              </p>
            </blockquote>
            <figcaption className="mt-8 font-body text-sm leading-relaxed opacity-75">
              {c.note}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        {cards.map((c, i) => (
          <button
            key={c.slogan}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to poster ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-5 bg-orange" : "w-2 bg-sage hover:bg-deep/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
