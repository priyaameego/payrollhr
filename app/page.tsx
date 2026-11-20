"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Smartphone,
  Users,
  Clock,
  Sparkles,
  ChevronDown,
  Building,
  Calculator,
  Lock,
  Layers,
  FileSpreadsheet,
  CalendarCheck,
  Receipt,
  ScanFace,
  Award,
  Phone,
  MessageCircle,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { productGroups, groupMeta, contactDetails } from "@/data/navigation";
import { FeatureIcon } from "@/components/IconHelper";
import HeroShowcaseSlider from "@/components/HeroShowcaseSlider";
import featuresData from "@/data/features.json";
import solutionsData from "@/data/solutions.json";
import toolsData from "@/data/tools.json";

export default function HomePage() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeGroup = productGroups[activeTabIdx];
  const activeMeta = groupMeta[activeGroup.title];

  // Top homepage FAQ items
  const homepageFaqs = [
    {
      q: "Who is PayroleHR for?",
      a: "Schools, colleges, corporate offices, factories, hospitals and retail businesses in India with 15 to 1,000+ staff who want attendance, leave and payroll to work together without spreadsheets.",
    },
    {
      q: "Do we need special attendance hardware?",
      a: "No. Any standard Android tablet or iPad can be used as a face-attendance kiosk at your gate or reception. Staff can also check in from their own mobile phones with GPS geofencing.",
    },
    {
      q: "Can we keep our existing salary structure?",
      a: "Yes. PayroleHR does not force a fixed layout. You define your own salary heads, earnings, deductions, formulas, allowances and rounding rules.",
    },
    {
      q: "Can staff use it on their phones?",
      a: "Yes. The staff self-service portal works on any phone browser and can be added to the home screen like an app. Staff sign in with their mobile number and OTP.",
    },
    {
      q: "Can we import our current staff list?",
      a: "Yes. You can upload an Excel spreadsheet of your employees. The system validates every column, checks for duplicate mobile/PAN/bank numbers, and highlights any errors before saving.",
    },
    {
      q: "How do we get started?",
      a: "Book a demo. We will show you PayroleHR configured with your organisation's shift timings, salary components and attendance rules.",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative pt-6 sm:pt-12 pb-16 overflow-hidden">
        {/* Soft background cyan/mint gradient mesh */}
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#8FE8DC]/30 via-[#12B5A5]/15 to-transparent blur-3xl"
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Hero Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8FE8DC]/80 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
                HR, Payroll & Face Attendance
              </div>

              <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-[1.1]">
                From morning check-in to{" "}
                <span className="bg-gradient-to-r from-[#12B5A5] to-[#0E9486] bg-clip-text text-transparent">
                  month-end bank file
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0">
                Face check-in at the door or on the phone, leave and overtime calculated automatically, your own salary structures, and bank transfer files generated in one click.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/book-a-demo"
                  className="shimmer-pill rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/25 hover:from-[#0E9486] hover:to-[#0B7A6E] hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
                >
                  Book a demo
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-teal-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:border-teal-300 hover:bg-teal-50/50 hover:text-[#12B5A5] transition-all flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 text-[#12B5A5]" />
                  WhatsApp us
                </a>

                <Link
                  href="/features"
                  className="rounded-full px-5 py-3.5 text-sm font-semibold text-slate-600 hover:text-[#12B5A5] transition-colors"
                >
                  Explore 34 features →
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-500 border-t border-slate-200/60 pt-6">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                  <span>Indian statutory compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                  <span>No proprietary biometric devices</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                  <span>Self-service mobile portal</span>
                </div>
              </div>
            </div>

            {/* Right Animated BambooHR-Inspired Interactive Showcase Hero Card */}
            <div className="relative">
              <HeroShowcaseSlider />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIVE MARQUEE TICKER (AttendoHR Style Animation) */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden border-y border-teal-100/80 bg-gradient-to-r from-teal-50/50 via-white to-emerald-50/50 py-3.5 shadow-xs">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-bold text-slate-700">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            150+ Indian Organisations Active
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            <ScanFace className="h-4 w-4 text-[#12B5A5]" />
            0.18s AI Face Match Speed
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            🏦 1-Click Bank Payouts: HDFC CMS, ICICI, SBI, Axis
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            🛡️ 100% PF, ESIC, PT & TDS Compliant
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            📱 WhatsApp Payslip Delivery in 1 Click
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            📍 GPS Geofenced Mobile Punch with Anti-Spoof
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            ⚡ Zero Biometric Machine Maintenance
          </span>
          <span className="text-teal-300">•</span>

          {/* Seamless duplicate for continuous loop */}
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            150+ Indian Organisations Active
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            <ScanFace className="h-4 w-4 text-[#12B5A5]" />
            0.18s AI Face Match Speed
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            🏦 1-Click Bank Payouts: HDFC CMS, ICICI, SBI, Axis
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            🛡️ 100% PF, ESIC, PT & TDS Compliant
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            📱 WhatsApp Payslip Delivery in 1 Click
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            📍 GPS Geofenced Mobile Punch with Anti-Spoof
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            ⚡ Zero Biometric Machine Maintenance
          </span>
          <span className="text-teal-300">•</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. STATUTORY STRIP */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/70 bg-gradient-to-r from-white via-[#F0FDFB] to-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="attendo-card attendo-card-hover group flex items-start gap-3.5 p-4 bg-white">
              <div className="attendo-icon-box h-11 w-11 shrink-0">
                <Receipt className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 text-hover-lux">Indian Payroll</h4>
                <p className="text-xs text-slate-500 mt-0.5">PF, ESI, Professional Tax, TDS</p>
              </div>
            </div>

            <div className="attendo-card attendo-card-hover group flex items-start gap-3.5 p-4 bg-white">
              <div className="attendo-icon-box h-11 w-11 shrink-0">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 text-hover-lux">Universal Access</h4>
                <p className="text-xs text-slate-500 mt-0.5">Works on any phone, tablet or laptop</p>
              </div>
            </div>

            <div className="attendo-card attendo-card-hover group flex items-start gap-3.5 p-4 bg-white">
              <div className="attendo-icon-box h-11 w-11 shrink-0">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 text-hover-lux">Isolated Data</h4>
                <p className="text-xs text-slate-500 mt-0.5">Each organisation kept completely separate</p>
              </div>
            </div>

            <div className="attendo-card attendo-card-hover group flex items-start gap-3.5 p-4 bg-white">
              <div className="attendo-icon-box h-11 w-11 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 text-hover-lux">Audit Logged</h4>
                <p className="text-xs text-slate-500 mt-0.5">Every punch, edit and approval tracked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. THE PROBLEMS WE REMOVE */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Why Switch to PayroleHR
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
            The problems HR teams tell us about
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            If any of these sound familiar, they are exactly what PayroleHR is built to remove.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Registers and Excel",
              text: "Attendance in a physical book, salaries in an Excel sheet, and days spent typing and adding them up every month.",
            },
            {
              title: "Payroll mistakes",
              text: "One broken Excel formula or a missed leave day discovered only after salaries have already been transferred.",
            },
            {
              title: "Rules applied unevenly",
              text: "Late marks, half days, grace minutes and overtime decided differently by different supervisors each time.",
            },
            {
              title: "Endless staff questions",
              text: '"How much leave do I have left?" "Where is my salary slip?" — answering the same questions every single week.',
            },
            {
              title: "Typing bank files",
              text: "Manually copying hundreds of account numbers and net pay amounts into your bank portal's bulk transfer template.",
            },
            {
              title: "Software that doesn't fit",
              text: "Rigid software that forces standard corporate structures onto schools, factories, hospitals and local businesses.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="attendo-card attendo-card-hover group p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-200/80 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <XCircle className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 text-hover-lux group-hover:text-rose-600">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CONNECTED FLOW PIPELINE */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/90 bg-gradient-to-b from-[#F0FDFB] to-white p-8 sm:p-12 shadow-card">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">
              Seamless Integration
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950">
              One connected flow, no re-typing
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Each step feeds the next: shifts decide attendance status, attendance and leave decide paid days, and payroll turns them into payslips and the bank file.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { label: "1. Staff records", sub: "Profiles & fields", icon: Users },
              { label: "2. Shifts", sub: "Timings & roster", icon: Clock },
              { label: "3. Face check-in", sub: "Gate / Phone", icon: ScanFace },
              { label: "4. Leave", sub: "Balances & approvals", icon: CalendarCheck },
              { label: "5. Payroll", sub: "Formulas & lock", icon: Calculator },
              { label: "6. Bank transfer", sub: "File & payslips", icon: Receipt },
              { label: "7. Reports", sub: "Excel export", icon: FileSpreadsheet },
            ].map((step, idx) => (
              <div
                key={idx}
                className="attendo-card attendo-card-hover group flex flex-col items-center text-center p-3.5 bg-white"
              >
                <div className="attendo-icon-box h-11 w-11 mb-2 shrink-0">
                  <step.icon className="h-5 w-5 stroke-[2.2]" />
                </div>
                <span className="text-xs font-bold text-slate-900 text-hover-lux">{step.label}</span>
                <span className="text-[11px] text-slate-500 mt-0.5">{step.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. EVERYTHING IN ONE PLACE - TABBED SHOWCASE */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Complete Product Suite
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Everything HR and payroll, in one place
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Five parts that work together, from the first day of a new joiner to the month-end bank file.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
          {productGroups.map((group, idx) => (
            <button
              key={group.title}
              type="button"
              onClick={() => setActiveTabIdx(idx)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeTabIdx === idx
                  ? "shimmer-pill bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-white shadow-md shadow-teal-500/25 scale-105"
                  : "bg-white text-slate-600 hover:bg-teal-50/70 hover:text-[#12B5A5] border border-slate-200/80"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content Card */}
        <div key={activeGroup.title} className="mt-8 attendo-card p-6 sm:p-10 shadow-card animate-in fade-in zoom-in-98 duration-200">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left points */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                {activeGroup.title} Overview
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-950">
                {activeMeta.headline}
              </h3>

              <ul className="mt-6 space-y-3.5">
                {activeMeta.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#12B5A5] mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`/features/${activeMeta.lead}`}
                  className="rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
                >
                  Learn more about {activeGroup.title}
                </Link>
                <Link
                  href="/features"
                  className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  See all features
                </Link>
              </div>
            </div>

            {/* Right Screen Mockup */}
            <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-teal-100/80 pb-3">
                <span className="font-display text-sm font-bold text-slate-900">
                  {activeGroup.title} Records
                </span>
                <span className="rounded-full bg-[#E6F9F6] px-2.5 py-0.5 text-xs font-bold text-[#0E7A6E]">
                  Sample view
                </span>
              </div>
              <div className="mt-4 divide-y divide-teal-100/60">
                {activeMeta.mock.map(([k, v], idx) => (
                  <div key={idx} className="flex justify-between py-2.5 text-sm">
                    <span className="text-slate-600">{k}</span>
                    <span className="font-semibold text-slate-900 bg-white px-2.5 py-0.5 rounded border border-teal-100">
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Sub-features pills */}
              <div className="mt-6 pt-4 border-t border-teal-100/80">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Included capabilities:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeGroup.items.map((slug) => {
                    const f = featuresData.find((item: any) => item.slug === slug);
                    return (
                      <Link
                        key={slug}
                        href={`/features/${slug}`}
                        className="rounded-lg bg-white border border-teal-100 px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-[#12B5A5] hover:text-[#12B5A5] transition-colors"
                      >
                        {f?.name || slug}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CONFIGURABLE RULES */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/80 bg-white p-8 sm:p-12 shadow-card">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Built For Flexibility
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950">
              Set up the way your organisation already works
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              No two organisations calculate salaries or track late marks identically. We turn your handbook rules into software settings.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Custom salary columns",
                desc: "Define your own earnings and deductions: allowances, arrears, performance incentives and loan recoveries.",
              },
              {
                title: "Grace time & shifts",
                desc: "Configure 15, 30 or custom grace minutes, multiple shifts, rotational rosters and half-day thresholds.",
              },
              {
                title: "Leave accrual rules",
                desc: "Set monthly accrual rates, opening balances, carry-forward caps and sandwich leave policies.",
              },
              {
                title: "Multi-stage approvals",
                desc: "Department head approval -> HR verification -> Accounts sign-off before payroll is locked.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="attendo-card attendo-card-hover group p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="attendo-icon-box h-11 w-11 shrink-0 mb-4">
                    <CheckCircle2 className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base text-hover-lux">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. INDUSTRY SOLUTIONS GRID */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Tailored Industry Workflows
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Built for many kinds of organisations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Different industries have different shift patterns and payroll regulations. See how PayroleHR configures for yours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionsData.map((sol: any) => (
            <Link
              key={sol.slug}
              href={`/solutions/${sol.slug}`}
              className="attendo-card attendo-card-hover group p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="attendo-icon-box h-12 w-12 shrink-0">
                  <FeatureIcon slug={sol.slug} className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 text-hover-lux">
                  {sol.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {sol.short}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5] group-hover:text-[#0E7A6E] transition-colors">
                <span className="text-hover-lux font-bold">Explore solution</span>
                <ArrowRight className="h-4 w-4 arrow-hover-lux" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. TWO EXPERIENCES */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/90 bg-gradient-to-r from-white via-[#F0FDFB] to-white p-8 sm:p-12 shadow-card">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">
              User-Centric Architecture
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950">
              One system, two experiences
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Experience 1: Admin */}
            <div className="attendo-card attendo-card-hover group p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                  <div className="attendo-icon-box h-12 w-12 shrink-0">
                    <Building className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 text-hover-lux">
                      For HR, Accounts and Management
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Full administrative control</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Bulk import employees from Excel with error checks</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Lock attendance and run payroll in under five minutes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Generate bank salary transfer files in your bank&apos;s format</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Complete audit log of every change, revision and sign-off</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2: Employee */}
            <div className="attendo-card attendo-card-hover group p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                  <div className="attendo-icon-box h-12 w-12 shrink-0">
                    <Smartphone className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 text-hover-lux">
                      For Employees & Staff
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Mobile-first self-service portal</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Instant sign-in with mobile OTP — no passwords to remember</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Face check-in from their own phones with geofencing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Download salary payslips and view live leave balances</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Submit leave applications and regularisation requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. CONTROL AND SECURITY */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Enterprise Governance
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Control over who sees what
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Keep sensitive salary data confidential with granular roles and strict privacy boundaries.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Separate organisations",
              desc: "Manage multiple entities, schools or branches with strictly isolated data.",
            },
            {
              title: "Roles and permissions",
              desc: "Assign custom roles. Department heads see only their department's staff.",
            },
            {
              title: "Full audit log",
              desc: "Every record edit, salary modification, punch update and export is timestamped.",
            },
            {
              title: "Private files",
              desc: "Staff documents and payslips are stored securely with encrypted access tokens.",
            },
            {
              title: "PIN-protected face enrolment",
              desc: "Adding new staff face profiles requires administrative authorization.",
            },
            {
              title: "OTP sign-in for staff",
              desc: "One-time mobile passcode eliminates shared credentials and phishing risks.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="attendo-card attendo-card-hover group p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="attendo-icon-box h-12 w-12 shrink-0">
                  <ShieldCheck className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-slate-900 text-hover-lux">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. FREE CALCULATORS SHOWCASE */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Free Utility Suite
            </span>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-slate-950">
              Free HR & payroll calculators
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Instant tools with transparent formulas. Use them freely, with no sign-up.
            </p>
          </div>
          <Link
            href="/free-tools"
            className="text-sm font-bold text-[#12B5A5] hover:underline flex items-center gap-1 shrink-0"
          >
            All 9 calculators →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {toolsData.slice(0, 6).map((tool: any) => (
            <Link
              key={tool.slug}
              href={`/free-tools/${tool.slug}`}
              className="rounded-3xl border border-[#8FE8DC]/80 bg-white p-7 shadow-sm hover:shadow-xl hover:border-[#12B5A5] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FAF7] border border-[#8FE8DC]/60 text-[#12B5A5]">
                    <FeatureIcon slug={tool.slug} className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <span className="rounded-full bg-[#E8FAF7] border border-[#8FE8DC] px-3.5 py-1 text-xs font-semibold text-[#0E7A6E]">
                    {tool.category}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-[#0E7A6E] group-hover:text-[#12B5A5] transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {tool.short}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E7A6E] group-hover:text-[#12B5A5] transition-colors">
                <span>Open calculator</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FAQ ACCORDION */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Answers to Common Queries
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {homepageFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#12B5A5] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 text-[#12B5A5] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-sm font-semibold text-[#12B5A5] hover:underline"
          >
            Have more questions? Read our full FAQ page →
          </Link>
        </div>
      </section>
    </div>
  );
}
