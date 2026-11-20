import React from "react";
import { ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface FeatureScreenMockupProps {
  title?: string;
  rows?: (string[] | [string, string])[];
  className?: string;
  eyebrow?: string;
}

export default function FeatureScreenMockup({
  title = "PayroleHR Preview",
  rows = [
    ["Active staff", "128"],
    ["Present today", "118"],
    ["On leave", "6"],
    ["Payroll status", "Locked"],
  ],
  className = "",
  eyebrow = "Live workspace view",
}: FeatureScreenMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Soft teal/mint ambient glow inspired by RonHR screenshot */}
      <div
        aria-hidden="true"
        className="animate-pulse-glow absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-[#12B5A5]/25 via-[#8FE8DC]/20 to-transparent blur-2xl"
      />

      <div className="card-interactive overflow-hidden rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-7 shadow-card">
        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] border border-teal-100">
              <Sparkles className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#12B5A5]">
                {eyebrow}
              </span>
              <h4 className="font-display text-sm font-bold text-slate-900 leading-tight">
                {title}
              </h4>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
            <CheckCircle2 className="h-3 w-3 text-emerald-600" />
            Live Sync
          </span>
        </div>

        {/* Rows table */}
        <div className="divide-y divide-slate-100/80">
          {rows.map(([label, val], idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-2.5 text-xs sm:text-sm hover:bg-teal-50/40 px-2.5 rounded-xl transition-colors"
            >
              <span className="font-medium text-slate-600">{label}</span>
              <span className="font-mono font-bold text-slate-900 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                {val}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100/80 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-[#12B5A5]" />
            PayroleHR verified records
          </span>
          <span className="italic">Real-time simulation</span>
        </div>
      </div>
    </div>
  );
}
