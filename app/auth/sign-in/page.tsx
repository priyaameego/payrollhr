"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Loader2,
} from "lucide-react";

export default function SignInPage() {
  const [mode, setMode] = useState<"staff" | "admin">("staff");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Admin state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileNumber) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
    }, 700);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
    }, 800);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
    }, 800);
  };

  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6">
      {/* Brand icon & title */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
          <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-gradient-to-br from-[#12B5A5] to-[#0E9486] p-0.5 shadow-md">
            <Image
              src="/__l5e/assets-v1/74691c14-0695-4828-a5f6-bc12b9107dc8/payrolehr-app-icon.png"
              alt="PayroleHR"
              width={44}
              height={44}
              className="h-full w-full rounded-[10px] object-cover"
            />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Payrole<span className="text-[#12B5A5]">HR</span>
          </span>
        </Link>
        <h1 className="font-display text-2xl font-extrabold text-slate-900">
          Sign in to your portal
        </h1>
        <p className="mt-1.5 text-xs text-slate-500">
          Staff sign in with mobile OTP; admin users sign in with credentials.
        </p>
      </div>

      {loggedIn ? (
        <div className="rounded-3xl border border-teal-100 bg-[#F0FDFB] p-8 text-center shadow-card">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#12B5A5] text-white">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
            Welcome to PayroleHR
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            You are successfully verified. In the production app, your organization dashboard loads here.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setLoggedIn(false);
                setOtpSent(false);
              }}
              className="rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2.5 text-xs font-bold text-white shadow-md hover:shadow-lg transition-all"
            >
              Sign out / Back to sign-in
            </button>
            <Link
              href="/"
              className="rounded-full border border-teal-200 bg-white py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-8 shadow-card">
          {/* Mode Switcher */}
          <div className="flex rounded-xl bg-slate-100 p-1 mb-6">
            <button
              type="button"
              onClick={() => {
                setMode("staff");
                setOtpSent(false);
              }}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                mode === "staff"
                  ? "bg-white text-[#0E7A6E] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Staff Portal (OTP)
            </button>
            <button
              type="button"
              onClick={() => setMode("admin")}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                mode === "admin"
                  ? "bg-white text-[#0E7A6E] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Admin / HR Office
            </button>
          </div>

          {/* STAFF OTP MODE */}
          {mode === "staff" && (
            <div>
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Registered Mobile Number
                    </label>
                    <div className="mt-1.5 flex rounded-xl border border-slate-200 overflow-hidden focus-within:border-[#12B5A5] focus-within:ring-1 focus-within:ring-[#12B5A5]">
                      <span className="bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-500 border-r border-slate-200 flex items-center">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                        placeholder="9876543210"
                        className="w-full px-3 py-2.5 text-sm text-slate-900 outline-none"
                      />
                    </div>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Enter the 10-digit mobile number registered in your employee profile.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || mobileNumber.length < 10}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md shadow-teal-500/20 hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending verification code...
                      </>
                    ) : (
                      <>
                        Send OTP Code
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {/* Demo test helper */}
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setMobileNumber("9876543210");
                        setOtpSent(true);
                      }}
                      className="text-xs text-[#12B5A5] hover:underline"
                    >
                      Use sample mobile number (+91 98765 43210)
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="rounded-xl bg-[#F0FDFB] p-3 text-xs text-slate-700 border border-teal-100 flex items-center justify-between">
                    <span>Code sent to +91 {mobileNumber}</span>
                    <button
                      type="button"
                      onClick={() => setOtpSent(false)}
                      className="text-[#12B5A5] font-bold hover:underline"
                    >
                      Change
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Enter 6-digit OTP
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                      placeholder="123456"
                      className="mt-1.5 w-full tracking-widest text-center font-mono text-xl rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-[#12B5A5]"
                    />
                    <p className="mt-1 text-[11px] text-slate-400 text-center">
                      (Any 6 digits will work for this demo)
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || otp.length < 4}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Verify & Enter Portal"
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* ADMIN CREDENTIALS MODE */}
          {mode === "admin" && (
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@organisation.org"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#12B5A5]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Password
                  </label>
                  <span className="text-xs text-[#12B5A5] hover:underline cursor-pointer">
                    Forgot?
                  </span>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#12B5A5]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Sign in to Admin Workspace"
                )}
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setEmail("admin@sample-school.edu.in");
                    setPassword("DemoPass123");
                  }}
                  className="text-xs text-[#12B5A5] hover:underline"
                >
                  Fill sample admin credentials
                </button>
              </div>
            </form>
          )}

          {/* Bottom link */}
          <div className="mt-6 border-t border-slate-100 pt-4 text-center">
            <p className="text-xs text-slate-500">
              New organisation?{" "}
              <Link href="/book-a-demo" className="font-bold text-[#12B5A5] hover:underline">
                Request a demo setup
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
