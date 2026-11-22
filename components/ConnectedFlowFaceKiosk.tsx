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
  Check,
  Radio,
  Building2,
  HardHat,
  Eye,
  Shield,
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
    screenBadge: "📅 Shift: 09:00 – 18:00 rostered",
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
  const [mode, setMode] = useState<"worker" | "corporate">("worker");
  const [isPunching, setIsPunching] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("09:28:44");
  const [currentMs, setCurrentMs] = useState<string>("842");

  // Auto-cycle through the 8 rules
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 8);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // Live millisecond ticking clock for high-authenticity video feel
  useEffect(() => {
    const clockTimer = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      const ms = String(now.getMilliseconds()).padStart(3, "0");
      setCurrentTime(`${h}:${m}:${s}`);
      setCurrentMs(ms);
    }, 60);
    return () => clearInterval(clockTimer);
  }, []);

  const triggerLivePunch = () => {
    setIsPunching(true);
    let step = 0;
    const interval = setInterval(() => {
      setActiveStep(step);
      step++;
      if (step >= 8) {
        clearInterval(interval);
        setTimeout(() => setIsPunching(false), 900);
      }
    }, 220);
  };

  const currentRule = allRules.find((r) => r.id === activeStep) || leftRules[0];
  const isMatchConfirmed = isPunching || activeStep % 2 === 0;

  // Profiles based on selected mode
  const profile =
    mode === "worker"
      ? {
          name: "Ramesh Verma",
          id: "EMP #1048",
          dept: "Production Unit 02",
          shift: "09:00 - 18:00 (On-Time)",
          punch: "08:58 AM",
          image: "/images/kiosk-face-worker.jpg",
          location: "GATE 01 • FACTORY KIOSK",
        }
      : {
          name: "Pooja Sharma",
          id: "EMP #2035",
          dept: "Accounts & Finance",
          shift: "09:30 - 18:30 (On-Time)",
          punch: "09:28 AM",
          image: "/images/kiosk-face-corporate.jpg",
          location: "MAIN RECEPTION • DESK KIOSK",
        };

  return (
    <div className="relative mt-10 sm:mt-14 w-full max-w-6xl mx-auto py-4">
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
        {/* CENTER HARDWARE FACE TERMINAL KIOSK (Live AI Recognition) */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center order-1 lg:order-2 py-2">
          {/* Mode Switcher: Factory Gate vs Corporate Office */}
          <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-800 p-1 shadow-md">
            <button
              type="button"
              onClick={() => setMode("worker")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold transition-all ${
                mode === "worker"
                  ? "bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <HardHat className="h-3 w-3" />
              <span>Factory Shift Gate</span>
            </button>
            <button
              type="button"
              onClick={() => setMode("corporate")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold transition-all ${
                mode === "corporate"
                  ? "bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2 className="h-3 w-3" />
              <span>Corporate Desk</span>
            </button>
          </div>

          {/* Hardware Device Chassis */}
          <div className="relative w-[265px] sm:w-[290px] rounded-[38px] bg-[#0A0E14] border-[4px] border-slate-800/95 p-3.5 shadow-2xl ring-1 ring-white/10 transition-all">
            {/* Top Biometric Status Indicator LED */}
            <div className="flex items-center justify-between px-3 mb-2">
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                AI SCANNER
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <div className="h-1.5 w-12 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              </div>
            </div>

            {/* Camera & Dual IR Sensor Notch */}
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="h-2 w-2 rounded-full bg-slate-900 ring-1 ring-slate-700/80 shadow-inner" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80 shadow-[0_0_6px_#f43f5e] animate-pulse" />
              <span className="h-1 w-1 rounded-full bg-cyan-400/80 shadow-[0_0_4px_#22d3ee]" />
            </div>

            {/* Terminal Screen with Photorealistic Portrait & Animated AI Vision HUD */}
            <div className="relative aspect-[9/15] w-full rounded-2xl bg-black overflow-hidden border border-slate-800 shadow-inner flex flex-col justify-between">
              {/* Authentic Photo with subtle camera breathing motion */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  key={profile.image}
                  src={profile.image}
                  alt={`Real-time Face Verification - ${profile.name}`}
                  fill
                  priority
                  className="object-cover object-center animate-camera-breathe transition-opacity duration-500"
                />
                {/* Vignette shadow to blend smoothly with terminal bezel */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/60 pointer-events-none" />
                
                {/* Subtle camera scanline texture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,181,165,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
              </div>

              {/* Top Screen HUD: Gate info, Millisecond Clock & Match Speed */}
              <div className="relative z-10 flex items-center justify-between text-[8px] font-mono font-semibold text-white/95 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1.5 border-b border-white/10">
                <span className="tracking-wider uppercase flex items-center gap-1 truncate max-w-[140px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {profile.location}
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1 font-mono">
                  {currentTime}.<span className="text-emerald-200">{currentMs}</span>
                </span>
              </div>

              {/* AI Biometric Face Reticle & Scanning Engine */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Reticle positioned around the employee's face */}
                <div
                  className={`relative w-[50%] h-[32%] -translate-y-4 rounded-2xl border-2 transition-all duration-300 ${
                    isMatchConfirmed
                      ? "border-emerald-400 bg-emerald-500/10 shadow-[0_0_24px_rgba(52,211,153,0.55)] scale-105"
                      : "border-teal-400/80 shadow-[0_0_16px_rgba(20,184,166,0.35)]"
                  }`}
                >
                  {/* High-Tech Corner Targeting Brackets */}
                  <span className="absolute -top-1 -left-1 h-3.5 w-3.5 border-t-2 border-l-2 border-emerald-300" />
                  <span className="absolute -top-1 -right-1 h-3.5 w-3.5 border-t-2 border-r-2 border-emerald-300" />
                  <span className="absolute -bottom-1 -left-1 h-3.5 w-3.5 border-b-2 border-l-2 border-emerald-300" />
                  <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 border-b-2 border-r-2 border-emerald-300" />

                  {/* Active Laser Scanning Beam (Sweeps up & down over face) */}
                  <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_12px_#34d399] animate-laser-sweep" />

                  {/* Facial Landmark Points & Biometric Feature Mesh */}
                  <div className="absolute inset-0">
                    {/* Left Eye Landmark */}
                    <span className="absolute top-[34%] left-[34%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399] animate-biometric-pulse" />
                    {/* Right Eye Landmark */}
                    <span className="absolute top-[34%] right-[34%] h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399] animate-biometric-pulse" />
                    {/* Nose Bridge Landmark */}
                    <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#22d3ee]" />
                    {/* Left Mouth Corner */}
                    <span className="absolute top-[68%] left-[38%] h-1 w-1 rounded-full bg-emerald-300" />
                    {/* Right Mouth Corner */}
                    <span className="absolute top-[68%] right-[38%] h-1 w-1 rounded-full bg-emerald-300" />
                    {/* Chin Landmark */}
                    <span className="absolute top-[82%] left-[50%] -translate-x-1/2 h-1 w-1 rounded-full bg-emerald-300" />

                    {/* Connecting SVG Biometric Triangulation Lines */}
                    <svg className="absolute inset-0 w-full h-full stroke-emerald-300/40 stroke-[0.8] fill-emerald-400/5">
                      <polygon points="40,38 75,38 57,56" />
                      <polygon points="40,38 57,56 44,76" />
                      <polygon points="75,38 57,56 70,76" />
                      <polygon points="44,76 70,76 57,92" />
                    </svg>
                  </div>

                  {/* Floating AI Confidence Pill */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/85 border border-emerald-400/60 px-2 py-0.5 text-[8px] font-mono font-bold text-emerald-300 shadow-sm flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-ping" />
                    <span>LIVENESS: 99.8% VERIFIED</span>
                  </div>

                  {/* Center Match Confirmed Badge */}
                  {isMatchConfirmed && (
                    <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in-95 duration-200">
                      <div className="rounded-full bg-emerald-500/95 border border-white/60 px-3 py-1 text-[10px] font-black text-white shadow-lg flex items-center gap-1.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                        <span>0.18s MATCH</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Area: Employee Identified Card & Live Rule Badge */}
              <div className="relative z-10 p-2.5 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent space-y-2">
                {/* Employee Identification Card */}
                <div className="rounded-xl bg-slate-900/90 border border-slate-700/80 p-2 shadow-lg backdrop-blur-xs flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="relative h-7 w-7 rounded-lg overflow-hidden border border-emerald-400/80 shrink-0">
                      <Image
                        src={profile.image}
                        alt={profile.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold text-white leading-tight truncate">
                        {profile.name}
                      </div>
                      <div className="text-[8px] font-mono text-emerald-400 truncate">
                        {profile.id} • {profile.shift}
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-md bg-emerald-500/20 border border-emerald-500/60 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300">
                    PUNCHED IN
                  </span>
                </div>

                {/* Active Connected Rule Notification Badge */}
                <div className="rounded-lg bg-emerald-950/95 border border-emerald-500/80 px-2.5 py-1 text-center shadow-md">
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

          {/* Bottom Interactive Simulation Trigger Button */}
          <div className="mt-4 flex flex-col items-center">
            <button
              type="button"
              onClick={triggerLivePunch}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 border border-slate-800 px-5 py-2.5 text-xs font-bold text-white shadow-xl hover:border-teal-400 hover:shadow-teal-500/15 transition-all cursor-pointer group active:scale-95"
            >
              <Sparkles className="h-3.5 w-3.5 text-teal-400 animate-spin [animation-duration:4s]" />
              <span>Simulate Live Punch (0.18s Match)</span>
              <Zap className="h-3.5 w-3.5 text-amber-400 transition-transform group-hover:scale-125" />
            </button>
            <p className="mt-2 text-[11px] font-medium text-slate-500 tracking-wide">
              12 payroll & statutory compliance rules run instantly on that single punch
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
