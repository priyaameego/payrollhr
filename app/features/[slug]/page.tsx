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

      {/* 1. THE PROBLEM VS HOW PAYROLEHR SOLVES IT */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-bold text-slate-950">
            The problem
          </h2>
          <ul className="mt-6 space-y-3">
            {feat.problem?.map((p: string, idx: number) => (
              <li key={idx} className="flex gap-3 text-sm text-slate-700">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-slate-950">
            How PayroleHR solves it
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-600">
            {feat.solution}
          </p>
        </div>
      </section>

      {/* 2. KEY CAPABILITIES */}
      {feat.capabilities && feat.capabilities.length > 0 && (
        <section className="bg-slate-50/60 border-y border-teal-100/50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              Key capabilities
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {feat.capabilities.map((cap: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-teal-100/80 bg-white p-5 shadow-sm hover:shadow-card transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#12B5A5]" />
                  <h3 className="mt-3 font-display font-semibold text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
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
          <h2 className="font-display text-2xl font-bold text-slate-950">
            How it works
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {feat.steps.map((step: string, idx: number) => (
              <li
                key={idx}
                className="rounded-2xl border border-teal-100/80 bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] font-display font-bold text-white text-sm">
                  {idx + 1}
                </span>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed font-medium">
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
                  className="group rounded-2xl border border-teal-100/80 bg-white p-5 shadow-sm hover:shadow-card hover:border-[#12B5A5] transition-all"
                >
                  <FeatureIcon slug={rf.slug} className="h-5 w-5 text-[#12B5A5]" />
                  <h3 className="mt-2 font-display font-semibold text-slate-900 group-hover:text-[#12B5A5] transition-colors">
                    {rf.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {rf.short}
                  </p>
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
