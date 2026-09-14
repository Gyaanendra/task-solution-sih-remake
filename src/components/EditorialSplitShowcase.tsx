"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ChevronRight, Cpu, Layers, Sparkles, Terminal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ShowcaseItem {
  id: string;
  category: string;
  title: string;
  code: string;
  image: string;
  alt: string;
  bottleneck: string;
  system: string;
  ministry: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "energy",
    category: "Energy & Grid Infrastructure",
    title: "Asset Performance Monitoring",
    code: "SIH-2026-EN01",
    image: "/showcase/wind_turbine.jpg",
    alt: "Aerial wind turbine over arable landscape",
    bottleneck:
      "Energy teams manage assets across fragmented telemetry, weather reports, maintenance logs, and market signals while operational risk moves faster than manual review cycles.",
    system:
      "Student finalists engineered edge neural telemetry that unifies turbine vibration FFTs, wind shear forecasts, and transformer heat signatures into sub-second predictive trip prevention models.",
    ministry: "Ministry of New and Renewable Energy / NTPC",
    metrics: [
      { label: "Downtime Cut", value: "-42%" },
      { label: "Inference Latency", value: "85ms" },
      { label: "Deployment", value: "14 Grid Hubs" },
    ],
    tags: ["Renewable Energy", "Edge AI", "Predictive Maintenance", "Grid Telemetry"],
  },
  {
    id: "space",
    category: "Space Technology & ISRO",
    title: "Autonomous Rover Telemetry",
    code: "SIH-2026-SP04",
    image: "/showcase/space_rover.jpg",
    alt: "Autonomous lunar planetary exploration rover on cratered terrain",
    bottleneck:
      "Lunar and Martian rovers experience critical 3 to 20-minute signal transmission lags to ground stations, making teleoperated obstacle avoidance dangerous on rugged boulder terrains.",
    system:
      "An onboard stereo-vision SLAM pipeline running on radiation-tolerant FPGA modules autonomously builds real-time 3D elevation maps, safely plotting traversal routes at 3.5x normal speeds.",
    ministry: "Department of Space (ISRO)",
    metrics: [
      { label: "Obstacle Precision", value: "98.4%" },
      { label: "Onboard Compute", value: "<15W" },
      { label: "Autonomy Level", value: "Level 4" },
    ],
    tags: ["ISRO", "Computer Vision", "Lunar Navigation", "FPGA"],
  },
  {
    id: "robotics",
    category: "Disaster Risk & Robotics",
    title: "Search & Rescue Alpine Drone",
    code: "SIH-2026-RO08",
    image: "/showcase/rescue_drone.jpg",
    alt: "Search and rescue quadcopter drone over mountain valley",
    bottleneck:
      "Mountain landslides and avalanches sever road access and radio relays, leaving rescue teams blind to survivor locations during the critical first 24-hour survival window.",
    system:
      "A swarm of tetherless UAVs equipped with micro-radar life sensors and infrared thermal arrays establishes a decentralized Wi-Fi Direct rescue mesh, streaming GPS survivor coordinates directly to emergency responders.",
    ministry: "National Disaster Management Authority (NDMA)",
    metrics: [
      { label: "Response Window", value: "<18 Min" },
      { label: "Thermal Range", value: "1.2 km" },
      { label: "Mesh Relay", value: "6 Nodes" },
    ],
    tags: ["NDMA", "Autonomous UAV", "Thermal Vision", "Mesh Network"],
  },
];

interface EditorialSplitShowcaseProps {
  onOpenExplorer?: (theme?: string) => void;
}

