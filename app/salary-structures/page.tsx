"use client";

import Link from "next/link";
import { Plus, ArrowLeft, CheckCircle2 } from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const structures = [
  {
    name: "Corporate Standard (Full PF & ESI)",
    applicableTo: "110 Employees",
    basicPct: "50% of CTC",
    hraPct: "50% of Basic",
    specialAllowance: "Balance balancing figure",
    pf: "12% of Basic (Capped at ₹1,800)",
    esi: "0.75% employee + 3.25% employer (Gross <= ₹21,000)",
    pt: "State slab rules (₹200/mo)",
  },
  {
    name: "Plant Associate Structure (ESI Eligible)",
    applicableTo: "28 Employees",
    basicPct: "60% of CTC",
    hraPct: "40% of Basic",
    specialAllowance: "Conveyance + Overtime allowance",
    pf: "12% of Basic",
    esi: "Mandatory statutory deduction",
    pt: "₹200/mo",
  },
  {
    name: "Executive & Retainer (Contractual)",
    applicableTo: "10 Employees",
    basicPct: "100% Professional Fees",
    hraPct: "N/A",
    specialAllowance: "N/A",
    pf: "Not Applicable",
    esi: "Not Applicable",
    pt: "N/A (TDS under 194J applies)",
  },
];

export default function SalaryStructuresPage() {
  return (
    <WorkspaceShell
      title="Salary Structures & CTC Rules"
      subtitle="Custom earnings formulas, statutory limits, allowance splits and deduction rules"
      action={
        <div className="flex items-center gap-2">
          <Link
            href="/payroll"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Payroll
          </Link>
          <button
            type="button"
            onClick={() => alert("Create structure modal")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <Plus className="h-4 w-4" />
            New Structure
          </button>
        </div>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {structures.map((s) => (
          <div
            key={s.name}
            className="flex flex-col justify-between rounded-2xl border border-teal-100/80 bg-white p-6 shadow-card hover:border-teal-200 transition-all"
          >
            <div>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-[11px] font-bold text-[#0E7A6E]">
                {s.applicableTo}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-slate-900">
                {s.name}
              </h3>

              <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400">Basic Split:</span>
                  <span className="font-semibold text-slate-800">{s.basicPct}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">HRA Split:</span>
                  <span className="font-semibold text-slate-800">{s.hraPct}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">PF Deduction:</span>
                  <span className="font-semibold text-slate-800">{s.pf}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ESI Deduction:</span>
                  <span className="font-semibold text-slate-800">{s.esi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Professional Tax:</span>
                  <span className="font-semibold text-slate-800">{s.pt}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={() => alert(`Edit ${s.name}`)}
                className="w-full rounded-xl border border-slate-200 py-2 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5] transition-colors"
              >
                Configure Formula & Slabs
              </button>
            </div>
          </div>
        ))}
      </div>
    </WorkspaceShell>
  );
}
