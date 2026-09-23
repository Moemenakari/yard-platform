import { useEffect, useState } from "react";

export function ProgressThread() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setPct(max > 0 ? doc.scrollTop / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-1.5 z-40 h-full w-0.5 bg-sage/70 md:left-3"
    >
      <div
        className="w-full bg-gradient-to-b from-orange to-deep transition-[height] duration-150 ease-linear"
        style={{ height: `${pct * 100}%` }}
      />
    </div>
  );
}
