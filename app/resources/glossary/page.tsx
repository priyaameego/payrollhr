"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, BookOpen, Sparkles } from "lucide-react";
import glossaryData from "@/data/glossary.json";

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
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-12">
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
        <span className="font-semibold text-slate-800">Glossary</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Plain English Definitions
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          HR & payroll glossary
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Common Indian payroll, attendance and statutory terms explained in simple, clear words without confusing legal jargon.
        </p>
      </div>

      {/* Search & Letter Filter */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search glossary terms or definitions..."
            className="w-full rounded-2xl border border-teal-100 bg-white pl-11 pr-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
          />
        </div>

        {/* Letters list */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <button
            type="button"
            onClick={() => setSelectedLetter(null)}
            className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
              selectedLetter === null
                ? "bg-[#12B5A5] text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                selectedLetter === letter
                  ? "bg-[#12B5A5] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Glossary Terms Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTerms.map((item: any, idx: number) => (
          <div
            key={idx}
            className="rounded-2xl border border-teal-100/80 bg-white p-6 shadow-sm hover:border-teal-300 transition-colors"
          >
            <span className="text-xs font-bold text-[#12B5A5] uppercase tracking-wider block mb-1">
              {item.term[0].toUpperCase()}
            </span>
            <h2 className="font-display text-base font-bold text-slate-900">
              {item.term}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.def}
            </p>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No terms found matching &quot;{searchTerm}&quot;.
        </div>
      )}
    </div>
  );
}
