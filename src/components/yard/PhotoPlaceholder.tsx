type Props = {
  label: string;
  className?: string;
  tone?: "light" | "dark";
};

export function PhotoPlaceholder({ label, className = "", tone = "light" }: Props) {
  const base =
    tone === "dark"
      ? "bg-deep/40 text-cream/70 border-white/20"
      : "bg-sage/60 text-deep border-deep/15";
  return (
    <div
      className={`flex h-full w-full items-center justify-center border border-dashed p-4 text-center ${base} ${className}`}
      aria-label={label}
      role="img"
    >
      <span className="font-body text-xs tracking-wide uppercase opacity-80">{label}</span>
    </div>
  );
}
