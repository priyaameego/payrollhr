"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ScanFace,
  Receipt,
  CalendarCheck,
  Users,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  Clock,
  Sparkles,
  Building,
  Check,
  Landmark,
} from "lucide-react";

interface SlideData {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  floatingBadgeTop: {
    icon: string;
    text: string;
    sub?: string;
  };
  floatingBadgeBottom: {
    icon: string;
    text: string;
    sub?: string;
  };
}

const slides: SlideData[] = [
  {
    id: "attendance",
    tabLabel: "Face Attendance",
    category: "Time & Attendance",
    title: "Contactless AI Face Kiosk",
    floatingBadgeTop: {
      icon: "scan",
      text: "Face Match: 0.18s",
      sub: "Anti-Spoof Pass",
    },
    floatingBadgeBottom: {
      icon: "sync",
      text: "3 Active Kiosks",
      sub: "Live Gate Sync",
    },
  },
  {
    id: "payroll",
    tabLabel: "1-Click Payroll",
    category: "Leave & Payroll",
    title: "Statutory Payroll & Direct Bank Payout",
    floatingBadgeTop: {
      icon: "rupee",
      text: "₹64.28L Net Payout",
      sub: "HDFC CMS Ready",
    },
    floatingBadgeBottom: {
      icon: "shield",
      text: "100% Statutory",
      sub: "PF, ESI, PT & TDS",
    },
  },
  {
    id: "leave",
    tabLabel: "Leave & Approvals",
    category: "Workforce Rules",
    title: "Live Leave Accrual & Manager Approval",
    floatingBadgeTop: {
      icon: "check",
      text: "Request Reviewed",
      sub: "Auto-Balance Deduct",
    },
    floatingBadgeBottom: {
      icon: "calendar",
      text: "Sandwich Policy",
      sub: "Weekend Rule Active",
    },
  },
  {
    id: "directory",
    tabLabel: "Employee 360°",
    category: "Core HR",
    title: "Staff Directory & Self-Service Portal",
    floatingBadgeTop: {
      icon: "phone",
      text: "Mobile OTP Sign-in",
      sub: "No Passwords",
    },
    floatingBadgeBottom: {
      icon: "user",
      text: "148 Active Profiles",
      sub: "Aadhaar / PAN Verified",
    },
  },
  {
    id: "analytics",
    tabLabel: "Workforce Analytics",
    category: "Executive Insights",
    title: "Real-Time Attendance & Headcount Intelligence",
    floatingBadgeTop: {
      icon: "chart",
      text: "94% Attendance",
      sub: "Weekly Average",
    },
    floatingBadgeBottom: {
      icon: "building",
      text: "5 Departments",
      sub: "Zero Unaccounted",
    },
  },
];

