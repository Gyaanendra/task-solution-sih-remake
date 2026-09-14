"use client";

import React from "react";

export default function CinematicOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9990] select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Ultra-fine Film Grain / Celluloid Noise (Awwwards Movie Depth) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.038] dark:opacity-[0.055] mix-blend-overlay">
        <filter id="cinematic-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cinematic-grain)" />
      </svg>

      {/* 2. Anamorphic Cinematic Lens Vignette (Darkened Periphery) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.06)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.35)_100%)]" />

      {/* 3. Subtle Ambient Studio Glow Bleed in Hero Region */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-gradient-to-b from-[#FF7700]/[0.025] dark:from-[#FF7700]/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
