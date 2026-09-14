"use client";

import { useState } from "react";
import { NODAL_CENTERS, NodalCenter } from "@/data/sih-data";
import { Radio, Navigation } from "lucide-react";

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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Seventy-Five Nodal Innovation Hubs.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Shortlisted teams travel to premier IITs, NITs, and central university nodal centers across the country for the final evaluation sprint.
          </p>
        </div>
      </div>

      {/* Radar Map & Detail Grid */}
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
            <span className="text-xs font-mono text-neutral-400">
              75 HUBS ONLINE
            </span>
          </div>

          <div className="relative w-full h-[300px] sm:h-[340px] bg-neutral-50 dark:bg-neutral-900/60 rounded-xl border border-dashed border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center overflow-hidden">
            <div className="absolute w-64 h-64 rounded-full border border-black/[0.04] dark:border-white/[0.04] pointer-events-none" />
            <div className="absolute w-40 h-40 rounded-full border border-black/[0.04] dark:border-white/[0.04] pointer-events-none" />

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
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group p-2 transition-transform ${
                    isSelected ? "scale-125 z-20" : "hover:scale-110 z-10"
                  }`}
                  title={`${hub.name} (${hub.city})`}
                >
                  <span
                    className={`block w-2.5 h-2.5 rounded-full transition-all ${
                      isSelected
                        ? "bg-[#E65100] ring-4 ring-[#E65100]/20"
                        : "bg-neutral-400 dark:bg-neutral-600 group-hover:bg-[#E65100]"
                    }`}
                  />
                  <span
                    className={`hidden sm:block absolute top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap px-1.5 py-0.5 rounded shadow-xs transition-opacity ${
                      isSelected
                        ? "bg-[#121316] text-white opacity-100 font-medium"
                        : "bg-white/90 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 opacity-0 group-hover:opacity-100"
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
    </section>
  );
}
