"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundscapeManager() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
  };

  const playClickFeedback = () => {
    if (!isPlaying) return;
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio context restricted until user gesture
    }
  };

  const toggleSound = () => {
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    if (!isPlaying) {
      // Start subtle ambient drone (432Hz harmonic warm pad)
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 2);
      gainNode.connect(ctx.destination);
      gainNodeRef.current = gainNode;

      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(108, ctx.currentTime); // Deep warm tonic
      osc1.connect(gainNode);
      osc1.start();
      osc1Ref.current = osc1;

      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(162, ctx.currentTime); // Fifth harmonic
      osc2.connect(gainNode);
      osc2.start();
      osc2Ref.current = osc2;

      setIsPlaying(true);
    } else {
      if (gainNodeRef.current && ctx) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
        setTimeout(() => {
          osc1Ref.current?.stop();
          osc2Ref.current?.stop();
          osc1Ref.current?.disconnect();
          osc2Ref.current?.disconnect();
        }, 500);
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || target.closest("[role='button']")) {
        playClickFeedback();
      }
    };
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [isPlaying]);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Ambient Soundscape" : "Enable Ambient Soundscape"}
      className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all text-xs font-mono tracking-wider"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#FF7700] animate-pulse" />
          <span className="text-[#FF7700] font-semibold">SOUND: ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200" />
          <span className="text-neutral-500 dark:text-neutral-400">SOUND: OFF</span>
        </>
      )}
    </button>
  );
}
