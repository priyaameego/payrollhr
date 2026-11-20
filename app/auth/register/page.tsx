"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building,
  Upload,
} from "lucide-react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aadhaar: "",
    bankAccount: "",
    ifsc: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSendOtp = () => {
    if (phone.length >= 10) {
      setOtpSent(true);
      alert("SMS OTP 482910 sent to " + phone);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === "482910" || otp.length === 6) {
      setStep(2);
    } else {
      alert("Please enter 6-digit OTP code (e.g. 482910)");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFB] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
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
        <h2 className="mt-4 font-display text-2xl font-extrabold text-slate-950">
          Staff Portal Registration
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Join your company workspace with mobile SMS verification
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="rounded-3xl border border-teal-100/80 bg-white p-8 shadow-card">
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Application Sent to HR
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your profile has been submitted for verification. You will receive an SMS as soon as HR activates your portal access.
              </p>
              <div className="pt-4">
                <Link
                  href="/auth/sign-in"
                  className="block w-full text-center rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2.5 text-xs font-bold text-white shadow-sm"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Stepper */}
              <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-4">
                <span className={step === 1 ? "font-bold text-[#12B5A5]" : "text-slate-400"}>
                  1. Mobile Verify
                </span>
                <span className={step === 2 ? "font-bold text-[#12B5A5]" : "text-slate-400"}>
                  2. Your Details
                </span>
                <span className={step === 3 ? "font-bold text-[#12B5A5]" : "text-slate-400"}>
                  3. Documents
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      10-Digit Mobile Number
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="rounded-xl bg-teal-50 px-3 py-2 font-bold text-[#0E7A6E] hover:bg-teal-100 border border-teal-200"
                      >
                        Send Code
                      </button>
                    </div>
                  </div>

                  {otpSent && (
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Enter 6-Digit SMS Code
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 482910"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 font-mono tracking-widest text-center focus:border-[#12B5A5] focus:outline-none"
                      />
                      <p className="mt-1 text-[11px] text-slate-400">
                        Demo code is 482910
                      </p>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="button"
                      disabled={!otpSent}
                      onClick={handleVerifyOtp}
                      className="w-full rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2.5 font-bold text-white shadow-sm disabled:opacity-50"
                    >
                      Verify & Continue →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arun Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="arun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-5 py-2 font-bold text-white shadow-sm"
                    >
                      Next: Documents →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      12-Digit Aadhaar Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012"
                      value={formData.aadhaar}
                      onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Salary Bank Account Number
                    </label>
                    <input
                      type="text"
                      placeholder="Account number"
                      value={formData.bankAccount}
                      onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 font-mono focus:border-[#12B5A5] focus:outline-none"
                    />
                  </div>
                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-6 py-2 font-bold text-white shadow-sm"
                    >
                      Submit for HR Approval
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          <div className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">
            Already have an active account?{" "}
            <Link href="/auth/sign-in" className="font-bold text-[#12B5A5] hover:text-[#0E9486]">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
