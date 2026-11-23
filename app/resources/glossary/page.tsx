"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  BookOpen,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import glossaryData from "@/data/glossary.json";
import { termToSlug } from "@/data/glossaryDetails";

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const alphabet = Array.from(
    new Set(glossaryData.map((item: any) => item.term[0].toUpperCase()))
  ).sort();

  const filteredTerms = glossaryData.filter((item: any) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.def.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter =
      !selectedLetter || item.term[0].toUpperCase() === selectedLetter;
    return matchesSearch && matchesLetter;
  });

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F0F6FE]/70 via-[#F8FBFE]/40 to-white py-10 sm:py-16">
      {/* Ambient background glowing gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-teal-100/35 blur-[140px] -translate-y-56 pointer-events-none" />
        <div className="h-[400px] w-[600px] rounded-full bg-sky-100/30 blur-[130px] translate-y-96 translate-x-40 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#12B5A5] transition">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <Link href="/resources" className="hover:text-[#12B5A5] transition">
            Resources
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-900">HR Glossary</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8FAF7] border border-teal-200/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E] shadow-2xs">
            <BookOpen className="h-3.5 w-3.5 text-[#12B5A5]" />
            Plain-English Knowledge Base
          </div>

          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Indian HR &amp; Payroll Glossary
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Essential Indian payroll, attendance, EPF, ESIC, and labor law terms explained in plain, simple language without confusing legal jargon.
          </p>
        </div>

        {/* Search Bar & Alphabet Filter */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="relative flex items-center">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search terms or definitions (e.g. absenteeism, ctc, gratuity, epf)..."
              className="w-full rounded-full border border-slate-300/80 bg-white py-3.5 pl-14 pr-12 text-sm sm:text-base text-slate-950 placeholder:text-slate-400 focus:border-[#12B5A5] focus:outline-none focus:ring-4 focus:ring-teal-100 shadow-sm transition-all font-medium"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Letter filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-b border-slate-200/70 pb-4">
            <button
              type="button"
              onClick={() => setSelectedLetter(null)}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                selectedLetter === null
                  ? "bg-slate-950 text-white shadow-sm ring-2 ring-slate-900/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-teal-300 hover:text-teal-900"
              }`}
            >
              All ({glossaryData.length})
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
                className={`h-7 w-7 rounded-full text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                  selectedLetter === letter
                    ? "bg-[#12B5A5] text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-teal-300 hover:bg-teal-50"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Terms Grid with Direct Links to Term Pages */}
        {filteredTerms.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/60 p-8 max-w-md mx-auto">
            <BookOpen className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No terms found</h3>
            <p className="text-sm text-slate-500 mt-1">
              We couldn&apos;t find any term matching &ldquo;{searchTerm}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedLetter(null);
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTerms.map((item: any) => {
              const slug = termToSlug(item.term);
              return (
                <Link
                  key={slug}
                  href={`/resources/glossary/${slug}`}
                  className="group rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:border-[#12B5A5] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E8FAF7] border border-teal-200/80 text-[#0E7A6E] shadow-2xs group-hover:scale-105 group-hover:bg-[#12B5A5] group-hover:text-white transition-all">
                        <BookOpen className="h-4 w-4 stroke-[2.2]" />
                      </div>
                      <span className="rounded-full bg-[#E8FAF7] border border-teal-200 px-2.5 py-0.5 text-[11px] font-bold text-[#0E7A6E]">
                        {item.term[0].toUpperCase()}
                      </span>
                    </div>

                    <h2 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-snug">
                      {item.term}
                    </h2>
                    <p className="mt-2 text-xs sm:text-[13px] text-slate-600 line-clamp-3 leading-relaxed font-normal">
                      {item.def}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E7A6E]">
                    <span>Read Full Definition</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* AttendoHR Signature Dark Showcase CTA Banner */}
        <section className="relative overflow-hidden rounded-3xl border border-teal-800/40 bg-gradient-to-br from-slate-950 via-[#072B28] to-slate-900 p-8 sm:p-14 text-center shadow-2xl text-white">
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-teal-500/20 blur-[130px]" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-teal-300" />
              Automate Indian Payroll &amp; Compliance
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Turn complex statutory terms into 1-click workflows
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              PayroleHR applies these exact rules automatically — from EPF wage ceilings to gratuity 15/26 divisors and state-specific professional taxes.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-a-demo"
                className="rounded-full bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2.5"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/free-tools"
                className="rounded-full border border-white/25 bg-white/10 hover:bg-white/15 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Explore Free Calculators</span>
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                150+ Indian Companies
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                Factories Act &amp; EPFO Ready
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                1-Click Bank Files
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
