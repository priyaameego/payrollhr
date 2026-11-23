"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  ExternalLink,
  Clock,
  Calendar,
  Receipt,
  Users,
  MapPin,
  BarChart3,
  Smartphone,
  ScanFace,
  Cloud,
  IndianRupee,
  LayoutGrid,
  FileText,
  Calculator,
  Star,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import {
  productGroups,
  resourceLinks,
  companyLinks,
  contactDetails,
} from "@/data/navigation";
import { FeatureIcon } from "@/components/IconHelper";
import featuresData from "@/data/features.json";
import solutionsData from "@/data/solutions.json";
import toolsData from "@/data/tools.json";
import templatesData from "@/data/templates.json";
import glossaryData from "@/data/glossary.json";
import { termToSlug } from "@/data/glossaryDetails";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>("product");
  const [mobileProductGroup, setMobileProductGroup] = useState<number | null>(0);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (menuKey: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 220);
  };

  // Helper to find feature by slug
  const findFeature = (slug: string) => featuresData.find((f: any) => f.slug === slug);

  return (
    <header
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      className="sticky top-0 z-50 px-3 pt-3"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 rounded-2xl border border-teal-100/90 bg-white px-4 sm:px-6 shadow-card transition-all">
        {/* Brand Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5 mr-2 xl:mr-4">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-br from-[#12B5A5] to-[#0E9486] p-0.5 shadow-sm">
            <Image
              src="/__l5e/assets-v1/74691c14-0695-4828-a5f6-bc12b9107dc8/payrolehr-app-icon.png"
              alt="PayroleHR"
              width={36}
              height={36}
              className="h-full w-full rounded-[10px] object-cover"
              priority
            />
          </div>
          <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
            Payrole<span className="text-[#12B5A5]">HR</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main" className="hidden flex-1 items-center gap-2 xl:gap-3.5 lg:flex">
          {/* 1. PRODUCT MEGA MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("product")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "product"}
              onClick={() => setActiveMenu(activeMenu === "product" ? null : "product")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 xl:px-4 py-2 text-[14px] font-semibold transition-all cursor-pointer ${
                activeMenu === "product"
                  ? "bg-teal-50 text-[#0E7A6E] shadow-2xs"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#12B5A5]"
              }`}
            >
              Product
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  activeMenu === "product" ? "rotate-180 text-[#12B5A5]" : "text-slate-500"
                }`}
              />
            </button>
          </div>

          {/* 2. SOLUTIONS MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("solutions")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "solutions"}
              onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 xl:px-4 py-2 text-[14px] font-semibold transition-all cursor-pointer ${
                activeMenu === "solutions"
                  ? "bg-teal-50 text-[#0E7A6E] shadow-2xs"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#12B5A5]"
              }`}
            >
              Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  activeMenu === "solutions" ? "rotate-180 text-[#12B5A5]" : "text-slate-500"
                }`}
              />
            </button>
          </div>


          {/* 4. PRICING LINK */}
          <Link
            href="/pricing"
            className="rounded-full px-3.5 xl:px-4 py-2 text-[14px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#12B5A5] transition-all cursor-pointer"
          >
            Pricing
          </Link>

          {/* 5. RESOURCES MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "resources"}
              onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 xl:px-4 py-2 text-[14px] font-semibold transition-all cursor-pointer ${
                activeMenu === "resources"
                  ? "bg-teal-50 text-[#0E7A6E] shadow-2xs"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#12B5A5]"
              }`}
            >
              Resources
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  activeMenu === "resources" ? "rotate-180 text-[#12B5A5]" : "text-slate-500"
                }`}
              />
            </button>
          </div>

          {/* 6. COMPANY MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "company"}
              onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 xl:px-4 py-2 text-[14px] font-semibold transition-all cursor-pointer ${
                activeMenu === "company"
                  ? "bg-teal-50 text-[#0E7A6E] shadow-2xs"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#12B5A5]"
              }`}
            >
              Company
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  activeMenu === "company" ? "rotate-180 text-[#12B5A5]" : "text-slate-500"
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Right CTA / Login */}
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            href="/auth/sign-in"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-[14px] font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#12B5A5] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/book-a-demo"
            className="shimmer-pill inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-5 py-2.5 text-[14px] font-bold text-white shadow-md shadow-teal-500/20 hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto rounded-xl p-2 text-slate-700 hover:bg-teal-50 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP MEGA MENUS */}
      {/* ============================================================ */}
      {activeMenu && (
        <div
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
          }}
          className="relative z-50 mx-auto mt-2 max-w-7xl animate-in fade-in slide-in-from-top-1 duration-200"
        >
          {/* 1. PRODUCT MEGA MENU: 3-COLUMN STRUCTURE (Exact Screenshot 1 Match) */}
          {activeMenu === "product" && (
            <div className="overflow-hidden rounded-3xl border border-teal-100/90 bg-white shadow-2xl ring-1 ring-slate-900/5 p-6 sm:p-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* COLUMN 1: PAYROLEHR'S FEATURES (6 Core Links + View All Features) */}
                <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-6">
                  <div>
                    {/* Header with blue underline */}
                    <div className="pb-2 border-b-2 border-[#12B5A5] mb-3 inline-block">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        PAYROLEHR'S FEATURES
                      </h4>
                    </div>

                    {/* 6 Feature Rows */}
                    <div className="space-y-1">
                      {[
                        {
                          name: "Time & Attendance",
                          desc: "Real-time punches from face devices and mobile",
                          icon: Clock,
                          iconBg: "bg-sky-50 text-sky-600 border-sky-100",
                          href: "/features/attendance-management",
                        },
                        {
                          name: "Payroll & Payout",
                          desc: "Salaries computed and paid out automatically",
                          icon: IndianRupee,
                          iconBg: "bg-teal-50 text-[#0E7A6E] border-teal-100",
                          href: "/features/payroll-management",
                        },
                        {
                          name: "Leave & Holidays",
                          desc: "Requests, approvals and balances in one place",
                          icon: Calendar,
                          iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
                          href: "/features/leave-management",
                        },
                        {
                          name: "Shifts & Roster",
                          desc: "Plan shifts and rosters without spreadsheets",
                          icon: Users,
                          iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
                          href: "/features/shift-management",
                        },
                        {
                          name: "Geo Track",
                          desc: "Field staff attendance with location proof",
                          icon: MapPin,
                          iconBg: "bg-amber-50 text-amber-600 border-amber-100",
                          href: "/features/geo-fencing-attendance",
                        },
                        {
                          name: "Reports",
                          desc: "Every register and report, one click away",
                          icon: BarChart3,
                          iconBg: "bg-purple-50 text-purple-600 border-purple-100",
                          href: "/features/reports-analytics",
                        },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group flex items-start gap-3 rounded-2xl p-2 transition-all duration-200 hover:bg-teal-50/60 border border-transparent hover:border-teal-100"
                          >
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border shadow-2xs transition-transform duration-200 group-hover:scale-105 ${item.iconBg}`}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-tight">
                                {item.name}
                              </span>
                              <span className="block text-[11px] text-slate-500 leading-snug mt-0.5 group-hover:text-slate-600">
                                {item.desc}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* View All Features Button */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href="/features"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-50/80 hover:bg-teal-100/80 px-4 py-2.5 text-xs font-bold text-[#0E7A6E] transition-colors"
                    >
                      <LayoutGrid className="h-3.5 w-3.5 text-[#12B5A5]" />
                      <span>View All Features →</span>
                    </Link>
                  </div>
                </div>

                {/* COLUMN 2: HARDWARE & ATTENDANCE (Mobile GPS & Face Scanner) */}
                <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-6">
                  <div>
                    {/* Header with blue underline */}
                    <div className="pb-2 border-b-2 border-[#12B5A5] mb-3 inline-block">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        ATTENDANCE & HARDWARE
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {/* Card 1: Mobile GPS & Selfie (Replaced Biometric Pro as requested) */}
                      <Link
                        href="/devices/mobile-gps"
                        onClick={() => setActiveMenu(null)}
                        className="group flex gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-[#12B5A5] hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-b from-teal-50 to-emerald-50 border border-teal-100 text-[#12B5A5] group-hover:scale-105 transition-transform">
                          <Smartphone className="h-7 w-7" />
                        </div>
                        <div>
                          <h5 className="font-display text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                            Mobile GPS & Selfie
                          </h5>
                          <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                            Mobile attendance with 50m geofence coordinates & anti-spoof selfie
                          </p>
                          <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#12B5A5] group-hover:text-[#0E7A6E]">
                            <span>View Details</span>
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </Link>

                      {/* Card 2: Face Scanner */}
                      <Link
                        href="/devices/face-scanner"
                        onClick={() => setActiveMenu(null)}
                        className="group flex gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs hover:border-[#12B5A5] hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-teal-400 group-hover:scale-105 transition-transform">
                          <ScanFace className="h-7 w-7" />
                        </div>
                        <div>
                          <h5 className="font-display text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                            Face Scanner
                          </h5>
                          <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                            AI-powered 0.18s contactless facial recognition attendance kiosk
                          </p>
                          <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#12B5A5] group-hover:text-[#0E7A6E]">
                            <span>View Details</span>
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* View All Hardware & Attendance Button */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href="/devices"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 hover:bg-teal-50 px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-[#0E7A6E] transition-colors"
                    >
                      <Smartphone className="h-3.5 w-3.5 text-[#12B5A5]" />
                      <span>View All Check-in Options →</span>
                    </Link>
                  </div>
                </div>

                {/* COLUMN 3: ONE CONNECTED SYSTEM (Punch to Payslip + Book Demo CTA) */}
                <div className="lg:col-span-3 flex flex-col justify-between rounded-2xl border border-teal-100/90 bg-gradient-to-b from-teal-50/50 via-sky-50/30 to-white p-5 shadow-xs">
                  <div>
                    <h4 className="font-display text-base font-extrabold text-[#0E7A6E] leading-tight">
                      One Connected System
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 font-medium">
                      From punch to payslip.
                    </p>

                    {/* 3 Step Icons Flow */}
                    <div className="mt-6 flex items-center justify-between gap-1.5 px-1">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-teal-100 text-[#12B5A5] shadow-xs">
                        <ScanFace className="h-5 w-5" />
                      </div>
                      <span className="text-slate-400 font-bold text-xs">→</span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-teal-100 text-[#12B5A5] shadow-xs">
                        <Cloud className="h-5 w-5" />
                      </div>
                      <span className="text-slate-400 font-bold text-xs">→</span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-teal-100 text-[#12B5A5] shadow-xs">
                        <IndianRupee className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="mt-5 text-xs text-slate-500 leading-relaxed font-normal">
                      Our system. Our payroll. One system. No re-typing across multiple disconnected software.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/book-a-demo"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-teal-500/20 hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
                    >
                      <span>Book a Free Demo →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. SOLUTIONS MEGA MENU */}
          {activeMenu === "solutions" && (
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-2xl ring-1 ring-slate-900/5">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {solutionsData.map((sol: any) => (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    onClick={() => setActiveMenu(null)}
                    className="group flex gap-3.5 rounded-2xl p-3 outline-none transition-all duration-200 hover:bg-teal-50/70 hover:shadow-xs border border-transparent hover:border-teal-100"
                  >
                    <span className="attendo-icon-box h-9 w-9 shrink-0 mt-0.5">
                      <FeatureIcon slug={sol.slug} className="h-4 w-4 stroke-[2.2]" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] text-hover-lux">
                        {sol.name}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-slate-500 line-clamp-2">
                        {sol.short}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-5 border-t border-slate-100 pt-3.5 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  Tailored workflows for Indian educational institutions, factories & corporate firms.
                </span>
                <Link
                  href="/solutions"
                  onClick={() => setActiveMenu(null)}
                  className="font-bold text-[#12B5A5] hover:underline"
                >
                  All 6 industry solutions →
                </Link>
              </div>
            </div>
          )}

          {/* 3. RESOURCES MEGA MENU (Unified Templates, Tools, Popular Cards & Glossary) */}
          {activeMenu === "resources" && (
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-2xl ring-1 ring-slate-900/5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
                {/* COLUMN 1: TEMPLATES & CHECKLISTS (lg:col-span-3) */}
                <div className="lg:col-span-3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-5">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#12B5A5]">
                      <FileText className="h-3.5 w-3.5 stroke-[2.2]" />
                      <span>Templates & Checklists</span>
                    </div>
                    <h3 className="mt-2 font-display text-base font-extrabold text-slate-950 leading-snug">
                      Ready-to-use templates for HR & Payroll
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Save time with expert-crafted letters, forms, and HR documents.
                    </p>

                    <div className="mt-4 space-y-1">
                      {templatesData.slice(0, 7).map((tpl: any) => {
                        const slug = tpl.file ? tpl.file.replace(/\.csv$/, "") : "";
                        return (
                          <Link
                            key={tpl.file}
                            href={`/templates/${slug}`}
                            onClick={() => setActiveMenu(null)}
                            className="group flex items-center gap-2.5 rounded-lg py-1.5 text-xs font-semibold text-slate-800 hover:text-[#0E7A6E] transition-colors"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-50 text-[#12B5A5] border border-teal-100/70 group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                              <FileText className="h-3 w-3 stroke-[2.2]" />
                            </span>
                            <span className="truncate group-hover:underline">{tpl.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href="/templates"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#12B5A5] hover:text-[#0E7A6E] group"
                    >
                      <span>View all 12 templates</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </Link>
                  </div>
                </div>

                {/* COLUMN 2: FREE TOOLS (lg:col-span-3) */}
                <div className="lg:col-span-3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-5">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#12B5A5]">
                      <Calculator className="h-3.5 w-3.5 stroke-[2.2]" />
                      <span>Free Tools</span>
                    </div>
                    <h3 className="mt-2 font-display text-base font-extrabold text-slate-950 leading-snug">
                      Smart tools for smarter decisions
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Calculate, analyze, and stay compliant with ease.
                    </p>

                    <div className="mt-4 space-y-1">
                      {toolsData.slice(0, 9).map((tool: any) => (
                        <Link
                          key={tool.slug}
                          href={`/free-tools/${tool.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-center gap-2.5 rounded-lg py-1.5 text-xs font-semibold text-slate-800 hover:text-[#0E7A6E] transition-colors"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-50 text-[#12B5A5] border border-teal-100/70 group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                            <Calculator className="h-3 w-3 stroke-[2.2]" />
                          </span>
                          <span className="truncate group-hover:underline">{tool.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href="/free-tools"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#12B5A5] hover:text-[#0E7A6E] group"
                    >
                      <span>All 9 calculators</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </Link>
                  </div>
                </div>

                {/* COLUMN 3: POPULAR TOOLS (lg:col-span-3) */}
                <div className="lg:col-span-3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-5">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#12B5A5]">
                      <Star className="h-3.5 w-3.5 stroke-[2.2]" />
                      <span>Popular Tools</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <h3 className="font-display text-base font-extrabold text-slate-950 leading-snug">
                        Most used by HR professionals
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700 shrink-0">
                        Trending
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {/* Popular Card 1 */}
                      <Link
                        href="/free-tools/salary-per-day-calculator"
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-center justify-between rounded-2xl border border-teal-100/80 bg-white p-3 hover:border-teal-300 hover:bg-teal-50/40 transition-all shadow-2xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 font-display text-base font-bold text-[#12B5A5] border border-teal-100/70">
                            ₹
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] truncate">
                              Salary Per Day Calculator
                            </div>
                            <div className="text-[11px] text-slate-500 truncate">
                              Monthly salary to daily & hourly rates
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-[#12B5A5] group-hover:translate-x-0.5 transition-all ml-1.5" />
                      </Link>

                      {/* Popular Card 2 */}
                      <Link
                        href="/free-tools/ctc-to-in-hand-calculator"
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-center justify-between rounded-2xl border border-teal-100/80 bg-white p-3 hover:border-teal-300 hover:bg-teal-50/40 transition-all shadow-2xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#12B5A5] border border-teal-100/70">
                            <BarChart3 className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] truncate">
                              CTC to In-Hand Calculator
                            </div>
                            <div className="text-[11px] text-slate-500 truncate">
                              See take-home pay under tax regimes
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-[#12B5A5] group-hover:translate-x-0.5 transition-all ml-1.5" />
                      </Link>

                      {/* Popular Card 3: Highlighted with Active Border Matching Screenshot */}
                      <Link
                        href="/free-tools/attendance-calculator"
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-center justify-between rounded-2xl border-2 border-teal-400 bg-teal-50/50 p-3 hover:bg-teal-50 transition-all shadow-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-teal-200 text-[#12B5A5] shadow-2xs">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] truncate">
                              Attendance Calculator
                            </div>
                            <div className="text-[11px] text-slate-600 truncate">
                              Attendance percentage in seconds
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#12B5A5] group-hover:translate-x-0.5 transition-all ml-1.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Help Choosing Right Tool Callout Box Matching Screenshot */}
                  <div className="mt-4 rounded-2xl border border-teal-100 bg-[#F0FDFB] p-3.5">
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-[#12B5A5]">
                        <Lightbulb className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          Need help choosing the <span className="text-[#12B5A5]">right tool?</span>
                        </div>
                        <p className="mt-0.5 text-[11px] text-slate-600 leading-snug">
                          Our experts are here to help you find what fits your business.
                        </p>
                        <Link
                          href="/book-a-demo"
                          onClick={() => setActiveMenu(null)}
                          className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#0E7A6E] hover:underline"
                        >
                          Book a walkthrough →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMN 4: GLOSSARY (lg:col-span-3) */}
                <div className="lg:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#12B5A5]">
                      <BookOpen className="h-3.5 w-3.5 stroke-[2.2]" />
                      <span>Glossary</span>
                    </div>
                    <h3 className="mt-2 font-display text-base font-extrabold text-slate-950 leading-snug">
                      HR & Payroll glossary
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Understand key HR, payroll and compliance terms in simple language.
                    </p>

                    <div className="mt-4 space-y-1">
                      {["Absenteeism", "Arrears", "Attendance regularisation", "Basic salary", "Bank salary file", "Carry forward", "CTC", "Full and final settlement"].map((term) => (
                        <Link
                          key={term}
                          href={`/glossary/${termToSlug(term)}`}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-center gap-2.5 rounded-lg py-1.5 text-xs font-semibold text-slate-800 hover:text-[#0E7A6E] transition-colors"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-50 text-[#12B5A5] border border-teal-100/70 group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                            <BookOpen className="h-3 w-3 stroke-[2.2]" />
                          </span>
                          <span className="truncate group-hover:underline">{term}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3">
                    <Link
                      href="/glossary"
                      onClick={() => setActiveMenu(null)}
                      className="block w-full rounded-xl border border-teal-200 bg-white py-2.5 text-center text-xs font-bold text-[#0E7A6E] hover:bg-teal-50 hover:border-teal-300 transition-colors shadow-2xs"
                    >
                      View full glossary →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. COMPANY MENU */}
          {activeMenu === "company" && (
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-2xl ring-1 ring-slate-900/5">
              <div className="grid gap-3 sm:grid-cols-3">
                {companyLinks.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setActiveMenu(null)}
                    className="group flex gap-3 rounded-2xl p-3 outline-none transition-all duration-200 hover:bg-teal-50/70 hover:shadow-xs border border-transparent hover:border-teal-100"
                  >
                    <span className="attendo-icon-box h-9 w-9 shrink-0 mt-0.5">
                      <Sparkles className="h-4 w-4 stroke-[2.2]" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] text-hover-lux">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-slate-500">
                        {item.short}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* MOBILE DRAWER */}
      {/* ============================================================ */}
      {mobileOpen && (
        <div className="fixed inset-x-3 top-20 z-50 max-h-[85vh] overflow-y-auto rounded-3xl border border-teal-100/90 bg-white p-5 shadow-2xl lg:hidden">
          <div className="flex flex-col gap-2">
            {/* 1. Product Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "product" ? null : "product"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Product (34 Features)</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "product" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "product" && (
                <div className="mt-2 space-y-4 pl-2">
                  {productGroups.map((group) => (
                    <div key={group.title} className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        {group.title}
                      </p>
                      <div className="grid gap-1">
                        {group.items.map((slug) => {
                          const f = findFeature(slug);
                          if (!f) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/features/${slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 py-1.5 text-xs text-slate-700 hover:text-[#12B5A5]"
                            >
                              <FeatureIcon slug={slug} className="h-3.5 w-3.5 text-[#12B5A5] shrink-0" />
                              <span className="font-medium">{f.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/features"
                    onClick={() => setMobileOpen(false)}
                    className="block pt-2 font-bold text-xs text-[#12B5A5]"
                  >
                    See all features overview →
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Solutions Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "solutions" ? null : "solutions"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "solutions" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "solutions" && (
                <div className="mt-1 space-y-1 pl-2">
                  {solutionsData.map((sol: any) => (
                    <Link
                      key={sol.slug}
                      href={`/solutions/${sol.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-xs text-slate-700 hover:text-[#12B5A5]"
                    >
                      {sol.name}
                    </Link>
                  ))}
                  <Link
                    href="/solutions"
                    onClick={() => setMobileOpen(false)}
                    className="block pt-2 font-bold text-xs text-[#12B5A5]"
                  >
                    All solutions →
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Pricing Link */}
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-bold text-slate-900 border-b border-slate-100"
            >
              Pricing
            </Link>

            {/* 4. Resources Accordion (Includes Templates, Free Tools, Glossary & Guides) */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "resources" ? null : "resources"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "resources" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "resources" && (
                <div className="mt-1 space-y-3 pl-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#12B5A5]">Free Tools & Calculators</span>
                    <div className="mt-1 space-y-1">
                      {toolsData.slice(0, 6).map((t: any) => (
                        <Link
                          key={t.slug}
                          href={`/free-tools/${t.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1 text-xs text-slate-700 hover:text-[#12B5A5]"
                        >
                          {t.name}
                        </Link>
                      ))}
                      <Link
                        href="/free-tools"
                        onClick={() => setMobileOpen(false)}
                        className="block pt-1 font-bold text-xs text-[#12B5A5]"
                      >
                        All 9 calculators →
                      </Link>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#12B5A5]">Templates & Checklists</span>
                    <div className="mt-1 space-y-1">
                      {templatesData.slice(0, 6).map((tpl: any) => {
                        const slug = tpl.file ? tpl.file.replace(/\.csv$/, "") : "";
                        return (
                          <Link
                            key={tpl.file}
                            href={`/templates/${slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-slate-700 hover:text-[#12B5A5]"
                          >
                            {tpl.name}
                          </Link>
                        );
                      })}
                      <Link
                        href="/templates"
                        onClick={() => setMobileOpen(false)}
                        className="block pt-1 font-bold text-xs text-[#12B5A5]"
                      >
                        All 12 templates →
                      </Link>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#12B5A5]">HR & Payroll Glossary</span>
                    <div className="mt-1 space-y-1">
                      {["Absenteeism", "Arrears", "Basic salary", "CTC", "Full and final settlement"].map((term) => (
                        <Link
                          key={term}
                          href={`/glossary/${termToSlug(term)}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1 text-xs text-slate-700 hover:text-[#12B5A5]"
                        >
                          {term}
                        </Link>
                      ))}
                      <Link
                        href="/glossary"
                        onClick={() => setMobileOpen(false)}
                        className="block pt-1 font-bold text-xs text-[#12B5A5]"
                      >
                        View full glossary →
                      </Link>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Guides & Articles</span>
                    <div className="mt-1 space-y-1">
                      {resourceLinks.map((r) => (
                        <Link
                          key={r.to}
                          href={r.to}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1 text-xs text-slate-700 hover:text-[#12B5A5]"
                        >
                          {r.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Company Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "company" ? null : "company"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Company</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "company" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "company" && (
                <div className="mt-1 space-y-1 pl-2">
                  {companyLinks.map((c) => (
                    <Link
                      key={c.to}
                      href={c.to}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-xs text-slate-700 hover:text-[#12B5A5]"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                href="/book-a-demo"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-xs font-bold text-white shadow-md shadow-teal-500/20"
              >
                Book a demo
              </Link>
              <Link
                href="/auth/sign-in"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
