"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Smartphone,
  Users,
  Clock,
  Sparkles,
  ChevronDown,
  Building,
  Calculator,
  Lock,
  Layers,
  FileSpreadsheet,
  CalendarCheck,
  Receipt,
  ScanFace,
  Award,
  Phone,
  MessageCircle,
  HelpCircle,
  ExternalLink,
  Calendar,
  Play,
  Star,
  Fingerprint,
  CloudUpload,
  Settings2,
  Send,
} from "lucide-react";
import { productGroups, groupMeta, contactDetails } from "@/data/navigation";
import { FeatureIcon } from "@/components/IconHelper";
import featuresData from "@/data/features.json";
import solutionsData from "@/data/solutions.json";
import toolsData from "@/data/tools.json";

// 3D Visual Badges inspired by AttendoHR Showcase Design
function Calendar3DBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`filter drop-shadow-xl select-none ${className}`}>
      <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="calBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="calBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
        </defs>
        <rect x="10" y="14" width="52" height="50" rx="10" fill="url(#calBody)" stroke="#CBD5E1" strokeWidth="1.5" />
        <path d="M10 24C10 18.4772 14.4772 14 20 14H52C57.5228 14 62 18.4772 62 24V28H10V24Z" fill="url(#calBlue)" />
        <rect x="20" y="8" width="5" height="12" rx="2.5" fill="url(#ringGrad)" stroke="#475569" strokeWidth="0.8" />
        <rect x="34" y="8" width="5" height="12" rx="2.5" fill="url(#ringGrad)" stroke="#475569" strokeWidth="0.8" />
        <rect x="48" y="8" width="5" height="12" rx="2.5" fill="url(#ringGrad)" stroke="#475569" strokeWidth="0.8" />
        <rect x="18" y="34" width="6" height="5" rx="1.5" fill="#93C5FD" />
        <rect x="28" y="34" width="6" height="5" rx="1.5" fill="#93C5FD" />
        <rect x="38" y="34" width="6" height="5" rx="1.5" fill="#93C5FD" />
        <rect x="48" y="34" width="6" height="5" rx="1.5" fill="#EF4444" />
        <rect x="18" y="44" width="6" height="5" rx="1.5" fill="#93C5FD" />
        <rect x="28" y="44" width="6" height="5" rx="1.5" fill="#93C5FD" />
        <rect x="38" y="44" width="6" height="5" rx="1.5" fill="#93C5FD" />
        <rect x="48" y="44" width="6" height="5" rx="1.5" fill="#93C5FD" />
        <rect x="18" y="53" width="6" height="4" rx="1.5" fill="#CBD5E1" />
        <rect x="28" y="53" width="6" height="4" rx="1.5" fill="#CBD5E1" />
      </svg>
    </div>
  );
}

function Coin3DBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`filter drop-shadow-xl select-none ${className}`}>
      <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="coinGrad" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="coinRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          <linearGradient id="coinInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="38" r="28" fill="#B45309" />
        <circle cx="36" cy="36" r="28" fill="url(#coinGrad)" stroke="url(#coinRim)" strokeWidth="3" />
        <circle cx="36" cy="36" r="21" fill="url(#coinInner)" stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="36" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">
          ₹
        </text>
      </svg>
    </div>
  );
}

function Clock3DBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`filter drop-shadow-xl select-none ${className}`}>
      <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="clockBezel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="clockFace" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="38" r="28" fill="#0369A1" />
        <circle cx="36" cy="36" r="28" fill="url(#clockBezel)" />
        <circle cx="36" cy="36" r="22" fill="url(#clockFace)" stroke="#E0F2FE" strokeWidth="1.5" />
        <circle cx="36" cy="18" r="1.5" fill="#0284C7" />
        <circle cx="54" cy="36" r="1.5" fill="#0284C7" />
        <circle cx="36" cy="54" r="1.5" fill="#0284C7" />
        <circle cx="18" cy="36" r="1.5" fill="#0284C7" />
        <line x1="36" y1="36" x2="36" y2="22" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="36" y1="36" x2="48" y2="36" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="36" cy="36" r="3" fill="#0F172A" />
      </svg>
    </div>
  );
}

function WhatsApp3DBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`filter drop-shadow-xl select-none ${className}`}>
      <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="50%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>
          <linearGradient id="waSheen" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="8" y="10" width="56" height="56" rx="18" fill="#14532D" />
        <rect x="8" y="8" width="56" height="56" rx="18" fill="url(#waGrad)" />
        <path d="M8 24C8 15.1634 15.1634 8 24 8H48C56.8366 8 64 15.1634 64 24C64 28 50 40 36 40C20 40 8 30 8 24Z" fill="url(#waSheen)" />
        <path d="M36 18C26.0589 18 18 26.0589 18 36C18 39.4678 19.006 42.7132 20.7634 45.463L19 53L26.7924 51.2778C29.4344 52.9837 32.6022 54 36 54C45.9411 54 54 45.9411 54 36C54 26.0589 45.9411 18 36 18Z" fill="#FFFFFF" />
        <path d="M44.5 39.8C43.9 39.5 40.5 37.8 40 37.6C39.5 37.4 39.1 37.3 38.7 37.9C38.3 38.5 37.2 39.8 36.9 40.1C36.6 40.4 36.3 40.5 35.7 40.2C35.1 39.9 33.2 39.3 30.9 37.2C29.1 35.6 27.9 33.6 27.6 33C27.3 32.4 27.5 32.1 27.8 31.8C28.1 31.5 28.5 31 28.8 30.6C29.1 30.2 29.2 29.9 29.4 29.5C29.6 29.1 29.5 28.8 29.4 28.5C29.2 28.2 28.2 25.7 27.8 24.6C27.4 23.5 27 23.7 26.7 23.7C26.4 23.7 26 23.7 25.6 23.7C25.2 23.7 24.6 23.9 24.1 24.4C23.6 24.9 22.2 26.2 22.2 28.8C22.2 31.4 24.1 33.9 24.4 34.3C24.7 34.7 28.1 39.9 33.3 42.1C38.5 44.3 38.5 43.6 39.5 43.5C40.5 43.4 42.6 42.2 43.1 41C43.6 39.8 43.6 38.8 43.4 38.5C43.2 38.2 42.8 38.1 42.2 37.8L44.5 39.8Z" fill="#22C55E" />
      </svg>
    </div>
  );
}

