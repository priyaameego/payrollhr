"use client";

import React, { useState, useEffect } from "react";
import { Download, Check, FileSpreadsheet } from "lucide-react";
import { triggerCsvDownload } from "./TemplateDownloadTrigger";

interface TemplateDownloadBarProps {
  title: string;
  badge: string;
  fileName: string;
  csvContent: string;
}

export default function TemplateDownloadBar({
  title,
  badge,
  fileName,
  csvContent,
}: TemplateDownloadBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar when user scrolls past 380px
      if (window.scrollY > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleDownload = () => {
    triggerCsvDownload(fileName, csvContent, title);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed bottom-4 inset-x-3 sm:inset-x-6 z-40 max-w-4xl mx-auto transition-all duration-300">
      <div className="rounded-2xl border border-teal-200/90 bg-white/95 backdrop-blur-md p-3 sm:p-4 shadow-2xl shadow-teal-950/20 ring-1 ring-slate-900/5 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Left: Document info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] border border-teal-100">
            <FileSpreadsheet className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
              {title}
            </h4>
            <p className="text-[11px] font-medium text-slate-500 truncate hidden xs:block">
              {badge || "Free Excel & CSV Pack"} • Verified Indian Format
            </p>
          </div>
        </div>

        {/* Right: Quick Download Button */}
        <button
          type="button"
          onClick={handleDownload}
          className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 ${
            downloaded
              ? "bg-teal-700 text-white shadow-teal-700/30"
              : "bg-[#12B5A5] text-white hover:bg-[#0E9486] shadow-teal-500/25"
          }`}
        >
          {downloaded ? (
            <>
              <Check className="h-4 w-4 stroke-[2.5]" />
              <span>Downloaded</span>
            </>
          ) : (
            <>
              <span>Download Free Pack</span>
              <Download className="h-4 w-4 stroke-[2.5]" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
