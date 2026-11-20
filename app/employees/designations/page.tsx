"use client";

import Link from "next/link";
import { Briefcase, Plus, ArrowLeft } from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const designations = [
  { title: "VP of Engineering", dept: "Engineering", level: "L6 - Executive", count: 1 },
  { title: "Senior Software Engineer", dept: "Engineering", level: "L4 - Senior", count: 14 },
  { title: "Full Stack Developer", dept: "Engineering", level: "L3 - Mid", count: 22 },
  { title: "Plant Operations Lead", dept: "Operations", level: "L5 - Lead", count: 3 },
  { title: "Machine Operator", dept: "Operations", level: "L2 - Associate", count: 42 },
  { title: "Growth Marketing Specialist", dept: "Marketing", level: "L3 - Mid", count: 10 },
  { title: "Senior Accountant", dept: "Finance", level: "L4 - Senior", count: 4 },
  { title: "HR Business Partner", dept: "Human Resources", level: "L4 - Senior", count: 3 },
];

export default function DesignationsPage() {
  return (
    <WorkspaceShell
      title="Designation & Role Matrix"
      subtitle="Job roles, career bands, seniority levels, and employee mappings"
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
            onClick={() => alert("Create designation modal")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <Plus className="h-4 w-4" />
            New Designation
          </button>
        </div>
      }
    >
      <div className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white shadow-card">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-teal-100/80 bg-[#E8FAF7]/40 text-slate-600 font-semibold">
            <tr>
              <th className="py-3 px-4">Role Title</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Level / Band</th>
              <th className="py-3 px-4">Active Staff</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {designations.map((d, i) => (
              <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900">{d.title}</td>
                <td className="py-3.5 px-4 text-slate-600 font-medium">{d.dept}</td>
                <td className="py-3.5 px-4">
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                    {d.level}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-bold text-[#0E7A6E]">{d.count} employees</td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    type="button"
                    onClick={() => alert(`Edit ${d.title}`)}
                    className="rounded-lg border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:bg-teal-50 hover:text-[#12B5A5] transition-colors"
                  >
                    Edit
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
