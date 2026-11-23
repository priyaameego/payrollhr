import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  ChevronRight,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Building2,
  HelpCircle,
  Download,
} from "lucide-react";
import { TEMPLATES_DATA, getTemplateDetail } from "@/data/templatesData";
import TemplateBookCover from "@/components/TemplateBookCover";
import TemplateDownloadTrigger from "@/components/TemplateDownloadTrigger";
import TemplateDownloadBar from "@/components/TemplateDownloadBar";
import GlossaryFaqAccordion from "@/components/GlossaryFaqAccordion";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(TEMPLATES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getTemplateDetail(slug);

  return {
    title: `${detail.h1Title} | Free Download - PayroleHR`,
    description: detail.subtitle,
    openGraph: {
      title: `${detail.h1Title} | Free Download - PayroleHR`,
      description: detail.subtitle,
      type: "article",
    },
  };
}

export default async function TemplateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getTemplateDetail(slug);

  if (!detail) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-teal-50/40 via-white to-slate-50/50 pb-28">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-16 sm:pb-20 border-b border-teal-100/60">
        {/* Soft background ambient blur circles */}
        <div className="absolute top-10 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-200/20 blur-3xl" />
        <div className="absolute top-40 right-10 -z-10 h-80 w-80 rounded-full bg-emerald-200/15 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#12B5A5] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/templates" className="hover:text-[#12B5A5] transition-colors">
              Templates
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
              {detail.name}
            </span>
          </nav>

          {/* Hero Content: 2-column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle, Benefits, Download */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-100/70 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7A6E] border border-teal-200/60">
                <FileSpreadsheet className="h-3.5 w-3.5" />
                <span>{detail.badge || "FREE EXCEL & CSV PACK"}</span>
              </div>

              {/* Main H1 Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-950 leading-[1.18]">
                {detail.h1Title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {detail.subtitle}
              </p>

              {/* 3 Benefit Bullets */}
              <ul className="space-y-3 pt-2">
                {detail.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-700">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-[#12B5A5] mt-0.5">
                      <CheckCircle2 className="h-4 w-4 stroke-[2.5]" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Interactive Download Action Trigger */}
              <div className="pt-3">
                <TemplateDownloadTrigger
                  fileName={detail.file}
                  csvContent={detail.csvContent}
                  title={detail.name}
                />
              </div>
            </div>

            {/* Right Column: 3D Pack Book Cover */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <TemplateBookCover
                badge={detail.packCover.badge}
                title={detail.packCover.title}
                subtitle={detail.packCover.subtitle}
                statNumber={detail.packCover.statNumber}
                statLabel={detail.packCover.statLabel}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT'S INSIDE SECTION */}
      <section className="py-16 sm:py-20 border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#12B5A5]">
              WHAT&apos;S INSIDE THE PACK
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              {detail.whatsInside.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {detail.whatsInside.subheading}
            </p>
          </div>

          {/* Cards Breakdown Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {detail.whatsInside.cards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block rounded-lg bg-teal-50 px-2.5 py-1 text-[11px] font-mono font-bold text-[#0E7A6E] border border-teal-100 uppercase tracking-wide">
                    {card.tag}
                  </div>
                  <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Optional Mini Table Preview */}
                {card.miniTable && (
                  <div className="mt-5 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/60 shadow-2xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="border-b border-slate-200 bg-slate-100/80 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                          <tr>
                            {card.miniTable.headers.map((hdr, hIdx) => (
                              <th key={hIdx} className="px-3 py-2.5 whitespace-nowrap">
                                {hdr}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/60 text-slate-700 font-mono text-[11px]">
                          {card.miniTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-teal-50/30 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-3 py-2 whitespace-nowrap font-sans text-xs">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY THIS MATTERS SECTION (INDIAN STATUTORY LAW & BEST PRACTICES) */}
      <section className="py-16 sm:py-20 border-b border-slate-200/70 bg-gradient-to-b from-white to-teal-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#12B5A5]">
                  STATUTORY COMPLIANCE & GOVERNANCE
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                  {detail.whyThisMatters.heading}
                </h2>
                <p className="mt-3 text-base text-slate-700 font-medium leading-relaxed">
                  {detail.whyThisMatters.intro}
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {detail.whyThisMatters.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Callout: Indian Labor Audit Checklist */}
            <div className="lg:col-span-4 rounded-3xl border border-teal-200/80 bg-white p-6 sm:p-7 shadow-card space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                <ShieldCheck className="h-4 w-4" />
                <span>Statutory Audit Shield</span>
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 leading-snug">
                Why Indian HR leaders standardize this format:
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5] mt-1.5 shrink-0" />
                  <span>Eliminates inspection notices under the Code on Wages & state rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5] mt-1.5 shrink-0" />
                  <span>Protects both employer and worker with unambiguous signed records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5] mt-1.5 shrink-0" />
                  <span>Seamless transition into automated biometric & cloud payroll software.</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/book-demo"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-50 px-4 py-2.5 text-xs font-bold text-[#0E7A6E] hover:bg-[#12B5A5] hover:text-white transition-colors"
                >
                  <span>Verify Compliance in a Free Demo</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SOFTWARE AUTOMATION BANNER (PAYROLEHR CLOUD PLATFORM CTA) */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F766E] via-[#115E59] to-[#042F2E] p-8 sm:p-12 text-white shadow-2xl">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-xs px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-200 border border-white/15">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Move beyond spreadsheets</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
                {detail.automationSection.headline}
              </h2>

              <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed font-normal">
                {detail.automationSection.description}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[#0E7A6E] shadow-lg hover:bg-teal-50 hover:shadow-xl transition-all active:scale-95"
                >
                  <span>Book a Free Live Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={`/features/${detail.automationSection.featureSlug || "payroll-management"}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-200 hover:text-white underline underline-offset-4"
                >
                  <span>Explore {detail.automationSection.featureName || "PayroleHR"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 sm:py-16 border-t border-slate-200/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#12B5A5]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              Questions about this format?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Answers regarding customization, format compatibility, and statutory compliance.
            </p>
          </div>

          <GlossaryFaqAccordion items={detail.faqs} />
        </div>
      </section>

      {/* 6. FLOATING BOTTOM DOWNLOAD BAR */}
      <TemplateDownloadBar
        title={detail.name}
        badge={detail.badge}
        fileName={detail.file}
        csvContent={detail.csvContent}
      />
    </div>
  );
}
