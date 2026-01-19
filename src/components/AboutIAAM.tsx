import React from "react";

const AboutIAAM: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
        About Indian Association of Applied Microbiologists (IAAM)
      </h2>
      <div className="grid gap-8 lg:grid-cols-[3fr,2fr] items-start">
        <div className="space-y-3 text-sm leading-relaxed text-slate-200">
          <p>
            Indian Association of Applied Microbiologists (IAAM) is one of the
            representative voluntary organisations of microbiologists of basic
            and applied aspects, looking after the interests of eminent
            microbiologists, students and the wellbeing of society.
          </p>
          <p>
            IAAM was formed in 2000 under the Tamil Nadu Society's Registration
            Act 1975 and has played an important role in promoting research and
            development in the field of microbiology.
          </p>
          <p>
            The Association has hosted sixteen national conferences in various
            parts of South India and organises periodic meetings, symposia,
            workshops and special lectures by eminent scientists worldwide.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-3 bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 shadow-xl shadow-slate-900/50">
            <img
              src="/logos/iaam-logo.png"
              alt="IAAM Logo"
              className="h-40 w-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIAAM;
