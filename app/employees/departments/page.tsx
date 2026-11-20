"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Plus, Users, ArrowLeft } from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const initialDepts = [
  { name: "Engineering & Tech", head: "Rajesh Sharma", headCount: 42, budget: "₹38,00,000 / mo" },
  { name: "Operations & Logistics", head: "Suresh Pillai", headCount: 56, budget: "₹24,50,000 / mo" },
  { name: "Sales & Marketing", head: "Pooja Hegde", headCount: 28, budget: "₹18,20,000 / mo" },
  { name: "Finance & Accounts", head: "Sneha Patil", headCount: 14, budget: "₹12,40,000 / mo" },
  { name: "Human Resources", head: "Admin User", headCount: 8, budget: "₹6,80,000 / mo" },
];

export default function DepartmentsPage() {
  const [depts, setDepts] = useState(initialDepts);

  return (
    <WorkspaceShell
      title="Department Hierarchy"
      subtitle="Manage organizational divisions, department heads, and cost center budgets"
      action={
        <div className="flex items-center gap-2">
          <Link
            href="/employees"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Directory
          </Link>
          <button
            type="button"
            onClick={() => alert("Add department modal")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <Plus className="h-4 w-4" />
            Add Department
          </button>
        </div>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {depts.map((d) => (
          <div
            key={d.name}
            className="rounded-2xl border border-teal-100/80 bg-white p-5 shadow-card hover:border-teal-200 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5]">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-teal-100/60 px-2.5 py-0.5 text-[11px] font-bold text-[#0E7A6E]">
                {d.headCount} Staff
              </span>
            </div>

            <h3 className="mt-3 font-display text-base font-bold text-slate-900">{d.name}</h3>
            <p className="mt-1 text-xs text-slate-500">
              Department Head: <span className="font-semibold text-slate-800">{d.head}</span>
            </p>

            <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-600">
              <span>Payroll Cost:</span>
              <span className="font-mono font-bold text-slate-900">{d.budget}</span>
            </div>
          </div>
        ))}
      </div>
    </WorkspaceShell>
  );
}
