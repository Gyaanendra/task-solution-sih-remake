"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  X,
  Bookmark,
  Download,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import {
  PROBLEM_STATEMENTS,
  ProblemStatement,
  MINISTRIES_LIST,
} from "@/data/sih-data";
import StaggeredTextReveal from "@/components/ui/StaggeredTextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProblemExplorerProps {
  selectedThemeFilter: string | null;
  onClearThemeFilter: () => void;
  onOpenGuidelinesModal: () => void;
}

export default function ProblemExplorer({
  selectedThemeFilter,
  onClearThemeFilter,
  onOpenGuidelinesModal,
}: ProblemExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"All" | "Software" | "Hardware">("All");
  const [ministryFilter, setMinistryFilter] = useState("All");
  const [selectedPS, setSelectedPS] = useState<ProblemStatement | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [pledged, setPledged] = useState(false);

  const filteredProblems = useMemo(() => {
    return PROBLEM_STATEMENTS.filter((ps) => {
      const matchesSearch =
        searchQuery === "" ||
        ps.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ps.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ps.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ps.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        categoryFilter === "All" || ps.category === categoryFilter;

      const matchesMinistry =
        ministryFilter === "All" || ps.ministry.toLowerCase().includes(ministryFilter.toLowerCase());

      const matchesTheme =
        !selectedThemeFilter || ps.theme === selectedThemeFilter;

      return matchesSearch && matchesCategory && matchesMinistry && matchesTheme;
    });
  }, [searchQuery, categoryFilter, ministryFilter, selectedThemeFilter]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="problems"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.08] dark:border-white/[0.08]"
    >
      {/* Header with Left Micro-Label */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-end">
        <div className="lg:col-span-2">
          <span className="micro-label block">04 / CATALOG</span>
        </div>

        <div className="lg:col-span-7">
          <StaggeredTextReveal
            as="h2"
            text="Live Problem Statement Catalog."
            className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
            delay={0.1}
            stagger={0.045}
          />
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Real challenges formulated and released directly by central ministries, defense laboratories, and enterprise partners.
          </p>
        </div>

        <div className="lg:col-span-3 lg:text-right text-xs font-mono text-neutral-400">
          SHOWING {filteredProblems.length} OF {PROBLEM_STATEMENTS.length} PROBLEM STATEMENTS
        </div>
      </div>

      {/* Control Bar: Search & Subtle Filters */}
      <ScrollReveal preset="fadeUp" delay={0.05}>
        <div className="bg-white dark:bg-[#141519] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-4 mb-8 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by keywords, ISRO, radar, drone, AI, SIH1601..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex p-1 rounded-xl bg-neutral-100 dark:bg-neutral-900 self-start md:self-auto">
            {(["All", "Software", "Hardware"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  categoryFilter === cat
                    ? "bg-white dark:bg-[#141519] text-neutral-900 dark:text-white font-bold shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {cat === "All" ? "ALL" : cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Second Row: Filter by Ministry */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
              <Filter className="w-3 h-3" /> MINISTRY:
            </span>
            <select
              value={ministryFilter}
              onChange={(e) => setMinistryFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono focus:outline-none"
            >
              <option value="All">All Ministries & Departments</option>
              {MINISTRIES_LIST.map((min) => (
                <option key={min} value={min}>
                  {min}
                </option>
              ))}
            </select>
          </div>

          {selectedThemeFilter && (
            <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-3 py-1 rounded-full text-xs font-mono">
              <span>Theme: {selectedThemeFilter}</span>
              <button onClick={onClearThemeFilter} className="hover:text-neutral-500">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
      </ScrollReveal>

      {/* Problem Cards Grid (HireLaw Style) */}
      <ScrollReveal preset="fadeUp" delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProblems.map((ps) => {
            const isBookmarked = bookmarkedIds.includes(ps.id);

            return (
              <div
                key={ps.id}
                onClick={() => setSelectedPS(ps)}
                className="group cursor-pointer bg-white dark:bg-[#141519] rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-6 hover:border-black/30 dark:hover:border-white/30 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        {ps.code}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 uppercase">
                        {ps.category}
                      </span>
                    </div>

                    <button
                      onClick={(e) => toggleBookmark(ps.id, e)}
                      className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${isBookmarked ? "fill-neutral-900 text-neutral-900 dark:fill-white dark:text-white" : ""}`}
                      />
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-[#E65100] block mb-1.5 uppercase font-semibold">
                    {ps.ministry}
                  </span>

                  <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors line-clamp-2 mb-2 leading-snug">
                    {ps.title}
                  </h3>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-3 leading-relaxed font-normal mb-4">
                    {ps.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {ps.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-800 dark:text-neutral-200 group-hover:translate-x-0.5 transition-transform">
                  <span className="font-semibold">Inspect Challenge &rarr;</span>
                  <span className="text-neutral-400 text-[11px]">{ps.complexity}</span>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Problem Statement Detail Modal (Clean Document Style) */}
      {selectedPS && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-[#141519] border border-black/[0.1] dark:border-white/[0.1] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-xl relative">
            <button
              onClick={() => {
                setSelectedPS(null);
                setPledged(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                {selectedPS.code}
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase">
                {selectedPS.category} Edition &bull; {selectedPS.complexity} Level
              </span>
            </div>

            <span className="text-xs font-mono uppercase text-[#E65100] block mb-1 font-semibold">
              POSTED BY: {selectedPS.ministry}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              {selectedPS.title}
            </h3>

            <div className="space-y-4 text-xs font-sans text-neutral-700 dark:text-neutral-300 mb-6">
              <div>
                <h4 className="text-[11px] font-mono uppercase text-neutral-400 font-bold mb-1">
                  Problem Description & Context
                </h4>
                <p className="leading-relaxed bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06]">
                  {selectedPS.description}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-mono uppercase text-neutral-400 font-bold mb-1">
                  Expected Deliverables & Benchmarks
                </h4>
                <p className="leading-relaxed bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06]">
                  {selectedPS.expectedOutcome}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onOpenGuidelinesModal}
                className="px-4 py-2 rounded-full border border-black/[0.12] dark:border-white/[0.12] text-xs font-mono flex items-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <Download className="w-3.5 h-3.5 text-neutral-500" />
                <span>Download Idea PPT Template (.pptx)</span>
              </button>

              <button
                onClick={() => setPledged(true)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-colors ${
                  pledged
                    ? "bg-emerald-600 text-white"
                    : "bg-[#121316] text-white dark:bg-white dark:text-[#121316] hover:opacity-90"
                }`}
              >
                {pledged ? "Pledged for this PS ✓" : "Form Squad for this PS"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
