"use client";

import React, { useState } from "react";
import { MessageCircle, Loader2 } from "lucide-react";

export default function DemoForm({ from = "website" }: { from?: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    orgName: "",
    industry: "",
    employees: "",
    message: "",
    agreed: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:gap-10 px-4 py-8 lg:grid-cols-3">
      {/* Left: Main Form Card */}
      <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-card lg:col-span-2">
        {submitted ? (
          <div className="py-12 text-center animate-fade-up">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-2xl shadow-md">
              ✓
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">
              Demo request received!
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.fullName || "there"}</span>. We&apos;ll contact you shortly at{" "}
              <span className="font-semibold text-slate-900">{formData.phone || formData.workEmail}</span> to arrange a walkthrough with your own rules and examples.
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
                  industry: "",
                  employees: "",
                  message: "",
                  agreed: true,
                });
              }}
              className="mt-6 inline-block rounded-xl border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none text-slate-800" htmlFor="fn">
                Full name *
              </label>
              <input
                id="fn"
                type="text"
                required
                autoComplete="name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-2xs transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0284c7] focus-visible:border-[#0284c7]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none text-slate-800" htmlFor="em">
                Work email *
              </label>
              <input
                id="em"
                type="email"
                required
                autoComplete="email"
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-2xs transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0284c7] focus-visible:border-[#0284c7]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none text-slate-800" htmlFor="ph">
                Phone number *
              </label>
              <input
                id="ph"
                type="tel"
                required
                autoComplete="tel"
                placeholder="98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-2xs transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0284c7] focus-visible:border-[#0284c7]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none text-slate-800" htmlFor="org">
                Organisation name *
              </label>
              <input
                id="org"
                type="text"
                required
                autoComplete="organization"
                value={formData.orgName}
                onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-2xs transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0284c7] focus-visible:border-[#0284c7]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none text-slate-800" htmlFor="ind">
                Industry *
              </label>
              <select
                id="ind"
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0284c7] focus-visible:border-[#0284c7]"
              >
                <option value="">Choose…</option>
                <option>Education</option>
                <option>Corporate office</option>
                <option>Manufacturing</option>
                <option>Healthcare</option>
                <option>Retail &amp; hospitality</option>
                <option>Small business</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none text-slate-800" htmlFor="ec">
                Number of employees *
              </label>
              <select
                id="ec"
                required
                value={formData.employees}
                onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0284c7] focus-visible:border-[#0284c7]"
              >
                <option value="">Choose…</option>
                <option>1–25</option>
                <option>26–100</option>
                <option>101–500</option>
                <option>501–1000</option>
                <option>1000+</option>
              </select>
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-sm font-medium leading-none text-slate-800" htmlFor="msg">
                Message
              </label>
              <textarea
                id="msg"
                rows={4}
                maxLength={1000}
                placeholder="What would you like to see? Any special rules?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="flex min-h-[90px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-2xs placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0284c7] focus-visible:border-[#0284c7]"
              />
            </div>

            <div className="sm:col-span-2 pt-1">
              <label className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0284c7] focus:ring-[#0284c7]"
                />
                <span>I agree to PayroleHR contacting me about this request. My details won&apos;t be shared.</span>
              </label>
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold cursor-pointer transition-colors bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-sm hover:shadow h-10 rounded-md px-8 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Request a demo</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Right Aside: 2 Separate Cards */}
      <aside className="space-y-4">
        {/* Card 1: What happens next */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card">
          <h2 className="font-display font-bold text-base text-slate-900">What happens next</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
            <li>We call to understand how you work today.</li>
            <li>We show PayroleHR set up with rules like yours.</li>
            <li>We help you import staff and go live.</li>
          </ol>
        </div>

        {/* Card 2: Prefer to chat now? */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card">
          <h2 className="font-display font-bold text-base text-slate-900">Prefer to chat now?</h2>
          <a
            href="https://wa.me/917007901057?text=Hi%2C%20I%27d%20like%20a%20demo%20of%20PayroleHR."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-slate-200 bg-slate-50 hover:bg-slate-100 h-9 px-4 py-2 mt-3 w-full text-slate-800 shadow-2xs group"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600 transition-transform group-hover:scale-110" />
            <span>WhatsApp +91 70079 01057</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
