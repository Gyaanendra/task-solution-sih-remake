"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MinistriesMarquee from "@/components/MinistriesMarquee";
import MetricsBento from "@/components/MetricsBento";
import EditorialSplitShowcase from "@/components/EditorialSplitShowcase";
import HorizontalTimeline from "@/components/HorizontalTimeline";
import ThemesMatrix from "@/components/ThemesMatrix";
import ProblemExplorer from "@/components/ProblemExplorer";
import NodalRadar from "@/components/NodalRadar";
import LeadershipSection from "@/components/LeadershipSection";
import PastEditions from "@/components/PastEditions";
import Footer from "@/components/Footer";
import SpocModal from "@/components/SpocModal";
import GuidelinesModal from "@/components/GuidelinesModal";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollExpand from "@/components/ui/ScrollExpand";
import StaggeredTextReveal from "@/components/ui/StaggeredTextReveal";
import Preloader from "@/components/ui/Preloader";
import CinematicOverlay from "@/components/ui/CinematicOverlay";
import { ArrowRight, Film } from "lucide-react";

export default function Home() {
  const [isSpocOpen, setIsSpocOpen] = useState(false);
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);
  const [selectedThemeFilter, setSelectedThemeFilter] = useState<string | null>(null);

  const handleSelectTheme = (themeName: string) => {
    setSelectedThemeFilter(themeName);
  };

  const handleClearTheme = () => {
    setSelectedThemeFilter(null);
  };

  return (
    <SmoothScroll>
      {/* Sovereign Tech Preloader Animation */}
      <Preloader />

      {/* Cinematic Film Grain & Anamorphic Vignette Overlay */}
      <CinematicOverlay />

      <main className="relative min-h-screen bg-[#FAF9F5] dark:bg-[#0B0C0E] text-[#121316] dark:text-[#F4F5F7] selection:bg-[#FF7700] selection:text-white">
        {/* Custom magnetic cursor */}
        <CustomCursor />

        {/* Global Navigation Header */}
        <Navbar
          onOpenSpocModal={() => setIsSpocOpen(true)}
          onOpenGuidelinesModal={() => setIsGuidelinesOpen(true)}
        />

        {/* 00. Spacious Editorial Hero Section */}
        <Hero
          onOpenSpocModal={() => setIsSpocOpen(true)}
          onOpenGuidelinesModal={() => setIsGuidelinesOpen(true)}
        />

        {/* Official Ministries & Scraped Organisations Infinite Ribbon */}
        <MinistriesMarquee />

        {/* React Bits ScrollExpand Cinematic Pinned Feature with /videoplayback.mp4 */}
        <section className="relative w-full my-4 sm:my-8">
          <ScrollExpand
            src="/videoplayback.mp4"
            mediaType="video"
            poster="/showcase/space_rover.jpg"
            alt="Smart India Hackathon Live 36-Hour War Room Documentary"
            title="INSIDE THE ARENA"
            scrollHint="Scroll to unfold the 36-hour live war room"
            useWindowScroll={true}
            startWidth={48}
            startHeight={64}
            startRadius={28}
            endRadius={16}
            mediaZoom={1.2}
            scrollDistance={0.75}
            holdDistance={0}
            smoothing={0.1}
            overlayScrim={0.52}
          >
            <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
              <span className="text-xs font-mono uppercase tracking-[0.28em] text-[#FF7700] mb-4 px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 inline-flex items-center gap-2">
                <Film className="w-3.5 h-3.5" />
                HACKATHON DOCUMENTARY // LIVE NATIONWIDE REEL
              </span>

              <StaggeredTextReveal
                as="h2"
                text="1.8 Million Innovators. 3,100+ Sovereign Problems."
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5 [text-wrap:balance]"
                delay={0.2}
                stagger={0.05}
              />

              <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed max-w-2xl mb-8 [text-wrap:pretty]">
                Witness the raw adrenaline as collegiate engineering squads collaborate across 75+ nodal IITs, NITs, and makerspaces, deploying mission-ready code and hardware under the watchful eyes of ISRO, DRDO, and Central Ministries.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#arena"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF7700] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#ff8800] transition-colors shadow-lg"
                >
                  <span>Enter The Dual Arena</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#editorial-showcase"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 text-xs font-mono font-medium uppercase tracking-wider transition-colors"
                >
                  <span>Inspect Case Dossiers</span>
                </a>
              </div>
            </div>
          </ScrollExpand>
        </section>

        {/* 01. The Dual Arena (Software vs Hardware) */}
        <div className="my-8 sm:my-16">
          <MetricsBento />
        </div>

        {/* 02. Editorial Pinned Split-Screen Showcase */}
        <div className="my-8 sm:my-16">
          <EditorialSplitShowcase
            onOpenExplorer={(theme) => {
              if (theme) setSelectedThemeFilter(theme);
              const el = document.getElementById("problems");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>

        {/* 03. Pinned Horizontal Process Journey */}
        <div className="my-8 sm:my-16">
          <HorizontalTimeline />
        </div>

        {/* 04. 16 Official Innovation Domains */}
        <div className="my-8 sm:my-16">
          <ThemesMatrix onSelectTheme={handleSelectTheme} />
        </div>

        {/* 05. Problem Statements Terminal & Explorer */}
        <div className="my-8 sm:my-16">
          <ProblemExplorer
            selectedThemeFilter={selectedThemeFilter}
            onClearThemeFilter={handleClearTheme}
            onOpenGuidelinesModal={() => setIsGuidelinesOpen(true)}
          />
        </div>

        {/* 06. National 75+ Nodal Centers Radar */}
        <div className="my-8 sm:my-16">
          <NodalRadar />
        </div>

        {/* 07. Vision & Governance Leadership */}
        <div className="my-8 sm:my-16">
          <LeadershipSection />
        </div>

        {/* 08. Past Editions Archival Retrospective (2017 - 2025) */}
        <div className="my-8 sm:my-16">
          <PastEditions />
        </div>

        {/* Official Footprint */}
        <Footer />

        {/* Modals */}
        <SpocModal isOpen={isSpocOpen} onClose={() => setIsSpocOpen(false)} />
        <GuidelinesModal
          isOpen={isGuidelinesOpen}
          onClose={() => setIsGuidelinesOpen(false)}
        />
      </main>
    </SmoothScroll>
  );
}
