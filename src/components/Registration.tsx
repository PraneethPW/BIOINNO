import React, { useEffect, useRef, useState } from "react";

/* =========================
   Counter Animation Helper
========================= */
const animateValue = (
  end: number,
  duration: number,
  onUpdate: (value: number) => void
) => {
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    onUpdate(Math.floor(progress * end));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

type FeeCount = {
  early: number;
  late: number;
  spot: number;
};

const Registration: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const feeData = [
    { category: "UG Students", early: 3000, late: 3500, spot: 4000 },
    { category: "Graduate Students & Post-docs", early: 4000, late: 4500, spot: 5000 },
    { category: "Faculty / Scientist / Industry", early: 5000, late: 6000, spot: 6500 }
  ];

  const [counts, setCounts] = useState<FeeCount[]>(
    feeData.map(() => ({ early: 0, late: 0, spot: 0 }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setCounts(feeData.map(() => ({ early: 0, late: 0, spot: 0 })));

        feeData.forEach((row, index) => {
          animateValue(row.early, 1200, value =>
            setCounts(prev => {
              const copy = [...prev];
              copy[index] = { ...copy[index], early: value };
              return copy;
            })
          );

          animateValue(row.late, 1400, value =>
            setCounts(prev => {
              const copy = [...prev];
              copy[index] = { ...copy[index], late: value };
              return copy;
            })
          );

          animateValue(row.spot, 1600, value =>
            setCounts(prev => {
              const copy = [...prev];
              copy[index] = { ...copy[index], spot: value };
              return copy;
            })
          );
        });
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent mb-2">
          Registration
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Inclusive of 18% GST. Register early to avail best rates!
        </p>
      </div>

      {/* Fees */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {feeData.map((row, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden rounded-3xl
              border border-slate-700/50
              bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/70
              backdrop-blur-xl
              p-6 sm:p-8
              transition-all duration-500 ease-out
              hover:-translate-y-2 hover:scale-[1.03]
              hover:border-emerald-400/60
              hover:shadow-2xl hover:shadow-emerald-500/20
            "
          >
            {/* Gradient sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />

            <h3 className="relative z-10 text-center sm:text-left font-semibold text-lg text-slate-100 mb-6 group-hover:text-emerald-300 transition-colors">
              {row.category}
            </h3>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(["early", "late", "spot"] as const).map(type => (
                <div
                  key={type}
                  className="
                    flex flex-col items-center justify-center
                    rounded-2xl bg-slate-800/50
                    border border-slate-700/50
                    px-4 py-4 text-center
                    transition-all duration-300
                    hover:border-emerald-400/50
                    hover:bg-emerald-500/10
                  "
                >
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    {type === "early" ? "Early Bird" : type}
                  </p>
                  <p className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    ₹{counts[index][type]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bank & Instructions — SAME EFFECTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            title: "🏦 Bank Details",
            content: (
              <>
                <p><span className="text-emerald-400">Account:</span> Bioinnovate 2026</p>
                <p><span className="text-emerald-400">Bank:</span> Karur Vysya Bank</p>
                <p><span className="text-emerald-400">Branch:</span> Kalasalingam University EC (001818)</p>
                <p><span className="text-emerald-400">A/c No:</span> 1818155000002795</p>
                <p><span className="text-emerald-400">IFSC:</span> KVBL0001818</p>
              </>
            )
          },
          {
            title: "📋 Instructions",
            content: (
              <ul className="space-y-2 list-disc list-inside">
                <li>DD in favour of "Bioinnovate 2026" payable at Krishnankoil</li>
                <li>Email remittance copy to <code className="text-emerald-400">bioinnovate2026@klu.ac.in</code></li>
                <li>RTGS / NEFT / Wire Transfer using above details</li>
                <li>After March 26, 2026 = Spot registration rates</li>
              </ul>
            )
          }
        ].map((card, i) => (
          <div
            key={i}
            className="
              group relative overflow-hidden rounded-3xl
              border border-slate-700/50
              bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/70
              backdrop-blur-xl p-8
              transition-all duration-500
              hover:-translate-y-2 hover:scale-[1.02]
              hover:border-emerald-400/60
              hover:shadow-2xl hover:shadow-emerald-500/20
            "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />

            <h3 className="relative z-10 font-semibold text-xl text-slate-100 mb-4 group-hover:text-emerald-300 transition-colors">
              {card.title}
            </h3>

            <div className="relative z-10 space-y-2 text-sm text-slate-300">
              {card.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registration;
