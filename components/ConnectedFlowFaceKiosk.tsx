"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  screenBadge: string;
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
    screenBadge: "✓ Attendance marked • Gate 01",
  },
  {
    id: 1,
    side: "left",
    icon: Clock,
    iconBg: "bg-amber-50 border-amber-200/80",
    iconColor: "text-amber-600",
    title: "Late entry detected",
    subtitle: "12 minutes, fine applied",
    screenBadge: "⏰ Late entry detected • 12 mins",
  },
  {
    id: 2,
    side: "left",
    icon: Timer,
    iconBg: "bg-indigo-50 border-indigo-200/80",
    iconColor: "text-indigo-600",
    title: "Overtime calculated",
    subtitle: "2h 15m at 1.5x",
    screenBadge: "⚡ Overtime: 2h 15m @ 1.5x",
  },
  {
    id: 3,
    side: "left",
    icon: Cloud,
    iconBg: "bg-sky-50 border-sky-200/80",
    iconColor: "text-sky-600",
    title: "Works offline",
    subtitle: "synced when you are back online",
    screenBadge: "☁️ Offline cache: 0 pending",
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
    screenBadge: "📅 Shift: 09:30 – 18:30 rostered",
  },
  {
    id: 5,
    side: "right",
    icon: Receipt,
    iconBg: "bg-purple-50 border-purple-200/80",
    iconColor: "text-purple-600",
    title: "Payslip generated",
    subtitle: "salaries processed in one click",
    screenBadge: "🧾 Payslip generated • 1-Click",
  },
  {
    id: 6,
    side: "right",
    icon: ShieldCheck,
    iconBg: "bg-teal-50 border-teal-200/80",
    iconColor: "text-[#0E7A6E]",
    title: "PF, ESI, PT and LWF",
    subtitle: "stay 100% compliant",
    screenBadge: "🛡️ PF, ESI & PT 100% Compliant",
  },
  {
    id: 7,
    side: "right",
    icon: Smartphone,
    iconBg: "bg-amber-50 border-amber-200/80",
    iconColor: "text-amber-600",
    title: "Staff app notified",
    subtitle: "in the language he reads",
    screenBadge: "📱 Staff notified in Hindi/Eng",
  },
];

const allRules = [...leftRules, ...rightRules];

