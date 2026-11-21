"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Building2,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  Clock,
  Calculator,
  FileCheck2,
  CheckCircle2,
  Mail,
  ChevronRight,
  Headphones,
  FileText,
  BadgePercent,
  Layers,
  Lock,
} from "lucide-react";
import { contactDetails } from "@/data/navigation";
import DemoForm from "@/components/DemoForm";

// Structured HRMS & Payroll Plans
const pricingPlans = [
  {
    id: "starter",
    name: "Starter HRMS",
    badge: "For Small Teams & Startups",
    popular: false,
    priceDisplay: "Starting at ₹6,000",
    period: "base package / annual plan",
    priceNote: "Starting price for foundational attendance & digital staff management",
    description:
      "Essential digital HRMS package to automate daily attendance, shift scheduling, and leave approvals with zero hardware hassles.",
    cta: "Get Pricing",
    secondaryCta: "Request a Quote",
    targetLink: "#request-quote",
    featuresTitle: "Core Features Included",
    features: [
      "AI Face Recognition Attendance (Any Phone, Tablet or Web Kiosk)",
      "Employee Master Directory & Digital KYC Document Storage",
      "Shift Timing, Roster Management & Weekly-Off Configuration",
      "Leave Application, Balance Tracking & Manager Approvals",
      "Real-time Daily Punch Logs with Instant Excel / CSV Export",
      "Web & Mobile Employee Self-Service (ESS) Portal",
      "Standard WhatsApp & Email Support during business hours",
      "Guided Initial Account Setup & Staff Onboarding Assistance",
      "[Editable Placeholder: Additional custom starter add-on modules]",
    ],
    highlights: [
      "Zero expensive biometric hardware required",
      "Setup completed within 24 hours",
    ],
  },
  {
    id: "growth",
    name: "Growth & Automated Payroll",
    badge: "Most Popular • Recommended",
    popular: true,
    priceDisplay: "Custom Pricing",
    period: "Request a Quote",
    priceNote: "Tailored to your exact headcount, shifts & compliance rules",
    description:
      "All-in-one attendance, shift rules, 1-click automated payroll calculation, and statutory compliance for growing Indian businesses.",
    cta: "Request a Quote",
    secondaryCta: "Get a Custom Plan",
    targetLink: "#request-quote",
    featuresTitle: "Everything in Starter, plus:",
    features: [
      "1-Click Automated Salary Calculation directly from punches & leaves",
      "Complete Statutory Compliance Engine (PF, ESI, PT, LWF & TDS)",
      "GPS Geofenced Mobile Punch with Anti-Spoof Selfie Verification",
      "1-Click Bank Salary Payout Files (HDFC, ICICI, SBI, Axis & all major banks)",
      "Automated Payslip Dispatch directly via WhatsApp & Email",
      "Custom Overtime, Late-mark, Half-day & Bonus Calculation Slabs",
      "Multi-department, Multi-designation & Multi-shift Management",
      "Priority Phone & Dedicated WhatsApp Support with Fast Turnaround",
      "[Editable Placeholder: Organization-specific custom payroll allowances]",
    ],
    highlights: [
      "Save 4+ days every month on payroll processing",
      "100% statutory compliant salary slips & registers",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Workforce Suite",
    badge: "For Large Teams & Multi-Branch",
    popular: false,
    priceDisplay: "Custom Pricing",
    period: "Request a Quote",
    priceNote: "Bespoke quote for multi-location, multi-GST & custom workflows",
    description:
      "Advanced governance, multi-company hierarchy, custom salary formulas, dedicated account management, and legacy biometric integrations.",
    cta: "Contact Sales",
    secondaryCta: "Get a Custom Plan",
    targetLink: "#request-quote",
    featuresTitle: "Everything in Growth, plus:",
    features: [
      "Multi-Branch, Multi-Company & Multi-GST Unified Admin Console",
      "Custom Salary Formulas, Allowance Slabs & Flexible Benefit Plans (FBP)",
      "Legacy Biometric Hardware & Access Control API Integration (eSSL, Matrix)",
      "Role-Based Access Control (RBAC) & Detailed Audit Trail Logs",
      "Dedicated Account Manager with Guaranteed 99.9% Uptime SLA",
      "Custom Bank Template Authoring & ERP/Accounting Sync Integration",
      "On-premise Deployment or Dedicated Private Cloud Infrastructure",
      "Quarterly Compliance & Payroll Policy Advisory Reviews",
      "[Editable Placeholder: Enterprise SLA & customized hardware leasing]",
    ],
    highlights: [
      "Dedicated enterprise technical account manager",
      "Custom security audits & SLA agreement",
    ],
  },
];

// Team size tiers for interactive quotation assistant
const teamSizeTiers = [
  {
    label: "1 - 25 Employees",
    sub: "Base Starter Tier",
    recommendation: "Eligible for Starter Package (Starting at ₹6,000)",
    planId: "starter",
  },
  {
    label: "26 - 100 Employees",
    sub: "Growth & Multi-Shift",
    recommendation: "Growth & Payroll Suite Recommended (Custom Pricing / Request a Quote)",
    planId: "growth",
  },
  {
    label: "101 - 500 Employees",
    sub: "Medium Enterprise",
    recommendation: "Growth or Enterprise Suite (Custom Pricing / Request a Quote)",
    planId: "growth",
  },
  {
    label: "500+ Workforce",
    sub: "Large Scale & Multi-Branch",
    recommendation: "Enterprise Workforce Suite (Custom Pricing / Request a Quote)",
    planId: "enterprise",
  },
];

// Transparent FAQ entries
const pricingFaqs = [
  {
    q: "Why do PayroleHR services start at ₹6,000?",
    a: "Our starter HRMS package begins at ₹6,000 as a base annual package for small teams, providing complete access to digital employee records, contactless AI face attendance (on any tablet or smartphone), shift scheduling, and leave approvals. For larger teams or automated payroll processing with PF/ESI statutory compliance, we provide customized quotations so you only pay for the exact employee count and modules you use.",
  },
  {
    q: "How do I receive a customized quotation for my organization?",
    a: "You can request a quote directly by submitting our online enquiry form below, messaging us on WhatsApp, or calling our sales desk at +91 70079 01057. Share your active employee headcount, number of shifts, and required modules (attendance, payroll, statutory compliance), and our payroll consultant will prepare a tailored itemized quote and product demo within 2 hours.",
  },
  {
    q: "Are there any hidden setup fees, kiosk charges, or hardware lock-ins?",
    a: "No, never. PayroleHR has zero hidden fees. You do not need to buy proprietary biometric machines—our AI face recognition works seamlessly on standard Android phones, iPhones, or budget tablets. Cloud hosting, security updates, and standard customer support are all included in your transparent package.",
  },
  {
    q: "Can we customize our plan or start with attendance first and add payroll later?",
    a: "Yes, absolutely! PayroleHR is completely modular. Many organizations start with our entry-level attendance and leave tracking package (starting at ₹6,000) and then seamlessly add automated payroll calculation, statutory compliance filing files, and WhatsApp payslip delivery as their workforce expands.",
  },
  {
    q: "What payment terms and GST invoicing do you provide?",
    a: "We provide official GST invoices with 100% Input Tax Credit (ITC) eligibility for all business customers. Subscriptions are billed transparently on annual or flexible terms as agreed in your customized quotation.",
  },
  {
    q: "Is our payroll and employee data secure and stored in India?",
    a: "Yes. All employee KYC records, attendance punches, and salary structures are stored on ISO 27001-certified Indian cloud servers. Data is encrypted using TLS 1.3 in transit and AES-256 at rest, fully complying with Indian data privacy regulations.",
  },
];

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToEnquiry = () => {
    const el = document.getElementById("request-quote");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 py-10 md:py-16 bg-[#F8FCFB]">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center justify-center gap-2 text-xs text-slate-500"
        >
          <Link href="/" className="hover:text-[#12B5A5] transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Pricing</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/90 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-2xs">
          <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
          Transparent & Predictable Pricing • Zero Hidden Costs
        </div>

        {/* Main Heading */}
        <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl md:leading-tight">
          HRMS & Payroll Plans <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#12B5A5] to-[#0E9486] bg-clip-text text-transparent">
            Starting at ₹6,000
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg leading-relaxed">
          Automate attendance, shift rostering, 1-click payroll computation, and Indian statutory compliance.
          Foundational packages start at <strong className="text-slate-900 font-bold">₹6,000</strong> — get a tailored quotation matching your exact team size, shift policies, and compliance needs.
        </p>

        {/* Trust Pill Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-600">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/90 px-3.5 py-1.5 shadow-2xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#12B5A5]" />
            <span>Packages starting at ₹6,000</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/90 px-3.5 py-1.5 shadow-2xs">
            <Clock className="h-3.5 w-3.5 text-[#12B5A5]" />
            <span>Custom quotations in 2 hours</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/90 px-3.5 py-1.5 shadow-2xs">
            <ShieldCheck className="h-3.5 w-3.5 text-[#12B5A5]" />
            <span>100% PF, ESI & TDS Compliant</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/90 px-3.5 py-1.5 shadow-2xs">
            <BadgePercent className="h-3.5 w-3.5 text-[#12B5A5]" />
            <span>Official GST Invoicing with ITC</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE TEAM SIZE & PACKAGE ADVISOR */}
        {/* ============================================================ */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-8 text-left shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                Plan Recommendation Advisor
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                Select your approximate team size
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Click to view recommended package
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {teamSizeTiers.map((tier, idx) => {
              const active = selectedTier === idx;
              return (
                <button
                  key={tier.label}
                  type="button"
                  onClick={() => setSelectedTier(idx)}
                  className={`rounded-2xl p-3 text-left transition-all border ${
                    active
                      ? "border-[#12B5A5] bg-[#E8FAF7]/80 text-[#0E7A6E] shadow-sm ring-2 ring-[#12B5A5]/20"
                      : "border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-teal-200 text-slate-700"
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold">{tier.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{tier.sub}</div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-[#F0FDFB] border border-teal-200/60 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#12B5A5] text-white">
                <Calculator className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">
                  Recommended Solution:
                </span>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  {teamSizeTiers[selectedTier].recommendation}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:shrink-0">
              <button
                type="button"
                onClick={scrollToEnquiry}
                className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all text-center"
              >
                Request a Quote →
              </button>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 rounded-xl border border-teal-200 bg-white px-3 py-2.5 text-xs font-bold text-[#0E7A6E] hover:bg-teal-50 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. THREE PRICING CARDS */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[#12B5A5] bg-white shadow-xl shadow-teal-500/10 ring-4 ring-[#12B5A5]/10 lg:-translate-y-2"
                  : "border border-slate-200/90 bg-white shadow-card hover:border-teal-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-1 text-[11px] font-extrabold text-white shadow-md uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-extrabold text-slate-950">
                    {plan.name}
                  </h3>
                  {!plan.popular && (
                    <span className="text-[11px] font-semibold text-slate-500 rounded-full bg-slate-100 px-2.5 py-0.5">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 rounded-2xl bg-gradient-to-b from-slate-50/80 to-[#F0FDFB]/50 p-4 border border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                      {plan.priceDisplay}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#0E7A6E] mt-1">
                    {plan.period}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {plan.priceNote}
                  </p>
                </div>

                {/* Key Plan Highlights */}
                <div className="mt-4 space-y-1.5">
                  {plan.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] font-semibold text-teal-800">
                      <Sparkles className="h-3 w-3 text-[#12B5A5] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="my-6 border-t border-slate-100" />

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {plan.featuresTitle}
                  </span>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-50 border border-teal-200/80 text-[#12B5A5]">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs leading-relaxed font-medium text-slate-700">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 pt-4 border-t border-slate-100 space-y-2.5">
                <button
                  type="button"
                  onClick={scrollToEnquiry}
                  className={`block w-full text-center rounded-xl py-3 text-sm font-bold transition-all shadow-sm ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-white shadow-md shadow-teal-500/25 hover:from-[#0E9486] hover:to-[#0B7A6E]"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="flex gap-2">
                  <Link
                    href="/book-a-demo"
                    className="flex-1 text-center rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5] hover:border-teal-300 transition-colors shadow-2xs"
                  >
                    {plan.secondaryCta}
                  </Link>
                  <a
                    href={contactDetails.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 transition-colors shadow-2xs"
                    title="Ask on WhatsApp"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TRANSPARENT PRICING & INCLUSIONS EXPLANATION BANNER */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/90 bg-gradient-to-r from-white via-[#F0FDFB] to-white p-8 sm:p-10 shadow-card">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3.5 py-1 text-xs font-bold text-[#0E7A6E] mb-3">
              <ShieldCheck className="h-3.5 w-3.5 text-[#12B5A5]" />
              Clear & Honest Pricing Structure
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              How our pricing works: 100% transparent, no surprises
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We believe in honest, predictable pricing without arbitrary locks or hidden maintenance charges. Here is how our plans are structured:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] font-bold mb-3">
                ₹
              </div>
              <h3 className="text-sm font-bold text-slate-900">Starting at ₹6,000</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Foundational packages start at ₹6,000, giving growing businesses enterprise-grade face attendance and leave tracking on a budget.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] mb-3">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Customized Quotes</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Because every business has different employee counts, shift rotas, and compliance rules, larger plans are custom-quoted so you never overpay.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] mb-3">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Zero Hardware Lock-in</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                No expensive proprietary biometric terminals required. Convert any regular tablet, phone or iPad into a high-speed contactless kiosk.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] mb-3">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">100% Statutory Compliant</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Automated PF, ESI, PT, LWF and TDS calculations matching the latest Indian Labour Law slabs with official GST invoices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ON-PAGE ENQUIRY & CUSTOM QUOTE FORM (Uses DemoForm) */}
      {/* ============================================================ */}
      <section id="request-quote" className="mx-auto max-w-6xl px-4 sm:px-6 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E]">
            <Mail className="h-3.5 w-3.5 text-[#12B5A5]" />
            Request Pricing & Package Information
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Get an exact quotation for your organization
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tell us about your organization, team size, and shift requirements. Our payroll specialist will send a customized proposal and arrange a live walkthrough.
          </p>
        </div>

        {/* Existing verified DemoForm mechanism */}
        <DemoForm from="pricing-page" />

        {/* Quick Contact Bar below form */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Need urgent pricing assistance?</span>
          </div>
          <a
            href={contactDetails.tel}
            className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-[#12B5A5] transition-colors"
          >
            <Phone className="h-4 w-4 text-[#12B5A5]" />
            <span>Call Sales: {contactDetails.phone}</span>
          </a>
          <span className="text-slate-300">•</span>
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-emerald-500" />
            <span>WhatsApp Quotation Desk</span>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PRICING FAQS ACCORDION */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Pricing Questions & Answers
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
            Frequently asked pricing questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Everything you need to know about our starting packages, custom quotations, and billing.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white shadow-sm transition-all duration-200 hover:border-teal-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-sm sm:text-base font-semibold text-slate-900 transition-colors hover:text-[#12B5A5]"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[#12B5A5] transition-transform ${
                      isOpen ? "rotate-180 bg-[#12B5A5] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-[#F0FDFB]/40 px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. PRE-FOOTER DIRECT CALLOUT BANNER */}
      {/* ============================================================ */}
      <section className="px-4 sm:px-6">
        <div className="relative overflow-hidden mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0B7A6E] p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white mb-3 backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              Tailored Quotations & RFP Support
            </span>
            <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
              Need a customized quotation or package proposal?
            </h2>
            <p className="mt-3 max-w-xl text-teal-50 text-sm sm:text-base leading-relaxed">
              Whether you have 10 employees or 5,000 across multiple factory gates, our team will provide a transparent, itemized proposal with zero hidden fees.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToEnquiry}
                className="rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-bold text-[#0E7A6E] shadow-lg hover:bg-teal-50 transition-all active:scale-95"
              >
                Request a Quote
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
              >
                <Phone className="h-4 w-4" />
                Contact Sales
              </Link>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
