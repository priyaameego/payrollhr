import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import featuresData from "@/data/features.json";
import FeatureScreenMockup from "@/components/FeatureScreenMockup";
import { FeatureIcon } from "@/components/IconHelper";

export async function generateStaticParams() {
  return featuresData.map((f: any) => ({
    slug: f.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feat = featuresData.find((f: any) => f.slug === slug);
  if (!feat) return { title: "Feature — PayroleHR" };
  return {
    title: `${feat.name} — PayroleHR`,
    description: feat.intro || feat.short,
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feat = featuresData.find((f: any) => f.slug === slug);

  if (!feat) {
    notFound();
  }

  // Find related features
  const relatedFeatures = (feat.related || [])
    .map((rSlug: string) => featuresData.find((f: any) => f.slug === rSlug))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-16 sm:space-y-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/features" className="hover:text-[#12B5A5]">
          Features
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-900">{feat.name}</span>
      </nav>

      {/* Hero Section */}
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-[#E8FAF7] px-3.5 py-1 text-xs font-bold text-[#0E7A6E]">
            <FeatureIcon slug={feat.slug} className="h-3.5 w-3.5 text-[#12B5A5]" />
            {feat.name}
          </div>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
            {feat.headline}
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            {feat.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-demo"
              className="rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-teal-500/25 hover:from-[#0E9486] hover:to-[#0B7A6E] hover:shadow-lg transition-all"
            >
              Book a demo
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              All features
            </Link>
          </div>
        </div>

        {/* Live Mockup */}
        <FeatureScreenMockup
          title={feat.screen?.title || feat.name}
          rows={feat.screen?.rows || []}
        />
      </section>

      {/* The Problem & Solution Breakdown */}
      <section className="rounded-3xl border border-teal-100/90 bg-white p-8 sm:p-12 shadow-card">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Problem */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-rose-600">
              <XCircle className="h-5 w-5" />
              <h2 className="font-display text-lg font-bold">The problem</h2>
            </div>
            <ul className="space-y-3 pt-2">
              {feat.problem?.map((p: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-4 md:border-l md:border-slate-100 md:pl-10">
            <div className="flex items-center gap-2 text-[#0E7A6E]">
              <CheckCircle2 className="h-5 w-5 text-[#12B5A5]" />
              <h2 className="font-display text-lg font-bold">How PayroleHR solves it</h2>
            </div>
            <p className="pt-2 text-sm leading-relaxed text-slate-700">
              {feat.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      {feat.capabilities && feat.capabilities.length > 0 && (
        <section>
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Feature Highlights
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              Key capabilities
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {feat.capabilities.map((cap: any, idx: number) => (
              <div
                key={idx}
                className="rounded-2xl border border-teal-100/80 bg-white p-6 shadow-sm hover:border-teal-200 transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-[#12B5A5] mb-3">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900">
                  {cap.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {cap.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* How to get started steps */}
      {feat.steps && feat.steps.length > 0 && (
        <section className="rounded-3xl border border-teal-100/90 bg-[#F0FDFB] p-8 sm:p-12 shadow-sm">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">
              Simple Setup
            </span>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              How to get started
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {feat.steps.map((step: string, idx: number) => (
              <div
                key={idx}
                className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-xs font-bold text-white mb-3">
                  {idx + 1}
                </span>
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Feature FAQs */}
      {feat.faqs && feat.faqs.length > 0 && (
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-slate-950 mb-6">
            Frequently asked questions about {feat.name}
          </h2>
          <div className="space-y-3">
            {feat.faqs.map((faq: any, idx: number) => (
              <div
                key={idx}
                className="rounded-2xl border border-teal-100/80 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Features */}
      {relatedFeatures.length > 0 && (
        <section className="border-t border-slate-200/80 pt-10">
          <h2 className="font-display text-xl font-bold text-slate-900 mb-6">
            Related features
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedFeatures.map((rf: any) => (
              <Link
                key={rf.slug}
                href={`/features/${rf.slug}`}
                className="group rounded-2xl border border-teal-100/80 bg-white p-5 shadow-sm hover:border-[#12B5A5] transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] mb-2.5">
                  <FeatureIcon slug={rf.slug} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">
                  {rf.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                  {rf.short}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
