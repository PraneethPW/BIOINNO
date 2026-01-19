import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-4">
      <h2 className="text-2xl font-semibold text-emerald-400">Contact</h2>
      <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-200">
        <div className="space-y-2">
          <h3 className="font-semibold text-slate-100">
            Address for correspondence
          </h3>
          <p>
            The Organizing Secretaries, BioInnovate 2026
            <br />
            Department of Biotechnology
            <br />
            School of Bio, Chemical and Process Engineering
            <br />
            Kalasalingam Academy of Research and Education
            <br />
            Krishnankoil – 626126, Tamil Nadu, India
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-slate-100">Contact details</h3>
          <p>
            Dr. S. Ram Kumar Pandian: +91-90034 40063
            <br />
            Dr. S. Sheik Asraf: +91-85266 70046
            <br />
            Dr. P. Priya: +91-94863 32985
          </p>
          <p>
            Email: bioinnovate2026@gmail.com
            <br />
            Alternate: mag.klu.bt@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
