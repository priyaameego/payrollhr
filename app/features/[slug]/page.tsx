import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  XCircle,
  MessageCircle,
} from "lucide-react";
import featuresData from "@/data/features.json";
import FeatureScreenMockup from "@/components/FeatureScreenMockup";
import { FeatureIcon } from "@/components/IconHelper";
import { contactDetails } from "@/data/navigation";
import FeatureFaqAccordion from "./FeatureFaqAccordion";
import FeaturesInteractiveShowcase from "@/components/FeaturesInteractiveShowcase";

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
    <div>
      {/* 0. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-teal-100/70">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#12B5A5]/10 via-[#F8FCFB] to-[#8FE8DC]/15" />
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 grid items-center gap-12 md:grid-cols-2">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1 text-xs text-slate-500">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <span className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                <Link href="/features" className="hover:text-slate-900">
                  Features
                </Link>
              </span>
              <span className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                <span className="font-semibold text-slate-900">{feat.name}</span>
              </span>
            </nav>

            <p className="mb-3 text-sm font-semibold text-[#12B5A5]">
              {feat.name}
            </p>
            <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
              {feat.headline}
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              {feat.intro}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book-a-demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-8 py-2.5 text-sm font-medium text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
              >
                Book a demo
              </Link>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-200 bg-white px-8 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-teal-50/50 hover:text-[#12B5A5] transition-all"
              >
                <MessageCircle className="h-4 w-4 text-[#12B5A5]" />
                WhatsApp us
              </a>
            </div>
          </div>

          {/* Right Aside Mockup */}
          <div>
            <FeatureScreenMockup
              title={feat.screen?.title || feat.name}
              rows={feat.screen?.rows || []}
            />
          </div>
        </div>
      </section>

      {/* 0.5 INTERACTIVE FEATURE SHOWCASE WITH 7 VALUE CARDS & STICKY PHONE MOCKUP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10" id="interactive-showcase">
        <FeaturesInteractiveShowcase initialId={slug === "attendance-management" ? "attendance" : slug} />
      </section>

      {/* 1. THE PROBLEM VS HOW PAYROLEHR SOLVES IT */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
        <div className="rounded-3xl border border-rose-100 bg-rose-50/25 p-7 sm:p-8 shadow-xs">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700 mb-4">
            Common Bottlenecks
          </div>
          <h2 className="font-display text-xl font-bold text-slate-950">
            The problem with traditional systems
          </h2>
          <ul className="mt-6 space-y-3.5">
            {feat.problem?.map((p: string, idx: number) => (
              <li key={idx} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-teal-100 bg-teal-50/25 p-7 sm:p-8 shadow-xs">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-[#0E7A6E] mb-4">
            PayroleHR Architecture
          </div>
          <h2 className="font-display text-xl font-bold text-slate-950">
            How PayroleHR solves it automatically
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-700">
            {feat.solution}
          </p>
        </div>
      </section>

      {/* 2. KEY CAPABILITIES */}
      {feat.capabilities && feat.capabilities.length > 0 && (
        <section className="bg-slate-50/60 border-y border-teal-100/50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                Built-in Features
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-950 mt-1">
                Key capabilities
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {feat.capabilities.map((cap: any, idx: number) => (
                <div
                  key={idx}
                  className="card-interactive rounded-3xl border border-teal-100/80 bg-white p-6 shadow-card hover:shadow-card-hover hover:border-[#12B5A5]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] border border-teal-100">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {cap.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. HOW IT WORKS */}
      {feat.steps && feat.steps.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Workflow Flowchart
            </span>
            <h2 className="font-display text-2xl font-bold text-slate-950 mt-1">
              How it works
            </h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-3">
            {feat.steps.map((step: string, idx: number) => (
              <li
                key={idx}
                className="card-interactive rounded-3xl border border-teal-100/80 bg-white p-6 shadow-card"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] font-display font-black text-white text-sm shadow-sm">
                  {idx + 1}
                </span>
                <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* 4. RELATED FEATURES */}
      {relatedFeatures.length > 0 && (
        <section className="bg-slate-50/60 border-y border-teal-100/50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              Related features
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedFeatures.map((rf: any) => (
                <Link
                  key={rf.slug}
                  href={`/features/${rf.slug}`}
                  className="attendo-card attendo-card-hover group p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="attendo-icon-box h-11 w-11 shrink-0">
                      <FeatureIcon slug={rf.slug} className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-slate-900 text-hover-lux">
                      {rf.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {rf.short}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5] group-hover:text-[#0E7A6E] transition-colors">
                    <span className="text-hover-lux font-bold">View module</span>
                    <ArrowRight className="h-3.5 w-3.5 arrow-hover-lux" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      {feat.faqs && feat.faqs.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-display text-2xl font-bold text-slate-950 mb-6 text-center">
            Frequently asked questions
          </h2>
          <FeatureFaqAccordion items={feat.faqs} />
        </section>
      )}

      {/* 6. PRE-FOOTER BANNER */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0B7A6E] p-10 text-white md:p-14 shadow-xl">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            See PayroleHR with your own rules
          </h2>
          <p className="mt-3 max-w-xl text-teal-50">
            Tell us how your organisation works and we&apos;ll show you how it fits — attendance, leave, payroll and bank files.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book-a-demo"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-2.5 text-sm font-bold text-[#0E7A6E] shadow-sm hover:bg-teal-50 transition-colors"
            >
              Book a demo
            </Link>
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