export default function ConnectedFlowFaceKiosk() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPunching, setIsPunching] = useState<boolean>(false);

  // Auto-cycle one by one through rules
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 8);
    }, 2200);
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
    }, 220);
  };

  const currentRule = allRules.find((r) => r.id === activeStep) || leftRules[0];

  return (
    <div className="relative mt-12 sm:mt-16 w-full max-w-6xl mx-auto py-4">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-teal-100/40 via-sky-100/30 to-emerald-50/20 blur-3xl pointer-events-none" />

      {/* Main Grid: Left Rules (4) | Center Real Hardware Terminal | Right Rules (4) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_auto_1.1fr] gap-6 lg:gap-8 items-center">
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
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${rule.iconBg} ${rule.iconColor}`}
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

                {/* Right Connector Pin & Dashed Line (Desktop) */}
                <div className="hidden lg:flex items-center gap-1.5 ml-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "bg-[#12B5A5] border-[#0E7A6E] scale-125 shadow-[0_0_8px_#12B5A5]"
                        : "bg-slate-200 border-slate-300"
                    }`}
                  />
                  <span
                    className={`w-8 border-b-2 border-dashed transition-colors duration-300 ${
                      isActive ? "border-[#12B5A5]" : "border-slate-300"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* CENTER REAL HARDWARE FACE TERMINAL KIOSK (100% Copyright-Free) */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center order-1 lg:order-2 py-2">
          {/* Hardware Device Chassis */}
          <div className="relative w-[260px] sm:w-[285px] rounded-[36px] bg-[#0c1017] border-[4px] border-slate-800 p-3.5 shadow-2xl ring-1 ring-white/10">
            {/* Top Indicator Light (Live biometric green glow) */}
            <div className="h-1.5 w-14 rounded-full bg-emerald-400 mx-auto mb-2.5 shadow-[0_0_14px_#34d399] animate-pulse" />

            {/* Camera & Dual IR Sensor Notch */}
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-900 ring-1 ring-slate-700/80 shadow-inner" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80 shadow-[0_0_6px_#f43f5e]" />
            </div>

            {/* Terminal Screen with REAL Photography & Dynamic Biometric HUD */}
            <div className="relative aspect-[9/14] w-full rounded-2xl bg-black overflow-hidden border border-slate-800/90 shadow-inner flex flex-col justify-between">
              {/* REAL Photo of worker at gate (100% Royalty-Free Commercial License) */}
              <div className="absolute inset-0">
                <Image
                  src="/images/kiosk-face-real.jpg"
                  alt="Real-time Face Verification at Attendance Gate"
                  fill
                  priority
                  className="object-cover object-center scale-105 transition-transform duration-1000"
                />
                {/* Subtle vignette shadow to blend with hardware frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/45 pointer-events-none" />
              </div>

              {/* Realistic AI Face Recognition Bounding Box & HUD overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-36 h-48 rounded-2xl border-2 border-emerald-400/85 shadow-[0_0_16px_rgba(52,211,153,0.35)] animate-pulse">
                  {/* Corner targeting brackets */}
                  <span className="absolute -top-1 -left-1 h-3.5 w-3.5 border-t-2 border-l-2 border-emerald-300" />
                  <span className="absolute -top-1 -right-1 h-3.5 w-3.5 border-t-2 border-r-2 border-emerald-300" />
                  <span className="absolute -bottom-1 -left-1 h-3.5 w-3.5 border-b-2 border-l-2 border-emerald-300" />
                  <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 border-b-2 border-r-2 border-emerald-300" />

                  {/* Facial landmark reticles on eyes */}
                  <span className="absolute top-12 left-7 h-2 w-2 rounded-full border border-emerald-300/80 bg-emerald-400/30 animate-ping [animation-duration:3s]" />
                  <span className="absolute top-12 right-7 h-2 w-2 rounded-full border border-emerald-300/80 bg-emerald-400/30 animate-ping [animation-duration:3s]" />

                  {/* Laser scanning beam */}
                  <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] animate-[bounce_3s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* Top Screen HUD */}
              <div className="relative z-10 flex items-center justify-between text-[8px] font-mono font-semibold text-white/95 bg-slate-950/75 backdrop-blur-xs px-2.5 py-1.5 border-b border-white/10">
                <span className="tracking-wider uppercase">GATE 01 • LOGIN VIEW</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  0.18s MATCH
                </span>
              </div>

              {/* Bottom Screen Live Rule Verification Pill */}
              <div className="relative z-10 p-2.5 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent">
                <div className="rounded-lg bg-emerald-950/90 border border-emerald-500/70 px-2.5 py-1 text-center backdrop-blur-xs shadow-md transition-all duration-300">
                  <span className="text-[10px] font-bold text-emerald-300 font-mono tracking-wide flex items-center justify-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {currentRule.screenBadge}
                  </span>
                </div>
              </div>
            </div>

            {/* Hardware Chin: PayroleHR ID Branding */}
            <div className="text-center pt-2.5 pb-0.5">
              <span className="font-display font-black text-white text-xs tracking-wider">
                Payrole<span className="text-[#12B5A5]">HR</span>{" "}
                <span className="text-slate-400 font-medium text-[10px]">ID</span>
              </span>
            </div>

            {/* Left & Right Hardware Connector Pins (Desktop) */}
            <div className="hidden lg:block pointer-events-none">
              {/* Left Pins */}
              <span className="absolute top-[20%] -left-2.5 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900 shadow-sm" />
              <span className="absolute top-[40%] -left-2.5 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900 shadow-sm" />
              <span className="absolute top-[60%] -left-2.5 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900 shadow-sm" />
              <span className="absolute top-[80%] -left-2.5 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900 shadow-sm" />
              {/* Right Pins */}
              <span className="absolute top-[20%] -right-2.5 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900 shadow-sm" />
              <span className="absolute top-[40%] -right-2.5 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900 shadow-sm" />
              <span className="absolute top-[60%] -right-2.5 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900 shadow-sm" />
              <span className="absolute top-[80%] -right-2.5 h-2.5 w-2.5 rounded-full bg-[#12B5A5] border-2 border-slate-900 shadow-sm" />
            </div>
          </div>

          {/* Bottom Action Pill & Subtext */}
          <div className="mt-4 flex flex-col items-center">
            <button
              type="button"
              onClick={triggerLivePunch}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 border border-slate-800 px-4 sm:px-5 py-2 text-xs font-bold text-white shadow-xl hover:border-teal-400 hover:shadow-teal-500/10 transition-all cursor-pointer group"
            >
              <Sparkles className="h-3.5 w-3.5 text-teal-400 animate-spin [animation-duration:4s]" />
              <span>12 more rules ran on that one punch</span>
              <Zap className="h-3 w-3 text-amber-400 transition-transform group-hover:scale-125" />
            </button>
            <p className="mt-2 text-[11px] font-medium text-slate-500 tracking-wide">
              Free to start. No card, no contract.
            </p>
          </div>
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
                {/* Left Connector Pin & Dashed Line (Desktop) */}
                <div className="hidden lg:flex items-center gap-1.5 mr-3">
                  <span
                    className={`w-8 border-b-2 border-dashed transition-colors duration-300 ${
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

                <div className="flex items-center gap-3.5 flex-1">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${rule.iconBg} ${rule.iconColor}`}
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
