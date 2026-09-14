"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type ScrollRevealPreset =
  | "fadeUp"
  | "slideUp"
  | "scaleIn"
  | "staggerUp"
  | "maskReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  preset?: ScrollRevealPreset;
  delay?: number;
  duration?: number;
  stagger?: number;
  childSelector?: string;
  className?: string;
  start?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  preset = "fadeUp",
  delay = 0,
  duration = 0.8,
  stagger = 0.08,
  childSelector = ":scope > *",
  className = "",
  start = "top 88%",
  once = true,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // For users with reduced motion preferences, display content instantly
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { opacity: 1, y: 0, scale: 1, clipPath: "none" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const toggleActions = once
          ? "play none none none"
          : "play none none reverse";

        if (preset === "staggerUp") {
          let targets: Element[] = [];
          const trimmed = (childSelector || "").trim();
          const selector = trimmed.startsWith(">") ? `:scope ${trimmed}` : trimmed;

          try {
            targets = Array.from(el.querySelectorAll(selector));
          } catch {
            targets = Array.from(el.children);
          }

          if (targets.length === 0) {
            targets = Array.from(el.children);
          }

          if (targets.length > 0) {
            gsap.fromTo(
              targets,
              { opacity: 0, y: 35 },
              {
                opacity: 1,
                y: 0,
                duration,
                stagger,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start,
                  toggleActions,
                },
              }
            );
          }
        } else if (preset === "slideUp") {
          gsap.fromTo(
            el,
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions,
              },
            }
          );
        } else if (preset === "scaleIn") {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.94 },
            {
              opacity: 1,
              scale: 1,
              duration,
              delay,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions,
              },
            }
          );
        } else if (preset === "maskReveal") {
          gsap.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              duration: duration * 1.1,
              delay,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions,
              },
            }
          );
        } else {
          // Default: fadeUp
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [preset, delay, duration, stagger, childSelector, start, once]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
