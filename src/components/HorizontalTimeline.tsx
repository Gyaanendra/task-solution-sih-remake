"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/data/sih-data";
import { Check, ArrowRight } from "lucide-react";
import StaggeredTextReveal from "@/components/ui/StaggeredTextReveal";

export default function HorizontalTimeline() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const trigger = triggerRef.current;
      if (!track || !trigger) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      const horizontalTween = gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        horizontalTween.scrollTrigger?.kill();
        horizontalTween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="journey" className="relative border-t border-black/[0.08] dark:border-white/[0.08]">
      <div ref={triggerRef} className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6">
          {/* Header with Left Micro-Label */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-end">
            <div className="lg:col-span-2">
              <span className="micro-label block">02 / ROADMAP</span>
            </div>

            <div className="lg:col-span-7">
              <StaggeredTextReveal
                as="h2"
                text="The Six-Stage Selection Funnel."
                className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
                delay={0.1}
                stagger={0.05}
              />
              <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal">
                How an idea advances from campus internal hackathons to national blind evaluations and the Grand Finale sprint.
              </p>
            </div>

            <div className="lg:col-span-3 lg:text-right hidden lg:flex justify-end items-center gap-2 text-xs font-mono text-neutral-400">
              <span>Scroll to navigate phases</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
            </div>
          </div>
        </div>

        {/* Horizontal Moving Cards Track */}
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8 pb-24 lg:w-max"
        >
          {PROCESS_STEPS.map((step, idx) => {
            // Curated alternating squiggle styles for each stage of the funnel
            const squiggleType = idx % 3;

            return (
              <div
                key={step.step}
                className="group relative overflow-hidden w-full lg:w-[440px] flex-shrink-0 bg-white dark:bg-[#141519] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/25 rounded-2xl p-8 shadow-xs flex flex-col justify-between transition-all duration-300"
              >
                {/* Decorative Top-Right Corner SVG Squiggle Flow Line */}
                <div className="absolute top-0 right-0 w-44 h-32 pointer-events-none overflow-hidden select-none">
                  {squiggleType === 0 && (
                    <svg
                      viewBox="0 0 160 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full text-[#FF8A00] opacity-20 dark:opacity-25 group-hover:opacity-45 transition-opacity duration-500"
                    >
                      <path
                        d="M10 20C45 5 70 55 105 25C130 5 145 45 165 20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M25 40C60 25 85 75 120 45C140 25 155 60 175 35"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                        strokeOpacity="0.7"
                      />
                      <path
                        d="M0 65C30 50 60 90 90 70C120 50 140 85 160 65"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeOpacity="0.5"
                      />
                    </svg>
                  )}

                  {squiggleType === 1 && (
                    <svg
                      viewBox="0 0 160 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full text-[#FF8A00] opacity-20 dark:opacity-25 group-hover:opacity-45 transition-opacity duration-500"
                    >
                      <path
                        d="M10 80C30 30 65 10 95 40C125 70 140 20 165 45"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5 95C25 45 60 25 90 55C120 85 135 35 160 60"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        strokeOpacity="0.7"
                      />
                      <circle cx="95" cy="40" r="2.5" fill="currentColor" fillOpacity="0.6" />
                    </svg>
                  )}

                  {squiggleType === 2 && (
                    <svg
                      viewBox="0 0 160 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full text-[#FF8A00] opacity-20 dark:opacity-25 group-hover:opacity-45 transition-opacity duration-500"
                    >
                      <path
                        d="M20 15C35 45 60 10 80 40C100 70 125 25 145 55C155 70 165 60 170 65"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M40 30C55 60 80 25 100 55C120 85 140 45 155 70"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="5 3"
                        strokeOpacity="0.6"
                      />
                      <circle cx="80" cy="40" r="2" fill="currentColor" fillOpacity="0.6" />
                    </svg>
                  )}
                </div>

                {/* Decorative Bottom-Left Corner Subtle Fluid Ripple */}
                <div className="absolute -bottom-4 -left-4 w-32 h-24 pointer-events-none overflow-hidden select-none">
                  <svg
                    viewBox="0 0 120 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-neutral-400 dark:text-neutral-500 opacity-15 dark:opacity-20 group-hover:opacity-35 transition-opacity duration-500"
                  >
                    <path
                      d="M10 75C25 55 45 70 65 50C85 30 105 45 125 25"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M20 88C35 68 55 83 75 63C95 43 115 58 135 38"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 2"
                    />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif italic text-2xl text-neutral-400 font-normal">
                      0{step.step}.
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-6">
                    {step.lead}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                    OFFICIAL DELIVERABLE
                  </span>
                  <span className="text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
