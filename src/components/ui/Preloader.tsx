"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const YEARS = ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26"];

export default function Preloader() {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const leftRailRef = useRef<HTMLDivElement>(null);
  const bottomQuoteRef = useRef<HTMLDivElement>(null);
  const editionTagRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setIsDone(true);
      return;
    }

    // Freeze page scrolling during preloader
    document.body.style.overflow = "hidden";

    const content = contentRef.current;
    const reel = reelRef.current;
    const leftRail = leftRailRef.current;
    const bottomQuote = bottomQuoteRef.current;
    const editionTag = editionTagRef.current;

    if (!reel) return;

    // Target yPercent: 10 items total.
    // Index 0 ("17") is at 0%.
    // Index 9 ("26") is at -((10 - 1) / 10) * 100% = -90%.
    const targetYPercent = -((YEARS.length - 1) / YEARS.length) * 100;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Restore scrolling only after the entire animation and buffer have fully completed
          document.body.style.overflow = "";
          setIsDone(true);
        },
      });

      // 1. Initial entrance: Display typography, vertical rail, and staggered tagline glide in with poised grace
      tl.fromTo(
        [content, leftRail],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }
      );
      tl.fromTo(
        ".preloader-word",
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.035, ease: "power3.out" },
        "<0.1"
      );
      tl.fromTo(
        ".preloader-subword",
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.025, ease: "power3.out" },
        "<0.15"
      );

      // 2. Poised hold on 2017 to establish the historic starting milestone
      tl.to({}, { duration: 0.35 });

      // 3. Silky, magnetic, aerodynamic roll from 2017 smoothly accelerating & decelerating into 2026
      tl.to(reel, {
        yPercent: targetYPercent,
        duration: 1.45,
        ease: "power3.inOut",
      });

      // 4. Reveal the EDITION IX stamp with subtle bloom as 2026 settles
      if (editionTag) {
        tl.fromTo(
          editionTag,
          { opacity: 0, scale: 0.88, y: 4 },
          { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "power2.out" },
          "-=0.35"
        );
      }

      // 5. Stately completion hold on the 2026 lockup
      tl.to({}, { duration: 0.55 });

      // 6. Typographic layer glides upwards gracefully
      tl.to(
        [".preloader-word", ".preloader-subword"],
        {
          yPercent: -120,
          opacity: 0,
          duration: 0.35,
          stagger: 0.02,
          ease: "power2.in",
        }
      );
      tl.to(
        [content, leftRail],
        {
          y: -40,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.04,
        },
        "<"
      );

      // 7. Stately, velvety architectural multi-bar curtain wave unveiling the site
      tl.to(
        ".preloader-bar",
        {
          yPercent: -105,
          duration: 0.9,
          stagger: {
            each: 0.05,
            from: "start",
          },
          ease: "power4.inOut",
        },
        "-=0.15"
      );

      // 8. Buffer pause to ensure the last bar has 100% cleared before unmounting
      tl.to({}, { duration: 0.15 });
    }, containerRef);

    // Safety fallback (6.0s)
    const safety = setTimeout(() => {
      document.body.style.overflow = "";
      setIsDone(true);
    }, 6000);

    return () => {
      clearTimeout(safety);
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-transparent pointer-events-auto select-none overflow-hidden"
      aria-label="Smart India Hackathon Preloader"
    >
      {/* 5 Architectural Vertical Bars (Columns) that form the dark backdrop and wave up smoothly */}
      <div className="absolute inset-0 flex z-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="preloader-bar h-full bg-[#161514] border-r border-white/5 last:border-r-0 will-change-transform"
            style={{
              width: "calc(20% + 1px)",
              marginRight: "-1px",
            }}
          />
        ))}
      </div>

      {/* Content Layer (z-10, sits cleanly on top of the bars) */}
      <div className="relative w-full h-full flex flex-row z-10">
        {/* Left Vertical Architectural Rail (Studied from Vietnamese folio reference) */}
        <aside
          ref={leftRailRef}
          className="hidden sm:flex w-16 lg:w-20 h-full border-r border-white/10 flex-col justify-between items-center py-8 text-neutral-400 will-change-transform"
        >
          {/* Top Minimalist Double-Line Icon */}
          <div className="flex flex-col gap-1.5 w-6 cursor-default">
            <span className="w-full h-[1.5px] bg-white/70 block" />
            <span className="w-4/5 h-[1.5px] bg-white/70 block" />
          </div>

          {/* Center Rotated Vertical Architectural Text */}
          <div className="flex flex-col items-center gap-6 py-6 [writing-mode:vertical-rl] rotate-180 text-[10px] font-mono tracking-[0.28em] uppercase">
            <span className="text-white/60">FOLIO // EDITION IX</span>
            <span className="w-8 h-[1px] bg-white/20" />
            <span className="text-white font-semibold tracking-[0.32em]">
              SMART INDIA HACKATHON
            </span>
          </div>

          {/* Bottom Stamp */}
          <span className="text-[10px] font-mono tracking-widest text-neutral-400">
            &copy; 2026
          </span>
        </aside>

        {/* Primary Editorial Canvas */}
        <main className="flex-1 h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 relative">
          {/* Top Mobile Micro-Header */}
          <div className="sm:hidden flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
            <span>SMART INDIA HACKATHON</span>
            <span>&copy; 2026</span>
          </div>

          {/* Monumental Year Lockup: Static "20" + Rolling Ticker 17 -> 26 */}
          <div
            ref={contentRef}
            className="flex items-center select-none pt-4 sm:pt-6 will-change-transform flex-nowrap"
          >
            {/* Giant Static Serif "20" */}
            <span className="font-serif italic font-normal text-[5.5rem] xs:text-[7rem] sm:text-[10rem] lg:text-[13rem] text-[#ECE7DF] leading-none tracking-tighter select-none">
              20
            </span>

            {/* Rolling Year Ticker Window: Exactly 1 item tall, rolling 17 up to 26 */}
            <div className="relative overflow-hidden h-[5.5rem] xs:h-[7rem] sm:h-[10rem] lg:h-[13rem] ml-1 sm:ml-2">
              <div
                ref={reelRef}
                className="flex flex-col will-change-transform"
                style={{ transform: "translate3d(0, 0%, 0)" }}
              >
                {YEARS.map((yr) => (
                  <div
                    key={yr}
                    className="h-[5.5rem] xs:h-[7rem] sm:h-[10rem] lg:h-[13rem] flex items-center justify-start"
                  >
                    <span className="font-serif italic font-normal text-[5.5rem] xs:text-[7rem] sm:text-[10rem] lg:text-[13rem] text-[#ECE7DF] leading-none tracking-tighter tabular-nums select-none">
                      {yr}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Edition Stamp Pill */}
            <span
              ref={editionTagRef}
              className="hidden md:inline-block ml-6 px-3.5 py-1 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7700] opacity-0 self-center"
            >
              EDITION IX
            </span>
          </div>

          {/* Bottom Right Poetic Tagline (Exact match to reference photo layout) */}
          <div
            ref={bottomQuoteRef}
            className="flex flex-col items-end self-end text-right max-w-lg pb-2 sm:pb-4 will-change-transform"
          >
            <p className="font-sans text-xl sm:text-2xl lg:text-3xl text-[#ECE7DF] font-normal tracking-tight mb-2">
              {"A journey through years of national innovation".split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
                  <span className="preloader-word inline-block will-change-transform">{word}</span>
                </span>
              ))}
            </p>
            <div className="text-xs font-mono tracking-[0.2em] text-[#FF7700] uppercase overflow-hidden">
              {["1.8 MILLION MINDS", "•", "75 NODAL HUBS", "•", "2017 — 2026"].map((segment, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.35em] align-top">
                  <span className="preloader-subword inline-block will-change-transform">{segment}</span>
                </span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
