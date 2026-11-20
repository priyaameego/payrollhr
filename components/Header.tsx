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
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 rounded-2xl border border-teal-100/90 bg-white/95 px-4 sm:px-6 shadow-card backdrop-blur-xl transition-all">
        {/* Brand Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
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
          <span className="font-display text-lg font-bold tracking-tight text-slate-900">
            Payrole<span className="text-[#12B5A5]">HR</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main" className="hidden flex-1 items-center gap-1 lg:flex">
          {/* 1. PRODUCT MEGA MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("product")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "product"}
              onClick={() => setActiveMenu(activeMenu === "product" ? null : "product")}
              className={`flex items-center gap-1 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeMenu === "product"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#12B5A5]"
              }`}
            >
              Product
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "product" ? "rotate-180 text-[#12B5A5]" : "text-slate-400"
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
              className={`flex items-center gap-1 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeMenu === "solutions"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#12B5A5]"
              }`}
            >
              Solutions
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "solutions" ? "rotate-180 text-[#12B5A5]" : "text-slate-400"
                }`}
              />
            </button>
          </div>

          {/* 3. FREE TOOLS MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("tools")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "tools"}
              onClick={() => setActiveMenu(activeMenu === "tools" ? null : "tools")}
              className={`flex items-center gap-1 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeMenu === "tools"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#12B5A5]"
              }`}
            >
              Free Tools
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "tools" ? "rotate-180 text-[#12B5A5]" : "text-slate-400"
                }`}
              />
            </button>
          </div>

          {/* 4. PRICING LINK */}
          <Link
            href="/pricing"
            className="rounded-xl px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#12B5A5] transition-all"
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
              className={`flex items-center gap-1 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeMenu === "resources"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#12B5A5]"
              }`}
            >
              Resources
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "resources" ? "rotate-180 text-[#12B5A5]" : "text-slate-400"
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
              className={`flex items-center gap-1 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeMenu === "company"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#12B5A5]"
              }`}
            >
              Company
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "company" ? "rotate-180 text-[#12B5A5]" : "text-slate-400"
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Right CTA / Login */}
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            href="/auth/sign-in"
            className="inline-flex items-center justify-center rounded-xl px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-[#12B5A5] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/book-a-demo"
            className="shimmer-pill inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-5 py-2 text-xs font-bold text-white shadow-md shadow-teal-500/20 hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
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
          className="mx-auto mt-2 max-w-7xl animate-in fade-in slide-in-from-top-1 duration-200"
        >
          {/* 1. PRODUCT MEGA MENU: 5-COLUMN COMPLETE GRID MATCHING USER SCREENSHOT */}
          {activeMenu === "product" && (
            <div className="overflow-hidden rounded-3xl border border-teal-100/90 bg-white/98 shadow-2xl backdrop-blur-2xl">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {productGroups.map((group) => (
                    <div key={group.title} className="space-y-1">
                      {/* Column Header */}
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 px-2 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#12B5A5]" />
                        {group.title}
                      </h4>

                      {/* Items in Column */}
                      <div className="space-y-1">
                        {group.items.map((slug) => {
                          const feat = findFeature(slug);
                          if (!feat) return null;

                          return (
                            <Link
                              key={slug}
                              href={`/features/${slug}`}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-start gap-2.5 rounded-2xl p-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-teal-50/90 hover:to-emerald-50/40 hover:shadow-xs border border-transparent hover:border-teal-200/60"
                            >
                              <span className="attendo-icon-box h-8 w-8 shrink-0 mt-0.5">
                                <FeatureIcon slug={slug} className="h-4 w-4 stroke-[2.2]" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-tight text-hover-lux">
                                  {feat.name}
                                </span>
                                <span className="block text-[11px] text-slate-500 leading-snug line-clamp-2 mt-0.5 group-hover:text-slate-600">
                                  {feat.short}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Action Bar */}
              <div className="flex flex-wrap items-center justify-between border-t border-teal-100/70 bg-gradient-to-r from-teal-50/60 via-slate-50/80 to-emerald-50/50 px-6 py-3.5 text-xs">
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <Sparkles className="h-4 w-4 text-[#12B5A5]" />
                  <span>
                    Need custom enterprise setup? We configure multi-branch shifts, custom overtime & bank files.
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="/features"
                    onClick={() => setActiveMenu(null)}
                    className="font-bold text-[#12B5A5] hover:text-[#0E9486] transition-colors"
                  >
                    See all 34 features →
                  </Link>
                  <Link
                    href="/book-a-demo"
                    onClick={() => setActiveMenu(null)}
                    className="rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-1.5 font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
                  >
                    Book a demo →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 2. SOLUTIONS MEGA MENU */}
          {activeMenu === "solutions" && (
            <div className="overflow-hidden rounded-3xl border border-teal-100/90 bg-white/98 p-6 shadow-2xl backdrop-blur-xl">
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

          {/* 3. FREE TOOLS MEGA MENU */}
          {activeMenu === "tools" && (
            <div className="overflow-hidden rounded-3xl border border-teal-100/90 bg-white/98 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {toolsData.map((tool: any) => (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/${tool.slug}`}
                    onClick={() => setActiveMenu(null)}
                    className="group flex gap-3.5 rounded-2xl p-3 outline-none transition-all duration-200 hover:bg-teal-50/70 hover:shadow-xs border border-transparent hover:border-teal-100"
                  >
                    <span className="attendo-icon-box h-9 w-9 shrink-0 mt-0.5">
                      <FeatureIcon slug={tool.slug} className="h-4 w-4 stroke-[2.2]" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-[#0E7A6E] text-hover-lux">
                        {tool.name}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-slate-500 line-clamp-2">
                        {tool.short}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-5 border-t border-slate-100 pt-3.5 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  100% Free, reactive math engines matching Indian Labour Law formulas.
                </span>
                <Link
                  href="/free-tools"
                  onClick={() => setActiveMenu(null)}
                  className="font-bold text-[#12B5A5] hover:underline"
                >
                  All 9 calculators →
                </Link>
              </div>
            </div>
          )}

          {/* 4. RESOURCES MENU */}
          {activeMenu === "resources" && (
            <div className="overflow-hidden rounded-3xl border border-teal-100/90 bg-white/98 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setActiveMenu(null)}
                    className="group flex gap-3 rounded-2xl p-3 outline-none transition-all duration-200 hover:bg-teal-50/70 hover:shadow-xs border border-transparent hover:border-teal-100"
                  >
                    <span className="attendo-icon-box h-9 w-9 shrink-0 mt-0.5">
                      <FeatureIcon slug={item.to.split("/").pop() || "guides"} className="h-4 w-4 stroke-[2.2]" />
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

          {/* 5. COMPANY MENU */}
          {activeMenu === "company" && (
            <div className="overflow-hidden rounded-3xl border border-teal-100/90 bg-white/98 p-6 shadow-2xl backdrop-blur-xl">
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

            {/* 3. Free Tools Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "tools" ? null : "tools"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Free Tools</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "tools" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "tools" && (
                <div className="mt-1 space-y-1 pl-2">
                  {toolsData.map((t: any) => (
                    <Link
                      key={t.slug}
                      href={`/free-tools/${t.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-xs text-slate-700 hover:text-[#12B5A5]"
                    >
                      {t.name}
                    </Link>
                  ))}
                  <Link
                    href="/free-tools"
                    onClick={() => setMobileOpen(false)}
                    className="block pt-2 font-bold text-xs text-[#12B5A5]"
                  >
                    All calculators →
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Pricing Link */}
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-bold text-slate-900 border-b border-slate-100"
            >
              Pricing
            </Link>

            {/* 5. Resources Accordion */}
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
                <div className="mt-1 space-y-1 pl-2">
                  {resourceLinks.map((r) => (
                    <Link
                      key={r.to}
                      href={r.to}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-xs text-slate-700 hover:text-[#12B5A5]"
                    >
                      {r.name}
                    </Link>
                  ))}
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
