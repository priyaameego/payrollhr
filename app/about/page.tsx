"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ScanFace,
  Layers,
  Clock,
  Building,
  TrendingUp,
  FileSpreadsheet,
  Users,
  Smartphone,
  ChevronDown,
} from "lucide-react";

export default function AboutPage() {
  const scrollToStory = () => {
    const el = document.getElementById("our-story");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-teal-50/60 blur-[130px] -translate-y-48" />
        <div className="h-[400px] w-[600px] rounded-full bg-blue-50/50 blur-[120px] translate-y-96 translate-x-32" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 space-y-20 sm:space-y-28">

        {/* ============================================================ */}
        {/* 1. HERO SECTION (Matching Screenshot 1 media_1795411076110_6b55f203.jpg) */}
        {/* ============================================================ */}
        <section className="text-center pt-4 sm:pt-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium mb-6">
            <Link href="/" className="hover:text-[#12B5A5] transition">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-slate-800">About Us</span>
          </nav>

          {/* Pill Tag */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50/90 border border-teal-200/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0E9486] shadow-2xs mb-6">
            <span>ALL-IN-ONE HR & PAYROLL SYSTEM</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Simplifying Attendance &amp;{" "}
            <span className="animate-hero-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#12B5A5] via-[#2DD4BF] to-[#0E9486]">
              Payroll
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            PayroleHR is an attendance-to-payroll platform built specifically for Indian businesses.
            It brings attendance registers, shift schedules, and month-end salary calculation into one unified, transparent system.
          </p>

          {/* Scroll Down Indicator */}
          <div className="mt-14 sm:mt-20 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={scrollToStory}
              className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
              aria-label="Scroll down to our story"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 group-hover:text-[#12B5A5] transition">
                SCROLL
              </span>
              <div className="flex flex-col items-center -space-y-2 text-[#12B5A5] group-hover:translate-y-1 transition-transform">
                <ChevronDown className="h-4 w-4 animate-bounce" />
                <ChevronDown className="h-4 w-4 animate-bounce opacity-70" style={{ animationDelay: "150ms" }} />
                <ChevronDown className="h-4 w-4 animate-bounce opacity-40" style={{ animationDelay: "300ms" }} />
              </div>
            </button>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. OUR STORY SECTION (Matching Screenshot 2 media_1795411097147_f42cde03.jpg) */}
        {/* ============================================================ */}
        <section id="our-story" className="scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0E9486] shadow-2xs">
              OUR STORY
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Why We Built{" "}
              <span className="text-[#12B5A5]">PayroleHR</span>
            </h2>
          </div>

          <div className="mx-auto max-w-3xl rounded-3xl bg-white border border-slate-100 p-6 sm:p-12 shadow-xl shadow-slate-100/80 space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              <strong className="font-extrabold text-slate-950">We started on the ground.</strong>{" "}
              PayroleHR was built to solve everyday operational chaos for Indian business owners and HR teams:
              managing paper attendance registers, missing punch disputes, unrecorded overtime, manual sandwich leave tracking, and month-end salary calculations without spreadsheets.
            </p>

            <p>
              Every workplace we visited calculated payroll with its own nuances — custom shift timings, unique allowance structures, specific rounding conventions, and varying penalty policies. Off-the-shelf software forced businesses into rigid corporate templates, leaving managers to spend stressful days re-calculating Excel sheets and manually re-typing numbers into bank portals.
            </p>

            <p>
              As our platform grew, something powerful happened.{" "}
              <strong className="font-extrabold text-slate-950">Businesses across diverse sectors began turning to us.</strong>{" "}
              Manufacturing plants, retail chains, corporate offices, healthcare centers, logistics hubs, and educational institutes were all confronting the exact same challenges: proxy attendance, complex statutory compliance (PF, ESIC, PT, TDS), and zero real-time visibility.
            </p>

            <p>
              We built <strong className="font-extrabold text-slate-950">a connected workforce ecosystem that grows with your organization.</strong>{" "}
              A modern platform designed to help Indian businesses manage their people effortlessly — where daily attendance check-ins directly inform accurate, compliant salary disbursements in seconds.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. MISSION & VISION SECTION (Matching Screenshot 3 media_1795411112353_168b8f5e.png) */}
        {/* ============================================================ */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0E9486] shadow-2xs">
              WHERE WE&apos;RE HEADED
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Our mission &amp;{" "}
              <span className="text-[#12B5A5]">vision</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Mission Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-12 shadow-xl shadow-slate-100/70 hover:shadow-2xl hover:border-teal-100 transition-all">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Mission
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                To make attendance, workforce tracking, and payroll completely effortless, transparent, and error-free for every Indian business.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#0E9486]">
                <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                <span>Zero manual calculations • 100% statutory compliance</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-12 shadow-xl shadow-slate-100/70 hover:shadow-2xl hover:border-teal-100 transition-all">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Vision
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                To become the default, trusted workforce operating system through which modern enterprises manage, empower, and pay their people with zero friction.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#0E9486]">
                <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                <span>From morning punch to payday in one connected flow</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. HOW WE BUILD SOFTWARE (Guiding Principles) */}
        {/* ============================================================ */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0E9486] shadow-2xs">
              HOW WE OPERATE
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Principles That Guide PayroleHR
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-medium">
              Built specifically for Indian labor laws, diverse workplaces, and real business realities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Principle 01 */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-card hover:shadow-lg transition-all group">
              <span className="text-xs font-black text-[#12B5A5] uppercase tracking-wider">
                PRINCIPLE 01
              </span>
              <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-slate-950 group-hover:text-[#0E9486] transition">
                Software That Adapts To You
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Custom salary formulas, multi-tier shift timings, grace periods, and approval workflows are intuitive settings you toggle in minutes — not expensive custom engineering.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-card hover:shadow-lg transition-all group">
              <span className="text-xs font-black text-[#12B5A5] uppercase tracking-wider">
                PRINCIPLE 02
              </span>
              <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-slate-950 group-hover:text-[#0E9486] transition">
                Attendance &amp; Payroll Belong Together
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                When a biometric face punch or mobile GPS check-in occurs, paid days, overtime, and late marks calculate automatically. No manual exports or month-end data reconciliation.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-card hover:shadow-lg transition-all group">
              <span className="text-xs font-black text-[#12B5A5] uppercase tracking-wider">
                PRINCIPLE 03
              </span>
              <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-slate-950 group-hover:text-[#0E9486] transition">
                Simple For Staff, Audit-Ready For Accounts
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Staff view payslips, leave balances, and salary advances directly on WhatsApp or mobile app. Finance and HR get row-by-row audit trails and 1-click bank NEFT disbursement files.
              </p>
            </div>

            {/* Principle 04 */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-card hover:shadow-lg transition-all group">
              <span className="text-xs font-black text-[#12B5A5] uppercase tracking-wider">
                PRINCIPLE 04
              </span>
              <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-slate-950 group-hover:text-[#0E9486] transition">
                Zero Biometric Hardware Lock-In
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Never purchase fragile, overpriced biometric machines with expensive annual maintenance contracts. Our AI face recognition turns standard Android tablets or phones into high-speed gate terminals.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. IMPACT NUMBERS BANNER */}
        {/* ============================================================ */}
        <section className="rounded-3xl border border-teal-100 bg-gradient-to-br from-[#F0FDFB] to-white p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950">
                0.18s
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-600">
                AI Face Match Speed
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E9486]">
                100%
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-600">
                PF, ESIC &amp; PT Compliant
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950">
                99.9%
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-600">
                Payout Calculation Accuracy
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E9486]">
                50+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-600">
                Indian Bank Payout Formats
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. CALL TO ACTION SECTION */}
        {/* ============================================================ */}
        <section className="rounded-3xl border border-teal-100 bg-gradient-to-r from-teal-50/60 via-white to-teal-50/60 p-8 sm:p-14 text-center shadow-xl">
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0E9486] shadow-2xs border border-teal-100">
            <Sparkles className="h-3 w-3 text-[#12B5A5]" />
            Experience PayroleHR Live
          </span>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Ready to simplify attendance and payroll for your business?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Schedule a live 15-minute demonstration customized to your team&apos;s shift rules, attendance methods, and salary structure.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-a-demo"
              className="rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all inline-flex items-center gap-2"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white border border-slate-200 px-7 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
