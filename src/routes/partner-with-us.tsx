import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/yard/Eyebrow";


export const Route = createFileRoute("/partner-with-us")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Partner With Us: Create impact with YARD" },
      {
        name: "description",
        content:
          "Partner or collaborate with YARD's YOUTH-LED work in Tripoli and beyond. Write to info@shiftsih.org to start the conversation.",
      },
      { property: "og:title", content: "Partner With Us: YARD" },
      {
        property: "og:description",
        content: "Partner with YARD to grow YOUTH-LED impact across Lebanon.",
      },
    ],
  }),
  component: Partner,
});

const PARTNERSHIP_STEPS = [
  {
    label: "Capacity that build leaders",
    copy: "Advocacy, digital skills, entrepreneurship, and emergency response programs for youth in Tripoli and beyond.",
  },
  {
    label: "Campaigns that turn into movements",
    copy: "YOUTH-LED campaigns like Express Without Bullets and Not a Solution reach thousands online and in schools as well as policy and research work.",
  },
  {
    label: "Direct support in hard moments",
    copy: "Emergency cash, food, and shelter support for families when crises hit.",
  },
];

function Partner() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden bg-deep md:h-[62vh] md:min-h-[420px]">
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 md:px-8 md:pb-16">
          <div className="animate-fade-in">
            <Eyebrow tone="light">Partner with us · Support</Eyebrow>
          </div>
          <h1 className="animate-fade-in max-w-4xl text-3xl leading-[0.95] text-cream sm:text-4xl md:text-6xl">
            Back a
            <br />
            <span className="text-cream/90">YOUTH-LED movement</span>
          </h1>
          <p className="animate-fade-in mt-4 max-w-2xl font-body text-lg leading-snug font-medium text-cream/95 md:text-2xl">
            When you partner with YARD, you fund a safe space where young people turn ideas into
            action. Your support helps YOUTH-LED campaigns grow into movements that drive community
            change, shift power, and influence the decisions policy makers make.
          </p>
        </div>
      </section>


      {/* What partnership makes possible — vertical timeline */}
      <section className="bg-sage px-5 py-16 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-3xl">
          <div className="relative flex flex-col gap-12">
            <div className="pointer-events-none absolute bottom-[calc(100%/6)] left-[11px] top-[calc(100%/6)] w-[2px] overflow-hidden rounded-full bg-ink/12">
              <div className="h-full w-full rounded-full bg-orange" />
            </div>
            {PARTNERSHIP_STEPS.map((step) => (
              <div key={step.label} className="flex items-start gap-5">
                <span className="flex w-6 shrink-0 justify-center pt-1">
                  <span className="relative z-10 block h-3.5 w-3.5 rounded-full bg-orange ring-4 ring-sage" />
                </span>
                <div>
                  <h3 className="font-display text-lg leading-tight text-ink">
                    {step.label}
                  </h3>
                  {step.copy && (
                    <p className="mt-2 font-body text-[15px] leading-relaxed text-ink/80">
                      {step.copy}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage px-5 py-12 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="mailto:info@shiftsih.org?subject=Partnership%20with%20YARD"
            className="inline-flex items-center justify-center rounded-full bg-orange px-8 py-3.5 font-display text-base text-cream transition hover:bg-orange/90"
          >
            Partner with us
          </a>
        </div>
      </section>
    </>
  );
}
