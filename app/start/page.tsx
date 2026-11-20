"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Building,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Camera,
  CreditCard,
  Clock,
  Sparkles,
} from "lucide-react";

export default function StartPage() {
  const [teamSize, setTeamSize] = useState("25-100");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "Face Attendance Kiosk",
    "Payroll Processing",
  ]);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const toggleFeature = (feat: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FCFB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/payrolehr-icon.png"
            alt="PayroleHR"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl shadow-sm"
          />
          <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Payrole<span className="text-[#12B5A5]">HR</span>
          </span>
        </Link>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-[#E8FAF7] px-3.5 py-1 text-xs font-bold text-[#0E7A6E]">
          <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" /> Rapid Setup Wizard
        </div>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
          Get started with PayroleHR in 3 minutes
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-600">
          Tell us about your organization and we&apos;ll configure your workspace rules instantly.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-teal-100/80 bg-white p-6 sm:p-8 shadow-card">
        {submitted ? (
          <div className="text-center space-y-4 py-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-950">
              Your Workspace is Ready!
            </h2>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              We&apos;ve customized your sandbox with pre-configured Face Kiosk settings and Indian payroll compliance rules.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/dashboard"
                className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E]"
              >
                Open Dashboard →
              </Link>
              <Link
                href="/book-a-demo"
                className="rounded-xl border border-slate-200 px-6 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Schedule Onboarding Call
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Step 1: Team Size */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-display text-base font-bold text-slate-950">
                  1. How many employees work in your company?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["1 - 25", "25 - 100", "100 - 300", "300+"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTeamSize(size)}
                      className={`rounded-2xl border p-4 text-center transition-all ${
                        teamSize === size
                          ? "border-[#12B5A5] bg-teal-50/50 shadow-sm ring-2 ring-[#12B5A5]/20"
                          : "border-slate-200 hover:border-teal-200"
                      }`}
                    >
                      <Users className="mx-auto h-5 w-5 text-[#12B5A5] mb-1" />
                      <span className="font-display text-sm font-bold text-slate-900 block">
                        {size}
                      </span>
                      <span className="text-[10px] text-slate-400">Employees</span>
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-2 text-xs font-bold text-white shadow-sm"
                  >
                    Next: Pick Features →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Features */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-display text-base font-bold text-slate-950">
                  2. Which modules do you need?
                </h3>
                <div className="space-y-2.5">
                  {[
                    { name: "Face Attendance Kiosk", desc: "Contactless tablet & phone punch" },
                    { name: "GPS Field Tracking", desc: "Live location & geofenced check-ins" },
                    { name: "Leave & Shift Policies", desc: "Accrual rules & rotational rosters" },
                    { name: "Payroll Processing", desc: "1-Click salary & bank export files" },
                  ].map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.name);
                    return (
                      <div
                        key={feat.name}
                        onClick={() => toggleFeature(feat.name)}
                        className={`flex items-center justify-between rounded-2xl border p-3.5 cursor-pointer transition-all ${
                          isChecked
                            ? "border-[#12B5A5] bg-teal-50/40"
                            : "border-slate-200 hover:border-teal-100"
                        }`}
                      >
                        <div>
                          <p className="font-display text-xs font-bold text-slate-900">
                            {feat.name}
                          </p>
                          <p className="text-[11px] text-slate-500">{feat.desc}</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="h-4 w-4 rounded text-[#12B5A5] accent-[#12B5A5]"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-2 text-xs font-bold text-white shadow-sm"
                  >
                    Launch My Workspace →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
