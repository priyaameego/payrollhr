"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Calendar,
  CreditCard,
  Clock,
  User,
  Download,
  CheckCircle2,
  Bell,
  LogOut,
  ChevronRight,
  ShieldCheck,
  FileText,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export default function EmployeePortalDashboard() {
  const [punchedIn, setPunchedIn] = useState(true);
  const [punchTime, setPunchTime] = useState("09:02 AM");
  const [applyLeaveOpen, setApplyLeaveOpen] = useState(false);

  const togglePunch = () => {
    if (punchedIn) {
      setPunchedIn(false);
      alert("Successfully punched OUT at " + new Date().toLocaleTimeString("en-IN"));
    } else {
      setPunchedIn(true);
      const now = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
      setPunchTime(now);
      alert("Successfully punched IN at " + now);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FCFB] text-slate-800 pb-16">
      {/* Mobile-Friendly Portal Top Bar */}
      <header className="sticky top-0 z-40 border-b border-teal-100/80 bg-white/95 px-4 py-3.5 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] font-display text-sm font-bold text-white shadow-sm">
              AS
            </div>
            <div>
              <p className="font-display text-sm font-bold text-slate-900 leading-tight">
                Arun Sharma
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                EMP-0142 · Engineering
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="rounded-xl border border-teal-200 bg-teal-50/70 px-2.5 py-1 text-[11px] font-bold text-[#0E7A6E]"
            >
              Admin View
            </Link>
            <Link
              href="/auth/sign-in"
              className="rounded-xl border border-slate-200 p-2 text-slate-400 hover:text-rose-600"
            >
              <LogOut className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Portal Main Mobile Shell */}
      <main className="mx-auto max-w-lg px-4 pt-5 space-y-5">
        {/* Punch In / Out Card */}
        <div className="relative overflow-hidden rounded-3xl border border-teal-200/80 bg-white p-6 shadow-card">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-semibold text-slate-500">Today&apos;s Shift</span>
              <p className="font-display text-sm font-bold text-slate-900">
                General Shift (09:00 - 18:00)
              </p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                punchedIn
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {punchedIn ? "Working · In" : "Punched Out"}
            </span>
          </div>

          <div className="mt-5 text-center">
            <div className="font-mono text-3xl font-black text-slate-950">
              {new Date().toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {punchedIn
                ? `Punched In today at ${punchTime} via Face Kiosk`
                : "Not punched in yet"}
            </p>

            <button
              type="button"
              onClick={togglePunch}
              className={`mt-5 w-full rounded-2xl py-3.5 text-sm font-bold shadow-md transition-all ${
                punchedIn
                  ? "bg-rose-500 text-white hover:bg-rose-600 shadow-rose-500/20"
                  : "bg-gradient-to-r from-[#12B5A5] to-[#0E9486] text-white hover:from-[#0E9486] hover:to-[#0B7A6E] shadow-teal-500/20"
              }`}
            >
              {punchedIn ? "Punch Out for the Day" : "Punch In Now (Face Scan)"}
            </button>
          </div>
        </div>

        {/* Latest Payslip Quick Card */}
        <div className="rounded-3xl border border-teal-100/80 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">
              Latest Payslip · October 2026
            </span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
              Credited
            </span>
          </div>

          <div className="mt-3 flex items-baseline justify-between">
            <div>
              <p className="text-xs text-slate-500">Take-Home Pay</p>
              <div className="font-display text-2xl font-black text-slate-950">
                ₹74,500
              </div>
            </div>
            <Link
              href="/payslips"
              className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50/70 px-3 py-1.5 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100 transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-[#12B5A5]" />
              Download Slip
            </Link>
          </div>
        </div>

        {/* Leave Balances Grid */}
        <div className="rounded-3xl border border-teal-100/80 bg-white p-5 shadow-card space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-sm font-bold text-slate-900">
              My Leave Balances
            </h3>
            <button
              type="button"
              onClick={() => alert("Leave application form modal")}
              className="text-xs font-bold text-[#12B5A5] hover:text-[#0E9486]"
            >
              + Apply Leave
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-2xl border border-teal-100 bg-[#E8FAF7]/50 p-3">
              <span className="text-[10px] font-semibold text-slate-500 block">Casual (CL)</span>
              <span className="font-display text-lg font-black text-[#0E7A6E]">9</span>
              <span className="text-[10px] text-slate-400 block">Remaining</span>
            </div>
            <div className="rounded-2xl border border-teal-100 bg-[#E8FAF7]/50 p-3">
              <span className="text-[10px] font-semibold text-slate-500 block">Sick (SL)</span>
              <span className="font-display text-lg font-black text-[#0E7A6E]">10</span>
              <span className="text-[10px] text-slate-400 block">Remaining</span>
            </div>
            <div className="rounded-2xl border border-teal-100 bg-[#E8FAF7]/50 p-3">
              <span className="text-[10px] font-semibold text-slate-500 block">Earned (EL)</span>
              <span className="font-display text-lg font-black text-[#0E7A6E]">21</span>
              <span className="text-[10px] text-slate-400 block">Remaining</span>
            </div>
          </div>
        </div>

        {/* Monthly Attendance Ring */}
        <div className="rounded-3xl border border-teal-100/80 bg-white p-5 shadow-card">
          <h3 className="font-display text-sm font-bold text-slate-900 mb-3">
            November Attendance Summary
          </h3>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-xl bg-slate-50 p-2.5">
              <span className="text-slate-400 text-[10px] block">Present</span>
              <span className="font-bold text-emerald-600 text-sm">20 Days</span>
            </div>
            <div className="rounded-xl bg-slate-50 p-2.5">
              <span className="text-slate-400 text-[10px] block">Late Mark</span>
              <span className="font-bold text-amber-600 text-sm">0 Days</span>
            </div>
            <div className="rounded-xl bg-slate-50 p-2.5">
              <span className="text-slate-400 text-[10px] block">Weekly Off</span>
              <span className="font-bold text-teal-700 text-sm">4 Days</span>
            </div>
          </div>
        </div>

        {/* Upcoming Holidays & Announcements */}
        <div className="rounded-3xl border border-teal-100/80 bg-white p-5 shadow-card space-y-3">
          <h3 className="font-display text-sm font-bold text-slate-900">
            Upcoming Holidays
          </h3>
          <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 font-display font-bold text-[#0E7A6E] text-xs">
                25
              </span>
              <div>
                <p className="font-bold text-slate-900">Christmas Day</p>
                <p className="text-[10px] text-slate-400">Wednesday · Mandatory holiday</p>
              </div>
            </div>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
              National
            </span>
          </div>
        </div>

        {/* Security & Portal Footnote */}
        <div className="pt-2 text-center text-[11px] text-slate-400">
          Powered by PayroleHR Employee Self-Service · ISO 27001 Secure
        </div>
      </main>
    </div>
  );
}
