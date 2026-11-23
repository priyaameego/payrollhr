"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Clock,
  MapPin,
  ScanFace,
  IndianRupee,
  CalendarCheck2,
  Download,
  Users,
  Coins,
  BadgePercent,
  Check,
} from "lucide-react";

interface FeatureDetail {
  id: string;
  name: string;
  category: string;
  tag: string;
  tone: "teal" | "amber" | "purple" | "blue" | "emerald";
  heading: string;
  subheading: string;
  metrics: { label: string; value: string; color?: string }[];
  description: string;
  pageLink: string;
  pageText: string;
}

const FEATURE_DATA: Record<string, FeatureDetail> = {
  face: {
    id: "face",
    name: "Face attendance",
    category: "Touchless Biometrics",
    tag: "0.18s Instant Match",
    tone: "teal",
    heading: "PayroleHR Face Kiosk",
    subheading: "AI-Powered Touchless Check-in at Gate & Reception",
    metrics: [
      { label: "Verification Speed", value: "0.18s Lightning Match", color: "text-[#0E9486] font-bold" },
      { label: "Liveness Anti-Spoof", value: "3D Infrared Verified", color: "text-slate-900 font-semibold" },
      { label: "Offline Buffer", value: "100,000 Punches Synced", color: "text-slate-900 font-semibold" },
    ],
    description: "Turns any standard Android tablet or smartphone into an enterprise face terminal with zero biometric machine maintenance.",
    pageLink: "/features/attendance",
    pageText: "Explore Face Attendance",
  },
  advance: {
    id: "advance",
    name: "Salary advances",
    category: "Payroll & Payouts",
    tag: "Auto-Recovered",
    tone: "amber",
    heading: "Salary Advances & Monthly Payout",
    subheading: "Automated Net Salary Calculation in PayroleHR",
    metrics: [
      { label: "Gross Salary", value: "₹24,500", color: "text-slate-900 font-semibold" },
      { label: "Advance Recovery", value: "-₹4,000", color: "text-rose-600 font-bold" },
      { label: "Statutory Deductions (PF/ESIC)", value: "-₹2,850", color: "text-rose-600 font-bold" },
      { label: "Net Take-Home Pay", value: "₹17,650", color: "text-emerald-700 font-extrabold" },
    ],
    description: "Approved advances recover automatically from month-end salary payout files without messy spreadsheets or manual deduction tracking.",
    pageLink: "/features/payroll",
    pageText: "Explore Payroll Engine",
  },
  reports: {
    id: "reports",
    name: "Custom reports",
    category: "Statutory & MIS",
    tag: "1-Click Excel / PDF",
    tone: "purple",
    heading: "Monthly Wage Register & Muster Roll",
    subheading: "Form T & Indian Labour Law Compliant Registers",
    metrics: [
      { label: "Export Formats", value: "Excel, PDF, CSV", color: "text-purple-700 font-bold" },
      { label: "Bank Disbursement", value: "50+ Bank NEFT Formats", color: "text-slate-900 font-semibold" },
      { label: "Audit Readiness", value: "Row-by-Row Log History", color: "text-slate-900 font-semibold" },
    ],
    description: "Generate compliant wage registers, muster rolls, overtime summaries, and bank payment batch files in under 30 seconds.",
    pageLink: "/features/reports",
    pageText: "Explore All Reports",
  },
  grace: {
    id: "grace",
    name: "Grace period rules",
    category: "Shift & Time Policy",
    tag: "Shift Policy",
    tone: "blue",
    heading: "Grace Period & Late Entry Rules",
    subheading: "Automated Tolerance Policies for Multi-Shift Workplaces",
    metrics: [
      { label: "Morning Grace Window", value: "15 Mins / Shift", color: "text-blue-700 font-bold" },
      { label: "Tolerance Rule", value: "3 Late Marks = 0.5 Day Leave", color: "text-amber-700 font-bold" },
      { label: "Manager Notification", value: "Instant WhatsApp Alert", color: "text-slate-900 font-semibold" },
    ],
    description: "Configurable grace windows per shift ensure fair employee discipline while eliminating morning entry disputes with supervisors.",
    pageLink: "/features/attendance",
    pageText: "Explore Attendance Rules",
  },
  leave: {
    id: "leave",
    name: "Leave policies",
    category: "Paperless HR",
    tag: "Self-Service",
    tone: "teal",
    heading: "Leave Policies & Comp-off Accrual",
    subheading: "Multi-Tier Approval Hierarchy with Real-Time Balances",
    metrics: [
      { label: "Auto Accrual", value: "CL, SL, PL Monthly", color: "text-slate-900 font-semibold" },
      { label: "Sunday Shift Comp-off", value: "Auto-Credited to Ledger", color: "text-[#0E9486] font-bold" },
      { label: "Approval Channel", value: "1-Click WhatsApp / App", color: "text-slate-900 font-semibold" },
    ],
    description: "Staff view accurate leave balances and request leaves on their mobile phone, while managers approve in one click without paper forms.",
    pageLink: "/features/leave-attendance",
    pageText: "Explore Leave System",
  },
  geofence: {
    id: "geofence",
    name: "Geofencing",
    category: "Field Workforce",
    tag: "Anti-Spoof GPS",
    tone: "emerald",
    heading: "GPS Geofencing & Field Tracking",
    subheading: "Tamper-Proof Mobile Attendance for Remote & Site Teams",
    metrics: [
      { label: "Geofence Accuracy", value: "100m Precision Circle", color: "text-emerald-700 font-bold" },
      { label: "Mock Location Shield", value: "Developer Mode Blocked", color: "text-slate-900 font-semibold" },
      { label: "Check-in Proof", value: "Selfie + Live Map Coordinates", color: "text-slate-900 font-semibold" },
    ],
    description: "Ensures field executives, client site engineers, and sales reps punch attendance only from authorized job sites with real-time location proof.",
    pageLink: "/features/geo-tracking",
    pageText: "Explore GPS Mobile Tracking",
  },
  pf: {
    id: "pf",
    name: "PF & ESI compliance",
    category: "Statutory Compliance",
    tag: "100% Indian Labour Law",
    tone: "teal",
    heading: "PF, ESI & Statutory Compliance",
    subheading: "Pre-Configured Rules Across 28 Indian States",
    metrics: [
      { label: "EPFO ECR File", value: "1-Click Download for Portal", color: "text-[#0E9486] font-bold" },
      { label: "ESIC Return", value: "Automated Form 5 Monthly", color: "text-slate-900 font-semibold" },
      { label: "PT & Labour Welfare", value: "State-wise Tax Slabs", color: "text-slate-900 font-semibold" },
    ],
    description: "Never pay late statutory penalties or spend hours reconciling compliance spreadsheets. Generates error-free government filing files.",
    pageLink: "/features/payroll",
    pageText: "Explore Compliance",
  },
};

