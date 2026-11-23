import React from "react";
import { Sparkles, ShieldCheck, FileSpreadsheet } from "lucide-react";

interface TemplateBookCoverProps {
  badge: string;
  title: string;
  subtitle: string;
  statNumber: string;
  statLabel: string;
}

export default function TemplateBookCover({
  badge,
  title,
  subtitle,
  statNumber,
  statLabel,
}: TemplateBookCoverProps) {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] select-none group perspective-1000">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-teal-400/20 via-[#12B5A5]/25 to-emerald-400/20 blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* 3D Angled Document Card Cover */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0D9488] via-[#0F766E] to-[#115E59] p-7 sm:p-8 text-white shadow-2xl shadow-teal-950/30 border border-teal-300/30 overflow-hidden transform transition-all duration-500 hover:-translate-y-1.5 hover:shadow-teal-900/40">
        
        {/* Book Spine Highlight Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-white/20 via-teal-200/10 to-black/25 border-r border-teal-300/20" />

        {/* Diagonal sheen overlay */}
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-bl from-white/15 to-transparent rounded-full blur-xl pointer-events-none" />

        {/* Top Header Badge */}
        <div className="flex items-center justify-between pl-2">
          <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-teal-100/90">
            <Sparkles className="h-3 w-3 text-teal-200 animate-pulse" />
            <span>{badge || "PAYROLEHR PRESENTS"}</span>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 backdrop-blur-xs border border-white/15 text-teal-100">
            <FileSpreadsheet className="h-4 w-4" />
          </div>
        </div>

        {/* Card Title & Subtitle */}
        <div className="mt-8 pl-2">
          <h3 className="font-display text-2xl sm:text-[26px] font-extrabold leading-tight text-white drop-shadow-xs">
            {title}
          </h3>
          <p className="mt-2 text-xs font-medium text-teal-100/80 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Divider with subtle dots */}
        <div className="my-7 pl-2">
          <div className="h-px w-full bg-gradient-to-r from-teal-200/40 via-teal-100/20 to-transparent" />
        </div>

        {/* Prominent Stat Block */}
        <div className="pl-2">
          <div className="font-display text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-md">
            {statNumber}
          </div>
          <div className="mt-1 text-xs font-semibold text-teal-100/90 uppercase tracking-wider">
            {statLabel}
          </div>
        </div>

        {/* Bottom Verification Seal */}
        <div className="mt-8 pl-2 flex items-center justify-between pt-4 border-t border-teal-400/20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-black/20 px-3 py-1 text-[11px] font-bold text-teal-100 backdrop-blur-xs border border-teal-200/20">
            <ShieldCheck className="h-3.5 w-3.5 text-teal-300" />
            <span>Verified for Indian Compliance</span>
          </div>

          <div className="text-[10px] font-mono uppercase tracking-widest text-teal-200/60 font-semibold">
            PayroleHR
          </div>
        </div>
      </div>
    </div>
  );
}
