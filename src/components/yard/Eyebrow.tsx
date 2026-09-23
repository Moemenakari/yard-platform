export function Eyebrow({
  children,
  tone = "green",
  dotClassName = "bg-orange",
}: {
  children: React.ReactNode;
  tone?: "green" | "light" | "dark";
  dotClassName?: string;
}) {
  return (
    <h2
      className={`mb-4 flex items-center gap-2 font-body text-[13px] font-bold tracking-[0.16em] uppercase ${
        tone === "green" ? "text-deep" : tone === "dark" ? "text-ink" : "text-sage"
      }`}
    >
      <span className={`inline-block h-2 w-2 rounded-full ${dotClassName}`} />
      {children}
    </h2>
  );
}
