import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { productGroups } from "@/data/navigation";
import { FeatureIcon } from "@/components/IconHelper";
import featuresData from "@/data/features.json";

export const metadata = {
  title: "All Features — PayroleHR",
  description:
    "Explore all HR, attendance, payroll and workforce management features in PayroleHR.",
};

export default function FeaturesPage() {
  const findFeature = (slug: string) =>
    featuresData.find((f: any) => f.slug === slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Features</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Capabilities Overview
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          Everything PayroleHR does
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Grouped the way HR teams work. Open any feature to see what it does, how it works and what it connects to.
        </p>
      </div>

      {/* Grouped Feature Sections */}
      <div className="mt-14 space-y-16">
        {productGroups.map((group) => (
          <section key={group.title} className="border-t border-slate-200/80 pt-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                {group.title}
              </h2>
              <span className="text-xs font-semibold text-slate-500">
                {group.items.length} features
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
                    className="group rounded-2xl border border-teal-100/80 bg-white p-5 shadow-card hover:shadow-card-hover hover:border-teal-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100/60 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                        <FeatureIcon slug={slug} className="h-5 w-5" />
                      </div>
                      <h3 className="mt-3.5 font-display text-base font-bold text-slate-900 group-hover:text-[#12B5A5] transition-colors">
                        {feat.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {feat.short}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#12B5A5] group-hover:underline">
                      <span>Learn more</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
