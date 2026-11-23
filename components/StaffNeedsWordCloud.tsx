"use client";

import React, { useState, useMemo } from "react";
import { Search, X, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface WordItem {
  id: string;
  label: string;
  size: "xl" | "lg" | "md" | "sm" | "xs";
  tone?: "teal" | "amber" | "slate" | "blue";
  keywords: string[];
  cardKey?: string;
  scatterCol?: number;
  scatterRow?: number;
}

interface PreviewCardData {
  title: string;
  badge: string;
  badgeTone: "teal" | "amber" | "blue" | "emerald";
  stats: { label: string; value: string; color?: string }[];
  description: string;
  footerTag: string;
}

const PREVIEW_CARDS: Record<string, PreviewCardData> = {
  advance: {
    title: "Salary Advance & Auto Recovery",
    badge: "1-Click Advance",
    badgeTone: "amber",
    stats: [
      { label: "Gross", value: "₹20,719", color: "text-slate-900" },
      { label: "Deductions", value: "-₹3,305", color: "text-rose-600" },
      { label: "Take home", value: "₹17,414", color: "text-emerald-700 font-bold" },
    ],
    description: "Attendance, overtime, advance recovery and statutory in one pass.",
    footerTag: "Auto-recovers from month-end salary payout",
  },
  payroll: {
    title: "Automated Payroll Engine",
    badge: "100% Error-Free",
    badgeTone: "teal",
    stats: [
      { label: "Gross Payable", value: "₹28,500", color: "text-slate-900" },
      { label: "PF + ESIC + PT", value: "-₹2,720", color: "text-rose-600" },
      { label: "Net Payout", value: "₹25,780", color: "text-teal-700 font-bold" },
    ],
    description: "Multi-branch payroll calculated in 30 seconds with 1-click bank NEFT files.",
    footerTag: "Direct payout file for 50+ Indian banks",
  },
  grace: {
    title: "Grace Period & Late Entry Rules",
    badge: "Shift Policy",
    badgeTone: "blue",
    stats: [
      { label: "Grace Window", value: "15 Mins", color: "text-blue-700 font-bold" },
      { label: "Tolerance", value: "3 Strikes / Month", color: "text-slate-900" },
      { label: "Penalty", value: "0.5 Day Leave Deduction", color: "text-amber-700" },
    ],
    description: "Configurable grace periods per shift with automated notifications to managers.",
    footerTag: "Runs automatically on biometric & mobile punches",
  },
  face: {
    title: "AI Face Recognition Attendance",
    badge: "Touchless & 0.18s",
    badgeTone: "teal",
    stats: [
      { label: "Match Speed", value: "0.18s Instant", color: "text-teal-700 font-bold" },
      { label: "Anti-Spoofing", value: "3D IR Liveness", color: "text-emerald-700" },
      { label: "Offline Buffer", value: "100,000 Punches", color: "text-slate-900" },
    ],
    description: "Works on standard Android tablets & phones. No costly biometric maintenance.",
    footerTag: "Syncs directly into month-end attendance register",
  },
  leave: {
    title: "Leave Policy & Comp-Off Tracking",
    badge: "Paperless Requests",
    badgeTone: "blue",
    stats: [
      { label: "Accrual Rules", value: "1.75 Days / Month", color: "text-slate-900" },
      { label: "Comp-off Grant", value: "Auto on Sunday Shifts", color: "text-blue-700 font-bold" },
      { label: "Approval Flow", value: "WhatsApp & Mobile App", color: "text-emerald-700" },
    ],
    description: "Multi-level leave approval hierarchies with live balance ledger for employees.",
    footerTag: "Auto-encashment on year-end payroll cycle",
  },
  geofence: {
    title: "GPS Geofencing & Field Tracking",
    badge: "Anti-Spoof GPS",
    badgeTone: "emerald",
    stats: [
      { label: "Geofence Radius", value: "100m Precision", color: "text-emerald-700 font-bold" },
      { label: "Mock GPS Check", value: "100% Blocked", color: "text-slate-900" },
      { label: "Location Proof", value: "Selfie + Map Coordinates", color: "text-slate-900" },
    ],
    description: "Field staff check-in with tamper-proof location verification and live battery logs.",
    footerTag: "Ideal for sales, service engineers & site staff",
  },
  pf: {
    title: "PF, ESI & Statutory Compliance",
    badge: "100% Indian Labour Law",
    badgeTone: "teal",
    stats: [
      { label: "EPFO ECR File", value: "1-Click Download", color: "text-teal-700 font-bold" },
      { label: "ESIC Monthly Return", value: "Automated", color: "text-slate-900" },
      { label: "PT & LWF", value: "28 States Pre-configured", color: "text-slate-900" },
    ],
    description: "Never pay a statutory penalty or spend hours compiling excel sheets again.",
    footerTag: "Includes Form 16, Form 5, Form 10 & 24Q prep",
  },
  payslip: {
    title: "Customised Digital Payslips",
    badge: "Instant Delivery",
    badgeTone: "teal",
    stats: [
      { label: "Channel", value: "WhatsApp + Email PDF", color: "text-teal-700 font-bold" },
      { label: "Branding", value: "Company Logo & Signature", color: "text-slate-900" },
      { label: "Security", value: "Password Protected (PAN)", color: "text-slate-900" },
    ],
    description: "Employees view and download payslips directly from their smartphone app.",
    footerTag: "Over 50+ customizable payslip design templates",
  },
  compoff: {
    title: "Compensatory Off (Comp-off) Management",
    badge: "Shift Rules",
    badgeTone: "amber",
    stats: [
      { label: "Accrual Trigger", value: "Holiday / Rest Day Work", color: "text-amber-700 font-bold" },
      { label: "Validity", value: "60 Days Auto-Expiry", color: "text-slate-900" },
      { label: "Overtime Option", value: "1.5x / 2x Wage Conversion", color: "text-slate-900" },
    ],
    description: "Convert holiday shift punches into compensatory leaves or double-wage payout.",
    footerTag: "Synced with roster and shift calendars",
  },
  reimburse: {
    title: "Employee Expense & Reimbursements",
    badge: "Paperless Claims",
    badgeTone: "blue",
    stats: [
      { label: "Bill Upload", value: "Mobile Camera OCR", color: "text-blue-700 font-bold" },
      { label: "Approval Flow", value: "Manager -> Accounts", color: "text-slate-900" },
      { label: "Payout", value: "Added to Monthly Salary", color: "text-emerald-700" },
    ],
    description: "Travel, food, internet and medical expense claims approved with receipts.",
    footerTag: "Direct tax-exempt component calculation",
  },
};

const WORD_CLOUD_ITEMS: WordItem[] = [
  // Primary Large Pillars
  { id: "payroll", label: "Payroll processing", size: "xl", tone: "slate", keywords: ["payroll", "salary", "wages", "calculation", "payout"], cardKey: "payroll" },
  { id: "face", label: "Face attendance", size: "lg", tone: "teal", keywords: ["face", "facial", "biometric", "kiosk", "scanner", "camera"], cardKey: "face" },
  { id: "advance", label: "Salary advances", size: "lg", tone: "amber", keywords: ["salary advance", "advance", "loan", "borrow", "deduction"], cardKey: "advance" },
  { id: "leave", label: "Leave policies", size: "lg", tone: "slate", keywords: ["leave", "holiday", "casual leave", "sick leave", "paid leave"], cardKey: "leave" },
  { id: "late", label: "Late entry rules", size: "md", tone: "blue", keywords: ["grace period", "grace", "late", "late entry", "half day", "penalty"], cardKey: "grace" },
  
  // Secondary Features
  { id: "payslips", label: "Customised payslips", size: "md", tone: "slate", keywords: ["payslip", "payslips", "salary slip", "pdf", "whatsapp"], cardKey: "payslip" },
  { id: "geofence", label: "Geofencing", size: "md", tone: "slate", keywords: ["geofence", "geofencing", "gps", "field", "location", "radius"], cardKey: "geofence" },
  { id: "reimburse", label: "Reimbursements", size: "md", tone: "slate", keywords: ["reimbursement", "expense", "bill", "claim", "fuel"], cardKey: "reimburse" },
  { id: "automation", label: "Automation rules", size: "md", tone: "slate", keywords: ["automation", "rules", "triggers", "workflows"] },
  { id: "break", label: "Break tracking", size: "md", tone: "slate", keywords: ["break", "lunch", "tea break", "rest period"] },
  { id: "compoff", label: "Comp off", size: "md", tone: "slate", keywords: ["comp off", "compensatory", "sunday work", "holiday work"], cardKey: "compoff" },
  { id: "form16", label: "Form 16", size: "sm", tone: "slate", keywords: ["form 16", "tax", "tds", "income tax"], cardKey: "pf" },
  { id: "pf", label: "PF", size: "md", tone: "slate", keywords: ["pf", "provident fund", "epfo", "ecr"], cardKey: "pf" },
  { id: "esi", label: "ESI", size: "md", tone: "slate", keywords: ["esi", "esic", "insurance", "medical"], cardKey: "pf" },

  // Mid & Minor Tags matching the design
  { id: "custom_salary", label: "Custom salary components", size: "sm", tone: "slate", keywords: ["allowance", "basic", "hra", "da", "conveyance", "special allowance"] },
  { id: "bulk_work", label: "Bulk add work", size: "sm", tone: "slate", keywords: ["bulk", "import", "excel", "csv", "batch"] },
  { id: "biometric", label: "Biometric device", size: "sm", tone: "slate", keywords: ["biometric", "fingerprint", "hardware", "terminal", "machine"] },
  { id: "documents", label: "Documents", size: "sm", tone: "slate", keywords: ["document", "aadhaar", "pan", "kyc", "contracts"] },
  { id: "pt", label: "Professional tax", size: "sm", tone: "slate", keywords: ["professional tax", "pt", "state tax"], cardKey: "pf" },
  { id: "task_reports", label: "Task reports", size: "xs", tone: "slate", keywords: ["task", "reports", "productivity"] },
  { id: "dashboards", label: "Customised dashboards", size: "sm", tone: "slate", keywords: ["dashboard", "analytics", "charts", "metrics"] },
  { id: "sessions", label: "Active sessions", size: "xs", tone: "slate", keywords: ["session", "devices", "security", "login"] },
  { id: "payment_logs", label: "Payment logs", size: "xs", tone: "slate", keywords: ["payment logs", "bank", "audit", "history"] },
  { id: "weekly_ot", label: "Weekly off overtime", size: "xs", tone: "slate", keywords: ["weekly off", "overtime", "ot", "double rate"] },
  { id: "scorecard", label: "Scorecard", size: "sm", tone: "slate", keywords: ["scorecard", "performance", "kpi", "rating"] },
  { id: "gps_att", label: "GPS attendance", size: "sm", tone: "slate", keywords: ["gps", "mobile punch", "selfie", "location"], cardKey: "geofence" },
  { id: "weekly_offs", label: "Weekly offs", size: "xs", tone: "slate", keywords: ["weekly off", "weekend", "roster"] },
  { id: "celebrations", label: "Celebrations", size: "xs", tone: "slate", keywords: ["birthday", "work anniversary", "celebration"] },
  { id: "payroll_overview", label: "Payroll overview", size: "xs", tone: "slate", keywords: ["overview", "summary", "ctc"] },
  { id: "early_exit", label: "Early exit rules", size: "sm", tone: "slate", keywords: ["early exit", "half day", "permission", "gate pass"], cardKey: "grace" },
  { id: "it_declarations", label: "IT declarations", size: "sm", tone: "slate", keywords: ["it declaration", "investment proof", "80c", "regime"], cardKey: "pf" },
  { id: "live_location", label: "Live location", size: "xs", tone: "slate", keywords: ["live location", "tracking", "field team"], cardKey: "geofence" },
  { id: "gratuity", label: "Gratuity", size: "xs", tone: "slate", keywords: ["gratuity", "severance", "retirement"] },
  { id: "ot_alerts", label: "Overtime alerts", size: "xs", tone: "slate", keywords: ["overtime", "ot alerts", "approval"] },
  { id: "proof_invest", label: "Proof of investment", size: "xs", tone: "slate", keywords: ["investment", "tax proof", "receipts"] },
  { id: "wage_reg", label: "Wage register", size: "xs", tone: "slate", keywords: ["wage register", "muster roll", "form t"] },
  { id: "broadcast", label: "Broadcast messages", size: "sm", tone: "slate", keywords: ["broadcast", "notice", "announcement", "sms", "whatsapp"] },
  { id: "employment_letters", label: "Employment letters", size: "sm", tone: "slate", keywords: ["offer letter", "appointment letter", "experience letter", "relieving"] },
  { id: "daily_report", label: "Daily report", size: "sm", tone: "slate", keywords: ["daily report", "morning attendance", "absenteeism report"] },
  { id: "perf_cycles", label: "Performance cycles", size: "xs", tone: "slate", keywords: ["appraisal", "increment", "review"] },
  { id: "task_verify", label: "Task verification", size: "xs", tone: "slate", keywords: ["task", "checklist", "store audit"] },
  { id: "roles", label: "Roles and permissions", size: "xs", tone: "slate", keywords: ["roles", "rbac", "admin", "hr manager", "supervisor"] },
  { id: "min_wages", label: "Minimum wages", size: "xs", tone: "slate", keywords: ["minimum wages", "labour law", "skilled", "unskilled"] },
  { id: "statutory_comp", label: "Statutory compliance", size: "sm", tone: "slate", keywords: ["compliance", "audit", "challan", "statutory"], cardKey: "pf" },
  { id: "lwf", label: "Labour welfare fund", size: "xs", tone: "slate", keywords: ["lwf", "welfare", "deduction"] },
  { id: "salary_templates", label: "Salary templates", size: "xs", tone: "slate", keywords: ["template", "structure", "ctc calculator"] },
  { id: "task_assign", label: "Task assignment", size: "xs", tone: "slate", keywords: ["tasks", "delegation", "work order"] },
  { id: "online_pay", label: "Online payment", size: "xs", tone: "slate", keywords: ["upi", "neft", "imps", "bank direct"] },
  { id: "on_duty", label: "On duty", size: "xs", tone: "slate", keywords: ["on duty", "od", "client visit", "tour"] },
  { id: "holiday_policy", label: "Holiday policy", size: "xs", tone: "slate", keywords: ["gazetted holiday", "optional holiday", "festival"] },
  { id: "tds_challan", label: "TDS challan and filing", size: "xs", tone: "slate", keywords: ["tds", "challan", "24q", "tax deduction"] },
  { id: "staff_records", label: "Staff records", size: "xs", tone: "slate", keywords: ["staff records", "employee directory", "onboarding"] },
];

const POPULAR_SUGGESTIONS = [
  { label: "Salary advance", query: "salary advance", cardKey: "advance" },
  { label: "Grace period", query: "grace period", cardKey: "grace" },
  { label: "Face attendance", query: "face attendance", cardKey: "face" },
  { label: "Leave policies", query: "leave policies", cardKey: "leave" },
  { label: "PF & ESI", query: "pf", cardKey: "pf" },
  { label: "Geofencing", query: "geofencing", cardKey: "geofence" },
];

export default function StaffNeedsWordCloud() {
  const [searchQuery, setSearchQuery] = useState<string>("salary advance");
  const [activeCardKey, setActiveCardKey] = useState<string>("advance");
  const [activeWordId, setActiveWordId] = useState<string>("advance");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const isMatched = (item: WordItem): boolean => {
    if (!normalizedQuery) return false;
    if (item.label.toLowerCase().includes(normalizedQuery)) return true;
    return item.keywords.some((k) => k.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(k.toLowerCase()));
  };

  const handleSelectSuggestion = (query: string, cardKey: string) => {
    setSearchQuery(query);
    setActiveCardKey(cardKey);
    const matchedItem = WORD_CLOUD_ITEMS.find((item) => item.cardKey === cardKey);
    if (matchedItem) setActiveWordId(matchedItem.id);
  };

  const handleWordClick = (item: WordItem) => {
    setActiveWordId(item.id);
    if (item.cardKey) {
      setActiveCardKey(item.cardKey);
    }
    setSearchQuery(item.label.toLowerCase());
  };

  const activeCardData = useMemo(() => {
    return PREVIEW_CARDS[activeCardKey] || PREVIEW_CARDS["advance"];
  }, [activeCardKey]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#F8FCFB] to-white py-16 sm:py-24 border-b border-slate-100">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[450px] w-[650px] rounded-full bg-teal-100/40 blur-[120px]" />
        <div className="h-[350px] w-[500px] rounded-full bg-amber-100/30 blur-[100px] -translate-y-20 translate-x-32" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0E9486] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
            Complete Workforce Flexibility
          </span>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Think of anything you do for your staff.
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 font-medium">
            Whatever you need, it&apos;s already here in{" "}
            <span className="font-semibold text-slate-900">PayroleHR</span>.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4.5 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const val = e.target.value;
                setSearchQuery(val);
                const lower = val.toLowerCase().trim();
                const matched = WORD_CLOUD_ITEMS.find(
                  (item) => item.cardKey && (item.label.toLowerCase().includes(lower) || item.keywords.some((k) => k.includes(lower)))
                );
                if (matched && matched.cardKey) {
                  setActiveCardKey(matched.cardKey);
                  setActiveWordId(matched.id);
                }
              }}
              placeholder="Search any policy, rule or payroll term (e.g. grace period, salary advance)..."
              className="w-full rounded-full border border-slate-300/80 bg-white py-3.5 pl-12 pr-12 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:border-[#12B5A5] focus:outline-none focus:ring-4 focus:ring-teal-100 shadow-sm transition-all"
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

          {/* Quick Filter Suggestion Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mr-1 hidden sm:inline">
              Try:
            </span>
            {POPULAR_SUGGESTIONS.map((sug) => {
              const active = searchQuery.toLowerCase() === sug.query;
              return (
                <button
                  key={sug.query}
                  type="button"
                  onClick={() => handleSelectSuggestion(sug.query, sug.cardKey)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer ${
                    active
                      ? "bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20"
                      : "bg-white/80 text-slate-600 border border-slate-200 hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50/50"
                  }`}
                >
                  {sug.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Word Cloud + Live Interactive Preview Card Layout */}
        <div className="relative mt-10 min-h-[480px] sm:min-h-[520px] rounded-3xl bg-white/40 p-4 sm:p-8 backdrop-blur-xs border border-slate-200/50 shadow-inner">
          {/* Tag Cloud Canvas */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-7 gap-y-3 sm:gap-y-4 text-center max-w-5xl mx-auto select-none">
            {WORD_CLOUD_ITEMS.map((item) => {
              const matches = isMatched(item);
              const isSelected = activeWordId === item.id;
              const hasCustomCard = Boolean(item.cardKey);

              let fontClasses = "text-xs font-normal text-slate-500 hover:text-slate-900";
              if (item.size === "xl") {
                fontClasses = "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950";
              } else if (item.size === "lg") {
                if (item.tone === "teal") {
                  fontClasses = "text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#12B5A5] tracking-tight";
                } else if (item.tone === "amber") {
                  fontClasses = "text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#D97706] tracking-tight";
                } else {
                  fontClasses = "text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight";
                }
              } else if (item.size === "md") {
                if (item.tone === "blue") {
                  fontClasses = "text-sm sm:text-base font-semibold text-blue-700";
                } else {
                  fontClasses = "text-sm sm:text-base font-semibold text-slate-800";
                }
              } else if (item.size === "sm") {
                fontClasses = "text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900";
              }

              let highlightStyle = "";
              if (matches) {
                highlightStyle = "rounded-full border-2 border-teal-500 bg-teal-50/90 px-3.5 py-1 text-teal-900 font-bold shadow-md scale-105 transition-all ring-4 ring-teal-100/70";
              } else if (isSelected) {
                highlightStyle = "rounded-full border border-teal-300 bg-teal-50/60 px-3 py-0.5 text-teal-800 font-semibold shadow-xs";
              } else if (normalizedQuery && !matches) {
                highlightStyle = "opacity-40 hover:opacity-100 transition-opacity";
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleWordClick(item)}
                  className={`inline-block transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none ${fontClasses} ${highlightStyle}`}
                  title={hasCustomCard ? `Click to inspect ${item.label} calculations` : item.label}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Interactive Live Calculation / Rule Preview Card */}
          <div className="mt-10 max-w-md mx-auto transform transition-all duration-300 animate-in fade-in zoom-in-95">
            <div className="relative rounded-2xl bg-white p-5 sm:p-6 shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
              {/* Subtle top indicator bar */}
              <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-0.5 text-[10px] font-bold tracking-wider text-white shadow-sm">
                <span>⚡ LIVE PAYROLEHR PREVIEW</span>
              </div>

              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950">
                    {activeCardData.title}
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Integrated directly with attendance punches & mobile app
                  </span>
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                    activeCardData.badgeTone === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : activeCardData.badgeTone === "teal"
                      ? "bg-teal-100 text-teal-800"
                      : activeCardData.badgeTone === "blue"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {activeCardData.badge}
                </span>
              </div>

              {/* Key Numerical Stats Table */}
              <div className="py-3.5 space-y-2">
                {activeCardData.stats.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs sm:text-sm font-medium"
                  >
                    <span className="text-slate-600">{row.label}</span>
                    <span className={`font-semibold tabular-nums ${row.color || "text-slate-900"}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider & Explanation Text */}
              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {activeCardData.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#0E9486]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#12B5A5]" />
                    {activeCardData.footerTag}
                  </span>
                  <a
                    href="/book-a-demo"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#12B5A5] hover:text-[#0E9486] transition"
                  >
                    <span>See Demo</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom helper footnote */}
          <div className="mt-8 text-center text-xs text-slate-600 font-medium flex items-center justify-center gap-2">
            <span>💡 Tap or search any workforce policy or payroll term to preview live calculations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
