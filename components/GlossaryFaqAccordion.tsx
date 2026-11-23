"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface GlossaryFaqAccordionProps {
  items: FaqItem[];
}

export default function GlossaryFaqAccordion({ items }: GlossaryFaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First item open by default

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div key={idx} className="transition-colors">
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#0088F0] transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 ml-3">
                {isOpen ? (
                  <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
                ) : (
                  <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal animate-in fade-in duration-200">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
