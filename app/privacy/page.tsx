import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { contactDetails } from "@/data/navigation";

export const metadata = {
  title: "Privacy Policy — PayroleHR",
  description: "How we handle information on this website and in the PayroleHR app.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Privacy Policy</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Legal & Compliance
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: 20 November 2026
        </p>
        <p className="mt-4 text-base text-slate-600 leading-relaxed border-l-2 border-[#12B5A5] pl-4">
          How we handle information on this website and in the PayroleHR app.
        </p>
      </div>

      <article className="rounded-3xl border border-teal-100/90 bg-white p-8 sm:p-12 shadow-card space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Who we are
          </h2>
          <p>
            PayroleHR provides HR, payroll and face attendance software to organisations (&quot;customers&quot;). For staff data inside the app, the customer organisation decides what is collected and why; we process it on their behalf.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Information from website visitors
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Demo requests:</strong> name, work email, phone, organisation, industry, staff count and your message. We use these only to contact you about a demo. We also keep your IP address briefly to stop spam.
            </li>
            <li>
              <strong>Calculators and templates:</strong> values entered into our free calculators stay in your browser; they are not sent to our servers.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Data inside the PayroleHR app
          </h2>
          <p>
            Customer organisations upload and store employee records, face templates for kiosk verification, shifts, punch logs, leave records and salary structures. Each organisation&apos;s data is isolated and kept strictly separate from other customers.
          </p>
          <p>
            Face templates are converted into mathematical embeddings for matching; raw video is never streamed or stored.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Security and retention
          </h2>
          <p>
            All network communication is encrypted using industry-standard TLS. Backups are encrypted at rest. Data is stored on secure cloud infrastructure located in India.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Contact us about privacy
          </h2>
          <p>
            If you have questions about our privacy practices, contact us at{" "}
            <a href={`mailto:${contactDetails.email}`} className="font-semibold text-[#12B5A5] hover:underline">
              {contactDetails.email}
            </a>{" "}
            or phone {contactDetails.phone}.
          </p>
        </section>
      </article>
    </div>
  );
}
