"use client";

import { ArrowUpRight, Code2, Cpu, Sparkles, Layers, Award } from "lucide-react";
import StaggeredTextReveal from "@/components/ui/StaggeredTextReveal";

export default function MetricsBento() {
  return (
    <section
      id="arena"
      className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-black/[0.08] dark:border-white/[0.08]"
    >
      {/* Editorial Headline Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF7700]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#FF7700] uppercase font-bold">
              THE NATIONAL ARENA ARCHITECTURE
            </span>
          </div>

          <StaggeredTextReveal
            as="h2"
            text="Two Disciplines of Sovereign Engineering."
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.06] [text-wrap:balance]"
            delay={0.1}
            stagger={0.05}
          />

          <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-3xl [text-wrap:pretty]">
            Smart India Hackathon diverges into two dedicated national formats. Student squads choose between intense continuous algorithmic coding or 5-day hands-on physical hardware fabrication inside sovereign nodal makerspaces.
          </p>
        </div>

        <div className="lg:col-span-4 lg:text-right flex flex-col justify-end">
          <div className="p-4 rounded-xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-black/[0.06] dark:border-white/[0.08] text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
              BENCHMARK COMPLIANCE
            </span>
            <p className="text-xs font-mono text-neutral-700 dark:text-neutral-300">
              Evaluated directly by Senior Scientists, DG-level Ministry Officers, and Chief Architects.
            </p>
          </div>
        </div>
      </div>

      {/* Spacious 2-Column Broadsheet Dossier (Software vs Hardware) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch mb-20">
        {/* Software Broadside */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121417] border border-black/[0.08] dark:border-white/[0.08] flex flex-col justify-between shadow-xs relative overflow-hidden group hover:border-[#FF7700]/40 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                    TRACK A &bull; DIGITAL DEPLOYMENT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    Software Edition
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">
                36H NON-STOP
              </span>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mb-8">
              A grueling 36-hour sprint where squads architect production-grade software solutions: cloud microservices, computer vision pipelines, multi-lingual voice intelligence, and cryptographically verified public ledgers.
            </p>

            <div className="space-y-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.06] text-xs font-mono">
              <div className="flex items-center justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-neutral-400">BENCHMARK CRITERIA</span>
                <span className="text-neutral-800 dark:text-neutral-200 font-semibold">Sub-500ms Latency, Zero Mock Data</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-neutral-400">MENTORSHIP LOOPS</span>
                <span className="text-neutral-800 dark:text-neutral-200 font-semibold">3 Compulsory Midnight Jury Checkpoints</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-neutral-400">KEY DOMAINS</span>
                <span className="text-neutral-800 dark:text-neutral-200 font-semibold">ISRO Space AI, ABDM Health, MeitY Sec</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-400">SANDBOX CLOUD GRANTS INCLUDED</span>
            <a
              href="#problems"
              className="text-[#FF7700] hover:underline font-semibold flex items-center gap-1"
            >
              <span>Explore Software Challenges</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Hardware Broadside */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121417] border border-black/[0.08] dark:border-white/[0.08] flex flex-col justify-between shadow-xs relative overflow-hidden group hover:border-[#FF7700]/40 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF7700]/5 to-transparent rounded-bl-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FF7700]/10 text-[#FF7700] flex items-center justify-center">
                  <Cpu className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                    TRACK B &bull; EMBEDDED FABRICATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    Hardware Edition
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF7700]/10 text-[#FF7700] font-bold">
                120H / 5 DAYS
              </span>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mb-8">
              A physical engineering odyssey hosted across dedicated nodal engineering institutes. Squads utilize state-of-the-art CNC mills, PCB prototyping labs, 3D printers, and wind/stress testing rigs to deliver tangible devices.
            </p>

            <div className="space-y-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.06] text-xs font-mono">
              <div className="flex items-center justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-neutral-400">BENCHMARK CRITERIA</span>
                <span className="text-neutral-800 dark:text-neutral-200 font-semibold">Functional Mechanical & Sensor Proof-of-Work</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-neutral-400">COMPONENT LOGISTICS</span>
                <span className="text-neutral-800 dark:text-neutral-200 font-semibold">On-site Component Stores & Rapid Procurement</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-neutral-400">KEY DOMAINS</span>
                <span className="text-neutral-800 dark:text-neutral-200 font-semibold">Railways Inspection, Drone Buoys, Agritech</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-400">UP TO ₹1,00,000 PER WINNING PROTOTYPE</span>
            <a
              href="#problems"
              className="text-[#FF7700] hover:underline font-semibold flex items-center gap-1"
            >
              <span>Explore Hardware Challenges</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Editorial National Benchmark Metrics Strip */}
      <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white dark:bg-[#14161A] border border-neutral-800 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          <div className="pt-4 md:pt-0 md:pr-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              APEX COHORT CAPACITY
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2">
              1.8M+
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              Student participants registered across 28 States and 8 Union Territories.
            </p>
          </div>

          <div className="pt-4 md:pt-0 md:px-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              GOVERNMENT CHALLENGES
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#FF7700] mb-2">
              3,158
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              Active problem statements contributed by 60+ Central Ministries.
            </p>
          </div>

          <div className="pt-4 md:pt-0 md:px-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              PAN-INDIA NODAL LABS
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2">
              75+
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              Premier IITs, NITs, and IIITs hosting synchronized national grand finales.
            </p>
          </div>

          <div className="pt-4 md:pt-0 md:pl-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              INCUBATION & CAPITAL
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-emerald-400 mb-2">
              ₹2.5 Cr+
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              Cumulative prize capital, prototyping grants, and institutional funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
