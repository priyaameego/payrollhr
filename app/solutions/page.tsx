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
            className="attendo-card attendo-card-hover group p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="attendo-icon-box h-12 w-12 shrink-0">
                <FeatureIcon slug={sol.slug} className="h-6 w-6 stroke-[2.2]" />
              </div>
              <h2 className="mt-5 font-display text-lg font-bold text-slate-900 text-hover-lux">
                {sol.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {sol.short}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5] group-hover:text-[#0E7A6E] transition-colors">
              <span className="text-hover-lux font-bold">View solution</span>
              <ArrowRight className="h-4 w-4 arrow-hover-lux" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
