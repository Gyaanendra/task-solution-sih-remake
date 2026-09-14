"use client";

import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { NODAL_CENTERS, NodalCenter } from "@/data/sih-data";
import { Radio, Navigation } from "lucide-react";
import StaggeredTextReveal from "@/components/ui/StaggeredTextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";

const INDIA_TOPO_URL = "/maps/india-states.json";

export default function NodalRadar() {
  const [activeCenter, setActiveCenter] = useState<NodalCenter>(NODAL_CENTERS[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

          {/* India Sovereign Telemetry Map Canvas (React Simple Maps GIS Engine) */}
          <div className="relative w-full h-[460px] sm:h-[540px] bg-neutral-50 dark:bg-[#0E0F12] rounded-xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden flex items-center justify-center select-none">
            {/* Top-Right HUD Coordinates Readout */}
            <div className="absolute top-3 right-3 z-20 flex flex-col items-end text-[9px] font-mono text-neutral-400 pointer-events-none">
              <span className="text-[#FF7700] font-semibold">GIS TELEMETRY PROJECTION // 2026</span>
              <span>GEOMERCATOR &bull; CENTER [82.5&deg;E, 22.5&deg;N]</span>
            </div>

            {/* Bottom-Left Latitude / Longitude Telemetry Stamp */}
            <div className="absolute bottom-3 left-3 z-20 text-[9px] font-mono text-neutral-400 pointer-events-none flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>36 STATES &amp; UTs &bull; REACT-SIMPLE-MAPS</span>
            </div>

            {/* Telemetry Grid Mesh */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.12]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="telemetry-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#telemetry-grid)" />
              </svg>
            </div>

            {/* Rotating Telemetry Radar Sweep Beam */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full border border-black/[0.04] dark:border-white/[0.04] relative origin-center animate-[spin_12s_linear_infinite]">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#FF7700]/10 via-[#FF7700]/3 to-transparent rounded-tr-full" />
                <div className="absolute top-0 right-1/2 w-1/2 h-[1px] bg-gradient-to-l from-[#FF7700]/35 to-transparent" />
              </div>
            </div>

            {/* React Simple Maps Composable Map */}
            {isMounted ? (
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 980,
                  center: [82.5, 22.5],
                }}
                width={800}
                height={600}
                className="w-full h-full relative z-10"
              >
                {/* Geographies: 36 States & UTs of India */}
                <Geographies geography={INDIA_TOPO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const stateName = geo.properties?.st_nm || "";
                      const isHostState = activeCenter.state.toLowerCase() === stateName.toLowerCase();

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          className={`transition-colors duration-300 focus:outline-hidden cursor-pointer ${
                            isHostState
                              ? "fill-[#FF7700]/25 stroke-[#FF7700]"
                              : "fill-black/[0.04] dark:fill-white/[0.04] stroke-black/20 dark:stroke-white/20 hover:fill-[#FF7700]/15 hover:stroke-[#FF7700]"
                          }`}
                          strokeWidth={isHostState ? 1.4 : 0.6}
                          style={{ outline: "none" }}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* Geotagged Nodal Centers via RSM Marker */}
                {NODAL_CENTERS.map((hub) => {
                  const isSelected = activeCenter.id === hub.id;

                  return (
                    <Marker
                      key={hub.id}
                      coordinates={hub.geoCoordinates}
                      onClick={() => setActiveCenter(hub)}
                      className="cursor-pointer group focus:outline-hidden"
                    >
                      {/* Active Nodal Ping Beacon */}
                      {isSelected && (
                        <>
                          <circle r={14} fill="#FF7700" fillOpacity={0.3} className="animate-ping" />
                          <circle r={9} fill="none" stroke="#FF7700" strokeWidth={1.5} strokeDasharray="3 3" />
                        </>
                      )}

                      {/* Hub Core Node */}
                      <circle
                        r={isSelected ? 5.5 : 3.5}
                        fill={isSelected ? "#FF7700" : "#E65100"}
                        stroke="#FFFFFF"
                        strokeWidth={isSelected ? 2 : 1}
                        className="transition-transform duration-300 group-hover:scale-125"
                      />

                      {/* City Badge */}
                      <g
                        className={`transition-opacity duration-200 pointer-events-none select-none ${
                          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <rect
                          x={-34}
                          y={-22}
                          width={68}
                          height={15}
                          rx={3}
                          fill="#121316"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth={0.6}
                        />
                        <text
                          textAnchor="middle"
                          y={-11}
                          fill="#FFFFFF"
                          fontSize={8}
                          fontFamily="monospace"
                          fontWeight="bold"
                          letterSpacing="0.05em"
                        >
                          {hub.city.toUpperCase()}
                        </text>
                      </g>
                    </Marker>
                  );
                })}
              </ComposableMap>
            ) : (
              <div className="flex items-center justify-center text-xs font-mono text-neutral-400">
                <span>INITIALIZING GIS ENGINE...</span>
              </div>
            )}
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
          <div className="flex overflow-x-auto sm:flex-wrap scrollbar-none gap-1.5 py-1 -mx-2 px-2 sm:mx-0 sm:px-0 max-h-32">
            {NODAL_CENTERS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setActiveCenter(hub)}
                className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors flex-shrink-0 sm:flex-shrink ${
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
