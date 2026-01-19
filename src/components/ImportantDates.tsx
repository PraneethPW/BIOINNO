import React from "react";

const ImportantDates: React.FC = () => {
  const dates = [
    { title: "Last date for submission of abstract", date: "February 10, 2026" },
    { title: "Notification of acceptance of abstract", date: "February 25, 2026" },
    { title: "Last date for Early Bird Registration", date: "March 26, 2026" },
    { title: "Conference dates", date: "April 9–11, 2026" }
  ];

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
         Important Dates
      </h2>
      
      <div className="overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950/80 backdrop-blur-xl shadow-2xl relative group">
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-white/10 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-all duration-1000 -skew-x-12 -translate-x-full group-hover:translate-x-full" />
        
        <table className="min-w-full text-sm relative z-10">
          <tbody>
            {dates.map((item, index) => (
              <tr 
                key={index}
                className="group/item border-b border-slate-800/50 hover:bg-emerald-500/5 hover:border-emerald-400/30 transition-all duration-500 hover:shadow-inner hover:shadow-emerald-500/20"
              >
                <td className="px-6 py-5 font-medium text-slate-300 group-hover/item:text-emerald-300 group-hover/item:font-semibold">
                  {item.title}
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="group-hover/item:scale-105 group-hover/item:rotate-3 transition-all duration-500">
                    <span className="text-xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg group-hover/item:shadow-emerald-500/50">
                      {item.date}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;
