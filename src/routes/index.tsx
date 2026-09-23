import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Eyebrow } from "@/components/yard/Eyebrow";
import { ChangeTimeline } from "@/components/yard/ChangeTimeline";
import reinaPhoto from "@/assets/reina.webp.asset.json";

import humanitarianResponsePhoto from "@/assets/humanitarian-response.jpg.asset.json";
import { PhotoPlaceholder } from "@/components/yard/PhotoPlaceholder";
import { CampaignVideo } from "@/components/yard/CampaignVideo";
import palletsHeroAsset from "@/assets/pallets-hero.png.asset.json";
import {
  campaigns as allCampaigns,
  podcasts,
  researchAndAdvocacy,
  trainings,
} from "@/data/yard";

const campaigns = allCampaigns.filter((c) => c.published);


const palletsHero = palletsHeroAsset.url;







export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "YARD: Youth Advocating for Their Rights and Development, Tripoli" },
      {
        name: "description",
        content:
          "YARD is SHiFT's youth platform in Tripoli, Lebanon. YOUTH-LED campaigns, trainings, research and emergency response across North Lebanon.",
      },
      { property: "og:title", content: "YARD: Youth Advocating for Their Rights and Development" },
      {
        property: "og:description",
        content:
          "Youth leading change in Tripoli, Lebanon and beyond. A youth platform by SHiFT Social Innovation Hub.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [active, setActive] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  const researchRail = useRef<HTMLDivElement>(null);
  const campaignCarousel = useRef<HTMLDivElement>(null);
  const trainingRail = useRef<HTMLDivElement>(null);
  const campaign = campaigns[active] ?? campaigns[0]!;


  return (
    <>
      {/* Hero */}
      <section className="relative h-[58vh] min-h-[380px] w-full overflow-hidden md:h-[78vh] md:min-h-[460px]">
        <img
          src={palletsHero}
          alt="Four young people sitting on blue and orange cushions atop wooden pallets outdoors, reading YARD program materials."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/35 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 md:px-8 md:pb-20">
          <h1 className="animate-fade-in max-w-4xl text-3xl leading-[0.95] text-cream sm:text-4xl md:text-6xl drop-shadow-lg">
            Youth Advocating for Their Rights and Development
          </h1>
          <p className="animate-fade-in mt-4 max-w-2xl font-body text-lg leading-snug font-medium text-cream/95 md:text-2xl drop-shadow-md">
             A YOUTH-LED platform in Tripoli, Lebanon, part of SHiFT Social Innovation Hub.
          </p>

        </div>
      </section>

      {/* How change happens — horizontal timeline */}
      <ChangeTimeline />




      {/* Campaigns */}
      <section id="campaigns" className="scroll-mt-24 bg-cream px-5 py-20 sm:px-8 lg:px-14">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <Eyebrow>CAMPAIGNS</Eyebrow>
            <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-ink">
              8 YOUTH-LED Campaigns tackling the issues young people face in their communities.
            </p>
          </div>
          <div className="flex shrink-0 gap-2.5">
            <button
              aria-label="Previous campaign"
              onClick={() => campaignCarousel.current?.scrollBy({ left: -campaignCarousel.current.clientWidth, behavior: "smooth" })}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-sage bg-white text-lg text-ink"
            >
              ←
            </button>
            <button
              aria-label="Next campaign"
              onClick={() => campaignCarousel.current?.scrollBy({ left: campaignCarousel.current.clientWidth, behavior: "smooth" })}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-deep text-lg text-cream"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={campaignCarousel}
          tabIndex={0}
          role="region"
          aria-label="Campaign carousel"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              campaignCarousel.current?.scrollBy({ left: campaignCarousel.current.clientWidth, behavior: "smooth" });
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              campaignCarousel.current?.scrollBy({ left: -campaignCarousel.current.clientWidth, behavior: "smooth" });
            }
          }}
          onScroll={(e) => {
            const container = e.currentTarget;
            const index = Math.round(container.scrollLeft / container.clientWidth);
            setActive(index);
          }}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto"
        >
          {campaigns.map((c) => (
            <article
              key={c.title}
              className="w-full flex-none snap-center scroll-ml-0 rounded-card bg-white p-6 shadow-card-lg sm:p-8 lg:grid lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12 lg:p-10"
            >
              <div className="order-2 mx-auto w-full max-w-[320px] pb-8 lg:order-1 lg:mx-0 lg:max-w-none lg:pb-0">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-deep">
                  <CampaignVideo campaign={c} />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center gap-4 lg:order-2">
                <div className="flex flex-wrap items-center gap-3">
                  {c.stats
                    .filter((s) => s.value !== null && String(s.value).trim() !== "")
                    .map((s) => (
                      <span key={s.label + String(s.value)} className="font-display text-sm text-deep">
                        {s.value}
                        {s.label ? ` ${s.label}` : ""}
                      </span>
                    ))}
                </div>
                <h3 className="text-[clamp(24px,3vw,34px)] leading-tight">{c.title}</h3>
                <p className="max-w-xl font-body text-[15px] leading-relaxed text-ink">
                  {c.fullImpact || c.cardBlurb}
                </p>
                {c.pullQuote && (
                  <p className="max-w-xl border-l-[3px] border-orange pl-4 font-body text-[15px] leading-relaxed text-deep italic">
                    {c.pullQuote}
                  </p>
                )}
                {c.videoType === "instagram" &&
                  (c.videoUrl ? (
                    <a
                      href={c.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit font-body text-sm font-semibold text-deep hover:text-orange"
                    >
                      Watch on Instagram →
                    </a>
                  ) : (
                    <p className="w-fit font-body text-sm font-semibold text-ink/60">
                      Video link not available yet
                    </p>
                  ))}
                {c.featured && (
                  <div className="mt-1.5 max-w-xl border-l-[3px] border-orange pl-4">
                    <div className="mb-1 font-hand text-lg text-deep">featured story: Ahmad</div>
                    <div className="font-display text-base">
                      “Stop stray bullets. Don't deprive anyone of their life.”
                    </div>
                    <Link
                      to="/success-stories"
                      className="font-body text-sm font-semibold text-deep hover:text-orange"
                    >
                      Read Ahmad's full story →
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* Trainings */}
      <section id="trainings" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-14">
        <div className="mb-7 flex items-end justify-between gap-4">
          <Eyebrow>Trainings</Eyebrow>
          <div className="flex shrink-0 gap-2.5">
            <button
              aria-label="Previous trainings"
              onClick={() => trainingRail.current?.scrollBy({ left: -trainingRail.current.clientWidth, behavior: "smooth" })}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-sage bg-white text-lg text-ink"
            >
              ←
            </button>
            <button
              aria-label="Next trainings"
              onClick={() => trainingRail.current?.scrollBy({ left: trainingRail.current.clientWidth, behavior: "smooth" })}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-deep text-lg text-cream"
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={trainingRail}
          tabIndex={0}
          role="region"
          aria-label="Trainings carousel"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              trainingRail.current?.scrollBy({ left: trainingRail.current.clientWidth, behavior: "smooth" });
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              trainingRail.current?.scrollBy({ left: -trainingRail.current.clientWidth, behavior: "smooth" });
            }
          }}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {trainings.map((t) => (
            <article
              key={t.title}
              className="flex w-[82%] flex-none snap-start flex-col overflow-hidden rounded-card border-[1.5px] border-sage bg-white shadow-card sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]"
            >
              {t.photo ? (
                <div className="aspect-[4/3] w-full overflow-hidden bg-sage">
                  <img
                    src={t.photo}
                    alt={t.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ) : null}


              <div className="p-6">
                <h3 className="mb-3 text-lg text-ink">{t.title}</h3>
                <p className="font-body text-sm leading-relaxed text-ink/70">{t.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Policy, advocacy and research */}
      <section id="research" className="scroll-mt-24 bg-cream px-5 py-20 sm:px-8 lg:px-14">
        <Eyebrow>POLICIES AND RESEARCHS</Eyebrow>

        <div className="mb-5 flex justify-end gap-2.5">
          <button
            aria-label="Previous research items"
            onClick={() => researchRail.current?.scrollBy({ left: -researchRail.current.clientWidth, behavior: "smooth" })}
            className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-sage bg-white text-lg text-ink"
          >
            ←
          </button>
          <button
            aria-label="Next research items"
            onClick={() => researchRail.current?.scrollBy({ left: researchRail.current.clientWidth, behavior: "smooth" })}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-deep text-lg text-cream"
          >
            →
          </button>
        </div>
        <div
          ref={researchRail}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto pb-2"
        >
          {researchAndAdvocacy.map((item) => (
            <article
              key={item.title}
              className="w-full flex-none snap-start overflow-hidden rounded-card border-[1.5px] border-sage bg-white shadow-card"
            >
              <div className="grid md:grid-cols-[1.1fr_1fr]">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sage">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt || `${item.title} photo`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <PhotoPlaceholder label={`${item.title} photo`} />
                  )}
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-white/90 px-3 py-1.5 font-body text-[11px] font-bold tracking-wide text-deep uppercase">
                    {item.tag}
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
                  <div>
                    <h3 className="text-[clamp(22px,2.5vw,30px)] leading-tight">{item.title}</h3>
                    <p className="mt-3 max-w-md font-body text-base leading-relaxed text-ink">
                      {item.desc}
                    </p>
                  </div>
                  {item.outcome && (
                    <div>
                      <p className="max-w-md font-body text-base leading-relaxed text-ink">
                        {item.outcome.desc}
                      </p>
                      <a
                        href={item.outcome.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-orange px-5 py-2.5 font-body text-sm font-semibold text-cream hover:bg-deep"
                      >
                        {item.outcome.linkLabel}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-1.5 rounded-full bg-orange px-5 py-2.5 font-body text-sm font-semibold text-cream hover:bg-deep"
                    >
                      See research
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Podcast */}
      <section id="podcast" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-14">
        <Eyebrow>PODCASTS</Eyebrow>
        <div className="mb-9 flex flex-wrap items-end justify-end gap-5">
          <div className="flex shrink-0 gap-2.5">
            <button
              aria-label="Previous episodes"
              onClick={() => rail.current?.scrollBy({ left: -320, behavior: "smooth" })}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-sage bg-white text-lg text-ink"
            >
              ←
            </button>
            <button
              aria-label="Next episodes"
              onClick={() => rail.current?.scrollBy({ left: 320, behavior: "smooth" })}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-deep text-lg text-cream"
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={rail}
          tabIndex={0}
          role="group"
          aria-label="Podcast episodes"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              rail.current?.scrollBy({ left: 260, behavior: "smooth" });
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              rail.current?.scrollBy({ left: -260, behavior: "smooth" });
            }
          }}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {podcasts.map((ep) => (
            <a
              key={ep.id}
              href={ep.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Watch ${ep.title} on YouTube`}
              className="group relative w-[62vw] flex-none snap-start overflow-hidden rounded-card bg-white shadow-card sm:w-[46%] lg:w-[31%] xl:w-[23%]"
            >
              <img
                src={`https://img.youtube.com/vi/${ep.id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="block aspect-video w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange transition-transform group-hover:scale-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <div className="p-4">
                {ep.title && <h3 dir="auto" className="text-base leading-snug">{ep.title}</h3>}
                {ep.speaker && <p className="mt-1 text-sm text-ink/70">{ep.speaker}</p>}
              </div>
            </a>
          ))}
        </div>

      </section>

      {/* Success stories preview */}
      <section id="stories" className="scroll-mt-24 bg-cream px-5 py-20 sm:px-8 lg:px-14">
        <Eyebrow>Impact stories</Eyebrow>
        <div className="mb-9 flex flex-wrap items-end justify-end gap-5">
          <Link
            to="/success-stories"
            hash="reina"
            className="font-body font-semibold text-deep hover:text-orange"
          >
            Read more stories →
          </Link>
        </div>
        <div className="grid overflow-hidden rounded-card bg-white shadow-card-lg md:grid-cols-[minmax(220px,340px)_1fr]">
          <div className="min-h-[220px] bg-green">
            <img
              src={reinaPhoto.url}
              alt="Reina, YARD digital content training participant"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <Link
            to="/success-stories"
            className="flex flex-col justify-center gap-3 p-8"
          >
            <span className="font-hand text-[22px] text-deep">Meet Reina</span>
            <h3 className="text-2xl">
              “The training gave me confidence I never thought I could have.”
            </h3>
            <p className="font-body text-[15px] leading-relaxed text-ink">
              She arrived with a scented candle business and a fear of the camera. Through YARD's
              digital content workshops she learned to tell her story&nbsp; and now films the videos that
              market her products and encourage others.
            </p>
          </Link>
        </div>
      </section>

      {/* Humanitarian response */}
      <section id="impact" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-14">
        <Eyebrow tone="dark">Humanitarian response</Eyebrow>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(260px,420px)_1fr]">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-card bg-sage">
            <img
              src={humanitarianResponsePhoto.url}
              alt="YARD and SHiFT volunteers loading relief boxes and supplies into a truck for displaced families."
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <p className="mb-6 max-w-xl font-body text-base leading-relaxed text-ink">
              When crisis hits, YARD youth mobilize fast, distributing hygiene and food kits,
              coordinating shelter and WASH support, and offering psychosocial first aid to families
              displaced by conflict and disaster.
            </p>
            <div className="mb-7 flex flex-wrap gap-8">
              {[
                { v: "8+", l: "Cities covered" },
                { v: "2819", l: "Families supported" },
                { v: "250+", l: "Youth mobilised" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-[28px] font-extrabold text-ink">{s.v}</div>
                  <div className="font-body text-[13px] text-ink/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decisions CTA */}
      <section className="bg-green px-5 py-20 sm:px-8 lg:px-14 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-display text-[clamp(32px,5vw,52px)] leading-[1.1] text-cream">
            Grow impact now<span className="text-orange">.</span>
          </h2>
          <Link
            to="/partner-with-us"
            className="inline-block rounded-full bg-orange px-8 py-4 font-body font-semibold text-cream hover:bg-cream hover:text-green"
          >
            partner with us
          </Link>
        </div>
      </section>
    </>
  );
}