export default function EditorialSplitShowcase({ onOpenExplorer }: EditorialSplitShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".editorial-content-block");

      sections.forEach((sec, idx) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(idx),
          onEnterBack: () => setActiveIndex(idx),
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="editorial-showcase"
      className="relative w-full bg-[#FAF9F5] dark:bg-[#0C0D0E] text-[#121316] dark:text-[#F3F4F6] border-y border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-500"
    >
      {/* Editorial Header Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 dark:border-neutral-800/60 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF7700] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7700] dark:text-[#FFA040]">
              Case Dossier / Problem Engineering
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white font-sans">
            How Hackathon Solutions <br className="hidden sm:inline" />
            Become Sovereign Systems.
          </h2>
        </div>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 max-w-sm">
          Scroll to explore benchmark problem statements where student architecture bridges academic research into live ministerial deployment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Sticky Viewport Column (Matches user's reference screenshot) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 z-20">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 shadow-2xl group">
              
              {/* Media aspect container */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden bg-black">
                {SHOWCASE_ITEMS.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-out transform ${
                      activeIndex === idx
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      priority={idx === 0}
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Subtle Vignette Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                ))}

                {/* Overlaid Data Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                  <Cpu className="w-3.5 h-3.5 text-[#00F5A0]" />
                  <span className="text-[11px] font-mono tracking-wider text-white">
                    {SHOWCASE_ITEMS[activeIndex].code}
                  </span>
                </div>

                {/* Ministry Pin Tag */}
                <div className="absolute bottom-4 left-4 right-16 z-10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Sponsoring Authority
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white truncate">
                    {SHOWCASE_ITEMS[activeIndex].ministry}
                  </div>
                </div>

                {/* Right Edge Vertical Progress Indicator (Exact match to user's uploaded reference: | · · ·) */}
                <div className="absolute right-4 bottom-5 top-5 flex flex-col justify-end items-center gap-2 z-20 pointer-events-none">
                  {SHOWCASE_ITEMS.map((_, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      {activeIndex === idx ? (
                        <div className="w-[3px] h-6 rounded-full bg-white transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 my-0.5 transition-all duration-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick-Metrics Strip */}
              <div className="grid grid-cols-3 divide-x divide-neutral-200 dark:divide-neutral-800 bg-neutral-100/90 dark:bg-neutral-900/90 border-t border-neutral-200 dark:border-neutral-800 py-3 px-4 backdrop-blur-sm">
                {SHOWCASE_ITEMS[activeIndex].metrics.map((m, mIdx) => (
                  <div key={mIdx} className="px-2 text-center">
                    <div className="text-base sm:text-lg font-bold font-mono text-neutral-900 dark:text-white">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile navigation buttons */}
            <div className="flex lg:hidden items-center justify-between mt-4">
              <span className="text-xs font-mono text-neutral-500">
                0{activeIndex + 1} / 0{SHOWCASE_ITEMS.length}
              </span>
              <div className="flex gap-2">
                {SHOWCASE_ITEMS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const el = document.getElementById(`dossier-item-${idx}`);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === idx ? "w-6 bg-[#FF7700]" : "w-2 bg-neutral-300 dark:bg-neutral-700"
                    }`}
                    aria-label={`Jump to item ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Editorial Scrolling Column */}
          <div className="lg:col-span-6 flex flex-col space-y-24 lg:space-y-36 pb-12">
            {SHOWCASE_ITEMS.map((item, idx) => (
              <article
                key={item.id}
                id={`dossier-item-${idx}`}
                className="editorial-content-block flex flex-col pt-4 lg:pt-8"
              >
                {/* Category Minimal Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF7700] dark:text-[#FFA040]">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    [ 0{idx + 1} // 0{SHOWCASE_ITEMS.length} ]
                  </span>
                </div>

                {/* Big Bold Minimalist Headline (Matches user reference style) */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.08] mb-8 font-sans">
                  {item.title}
                </h3>

                {/* Structured Breakdown: Bottleneck */}
                <div className="mb-6 group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <h4 className="text-sm font-semibold tracking-wide uppercase font-mono text-neutral-900 dark:text-neutral-200">
                      Bottleneck
                    </h4>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal">
                    {item.bottleneck}
                  </p>
                </div>

                {/* Structured Breakdown: System */}
                <div className="mb-8 group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <h4 className="text-sm font-semibold tracking-wide uppercase font-mono text-neutral-900 dark:text-neutral-200">
                      System
                    </h4>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal">
                    {item.system}
                  </p>
                </div>

                {/* Tags & Action Row */}
                <div className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      const problemSection = document.getElementById("problems");
                      problemSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#FF7700] dark:text-[#FFA040] hover:underline cursor-pointer group"
                  >
                    <span>View similar statements</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
