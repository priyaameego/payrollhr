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
  MapPin,
  Laptop,
  Check,
  TrendingUp,
} from "lucide-react";
import { productGroups, groupMeta, contactDetails } from "@/data/navigation";
import { FeatureIcon } from "@/components/IconHelper";
import featuresData from "@/data/features.json";
import solutionsData from "@/data/solutions.json";
import toolsData from "@/data/tools.json";
import DemoForm from "@/components/DemoForm";

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
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#F0F6FE]/90 via-[#F8FBFE]/60 to-transparent">
        {/* Soft background clean SaaS sky/teal gradient mesh */}
        <div
          aria-hidden="true"
          className="animate-hero-mesh absolute -top-40 left-1/2 -z-10 h-[620px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-200/30 via-teal-100/15 to-transparent blur-3xl pointer-events-none"
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_1.15fr] lg:items-center">
            {/* Left Hero Text (BambooHR + AttendoHR Clean Structure) */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-teal-50/70 px-4 py-1.5 text-xs font-bold text-[#0E7A6E] shadow-2xs hover:border-teal-300 hover:shadow-xs transition-all duration-300 cursor-default animate-fade-up">
                <Sparkles className="h-3.5 w-3.5 text-[#12B5A5] animate-pulse" />
                <span>HR, Payroll & Face Attendance</span>
              </div>

              <h1 className="mt-4 sm:mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[54px] leading-[1.12]">
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

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:500ms]">
                Simplify attendance, leaves, shift rostering, and statutory payroll with one award-winning platform built for Indian organisations.
              </p>

              {/* 3 Green Checkmark Benefit List (BambooHR Signature Pattern) */}
              <div className="mt-5 space-y-2.5 text-left max-w-lg mx-auto lg:mx-0 animate-fade-up [animation-delay:520ms]">
                <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xs">
                    <CheckCircle2 className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span>Contactless Face & Mobile GPS Attendance</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xs">
                    <CheckCircle2 className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span>Automated Leaves, Shifts & Indian Statutory Payroll</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xs">
                    <CheckCircle2 className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span>1-Click Bank CMS File (HDFC, ICICI, SBI) & WhatsApp Delivery</span>
                </div>
              </div>

              {/* CTAs (AttendoHR Premium Button Styling) */}
              <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-up [animation-delay:550ms]">
                <Link
                  href="/book-a-demo"
                  className="btn-attendo-primary group rounded-2xl px-7 py-3.5 text-sm font-bold text-white flex items-center gap-2.5 shadow-md shadow-teal-500/20"
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

              {/* Review Stars & Social Proof (AttendoHR / BambooHR Rating Bar) */}
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-700 animate-fade-up [animation-delay:650ms]">
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
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-500 border-t border-slate-200/60 pt-4 animate-fade-up [animation-delay:720ms]">
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

            {/* Right Live Interactive Mockup Hero Showcase (BambooHR Signature Layered Cards) */}
            <div className="relative py-6 lg:py-2 w-full">
              {/* Playful BambooHR 4-point sparkle stars in background */}
              <svg className="absolute -top-3 left-6 w-5 h-5 text-teal-400/70 animate-pulse pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
              <svg className="absolute top-1/2 -right-4 w-6 h-6 text-amber-300/80 animate-pulse [animation-delay:1.2s] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>

              {/* Ambient backdrop glow */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-sky-100/40 via-teal-100/25 to-blue-50/20 blur-2xl pointer-events-none" />

              {/* ======================================================== */}
              {/* MAIN CENTRAL DASHBOARD WINDOW (BambooHR Style) */}
              {/* ======================================================== */}
              <div className="relative mx-auto w-full max-w-[480px] lg:max-w-[500px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10">
                {/* Browser/Window Header Bar with Mac-style dots */}
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <div className="flex items-center gap-1 rounded-md bg-white border border-slate-200/70 px-2.5 py-0.5 text-[10px] font-mono text-slate-500">
                    <Lock className="h-2.5 w-2.5 text-teal-600" />
                    <span>payrolehr.com/app/people/EMP-0142</span>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Profile Header Banner (BambooHR Green/Teal style) */}
                <div className="bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] p-4 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 border-2 border-white text-white font-bold text-lg shadow-sm">
                        PS
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#12B5A5]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-base font-extrabold text-white">
                            Priya Sharma
                          </h3>
                          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white">
                            Active
                          </span>
                        </div>
                        <p className="text-xs text-teal-100 font-medium">
                          Lead Software Engineer • Bangalore Campus
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Sub-tabs (Personal, Job, Attendance, Time Off, Payroll) */}
                  <div className="mt-3.5 flex items-center gap-1 overflow-x-auto text-[11px] font-semibold border-t border-white/15 pt-2.5">
                    <span className="rounded-md px-2 py-0.5 text-white/70 hover:text-white cursor-pointer transition-colors">
                      Personal
                    </span>
                    <span className="rounded-md bg-white text-[#0E7A6E] px-2.5 py-0.5 font-bold shadow-xs">
                      Job Details
                    </span>
                    <span className="rounded-md px-2 py-0.5 text-white/70 hover:text-white cursor-pointer transition-colors">
                      Attendance
                    </span>
                    <span className="rounded-md px-2 py-0.5 text-white/70 hover:text-white cursor-pointer transition-colors">
                      Time Off
                    </span>
                    <span className="rounded-md px-2 py-0.5 text-white/70 hover:text-white cursor-pointer transition-colors">
                      Payroll
                    </span>
                  </div>
                </div>

                {/* Profile Job Details Content */}
                <div className="p-4 sm:p-5 text-xs">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 text-[11px] font-bold text-slate-800">
                    <span>Job Information</span>
                    <span className="font-normal text-slate-400">Effective: 01 Apr 2026</span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 pt-3 font-medium">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                        Employment Status
                      </span>
                      <span className="text-slate-800 font-semibold">Full-Time In-Office</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                        Department
                      </span>
                      <span className="text-slate-800 font-semibold">Engineering & Tech</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                        Shift Schedule
                      </span>
                      <span className="text-slate-800 font-semibold">General (09:30 – 18:30)</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                        Reporting Lead
                      </span>
                      <span className="text-slate-800 font-semibold">Anand Verma (VP Tech)</span>
                    </div>
                  </div>

                  {/* Quick Punch Status Bar */}
                  <div className="mt-4 rounded-xl bg-teal-50/70 border border-teal-100 p-2.5 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-semibold">Today's Check-In:</span>
                      <span className="font-mono font-bold text-emerald-700">09:14 AM (Gate 01)</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#0E7A6E]">On Time ✓</span>
                  </div>
                </div>
              </div>

              {/* ======================================================== */}
              {/* FLOATING CARD 1: BENEFITS & STATUTORY (Top-Right) */}
              {/* ======================================================== */}
              <div className="animate-float absolute -top-4 right-1 sm:-right-3 z-20 w-44 sm:w-50 rounded-2xl bg-white border border-indigo-100 p-3 shadow-xl shadow-indigo-900/10 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                  <span className="font-display text-[11px] font-bold text-slate-900">
                    Statutory & Benefits
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                </div>
                <div className="py-2 space-y-1.5 text-[10px]">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Medical Cover:</span>
                    <span className="font-bold text-slate-800">₹5 Lakhs Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">EPF & ESIC:</span>
                    <span className="font-bold text-emerald-600">Auto-Enrolled</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-1 text-[10px] font-bold text-white shadow-xs hover:opacity-95 transition-opacity"
                >
                  ✓ 100% Compliant
                </button>
              </div>

              {/* ======================================================== */}
              {/* FLOATING CARD 2: VACATION & LEAVES (Bottom-Left) */}
              {/* ======================================================== */}
              <div className="animate-float-delayed absolute -bottom-3 -left-2 sm:-left-5 z-20 w-52 sm:w-60 rounded-2xl bg-white border border-teal-100 p-3 shadow-xl shadow-teal-900/10 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-display text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 text-[#12B5A5]" />
                    Leave Balance
                  </span>
                  <span className="text-[9px] font-semibold text-[#0E7A6E] bg-teal-50 px-1.5 py-0.5 rounded">
                    FY 2026-27
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 py-2 text-center">
                  <div className="rounded-lg bg-emerald-50/70 p-1.5 border border-emerald-100">
                    <span className="text-[9px] text-slate-500 block font-medium">Vacation</span>
                    <span className="font-display text-sm font-extrabold text-emerald-700">14.5 d</span>
                  </div>
                  <div className="rounded-lg bg-teal-50/70 p-1.5 border border-teal-100">
                    <span className="text-[9px] text-slate-500 block font-medium">Sick / Casual</span>
                    <span className="font-display text-sm font-extrabold text-[#0E7A6E]">8.0 d</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={triggerSimPunch}
                  className="w-full rounded-lg bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-1.5 text-[10px] font-bold text-white shadow-xs hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all flex items-center justify-center gap-1"
                >
                  {simPunchState === "matched" ? (
                    <span>✓ Face Punch Matched (0.18s)</span>
                  ) : simPunchState === "scanning" ? (
                    <span>Scanning Face Kiosk...</span>
                  ) : (
                    <span>⚡ Test Live Face Punch (0.18s)</span>
                  )}
                </button>
              </div>

              {/* ======================================================== */}
              {/* FLOATING CARD 3: START PAYROLL (Bottom-Right with Arrow) */}
              {/* ======================================================== */}
              <div className="animate-float absolute -bottom-3 -right-2 sm:-right-5 z-20 w-48 sm:w-56 rounded-2xl bg-white border border-emerald-100 p-3 shadow-xl shadow-emerald-900/10 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <Link
                  href="/payroll"
                  className="block w-full text-center rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-2 text-[11px] font-extrabold text-white shadow-md shadow-teal-500/20 hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
                >
                  ⚡ Start 1-Click Payroll
                </Link>

                <div className="mt-2.5 space-y-1 text-[10px]">
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-slate-500">Employees:</span>
                    <span className="font-bold text-slate-800">148 / 148 Processed</span>
                  </div>
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-slate-500">Pay Period:</span>
                    <span className="font-semibold text-slate-700">Apr 30 – May 13</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-100 pt-1 font-bold">
                    <span className="text-slate-600">Net Transfer:</span>
                    <span className="font-mono text-emerald-700">HDFC CMS Ready</span>
                  </div>
                </div>
              </div>

              {/* Playful BambooHR Hand-drawn Curved Arrow pointing to Start Payroll */}
              <svg
                className="absolute -bottom-8 right-24 sm:right-32 w-14 h-14 text-[#12B5A5]/80 pointer-events-none hidden lg:block"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M15 20 C 15 65, 45 78, 72 72"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                <path
                  d="M66 64 L 75 72 L 65 80"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
      {/* 3. IS THIS HOW YOUR PAYROLL RUNS TODAY? (AttendoHR Problem Breakdown) */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-teal-50/80 px-4 py-1.5 text-xs font-bold text-[#0E7A6E] mb-3">
            <span className="h-2 w-2 rounded-full bg-[#12B5A5] animate-pulse" />
            <span>The Reality of Manual Payroll</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            Is This How Your{" "}
            <span className="bg-gradient-to-r from-[#12B5A5] via-[#2DD4BF] to-[#0E9486] bg-clip-text text-transparent">
              Payroll Runs Today?
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            If two or three of these feel familiar, they are quietly costing your organisation hours and money every month.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual Illustration with Floating Error Chips */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft backdrop circular glow matching the image */}
            <div className="absolute -inset-4 sm:-inset-8 -z-10 rounded-full bg-gradient-to-tr from-teal-100/60 via-sky-100/40 to-emerald-100/30 blur-2xl pointer-events-none" />

            {/* Main Illustration Container */}
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-teal-100/80 bg-gradient-to-b from-white via-[#F8FCFB] to-[#E8FAF7]/50 p-6 sm:p-8 shadow-xl shadow-teal-900/5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-inner flex items-center justify-center">
                <Image
                  src="/images/manual-payroll-chaos.jpg"
                  alt="Manual payroll struggles and spreadsheet errors"
                  width={480}
                  height={360}
                  className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Error Chip 1 (Top-Left) */}
              <div className="animate-float absolute -top-3 -left-2 sm:-left-4 z-10 flex items-center gap-2 rounded-xl border border-rose-200/90 bg-white/95 px-3 py-1.5 shadow-lg shadow-rose-900/5 text-xs font-bold text-rose-700 backdrop-blur-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-rose-100 text-rose-600 font-black text-[11px]">
                  ✕
                </span>
                <span>Formula #REF! in Excel</span>
              </div>

              {/* Floating Error Chip 2 (Bottom-Left) */}
              <div className="animate-float-delayed absolute -bottom-3 -left-1 sm:-left-3 z-10 flex items-center gap-2 rounded-xl border border-amber-200/90 bg-white/95 px-3 py-1.5 shadow-lg shadow-amber-900/5 text-xs font-bold text-amber-800 backdrop-blur-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-amber-100 text-amber-600 text-[11px]">
                  ⚠️
                </span>
                <span>18 Mismatched Punches</span>
              </div>

              {/* Floating Error Chip 3 (Bottom-Right) */}
              <div className="animate-float absolute -bottom-4 -right-1 sm:-right-3 z-10 flex items-center gap-2 rounded-xl border border-teal-200/90 bg-white/95 px-3 py-1.5 shadow-lg shadow-teal-900/5 text-xs font-bold text-[#0E7A6E] backdrop-blur-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-teal-100 text-[#12B5A5] text-[11px]">
                  ⏱️
                </span>
                <span>4 Days Lost in Payout</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Vertical List of Relatable Pain Points */}
          <div className="lg:col-span-7 space-y-4">
            {[
              {
                icon: Fingerprint,
                iconColor: "text-[#12B5A5] bg-[#E8FAF7] border-teal-200/80",
                title: "Biometric machine installed, attendance still entered manually",
                desc: "Fingerprint machine data doesn't sync with shifts, so HR still ends up exporting raw punch dumps and typing them into Excel registers.",
              },
              {
                icon: Calculator,
                iconColor: "text-sky-600 bg-sky-50 border-sky-200/80",
                title: "Advances and deductions tracked in separate notebooks",
                desc: "Salary advances, khata loans, canteen coupons, and loss-of-pay deductions scattered across notebooks, sticky notes, and WhatsApp messages.",
              },
              {
                icon: FileSpreadsheet,
                iconColor: "text-amber-600 bg-amber-50 border-amber-200/80",
                title: "Salary errors found only after payslips go out",
                desc: "A broken Excel formula, missed late deduction, or wrong PF calculation discovered by employees after salaries have already been transferred.",
              },
              {
                icon: MessageCircle,
                iconColor: "text-teal-600 bg-teal-50 border-teal-200/80",
                title: '"Sir, please adjust this" every month-end from staff',
                desc: "HR managers and accountants lose the first 5 to 7 days of every month handling disputed check-in times, leave balances, and overtime claims.",
              },
              {
                icon: Building,
                iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200/80",
                title: "Manually typing account numbers for bank transfer files",
                desc: "Copy-pasting hundreds of IFSC and account numbers into HDFC CMS or ICICI bulk payout templates, hoping not a single digit is mistyped.",
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-teal-200 hover:shadow-md hover:bg-teal-50/20"
                >
                  <div
                    className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${item.iconColor}`}
                  >
                    <IconComp className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The 6 Problem Cards from PayroleHR (Preserved completely) */}
        <div className="mt-14 border-t border-slate-200/60 pt-10">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
              Everyday Operational Friction
            </span>
            <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">
              The 6 hidden payroll leaks PayroleHR eliminates
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              If any of these sound familiar, they are exactly what PayroleHR is built to remove.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                text: "Manually copying hundreds of account numbers and net pay amounts into your bank portal\'s bulk transfer template.",
              },
              {
                title: "Software that doesn't fit",
                text: "Rigid software that forces standard corporate structures onto schools, factories, hospitals and local businesses.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="attendo-card attendo-card-hover group p-6 flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-200/80 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs">
                    <XCircle className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
      {/* 4.5 CHOOSE A DEVICE THAT FITS YOUR BUSINESS (Hardware & Check-in) */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200/70 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E] shadow-2xs">
            <Fingerprint className="h-3 w-3 text-[#12B5A5]" /> Tailored Hardware & Mobile Options
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Choose a Setup{" "}
            <span className="bg-gradient-to-r from-[#12B5A5] via-[#2DD4BF] to-[#0E9486] bg-clip-text text-transparent block sm:inline">
              That Fits Your Business
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Not just an attendance machine, it's the real-time entry point of your entire payroll. A factory floor, a corporate office, and a salon chair do not work the same way, so the rules are set differently for each workplace.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Biometric Pro */}
          <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-teal-50/40 p-4 flex items-center justify-center border border-slate-100">
                <Image
                  src="/images/attendance-hardware-devices.jpg"
                  alt="Biometric Pro Attendance Terminal"
                  width={340}
                  height={240}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold text-white">
                  Heavy-Duty Optical Sensor
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                Biometric Pro
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rugged optical fingerprint device with Wi-Fi, LAN, and 4G SIM sync. Holds 50,000 punches offline so factory and warehouse gates never halt.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                  <span>Works with existing eSSL, Matrix & Realtime hardware</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#12B5A5]" />
                  <span>Instant cloud push with zero manual USB pen-drive downloads</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-[#12B5A5]">Ideal for: Factories, Warehouses & Retail Stores</span>
            </div>
          </div>

          {/* Card 2: Face Scanner */}
          <div className="group rounded-3xl border border-teal-200/80 bg-gradient-to-b from-white via-teal-50/20 to-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#12B5A5] hover:shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-[#12B5A5] px-3 py-1 text-[10px] font-bold text-white shadow-xs">
              Most Popular
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-teal-50/60 to-emerald-50/40 p-4 flex items-center justify-center border border-teal-100">
                <Image
                  src="/images/attendance-hardware-devices.jpg"
                  alt="Contactless Face Scanner Terminal"
                  width={340}
                  height={240}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-emerald-700 px-2.5 py-1 text-[10px] font-bold text-white">
                  0.18s AI Face Match
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                Face Scanner
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Contactless AI face verification terminal with anti-spoof liveness detection. Converts any iPad, tablet or dedicated terminal into a zero-touch kiosk.
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
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-[#12B5A5]">Ideal for: Corporate Offices, Hospitals & Schools</span>
            </div>
          </div>

          {/* Card 3: Mobile GPS Punch */}
          <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-sky-50 to-indigo-50/40 p-4 flex flex-col items-center justify-center border border-slate-100 text-center">
                <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#12B5A5] mb-2 border border-teal-100">
                  <Smartphone className="h-8 w-8 stroke-[1.8]" />
                </div>
                <span className="rounded-full bg-indigo-900/80 px-2.5 py-1 text-[10px] font-bold text-white">
                  iOS & Android App
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900 group-hover:text-[#0E7A6E] transition-colors">
                Mobile GPS & Selfie
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Employees mark check-in directly from their smartphones within pre-set geo-fenced office radius or client coordinates with selfie verification.
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
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-[#12B5A5]">Ideal for: Field Sales, Remote Teams & Site Engineers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ONE CONNECTED FLOW, NO RE-TYPING (PayroleHR Workflow Chain) */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-slate-950 sm:text-3xl lg:text-4xl tracking-tight leading-tight">
            One connected flow, no re-typing
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Each step feeds the next: shifts decide attendance status, attendance and leave decide paid days, and payroll turns them into payslips and the bank file.
          </p>
        </div>

        {/* Responsive Connected Chain Pills matching payrolehr.com */}
        <ol className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {[
            { label: "Staff records", href: "/features/employee-management" },
            { label: "Shifts", href: "/features/shift-management" },
            { label: "Face attendance", href: "/features/face-attendance" },
            { label: "Leave", href: "/features/leave-management" },
            { label: "Payroll", href: "/features/payroll-management" },
            { label: "Payslips & bank file", href: "/features/payroll-management" },
            { label: "Reports", href: "/features/reports-analytics" },
          ].map((step, idx) => (
            <li key={step.label} className="flex items-center gap-2 sm:gap-3">
              <Link
                href={step.href}
                className="group inline-flex items-center rounded-full border border-slate-200/90 bg-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-300 hover:border-[#12B5A5] hover:text-[#0E7A6E] hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <span>{step.label}</span>
              </Link>
              {idx < 6 && (
                <ArrowRight
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400 shrink-0"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
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
      {/* BUILT FOR BOTH SIDES (Owner & Employee Breakdown) */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200/70 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E] shadow-2xs">
            <Users className="h-3 w-3 text-[#12B5A5]" /> Dual Perspective Architecture
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Built For{" "}
            <span className="bg-gradient-to-r from-[#12B5A5] via-[#2DD4BF] to-[#0E9486] bg-clip-text text-transparent">
              Both Sides
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Control for the owner. Clarity for the employees.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Card 1: For Owner */}
          <div className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-card transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#12B5A5]">
                    Employer Command Center
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-950 mt-1">
                    For Owner
                  </h3>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-[#12B5A5] border border-teal-100 shadow-2xs font-bold text-lg">
                  👔
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                The owner sees everything on web and mobile dashboards easily.
              </p>

              <div className="mt-6 grid sm:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
                <div className="space-y-4">
                  {[
                    {
                      icon: Users,
                      color: "text-[#12B5A5] bg-[#E8FAF7] border-teal-200/70",
                      title: "Daily attendance status of employees",
                      desc: "Instant headcount, on-time, late-ins and absenteeism across all branch locations.",
                    },
                    {
                      icon: CheckCircle2,
                      color: "text-emerald-600 bg-emerald-50 border-emerald-200/70",
                      title: "Leave status and pending approvals",
                      desc: "Approve or reject leave requests and shift swaps in 1 tap with leave balance checks.",
                    },
                    {
                      icon: Building,
                      color: "text-sky-600 bg-sky-50 border-sky-200/70",
                      title: "Multi-location payroll in one view",
                      desc: "Manage factory units, corporate headquarters and retail stores under one login.",
                    },
                    {
                      icon: TrendingUp,
                      color: "text-indigo-600 bg-indigo-50 border-indigo-200/70",
                      title: "Reports available for analysis",
                      desc: "Download Indian statutory reports (PF, ESI, PT, Form 16) and bank transfer files instantly.",
                    },
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border shadow-2xs ${item.color}`}>
                          <IconComp className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-b from-teal-50/70 to-emerald-50/40 p-2 flex items-center justify-center border border-teal-100 overflow-hidden shadow-inner">
                  <Image
                    src="/images/for-owner-management.jpg"
                    alt="Management dashboard and control"
                    width={320}
                    height={320}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: For Employee */}
          <div className="rounded-3xl border border-teal-100/90 bg-white p-7 sm:p-9 shadow-card transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E7A6E]">
                    Staff Self-Service
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-950 mt-1">
                    For Employee
                  </h3>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-2xs font-bold text-lg">
                  📱
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Employees check their own data through a self-service app.
              </p>

              <div className="mt-6 grid sm:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
                <div className="space-y-4">
                  {[
                    {
                      icon: CalendarCheck,
                      color: "text-[#12B5A5] bg-[#E8FAF7] border-teal-200/70",
                      title: "Personal attendance record",
                      desc: "Staff verify daily check-in, check-out times, late minutes and overtime accrued.",
                    },
                    {
                      icon: Sparkles,
                      color: "text-amber-600 bg-amber-50 border-amber-200/70",
                      title: "Check leave balance",
                      desc: "Real-time visibility of paid, casual, sick and compensatory off leaves without asking HR.",
                    },
                    {
                      icon: Receipt,
                      color: "text-emerald-600 bg-emerald-50 border-emerald-200/70",
                      title: "Salary breakdown",
                      desc: "Download PDF payslips, tax calculations and bank transfer confirmations on phone.",
                    },
                    {
                      icon: Smartphone,
                      color: "text-sky-600 bg-sky-50 border-sky-200/70",
                      title: "Request leave via mobile app",
                      desc: "Apply for leaves or missed punches directly with optional doctor notes or attachments.",
                    },
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border shadow-2xs ${item.color}`}>
                          <IconComp className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-b from-emerald-50/70 to-teal-50/40 p-2 flex items-center justify-center border border-emerald-100 overflow-hidden shadow-inner">
                  <Image
                    src="/images/for-employee-app.jpg"
                    alt="Employee self-service app"
                    width={320}
                    height={320}
                    className="h-full w-full object-contain"
                  />
                </div>
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
      {/* 10.5 BOOK A DEMO SECTION (Matching payrolehr.com/book-a-demo) */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-2">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Book a demo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tell us a little about your organisation. We&apos;ll contact you to arrange a walkthrough with your own rules and examples.
          </p>
        </div>
        <DemoForm from="homepage" />
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
