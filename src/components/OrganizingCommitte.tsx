import React from "react";

const OrganizingCommittee: React.FC = () => {
  const committees = [
    {
      title: "Chief Patrons",
      members: [
        "Dr. K. Sridharan, Chancellor, KARE",
        "Dr. S. Arivazhagi, Pro-Chancellor, KARE",
        "Dr. S. Shasi Anand, Vice President, KARE",
        "Mr. S. Arjun Kalasalingam, Vice President, KARE"
      ],
      color: "from-emerald-500/20 to-emerald-600/20"
    },
    {
      title: "Patrons",
      members: [
        "Joshua LaBeer, MD, PhD, Executive Director, Biodesign Institute, Professor, School of Molecular Sciences, ASU",
        "Dr. S. Narayanan, Vice Chancellor, KARE",
        "Dr. V. Vasudevan, Registrar, KARE"
      ],
      color: "from-amber-500/20 to-amber-600/20"
    },
    {
      title: "Organizing Chairs",
      members: [
        "Dr. K. Sundar, Senior Professor and Dean, SBCE, KARE",
        "Dr. Vel Murugan, Research Professor and Director of Clinical Research, Arizona State University, USA",
        "Dr. M. Pallikonda Rajasekaran, Director-R&D, KARE"
      ],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Conveners",
      members: [
        "Dr. B. Vanavil, Head, Department of Biotechnology, KARE",
        "Dr. R. Rajam, Head, Department of Food Technology, KARE"
      ],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Organizing Secretaries",
      members: [
        "Dr. S. Ram Kumar Pandian, Associate Professor, Department of Biotechnology, KARE",
        "Dr. S. Sheik Asraf, Associate Professor, Department of Biotechnology, KARE"
      ],
      color: "from-indigo-500/20 to-indigo-600/20"
    },

    // ✅ UPDATED: Joint Secretaries ONLY
    {
      title: "Joint Secretaries",
      members: [
        "Dr. K. Jyothi, Associate Professor",
        "Dr. P. Priya, Associate Professor"
      ],
      color: "from-rose-500/20 to-rose-600/20"
    },

    // ⭐ NEW: Treasurer section
    {
      title: "Treasurer",
      members: [
        "Dr. J. Kanimozhi, Associate Professor, Department of Biotechnology, KARE"
      ],
      color: "from-fuchsia-500/20 to-fuchsia-600/20"
    },

    {
      title: "Research Advisory Committee",
      members: [
        "Shwetal Mehta, PhD",
        "Professor, Department of Translational Neuroscience",
        "Deputy Director, IVY Brain Tumor Center",
        "Barrow Neurological Institute, Phoenix, AZ, USA"
      ],
      color: "from-cyan-500/20 to-teal-600/20"
    }
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <h2 className="text-2xl font-semibold text-emerald-400 text-center">
        Organizing Committee
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committees.map((committee, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br ${committee.color} backdrop-blur-sm p-6 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]`}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Title */}
            <h3 className="relative font-semibold text-slate-100 text-lg mb-4 bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              {committee.title}
            </h3>

            {/* Members */}
            <ul className="space-y-2 text-sm text-slate-200">
              {committee.members.map((member, i) => (
                <li
                  key={i}
                  className="group-hover:text-slate-100 flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform" />
                  <span>{member}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizingCommittee;
