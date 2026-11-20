"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  Check,
  X,
  Clock,
  Plus,
  Filter,
  CheckCircle2,
  AlertCircle,
  FileText,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const initialRequests = [
  {
    id: "LV-2026-081",
    empName: "Rohan Gupta",
    empCode: "EMP-0063",
    dept: "Marketing",
    type: "Casual Leave",
    dates: "24 Nov 2026 - 25 Nov 2026",
    days: "2 Days",
    reason: "Personal family function out of town",
    appliedOn: "Today, 10:30 AM",
    status: "Pending",
  },
  {
    id: "LV-2026-080",
    empName: "Kavita Verma",
    empCode: "EMP-0098",
    dept: "Logistics",
    type: "Sick Leave",
    dates: "21 Nov 2026",
    days: "1 Day",
    reason: "Severe viral fever & doctor rest advised",
    appliedOn: "Yesterday, 06:15 PM",
    status: "Pending",
  },
  {
    id: "LV-2026-079",
    empName: "Manoj Deshmukh",
    empCode: "EMP-0119",
    dept: "Engineering",
    type: "Earned Leave",
    dates: "01 Dec 2026 - 05 Dec 2026",
    days: "5 Days",
    reason: "Annual vacation trip",
    appliedOn: "18 Nov 2026",
    status: "Pending",
  },
  {
    id: "LV-2026-078",
    empName: "Sneha Patil",
    empCode: "EMP-0112",
    dept: "Finance",
    type: "Casual Leave",
    dates: "14 Nov 2026",
    days: "1 Day",
    reason: "Bank documentation work",
    appliedOn: "12 Nov 2026",
    status: "Approved",
  },
];

export default function LeavesPage() {
  const [requests, setRequests] = useState(initialRequests);
  const [tab, setTab] = useState<"PENDING" | "APPROVED" | "ALL">("PENDING");

  const handleAction = (id: string, action: "Approved" | "Rejected") => {
    setRequests(
      requests.map((r) => (r.id === id ? { ...r, status: action } : r))
    );
  };

  const filtered = requests.filter((r) => {
    if (tab === "PENDING") return r.status === "Pending";
    if (tab === "APPROVED") return r.status === "Approved";
    return true;
  });

  return (
    <WorkspaceShell
      title="Leave Management & Approvals"
      subtitle="Review pending leave requests, check entitlement balances, and maintain holiday policies"
      action={
        <div className="flex items-center gap-2">
          <Link
            href="/leaves/balances"
            className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-[#E8FAF7] px-3.5 py-2 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100/70 transition-colors shadow-sm"
          >
            Leave Balances Ledger
          </Link>
          <button
            type="button"
            onClick={() => alert("Apply leave on behalf of employee")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <Plus className="h-4 w-4" />
            Apply Leave
          </button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Balances summary cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-teal-100/80 bg-white p-4 shadow-card">
            <span className="text-xs font-semibold text-slate-500">Pending Review</span>
            <div className="font-display text-2xl font-bold text-amber-600 mt-1">3 Requests</div>
            <span className="text-[10px] text-slate-400">Action needed</span>
          </div>
          <div className="rounded-2xl border border-teal-100/80 bg-white p-4 shadow-card">
            <span className="text-xs font-semibold text-slate-500">Currently On Leave</span>
            <div className="font-display text-2xl font-bold text-teal-700 mt-1">7 Staff</div>
            <span className="text-[10px] text-slate-400">Out today</span>
          </div>
          <div className="rounded-2xl border border-teal-100/80 bg-white p-4 shadow-card">
            <span className="text-xs font-semibold text-slate-500">Avg Leave Consumption</span>
            <div className="font-display text-2xl font-bold text-slate-900 mt-1">1.2 days</div>
            <span className="text-[10px] text-slate-400">per person this month</span>
          </div>
          <div className="rounded-2xl border border-teal-100/80 bg-white p-4 shadow-card">
            <span className="text-xs font-semibold text-slate-500">Upcoming Holiday</span>
            <div className="font-display text-xl font-bold text-[#0E7A6E] mt-1">25 Dec</div>
            <span className="text-[10px] text-slate-400">Christmas Day</span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setTab("PENDING")}
            className={`pb-2 border-b-2 px-3 transition-colors ${
              tab === "PENDING"
                ? "border-[#12B5A5] text-[#12B5A5] font-bold"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Pending Approvals ({requests.filter((r) => r.status === "Pending").length})
          </button>
          <button
            type="button"
            onClick={() => setTab("APPROVED")}
            className={`pb-2 border-b-2 px-3 transition-colors ${
              tab === "APPROVED"
                ? "border-[#12B5A5] text-[#12B5A5] font-bold"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Approved History
          </button>
          <button
            type="button"
            onClick={() => setTab("ALL")}
            className={`pb-2 border-b-2 px-3 transition-colors ${
              tab === "ALL"
                ? "border-[#12B5A5] text-[#12B5A5] font-bold"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            All Requests
          </button>
        </div>

        {/* Request Cards */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-400 text-xs">
              No leave requests in this category.
            </div>
          ) : (
            filtered.map((req) => (
              <div
                key={req.id}
                className="rounded-2xl border border-teal-100/80 bg-white p-5 shadow-card transition-all hover:border-teal-200"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-slate-900 text-sm">
                        {req.empName}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {req.empCode}
                      </span>
                      <span className="rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-[#0E7A6E]">
                        {req.dept}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
                      <span className="font-semibold text-slate-800">{req.type}</span>
                      <span>·</span>
                      <span className="font-medium text-slate-700">{req.dates}</span>
                      <span>·</span>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {req.days}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 italic pt-1">
                      &ldquo;{req.reason}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    {req.status === "Pending" ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleAction(req.id, "Rejected")}
                          className="flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-1.5 text-xs font-bold text-rose-700 hover:bg-rose-100 transition-colors"
                        >
                          <X className="h-3.5 w-3.5" />
                          Reject
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAction(req.id, "Approved")}
                          className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
                        >
                          <Check className="h-3.5 w-3.5" />
                          Approve
                        </button>
                      </>
                    ) : (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                        {req.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </WorkspaceShell>
  );
}
