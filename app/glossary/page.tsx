"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import glossaryData from "@/data/glossary.json";
import { termToSlug } from "@/data/glossaryDetails";

const ALL_LETTERS = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"
];

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Group terms by letter
  const availableLetters = useMemo(() => {
    return new Set(
      glossaryData.map((item: any) => item.term[0].toUpperCase())
    );
  }, []);

  // Filtered terms based on search and selected letter
  const filteredTerms = useMemo(() => {
    return glossaryData.filter((item: any) => {
      const matchesSearch =
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.def.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLetter =
        !selectedLetter || item.term[0].toUpperCase() === selectedLetter;
      return matchesSearch && matchesLetter;
    });
  }, [searchTerm, selectedLetter]);

  // Group filtered terms by their first letter for the alphabet-grouped layout (Screenshot 2 Match)
  const groupedTerms = useMemo(() => {
    const groups: Record<string, any[]> = {};
    filteredTerms.forEach((item: any) => {
      const letter = item.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(item);
    });

    return Object.keys(groups)
      .sort()
      .map((letter) => ({
        letter,
        terms: groups[letter],
      }));
  }, [filteredTerms]);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F0F6FE]/70 via-[#F8FBFE]/40 to-white py-10 sm:py-16">
      {/* Ambient background glowing gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-teal-100/35 blur-[140px] -translate-y-56 pointer-events-none" />
        <div className="h-[400px] w-[600px] rounded-full bg-teal-100/30 blur-[130px] translate-y-96 translate-x-40 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* ============================================================ */}
        {/* TOP BREADCRUMBS (Matching Screenshot 1) */}
        {/* ============================================================ */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#12B5A5] transition">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-slate-800">Glossary</span>
        </nav>

        {/* ============================================================ */}
        {/* HERO HEADER: "HR & payroll terms, explained simply" (Screenshot 1) */}
        {/* ============================================================ */}
        <div className="text-left max-w-3xl space-y-3">
          <div className="text-xs font-black uppercase tracking-wider text-[#0E7A6E]">
            GLOSSARY
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            HR &amp; payroll terms,{" "}
            <span className="italic text-[#0E7A6E] font-serif font-bold">
              explained simply
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
            {glossaryData.length} plain-English definitions of HR, payroll, attendance and compliance terms, with practical examples for Indian businesses.
          </p>
        </div>

        {/* ============================================================ */}
        {/* SEARCH BAR WITH EMBEDDED TEAL SEARCH BUTTON (Screenshot 1 Match) */}
        {/* ============================================================ */}
        <div className="max-w-2xl space-y-4">
          <div className="relative flex items-center shadow-xs rounded-full bg-white border border-slate-200/90 p-1.5 focus-within:border-[#12B5A5] focus-within:ring-4 focus-within:ring-teal-100 transition-all">
            <Search className="h-5 w-5 text-slate-400 ml-3.5 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${glossaryData.length} terms...`}
              className="w-full bg-transparent py-2 px-3 text-sm sm:text-base text-slate-950 placeholder:text-slate-400 outline-none font-medium"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition mr-2 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              Search
            </button>
          </div>

          {/* ============================================================ */}
          {/* COMPLETE ALPHABET BAR A TO Z (Screenshot 1 Match) */}
          {/* ============================================================ */}
          <div className="rounded-2xl border border-slate-200/80 bg-[#F1F6FA]/80 p-2 sm:p-2.5 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-1.5 min-w-max">
              <button
                type="button"
                onClick={() => setSelectedLetter(null)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  selectedLetter === null
                    ? "bg-[#12B5A5] text-white shadow-xs font-black"
                    : "bg-white text-slate-700 shadow-2xs hover:bg-teal-50 hover:text-[#0E7A6E]"
                }`}
              >
                All ({glossaryData.length})
              </button>

              {ALL_LETTERS.map((letter) => {
                const isAvailable = availableLetters.has(letter);
                const isSelected = selectedLetter === letter;

                return (
                  <button
                    key={letter}
                    type="button"
                    disabled={!isAvailable}
                    onClick={() =>
                      setSelectedLetter(selectedLetter === letter ? null : letter)
                    }
                    className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                      isSelected
                        ? "bg-[#12B5A5] text-white shadow-md shadow-teal-500/30 scale-105 font-black ring-2 ring-teal-300"
                        : isAvailable
                        ? "bg-white text-slate-800 shadow-2xs hover:bg-teal-50 hover:text-[#0E7A6E] hover:border-teal-300 hover:-translate-y-0.5"
                        : "text-slate-300 pointer-events-none bg-transparent"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ALPHABET-GROUPED ROWS LAYOUT (Screenshot 2 Exact Match) */}
        {/* ============================================================ */}
        {groupedTerms.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/70 p-8 max-w-md mx-auto shadow-sm">
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
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100 transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-10">
            {groupedTerms.map(({ letter, terms }) => (
              <div
                key={letter}
                id={`letter-${letter}`}
                className="pt-6 border-b border-slate-200/60 pb-8 sm:pb-12 last:border-b-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Big Vibrant Letter Badge (Screenshot 2 Match) */}
                  <div className="md:col-span-2 flex flex-row md:flex-col items-center md:items-start gap-2.5">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] text-white font-display text-2xl sm:text-3xl font-black shadow-lg shadow-teal-500/25">
                      {letter}
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      {terms.length} {terms.length === 1 ? "term" : "terms"}
                    </span>
                  </div>

                    {/* Right Column: Responsive Grid of Cards with Premium Hover Lift */}
                    <div className="md:col-span-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {terms.map((item: any) => {
                        const slug = termToSlug(item.term);
                        return (
                          <Link
                            key={slug}
                            href={`/glossary/${slug}`}
                            className="lux-card-target lux-card-sheen group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-white to-[#F8FDFD]/50 p-5 sm:p-6 shadow-2xs hover:shadow-2xl hover:shadow-teal-900/10 hover:border-teal-400 hover:-translate-y-2 transition-all duration-300"
                          >
                            {/* Top Animated Accent Gradient Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#12B5A5]/0 to-transparent group-hover:via-[#12B5A5] transition-all duration-500" />

                            <div className="relative z-10">
                              <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0E7A6E] group-hover:translate-x-0.5 transition-all duration-300 leading-snug">
                                {item.term}
                              </h3>
                              <p className="mt-2 text-xs sm:text-[13px] text-slate-600 line-clamp-3 leading-relaxed font-normal group-hover:text-slate-700 transition-colors duration-300">
                                {item.def}
                              </p>
                            </div>

                            <div className="relative z-10 mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E7A6E]">
                              <span className="group-hover:text-[#12B5A5] group-hover:translate-x-0.5 transition-all duration-300">
                                Read definition
                              </span>
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-50 text-[#0E7A6E] border border-teal-100 group-hover:bg-gradient-to-r group-hover:from-[#12B5A5] group-hover:to-[#0E7A6E] group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ============================================================ */}
        {/* SIGNATURE LUXURY SHOWCASE CTA BANNER */}
        {/* ============================================================ */}
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
                className="rounded-full bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/free-tools"
                className="rounded-full border border-white/25 bg-white/10 hover:bg-white/15 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
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
