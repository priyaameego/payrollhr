import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Calendar,
  PlayCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import FeaturesInteractiveShowcase from "@/components/FeaturesInteractiveShowcase";
import { productGroups } from "@/data/navigation";
import { FeatureIcon } from "@/components/IconHelper";
import featuresData from "@/data/features.json";

export const metadata = {
  title: "Every Feature Inside One Connected System — PayroleHR",
  description:
    "From Punch to Payslip – Fully Synced. Explore all 34 HR, attendance, shifts, leave, and payroll automation modules.",
};

export default function FeaturesPage() {
  const findFeature = (slug: string) =>
    featuresData.find((f: any) => f.slug === slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 space-y-12">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Screenshot 2 Match) */}
      {/* ============================================================ */}
      <section className="text-center py-6 sm:py-10 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-[#12B5A5] transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <span className="font-semibold text-slate-800">Features</span>
        </nav>

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/90 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-2xs">
          <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
          <span>ALL-IN-ONE PAYROLL SYSTEM</span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
          Every Feature
          <br />
          <span className="bg-gradient-to-r from-[#12B5A5] via-[#2DD4BF] to-[#0E9486] bg-clip-text text-transparent">
            Inside One Connected System
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
          From Punch to Payslip – Fully Synced
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/book-a-demo"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all hover:-translate-y-0.5"
          >
            <Calendar className="h-4 w-4" />
            <span>Book a Free Demo</span>
          </Link>
          <a
            href="#interactive-showcase"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-2xs hover:border-teal-200 hover:text-[#0E7A6E] hover:bg-teal-50/40 transition-all hover:-translate-y-0.5"
          >
            <PlayCircle className="h-4 w-4 text-[#12B5A5]" />
            <span>See how it works</span>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. INTERACTIVE FEATURE SLIDER / SHOWCASE (Screenshot 3 Match) */}
      {/* ============================================================ */}
      <div id="interactive-showcase" className="scroll-mt-24">
        <FeaturesInteractiveShowcase />
      </div>

      {/* ============================================================ */}
      {/* 3. COMPLETE 34-MODULE DIRECTORY */}
      {/* ============================================================ */}
      <section className="pt-12 border-t border-slate-200/70">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Complete System Directory
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
            Explore All 34 Modular Capabilities
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Grouped the way Indian HR, attendance, and payroll teams work.
          </p>
        </div>

        <div className="space-y-12">
          {productGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="h-2 w-2 rounded-full bg-[#12B5A5]" />
                {group.title}
                <span className="text-xs font-normal text-slate-400 font-mono">
                  ({group.items.length} modules)
                </span>
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((slug) => {
                  const feat = findFeature(slug);
                  if (!feat) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/features/${slug}`}
                      className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-[#12B5A5] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="attendo-icon-box h-10 w-10 shrink-0">
                            <FeatureIcon slug={slug} className="h-5 w-5 stroke-[2.2]" />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-teal-700 bg-teal-50 border border-teal-200/80 rounded-full px-2 py-0.5 uppercase">
                            Active
                          </span>
                        </div>
                        <h4 className="mt-3 font-display text-sm font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                          {feat.name}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">
                          {feat.short}
                        </p>
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5]">
                        <span>View specifications</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
