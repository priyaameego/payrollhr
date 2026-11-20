"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  Share2,
  Printer,
  CheckCircle2,
  ArrowLeft,
  Search,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const initialSlips = [
  {
    code: "EMP-0142",
    name: "Arun Sharma",
    dept: "Engineering",
    role: "Full Stack Developer",
    basic: 42000,
    hra: 21000,
    special: 17000,
    gross: 80000,
    pf: 1800,
    pt: 200,
    tds: 3500,
    deductions: 5500,
    net: 74500,
    month: "October 2026",
    status: "Sent via WhatsApp",
  },
  {
    code: "EMP-0098",
    name: "Kavita Verma",
    dept: "Logistics",
    role: "Logistics Coordinator",
    basic: 24000,
    hra: 12000,
    special: 9000,
    gross: 45000,
    pf: 1800,
    pt: 200,
    tds: 0,
    deductions: 2000,
    net: 43000,
    month: "October 2026",
    status: "Sent via WhatsApp",
  },
  {
    code: "EMP-0063",
    name: "Rohan Gupta",
    dept: "Marketing",
    role: "Growth Marketing Specialist",
    basic: 35000,
    hra: 17500,
    special: 12500,
    gross: 65000,
    pf: 1800,
    pt: 200,
    tds: 2100,
    deductions: 4100,
    net: 60900,
    month: "October 2026",
    status: "Sent via WhatsApp",
  },
];

export default function PayslipsPage() {
  const [selectedSlip, setSelectedSlip] = useState(initialSlips[0]);
  const [search, setSearch] = useState("");

  return (
    <WorkspaceShell
      title="Employee Payslips"
      subtitle="Monthly salary vouchers, tax breakdown, and batch delivery via WhatsApp & Email"
      action={
        <div className="flex items-center gap-2">
          <Link
            href="/payroll"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Payroll
          </Link>
          <button
            type="button"
            onClick={() => alert("Batch WhatsApp payslip delivery started for 148 employees!")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <Share2 className="h-4 w-4" />
            Batch WhatsApp Dispatch
          </button>
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left: Employee List */}
        <div className="rounded-2xl border border-teal-100/80 bg-white p-5 shadow-card">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter employee payslips..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-2 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-[#12B5A5] focus:bg-white focus:outline-none"
            />
          </div>

          <div className="space-y-3">
            {initialSlips.map((slip) => {
              const isSelected = selectedSlip.code === slip.code;
              return (
                <div
                  key={slip.code}
                  onClick={() => setSelectedSlip(slip)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                    isSelected
                      ? "border-[#12B5A5] bg-teal-50/40 shadow-sm"
                      : "border-slate-100 bg-white hover:border-teal-200"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-sm font-bold text-slate-900">
                        {slip.name}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {slip.code} · {slip.dept}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold text-teal-700">
                      ₹{slip.net.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                    <span>{slip.month}</span>
                    <span className="text-emerald-600 font-semibold">{slip.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Live Payslip Preview */}
        <div className="rounded-3xl border border-teal-200/80 bg-white p-6 sm:p-8 shadow-card flex flex-col justify-between">
          <div className="space-y-6">
            {/* Payslip Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-5">
              <div>
                <span className="font-display text-lg font-bold text-slate-900">
                  Apex Tech Solutions Pvt Ltd
                </span>
                <p className="text-xs text-slate-500">
                  Payslip for the month of {selectedSlip.month}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  Paid
                </span>
              </div>
            </div>

            {/* Staff info grid */}
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-600 bg-slate-50/70 p-4 rounded-2xl">
              <div>
                <p className="text-slate-400 text-[10px]">Employee Name</p>
                <p className="font-bold text-slate-900">{selectedSlip.name}</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px]">Employee Code</p>
                <p className="font-mono font-bold text-slate-900">{selectedSlip.code}</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px]">Department & Role</p>
                <p className="font-medium text-slate-900">{selectedSlip.dept} · {selectedSlip.role}</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px]">Bank & Payment Mode</p>
                <p className="font-medium text-slate-900">HDFC Bank (NEFT)</p>
              </div>
            </div>

            {/* Salary Breakdown 2-Column */}
            <div className="grid gap-6 sm:grid-cols-2 text-xs">
              {/* Earnings */}
              <div className="space-y-2 rounded-2xl border border-teal-100 p-4 bg-teal-50/20">
                <span className="font-bold text-slate-900 text-xs block border-b border-teal-100 pb-2">
                  Earnings
                </span>
                <div className="flex justify-between text-slate-600">
                  <span>Basic Salary</span>
                  <span className="font-mono font-medium">₹{selectedSlip.basic.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>House Rent Allowance (HRA)</span>
                  <span className="font-mono font-medium">₹{selectedSlip.hra.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Special Allowance</span>
                  <span className="font-mono font-medium">₹{selectedSlip.special.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-teal-100">
                  <span>Gross Earnings</span>
                  <span className="font-mono">₹{selectedSlip.gross.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Deductions */}
              <div className="space-y-2 rounded-2xl border border-rose-100 p-4 bg-rose-50/20">
                <span className="font-bold text-slate-900 text-xs block border-b border-rose-100 pb-2">
                  Deductions
                </span>
                <div className="flex justify-between text-slate-600">
                  <span>Provident Fund (PF)</span>
                  <span className="font-mono font-medium">₹{selectedSlip.pf.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Professional Tax (PT)</span>
                  <span className="font-mono font-medium">₹{selectedSlip.pt.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>TDS / Income Tax</span>
                  <span className="font-mono font-medium">₹{selectedSlip.tds.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between font-bold text-rose-700 pt-2 border-t border-rose-100">
                  <span>Total Deductions</span>
                  <span className="font-mono">₹{selectedSlip.deductions.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Net Payout Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] p-5 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-teal-100">Net Take-Home Salary</span>
                <div className="font-display text-2xl font-black">
                  ₹{selectedSlip.net.toLocaleString("en-IN")}
                </div>
              </div>
              <span className="text-xs font-mono text-teal-100">Transferred via CMS</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-4">
            <button
              type="button"
              onClick={() => alert(`Downloading PDF for ${selectedSlip.name}...`)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
            <button
              type="button"
              onClick={() => alert(`Sent WhatsApp link to ${selectedSlip.name}!`)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-teal-50 px-4 py-2 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100"
            >
              <Share2 className="h-4 w-4" />
              Resend WhatsApp
            </button>
          </div>
        </div>
      </div>
    </WorkspaceShell>
  );
}
