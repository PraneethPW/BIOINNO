import React from "react";

const AbstractSubmission: React.FC = () => {
  return (
    <section
      id="abstract-submission"
      className="relative py-20 bg-slate-950 text-slate-200"
    >
      <div className="mx-auto max-w-5xl px-6 space-y-10">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Abstract Submission
          </h2>
          <p className="text-slate-400 text-sm">
            Guidelines for authors submitting abstracts
          </p>
        </div>

        {/* Content Card */}
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/60 p-8 space-y-6 shadow-lg">
          <p className="leading-relaxed text-slate-300">
            Authors who wish to submit abstracts should follow the prescribed
            format. A structured abstract template is available online.
          </p>

          <p className="leading-relaxed text-slate-300">
            All submissions must be made through the EasyChair submission portal
            provided on this website. Abstracts submitted via other methods will
            not be considered.
          </p>

          <p className="leading-relaxed text-slate-300">
            Abstracts accepted for oral or poster presentation will be notified
            via email. Authors selected for oral presentation will be given{" "}
            <span className="text-emerald-400 font-medium">
              10 minutes (8 minutes presentation + 2 minutes discussion)
            </span>.
          </p>

          <p className="leading-relaxed text-slate-300">
            Poster boards accommodating posters of size{" "}
            <span className="text-emerald-400 font-medium">
              4 feet × 3 feet (Height × Width)
            </span>{" "}
            will be provided for poster presentations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Template */}
            <a
              href="http://kalasalingam.ac.in/site/bioinnovate/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center rounded-xl bg-slate-800 px-6 py-3 text-sm font-medium text-slate-200 hover:bg-slate-700 transition"
            >
              Download Abstract Template
            </a>

            {/* EasyChair */}
            <a
              href="https://easychair.org/conferences/?conf=XXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Submit via EasyChair
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-slate-500">
          Note: Abstracts sent via email or other methods will not be considered.
        </p>
      </div>
    </section>
  );
};

export default AbstractSubmission;
