"use client";

import { useState } from "react";
import { PAST_EDITIONS, PastEdition } from "@/data/sih-data";
import { ChevronRight } from "lucide-react";
import StaggeredTextReveal from "@/components/ui/StaggeredTextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PastEditions() {
  const [selectedEdition, setSelectedEdition] = useState<PastEdition>(PAST_EDITIONS[0]);

  return (
    <section id="archive" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.08] dark:border-white/[0.08]">
      {/* Header with Left Micro-Label */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
        <div className="lg:col-span-2">
          <span className="micro-label block">07 / ARCHIVE</span>
        </div>

        <div className="lg:col-span-10">
          <StaggeredTextReveal
            as="h2"
            text="Eight Consecutive Years of Proven Track Record."
            className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
            delay={0.1}
            stagger={0.045}
          />
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Tracing how an experimental 2017 initiative expanded into a national deep-tech pipeline generating 150+ operational venture spin-offs.
          </p>
        </div>
      </div>

      {/* Grid: Timeline List (5 cols) & Spotlight Card (7 cols) */}
      <ScrollReveal preset="fadeUp" delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-2">
          {PAST_EDITIONS.map((ed) => {
            const isSelected = selectedEdition.year === ed.year;

            return (
              <div
                key={ed.year}
                onClick={() => setSelectedEdition(ed)}
                className={`cursor-pointer p-4 rounded-xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-[#121316] text-white dark:bg-white dark:text-[#121316] border-[#121316] shadow-xs"
                    : "bg-white dark:bg-[#141519] text-neutral-700 dark:text-neutral-300 border-black/[0.08] dark:border-white/[0.08] hover:border-black/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-serif italic text-lg font-normal">{ed.year}</span>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider">
                      {ed.edition}
                    </span>
                    <span className="block text-[11px] opacity-70">
                      {ed.teams}
                    </span>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? "translate-x-1" : "opacity-40"
                  }`}
                />
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-[#141519] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-8 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold">
              SIH {selectedEdition.year} Retrospective
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {selectedEdition.nodalCenters}
            </span>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
            {selectedEdition.highlight}
          </h3>

          <div className="mb-6">
            <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-2">
              Key Strategic Focus
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedEdition.themeHighlights.map((th) => (
                <span
                  key={th}
                  className="px-2.5 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {th}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-xl border border-black/[0.06] dark:border-white/[0.06]">
            <span className="text-[10px] font-mono uppercase text-[#E65100] font-bold block mb-1">
              Spinoff Venture Born From This Cohort
            </span>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white font-sans">
              {selectedEdition.spotlightStartup}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);
}
