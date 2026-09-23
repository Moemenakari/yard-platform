import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

const steps = [
  {
    label: "SHiFT Trains",
    copy: "Skills, tools and confidence for young people.",
  },
  {
    label: "YARD Leads",
    copy: "Youth lead campaigns, research and advocacy.",
  },
  {
    label: "Communities Change",
    copy: "Decisions shift. Neighbourhoods feel it.",
  },
];

export function ChangeTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Mobile: drive the vertical line's progress from scroll position
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = mobileRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) return;
      const rowH = rect.height / steps.length;
      const firstDot = rect.top + rowH / 2;
      const lastDot = rect.bottom - rowH / 2;
      // The fill "head" follows a trigger line at 65% of the viewport height
      const trigger = window.innerHeight * 0.65;
      const p = (trigger - firstDot) / (lastDot - firstDot);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="bg-sage px-5 py-16 sm:px-8 lg:px-14">
      <div ref={ref} className="mx-auto max-w-5xl">
        {/* Mobile: vertical timeline — dots + connecting line only, scroll-driven */}
        <div ref={mobileRef} className="relative flex flex-col gap-14 sm:hidden">
          {/* vertical connector line, centered through the dots (dot column is w-6 → center at 12px) */}
          <div className="pointer-events-none absolute bottom-[calc(100%/6)] left-[11px] top-[calc(100%/6)] w-[2px] overflow-hidden rounded-full bg-ink/12">
            <div
              className="h-full w-full origin-top rounded-full bg-orange transition-transform duration-200 ease-linear"
              style={{ transform: `scaleY(${progress})` }}
            />
          </div>

          {steps.map((step, i) => {
            const reached = progress >= i / (steps.length - 1) - 0.001;
            return (
              <div key={step.label} className="flex items-center gap-5">
                <span className="flex w-6 shrink-0 justify-center">
                  <span
                    className="relative z-10 block h-3.5 w-3.5 rounded-full ring-4 ring-sage transition-all duration-500 ease-out"
                    style={{
                      backgroundColor: reached ? "var(--color-orange)" : "color-mix(in oklab, var(--color-ink) 25%, transparent)",
                      transform: reached ? "scale(1.15)" : "scale(1)",
                    }}
                  />
                </span>
                <h3 className="font-display text-lg leading-tight text-ink">
                  {step.label}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Desktop: horizontal 3-column layout */}
        <div className="relative hidden gap-6 sm:grid sm:grid-cols-3">
          {/* horizontal connector line */}
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[7px] hidden h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-ink/12 sm:block">
            <div
              className="h-full w-full origin-left rounded-full bg-orange transition-transform duration-[1400ms] ease-out"
              style={{ transform: active ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.label}
              className="relative flex flex-col items-center text-center transition-all duration-700 ease-out"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${300 + i * 400}ms`,
              }}
            >
              <span
                className="relative z-10 block h-3.5 w-3.5 rounded-full bg-orange ring-4 ring-sage transition-transform duration-500 ease-out"
                style={{
                  transform: active ? "scale(1)" : "scale(0)",
                  transitionDelay: `${300 + i * 400}ms`,
                }}
              />

              <h3 className="mt-5 font-display text-[clamp(18px,2vw,24px)] leading-tight text-ink">
                {step.label}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            to="/who-we-are"
            className="font-body text-sm font-semibold text-deep underline underline-offset-4 hover:text-orange"
          >
            See our method
          </Link>
        </div>
      </div>
    </section>
  );
}
