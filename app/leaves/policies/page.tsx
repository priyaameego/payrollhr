"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Plus } from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const policies = [
  { name: "Casual Leave (CL)", quota: "12 days / year", accrual: "Monthly (1 day / mo)", carryForward: "Max 3 days", encashable: "No" },
  { name: "Sick Leave (SL)", quota: "12 days / year", accrual: "Front-loaded on 1 Jan", carryForward: "No", encashable: "No" },
  { name: "Earned Leave (EL)", quota: "24 days / year", accrual: "Monthly (2 days / mo)", carryForward: "Max 45 days", encashable: "Yes (on exit)" },
  { name: "Maternity Leave", quota: "26 weeks (182 days)", accrual: "As per statutory law", carryForward: "No", encashable: "No" },
  { name: "Paternity Leave", quota: "5 days", accrual: "Within 6 months of child birth", carryForward: "No", encashable: "No" },
];

export default function LeavePoliciesPage() {
  return (
    <WorkspaceShell
      title="Company Leave Policies"
      subtitle="Define statutory leave categories, annual allowances, accrual frequency and encashment terms"
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {policies.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-teal-100/80 bg-white p-5 shadow-card hover:border-teal-200 transition-all"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-slate-900">{p.name}</h3>
              <span className="rounded-full bg-teal-100/70 px-2.5 py-0.5 text-xs font-bold text-[#0E7A6E]">
                {p.quota}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Accrual Mode:</span>
                <span className="font-medium text-slate-800">{p.accrual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Carry Forward:</span>
                <span className="font-medium text-slate-800">{p.carryForward}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Encashable:</span>
                <span className="font-bold text-teal-700">{p.encashable}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </WorkspaceShell>
  );
}
