"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  UserPlus,
  ArrowLeft,
  CheckCircle2,
  Camera,
  Upload,
  Building,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

export default function NewEmployeePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    code: "EMP-0149",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
    bloodGroup: "O+",
    dept: "Engineering",
    role: "Full Stack Developer",
    joinDate: "2026-11-20",
    shift: "General (09:00 - 18:00)",
    pan: "",
    aadhaar: "",
    bankName: "HDFC Bank",
    accNum: "",
    ifsc: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <WorkspaceShell
      title="Add New Employee"
      subtitle="Complete staff onboarding record, face enrollment profile, and statutory details"
      action={
        <Link
          href="/employees"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Cancel & Back
        </Link>
      }
    >
      <div className="mx-auto max-w-3xl">
        {submitted ? (
          <div className="rounded-3xl border border-teal-200 bg-white p-10 text-center shadow-card">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-slate-950">
              Employee Onboarded Successfully!
            </h2>
            <p className="mt-2 text-xs text-slate-600 max-w-md mx-auto">
              {formData.name || "New Staff"} ({formData.code}) has been added to the master register. Login SMS sent to mobile.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/attendance/face"
                className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E]"
              >
                Enroll Biometric Face →
              </Link>
              <Link
                href="/employees"
                className="rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Return to Directory
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-teal-100/80 bg-white p-6 sm:p-8 shadow-card space-y-8"
          >
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              {[
                { num: 1, label: "Basic Details" },
                { num: 2, label: "Job & Shift" },
                { num: 3, label: "Statutory & Bank" },
              ].map((s) => (
                <div
                  key={s.num}
                  onClick={() => setStep(s.num)}
                  className={`flex items-center gap-2 cursor-pointer ${
                    step === s.num
                      ? "text-[#12B5A5] font-bold"
                      : step > s.num
                      ? "text-emerald-600 font-medium"
                      : "text-slate-400"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                      step === s.num
                        ? "bg-[#12B5A5] text-white"
                        : step > s.num
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {s.num}
                  </span>
                  <span className="text-xs hidden sm:inline">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-display text-base font-bold text-slate-950">
                  Step 1: Personal & Contact Information
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arun Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Employee Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arun@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number (for SMS & WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-2 text-xs font-bold text-white shadow-sm"
                  >
                    Next: Job Details →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Job & Shift Details */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-display text-base font-bold text-slate-950">
                  Step 2: Department, Role & Shift Assignment
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Department *
                    </label>
                    <select
                      value={formData.dept}
                      onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    >
                      <option>Engineering</option>
                      <option>Operations & Logistics</option>
                      <option>Sales & Marketing</option>
                      <option>Finance & Accounts</option>
                      <option>Human Resources</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Designation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Date of Joining *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.joinDate}
                      onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Assigned Shift *
                    </label>
                    <select
                      value={formData.shift}
                      onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    >
                      <option>General (09:00 - 18:00)</option>
                      <option>Morning (07:00 - 16:00)</option>
                      <option>Evening (15:00 - 00:00)</option>
                      <option>Night (22:00 - 06:00)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-xl border border-slate-200 px-5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-2 text-xs font-bold text-white shadow-sm"
                  >
                    Next: Bank & Statutory →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Statutory & Bank Details */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-display text-base font-bold text-slate-950">
                  Step 3: Statutory & Salary Payout Bank
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      placeholder="ABCDE1234F"
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs uppercase text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Aadhaar Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012"
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Bank Name *
                    </label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Bank Account Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="50100234567890"
                      value={formData.accNum}
                      onChange={(e) => setFormData({ ...formData, accNum: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-mono text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-xl border border-slate-200 px-5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-8 py-2.5 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E]"
                  >
                    {isSubmitting ? "Creating Record..." : "Save & Onboard Employee"}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </WorkspaceShell>
  );
}
