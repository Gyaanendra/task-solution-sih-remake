"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import StaggeredTextReveal from "@/components/ui/StaggeredTextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface HeroProps {
  onOpenSpocModal: () => void;
  onOpenGuidelinesModal: () => void;
}

export default function Hero({ onOpenSpocModal, onOpenGuidelinesModal }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Parametric dot-matrix constellation animation (Anveril style)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Fermat spiral dot matrix
    const numPoints = 220;
    const phi = 137.5 * (Math.PI / 180); // Golden angle

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      time += 0.0035;

      const isDark = document.documentElement.classList.contains("dark");
      const dotColor = isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(18, 19, 22, 0.32)";
      const accentDotColor = "#FF7700";

      for (let i = 1; i <= numPoints; i++) {
        const radius = Math.sqrt(i) * (Math.min(width, height) / 34);
        const theta = i * phi + Math.sin(time + i * 0.02) * 0.07;

        const x = centerX + radius * Math.cos(theta);
        const y = centerY + radius * Math.sin(theta);

        // Subtly pulse a few key nodal dots
        const isNodal = i % 18 === 0;
        const size = isNodal ? 2.6 : 1.3;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = isNodal ? accentDotColor : dotColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const partnerLogos = [
    { name: "Ministry of Education", src: "/partners/moe-logo.png", alt: "Ministry of Education Govt of India" },
    { name: "AICTE", src: "/partners/aicte-logo.jpg", alt: "AICTE Innovation Cell" },
    { name: "MIC", src: "/partners/mic-logo.png", alt: "MoE's Innovation Cell" },
    { name: "I4C MHA", src: "/partners/i4c-logo.png", alt: "Indian Cyber Crime Coordination Centre" },
    { name: "SBI", src: "/partners/sbi-logo.png", alt: "State Bank of India" },
    { name: "TCS", src: "/partners/tcs-logo.png", alt: "Tata Consultancy Services" },
    { name: "Godrej", src: "/partners/godrej-logo.png", alt: "Godrej Group" },
    { name: "AWS", src: "/partners/aws-logo.png", alt: "Amazon Web Services" },
    { name: "All India Radio", src: "/partners/air-logo.png", alt: "Akashvani All India Radio" },
    { name: "Doordarshan", src: "/partners/dd-logo.png", alt: "Doordarshan National" },
  ];

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Top Eyebrow & Official SIH 2026 Seal */}
      <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
        <div className="flex items-center gap-4">
          <div className="p-1.5 rounded-xl bg-white dark:bg-white/10 border border-black/10 dark:border-white/15 shadow-xs">
            <img
              src="/SIH2026-logo.png"
              alt="Smart India Hackathon 2026 Official Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-[0.24em] text-[#FF7700] uppercase font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              SMART INDIA HACKATHON 2026
            </span>
            <span className="text-xs font-mono text-neutral-500">
              WORLD&apos;S LARGEST OPEN INNOVATION PLATFORM &bull; 9TH EDITION
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500 py-1.5 px-3 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>GOVT OF INDIA &bull; MOE &bull; AICTE &bull; MIC ACCREDITED</span>
          </div>
        </div>
      </div>

      {/* Spacious Asymmetric Broadsheet Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-14 pb-16 border-b border-black/[0.08] dark:border-white/[0.08]">
        {/* Left Headline: Staggered GSAP Text Reveal (7 cols) */}
        <div className="lg:col-span-7">
          <div className="mb-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500">
              THE SOVEREIGN INITIATIVE // 2026
            </span>
          </div>

          <StaggeredTextReveal
            as="h1"
            text="National Innovation Without Limits."
            className="text-4xl sm:text-6xl lg:text-[4.75rem] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.04] [text-wrap:balance]"
            wordClassName="font-sans"
            delay={0.1}
            stagger={0.06}
          />

          <p className="mt-8 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-2xl [text-wrap:pretty]">
            Transforming 1.8 million student engineers into frontline builders for ISRO, DRDO, Indian Railways, and Central Ministries across 75+ premier nodal centers.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#themes"
              className="px-8 py-4 rounded-full bg-[#121316] text-white dark:bg-white dark:text-[#121316] text-xs font-mono font-bold tracking-wider uppercase hover:opacity-90 transition-opacity shadow-md flex items-center gap-2"
            >
              <span>Explore 16 Strategic Arenas</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenSpocModal}
              className="px-6 py-4 rounded-full border border-black/15 dark:border-white/15 hover:border-black/40 text-xs font-mono font-semibold tracking-wider uppercase text-neutral-800 dark:text-neutral-200 transition-colors flex items-center gap-2 bg-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
            >
              <span>College SPOC Directory</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Right Editorial Dossier & Guidelines (5 cols) */}
        <div className="lg:col-span-5 lg:pl-10 lg:border-l border-black/[0.08] dark:border-white/[0.08] flex flex-col justify-between self-stretch pt-2 space-y-8">
          <div className="space-y-6">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#FF7700] uppercase font-bold block">
              COHORT ARCHITECTURE
            </span>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              Unlike theoretical ideathons, Smart India Hackathon bridges collegiate IP with sovereign ministries. Winners receive cash prizes, direct prototyping incubation grants, and production deployment fast-tracks.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.06] font-mono">
              <div>
                <span className="text-neutral-400 text-[10px] block uppercase tracking-wider">SOFTWARE ARENA</span>
                <span className="text-base font-bold text-neutral-900 dark:text-white">36-Hour Continuous</span>
                <span className="text-xs text-neutral-500 block mt-0.5">Non-stop sprint</span>
              </div>
              <div>
                <span className="text-neutral-400 text-[10px] block uppercase tracking-wider">HARDWARE FABRICATION</span>
                <span className="text-base font-bold text-neutral-900 dark:text-white">120-Hour Build</span>
                <span className="text-xs text-neutral-500 block mt-0.5">5-day rapid bench testing</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
            <span className="tracking-wide">TEAMS: 6 STUDENTS (1+ FEMALE)</span>
            <button
              onClick={onOpenGuidelinesModal}
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#FF7700] dark:hover:text-[#FF7700] font-semibold underline underline-offset-4 flex items-center gap-1 transition-colors"
            >
              <span>Download Idea PPT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Middle Visual Section: Parametric Dot Geometry & Live Sprint Metric */}
      <ScrollReveal preset="fadeUp" delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16 items-stretch">
          {/* Left: Parametric Constellation Canvas */}
          <div className="lg:col-span-6 relative h-[300px] sm:h-[360px] bg-white dark:bg-[#141519] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-8 flex flex-col justify-between overflow-hidden shadow-xs">
            <div className="flex items-center justify-between z-10">
              <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase font-semibold">
                DISTRIBUTED COHORT NODES
              </span>
              <span className="text-[11px] font-mono text-[#FF7700] font-bold">
                1.8M MINDS &bull; 75 HUBS
              </span>
            </div>

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            <div className="z-10 text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
              RADIAL FERMAT CONSTELLATION MAPPING REAL-TIME COHORT DENSITY ACROSS 28 STATES
            </div>
          </div>

          {/* Right: National Scale Dossier */}
          <div className="lg:col-span-6 bg-white dark:bg-[#141519] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#FF7700] uppercase font-bold">
                  NATIONAL SCALE & FUNDING
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 font-semibold border border-neutral-200 dark:border-neutral-700">
                  ₹1,00,000 PER WINNING PS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4 [text-wrap:balance]">
                Direct Ministerial Deployment Pipeline.
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mb-8">
                Finalist prototypes don&apos;t end at the demo day. Teams are directly linked to ministerial procurement boards, DST/AICTE incubation centers, and startup funding seed pools.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.06] text-xs font-mono">
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">TOTAL PRIZE POOL</span>
                  <span className="text-lg font-bold text-neutral-900 dark:text-white">₹2.5+ Crore</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">STARTUPS FUNDED</span>
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">150+</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">NODAL CENTERS</span>
                  <span className="text-lg font-bold text-[#FF7700]">75+ Hubs</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>REGISTRATION WINDOW CLOSING SOON</span>
              <a href="#journey" className="hover:text-neutral-900 dark:hover:text-white flex items-center gap-1.5 font-semibold text-neutral-700 dark:text-neutral-300">
                <span>View 6-Stage Roadmap</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Official Government & Partner Accreditation Bar (Featuring Authentic Scraped Logos) */}
      <ScrollReveal preset="fadeUp" delay={0.15}>
        <div className="pt-10 pb-4 border-t border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <span className="text-[11px] font-mono tracking-[0.24em] text-neutral-400 dark:text-neutral-500 uppercase font-semibold">
              OFFICIAL STAKEHOLDERS & STRATEGIC ORGANISATIONS
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              VERIFIED GOVERNMENT OF INDIA ARCHIVE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4 items-center">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="h-16 p-2 rounded-xl bg-white/70 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group hover:border-[#FF7700]/40 transition-colors shadow-2xs"
                title={partner.name}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 dark:brightness-125 opacity-80 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
