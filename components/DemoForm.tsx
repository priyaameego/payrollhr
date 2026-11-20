"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Sparkles, Send, ShieldCheck } from "lucide-react";

export default function DemoForm({ from = "website" }: { from?: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    orgName: "",
    industry: "Education",
    staffCount: "26–100",
    features: ["Face attendance", "Payroll processing"],
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const industries = [
    "Education",
    "Corporate office",
    "Manufacturing",
    "Healthcare",
    "Retail & hospitality",
    "Small business",
    "Other",
  ];

  const staffSizes = ["1–25", "26–100", "101–500", "501–1000", "1000+"];

  const featureOptions = [
    "Face attendance",
    "Payroll processing",
    "Salary structures",
    "Leave management",
    "Mobile self-service",
    "Shifts & rosters",
    "Reports & Excel export",
  ];

  const handleFeatureToggle = (f: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(f)
        ? prev.features.filter((item) => item !== f)
        : [...prev.features, f],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-teal-100 bg-[#F0FDFB] p-8 text-center sm:p-12 shadow-card">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#12B5A5] text-white shadow-lg shadow-teal-500/30">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">
          Demo request received!
        </h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our solutions team will contact you at{" "}
          <span className="font-semibold text-slate-900">{formData.phone}</span> /{" "}
          <span className="font-semibold text-slate-900">{formData.workEmail}</span> shortly with a customised walkthrough for {formData.orgName}.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              workEmail: "",
              phone: "",
              orgName: "",
              industry: "Education",
              staffCount: "26–100",
              features: ["Face attendance", "Payroll processing"],
              notes: "",
            });
          }}
          className="mt-6 rounded-full border border-teal-200 bg-white px-6 py-2.5 text-xs font-bold text-[#0E7A6E] hover:bg-teal-50 transition-colors shadow-sm"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-10 shadow-card">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Full name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Asha Sharma"
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
          />
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Work email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            placeholder="asha@example.edu.in"
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Phone / WhatsApp <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            required
            pattern="[0-9+ -]{10,15}"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
          />
        </div>

        {/* Organization Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Organisation name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.orgName}
            onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
            placeholder="Delhi Public Academy"
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
          />
        </div>

        {/* Industry */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Industry / Type
          </label>
          <select
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
          >
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        {/* Staff Size */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Staff headcount
          </label>
          <select
            value={formData.staffCount}
            onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
          >
            {staffSizes.map((size) => (
              <option key={size} value={size}>
                {size} employees
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Features of interest */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
          Features of interest (select all that apply)
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {featureOptions.map((feat) => {
            const checked = formData.features.includes(feat);
            return (
              <label
                key={feat}
                onClick={() => handleFeatureToggle(feat)}
                className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-medium cursor-pointer transition-all ${
                  checked
                    ? "border-[#12B5A5] bg-[#E6F9F6] text-[#0E7A6E]"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                    checked
                      ? "border-[#12B5A5] bg-[#12B5A5] text-white"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {checked && <CheckCircle2 className="h-3 w-3" />}
                </div>
                <span>{feat}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Notes / Special requirements */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          Specific rules or requirements (optional)
        </label>
        <textarea
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="e.g. We have rotational night shifts, two weekly offs and biometric attendance to replace."
          className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
        />
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3.5 text-sm font-bold text-white shadow-md shadow-teal-500/25 hover:from-[#0E9486] hover:to-[#0B7A6E] hover:shadow-lg transition-all active:scale-95 disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Scheduling your demo...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Request a demo
            </>
          )}
        </button>
        <p className="mt-2.5 text-center text-xs text-slate-500">
          No credit card required. We will respect your privacy and never share your data.
        </p>
      </div>
    </form>
  );
}
