"use client";

import {
  Cpu,
  Rocket,
  Activity,
  Landmark,
  Stethoscope,
  Sprout,
  Car,
  Truck,
  Bot,
  Leaf,
  Compass,
  Zap,
  ShieldAlert,
  GraduationCap,
  Flame,
  Gamepad2,
  ArrowUpRight,
} from "lucide-react";
import { SIH_THEMES, ThemeItem } from "@/data/sih-data";

interface ThemesMatrixProps {
  onSelectTheme: (themeName: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Rocket,
  Activity,
  Landmark,
  Stethoscope,
  Sprout,
  Car,
  Truck,
  Bot,
  Leaf,
  Compass,
  Zap,
  ShieldAlert,
  GraduationCap,
  Flame,
  Gamepad2,
};

export default function ThemesMatrix({ onSelectTheme }: ThemesMatrixProps) {
  return (
    <section
      id="themes"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.08] dark:border-white/[0.08]"
    >
      {/* Header with Left Micro-Label */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
        <div className="lg:col-span-2">
          <span className="micro-label block">03 / DOMAINS</span>
        </div>

        <div className="lg:col-span-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Sixteen Strategic Arenas of Nation-Building.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal">
            From lunar navigation and tactical defense wearables to decentralized healthcare records and zero-liquid discharge systems.
          </p>
        </div>
      </div>

      {/* Grid of 16 Themes (Clean Line-Art Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SIH_THEMES.map((theme: ThemeItem) => {
          const IconComponent = ICON_MAP[theme.iconName] || Cpu;

          return (
            <div
              key={theme.id}
              onClick={() => {
                onSelectTheme(theme.name);
                const el = document.getElementById("problems");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group cursor-pointer bg-white dark:bg-[#141519] rounded-xl border border-black/[0.08] dark:border-white/[0.08] p-5 hover:border-black/30 dark:hover:border-white/30 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:text-[#E65100] transition-colors">
                    <IconComponent className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 font-medium">
                    {theme.psCount} Challenges
                  </span>
                </div>

                <h3 className="font-bold text-sm text-neutral-900 dark:text-white group-hover:text-[#E65100] transition-colors mb-1.5">
                  {theme.name}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed font-normal mb-4">
                  {theme.description}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                <span>FILTER PROBLEMS</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
