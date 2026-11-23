"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check, BookOpen, ArrowRight, Sparkles, FileText } from "lucide-react";

export interface TocItem {
  id: string;
  number: number;
  title: string;
}

interface GlossaryTocSidebarProps {
  currentSlug: string;
  sections: TocItem[];
  sidebarTerms: {
    term: string;
    slug: string;
  }[];
}

export default function GlossaryTocSidebar({
  currentSlug,
  sections,
  sidebarTerms,
}: GlossaryTocSidebarProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    sections[0]?.id || "section-1"
  );
  const [showAllTerms, setShowAllTerms] = useState(false);

  // Scroll spy effect to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const activeIndex = sections.findIndex((s) => s.id === activeSectionId);
  const currentSectionNum = activeIndex >= 0 ? activeIndex + 1 : 1;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSectionId(id);
    }
  };

  return (
    <aside className="lg:sticky lg:top-24 space-y-6">
      {/* 1. TOP CARD: PayroleHR Teal Gradient Showcase Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] p-6 sm:p-7 text-white shadow-xl shadow-teal-500/25 relative overflow-hidden">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10 blur-xl" />

        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-teal-100 mb-1">
          <Sparkles className="h-3.5 w-3.5 text-teal-200" />
          <span>PayroleHR Workforce Engine</span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-tight">
          Need Indian HR Software?
        </h3>
        <p className="mt-1.5 text-xs text-teal-50 font-medium leading-relaxed">
          Automate biometric attendance, muster rolls &amp; 1-click salary payouts.
        </p>

        {/* 3 Checkmark bullets */}
        <div className="mt-5 space-y-2.5">
          {[
            "Biometric punch auto-flows into salary slips",
            "100% EPFO, ESIC, PT & LWF statutory compliant",
            "Direct employee self-service mobile app",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs text-white font-medium">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA White Button with PayroleHR Teal Text */}
        <div className="mt-6">
          <Link
            href="/book-a-demo"
            className="w-full rounded-full bg-white py-3 px-5 text-center text-xs sm:text-sm font-black text-[#0E7A6E] hover:bg-teal-50 hover:shadow-md transition-all inline-block shadow-sm"
          >
            Book a Free Demo →
          </Link>
        </div>
      </div>

      {/* 2. MIDDLE CARD: "ON THIS PAGE" Table of Contents */}
      <div className="rounded-3xl border border-teal-100/90 bg-white p-6 shadow-card">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
          <span className="text-xs font-black uppercase tracking-wider text-slate-800">
            ON THIS PAGE
          </span>
          <span className="text-[11px] font-bold text-[#0E7A6E] bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
            Section {currentSectionNum} of {sections.length}
          </span>
        </div>

        {/* Numbered Sections List */}
        <nav className="mt-4 space-y-1.5" aria-label="Table of contents">
          {sections.map((sec) => {
            const isActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`w-full flex items-center gap-3 rounded-xl p-2 text-left text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#E8FAF7] border border-teal-200/90 text-[#0E7A6E] shadow-2xs font-extrabold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-colors ${
                    isActive
                      ? "bg-[#12B5A5] text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {sec.number}
                </span>
                <span className="truncate">{sec.title}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* 3. BOTTOM CARD: HR & Payroll Glossary Drawer */}
      <div className="rounded-3xl border border-teal-100/90 bg-white p-6 shadow-card">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          <BookOpen className="h-4 w-4 stroke-[2.2]" />
          <span>GLOSSARY</span>
        </div>

        <h4 className="mt-2 font-display text-lg font-bold text-slate-950">
          HR &amp; Payroll glossary
        </h4>
        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
          Understand key HR, payroll and compliance terms in simple language.
        </p>

        {/* Terms list with mint book icon */}
        <div className="mt-4 space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
          {sidebarTerms
            .slice(0, showAllTerms ? sidebarTerms.length : 8)
            .map((t) => {
              const isCurrent = t.slug === currentSlug;
              return (
                <Link
                  key={t.slug}
                  href={`/glossary/${t.slug}`}
                  className={`group flex items-center gap-2.5 rounded-xl p-2 text-xs font-semibold transition-all ${
                    isCurrent
                      ? "bg-[#E8FAF7] border border-teal-200/90 text-[#0E7A6E] font-bold shadow-2xs"
                      : "text-slate-800 hover:bg-slate-50 hover:text-[#12B5A5]"
                  }`}
                >
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all ${
                      isCurrent
                        ? "bg-[#12B5A5] border-[#12B5A5] text-white"
                        : "bg-teal-50/80 border-teal-200/60 text-[#0E7A6E] group-hover:scale-105"
                    }`}
                  >
                    <BookOpen className="h-3 w-3 stroke-[2.2]" />
                  </div>
                  <span className="truncate">{t.term}</span>
                </Link>
              );
            })}
        </div>

        {/* View all toggle / link */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          {!showAllTerms && sidebarTerms.length > 8 && (
            <button
              type="button"
              onClick={() => setShowAllTerms(true)}
              className="text-xs font-bold text-slate-600 hover:text-[#12B5A5] cursor-pointer"
            >
              Show all ({sidebarTerms.length}) terms
            </button>
          )}
          <Link
            href="/glossary"
            className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-[#12B5A5] hover:text-[#0E7A6E]"
          >
            <span>View full glossary</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* 4. TEMPLATES & CHECKLISTS CARD (Screenshot 2 Exact Match) */}
      <div className="rounded-3xl border border-teal-100/90 bg-white p-6 shadow-card">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          <FileText className="h-4 w-4 stroke-[2.2]" />
          <span>TEMPLATES &amp; CHECKLISTS</span>
        </div>

        <h4 className="mt-2 font-display text-lg font-bold text-slate-950 leading-snug">
          Ready-to-use templates for HR &amp; Payroll
        </h4>
        <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal">
          Save time with expert-crafted letters, forms, and HR documents.
        </p>

        <div className="mt-4 space-y-2.5">
          {[
            { name: "Employee Information Form", slug: "employee-information-form" },
            { name: "Leave Application Form", slug: "leave-application-form" },
            { name: "Attendance Register", slug: "attendance-register" },
            { name: "Salary Structure Template", slug: "salary-structure-template" },
            { name: "Employee Exit Checklist", slug: "employee-exit-checklist" },
            { name: "Shift Roster Template", slug: "shift-roster-template" },
            { name: "Performance Review Template", slug: "performance-review-template" },
          ].map((item) => (
            <Link
              key={item.slug}
              href={`/templates/${item.slug}`}
              className="group flex items-center gap-3 rounded-xl p-2 text-xs font-bold text-slate-800 hover:bg-teal-50/70 hover:text-[#0E7A6E] transition-all"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 border border-teal-200/70 text-[#12B5A5] group-hover:scale-105 group-hover:bg-[#12B5A5] group-hover:text-white transition-all">
                <FileText className="h-3.5 w-3.5 stroke-[2.2]" />
              </div>
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="mt-5 pt-3.5 border-t border-slate-100">
          <Link
            href="/templates"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12B5A5] hover:text-[#0E7A6E] transition-colors"
          >
            <span>View all 11 templates</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
