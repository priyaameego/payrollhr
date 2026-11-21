import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ScanFace,
  ShieldCheck,
  Cloud,
  Wifi,
  MapPin,
  Clock,
  CheckCircle2,
  Lock,
  DoorOpen,
  Zap,
  RefreshCw,
  Smartphone,
  Shield,
  Layers,
  Power,
  Calendar,
  Users,
  Database,
  Camera,
  Cpu,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Face Scanner Attendance Terminal — PayroleHR Hardware",
  description:
    "AI-powered contactless face recognition attendance terminal for high-traffic workplaces, factories, and corporate offices. 0.18s match speed, anti-spoof dual cameras, and direct cloud payroll sync.",
};

export default function FaceScannerPage() {
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
        <span className="font-semibold text-slate-900">Face Scanner</span>
      </nav>

      {/* ============================================================ */}
      {/* 1. HERO SECTION (Screenshot 1 Match) */}
      {/* ============================================================ */}
      <section className="text-center max-w-3xl mx-auto py-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/90 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-2xs">
          <ScanFace className="h-3.5 w-3.5 text-[#12B5A5]" />
          <span>ATTENDANCE HARDWARE</span>
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

      {/* ============================================================ */}
      {/* 2. WHAT MAKES OUR DEVICES DIFFERENT? (Screenshot 2 Match) */}
      {/* ============================================================ */}
      <section className="rounded-3xl border border-teal-100/80 bg-gradient-to-b from-[#F3FAF8]/70 via-white to-white p-8 sm:p-12 shadow-card">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950">
            What Makes Our{" "}
            <span className="bg-gradient-to-r from-[#12B5A5] to-[#0E9486] bg-clip-text text-transparent">
              Devices Different?
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Most attendance machines only record punches. Our devices connect directly to cloud payroll software, making every punch part of the salary calculation.
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
                Punches land in payroll real-time without manual USB pendrive downloads.
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
                Factory gates never stop. Stores 100,000 punches and auto-syncs when online.
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
                Centralized dashboard connects 100+ branches, plants, and retail outlets.
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
                Real-time headcount, late minutes, and overtime calculated on the fly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FACE SCANNER DEVICE DEEP-DIVE (Screenshot 3 & 4 Match) */}
      {/* ============================================================ */}
      <section className="rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-12 shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Device Information & Specifications */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-teal-50 px-3 py-1 text-xs font-bold text-[#0E7A6E]">
                <span className="font-mono">01</span>
                <span>AI FACE RECOGNITION</span>
              </div>

              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Face Scanner Device
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                AI-powered face recognition attendance terminal for high-traffic workplaces. Touchless. Fast. Works in low light and detects liveness to prevent spoofing. Hospitals and clinics have a different reason for it — gloves and PPE stop a fingerprint reader working, and a touchless punch does not care. There is a longer walkthrough of how the face scanner works in practice.
              </p>
            </div>

            {/* IDEAL FOR TAGS */}
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                IDEAL FOR
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {[
                  "Factories",
                  "Corporate offices",
                  "Retail chains",
                  "Hospitals & Clinics",
                  "Multi-location businesses",
                  "Secure areas",
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

            {/* KEY SPECIFICATIONS (Screenshot 3 & 4 Exact Specs Grid) */}
            <div className="border-t border-slate-100 pt-6">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-4">
                KEY SPECIFICATIONS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-3">
                  <ScanFace className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Touchless face recognition (1:N and 1:1)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Stores up to 3,000 users</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Stores up to 100,000 punches</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>5-inch HD touch display (720 x 1280)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Camera className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Dual camera system (RGB + IR)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>AI-based liveness detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Door lock support (NO/NC)</span>
                </div>
                <div className="flex items-center gap-3">
                  <DoorOpen className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Exit button support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Fast on-device AI processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Multi-device sync across same branch</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Web dashboard and mobile app support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>IP44 protection rating</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Aluminium body design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Power className="h-4 w-4 text-[#12B5A5] shrink-0" />
                  <span>Powered by 12V DC 2Amp</span>
                </div>
              </div>
            </div>

            {/* CHOOSE THIS DEVICE IF YOU WANT (Screenshot 4 Callout Box) */}
            <div className="rounded-2xl border border-teal-100 bg-[#F3FAF8]/80 p-5 shadow-xs">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0E7A6E] block mb-3">
                CHOOSE THIS DEVICE IF YOU WANT
              </span>
              <ul className="space-y-2 text-xs font-semibold text-slate-800">
                <li className="flex items-center gap-2">
                  <span className="text-[#12B5A5] font-bold">→</span>
                  <span>Faster recognition than fingerprint in high-volume environments</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#12B5A5] font-bold">→</span>
                  <span>Higher user and punch capacity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#12B5A5] font-bold">→</span>
                  <span>Built-in access control</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#12B5A5] font-bold">→</span>
                  <span>A durable device for factory or outdoor use</span>
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

          {/* Right Column: Hardware Terminal Device Mockup (Screenshot 3 & 4 Match) */}
          <div className="lg:col-span-5 flex justify-center sticky top-28">
            <div className="relative w-[280px] sm:w-[310px] rounded-[38px] bg-gradient-to-b from-[#181D26] via-[#0E131C] to-[#080B10] border-[5px] border-slate-700/80 p-4 shadow-2xl ring-1 ring-white/10">
              {/* Top LED Indicator Bar */}
              <div className="h-1.5 w-20 rounded-full bg-emerald-400 mx-auto mb-3 shadow-[0_0_14px_#34d399] animate-pulse" />

              {/* Dual Camera & Sensor Notch */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="h-3 w-3 rounded-full bg-slate-900 border border-slate-600 shadow-inner" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-900 border border-rose-500/50 shadow-[0_0_6px_#f43f5e]" />
              </div>

              {/* Terminal Screen (Matches Screenshot 3) */}
              <div className="relative aspect-[9/15] w-full rounded-2xl bg-[#090D14] overflow-hidden border border-slate-800 flex flex-col justify-between p-4 shadow-inner text-center">
                {/* Screen Header */}
                <div className="text-center pt-2">
                  <span className="font-display text-2xl font-black text-white tracking-wider block">
                    09:41
                  </span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest block font-mono mt-0.5">
                    MONDAY, 26 SEP
                  </span>
                </div>

                {/* Stylized PayroleHR App Icon Logo in Center Screen */}
                <div className="my-auto flex flex-col items-center justify-center">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#12B5A5]/20 to-teal-500/10 border border-teal-400/40 shadow-[0_0_20px_rgba(18,181,165,0.2)]">
                    <span className="font-display text-4xl font-black text-[#12B5A5]">P</span>
                    {/* Corner Reticle Brackets */}
                    <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-teal-400" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-teal-400" />
                    <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-teal-400" />
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-teal-400" />
                  </div>

                  <h4 className="mt-4 text-xs font-bold text-white tracking-wide">
                    Ready to check in
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Look at the camera or tap your card
                  </p>
                </div>

                {/* Card Sensor Symbol at Bottom */}
                <div className="border-t border-slate-800/80 pt-3 pb-1 flex flex-col items-center">
                  <div className="h-6 w-8 rounded-md border border-slate-700 flex items-center justify-center text-slate-500">
                    <span className="h-2 w-4 border-b border-t border-slate-600 rounded-xs" />
                  </div>
                  <span className="text-[8px] text-slate-500 font-mono tracking-widest uppercase mt-1">
                    PayroleHR ID Terminal
                  </span>
                </div>
              </div>

              {/* Hardware Device Base Chin */}
              <div className="text-center pt-2.5 pb-0.5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                  FacePass 500 • IP44 Rated
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Cross-Link to Mobile GPS */}
      <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-base font-bold text-slate-900">
            Looking for mobile-only check-in for field or remote staff?
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Check out Mobile GPS & Selfie attendance with 50m geofence accuracy.
          </p>
        </div>
        <Link
          href="/devices/mobile-gps"
          className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-800 shadow-2xs hover:border-[#12B5A5] hover:text-[#0E7A6E] transition-colors whitespace-nowrap"
        >
          <span>View Mobile GPS & Selfie →</span>
        </Link>
      </div>
    </div>
  );
}
