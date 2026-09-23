import React from "react";

export type InstagramReelProps = {
  reelUrl: string;
  poster: string;
  title: string;
  /** Lower priority for posters below the fold. */
  lowPriority?: boolean;
};

export function InstagramReel({ reelUrl, poster, title, lowPriority }: InstagramReelProps) {
  const [playing, setPlaying] = React.useState(false);

  return (
    <figure className="w-full max-w-[340px]">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-card bg-[#56B290] shadow-card">
        {playing ? (
          <iframe
            src={`${reelUrl}embed`}
            title={title}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            scrolling="no"
            frameBorder="0"
            className="h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group block h-full w-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#56B290] focus-visible:ring-offset-2"
          >
            <img
              src={poster}
              alt={title}
              loading="lazy"
              decoding="async"
              {...(lowPriority ? { fetchPriority: "low" as const } : {})}
              width={720}
              height={1280}
              className="h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E47132] shadow-card transition-transform duration-300 group-hover:scale-110">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>

      <figcaption className="mt-2 text-start">
        <a
          href={reelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm font-semibold text-deep underline underline-offset-4 hover:text-orange"
        >
          Watch on Instagram
        </a>
      </figcaption>
    </figure>
  );
}

export function InstagramReelGrid({
  reels,
  className = "",
}: {
  reels: { slug: string; title: string; reelUrl: string; poster: string }[];
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className}`.trim()}
    >
      {reels.map((r) => (
        <InstagramReel
          key={r.slug}
          reelUrl={r.reelUrl}
          poster={r.poster}
          title={r.title}
          lowPriority={!inView}
        />
      ))}
    </div>
  );
}
