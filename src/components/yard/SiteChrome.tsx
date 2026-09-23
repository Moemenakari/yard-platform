import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { YardLogo } from "./YardLogo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/success-stories", label: "Stories" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sage bg-cream px-5 py-3.5 sm:px-8 lg:px-14">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" aria-label="YARD home" onClick={() => setOpen(false)}>
          <YardLogo className="w-[110px]" />
        </Link>

        <nav className="hidden items-center gap-8 font-body text-[15px] font-semibold md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-orange" }}
              className="text-ink transition-colors hover:text-orange"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/partner-with-us"
            className="hidden shrink-0 rounded-full bg-orange px-5 py-2.5 font-body text-sm font-semibold text-cream shadow-[0_6px_16px_rgba(224,111,43,0.25)] transition-opacity hover:opacity-90 md:inline-block"
          >
            Partner with us
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sage text-ink md:hidden"
          >
            <span className="text-lg leading-none">{open ? "\u2715" : "\u2630"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 pt-3 pb-1 font-body text-[15px] font-semibold md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-orange" }}
              className="py-2 text-ink transition-colors hover:text-orange"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/partner-with-us"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-orange px-5 py-2.5 text-center text-sm font-semibold text-cream"
          >
            Partner with us
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 sm:px-8 lg:px-14">
      <div className="flex flex-col gap-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <YardLogo className="w-[88px]" mark="#ffffff" />
            <div className="font-body text-[13px] text-sage">
              A youth platform by SHiFT Social Innovation Hub, Tripoli
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-5 font-body text-[13px] font-semibold">
            <Link to="/who-we-are" className="text-sage hover:text-orange">
              Who We Are
            </Link>
            <Link to="/success-stories" className="text-sage hover:text-orange">
              Success Stories
            </Link>
            <Link to="/partner-with-us" className="text-sage hover:text-orange">
              Partner with us
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full border border-sage/50 px-4 py-2 text-sage transition-colors hover:border-orange hover:text-orange"
            >
              Back to top ↑
            </button>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-body text-[13px] font-semibold">
          <a
            href="https://www.tiktok.com/@yard.gplebanon?_r=1&_t=ZS-99Yh49B4w9F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage hover:text-orange"
          >
            TikTok
          </a>
          <a
            href="https://www.youtube.com/@yard.gp.lebanon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage hover:text-orange"
          >
            YouTube
          </a>
          <a
            href="https://www.instagram.com/globalplatformlebanon?stkn=Mmh1b3d4d2xvZGY1&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage hover:text-orange"
          >
            Instagram
          </a>
          <a
            href="https://linktr.ee/SHIFT_Social_Media?utm_source=linktree_profile_share&ltsid=26ddee2d-f303-44cf-b050-074aea7bb47f"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage hover:text-orange"
          >
            SHiFT Linktree
          </a>
        </div>
      </div>
    </footer>
  );
}
