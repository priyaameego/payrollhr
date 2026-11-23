"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  IndianRupee,
  ScanFace,
  FileSpreadsheet,
} from "lucide-react";

interface WordItem {
  id: string;
  label: string;
  size: "xl" | "lg" | "md" | "sm" | "xs";
  tone?: "teal" | "amber" | "purple" | "blue" | "slate";
  isPill?: boolean;
  tooltip: string;
  cardKey?: string;
  keywords: string[];
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
      { label: "Gross", value: "₹20,719", color: "text-slate-950 font-bold" },
      { label: "Deductions", value: "-₹3,305", color: "text-rose-600 font-bold" },
      { label: "Take home", value: "₹17,414", color: "text-emerald-700 font-extrabold" },
    ],
    description: "Attendance, overtime, advance recovery and statutory in one pass.",
    footerTag: "Auto-recovers from month-end salary payout",
  },
  payroll: {
    title: "Automated Payroll Engine",
    badge: "100% Error-Free",
    badgeTone: "teal",
    stats: [
      { label: "Gross Payable", value: "₹28,500", color: "text-slate-950 font-bold" },
      { label: "PF + ESIC + PT", value: "-₹2,720", color: "text-rose-600 font-bold" },
      { label: "Net Payout", value: "₹25,780", color: "text-[#0E9486] font-extrabold" },
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
      { label: "Tolerance", value: "3 Strikes / Month", color: "text-slate-950 font-bold" },
      { label: "Penalty", value: "0.5 Day Leave Deduction", color: "text-amber-700 font-bold" },
    ],
    description: "Configurable grace periods per shift with automated notifications to managers.",
    footerTag: "Runs automatically on biometric & mobile punches",
  },
  face: {
    title: "AI Face Recognition Attendance",
    badge: "Touchless & 0.18s",
    badgeTone: "teal",
    stats: [
      { label: "Match Speed", value: "0.18s Instant", color: "text-[#0E9486] font-bold" },
      { label: "Anti-Spoofing", value: "3D IR Liveness Verified", color: "text-emerald-700 font-bold" },
      { label: "Offline Buffer", value: "100,000 Punches", color: "text-slate-950 font-bold" },
    ],
    description: "Works on standard Android tablets & phones. No costly biometric machine maintenance.",
    footerTag: "Syncs directly into month-end attendance register",
  },
  leave: {
    title: "Leave Policy & Comp-Off Tracking",
    badge: "Paperless Requests",
    badgeTone: "blue",
    stats: [
      { label: "Accrual Rules", value: "1.75 Days / Month", color: "text-slate-950 font-bold" },
      { label: "Comp-off Grant", value: "Auto on Sunday Shifts", color: "text-blue-700 font-bold" },
      { label: "Approval Flow", value: "WhatsApp & Mobile App", color: "text-emerald-700 font-bold" },
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
      { label: "Mock GPS Check", value: "100% Blocked", color: "text-slate-950 font-bold" },
      { label: "Location Proof", value: "Selfie + Map Coordinates", color: "text-slate-950 font-bold" },
    ],
    description: "Field staff check-in with tamper-proof location verification and live battery logs.",
    footerTag: "Ideal for sales, service engineers & site staff",
  },
  pf: {
    title: "PF, ESI & Statutory Compliance",
    badge: "100% Indian Labour Law",
    badgeTone: "teal",
    stats: [
      { label: "EPFO ECR File", value: "1-Click Download", color: "text-[#0E9486] font-bold" },
      { label: "ESIC Monthly Return", value: "Form 5 Automated", color: "text-slate-950 font-bold" },
      { label: "PT & LWF", value: "28 States Pre-configured", color: "text-slate-950 font-bold" },
    ],
    description: "Never pay a statutory penalty or spend hours compiling excel sheets again.",
    footerTag: "Includes Form 16, Form 5, Form 10 & 24Q prep",
  },
  reports: {
    title: "Monthly Wage Register & Muster Roll",
    badge: "Form T Compliant",
    badgeTone: "teal",
    stats: [
      { label: "Export Formats", value: "Excel, PDF, CSV", color: "text-[#0E9486] font-bold" },
      { label: "Bank NEFT Batches", value: "50+ Bank Formats", color: "text-slate-950 font-bold" },
      { label: "Audit Readiness", value: "100% Inspection Proof", color: "text-emerald-700 font-bold" },
    ],
    description: "Generate compliant wage registers, muster rolls, overtime summaries and bank files in 1 click.",
    footerTag: "Ready for state labor department inspections",
  },
};

