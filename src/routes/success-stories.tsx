import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/yard/Eyebrow";
import { Reveal } from "@/components/yard/Reveal";
import { ProgressThread } from "@/components/yard/ProgressThread";
import { ReelEmbed } from "@/components/yard/ReelEmbed";
import { PhotoPlaceholder } from "@/components/yard/PhotoPlaceholder";
import { StoryLink, type StoryLinkEntry } from "@/components/yard/StoryLink";
import reinaPhoto from "@/assets/reina-2.png.asset.json";
import ghinaPhoto from "@/assets/ghina-2.jpeg.asset.json";
import hassanLinaPhoto from "@/assets/hassan-lina-3.png.asset.json";
import expressPoster from "@/assets/express-without-bullets-poster-3d.png";
import expressPuzzle from "@/assets/express-puzzle-3d.png";




export const Route = createFileRoute("/success-stories")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Our Stories - YARD" },
      {
        name: "description",
        content:
          "One page, two stories: a young man who found his voice after a stray bullet, and youth who turned training into businesses and audiences in Tripoli.",
      },
      { property: "og:title", content: "Our Stories - YARD" },
      {
        property: "og:description",
        content:
          "Express Without Bullets, and Skills That Became Voices - impact stories from Tripoli, North Lebanon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurStories,
});

const storyLinks: Record<string, StoryLinkEntry> = {
  "campaign-gallery": {
    url: "https://www.instagram.com/p/DaBIYZzOoac/",
    platform: "instagram",
  },
};

const reels = {
  ahmad: "https://www.instagram.com/reel/C1o8QuII0gs/",
  ahmadMother: "https://www.instagram.com/reel/DMQhkoTMZmf/",
};

const beats = [
  {
    label: "Before",
    body: "Endless energy, real confidence, and football every single day. Nothing could stop him.",
    quote: "I have great confidence in myself - I do everything I dream of, without any obstacle.",
    hit: false,
  },
  {
    label: "The second that changed everything",
    body: "He went to the funeral of a friend killed by a stray bullet. He bent down to tie his shoelaces.",
    quote:
      "In one second I bent down to tie my shoelaces, and the next thing I knew, I was in the hospital.",
    hit: true,
  },
  {
    label: "After",
    body: "A bullet lodged in his head. His heart stopped twice. Partial facial paralysis, hearing loss, and surgeries that are not finished yet.",
    quote: "The young man full of enthusiasm now feels ashamed of his appearance and fears for his future.",
    hit: false,
  },
  {
    label: "Today",
    body: "Ahmad joined the YOUTH-LED project at YARD - Global Platform, in SHiFT, with ActionAid. He is now part of the Express Without Bullets movement, fighting with his words instead of bullets.",
    quote: "",
    hit: false,
  },
];


const profiles = [
  {
    id: "hassan-lina",
    tag: "Marketino Media",
    name: "Hassan & Lina",
    photo: hassanLinaPhoto.url,
    role: "From trainees to a creative agency",
    body: "Two participants who did more than attend: they tested, asked, and helped each other. Months later they launched Marketino Media\u00A0 content creation, social media management and brand identity for local clients.",
    quote: "YARD gave us a network, a safe space to test ideas, and the motivation to think big.",
    attribution: "- Lina, Content Creator.\n- Hassan, Photo/Videographer.\n\n",
  },
  {
    id: "reina",
    tag: "Light the World",
    name: "Reina",
    photo: reinaPhoto.url,
    role: "From behind the camera to in front of it",
    body: "She arrived with a scented candle business and a fear of the camera. She learned how to tell her story clearly and reach her audience - and now films the videos that market her products and encourage others.",
    quote: "The training gave me confidence I never thought I could have.",
    attribution: "",
  },
  {
    id: "ghina",
    tag: "Advice & self-expression",
    name: "Ghina",
    photo: ghinaPhoto.url,
    role: "A quiet voice, now heard",
    body: "Advice and guidance were always close to her heart, but saying it publicly took courage. The digital content workshops gave her a format, and today she shares with a growing audience.",
    quote: "YARD helped me realize that my voice matters.",
    attribution: "",
  },
];


const partners = [
  "SHiFT Social Innovation Hub",
  "YARD",
  "Global Platform Lebanon",
  "ActionAid",
];

