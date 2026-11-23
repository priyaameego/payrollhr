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
} from "lucide-react";
import toolsData from "@/data/tools.json";
import featuresData from "@/data/features.json";
import CalculatorRunner from "@/components/CalculatorRunner";
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

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#FAFDFD] to-white py-8 sm:py-12">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[700px] rounded-full bg-teal-50/60 blur-[130px] -translate-y-48" />
        <div className="h-[350px] w-[500px] rounded-full bg-blue-50/50 blur-[120px] translate-y-96 translate-x-32" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-12 sm:space-y-16">
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
          <Link href="/free-tools" className="hover:text-[#12B5A5] transition">
            Free Tools
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-900 truncate">{tool.name}</span>
        </nav>

        {/* Hero Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-[#E8FAF7] px-3.5 py-1 text-xs font-bold text-[#0E7A6E]">
              <Calculator className="h-3.5 w-3.5 text-[#12B5A5]" />
              {tool.category}
            </span>
            {detail?.heroBadge && (
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                {detail.heroBadge}
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {detail?.h1 || tool.name}
          </h1>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {detail?.introduction || tool.short}
          </p>
        </div>

        {/* Prominent Interactive Calculator Engine */}
        <section aria-label="Interactive Calculator" className="scroll-mt-12">
          <CalculatorRunner slug={tool.slug} name={tool.name} />
        </section>

        {/* ============================================================ */}
        {/* 1. WHAT THIS CALCULATOR DOES & WHO IT IS FOR */}
        {/* ============================================================ */}
        {detail && (
          <section className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                Target Audience &amp; Value
              </span>
              <h2 className="mt-1.5 font-display text-2xl font-bold text-slate-950">
                What this calculator does and who it is useful for
              </h2>
            </div>

            {/* Persona Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {detail.whoIsItFor.map((persona, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-100 bg-[#FAFDFD] p-4.5 space-y-1">
                  <h3 className="font-display text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#12B5A5]" />
                    {persona.role}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pl-4">
                    {persona.benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Capabilities */}
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Calculator Capabilities:
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {detail.whatItDoes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#12B5A5] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 2. HOW TO USE THE CALCULATOR (STEP-BY-STEP) */}
        {/* ============================================================ */}
        {detail?.howToUseSteps && (
          <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                Step-by-Step Instructions
              </span>
              <h2 className="mt-1.5 font-display text-2xl font-bold text-slate-950">
                How to use the {tool.name}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Follow these simple steps to calculate accurate results in seconds:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {detail.howToUseSteps.map((step) => (
                <div key={step.step} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4.5 flex gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 text-[#0E9486] font-display font-extrabold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
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
        <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Mathematical Integrity
            </span>
            <h2 className="mt-1.5 font-display text-2xl font-bold text-slate-950">
              {detail?.formulaHeading || "Calculation Formula & How It Works"}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              All PayroleHR calculations strictly adhere to statutory Indian accounting standards and labor law formulas:
            </p>
          </div>

          {/* Formula Code Snippet */}
          <div className="rounded-2xl bg-slate-900 p-4.5 text-xs sm:text-sm font-mono text-teal-300 border border-slate-800 shadow-inner overflow-x-auto whitespace-pre-line leading-relaxed">
            {detail?.formulaCode || tool.formula}
          </div>

          {/* Variables Breakdown Table */}
          {detail?.formulaBreakdown && (
            <div className="overflow-hidden rounded-2xl border border-slate-100">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAFDFD] border-b border-slate-100 text-slate-500 font-bold uppercase text-[11px]">
                  <tr>
                    <th className="py-2.5 px-4">Formula Variable</th>
                    <th className="py-2.5 px-4">Statutory Meaning &amp; Indian Rule Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {detail.formulaBreakdown.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-4 font-bold text-slate-900 font-mono text-xs">{row.variable}</td>
                      <td className="py-2.5 px-4 leading-relaxed">{row.meaning}</td>
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
          <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                Real-World Simulation
              </span>
              <h2 className="mt-1.5 font-display text-2xl font-bold text-slate-950">
                Practical Scenario &amp; Worked Example
              </h2>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
                {detail.workedExample.scenario}
              </p>
            </div>

            {/* Input Values Table */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {detail.workedExample.inputs.map((inp, idx) => (
                <div key={idx} className="rounded-xl border border-slate-100 bg-[#F0FDFB]/60 p-3">
                  <span className="text-[11px] font-semibold text-slate-500 block">{inp.label}</span>
                  <span className="text-sm font-bold text-slate-900">{inp.value}</span>
                </div>
              ))}
            </div>

            {/* Step-by-Step Mathematical Calculation */}
            <div className="rounded-2xl bg-slate-50/90 p-4.5 border border-slate-200/70 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Calculation Steps:
              </span>
              <ul className="space-y-1.5 font-mono text-xs sm:text-[13px] text-slate-800">
                {detail.workedExample.calculation.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#12B5A5] font-bold">→</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Final Result Callout */}
            <div className="rounded-2xl border border-teal-200 bg-[#E8FAF7] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E]">Final Computed Result:</span>
                <p className="font-display text-base sm:text-lg font-extrabold text-[#0E7A6E]">
                  {detail.workedExample.result}
                </p>
              </div>
              <span className="text-xs text-slate-600 max-w-sm leading-relaxed sm:text-right">
                {detail.workedExample.note}
              </span>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 5. INTERPRETATION & COMPLIANCE ADVICE */}
        {/* ============================================================ */}
        {detail?.interpretationAndTips && (
          <section className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#12B5A5]" />
              <h2 className="font-display text-xl font-bold text-slate-950">
                Interpretation of Results &amp; Compliance Tips
              </h2>
            </div>
            <ul className="space-y-2.5">
              {detail.interpretationAndTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#12B5A5]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ============================================================ */}
        {/* 6. TOOL FAQS */}
        {/* ============================================================ */}
        {((detail && detail.faqs) || tool.faqs) && (
          <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                Got Questions?
              </span>
              <h2 className="mt-1.5 font-display text-2xl font-bold text-slate-950">
                Frequently asked questions about {tool.name}
              </h2>
            </div>
            <div className="space-y-4 divide-y divide-slate-100">
              {((detail && detail.faqs) || tool.faqs).map((faq: any, idx: number) => (
                <div key={idx} className={idx === 0 ? "pb-4" : "pt-4 pb-2"}>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                    <span className="text-[#12B5A5] font-extrabold">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 7. RELATED FREE CALCULATORS & INTERNAL LINKING */}
        {/* ============================================================ */}
        {relatedTools && relatedTools.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Related Free HR &amp; Payroll Calculators
              </h2>
              <Link
                href="/free-tools"
                className="text-xs font-bold text-[#12B5A5] hover:text-[#0E9486] transition flex items-center gap-1"
              >
                <span>View all 9 tools</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((relTool: any) => (
                <Link
                  key={relTool.slug}
                  href={`/free-tools/${relTool.slug}`}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5]">
                        {getToolIcon(relTool.slug)}
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {relTool.category}
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-[#0E7A6E] transition">
                      {relTool.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                      {relTool.short}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E7A6E]">
                    <span>Calculate Now</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 8. AUTOMATE IN PAYROLEHR (MODULE CTA BANNER) */}
        {/* ============================================================ */}
        {relatedFeature && (
          <section className="rounded-3xl border border-teal-100 bg-gradient-to-br from-[#F0FDFB] to-white p-8 text-center sm:p-11 shadow-card">
            <span className="inline-block rounded-full bg-[#E6F9F6] border border-teal-200 px-3.5 py-1 text-xs font-bold text-[#0E7A6E]">
              Automate This Entire Process
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              Never calculate this by hand again
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
              PayroleHR runs {tool.name.toLowerCase().replace(" calculator", "")} automatically inside our {relatedFeature.name}.
              Zero spreadsheet formulas, zero human errors, and 1-click bank transfer exports.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href={`/features/${relatedFeature.slug}`}
                className="rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                Explore {relatedFeature.name}
              </Link>
              <Link
                href="/book-a-demo"
                className="rounded-full border border-teal-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Book a Free Demo
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
