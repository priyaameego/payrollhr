"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Clock,
  Timer,
  Cloud,
  Calendar,
  Receipt,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

interface RuleCard {
  id: number;
  side: "left" | "right";
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
}

const leftRules: RuleCard[] = [
  {
    id: 0,
    side: "left",
    icon: CheckCircle2,
    iconBg: "bg-emerald-50 border-emerald-200/80",
    iconColor: "text-emerald-600",
    title: "Attendance marked",
    subtitle: "face matched at the gate",
  },
  {
    id: 1,
    side: "left",
    icon: Clock,
    iconBg: "bg-amber-50 border-amber-200/80",
    iconColor: "text-amber-600",
    title: "Late entry detected",
    subtitle: "12 minutes, fine applied",
  },
  {
    id: 2,
    side: "left",
    icon: Timer,
    iconBg: "bg-indigo-50 border-indigo-200/80",
    iconColor: "text-indigo-600",
    title: "Overtime calculated",
    subtitle: "2h 15m at 1.5x",
  },
  {
    id: 3,
    side: "left",
    icon: Cloud,
    iconBg: "bg-sky-50 border-sky-200/80",
    iconColor: "text-sky-600",
    title: "Works offline",
    subtitle: "synced when you are back online",
  },
];

const rightRules: RuleCard[] = [
  {
    id: 4,
    side: "right",
    icon: Calendar,
    iconBg: "bg-blue-50 border-blue-200/80",
    iconColor: "text-blue-600",
    title: "Shift matched",
    subtitle: "9 to 6, and the roster knows",
  },
  {
    id: 5,
    side: "right",
    icon: Receipt,
    iconBg: "bg-purple-50 border-purple-200/80",
    iconColor: "text-purple-600",
    title: "Payslip generated",
    subtitle: "salaries processed in one click",
  },
  {
    id: 6,
    side: "right",
    icon: ShieldCheck,
    iconBg: "bg-teal-50 border-teal-200/80",
    iconColor: "text-[#0E7A6E]",
    title: "PF, ESI, PT and LWF",
    subtitle: "stay 100% compliant",
  },
  {
    id: 7,
    side: "right",
    icon: Smartphone,
    iconBg: "bg-amber-50 border-amber-200/80",
    iconColor: "text-amber-600",
    title: "Staff app notified",
    subtitle: "in the language he reads",
  },
];