function OurStories() {
  return (
    <>
      <ProgressThread />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden bg-deep md:h-[62vh] md:min-h-[420px]">
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 md:px-8 md:pb-16">
          <div className="animate-fade-in">
            <Eyebrow tone="light">Our stories · Impact</Eyebrow>
          </div>
          <h1 className="animate-fade-in max-w-4xl text-3xl leading-[0.95] text-cream sm:text-4xl md:text-6xl">
            Impact
            <br />
            <span className="text-cream/90">Stories from Tripoli</span>
          </h1>
          <p className="animate-fade-in mt-4 max-w-2xl font-body text-lg leading-snug font-medium text-cream/95 md:text-2xl">
            Young people from Tripoli on the campaigns, training and community work that changed what happens next.
          </p>

        </div>
      </section>

      {/* ── STORY 01 ─────────────────────────────────────────── */}
      <section id="story-01" className="bg-gradient-to-b from-cream to-sage/40">
        <div className="mx-auto grid max-w-[1080px] items-center gap-8 px-5 pt-16 pb-12 sm:px-8 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_420px]">
          <div>
            <Reveal>
              <p className="font-body text-[0.75rem] font-bold tracking-[0.2em] uppercase text-ink/50">
                YOUTH-LED campaign
              </p>

            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-2 text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.05] text-ink">
                How Ahmad Turned{" "}
                <span className="relative inline-block text-orange">
                  Express Without Bullets
                  <span className="strike-bar" aria-hidden />
                </span>{" "}
                Into a YOUTH-LED Movement
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-[38ch] font-body text-lg font-medium text-ink/80">
                One second. One stray bullet. A voice that refused to go quiet.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <img
              src={expressPoster}
              alt="Poster for the Express Without Bullets campaign by YARD"
              className="mx-auto w-full max-w-[320px] rounded-2xl md:max-w-none"
              loading="lazy"
            />
          </Reveal>
        </div>


        <div className="mx-auto max-w-[720px] px-5 pb-20 sm:px-8">
          <Reveal>
            <ReelEmbed permalink={reels.ahmad} caption="Watch Ahmad tell it in his own words" />
          </Reveal>
        </div>

        {/* Ahmad's story + timeline */}
        <div id="ahmad-story" className="mx-auto max-w-[720px] px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Ahmad&apos;s story</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="text-[clamp(1.7rem,4.6vw,2.6rem)] text-ink">A footballer from Tripoli</h3>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-[60ch] border-l-[3px] border-orange pl-5 font-body text-lg leading-relaxed font-medium text-ink">
              He loved football until a stray bullet changed his life at a friend&apos;s funeral.
              Today he lives with partial facial paralysis and hearing loss - and uses his voice so
              no one else lives it.
            </p>
            <StoryLink sectionId="ahmad-story" links={storyLinks} />
          </Reveal>

          <ol className="relative mt-12 list-none pl-9">
            <span
              aria-hidden
              className="absolute inset-y-1.5 left-[5px] w-0.5 bg-gradient-to-b from-sage via-orange to-sage"
            />
            {beats.map((b, i) => (
              <Reveal as="li" key={b.label} delay={i * 90} className="relative pb-10">
                <span
                  aria-hidden
                  className={`absolute -left-9 top-2 h-3 w-3 rounded-full border-2 ${
                    b.hit
                      ? "border-orange bg-orange shadow-[0_0_0_6px_rgba(224,111,43,0.18)]"
                      : "border-deep bg-cream"
                  }`}
                />
                <h4 className="font-body text-[0.74rem] font-bold tracking-[0.16em] uppercase text-deep">
                  {b.label}
                </h4>
                <p className="mt-2 font-body leading-relaxed text-ink/75">{b.body}</p>
                {b.quote && (
                  <blockquote className="mt-3 font-body text-[1.02rem] font-semibold text-ink">
                    “{b.quote}”
                  </blockquote>
                )}
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Pull quote */}
        <div className="mx-auto mt-10 max-w-[1080px] px-5 sm:px-8">
          <Reveal>
            <blockquote className="relative overflow-hidden rounded-card bg-ink px-8 py-14 text-center text-cream">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-16 left-4 font-display text-[16rem] leading-none text-cream/[0.07]"
              >
                ”
              </span>
              <p className="relative mx-auto max-w-[46ch] font-display text-2xl leading-snug font-extrabold md:text-3xl">
                All I think about is how I can live and continue life. Stop stray bullets and
                don&apos;t deprive anyone of their life.
              </p>
              <footer className="relative mt-6 font-body text-sm tracking-[0.18em] uppercase text-cream/60">
                - Ahmad
              </footer>
            </blockquote>
          </Reveal>
        </div>

        {/* Mother's story */}
        <div id="mothers-story" className="mx-auto mt-16 max-w-[1080px] px-5 sm:px-8">
          <Reveal>
            <article className="grid gap-10 rounded-card border border-sage bg-cream p-8 shadow-card md:grid-cols-[1fr_340px] md:p-12">
              <div>
                <Eyebrow>His mother&apos;s story</Eyebrow>
                <h3 className="text-[clamp(1.5rem,4vw,2.1rem)] text-ink">The mother&apos;s voice</h3>
                <p className="mt-4 border-l-[3px] border-orange pl-5 font-body text-[1.05rem] leading-relaxed font-medium text-ink/85">
                  The bullet hit Ahmad, but the pain settled into the whole house. His mother speaks
                  about the night at the hospital, and about every mother waiting behind a door
                  whenever the shooting starts.
                </p>
                <StoryLink sectionId="mothers-story" links={storyLinks} />
                <img
                  src={expressPuzzle}
                  alt="Puzzle artwork for the Express Without Bullets campaign by YARD"
                  className="mt-6 w-full max-w-[280px] [filter:drop-shadow(0_24px_28px_rgba(0,0,0,0.35))]"
                  loading="lazy"
                />
              </div>
              <ReelEmbed
                permalink={reels.ahmadMother}
                caption="Ahmad's mother, in her own words"
              />
            </article>
          </Reveal>
        </div>

        {/* Campaign gallery */}
        <div id="campaign-gallery" className="mx-auto mt-20 max-w-[1080px] px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Campaign gallery</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="text-[clamp(1.6rem,4.4vw,2.3rem)] text-ink">From the campaign</h3>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-2 mb-8 font-body text-sm text-ink/60">
              Photos from the “Express Without Bullets” movement.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mx-auto mt-6 max-w-[540px]">
              <ReelEmbed
                permalink="https://www.instagram.com/p/DaBIYZzOoac/"
                caption="From the Express Without Bullets campaign"
              />
              <div className="text-center">
                <StoryLink sectionId="campaign-gallery" links={storyLinks} />
              </div>
            </div>
          </Reveal>
        </div>

      </section>

      {/* ── STORY 02 ─────────────────────────────────────────── */}
      <section id="story-02" className="scroll-mt-20 bg-cream">
        <div className="mx-auto max-w-[1080px] px-5 pt-20 pb-12 sm:px-8">
          <Reveal delay={80}>
            <h2 className="mt-4 text-[clamp(2.2rem,8vw,4.6rem)] leading-[0.98] text-ink">
              Skills That <span className="text-deep">Became Voices</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[44ch] font-body text-lg text-ink/70">
              Three short stories from YARD&apos;s content creation &amp; digital media trainings.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
          <div className="grid gap-7">
            {profiles.map((p, i) => (
              <Reveal as="article" key={p.name} delay={i * 100}>
                <div id={p.id} className="grid overflow-hidden rounded-card border border-sage bg-white/60 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-lg md:grid-cols-[320px_1fr]">
                  <div className="relative min-h-[220px] bg-sage/40">
                    {"photos" in p && Array.isArray((p as { photos?: string[] }).photos) ? (
                      <div className="grid h-full w-full grid-cols-2">
                        {(p as { photos: string[] }).photos.map((src) => (
                          <img
                            key={src}
                            src={src}
                            alt={`Photo: ${p.name}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : p.photo ? (
                      <img
                        src={p.photo}
                        alt={`Photo: ${p.name}`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <PhotoPlaceholder label={`Photo: ${p.name}`} />
                    )}
                  </div>
                  <div className="p-8 md:p-9">
                    <h3 className="text-2xl text-ink">{p.name}</h3>
                    <p className="mt-1 font-body text-[0.8rem] font-bold tracking-[0.1em] uppercase text-orange">
                      {p.role}
                    </p>
                    <p className="mt-4 font-body leading-relaxed text-ink/70">{p.body}</p>
                    <blockquote className="mt-5 border-l-[3px] border-deep pl-4 font-body font-semibold text-ink">
                      “{p.quote}”
                      {p.attribution && (
                        <span className="mt-1 block whitespace-pre-wrap font-body text-[0.82rem] font-normal italic text-ink/60">
                          {p.attribution}
                        </span>
                      )}
                    </blockquote>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

        {/* Final CTA + partners */}
        <div id="join" className="mt-24 rounded-t-card bg-ink pt-20 text-cream">
          <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
            <Reveal>
              <Eyebrow tone="light">Be part of it</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-[clamp(2.2rem,7vw,4rem)] leading-[1] text-cream">
                Their stories are proof.
                <br />
                <span className="text-cream/60">What could we build with you?</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/partner-with-us"
                  className="rounded-full bg-orange px-7 py-3.5 font-body font-semibold text-cream transition hover:opacity-90"
                >
                  Partner with YARD
                </Link>
                <Link
                  to="/who-we-are"
                  className="rounded-full border border-cream/30 px-7 py-3.5 font-body font-semibold text-cream transition hover:bg-cream/10"
                >
                  See our method
                </Link>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-16 border-t border-cream/10 py-10">
                <p className="font-body text-[0.7rem] font-bold tracking-[0.18em] uppercase text-cream/40">
                  In partnership with
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
                  {partners.map((partner) => (
                    <span key={partner} className="font-body text-sm font-semibold text-cream/70">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
