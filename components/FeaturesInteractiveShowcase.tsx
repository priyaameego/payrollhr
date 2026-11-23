"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Calendar,
  CalendarDays,
  Receipt,
  Scale,
  ShieldCheck,
  MapPin,
  BarChart3,
  Lock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  ChevronRight,
  ChevronLeft,
  Coffee,
  Check,
  AlertCircle,
  Users,
  FileText,
  Download,
  Building,
  Search,
  Moon,
  Phone,
  Mail,
  TrendingUp,
  TrendingDown,
  Palmtree,
  Fingerprint,
  Info,
  Bell,
  AlertTriangle,
  SlidersHorizontal,
} from "lucide-react";

interface FeatureDetail {
  id: string;
  num: string;
  tabLabel: string;
  subHeader: string;
  title: string;
  headline: string;
  description: string;
  icon: React.ElementType;
  mockup: {
    type: "attendance" | "shift" | "leave" | "payroll" | "overtime" | "compliance" | "geo" | "reports" | "admin";
  };
  cards: {
    title: string;
    desc: string;
    linkText?: string;
    linkHref?: string;
  }[];
}

const featuresList: FeatureDetail[] = [
  {
    id: "attendance",
    num: "01",
    tabLabel: "Time & Attendance",
    subHeader: "01 – FEATURE",
    title: "Time & Attendance",
    headline: "Attendance Synced With Payroll",
    description:
      "Every punch lands on the payroll. Device, mobile, or field every entry feeds the employee's salary directly. No re-entry at month-end.",
    icon: Clock,
    mockup: { type: "attendance" },
    cards: [
      {
        title: "Live Attendance Records",
        desc: "Capture each punch from the device and mark attendance status like present, late, or half-day based on the rules set by you.",
        linkText: "each punch from the device",
        linkHref: "/features/face-attendance",
      },
      {
        title: "Mobile Punch-in with Photo",
        desc: "A photo is captured automatically every time an employee punches from the app. Visual proof of every entry. No buddy-punching.",
        linkText: "visual proof of every entry",
        linkHref: "/features/geo-fencing-attendance",
      },
      {
        title: "Attendance Modes That Match Your Floor",
        desc: "Choose how punches are read — count every punch, take only the first and last of the day, or mark present on a single punch. A factory floor and a kitchen do not work the same way.",
        linkText: "custom floor punch modes",
        linkHref: "/features/attendance-management",
      },
      {
        title: "Payroll and Attendance Status",
        desc: "View pending approvals, attendance summaries, and payroll progress across the organisation from the main dashboard screen.",
        linkText: "organisation dashboard",
        linkHref: "/features/payroll-management",
      },
      {
        title: "Attendance Records for Employees",
        desc: "Each employee can view their own attendance history and current leave balance at any time, without contacting HR or waiting for month-end.",
        linkText: "employee self-service records",
        linkHref: "/features/employee-self-service",
      },
      {
        title: "Works in 11 Indian Languages",
        desc: "Switch between 11 Indian regional languages including Marathi, Tamil, Gujarati, and Odia based on the employee's phone setting. No separate setup is needed per employee.",
        linkText: "11 Indian regional languages",
        linkHref: "/features/employee-self-service",
      },
      {
        title: "WhatsApp Updates",
        desc: "Receive daily attendance summaries, mentioning who came, who didn't, and more on WhatsApp daily.",
        linkText: "daily WhatsApp summaries",
        linkHref: "/features/notifications-alerts",
      },
    ],
  },
  {
    id: "shifts",
    num: "02",
    tabLabel: "Shifts & Roster",
    subHeader: "02 – FEATURE",
    title: "Shifts & Roster",
    headline: "Shifts Set Once, Applied Daily",
    description:
      "Define how each team works and the system decides who is late, who is on a week-off, and whose hours count as overtime.",
    icon: CalendarDays,
    mockup: { type: "shift" },
    cards: [
      {
        title: "Shift Assignment by Role and Location",
        desc: "Create shifts once and assign them by department, store branch, or factory line. Day, night, rotating, and alternate week-offs apply on their own without manual intervention.",
        linkText: "assign by role, department, or branch",
        linkHref: "/features/shift-management",
      },
      {
        title: "Roster Planning in One Grid",
        desc: "Plan a seven-day roster in a unified grid view with employees as rows and dates as columns. Filter by branch, lock allocations, and export when the plan is ready.",
        linkText: "seven-day roster in a grid view",
        linkHref: "/features/roster-management",
      },
      {
        title: "Fixed Break Hours",
        desc: "Log a set break duration automatically when employees do not punch out for breaks. Working hours stay audit-accurate without enforcing extra punches.",
        linkText: "log a set break duration automatically",
        linkHref: "/features/attendance-management",
      },
      {
        title: "Future Shift Changes",
        desc: "Apply a shift change to many employees at once, with an effective date set in the future for scheduled project rotations and seasonal peaks.",
        linkText: "effective date set in the future",
        linkHref: "/features/shift-management",
      },
      {
        title: "Shift & Role Flexibility",
        desc: "Assign different shift structures to departments, locations, and roles based on how your teams work. The system adjusts to how your teams actually operate.",
        linkText: "shift structures to departments, locations, and roles",
        linkHref: "/features/organization-management",
      },
    ],
  },
  {
    id: "leaves",
    num: "03",
    tabLabel: "Leave & Holidays",
    subHeader: "03 – FEATURE",
    title: "Leave & Holidays",
    headline: "Consolidated Leave Records",
    description:
      "Every leave request, approval, and balance in one place. Each approved leave reflects that month's salary.",
    icon: Calendar,
    mockup: { type: "leave" },
    cards: [
      {
        title: "Define Leave Types",
        desc: "Set up paid, unpaid, earned, comp-off, and any other leave type your organisation uses before employees begin submitting requests.",
        linkText: "paid, unpaid, earned, comp-off",
        linkHref: "/features/leave-management",
      },
      {
        title: "Request Submissions Via App",
        desc: "Raise leave requests from the mobile app or web portal. The request reaches the right approver directly with zero paperwork.",
        linkText: "requests from the mobile app or web portal",
        linkHref: "/features/employee-self-service",
      },
      {
        title: "Auto-updated Leave Balance",
        desc: "Update leave balances as soon as a request is approved. The salary deduction for that leave appears in the same month's payroll.",
        linkText: "appears in the same month's payroll",
        linkHref: "/features/payroll-management",
      },
      {
        title: "Leave Encashment",
        desc: "Pay out unused leave monthly or yearly. Use the standard calculation or build your own formula when your policy works differently.",
        linkText: "Pay out unused leave monthly or yearly",
        linkHref: "/features/advanced-leave-management",
      },
      {
        title: "Comp-Off Carry Forward",
        desc: "Carry forward comp-offs earned on holidays and week-offs. Set the frequency, and decide whether the unused balance is encashed or lapses.",
        linkText: "comp-offs earned on holidays and week-offs",
        linkHref: "/features/configurable-rules",
      },
    ],
  },
  {
    id: "payroll",
    num: "04",
    tabLabel: "Payroll & Payout",
    subHeader: "04 – FEATURE",
    title: "Payroll & Payout",
    headline: "Payroll Ready Before Month-End",
    description:
      "Keep salaries calculated through the month so payroll is ready to approve by the month end.",
    icon: Receipt,
    mockup: { type: "payroll" },
    cards: [
      {
        title: "Automated Salary Calculation",
        desc: "Update each employee's salary figure automatically with every approved attendance entry. Month-end is a review step, not a calculation exercise.",
        linkText: "salary figure automatically with every approved attendance",
        linkHref: "/features/payroll-processing",
      },
      {
        title: "Flexible Payroll Structures",
        desc: "Run fixed monthly salaries, weekly pay, and hourly pay — all within the same organisation and legal entity.",
        linkText: "fixed monthly salaries, weekly pay, and hourly pay",
        linkHref: "/features/salary-structure-management",
      },
      {
        title: "Payroll Groups",
        desc: "Group employees who share the same salary rules, attendance mode, and compliance settings, then process each group on its own. Three groups are ready from day one: monthly with compliance, monthly without, and hourly.",
        linkText: "Group employees who share the same salary rules",
        linkHref: "/features/payroll-management",
      },
      {
        title: "Salary Structure Setup",
        desc: "Build the salary components your organisation already uses like basic, allowances, and anything else, and the system calculates from that structure each month.",
        linkText: "Build the salary components your organisation already uses",
        linkHref: "/features/salary-structure-management",
      },
      {
        title: "Bulk Payroll Adjustments",
        desc: "Apply changes across multiple employees in one step before payroll is finalised, without affecting the individual calculations underneath.",
        linkText: "Apply changes across multiple employees in one step",
        linkHref: "/features/bank-salary-export",
      },
    ],
  },
  {
    id: "overtime",
    num: "05",
    tabLabel: "Overtime & Penalties",
    subHeader: "05 – FEATURE",
    title: "Overtime & Penalties",
    headline: "Calculate Extra Hours and Deductions",
    description:
      "Set the rules once. The system applies them to every cycle without a fresh decision each month.",
    icon: Scale,
    mockup: { type: "overtime" },
    cards: [
      {
        title: "Overtime With Buffer and Intervals",
        desc: "Set a grace window before overtime starts counting, and round it to 1, 15, 30, 45, or 60-minute intervals. Small overruns don't become a payout, and sustained extra hours are paid fairly.",
        linkText: "grace window before overtime starts counting",
        linkHref: "/features/configurable-rules",
      },
      {
        title: "Off Day Hours",
        desc: "Decide whether standard hours on a week-off are paid or not, and apply distinct statutory overtime multipliers (1.5x, 2.0x, 2.5x) automatically.",
        linkText: "standard hours on a week-off are paid or not",
        linkHref: "/features/payroll-processing",
      },
      {
        title: "Configurable Grace Windows",
        desc: "Allow a 15-minute grace window before late penalty marks kick in, and enforce rules like '3 late marks = 1 half-day deduction' seamlessly.",
        linkText: "15-minute grace window before late penalty marks",
        linkHref: "/features/configurable-rules",
      },
      {
        title: "Custom Overtime Multipliers",
        desc: "Set distinct overtime rates for regular workdays, weekly offs, and national holidays with supervisor approval locks.",
        linkText: "distinct overtime rates for regular workdays",
        linkHref: "/features/payroll-processing",
      },
    ],
  },
  {
    id: "compliance",
    num: "06",
    tabLabel: "Compliance",
    subHeader: "06 – FEATURE",
    title: "Compliance",
    headline: "Compliance Ready Payroll",
    description:
      "Configure the statutory rules once and the system applies them every cycle, per employee, on the salary slip.",
    icon: ShieldCheck,
    mockup: { type: "compliance" },
    cards: [
      {
        title: "Compliance-Ready Calculations",
        desc: "Configure PF, ESIC, TDS, and other compliance rules & deductions once and the system applies them automatically every payroll cycle, per employee, on the salary slip.",
        linkText: "Configure PF, ESIC, TDS, and other compliance rules",
        linkHref: "/features/payroll-management",
      },
      {
        title: "TDS Under the New Tax Regime",
        desc: "Enter a new joiner's previous employer salary and TDS already paid so the year's tax is projected correctly. Supports seamless comparison between Old and New tax regimes.",
        linkText: "Enter a new joiner's previous employer salary and TDS",
        linkHref: "/features/salary-structure-management",
      },
      {
        title: "EPFO ECR Text File Ready",
        desc: "Generate the exact electronic return file ready to upload directly to the EPFO Unified Portal without manual Excel editing.",
        linkText: "exact electronic return file ready to upload directly to EPFO",
        linkHref: "/features/reports-analytics",
      },
      {
        title: "State-wise Professional Tax Slabs",
        desc: "Auto-detects employee work locations and applies exact PT deduction slabs for Karnataka, Maharashtra, West Bengal, Telangana, and Gujarat.",
        linkText: "exact PT deduction slabs for Karnataka, Maharashtra",
        linkHref: "/features/configurable-rules",
      },
    ],
  },
  {
    id: "geotrack",
    num: "07",
    tabLabel: "Geo Track",
    subHeader: "07 – FEATURE",
    title: "Geo Track",
    headline: "Attendance That Knows Where It Happened",
    description:
      "For teams that don't sit at one location, the punch carries the place along with the time.",
    icon: MapPin,
    mockup: { type: "geo" },
    cards: [
      {
        title: "Location-Based Attendance (Geo Fencing)",
        desc: "Set a boundary around the shop, branch, or site. Punches outside it don't register. Field employees' GPS is logged with every entry.",
        linkText: "boundary around the shop, branch, or site",
        linkHref: "/features/geo-fencing-attendance",
      },
      {
        title: "Live Tracking",
        desc: "See where field employees are and how they moved through the day with Geo Tracking. Routes, distance, last activity without calling.",
        linkText: "where field employees are and how they moved",
        linkHref: "/features/employee-self-service",
      },
      {
        title: "Auto Punch-Out",
        desc: "Punch an employee out automatically when they leave the site boundary or switch off location on their phone. No more shifts left running overnight because someone forgot to punch out.",
        linkText: "leave the site boundary or switch off location",
        linkHref: "/features/attendance-management",
      },
      {
        title: "Every Location Event Recorded",
        desc: "If an auto punch-out fires for someone who never punched in, the entry is still captured and flagged for the admin to review. Nothing goes unrecorded.",
        linkText: "captured and flagged for the admin to review",
        linkHref: "/features/configurable-rules",
      },
    ],
  },
  {
    id: "reports",
    num: "08",
    tabLabel: "Reports",
    subHeader: "08 – FEATURE",
    title: "Reports",
    headline: "Complete Visibility",
    description:
      "Admins can check what is happening across teams, branches, and payroll at any point.",
    icon: BarChart3,
    mockup: { type: "reports" },
    cards: [
      {
        title: "Reports by Employee, Department, or Branch",
        desc: "Filter attendance and payroll reports by employee, team, location, or time period and download them at any point in the month.",
        linkText: "Filter attendance and payroll reports by employee",
        linkHref: "/features/reports-analytics",
      },
      {
        title: "Muster Report",
        desc: "Download the muster in the format Indian inspections expect — full days, half days, absents, week-offs, leaves, and holidays, per employee.",
        linkText: "muster in the format Indian inspections expect",
        linkHref: "/features/payroll-reports",
      },
      {
        title: "Statutory Reports for Filing",
        desc: "Export PF, ESIC, PT, TDS, and LWF figures in a format ready to upload to the relevant portal.",
        linkText: "Export PF, ESIC, PT, TDS, and LWF figures",
        linkHref: "/features/payroll-management",
      },
      {
        title: "Download Reports",
        desc: "Download payroll, attendance, and compliance reports for any period, employee, or department at any point — without waiting for the month-end.",
        linkText: "Download payroll, attendance, and compliance reports",
        linkHref: "/features/bank-salary-export",
      },
    ],
  },
  {
    id: "admin",
    num: "09",
    tabLabel: "Admin Control",
    subHeader: "09 – FEATURE",
    title: "Admin Control",
    headline: "Control Who Does What",
    description:
      "Every action in the system is saved and traceable.",
    icon: Lock,
    mockup: { type: "admin" },
    cards: [
      {
        title: "User Management",
        desc: "According to their role, control what your staff can view, approve, or edit. Anything outside their role is not accessible to them.",
        linkText: "control what your staff can view, approve, or edit",
        linkHref: "/features/organization-management",
      },
      {
        title: "Access Templates and Action-Level Rights",
        desc: "Build a permission set once for a role like accountant or branch manager, and apply it to every new user. Rights are granted per action view, create, edit, or delete so a user can review payroll without being able to change it.",
        linkText: "Build a permission set once for a role",
        linkHref: "/features/configurable-rules",
      },
      {
        title: "Custom Employee Fields",
        desc: "Add custom employee details your organisation tracks beyond the standard fields date of birth, emergency contacts, documents, or anything specific to your business.",
        linkText: "custom employee details your organisation tracks",
        linkHref: "/features/employee-database",
      },
      {
        title: "Branch-Level View",
        desc: "Review each branch on its own, or switch to a combined view that shows the full organisation's data from the same login.",
        linkText: "Review each branch on its own, or switch to a combined view",
        linkHref: "/features/organization-policies",
      },
      {
        title: "Manage More Than One Business",
        desc: "Owners running more than one organisation switch between them from the same login, without signing out.",
        linkText: "Owners running more than one organisation switch between them",
        linkHref: "/features/organization-management",
      },
    ],
  },
];

