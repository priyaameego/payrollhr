"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FeatureFaqAccordionProps {
  items: FaqItem[];
}

export default function FeatureFaqAccordion({ items }: FeatureFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-3">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white shadow-sm transition-all duration-200 hover:border-[#12B5A5]/60 hover:shadow-card"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-semibold text-slate-900 transition-colors hover:text-[#12B5A5]"
              aria-expanded={isOpen}
            >
              <span>{faq.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[#12B5A5] transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-teal-100 text-[#0E7A6E]" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-slate-100 bg-slate-50/40 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
