import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Check,
  HelpCircle,
  TrendingUp,
} from "lucide-react";
import glossaryData from "@/data/glossary.json";
import featuresData from "@/data/features.json";
import FeatureFaqAccordion from "@/app/features/[slug]/FeatureFaqAccordion";
import {
  termToSlug,
  getGlossaryDetail,
} from "@/data/glossaryDetails";

export async function generateStaticParams() {
  return glossaryData.map((item: any) => ({
    slug: termToSlug(item.term),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const matchedTerm = glossaryData.find(
    (item: any) => termToSlug(item.term) === slug
  );

  if (!matchedTerm) return { title: "HR Glossary — PayroleHR" };

  const detail = getGlossaryDetail(slug, matchedTerm);

  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
  };
}

export default async function GlossaryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const matchedTerm = glossaryData.find(
    (item: any) => termToSlug(item.term) === slug
  );

  if (!matchedTerm) {
    notFound();
  }

  const detail = getGlossaryDetail(slug, matchedTerm);
  const relatedFeature =
    featuresData.find((f: any) => f.slug === detail.howPayroleHrHelps.featureSlug) ||
    featuresData[0];

  // Convert faqs for accordion
  const faqItems = detail.faqs.map((f) => ({
    q: f.q,
    a: f.a,
  }));

  // Sidebar list of terms (matching user screenshot)
  const sidebarTerms = glossaryData.map((item: any) => ({
    term: item.term,
    slug: termToSlug(item.term),
  }));

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F0F6FE]/70 via-[#F8FBFE]/40 to-white py-8 sm:py-14">
      {/* Ambient background glowing gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-teal-100/35 blur-[140px] -translate-y-56 pointer-events-none" />
        <div className="h-[400px] w-[600px] rounded-full bg-sky-100/30 blur-[130px] translate-y-96 translate-x-40 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-8">
          <Link href="/" className="hover:text-[#12B5A5] transition">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <Link href="/glossary" className="hover:text-[#12B5A5] transition">
            Glossary
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-900 truncate">{detail.term}</span>
        </nav>

        {/* 2-Column Responsive Layout: Main Content (8 cols) + Sticky Glossary Sidebar (4 cols) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* ============================================================ */}
          {/* LEFT / MAIN COLUMN (lg:col-span-8) */}
          {/* ============================================================ */}
          <main className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Header Block */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-[#E8FAF7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7A6E] shadow-2xs">
                  <BookOpen className="h-3.5 w-3.5 text-[#12B5A5]" />
                  Glossary • {detail.category}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                  <Sparkles className="h-3 w-3 text-[#12B5A5]" />
                  Plain English Definition
                </span>
              </div>

              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-950 tracking-tight leading-[1.15]">
                {detail.term}
              </h1>

              {/* Definition Callout Box (AttendoHR Luxury Style) */}
              <div className="mt-5 rounded-3xl border-2 border-teal-200/90 bg-gradient-to-br from-[#E8FAF7]/90 via-white to-[#F0FDFB] p-6 sm:p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-[#12B5A5] to-emerald-400" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E] block mb-2">
                  Official Definition:
                </span>
                <p className="font-display text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-relaxed">
                  &ldquo;{detail.definition}&rdquo;
                </p>
                <div className="mt-4 pt-3.5 border-t border-teal-100/80 flex items-center gap-2 text-xs font-medium text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Verified for Indian Labour Laws, Factories Act &amp; EPFO/ESIC Regulations</span>
                </div>
              </div>
            </div>

            {/* In-depth Section 1: Detailed Overview */}
            <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-card space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                <BookOpen className="h-3.5 w-3.5 text-[#12B5A5]" />
                In-Depth Explanation
              </span>
              <h2 className="font-display text-2xl font-extrabold text-slate-950">
                What is {detail.term} in Indian HR &amp; Payroll?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {detail.overview}
              </p>
            </section>

            {/* In-depth Section 2: Key Operational Impacts */}
            <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-card space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                  <TrendingUp className="h-3.5 w-3.5 text-[#12B5A5]" />
                  Key Business Impacts
                </span>
                <h2 className="mt-1 font-display text-2xl font-extrabold text-slate-950">
                  How {detail.term} Impacts Payroll &amp; Compliance
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {detail.keyImpacts.map((impact, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-[#FAFDFD] p-5 hover:border-teal-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 border border-teal-200 text-[#0E7A6E] text-xs font-bold">
                        {idx + 1}
                      </span>
                      <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                        {impact.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal pl-9.5">
                      {impact.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* In-depth Section 3: Statutory Legal Basis */}
            <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-card space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 border border-teal-200 text-[#0E7A6E]">
                  <ShieldCheck className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                    Indian Statutory Compliance
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
                    Statutory Rules &amp; Labour Laws
                  </h2>
                </div>
              </div>

              <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB]/60 p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0E7A6E]">
                  <span className="rounded-md bg-white border border-teal-200 px-2.5 py-1">
                    Governing Law:
                  </span>
                  <span className="text-slate-900 font-display text-sm">
                    {detail.statutoryBasis.lawOrAct}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Legal Rule: </strong>
                  {detail.statutoryBasis.rule}
                </p>
                <div className="rounded-xl bg-white p-3.5 border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-[#0E7A6E]">Compliance Advisory: </strong>
                  {detail.statutoryBasis.complianceNote}
                </div>
              </div>
            </section>

            {/* In-depth Section 4: Practical Real-World Scenario */}
            <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-card space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                  <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
                  Worked Calculation Example
                </span>
                <h2 className="mt-1 font-display text-2xl font-extrabold text-slate-950">
                  Practical Scenario: {detail.practicalScenario.headline}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {detail.practicalScenario.example}
                </p>
              </div>

              {detail.practicalScenario.calculation && (
                <div className="rounded-2xl bg-slate-50/90 p-5 border border-slate-200/80 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Step-by-Step Calculation:
                  </span>
                  <ul className="space-y-2 font-mono text-xs sm:text-[13px] text-slate-800">
                    {detail.practicalScenario.calculation.map((step, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="text-[#12B5A5] font-black text-sm">→</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-3xl border-2 border-[#12B5A5]/80 bg-gradient-to-r from-[#E6FAF7] via-white to-[#E6FAF7] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-xs">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E]">
                    {detail.practicalScenario.resultLabel}
                  </span>
                  <p className="mt-1 font-display text-xl sm:text-2xl font-black text-[#0E7A6E]">
                    {detail.practicalScenario.resultValue}
                  </p>
                </div>
                <Link
                  href="/free-tools"
                  className="rounded-full bg-white border border-teal-200 px-4 py-2 text-xs font-bold text-[#0E7A6E] hover:bg-teal-50 transition shadow-2xs self-start sm:self-auto"
                >
                  Explore Free Calculators →
                </Link>
              </div>
            </section>

            {/* In-depth Section 5: How PayroleHR Automates This */}
            <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-card space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                  <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
                  PayroleHR Automation
                </span>
                <h2 className="mt-1 font-display text-2xl font-extrabold text-slate-950">
                  How PayroleHR Solves &amp; Automates {detail.term}
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {detail.howPayroleHrHelps.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F9FBFA] p-4 hover:bg-white hover:border-teal-200 transition-all"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-50 border border-teal-200 text-[#12B5A5] mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* In-depth Section 6: FAQs (Interactive Collapsible) */}
            {faqItems.length > 0 && (
              <section className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-card space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                    <HelpCircle className="h-3.5 w-3.5 text-[#12B5A5]" />
                    Frequently Asked Questions
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-extrabold text-slate-950">
                    Common Questions About {detail.term}
                  </h2>
                </div>
                <FeatureFaqAccordion items={faqItems} />
              </section>
            )}

            {/* In-depth Section 7: AttendoHR Signature Dark Showcase CTA Banner */}
            <section className="relative overflow-hidden rounded-3xl border border-teal-800/40 bg-gradient-to-br from-slate-950 via-[#072B28] to-slate-900 p-8 sm:p-12 text-center shadow-2xl text-white">
              <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-teal-500/20 blur-[130px]" />

              <div className="relative z-10 max-w-xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-teal-300" />
                  Effortless HR &amp; Payroll Software
                </span>

                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Automate {detail.term.toLowerCase()} with PayroleHR
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Stop managing workforce compliance on error-prone spreadsheets. Experience automated face check-in, shift rosters, and 1-click bank payouts.
                </p>

                <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
                  <Link
                    href="/book-a-demo"
                    className="rounded-full bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-teal-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>Book a Free Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/features/${relatedFeature.slug}`}
                    className="rounded-full border border-white/25 bg-white/10 hover:bg-white/15 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition-all inline-flex items-center gap-1.5"
                  >
                    <span>Explore {relatedFeature.name}</span>
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* ============================================================ */}
          {/* RIGHT / SIDEBAR COLUMN (lg:col-span-4) - MATCHES USER SCREENSHOT */}
          {/* ============================================================ */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-7 shadow-card">
              {/* Header Matching User's Screenshot Exactly */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                <BookOpen className="h-4 w-4 stroke-[2.2]" />
                <span>GLOSSARY</span>
              </div>

              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-950">
                HR &amp; Payroll glossary
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Understand key HR, payroll and compliance terms in simple language.
              </p>

              {/* Terms List with Mint Book Icons Matching Screenshot */}
              <div className="mt-6 space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
                {sidebarTerms.map((t) => {
                  const isActive = t.slug === slug;
                  return (
                    <Link
                      key={t.slug}
                      href={`/glossary/${t.slug}`}
                      className={`group flex items-center gap-3 rounded-xl p-2.5 text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#E8FAF7] border border-teal-200/90 text-[#0E7A6E] font-bold shadow-2xs"
                          : "text-slate-800 hover:bg-slate-50 hover:text-[#12B5A5]"
                      }`}
                    >
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all ${
                          isActive
                            ? "bg-[#12B5A5] border-[#12B5A5] text-white"
                            : "bg-teal-50/80 border-teal-200/60 text-[#0E7A6E] group-hover:scale-105"
                        }`}
                      >
                        <BookOpen className="h-3.5 w-3.5 stroke-[2.2]" />
                      </div>
                      <span className="truncate">{t.term}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Bottom "View full glossary →" Button Matching Screenshot Exactly */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Link
                  href="/glossary"
                  className="w-full rounded-2xl border-2 border-teal-200/90 bg-white py-3 px-4 text-center text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/60 transition-all shadow-2xs flex items-center justify-center gap-2 group"
                >
                  <span>View full glossary</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Quick Demo Assist Card */}
            <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50/70 via-white to-teal-50/40 p-6 text-center shadow-xs space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E]">
                Need Tailored Guidance?
              </span>
              <h4 className="font-display text-base font-bold text-slate-900">
                See How PayroleHR Fits Your Business
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our payroll specialists will walk you through shift setups, LOP rules, and bank files.
              </p>
              <Link
                href="/book-a-demo"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#12B5A5] transition-all"
              >
                <span>Schedule a 15-Min Walkthrough</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
