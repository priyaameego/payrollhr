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

            {/* Right Live Interactive Mockup Hero Card */}
            <div className="relative">
              {/* Floating Badge 1: Top-right face scan pill */}
              <div className="animate-float absolute -top-5 -right-3 z-10 hidden sm:flex items-center gap-2 rounded-2xl border border-teal-200/90 bg-white/95 px-3.5 py-2 shadow-lg shadow-teal-500/10 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">Face Scan: 0.18s Match</span>
              </div>

              {/* Floating Badge 2: Bottom-left salary payout pill */}
              <div className="animate-float-delayed absolute -bottom-5 -left-3 z-10 hidden sm:flex items-center gap-2 rounded-2xl border border-teal-200/90 bg-white/95 px-3.5 py-2 shadow-lg shadow-teal-500/10 backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-50 text-[#12B5A5] font-bold text-xs">₹</span>
                <span className="text-xs font-bold text-slate-800">Bank File Ready (HDFC CMS)</span>
              </div>

              {/* Soft teal glow */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-[#12B5A5]/25 via-[#8FE8DC]/20 to-transparent blur-3xl pointer-events-none" />

              <div className="rounded-3xl border border-teal-100/90 bg-white/95 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all">
                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100/70 text-[#12B5A5]">
                      <ScanFace className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-sm">
                        Today&apos;s Attendance & Payroll
                      </h4>
                      <p className="text-xs text-slate-500">Live organisation snapshot</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#E6F9F6] px-3 py-1 text-xs font-bold text-[#0E7A6E]">
                    Payroll ready
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-teal-100/60 bg-[#F0FDFB] p-3 text-center">
                    <span className="text-xs text-slate-500">Present</span>
                    <div className="mt-1 font-display text-2xl font-extrabold text-[#12B5A5]">
                      68
                    </div>
                  </div>
                  <div className="rounded-2xl border border-amber-100/80 bg-amber-50/50 p-3 text-center">
                    <span className="text-xs text-slate-500">Late</span>
                    <div className="mt-1 font-display text-2xl font-extrabold text-amber-600">
                      4
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-center">
                    <span className="text-xs text-slate-500">On leave</span>
                    <div className="mt-1 font-display text-2xl font-extrabold text-slate-700">
                      3
                    </div>
                  </div>
                </div>

                {/* Attendance Sparkline Visual */}
                <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-slate-700">Attendance this week</span>
                    <span className="text-[#12B5A5] font-bold">94% average</span>
                  </div>
                  <div className="flex items-end gap-2 h-14 pt-2">
                    {[62, 80, 71, 90, 84, 76, 95].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          style={{ height: `${val}%` }}
                          className={`w-full rounded-md transition-all ${
                            idx === 6
                              ? "bg-gradient-to-t from-[#12B5A5] to-[#0E9486]"
                              : "bg-teal-100"
                          }`}
                        />
                        <span className="text-[10px] text-slate-400">
                          {["M", "T", "W", "T", "F", "S", "M"][idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Check-in Notice */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-[#F0FDFB] px-4 py-3 border border-teal-100/60">
                  <div className="flex items-center gap-2.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#12B5A5] animate-ping" />
                    <span className="text-xs font-semibold text-slate-800">
                      Good morning, Asha
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#0E7A6E]">
                    Checked in 9:52 AM
                  </span>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] text-slate-400 italic">
                    Example view — live PayroleHR dashboard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. STATUTORY STRIP */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/70 bg-gradient-to-r from-white via-[#F0FDFB] to-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card-interactive group flex items-start gap-3.5 p-4 rounded-2xl border border-teal-100/60 bg-white shadow-xs hover:border-[#12B5A5]/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100/80 group-hover:bg-[#12B5A5] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <Receipt className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">Indian Payroll</h4>
                <p className="text-xs text-slate-500 mt-0.5">PF, ESI, Professional Tax, TDS</p>
              </div>
            </div>

            <div className="card-interactive group flex items-start gap-3.5 p-4 rounded-2xl border border-teal-100/60 bg-white shadow-xs hover:border-[#12B5A5]/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100/80 group-hover:bg-[#12B5A5] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">Universal Access</h4>
                <p className="text-xs text-slate-500 mt-0.5">Works on any phone, tablet or laptop</p>
              </div>
            </div>

            <div className="card-interactive group flex items-start gap-3.5 p-4 rounded-2xl border border-teal-100/60 bg-white shadow-xs hover:border-[#12B5A5]/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100/80 group-hover:bg-[#12B5A5] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">Isolated Data</h4>
                <p className="text-xs text-slate-500 mt-0.5">Each organisation kept completely separate</p>
              </div>
            </div>

            <div className="card-interactive group flex items-start gap-3.5 p-4 rounded-2xl border border-teal-100/60 bg-white shadow-xs hover:border-[#12B5A5]/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100/80 group-hover:bg-[#12B5A5] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">Audit Logged</h4>
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
              className="card-interactive group rounded-3xl border border-teal-100/80 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-teal-300/80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 text-rose-500 border border-rose-100/80 group-hover:scale-105 transition-transform duration-300">
                <XCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
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
                className="card-interactive group flex flex-col items-center text-center p-3.5 rounded-2xl bg-white border border-teal-100 shadow-xs hover:border-[#12B5A5]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100 group-hover:bg-[#12B5A5] group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-2">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">{step.label}</span>
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
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeTabIdx === idx
                  ? "bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-white shadow-md shadow-teal-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content Card */}
        <div className="mt-8 rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-10 shadow-card">
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
                className="card-interactive group rounded-3xl border border-teal-100/80 bg-white p-6 shadow-card hover:border-[#12B5A5]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100 group-hover:bg-[#12B5A5] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs mb-3.5">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-sm group-hover:text-[#12B5A5] transition-colors">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {item.desc}
                </p>
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
              className="card-interactive group rounded-3xl border border-teal-100/80 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-[#12B5A5] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100 group-hover:bg-[#12B5A5] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <FeatureIcon slug={sol.slug} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">
                  {sol.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {sol.short}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#12B5A5] group-hover:underline">
                Explore solution <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
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
            <div className="card-interactive rounded-3xl border border-teal-100/90 bg-white p-8 shadow-card hover:border-[#12B5A5]">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100 shadow-xs">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    For HR, Accounts and Management
                  </h3>
                  <p className="text-xs text-slate-500">Full administrative control</p>
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

            {/* Experience 2: Employee */}
            <div className="card-interactive rounded-3xl border border-teal-100/90 bg-white p-8 shadow-card hover:border-[#12B5A5]">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100 shadow-xs">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    For Employees & Staff
                  </h3>
                  <p className="text-xs text-slate-500">Mobile-first self-service portal</p>
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
              className="card-interactive group rounded-3xl border border-teal-100/80 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-[#12B5A5] transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100 shadow-xs group-hover:scale-105 group-hover:bg-[#12B5A5] group-hover:text-white transition-all duration-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
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
              className="card-interactive group rounded-3xl border border-teal-100/80 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-[#12B5A5] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 text-[#12B5A5] border border-teal-100 group-hover:bg-[#12B5A5] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <FeatureIcon slug={tool.slug} className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-teal-50 border border-teal-200/60 px-3 py-1 text-[11px] font-bold text-[#0E7A6E]">
                    {tool.category}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                  {tool.short}
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5]">
                <span>Open calculator</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
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
