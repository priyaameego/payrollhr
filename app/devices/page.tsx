import React from "react";
import Link from "next/link";
import {
  ScanFace,
  Smartphone,
  CheckCircle2,
  Cloud,
  Wifi,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Calendar,
} from "lucide-react";

export const metadata = {
  title: "Attendance Devices & Check-in Options — PayroleHR",
  description:
    "Explore Face Scanner terminal and Mobile GPS & Selfie attendance systems. Cloud-connected attendance hardware built for Indian businesses.",
};

export default function DevicesOverviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-16">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-[#12B5A5] transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="font-semibold text-slate-900">Attendance Devices</span>
      </nav>

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto py-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/90 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-2xs">
          <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
          <span>ATTENDANCE HARDWARE & MOBILE</span>
        </div>

        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
          Attendance Devices
          <br />
          <span className="bg-gradient-to-r from-[#12B5A5] via-[#2DD4BF] to-[#0E9486] bg-clip-text text-transparent">
            Built For Accuracy
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
          Cloud-Connected Attendance Hardware with Software. The whole setup built for zero manual data entry.
        </p>
      </section>

      {/* 2 Device Cards Comparison */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Device 1: Face Scanner */}
        <div className="rounded-3xl border border-teal-200/90 bg-white p-7 shadow-card flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-mono font-bold text-[#0E7A6E]">
                01 • HARDWARE KIOSK
              </span>
              <span className="rounded-full bg-emerald-600 text-white px-2.5 py-0.5 text-[10px] font-bold">
                Most Popular
              </span>
            </div>

            <div className="my-6 flex h-40 w-full items-center justify-center rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-teal-400 border border-slate-800 shadow-inner">
              <div className="flex flex-col items-center">
                <ScanFace className="h-16 w-16 mb-2" />
                <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                  PayroleHR ID Terminal
                </span>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-slate-900">
              Face Scanner Device
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              AI-powered contactless facial recognition terminal for high-traffic workplaces, factories, and corporate offices. 0.18s match speed, anti-spoof dual cameras, and built-in access control.
            </p>

            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                <span>Dual camera sensor prevents photo/video spoofing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                <span>100% hygienic walk-by contactless punch</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                <span>Works offline (stores 100,000 punches)</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/devices/face-scanner"
              className="inline-flex items-center gap-1.5 font-bold text-sm text-[#12B5A5] hover:text-[#0E9486] transition-colors"
            >
              <span>Explore full specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/book-a-demo"
              className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm"
            >
              Book Demo
            </Link>
          </div>
        </div>

        {/* Device 2: Mobile GPS & Selfie */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-card flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-mono font-bold text-sky-700">
                02 • ZERO-HARDWARE
              </span>
              <span className="rounded-full bg-slate-100 text-slate-700 px-2.5 py-0.5 text-[10px] font-bold">
                Mobile Native
              </span>
            </div>

            <div className="my-6 flex h-40 w-full items-center justify-center rounded-2xl bg-gradient-to-b from-sky-50 via-teal-50/40 to-emerald-50 border border-teal-100 shadow-inner">
              <div className="flex flex-col items-center text-[#12B5A5]">
                <Smartphone className="h-16 w-16 mb-2" />
                <span className="font-mono text-xs font-bold text-slate-800 tracking-widest uppercase">
                  iOS & Android Native App
                </span>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-slate-900">
              Mobile GPS & Selfie
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Zero-hardware attendance system designed for on-field sales, service engineers, construction workers, and hybrid office teams. Employees mark attendance within a 50m geofence with selfie verification.
            </p>

            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                <span>Geo-fenced 50m radius prevents mock location fraud</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                <span>Real-time location stamping for client site visits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                <span>Zero hardware installation or machine maintenance</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/devices/mobile-gps"
              className="inline-flex items-center gap-1.5 font-bold text-sm text-[#12B5A5] hover:text-[#0E9486] transition-colors"
            >
              <span>Explore full specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/book-a-demo"
              className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