const CLOUD_WORDS = [
  // Major pillars
  { id: "face", label: "Face attendance", size: "lg", tone: "teal", key: "face" },
  { id: "advance", label: "Salary advances", size: "lg", tone: "amber", key: "advance" },
  { id: "payroll", label: "Payroll processing", size: "xl", tone: "slate", key: "advance" },
  { id: "reports", label: "Custom reports", size: "lg", tone: "purple", key: "reports" },
  { id: "leave", label: "Leave policies", size: "lg", tone: "slate", key: "leave" },
  { id: "grace", label: "Late entry rules", size: "md", tone: "blue", key: "grace" },
  { id: "geofence", label: "Geofencing", size: "md", tone: "emerald", key: "geofence" },
  { id: "pf", label: "PF & ESI", size: "md", tone: "teal", key: "pf" },

  // Supporting workforce capabilities
  { id: "payslips", label: "Customised payslips", size: "md", tone: "slate", key: "advance" },
  { id: "compoff", label: "Comp off", size: "md", tone: "slate", key: "leave" },
  { id: "reimburse", label: "Reimbursements", size: "md", tone: "slate", key: "advance" },
  { id: "overtime", label: "Overtime alerts", size: "sm", tone: "slate", key: "grace" },
  { id: "biometric", label: "Biometric device", size: "sm", tone: "slate", key: "face" },
  { id: "bulk_work", label: "Bulk add work", size: "sm", tone: "slate", key: "reports" },
  { id: "custom_salary", label: "Custom salary components", size: "sm", tone: "slate", key: "advance" },
  { id: "documents", label: "Documents", size: "sm", tone: "slate", key: "leave" },
  { id: "automation", label: "Automation rules", size: "sm", tone: "slate", key: "grace" },
  { id: "break_tracking", label: "Break tracking", size: "sm", tone: "slate", key: "grace" },
  { id: "form16", label: "Form 16", size: "sm", tone: "slate", key: "pf" },
  { id: "muster_roll", label: "Muster roll", size: "sm", tone: "slate", key: "reports" },
  { id: "wage_register", label: "Wage register", size: "sm", tone: "slate", key: "reports" },
  { id: "pt", label: "Professional tax", size: "sm", tone: "slate", key: "pf" },
  { id: "it_declarations", label: "IT declarations", size: "sm", tone: "slate", key: "pf" },
  { id: "half_day", label: "Early exit rules", size: "sm", tone: "slate", key: "grace" },
  { id: "online_pay", label: "Bank disbursement files", size: "sm", tone: "slate", key: "advance" },
  { id: "gps_att", label: "GPS mobile punch", size: "sm", tone: "slate", key: "geofence" },
  { id: "broadcast", label: "Broadcast messages", size: "sm", tone: "slate", key: "leave" },
  { id: "employment_letters", label: "Employment letters", size: "sm", tone: "slate", key: "reports" },
  { id: "daily_report", label: "Daily attendance report", size: "sm", tone: "slate", key: "reports" },
  { id: "statutory_comp", label: "Statutory compliance", size: "sm", tone: "slate", key: "pf" },
  { id: "bonus", label: "Bonus & adjustments", size: "sm", tone: "slate", key: "advance" },
  { id: "works_offline", label: "Works offline", size: "sm", tone: "slate", key: "face" },
  { id: "fnf", label: "Full & final settlement", size: "sm", tone: "slate", key: "advance" },
  { id: "task_assign", label: "Task assignment", size: "xs", tone: "slate", key: "geofence" },
  { id: "shifts", label: "Rotating shift rosters", size: "sm", tone: "slate", key: "grace" },
  { id: "holiday_policy", label: "Holiday calendar", size: "xs", tone: "slate", key: "leave" },
  { id: "gratuity", label: "Gratuity calculations", size: "xs", tone: "slate", key: "pf" },
  { id: "roles", label: "Roles & permissions", size: "xs", tone: "slate", key: "reports" },
];

