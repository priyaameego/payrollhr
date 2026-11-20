"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  Filter,
  UserPlus,
  Mail,
  Phone,
  Building,
  MoreVertical,
  Download,
  Upload,
  ShieldCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const initialEmployees = [
  {
    id: "EMP-0001",
    name: "Rajesh Sharma",
    role: "VP of Engineering",
    dept: "Engineering",
    email: "rajesh.s@apextech.com",
    phone: "+91 98765 43210",
    joinDate: "15 Jan 2022",
    type: "Full Time",
    status: "Active",
    portal: "Enabled",
  },
  {
    id: "EMP-0045",
    name: "Suresh Pillai",
    role: "Plant Operations Lead",
    dept: "Operations",
    email: "suresh.p@apextech.com",
    phone: "+91 98111 22334",
    joinDate: "01 Mar 2023",
    type: "Full Time",
    status: "Active",
    portal: "Enabled",
  },
  {
    id: "EMP-0063",
    name: "Rohan Gupta",
    role: "Growth Marketing Specialist",
    dept: "Marketing",
    email: "rohan.g@apextech.com",
    phone: "+91 99222 33445",
    joinDate: "10 Aug 2023",
    type: "Full Time",
    status: "Active",
    portal: "Enabled",
  },
  {
    id: "EMP-0098",
    name: "Kavita Verma",
    role: "Logistics Coordinator",
    dept: "Logistics",
    email: "kavita.v@apextech.com",
    phone: "+91 97333 44556",
    joinDate: "12 Nov 2024",
    type: "Full Time",
    status: "Active",
    portal: "Enabled",
  },
  {
    id: "EMP-0112",
    name: "Sneha Patil",
    role: "Senior Accountant",
    dept: "Finance",
    email: "sneha.p@apextech.com",
    phone: "+91 96444 55667",
    joinDate: "05 Feb 2025",
    type: "Full Time",
    status: "Active",
    portal: "Enabled",
  },
  {
    id: "EMP-0142",
    name: "Arun Sharma",
    role: "Full Stack Developer",
    dept: "Engineering",
    email: "arun.s@apextech.com",
    phone: "+91 95555 66778",
    joinDate: "14 Jul 2025",
    type: "Full Time",
    status: "Active",
    portal: "Enabled",
  },
];

export default function EmployeesPage() {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("ALL");

  const filtered = initialEmployees.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.id.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase());
    const matchesDept = deptFilter === "ALL" || e.dept === deptFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <WorkspaceShell
      title="Staff Directory"
      subtitle="148 Active Employees across 5 departments and 2 locations"
      action={
        <div className="flex items-center gap-2">
          <Link
            href="/employees/new"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <UserPlus className="h-4 w-4" />
            Add Employee
          </Link>
          <button
            type="button"
            onClick={() => alert("Downloading employee template...")}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Download className="h-4 w-4 text-slate-500" />
            Export Master
          </button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Filter bar */}
        <div className="rounded-2xl border border-teal-100/80 bg-white p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, ID, role or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-[#12B5A5] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl text-xs">
              {["ALL", "Engineering", "Operations", "Marketing", "Finance"].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDeptFilter(d)}
                  className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
                    deptFilter === d
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/employees/departments"
              className="text-xs font-semibold text-[#12B5A5] hover:text-[#0E9486]"
            >
              Manage Departments →
            </Link>
          </div>
        </div>

        {/* Directory Table */}
        <div className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-teal-100/80 bg-[#E8FAF7]/40 text-slate-600 font-semibold">
                <tr>
                  <th className="py-3 px-4">Employee</th>
                  <th className="py-3 px-4">Designation</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Joining Date</th>
                  <th className="py-3 px-4">Employment</th>
                  <th className="py-3 px-4">Portal Access</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filtered.map((emp) => (
                  <tr key={emp.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] font-display text-xs font-bold text-white shadow-sm">
                          {emp.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{emp.name}</div>
                          <div className="text-[11px] font-mono text-slate-400">{emp.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">{emp.role}</td>
                    <td className="py-3.5 px-4 text-slate-600">{emp.dept}</td>
                    <td className="py-3.5 px-4 text-slate-500">
                      <div>{emp.email}</div>
                      <div className="text-[10px] text-slate-400">{emp.phone}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">{emp.joinDate}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                        {emp.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200/80">
                        <CheckCircle2 className="h-3 w-3" />
                        {emp.portal}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => alert(`View details for ${emp.name}`)}
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
        </div>
      </div>
    </WorkspaceShell>
  );
}
