"use client";

import { useState } from "react";
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
} from "lucide-react";
import { contactDetails } from "@/data/navigation";

const plans = [
  {
    name: "Starter",
    badge: "For small teams",
    price: "₹30",
    period: "per employee / month",
    description: "Everything you need to automate daily attendance and basic leave tracking.",
    popular: false,
    features: [
      "Face recognition attendance kiosk (Android/iOS)",
      "Employee directory & document storage",
      "Shift timing & weekly off schedules",
      "Leave requests & manager approvals",
      "Daily punch log & Excel export",
      "Standard WhatsApp support",
    ],
    cta: "Start free trial",
    ctaLink: "/book-a-demo",
  },
  {
    name: "Growth",
    badge: "Most Popular",
    price: "₹50",
    period: "per employee / month",
    description: "Complete attendance, leave rules, 1-click payroll and bank salary export.",
    popular: true,
    features: [
      "All Starter features included",
      "Multi-device Face Attendance with anti-spoofing",
      "Geofenced mobile punch with selfie verification",
      "Automatic salary calculation from attendance",
      "Overtime, late-mark & half-day deduction rules",
      "PF, ESI, PT & TDS statutory compliance",
      "1-Click bank transfer files (HDFC, ICICI, SBI)",
      "Automated WhatsApp & Email payslip dispatch",
      "Priority phone & WhatsApp support",
    ],
    cta: "Book a demo",
    ctaLink: "/book-a-demo",
  },
  {
    name: "Enterprise",
    badge: "For large workforces",
    price: "Custom",
    period: "tailored to your scale",
    description: "Custom policies, multi-branch control, dedicated support and API integrations.",
    popular: false,
    features: [
      "All Growth features included",
      "Multi-branch, multi-shift enterprise hierarchy",
      "Custom salary formulas & allowance structures",
      "Legacy biometric hardware API integration",
      "Bulk employee import & onboarding clearance",
      "Dedicated account manager & SLA guarantee",
      "On-premise or private cloud deployment option",
      "Custom bank template authoring",
    ],
    cta: "Contact sales",
    ctaLink: "/contact",
  },
];

const faqs = [
  {
    q: "How does billing work?",
    a: "Billing is based on active employees in your system each month. There are no hidden setup charges or per-device terminal fees.",
  },
  {
    q: "Do I need to buy expensive biometric fingerprint devices?",
    a: "No! PayroleHR runs on any regular Android phone, iPhone, or tablet using AI Face Recognition. You can convert any ₹6,000 tablet into a fast, contactless attendance kiosk.",
  },
  {
    q: "Can PayroleHR handle custom salary structures?",
    a: "Yes. You can define custom earnings, deductions, overtime slabs, and attendance-linked incentives matching your exact organizational rules.",
  },
  {
    q: "Is our employee data secure?",
    a: "All records, face vectors, and salary files are encrypted in transit (TLS 1.3) and at rest (AES-256) on Indian ISO 27001-certified cloud infrastructure.",
  },
];

export default function PricingPage() {
  const [empCount, setEmpCount] = useState<number>(45);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const estimatedGrowthCost = empCount * 50;

  return (
    <div className="space-y-20 py-12 md:py-16">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E]">
          <Zap className="h-3.5 w-3.5 text-[#12B5A5]" /> Simple, Transparent Pricing
        </div>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:leading-tight">
          Fair pricing that grows with your organization
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          No hardware lock-in, no per-device kiosk charges. Pay only for active staff with full attendance, leave rules, and 1-click payroll.
        </p>

        {/* Cost Estimator */}
        <div className="mx-auto mt-10 max-w-xl attendo-card p-6 text-left relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">Estimated team size:</span>
            <span className="inline-flex items-center rounded-full bg-teal-50 border border-teal-200/80 px-3.5 py-1 font-display text-base font-bold text-[#0E7A6E]">
              {empCount} employees
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="300"
            step="5"
            value={empCount}
            onChange={(e) => setEmpCount(parseInt(e.target.value))}
            className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-lg bg-teal-100 accent-[#12B5A5]"
          />
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-100 pt-4">
            <div>
              <span className="text-xs text-slate-500 font-medium">Estimated Growth plan:</span>
              <div className="font-display text-2xl font-black text-slate-950">
                ₹{estimatedGrowthCost.toLocaleString("en-IN")}{" "}
                <span className="text-xs font-normal text-slate-500">/ month</span>
              </div>
            </div>
            <Link
              href="/book-a-demo"
              className="shimmer-pill rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all text-center"
            >
              Get Custom Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                p.popular
                  ? "attendo-card attendo-card-hover attendo-card-sheen border-2 border-[#12B5A5] bg-white shadow-xl shadow-teal-500/10 ring-4 ring-[#12B5A5]/10 lg:-translate-y-2"
                  : "attendo-card attendo-card-hover bg-white"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-1 text-xs font-extrabold text-white shadow-md uppercase tracking-wider">
                  {p.badge}
                </div>
              )}

              <div>
                <h3 className="font-display text-2xl font-extrabold text-slate-950">{p.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.description}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-black text-slate-950">{p.price}</span>
                  <span className="text-xs text-slate-500 font-medium">{p.period}</span>
                </div>

                <div className="my-6 border-t border-slate-100" />

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What&apos;s included
                  </span>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {p.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-50 border border-teal-200/80 text-[#12B5A5]">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs leading-relaxed font-medium text-slate-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href={p.ctaLink}
                  className={`block w-full text-center rounded-xl py-3 text-sm font-bold transition-all ${
                    p.popular
                      ? "shimmer-pill bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-white shadow-md shadow-teal-500/25 hover:from-[#0E9486] hover:to-[#0B7A6E]"
                      : "border border-teal-200 bg-white text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5] hover:border-teal-300 shadow-sm"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-display text-2xl font-bold text-slate-950 sm:text-3xl">
          Frequently asked pricing questions
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white shadow-sm transition-all duration-200 hover:border-teal-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-semibold text-slate-900 transition-colors hover:text-[#12B5A5]"
                >
                  <span>{faq.q}</span>
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-[#12B5A5] transition-transform ${isOpen ? "rotate-180 bg-[#12B5A5] text-white" : ""}`}>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-[#F0FDFB]/40 px-5 pb-5 pt-3 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="px-6">
        <div className="relative overflow-hidden mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0B7A6E] p-10 text-white shadow-xl md:p-14">
          <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Want a customized proposal for your team?
            </h2>
            <p className="mt-3 max-w-xl text-teal-50 leading-relaxed">
              Tell us how many employees, branches, and shifts you operate. We&apos;ll configure a live sandbox and provide an exact quote.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/book-a-demo"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#0E7A6E] shadow-lg hover:bg-teal-50 transition-all active:scale-95"
              >
                Book a live demo
              </Link>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
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
