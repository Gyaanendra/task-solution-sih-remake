"use client";

import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B0C0E] text-white pt-20 pb-12 overflow-hidden border-t border-white/[0.08]">
      {/* Background Watermark Typography (HireLaw Inspiration) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.03] leading-none">
        <span className="block text-[14vw] font-bold tracking-tighter whitespace-nowrap text-white">
          SMART INDIA HACKATHON
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal preset="fadeUp" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Left Column: Brand & Mandate (HireLaw Style) */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Smart India Hackathon<sup>®</sup>
            </h2>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-normal">
              At Smart India Hackathon, we are committed to mobilizing student engineering talent across premier institutions, tailored to solve the nation&apos;s most urgent public challenges.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              MINISTRY OF EDUCATION &bull; AICTE &bull; INNOVATION CELL
            </div>
          </div>

          {/* Right Column: Clean Directory Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase block mb-2">
              PLATFORM ARENAS
            </span>
            <ul className="space-y-2 text-xs text-neutral-400 font-medium">
              <li>
                <a href="#arena" className="hover:text-white transition-colors">
                  The Dual Arena
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Selection Roadmap
                </a>
              </li>
              <li>
                <a href="#themes" className="hover:text-white transition-colors">
                  Strategic Themes
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-white transition-colors">
                  Problem Statements
                </a>
              </li>
              <li>
                <a href="#radar" className="hover:text-white transition-colors">
                  Nodal Center Radar
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase block mb-2">
              SUPPORT & HELPDESK
            </span>
            <div className="space-y-2 text-xs text-neutral-400">
              <p>Email: sih@aicte-india.org</p>
              <p>Helpline: 011-29581222 / 29581223</p>
              <p className="text-neutral-500 leading-tight pt-1">
                Nelson Mandela Marg, Vasant Kunj, New Delhi 110070
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-mono hover:border-white transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <p>&copy; 2026 Smart India Hackathon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://aicte-india.org" target="_blank" rel="noreferrer" className="hover:text-neutral-300">
              AICTE
            </a>
            <a href="https://mic.gov.in" target="_blank" rel="noreferrer" className="hover:text-neutral-300">
              MoE Innovation Cell
            </a>
            <a href="https://alumni.mic.gov.in" target="_blank" rel="noreferrer" className="hover:text-neutral-300">
              MIC Alumni
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
