"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  Lock,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const payrollRuns = [
  {
    month: "October 2026",
    status: "Locked & Paid",
    statusColor: "emerald",
    staffCount: 148,
    grossSalary: "₹69,82,400",
    deductions: "₹5,53,950",
    netPayable: "₹64,28,450",
    runDate: "31 Oct 2026",
    bankFile: "HDFC_CMS_OCT2026.csv",
  },
  {
    month: "September 2026",
    status: "Locked & Paid",
    statusColor: "emerald",
    staffCount: 144,
    grossSalary: "₹67,90,000",
    deductions: "₹5,38,200",
    netPayable: "₹62,51,800",
    runDate: "30 Sep 2026",
    bankFile: "HDFC_CMS_SEP2026.csv",
  },
  {
    month: "August 2026",
    status: "Locked & Paid",
    statusColor: "emerald",
    staffCount: 141,
    grossSalary: "₹66,10,000",
    deductions: "₹5,24,100",
    netPayable: "₹60,85,900",
    runDate: "31 Aug 2026",
    bankFile: "HDFC_CMS_AUG2026.csv",
  },
];

export default function PayrollPage() {
  const [currentRunRunning, setCurrentRunRunning] = useState(false);

  const startNovemberRun = () => {
    setCurrentRunRunning(true);
    setTimeout(() => {
      setCurrentRunRunning(false);
      alert("November 2026 draft payroll calculated from live attendance! Gross: ₹70,12,000 | Net: ₹64,55,200");
    }, 1500);
  };

  return (
    <WorkspaceShell
      title="Payroll Processing & Salary Runs"
      subtitle="Attendance-linked salary calculations, statutory deductions (PF, ESI, TDS) and 1-click bank transfer"
      action={
        <div className="flex items-center gap-2">
          <Link
            href="/bank-export"
            className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-[#E8FAF7] px-3.5 py-2 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100/70 transition-colors shadow-sm"
          >
            <Download className="h-4 w-4" />
            Bank Transfer Export
          </Link>
          <button
            type="button"
            onClick={startNovemberRun}
            disabled={currentRunRunning}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <CreditCard className="h-4 w-4" />
            {currentRunRunning ? "Processing..." : "Process November Payroll"}
          </button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Active Month Banner */}
        <div className="attendo-card attendo-card-sheen p-6 relative overflow-hidden bg-gradient-to-r from-teal-50/70 via-white to-emerald-50/40">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-teal-100/80 border border-teal-200 px-3 py-1 text-xs font-bold text-[#0E7A6E]">
                  Current Period: November 2026
                </span>
                <span className="text-xs text-slate-500 font-medium">20 days elapsed</span>
              </div>
              <h2 className="mt-2 font-display text-xl font-bold text-slate-950 sm:text-2xl">
                Ready to preview November salary run
              </h2>
              <p className="mt-1 text-xs text-slate-600 max-w-xl leading-relaxed">
                148 active staff attendance records synced. 3 pending leaves will be factored into payable days upon approval.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={startNovemberRun}
                className="shimmer-pill rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-teal-500/20 hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
              >
                Calculate Draft Run →
              </button>
            </div>
          </div>
        </div>

        {/* Previous Finalized Runs */}
        <div>
          <h3 className="font-display text-base font-bold text-slate-950 mb-3">
            Finalized Payroll History
          </h3>
          <div className="attendo-card overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-teal-100/80 bg-[#E8FAF7]/40 text-slate-600 font-semibold">
                <tr>
                  <th className="py-3 px-4">Pay Period</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Staff Count</th>
                  <th className="py-3 px-4">Gross Earnings</th>
                  <th className="py-3 px-4">Total Deductions</th>
                  <th className="py-3 px-4">Net Payout</th>
                  <th className="py-3 px-4">Finalized On</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {payrollRuns.map((run) => (
                  <tr key={run.month} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{run.month}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                        <Lock className="h-3 w-3" />
                        {run.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">{run.staffCount} Staff</td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-900">{run.grossSalary}</td>
                    <td className="py-3.5 px-4 font-mono text-rose-600">{run.deductions}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-teal-700 text-sm">{run.netPayable}</td>
                    <td className="py-3.5 px-4 text-slate-500">{run.runDate}</td>
                    <td className="py-3.5 px-4 text-right space-x-2">
                      <Link
                        href="/payslips"
                        className="rounded-lg border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:bg-teal-50 hover:text-[#12B5A5]"
                      >
                        Payslips
                      </Link>
                      <Link
                        href="/bank-export"
                        className="rounded-lg bg-teal-50 px-2.5 py-1 text-[11px] font-bold text-[#0E7A6E] hover:bg-teal-100"
                      >
                        Bank File
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WorkspaceShell>
  );
}
