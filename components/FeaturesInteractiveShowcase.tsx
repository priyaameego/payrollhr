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
    title: "Shifts & Roster Management",
    headline: "Rosters That Directly Decide Salaries",
    description:
      "Plan rotating, night, split, and flexi shifts without spreadsheets. Shift timings decide punch validity, grace minutes, and overtime automatically.",
    icon: CalendarDays,
    mockup: { type: "shift" },
    cards: [
      {
        title: "Rotational Shift Automation",
        desc: "Define shift patterns once. The system auto-rotates employees weekly or fortnightly across Morning, General, and Night shifts with zero manual hassle.",
        linkText: "automated shift scheduling",
        linkHref: "/features/shift-management",
      },
      {
        title: "1-Tap Shift Swap Approvals",
        desc: "Staff request swaps on their self-service app; managers approve in 1 tap without breaking attendance tracking or payroll formulas.",
        linkText: "manager shift approvals",
        linkHref: "/features/roster-management",
      },
    ],
  },
  {
    id: "leaves",
    num: "03",
    tabLabel: "Leave & Holidays",
    subHeader: "03 – FEATURE",
    title: "Leave & Holidays",
    headline: "Clear Leave Balances & Instant Approvals",
    description:
      "Requests, approvals, and balances in one place. Approved leaves feed directly into monthly paid days with zero recalculation or manual paperwork.",
    icon: Calendar,
    mockup: { type: "leave" },
    cards: [
      {
        title: "Tenure-Based Auto Accrual",
        desc: "Paid, casual, and sick leave balances accrue automatically on the 1st of every month based on probation rules and company policy.",
        linkText: "leave accrual & encashment",
        linkHref: "/features/leave-management",
      },
      {
        title: "Multi-Location Holiday Calendars",
        desc: "Manage state-specific festival holidays for corporate offices, retail stores, and factory units under isolated branch calendars.",
        linkText: "state holiday setup",
        linkHref: "/features/advanced-leave-management",
      },
    ],
  },
  {
    id: "payroll",
    num: "04",
    tabLabel: "Payroll & Payout",
    subHeader: "04 – FEATURE",
    title: "Payroll & Payout",
    headline: "Salaries Computed and Paid Out in 1 Click",
    description:
      "Shifts, approved leaves, and biometric punches convert automatically into error-free salary slips, statutory challans, and 1-click bank transfer files.",
    icon: Receipt,
    mockup: { type: "payroll" },
    cards: [
      {
        title: "1-Click Direct Bank Transfer (CMS)",
        desc: "Download pre-validated bulk transfer files formatted for HDFC CMS, ICICI, SBI, Axis, and Kotak Mahindra corporate net banking portals.",
        linkText: "bank CMS transfer export",
        linkHref: "/features/bank-salary-export",
      },
      {
        title: "WhatsApp & Email Payslips",
        desc: "Distribute password-protected PDF payslips directly to employees' WhatsApp numbers and emails with one single click.",
        linkText: "automated payslip delivery",
        linkHref: "/features/payslip-management",
      },
    ],
  },
  {
    id: "overtime",
    num: "05",
    tabLabel: "Overtime & Penalties",
    subHeader: "05 – FEATURE",
    title: "Overtime & Penalties",
    headline: "Fair, Transparent, and Automated Wage Rules",
    description:
      "Never argue over overtime or late marks again. Configurable grace times, late arrival fines, half-day deductions, and overtime multipliers run automatically.",
    icon: Scale,
    mockup: { type: "overtime" },
    cards: [
      {
        title: "Configurable Grace Windows",
        desc: "Allow a 15-minute grace window before late penalty marks kick in, and enforce rules like '3 late marks = 1 half-day deduction' seamlessly.",
        linkText: "configurable penalty rules",
        linkHref: "/features/configurable-rules",
      },
      {
        title: "Custom Overtime Multipliers",
        desc: "Set distinct overtime rates for regular workdays (1.5x), weekly offs (2.0x), and national holidays (2.5x) with supervisor approval locks.",
        linkText: "overtime calculations",
        linkHref: "/features/payroll-processing",
      },
    ],
  },
  {
    id: "compliance",
    num: "06",
    tabLabel: "Compliance",
    subHeader: "06 – FEATURE",
    title: "100% Indian Statutory Compliance",
    headline: "PF, ESIC, Professional Tax & TDS Compliant",
    description:
      "Stay 100% compliant with central and state labour laws. Auto-generate EPFO ECR text files, ESIC returns, state PT slabs, and Form 16 TDS sheets.",
    icon: ShieldCheck,
    mockup: { type: "compliance" },
    cards: [
      {
        title: "EPFO ECR Text File Ready",
        desc: "Generate the exact electronic return file ready to upload directly to the EPFO Unified Portal without manual Excel editing.",
        linkText: "statutory challans & ECR",
        linkHref: "/features/payroll-management",
      },
      {
        title: "State-wise Professional Tax Slabs",
        desc: "Auto-detects employee work locations and applies exact PT deduction slabs for Karnataka, Maharashtra, West Bengal, Telangana, and Delhi.",
        linkText: "statutory compliance engine",
        linkHref: "/features/salary-structure-management",
      },
    ],
  },
  {
    id: "geotrack",
    num: "07",
    tabLabel: "Geo Track",
    subHeader: "07 – FEATURE",
    title: "Geo Track & Mobile Check-in",
    headline: "Field Staff Attendance With Location Proof",
    description:
      "Field sales, delivery, and remote site workers mark attendance directly from their mobile phones with 50m geofencing and anti-spoof selfie capture.",
    icon: MapPin,
    mockup: { type: "geo" },
    cards: [
      {
        title: "Anti-Mock Location Guard",
        desc: "Blocks fake GPS apps, spoofed Wi-Fi coordinates, and developer mode mock locations at the device level before the punch is accepted.",
        linkText: "GPS geofence anti-spoof",
        linkHref: "/features/geo-fencing-attendance",
      },
      {
        title: "Client Visit Stamping & Travel Claims",
        desc: "Track client meeting locations, calculate odometer distance traveled, and automatically approve travel allowance claims.",
        linkText: "field staff tracking",
        linkHref: "/features/employee-self-service",
      },
    ],
  },
  {
    id: "reports",
    num: "08",
    tabLabel: "Reports",
    subHeader: "08 – FEATURE",
    title: "Reports & Analytics",
    headline: "Every Register and Audit Report in One Click",
    description:
      "Instant access to muster rolls, salary registers, attendance summaries, and cost reports formatted to pass labour inspections without stress.",
    icon: BarChart3,
    mockup: { type: "reports" },
    cards: [
      {
        title: "Labour Law Form T & Muster Rolls",
        desc: "Download Form T, Form Q, Form A, and muster rolls with exact statutory column headers matching state inspection guidelines.",
        linkText: "government format registers",
        linkHref: "/features/reports-analytics",
      },
      {
        title: "Departmental Cost Distribution",
        desc: "Interactive visual charts showing total wage bill per department, overtime trends, and absenteeism rates across branch locations.",
        linkText: "analytics & audit reports",
        linkHref: "/features/payroll-reports",
      },
    ],
  },
  {
    id: "admin",
    num: "09",
    tabLabel: "Admin Control",
    subHeader: "09 – FEATURE",
    title: "Admin & Branch Role Control",
    headline: "Granular Permissions & Multi-Branch Access",
    description:
      "Keep corporate offices, retail stores, and factory units isolated. Give branch managers, HR, and accountants access only to their relevant data.",
    icon: Lock,
    mockup: { type: "admin" },
    cards: [
      {
        title: "Multi-Branch Data Isolation",
        desc: "Branch managers only see their branch staff, while executive owners get consolidated enterprise analytics under one master login.",
        linkText: "branch role management",
        linkHref: "/features/organization-management",
      },
      {
        title: "Tamper-Proof Audit Trail",
        desc: "Every manual punch adjustment, salary revision, and rule override is permanently logged with IP, user name, and timestamp.",
        linkText: "audit logs & security",
        linkHref: "/features/employee-database",
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
    const found = featuresList.findIndex(
      (f) => f.id === initialId || initialId.includes(f.id) || f.id.includes(initialId)
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

            <nav className="flex flex-col gap-1.5" aria-label="Features Tab Navigation">
              {featuresList.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`group flex items-center gap-3.5 rounded-2xl px-4 py-3 text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-teal-50 via-teal-50/70 to-emerald-50/40 text-[#0E7A6E] font-bold shadow-xs border-l-4 border-[#12B5A5]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent"
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
                    <span className="text-sm font-semibold leading-tight">
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
        <div className={`${hideSidebar ? "w-full" : "lg:col-span-9"} rounded-3xl border border-teal-100/90 bg-gradient-to-b from-[#FAFDFD] via-white to-white p-6 sm:p-10 shadow-card`}>
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
                <div className="relative w-full max-w-[320px] rounded-3xl bg-white border border-slate-200 p-4 shadow-xl">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                    <span className="font-display text-xs font-bold text-slate-900">Weekly Shift Schedule</span>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                      Auto-Rostered
                    </span>
                  </div>
                  <div className="space-y-2 mt-3 text-xs">
                    <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 flex justify-between items-center">
                      <div>
                        <span className="font-bold text-slate-900 block">Morning Shift</span>
                        <span className="text-[10px] text-slate-500">06:00 AM – 02:00 PM</span>
                      </div>
                      <span className="text-[10px] font-bold text-teal-800 bg-white px-2 py-1 rounded-md shadow-2xs">
                        32 Staff
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex justify-between items-center">
                      <div>
                        <span className="font-bold text-slate-900 block">General Shift</span>
                        <span className="text-[10px] text-slate-500">09:30 AM – 06:30 PM</span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-800 bg-white px-2 py-1 rounded-md shadow-2xs">
                        78 Staff
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 flex justify-between items-center">
                      <div>
                        <span className="font-bold text-slate-900 block">Night Shift (+Allowance)</span>
                        <span className="text-[10px] text-slate-500">10:00 PM – 06:00 AM</span>
                      </div>
                      <span className="text-[10px] font-bold text-indigo-800 bg-white px-2 py-1 rounded-md shadow-2xs">
                        24 Staff
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "leave" && (
                <div className="relative w-full max-w-[320px] rounded-3xl bg-white border border-slate-200 p-4 shadow-xl">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                    <span className="font-display text-xs font-bold text-slate-900">Leave Balance • FY 26-27</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 my-3">
                    <div className="rounded-xl bg-teal-50 p-2.5 text-center border border-teal-100">
                      <span className="text-[10px] text-slate-500 block font-medium">Vacation</span>
                      <span className="font-display text-lg font-black text-[#0E7A6E]">14.5 d</span>
                    </div>
                    <div className="rounded-xl bg-emerald-50 p-2.5 text-center border border-emerald-100">
                      <span className="text-[10px] text-slate-500 block font-medium">Sick / Casual</span>
                      <span className="font-display text-lg font-black text-emerald-700">8.0 d</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block">
                      Pending Approvals
                    </span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-bold text-slate-800">Vikram Mehta (3d)</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-white border border-emerald-200 px-2 py-0.5 rounded">
                        ✓ Approved
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "payroll" && (
                <div className="relative w-full max-w-[320px] rounded-3xl bg-white border border-slate-200 p-4 shadow-xl">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                    <span className="font-display text-xs font-bold text-slate-900">April 2026 Payroll Run</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      100% Processed
                    </span>
                  </div>
                  <div className="my-3 space-y-2 text-xs">
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Employees Processed:</span>
                      <span className="font-bold text-slate-900">148 / 148</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Gross Salary:</span>
                      <span className="font-bold text-slate-900">₹68,45,200</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Total Statutory (PF+ESI+PT):</span>
                      <span className="font-bold text-rose-600">-₹9,52,800</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-slate-100 pt-2 font-bold text-sm text-slate-900">
                      <span>Net Payout:</span>
                      <span className="font-mono text-emerald-700">₹58,92,400</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] p-2 text-center text-white text-[11px] font-bold shadow-md">
                    ✓ HDFC CMS Bulk File Ready
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "overtime" && (
                <div className="relative w-full max-w-[320px] rounded-3xl bg-white border border-slate-200 p-4 shadow-xl text-xs">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                    <span className="font-display text-xs font-bold text-slate-900">Overtime & Late Audit</span>
                    <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      1.5x Multiplier
                    </span>
                  </div>
                  <div className="my-3 space-y-2">
                    <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>Ramesh Kumar (Operator)</span>
                        <span className="text-indigo-600">+₹485</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-0.5">2h 15m Overtime approved</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>Late Arrival: 12 mins</span>
                        <span className="text-emerald-700">Grace (₹0)</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Within 15-min company grace window</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "compliance" && (
                <div className="relative w-full max-w-[320px] rounded-3xl bg-white border border-slate-200 p-4 shadow-xl text-xs">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                    <span className="font-display text-xs font-bold text-slate-900">Statutory Compliance</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      ✓ 100% Compliant
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 my-3">
                    <div className="rounded-xl bg-teal-50 p-2 text-center border border-teal-100">
                      <span className="text-[10px] text-slate-500 block">EPF Contribution</span>
                      <span className="font-bold text-slate-800 text-xs">₹1,800 Capped</span>
                    </div>
                    <div className="rounded-xl bg-blue-50 p-2 text-center border border-blue-100">
                      <span className="text-[10px] text-slate-500 block">ESIC 4% (0.75+3.25)</span>
                      <span className="font-bold text-slate-800 text-xs">Auto-Filed</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2 text-center text-[10px] font-bold text-emerald-800">
                    EPFO ECR Text Challan Ready for Upload
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "geo" && (
                <div className="relative w-full max-w-[320px] rounded-3xl bg-white border border-slate-200 p-4 shadow-xl text-xs">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                    <span className="font-display text-xs font-bold text-slate-900">Mobile Geofence & Selfie</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      50m Radius
                    </span>
                  </div>
                  <div className="relative aspect-[16/9] w-full rounded-2xl bg-teal-900/10 border border-teal-200 my-3 flex flex-col items-center justify-center p-2 text-center">
                    <MapPin className="h-6 w-6 text-[#12B5A5] animate-bounce" />
                    <span className="text-[11px] font-bold text-slate-800 mt-1">Bangalore Central Office</span>
                    <span className="text-[9px] text-slate-500">Within 18m of coordinates • Verified</span>
                  </div>
                  <div className="rounded-xl bg-slate-900 text-white p-2 text-center text-[10px] font-bold">
                    ✓ Anti-Spoof Liveness Confirmed
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "reports" && (
                <div className="relative w-full max-w-[320px] rounded-3xl bg-white border border-slate-200 p-4 shadow-xl text-xs">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                    <span className="font-display text-xs font-bold text-slate-900">Statutory Registers</span>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                      1-Click Export
                    </span>
                  </div>
                  <div className="space-y-2 my-3">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-800">Form T Combined Register</span>
                      <Download className="h-3.5 w-3.5 text-teal-600" />
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-800">Monthly Muster Roll</span>
                      <Download className="h-3.5 w-3.5 text-teal-600" />
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-800">Bank CMS Bulk File (CSV)</span>
                      <Download className="h-3.5 w-3.5 text-teal-600" />
                    </div>
                  </div>
                </div>
              )}

              {activeFeature.mockup.type === "admin" && (
                <div className="relative w-full max-w-[320px] rounded-3xl bg-white border border-slate-200 p-4 shadow-xl text-xs">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                    <span className="font-display text-xs font-bold text-slate-900">Branch Permissions</span>
                    <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">
                      Multi-Branch
                    </span>
                  </div>
                  <div className="space-y-2 my-3">
                    <div className="p-2 rounded-xl bg-purple-50/60 border border-purple-100">
                      <span className="font-bold text-slate-900 block">Branch Manager</span>
                      <span className="text-[10px] text-slate-500">Approve leaves & shifts for Factory Unit 1</span>
                    </div>
                    <div className="p-2 rounded-xl bg-teal-50/60 border border-teal-100">
                      <span className="font-bold text-slate-900 block">Payroll Accountant</span>
                      <span className="text-[10px] text-slate-500">Compute payout & export bank files</span>
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
