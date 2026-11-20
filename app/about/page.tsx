import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us — PayroleHR",
  description:
    "We build HR and payroll software for Indian organisations that don't fit a one-size-fits-all system.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 space-y-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">About</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Our Story & Philosophy
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          About PayroleHR
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          We build HR, attendance and payroll software for Indian organisations that don&apos;t fit a rigid, one-size-fits-all system.
        </p>
      </div>

      {/* Why we built it */}
      <section className="rounded-3xl border border-teal-100/90 bg-white p-8 sm:p-12 shadow-card space-y-6">
        <h2 className="font-display text-2xl font-bold text-slate-900">
          Why we built it
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            PayroleHR started in real HR and administration offices where attendance lived in handwritten register books and salaries in fragile spreadsheets.
          </p>
          <p>
            Every organisation we met calculated salaries slightly differently — its own salary columns, its own rounding conventions, and its own rules about late punches, sandwich leaves and working-day divisors.
          </p>
          <p>
            Off-the-shelf software forced everyone into standard corporate templates. HR managers spent days fixing spreadsheets by hand or retyping numbers into bank portals. We built PayroleHR to eliminate manual calculations while honoring how each organisation actually operates.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold text-slate-900">
          How we build software
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-teal-100/80 bg-white p-6 shadow-sm">
            <span className="text-xs font-bold text-[#12B5A5] uppercase tracking-wider">01</span>
            <h3 className="mt-2 font-display text-base font-bold text-slate-900">
              Software adapts to you
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Custom fields, salary formulas, shift timing and approval stages should be settings you configure, not custom code you pay for.
            </p>
          </div>

          <div className="rounded-2xl border border-teal-100/80 bg-white p-6 shadow-sm">
            <span className="text-xs font-bold text-[#12B5A5] uppercase tracking-wider">02</span>
            <h3 className="mt-2 font-display text-base font-bold text-slate-900">
              Attendance and payroll belong together
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When a face punch at the gate directly updates attendance status, paid days are finalized automatically without month-end disputes.
            </p>
          </div>

          <div className="rounded-2xl border border-teal-100/80 bg-white p-6 shadow-sm">
            <span className="text-xs font-bold text-[#12B5A5] uppercase tracking-wider">03</span>
            <h3 className="mt-2 font-display text-base font-bold text-slate-900">
              Simple for staff, precise for accounts
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Staff sign in with a single OTP code to check leave and payslips. Accounts get row-by-row audit accuracy and 1-click Excel and bank exports.
            </p>
          </div>

          <div className="rounded-2xl border border-teal-100/80 bg-white p-6 shadow-sm">
            <span className="text-xs font-bold text-[#12B5A5] uppercase tracking-wider">04</span>
            <h3 className="mt-2 font-display text-base font-bold text-slate-900">
              Zero hardware lock-in
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Never buy proprietary biometric fingerprint scanners. Our face-recognition attendance turns any tablet or phone into a reliable gate kiosk.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-teal-100 bg-[#F0FDFB] p-8 sm:p-10 text-center shadow-card">
        <h3 className="font-display text-2xl font-bold text-slate-900">
          Ready to simplify your workforce operations?
        </h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          Schedule a live demonstration of PayroleHR customized to your organisation&apos;s shift rules and salary layout.
        </p>
        <div className="mt-6">
          <Link
            href="/book-a-demo"
            className="rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
