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
  groupMeta,
  resourceLinks,
  companyLinks,
  contactDetails,
} from "@/data/navigation";
import { FeatureIcon, getIcon } from "@/components/IconHelper";
import featuresData from "@/data/features.json";
import solutionsData from "@/data/solutions.json";
import toolsData from "@/data/tools.json";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeProductTab, setActiveProductTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

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

  const currentGroup = productGroups[activeProductTab];
  const currentMeta = groupMeta[currentGroup.title];

  // Helper to find feature by slug
  const findFeature = (slug: string) => featuresData.find((f: any) => f.slug === slug);

  return (
    <header ref={navRef} className="sticky top-0 z-50 px-3 pt-3">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 rounded-2xl border border-teal-100/80 bg-white/90 px-4 sm:px-6 shadow-card backdrop-blur-md transition-all">
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
          <span className="font-display text-xl font-bold tracking-tight text-slate-900">
            Payrole<span className="text-[#12B5A5]">HR</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main" className="hidden flex-1 items-center gap-1 lg:flex">
          {/* Product Mega Menu Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "product" ? null : "product")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "product"
                  ? "bg-[#E6F9F6] text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Product
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "product" ? "rotate-180 text-[#12B5A5]" : ""
                }`}
              />
            </button>
          </div>

          {/* Solutions Menu Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "solutions"
                  ? "bg-[#E6F9F6] text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Solutions
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "solutions" ? "rotate-180 text-[#12B5A5]" : ""
                }`}
              />
            </button>
          </div>

          {/* Free Tools Menu Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "tools" ? null : "tools")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "tools"
                  ? "bg-[#E6F9F6] text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Free Tools
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "tools" ? "rotate-180 text-[#12B5A5]" : ""
                }`}
              />
            </button>
          </div>

          {/* Resources Menu Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "resources"
                  ? "bg-[#E6F9F6] text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Resources
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "resources" ? "rotate-180 text-[#12B5A5]" : ""
                }`}
              />
            </button>
          </div>

          {/* Company Menu Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "company"
                  ? "bg-[#E6F9F6] text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Company
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeMenu === "company" ? "rotate-180 text-[#12B5A5]" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Right CTA / Login */}
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            href="/auth/sign-in"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Login
          </Link>
          <Link
            href="/book-a-demo"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-500/20 transition-all hover:from-[#0E9486] hover:to-[#0B7A6E] hover:shadow-lg active:scale-95"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto rounded-xl p-2 text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5] lg:hidden transition-colors"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP DROPDOWN MENUS CONTAINER */}
      {/* ============================================================ */}
      {activeMenu && (
        <div className="mx-auto mt-2 max-w-6xl transition-all duration-200">
          {/* PRODUCT MEGA MENU */}
          {activeMenu === "product" && (
            <div className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white shadow-xl">
              <div className="grid lg:grid-cols-[240px_1fr]">
                {/* Left group tabs */}
                <div className="border-r border-slate-100 bg-[#F9FDFD] p-3 space-y-1">
                  {productGroups.map((group, idx) => (
                    <button
                      key={group.title}
                      type="button"
                      onMouseEnter={() => setActiveProductTab(idx)}
                      onClick={() => setActiveProductTab(idx)}
                      className={`w-full rounded-xl px-3.5 py-3 text-left text-sm font-semibold transition-all flex items-center justify-between ${
                        idx === activeProductTab
                          ? "bg-[#E6F9F6] text-[#0E7A6E] shadow-sm font-bold"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <span>{group.title}</span>
                      {idx === activeProductTab && (
                        <ArrowRight className="h-4 w-4 text-[#12B5A5]" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Right content pane */}
                <div className="p-6 bg-white">
                  {currentMeta && (
                    <div className="mb-4">
                      <h4 className="font-display font-semibold text-slate-900 text-sm">
                        {currentMeta.headline}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {currentGroup.title} features designed for Indian institutions
                      </p>
                    </div>
                  )}

                  <div className="grid gap-2 sm:grid-cols-2">
                    {currentGroup.items.map((slug) => {
                      const feat = findFeature(slug);
                      if (!feat) return null;
                      const isHighlighted = currentMeta?.highlight.includes(slug);
                      return (
                        <Link
                          key={slug}
                          href={`/features/${slug}`}
                          onClick={() => setActiveMenu(null)}
                          className={`group flex items-start gap-3 rounded-xl p-3 transition-all ${
                            isHighlighted
                              ? "bg-teal-50/50 hover:bg-teal-50 border border-teal-100/60"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-100/60 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                            <FeatureIcon slug={slug} className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-slate-800 group-hover:text-[#12B5A5] transition-colors">
                                {feat.name}
                              </span>
                            </div>
                            <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                              {feat.short}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-[#F8FCFB] px-6 py-3.5 text-sm">
                <Link
                  href="/features"
                  onClick={() => setActiveMenu(null)}
                  className="font-semibold text-[#12B5A5] hover:text-[#0E9486] flex items-center gap-1.5"
                >
                  See all features <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/book-a-demo"
                  onClick={() => setActiveMenu(null)}
                  className="font-semibold text-slate-700 hover:text-[#12B5A5] flex items-center gap-1.5"
                >
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}

          {/* SOLUTIONS MEGA MENU */}
          {activeMenu === "solutions" && (
            <div className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white p-6 shadow-xl">
              <div className="mb-4">
                <h4 className="font-display font-bold text-slate-900 text-sm">
                  Solutions by Industry
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  See how PayroleHR configures for your specific workforce rules
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {solutionsData.map((sol: any) => {
                  return (
                    <Link
                      key={sol.slug}
                      href={`/solutions/${sol.slug}`}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-start gap-3.5 rounded-xl border border-transparent p-3.5 transition-all hover:border-teal-100 hover:bg-[#F0FDFB]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100/70 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                        <FeatureIcon slug={sol.slug} className="h-5 w-5" />
                      </div>
                      <div>
                        <h5 className="font-display text-sm font-semibold text-slate-900 group-hover:text-[#12B5A5] transition-colors">
                          {sol.name}
                        </h5>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
                          {sol.short}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-sm">
                <Link
                  href="/solutions"
                  onClick={() => setActiveMenu(null)}
                  className="font-semibold text-[#12B5A5] hover:underline"
                >
                  All industry solutions →
                </Link>
              </div>
            </div>
          )}

          {/* FREE TOOLS MEGA MENU */}
          {activeMenu === "tools" && (
            <div className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white p-6 shadow-xl">
              <div className="mb-4">
                <h4 className="font-display font-bold text-slate-900 text-sm">
                  Free HR & Payroll Calculators
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Free instant tools with transparent formulas for daily use
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {toolsData.map((tool: any) => (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/${tool.slug}`}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all hover:border-teal-100 hover:bg-[#F0FDFB]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-100/60 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                      <FeatureIcon slug={tool.slug} className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-900 group-hover:text-[#12B5A5]">
                        {tool.name}
                      </h5>
                      <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">
                        {tool.short}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-sm">
                <Link
                  href="/free-tools"
                  onClick={() => setActiveMenu(null)}
                  className="font-semibold text-[#12B5A5] hover:underline"
                >
                  See all calculators & tools →
                </Link>
              </div>
            </div>
          )}

          {/* RESOURCES MEGA MENU */}
          {activeMenu === "resources" && (
            <div className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white p-6 shadow-xl">
              <div className="mb-4">
                <h4 className="font-display font-bold text-slate-900 text-sm">
                  Resources & Learning
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Templates, guides, definitions and FAQs for HR practitioners
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all hover:border-teal-100 hover:bg-[#F0FDFB]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-100/60 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                      <FeatureIcon slug={item.to.split("/").pop() || "guides"} className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-900 group-hover:text-[#12B5A5]">
                        {item.name}
                      </h5>
                      <p className="mt-0.5 text-xs text-slate-500">{item.short}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* COMPANY MEGA MENU */}
          {activeMenu === "company" && (
            <div className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white p-6 shadow-xl">
              <div className="mb-4">
                <h4 className="font-display font-bold text-slate-900 text-sm">
                  Company
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  About PayroleHR, our mission and how to get in touch
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {companyLinks.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 rounded-xl border border-transparent p-3.5 transition-all hover:border-teal-100 hover:bg-[#F0FDFB]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-100/60 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-900 group-hover:text-[#12B5A5]">
                        {item.name}
                      </h5>
                      <p className="mt-0.5 text-xs text-slate-500">{item.short}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* MOBILE FULL DRAWER NAVIGATION */}
      {/* ============================================================ */}
      {mobileOpen && (
        <div className="fixed inset-x-3 top-20 z-50 max-h-[85vh] overflow-y-auto rounded-3xl border border-teal-100/90 bg-white p-5 shadow-2xl lg:hidden">
          <div className="flex flex-col gap-2">
            {/* Product Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "product" ? null : "product"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-base font-bold text-slate-900"
              >
                <span>Product</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "product" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "product" && (
                <div className="mt-2 space-y-4 pl-2">
                  {productGroups.map((group) => (
                    <div key={group.title}>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
                        {group.title}
                      </h5>
                      <div className="mt-1 space-y-1">
                        {group.items.map((slug) => {
                          const f = findFeature(slug);
                          return (
                            <Link
                              key={slug}
                              href={`/features/${slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 text-sm text-slate-600 hover:text-[#12B5A5]"
                            >
                              {f?.name || slug}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link
                      href="/features"
                      onClick={() => setMobileOpen(false)}
                      className="font-bold text-sm text-[#12B5A5] hover:underline"
                    >
                      View all features →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "solutions" ? null : "solutions"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-base font-bold text-slate-900"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "solutions" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "solutions" && (
                <div className="mt-2 space-y-1 pl-2">
                  {solutionsData.map((sol: any) => (
                    <Link
                      key={sol.slug}
                      href={`/solutions/${sol.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-slate-600 hover:text-[#12B5A5]"
                    >
                      {sol.name}
                    </Link>
                  ))}
                  <Link
                    href="/solutions"
                    onClick={() => setMobileOpen(false)}
                    className="block pt-2 font-bold text-sm text-[#12B5A5]"
                  >
                    All solutions →
                  </Link>
                </div>
              )}
            </div>

            {/* Free Tools Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "tools" ? null : "tools"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-base font-bold text-slate-900"
              >
                <span>Free Tools</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "tools" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "tools" && (
                <div className="mt-2 space-y-1 pl-2">
                  {toolsData.map((t: any) => (
                    <Link
                      key={t.slug}
                      href={`/free-tools/${t.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-slate-600 hover:text-[#12B5A5]"
                    >
                      {t.name}
                    </Link>
                  ))}
                  <Link
                    href="/free-tools"
                    onClick={() => setMobileOpen(false)}
                    className="block pt-2 font-bold text-sm text-[#12B5A5]"
                  >
                    All calculators →
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "resources" ? null : "resources"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-base font-bold text-slate-900"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "resources" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "resources" && (
                <div className="mt-2 space-y-1 pl-2">
                  {resourceLinks.map((r) => (
                    <Link
                      key={r.to}
                      href={r.to}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-slate-600 hover:text-[#12B5A5]"
                    >
                      {r.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "company" ? null : "company"
                  )
                }
                className="flex w-full items-center justify-between py-2 text-base font-bold text-slate-900"
              >
                <span>Company</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileExpandedSection === "company" ? "rotate-180 text-[#12B5A5]" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "company" && (
                <div className="mt-2 space-y-1 pl-2">
                  {companyLinks.map((c) => (
                    <Link
                      key={c.to}
                      href={c.to}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-slate-600 hover:text-[#12B5A5]"
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
                className="w-full text-center rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-semibold text-white shadow-md shadow-teal-500/20"
              >
                Book a demo
              </Link>
              <Link
                href="/auth/sign-in"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-slate-800"
              >
                Sign in to Portal
              </Link>
              <div className="mt-2 flex items-center justify-center gap-4 text-xs text-slate-500">
                <a href={contactDetails.tel} className="flex items-center gap-1 hover:text-[#12B5A5]">
                  <Phone className="h-3.5 w-3.5 text-[#12B5A5]" /> {contactDetails.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
