"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  ArrowRight,
  ChevronRight,
  Calculator,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  IndianRupee,
  CalendarCheck,
  Award,
  Layers,
  FileSpreadsheet,
} from "lucide-react";
import toolsData from "@/data/tools.json";
import { TOOL_DETAILS } from "@/data/toolDetails";

export default function FreeToolsIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Salary & Pay", "Attendance & Leave", "Statutory & Exit"];

  // Filter tools based on category and search query
  const filteredTools = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return toolsData.filter((tool: any) => {
      const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;

      const detail = TOOL_DETAILS[tool.slug];
      const matchName = tool.name.toLowerCase().includes(q);
      const matchShort = tool.short.toLowerCase().includes(q);
      const matchFormula = tool.formula.toLowerCase().includes(q);
      const matchCategory = tool.category.toLowerCase().includes(q);
      const matchKeywords = detail ? detail.whatItDoes.some((w) => w.toLowerCase().includes(q)) : false;

      return matchName || matchShort || matchFormula || matchCategory || matchKeywords;
    });
  }, [searchQuery, activeCategory]);

  const getToolIcon = (slug: string) => {
    switch (slug) {
      case "salary-per-day-calculator":
      case "salary-breakup-calculator":
      case "payroll-cost-calculator":
        return <IndianRupee className="h-6 w-6 stroke-[2.2]" />;
      case "attendance-calculator":
      case "working-days-calculator":
        return <CalendarCheck className="h-6 w-6 stroke-[2.2]" />;
      case "overtime-calculator":
        return <Clock className="h-6 w-6 stroke-[2.2]" />;
      case "leave-calculator":
        return <Layers className="h-6 w-6 stroke-[2.2]" />;
      case "gratuity-calculator":
        return <Award className="h-6 w-6 stroke-[2.2]" />;
      case "ctc-to-in-hand-calculator":
      default:
        return <Calculator className="h-6 w-6 stroke-[2.2]" />;
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F0F6FE]/70 via-[#F8FBFE]/40 to-white py-10 sm:py-16">
      {/* Background ambient glow inspired by AttendoHR */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-teal-100/35 blur-[140px] -translate-y-56 pointer-events-none" />
        <div className="h-[400px] w-[600px] rounded-full bg-sky-100/30 blur-[130px] translate-y-96 translate-x-40 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#12B5A5] transition">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <Link href="/resources" className="hover:text-[#12B5A5] transition">
            Resources
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-900">Free Tools</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0E9486] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
            100% Free HR &amp; Payroll Calculators
          </div>

          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Free HR &amp; Payroll Calculators for Indian Businesses
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Interactive, transparent calculation tools matching Indian Labour Law formulas, the Factories Act 1948,
            and Income Tax regulations. Calculate daily wages, attendance rates, overtime pay, CTC in-hand, and gratuity instantly — zero signup required.
          </p>
        </div>

        {/* Prominent Search Bar & Category Navigation (Inspired by AttendoHR) */}
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Search Input */}
          <div className="relative flex items-center">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search calculators by name, keyword or formula (e.g. gratuity, overtime, ctc, leave)..."
              className="w-full rounded-full border border-slate-300/80 bg-white py-3.5 pl-14 pr-12 text-sm sm:text-base text-slate-950 placeholder:text-slate-400 focus:border-[#12B5A5] focus:outline-none focus:ring-4 focus:ring-teal-100 shadow-sm transition-all font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Tabs & Tool Counter */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-b border-slate-200/70 pb-3">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const count = cat === "All"
                  ? toolsData.length
                  : toolsData.filter((t: any) => t.category === cat).length;
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-slate-950 text-white shadow-sm ring-2 ring-slate-900/20"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-teal-300 hover:text-teal-900 hover:bg-teal-50/40"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            <span className="text-xs font-semibold text-slate-500">
              Showing {filteredTools.length} {filteredTools.length === 1 ? "calculator" : "calculators"}
            </span>
          </div>
        </div>

        {/* Tools Cards Grid */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/60 p-8">
            <Calculator className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No calculators found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any calculator matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;salary&rdquo;, &ldquo;attendance&rdquo;, or &ldquo;gratuity&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100 transition"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool: any) => {
              const detail = TOOL_DETAILS[tool.slug];
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="rounded-3xl border border-teal-100/90 bg-white p-7 shadow-sm hover:shadow-xl hover:border-[#12B5A5] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  <div>
                    {/* Card Top: Icon & Category */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FAF7] border border-teal-200/60 text-[#12B5A5] shadow-2xs group-hover:scale-105 transition-transform">
                        {getToolIcon(tool.slug)}
                      </div>
                      <span className="rounded-full bg-[#E8FAF7] border border-teal-200 px-3 py-1 text-[11px] font-bold text-[#0E7A6E]">
                        {tool.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-5 font-display text-lg font-extrabold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-snug">
                      {tool.name}
                    </h2>

                    {/* Short Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 font-normal">
                      {tool.short}
                    </p>

                    {/* Transparent Formula Pill */}
                    <div className="mt-3.5 rounded-xl bg-slate-50/90 p-2.5 text-[11px] font-mono text-slate-700 border border-slate-200/70 line-clamp-2">
                      {tool.formula}
                    </div>

                    {/* Who it is for preview */}
                    {detail && detail.whoIsItFor && detail.whoIsItFor[0] && (
                      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#0E9486]">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#12B5A5]" />
                        <span className="truncate">{detail.whoIsItFor[0].role}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: CTA Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E7A6E] group-hover:text-[#12B5A5] transition-colors">
                    <span>Open Calculator</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* SEO Informational Section (Why We Built These Tools & Compliance) */}
        <section className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Indian Labor Law &amp; Statutory Compliance
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              Why We Built These Free HR &amp; Payroll Calculators
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every month, thousands of Indian business owners, plant supervisors, HR managers, and accountants
              waste precious hours resolving calculation disputes over 26-day versus calendar-day salary divisors,
              double overtime multipliers under the Factories Act, leave carry-forward caps, and statutory gratuity formulas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-100 bg-[#FAFDFD] p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0E9486] font-bold">
                1
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900">100% Free &amp; Un-gated</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Run calculations directly in your browser without entering email addresses or signing up.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#FAFDFD] p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0E9486] font-bold">
                2
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900">Transparent Formulas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every calculation shows the mathematical formula and worked example so you can cross-verify results.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#FAFDFD] p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0E9486] font-bold">
                3
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900">Indian Compliance Rules</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-configured for the Factories Act 1948, Payment of Gratuity Act 1972, EPFO, and ESIC.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#FAFDFD] p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0E9486] font-bold">
                4
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900">Print &amp; Share Ready</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Copy results to your clipboard with 1 click or print ready-to-share calculation annexures.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Banner (AttendoHR Signature Dark Luxury Showcase) */}
        <section className="relative overflow-hidden rounded-3xl border border-teal-800/40 bg-gradient-to-br from-slate-950 via-[#072B28] to-slate-900 p-8 sm:p-14 text-center shadow-2xl text-white">
          {/* Glowing background radial ambient light */}
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-teal-500/20 blur-[130px]" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-teal-300" />
              Automate Workforce Calculations
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Need to automate these calculations across your entire workforce?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              PayroleHR connects biometric face check-ins, mobile GPS punches, shift rosters, and compliant bank payout files into one automated flow.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-a-demo"
                className="rounded-full bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2.5"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/features"
                className="rounded-full border border-white/25 bg-white/10 hover:bg-white/15 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Explore All Features</span>
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                150+ Indian Companies
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                0.18s Face Attendance
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                1-Click Bank Files
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
