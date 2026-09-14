"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/data/sih-data";
import { Check, ArrowRight } from "lucide-react";

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
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                The Six-Stage Selection Funnel.
              </h2>
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
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="w-full lg:w-[440px] flex-shrink-0 bg-white dark:bg-[#141519] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
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

              <div className="mt-8 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                  OFFICIAL DELIVERABLE
                </span>
                <span className="text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
