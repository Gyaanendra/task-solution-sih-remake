"use client";

import { LEADERSHIP_DATA } from "@/data/sih-data";
import StaggeredTextReveal from "@/components/ui/StaggeredTextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.08] dark:border-white/[0.08]">
      {/* Header with Left Micro-Label (HireLaw Inspiration) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
        <div className="lg:col-span-2">
          <span className="micro-label block">06 / LEADERSHIP</span>
        </div>

        <div className="lg:col-span-10">
          <StaggeredTextReveal
            as="h2"
            text="Visionary Patronage for Viksit Bharat."
            className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
            delay={0.1}
            stagger={0.045}
          />
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Bridging the historic divide between academic curriculum and operational government problem-solving.
          </p>
        </div>
      </div>

      {/* Leadership Cards (Responsive Grid / Mobile Touch Carousel) */}
      <ScrollReveal preset="staggerUp" stagger={0.1} childSelector=".leadership-card">
        <div className="md:hidden flex items-center justify-between mb-4 px-1 text-xs font-mono text-neutral-500">
          <span>GOVERNANCE PERSPECTIVES</span>
          <span className="text-[#FF7700] flex items-center gap-1 font-semibold">
            SWIPE QUOTES &rarr;
          </span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 md:grid-cols-3 gap-6 pb-4 md:pb-0">
          {LEADERSHIP_DATA.map((leader, idx) => (
            <div
              key={idx}
              className="leadership-card w-[84vw] max-w-[340px] md:w-auto flex-shrink-0 snap-center bg-white dark:bg-[#141519] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-7 sm:p-8 shadow-xs flex flex-col justify-between hover:border-black/20 dark:hover:border-white/20 transition-all"
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
      </ScrollReveal>
    </section>
  );
}