export default function HomePage() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroSimTab, setHeroSimTab] = useState<"face" | "geo" | "payroll">("face");
  const [simPunchState, setSimPunchState] = useState<"idle" | "scanning" | "matched">("idle");
  const [presentCount, setPresentCount] = useState<number>(68);
  const [leaveApprovals, setLeaveApprovals] = useState<{ [key: string]: "pending" | "approved" | "rejected" }>({
    vikram: "pending",
    pooja: "approved",
    manish: "pending",
  });

  const triggerSimPunch = () => {
    setSimPunchState("scanning");
    setTimeout(() => {
      setSimPunchState("matched");
      setPresentCount((c) => (c === 68 ? 69 : 68));
      setTimeout(() => {
        setSimPunchState("idle");
      }, 3500);
    }, 450);
  };

  const activeGroup = productGroups[activeTabIdx];
  const activeMeta = groupMeta[activeGroup.title];

  // Top homepage FAQ items
  const homepageFaqs = [
    {
      q: "Who is PayroleHR for?",
      a: "Schools, colleges, corporate offices, factories, hospitals and retail businesses in India with 15 to 1,000+ staff who want attendance, leave and payroll to work together without spreadsheets.",
    },
    {
      q: "Do we need special attendance hardware?",
      a: "No. Any standard Android tablet or iPad can be used as a face-attendance kiosk at your gate or reception. Staff can also check in from their own mobile phones with GPS geofencing.",
    },
    {
      q: "Can we keep our existing salary structure?",
      a: "Yes. PayroleHR does not force a fixed layout. You define your own salary heads, earnings, deductions, formulas, allowances and rounding rules.",
    },
    {
      q: "Can staff use it on their phones?",
      a: "Yes. The staff self-service portal works on any phone browser and can be added to the home screen like an app. Staff sign in with their mobile number and OTP.",
    },
    {
      q: "Can we import our current staff list?",
      a: "Yes. You can upload an Excel spreadsheet of your employees. The system validates every column, checks for duplicate mobile/PAN/bank numbers, and highlights any errors before saving.",
    },
    {
      q: "How do we get started?",
      a: "Book a demo. We will show you PayroleHR configured with your organisation's shift timings, salary components and attendance rules.",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative pt-6 sm:pt-12 pb-16 overflow-hidden">
        {/* Soft background cyan/mint gradient mesh */}
        <div
          aria-hidden="true"
          className="animate-hero-mesh absolute -top-40 left-1/2 -z-10 h-[620px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#8FE8DC]/30 via-[#12B5A5]/18 to-transparent blur-3xl pointer-events-none"
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Hero Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8FE8DC]/80 bg-[#E8FAF7] px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-xs hover:border-teal-300 hover:shadow-sm transition-all duration-300 cursor-default animate-fade-up">
                <Sparkles className="h-3.5 w-3.5 text-[#12B5A5] animate-pulse" />
                <span>HR, Payroll & Face Attendance</span>
              </div>

              <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-[1.1]">
                <span className="hero-word-reveal [animation-delay:100ms]">From</span>{" "}
                <span className="hero-word-reveal [animation-delay:180ms]">morning</span>{" "}
                <span className="hero-word-reveal [animation-delay:260ms]">check-in</span>{" "}
                <span className="hero-word-reveal [animation-delay:340ms]">to</span>{" "}
                <span className="hero-word-reveal [animation-delay:420ms] inline-block">
                  <span className="bg-gradient-to-r from-[#12B5A5] via-[#2DD4BF] to-[#0E9486] bg-clip-text text-transparent animate-hero-gradient font-black">
                    month-end bank file
                  </span>
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:500ms]">
                Face check-in at the door or on the phone, leave and overtime calculated automatically, your own salary structures, and bank transfer files generated in one click.
              </p>

              {/* CTAs (AttendoHR Premium Button Styling) */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-up [animation-delay:550ms]">
                <Link
                  href="/book-a-demo"
                  className="btn-attendo-primary group rounded-2xl px-7 py-3.5 text-sm font-bold text-white flex items-center gap-2.5"
                >
                  <Calendar className="h-4 w-4 text-teal-100 transition-transform duration-300 group-hover:scale-110" />
                  <span>Book a Free Demo</span>
                </Link>

                <Link
                  href="/features"
                  className="btn-attendo-secondary group rounded-2xl px-6 py-3.5 text-sm font-bold text-slate-800 flex items-center gap-2.5"
                >
                  <Play className="h-4 w-4 text-[#12B5A5] fill-[#12B5A5]/20 transition-transform duration-300 group-hover:scale-110 group-hover:fill-[#12B5A5]" />
                  <span>See how it works</span>
                </Link>

                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-transparent px-4 py-3.5 text-sm font-semibold text-slate-600 hover:text-[#0E7A6E] hover:bg-teal-50/60 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 text-[#12B5A5] transition-transform duration-300 group-hover:scale-110" />
                  <span>WhatsApp us</span>
                </a>
              </div>

              {/* Review Stars & Social Proof (AttendoHR Rating Bar) */}
              <div className="mt-7 flex items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-700 animate-fade-up [animation-delay:650ms]">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white border border-slate-200 shadow-2xs font-black text-rose-500 text-[10px]">
                    G
                  </span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white border border-slate-200 shadow-2xs font-black text-orange-500 text-[10px]">
                    G2
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-slate-800 font-bold">4.9</span>
                <span className="text-slate-500 font-normal">from 150+ Indian Organisations</span>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-500 border-t border-slate-200/60 pt-5 animate-fade-up [animation-delay:720ms]">
                <div className="group flex items-center gap-2 transition-colors hover:text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-[#12B5A5] transition-transform duration-300 group-hover:scale-110" />
                  <span>Indian statutory compliant</span>
                </div>
                <div className="group flex items-center gap-2 transition-colors hover:text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-[#12B5A5] transition-transform duration-300 group-hover:scale-110" />
                  <span>No proprietary biometric devices</span>
                </div>
                <div className="group flex items-center gap-2 transition-colors hover:text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-[#12B5A5] transition-transform duration-300 group-hover:scale-110" />
                  <span>Self-service mobile portal</span>
                </div>
              </div>
            </div>

            {/* Right Live Interactive Mockup Hero Card */}
            <div className="relative animate-hero-card">
              {/* Floating Badge 1: Top-right face scan pill */}
              <div className="animate-float absolute -top-5 -right-3 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-teal-200/90 bg-white/95 px-3.5 py-2 shadow-lg shadow-teal-500/10 backdrop-blur-md hover:scale-105 hover:border-teal-300 transition-all duration-300 cursor-default">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">Face Scan: 0.18s Match</span>
              </div>

              {/* Floating Badge 2: Bottom-left salary payout pill */}
              <div className="animate-float-delayed absolute -bottom-5 -left-3 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-teal-200/90 bg-white/95 px-3.5 py-2 shadow-lg shadow-teal-500/10 backdrop-blur-md hover:scale-105 hover:border-teal-300 transition-all duration-300 cursor-default">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-50 text-[#12B5A5] font-bold text-xs">₹</span>
                <span className="text-xs font-bold text-slate-800">Bank File Ready (HDFC CMS)</span>
              </div>

              {/* BambooHR subtle layered card depth accent behind main card */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-teal-200/30 via-emerald-100/40 to-teal-100/20 transform rotate-1 scale-[0.99] blur-[0.5px] pointer-events-none"
              />
              {/* Soft teal glow */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-[#12B5A5]/25 via-[#8FE8DC]/20 to-transparent blur-3xl pointer-events-none" />

              <div className="attendo-card p-5 sm:p-6 shadow-xl relative overflow-hidden bg-white/98 rounded-3xl border border-teal-100/90 hover:shadow-2xl hover:border-teal-200 transition-all duration-300">
                {/* Simulator Mode Switcher Tabs */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 gap-2">
                  <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setHeroSimTab("face")}
                      className={`rounded-lg px-2.5 py-1 transition-all duration-200 ${
                        heroSimTab === "face"
                          ? "bg-white text-[#0E7A6E] font-bold shadow-xs scale-[1.02]"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      Face Kiosk
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroSimTab("geo")}
                      className={`rounded-lg px-2.5 py-1 transition-all duration-200 ${
                        heroSimTab === "geo"
                          ? "bg-white text-[#0E7A6E] font-bold shadow-xs scale-[1.02]"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      Mobile Punch
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroSimTab("payroll")}
                      className={`rounded-lg px-2.5 py-1 transition-all duration-200 ${
                        heroSimTab === "payroll"
                          ? "bg-white text-[#0E7A6E] font-bold shadow-xs scale-[1.02]"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      1-Click Payroll
                    </button>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Live Preview
                  </span>
                </div>

                {/* TAB 1: FACE KIOSK SIMULATOR */}
                {heroSimTab === "face" && (
                  <div className="mt-4 space-y-4 animate-in fade-in duration-200">
                    {/* Live Scanner Viewfinder Box */}
                    <div className="relative overflow-hidden rounded-2xl border border-teal-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-4 text-white">
                      {/* Scanning beam */}
                      <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#8FE8DC] to-transparent shadow-[0_0_12px_#12B5A5] animate-[bounce_2.5s_ease-in-out_infinite]" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[11px] font-mono text-teal-300 font-semibold tracking-wider uppercase">
                            Reception Tablet 01
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">0.18s Match</span>
                      </div>

                      <div className="my-4 flex items-center justify-center">
                        <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                          simPunchState === "matched"
                            ? "border-emerald-400 bg-emerald-500/20 shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                            : simPunchState === "scanning"
                            ? "border-teal-400 bg-teal-500/20 animate-pulse"
                            : "border-dashed border-teal-500/60 bg-teal-900/20"
                        }`}>
                          {simPunchState === "matched" ? (
                            <CheckCircle2 className="h-10 w-10 text-emerald-400 animate-in zoom-in-75 duration-200" />
                          ) : (
                            <ScanFace className="h-9 w-9 text-teal-300" />
                          )}
                        </div>
                      </div>

                      {/* Status indicator line */}
                      <div className="text-center">
                        {simPunchState === "matched" ? (
                          <div className="animate-in fade-in duration-150">
                            <span className="text-xs font-bold text-emerald-300">
                              ✓ Arun Sharma (EMP-0142) · 99.8% Match
                            </span>
                            <p className="text-[10px] text-slate-300 mt-0.5">Punched IN at 09:02:14 AM</p>
                          </div>
                        ) : simPunchState === "scanning" ? (
                          <span className="text-xs font-bold text-teal-300">
                            Scanning AI facial vectors...
                          </span>
                        ) : (
                          <span className="text-xs text-slate-300 font-medium">
                            Ready for contactless check-in
                          </span>
                        )}
                      </div>

                      {/* Interactive Button */}
                      <div className="mt-3 text-center">
                        <button
                          type="button"
                          onClick={triggerSimPunch}
                          disabled={simPunchState !== "idle"}
                          className="shimmer-pill w-full rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2.5 text-xs font-bold text-white shadow-md hover:from-[#0E9486] hover:to-[#0B7A6E] hover:shadow-teal-500/30 hover:scale-[1.01] active:scale-98 transition-all disabled:opacity-70 disabled:hover:scale-100"
                        >
                          {simPunchState === "matched"
                            ? "Punch Recorded!"
                            : simPunchState === "scanning"
                            ? "Scanning..."
                            : "⚡ Simulate Live Face Punch (0.18s)"}
                        </button>
                      </div>
                    </div>

                    {/* Live Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="rounded-xl border border-teal-100 bg-[#F0FDFB] p-2.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:border-teal-200 cursor-default">
                        <span className="text-[11px] text-slate-500 font-medium">Present</span>
                        <div className="font-display text-xl font-extrabold text-[#12B5A5]">
                          {presentCount}
                        </div>
                      </div>
                      <div className="rounded-xl border border-amber-100/80 bg-amber-50/50 p-2.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:border-amber-200 cursor-default">
                        <span className="text-[11px] text-slate-500 font-medium">Late In</span>
                        <div className="font-display text-xl font-extrabold text-amber-600">
                          4
                        </div>
                      </div>
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:border-slate-200 cursor-default">
                        <span className="text-[11px] text-slate-500 font-medium">On Leave</span>
                        <div className="font-display text-xl font-extrabold text-slate-700">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: MOBILE GEO-PUNCH SIMULATOR */}
                {heroSimTab === "geo" && (
                  <div className="mt-4 space-y-3.5 animate-in fade-in duration-200">
                    <div className="rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50/80 via-white to-emerald-50/60 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Smartphone className="h-4 w-4 text-[#12B5A5]" />
                          Staff Mobile App Punch
                        </span>
                        <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                          Within Fence
                        </span>
                      </div>
                      <div className="mt-3 space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-500">Target Geofence:</span>
                          <span className="font-semibold text-slate-800">Head Office Campus (50m radius)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-500">Live GPS Accuracy:</span>
                          <span className="font-mono font-bold text-emerald-600">3.2m · Accurate</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-slate-500">Selfie Anti-Spoof:</span>
                          <span className="font-semibold text-teal-700">Liveness Verified (Pass)</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-center text-xs text-slate-600">
                      📱 Staff check in via any Android/iOS browser with instant OTP.
                    </div>
                  </div>
                )}

                {/* TAB 3: 1-CLICK PAYROLL RUN */}
                {heroSimTab === "payroll" && (
                  <div className="mt-4 space-y-3.5 animate-in fade-in duration-200">
                    <div className="rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50/80 via-white to-emerald-50/60 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Receipt className="h-4 w-4 text-[#12B5A5]" />
                          October 2026 Salary Run
                        </span>
                        <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                          148 Staff Ready
                        </span>
                      </div>
                      <div className="mt-3 space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-500">Gross Earnings:</span>
                          <span className="font-mono font-bold text-slate-900">₹69,82,400</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-500">Statutory Deductions (PF/ESI/PT):</span>
                          <span className="font-mono text-rose-600">-₹5,53,950</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-slate-700 font-semibold">Net Payout:</span>
                          <span className="font-mono font-black text-teal-700 text-sm">₹64,28,450</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/payroll"
                      className="shimmer-pill block text-center rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2.5 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] hover:shadow-teal-500/25 hover:scale-[1.01] active:scale-98 transition-all"
                    >
                      Export HDFC CMS Direct Transfer File →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIVE MARQUEE TICKER (AttendoHR Style Animation) */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden border-y border-teal-100/80 bg-gradient-to-r from-teal-50/50 via-white to-emerald-50/50 py-3.5 shadow-xs">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-bold text-slate-700">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            150+ Indian Organisations Active
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            <ScanFace className="h-4 w-4 text-[#12B5A5]" />
            0.18s AI Face Match Speed
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            🏦 1-Click Bank Payouts: HDFC CMS, ICICI, SBI, Axis
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            🛡️ 100% PF, ESIC, PT & TDS Compliant
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            📱 WhatsApp Payslip Delivery in 1 Click
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            📍 GPS Geofenced Mobile Punch with Anti-Spoof
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            ⚡ Zero Biometric Machine Maintenance
          </span>
          <span className="text-teal-300">•</span>

          {/* Seamless duplicate for continuous loop */}
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            150+ Indian Organisations Active
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            <ScanFace className="h-4 w-4 text-[#12B5A5]" />
            0.18s AI Face Match Speed
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            🏦 1-Click Bank Payouts: HDFC CMS, ICICI, SBI, Axis
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            🛡️ 100% PF, ESIC, PT & TDS Compliant
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            📱 WhatsApp Payslip Delivery in 1 Click
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            📍 GPS Geofenced Mobile Punch with Anti-Spoof
          </span>
          <span className="text-teal-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            ⚡ Zero Biometric Machine Maintenance
          </span>
          <span className="text-teal-300">•</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. STATUTORY STRIP */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/70 bg-gradient-to-r from-white via-[#F0FDFB] to-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="attendo-card attendo-card-hover group flex items-start gap-3.5 p-4 bg-white">
              <div className="attendo-icon-box h-11 w-11 shrink-0">
                <Receipt className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 text-hover-lux">Indian Payroll</h4>
                <p className="text-xs text-slate-500 mt-0.5">PF, ESI, Professional Tax, TDS</p>
              </div>
            </div>

            <div className="attendo-card attendo-card-hover group flex items-start gap-3.5 p-4 bg-white">
              <div className="attendo-icon-box h-11 w-11 shrink-0">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 text-hover-lux">Universal Access</h4>
                <p className="text-xs text-slate-500 mt-0.5">Works on any phone, tablet or laptop</p>
              </div>
            </div>

            <div className="attendo-card attendo-card-hover group flex items-start gap-3.5 p-4 bg-white">
              <div className="attendo-icon-box h-11 w-11 shrink-0">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 text-hover-lux">Isolated Data</h4>
                <p className="text-xs text-slate-500 mt-0.5">Each organisation kept completely separate</p>
              </div>
            </div>

            <div className="attendo-card attendo-card-hover group flex items-start gap-3.5 p-4 bg-white">
              <div className="attendo-icon-box h-11 w-11 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 text-hover-lux">Audit Logged</h4>
                <p className="text-xs text-slate-500 mt-0.5">Every punch, edit and approval tracked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. THE PROBLEMS WE REMOVE */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Why Switch to PayroleHR
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
            The problems HR teams tell us about
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            If any of these sound familiar, they are exactly what PayroleHR is built to remove.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Registers and Excel",
              text: "Attendance in a physical book, salaries in an Excel sheet, and days spent typing and adding them up every month.",
            },
            {
              title: "Payroll mistakes",
              text: "One broken Excel formula or a missed leave day discovered only after salaries have already been transferred.",
            },
            {
              title: "Rules applied unevenly",
              text: "Late marks, half days, grace minutes and overtime decided differently by different supervisors each time.",
            },
            {
              title: "Endless staff questions",
              text: '"How much leave do I have left?" "Where is my salary slip?" — answering the same questions every single week.',
            },
            {
              title: "Typing bank files",
              text: "Manually copying hundreds of account numbers and net pay amounts into your bank portal's bulk transfer template.",
            },
            {
              title: "Software that doesn't fit",
              text: "Rigid software that forces standard corporate structures onto schools, factories, hospitals and local businesses.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="attendo-card attendo-card-hover group p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-200/80 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <XCircle className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 text-hover-lux group-hover:text-rose-600">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FROM PUNCH TO PAYSLIP, FULLY AUTOMATED (AttendoHR Process Flow) */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/90 bg-gradient-to-b from-[#F0FDFB]/80 via-white to-white p-8 sm:p-14 shadow-card">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              From Punch To Payslip,{" "}
              <span className="bg-gradient-to-r from-[#12B5A5] to-[#0E9486] bg-clip-text text-transparent block sm:inline">
                Fully Automated
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-600 font-medium">
              Five simple steps. Zero manual efforts.
            </p>
          </div>

          <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 relative">
            {[
              {
                num: "01",
                title: "Punch",
                desc: "Finger or face scan",
                icon: Fingerprint,
              },
              {
                num: "02",
                title: "Sync",
                desc: "Data reaches the Cloud",
                icon: CloudUpload,
              },
              {
                num: "03",
                title: "Process",
                desc: "Attendance, Shifts, Leaves applied",
                icon: Settings2,
              },
              {
                num: "04",
                title: "Calculate",
                desc: "Salary computed daily",
                icon: Calculator,
              },
              {
                num: "05",
                title: "Deliver",
                desc: "Payslip on Employee App",
                icon: Send,
              },
            ].map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="flex flex-col items-center text-center group cursor-default">
                  <div className="attendo-flow-circle">
                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#12B5A5] text-[10px] font-black text-white shadow-sm border-2 border-white group-hover:scale-110 group-hover:bg-[#0E9486] transition-all">
                      {step.num}
                    </span>
                    <step.icon className="flow-icon h-10 w-10 stroke-[2]" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-extrabold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 max-w-[130px] leading-snug">
                    {step.desc}
                  </p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:flex items-center justify-center text-teal-300 -mt-8">
                    <ArrowRight className="h-5 w-5 animate-[pulse_2s_ease-in-out_infinite]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. COMPLETE PRODUCT SUITE - 5-PART ALTERNATING ATTENDOHR SHOWCASE */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200/70 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0E9486] shadow-2xs">
            <Sparkles className="h-3 w-3 text-[#12B5A5]" /> Complete Product Suite
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Everything Your Payroll Needs
            <br />
            <span className="animate-hero-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#12B5A5] via-[#2DD4BF] to-[#0E9486]">
              In One Place
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            Five tightly integrated modules designed for Indian businesses — connecting daily attendance check-ins directly to compliant month-end salary payout files.
          </p>
        </div>

        {/* 5 Alternating Feature Sections (Matching AttendoHR Showcase Design) */}
        <div className="mt-16 space-y-20 sm:space-y-28">
          {/* ========================================================== */}
          {/* 1. ATTENDANCE MANAGEMENT (Left Mockup, Right Content) */}
          {/* ========================================================== */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Mockup Card */}
            <div className="relative group max-w-md mx-auto lg:mx-0 w-full">
              {/* Soft Ambient Backdrop Panel */}
              <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl bg-[#EAF5FE] ambient-backdrop-animated" />
              
              <div className="card-sheen-sweep overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_50px_-8px_rgba(0,0,0,0.14)]">
                {/* Pastel Sky Header */}
                <div className="bg-[#BAE6FD] px-5 py-3.5 border-b border-sky-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-bold text-slate-900">
                      Live Attendance Punch Stream
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-white/70 px-2.5 py-0.5 rounded-full border border-emerald-200/50">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Gate 01 Biometric
                  </span>
                </div>
                {/* Table */}
                <div className="p-4 sm:p-5">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 text-left font-bold text-slate-900">
                        <th className="pb-3">Employee</th>
                        <th className="pb-3">Punch Time</th>
                        <th className="pb-3 text-right">Verification & Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                      <tr className="hover:bg-teal-50/40 transition-colors">
                        <td className="py-3 font-semibold text-slate-800 flex items-center gap-2">
                          <span className="h-6 w-6 rounded-full bg-teal-100 text-[#0E7A6E] flex items-center justify-center text-[10px] font-bold">AM</span>
                          Aarav Mehta
                        </td>
                        <td className="py-3 font-mono text-slate-700">09:12 AM</td>
                        <td className="py-3 text-right">
                          <span className="inline-flex rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200/60">
                            Face Kiosk • On time
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50/40 transition-colors">
                        <td className="py-3 font-semibold text-slate-800 flex items-center gap-2">
                          <span className="h-6 w-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-[10px] font-bold">KN</span>
                          Kavita Nair
                        </td>
                        <td className="py-3 font-mono text-slate-700">09:31 AM</td>
                        <td className="py-3 text-right">
                          <span className="inline-flex rounded-md bg-rose-50 px-2 py-0.5 text-xs font-bold text-[#881337] border border-rose-200/60">
                            GPS Mobile • 16m late
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50/40 transition-colors">
                        <td className="py-3 font-semibold text-slate-800 flex items-center gap-2">
                          <span className="h-6 w-6 rounded-full bg-teal-100 text-[#0E7A6E] flex items-center justify-center text-[10px] font-bold">DR</span>
                          Devendra Rao
                        </td>
                        <td className="py-3 font-mono text-slate-700">08:58 AM</td>
                        <td className="py-3 text-right">
                          <span className="inline-flex rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200/60">
                            Biometric • On time
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50/40 transition-colors">
                        <td className="py-3 font-semibold text-slate-800 flex items-center gap-2">
                          <span className="h-6 w-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-[10px] font-bold">SK</span>
                          Simran Kaur
                        </td>
                        <td className="py-3 font-mono text-slate-700">09:05 AM</td>
                        <td className="py-3 text-right">
                          <span className="inline-flex rounded-md bg-rose-50 px-2 py-0.5 text-xs font-bold text-[#881337] border border-rose-200/60">
                            Selfie Punch • 05m late
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Attendance Management
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Capture employee attendance seamlessly through{" "}
                <Link
                  href="/features/face-attendance"
                  className="font-semibold text-[#12B5A5] underline decoration-[#12B5A5]/40 hover:text-[#0E7A6E] transition-colors"
                >
                  biometric devices that sync to the cloud
                </Link>{" "}
                in real time. The verified punch data flows straight into shifts, late grace periods, overtime, and monthly salary computations — eliminating manual register tallying.
              </p>
              <div className="mt-6">
                <Link
                  href="/features/attendance-management"
                  className="group inline-flex items-center gap-1.5 font-bold text-[#12B5A5] hover:text-[#0E7A6E] text-base transition-colors"
                >
                  <span className="text-hover-lux">Explore Time & Attendance</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* 2. LEAVE MANAGEMENT (Left Content, Right Stacked Mockup) */}
          {/* ========================================================== */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Leave Management
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Approve or reject leave requests from a single intuitive dashboard while employees apply on-the-go via the mobile portal. Balances update automatically with custom sandwich rules, encashment, and deductions reflected in the same month’s pay.
              </p>
              <div className="mt-6">
                <Link
                  href="/features/leave-management"
                  className="group inline-flex items-center gap-1.5 font-bold text-[#12B5A5] hover:text-[#0E7A6E] text-base transition-colors"
                >
                  <span className="text-hover-lux">Explore Leave & Holidays</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            {/* Right Stacked Mockup Cards */}
            <div className="relative group max-w-md sm:max-w-lg mx-auto lg:mx-0 w-full order-1 lg:order-2">
              {/* Soft Ambient Backdrop Panel */}
              <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl bg-[#EAF5FE] ambient-backdrop-animated" />
              
              {/* Floating 3D Calendar Badge */}
              <div className="absolute -top-6 right-2 sm:right-6 z-30 animate-badge-float pointer-events-none">
                <Calendar3DBadge />
              </div>

              {/* Back Card: Leave Applications Queue */}
              <div className="w-[90%] sm:w-[84%] card-sheen-sweep overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:-translate-y-1">
                <div className="bg-[#FDE2E4] px-4 py-2.5 border-b border-rose-200/60 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>Leave Applications Queue</span>
                  <span className="text-[10px] font-semibold text-rose-800 bg-white/70 px-2 py-0.5 rounded-full">
                    Pending Review
                  </span>
                </div>
                <div className="p-3.5">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-left font-bold text-slate-900">
                        <th className="pb-2">Staff Member</th>
                        <th className="pb-2">Leave Type</th>
                        <th className="pb-2 text-right">Decision</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                      {[
                        { id: "vikram", name: "Vikram Singhania", type: "Casual Leave (2d)" },
                        { id: "pooja", name: "Pooja Hegde", type: "Privilege Leave (3d)" },
                        { id: "manish", name: "Manish Tiwari", type: "Sick Leave (1d)" },
                      ].map((item) => (
                        <tr key={item.id} className="hover:bg-teal-50/40 transition-colors">
                          <td className="py-2 font-semibold text-slate-800">{item.name}</td>
                          <td className="py-2">{item.type}</td>
                          <td className="py-2 text-right">
                            {leaveApprovals[item.id] === "approved" ? (
                              <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                                Approved ✓
                              </span>
                            ) : leaveApprovals[item.id] === "rejected" ? (
                              <span className="inline-flex items-center gap-1 rounded bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-700 border border-rose-200">
                                Rejected ✕
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 text-xs">
                                <button
                                  type="button"
                                  onClick={() => setLeaveApprovals((prev) => ({ ...prev, [item.id]: "rejected" }))}
                                  className="interactive-action-btn inline-flex items-center justify-center w-5 h-5 rounded border border-rose-200 text-rose-500 font-bold hover:bg-rose-500 hover:text-white transition-colors"
                                  title="Reject"
                                >
                                  ✕
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setLeaveApprovals((prev) => ({ ...prev, [item.id]: "approved" }))}
                                  className="interactive-action-btn inline-flex items-center justify-center w-5 h-5 rounded border border-emerald-200 text-emerald-600 font-bold hover:bg-emerald-600 hover:text-white transition-colors"
                                  title="Approve"
                                >
                                  ✓
                                </button>
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Front Overlapping Card: Employee Leave Ledger */}
              <div className="w-[90%] sm:w-[86%] -mt-10 sm:-mt-14 ml-auto relative z-20 card-sheen-sweep overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_50px_-8px_rgba(0,0,0,0.16)]">
                <div className="bg-[#FEF3C7] px-4 py-2.5 border-b border-amber-200/60 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>Employee Leave Ledger</span>
                  <span className="text-[10px] font-semibold text-amber-900 bg-white/70 px-2 py-0.5 rounded-md">
                    FY 2026-27 Quota
                  </span>
                </div>
                <div className="p-3.5">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-left font-bold text-slate-900">
                        <th className="pb-2">Employee</th>
                        <th className="pb-2 text-center">Allotted</th>
                        <th className="pb-2 text-center">Taken</th>
                        <th className="pb-2 text-right">Available</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Vikram Singhania</td>
                        <td className="py-2 text-center font-mono">24</td>
                        <td className="py-2 text-center text-rose-600 font-mono font-medium">-5</td>
                        <td className="py-2 text-right font-bold text-slate-900 font-mono">19 Days</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Pooja Hegde</td>
                        <td className="py-2 text-center font-mono">21</td>
                        <td className="py-2 text-center text-rose-600 font-mono font-medium">-3</td>
                        <td className="py-2 text-right font-bold text-slate-900 font-mono">18 Days</td>
                      </tr>
                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Manish Tiwari</td>
                        <td className="py-2 text-center font-mono">18</td>
                        <td className="py-2 text-center text-rose-600 font-mono font-medium">-4</td>
                        <td className="py-2 text-right font-bold text-slate-900 font-mono">14 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* 3. SALARY MANAGEMENT (Left Mockup, Right Content) */}
          {/* ========================================================== */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Stacked Mockup Cards */}
            <div className="relative group max-w-md sm:max-w-lg mx-auto lg:mx-0 w-full">
              {/* Soft Ambient Backdrop Panel */}
              <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl bg-[#EAF5FE] ambient-backdrop-animated" />

              {/* Floating 3D Gold Rupee Coin Badge */}
              <div className="absolute top-4 -left-4 sm:-left-7 z-30 animate-badge-float pointer-events-none">
                <Coin3DBadge />
              </div>

              {/* Back Card: Monthly Salary Computation */}
              <div className="w-[90%] sm:w-[86%] ml-auto card-sheen-sweep overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:-translate-y-1">
                <div className="bg-[#D1FAE5] px-4 py-2.5 border-b border-emerald-200/60 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>Monthly Salary Computation</span>
                  <span className="text-[10px] font-semibold text-emerald-800 bg-white/70 px-2 py-0.5 rounded-md">
                    Net Payout Ready
                  </span>
                </div>
                <div className="p-3.5">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-left font-bold text-slate-900">
                        <th className="pb-2">Employee</th>
                        <th className="pb-2">Basic CTC</th>
                        <th className="pb-2">Allowances / OT</th>
                        <th className="pb-2 text-right">Net Salary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                      <tr className="hover:bg-emerald-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Sunil Chawla</td>
                        <td className="py-2 font-mono">₹38,000</td>
                        <td className="py-2 text-emerald-600 font-semibold font-mono">+₹2,100 OT</td>
                        <td className="py-2 text-right font-bold text-slate-900 font-mono">₹36,450</td>
                      </tr>
                      <tr className="hover:bg-emerald-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Deepika Sen</td>
                        <td className="py-2 font-mono">₹52,000</td>
                        <td className="py-2 text-emerald-600 font-semibold font-mono">+₹3,200 Inc.</td>
                        <td className="py-2 text-right font-bold text-slate-900 font-mono">₹48,900</td>
                      </tr>
                      <tr className="hover:bg-emerald-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Gaurav Joshi</td>
                        <td className="py-2 font-mono">₹65,000</td>
                        <td className="py-2 text-emerald-600 font-semibold font-mono">+₹4,000 Var.</td>
                        <td className="py-2 text-right font-bold text-slate-900 font-mono">₹61,200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Front Overlapping Card: Indian Statutory Auto-Deductions */}
              <div className="w-[88%] sm:w-[82%] -mt-10 sm:-mt-14 mr-auto relative z-20 card-sheen-sweep overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_50px_-8px_rgba(0,0,0,0.16)]">
                <div className="bg-[#FDE2E4] px-4 py-2.5 border-b border-rose-200/60 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>Indian Statutory Auto-Deductions</span>
                  <span className="text-[10px] font-semibold text-rose-800 bg-white/70 px-2 py-0.5 rounded-md">
                    100% Indian Rules
                  </span>
                </div>
                <div className="p-3.5 sm:p-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="statutory-pill p-2 sm:p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/70 font-semibold text-slate-800 text-center shadow-2xs cursor-default">
                    Employees' PF (EPF 12%)
                  </div>
                  <div className="statutory-pill p-2 sm:p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/70 font-semibold text-slate-800 text-center shadow-2xs cursor-default">
                    ESIC Insurance (0.75%)
                  </div>
                  <div className="statutory-pill p-2 sm:p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/70 font-semibold text-slate-800 text-center shadow-2xs cursor-default">
                    Professional Tax (PT Slabs)
                  </div>
                  <div className="statutory-pill p-2 sm:p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/70 font-semibold text-slate-800 text-center shadow-2xs cursor-default">
                    Labour Welfare Fund (LWF)
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Salary Management
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Calculate salaries accurately as attendance and leave data come in. Apply PF, ESIC, PT, LWF, and custom allowances automatically without manual formulas. Release approved payslips and generate CMS bank files in one click.
              </p>
              <div className="mt-6">
                <Link
                  href="/features/salary-structure-management"
                  className="group inline-flex items-center gap-1.5 font-bold text-[#12B5A5] hover:text-[#0E7A6E] text-base transition-colors"
                >
                  <span className="text-hover-lux">Explore Payroll & Payout</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* 4. SHIFT MANAGEMENT (Left Content, Right Stacked Mockup) */}
          {/* ========================================================== */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Shift Management
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Build shifts that match how your business actually runs. Assign by role, department, or branch location. Handle overnight, split, and rotational schedules smoothly without the spreadsheet hassle.
              </p>
              <div className="mt-6">
                <Link
                  href="/features/shift-management"
                  className="group inline-flex items-center gap-1.5 font-bold text-[#12B5A5] hover:text-[#0E7A6E] text-base transition-colors"
                >
                  <span className="text-hover-lux">Explore Shifts & Roster</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            {/* Right Stacked Mockup Cards */}
            <div className="relative group max-w-md sm:max-w-lg mx-auto lg:mx-0 w-full order-1 lg:order-2">
              {/* Soft Ambient Backdrop Panel */}
              <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl bg-[#EAF5FE] ambient-backdrop-animated" />

              {/* Floating 3D Clock Badge */}
              <div className="absolute -top-6 right-2 sm:right-6 z-30 animate-badge-float-delayed pointer-events-none">
                <Clock3DBadge />
              </div>

              {/* Back Card: Roster Schedule Planner */}
              <div className="w-[90%] sm:w-[84%] card-sheen-sweep overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:-translate-y-1">
                <div className="bg-[#FEF3C7] px-4 py-2.5 border-b border-amber-200/60 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>Roster Schedule Planner</span>
                  <span className="text-[10px] font-semibold text-amber-900 bg-white/70 px-2 py-0.5 rounded-md">
                    Weekly Schedule
                  </span>
                </div>
                <div className="p-3.5">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-left font-bold text-slate-900">
                        <th className="pb-2">Staff Member</th>
                        <th className="pb-2">Shift Timing</th>
                        <th className="pb-2 text-right">Roster Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Karan Kashyap</td>
                        <td className="py-2 font-medium">Shift A (07:00 – 15:30)</td>
                        <td className="py-2 text-right">
                          <span className="inline-flex rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200/60">
                            Scheduled
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Swati Deshmukh</td>
                        <td className="py-2 font-medium">General (09:30 – 18:30)</td>
                        <td className="py-2 text-right">
                          <span className="inline-flex rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200/60">
                            Scheduled
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Nikhil Bansal</td>
                        <td className="py-2 font-medium">Night (21:30 – 06:00)</td>
                        <td className="py-2 text-right">
                          <span className="inline-flex rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200/60">
                            Scheduled
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Front Overlapping Card: Department Shift Allocation (Replacing 'Shift Details'!) */}
              <div className="w-[92%] sm:w-[88%] -mt-10 sm:-mt-14 ml-auto relative z-20 card-sheen-sweep overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_50px_-8px_rgba(0,0,0,0.16)]">
                <div className="bg-[#D1FAE5] px-4 py-2.5 border-b border-emerald-200/60 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>Department Shift Allocation</span>
                  <span className="text-[10px] font-semibold text-emerald-900 bg-white/70 px-2 py-0.5 rounded-md">
                    Auto-Mapped
                  </span>
                </div>
                <div className="p-3.5">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-left font-bold text-slate-900">
                        <th className="pb-2">Employee</th>
                        <th className="pb-2">Department</th>
                        <th className="pb-2">Designation</th>
                        <th className="pb-2 text-right">Roster</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                      <tr className="hover:bg-emerald-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Karan Kashyap</td>
                        <td className="py-2 text-slate-600">Quality Control</td>
                        <td className="py-2 text-slate-600">QC Supervisor</td>
                        <td className="py-2 text-right font-bold text-slate-900">Shift A</td>
                      </tr>
                      <tr className="hover:bg-emerald-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Swati Deshmukh</td>
                        <td className="py-2 text-slate-600">Engineering</td>
                        <td className="py-2 text-slate-600">Lead Developer</td>
                        <td className="py-2 text-right font-bold text-slate-900">General</td>
                      </tr>
                      <tr className="hover:bg-emerald-50/40 transition-colors">
                        <td className="py-2 font-semibold text-slate-800">Nikhil Bansal</td>
                        <td className="py-2 text-slate-600">Supply & Logistics</td>
                        <td className="py-2 text-slate-600">Warehouse Lead</td>
                        <td className="py-2 text-right font-bold text-slate-900">Night</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* 5. WHATSAPP ALERTS (Left Mockup, Right Content) */}
          {/* ========================================================== */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Stacked Mockup Cards */}
            <div className="relative group max-w-md sm:max-w-lg mx-auto lg:mx-0 w-full">
              {/* Soft Ambient Backdrop Panel */}
              <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl bg-[#EAF5FE] ambient-backdrop-animated" />

              {/* Floating 3D WhatsApp Badge */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 z-30 animate-badge-float pointer-events-none">
                <WhatsApp3DBadge />
              </div>

              {/* Back Card: WhatsApp Daily Digest */}
              <div className="w-[88%] sm:w-[82%] card-sheen-sweep overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:-translate-y-1">
                <div className="bg-[#D1FAE5] px-4 py-2.5 border-b border-emerald-200/60 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>WhatsApp Daily Digest</span>
                  <span className="text-[10px] font-semibold text-emerald-800 bg-white/70 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Automated 10:00 AM
                  </span>
                </div>
                <div className="p-4 space-y-2 text-xs">
                  <div className="pb-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-slate-900">Daily Morning Punch Summary</span>
                    <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 font-semibold">Synced</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Organization :</span>
                    <span className="font-semibold text-slate-800">PayroleHR Tech Park Campus</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Active Workforce:</span>
                    <span className="font-bold text-[#12B5A5]">240 Registered Staff</span>
                  </div>
                </div>
              </div>

              {/* Front Overlapping Card: Headcount & Attendance Report */}
              <div className="w-[84%] sm:w-[78%] -mt-12 sm:-mt-16 ml-auto relative z-20 card-sheen-sweep overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_50px_-8px_rgba(0,0,0,0.16)]">
                <div className="bg-[#FDE2E4] px-4 py-2.5 border-b border-rose-200/60 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>Headcount & Attendance Report</span>
                  <span className="text-[10px] font-semibold text-rose-800 bg-white/70 px-2 py-0.5 rounded-md">
                    Live Today
                  </span>
                </div>
                <div className="p-3.5 divide-y divide-slate-100 text-xs">
                  <div className="flex justify-between py-1.5 hover:bg-rose-50/30 transition-colors">
                    <span className="text-slate-600 font-medium">On-Time Present:</span>
                    <span className="font-bold text-slate-900 font-mono">212 Employees</span>
                  </div>
                  <div className="flex justify-between py-1.5 hover:bg-rose-50/30 transition-colors">
                    <span className="text-slate-600 font-medium">Late Arrivals (&lt;30m):</span>
                    <span className="font-bold text-rose-600 font-mono">16 Employees</span>
                  </div>
                  <div className="flex justify-between py-1.5 hover:bg-rose-50/30 transition-colors">
                    <span className="text-slate-600 font-medium">On-Field / Client Visits:</span>
                    <span className="font-bold text-emerald-600 font-mono">6 Staff</span>
                  </div>
                  <div className="flex justify-between py-1.5 hover:bg-rose-50/30 transition-colors">
                    <span className="text-slate-600 font-medium">Approved Paid Leave:</span>
                    <span className="font-bold text-amber-600 font-mono">4 Staff</span>
                  </div>
                  <div className="flex justify-between py-1.5 hover:bg-rose-50/30 transition-colors">
                    <span className="text-slate-600 font-medium">Unplanned Absence:</span>
                    <span className="font-bold text-slate-700 font-mono">2 Staff</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                WhatsApp Alerts
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Get automated daily attendance summaries and staff punch updates delivered straight to directors, managers, and team leads on WhatsApp. Skip the endless phone follow-ups and manual report spreadsheets.
              </p>
              <div className="mt-6">
                <Link
                  href="/features/employee-self-service"
                  className="group inline-flex items-center gap-1.5 font-bold text-[#12B5A5] hover:text-[#0E7A6E] text-base transition-colors"
                >
                  <span className="text-hover-lux">Explore WhatsApp Updates</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CONFIGURABLE RULES */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/80 bg-white p-8 sm:p-12 shadow-card">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Built For Flexibility
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950">
              Set up the way your organisation already works
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              No two organisations calculate salaries or track late marks identically. We turn your handbook rules into software settings.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Custom salary columns",
                desc: "Define your own earnings and deductions: allowances, arrears, performance incentives and loan recoveries.",
              },
              {
                title: "Grace time & shifts",
                desc: "Configure 15, 30 or custom grace minutes, multiple shifts, rotational rosters and half-day thresholds.",
              },
              {
                title: "Leave accrual rules",
                desc: "Set monthly accrual rates, opening balances, carry-forward caps and sandwich leave policies.",
              },
              {
                title: "Multi-stage approvals",
                desc: "Department head approval -> HR verification -> Accounts sign-off before payroll is locked.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="attendo-card attendo-card-hover group p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="attendo-icon-box h-11 w-11 shrink-0 mb-4">
                    <CheckCircle2 className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base text-hover-lux">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. INDUSTRY SOLUTIONS GRID */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Tailored Industry Workflows
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Built for many kinds of organisations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Different industries have different shift patterns and payroll regulations. See how PayroleHR configures for yours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionsData.map((sol: any) => (
            <Link
              key={sol.slug}
              href={`/solutions/${sol.slug}`}
              className="attendo-card attendo-card-hover group p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="attendo-icon-box h-12 w-12 shrink-0">
                  <FeatureIcon slug={sol.slug} className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 text-hover-lux">
                  {sol.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {sol.short}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5] group-hover:text-[#0E7A6E] transition-colors">
                <span className="text-hover-lux font-bold">Explore solution</span>
                <ArrowRight className="h-4 w-4 arrow-hover-lux" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. TWO EXPERIENCES */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-teal-100/90 bg-gradient-to-r from-white via-[#F0FDFB] to-white p-8 sm:p-12 shadow-card">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">
              User-Centric Architecture
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950">
              One system, two experiences
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Experience 1: Admin */}
            <div className="attendo-card attendo-card-hover group p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                  <div className="attendo-icon-box h-12 w-12 shrink-0">
                    <Building className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 text-hover-lux">
                      For HR, Accounts and Management
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Full administrative control</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Bulk import employees from Excel with error checks</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Lock attendance and run payroll in under five minutes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Generate bank salary transfer files in your bank&apos;s format</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Complete audit log of every change, revision and sign-off</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2: Employee */}
            <div className="attendo-card attendo-card-hover group p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                  <div className="attendo-icon-box h-12 w-12 shrink-0">
                    <Smartphone className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 text-hover-lux">
                      For Employees & Staff
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Mobile-first self-service portal</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Instant sign-in with mobile OTP — no passwords to remember</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Face check-in from their own phones with geofencing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Download salary payslips and view live leave balances</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#12B5A5] shrink-0" />
                    <span>Submit leave applications and regularisation requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. CONTROL AND SECURITY */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Enterprise Governance
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Control over who sees what
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Keep sensitive salary data confidential with granular roles and strict privacy boundaries.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Separate organisations",
              desc: "Manage multiple entities, schools or branches with strictly isolated data.",
            },
            {
              title: "Roles and permissions",
              desc: "Assign custom roles. Department heads see only their department's staff.",
            },
            {
              title: "Full audit log",
              desc: "Every record edit, salary modification, punch update and export is timestamped.",
            },
            {
              title: "Private files",
              desc: "Staff documents and payslips are stored securely with encrypted access tokens.",
            },
            {
              title: "PIN-protected face enrolment",
              desc: "Adding new staff face profiles requires administrative authorization.",
            },
            {
              title: "OTP sign-in for staff",
              desc: "One-time mobile passcode eliminates shared credentials and phishing risks.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="attendo-card attendo-card-hover group p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="attendo-icon-box h-12 w-12 shrink-0">
                  <ShieldCheck className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-slate-900 text-hover-lux">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. FREE CALCULATORS SHOWCASE */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Free Utility Suite
            </span>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-slate-950">
              Free HR & payroll calculators
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Instant tools with transparent formulas. Use them freely, with no sign-up.
            </p>
          </div>
          <Link
            href="/free-tools"
            className="text-sm font-bold text-[#12B5A5] hover:underline flex items-center gap-1 shrink-0"
          >
            All 9 calculators →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {toolsData.slice(0, 6).map((tool: any) => (
            <Link
              key={tool.slug}
              href={`/free-tools/${tool.slug}`}
              className="rounded-3xl border border-[#8FE8DC]/80 bg-white p-7 shadow-sm hover:shadow-xl hover:border-[#12B5A5] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FAF7] border border-[#8FE8DC]/60 text-[#12B5A5]">
                    <FeatureIcon slug={tool.slug} className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <span className="rounded-full bg-[#E8FAF7] border border-[#8FE8DC] px-3.5 py-1 text-xs font-semibold text-[#0E7A6E]">
                    {tool.category}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-[#0E7A6E] group-hover:text-[#12B5A5] transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {tool.short}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E7A6E] group-hover:text-[#12B5A5] transition-colors">
                <span>Open calculator</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FAQ ACCORDION */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
            Answers to Common Queries
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {homepageFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#12B5A5] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 text-[#12B5A5] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-sm font-semibold text-[#12B5A5] hover:underline"
          >
            Have more questions? Read our full FAQ page →
          </Link>
        </div>
      </section>
    </div>
  );
}
