import React from "react";
import Link from "next/link";
import {
  Smartphone,
  MapPin,
  ShieldCheck,
  Cloud,
  Wifi,
  Clock,
  Camera,
  Navigation,
  Compass,
  AlertTriangle,
  Car,
  Bell,
  Building,
  Receipt,
  Lock,
  Users,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ShieldAlert,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Mobile GPS & Selfie Attendance — PayroleHR Devices",
  description:
    "Zero-hardware mobile attendance for field forces, sales reps, and multi-branch retail. 50m geofenced office radius with anti-mock location guard and selfie liveness verification.",
};

export default function MobileGpsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-16">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-[#12B5A5] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/devices" className="hover:text-[#12B5A5] transition-colors">
          Attendance Hardware
        </Link>
        <span>/</span>
        <span className="font-semibold text-slate-900">Mobile GPS & Selfie</span>
      </nav>

      {/* ============================================================ */}
      {/* 1. HERO SECTION (Screenshot 1 Match) */}
      {/* ============================================================ */}
      <section className="text-center max-w-3xl mx-auto py-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/90 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-2xs">
          <Smartphone className="h-3.5 w-3.5 text-[#12B5A5]" />
          <span>ZERO-HARDWARE ATTENDANCE</span>
        </div>

        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
          Mobile GPS & Selfie
          <br />
          <span className="bg-gradient-to-r from-[#12B5A5] via-[#2DD4BF] to-[#0E9486] bg-clip-text text-transparent">
            Built For Accuracy
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
          Smart Geofenced Attendance on Employee Phones. Complete location proof, zero hardware maintenance, and instant sync to payroll.
        </p>
      </section>

      {/* ============================================================ */}
      {/* 2. WHAT MAKES OUR MOBILE CHECK-IN DIFFERENT? (Screenshot 2 Match) */}
      {/* ============================================================ */}
      <section className="rounded-3xl border border-teal-100/80 bg-gradient-to-b from-[#F3FAF8]/70 via-white to-white p-8 sm:p-12 shadow-card">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950">
            What Makes Our{" "}
            <span className="bg-gradient-to-r from-[#12B5A5] to-[#0E9486] bg-clip-text text-transparent">
              Mobile System Different?
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Most mobile punch apps can be fooled by fake GPS mock locations. PayroleHR uses device-level hardware integrity checks, geofencing, and selfie liveness to guarantee 100% genuine attendance.
          </p>
        </div>

        {/* 4 Feature Cards (Screenshot 2 2x2 Grid) */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-[#12B5A5] hover:shadow-md transition-all">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 shadow-2xs">
              <Cloud className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-slate-900">
                Syncs data with cloud software
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Every mobile punch lands on payroll in real-time with GPS coordinates and timestamps.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-[#12B5A5] hover:shadow-md transition-all">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-[#0E7A6E] border border-teal-100 shadow-2xs">
              <Wifi className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-slate-900">
                Works in both online and offline modes
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Remote sites with zero cellular network store punches encrypted and auto-sync when connected.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-[#12B5A5] hover:shadow-md transition-all">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 shadow-2xs">
              <MapPin className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-slate-900">
                Supports multi-location attendance
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Define distinct 50m geofences for offices, client meeting sites, retail branches, and warehouses.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-[#12B5A5] hover:shadow-md transition-all">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-2xs">
              <Clock className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-slate-900">
                Tracks attendance in real time
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Supervisors see instant live on-field check-in status, client visits, and late punch alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. MOBILE GPS & SELFIE DETAILS (Screenshot 3 & 4 Match) */}
      {/* ============================================================ */}
      <section className="rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-12 shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Specifications & Feature Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-teal-50 px-3 py-1 text-xs font-bold text-[#0E7A6E]">
                <span className="font-mono">02</span>
                <span>MOBILE GPS & SELFIE</span>
              </div>

              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Mobile GPS & Selfie Setup
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Zero-hardware attendance system designed for on-field sales, service engineers, construction workers, and hybrid office teams. Employees mark attendance directly from their smartphones within a 50m pre-set geofenced radius. Liveness detection ensures no employee can punch using photos, fake GPS apps, or proxy check-ins.
              </p>
            </div>

            {/* IDEAL FOR TAGS */}
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                IDEAL FOR
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {[
                  "Field Sales Teams",
                  "Site Engineers",
                  "Construction Sites",
                  "Multi-branch Retail",
                  "Delivery Logistics",
                  "Remote & Hybrid Staff",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 py-1 text-slate-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* KEY SPECIFICATIONS */}
            <div className="border-t border-slate-100 pt-6">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-4">
                KEY SPECIFICATIONS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>50m Geofenced office radius</span>
                </div>
                <div className="flex items-center gap-3">
                  <Camera className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>AI selfie verification with liveness</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Anti-mock location & fake GPS guard</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Stores 5,000 offline punches</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>0.18s Instant check-in match</span>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Client visit stamping & address geocoding</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Odometer distance & travel claims</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Native Android & iOS App + Web PWA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bell className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Manager instant push notification</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Multi-branch geofences under 1 account</span>
                </div>
                <div className="flex items-center gap-3">
                  <Receipt className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>1-Click direct payroll integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>TLS 1.3 & AES-256 encrypted</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Unlimited staff scaling</span>
                </div>
                <div className="flex items-center gap-3">
                  <Compass className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Ultra-low battery & data usage (&lt;5MB/mo)</span>
                </div>
              </div>
            </div>

            {/* CHOOSE THIS SETUP IF YOU WANT */}
            <div className="rounded-2xl border border-teal-100 bg-[#F3FAF8]/80 p-5 shadow-xs">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0E7A6E] block mb-3">
                CHOOSE THIS SETUP IF YOU WANT
              </span>
              <ul className="space-y-2 text-xs font-semibold text-slate-800">
                <li className="flex items-center gap-2">
                  <span className="text-[#12B5A5] font-bold">→</span>
                  <span>Zero hardware machine purchase or maintenance costs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#12B5A5] font-bold">→</span>
                  <span>Instant rollout to 1,000+ staff on their existing smartphones</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#12B5A5] font-bold">→</span>
                  <span>Verified location proof for on-field sales and site engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#12B5A5] font-bold">→</span>
                  <span>100% automated salary calculation without manual register entry</span>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                href="/book-a-demo"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/20 hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all hover:-translate-y-0.5"
              >
                <Calendar className="h-4 w-4" />
                <span>Book a Demo</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup with Live Geofence Map */}
          <div className="lg:col-span-5 flex justify-center sticky top-28">
            <div className="relative w-[280px] sm:w-[310px] rounded-[42px] bg-[#0C111D] border-[6px] border-slate-800 p-3 shadow-2xl ring-1 ring-white/10 text-white">
              {/* Dynamic Island Notch */}
              <div className="h-4 w-28 rounded-full bg-slate-900 mx-auto mb-2" />

              {/* Screen Content */}
              <div className="rounded-[30px] bg-slate-950 overflow-hidden border border-slate-800/80 p-3.5 flex flex-col justify-between aspect-[9/18]">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-800">
                  <span>9:41 AM</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    GPS Locked
                  </span>
                </div>

                {/* Map Geofence Circle UI */}
                <div className="my-2 rounded-2xl bg-[#141B26] border border-slate-800 p-3 relative overflow-hidden">
                  <div className="text-[10px] text-slate-400 font-semibold mb-1 flex items-center justify-between">
                    <span>GEOFENCE RADIUS</span>
                    <span className="text-teal-400 font-mono">50m Area</span>
                  </div>

                  {/* Simulated Map Radar */}
                  <div className="relative aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-[#0F1D27] to-[#0A131B] border border-teal-900/40 flex items-center justify-center overflow-hidden">
                    {/* Concentric radar rings */}
                    <div className="absolute h-28 w-28 rounded-full border border-teal-500/30 animate-ping [animation-duration:3s]" />
                    <div className="absolute h-20 w-20 rounded-full border border-teal-400/50 bg-teal-500/10" />
                    <div className="h-8 w-8 rounded-full bg-[#12B5A5] flex items-center justify-center text-white shadow-lg shadow-teal-500/50 z-10">
                      <MapPin className="h-4 w-4" />
                    </div>

                    <span className="absolute bottom-1 right-2 text-[8px] font-mono text-emerald-400 bg-slate-900/80 px-1.5 py-0.5 rounded">
                      Inside 18m
                    </span>
                  </div>

                  <div className="mt-2 text-[10px] text-slate-300 font-medium">
                    📍 Bangalore Campus • MG Road
                  </div>
                </div>

                {/* Selfie Liveness Check Card */}
                <div className="rounded-xl bg-slate-900 border border-slate-800 p-2.5 flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-xl bg-teal-500/20 border border-teal-400/80 flex items-center justify-center text-teal-300 shrink-0 overflow-hidden">
                    <Camera className="h-5 w-5" />
                    <span className="absolute bottom-0 inset-x-0 bg-emerald-500 text-[7px] text-center font-bold text-white uppercase">
                      Pass
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Anti-Spoof Verified
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Liveness: 99.8% Match
                    </span>
                  </div>
                </div>

                {/* Punch Action */}
                <div className="mt-2 pt-2 border-t border-slate-800">
                  <div className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] p-2.5 text-center text-xs font-bold text-white shadow-md">
                    ✓ Shift Punch Recorded (09:41 AM)
                  </div>
                  <span className="text-[8px] text-slate-500 font-mono text-center block mt-1">
                    Mock Location Guard: ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Cross-Link to Face Scanner */}
      <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-base font-bold text-slate-900">
            Looking for a dedicated contactless hardware kiosk for your gate?
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Check out the Face Scanner terminal with AI liveness detection and access control.
          </p>
        </div>
        <Link
          href="/devices/face-scanner"
          className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-800 shadow-2xs hover:border-[#12B5A5] hover:text-[#0E7A6E] transition-colors whitespace-nowrap"
        >
          <span>View Face Scanner →</span>
        </Link>
      </div>
    </div>
  );
}
