import React from "react";
import { CheckCircle2, ShieldCheck, Sparkles, Building, UserCheck } from "lucide-react";

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
        className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-[#12B5A5]/20 via-[#8FE8DC]/15 to-transparent blur-2xl"
      />

      <div className="overflow-hidden rounded-2xl border border-teal-100/90 bg-white p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="h-3 w-3 rounded-full bg-teal-400/80 animate-pulse" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#12B5A5]">
                {eyebrow}
              </span>
              <h4 className="font-display text-sm font-bold text-slate-800">
                {title}
              </h4>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#E6F9F6] px-2.5 py-1 text-[11px] font-semibold text-[#0E7A6E]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#12B5A5]" />
            Verified
          </span>
        </div>

        {/* Rows table */}
        <div className="divide-y divide-slate-100/80">
          {rows.map(([label, val], idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-2.5 text-xs sm:text-sm hover:bg-teal-50/30 px-2 rounded-lg transition-colors"
            >
              <span className="font-medium text-slate-500">{label}</span>
              <span className="font-semibold text-slate-800 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                {val}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100/80 text-[11px] text-slate-400">
          <span>PayroleHR system records</span>
          <span className="italic">Sample values</span>
        </div>
      </div>
    </div>
  );
}
