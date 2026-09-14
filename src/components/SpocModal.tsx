"use client";

import { useState } from "react";
import { Search, X, ShieldCheck, Mail, Building, MapPin } from "lucide-react";
import { SAMPLE_SPOCS } from "@/data/sih-data";

interface SpocModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SpocModal({ isOpen, onClose }: SpocModalProps) {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const filteredSpocs = SAMPLE_SPOCS.filter(
    (s) =>
      s.institute.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.spocName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#141519] border border-black/10 dark:border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#FF7700] font-bold">
              INSTITUTIONAL DIRECTORY
            </span>
            <h3 className="text-xl font-bold uppercase text-neutral-900 dark:text-white">
              KNOW YOUR COLLEGE SPOC
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 pb-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search your college name, IIT, BITS, Pune, Tamil Nadu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#1A1C23] border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#FF7700]"
            />
          </div>
          <span className="text-[11px] font-mono text-neutral-400 mt-2 block">
            Only verified college SPOCs are authorized to endorse campus squads to the central SIH portal.
          </span>
        </div>

        {/* Results list */}
        <div className="p-6 pt-2 overflow-y-auto space-y-3 flex-1">
          {filteredSpocs.map((spoc, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 dark:bg-neutral-900/50 border border-black/5 dark:border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Building className="w-3.5 h-3.5 text-[#FF7700]" />
                  <h4 className="font-bold text-sm text-neutral-900 dark:text-white">
                    {spoc.institute}
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-500">
                  <span>SPOC: {spoc.spocName}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    {spoc.state}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED
                </span>
                <a
                  href={`mailto:${spoc.email}`}
                  className="px-3 py-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-[#FF7700] hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3" />
                  <span>CONTACT</span>
                </a>
              </div>
            </div>
          ))}

          {filteredSpocs.length === 0 && (
            <div className="text-center py-8 text-neutral-500 font-mono text-xs">
              College not found in initial sample? Ask your college administration to register at{" "}
              <a
                href="https://sih.gov.in"
                target="_blank"
                rel="noreferrer"
                className="text-[#FF7700] underline"
              >
                sih.gov.in
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
