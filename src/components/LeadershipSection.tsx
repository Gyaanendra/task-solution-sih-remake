"use client";

import { LEADERSHIP_DATA } from "@/data/sih-data";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.08] dark:border-white/[0.08]">
      {/* Header with Left Micro-Label (HireLaw Inspiration) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
        <div className="lg:col-span-2">
          <span className="micro-label block">06 / LEADERSHIP</span>
        </div>

        <div className="lg:col-span-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Visionary Patronage for Viksit Bharat.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Bridging the historic divide between academic curriculum and operational government problem-solving.
          </p>
        </div>
      </div>

      {/* Leadership Cards (HireLaw Attorney Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LEADERSHIP_DATA.map((leader, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#141519] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-8 shadow-xs flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#E65100] uppercase font-bold block mb-4">
                {leader.highlight}
              </span>

              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-serif italic mb-8">
                &ldquo;{leader.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
              <h3 className="font-bold text-base text-neutral-900 dark:text-white">
                {leader.name}
              </h3>
              <p className="text-xs text-neutral-500 font-sans mt-0.5">
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
