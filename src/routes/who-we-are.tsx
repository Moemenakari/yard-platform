import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/yard/Eyebrow";

import heroPhoto from "@/assets/yard-hero-new.png.asset.json";
import trainingPhoto from "@/assets/yard-training.jpg.asset.json";
import marchPhoto from "@/assets/yard-hero.jpg.asset.json";
import shiftLogo from "@/assets/shift-logo.png.asset.json";
import yardLogo from "@/assets/yard-logo.png.asset.json";

export const Route = createFileRoute("/who-we-are")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "About YARD & SHiFT: Youth platform in Tripoli, Lebanon" },
      {
        name: "description",
        content:
          "YARD is a youth platform by SHiFT Social Innovation Hub, operating as the Global Platform in Tripoli within ActionAid Arab Region's youth program.",
      },
      { property: "og:title", content: "About YARD & SHiFT: Youth platform in Tripoli" },
      {
        property: "og:description",
        content:
          "YARD is a youth platform by SHiFT Social Innovation Hub, operating as the Global Platform in Tripoli within ActionAid Arab Region's youth program.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/who-we-are" }],
  }),
  component: WhoWeAre,
});

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

function Reveal({
  children,
  delay = 0,
  threshold = 0.2,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>(threshold);
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: seen ? 1 : 0,
        transform: reduced ? undefined : seen ? "translateY(0)" : "translateY(24px)",
        transitionDelay: reduced ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const chapters = [
  {
    n: "01",
    title: "SHiFT trains",
    body: "Young people build concrete skills, leadership, advocacy, debate, digital media, climate literacy and mental health support, through hands-on workshops and mentorship.",
    caption: "Digital advocacy training, youth cohort",
    large: { src: trainingPhoto.url, alt: "Young people in a YARD training workshop in Tripoli" },
    small: { label: "Workshop session" },
  },
  {
    n: "02",
    title: "YARD leads",
    body: "Trained youth design and run their own campaigns and community initiatives across Tripoli and North Lebanon. They hold the plan, not just the participation.",
    caption: "Planning sessions and local alliances",
    large: {
      src: marchPhoto.url,
      alt: "YARD youth marching with handmade climate justice placards in Tripoli",
    },
    small: { label: "Campaign notes" },
  },
  {
    n: "03",
    title: "Communities change",
    body: "Those campaigns move into rooms where decisions are made: roundtables, local authorities and policy spaces, so youth priorities land in real commitments.",
    caption: "YOUTH-LED policy advocacy, Tripoli",
    large: {
      src: heroPhoto.url,
      alt: "Young advocates gathered on a street in Tripoli holding campaign signs",
    },
    small: { label: "Podium moment" },
  },
];

function WhoWeAre() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden bg-deep md:h-[62vh] md:min-h-[420px]">
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 md:px-8 md:pb-16">
          <h1 className="animate-fade-in max-w-4xl text-3xl leading-[0.95] text-cream sm:text-4xl md:text-6xl">
            A safe space where YOUTH-LED change happens
          </h1>
        </div>
      </section>

      {/* 1. The origin */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex flex-col items-center">
          <Eyebrow>The origin</Eyebrow>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          {[
            {
              logo: shiftLogo.url,
              logoAlt: "SHiFT Social Innovation Hub logo",
              accent: "bg-deep",
              title: "SHiFT Social Innovation Hub, Tripoli, Lebanon",
              paras: [
                "SHiFT was founded in Qobbeh, Tripoli, and works across North Lebanon and Beirut for economic revival and social cohesion in post-conflict and vulnerable communities.",
                "Its seven core programs, Tatweer, Tamteen, Tasaloh, Tadamon, Taalam YARD and SHADDA, are backed by incubation labs, a social kitchen, a cinema, and co-working spaces.",
              ],
            },
            {
              logo: yardLogo.url,
              logoAlt: "YARD logo",
              accent: "bg-green",
              title: "YARD, the Global Platform in Tripoli",
              paras: [
                "YARD (Youth Advocating for their Rights and Development), is a program under SHiFT . We bring young people from across Lebanon into a safe space to learn, organise and act. Everything we do is YOUTH-LED.",
                "Our members build real skills, launch campaigns on the issues that matter to them, and grow those campaigns into movements that drive community change. Together, they shift power and influence the decisions policy makers make about their lives.",
                "\n",
              ],
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 150} threshold={0.25} className="flex-1">
              <article
                className="relative h-full overflow-hidden rounded-card border bg-cream px-6 py-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl md:px-11 md:py-12"
                style={{
                  borderColor: "color-mix(in oklab, var(--color-sage) 90%, transparent)",
                  boxShadow: "0 18px 40px -24px color-mix(in oklab, var(--color-ink) 30%, transparent)",
                }}
              >
                <span className={`absolute inset-x-0 top-0 h-[3px] ${card.accent}`} />
                <img
                  src={card.logo}
                  alt={card.logoAlt}
                  loading="lazy"
                  className="mx-auto h-14 object-contain md:h-20"
                />
                <h2 className="mt-7 text-[22px] leading-tight">{card.title}</h2>
                {card.paras.map((p) => (
                  <p key={p} className="mt-3 font-body text-base leading-relaxed text-ink/85">
                    {p}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. How change happens */}
      <HowChangeHappens reduced={reduced} />

      {/* Partnership CTA */}
      <section className="bg-deep py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <Reveal threshold={0.2}>
            <h2 className="text-3xl leading-tight text-cream md:text-5xl">
              Grow this impact with YARD
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-cream/80 md:text-lg">
              Partner with us to train more youth, launch more campaigns, and reach more communities across Lebanon.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/partner-with-us"
                className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-3.5 font-body text-sm font-semibold text-cream transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange/50"
              >
                Partner with us
              </a>
              <a
                href="mailto:info@shiftsih.org?subject=Partnership%20with%20YARD"
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 font-body text-sm font-semibold text-cream transition-colors duration-200 hover:bg-cream/10 focus:outline-none focus:ring-2 focus:ring-cream/30"
              >
                Contact us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function HowChangeHappens({ reduced }: { reduced: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0.5);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const p = (window.innerHeight - rect.top) / total;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  return (
    <section ref={sectionRef} className="bg-sage py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl">
          <Eyebrow dotClassName="bg-orange">
            <span className="text-orange">The method</span>
          </Eyebrow>
          <h2 className="text-3xl leading-tight md:text-5xl">OUR METHODS</h2>
        </div>

        <div className="relative mt-14 md:mt-20">
          {/* guide line */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-[2px] bg-ink/15 md:left-1/2 md:-translate-x-1/2" />
          {/* traveling dot */}
          <div
            className="pointer-events-none absolute left-0 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-orange md:left-1/2"
            style={{
              top: `${(reduced ? 0.5 : progress) * 100}%`,
              boxShadow: "0 0 0 6px color-mix(in oklab, var(--color-orange) 25%, transparent)",
            }}
          />

          <div className="flex flex-col gap-16 md:gap-28">
            {chapters.map((c, i) => {
              const flip = i % 2 === 1;
              return (
                <div
                  key={c.n}
                  className={`grid items-center gap-8 pl-8 md:gap-14 md:pl-0 md:grid-cols-2`}
                >
                  <div className={flip ? "md:order-2" : "md:order-1"}>
                    <Reveal delay={0}>
                      <div className="group relative aspect-[4/5] overflow-hidden rounded-card shadow-card-lg">
                        <img
                          src={c.large.src}
                          alt={c.large.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-all duration-[400ms] ease-out group-hover:scale-[1.03] group-hover:brightness-[0.92]"
                        />
                      </div>
                    </Reveal>
                  </div>

                  <Reveal delay={200} className={flip ? "md:order-1" : "md:order-2"}>
                    <div>
                      <h3 className="mt-3 text-[clamp(22px,2.6vw,32px)] leading-tight">{c.title}</h3>
                      <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink/80">
                        {c.body}
                      </p>
                      <div className="mt-5 font-body text-xs font-bold tracking-[0.16em] text-ink/50 uppercase">
                        {c.caption}
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