const WORDS_DATA: WordItem[] = [
  // Top Row
  { id: "custom_salary", label: "Custom salary components", size: "sm", tone: "slate", tooltip: "Configure Basic, HRA, DA, Conveyance and customized allowance formulas.", cardKey: "advance", keywords: ["salary", "allowance", "basic", "hra"] },
  { id: "reimburse", label: "Reimbursements", size: "md", tone: "slate", tooltip: "Paperless employee expense claims with bill camera upload and approvals.", cardKey: "advance", keywords: ["reimbursement", "claims", "expense", "bills"] },
  { id: "bulk_work", label: "Bulk add work", size: "sm", tone: "slate", tooltip: "Bulk import attendance punches, overtime and salary adjustments via Excel.", cardKey: "payroll", keywords: ["bulk", "import", "excel"] },
  { id: "task_verify", label: "Task verification", size: "xs", tone: "slate", tooltip: "Geo-tagged photo verification for store opening, safety audits and daily checklists.", cardKey: "geofence", keywords: ["task", "checklist"] },
  { id: "perf_cycles", label: "Performance cycles", size: "xs", tone: "slate", tooltip: "Structured appraisal periods with automated self and manager ratings.", cardKey: "payroll", keywords: ["performance", "kpi"] },
  { id: "roles", label: "Roles and permissions", size: "xs", tone: "slate", tooltip: "Role-based access control for HR Admins, Branch Managers and Accountants.", cardKey: "payroll", keywords: ["roles", "rbac"] },
  { id: "employment_letters", label: "Employment letters", size: "sm", tone: "slate", tooltip: "1-click generation of appointment letters, experience certificates and offer letters.", cardKey: "payroll", keywords: ["offer", "appointment", "letter"] },
  { id: "daily_report", label: "Daily report", size: "sm", tone: "slate", tooltip: "Morning 10:00 AM management summary of presents, absents and late marks.", cardKey: "payroll", keywords: ["daily", "morning", "report"] },
  { id: "min_wages", label: "Minimum wages", size: "xs", tone: "slate", tooltip: "Automated compliance checks matching current State Minimum Wages notifications.", cardKey: "pf", keywords: ["minimum", "wages", "labour"] },
  { id: "automation", label: "Automation rules", size: "sm", tone: "slate", tooltip: "Set automated triggers for grace periods, comp-off accruals and shift rotations.", cardKey: "grace", keywords: ["automation", "rules"] },

  // Upper Mid Row
  { id: "biometric", label: "Biometric device", size: "sm", tone: "slate", tooltip: "Seamlessly connects with physical biometric hardware or runs on any Android tablet.", cardKey: "face", keywords: ["biometric", "hardware", "terminal"] },
  { id: "documents", label: "Documents", size: "sm", tone: "slate", tooltip: "Secure employee digital vault for Aadhaar, PAN, bank proofs and certificates.", cardKey: "payroll", keywords: ["kyc", "documents", "aadhaar"] },
  { id: "job_postings", label: "Job postings", size: "xs", tone: "slate", tooltip: "Publish job vacancies and track applicant status from requisition to onboarding.", cardKey: "payroll", keywords: ["jobs", "recruitment"] },
  { id: "pt", label: "Professional tax", size: "sm", tone: "slate", tooltip: "Pre-configured State-wise PT deduction slabs across all 28 Indian States.", cardKey: "pf", keywords: ["pt", "professional tax"] },
  { id: "task_reports", label: "Task reports", size: "xs", tone: "slate", tooltip: "Real-time task completion tracking for retail, field and warehouse personnel.", cardKey: "geofence", keywords: ["task", "productivity"] },
  { id: "dashboards", label: "Customised dashboards", size: "sm", tone: "slate", tooltip: "Live visual metrics on headcount, overtime trends and monthly salary outgo.", cardKey: "payroll", keywords: ["dashboard", "analytics"] },
  { id: "geofence", label: "Geofencing", size: "md", tone: "slate", tooltip: "Restricts mobile clock-in punches strictly within authorized client GPS boundaries.", cardKey: "geofence", keywords: ["geofence", "gps", "field"] },
  { id: "leave", label: "Leave policies", size: "lg", tone: "slate", tooltip: "Automated CL, SL and PL ledger tracking with WhatsApp approval workflows.", cardKey: "leave", keywords: ["leave", "holiday", "casual leave"] },
  { id: "ot_alerts", label: "Overtime alerts", size: "xs", tone: "slate", tooltip: "Instant supervisor notifications when daily or weekly OT thresholds are crossed.", cardKey: "grace", keywords: ["overtime", "ot"] },
  { id: "payslips", label: "Customised payslips", size: "md", tone: "slate", tooltip: "Branded, password-protected payslips delivered via WhatsApp and Employee App.", cardKey: "advance", keywords: ["payslip", "payslips", "salary slip"] },
  { id: "proof_invest", label: "Proof of investment", size: "xs", tone: "slate", tooltip: "Paperless portal for verifying employee rent receipts, 80C and health insurance proofs.", cardKey: "pf", keywords: ["investment", "80c", "tax proof"] },
  { id: "wage_reg", label: "Wage register", size: "xs", tone: "slate", tooltip: "Official Form T compliant wage register exportable in 1 click for government audits.", cardKey: "reports", keywords: ["wage register", "muster roll"] },

  // Center Core Row
  { id: "salary_reg", label: "Salary register", size: "xs", tone: "slate", tooltip: "Monthly salary sheet showing employee-wise earnings, deductions and net pay.", cardKey: "payroll", keywords: ["salary register", "payroll"] },
  { id: "active_sessions", label: "Active sessions", size: "xs", tone: "slate", tooltip: "Monitor active kiosk connections and manage employee mobile session security.", cardKey: "face", keywords: ["session", "security"] },
  { id: "comp_off", label: "Comp off", size: "md", tone: "slate", tooltip: "Compensatory leave auto-accrued when employees work on designated holidays or rest days.", cardKey: "leave", keywords: ["comp off", "compensatory"] },
  { id: "payment_logs", label: "Payment logs", size: "xs", tone: "slate", tooltip: "Transparent row-by-row audit records for every NEFT and IMPS salary transfer.", cardKey: "advance", keywords: ["payment", "bank"] },
  { id: "weekly_ot", label: "Weekly off overtime", size: "xs", tone: "slate", tooltip: "Configurable 1.5x or 2x wage multipliers for staff working on scheduled weekly offs.", cardKey: "grace", keywords: ["weekly off", "overtime"] },
  { id: "payroll", label: "Payroll processing", size: "xl", tone: "slate", tooltip: "Automated gross-to-net calculations incorporating attendance, advances, fines and taxes.", cardKey: "payroll", keywords: ["payroll", "salary", "wages", "calculation"] },
  { id: "pf", label: "PF", size: "md", tone: "slate", tooltip: "Automated 12% employee and employer EPF calculations with 1-click ECR file export.", cardKey: "pf", keywords: ["pf", "provident fund", "epfo"] },
  { id: "scorecard", label: "Scorecard", size: "sm", tone: "slate", tooltip: "Monthly attendance punctuality, shift completion and discipline scorecards.", cardKey: "grace", keywords: ["scorecard", "kpi"] },
  { id: "break_track", label: "Break tracking", size: "md", tone: "slate", tooltip: "Monitors lunch and tea break durations to prevent unrecorded productivity leaks.", cardKey: "grace", keywords: ["break", "lunch"] },
  { id: "late", label: "Late entry rules", size: "md", tone: "blue", isPill: true, tooltip: "Configurable grace period per shift (e.g. 15 mins) with 3 strikes late deduction rule.", cardKey: "grace", keywords: ["grace period", "grace", "late", "penalty"] },
  { id: "live_location", label: "Live location", size: "xs", tone: "slate", tooltip: "Real-time location breadcrumbs for on-duty field representatives during work hours.", cardKey: "geofence", keywords: ["location", "live", "gps"] },
  { id: "it_declarations", label: "IT declarations", size: "sm", tone: "slate", tooltip: "Supports both Old and New Tax Regimes with automated monthly TDS adjustments.", cardKey: "pf", keywords: ["tax", "income tax", "tds"] },
  { id: "early_exit", label: "Early exit rules", size: "sm", tone: "slate", tooltip: "Automated half-day deduction triggers when employees depart before shift completion.", cardKey: "grace", keywords: ["early exit", "gate pass"] },

  // Lower Mid Row (Features Gratuity with exact tooltip like user screenshot!)
  { id: "form16", label: "Form 16", size: "md", tone: "slate", isPill: true, tooltip: "Automated Part A & Part B generation ready for annual income tax filing.", cardKey: "pf", keywords: ["form 16", "tds"] },
  { id: "advance", label: "Salary advances", size: "lg", tone: "amber", tooltip: "1-click employee advance approvals with automated monthly salary recovery.", cardKey: "advance", keywords: ["salary advance", "advance", "loan"] },
  { id: "online_pay", label: "Online payment", size: "xs", tone: "slate", tooltip: "1-click direct salary bank disbursement file generated for 50+ Indian banks.", cardKey: "advance", keywords: ["online payment", "neft"] },
  { id: "on_duty", label: "On duty", size: "xs", tone: "slate", tooltip: "Official duty (OD) tracking for client visits and business travel without leave loss.", cardKey: "geofence", keywords: ["on duty", "od"] },
  { id: "gps_att", label: "GPS attendance", size: "sm", tone: "slate", tooltip: "Tamper-proof selfie attendance with real-time latitude, longitude and battery status.", cardKey: "geofence", keywords: ["gps", "mobile punch", "selfie"] },
  { id: "weekly_offs", label: "Weekly offs", size: "xs", tone: "slate", tooltip: "Dynamic weekly off management for 5-day, 6-day or rotational factory shifts.", cardKey: "leave", keywords: ["weekly off", "weekend"] },
  { id: "holiday_policy", label: "Holiday policy", size: "xs", tone: "slate", tooltip: "Customizable company holiday lists by branch, state and optional festivals.", cardKey: "leave", keywords: ["holiday", "festival"] },
  { id: "celebrations", label: "Celebrations", size: "sm", tone: "slate", tooltip: "Automated birthday, work anniversary and milestone alerts for employees.", cardKey: "leave", keywords: ["birthday", "anniversary"] },
  { id: "face", label: "Face attendance", size: "lg", tone: "teal", tooltip: "AI-powered facial recognition with 0.18s match speed and 3D IR liveness anti-spoof.", cardKey: "face", keywords: ["face", "facial", "biometric", "kiosk"] },
  { id: "gratuity", label: "Gratuity", size: "xs", tone: "blue", tooltip: "Eligibility and amount worked out automatically from the employee joining date.", cardKey: "pf", keywords: ["gratuity", "retirement", "severance"] },
  { id: "broadcast", label: "Broadcast messages", size: "sm", tone: "slate", tooltip: "Send company announcements, urgent updates and holiday notices via WhatsApp.", cardKey: "leave", keywords: ["broadcast", "notice"] },
  { id: "payroll_overview", label: "Payroll overview", size: "xs", tone: "slate", tooltip: "High-level visual breakdown of total wages, statutory liability and take-home outgo.", cardKey: "payroll", keywords: ["overview", "ctc"] },
  { id: "weekly_holidays", label: "Weekly holidays", size: "xs", tone: "slate", tooltip: "Branch-specific holiday calendars with automatic attendance day credit.", cardKey: "leave", keywords: ["weekly holidays"] },
  { id: "salary_templates", label: "Salary templates", size: "xs", tone: "slate", tooltip: "Pre-made CTC structures for blue-collar, white-collar, executive and contract staff.", cardKey: "payroll", keywords: ["salary template", "structure"] },
  { id: "tds_challan", label: "TDS challan and filing", size: "xs", tone: "slate", tooltip: "Calculates Section 192 deductions and prepares quarterly Form 24Q returns.", cardKey: "pf", keywords: ["tds", "challan", "24q"] },

  // Bottom Row
  { id: "staff_records", label: "Staff records", size: "xs", tone: "slate", tooltip: "Centralized employee database with complete personal, KYC, and employment history.", cardKey: "payroll", keywords: ["staff records", "directory"] },
  { id: "statutory_comp", label: "Statutory compliance", size: "sm", tone: "slate", tooltip: "100% compliant with Indian Labour Laws: PF, ESIC, Professional Tax and LWF.", cardKey: "pf", keywords: ["compliance", "statutory", "audit"] },
  { id: "lwf", label: "Labour welfare fund", size: "xs", tone: "slate", tooltip: "State-specific LWF employer and employee deductions calculated automatically.", cardKey: "pf", keywords: ["lwf", "welfare"] },
  { id: "task_assign", label: "Task assignment", size: "sm", tone: "slate", tooltip: "Assign daily duties, checklist milestones and shift tasks directly to staff.", cardKey: "geofence", keywords: ["task", "delegation"] },
  { id: "works_offline", label: "Works offline", size: "sm", tone: "slate", tooltip: "Kiosk records punches during network outages and auto-syncs when reconnected.", cardKey: "face", keywords: ["offline", "kiosk"] },
  { id: "goals", label: "Goals", size: "xs", tone: "slate", tooltip: "Quarterly objective and key result (OKR) tracking aligned with department targets.", cardKey: "payroll", keywords: ["goals", "okr"] },
  { id: "muster_roll", label: "Muster roll", size: "xs", tone: "slate", tooltip: "Official Form T muster roll register ready for government labor inspections.", cardKey: "reports", keywords: ["muster roll", "form t"] },
  { id: "bonus", label: "Bonus and adjustments", size: "sm", tone: "slate", tooltip: "Payment of Bonus Act compliance and ad-hoc incentive payouts in 1 click.", cardKey: "advance", keywords: ["bonus", "incentive"] },
  { id: "leave_approvals", label: "Leave approvals", size: "sm", tone: "slate", tooltip: "Managers approve or reject leave requests with a single tap on WhatsApp or app.", cardKey: "leave", keywords: ["leave", "approval"] },
  { id: "liability", label: "Liability and challan", size: "xs", tone: "slate", tooltip: "Track monthly statutory liabilities and challan payment receipts in one dashboard.", cardKey: "pf", keywords: ["liability", "challan"] },
  { id: "roster", label: "Roster", size: "sm", tone: "slate", tooltip: "Plan rotating day, evening and night shifts without messy spreadsheets.", cardKey: "grace", keywords: ["roster", "shift"] },
  { id: "custom_reports", label: "Custom reports", size: "lg", tone: "purple", tooltip: "Export over 50+ custom attendance, payroll, OT and statutory reports in Excel and PDF.", cardKey: "reports", keywords: ["reports", "excel", "pdf"] },
  { id: "form24q", label: "Form 24Q", size: "xs", tone: "slate", tooltip: "Quarterly TDS e-filing statement pre-compiled from monthly salary registers.", cardKey: "pf", keywords: ["form 24q", "tds"] },
  { id: "asset_mgmt", label: "Asset management", size: "xs", tone: "slate", tooltip: "Track laptops, phones, uniforms and tools assigned to staff members.", cardKey: "payroll", keywords: ["asset", "inventory"] },
  { id: "att_reg", label: "Attendance register", size: "sm", tone: "slate", tooltip: "Live daily attendance register showing in-time, out-time, work duration and status.", cardKey: "face", keywords: ["attendance register"] },
  { id: "fnf", label: "Full and final settlement", size: "xs", tone: "slate", tooltip: "Automates notice pay, leave encashment and gratuity payout during employee exit.", cardKey: "advance", keywords: ["fnf", "settlement", "exit"] },
  { id: "bulk_att", label: "Bulk attendance", size: "xs", tone: "slate", tooltip: "Mark attendance for entire shifts or factory floors in one batch operation.", cardKey: "face", keywords: ["bulk attendance"] },
  { id: "payslips_bottom", label: "Payslips", size: "xs", tone: "slate", tooltip: "One-click digital payslip distribution via WhatsApp and employee portal.", cardKey: "advance", keywords: ["payslips"] },
];

