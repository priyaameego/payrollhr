"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, FileSpreadsheet, Download, Check, FileText } from "lucide-react";
import templatesData from "@/data/templates.json";

export default function TemplatesPage() {
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const handleDownload = (file: string, name: string) => {
    // Generate sample CSV content
    const csvContent = `data:text/csv;charset=utf-8,Template: ${name}\nPayroleHR Sample HR Document\nFile: ${file}\nGenerated: ${new Date().toLocaleDateString()}\n\nField,Description,Sample Value\nID,Employee Identifier,EMP001\nName,Full Legal Name,Asha Sharma\nDepartment,Designated Unit,Accounts\nDesignation,Role Title,Senior Executive\nStatus,Current Employment State,Active\n`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", file);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(file);
    setTimeout(() => setDownloaded(null), 2500);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/resources" className="hover:text-[#12B5A5]">
          Resources
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Templates</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Ready-to-use documents
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          Free HR templates
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Spreadsheet templates you can open in Excel, Google Sheets or Numbers. Download and adapt them freely for your organisation.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templatesData.map((tpl: any) => {
          const isDone = downloaded === tpl.file;
          return (
            <div
              key={tpl.file}
              className="rounded-3xl border border-teal-100/80 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100/60 text-[#12B5A5]">
                  <FileSpreadsheet className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-display text-base font-bold text-slate-900">
                  {tpl.name}
                </h2>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {tpl.text}
                </p>
                <div className="mt-3 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-mono text-slate-500">
                  {tpl.file}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleDownload(tpl.file, tpl.name)}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all shadow-sm ${
                    isDone
                      ? "bg-teal-600 text-white"
                      : "bg-[#E6F9F6] text-[#0E7A6E] hover:bg-[#12B5A5] hover:text-white"
                  }`}
                >
                  {isDone ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      Downloaded CSV
                    </>
                  ) : (
                    <>
                      <Download className="h-3.5 w-3.5" />
                      Download Template
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
