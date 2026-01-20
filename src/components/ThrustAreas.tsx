import React from "react";

const areas: string[] = [
  "Advances in Genomics and Precision Medicine",
  "CRISPR and Next-Generation Gene Editing",
  "Regenerative Medicine, Stem Cells and Tissue Engineering",
  "Microbiome in Health and Disease",
  "Bioinformatics, AI and Machine Learning in Biotechnology",
  "Nanobiotechnology and Bio–Nano Interfaces",
  "Biomaterials for Healthcare Industry",
  "Vaccine Technology and Innovations in Immunotherapy",
  "Industrial and Environmental Biotechnology",
  "Biotech for Climate Action and Sustainability",
  "Industrial Enzymes and Bioprocess Optimization",
  "Biofuels, Bioplastics and Circular Bioeconomy",
  "Agricultural Biotechnology and Smart Farming",
  "Marine Biotechnology",
  "Biotech Startups and Innovation Ecosystems",
  "Bridging Academia–Industry Collaborations",
  "Future Workforce Skill Development in Biotechnology",
  "Women Leadership in Biotechnology",
];

const ThrustAreas: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-100">
          Thrust Areas
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Key research domains shaping the future of biotechnology
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden rounded-2xl
              border border-slate-700/60
              bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-950/80
              backdrop-blur-xl
              px-6 py-7
              transition-all duration-500 ease-out
              hover:-translate-y-3 hover:scale-[1.03]
              hover:border-emerald-400/50
              hover:shadow-2xl hover:shadow-emerald-500/20
              active:scale-[0.98]
            "
          >
            {/* Animated gradient sweep */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent
                opacity-0 group-hover:opacity-100
                -translate-x-full group-hover:translate-x-full
                transition-all duration-1000
              "
            />

            {/* Accent bar */}
            <span
              className="
                absolute left-0 top-0 h-full w-1
                bg-gradient-to-b from-emerald-400 to-teal-400
                rounded-l-2xl
                transition-all duration-500
                group-hover:w-2
              "
            />

            {/* Glow ring */}
            <div
              className="
                absolute inset-0 rounded-2xl
                ring-1 ring-emerald-400/0
                group-hover:ring-emerald-400/30
                transition-all duration-500
              "
            />

            {/* Content */}
            <p className="relative z-10 pl-4 text-slate-200 text-base sm:text-lg leading-relaxed font-medium group-hover:text-slate-100 transition-colors">
              {area}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThrustAreas;
