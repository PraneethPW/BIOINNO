import React from "react";

const Venue: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-4">
      <h2 className="text-2xl font-semibold text-emerald-400">Venue</h2>
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        
        {/* Left: venue description */}
        <div className="space-y-3 text-sm leading-relaxed text-slate-200">
          <p>
            Kalasalingam Academy of Research and Education is located at
            Krishnankoil, near Srivilliputhur in Tamil Nadu, India.
          </p>
          <p>
            Srivilliputhur is an ancient town of religious significance and the
            birthplace of the Vaishnavite saints Periyazhvar and Andal, famous
            for the Andal Temple and the iconic 192 feet, 11-tiered temple
            tower.
          </p>
          <p>
            Nearby attractions include Sathuragiri Hills, known for rare
            medicinal plants, and Shenbaga Thoppu forest, a wildlife sanctuary
            that is home to the endangered Grizzled Giant Squirrel and diverse
            flora and fauna.
          </p>
          
          {/* Address + directions */}
          <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
            <h3 className="font-semibold text-slate-100 mb-2">📍 Exact Address</h3>
            <p className="text-xs text-slate-300 mb-2">
              Kalasalingam Academy of Research and Education<br/>
              Krishnankoil – 626126<br/>
              Virudhunagar District, Tamil Nadu, India
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Kalasalingam+Academy+of+Research+and+Education,+Krishnankoil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 rounded-lg hover:bg-emerald-400"
            >
              🗺️ Get Directions
            </a>
          </div>
        </div>

        {/* Right: Google Maps iframe - YOUR EXACT EMBED */}
        <div className="space-y-3">
          <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700 shadow-2xl shadow-slate-900/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.2384182262695!2d77.67723877480093!3d9.574705190510054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06dbc06968e9eb%3A0x6cfd8f94e42f98c4!2sKalasalingam%20Academy%20of%20Research%20and%20Education!5e0!3m2!1sen!2sin!4v1768816981712!5m2!1sen!2sin"
              width="100%"
              height="320"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KARE Campus - BioInnovate 2026"
              className="w-full"
            />
          </div>
          <p className="text-xs text-slate-400 text-center">
            Kalasalingam Academy of Research and Education, Krishnankoil
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
