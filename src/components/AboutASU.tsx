import React from "react";

const AboutASU: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
        About ASU Biodesign Institute
      </h2>
      <div className="grid gap-8 lg:grid-cols-[3fr,2fr] items-start">
        <div className="space-y-3 text-sm leading-relaxed text-slate-200">
          <p>
            Arizona State University, ranked the No. 1 Most Innovative School in
            the nation by U.S. News &amp; World Report for 11 years in
            succession, has forged the model for a New American University by
            operating on the principles that learning is a personal and original
            journey for each student.
          </p>
          <p>
            The Biodesign Institute at ASU is home to sixteen research centres
            and a wide array of leading-edge facilities supported by hundreds of
            scientists who cross boundaries and work together, creating
            nature-inspired solutions to global challenges in the well-being of
            people, the well-being of the planet and the prevention of threats
            to societal health and security.
          </p>
          <p>
            Established in 2004, the Biodesign Institute is a trusted resource
            for addressing the world's most pressing challenges, with a
            proven track record driven by a commitment to innovation,
            collaboration and real-world impact.
          </p>
        </div>
        <div className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-xl shadow-slate-900/50">
            <img
              src="/images/asu-biodesigninstute.jpg" 
              alt="ASU Biodesign Institute"
              className="h-56 w-full object-cover"
            />
          </div>
          <p className="text-xs text-slate-400">
            Biodesign Institute at Arizona State University
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutASU;
