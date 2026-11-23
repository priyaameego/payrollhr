"use client";

import React, { useState } from "react";
import { Users, TrendingUp, Award, AlertTriangle, ShieldCheck, Sparkles } from "lucide-react";

interface BandInfo {
  id: string;
  name: string;
  ratingRange: string;
  percentage: number;
  color: string;
  bgLight: string;
  borderColor: string;
  textColor: string;
  icon: any;
  increment: string;
  bonus: string;
  action: string;
  description: string;
}

const BANDS: BandInfo[] = [
  {
    id: "bottom",
    name: "Bottom 10% (Low Performers)",
    ratingRange: "Rating 1.0 – 2.4",
    percentage: 10,
    color: "#EF4444",
    bgLight: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-700",
    icon: AlertTriangle,
    increment: "0% (Salary Frozen)",
    bonus: "0x (No Bonus)",
    action: "Placed on 60–90 Day PIP",
    description: "Employees failing to meet minimum operational KPIs. Mandates structured Performance Improvement Plan (PIP) before any contractual action.",
  },
  {
    id: "below",
    name: "Below Average 20% (Developing)",
    ratingRange: "Rating 2.5 – 3.2",
    percentage: 20,
    color: "#F59E0B",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-800",
    icon: TrendingUp,
    increment: "3% – 5% Cost Adjustment",
    bonus: "0.5x Partial Variable",
    action: "Targeted Mentorship & Training",
    description: "Contributors who met some targets but need additional coaching or process support to reach expected benchmark productivity.",
  },
  {
    id: "middle",
    name: "Middle 40% (Meets Expectations - The Peak)",
    ratingRange: "Rating 3.3 – 4.2",
    percentage: 40,
    color: "#0088F0",
    bgLight: "bg-sky-50",
    borderColor: "border-sky-200",
    textColor: "text-sky-800",
    icon: Users,
    increment: "8% – 12% Annual Increment",
    bonus: "1.0x Full Target Bonus",
    action: "Standard Merit Increment & Retention",
    description: "The core backbone of the enterprise. Consistent, dependable performers who reliably achieve their assigned goals.",
  },
  {
    id: "above",
    name: "Above Average 20% (Exceeds Expectations)",
    ratingRange: "Rating 4.3 – 4.7",
    percentage: 20,
    color: "#10B981",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-800",
    icon: Award,
    increment: "12% – 18% Merit Raise",
    bonus: "1.25x Accelerated Variable",
    action: "Fast-Track Leadership Pipeline",
    description: "High performers consistently delivering above benchmark KPIs, demonstrating initiative and mentoring junior colleagues.",
  },
  {
    id: "top",
    name: "Top 10% (Star Performers)",
    ratingRange: "Rating 4.8 – 5.0",
    percentage: 10,
    color: "#8B5CF6",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-800",
    icon: Sparkles,
    increment: "18% – 25% + ESOPs/Promotions",
    bonus: "1.5x – 2.0x Super-Bonus",
    action: "Key Talent Retention & Promotion",
    description: "Exceptional individual contributors and leaders who fundamentally drove company revenue, innovation, or major operational wins.",
  },
];

