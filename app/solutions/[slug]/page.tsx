import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Calendar,
  Building,
  GraduationCap,
  Factory,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Layers,
  ShieldCheck,
  Check,
} from "lucide-react";
import solutionsData from "@/data/solutions.json";
import FeatureScreenMockup from "@/components/FeatureScreenMockup";
import { FeatureIcon } from "@/components/IconHelper";

export async function generateStaticParams() {
  return solutionsData.map((s: any) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = solutionsData.find((s: any) => s.slug === slug);
  if (!sol) return { title: "Solution — PayroleHR" };
  return {
    title: `${sol.name} HR, Attendance & Payroll — PayroleHR Solutions`,
    description: sol.intro || sol.short,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = solutionsData.find((s: any) => s.slug === slug);

  if (!sol) {
    notFound();
  }

  // Get other solutions for navigation
  const otherSolutions = solutionsData.filter((s: any) => s.slug !== slug);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAFDFD] via-white to-[#F8FAFC] py-8 sm:py-12">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[450px] w-[750px] rounded-full bg-teal-100/35 blur-[140px] -translate-y-56 pointer-events-none" />
        <div className="h-[400px] w-[600px] rounded-full bg-emerald-100/25 blur-[130px] translate-y-96 translate-x-40 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* ============================================================ */}
        {/* 1. BREADCRUMBS */}
        {/* ============================================================ */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#12B5A5] transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link href="/solutions" className="hover:text-[#12B5A5] transition-colors">
            Solutions
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900">{sol.name}</span>
        </nav>

        {/* ============================================================ */}
        {/* 2. HERO SECTION */}
        {/* ============================================================ */}
        <section className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5">
            {/* Industry Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/90 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-2xs">
              <FeatureIcon slug={sol.slug} className="h-4 w-4 text-[#12B5A5]" />
              <span>{sol.heroBadge || `${sol.name} Blueprint`}</span>
            </div>

            {/* Dynamic H1 Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.14]">
              {sol.headline}
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {sol.intro}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/book-a-demo"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/25 hover:from-[#0E9486] hover:to-[#0B7A6E] hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="h-4 w-4" />
                <span>Book a Demo for {sol.name}</span>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/90 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-2xs hover:bg-slate-50 hover:border-teal-200 hover:text-[#0E7A6E] transition-all duration-200"
              >
                <span>All Solutions</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* Hero Visual: Industry Image Card with Overlays */}
          <div className="lg:col-span-5 relative group">
            <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white p-2 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={sol.image || "/images/solutions/solutions-hero-banner.jpg"}
                  alt={sol.name}
                  width={640}
                  height={480}
                  priority
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-white/90 backdrop-blur-md p-2.5 border border-white/40 shadow-sm text-xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#12B5A5] animate-ping" />
                    <span className="font-bold text-slate-900">{sol.name} Blueprint</span>
                  </div>
                  <span className="font-semibold text-[#0E7A6E]">Ready to deploy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. METRIC STRIP (4 Key Sector Highlights) */}
        {/* ============================================================ */}
        {sol.stats && sol.stats.length > 0 && (
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {sol.stats.map((stat: any, idx: number) => (
              <div
                key={idx}
                className="rounded-2xl border border-teal-100/90 bg-white p-5 text-center shadow-xs hover:border-teal-200 hover:shadow-md transition-all duration-200"
              >
                <div className="font-display text-xl sm:text-2xl font-black text-[#0E7A6E] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* ============================================================ */}
        {/* 4. REAL-WORLD PAIN POINTS / CHALLENGES GRID */}
        {/* ============================================================ */}
        {sol.challenges && sol.challenges.length > 0 && (
          <section className="rounded-3xl border border-rose-100/80 bg-gradient-to-b from-rose-50/20 via-white to-white p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 font-mono">
                Industry-Specific Challenges
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Common Pain Points in {sol.name}
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                Generic payroll tools create manual friction because they don&apos;t understand the operational reality of {sol.name.toLowerCase()}.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sol.challenges.map((ch: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 rounded-2xl border border-rose-100/80 bg-white p-5 shadow-2xs hover:border-rose-200 hover:shadow-xs transition-all"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500 border border-rose-200/60">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    {ch}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 5. OPERATIONAL WORKFLOW TIMELINE */}
        {/* ============================================================ */}
        {sol.workflow && sol.workflow.length > 0 && (
          <section className="rounded-3xl border border-teal-100/90 bg-gradient-to-b from-[#FAFDFD] via-white to-white p-6 sm:p-10 shadow-card">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5] font-mono">
                End-to-End Operational Flow
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                How {sol.name} Runs on PayroleHR
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                From morning arrival punches to salary disbursement and statutory returns in four connected steps.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
              {sol.workflow.map((st: any, idx: number) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-xs hover:border-[#12B5A5] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#12B5A5] to-[#0E7A6E] text-white font-mono font-black text-sm shadow-sm shadow-teal-500/20">
                        {st.step}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-snug">
                      {st.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 6. CORE CONFIGURED FEATURES GRID */}
        {/* ============================================================ */}
        {sol.features && sol.features.length > 0 && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5] font-mono">
                  Engineered Capabilities
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Pre-Configured Modules for {sol.name}
                </h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed font-normal">
                  Each feature is set up to mirror your sector&apos;s real-world compliance and operational rules.
                </p>
              </div>

              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12B5A5] hover:text-[#0E7A6E] transition-colors"
              >
                <span>Explore all 34 modules</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sol.features.map((feat: any, idx: number) => (
                <div
                  key={idx}
                  className="group rounded-3xl border border-teal-100/90 bg-white p-6 shadow-xs hover:border-[#12B5A5] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors duration-300">
                        <FeatureIcon slug={feat.slug} className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#0E7A6E] bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                        Active Module
                      </span>
                    </div>

                    <Link href={`/features/${feat.slug}`}>
                      <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-snug">
                        {feat.title}
                      </h3>
                    </Link>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {feat.why}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      href={`/features/${feat.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#12B5A5] hover:text-[#0E7A6E] transition-colors"
                    >
                      <span>Learn about {feat.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 7. LIVE SCREEN MOCKUP & OPERATIONAL SCENARIOS */}
        {/* ============================================================ */}
        <section className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: Feature Screen Mockup */}
          <div className="lg:col-span-5">
            <FeatureScreenMockup
              title={sol.screen?.title || `${sol.name} Master`}
              eyebrow={sol.screen?.eyebrow || "Sector Configuration"}
              rows={
                sol.screen?.rows || [
                  ["Target Industry", sol.name],
                  ["Workforce Schedule", "Tailored Shift Roster"],
                  ["Face Attendance Kiosk", "Active at Gate"],
                  ["Salary Engine", "Custom statutory formulas"],
                ]
              }
            />
          </div>

          {/* Right: Real-World Use Cases */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5] font-mono">
                Field Scenarios
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Real-World Scenarios Handled Seamlessly
              </h2>
            </div>

            <div className="space-y-3.5">
              {(sol.scenarios || []).map((sc: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-teal-200 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-[#0E7A6E] font-bold text-xs">
                      ✓
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                      {sc.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-7">
                    {sc.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. INDUSTRY FAQS ACCORDION */}
        {/* ============================================================ */}
        {sol.faqs && sol.faqs.length > 0 && (
          <section className="rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-10 shadow-card">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5] font-mono">
                Common Inquiries
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions for {sol.name}
              </h2>
            </div>

            <div className="space-y-3">
              {sol.faqs.map((faq: any, idx: number) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 transition-all open:border-teal-300 open:bg-white open:shadow-xs"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-sm sm:text-base font-bold text-slate-900 group-open:text-[#0E7A6E] list-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-[#12B5A5] shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 9. EXPLORE OTHER INDUSTRY BLUEPRINTS */}
        {/* ============================================================ */}
        <section className="space-y-6 pt-6 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Explore More Solutions
              </span>
              <h2 className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                Other Industry Sector Blueprints
              </h2>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12B5A5] hover:text-[#0E7A6E] transition-colors"
            >
              <span>View all 6 industry solutions</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherSolutions.map((other: any) => (
              <Link
                key={other.slug}
                href={`/solutions/${other.slug}`}
                className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs hover:border-[#12B5A5] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors duration-200 mb-3">
                    <FeatureIcon slug={other.slug} className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-snug">
                    {other.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {other.short}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#12B5A5]">
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. HIGH-CONVERTING BOTTOM CTA BANNER */}
        {/* ============================================================ */}
        <section className="rounded-3xl bg-gradient-to-r from-teal-950 via-[#0A4D46] to-emerald-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-teal-200 border border-white/15">
              <Sparkles className="h-3.5 w-3.5 text-teal-300" />
              <span>Tailored Deployment for {sol.name}</span>
            </span>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-snug">
              Ready to automate attendance &amp; payroll for your {sol.name.toLowerCase()}?
            </h2>

            <p className="text-sm sm:text-base text-teal-100 leading-relaxed font-normal">
              Schedule a personalized walkthrough with a PayroleHR product specialist configured specifically for your workforce structure.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/book-a-demo"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0E7A6E] shadow-lg hover:bg-teal-50 transition-all hover:scale-105"
              >
                Book a Free 1-on-1 Demo
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
