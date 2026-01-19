import React from "react";

const Registration: React.FC = () => {
  const feeData = [
    {
      category: "UG Students",
      early: "₹3000",
      late: "₹3500",
      spot: "₹4000"
    },
    {
      category: "Graduate Students & Post-docs",
      early: "₹4000",
      late: "₹4500",
      spot: "₹5000"
    },
    {
      category: "Faculty / Scientist / Industry",
      early: "₹5000",
      late: "₹6000",
      spot: "₹6500"
    }
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent mb-2">
          Registration
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Inclusive of 18% GST. Register early to avail best rates!
        </p>
      </div>

      {/* Fees Table - Glassy responsive cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {feeData.map((row, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/70 backdrop-blur-xl p-8 hover:border-emerald-400/60 hover:shadow-2xl hover:shadow-emerald-500/20 hover:bg-gradient-to-b hover:from-emerald-500/5 hover:to-emerald-600/10 transition-all duration-700 hover:scale-[1.05] hover:-translate-y-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 -skew-x-12 transform -rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full group-hover:translate-x-full" />
            
            <div className="relative z-10 space-y-4">
              <h3 className="font-semibold text-lg text-slate-100 group-hover:text-emerald-300 transition-colors">
                {row.category}
              </h3>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-2xl bg-slate-800/50 backdrop-blur group-hover:bg-emerald-500/10 border border-slate-700/50 hover:border-emerald-400/50 transition-all">
                  <p className="text-xs text-slate-500 uppercase tracking-wider opacity-75">Early Bird</p>
                  <p className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400">{row.early}</p>
                </div>
                
                <div className="p-3 rounded-2xl bg-slate-800/50 backdrop-blur group-hover:bg-emerald-500/10 border border-slate-700/50 hover:border-emerald-400/50 transition-all">
                  <p className="text-xs text-slate-500 uppercase tracking-wider opacity-75">Late</p>
                  <p className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400">{row.late}</p>
                </div>
                
                <div className="p-3 rounded-2xl bg-slate-800/50 backdrop-blur group-hover:bg-emerald-500/10 border border-slate-700/50 hover:border-emerald-400/50 transition-all">
                  <p className="text-xs text-slate-500 uppercase tracking-wider opacity-75">Spot</p>
                  <p className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400">{row.spot}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Details & Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/70 backdrop-blur-xl p-8 hover:border-emerald-400/60 hover:shadow-2xl hover:shadow-emerald-500/20 hover:bg-gradient-to-b hover:from-emerald-500/5 hover:to-emerald-600/10 transition-all duration-700 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 -skew-x-12 transform -rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full group-hover:translate-x-full" />
          <div className="relative z-10 space-y-4">
            <h3 className="font-semibold text-xl text-slate-100 group-hover:text-emerald-300 flex items-center gap-2">
              🏦 Bank Details
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-mono text-emerald-400">Account:</span> Bioinnovate 2026</p>
              <p><span className="font-mono text-emerald-400">Bank:</span> Karur Vysya Bank</p>
              <p><span className="font-mono text-emerald-400">Branch:</span> Kalasalingam University EC (001818)</p>
              <p><span className="font-mono text-emerald-400">A/c No:</span> 1818155000002795</p>
              <p><span className="font-mono text-emerald-400">IFSC:</span> KVBL0001818</p>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/70 backdrop-blur-xl p-8 hover:border-emerald-400/60 hover:shadow-2xl hover:shadow-emerald-500/20 hover:bg-gradient-to-b hover:from-emerald-500/5 hover:to-emerald-600/10 transition-all duration-700 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 -skew-x-12 transform -rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full group-hover:translate-x-full" />
          <div className="relative z-10 space-y-4">
            <h3 className="font-semibold text-xl text-slate-100 group-hover:text-emerald-300 flex items-center gap-2">
              📋 Instructions
            </h3>
            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>DD in favour of "Bioinnovate 2026" payable at Krishnankoil</li>
              <li>Email remittance copy to <code className="bg-slate-800 px-2 py-1 rounded text-emerald-400">bioinnovate2026@klu.ac.in</code></li>
              <li>RTGS/NEFT/Wire Transfer using above details</li>
              <li>After March 26, 2026 = Spot registration rates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Abstract Submission Info */}
      <div className="pt-12 border-t-4 border-emerald-500/30 bg-gradient-to-r from-slate-900/50 to-transparent backdrop-blur-sm rounded-3xl p-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-semibold text-slate-100">
            📝 Abstract Submission
          </h3>

          <p className="text-sm text-slate-400">
            Authors are invited to submit **structured abstracts** using the template provided on the conference website, following the prescribed format for BIOINNOVATE 2026. 
          </p>

          <p className="text-sm text-slate-400">
            All abstracts must be submitted online through the conference submission portal; submissions sent by other means will not be considered. 
          </p>

          <p className="text-sm text-slate-400">
            Abstracts accepted for oral or poster presentation will be notified via email, and selected authors for oral presentation will deliver an 8‑minute talk followed by 2‑minute discussion. 
          </p>

          <p className="text-sm text-slate-400">
            Important dates: last date for abstract submission is February 10, 2026, and notification of acceptance will be sent by February 25, 2026. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
