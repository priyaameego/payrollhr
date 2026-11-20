import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Calculator, Sparkles } from "lucide-react";
import toolsData from "@/data/tools.json";
import { FeatureIcon } from "@/components/IconHelper";

export const metadata = {
  title: "Free HR & Payroll Calculators — PayroleHR",
  description:
    "Free calculators for daily salary, attendance percentage, overtime pay, leave balances, salary breakup, CTC in-hand and gratuity.",
};

export default function FreeToolsIndexPage() {
  const salaryTools = toolsData.filter((t: any) => t.category === "Salary & Pay");
  const attendanceTools = toolsData.filter((t: any) => t.category === "Attendance & Leave");

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Free Tools</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Online Utilities
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          Free HR & payroll calculators
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Instant tools with transparent formulas. Use them freely without signing up or entering email addresses.
        </p>
      </div>

      {/* Group 1: Salary & Pay */}
      <div className="mt-14 space-y-16">
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Salary & Pay Calculators
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {salaryTools.length} tools
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {salaryTools.map((tool: any) => (
              <Link
                key={tool.slug}
                href={`/free-tools/${tool.slug}`}
                className="attendo-card attendo-card-hover group p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="attendo-icon-box h-12 w-12 shrink-0">
                    <FeatureIcon slug={tool.slug} className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900 text-hover-lux">
                    {tool.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {tool.short}
                  </p>
                  <div className="mt-3 rounded-xl bg-slate-50/80 p-2.5 text-[11px] font-mono text-slate-600 border border-slate-200/60 line-clamp-2">
                    {tool.formula}
                  </div>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5] group-hover:text-[#0E7A6E] transition-colors">
                  <span className="text-hover-lux font-bold">Calculate now</span>
                  <ArrowRight className="h-4 w-4 arrow-hover-lux" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Group 2: Attendance & Leave */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Attendance & Leave Calculators
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {attendanceTools.length} tools
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attendanceTools.map((tool: any) => (
              <Link
                key={tool.slug}
                href={`/free-tools/${tool.slug}`}
                className="attendo-card attendo-card-hover group p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="attendo-icon-box h-12 w-12 shrink-0">
                    <FeatureIcon slug={tool.slug} className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900 text-hover-lux">
                    {tool.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {tool.short}
                  </p>
                  <div className="mt-3 rounded-xl bg-slate-50/80 p-2.5 text-[11px] font-mono text-slate-600 border border-slate-200/60 line-clamp-2">
                    {tool.formula}
                  </div>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5] group-hover:text-[#0E7A6E] transition-colors">
                  <span className="text-hover-lux font-bold">Calculate now</span>
                  <ArrowRight className="h-4 w-4 arrow-hover-lux" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
