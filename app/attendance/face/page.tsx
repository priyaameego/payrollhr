"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Camera,
  CameraOff,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Settings,
  ShieldCheck,
  Clock,
  User,
  Users,
  ArrowLeft,
  Volume2,
  VolumeX,
} from "lucide-react";

interface PunchRecord {
  id: string;
  name: string;
  code: string;
  time: string;
  type: "IN" | "OUT";
  confidence: string;
  department: string;
}

export default function FaceKioskPage() {
  const [isScanning, setIsScanning] = useState(true);
  const [lastScanned, setLastScanned] = useState<PunchRecord | null>({
    id: "EMP-0142",
    name: "Arun Sharma",
    code: "EMP-0142",
    time: "09:02:14 AM",
    type: "IN",
    confidence: "99.4%",
    department: "Engineering",
  });
  const [recentPunches, setRecentPunches] = useState<PunchRecord[]>([
    {
      id: "EMP-0142",
      name: "Arun Sharma",
      code: "EMP-0142",
      time: "09:02:14 AM",
      type: "IN",
      confidence: "99.4%",
      department: "Engineering",
    },
    {
      id: "EMP-0098",
      name: "Kavita Verma",
      code: "EMP-0098",
      time: "08:58:30 AM",
      type: "IN",
      confidence: "98.7%",
      department: "Warehouse & Logistics",
    },
    {
      id: "EMP-0045",
      name: "Suresh Pillai",
      code: "EMP-0045",
      time: "08:55:12 AM",
      type: "IN",
      confidence: "99.8%",
      department: "Operations",
    },
    {
      id: "EMP-0112",
      name: "Sneha Patil",
      code: "EMP-0112",
      time: "08:51:04 AM",
      type: "IN",
      confidence: "99.1%",
      department: "Finance",
    },
  ]);
  const [currentTime, setCurrentTime] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scanState, setScanState] = useState<"idle" | "detecting" | "verified">("idle");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const simulatePunch = (name: string, code: string, dept: string) => {
    setScanState("detecting");
    setTimeout(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const newPunch: PunchRecord = {
        id: code,
        name,
        code,
        time: timeStr,
        type: "IN",
        confidence: "99." + Math.floor(Math.random() * 9 + 1) + "%",
        department: dept,
      };
      setLastScanned(newPunch);
      setRecentPunches((prev) => [newPunch, ...prev.slice(0, 5)]);
      setScanState("verified");
      setTimeout(() => {
        setScanState("idle");
      }, 3500);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Kiosk Top Bar */}
      <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900/80 px-6 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Exit to Dashboard
          </Link>
          <div className="h-4 w-px bg-slate-700" />
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Live Attendance Kiosk
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="font-mono text-lg font-bold tracking-wider text-teal-400">
              {currentTime}
            </div>
            <div className="text-[10px] text-slate-400">
              {new Date().toLocaleDateString("en-IN", {
                weekday: "long",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="rounded-xl border border-slate-700 p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            {soundEnabled ? (
              <Volume2 className="h-4 w-4 text-teal-400" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )}
          </button>
        </div>
      </header>

      {/* Main Kiosk Area */}
      <div className="flex-1 grid lg:grid-cols-[1.3fr_0.7fr] p-4 sm:p-6 gap-6 max-w-7xl mx-auto w-full items-center">
        {/* Scanner Feed Window */}
        <div className="relative flex flex-col items-center justify-center rounded-3xl border border-teal-500/30 bg-slate-900/90 p-8 shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-video">
          {/* Ambient scanner grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#12B5A5_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

          {/* Viewfinder Bounding Box */}
          <div className="relative flex flex-col items-center justify-center w-72 h-80 sm:w-80 sm:h-96 rounded-3xl border-2 border-dashed border-[#12B5A5]/60 p-4 transition-all">
            {/* Corner highlights */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-[#12B5A5] rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-[#12B5A5] rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-[#12B5A5] rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-[#12B5A5] rounded-br-lg" />

            {/* Scanning beam line */}
            {isScanning && (
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#8FE8DC] to-transparent animate-[bounce_3s_ease-in-out_infinite] shadow-[0_0_15px_#12B5A5]" />
            )}

            {scanState === "verified" && lastScanned ? (
              <div className="flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="mt-4 font-display text-xl font-black text-white">
                  {lastScanned.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-400 mt-1">
                  Punched {lastScanned.type} · {lastScanned.time}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 border border-emerald-800 px-3 py-1 text-[11px] text-emerald-300 font-mono">
                  Confidence: {lastScanned.confidence}
                </div>
              </div>
            ) : scanState === "detecting" ? (
              <div className="flex flex-col items-center text-center">
                <RefreshCw className="h-12 w-12 text-[#12B5A5] animate-spin" />
                <p className="mt-4 font-display text-sm font-bold text-teal-300">
                  Matching face against database...
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-800/80 border border-teal-500/30 text-teal-400">
                  <User className="h-12 w-12 stroke-[1.5]" />
                </div>
                <p className="mt-4 font-display text-base font-bold text-slate-200">
                  Align face within frame
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Recognition happens automatically in &lt; 200ms
                </p>
              </div>
            )}
          </div>

          {/* Scanner Simulation Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 z-10">
            <span className="text-xs text-slate-400 mr-2">Simulate punch for:</span>
            <button
              type="button"
              onClick={() => simulatePunch("Arun Sharma", "EMP-0142", "Engineering")}
              className="rounded-xl border border-teal-500/40 bg-teal-950/60 px-3 py-1.5 text-xs font-bold text-teal-300 hover:bg-teal-900 hover:text-white transition-colors"
            >
              Arun Sharma
            </button>
            <button
              type="button"
              onClick={() => simulatePunch("Kavita Verma", "EMP-0098", "Logistics")}
              className="rounded-xl border border-teal-500/40 bg-teal-950/60 px-3 py-1.5 text-xs font-bold text-teal-300 hover:bg-teal-900 hover:text-white transition-colors"
            >
              Kavita Verma
            </button>
            <button
              type="button"
              onClick={() => simulatePunch("Rohan Gupta", "EMP-0063", "Marketing")}
              className="rounded-xl border border-teal-500/40 bg-teal-950/60 px-3 py-1.5 text-xs font-bold text-teal-300 hover:bg-teal-900 hover:text-white transition-colors"
            >
              Rohan Gupta
            </button>
          </div>
        </div>

        {/* Live Punch Activity Feed */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 flex flex-col h-full shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="font-display text-base font-bold text-white">
                Today&apos;s Punches
              </h2>
              <p className="text-xs text-slate-400">
                Live stream from this terminal
              </p>
            </div>
            <span className="rounded-full bg-teal-950 border border-teal-800 px-2.5 py-0.5 text-xs font-bold text-teal-400">
              {recentPunches.length} Logs
            </span>
          </div>

          <div className="mt-4 space-y-3 flex-1 overflow-y-auto">
            {recentPunches.map((punch, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-950 text-teal-400 border border-teal-800 font-display text-xs font-bold">
                    {punch.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{punch.name}</p>
                    <p className="text-[11px] text-slate-400">
                      {punch.code} · {punch.department}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block rounded-md bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-800/80">
                    Punched {punch.type}
                  </span>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                    {punch.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Health Footnote */}
          <div className="mt-6 border-t border-slate-800 pt-4 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-teal-400" /> Anti-spoofing Active
            </span>
            <span>Device: Tablet 01</span>
          </div>
        </div>
      </div>
    </div>
  );
}
