"use client";

import Link from "next/link";
import { ArrowLeft, Search, Download } from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const balances = [
  { code: "EMP-0001", name: "Rajesh Sharma", cl: "6 / 12", sl: "10 / 12", el: "18 / 24", lwp: "0" },
  { code: "EMP-0045", name: "Suresh Pillai", cl: "4 / 12", sl: "12 / 12", el: "12 / 24", lwp: "0" },
  { code: "EMP-0063", name: "Rohan Gupta", cl: "2 / 12", sl: "11 / 12", el: "20 / 24", lwp: "1" },
  { code: "EMP-0098", name: "Kavita Verma", cl: "5 / 12", sl: "8 / 12", el: "15 / 24", lwp: "0" },
  { code: "EMP-0112", name: "Sneha Patil", cl: "7 / 12", sl: "12 / 12", el: "22 / 24", lwp: "0" },
  { code: "EMP-0142", name: "Arun Sharma", cl: "9 / 12", sl: "10 / 12", el: "21 / 24", lwp: "0" },
];

export default function LeaveBalancesPage() {
  return (
    <WorkspaceShell
      title="Staff Leave Balances Ledger"
      subtitle="Annual leave accrual, taken leaves, and closing balance per employee"
      action={
        <Link
          href="/leaves"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Requests
        </Link>
      }
    >
      <div className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white shadow-card">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-teal-100/80 bg-[#E8FAF7]/40 text-slate-600 font-semibold">
            <tr>
              <th className="py-3 px-4">Employee</th>
              <th className="py-3 px-4">Casual Leave (CL)</th>
              <th className="py-3 px-4">Sick Leave (SL)</th>
              <th className="py-3 px-4">Earned / Privilege (EL)</th>
              <th className="py-3 px-4">Leave Without Pay (LWP)</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {balances.map((b) => (
              <tr key={b.code} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="font-bold text-slate-900">{b.name}</div>
                  <div className="text-[11px] font-mono text-slate-400">{b.code}</div>
                </td>
                <td className="py-3.5 px-4 font-mono font-semibold text-[#0E7A6E]">{b.cl}</td>
                <td className="py-3.5 px-4 font-mono font-semibold text-teal-700">{b.sl}</td>
                <td className="py-3.5 px-4 font-mono font-semibold text-sky-700">{b.el}</td>
                <td className="py-3.5 px-4 font-mono font-semibold text-rose-600">{b.lwp}</td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    type="button"
                    onClick={() => alert(`Adjust leave for ${b.name}`)}
                    className="rounded-lg border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:bg-teal-50 hover:text-[#12B5A5]"
                  >
                    Adjust
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WorkspaceShell>
  );
}
