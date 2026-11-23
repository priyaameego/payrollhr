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
    : toolsData.filter((t: any) => t.slug !== tool.slug).slice(0, 3);

  const getToolIcon = (toolSlug: string) => {
    switch (toolSlug) {
      case "8th-pay-commission-calculator":
        return <Layers className="h-5 w-5 stroke-[2.2]" />;
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

  // Highlight Subject Extraction for Title & Headings
  const getSubjectText = (name: string) => {
    return name
      .replace(/ Calculator$/i, "")
      .replace(/ Calculator \(India\)$/i, "")
      .replace(/ India$/i, "");
  };

  const subjectText = getSubjectText(tool.name);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F0FDFB]/80 via-[#FAFDFD]/50 to-white py-10 sm:py-16">
      {/* Ambient background glowing gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-teal-100/35 blur-[140px] -translate-y-56 pointer-events-none" />
        <div className="h-[400px] w-[600px] rounded-full bg-teal-100/30 blur-[130px] translate-y-96 translate-x-40 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* ============================================================ */}
        {/* 1. HERO HEADER SECTION */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-200/90 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0E7A6E] shadow-2xs">
            <span>FREE TOOL • NO SIGN-UP</span>
          </div>

          {/* Main Headline H1 with Brand Teal Subject Accent */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.16]">
            Free{" "}
            <span className="text-[#0E7A6E]">
              {subjectText}
            </span>{" "}
            Calculator India
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {detail?.introduction || tool.short}
          </p>

          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium pt-1">
            <Link href="/" className="hover:text-[#12B5A5] transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link href="/free-tools" className="hover:text-[#12B5A5] transition-colors">
              Free Tools
            </Link>
            <span>›</span>
            <span className="font-semibold text-slate-700 truncate">{tool.name} (India)</span>
          </nav>
        </div>

        {/* ============================================================ */}
        {/* 2. INTERACTIVE CALCULATOR ENGINE RUNNER */}
        {/* ============================================================ */}
        <section aria-label="Interactive Calculator" className="scroll-mt-12">
          <CalculatorRunner slug={tool.slug} name={tool.name} />
        </section>

        {/* ============================================================ */}
        {/* 3. EDITORIAL GUIDE: WHAT IS THIS TOPIC? */}
        {/* ============================================================ */}
        {detail && (
          <section className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-card space-y-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                What is the{" "}
                <span className="text-[#0E7A6E]">
                  {subjectText}
                </span>
                ?
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              The {subjectText.toLowerCase()} is designed to simplify standard Indian salary and workforce calculations. Whether managing central government scales, private sector CTC components, or daily labor rates, calculations strictly follow statutory labor regulations.
            </p>

            {/* Checkmark Bullets List */}
            <div className="space-y-3 pt-2">
              {detail.whatItDoes.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-[#0E7A6E] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium leading-relaxed">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 4. MID-CONTENT CTA BANNER */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-[#072B28] to-slate-900 border border-teal-800/40 p-8 sm:p-12 text-center text-white shadow-xl space-y-4">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#12B5A5]/20 blur-3xl" />

          <h2 className="relative font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-snug">
            Automate Payroll with PayroleHR
          </h2>

          <p className="relative text-sm sm:text-base text-teal-100/90 leading-relaxed font-normal max-w-xl mx-auto">
            PayroleHR handles salary structures, allowances, and statutory compliance for 30,000+ businesses. Same-day go-live, transparent pricing.
          </p>

          <div className="relative pt-2">
            <Link
              href="/book-a-demo"
              className="rounded-full bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-block cursor-pointer"
            >
              Book a Free Demo →
            </Link>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. FORMULA & WORKED EXAMPLE */}
        {/* ============================================================ */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-card space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              How is{" "}
              <span className="text-[#0E7A6E]">
                {subjectText}
              </span>{" "}
              Calculated?
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
              The primary formula used by payroll managers to compute this figure consolidates the underlying statutory rates, attendance days, and applicable multiplier factor into a standardized calculation.
            </p>
          </div>

          {/* Black Formula Bar */}
          <div className="rounded-2xl bg-[#18181B] text-white p-4 sm:p-5 text-center font-mono font-bold text-sm sm:text-base shadow-md">
            {detail?.formulaCode || tool.formula}
          </div>

          {/* Teal Worked Example Box */}
          {detail?.workedExample && (
            <div className="rounded-r-2xl border-l-4 border-[#12B5A5] bg-[#F0FDFB] border-y border-r border-teal-100/80 p-6 space-y-3">
              <div className="font-bold text-sm sm:text-base text-slate-900">
                {detail.workedExample.scenario}
              </div>

              <div className="space-y-1.5 font-mono text-xs sm:text-sm text-slate-700">
                {detail.workedExample.calculation.map((line, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#0E7A6E] font-bold">•</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-teal-200/70 font-display font-extrabold text-base text-[#0E7A6E]">
                {detail.workedExample.result}
              </div>
            </div>
          )}

          {/* Formula Breakdown Variables */}
          {detail?.formulaBreakdown && (
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-2xs mt-4">
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
                        <span className="rounded-md bg-teal-50 border border-teal-200/80 px-2 py-0.5 text-[#0E7A6E]">
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
        {/* 6. WHO IS THIS CALCULATOR FOR? (PERSONA CARDS) */}
        {/* ============================================================ */}
        {detail?.whoIsItFor && (
          <section className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E] font-mono">
                Target Audience
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-slate-950">
                Who Uses the {tool.name}?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {detail.whoIsItFor.map((persona, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs hover:border-teal-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#0E7A6E] mb-3">
                      {getPersonaIcon(idx)}
                    </div>
                    <h3 className="font-display text-sm font-bold text-slate-900 mb-1.5">
                      {persona.role}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {persona.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 7. STEP-BY-STEP "HOW TO USE" */}
        {/* ============================================================ */}
        {detail?.howToUseSteps && (
          <section className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-card space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E] font-mono">
                How-To Instructions
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-slate-950">
                Step-by-Step Usage Guide
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {detail.howToUseSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 flex gap-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#12B5A5] to-[#0E7A6E] text-white font-mono font-black text-xs shadow-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 8. INTERACTIVE FAQ ACCORDION */}
        {/* ============================================================ */}
        {faqItems.length > 0 && (
          <section className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-card space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E] font-mono">
                Frequently Asked Questions
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-slate-950">
                Common Questions about {tool.name}
              </h2>
            </div>

            <FeatureFaqAccordion items={faqItems} />
          </section>
        )}

        {/* ============================================================ */}
        {/* 9. RELATED FREE TOOLS DIRECTORY & INTERNAL LINKING */}
        {/* ============================================================ */}
        {relatedTools && relatedTools.length > 0 && (
          <section className="space-y-5 pt-4 border-t border-slate-200/80">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  More Free Calculators
                </span>
                <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Related Payroll &amp; HR Free Tools
                </h2>
              </div>
              <Link
                href="/free-tools"
                className="text-xs sm:text-sm font-bold text-[#0E7A6E] hover:text-[#12B5A5] transition flex items-center gap-1.5 group"
              >
                <span>View all {toolsData.length} calculators</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {relatedTools.map((relTool: any) => (
                <Link
                  key={relTool.slug}
                  href={`/free-tools/${relTool.slug}`}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-teal-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8FAF7] text-[#0E7A6E] group-hover:scale-105 group-hover:bg-[#12B5A5] group-hover:text-white transition-all">
                        {getToolIcon(relTool.slug)}
                      </div>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                        {relTool.category}
                      </span>
                    </div>

                    <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-snug">
                      {relTool.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {relTool.short}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E7A6E]">
                    <span>Calculate Now</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
