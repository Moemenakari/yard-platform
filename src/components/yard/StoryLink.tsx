export type StoryLinkEntry = {
  url: string;
  platform: "instagram" | "facebook";
};

export function StoryLink({
  sectionId,
  links,
}: {
  sectionId: string;
  links: Record<string, StoryLinkEntry>;
}) {
  const entry = links[sectionId];
  if (!entry || !entry.url) return null;

  const label = entry.platform === "facebook" ? "See it on Facebook" : "See it on Instagram";

  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-block font-body text-sm font-semibold text-deep underline underline-offset-4 transition hover:text-orange"
    >
      {label}
    </a>
  );
}