interface FeaturesInteractiveShowcaseProps {
  initialId?: string;
  hideSidebar?: boolean;
}

export default function FeaturesInteractiveShowcase({
  initialId,
  hideSidebar = false,
}: FeaturesInteractiveShowcaseProps = {}) {
  const getInitialIndex = () => {
    if (!initialId) return 0;
    const clean = initialId.toLowerCase();
    if (clean.includes("geo") || clean.includes("gps")) {
      return featuresList.findIndex((f) => f.id === "geotrack");
    }
    if (clean.includes("shift") || clean.includes("roster") || clean.includes("scheduling")) {
      return featuresList.findIndex((f) => f.id === "shifts");
    }
    if (clean.includes("leave") || clean.includes("holiday")) {
      return featuresList.findIndex((f) => f.id === "leaves");
    }
    if (clean.includes("attendance") || clean.includes("face") || clean.includes("whatsapp") || clean.includes("notification") || clean.includes("alert")) {
      return featuresList.findIndex((f) => f.id === "attendance");
    }
    if (clean.includes("overtime") || clean.includes("penalty") || clean.includes("configurable-rules")) {
      return featuresList.findIndex((f) => f.id === "overtime");
    }
    if (clean.includes("compliance") || clean.includes("statutory") || clean.includes("salary-structure")) {
      return featuresList.findIndex((f) => f.id === "compliance");
    }
    if (clean.includes("payroll") || clean.includes("salary") || clean.includes("payout") || clean.includes("arrears") || clean.includes("bank")) {
      return featuresList.findIndex((f) => f.id === "payroll");
    }
    if (clean.includes("report") || clean.includes("analytics")) {
      return featuresList.findIndex((f) => f.id === "reports");
    }
    if (clean.includes("admin") || clean.includes("organization") || clean.includes("policies")) {
      return featuresList.findIndex((f) => f.id === "admin");
    }
    const found = featuresList.findIndex(
      (f) => f.id === clean || clean.includes(f.id) || f.id.includes(clean)
    );
    return found !== -1 ? found : 0;
  };

  const [activeIdx, setActiveIdx] = useState<number>(getInitialIndex());
  const activeFeature = featuresList[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % featuresList.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + featuresList.length) % featuresList.length);
  };

  return (
    <section id="interactive-showcase" className="relative w-full max-w-7xl mx-auto py-8 scroll-mt-28">
      {/* Main Container: Left Tabs Slider | Right Content Showcase */}
      <div className={`grid grid-cols-1 ${hideSidebar ? "" : "lg:grid-cols-12"} gap-8 lg:gap-10 items-start`}>
        {/* ========================================================== */}
        {/* LEFT COLUMN: NUMBERED FEATURE TABS (01 to 09) */}
        {/* ========================================================== */}
        {!hideSidebar && (
          <div className="lg:col-span-3 space-y-2">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-3">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                FEATURES ({featuresList.length})
              </span>
              {/* Quick Slider Arrow Controls */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Feature"
                  className="h-7 w-7 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#12B5A5] hover:border-teal-200 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Feature"
                  className="h-7 w-7 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#12B5A5] hover:border-teal-200 transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <nav className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar" aria-label="Features Tab Navigation">
              {featuresList.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`group shrink-0 lg:shrink flex items-center gap-2 lg:gap-3.5 rounded-xl lg:rounded-2xl px-3 lg:px-4 py-2 lg:py-3 text-left transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-gradient-to-r from-teal-50 via-teal-50/70 to-emerald-50/40 text-[#0E7A6E] font-bold shadow-xs border-b-2 lg:border-b-0 lg:border-l-4 border-[#12B5A5]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-b-2 lg:border-b-0 lg:border-l-4 border-transparent"
                    }`}
                  >
                    <span
                      className={`text-xs font-mono font-bold tracking-tight px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-[#12B5A5]/15 text-[#0E7A6E]"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="text-xs lg:text-sm font-semibold leading-tight">
                      {item.tabLabel}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}

        {/* ========================================================== */}
        {/* RIGHT COLUMN: ACTIVE FEATURE SHOWCASE (HEADER + MOCKUP + CARDS) */}
        {/* ========================================================== */}
        <div className={`${hideSidebar ? "w-full" : "lg:col-span-9"} rounded-3xl border border-teal-100/90 bg-gradient-to-b from-[#FAFDFD] via-white to-white p-4 sm:p-6 lg:p-10 shadow-card`}>
          {/* Top Feature Tag & Title */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-[#12B5A5] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#12B5A5] animate-pulse" />
              <span>{activeFeature.subHeader}</span>
            </div>

            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              {activeFeature.title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              <strong className="text-slate-900 font-semibold">{activeFeature.headline}:</strong>{" "}
              {activeFeature.description}
            </p>
          </div>

          {/* Grid: Center Interactive Mockup | Right Detailed Value Cards */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Center Phone/Device Mockup */}
            <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-24">
              {/* Dynamic UI Mockup based on active feature */}
              {activeFeature.mockup.type === "attendance" && (
                <div className="relative w-full max-w-[320px] rounded-[38px] bg-white border border-slate-200/90 p-4 shadow-2xl text-slate-800">
                  {/* Phone Notch & Status */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5] animate-ping" />
                      <span className="text-[10px] font-medium text-slate-500">Live GPS</span>
                    </div>
                  </div>

                  {/* Header Row: Regularization & Date */}
                  <div className="flex items-center justify-between pt-3 pb-2 text-xs">
                    <div className="flex items-center gap-1 text-slate-700 font-bold cursor-pointer hover:text-[#12B5A5]">
                      <ChevronLeft className="h-3.5 w-3.5 text-slate-400" />
                      <span>Regularization</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <Calendar className="h-3 w-3 text-slate-400" />
                      <span>10 Jan 2026</span>
                    </div>
                  </div>

                  {/* Centered Dark Counter Card (Exact Attendo screenshot look) */}
                  <div className="rounded-2xl bg-[#10141E] border border-slate-800 p-4 my-2 text-center shadow-lg text-white">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      Working Hours
                    </span>
                    <div className="flex items-center justify-center gap-2 my-1">
                      <div className="rounded-xl bg-[#1A202E] px-3 py-2 text-center min-w-[54px] border border-slate-700/60">
                        <span className="font-display text-2xl font-black text-white">3</span>
                        <span className="text-[9px] text-slate-400 block uppercase font-mono mt-0.5">Hrs</span>
                      </div>
                      <span className="text-xl font-bold text-teal-400">:</span>
                      <div className="rounded-xl bg-[#1A202E] px-3 py-2 text-center min-w-[54px] border border-slate-700/60">
                        <span className="font-display text-2xl font-black text-white">13</span>
                        <span className="text-[9px] text-slate-400 block uppercase font-mono mt-0.5">Min</span>
                      </div>
                      <span className="text-xl font-bold text-teal-400">:</span>
                      <div className="rounded-xl bg-[#1A202E] px-3 py-2 text-center min-w-[54px] border border-slate-700/60">
                        <span className="font-display text-2xl font-black text-[#12B5A5] animate-pulse">05</span>
                        <span className="text-[9px] text-slate-400 block uppercase font-mono mt-0.5">Sec</span>
                      </div>
                    </div>

                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#202738] border border-amber-500/30 px-3 py-1 text-[11px] font-semibold text-amber-300">
                      <Coffee className="h-3.5 w-3.5 text-amber-400" />
                      <span>Total Break Time - 40m</span>
                    </div>
                  </div>

                  {/* Activity Section */}
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800">Activity</span>
                      <span className="rounded-lg bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-[#0E7A6E] border border-teal-200">
                        Add Punch
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2 text-xs border border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                            <ArrowRight className="h-3 w-3 -rotate-45" />
                          </div>
                          <span className="font-semibold text-slate-700">Punch In</span>
                        </div>
                        <span className="font-mono text-slate-500 text-[11px]">10:30am</span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2 text-xs border border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-amber-100 text-amber-600">
                            <ArrowRight className="h-3 w-3 rotate-45" />
                          </div>
                          <span className="font-semibold text-slate-700">Punch Out</span>
                        </div>
                        <span className="font-mono text-slate-500 text-[11px]">01:30pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "shift" && (
                <div className="relative w-full max-w-[320px] rounded-[38px] bg-white border border-slate-200/90 p-4 shadow-2xl text-slate-800">
                  {/* Phone Notch & Dynamic Island */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">3:18</span>
                    <div className="h-3.5 w-16 rounded-full bg-slate-900 mx-auto" />
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5]" />
                      <span className="text-[10px] font-medium text-slate-500">Live</span>
                    </div>
                  </div>

                  {/* Header Row: Back to Roster */}
                  <div className="flex items-center gap-1 pt-2.5 pb-1 text-xs font-bold text-slate-800 cursor-pointer hover:text-[#12B5A5]">
                    <ChevronLeft className="h-3.5 w-3.5 text-slate-400" />
                    <span>Roster</span>
                  </div>

                  {/* Date pills horizontal strip (Exact screenshot match) */}
                  <div className="flex gap-1.5 overflow-x-auto pb-1 my-2 no-scrollbar">
                    {[
                      { day: "WED", date: "12", active: true },
                      { day: "THU", date: "13", active: false },
                      { day: "FRI", date: "14", active: false },
                      { day: "SAT", date: "15", active: false },
                      { day: "SUN", date: "16", active: false },
                      { day: "MON", date: "17", active: false },
                    ].map((item) => (
                      <div
                        key={item.date}
                        className={`flex flex-col items-center justify-center min-w-[42px] py-2 px-1 rounded-2xl text-center cursor-pointer transition-all ${
                          item.active
                            ? "bg-[#12B5A5] text-white shadow-xs font-bold ring-2 ring-teal-200"
                            : "bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100"
                        }`}
                      >
                        <span className="text-[9px] uppercase font-bold tracking-tight">{item.day}</span>
                        <span className="text-xs font-extrabold">{item.date}</span>
                      </div>
                    ))}
                  </div>

                  {/* Search Bar */}
                  <div className="relative my-2">
                    <Search className="absolute left-3 top-2.5 h-3 w-3 text-slate-400" />
                    <input
                      type="text"
                      readOnly
                      placeholder="Search by employee name"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200/70 py-1.5 pl-8 pr-3 text-[10px] text-slate-700 placeholder-slate-400"
                    />
                  </div>

                  {/* Floating Employee Shift Card 1 */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-[#0E7A6E] font-extrabold text-xs">
                          N
                        </div>
                        <div>
                          <span className="font-bold text-xs text-slate-900 block leading-tight">Niyon Roy</span>
                          <span className="text-[10px] text-slate-500">Software engineer</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 border border-indigo-100 px-2 py-0.5 text-[9px] font-bold text-indigo-700">
                        <Moon className="h-2.5 w-2.5" />
                        <span>Week Off</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2.5 pt-2 border-t border-slate-100">
                      <div className="rounded-xl bg-teal-50/70 border border-teal-100 p-2 text-left">
                        <span className="text-[10px] font-bold text-slate-800 block">• 5 am to 1 pm</span>
                        <span className="text-[8px] font-mono text-slate-500">05:00 am - 01:00 pm</span>
                      </div>
                      <div className="rounded-xl bg-slate-50 border border-slate-100 p-2 text-left">
                        <span className="text-[10px] font-bold text-slate-800 block">• 5 pm to 5 am</span>
                        <span className="text-[8px] font-mono text-slate-500">05:00 pm - 05:00 am</span>
                      </div>
                    </div>
                  </div>

                  {/* Second Employee Card peek below */}
                  <div className="mt-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-2 opacity-70 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">
                        D
                      </div>
                      <div>
                        <span className="font-bold text-[10px] text-slate-800 block">Dhruv Chavda</span>
                        <span className="text-[8px] text-slate-500">Software engineer</span>
                      </div>
                    </div>
                    <span className="rounded-full bg-slate-200/80 px-2 py-0.5 text-[8px] font-bold text-slate-600">
                      Week Off
                    </span>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "leave" && (
                <div className="relative w-full max-w-[320px] rounded-[38px] bg-white border border-slate-200/90 p-4 shadow-2xl text-slate-800">
                  {/* Phone Notch & Status */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5]" />
                      <span className="text-[10px] font-medium text-slate-500">Self-Service</span>
                    </div>
                  </div>

                  {/* Header Row: Approvals */}
                  <div className="flex items-center gap-1 pt-2 pb-1 text-xs font-bold text-slate-800 cursor-pointer hover:text-[#12B5A5]">
                    <ChevronLeft className="h-3.5 w-3.5 text-slate-400" />
                    <span>Approvals</span>
                  </div>

                  {/* Top 3 Status Tabs */}
                  <div className="flex border-b border-slate-100 text-xs font-bold my-1.5">
                    <div className="pb-1 px-2 text-[#0E7A6E] border-b-2 border-[#12B5A5]">Pending (3)</div>
                    <div className="pb-1 px-2 text-slate-400">Approved (2)</div>
                    <div className="pb-1 px-2 text-slate-400">Rejected (1)</div>
                  </div>

                  {/* Sub-filter chips */}
                  <div className="flex gap-1.5 my-1.5">
                    <span className="rounded-full bg-teal-50 border border-teal-200 px-2.5 py-0.5 text-[9px] font-bold text-[#0E7A6E]">
                      Leaves (3)
                    </span>
                    <span className="rounded-full bg-slate-50 border border-slate-100 px-2.5 py-0.5 text-[9px] font-medium text-slate-600">
                      Attendance (2)
                    </span>
                    <span className="rounded-full bg-slate-50 border border-slate-100 px-2.5 py-0.5 text-[9px] font-medium text-slate-600">
                      Document (1)
                    </span>
                  </div>

                  {/* Search bar with mic icon */}
                  <div className="relative my-2">
                    <Search className="absolute left-3 top-2 h-3 w-3 text-slate-400" />
                    <input
                      type="text"
                      readOnly
                      placeholder="Search Employees..."
                      className="w-full rounded-xl bg-slate-50 border border-slate-200/70 py-1.5 pl-8 pr-7 text-[10px] text-slate-700 placeholder-slate-400"
                    />
                    <span className="absolute right-2.5 top-1.5 text-[10px] text-slate-400">🎙️</span>
                  </div>

                  {/* Floating Leave Request Card (Exact screenshot match) */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-xs text-slate-900 block leading-tight">Arjun Nair</span>
                        <span className="text-[10px] text-slate-500">20 March, 2026</span>
                      </div>
                      <span className="rounded-full bg-amber-50 border border-amber-200/80 px-2 py-0.5 text-[9px] font-bold text-amber-700">
                        Sick Leave
                      </span>
                    </div>

                    {/* Date duration connector */}
                    <div className="my-2.5 py-1.5 px-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px]">
                      <div>
                        <span className="font-bold text-slate-800 block">23-05-2026</span>
                        <span className="text-slate-500 text-[8px]">Full Day</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-bold text-teal-700 bg-teal-100/80 px-2 py-0.5 rounded-full">
                          2 Days
                        </span>
                        <div className="w-14 border-t border-dashed border-slate-300 my-0.5" />
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-slate-800 block">25-05-2026</span>
                        <span className="text-slate-500 text-[8px]">Full Day</span>
                      </div>
                    </div>

                    {/* Reason box */}
                    <div className="rounded-xl bg-slate-50/80 p-2 text-[10px] text-slate-600 border border-slate-100 mb-2.5">
                      <span className="font-semibold text-slate-800 block">Reason:</span>
                      <span>Due to personal family event, requesting 2 days planned leave.</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        className="rounded-xl border border-slate-200 bg-white py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        Reject
                      </button>
                      <button
                        type="button"
                        className="rounded-xl bg-[#12B5A5] hover:bg-[#0E9486] py-1.5 text-xs font-bold text-white shadow-xs transition-colors"
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "payroll" && (
                <div className="relative w-full max-w-[320px] rounded-[38px] bg-white border border-slate-200/90 p-4 shadow-2xl text-slate-800">
                  {/* Phone Notch & Dynamic Island */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">3:19</span>
                    <div className="h-3.5 w-16 rounded-full bg-slate-900 mx-auto" />
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5]" />
                      <span className="text-[10px] font-medium text-slate-500">Active</span>
                    </div>
                  </div>

                  {/* Header Row: Employee & Edit Button */}
                  <div className="flex items-center justify-between pt-2.5 pb-1">
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
                      <ChevronLeft className="h-3.5 w-3.5 text-slate-400" />
                      <span>Employee</span>
                    </div>
                    <button
                      type="button"
                      className="rounded-lg bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-[#0E7A6E] border border-teal-200"
                    >
                      ✏️ Edit
                    </button>
                  </div>

                  {/* Profile Header Card */}
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-2.5 my-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-700 font-bold text-xs">
                        AS
                      </div>
                      <div>
                        <span className="font-bold text-xs text-slate-900 block leading-tight">Aakash Shah</span>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                          <span>Software engineer</span>
                          <span>•</span>
                          <span className="text-emerald-600 font-medium">Emp 1514</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons row */}
                    <div className="grid grid-cols-3 gap-1.5 mt-2 pt-2 border-t border-slate-200/60 text-[10px] font-medium text-slate-600">
                      <div className="flex items-center justify-center gap-1 py-1 rounded-lg bg-white border border-slate-200/80">
                        <Phone className="h-2.5 w-2.5 text-[#12B5A5]" />
                        <span>Call</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 py-1 rounded-lg bg-white border border-slate-200/80">
                        <Mail className="h-2.5 w-2.5 text-[#12B5A5]" />
                        <span>Email</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 py-1 rounded-lg bg-white border border-slate-200/80">
                        <FileText className="h-2.5 w-2.5 text-[#12B5A5]" />
                        <span>Payslip</span>
                      </div>
                    </div>
                  </div>

                  {/* Sub-nav Pills */}
                  <div className="flex gap-1 my-1.5 text-[9px] overflow-x-auto no-scrollbar">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-600 font-medium whitespace-nowrap">
                      Professional Details
                    </span>
                    <span className="rounded-full bg-[#12B5A5] text-white px-2 py-0.5 font-bold shadow-xs whitespace-nowrap">
                      Salary Details
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-600 font-medium whitespace-nowrap">
                      Bank Details
                    </span>
                  </div>

                  {/* Floating Salary Card (Exact screenshot match) */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-md space-y-2 text-[10px]">
                    <div className="grid grid-cols-2 gap-2 pb-1.5 border-b border-slate-100">
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">Date of Joining *</span>
                        <span className="font-semibold text-slate-800">2016-10-10</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">Salary Type *</span>
                        <span className="font-semibold text-slate-800">Compliance</span>
                      </div>
                    </div>

                    <div className="py-1">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">Monthly Salary</span>
                      <span className="font-display text-2xl font-black text-slate-900 block leading-tight">₹40,000</span>
                    </div>

                    <div className="pt-1.5 border-t border-slate-100">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">Payroll Group *</span>
                      <span className="font-semibold text-[#0E7A6E]">Safe compliance</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-slate-100 text-[9px]">
                      <div>
                        <span className="text-slate-400 block">Prev. Employer Income</span>
                        <span className="font-bold text-slate-700">₹0</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Prev. Employer TDS</span>
                        <span className="font-bold text-slate-700">₹0</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "overtime" && (
                <div className="relative w-full max-w-[320px] rounded-[38px] bg-white border border-slate-200/90 p-4 shadow-2xl text-slate-800">
                  {/* Phone Notch & Dynamic Island */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">3:26</span>
                    <div className="h-3.5 w-16 rounded-full bg-slate-900 mx-auto" />
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-medium text-slate-500">Audit</span>
                    </div>
                  </div>

                  {/* Header Row: Perks & Penalties */}
                  <div className="flex items-center justify-between pt-2 pb-1 text-xs">
                    <div className="flex items-center gap-1 font-bold text-slate-800">
                      <ChevronLeft className="h-3.5 w-3.5 text-slate-400" />
                      <span>Perks & Penalties</span>
                    </div>
                    <button
                      type="button"
                      className="rounded-lg bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-[#0E7A6E] border border-teal-200"
                    >
                      + Add
                    </button>
                  </div>

                  {/* Month Selector */}
                  <div className="my-1.5 rounded-xl bg-slate-50 p-2 text-center border border-slate-100">
                    <div className="flex items-center justify-center gap-3 text-xs font-bold text-slate-800">
                      <span className="text-slate-400 cursor-pointer">‹</span>
                      <span>April 2026</span>
                      <span className="text-slate-400 cursor-pointer">›</span>
                    </div>
                    <span className="text-[9px] text-slate-500 block font-mono mt-0.5">01 Apr 2026 – 30 Apr 2026</span>
                  </div>

                  {/* Floating Stat Card (Exact screenshot match) */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-md grid grid-cols-2 gap-2 my-2">
                    <div className="pr-2 border-r border-slate-100">
                      <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-tight text-emerald-600">
                        <TrendingUp className="h-3 w-3" />
                        <span>Total Perks</span>
                      </div>
                      <span className="font-display text-lg font-black text-emerald-600 block mt-1">₹17,060</span>
                    </div>
                    <div className="pl-2">
                      <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-tight text-rose-600">
                        <TrendingDown className="h-3 w-3" />
                        <span>Total Penalty</span>
                      </div>
                      <span className="font-display text-lg font-black text-rose-600 block mt-1">₹20</span>
                    </div>
                  </div>

                  {/* Monthly statement preview below */}
                  <div className="space-y-1.5 mt-2 pt-2 border-t border-slate-100 text-[10px]">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <div>
                        <span className="font-bold text-slate-800 block">Holiday Overtime (2.0x)</span>
                        <span className="text-[8px] text-slate-500">05 Apr 2026</span>
                      </div>
                      <span className="font-mono font-bold text-emerald-700 text-xs">+ ₹2,360</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-rose-50/60 border border-rose-100">
                      <div>
                        <span className="font-bold text-slate-800 block">Late Arrival (18m)</span>
                        <span className="text-[8px] text-slate-500">Grace threshold exceeded</span>
                      </div>
                      <span className="font-mono font-bold text-rose-700 text-xs">- ₹10</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "compliance" && (
                <div className="relative w-full max-w-[320px] rounded-[38px] bg-white border border-slate-200/90 p-4 shadow-2xl text-slate-800">
                  {/* Phone Notch & Status */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5]" />
                      <span className="text-[10px] font-medium text-slate-500">Statutory</span>
                    </div>
                  </div>

                  {/* Header Row */}
                  <div className="pt-2 pb-1 text-xs font-bold text-slate-900">
                    <span>Payroll Management</span>
                  </div>

                  {/* Floating horizontal pill filter bar (Exact screenshot match) */}
                  <div className="flex gap-1 my-2 overflow-x-auto no-scrollbar text-[9px] font-bold">
                    <span className="rounded-full bg-[#12B5A5] text-white px-2.5 py-1 shadow-xs whitespace-nowrap">
                      Off Day Pay
                    </span>
                    <span className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-1 whitespace-nowrap">
                      Adjustment
                    </span>
                    <span className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-1 whitespace-nowrap">
                      Penalties
                    </span>
                    <span className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-1 whitespace-nowrap">
                      Gross Pay
                    </span>
                  </div>

                  {/* Data Table Grid (Exact screenshot match) */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs text-[10px] my-2">
                    <div className="bg-slate-50 px-2.5 py-1.5 border-b border-slate-200/80 flex justify-between font-bold text-slate-600 text-[9px] uppercase tracking-wider">
                      <span>Staff</span>
                      <span>Gross</span>
                      <span>EPF</span>
                      <span>PT</span>
                    </div>
                    <div className="divide-y divide-slate-100 text-[10px]">
                      <div className="px-2.5 py-1.5 flex justify-between items-center hover:bg-slate-50/60">
                        <span className="font-semibold text-slate-800 truncate max-w-[80px]">Asha S.</span>
                        <span className="font-mono text-slate-600">₹40,000</span>
                        <span className="font-mono text-teal-700 font-bold">₹1,800</span>
                        <span className="font-mono text-slate-500">₹200</span>
                      </div>
                      <div className="px-2.5 py-1.5 flex justify-between items-center hover:bg-slate-50/60">
                        <span className="font-semibold text-slate-800 truncate max-w-[80px]">Ramesh K.</span>
                        <span className="font-mono text-slate-600">₹16,500</span>
                        <span className="font-mono text-teal-700 font-bold">₹1,800</span>
                        <span className="font-mono text-slate-500">₹150</span>
                      </div>
                      <div className="px-2.5 py-1.5 flex justify-between items-center hover:bg-slate-50/60">
                        <span className="font-semibold text-slate-800 truncate max-w-[80px]">Deepak V.</span>
                        <span className="font-mono text-slate-600">₹28,000</span>
                        <span className="font-mono text-teal-700 font-bold">₹1,800</span>
                        <span className="font-mono text-slate-500">₹200</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Statutory Status Badge */}
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2 text-center text-[10px] font-bold text-emerald-800">
                    ✓ Electronic EPFO ECR & ESIC Challans Verified
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "geo" && (
                <div className="relative w-full max-w-[320px] rounded-[38px] bg-white border border-slate-200/90 p-4 shadow-2xl text-slate-800">
                  {/* Phone Notch & Status */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5]" />
                      <span className="text-[10px] font-medium text-slate-500">Live GPS</span>
                    </div>
                  </div>

                  {/* Header Row: Calendar View with back and icon controls */}
                  <div className="flex items-center justify-between pt-2 pb-1 text-xs">
                    <div className="flex items-center gap-1 text-slate-800 font-bold">
                      <ChevronLeft className="h-3.5 w-3.5 text-slate-400" />
                      <span>Calendar View</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <FileText className="h-3.5 w-3.5" />
                      <SlidersHorizontal className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Month Selector */}
                  <div className="flex items-center justify-center gap-3 py-1.5 text-xs font-bold text-slate-800">
                    <span className="text-slate-400 cursor-pointer hover:text-slate-700">‹</span>
                    <span>January 2026</span>
                    <span className="text-slate-400 cursor-pointer hover:text-slate-700">›</span>
                  </div>

                  {/* Calendar Grid Header (Sun - Sat) */}
                  <div className="grid grid-cols-7 gap-1 text-center text-[8px] font-bold text-slate-400 uppercase py-1">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>

                  {/* 31-Day Calendar Grid matching screenshot */}
                  <div className="grid grid-cols-7 gap-1 text-[9px] font-semibold text-center pb-2">
                    {/* Row 1 */}
                    <div className="h-6 rounded-md bg-slate-50 text-slate-300 flex items-center justify-center"></div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">1</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">2</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">3</div>
                    <div className="h-6 rounded-md bg-slate-100/70 text-slate-500 flex items-center justify-center">4</div>
                    <div className="h-6 rounded-md bg-slate-100/70 text-slate-500 flex items-center justify-center">5</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">6</div>

                    {/* Row 2 */}
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">7</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">8</div>
                    <div className="h-6 rounded-md bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center relative">
                      9
                      <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    </div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">10</div>
                    <div className="h-6 rounded-md bg-rose-100 text-rose-800 flex items-center justify-center">11</div>
                    <div className="h-6 rounded-md bg-slate-100/70 text-slate-500 flex items-center justify-center">12</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">13</div>

                    {/* Row 3 */}
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">14</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">15</div>
                    <div className="h-6 rounded-md bg-purple-100 text-purple-800 flex items-center justify-center">16</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">17</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">18</div>
                    <div className="h-6 rounded-md bg-slate-100/70 text-slate-500 flex items-center justify-center">19</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">20</div>

                    {/* Row 4 */}
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">21</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">22</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">23</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">24</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">25</div>
                    <div className="h-6 rounded-md bg-slate-100/70 text-slate-500 flex items-center justify-center">26</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">27</div>

                    {/* Row 5 */}
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">28</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">29</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">30</div>
                    <div className="h-6 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">31</div>
                  </div>

                  {/* Calendar Legend below grid */}
                  <div className="flex flex-wrap gap-2 text-[8px] text-slate-500 font-medium justify-center pb-2 border-b border-slate-100">
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> On Leave</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Present</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Absent</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Week off & Holiday</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Half Day</span>
                  </div>

                  {/* Floating Regularization Card (Exact match of screenshot) */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xl -mt-5 relative z-10 space-y-2">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-slate-900">7 Mon</span>
                        <span className="text-[10px] text-slate-500 font-medium">March, 2026</span>
                      </div>
                      <button
                        type="button"
                        className="rounded-full border border-[#12B5A5] text-[#0E7A6E] bg-white hover:bg-teal-50 px-2.5 py-0.5 text-[9px] font-bold transition-colors cursor-pointer"
                      >
                        Withdraw
                      </button>
                    </div>

                    {/* Time comparison row */}
                    <div className="flex items-center justify-between gap-1 text-[10px]">
                      <div className="bg-slate-100 rounded-lg px-2.5 py-1 text-slate-600 font-medium">
                        <span className="text-[8px] text-slate-400 block uppercase">Old</span>
                        <span>10:00 am</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center px-1">
                        <div className="w-full border-t border-dashed border-[#12B5A5]/60 relative flex items-center justify-end">
                          <span className="text-[#12B5A5] -mr-1 font-bold">›</span>
                        </div>
                      </div>
                      <div className="bg-teal-50 border border-teal-200 rounded-lg px-2.5 py-1 text-[#0E7A6E] font-bold">
                        <span className="text-[8px] text-teal-600/70 block uppercase">Updated</span>
                        <span>09:00 am</span>
                      </div>
                    </div>

                    {/* Reason box */}
                    <div className="pt-1 text-[9px] text-slate-500">
                      <span className="font-semibold text-slate-700 block">Reason:</span>
                      <span className="text-slate-600">Came early but forgot to punch</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "reports" && (
                <div className="relative w-full max-w-[320px] rounded-[38px] bg-white border border-slate-200/90 p-4 shadow-2xl text-slate-800">
                  {/* Phone Notch & Status */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">9:41</span>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5]" />
                      <span className="text-[10px] font-medium text-slate-500">Reports</span>
                    </div>
                  </div>

                  {/* Search Bar & Profile Avatar */}
                  <div className="flex items-center gap-2 pt-2 pb-1.5">
                    <div className="flex-1 flex items-center gap-1.5 rounded-xl bg-slate-100/80 px-2.5 py-1.5 text-slate-400 text-[10px]">
                      <Search className="h-3 w-3 text-slate-400" />
                      <span>Search employees</span>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-bold">
                      👤
                    </div>
                  </div>

                  {/* Background summary preview: Today's Insights */}
                  <div className="pt-1 pb-1">
                    <span className="text-[10px] font-bold text-slate-700 block mb-1">Today's Insights</span>
                    <div className="grid grid-cols-2 gap-1.5 opacity-80">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <div>
                          <span className="text-[9px] text-slate-500 block">Working</span>
                          <span className="font-bold text-xs text-slate-800">234</span>
                        </div>
                        <Users className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <div>
                          <span className="text-[9px] text-slate-500 block">On Break</span>
                          <span className="font-bold text-xs text-slate-800">23</span>
                        </div>
                        <Coffee className="h-3.5 w-3.5 text-amber-500" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Donut Chart Card (Exact screenshot match) */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xl space-y-2 relative z-10 my-1">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100 text-[10px]">
                      <div className="flex items-center gap-1 text-slate-700 font-bold">
                        <Calendar className="h-3 w-3 text-teal-600" />
                        <span>31 Feb 2026</span>
                      </div>
                      <div className="flex items-center gap-0.5 rounded-lg border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9px] text-slate-600 font-medium">
                        <span>All Shifts</span>
                        <span className="text-[8px]">▾</span>
                      </div>
                    </div>

                    {/* Donut & Breakdown Grid */}
                    <div className="grid grid-cols-12 gap-2 items-center py-1">
                      <div className="col-span-5 relative flex items-center justify-center">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="36" fill="transparent" stroke="#0284c7" strokeWidth="14" strokeDasharray="136 226" strokeDashoffset="0" />
                          <circle cx="50" cy="50" r="36" fill="transparent" stroke="#f59e0b" strokeWidth="14" strokeDasharray="45 226" strokeDashoffset="-138" />
                          <circle cx="50" cy="50" r="36" fill="transparent" stroke="#ef4444" strokeWidth="14" strokeDasharray="22 226" strokeDashoffset="-185" />
                          <circle cx="50" cy="50" r="36" fill="transparent" stroke="#8b5cf6" strokeWidth="14" strokeDasharray="19 226" strokeDashoffset="-207" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                          <span className="font-display text-sm font-black text-slate-900 leading-none">233</span>
                          <span className="text-[7px] text-slate-500 font-semibold leading-tight mt-0.5">Total Emp.</span>
                        </div>
                      </div>

                      <div className="col-span-7 space-y-1 text-[9px]">
                        <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-sky-50/70 border border-sky-100">
                          <span className="font-bold text-slate-800">24</span>
                          <span className="flex items-center gap-1 text-sky-700 font-medium"><span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" /> On Time</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-rose-50/70 border border-rose-100">
                          <span className="font-bold text-slate-800">2</span>
                          <span className="flex items-center gap-1 text-rose-700 font-medium"><span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" /> Late</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-amber-50/70 border border-amber-100">
                          <span className="font-bold text-slate-800">3</span>
                          <span className="flex items-center gap-1 text-amber-700 font-medium"><span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" /> Not in Yet</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-purple-50/70 border border-purple-100">
                          <span className="font-bold text-slate-800">4</span>
                          <span className="flex items-center gap-1 text-purple-700 font-medium"><span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" /> Leave</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-1 border-t border-slate-100 text-center">
                      <span className="text-[9px] font-bold text-slate-500 flex items-center justify-center gap-1 hover:text-[#0E7A6E] cursor-pointer">
                        <span>Info</span>
                        <Info className="h-2.5 w-2.5" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom Navigation Bar */}
                  <div className="grid grid-cols-4 pt-2.5 mt-2 border-t border-slate-100 text-center text-[8px] text-slate-400 font-medium">
                    <div className="flex flex-col items-center gap-0.5 text-[#12B5A5] font-bold">
                      <span>🏠</span>
                      <span>Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span>📋</span>
                      <span>Approvals</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span>📱</span>
                      <span>Device</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span>🔔</span>
                      <span>Notification</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "admin" && (
                <div className="relative w-full max-w-[320px] rounded-[38px] bg-white border border-slate-200/90 p-4 shadow-2xl text-slate-800">
                  {/* Phone Notch & Status */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">9:41</span>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span className="text-[10px] font-medium text-slate-500">Admin</span>
                    </div>
                  </div>

                  {/* Search Bar & Profile Avatar */}
                  <div className="flex items-center gap-2 pt-2 pb-1.5">
                    <div className="flex-1 flex items-center gap-1.5 rounded-xl bg-slate-100/80 px-2.5 py-1.5 text-slate-400 text-[10px]">
                      <Search className="h-3 w-3 text-slate-400" />
                      <span>Search employees</span>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-bold">
                      👤
                    </div>
                  </div>

                  {/* Floating 4-Tile Insights Grid (Exact screenshot match) */}
                  <div className="grid grid-cols-2 gap-2 my-1.5">
                    <div className="rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-slate-500 font-medium block">Working</span>
                        <span className="font-display text-base font-black text-slate-900 block leading-tight">234</span>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <Users className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-slate-500 font-medium block">On Break</span>
                        <span className="font-display text-base font-black text-slate-900 block leading-tight">23</span>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                        <Coffee className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-slate-500 font-medium block">Time Off</span>
                        <span className="font-display text-base font-black text-slate-900 block leading-tight">23</span>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                        <Palmtree className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-slate-500 font-medium block">Biometrics Left</span>
                        <span className="font-display text-base font-black text-slate-900 block leading-tight">12</span>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                        <Fingerprint className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Donut chart card below */}
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-2.5 my-1.5 space-y-1.5">
                    <div className="flex items-center justify-between text-[9px] text-slate-600">
                      <span className="font-bold">📅 31 Feb 2026</span>
                      <span className="rounded bg-white border border-slate-200 px-1.5 py-0.5">All Shifts ▾</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="relative flex items-center justify-center">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="36" fill="transparent" stroke="#0284c7" strokeWidth="14" strokeDasharray="136 226" strokeDashoffset="0" />
                          <circle cx="50" cy="50" r="36" fill="transparent" stroke="#f59e0b" strokeWidth="14" strokeDasharray="45 226" strokeDashoffset="-138" />
                          <circle cx="50" cy="50" r="36" fill="transparent" stroke="#ef4444" strokeWidth="14" strokeDasharray="22 226" strokeDashoffset="-185" />
                          <circle cx="50" cy="50" r="36" fill="transparent" stroke="#8b5cf6" strokeWidth="14" strokeDasharray="19 226" strokeDashoffset="-207" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                          <span className="font-display text-xs font-black text-slate-900 leading-none">233</span>
                          <span className="text-[6px] text-slate-500 font-semibold leading-tight">Total Emp.</span>
                        </div>
                      </div>
                      <div className="space-y-0.5 text-[8px]">
                        <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" /> 24 On Time</div>
                        <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" /> 2 Late</div>
                        <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" /> 3 Not in Yet</div>
                        <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" /> 4 Leave</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation Bar */}
                  <div className="grid grid-cols-4 pt-2 border-t border-slate-100 text-center text-[8px] text-slate-400 font-medium">
                    <div className="flex flex-col items-center gap-0.5 text-[#12B5A5] font-bold">
                      <span>🏠</span>
                      <span>Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span>📋</span>
                      <span>Approvals</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span>📱</span>
                      <span>Device</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span>🔔</span>
                      <span>Notification</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Stacked Value Cards */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {activeFeature.cards.map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-[#12B5A5] hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {c.linkText && c.desc.includes(c.linkText) ? (
                      <>
                        {c.desc.split(c.linkText)[0]}
                        <Link
                          href={c.linkHref || "/book-demo"}
                          className="text-[#0E7A6E] font-semibold underline decoration-[#12B5A5]/60 hover:text-[#12B5A5] transition-colors"
                        >
                          {c.linkText}
                        </Link>
                        {c.desc.split(c.linkText)[1]}
                      </>
                    ) : (
                      c.desc
                    )}
                  </p>
                  {c.linkHref && (
                    <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={c.linkHref}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12B5A5] hover:text-[#0E7A6E] transition-colors"
                      >
                        <span>Explore {c.title}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
