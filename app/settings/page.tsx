"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Settings,
  Building,
  Camera,
  Clock,
  ShieldCheck,
  Save,
  CheckCircle2,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "Apex Tech Solutions Pvt Ltd",
    gstin: "07AAAAA0000A1Z5",
    cin: "U72200DL2020PTC367890",
    address: "Plot 42, Okhla Phase 3, New Delhi - 110020",
    faceLiveness: true,
    confidenceThreshold: "95%",
    graceMinutes: 15,
    lateMarkRules: "3 late marks = 1 half-day deduction",
    pfCode: "DLCPM0012345000",
    esicCode: "11000123450000001",
    ptReg: "DEL/PT/2022/9871",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <WorkspaceShell
      title="Organization Settings & Policies"
      subtitle="Configure enterprise parameters, face kiosk biometric sensitivity, and statutory numbers"
    >
      <form onSubmit={handleSave} className="space-y-6 max-w-4xl">
        {saved && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 flex items-center gap-2 text-xs font-bold text-emerald-800">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Settings saved and deployed across all connected kiosks and devices!
          </div>
        )}

        {/* 1. Organization Details */}
        <div className="rounded-2xl border border-teal-100/80 bg-white p-6 shadow-card">
          <h3 className="font-display text-base font-bold text-slate-950 mb-4 flex items-center gap-2">
            <Building className="h-4 w-4 text-[#12B5A5]" />
            Organization Profile
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Company Legal Name</label>
              <input
                type="text"
                value={formData.orgName}
                onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">GSTIN Number</label>
              <input
                type="text"
                value={formData.gstin}
                onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none font-mono"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">Registered Office Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 2. Face Recognition & Anti-Spoofing */}
        <div className="rounded-2xl border border-teal-100/80 bg-white p-6 shadow-card">
          <h3 className="font-display text-base font-bold text-slate-950 mb-4 flex items-center gap-2">
            <Camera className="h-4 w-4 text-[#12B5A5]" />
            Face Kiosk Biometric Sensitivity
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 text-xs">
            <div className="sm:col-span-2 flex items-center justify-between rounded-xl bg-teal-50/50 p-3 border border-teal-100">
              <div>
                <p className="font-bold text-slate-900">Anti-Spoofing 3D Liveness Detection</p>
                <p className="text-[11px] text-slate-500">
                  Blocks photos on phones, printed pictures, and video playback attacks.
                </p>
              </div>
              <input
                type="checkbox"
                checked={formData.faceLiveness}
                onChange={(e) => setFormData({ ...formData, faceLiveness: e.target.checked })}
                className="h-4 w-4 rounded text-[#12B5A5] accent-[#12B5A5]"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Match Confidence Threshold</label>
              <select
                value={formData.confidenceThreshold}
                onChange={(e) => setFormData({ ...formData, confidenceThreshold: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none"
              >
                <option>90% (High speed)</option>
                <option>95% (Standard enterprise)</option>
                <option>98% (Maximum security)</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Grace Period Minutes</label>
              <input
                type="number"
                value={formData.graceMinutes}
                onChange={(e) => setFormData({ ...formData, graceMinutes: parseInt(e.target.value) })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 3. Statutory Numbers */}
        <div className="rounded-2xl border border-teal-100/80 bg-white p-6 shadow-card">
          <h3 className="font-display text-base font-bold text-slate-950 mb-4 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#12B5A5]" />
            Statutory Registration Codes
          </h3>

          <div className="grid gap-4 sm:grid-cols-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">EPFO Establishment Code</label>
              <input
                type="text"
                value={formData.pfCode}
                onChange={(e) => setFormData({ ...formData, pfCode: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">ESIC Employer Code</label>
              <input
                type="text"
                value={formData.esicCode}
                onChange={(e) => setFormData({ ...formData, esicCode: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">PT Registration Number</label>
              <input
                type="text"
                value={formData.ptReg}
                onChange={(e) => setFormData({ ...formData, ptReg: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-8 py-2.5 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <Save className="h-4 w-4" />
            Save Organization Settings
          </button>
        </div>
      </form>
    </WorkspaceShell>
  );
}
