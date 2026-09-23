import { useEffect, useState } from "react";
import { PhotoPlaceholder } from "@/components/yard/PhotoPlaceholder";
import type { Campaign } from "@/data/yard";

function reelId(url: string) {
  return url.match(/\/reel\/([^/?#]+)/)?.[1] ?? "";
}

export function CampaignVideo({ campaign }: { campaign: Campaign }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, [campaign.id]);

  if (campaign.videoType === "youtube" && campaign.videoEmbed) {
    return (
      <iframe
        src={campaign.videoEmbed}
        title={campaign.title}
        className="block h-full w-full border-0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  const id = reelId(campaign.videoUrl);

  if (!id) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <PhotoPlaceholder label={campaign.photoLabel} />
        <span className="absolute inset-x-0 bottom-0 bg-ink/70 p-3 text-center font-body text-sm font-semibold text-cream">
          Video link not available yet
        </span>
      </div>
    );
  }

  if (playing || !campaign.poster) {
    return (
      <iframe
        src={`https://www.instagram.com/reel/${id}/embed/`}
        title={`${campaign.title} reel`}
        className="block h-full w-full border-0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play the ${campaign.title} reel`}
      className="group relative block h-full w-full overflow-hidden"
    >
      {campaign.poster ? (
        <img
          src={campaign.poster}
          alt={`${campaign.title} reel`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <PhotoPlaceholder label={campaign.photoLabel} />
      )}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange shadow-card transition-transform group-hover:scale-110">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
