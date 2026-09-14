"use client";

import React from "react";
import { MINISTRIES_LIST } from "@/data/sih-data";
import { Building2, Landmark, ShieldCheck } from "lucide-react";

const OFFICIAL_ORGANISATIONS = [
  { name: "Ministry of Education", logo: "/partners/moe-logo.png", category: "Apex Ministry" },
  { name: "AICTE", logo: "/partners/aicte-logo.jpg", category: "Statutory Council" },
  { name: "MoE Innovation Cell", logo: "/partners/mic-logo.png", category: "Execution Body" },
  { name: "I4C (MHA)", logo: "/partners/i4c-logo.png", category: "Cybersecurity" },
  { name: "State Bank of India", logo: "/partners/sbi-logo.png", category: "Premier Partner" },
  { name: "Tata Consultancy Services", logo: "/partners/tcs-logo.png", category: "Knowledge Partner" },
  { name: "Godrej Group", logo: "/partners/godrej-logo.png", category: "Industry Leader" },
  { name: "Amazon Web Services", logo: "/partners/aws-logo.png", category: "Cloud Infrastructure" },
  { name: "All India Radio", logo: "/partners/air-logo.png", category: "Broadcasting" },
  { name: "Doordarshan", logo: "/partners/dd-logo.png", category: "National Media" },
];

export default function MinistriesMarquee() {
  return (
    <section className="w-full bg-[#FAF9F5] dark:bg-[#0B0C0E] border-y border-neutral-200/80 dark:border-neutral-800/80 py-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#FF7700]" />
          <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-600 dark:text-neutral-400 uppercase font-bold">
            CENTRAL MINISTRIES & VERIFIED APEX ORGANISATIONS
          </span>
        </div>
        <span className="text-[10px] font-mono text-neutral-400">
          DIRECT PROCUREMENT & PROTOTYPING SPONSORS
        </span>
      </div>

      {/* Row 1: Official Scraped Logos Infinite Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap mb-6 [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
        <div className="flex items-center gap-6 animate-[marquee_34s_linear_infinite] shrink-0">
          {[...OFFICIAL_ORGANISATIONS, ...OFFICIAL_ORGANISATIONS].map((org, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3.5 px-5 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 hover:border-[#FF7700]/60 transition-colors shadow-2xs"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-7 w-auto object-contain max-w-[90px] filter contrast-125 dark:brightness-110"
              />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-neutral-900 dark:text-white leading-tight">
                  {org.name}
                </span>
                <span className="text-[9px] text-neutral-400 uppercase tracking-wider">
                  {org.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Central Ministries Horizontal Ribbon */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
        <div className="flex gap-4 animate-[marquee-reverse_42s_linear_infinite] shrink-0">
          {[...MINISTRIES_LIST, ...MINISTRIES_LIST].map((ministry, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-100/90 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:border-[#FF7700]/50 transition-colors"
            >
              <Landmark className="w-3.5 h-3.5 text-[#FF7700]" />
              <span>{ministry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
