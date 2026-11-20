"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Plus,
  Users,
  Calendar,
  Star,
  CheckCircle2,
  Trash2,
  Edit2,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const initialShifts = [
  {
    id: "SH-01",
    name: "General Corporate Shift",
    timings: "09:00 AM - 06:00 PM",
    workingHours: "8 hrs (+ 1 hr break)",
    assignedStaff: 82,
    isDefault: true,
    graceTime: "15 mins",
    halfDayThreshold: "4.5 hrs",
  },
  {
    id: "SH-02",
    name: "Plant Morning Shift (A)",
    timings: "07:00 AM - 04:00 PM",
    workingHours: "8 hrs (+ 1 hr break)",
    assignedStaff: 34,
    isDefault: false,
    graceTime: "10 mins",
    halfDayThreshold: "4.0 hrs",
  },
  {
    id: "SH-03",
    name: "Plant Evening Shift (B)",
    timings: "03:00 PM - 12:00 AM",
    workingHours: "8 hrs (+ 1 hr break)",
    assignedStaff: 22,
    isDefault: false,
    graceTime: "10 mins",
    halfDayThreshold: "4.0 hrs",
  },
  {
    id: "SH-04",
    name: "Night Production Shift (C)",
    timings: "10:00 PM - 06:00 AM",
    workingHours: "7.5 hrs (+ 45 min break)",
    assignedStaff: 10,
    isDefault: false,
    graceTime: "10 mins",
    halfDayThreshold: "4.0 hrs",
  },
];

export default function ShiftsPage() {
  const [shifts, setShifts] = useState(initialShifts);
  const [activeTab, setActiveTab] = useState<"SHIFTS" | "ROSTER">("SHIFTS");

  return (
    <WorkspaceShell
      title="Shift Scheduling & Staff Roster"
      subtitle="Shift timings, grace periods, default schedules, and weekly rotational rosters"
      action={
        <button
          type="button"
          onClick={() => alert("Create shift modal")}
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
        >
          <Plus className="h-4 w-4" />
          Create Shift
        </button>
      }
    >
      <div className="space-y-6">
        {/* Scheduling Overview Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-teal-100/80 bg-white p-4 shadow-card">
            <span className="text-xs font-semibold text-slate-500">Active Shifts</span>
            <div className="font-display text-2xl font-bold text-slate-900 mt-1">4 Shifts</div>
            <span className="text-[10px] text-[#0E7A6E]">Round-the-clock</span>
          </div>
          <div className="rounded-2xl border border-teal-100/80 bg-white p-4 shadow-card">
            <span className="text-xs font-semibold text-slate-500">Staff with Shift</span>
            <div className="font-display text-2xl font-bold text-emerald-600 mt-1">148 / 148</div>
            <span className="text-[10px] text-emerald-600">100% assigned</span>
          </div>
          <div className="rounded-2xl border border-teal-100/80 bg-white p-4 shadow-card">
            <span className="text-xs font-semibold text-slate-500">Unassigned Staff</span>
            <div className="font-display text-2xl font-bold text-slate-400 mt-1">0</div>
            <span className="text-[10px] text-slate-400">Zero orphaned</span>
          </div>
          <div className="rounded-2xl border border-teal-100/80 bg-white p-4 shadow-card">
            <span className="text-xs font-semibold text-slate-500">Default Shift</span>
            <div className="font-display text-sm font-bold text-teal-800 mt-2 truncate">
              General (09:00-18:00)
            </div>
            <span className="text-[10px] text-slate-400">82 employees</span>
          </div>
        </div>

        {/* Shift List Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {shifts.map((s) => (
            <div
              key={s.id}
              className="relative rounded-2xl border border-teal-100/80 bg-white p-5 shadow-card hover:border-teal-200 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {s.name}
                    </h3>
                    {s.isDefault && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-[#0E7A6E]">
                        <Star className="h-3 w-3 fill-[#0E7A6E]" />
                        Default
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-sm font-bold text-[#12B5A5]">
                    {s.timings}
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                  {s.assignedStaff} Staff
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                <div>
                  <span className="text-[10px] text-slate-400 block">Work Hours</span>
                  <span className="font-semibold text-slate-800">{s.workingHours}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Grace Period</span>
                  <span className="font-semibold text-slate-800">{s.graceTime}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Half Day Min</span>
                  <span className="font-semibold text-slate-800">{s.halfDayThreshold}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                <span className="text-slate-400">Shift ID: {s.id}</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => alert(`Edit shift ${s.name}`)}
                    className="rounded-lg border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => alert(`Manage staff in ${s.name}`)}
                    className="rounded-lg bg-teal-50 px-2.5 py-1 text-[11px] font-bold text-[#0E7A6E] hover:bg-teal-100/70"
                  >
                    Assign Staff
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WorkspaceShell>
  );
}
