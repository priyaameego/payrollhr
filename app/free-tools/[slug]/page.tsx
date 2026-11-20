import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Calculator, CheckCircle2, Sparkles } from "lucide-react";
import toolsData from "@/data/tools.json";
import featuresData from "@/data/features.json";
import CalculatorRunner from "@/components/CalculatorRunner";
import { FeatureIcon } from "@/components/IconHelper";

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
  if (!tool) return { title: "Calculator — PayroleHR" };
  return {
    title: `${tool.name} — Free HR Tool | PayroleHR`,
    description: tool.short,
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

  const relatedFeature = featuresData.find((f: any) => f.slug === tool.feature);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 space-y-12 sm:space-y-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/free-tools" className="hover:text-[#12B5A5]">
          Free Tools
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-900">{tool.name}</span>
      </nav>

      {/* Hero Header */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-[#E8FAF7] px-3.5 py-1 text-xs font-bold text-[#0E7A6E]">
          <Calculator className="h-3.5 w-3.5 text-[#12B5A5]" />
          {tool.category}
        </div>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
          {tool.name}
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          {tool.short}
        </p>
      </div>

      {/* Interactive Calculator Engine */}
      <CalculatorRunner slug={tool.slug} name={tool.name} />

      {/* Formula & How it works */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-7 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Transparent Formula
          </span>
          <h2 className="mt-2 font-display text-base font-bold text-slate-900">
            How this is calculated
          </h2>
          <div className="mt-3 rounded-xl bg-[#F0FDFB] p-3 text-xs font-mono text-[#0E7A6E] border border-teal-100">
            {tool.formula}
          </div>
        </div>

        <div className="rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-7 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Practical Scenario
          </span>
          <h2 className="mt-2 font-display text-base font-bold text-slate-900">
            Worked example
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {tool.example}
          </p>
        </div>
      </div>

      {/* Tool FAQs */}
      {tool.faqs && tool.faqs.length > 0 && (
        <div className="rounded-3xl border border-teal-100/80 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 mb-6">
            Frequently asked questions about {tool.name}
          </h2>
          <div className="space-y-4">
            {tool.faqs.map((faq: any, idx: number) => (
              <div key={idx} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Automated Feature Banner */}
      {relatedFeature && (
        <div className="rounded-3xl border border-teal-100 bg-[#F0FDFB] p-8 text-center sm:p-10 shadow-card">
          <span className="inline-block rounded-full bg-[#E6F9F6] px-3.5 py-1 text-xs font-bold text-[#0E7A6E]">
            Automate This Entire Process
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold text-slate-900">
            Never calculate this by hand again
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
            PayroleHR calculates {tool.name.toLowerCase().replace(" calculator", "")} automatically inside our {relatedFeature.name} module.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/features/${relatedFeature.slug}`}
              className="rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
            >
              Explore {relatedFeature.name}
            </Link>
            <Link
              href="/book-a-demo"
              className="rounded-full border border-teal-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Book a live demo
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
