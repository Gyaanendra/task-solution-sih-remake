"use client";

import { useState } from "react";
import { NODAL_CENTERS, NodalCenter } from "@/data/sih-data";
import { Radio, Navigation } from "lucide-react";
import StaggeredTextReveal from "@/components/ui/StaggeredTextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NodalRadar() {
  const [activeCenter, setActiveCenter] = useState<NodalCenter>(NODAL_CENTERS[0]);

  return (
    <section
      id="radar"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.08] dark:border-white/[0.08]"
    >
      {/* Header with Left Micro-Label */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-end">
        <div className="lg:col-span-2">
          <span className="micro-label block">05 / INFRASTRUCTURE</span>
        </div>

        <div className="lg:col-span-10">
          <StaggeredTextReveal
            as="h2"
            text="Seventy-Five Nodal Innovation Hubs."
            className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
            delay={0.1}
            stagger={0.045}
          />
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Shortlisted teams travel to premier IITs, NITs, and central university nodal centers across the country for the final evaluation sprint.
          </p>
        </div>
      </div>

      {/* Radar Map & Detail Grid */}
      <ScrollReveal preset="fadeUp" delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Radar Map (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#141519] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#E65100]" />
              <span className="text-xs font-mono font-semibold uppercase text-neutral-800 dark:text-neutral-200">
                ACTIVE RADAR TELEMETRY
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-[#FF7700] px-2 py-0.5 rounded bg-[#FF7700]/10 border border-[#FF7700]/20 font-semibold">
                SURVEILLANCE SCAN: ACTIVE
              </span>
              <span className="text-xs font-mono text-neutral-400">
                75 HUBS ONLINE
              </span>
            </div>
          </div>

          {/* India Sovereign Telemetry Map Canvas */}
          <div className="relative w-full h-[460px] sm:h-[520px] bg-neutral-50 dark:bg-[#0E0F12] rounded-xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden flex items-center justify-center select-none">
            {/* Top-Right HUD Coordinates Readout */}
            <div className="absolute top-3 right-3 z-20 flex flex-col items-end text-[9px] font-mono text-neutral-400 pointer-events-none">
              <span className="text-[#FF7700] font-semibold">GEOGRAPHIC RADAR 2026</span>
              <span>IST (UTC+05:30) &bull; 82.5&deg;E</span>
            </div>

            {/* Bottom-Left Latitude / Longitude Telemetry Stamp */}
            <div className="absolute bottom-3 left-3 z-20 text-[9px] font-mono text-neutral-400 pointer-events-none flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LAT 8&deg;4&prime;N &mdash; 37&deg;6&prime;N // LON 68&deg;7&prime;E &mdash; 97&deg;25&prime;E</span>
            </div>

            {/* Telemetry Grid Mesh & Concentric Range Arcs */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.12]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="telemetry-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#telemetry-grid)" />
              </svg>
            </div>

            {/* Master SVG Map of India */}
            <svg
              viewBox="0 0 500 580"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Concentric Radar Rings Centered on Central India */}
              <circle cx="215" cy="290" r="70" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.08" />
              <circle cx="215" cy="290" r="140" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.08" />
              <circle cx="215" cy="290" r="210" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.08" strokeDasharray="3 3" />
              <circle cx="215" cy="290" r="280" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.05" />

              {/* Cardinal Crosshairs */}
              <line x1="215" y1="20" x2="215" y2="560" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.06" strokeDasharray="2 2" />
              <line x1="20" y1="290" x2="480" y2="290" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.06" strokeDasharray="2 2" />

              {/* Tropic of Cancer (23.5° N) Latitude Marker */}
              <line x1="60" y1="265" x2="440" y2="265" stroke="currentColor" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 4" />
              <text x="70" y="260" fill="currentColor" fillOpacity="0.25" fontSize="8" fontFamily="monospace">TROPIC OF CANCER // 23.5&deg;N</text>

              {/* Authentic Sovereign Contour of India */}
              <path
                d="M 195 40 
                   L 215 45 L 235 62 L 248 85 L 238 108 L 244 125
                   L 225 138 L 260 160 L 305 182
                   L 322 168 L 328 178 L 338 184 L 365 186
                   L 390 152 L 430 142 L 458 165 L 465 190
                   L 468 220 L 450 250 L 444 290 L 426 278
                   L 402 238 L 378 245 L 372 278
                   L 375 292 L 362 312 L 340 348 L 308 402
                   L 278 456 L 252 505 L 216 560
                   L 202 525 L 186 455 L 172 414 L 152 365
                   L 142 318 L 118 326 L 88 312 L 102 280
                   L 86 260 L 68 244 L 78 228 L 112 196
                   L 126 162 L 148 132 L 168 98 L 176 64
                   Z"
                fill="currentColor"
                fillOpacity="0.03"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeOpacity="0.3"
                className="dark:fill-white dark:fill-opacity-[0.04] dark:stroke-white dark:stroke-opacity-40"
                strokeLinejoin="round"
              />

              {/* Lakshadweep & Andaman Nicobar Islands */}
              <circle cx="140" cy="495" r="2.5" fill="currentColor" fillOpacity="0.3" />
              <circle cx="136" cy="515" r="2" fill="currentColor" fillOpacity="0.3" />
              <circle cx="455" cy="430" r="2" fill="currentColor" fillOpacity="0.3" />
              <circle cx="458" cy="455" r="2.5" fill="currentColor" fillOpacity="0.3" />
              <circle cx="462" cy="485" r="2" fill="currentColor" fillOpacity="0.3" />

              {/* Rotating Telemetry Radar Sweep Beam */}
              <g className="origin-[215px_290px] animate-[spin_10s_linear_infinite]">
                <line x1="215" y1="290" x2="480" y2="290" stroke="#FF7700" strokeWidth="1.5" strokeOpacity="0.45" />
                <path d="M 215 290 L 480 240 A 270 270 0 0 1 480 290 Z" fill="#FF7700" fillOpacity="0.08" />
              </g>

              {/* Inter-Hub National Synchronization Telemetry Arcs */}
              <path d="M 190 174 L 130 336 L 210 418 L 220 360 Z" stroke="#FF7700" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 3" />
              <path d="M 190 174 L 240 208 L 340 267 L 410 197" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="3 3" />
            </svg>

            {/* Interactive Nodal Hub Pointers Pinned Accurately to Map of India */}
            {NODAL_CENTERS.map((hub) => {
              const isSelected = activeCenter.id === hub.id;

              return (
                <button
                  key={hub.id}
                  onClick={() => setActiveCenter(hub)}
                  style={{
                    left: `${hub.coordinates.x}%`,
                    top: `${hub.coordinates.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group p-2 transition-all cursor-pointer z-10 ${
                    isSelected ? "scale-125 z-30" : "hover:scale-110"
                  }`}
                  title={`${hub.name} (${hub.city})`}
                >
                  {/* Radar ping on selected active hub */}
                  {isSelected && (
                    <span className="absolute inset-1 rounded-full bg-[#FF7700] opacity-40 animate-ping pointer-events-none" />
                  )}

                  <span
                    className={`block w-2.5 h-2.5 rounded-full transition-all ${
                      isSelected
                        ? "bg-[#FF7700] ring-4 ring-[#FF7700]/30 shadow-md shadow-[#FF7700]/50"
                        : "bg-neutral-500 dark:bg-neutral-400 group-hover:bg-[#FF7700]"
                    }`}
                  />

                  {/* Geotag City Pill */}
                  <span
                    className={`absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono whitespace-nowrap px-1.5 py-0.5 rounded shadow-xs transition-opacity ${
                      isSelected
                        ? "bg-[#121316] text-white dark:bg-white dark:text-[#121316] opacity-100 font-bold border border-black/10 dark:border-white/10"
                        : "bg-white/95 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 opacity-0 group-hover:opacity-100 border border-black/10 dark:border-white/10"
                    }`}
                  >
                    {hub.city}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>&bull; SELECT ANY COORDINATE TO VIEW SPECIFICATIONS</span>
            <span className="font-semibold text-neutral-900 dark:text-white">{activeCenter.name}</span>
          </div>
        </div>

        {/* Selected Hub Detail Card (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-[#141519] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold uppercase">
              {activeCenter.category} Edition Host
            </span>
            <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
              <Navigation className="w-3 h-3 text-emerald-600" /> Operational
            </span>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
            {activeCenter.name}
          </h3>
          <span className="text-xs font-mono text-neutral-500 block mb-6">
            {activeCenter.city}, {activeCenter.state}
          </span>

          <div className="space-y-3 font-mono text-xs border-t border-b border-black/[0.06] dark:border-white/[0.06] py-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">TEAMS CAPACITY</span>
              <span className="font-semibold text-neutral-900 dark:text-white">
                {activeCenter.teamsHosted} Finalist Squads
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">NETWORK GRID</span>
              <span className="text-neutral-800 dark:text-neutral-200">
                Redundant Gigabit Optical Line
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">FACILITY ACCESS</span>
              <span className="text-neutral-800 dark:text-neutral-200">
                24/7 Prototyping Suites & 3D Fabrication
              </span>
            </div>
          </div>

          <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-2">
            REGIONAL HUBS:
          </span>
          <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
            {NODAL_CENTERS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setActiveCenter(hub)}
                className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                  activeCenter.id === hub.id
                    ? "bg-[#121316] text-white dark:bg-white dark:text-[#121316] font-bold"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200"
                }`}
              >
                {hub.city}
              </button>
            ))}
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
