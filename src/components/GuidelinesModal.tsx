"use client";

import { X, FileText, CheckCircle2, AlertTriangle, Download } from "lucide-react";

interface GuidelinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuidelinesModal({ isOpen, onClose }: GuidelinesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#141519] border border-black/10 dark:border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-xs font-mono uppercase text-[#FF7700] font-bold block mb-1">
          OFFICIAL COMPLIANCE
        </span>
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-neutral-900 dark:text-white mb-6">
          SIH 2026 GUIDELINES & PPT TEMPLATE
        </h3>

        <div className="space-y-6 text-sm font-sans text-neutral-700 dark:text-neutral-300">
          {/* Squad composition rule */}
          <div className="bg-neutral-50 dark:bg-neutral-900/50 p-5 rounded-xl border border-black/5 dark:border-white/5 space-y-3">
            <h4 className="font-bold text-xs font-mono uppercase text-[#FF7700] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Mandatory Squad Composition Rules
            </h4>
            <ul className="space-y-2 text-xs font-sans list-disc list-inside leading-relaxed text-neutral-600 dark:text-neutral-300">
              <li>Each team MUST consist of exactly 6 student members including the Team Leader.</li>
              <li>Every team MUST have at least ONE female student member.</li>
              <li>All 6 members must belong to the same institution. Cross-institute teams are strictly disallowed.</li>
              <li>A maximum of 2 industry/academic mentors are permitted per squad during the Grand Finale.</li>
            </ul>
          </div>

          {/* Presentation Slide Template */}
          <div className="bg-neutral-50 dark:bg-neutral-900/50 p-5 rounded-xl border border-black/5 dark:border-white/5 space-y-3">
            <h4 className="font-bold text-xs font-mono uppercase text-[#FF7700] flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-500" />
              Standard Idea PPT Template Structure (5 Slides Max)
            </h4>
            <div className="space-y-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900 dark:text-white">SLIDE 1:</span> Title, Problem Statement Code & Team Details
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900 dark:text-white">SLIDE 2:</span> Proposed Solution Architecture & Novelty
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900 dark:text-white">SLIDE 3:</span> Technical Feasibility, Tech Stack & BOM (Hardware)
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900 dark:text-white">SLIDE 4:</span> Potential Challenges & Mitigation Strategy
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900 dark:text-white">SLIDE 5:</span> Commercial Viability, Scalability & Startup Roadmap
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <p>
              Submissions violating team composition rules or exceeding the 5-slide limit will be automatically disqualified during the central AICTE screening round.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-500">FORMAT: PPTX / PDF</span>
          <a
            href="https://www.sih.gov.in/letters/2026/SIH2026-IDEA-Presentation-Format.pptx"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#FF7700] text-white text-xs font-mono font-bold flex items-center gap-2 hover:bg-[#E65100] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD OFFICIAL PPT TEMPLATE</span>
          </a>
        </div>
      </div>
    </div>
  );
}
