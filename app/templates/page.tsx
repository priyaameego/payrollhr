"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  FileSpreadsheet,
  Download,
  Check,
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers,
} from "lucide-react";
import templatesData from "@/data/templates.json";
import { TEMPLATES_DATA, getTemplateDetail } from "@/data/templatesData";
import { triggerCsvDownload } from "@/components/TemplateDownloadTrigger";

export default function TemplatesDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadedMap, setDownloadedMap] = useState<Record<string, boolean>>({});

  const handleQuickDownload = (e: React.MouseEvent, slug: string, name: string, file: string) => {
    e.preventDefault();
    e.stopPropagation();

    const detail = getTemplateDetail(slug);
    triggerCsvDownload(file, detail.csvContent, name);

    setDownloadedMap((prev) => ({ ...prev, [file]: true }));
    setTimeout(() => {
      setDownloadedMap((prev) => ({ ...prev, [file]: false }));
    }, 2500);
  };

  const filteredTemplates = templatesData.filter((tpl) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      tpl.name.toLowerCase().includes(q) ||
      tpl.text.toLowerCase().includes(q) ||
      tpl.file.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-linear-to-b from-teal-50/40 via-white to-slate-50/50 pb-24">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 border-b border-teal-100/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#12B5A5] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900">Templates</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-100/70 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7A6E] border border-teal-200/60 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>READY-TO-USE HR & PAYROLL PACKS</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Free HR Templates & Checklists
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              12 expertly structured spreadsheets, letter formats, and statutory registers. Every format is pre-configured for Indian labor compliance, available in Excel and CSV.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-8 max-w-md">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates (e.g. exit, attendance, salary, roster)..."
                className="w-full rounded-2xl border border-teal-200/90 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#12B5A5] focus:outline-hidden focus:ring-3 focus:ring-teal-100 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm font-bold text-slate-600">
              Showing <span className="text-slate-900 font-extrabold">{filteredTemplates.length}</span> templates
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <ShieldCheck className="h-4 w-4 text-[#12B5A5]" />
              <span>Indian Labor Law Compliant</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map((tpl) => {
              const slug = tpl.file.replace(/\.csv$/, "");
              const isDownloaded = !!downloadedMap[tpl.file];
              const detail = TEMPLATES_DATA[slug];

              return (
                <div
                  key={tpl.file}
                  className="group rounded-3xl border border-teal-100/90 bg-white p-7 shadow-xs hover:shadow-card-hover hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors duration-300">
                        <FileSpreadsheet className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-mono font-bold text-slate-600">
                        CSV / XLS
                      </span>
                    </div>

                    {/* Template Title */}
                    <Link href={`/templates/${slug}`}>
                      <h2 className="mt-5 font-display text-lg font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-snug">
                        {tpl.name}
                      </h2>
                    </Link>

                    {/* Template Short Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {tpl.text}
                    </p>

                    {/* Stat / Cover Highlight if available */}
                    {detail && (
                      <div className="mt-3.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#0E7A6E] bg-teal-50/80 px-2.5 py-1 rounded-md border border-teal-100">
                        <Layers className="h-3 w-3" />
                        <span>{detail.packCover.statNumber} {detail.packCover.statLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions Bottom Bar */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                    {/* View Details Link */}
                    <Link
                      href={`/templates/${slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-teal-200/90 bg-teal-50/50 py-2.5 px-3 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100/70 transition-colors"
                    >
                      <span>View details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    {/* Instant Download Button */}
                    <button
                      type="button"
                      onClick={(e) => handleQuickDownload(e, slug, tpl.name, tpl.file)}
                      title="Download CSV immediately"
                      className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 px-3.5 text-xs font-bold transition-all ${
                        isDownloaded
                          ? "bg-teal-700 text-white"
                          : "bg-[#12B5A5] text-white hover:bg-[#0E9486] shadow-xs hover:shadow-sm"
                      }`}
                    >
                      {isDownloaded ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span className="hidden xs:inline">Downloaded</span>
                        </>
                      ) : (
                        <>
                          <Download className="h-3.5 w-3.5" />
                          <span className="hidden xs:inline">Download</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Software CTA Banner */}
      <section className="mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-linear-to-r from-teal-900 via-teal-800 to-emerald-950 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl space-y-2 text-center md:text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-teal-200">
                NEED COMPLETE AUTOMATION?
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Replace manual forms with PayroleHR software
              </h3>
              <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed">
                Connect employee onboarding, biometric attendance, salary structures and 1-click payslips into one automated workflow.
              </p>
            </div>
            <Link
              href="/book-demo"
              className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[#0E7A6E] shadow-lg hover:bg-teal-50 transition-all active:scale-95"
            >
              <span>Book a Free Live Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