export default function HeroShowcaseSlider() {
  const [mounted, setMounted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [simPunchState, setSimPunchState] = useState<"idle" | "scanning" | "matched">("idle");
  const [presentCount, setPresentCount] = useState(136);
  const [leaveApproved, setLeaveApproved] = useState(false);
  const [copiedBankFile, setCopiedBankFile] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const safeIdx = Math.max(0, Math.min(currentIdx, slides.length - 1));
  const activeSlide = slides[safeIdx] || slides[0];

  // Auto-play timer (5.5 seconds per slide), pauses on hover or interaction
  useEffect(() => {
    if (!mounted || isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [mounted, isPaused]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSimPunch = () => {
    setSimPunchState("scanning");
    setTimeout(() => {
      setSimPunchState("matched");
      setPresentCount((c) => (c === 136 ? 137 : 136));
      setTimeout(() => {
        setSimPunchState("idle");
      }, 3500);
    }, 400);
  };

  const handleApproveLeave = () => {
    setLeaveApproved(true);
    setTimeout(() => setLeaveApproved(false), 3000);
  };

  const handleExportBank = () => {
    setCopiedBankFile(true);
    setTimeout(() => setCopiedBankFile(false), 2500);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* BambooHR-Inspired Floating Interactive Top Badge */}
      {activeSlide?.floatingBadgeTop && (
        <div className="animate-float absolute -top-4 -right-2 sm:-right-4 z-20 flex items-center gap-2.5 rounded-2xl border border-teal-200/90 bg-white/95 px-3.5 py-2 shadow-lg shadow-teal-500/10 backdrop-blur-md">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <span className="block text-xs font-bold text-slate-800 leading-tight">
              {activeSlide.floatingBadgeTop.text}
            </span>
            <span className="block text-[10px] text-teal-700 font-semibold">
              {activeSlide.floatingBadgeTop.sub}
            </span>
          </div>
        </div>
      )}

      {/* BambooHR-Inspired Floating Interactive Bottom Badge */}
      {activeSlide?.floatingBadgeBottom && (
        <div className="animate-float-delayed absolute -bottom-5 -left-2 sm:-left-4 z-20 flex items-center gap-2.5 rounded-2xl border border-teal-200/90 bg-white/95 px-3.5 py-2 shadow-lg shadow-teal-500/10 backdrop-blur-md">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-teal-50 border border-teal-200/70 text-[#0E7A6E] font-bold text-xs">
            {activeSlide.floatingBadgeBottom.icon === "rupee"
              ? "₹"
              : activeSlide.floatingBadgeBottom.icon === "sync"
              ? "⚡"
              : "✓"}
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-800 leading-tight">
              {activeSlide.floatingBadgeBottom.text}
            </span>
            <span className="block text-[10px] text-slate-500 font-medium">
              {activeSlide.floatingBadgeBottom.sub}
            </span>
          </div>
        </div>
      )}

      {/* Layered 2.5D Stacked Background Cards (BambooHR Visual Storytelling Depth) */}
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-teal-200/40 via-emerald-100/50 to-teal-100/30 transform rotate-1 scale-[0.99] blur-[0.5px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-[#12B5A5]/20 via-[#8FE8DC]/20 to-transparent blur-2xl pointer-events-none"
      />

      {/* Main Glassmorphic Showcase Shell */}
      <div className="attendo-card relative overflow-hidden bg-white/98 p-5 sm:p-7 shadow-2xl border border-teal-100/90 rounded-3xl">
        {/* Top Control Bar: Tab Carousel Selectors & Arrow Buttons */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 gap-2">
          {/* Scrollable / Responsive Tab Pills */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
            {slides.map((s, idx) => {
              const isActive = currentIdx === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  className={`relative rounded-xl px-3 py-1.5 text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-teal-50/70"
                  }`}
                >
                  {s.tabLabel}
                  {/* Active Progress Bar Underline */}
                  {isActive && !isPaused && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-white/60 rounded-full overflow-hidden">
                      <span className="block h-full bg-white animate-[marquee_5.5s_linear_infinite]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Prev / Next Arrows */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous showcase card"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-teal-50 hover:text-[#12B5A5] hover:border-teal-200 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next showcase card"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-teal-50 hover:text-[#12B5A5] hover:border-teal-200 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Animated Showcase Panels (Slide & Fade Transition) */}
        <div className="mt-4 min-h-[350px] flex flex-col justify-between">
          {/* ======================================================== */}
          {/* SLIDE 1: ATTENDANCE & FACE KIOSK */}
          {/* ======================================================== */}
          {activeSlide.id === "attendance" && (
            <div className="space-y-4 animate-in fade-in zoom-in-98 duration-300">
              {/* Virtual AI Face Terminal Viewport */}
              <div className="relative overflow-hidden rounded-2xl border border-teal-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-4 text-white">
                {/* Active Scanning Beam */}
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#8FE8DC] to-transparent shadow-[0_0_12px_#12B5A5] animate-[bounce_2.5s_ease-in-out_infinite]" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-teal-300 font-bold uppercase tracking-wider">
                      Gate 01 Contactless Tablet
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-300 font-mono">0.18s Match</span>
                </div>

                <div className="my-3 flex items-center justify-center">
                  <div
                    className={`relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                      simPunchState === "matched"
                        ? "border-emerald-400 bg-emerald-500/20 shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                        : simPunchState === "scanning"
                        ? "border-teal-400 bg-teal-500/20 animate-pulse"
                        : "border-dashed border-teal-500/60 bg-teal-900/20"
                    }`}
                  >
                    {simPunchState === "matched" ? (
                      <CheckCircle2 className="h-10 w-10 text-emerald-400 animate-in zoom-in-75 duration-200" />
                    ) : (
                      <ScanFace className="h-9 w-9 text-teal-300" />
                    )}
                  </div>
                </div>

                <div className="text-center">
                  {simPunchState === "matched" ? (
                    <div className="animate-in fade-in duration-150">
                      <span className="text-xs font-bold text-emerald-300">
                        ✓ Arun Sharma (EMP-0142) · 99.8% Confidence
                      </span>
                      <p className="text-[10px] text-slate-300 mt-0.5">Punched IN at 09:02:14 AM</p>
                    </div>
                  ) : simPunchState === "scanning" ? (
                    <span className="text-xs font-bold text-teal-300">
                      Matching facial vector against database...
                    </span>
                  ) : (
                    <span className="text-xs text-slate-300 font-medium">
                      Walk up or selfie verify — contactless check-in
                    </span>
                  )}
                </div>

                <div className="mt-3 text-center">
                  <button
                    type="button"
                    onClick={handleSimPunch}
                    disabled={simPunchState !== "idle"}
                    className="shimmer-pill w-full rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2.5 text-xs font-bold text-white shadow-md hover:from-[#0E9486] hover:to-[#0B7A6E] active:scale-95 transition-all disabled:opacity-70"
                  >
                    {simPunchState === "matched"
                      ? "Punch Logged to Cloud Register!"
                      : simPunchState === "scanning"
                      ? "Scanning..."
                      : "⚡ Test Contactless Face Punch (0.18s)"}
                  </button>
                </div>
              </div>

              {/* Real-time Attendance Status Strip */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-teal-100 bg-[#F0FDFB] p-2.5 text-center">
                  <span className="text-[11px] text-slate-500 font-semibold">Present Today</span>
                  <div className="font-display text-xl font-extrabold text-[#12B5A5]">
                    {presentCount}
                  </div>
                </div>
                <div className="rounded-xl border border-amber-100/80 bg-amber-50/50 p-2.5 text-center">
                  <span className="text-[11px] text-slate-500 font-semibold">Late (&gt;15m)</span>
                  <div className="font-display text-xl font-extrabold text-amber-600">5</div>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center">
                  <span className="text-[11px] text-slate-500 font-semibold">On Leave</span>
                  <div className="font-display text-xl font-extrabold text-slate-700">7</div>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SLIDE 2: 1-CLICK PAYROLL & BANK CMS EXPORT */}
          {/* ======================================================== */}
          {activeSlide.id === "payroll" && (
            <div className="space-y-4 animate-in fade-in zoom-in-98 duration-300">
              <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/40 p-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0E7A6E]">
                      Current Salary Run
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 leading-tight">
                      October 2026 Payout
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                    <CheckCircle2 className="h-3 w-3" />
                    Locked & Ready
                  </span>
                </div>

                <div className="mt-3.5 space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100/80">
                    <span className="text-slate-600 font-medium">148 Active Employees:</span>
                    <span className="font-mono font-bold text-slate-900">₹69,82,400 Gross</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100/80">
                    <span className="text-slate-600 font-medium">Statutory (PF, ESI, PT, TDS):</span>
                    <span className="font-mono font-semibold text-rose-600">-₹5,53,950</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-900 font-bold">Total Net Bank Payout:</span>
                    <span className="font-mono font-black text-teal-700 text-sm">₹64,28,450</span>
                  </div>
                </div>
              </div>

              {/* Bank CMS Direct Action Box */}
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Landmark className="h-3.5 w-3.5 text-[#12B5A5]" />
                    Target Bank Template:
                  </span>
                  <span className="font-mono font-bold text-slate-900">HDFC_CMS_OCT2026.csv</span>
                </div>

                <button
                  type="button"
                  onClick={handleExportBank}
                  className="shimmer-pill w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2.5 text-xs font-bold text-white shadow-md hover:from-[#0E9486] hover:to-[#0B7A6E] active:scale-95 transition-all"
                >
                  {copiedBankFile ? (
                    <>
                      <Check className="h-4 w-4" />
                      HDFC Bank File Downloaded!
                    </>
                  ) : (
                    <>
                      <Receipt className="h-4 w-4" />
                      1-Click Bank Direct Transfer Export
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SLIDE 3: LEAVE MANAGEMENT & APPROVALS */}
          {/* ======================================================== */}
          {activeSlide.id === "leave" && (
            <div className="space-y-4 animate-in fade-in zoom-in-98 duration-300">
              {/* Balances Pill Strip */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-teal-100 bg-[#E8FAF7] p-2.5 text-center">
                  <span className="text-[10px] text-slate-500 font-semibold block">Paid Leave</span>
                  <span className="font-display text-lg font-extrabold text-[#0E7A6E]">14 Days</span>
                </div>
                <div className="rounded-xl border border-sky-100 bg-sky-50 p-2.5 text-center">
                  <span className="text-[10px] text-slate-500 font-semibold block">Casual Leave</span>
                  <span className="font-display text-lg font-extrabold text-sky-700">4 Days</span>
                </div>
                <div className="rounded-xl border border-purple-100 bg-purple-50 p-2.5 text-center">
                  <span className="text-[10px] text-slate-500 font-semibold block">Sick Leave</span>
                  <span className="font-display text-lg font-extrabold text-purple-700">6 Days</span>
                </div>
              </div>

              {/* Interactive Leave Request Card */}
              <div className="rounded-2xl border border-teal-100/90 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-[#12B5A5] font-bold text-xs">
                      RG
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Rohan Gupta</p>
                      <p className="text-[11px] text-slate-500">Marketing · EMP-0063</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      leaveApproved
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {leaveApproved ? "Approved ✓" : "Pending Review"}
                  </span>
                </div>

                <div className="mt-3 text-xs space-y-1 text-slate-600">
                  <p>
                    <strong className="text-slate-800">Casual Leave (2 days):</strong> 24 Nov – 25
                    Nov 2026
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Reason: Family function. Balance will reduce from 4 to 2 days.
                  </p>
                </div>

                <div className="mt-3.5 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleApproveLeave}
                    disabled={leaveApproved}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all disabled:opacity-75"
                  >
                    {leaveApproved ? "Approved ✓ Deducted from Ledger" : "Approve Leave"}
                  </button>
                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SLIDE 4: EMPLOYEE 360° & SELF SERVICE */}
          {/* ======================================================== */}
          {activeSlide.id === "directory" && (
            <div className="space-y-4 animate-in fade-in zoom-in-98 duration-300">
              <div className="rounded-2xl border border-teal-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100 font-bold text-sm">
                    AS
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-slate-900">Arun Sharma</h4>
                    <p className="text-xs text-slate-500">Tech Lead · Engineering Department</p>
                    <span className="inline-block mt-0.5 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.2 text-[10px] font-bold text-emerald-700">
                      Active · ID: EMP-0142
                    </span>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block font-medium">Assigned Shift</span>
                    <span className="font-semibold text-slate-800">General (09:00 - 18:00)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block font-medium">Bank Account</span>
                    <span className="font-semibold text-slate-800 font-mono">HDFC •••• 4021</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block font-medium">Compliance</span>
                    <span className="font-semibold text-emerald-700">PF & ESI Linked</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block font-medium">Self-Service</span>
                    <span className="font-semibold text-teal-700">Mobile OTP Active</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-teal-100/80 bg-teal-50/50 p-3 text-center text-xs text-slate-700">
                📱 Staff can download monthly payslips & apply for leave from any phone.
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SLIDE 5: WORKFORCE ANALYTICS */}
          {/* ======================================================== */}
          {activeSlide.id === "analytics" && (
            <div className="space-y-4 animate-in fade-in zoom-in-98 duration-300">
              <div className="rounded-2xl border border-teal-100 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E7A6E]">
                      Live Attendance Master
                    </span>
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      Weekly Workforce Presence
                    </h4>
                  </div>
                  <span className="rounded-full bg-teal-50 border border-teal-200 px-2.5 py-0.5 text-xs font-bold text-[#0E7A6E]">
                    94% Average
                  </span>
                </div>

                {/* Simulated Attendance Bar Chart */}
                <div className="mt-4 flex items-end gap-2.5 h-20 pt-2">
                  {[68, 85, 76, 92, 88, 80, 96].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div
                        style={{ height: `${val}%` }}
                        className={`w-full rounded-md transition-all duration-500 ${
                          idx === 6
                            ? "bg-gradient-to-t from-[#12B5A5] to-[#0E9486]"
                            : "bg-teal-100/90 hover:bg-teal-200"
                        }`}
                      />
                      <span className="text-[10px] font-medium text-slate-400">
                        {["M", "T", "W", "T", "F", "S", "M"][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Headcount Breakdown */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Engineering</span>
                  <span className="font-bold text-slate-900">42 Staff</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Logistics</span>
                  <span className="font-bold text-slate-900">56 Staff</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Operations</span>
                  <span className="font-bold text-slate-900">50 Staff</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Card Footer: Navigation Dots & Slide Indicator */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            {/* Slide Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIdx(dotIdx)}
                  aria-label={`Jump to slide ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIdx === dotIdx
                      ? "w-6 bg-[#12B5A5]"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <Link
              href="/features"
              className="font-bold text-[#12B5A5] hover:text-[#0E9486] flex items-center gap-1 transition-colors text-xs"
            >
              <span>Explore all features</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
