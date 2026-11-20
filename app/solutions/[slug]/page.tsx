import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";
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
    title: `${sol.name} — PayroleHR Solutions`,
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

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-16 sm:space-y-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/solutions" className="hover:text-[#12B5A5]">
          Solutions
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-900">{sol.name}</span>
      </nav>

      {/* Hero Section */}
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-[#E8FAF7] px-3.5 py-1 text-xs font-bold text-[#0E7A6E]">
            <FeatureIcon slug={sol.slug} className="h-3.5 w-3.5 text-[#12B5A5]" />
            {sol.name}
          </div>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
            {sol.headline}
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            {sol.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-demo"
              className="rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-teal-500/25 hover:from-[#0E9486] hover:to-[#0B7A6E] hover:shadow-lg transition-all"
            >
              Book a demo for {sol.name}
            </Link>
            <Link
              href="/solutions"
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              All solutions
            </Link>
          </div>
        </div>

        {/* Live Mockup */}
        <FeatureScreenMockup
          title={`${sol.name} Setup`}
          eyebrow="Industry Configuration"
          rows={[
            ["Target Industry", sol.name],
            ["Workforce Schedule", "Tailored Shift Roster"],
            ["Face Attendance Kiosk", "Active at Gate"],
            ["Salary Engine", "Custom statutory formulas"],
          ]}
        />
      </section>

      {/* Challenges & Needs */}
      {sol.challenges && sol.challenges.length > 0 && (
        <section className="attendo-card p-8 sm:p-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Real-world pain points
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              Common challenges in {sol.name.toLowerCase()}
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {sol.challenges.map((ch: string, idx: number) => (
              <div
                key={idx}
                className="attendo-card-hover flex items-start gap-3.5 rounded-2xl border border-rose-100 bg-rose-50/25 p-5 transition-all"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500 border border-rose-200/60">
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

      {/* Suggested Features / Capabilities */}
      <section className="attendo-card p-8 sm:p-12">
        <h2 className="font-display text-2xl font-bold text-slate-950 mb-6">
          How PayroleHR is configured for this workflow
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="attendo-card attendo-card-hover p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-100 text-[#12B5A5] mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Custom Timings & Rosters</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Different staff groups follow different shift patterns, grace rules and holiday calendars.
              </p>
            </div>
          </div>
          <div className="attendo-card attendo-card-hover p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-100 text-[#12B5A5] mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Zero Device Friction</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Run face attendance kiosks on standard Android tablets without buying vendor-locked hardware.
              </p>
            </div>
          </div>
          <div className="attendo-card attendo-card-hover p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-100 text-[#12B5A5] mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">1-Click Bank Salary Payout</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Generate error-free bank bulk upload sheets formatted for ICICI, HDFC, SBI, Axis and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
