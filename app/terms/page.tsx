import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { contactDetails } from "@/data/navigation";

export const metadata = {
  title: "Terms of Use — PayroleHR",
  description: "The rules for using this website, the free tools and the PayroleHR app.",
};

export default function TermsOfUsePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Terms of Use</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Legal & Compliance
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: 20 November 2026
        </p>
        <p className="mt-4 text-base text-slate-600 leading-relaxed border-l-2 border-[#12B5A5] pl-4">
          The rules for using this website, the free tools and the PayroleHR app.
        </p>
      </div>

      <article className="rounded-3xl border border-teal-100/90 bg-white p-8 sm:p-12 shadow-card space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Using this website
          </h2>
          <p>
            You may browse this website, use the free calculators and download the templates for your own organisation&apos;s use. Please don&apos;t scrape the site, misuse the demo form or attempt to breach its security boundaries.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Free calculators and templates
          </h2>
          <p>
            Calculator results and spreadsheet templates are provided as general computational estimates and examples. They do not constitute formal legal, tax or financial advisory. Statutory rules vary across states in India, so always verify calculations against your applicable state notifications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-slate-900">
            The PayroleHR app
          </h2>
          <p>
            Access to the PayroleHR cloud portal is provided under the terms of your organisation&apos;s subscription agreement. Customers are responsible for the accuracy of attendance punches, employee documents, and statutory tax filings generated using the platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Contact
          </h2>
          <p>
            For questions regarding these terms, reach us at{" "}
            <a href={`mailto:${contactDetails.email}`} className="font-semibold text-[#12B5A5] hover:underline">
              {contactDetails.email}
            </a>.
          </p>
        </section>
      </article>
    </div>
  );
}
