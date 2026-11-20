import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { productGroups } from "@/data/navigation";
import { FeatureIcon } from "@/components/IconHelper";
import featuresData from "@/data/features.json";

export const metadata = {
  title: "All 34 Features — PayroleHR",
  description:
    "Explore all 34 HR, attendance, payroll and workforce management features in PayroleHR.",
};

export default function FeaturesPage() {
  const findFeature = (slug: string) =>
    featuresData.find((f: any) => f.slug === slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5] transition-colors">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
        <span className="font-semibold text-slate-800">Features</span>
      </nav>

      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/50 p-8 sm:p-12 shadow-card">
        <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-gradient-to-br from-teal-200/40 to-transparent blur-3xl" />

        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E]">
          <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
          Complete 34 Product Modules
        </div>

        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
          Everything PayroleHR does
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
          Grouped the way Indian HR and payroll teams work. Click any module below to inspect its live workflow, capabilities, and statutory logic.
        </p>

        {/* Quick Jump Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {productGroups.map((g) => (
            <a
              key={g.title}
              href={`#${g.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="rounded-xl border border-teal-200/80 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs hover:border-[#12B5A5] hover:text-[#12B5A5] hover:bg-teal-50/50 transition-all"
            >
              {g.title} ({g.items.length})
            </a>
          ))}
        </div>
      </div>

      {/* Grouped Feature Sections */}
      <div className="space-y-16">
        {productGroups.map((group) => {
          const groupId = group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <section
              key={group.title}
              id={groupId}
              className="scroll-mt-24 border-t border-slate-200/70 pt-10"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#12B5A5]" />
                    {group.title}
                  </h2>
                </div>
                <span className="rounded-full bg-teal-100/70 px-3 py-1 text-xs font-bold text-[#0E7A6E]">
                  {group.items.length} Modules
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((slug) => {
                  const feat = findFeature(slug);
                  if (!feat) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/features/${slug}`}
                      className="attendo-card attendo-card-hover group p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="attendo-icon-box h-12 w-12 shrink-0">
                            <FeatureIcon slug={slug} className="h-6 w-6 stroke-[2.2]" />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-teal-700 bg-teal-50 border border-teal-200/80 rounded-full px-2 py-0.5 uppercase">
                            Active
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-base font-bold text-slate-900 text-hover-lux">
                          {feat.name}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 font-normal">
                          {feat.short}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                        <span className="font-bold text-[#12B5A5] group-hover:text-[#0E7A6E] flex items-center gap-1.5 transition-colors">
                          <span className="text-hover-lux font-bold">Explore module</span>
                          <ArrowRight className="h-3.5 w-3.5 arrow-hover-lux" />
                        </span>
                        <span className="text-[10px] text-slate-400">PayroleHR Core</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
