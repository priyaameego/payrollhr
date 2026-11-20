import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, BookOpen, Clock, Calendar, CheckCircle2 } from "lucide-react";
import articlesData from "@/data/articles.json";

export async function generateStaticParams() {
  const guides = articlesData.filter((a: any) => a.kind === "guide");
  return guides.map((g: any) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = articlesData.find((a: any) => a.slug === slug && a.kind === "guide");
  if (!guide) return { title: "Guide — PayroleHR" };
  return {
    title: `${guide.title} — PayroleHR Guides`,
    description: guide.summary,
  };
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = articlesData.find((a: any) => a.slug === slug && a.kind === "guide");

  if (!guide) {
    notFound();
  }

  const relatedArticles = (guide.related || [])
    .map((rSlug: string) => articlesData.find((a: any) => a.slug === rSlug))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/resources" className="hover:text-[#12B5A5]">
          Resources
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/resources/guides" className="hover:text-[#12B5A5]">
          Guides
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-900 line-clamp-1">{guide.title}</span>
      </nav>

      {/* Article Header */}
      <div>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="rounded-full bg-[#E6F9F6] px-3 py-1 font-bold text-[#0E7A6E]">
            {guide.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            {guide.minutes} min read
          </span>
          <span>•</span>
          <span>Updated {guide.date}</span>
        </div>

        <h1 className="font-display text-3xl font-extrabold text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
          {guide.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed border-l-2 border-[#12B5A5] pl-4">
          {guide.summary}
        </p>
      </div>

      {/* Article Body Sections */}
      <article className="rounded-3xl border border-teal-100/90 bg-white p-8 sm:p-12 shadow-card space-y-10">
        {guide.sections?.map((sec: any, idx: number) => (
          <div key={idx} className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              {sec.h}
            </h2>
            {sec.p?.map((para: string, pIdx: number) => (
              <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        ))}
      </article>

      {/* Automate Banner */}
      <div className="rounded-3xl border border-teal-100 bg-[#F0FDFB] p-8 text-center sm:p-10 shadow-sm">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
          Want to automate this entire workflow?
        </h3>
        <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
          PayroleHR connects staff attendance, shift rules, and salary structures into a 1-click month-end payroll process.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/book-a-demo"
            className="rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
          >
            Book a live demo
          </Link>
          <Link
            href="/features"
            className="rounded-full border border-teal-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Explore features
          </Link>
        </div>
      </div>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <div className="border-t border-slate-200 pt-8">
          <h2 className="font-display text-lg font-bold text-slate-900 mb-4">
            Related guides
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedArticles.map((rel: any) => (
              <Link
                key={rel.slug}
                href={`/resources/guides/${rel.slug}`}
                className="group rounded-2xl border border-teal-100 bg-white p-5 shadow-sm hover:border-[#12B5A5] transition-all"
              >
                <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-[#12B5A5]">
                  {rel.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                  {rel.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