export default function StaffNeedsWordCloud() {
  const [searchQuery, setSearchQuery] = useState<string>("face attendance");
  const [activeKey, setActiveKey] = useState<string>("face");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const handleSelectKey = (key: string, termName?: string) => {
    setActiveKey(key);
    if (termName) {
      setSearchQuery(termName);
    }
  };

  const activeFeature = FEATURE_DATA[activeKey] || FEATURE_DATA["face"];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#F8FCFB] to-white py-14 sm:py-20 border-b border-slate-100">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[700px] rounded-full bg-teal-100/35 blur-[120px]" />
        <div className="h-[300px] w-[500px] rounded-full bg-blue-100/30 blur-[100px] translate-x-32 -translate-y-12" />
        <div className="h-[280px] w-[450px] rounded-full bg-amber-100/25 blur-[100px] -translate-x-32 translate-y-20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0E9486] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
            PayroleHR Connected System
          </span>

          <h2 className="mt-3.5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Think of anything you do for your staff.
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 font-medium">
            Whatever you need, it&apos;s already built into{" "}
            <span className="font-semibold text-[#0E9486]">PayroleHR</span>.
          </p>
        </div>

        {/* Search Bar & Preset Filter Chips */}
        <div className="mt-7 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4.5 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const val = e.target.value;
                setSearchQuery(val);
                const lower = val.toLowerCase().trim();
                if (lower.includes("face") || lower.includes("biometric") || lower.includes("kiosk")) {
                  setActiveKey("face");
                } else if (lower.includes("advance") || lower.includes("salary") || lower.includes("gross") || lower.includes("pay")) {
                  setActiveKey("advance");
                } else if (lower.includes("report") || lower.includes("muster") || lower.includes("register") || lower.includes("form t")) {
                  setActiveKey("reports");
                } else if (lower.includes("grace") || lower.includes("late") || lower.includes("entry") || lower.includes("shift")) {
                  setActiveKey("grace");
                } else if (lower.includes("leave") || lower.includes("holiday") || lower.includes("comp")) {
                  setActiveKey("leave");
                } else if (lower.includes("geo") || lower.includes("gps") || lower.includes("location") || lower.includes("field")) {
                  setActiveKey("geofence");
                } else if (lower.includes("pf") || lower.includes("esi") || lower.includes("tax") || lower.includes("statutory")) {
                  setActiveKey("pf");
                }
              }}
              placeholder="Search: face attendance, salary advance, grace period, PF..."
              className="w-full rounded-full border border-slate-300/80 bg-white py-3.5 pl-12 pr-12 text-sm sm:text-base text-slate-950 placeholder:text-slate-400 focus:border-[#12B5A5] focus:outline-none focus:ring-4 focus:ring-teal-100 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                }}
                className="absolute right-4 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Pill Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mr-1 hidden sm:inline">
              Explore:
            </span>
            {Object.keys(FEATURE_DATA).map((key) => {
              const item = FEATURE_DATA[key];
              const isSelected = activeKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSelectKey(key, item.name)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/20 scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* RESPONSIVE HERO SHOWCASE: LIVE PREVIEW CARD (Visible First!) */}
        {/* ============================================================ */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-slate-100 ring-1 ring-slate-900/5 transition-all">
            {/* Top Indicator */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 border border-teal-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0E9486]">
                  ⚡ LIVE PAYROLEHR ENGINE
                </span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  {activeFeature.category}
                </span>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                  activeFeature.tone === "amber"
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : activeFeature.tone === "purple"
                    ? "bg-purple-50 text-purple-800 border border-purple-200"
                    : activeFeature.tone === "blue"
                    ? "bg-blue-50 text-blue-800 border border-blue-200"
                    : activeFeature.tone === "emerald"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-teal-50 text-teal-800 border border-teal-200"
                }`}
              >
                {activeFeature.tag}
              </span>
            </div>

            {/* Feature Title */}
            <div className="mt-3.5">
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-950">
                {activeFeature.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                {activeFeature.subheading}
              </p>
            </div>

            {/* Real Metrics & Numerical Rule Breakdown */}
            <div className="my-4 rounded-2xl bg-slate-50/80 p-3.5 sm:p-4 border border-slate-100 space-y-2">
              {activeFeature.metrics.map((m, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-600 font-medium">{m.label}</span>
                  <span className={`tabular-nums ${m.color || "text-slate-900 font-semibold"}`}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Description & Direct Feature Link */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {activeFeature.description}
              </p>
              <Link
                href={activeFeature.pageLink}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E9486] hover:text-[#0b756a] transition shrink-0 self-end sm:self-auto bg-teal-50/70 hover:bg-teal-100/70 px-3.5 py-1.5 rounded-full border border-teal-200/60"
              >
                <span>{activeFeature.pageText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE WORKFORCE WORD CLOUD (Click to switch preview) */}
        {/* ============================================================ */}
        <div className="mt-8 rounded-3xl bg-white/70 p-5 sm:p-8 border border-slate-200/60 shadow-inner">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/50">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Workforce Capability Cloud
            </span>
            <span className="text-[11px] text-[#0E9486] font-medium hidden sm:inline">
              💡 Click any term below to inspect live PayroleHR automation
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 gap-y-2.5 sm:gap-y-3.5 text-center select-none">
            {CLOUD_WORDS.map((item) => {
              const isSelected = activeKey === item.key;
              const matchesSearch = normalizedQuery && item.label.toLowerCase().includes(normalizedQuery);

              let sizeClass = "text-xs font-normal text-slate-600 hover:text-slate-950";
              if (item.size === "xl") {
                sizeClass = "text-xl sm:text-2xl font-black text-slate-950 tracking-tight";
              } else if (item.size === "lg") {
                if (item.tone === "teal") {
                  sizeClass = "text-lg sm:text-xl font-extrabold text-[#0E9486] tracking-tight";
                } else if (item.tone === "amber") {
                  sizeClass = "text-lg sm:text-xl font-extrabold text-[#D97706] tracking-tight";
                } else if (item.tone === "purple") {
                  sizeClass = "text-lg sm:text-xl font-extrabold text-[#7C3AED] tracking-tight";
                } else {
                  sizeClass = "text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight";
                }
              } else if (item.size === "md") {
                if (item.tone === "blue") {
                  sizeClass = "text-xs sm:text-sm font-bold text-blue-700";
                } else if (item.tone === "emerald") {
                  sizeClass = "text-xs sm:text-sm font-bold text-emerald-700";
                } else {
                  sizeClass = "text-xs sm:text-sm font-bold text-slate-800";
                }
              } else if (item.size === "sm") {
                sizeClass = "text-xs sm:text-[13px] font-medium text-slate-700 hover:text-slate-950";
              }

              let highlightClass = "";
              if (matchesSearch) {
                highlightClass = "rounded-full border-2 border-teal-500 bg-teal-50 px-3 py-0.5 text-teal-900 font-bold shadow-xs scale-105";
              } else if (isSelected) {
                highlightClass = "rounded-full border border-slate-300 bg-slate-100/90 px-3 py-0.5 shadow-2xs font-semibold";
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectKey(item.key, item.label)}
                  className={`inline-block transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none ${sizeClass} ${highlightClass}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 text-center text-xs text-slate-500 font-medium sm:hidden">
            💡 Tap any policy or payroll term above to see it run live
          </div>
        </div>

      </div>
    </section>
  );
}
