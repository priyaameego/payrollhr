"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  Search,
  Filter,
  Download,
  Camera,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const initialRecords = [
  {
    code: "EMP-0142",
    name: "Arun Sharma",
    dept: "Engineering",
    shift: "General (09:00 - 18:00)",
    inTime: "09:02 AM",
    outTime: "06:05 PM",
    totalHours: "9h 03m",
    status: "Present",
    kiosk: "Reception Kiosk",
  },
  {
    code: "EMP-0098",
    name: "Kavita Verma",
    dept: "Logistics",
    shift: "Morning (07:00 - 16:00)",
    inTime: "06:58 AM",
    outTime: "04:02 PM",
    totalHours: "9h 04m",
    status: "Present",
    kiosk: "Gate 2 Biometric",
  },
  {
    code: "EMP-0063",
    name: "Rohan Gupta",
    dept: "Marketing",
    shift: "General (09:00 - 18:00)",
    inTime: "09:42 AM",
    outTime: "06:45 PM",
    totalHours: "9h 03m",
    status: "Late",
    kiosk: "Mobile Punch",
  },
  {
    code: "EMP-0045",
    name: "Suresh Pillai",
    dept: "Operations",
    shift: "Night (22:00 - 06:00)",
    inTime: "09:58 PM",
    outTime: "06:02 AM",
    totalHours: "8h 04m",
    status: "Present",
    kiosk: "Plant Kiosk",
  },
  {
    code: "EMP-0112",
    name: "Sneha Patil",
    dept: "Finance",
    shift: "General (09:00 - 18:00)",
    inTime: "--",
    outTime: "--",
    totalHours: "0h",
    status: "On Leave",
    kiosk: "Approved Leave",
  },
  {
    code: "EMP-0119",
    name: "Manoj Deshmukh",
    dept: "Engineering",
    shift: "General (09:00 - 18:00)",
    inTime: "09:12 AM",
    outTime: "01:30 PM",
    totalHours: "4h 18m",
    status: "Half Day",
    kiosk: "Reception Kiosk",
  },
  {
    code: "EMP-0130",
    name: "Pooja Hegde",
    dept: "HR",
    shift: "General (09:00 - 18:00)",
    inTime: "--",
    outTime: "--",
    totalHours: "0h",
    status: "Absent",
    kiosk: "No punch recorded",
  },
];

export default function AttendanceRegisterPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedDate, setSelectedDate] = useState("2026-11-20");

  const filtered = initialRecords.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.code.toLowerCase().includes(search.toLowerCase()) ||
      r.dept.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "ALL" || r.status.toUpperCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <WorkspaceShell
      title="Daily Attendance Register"
      subtitle="Complete punch register, shift timings, biometric verification and hours"
      action={
        <div className="flex items-center gap-2">
          <Link
            href="/attendance/face"
            className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-[#E8FAF7] px-4 py-2 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100/70 transition-colors shadow-sm"
          >
            <Camera className="h-4 w-4 text-[#12B5A5]" />
            Open Face Kiosk
          </Link>
          <button
            type="button"
            onClick={() => alert("Downloading attendance master CSV...")}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Download className="h-4 w-4 text-slate-500" />
            Export CSV
          </button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Metric summary banner */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          <div className="attendo-card attendo-card-hover p-4">
            <span className="text-[11px] font-semibold text-slate-500">Total Staff</span>
            <div className="font-display text-2xl font-black text-slate-900 mt-1">148</div>
            <span className="inline-block mt-1 text-[10px] text-slate-400 font-medium">Scheduled today</span>
          </div>
          <div className="attendo-card attendo-card-hover p-4">
            <span className="text-[11px] font-semibold text-emerald-600">Present</span>
            <div className="font-display text-2xl font-black text-emerald-700 mt-1">136</div>
            <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">91.8% rate</span>
          </div>
          <div className="attendo-card attendo-card-hover p-4">
            <span className="text-[11px] font-semibold text-amber-600">Late In</span>
            <div className="font-display text-2xl font-black text-amber-700 mt-1">5</div>
            <span className="inline-block mt-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">&gt; 15m grace</span>
          </div>
          <div className="attendo-card attendo-card-hover p-4">
            <span className="text-[11px] font-semibold text-sky-600">On Leave</span>
            <div className="font-display text-2xl font-black text-sky-700 mt-1">7</div>
            <span className="inline-block mt-1 text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Approved by HR</span>
          </div>
          <div className="attendo-card attendo-card-hover p-4">
            <span className="text-[11px] font-semibold text-teal-600">Absent</span>
            <div className="font-display text-2xl font-black text-slate-900 mt-1">0</div>
            <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Zero unaccounted</span>
          </div>
        </div>

        {/* Filter bar */}
        <div className="attendo-card p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, ID or department..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/50 py-2 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-[#12B5A5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#12B5A5]/20 transition-all"
              />
            </div>

            {/* Status pills */}
            <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl text-xs">
              {["ALL", "PRESENT", "LATE", "ON LEAVE", "HALF DAY", "ABSENT"].map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setStatusFilter(st)}
                  className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
                    statusFilter === st
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-slate-500">Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="rounded-xl border border-slate-200/80 bg-white px-3 py-1.5 text-xs text-slate-800 font-medium focus:border-[#12B5A5] focus:outline-none focus:ring-2 focus:ring-[#12B5A5]/20 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Register Table */}
        <div className="attendo-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-teal-100/80 bg-[#E8FAF7]/40 text-slate-600 font-semibold">
                <tr>
                  <th className="py-3 px-4">Employee</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Shift</th>
                  <th className="py-3 px-4">Punch In</th>
                  <th className="py-3 px-4">Punch Out</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Device / Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filtered.map((r) => (
                  <tr key={r.code} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">{r.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{r.code}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">{r.dept}</td>
                    <td className="py-3.5 px-4 text-slate-500">{r.shift}</td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-900">
                      {r.inTime}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">
                      {r.outTime}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">
                      {r.totalHours}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          r.status === "Present"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
                            : r.status === "Late"
                            ? "bg-amber-50 text-amber-700 border border-amber-200/80"
                            : r.status === "On Leave"
                            ? "bg-sky-50 text-sky-700 border border-sky-200/80"
                            : r.status === "Half Day"
                            ? "bg-purple-50 text-purple-700 border border-purple-200/80"
                            : "bg-rose-50 text-rose-700 border border-rose-200/80"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                      {r.kiosk}
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
