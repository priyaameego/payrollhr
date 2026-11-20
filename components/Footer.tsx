import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { contactDetails } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-teal-100/80 bg-white/70 backdrop-blur-sm">
      {/* Top Pre-footer CTA Banner */}
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0B7A6E] p-8 sm:p-12 text-white shadow-xl">
          {/* Subtle light effect circles */}
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-[#8FE8DC]/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                Get started today
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                See PayroleHR with your own rules
              </h3>
              <p className="mt-2 text-sm text-teal-50 sm:text-base leading-relaxed">
                Tell us about your organisation — shift timings, salary components and attendance rules. We will set up a live preview with your numbers.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/book-a-demo"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0E7A6E] shadow-lg hover:bg-teal-50 hover:shadow-xl transition-all active:scale-95"
              >
                Book a demo
              </Link>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-gradient-to-br from-[#12B5A5] to-[#0E9486] p-0.5 shadow-sm">
                <Image
                  src="/__l5e/assets-v1/74691c14-0695-4828-a5f6-bc12b9107dc8/payrolehr-app-icon.png"
                  alt="PayroleHR"
                  width={32}
                  height={32}
                  className="h-full w-full rounded-[10px] object-cover"
                />
              </div>
              <span className="font-display text-lg font-bold text-slate-900">
                Payrole<span className="text-[#12B5A5]">HR</span>
              </span>
            </Link>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              HR, payroll and face attendance software configured for Indian organisations.
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <a
                href={contactDetails.tel}
                className="flex items-center gap-2 text-slate-700 hover:text-[#12B5A5] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#12B5A5]" />
                {contactDetails.phone}
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-[#12B5A5] transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#12B5A5]" />
                {contactDetails.email}
              </a>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-[#12B5A5] transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#12B5A5]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/features/employee-management" className="text-slate-600 hover:text-[#12B5A5]">
                  Employee Management
                </Link>
              </li>
              <li>
                <Link href="/features/attendance-management" className="text-slate-600 hover:text-[#12B5A5]">
                  Attendance Management
                </Link>
              </li>
              <li>
                <Link href="/features/face-attendance" className="text-slate-600 hover:text-[#12B5A5]">
                  Face Attendance
                </Link>
              </li>
              <li>
                <Link href="/features/leave-management" className="text-slate-600 hover:text-[#12B5A5]">
                  Leave Management
                </Link>
              </li>
              <li>
                <Link href="/features/payroll-management" className="text-slate-600 hover:text-[#12B5A5]">
                  Payroll Management
                </Link>
              </li>
              <li>
                <Link href="/features/salary-structure-management" className="text-slate-600 hover:text-[#12B5A5]">
                  Salary Structure Management
                </Link>
              </li>
              <li>
                <Link href="/features/shift-management" className="text-slate-600 hover:text-[#12B5A5]">
                  Shift Management
                </Link>
              </li>
              <li>
                <Link href="/features/performance-management" className="text-slate-600 hover:text-[#12B5A5]">
                  Performance Management
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/features" className="font-semibold text-[#12B5A5] hover:underline">
                  All features →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/solutions/education" className="text-slate-600 hover:text-[#12B5A5]">
                  Educational Institutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/corporate" className="text-slate-600 hover:text-[#12B5A5]">
                  Corporate Offices
                </Link>
              </li>
              <li>
                <Link href="/solutions/manufacturing" className="text-slate-600 hover:text-[#12B5A5]">
                  Manufacturing & Factories
                </Link>
              </li>
              <li>
                <Link href="/solutions/healthcare" className="text-slate-600 hover:text-[#12B5A5]">
                  Healthcare Organizations
                </Link>
              </li>
              <li>
                <Link href="/solutions/retail" className="text-slate-600 hover:text-[#12B5A5]">
                  Retail & Hospitality
                </Link>
              </li>
              <li>
                <Link href="/solutions/small-business" className="text-slate-600 hover:text-[#12B5A5]">
                  Small and Medium Businesses
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/solutions" className="font-semibold text-[#12B5A5] hover:underline">
                  All solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Free Tools */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Free Tools
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/free-tools/salary-per-day-calculator" className="text-slate-600 hover:text-[#12B5A5]">
                  Salary Per Day
                </Link>
              </li>
              <li>
                <Link href="/free-tools/attendance-calculator" className="text-slate-600 hover:text-[#12B5A5]">
                  Attendance
                </Link>
              </li>
              <li>
                <Link href="/free-tools/overtime-calculator" className="text-slate-600 hover:text-[#12B5A5]">
                  Overtime
                </Link>
              </li>
              <li>
                <Link href="/free-tools/leave-calculator" className="text-slate-600 hover:text-[#12B5A5]">
                  Leave
                </Link>
              </li>
              <li>
                <Link href="/free-tools/salary-breakup-calculator" className="text-slate-600 hover:text-[#12B5A5]">
                  Salary Breakup
                </Link>
              </li>
              <li>
                <Link href="/free-tools/working-days-calculator" className="text-slate-600 hover:text-[#12B5A5]">
                  Working Days
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/free-tools" className="font-semibold text-[#12B5A5] hover:underline">
                  All tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Resources */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-[#12B5A5]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[#12B5A5]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-a-demo" className="text-slate-600 hover:text-[#12B5A5]">
                  Book a demo
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-[#12B5A5]">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/resources/glossary" className="text-slate-600 hover:text-[#12B5A5]">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-600 hover:text-[#12B5A5]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/auth/sign-in" className="text-slate-600 hover:text-[#12B5A5]">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200/60 pt-6 text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PayroleHR. Built for Indian organisations.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#12B5A5]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#12B5A5]">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
