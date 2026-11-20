"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";
import faqsData from "@/data/faqs.json";
import { contactDetails } from "@/data/navigation";

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "0-0": true,
  });

  const toggleItem = (catIdx: number, itemIdx: number) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const currentCategory = faqsData[activeCategory] || faqsData[0];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">FAQ</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Clear Answers
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Everything you need to know about setting up PayroleHR, attendance kiosks, salary calculations, mobile portal and data isolation.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {faqsData.map((cat: any, idx: number) => (
          <button
            key={cat.title}
            type="button"
            onClick={() => setActiveCategory(idx)}
            className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === idx
                ? "bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-white shadow-md shadow-teal-500/20"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Questions Accordion */}
      <div className="space-y-3">
        {currentCategory.items.map((item: any, idx: number) => {
          const key = `${activeCategory}-${idx}`;
          const isOpen = !!openItems[key];
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white transition-all shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleItem(activeCategory, idx)}
                className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#12B5A5] transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 text-[#12B5A5] ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Help Banner */}
      <div className="rounded-3xl border border-teal-100 bg-[#F0FDFB] p-8 text-center sm:p-10 shadow-sm">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
          Have a question not covered here?
        </h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          Talk directly to our product specialists on phone or WhatsApp. We respond within minutes.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={contactDetails.tel}
            className="flex items-center gap-2 rounded-full border border-teal-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-teal-50 transition-colors shadow-sm"
          >
            <Phone className="h-3.5 w-3.5 text-[#12B5A5]" />
            Call {contactDetails.phone}
          </a>
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp us
          </a>
        </div>
      </div>
    </div>
  );
}
