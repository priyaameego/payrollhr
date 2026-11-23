"use client";

import React, { useState } from "react";
import { Download, Check, ShieldCheck } from "lucide-react";

interface TemplateDownloadTriggerProps {
  fileName: string;
  csvContent: string;
  title: string;
}

export function triggerCsvDownload(fileName: string, csvContent: string, title: string) {
  const content = csvContent.startsWith("data:")
    ? csvContent
    : `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`;

  const link = document.createElement("a");
  link.setAttribute("href", content);
  link.setAttribute("download", fileName.endsWith(".csv") ? fileName : `${fileName}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function TemplateDownloadTrigger({
  fileName,
  csvContent,
  title,
}: TemplateDownloadTriggerProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = () => {
    triggerCsvDownload(fileName, csvContent, title);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 pt-2">
      <button
        type="button"
        onClick={handleClick}
        className={`group relative inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-extrabold shadow-lg transition-all active:scale-[0.98] ${
          downloaded
            ? "bg-teal-700 text-white shadow-teal-700/30 ring-2 ring-teal-500"
            : "bg-[#12B5A5] text-white hover:bg-[#0E9486] shadow-teal-500/30 hover:shadow-teal-500/40"
        }`}
      >
        {downloaded ? (
          <>
            <Check className="h-5 w-5 stroke-[2.5] text-teal-200" />
            <span>Pack Downloaded! (100% Free)</span>
          </>
        ) : (
          <>
            <span>Download Free Pack</span>
            <Download className="h-5 w-5 stroke-[2.5] transition-transform group-hover:translate-y-0.5" />
          </>
        )}
      </button>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
        <ShieldCheck className="h-4 w-4 text-[#12B5A5]" />
        <span>Instant download. No card needed.</span>
      </div>
    </div>
  );
}
