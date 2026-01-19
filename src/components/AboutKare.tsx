import React from "react";

const AboutKare: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
        About Kalasalingam Academy of Research and Education (KARE)
      </h2>

      <div className="grid gap-8 lg:grid-cols-[2fr,1fr] items-start">
        {/* Text column */}
        <div className="space-y-3 text-sm leading-relaxed text-slate-200">
          <p>
            Kalasalingam Academy of Research and Education (KARE), formerly
            Kalasalingam University, was established as Amlmigu Kalasalingam
            College of Engineering in 1984 by the untiring efforts of
            philanthropist, Mr. T. Kalasalingam.
          </p>
          <p>
            The institution offers undergraduate, Masters and doctoral programs
            in various disciplines of Engineering, Technology, Sciences,
            Humanities, Law, Agriculture, Nursing and Health Sciences.
          </p>
          <p>
            The university also offers a special undergraduate program for
            students impaired in speech and hearing, which is unique.
          </p>
          <p>
            The institution is accredited by NAAC with an A grade and has been
            awarded Diamond Rating by QS–GAUGE, and eleven UG programs and three
            Masters programs are accredited by the National Board of
            Accreditation (NBA).
          </p>
          <p>
            The university has many centres of excellence for research, and the
            International Research Center houses state-of-the-art equipment such
            as Scanning Electron Microscope, EDAX, X-ray diffractometer, AAS and
            FT-IR, and the university has signed MoUs with a number of
            universities worldwide for research collaborations and faculty and
            student exchange.
          </p>
          <p>
            The Department of Biotechnology offers B.Tech., M.Tech. and Ph.D.
            programmes in Biotechnology, with independent teaching and research
            laboratories equipped with modern facilities and led by well-funded
            faculty members.
          </p>
        </div>

        {/* Image / side column */}
        <div className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-lg">
            {/* Use the exact campus photo from the client in public/images */}
            <img
              src="/images/kare-campus.png"
              alt="KARE Campus"
              className="h-52 w-full object-cover"
            />
          </div>
          <p className="text-xs text-slate-400">
            The university campus is situated at Krishnankoil, near
            Srivilliputhur, an ancient town of religious significance, known for
            the Andal Temple and the 192 feet, 11-tiered temple tower which is
            the official emblem of the Government of Tamil Nadu, as well as
            nearby Sathuragiri Hills and Shenbaga Thoppu wildlife sanctuary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutKare;
