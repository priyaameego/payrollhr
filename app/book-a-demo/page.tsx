import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import DemoForm from "@/components/DemoForm";

export const metadata = {
  title: "Book a demo of PayroleHR",
  description:
    "Request a demo of PayroleHR's HR, payroll and face attendance software. Tell us about your organisation and we'll get in touch.",
};

export default function BookADemoPage() {
  return (
    <div className="min-h-screen bg-[#F8FCFB]">
      {/* Top Banner Header with gradient */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-teal-500/10 via-white to-emerald-500/10">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
              <Link className="hover:text-slate-900 transition-colors" href="/">
                Home
              </Link>
              <span className="flex items-center gap-1 text-slate-400">
                <ChevronRight className="h-3 w-3" />
                <span className="text-slate-900 font-medium">Book a demo</span>
              </span>
            </nav>
            <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl text-slate-950">
              Book a demo
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us a little about your organisation. We&apos;ll contact you to arrange a walkthrough with your own rules and examples.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Aside Cards */}
      <main className="py-6 sm:py-8">
        <DemoForm from="book-a-demo-page" />
      </main>
    </div>
  );
}
