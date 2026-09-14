"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export interface StaggeredTextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  duration?: number;
  stagger?: number;
  direction?: "up" | "down";
  once?: boolean;
  threshold?: number;
}

export default function StaggeredTextReveal({
  text,
  className = "",
  wordClassName = "",
  as: Component = "h2",
  delay = 0,
  duration = 0.85,
  stagger = 0.045,
  direction = "up",
  once = true,
  threshold = 0.2,
}: StaggeredTextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const hasAnimatedRef = useRef(false);

  // Split text into words while keeping whitespace intact
  const words = text.split(" ");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check for prefers-reduced-motion
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      // Set to visible immediately without motion
      wordsRef.current.forEach((word) => {
        if (word) {
          word.style.opacity = "1";
          word.style.transform = "none";
        }
      });
      return;
    }

    const startY = direction === "up" ? 40 : -40;

    // Initial state
    gsap.set(wordsRef.current, {
      y: startY,
      opacity: 0,
      rotateX: direction === "up" ? -15 : 15,
      transformOrigin: "0% 50% -20",
    });

    const triggerAnimation = () => {
      if (hasAnimatedRef.current && once) return;
      hasAnimatedRef.current = true;

      gsap.to(wordsRef.current, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: duration,
        stagger: stagger,
        ease: "power3.out",
        delay: delay,
        overwrite: "auto",
      });
    };

    // Intersection Observer to trigger on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            if (once) observer.disconnect();
          }
        });
      },
      { threshold: threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration, stagger, direction, once, threshold]);

  const content = words.map((word, i) => (
    <span
      key={i}
      className="inline-block overflow-hidden py-1 mr-[0.28em] align-top"
      aria-hidden="true"
    >
      <span
        ref={(node) => {
          if (node) wordsRef.current[i] = node;
        }}
        className={`inline-block will-change-transform ${wordClassName}`.trim()}
      >
        {word}
      </span>
    </span>
  ));

  const commonProps = {
    ref: containerRef as React.Ref<any>,
    className: `staggered-reveal-container ${className}`.trim(),
    "aria-label": text,
  };

  if (Component === "h1") return <h1 {...commonProps}>{content}</h1>;
  if (Component === "h2") return <h2 {...commonProps}>{content}</h2>;
  if (Component === "h3") return <h3 {...commonProps}>{content}</h3>;
  if (Component === "h4") return <h4 {...commonProps}>{content}</h4>;
  if (Component === "p") return <p {...commonProps}>{content}</p>;
  if (Component === "span") return <span {...commonProps}>{content}</span>;
  return <div {...commonProps}>{content}</div>;
}
