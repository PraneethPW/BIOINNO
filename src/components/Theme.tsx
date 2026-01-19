import React from "react";

const Theme: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
        Theme of the Conference
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-200">
        <p>
          The conference aims to provide a multidisciplinary platform for
          showcasing emerging innovations in biotechnology.
        </p>
        <p>
          It will explore advances in areas such as genomics, bioengineering,
          synthetic biology, biopharmaceuticals and AI-driven life sciences, and
          bring together experts from India and abroad.
        </p>
        <p>
          The conference will provide a platform for students and young
          researchers to share and gain insights into recent advances in
          biotechnology and allied fields.
        </p>
      </div>
    </div>
  );
};

export default Theme;
