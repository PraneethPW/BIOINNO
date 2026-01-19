// components/Hero.tsx
import React from "react";
import DNAScene from "./DNAScene";

const Hero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950/60">
      
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 space-y-8 lg:pl-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 backdrop-blur-md shadow-lg shadow-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase tracking-widest text-sm font-bold text-emerald-300">
                International Conference
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] bg-gradient-to-r from-slate-100 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                BioInnovate 2026
              </h1>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-400">
                Shaping the Future of
                <span className="block font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Biotechnology
                </span>
              </p>
            </div>

            <div className="space-y-3 text-slate-300">
              <p className="text-lg">
                <span className="font-mono text-emerald-400">
                  April 9–11, 2026
                </span>{" "}
                • Kalasalingam Academy of Research and Education
              </p>

              <p className="text-sm max-w-md opacity-90">
                School of Bio, Chemical & Process Engineering (KARE) with
                Arizona State University, USA & IAAM
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#registration"
                className="relative rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-lg font-bold text-slate-900 shadow-xl shadow-emerald-500/40 hover:scale-105 transition"
              >
                Register Now
              </a>

              <a
                href="#theme"
                className="rounded-2xl border border-slate-600/60 px-6 py-4 text-lg font-semibold text-slate-200 backdrop-blur hover:border-emerald-400/60 hover:text-emerald-300 transition"
              >
                View Theme →
              </a>
            </div>
          </div>

          {/* RIGHT – THREE.JS DNA */}
          <div className="w-full lg:w-1/2 h-80 lg:h-96 xl:h-[460px]">
            <div className="h-full rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/80 backdrop-blur-xl shadow-2xl shadow-emerald-500/25 overflow-hidden">
              <DNAScene />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
