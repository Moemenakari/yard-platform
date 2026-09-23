import { useState } from "react";

export function ReelEmbed({
  permalink,
  caption,
}: {
  permalink: string;
  caption: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const embedUrl = permalink.includes("/embed")
    ? permalink
    : `${permalink.replace(/\/?$/, "/")}embed/`;

  return (
    <figure className="w-full">
      <div className="relative min-h-[540px] w-full overflow-hidden rounded-card border border-sage bg-cream shadow-card">
        <iframe
          src={embedUrl}
          className="h-full min-h-[540px] w-full border-0"
          allowFullScreen
          loading="lazy"
          title={caption}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-sage/40 font-body text-sm text-deep">
            Loading reel…
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-center font-body text-sm text-ink/60">
        {caption}
      </figcaption>
    </figure>
  );
}
