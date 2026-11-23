import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Layers,
  Laptop,
  Check,
  MessageCircle,
} from "lucide-react";
import solutionsData from "@/data/solutions.json";
import { FeatureIcon } from "@/components/IconHelper";
import { contactDetails } from "@/data/navigation";

export const metadata = {
  title: "Industry Solutions — PayroleHR",
  description:
    "Explore PayroleHR configurations tailored for schools, corporate offices, factories, hospitals, retail chains and SMBs. Attendance, rosters, split salaries, and statutory compliance built for your floor reality.",
};

export default function SolutionsIndexPage() {
  return (
    <div className="w-full bg-[#FAFDFD]">
      {/* 0. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-teal-100/70 py-12 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[#12B5A5]/10 via-[#F8FCFB] to-[#8FE8DC]/15"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#12B5A5] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900">Solutions</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-3.5 py-1 text-xs font-bold text-[#0E7A6E]">
                <Sparkles className="h-3.5 w-3.5 text-[#12B5A5]" />
                <span>WORKFORCE ARCHITECTURE BY SECTOR</span>
              </div>

              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                Tailored HR, Attendance & Payroll for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7A6E] via-[#12B5A5] to-teal-600">
                  Every Industry Floor Reality
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                A hospital ward, an auto component factory, an educational campus, and a retail chain do not work the same way. PayroleHR configures your shifts, face kiosks, split salary structures, and labour law filings to match how your teams actually operate.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/book-a-demo"
                  className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-7 py-3 text-sm font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] hover:shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Book an Industry Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-teal-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-teal-50/50 hover:text-[#0E7A6E] transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 text-[#12B5A5]" />
                  <span>WhatsApp Consultant</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="mt-8 pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="font-display text-base font-black text-slate-900 block leading-tight">6 Sectors</span>
                  <span className="text-slate-500 text-[11px]">Ready Blueprints</span>
                </div>
                <div>
                  <span className="font-display text-base font-black text-[#0E7A6E] block leading-tight">₹0 Tax</span>
                  <span className="text-slate-500 text-[11px]">No Hardware Lock-in</span>
                </div>
                <div>
                  <span className="font-display text-base font-black text-slate-900 block leading-tight">100%</span>
                  <span className="text-slate-500 text-[11px]">Indian Statutory Law</span>
                </div>
                <div>
                  <span className="font-display text-base font-black text-[#0E7A6E] block leading-tight">&lt; 1 Day</span>
                  <span className="text-slate-500 text-[11px]">Floor Go-Live</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Banner */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-teal-100 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/solutions/solutions-hero-banner.jpg"
                    alt="PayroleHR Unified Industry Solutions Mosaic"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block rounded-full bg-[#12B5A5] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-1">
                      Enterprise Grade
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                      Cross-Industry Operations: Manufacturing, Healthcare, Education, Retail, Corporate & SMB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. INDUSTRY SOLUTIONS CARDS GRID */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              SELECT YOUR INDUSTRY
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Configured For Your Team's Exact Work Style
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore how PayroleHR eliminates manual HR bottlenecks, spreadsheets, and statutory risks in your specific business environment.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionsData.map((sol: any) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-[#12B5A5] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Image Preview */}
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                    <Image
                      src={sol.image || `/images/solutions/solution-${sol.slug}.jpg`}
                      alt={sol.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="rounded-full bg-white/95 backdrop-blur-xs border border-teal-100 px-2.5 py-0.5 text-[10px] font-bold text-[#0E7A6E] shadow-xs">
                        {sol.heroBadge || sol.name}
                      </span>
                    </div>
                  </div>

                  {/* Header Row with Icon Box */}
                  <div className="flex items-center gap-3.5 mt-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 border border-teal-100 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors duration-300">
                      <FeatureIcon slug={sol.slug} className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-tight">
                        {sol.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Customized Workflow
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {sol.short}
                  </p>

                  {/* Mini Stats Chips */}
                  {sol.stats && sol.stats.length >= 2 && (
                    <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-lg bg-slate-50 p-2 border border-slate-100">
                        <span className="text-slate-400 block text-[9px] uppercase font-bold">{sol.stats[0].label}</span>
                        <span className="font-bold text-slate-800 truncate block mt-0.5">{sol.stats[0].value}</span>
                      </div>
                      <div className="rounded-lg bg-teal-50/70 p-2 border border-teal-100">
                        <span className="text-teal-600 block text-[9px] uppercase font-bold">{sol.stats[1].label}</span>
                        <span className="font-bold text-[#0E7A6E] truncate block mt-0.5">{sol.stats[1].value}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5] group-hover:text-[#0E7A6E] transition-colors">
                  <span>Explore {sol.name} Blueprint</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS OF INDUSTRY CUSTOMIZATION */}
      <section className="py-14 sm:py-20 bg-white border-y border-teal-100/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              BUILT FOR REAL OPERATIONAL WORKFLOWS
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Why Generic HR Software Fails on the Ground
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Most software forces a single cookie-cutter model. PayroleHR gives you three fundamental levers of floor customisation:
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-[#FAFDFD] to-white p-7 shadow-xs hover:border-teal-200 hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 border border-teal-100 text-[#12B5A5] mb-5">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                1. Floor-Accurate Shifts & Grace Rules
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rotational night shifts in factories, 24/7 emergency ward rosters in hospitals, and shorter Saturday timings in schools operate with distinct grace buffers, overtime formulas, and break settings.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-[#FAFDFD] to-white p-7 shadow-xs hover:border-teal-200 hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 border border-teal-100 text-[#12B5A5] mb-5">
                <Laptop className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                2. Zero Vendor Biometric Lock-In
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Never purchase ₹25,000 proprietary biometric machines that break down. Turn any standard Android phone or tablet into an AI facial recognition kiosk, or enable GPS geofenced mobile check-ins for field teams.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-[#FAFDFD] to-white p-7 shadow-xs hover:border-teal-200 hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 border border-teal-100 text-[#12B5A5] mb-5">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                3. Split Wages & Statutory Compliance
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Run bank NEFT transfers and cash vouchers side by side. Apply exact state-wise Professional Tax slabs, generate EPFO ECR returns, and output inspection-certified Form T muster rolls automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY COMPARISON MATRIX TABLE */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              AT A GLANCE COMPARISON
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              How PayroleHR Solves Key Sector Challenges
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-card">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-black uppercase tracking-wider text-slate-500">
                  <th className="py-4 px-5">Industry</th>
                  <th className="py-4 px-5">Shift & Timing Model</th>
                  <th className="py-4 px-5">Attendance Mode</th>
                  <th className="py-4 px-5">Salary & Wage Structure</th>
                  <th className="py-4 px-5">Key Compliance Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-teal-50/40 transition-colors">
                  <td className="py-3.5 px-5 font-bold text-slate-900">
                    <Link href="/solutions/education" className="text-[#0E7A6E] hover:underline">
                      Education
                    </Link>
                  </td>
                  <td className="py-3.5 px-5">Academic calendar, shorter Saturdays</td>
                  <td className="py-3.5 px-5">Staff Gate Tablet Kiosk</td>
                  <td className="py-3.5 px-5">Split Teaching vs Non-Teaching</td>
                  <td className="py-3.5 px-5 font-mono text-xs">EPFO, Gratuity, Form 16</td>
                </tr>
                <tr className="hover:bg-teal-50/40 transition-colors">
                  <td className="py-3.5 px-5 font-bold text-slate-900">
                    <Link href="/solutions/corporate" className="text-[#0E7A6E] hover:underline">
                      Corporate
                    </Link>
                  </td>
                  <td className="py-3.5 px-5">Flexi hours, hybrid work policies</td>
                  <td className="py-3.5 px-5">Reception Kiosk + Mobile GPS</td>
                  <td className="py-3.5 px-5">Future-dated CTC increments</td>
                  <td className="py-3.5 px-5 font-mono text-xs">Dual Tax Regime TDS, PT</td>
                </tr>
                <tr className="hover:bg-teal-50/40 transition-colors">
                  <td className="py-3.5 px-5 font-bold text-slate-900">
                    <Link href="/solutions/manufacturing" className="text-[#0E7A6E] hover:underline">
                      Manufacturing
                    </Link>
                  </td>
                  <td className="py-3.5 px-5">3 Rotational shifts, night spans</td>
                  <td className="py-3.5 px-5">Turnstile Face Kiosk (30/min)</td>
                  <td className="py-3.5 px-5">1.5x / 2.0x Overtime Multipliers</td>
                  <td className="py-3.5 px-5 font-mono text-xs">Factories Act Form T & Q</td>
                </tr>
                <tr className="hover:bg-teal-50/40 transition-colors">
                  <td className="py-3.5 px-5 font-bold text-slate-900">
                    <Link href="/solutions/healthcare" className="text-[#0E7A6E] hover:underline">
                      Healthcare
                    </Link>
                  </td>
                  <td className="py-3.5 px-5">24/7 Ward rosters, emergency swaps</td>
                  <td className="py-3.5 px-5">Touchless Facial Check-in</td>
                  <td className="py-3.5 px-5">Doctor, Nurse & On-Call Pay</td>
                  <td className="py-3.5 px-5 font-mono text-xs">Credential Vault, Night Pay</td>
                </tr>
                <tr className="hover:bg-teal-50/40 transition-colors">
                  <td className="py-3.5 px-5 font-bold text-slate-900">
                    <Link href="/solutions/retail" className="text-[#0E7A6E] hover:underline">
                      Retail & Hospitality
                    </Link>
                  </td>
                  <td className="py-3.5 px-5">Extended mall & weekend shifts</td>
                  <td className="py-3.5 px-5">Counter Phone/Tablet Kiosk</td>
                  <td className="py-3.5 px-5">Bank NEFT + Cash Wage Slips</td>
                  <td className="py-3.5 px-5 font-mono text-xs">Multi-Store Outlet Reports</td>
                </tr>
                <tr className="hover:bg-teal-50/40 transition-colors">
                  <td className="py-3.5 px-5 font-bold text-slate-900">
                    <Link href="/solutions/small-business" className="text-[#0E7A6E] hover:underline">
                      Small Business
                    </Link>
                  </td>
                  <td className="py-3.5 px-5">Standard timings, simple grace</td>
                  <td className="py-3.5 px-5">Reception Tablet or Mobile App</td>
                  <td className="py-3.5 px-5">1-Click Gross to Net Calculator</td>
                  <td className="py-3.5 px-5 font-mono text-xs">1-Click Corporate Bank File</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-teal-900 via-slate-900 to-[#0A161E] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#12B5A5]/20 border border-teal-400/30 px-3.5 py-1 text-xs font-bold text-teal-300 mb-4">
            <span>GET AN INDUSTRY WALKTHROUGH</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            See PayroleHR Configured for Your Specific Business Today
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our solution architects will configure sample shift timings, attendance modes, and salary structures matching your exact industry requirements in a 20-minute live demo.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-a-demo"
              className="rounded-xl bg-[#12B5A5] hover:bg-[#0E9486] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/25 transition-all inline-flex items-center gap-2"
            >
              <span>Schedule Free Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 px-7 py-3.5 text-sm font-semibold text-white transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4 text-[#12B5A5]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
