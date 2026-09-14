"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/components/lib/utils";

export type AnimationType =
  | "none"
  | "circle-spread"
  | "round-morph"
  | "swipe-left"
  | "swipe-up"
  | "diag-down-right"
  | "fade-in-out"
  | "shrink-grow"
  | "flip-x-in"
  | "split-vertical"
  | "swipe-right"
  | "swipe-down"
  | "wave-ripple";

export interface ToggleThemeProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
  animationType?: AnimationType;
}

export const ToggleTheme: React.FC<ToggleThemeProps> = ({
  className,
  duration = 450,
  animationType = "circle-spread",
  ...props
}) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isTransitioningRef = useRef(false);

  // Sync state with DOM and localStorage
  const syncThemeState = useCallback(() => {
    if (typeof document === "undefined") return;
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);
  }, []);

  useEffect(() => {
    setMounted(true);
    syncThemeState();

    const observer = new MutationObserver(() => {
      syncThemeState();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [syncThemeState]);

  const toggleTheme = useCallback(async () => {
    if (typeof document === "undefined" || isTransitioningRef.current) return;

    const currentlyDark = document.documentElement.classList.contains("dark");
    const targetTheme = !currentlyDark;

    const applyThemeToDOM = () => {
      document.documentElement.classList.toggle("dark", targetTheme);
      setIsDark(targetTheme);
      try {
        localStorage.setItem("theme", targetTheme ? "dark" : "light");
      } catch {}
    };

    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    // If View Transition API is not supported or animation is disabled
    if (!doc.startViewTransition || animationType === "none") {
      applyThemeToDOM();
      return;
    }

    isTransitioningRef.current = true;

    // Inject override styles for custom web animation
    let styleElement = document.getElementById("toggle-theme-vt-override") as HTMLStyleElement | null;
    if (!styleElement && animationType !== "flip-x-in") {
      styleElement = document.createElement("style");
      styleElement.id = "toggle-theme-vt-override";
      styleElement.textContent = `
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }
      `;
      document.head.appendChild(styleElement);
    }

    try {
      const transition = doc.startViewTransition(() => {
        flushSync(() => {
          applyThemeToDOM();
        });
      });

      await transition.ready;

      // Coordinates for spatial wave/circle spread
      const btn = buttonRef.current;
      const rect = btn ? btn.getBoundingClientRect() : { top: 0, left: 0, width: 40, height: 40 };
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      switch (animationType) {
        case "circle-spread":
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration,
              easing: "ease-in-out",
              pseudoElement: "::view-transition-new(root)",
            }
          );
          break;

        case "round-morph":
          document.documentElement.animate(
            [
              { opacity: 0, transform: "scale(0.8) rotate(5deg)" },
              { opacity: 1, transform: "scale(1) rotate(0deg)" },
            ],
            {
              duration: duration * 1.2,
              easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
          break;

        case "swipe-left":
          document.documentElement.animate(
            {
              clipPath: [
                `inset(0 0 0 ${viewportWidth}px)`,
                `inset(0 0 0 0)`,
              ],
            },
            {
              duration,
              easing: "cubic-bezier(0.2, 0, 0, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
          break;

        case "swipe-up":
          document.documentElement.animate(
            {
              clipPath: [
                `inset(${viewportHeight}px 0 0 0)`,
                `inset(0 0 0 0)`,
              ],
            },
            {
              duration,
              easing: "cubic-bezier(0.2, 0, 0, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
          break;

        case "fade-in-out":
          document.documentElement.animate(
            { opacity: [0, 1] },
            {
              duration: duration * 0.6,
              easing: "ease-in-out",
              pseudoElement: "::view-transition-new(root)",
            }
          );
          break;

        case "diag-down-right":
          document.documentElement.animate(
            {
              clipPath: [
                `polygon(0 0, 0 0, 0 0, 0 0)`,
                `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
              ],
            },
            {
              duration: duration * 1.3,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
          break;

        case "wave-ripple":
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0% at 50% 50%)`,
                `circle(${maxRadius}px at 50% 50%)`,
              ],
            },
            {
              duration: duration * 1.3,
              easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
          break;

        default:
          break;
      }

      await transition.finished;
    } catch (e) {
      // In case transition was aborted or rejected, ensure DOM is clean
      applyThemeToDOM();
    } finally {
      isTransitioningRef.current = false;
    }
  }, [animationType, duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-full transition-colors duration-300 cursor-pointer flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7700]",
        isDark
          ? "hover:text-amber-400 text-neutral-300 hover:bg-neutral-800"
          : "hover:text-[#FF7700] text-neutral-700 hover:bg-neutral-200/80",
        className
      )}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      {...props}
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-700 transition-transform duration-300 hover:-rotate-12" />
        )
      ) : (
        <span className="h-4 w-4 sm:h-5 sm:w-5 block" />
      )}
    </button>
  );
};

export default ToggleTheme;
