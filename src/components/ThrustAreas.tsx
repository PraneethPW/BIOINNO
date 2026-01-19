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
    <section className="mx-auto max-w-7xl px-4 py-20">
      {/* Header */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-100">
          Thrust Areas
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          Key research domains shaping the future of biotechnology
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <div
            key={index}
            className="
              relative rounded-xl border border-slate-700/50
              bg-slate-900/60 backdrop-blur-md
              px-6 py-6
              transition-colors duration-300
              hover:border-emerald-400/40
              hover:bg-slate-900/80
            "
          >
            {/* Accent bar */}
            <span className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl bg-gradient-to-b from-emerald-400/60 to-teal-400/60 opacity-70" />

            <p className="pl-4 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              {area}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThrustAreas;
