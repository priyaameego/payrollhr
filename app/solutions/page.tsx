import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import solutionsData from "@/data/solutions.json";
import { FeatureIcon } from "@/components/IconHelper";

export const metadata = {
  title: "Industry Solutions — PayroleHR",
  description:
    "Explore PayroleHR configurations tailored for schools, corporate offices, factories, hospitals, retail and SMBs.",
};

export default function SolutionsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Solutions</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Workforce Customization
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          Solutions by industry
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Different organisations have different HR rules. See how PayroleHR is configured for your workforce setup.
        </p>
      </div>

      {/* Solutions Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutionsData.map((sol: any) => (
          <Link
            key={sol.slug}
            href={`/solutions/${sol.slug}`}
            className="group rounded-3xl border border-teal-100/80 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-teal-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100/70 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                <FeatureIcon slug={sol.slug} className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-lg font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">
                {sol.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {sol.short}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#12B5A5] group-hover:underline">
              <span>View solution</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
