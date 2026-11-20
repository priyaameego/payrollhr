import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import DemoForm from "@/components/DemoForm";

export const metadata = {
  title: "Book a Demo — PayroleHR",
  description:
    "Request a live walkthrough of PayroleHR with your organisation's shift rules, salary components and attendance settings.",
};

export default function BookADemoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Book a demo</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F9F6] px-3.5 py-1 text-xs font-bold text-[#0E7A6E]">
          <ShieldCheck className="h-3.5 w-3.5 text-[#12B5A5]" />
          Personalised Walkthrough
        </span>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          Book a demo of PayroleHR
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Tell us about your organisation — shift timings, salary components and attendance rules. We will set up a live preview with your numbers.
        </p>
      </div>

      {/* Form Container */}
      <div className="mx-auto max-w-3xl">
        <DemoForm from="book-a-demo-page" />
      </div>

      {/* Benefits Strip */}
      <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto pt-4">
        <div className="rounded-2xl border border-teal-100 bg-white p-5 text-center">
          <CheckCircle2 className="mx-auto h-5 w-5 text-[#12B5A5] mb-2" />
          <h3 className="font-bold text-sm text-slate-900">Customized to your rules</h3>
          <p className="mt-1 text-xs text-slate-500">We configure your exact grace minutes and salary layout.</p>
        </div>
        <div className="rounded-2xl border border-teal-100 bg-white p-5 text-center">
          <CheckCircle2 className="mx-auto h-5 w-5 text-[#12B5A5] mb-2" />
          <h3 className="font-bold text-sm text-slate-900">No software installation</h3>
          <p className="mt-1 text-xs text-slate-500">Run face kiosks on any Android tablet or iPad.</p>
        </div>
        <div className="rounded-2xl border border-teal-100 bg-white p-5 text-center">
          <CheckCircle2 className="mx-auto h-5 w-5 text-[#12B5A5] mb-2" />
          <h3 className="font-bold text-sm text-slate-900">Dedicated migration help</h3>
          <p className="mt-1 text-xs text-slate-500">We help import your existing staff list from Excel sheets.</p>
        </div>
      </div>
    </div>
  );
}
