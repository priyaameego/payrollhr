import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, Clock, Calendar } from "lucide-react";
import articlesData from "@/data/articles.json";

export const metadata = {
  title: "HR Articles & Blog — PayroleHR",
  description:
    "Practical articles for HR and payroll teams: face attendance, month-end payroll checks, CTC vs in-hand and more.",
};

export default function BlogIndexPage() {
  const blogs = articlesData.filter((a: any) => a.kind === "blog");

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/resources" className="hover:text-[#12B5A5]">
          Resources
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Articles & Blog</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Field Observations
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          HR articles & blog
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Practical tips for HR and payroll teams: transitioning to face kiosks, month-end compliance checklists and salary structures.
        </p>
      </div>

      {/* Blogs List */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post: any) => (
          <Link
            key={post.slug}
            href={`/resources/blog/${post.slug}`}
            className="group rounded-3xl border border-teal-100/80 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-teal-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="rounded-full bg-[#E6F9F6] px-2.5 py-0.5 font-bold text-[#0E7A6E]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.minutes} min read
                </span>
              </div>
              <h2 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#12B5A5] group-hover:underline">
              <span>Read article</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
