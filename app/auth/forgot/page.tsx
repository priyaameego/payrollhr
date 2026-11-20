"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, CheckCircle2, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFB] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
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
          Reset Password
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Enter your registered work email to receive password recovery instructions
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="rounded-3xl border border-teal-100/80 bg-white p-8 shadow-card">
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Reset Link Sent
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If an account exists for <span className="font-semibold text-slate-900">{email}</span>, a secure password reset link has been dispatched.
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
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Registered Work Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-slate-900 focus:border-[#12B5A5] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2.5 font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
              >
                Send Reset Link
              </button>

              <div className="pt-2 text-center">
                <Link
                  href="/auth/sign-in"
                  className="inline-flex items-center gap-1 font-semibold text-slate-500 hover:text-slate-900"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
