import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import glossaryData from "@/data/glossary.json";
import {
  termToSlug,
  getGlossaryDetail,
} from "@/data/glossaryDetails";
import GlossaryAudioPlayer from "@/components/GlossaryAudioPlayer";
import BellCurveChart from "@/components/BellCurveChart";
import GlossaryTocSidebar from "@/components/GlossaryTocSidebar";
import GlossaryFaqAccordion from "@/components/GlossaryFaqAccordion";

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

  // Sidebar list of terms (matching user screenshot)
  const sidebarTerms = glossaryData.map((item: any) => ({
    term: item.term,
    slug: termToSlug(item.term),
  }));

  const fullSpeechText = `${detail.definition} ${detail.overviewParagraphs.join(
    " "
  )} ${detail.lawRules.join(" ")}`;

  return (
    <div className="relative w-full overflow-hidden bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ============================================================ */}
        {/* TOP BREADCRUMBS (Matching AttendoHR Screenshot 1) */}
        {/* ============================================================ */}
        <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium mb-6">
          <Link href="/" className="hover:text-[#0088F0] transition">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/glossary" className="hover:text-[#0088F0] transition">
            Glossary
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
            {detail.h1Title}
          </span>
        </nav>

        {/* 2-Column Responsive Layout: Main Article (8 cols) + Sticky Sidebar (4 cols) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* ============================================================ */}
          {/* LEFT / MAIN COLUMN (lg:col-span-8) */}
          {/* ============================================================ */}
          <main className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Header Block */}
            <div className="space-y-4">
              {/* Pills: GLOSSARY & LETTER (Matching Screenshot 1) */}
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#E8F4FD] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0088F0]">
                  GLOSSARY
                </span>
                <span className="rounded-full bg-[#E8F4FD] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0088F0]">
                  LETTER {detail.letter}
                </span>
              </div>

              {/* H1 Heading (Exact AttendoHR typography & style) */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-[1.18]">
                {detail.h1Title}
              </h1>

              {/* Metadata row: Updated date & read time */}
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <span>{detail.updatedDate}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  <span>{detail.readTime}</span>
                </div>
              </div>

              {/* DEFINITION Callout Card (Matching Screenshot 1) */}
              <div className="rounded-2xl border border-sky-100 bg-[#F5F9FE] p-6 sm:p-7 shadow-2xs space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0088F0] block">
                  DEFINITION
                </span>
                <p className="font-display text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-relaxed">
                  {detail.definition}
                </p>
              </div>

              {/* Interactive Audio Player (Listen to this article - Matching Screenshot 1) */}
              <div className="pt-1">
                <GlossaryAudioPlayer
                  title={detail.term}
                  textToRead={fullSpeechText}
                  durationLabel={detail.audioDuration}
                />
              </div>
            </div>

            {/* ============================================================ */}
            {/* SECTION 1: WHAT IS [TERM]? (Matching Screenshot 2) */}
            {/* ============================================================ */}
            <section id="section-1" className="scroll-mt-24 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                {detail.overviewHeading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {detail.overviewParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* ============================================================ */}
            {/* SECTION 2: CALCULATION / FORMULA (Matching Screenshot 2) */}
            {/* ============================================================ */}
            <section id="section-2" className="scroll-mt-24 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                {detail.calculationHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {detail.calculationIntro}
              </p>

              {/* Formula Callout Box */}
              {detail.formula && (
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/90 p-5 text-sm sm:text-base font-bold text-slate-950 font-display shadow-2xs">
                  {detail.formula}
                </div>
              )}

              {/* Bullet Rules (Count, Leave out of top line, etc.) */}
              {detail.formulaRules && detail.formulaRules.length > 0 && (
                <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed pl-1">
                  {detail.formulaRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>
                        <strong className="text-slate-950 font-bold">
                          {rule.label}:{" "}
                        </strong>
                        {rule.description}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Interactive Bell Curve Chart (If this term has one) */}
              {detail.hasBellCurveChart && (
                <div className="pt-2">
                  <BellCurveChart />
                </div>
              )}

              {detail.formulaPostNote && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pt-1">
                  {detail.formulaPostNote}
                </p>
              )}
            </section>

            {/* ============================================================ */}
            {/* SECTION 3: COMPARISON TABLE (Matching Screenshot 3) */}
            {/* ============================================================ */}
            <section id="section-3" className="scroll-mt-24 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                {detail.comparisonHeading}
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-[#F5F9FE] border-b border-slate-200/90 text-slate-950 font-bold">
                    <tr>
                      {detail.comparisonTable.headers.map((h, idx) => (
                        <th key={idx} className="p-3.5 sm:p-4 font-bold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {detail.comparisonTable.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={rIdx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}
                      >
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`p-3.5 sm:p-4 ${
                              cIdx === 0
                                ? "font-bold text-slate-900"
                                : "text-slate-700"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ============================================================ */}
            {/* SECTION 4: WORKED EXAMPLE (Matching Screenshot 4) */}
            {/* ============================================================ */}
            <section id="section-4" className="scroll-mt-24 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                {detail.exampleHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {detail.exampleIntro}
              </p>

              {/* Example Data Table */}
              {detail.exampleTable && (
                <div className="max-w-md overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-[#F5F9FE] border-b border-slate-200/90 text-slate-950 font-bold">
                      <tr>
                        {detail.exampleTable.headers.map((h, idx) => (
                          <th key={idx} className="p-3 sm:p-3.5 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {detail.exampleTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/60">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3 sm:p-3.5 ${
                                cIdx === 0
                                  ? "font-bold text-slate-900"
                                  : "text-slate-700 font-mono"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {detail.exampleNote && (
                <p className="text-xs text-slate-500 italic">
                  {detail.exampleNote}
                </p>
              )}

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {detail.exampleExplanation}
              </p>
            </section>

            {/* ============================================================ */}
            {/* SECTION 5: WHAT INDIAN LAW SAYS (Matching Screenshot 5) */}
            {/* ============================================================ */}
            <section id="section-5" className="scroll-mt-24 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                {detail.lawHeading}
              </h2>

              {detail.lawIntro && (
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {detail.lawIntro}
                </p>
              )}

              {/* Numbered Law Rules */}
              <div className="space-y-3 pl-1">
                {detail.lawRules.map((rule, idx) => (
                  <div key={idx} className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    {rule}
                  </div>
                ))}
              </div>

              {/* Legal Detail Paragraphs */}
              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {detail.lawDetails.map((detailText, idx) => (
                  <p key={idx}>{detailText}</p>
                ))}
              </div>
            </section>

            {/* ============================================================ */}
            {/* SECTION 6: FINDING THE CAUSE (Matching Screenshot 5 & 6) */}
            {/* ============================================================ */}
            <section id="section-6" className="scroll-mt-24 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                {detail.causeHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {detail.causeIntro}
              </p>

              <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed pl-1">
                {detail.causePoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#0088F0] font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {detail.causeConclusion && (
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium pt-1">
                  {detail.causeConclusion}
                </p>
              )}
            </section>

            {/* ============================================================ */}
            {/* SECTION 7: SEE IN ONE REPORT / PAYROLEHR (Matching Screenshot 6) */}
            {/* ============================================================ */}
            <section id="section-7" className="scroll-mt-24 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                {detail.reportHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {detail.reportIntro}
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-[#FAFDFD] p-5 sm:p-6 space-y-3">
                {detail.reportFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}

                <div className="pt-3 border-t border-slate-200/60">
                  <Link
                    href="/book-a-demo"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0088F0] hover:text-[#0070D0] transition"
                  >
                    <span>{detail.reportCtaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* ============================================================ */}
            {/* SECTION 8: FAQS ACCORDION (Matching Screenshot 6) */}
            {/* ============================================================ */}
            <section id="section-8" className="scroll-mt-24 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                Frequently Asked Questions
              </h2>
              <GlossaryFaqAccordion items={detail.faqs} />
            </section>

            {/* ============================================================ */}
            {/* SIGNATURE LUXURY SHOWCASE CTA BANNER */}
            {/* ============================================================ */}
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
                    href="/free-tools"
                    className="rounded-full border border-white/25 bg-white/10 hover:bg-white/15 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition-all inline-flex items-center gap-1.5"
                  >
                    <span>Explore Free Calculators</span>
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* ============================================================ */}
          {/* RIGHT / SIDEBAR COLUMN (lg:col-span-4) - STICKY TOC & CTA */}
          {/* ============================================================ */}
          <aside className="lg:col-span-4">
            <GlossaryTocSidebar
              currentSlug={slug}
              sections={detail.tocSections}
              sidebarTerms={sidebarTerms}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
