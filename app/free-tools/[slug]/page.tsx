import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Calculator,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  BookOpen,
  ShieldCheck,
  Clock,
  Layers,
  IndianRupee,
  CalendarCheck,
  Award,
  Info,
  Check,
  Users,
  Building,
  Receipt,
  FileSpreadsheet,
} from "lucide-react";
import toolsData from "@/data/tools.json";
import featuresData from "@/data/features.json";
import CalculatorRunner from "@/components/CalculatorRunner";
import FeatureFaqAccordion from "@/app/features/[slug]/FeatureFaqAccordion";
import { TOOL_DETAILS } from "@/data/toolDetails";

export async function generateStaticParams() {
  return toolsData.map((t: any) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = toolsData.find((t: any) => t.slug === slug);
  const detail = TOOL_DETAILS[slug];

  if (!tool) return { title: "Calculator — PayroleHR" };

  return {
    title: detail?.metaTitle || `${tool.name} — Free HR Calculator | PayroleHR`,
    description: detail?.metaDescription || tool.short,
  };
}

export default async function CalculatorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = toolsData.find((t: any) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  const detail = TOOL_DETAILS[slug];
  const relatedFeature = detail?.relatedFeature || (tool.feature ? featuresData.find((f: any) => f.slug === tool.feature) : null);

  // Find related tools
  const relatedTools = detail?.relatedToolSlugs
    ? toolsData.filter((t: any) => detail.relatedToolSlugs.includes(t.slug))
    : toolsData.filter((t: any) => t.category === tool.category && t.slug !== tool.slug).slice(0, 3);

  const getToolIcon = (toolSlug: string) => {
    switch (toolSlug) {
      case "salary-per-day-calculator":
      case "salary-breakup-calculator":
      case "payroll-cost-calculator":
        return <IndianRupee className="h-5 w-5 stroke-[2.2]" />;
      case "attendance-calculator":
      case "working-days-calculator":
        return <CalendarCheck className="h-5 w-5 stroke-[2.2]" />;
      case "overtime-calculator":
        return <Clock className="h-5 w-5 stroke-[2.2]" />;
      case "leave-calculator":
        return <Layers className="h-5 w-5 stroke-[2.2]" />;
      case "gratuity-calculator":
        return <Award className="h-5 w-5 stroke-[2.2]" />;
      case "ctc-to-in-hand-calculator":
      default:
        return <Calculator className="h-5 w-5 stroke-[2.2]" />;
    }
  };

  const getPersonaIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="h-4 w-4" />;
      case 1:
        return <Building className="h-4 w-4" />;
      case 2:
        return <Receipt className="h-4 w-4" />;
      default:
        return <ShieldCheck className="h-4 w-4" />;
    }
  };

  // Convert faqs for accordion component
  const faqItems = ((detail && detail.faqs) || tool.faqs || []).map((f: any) => ({
    q: f.q,
    a: f.a,
  }));

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F0F6FE]/70 via-[#F8FBFE]/40 to-white py-10 sm:py-16">
      {/* Ambient background glowing gradient orbs inspired by AttendoHR */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-teal-100/35 blur-[140px] -translate-y-56 pointer-events-none" />
        <div className="h-[400px] w-[600px] rounded-full bg-sky-100/30 blur-[130px] translate-y-96 translate-x-40 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#12B5A5] transition">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <Link href="/resources" className="hover:text-[#12B5A5] transition">
            Resources
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <Link href="/free-tools" className="hover:text-[#12B5A5] transition">
            Free Tools
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-900 truncate">{tool.name}</span>
        </nav>

        {/* Hero Header with AttendoHR Visual Badges & Headings */}
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-2xs">
              <Calculator className="h-3.5 w-3.5 text-[#12B5A5]" />
              {tool.category} • 100% Free Tool
            </span>
            {detail?.heroBadge && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs">
                <Sparkles className="h-3 w-3 text-[#12B5A5]" />
                {detail.heroBadge}
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-950 tracking-tight leading-[1.18]">
            {detail?.h1 || tool.name}
          </h1>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
            {detail?.introduction || tool.short}
          </p>

          {/* Quick Trust Pills Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-slate-200/80 px-3.5 py-1.5 shadow-2xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#12B5A5]" />
              <span>Indian Labour Law Basis</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-slate-200/80 px-3.5 py-1.5 shadow-2xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#12B5A5]" />
              <span>Zero Registration Required</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-slate-200/80 px-3.5 py-1.5 shadow-2xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#12B5A5]" />
              <span>1-Click Print &amp; Copy</span>
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE CALCULATOR ENGINE RUNNER */}
        {/* ============================================================ */}
        <section aria-label="Interactive Calculator" className="scroll-mt-12">
          <CalculatorRunner slug={tool.slug} name={tool.name} />
        </section>

        {/* ============================================================ */}
        {/* 1. WHAT THIS CALCULATOR DOES & WHO IT IS FOR */}
        {/* ============================================================ */}
        {detail && (
          <section className="relative overflow-hidden rounded-3xl border border-teal-100/90 bg-white/95 p-7 sm:p-10 shadow-card space-y-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-[#12B5A5] to-emerald-400" />
            
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
                Target Audience &amp; Value
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                What this calculator does and who it is useful for
              </h2>
            </div>

            {/* Persona Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {detail.whoIsItFor.map((persona, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-[#FAFDFD] p-5 hover:border-teal-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 border border-teal-200/80 text-[#0E7A6E] font-bold group-hover:bg-[#12B5A5] group-hover:text-white transition-all">
                      {getPersonaIcon(idx)}
                    </div>
                    <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                      {persona.role}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-12 font-normal">
                    {persona.benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Capabilities Visual Tiles */}
            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-4">
                Key Calculator Capabilities:
              </span>
              <div className="grid gap-3 sm:grid-cols-2">
                {detail.whatItDoes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F9FBFA] p-3.5 hover:bg-white hover:border-teal-200 transition-all"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-50 border border-teal-200/80 text-[#12B5A5] mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 2. HOW TO USE THE CALCULATOR (STEP-BY-STEP) */}
        {/* ============================================================ */}
        {detail?.howToUseSteps && (
          <section className="relative overflow-hidden rounded-3xl border border-teal-100/90 bg-white/95 p-7 sm:p-10 shadow-card space-y-7">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-[#12B5A5] to-emerald-400" />
            
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                <Clock className="h-3.5 w-3.5 text-[#12B5A5]" />
                Step-by-Step Instructions
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                How to use the {tool.name}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Follow these simple steps to calculate accurate results in seconds:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {detail.howToUseSteps.map((step) => (
                <div
                  key={step.step}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-5.5 hover:border-teal-300 hover:shadow-md transition-all duration-300 flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#12B5A5] to-[#0E9486] text-white font-display font-extrabold text-sm shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 3. FORMULA & MATHEMATICAL BREAKDOWN */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden rounded-3xl border border-teal-100/90 bg-white/95 p-7 sm:p-10 shadow-card space-y-7">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-[#12B5A5] to-emerald-400" />
          
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              <Calculator className="h-3.5 w-3.5 text-[#12B5A5]" />
              Mathematical Integrity
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              {detail?.formulaHeading || "Calculation Formula & How It Works"}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              All PayroleHR calculations strictly adhere to statutory Indian accounting standards and labor law formulas:
            </p>
          </div>

          {/* Luxury Mathematical Equation Card */}
          <div className="rounded-2xl border-2 border-teal-200/90 bg-gradient-to-r from-[#E8FAF7]/80 via-white to-[#E8FAF7]/80 p-6 sm:p-7 text-center shadow-xs space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E] block">
              Official Statutory Formula:
            </span>
            <div className="font-mono text-base sm:text-xl font-extrabold text-slate-950 tracking-wide break-words whitespace-pre-line leading-relaxed">
              {detail?.formulaCode || tool.formula}
            </div>
          </div>

          {/* Variables Breakdown Table */}
          {detail?.formulaBreakdown && (
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAFDFD] border-b border-slate-200/80 text-slate-500 font-bold uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Formula Variable</th>
                    <th className="py-3 px-4">Statutory Meaning &amp; Indian Rule Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                  {detail.formulaBreakdown.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900 font-mono text-xs">
                        <span className="rounded-md bg-teal-50 border border-teal-100 px-2 py-0.5 text-[#0E7A6E]">
                          {row.variable}
                        </span>
                      </td>
                      <td className="py-3 px-4 leading-relaxed font-normal">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ============================================================ */}
        {/* 4. WORKED PRACTICAL EXAMPLE & SCENARIO */}
        {/* ============================================================ */}
        {detail?.workedExample && (
          <section className="relative overflow-hidden rounded-3xl border border-teal-100/90 bg-white/95 p-7 sm:p-10 shadow-card space-y-7">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-[#12B5A5] to-emerald-400" />
            
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
                Real-World Simulation
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                Practical Scenario &amp; Worked Example
              </h2>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
                {detail.workedExample.scenario}
              </p>
            </div>

            {/* Input Values Table */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {detail.workedExample.inputs.map((inp, idx) => (
                <div key={idx} className="rounded-2xl border border-teal-100 bg-[#F0FDFB]/70 p-4 shadow-2xs">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    {inp.label}
                  </span>
                  <span className="mt-1 text-base font-extrabold text-slate-900 block font-display">
                    {inp.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Step-by-Step Mathematical Calculation */}
            <div className="rounded-2xl bg-slate-50/90 p-5 border border-slate-200/80 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Mathematical Execution:
              </span>
              <ul className="space-y-2 font-mono text-xs sm:text-[13px] text-slate-800">
                {detail.workedExample.calculation.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="text-[#12B5A5] font-black text-sm">→</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Final Computed Result Showcase Card */}
            <div className="rounded-3xl border-2 border-[#12B5A5]/80 bg-gradient-to-r from-[#E6FAF7] via-white to-[#E6FAF7] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
              <div>
                <span className="inline-block rounded-full bg-[#12B5A5]/15 border border-[#12B5A5]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E]">
                  Final Computed Result
                </span>
                <p className="mt-2 font-display text-2xl sm:text-3xl font-black text-[#0E7A6E]">
                  {detail.workedExample.result}
                </p>
              </div>
              <div className="sm:text-right max-w-sm">
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {detail.workedExample.note}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 5. INTERPRETATION & COMPLIANCE ADVICE */}
        {/* ============================================================ */}
        {detail?.interpretationAndTips && (
          <section className="relative overflow-hidden rounded-3xl border border-teal-100/90 bg-white/95 p-7 sm:p-10 shadow-card space-y-6">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-[#12B5A5] to-emerald-400" />
            
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 border border-teal-200 text-[#0E7A6E]">
                <ShieldCheck className="h-5 w-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                  Statutory Advisory
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
                  Interpretation of Results &amp; Compliance Tips
                </h2>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {detail.interpretationAndTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-[#FAFDFD] p-4.5 flex items-start gap-3 hover:bg-white hover:border-teal-200 transition-all"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#12B5A5]" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 6. TOOL FAQS (Interactive Accordion) */}
        {/* ============================================================ */}
        {faqItems.length > 0 && (
          <section className="relative overflow-hidden rounded-3xl border border-teal-100/90 bg-white/95 p-7 sm:p-10 shadow-card space-y-6">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-[#12B5A5] to-emerald-400" />
            
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                <HelpCircle className="h-3.5 w-3.5 text-[#12B5A5]" />
                Got Questions?
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                Frequently asked questions about {tool.name}
              </h2>
            </div>

            <FeatureFaqAccordion items={faqItems} />
          </section>
        )}

        {/* ============================================================ */}
        {/* 7. RELATED FREE CALCULATORS & INTERNAL LINKING */}
        {/* ============================================================ */}
        {relatedTools && relatedTools.length > 0 && (
          <section className="space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                  Resource Directory
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Related Free HR &amp; Payroll Calculators
                </h2>
              </div>
              <Link
                href="/free-tools"
                className="text-xs sm:text-sm font-bold text-[#12B5A5] hover:text-[#0E9486] transition flex items-center gap-1.5 group"
              >
                <span>View all 9 tools</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((relTool: any) => (
                <Link
                  key={relTool.slug}
                  href={`/free-tools/${relTool.slug}`}
                  className="rounded-3xl border border-teal-100/90 bg-white p-6 shadow-2xs hover:shadow-xl hover:border-[#12B5A5] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8FAF7] border border-teal-200/80 text-[#0E7A6E] shadow-2xs group-hover:scale-105 group-hover:bg-[#12B5A5] group-hover:text-white transition-all">
                        {getToolIcon(relTool.slug)}
                      </div>
                      <span className="rounded-full bg-[#E8FAF7] border border-teal-200 px-2.5 py-0.5 text-[10px] font-bold text-[#0E7A6E]">
                        {relTool.category}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-snug">
                      {relTool.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {relTool.short}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E7A6E]">
                    <span>Calculate Now</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 8. AUTOMATE IN PAYROLEHR (AttendoHR Signature Dark Showcase Banner) */}
        {/* ============================================================ */}
        {relatedFeature && (
          <section className="relative overflow-hidden rounded-3xl border border-teal-800/40 bg-gradient-to-br from-slate-950 via-[#072B28] to-slate-900 p-8 sm:p-14 text-center shadow-2xl text-white">
            {/* Glowing background radial ambient light */}
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-teal-500/20 blur-[130px]" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-teal-300" />
                Automate Workforce Calculations
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Never calculate this by hand again
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                PayroleHR runs {tool.name.toLowerCase().replace(" calculator", "")} automatically inside our{" "}
                <span className="text-teal-300 font-semibold">{relatedFeature.name}</span>.
                Zero spreadsheet formulas, zero human errors, and 1-click bank transfer exports.
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
                  href={`/features/${relatedFeature.slug}`}
                  className="rounded-full border border-white/25 bg-white/10 hover:bg-white/15 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Explore {relatedFeature.name}</span>
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
        )}
      </div>
    </div>
  );
}