export default function ConnectedFlowFaceKiosk() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPunching, setIsPunching] = useState<boolean>(false);

  // Auto-cycle one by one through rules
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 8);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const triggerLivePunch = () => {
    setIsPunching(true);
    let step = 0;
    const interval = setInterval(() => {
      setActiveStep(step);
      step++;
      if (step >= 8) {
        clearInterval(interval);
        setTimeout(() => setIsPunching(false), 800);
      }
    }, 250);
  };

  return (
    <div className="relative mt-12 sm:mt-16 w-full max-w-6xl mx-auto py-6">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-teal-100/40 via-sky-100/30 to-emerald-50/20 blur-3xl pointer-events-none" />

      {/* Main Grid: Left Rules | Center Terminal | Right Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">
        
        {/* ======================================================== */}
        {/* LEFT 4 CONNECTED RULE CARDS */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-3.5 sm:gap-4 order-2 lg:order-1">
          {leftRules.map((rule) => {
            const Icon = rule.icon;
            const isActive = activeStep === rule.id;
            return (
              <div
                key={rule.id}
                onClick={() => setActiveStep(rule.id)}
                className={`group relative flex items-center justify-between rounded-2xl border bg-white/95 px-4 sm:px-5 py-3 shadow-card backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-[#12B5A5] ring-2 ring-[#12B5A5]/25 shadow-lg shadow-teal-900/10 -translate-x-1"
                    : "border-slate-200/80 hover:border-teal-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${rule.iconBg} ${rule.iconColor}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {rule.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {rule.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Connector Pin (Desktop) */}
                <div className="hidden lg:flex items-center gap-1">
                  <span
                    className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "bg-[#12B5A5] border-[#0E7A6E] scale-125 shadow-[0_0_8px_#12B5A5]"
                        : "bg-slate-200 border-slate-300"
                    }`}
                  />
                  {/* Dotted path leading to center */}
                  <span
                    className={`w-6 border-b-2 border-dashed transition-colors duration-300 ${
                      isActive ? "border-[#12B5A5]" : "border-slate-300"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* CENTER FACE SCANNER KIOSK TERMINAL */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center order-1 lg:order-2 py-4">
          <div className="relative w-[240px] sm:w-[270px] rounded-[32px] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-4 border-slate-800 p-3 shadow-2xl ring-1 ring-white/10">
            {/* Top Indicator Light */}
            <div className="h-1.5 w-12 rounded-full bg-emerald-400 mx-auto mb-2 shadow-[0_0_12px_#34d399] animate-pulse" />

            {/* Camera / IR Sensor Notch */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-slate-800 ring-1 ring-slate-700" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500/70" />
            </div>

            {/* Screen Display */}
            <div className="relative aspect-[9/14] w-full rounded-2xl bg-slate-950 overflow-hidden border border-slate-800 flex flex-col justify-between p-2.5">
              {/* Screen Header */}
              <div className="flex items-center justify-between text-[8px] text-slate-400 font-mono border-b border-slate-800 pb-1">
                <span>GATE-01 • LOGIN VIEW</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  0.18s MATCH
                </span>
              </div>

              {/* Worker Face Scan Simulation Frame */}
              <div className="relative flex-1 my-2 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 flex flex-col items-center justify-center overflow-hidden p-2">
                {/* Simulated worker avatar with safety helmet */}
                <div className="relative flex flex-col items-center">
                  {/* Yellow safety helmet */}
                  <div className="h-7 w-12 bg-amber-400 rounded-t-full border border-amber-500 shadow-sm relative -mb-1 z-10 flex items-center justify-center">
                    <span className="h-2 w-3 rounded bg-amber-500/60" />
                  </div>
                  {/* Face */}
                  <div className="h-14 w-12 rounded-2xl bg-[#E2B193] border-2 border-emerald-400 shadow-md relative flex flex-col items-center justify-center">
                    {/* Eyes */}
                    <div className="flex gap-2.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    </div>
                    {/* Mustache & Smile */}
                    <span className="h-1 w-4 bg-slate-800 rounded-full mt-2" />
                  </div>
                  {/* Blue worker shirt */}
                  <div className="h-6 w-20 bg-blue-700 rounded-t-xl mt-1 border-t border-blue-500" />

                  {/* AI Face Bounding Box & Corner Brackets */}
                  <div className="absolute -inset-2 border-2 border-dashed border-emerald-400 rounded-2xl animate-pulse pointer-events-none">
                    <span className="absolute -top-1 -left-1 h-2 w-2 border-t-2 border-l-2 border-emerald-400" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 border-t-2 border-r-2 border-emerald-400" />
                    <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-emerald-400" />
                    <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-emerald-400" />
                  </div>

                  {/* Laser Scanning Ray */}
                  <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#34d399] animate-bounce" />
                </div>

                {/* Live Match Notification */}
                <div className="mt-3 rounded-lg bg-emerald-950/80 border border-emerald-500/60 px-2 py-0.5 text-center">
                  <span className="text-[9px] font-bold text-emerald-300 font-mono">
                    ✓ Ramesh Kumar • ID: 1042
                  </span>
                </div>
              </div>

              {/* Device Branding */}
              <div className="text-center pt-1 border-t border-slate-900">
                <span className="font-display font-extrabold text-white text-xs tracking-wider">
                  Payrole<span className="text-[#12B5A5]">HR</span> ID
                </span>
              </div>
            </div>

            {/* Side Connector Pins (Visible on Desktop) */}
            <div className="hidden lg:block">
              {/* Left Pins */}
              <span className="absolute top-[22%] -left-2 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900" />
              <span className="absolute top-[42%] -left-2 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900" />
              <span className="absolute top-[62%] -left-2 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900" />
              <span className="absolute top-[82%] -left-2 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900" />
              {/* Right Pins */}
              <span className="absolute top-[22%] -right-2 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900" />
              <span className="absolute top-[42%] -right-2 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900" />
              <span className="absolute top-[62%] -right-2 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900" />
              <span className="absolute top-[82%] -right-2 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900" />
            </div>
          </div>

          {/* Bottom Pinned Badge */}
          <button
            type="button"
            onClick={triggerLivePunch}
            className="mt-3.5 inline-flex items-center gap-2 rounded-full bg-slate-950 border border-slate-800 px-4 py-2 text-xs font-bold text-white shadow-xl hover:border-teal-400 hover:shadow-teal-500/10 transition-all cursor-pointer group"
          >
            <Sparkles className="h-3.5 w-3.5 text-teal-400 animate-spin [animation-duration:4s]" />
            <span>12 more rules ran on that one punch</span>
            <Zap className="h-3 w-3 text-amber-400 transition-transform group-hover:scale-125" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* RIGHT 4 CONNECTED RULE CARDS */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-3.5 sm:gap-4 order-3">
          {rightRules.map((rule) => {
            const Icon = rule.icon;
            const isActive = activeStep === rule.id;
            return (
              <div
                key={rule.id}
                onClick={() => setActiveStep(rule.id)}
                className={`group relative flex items-center justify-between rounded-2xl border bg-white/95 px-4 sm:px-5 py-3 shadow-card backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-[#12B5A5] ring-2 ring-[#12B5A5]/25 shadow-lg shadow-teal-900/10 translate-x-1"
                    : "border-slate-200/80 hover:border-teal-200 hover:shadow-md"
                }`}
              >
                {/* Left Connector Pin (Desktop) */}
                <div className="hidden lg:flex items-center gap-1">
                  <span
                    className={`w-6 border-b-2 border-dashed transition-colors duration-300 ${
                      isActive ? "border-[#12B5A5]" : "border-slate-300"
                    }`}
                  />
                  <span
                    className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "bg-[#12B5A5] border-[#0E7A6E] scale-125 shadow-[0_0_8px_#12B5A5]"
                        : "bg-slate-200 border-slate-300"
                    }`}
                  />
                </div>

                <div className="flex items-center gap-3.5 flex-1 lg:ml-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${rule.iconBg} ${rule.iconColor}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {rule.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {rule.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
