"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileSpreadsheet,
  Download,
  Calendar,
  Filter,
  CheckCircle2,
  Clock,
  TrendingUp,
  CreditCard,
  ShieldCheck,
  Building,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const reportsList = [
  {
    id: "att-master",
    title: "Attendance Master",
    desc: "In and out punch times, dates as columns across the entire month for all staff.",
    category: "Attendance",
    formats: ["Excel (.xlsx)", "CSV"],
  },
  {
    id: "att-summary",
    title: "Attendance Summary",
    desc: "Present, absent, leave, half-day, and late mark totals per person with payable days.",
    category: "Attendance",
    formats: ["Excel (.xlsx)", "PDF"],
  },
  {
    id: "daily-punch",
    title: "Daily Punch Log",
    desc: "Every biometric punch event, face matching confidence score, timestamp, and device ID.",
    category: "Attendance",
    formats: ["CSV"],
  },
  {
    id: "payroll-reg",
    title: "Payroll Register",
    desc: "Monthly salary sheet with full CTC breakdown, basic, allowances, PF, ESI, TDS and net pay.",
    category: "Payroll",
    formats: ["Excel (.xlsx)", "CSV"],
  },
  {
    id: "bank-transfer",
    title: "Bank Transfer List",
    desc: "Account numbers, IFSC codes, beneficiary names, and exact net credit amounts.",
    category: "Payroll",
    formats: ["Excel (.xlsx)", "CSV", "TXT"],
  },
  {
    id: "pf-ecr",
    title: "PF ECR Electronic Challan",
    desc: "Statutory PF text file formatted exactly for direct upload into EPFO employer portal.",
    category: "Statutory",
    formats: ["TXT (EPFO format)"],
  },
  {
    id: "esic-return",
    title: "ESIC Monthly Contribution",
    desc: "ESIC IP numbers, wages, employee and employer shares formatted for ESIC portal.",
    category: "Statutory",
    formats: ["Excel (.xlsx)"],
  },
  {
    id: "tds-24q",
    title: "TDS 24Q Quarterly Summary",
    desc: "Tax deducted at source per employee under Old and New tax regimes.",
    category: "Statutory",
    formats: ["Excel (.xlsx)"],
  },
];

export default function ReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filtered = reportsList.filter(
    (r) => selectedCategory === "ALL" || r.category === selectedCategory
  );

  const handleDownload = (title: string, format: string) => {
    alert(`Generating and exporting ${title} in ${format}...`);
  };

  return (
    <WorkspaceShell
      title="Reports & Statutory Compliance Center"
      subtitle="Export complete audit-ready registers, monthly salary rolls, and EPFO / ESIC government portal files"
      action={
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => alert("Downloading complete month package zip...")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <Download className="h-4 w-4" />
            Download Month-End ZIP
          </button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-xs font-semibold">
          {["ALL", "Attendance", "Payroll", "Statutory"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`pb-2 border-b-2 px-3 transition-colors ${
                selectedCategory === cat
                  ? "border-[#12B5A5] text-[#12B5A5] font-bold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {cat === "ALL" ? "All Reports" : cat}
            </button>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((rep) => (
            <div
              key={rep.id}
              className="flex flex-col justify-between rounded-2xl border border-teal-100/80 bg-white p-5 shadow-card hover:border-teal-200 transition-all"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-[#0E7A6E]">
                    {rep.category}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-[#12B5A5]">
                    <FileSpreadsheet className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mt-3 font-display text-base font-bold text-slate-900">
                  {rep.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {rep.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] text-slate-400">Available formats:</span>
                <div className="flex gap-1.5">
                  {rep.formats.map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => handleDownload(rep.title, fmt)}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5] transition-colors"
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WorkspaceShell>
  );
}
