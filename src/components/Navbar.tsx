import React, { useState } from "react";
import { Link } from "react-scroll";
import { sections } from "../sections";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        {/* Left: logos + title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src="/logos/kare-logo.png" alt="KARE" className="h-10 w-auto" />
            <img src="/logos/asu-logo.png" alt="ASU" className="h-9 w-auto" />
            <img src="/logos/iaam-logo.png" alt="IAAM" className="h-9 w-auto" />
          </div>

          <div className="hidden sm:block leading-tight">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
              BioInnovate 2026
            </p>
            <p className="text-sm font-semibold text-slate-100">
              Shaping the Future of Biotechnology
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300">
          {sections.map((s) => (
            <li key={s.id}>
              <Link
                to={s.id}
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-emerald-300"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* ✅ Mobile drawer (FIXED tap area) */}
      {open && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950">
          <ul className="flex flex-col divide-y divide-slate-800/60">
            {sections.map((s) => (
              <li key={s.id}>
                <Link
                  to={s.id}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="
                    block w-full
                    px-6 py-4
                    text-left
                    text-sm uppercase tracking-[0.18em]
                    text-slate-200
                    select-none
                    hover:bg-slate-900/60
                    active:bg-slate-900/80
                    transition-colors duration-200
                    cursor-pointer
                  "
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
