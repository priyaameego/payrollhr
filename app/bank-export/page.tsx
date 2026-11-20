"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, ArrowLeft, CheckCircle2, ShieldCheck, Building } from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const bankTemplates = [
  {
    id: "hdfc-cms",
    name: "HDFC Bank CMS",
    description: "Corporate Salary Upload format with IFSC, Debit Acct, and Beneficiary Codes",
    extension: ".csv",
    lastRun: "October 2026 (148 staff · ₹64,28,450)",
    recommended: true,
  },
  {
    id: "icici-cib",
    name: "ICICI Bank Corporate Internet Banking (CIB)",
    description: "Encrypted batch salary transfer format for ICICI Corporate Portal",
    extension: ".txt",
    lastRun: "Used for Vendor payments",
    recommended: false,
  },
  {
    id: "sbi-cmp",
    name: "State Bank of India (SBI CMP)",
    description: "Corporate Multitask Payment format for SBI Portal",
    extension: ".csv",
    lastRun: "Tested & verified",
    recommended: false,
  },
  {
    id: "axis-corporate",
    name: "Axis Bank Bulk Payment",
    description: "Standard NEFT/RTGS salary processing file",
    extension: ".xlsx",
    lastRun: "Available",
    recommended: false,
  },
];

export default function BankExportPage() {
  const [selectedFormat, setSelectedFormat] = useState("hdfc-cms");

  const downloadFile = (bankName: string) => {
    alert(`Generating & downloading ${bankName} batch salary transfer file with 148 verified accounts...`);
  };

  return (
    <WorkspaceShell
      title="Bank Salary Payout Export"
      subtitle="1-Click compliant bank transfer files ready for direct portal upload into your corporate net banking"
      action={
        <Link
          href="/payroll"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Payroll
        </Link>
      }
    >
      <div className="space-y-6 max-w-4xl">
        {/* Verification banner */}
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-emerald-900">
                100% Bank Details Validated
              </p>
              <p className="text-[11px] text-emerald-700">
                All 148 employee bank accounts have valid IFSC codes and active account numbers.
              </p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
            Audit Passed
          </span>
        </div>

        {/* Templates list */}
        <div className="space-y-4">
          <h3 className="font-display text-base font-bold text-slate-950">
            Select Your Corporate Bank Template
          </h3>

          <div className="grid gap-4">
            {bankTemplates.map((bank) => (
              <div
                key={bank.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-teal-100/80 bg-white p-5 shadow-card hover:border-[#12B5A5] transition-all gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-[#12B5A5]" />
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      {bank.name}
                    </h4>
                    {bank.recommended && (
                      <span className="rounded-md bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-[#0E7A6E]">
                        Primary Corporate Account
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500">{bank.description}</p>
                  <p className="text-[11px] text-slate-400">
                    Last generated: <span className="text-slate-600 font-medium">{bank.lastRun}</span>
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => downloadFile(bank.name)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-5 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
                  >
                    <Download className="h-4 w-4" />
                    Download {bank.extension}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WorkspaceShell>
  );
}