const POPULAR_SUGGESTIONS = [
  { label: "Salary advance", query: "salary advance", cardKey: "advance" },
  { label: "Grace period", query: "grace period", cardKey: "grace" },
  { label: "Face attendance", query: "face attendance", cardKey: "face" },
  { label: "Leave policies", query: "leave policies", cardKey: "leave" },
  { label: "PF & ESI", query: "pf", cardKey: "pf" },
  { label: "Geofencing", query: "geofencing", cardKey: "geofence" },
  { label: "Custom reports", query: "custom reports", cardKey: "reports" },
];

export default function StaffNeedsWordCloud() {
  const [searchQuery, setSearchQuery] = useState<string>("salary advance");
  const [activeCardKey, setActiveCardKey] = useState<string>("advance");
  const [activeWordId, setActiveWordId] = useState<string>("advance");
  const [hoveredTooltip, setHoveredTooltip] = useState<{ id: string; text: string } | null>(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const isMatched = (item: WordItem): boolean => {
    if (!normalizedQuery) return false;
    if (item.label.toLowerCase().includes(normalizedQuery)) return true;
    return item.keywords.some((k) => k.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(k.toLowerCase()));
  };

  const handleSelectSuggestion = (query: string, cardKey: string) => {
    setSearchQuery(query);
    setActiveCardKey(cardKey);
    const matchedItem = WORDS_DATA.find((item) => item.cardKey === cardKey);
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
          <p className="mt-2 text-base sm:text-lg text-slate-700 font-medium">
            Whatever you need, it&apos;s already built into{" "}
            <span className="font-semibold text-slate-950">PayroleHR</span>.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const val = e.target.value;
                setSearchQuery(val);
                const lower = val.toLowerCase().trim();
                const matched = WORDS_DATA.find(
                  (item) => item.cardKey && (item.label.toLowerCase().includes(lower) || item.keywords.some((k) => k.includes(lower)))
                );
                if (matched && matched.cardKey) {
                  setActiveCardKey(matched.cardKey);
                  setActiveWordId(matched.id);
                }
              }}
              placeholder="Search: gratuity, grace period, salary advance, form 16..."
              className="w-full rounded-full border border-slate-300/80 bg-white py-3.5 pl-14 pr-12 text-sm sm:text-base text-slate-950 placeholder:text-slate-400 focus:border-[#12B5A5] focus:outline-none focus:ring-4 focus:ring-teal-100 shadow-sm transition-all font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Suggestion Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mr-1 hidden sm:inline">
              Try:
            </span>
            {POPULAR_SUGGESTIONS.map((sug) => {
              const active = searchQuery.toLowerCase() === sug.query;
              return (
                <button
                  key={sug.query}
                  type="button"
                  onClick={() => handleSelectSuggestion(sug.query, sug.cardKey)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-slate-950 text-white shadow-sm ring-2 ring-slate-900/20"
                      : "bg-white text-slate-800 border border-slate-200/90 hover:border-teal-400 hover:text-teal-900 hover:bg-teal-50/50"
                  }`}
                >
                  {sug.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Word Cloud Canvas (Organic Scatter Layout with Darker, Sharper Typography & Hover Micro-Tooltips) */}
        <div className="relative mt-10 min-h-[480px] sm:min-h-[520px] rounded-3xl bg-white/50 p-5 sm:p-10 border border-slate-200/60 shadow-inner">
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-7 gap-y-3.5 sm:gap-y-4.5 text-center max-w-5xl mx-auto select-none">
            {WORDS_DATA.map((item) => {
              const matches = isMatched(item);
              const isSelected = activeWordId === item.id;
              const isHovered = hoveredTooltip?.id === item.id;

              // Darker, sharper font styling as requested by user ("text thoda dark likh hua lage")
              let fontClasses = "text-xs font-semibold text-slate-800 hover:text-slate-950";
              if (item.size === "xl") {
                fontClasses = "text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950";
              } else if (item.size === "lg") {
                if (item.tone === "teal") {
                  fontClasses = "text-xl sm:text-2xl lg:text-3xl font-black text-[#0E9486] tracking-tight";
                } else if (item.tone === "amber") {
                  fontClasses = "text-xl sm:text-2xl lg:text-3xl font-black text-[#C2651B] tracking-tight";
                } else if (item.tone === "purple") {
                  fontClasses = "text-xl sm:text-2xl lg:text-3xl font-black text-[#6D28D9] tracking-tight";
                } else {
                  fontClasses = "text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight";
                }
              } else if (item.size === "md") {
                if (item.tone === "blue") {
                  fontClasses = "text-xs sm:text-sm font-bold text-blue-700";
                } else {
                  fontClasses = "text-xs sm:text-sm font-bold text-slate-900";
                }
              } else if (item.size === "sm") {
                fontClasses = "text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-950";
              } else if (item.size === "xs") {
                if (item.tone === "blue") {
                  fontClasses = "text-[11px] sm:text-xs font-bold text-blue-700 hover:text-blue-900";
                } else {
                  fontClasses = "text-[11px] sm:text-xs font-semibold text-slate-700 hover:text-slate-950";
                }
              }

              // Special pill styling for Form 16 and Late entry rules (matching screenshot)
              let pillClasses = "";
              if (item.isPill) {
                if (item.id === "form16") {
                  pillClasses = "rounded-full border border-blue-300/80 bg-white px-3 py-0.5 text-blue-700 font-bold shadow-2xs";
                } else if (item.id === "late") {
                  pillClasses = "rounded-full border border-blue-400 bg-blue-50/70 text-blue-800 font-bold px-3 py-0.5 shadow-2xs";
                }
              }

              // Search highlight
              let highlightStyle = "";
              if (matches) {
                highlightStyle = "rounded-full border-2 border-teal-500 bg-teal-50 px-3.5 py-1 text-teal-950 font-black shadow-md scale-105 ring-4 ring-teal-100/70";
              } else if (isSelected && !item.isPill) {
                highlightStyle = "rounded-full border border-slate-400 bg-slate-100 px-3 py-0.5 text-slate-950 font-bold shadow-2xs";
              }

              return (
                <div
                  key={item.id}
                  className="relative inline-block"
                  onMouseEnter={() => setHoveredTooltip({ id: item.id, text: item.tooltip })}
                  onMouseLeave={() => setHoveredTooltip(null)}
                  onClick={() => handleWordClick(item)}
                >
                  <button
                    type="button"
                    className={`inline-block transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none ${fontClasses} ${pillClasses} ${highlightStyle}`}
                  >
                    {item.label}
                  </button>

                  {/* Sleek Interactive Tooltip Bubble (Matching User Screenshot For Gratuity & All Terms) */}
                  {isHovered && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 z-40 w-64 sm:w-72 rounded-2xl bg-white p-3 sm:p-3.5 shadow-2xl border border-slate-100 text-left pointer-events-none animate-in fade-in zoom-in-95 ring-1 ring-slate-900/5">
                      {/* Pointer Caret pointing up to hovered word */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rotate-45 border-t border-l border-slate-100 shadow-2xs" />
                      
                      <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100/80">
                        <span className="text-[11px] font-bold text-slate-950 tracking-tight">
                          {item.label}
                        </span>
                        <span className="text-[10px] font-bold text-[#0E9486] uppercase tracking-wider">
                          PayroleHR
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 font-normal leading-relaxed">
                        {item.tooltip}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Live Calculation / Rule Preview Card */}
          <div className="mt-10 max-w-md mx-auto transform transition-all duration-300 animate-in fade-in zoom-in-95">
            <div className="relative rounded-2xl bg-white p-5 sm:p-6 shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
              {/* Top indicator bar */}
              <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-3 py-0.5 text-[10px] font-bold tracking-wider text-white shadow-sm">
                <span>⚡ LIVE PAYROLEHR PREVIEW</span>
              </div>

              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-950">
                    {activeCardData.title}
                  </h3>
                  <span className="text-[11px] text-slate-600 font-medium">
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
                    <span className="text-slate-700">{row.label}</span>
                    <span className={`tabular-nums ${row.color || "text-slate-950 font-bold"}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider & Explanation Text */}
              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {activeCardData.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0E9486]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#12B5A5]" />
                    {activeCardData.footerTag}
                  </span>
                  <Link
                    href="/book-a-demo"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#12B5A5] hover:text-[#0E9486] transition"
                  >
                    <span>See Demo</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom helper footnote */}
          <div className="mt-8 text-center text-xs text-slate-700 font-medium flex items-center justify-center gap-2">
            <span>💡 Hover over any term (like Gratuity, Form 16, Comp off) to see instant rule explanation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