export default function BellCurveChart() {
  const [selectedBandId, setSelectedBandId] = useState<string>("middle");
  const [teamSize, setTeamSize] = useState<number>(100);

  const activeBand = BANDS.find((b) => b.id === selectedBandId) || BANDS[2];
  const headcountInBand = Math.round((activeBand.percentage / 100) * teamSize);

  return (
    <div className="rounded-3xl border border-sky-100 bg-white p-6 sm:p-8 shadow-card space-y-6">
      {/* Header and Team Size Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0088F0]">
            <TrendingUp className="h-3.5 w-3.5" />
            Interactive Forced Distribution Model
          </span>
          <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-slate-950">
            Bell Curve Appraisal Visualizer
          </h3>
          <p className="mt-1 text-xs text-slate-500 font-medium">
            Click on any segment to simulate headcount distribution and compensation bands.
          </p>
        </div>

        {/* Team Size Selector */}
        <div className="flex items-center gap-1.5 rounded-full bg-slate-100 p-1 self-start sm:self-center">
          {[50, 100, 250].map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setTeamSize(size)}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                teamSize === size
                  ? "bg-white text-slate-950 shadow-xs ring-1 ring-slate-900/5"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {size} Staff
            </button>
          ))}
        </div>
      </div>

      {/* SVG Interactive Bell Curve */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#F7FBFF] to-white p-4 pt-6 border border-slate-100">
        <svg
          viewBox="0 0 600 240"
          className="w-full h-auto overflow-visible select-none"
        >
          <defs>
            {/* Gradients for each band */}
            <linearGradient id="grad-bottom" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="grad-below" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="grad-middle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0088F0" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0088F0" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="grad-above" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="grad-top" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="20" y1="210" x2="580" y2="210" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="100" y1="30" x2="100" y2="210" stroke="#E2E8F0" strokeDasharray="3 3" />
          <line x1="200" y1="30" x2="200" y2="210" stroke="#E2E8F0" strokeDasharray="3 3" />
          <line x1="400" y1="30" x2="400" y2="210" stroke="#E2E8F0" strokeDasharray="3 3" />
          <line x1="500" y1="30" x2="500" y2="210" stroke="#E2E8F0" strokeDasharray="3 3" />

          {/* 1. Zone: Bottom 10% (x: 20 to 100) */}
          <path
            d="M 20 210 Q 60 210 100 178 L 100 210 Z"
            fill="url(#grad-bottom)"
            className="cursor-pointer transition-opacity hover:opacity-90"
            onClick={() => setSelectedBandId("bottom")}
            opacity={selectedBandId === "bottom" ? 1 : 0.65}
          />

          {/* 2. Zone: Below Average 20% (x: 100 to 200) */}
          <path
            d="M 100 178 Q 145 140 200 80 L 200 210 L 100 210 Z"
            fill="url(#grad-below)"
            className="cursor-pointer transition-opacity hover:opacity-90"
            onClick={() => setSelectedBandId("below")}
            opacity={selectedBandId === "below" ? 1 : 0.65}
          />

          {/* 3. Zone: Middle 40% (x: 200 to 400 - PEAK) */}
          <path
            d="M 200 80 Q 250 25 300 25 Q 350 25 400 80 L 400 210 L 200 210 Z"
            fill="url(#grad-middle)"
            className="cursor-pointer transition-opacity hover:opacity-90"
            onClick={() => setSelectedBandId("middle")}
            opacity={selectedBandId === "middle" ? 1 : 0.65}
          />

          {/* 4. Zone: Above Average 20% (x: 400 to 500) */}
          <path
            d="M 400 80 Q 455 140 500 178 L 500 210 L 400 210 Z"
            fill="url(#grad-above)"
            className="cursor-pointer transition-opacity hover:opacity-90"
            onClick={() => setSelectedBandId("above")}
            opacity={selectedBandId === "above" ? 1 : 0.65}
          />

          {/* 5. Zone: Top 10% (x: 500 to 580) */}
          <path
            d="M 500 178 Q 540 210 580 210 L 500 210 Z"
            fill="url(#grad-top)"
            className="cursor-pointer transition-opacity hover:opacity-90"
            onClick={() => setSelectedBandId("top")}
            opacity={selectedBandId === "top" ? 1 : 0.65}
          />

          {/* The Smooth Bell Curve Stroke */}
          <path
            d="M 20 210 Q 60 210 100 178 Q 145 140 200 80 Q 250 25 300 25 Q 350 25 400 80 Q 455 140 500 178 Q 540 210 580 210"
            fill="none"
            stroke="#0088F0"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Selected Peak Indicator Dot */}
          {selectedBandId === "middle" && (
            <circle cx="300" cy="25" r="5.5" fill="#0088F0" stroke="#FFF" strokeWidth="2.5" />
          )}

          {/* X-Axis Percentage Badges */}
          <text x="60" y="228" textAnchor="middle" fill="#EF4444" fontSize="12" fontWeight="700">10%</text>
          <text x="150" y="228" textAnchor="middle" fill="#D97706" fontSize="12" fontWeight="700">20%</text>
          <text x="300" y="228" textAnchor="middle" fill="#0088F0" fontSize="13" fontWeight="800">40% Peak</text>
          <text x="450" y="228" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="700">20%</text>
          <text x="540" y="228" textAnchor="middle" fill="#7C3AED" fontSize="12" fontWeight="700">10%</text>
        </svg>
      </div>

      {/* Selected Band Details Showcase */}
      <div
        className={`rounded-2xl border ${activeBand.borderColor} ${activeBand.bgLight} p-5 sm:p-6 transition-all duration-300`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-black/5 pb-4">
          <div className="flex items-center gap-3">
            <span
              style={{ backgroundColor: activeBand.color }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
            >
              <activeBand.icon className="h-5 w-5" />
            </span>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${activeBand.textColor}`}>
                {activeBand.ratingRange} • {activeBand.percentage}% Quota
              </span>
              <h4 className="font-display text-lg sm:text-xl font-black text-slate-950">
                {activeBand.name}
              </h4>
            </div>
          </div>

          <div className="rounded-xl bg-white/80 border border-black/5 px-4 py-2 self-start sm:self-auto text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
              Simulated Headcount ({teamSize} Total)
            </span>
            <span className="font-display text-lg font-black text-slate-900">
              {headcountInBand} Employees
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white/70 p-3.5 border border-black/5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Salary Increment:
            </span>
            <span className="mt-1 font-display text-sm font-bold text-slate-900 block">
              {activeBand.increment}
            </span>
          </div>

          <div className="rounded-xl bg-white/70 p-3.5 border border-black/5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Variable Bonus Multiplier:
            </span>
            <span className="mt-1 font-display text-sm font-bold text-slate-900 block">
              {activeBand.bonus}
            </span>
          </div>

          <div className="rounded-xl bg-white/70 p-3.5 border border-black/5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Appraisal Action:
            </span>
            <span className="mt-1 font-display text-sm font-bold text-slate-900 block">
              {activeBand.action}
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          {activeBand.description}
        </p>
      </div>
    </div>
  );
}
