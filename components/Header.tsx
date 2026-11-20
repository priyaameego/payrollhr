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
} from "lucide-react";
import {
  productGroups,
  groupMeta,
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
  const [activeProductTab, setActiveProductTab] = useState(0);
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
    }, 200);
  };

  const currentGroup = productGroups[activeProductTab] || productGroups[0];
  const currentMeta = groupMeta[currentGroup.title] || groupMeta["Core HR"];

  // Helper to find feature by slug
  const findFeature = (slug: string) => featuresData.find((f: any) => f.slug === slug);

  return (
    <header
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      className="sticky top-0 z-50 px-3 pt-3"
    >
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
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "product"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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

          {/* 2. SOLUTIONS MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("solutions")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "solutions"}
              onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "solutions"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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

          {/* 3. FREE TOOLS MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("tools")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "tools"}
              onClick={() => setActiveMenu(activeMenu === "tools" ? null : "tools")}
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "tools"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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

          {/* 4. RESOURCES MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "resources"}
              onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "resources"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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

          {/* 5. COMPANY MENU BUTTON */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "company"}
              onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeMenu === "company"
                  ? "bg-teal-50 text-[#0E7A6E]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link
            href="/auth/sign-in"
            className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/book-a-demo"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto rounded-md p-2 text-slate-700 hover:bg-teal-50 lg:hidden"
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
          className="mx-auto mt-2 max-w-6xl animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {/* 1. PRODUCT MEGA MENU */}
          {activeMenu === "product" && (
            <div className="overflow-hidden rounded-2xl border border-teal-100/90 bg-white shadow-xl">
              <div className="grid lg:grid-cols-[230px_1fr]">
                {/* Left product groups tablist */}
                <div
                  className="flex gap-1 overflow-x-auto border-b p-3 lg:flex-col lg:border-b-0 lg:border-r border-slate-100 bg-[#F8FCFB]"
                  role="tablist"
                  aria-label="Product groups"
                >
                  {productGroups.map((group, r) => (
                    <button
                      key={group.title}
                      type="button"
                      role="tab"
                      aria-selected={r === activeProductTab}
                      onMouseEnter={() => setActiveProductTab(r)}
                      onFocus={() => setActiveProductTab(r)}
                      onClick={() => setActiveProductTab(r)}
                      className={`whitespace-nowrap rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                        r === activeProductTab
                          ? "bg-teal-100/60 text-[#0E7A6E] font-bold"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {group.title}
                    </button>
                  ))}
                </div>

                {/* Right items pane */}
                <div className="p-4 bg-white">
                  {currentMeta && (
                    <p className="mb-3 px-2 text-sm text-slate-500">
                      {currentMeta.headline}
                    </p>
                  )}

                  <div className="grid gap-1 sm:grid-cols-2">
                    {currentGroup.items.map((slug) => {
                      const feat = findFeature(slug);
                      if (!feat) return null;
                      const isHighlighted = currentMeta?.highlight.includes(slug);

                      if (isHighlighted) {
                        return (
                          <Link
                            key={slug}
                            href={`/features/${slug}`}
                            onClick={() => setActiveMenu(null)}
                            className="group flex gap-3 rounded-lg p-2.5 outline-none transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 border border-transparent hover:border-teal-100"
                          >
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal-100/70 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                              <FeatureIcon slug={slug} className="h-4 w-4" />
                            </span>
                            <span className="min-w-0">
                              <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-[#12B5A5]">
                                {feat.name}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-slate-500 line-clamp-2">
                                {feat.short}
                              </span>
                            </span>
                          </Link>
                        );
                      }

                      return (
                        <Link
                          key={slug}
                          href={`/features/${slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium outline-none hover:bg-slate-50 text-slate-700 hover:text-[#12B5A5] transition-colors"
                        >
                          <FeatureIcon slug={slug} className="h-4 w-4 text-[#12B5A5] shrink-0" />
                          <span>{feat.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-3 text-sm">
                <Link
                  href="/features"
                  onClick={() => setActiveMenu(null)}
                  className="font-semibold text-[#12B5A5] hover:underline"
                >
                  See all features →
                </Link>
                <Link
                  href="/book-a-demo"
                  onClick={() => setActiveMenu(null)}
                  className="font-semibold text-slate-700 hover:text-[#12B5A5]"
                >
                  Book a demo →
                </Link>
              </div>
            </div>
          )}

          {/* 2. SOLUTIONS MEGA MENU */}
          {activeMenu === "solutions" && (
            <div className="overflow-hidden rounded-2xl border border-teal-100/90 bg-white p-6 shadow-xl">
              <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                {solutionsData.map((sol: any) => (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    onClick={() => setActiveMenu(null)}
                    className="group flex gap-3 rounded-lg p-2.5 outline-none transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal-100/70 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                      <FeatureIcon slug={sol.slug} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-[#12B5A5]">
                        {sol.name}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-slate-500 line-clamp-2">
                        {sol.short}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <Link
                  href="/solutions"
                  onClick={() => setActiveMenu(null)}
                  className="font-semibold text-sm text-[#12B5A5] hover:underline"
                >
                  All solutions →
                </Link>
              </div>
            </div>
          )}

          {/* 3. FREE TOOLS MEGA MENU */}
          {activeMenu === "tools" && (
            <div className="overflow-hidden rounded-2xl border border-teal-100/90 bg-white p-6 shadow-xl">
              <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                {toolsData.map((tool: any) => (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/${tool.slug}`}
                    onClick={() => setActiveMenu(null)}
                    className="group flex gap-3 rounded-lg p-2.5 outline-none transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal-100/70 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                      <FeatureIcon slug={tool.slug} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-[#12B5A5]">
                        {tool.name}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-slate-500 line-clamp-2">
                        {tool.short}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <Link
                  href="/free-tools"
                  onClick={() => setActiveMenu(null)}
                  className="font-semibold text-sm text-[#12B5A5] hover:underline"
                >
                  See all tools →
                </Link>
              </div>
            </div>
          )}

          {/* 4. RESOURCES MENU */}
          {activeMenu === "resources" && (
            <div className="overflow-hidden rounded-2xl border border-teal-100/90 bg-white p-5 shadow-xl">
              <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setActiveMenu(null)}
                    className="group flex gap-3 rounded-lg p-2.5 outline-none transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal-100/70 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                      <FeatureIcon slug={item.to.split("/").pop() || "guides"} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-[#12B5A5]">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-slate-500">
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
            <div className="overflow-hidden rounded-2xl border border-teal-100/90 bg-white p-5 shadow-xl">
              <div className="grid gap-2 sm:grid-cols-3">
                {companyLinks.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setActiveMenu(null)}
                    className="group flex gap-3 rounded-lg p-2.5 outline-none transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal-100/70 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-[#12B5A5]">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-slate-500">
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
                  {/* Group switcher buttons */}
                  <div className="flex flex-wrap gap-1.5 pb-2 border-b border-slate-100">
                    {productGroups.map((g, gIdx) => (
                      <button
                        key={g.title}
                        type="button"
                        onClick={() => setMobileProductGroup(gIdx)}
                        className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                          mobileProductGroup === gIdx
                            ? "bg-[#12B5A5] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {g.title}
                      </button>
                    ))}
                  </div>

                  {/* Items for selected mobile group */}
                  {mobileProductGroup !== null && (
                    <div className="space-y-1">
                      {productGroups[mobileProductGroup].items.map((slug) => {
                        const feat = findFeature(slug);
                        return (
                          <Link
                            key={slug}
                            href={`/features/${slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 py-1.5 text-xs text-slate-700 hover:text-[#12B5A5]"
                          >
                            <FeatureIcon slug={slug} className="h-3.5 w-3.5 text-[#12B5A5]" />
                            <span>{feat?.name || slug}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  <div className="pt-2">
                    <Link
                      href="/features"
                      onClick={() => setMobileOpen(false)}
                      className="font-bold text-xs text-[#12B5A5] hover:underline"
                    >
                      See all features →
                    </Link>
                  </div>
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

            {/* 4. Resources Accordion */}
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
                      className="block py-1.5 text-xs text-slate-700 hover:text-[#12B5A5]"
                    >
                      {r.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Company Accordion */}
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
                      className="block py-1.5 text-xs text-slate-700 hover:text-[#12B5A5]"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                href="/book-a-demo"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-semibold text-white shadow-md shadow-teal-500/20"
              >
                Book a demo
              </Link>
              <Link
                href="/auth/sign-in"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-800"
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
