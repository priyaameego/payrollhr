"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Navigation,
  Battery,
  Signal,
  Clock,
  User,
  ShieldCheck,
  Search,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const fieldStaff = [
  {
    id: "EMP-0071",
    name: "Vikram Sethi",
    role: "Area Sales Manager",
    location: "Connaught Place, New Delhi",
    coords: "28.6315° N, 77.2167° E",
    lastSeen: "3 mins ago",
    battery: "88%",
    status: "Moving (24 km/h)",
    checkIns: 4,
    distanceCovered: "18.4 km",
  },
  {
    id: "EMP-0089",
    name: "Anjali Saxena",
    role: "Field Executive",
    location: "Cyber City, DLF Phase 2, Gurugram",
    coords: "28.4950° N, 77.0895° E",
    lastSeen: "Just now",
    battery: "94%",
    status: "Checked-in at Client Site",
    checkIns: 6,
    distanceCovered: "29.2 km",
  },
  {
    id: "EMP-0105",
    name: "Mohit Nair",
    role: "Service Technician",
    location: "Sector 62, Noida, UP",
    coords: "28.6280° N, 77.3649° E",
    lastSeen: "12 mins ago",
    battery: "62%",
    status: "Stationary (Customer Site)",
    checkIns: 2,
    distanceCovered: "14.1 km",
  },
];

export default function FieldTrackingPage() {
  const [selectedStaff, setSelectedStaff] = useState(fieldStaff[0]);
  const [search, setSearch] = useState("");

  return (
    <WorkspaceShell
      title="Field Staff GPS & Geofence Tracking"
      subtitle="Live location telemetry, battery health, client check-in proof and routes"
      action={
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-bold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Tracking Active
          </span>
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left: Staff List */}
        <div className="rounded-2xl border border-teal-100/80 bg-white p-5 shadow-card">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter field staff..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-2 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-[#12B5A5] focus:bg-white focus:outline-none"
            />
          </div>

          <div className="space-y-3">
            {fieldStaff.map((staff) => {
              const isSelected = selectedStaff.id === staff.id;
              return (
                <div
                  key={staff.id}
                  onClick={() => setSelectedStaff(staff)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                    isSelected
                      ? "border-[#12B5A5] bg-teal-50/40 shadow-sm"
                      : "border-slate-100 bg-white hover:border-teal-200"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-sm font-bold text-slate-900">
                        {staff.name}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {staff.id} · {staff.role}
                      </p>
                    </div>
                    <span className="rounded-md bg-teal-100/70 px-2 py-0.5 text-[10px] font-bold text-[#0E7A6E]">
                      {staff.battery} Bat
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                    <MapPin className="h-3.5 w-3.5 text-[#12B5A5] shrink-0" />
                    <span className="truncate">{staff.location}</span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-2">
                    <span className="font-semibold text-emerald-600">{staff.status}</span>
                    <span>{staff.lastSeen}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Map Simulation & Detail */}
        <div className="flex flex-col gap-6">
          {/* Simulated Map View */}
          <div className="relative h-96 w-full rounded-3xl border border-teal-200/80 bg-slate-900 overflow-hidden shadow-card flex flex-col justify-between p-6">
            {/* Visual map background pattern */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#12B5A5_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/60 to-teal-950/40" />

            {/* GPS Route path line */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none">
              <path
                d="M 50 150 Q 180 80 280 200 T 450 120"
                fill="none"
                stroke="#12B5A5"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="animate-pulse"
              />
            </svg>

            {/* Map Top Badge */}
            <div className="z-10 flex items-center justify-between">
              <div className="rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                Tracking: <span className="text-teal-400 font-bold">{selectedStaff.name}</span>
              </div>
              <div className="rounded-xl border border-teal-500/30 bg-teal-950/80 px-3 py-1 text-xs font-mono text-teal-300">
                {selectedStaff.coords}
              </div>
            </div>

            {/* Pulsing Pin for Staff */}
            <div className="relative z-10 flex flex-col items-center self-center">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#12B5A5] text-white shadow-[0_0_30px_#12B5A5]">
                <Navigation className="h-6 w-6 transform rotate-45" />
                <span className="absolute -inset-1 rounded-full border-2 border-teal-300 animate-ping opacity-60" />
              </div>
              <div className="mt-2 rounded-lg bg-black/80 px-3 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur-sm">
                {selectedStaff.name} ({selectedStaff.status})
              </div>
            </div>

            {/* Map Bottom Stats Bar */}
            <div className="z-10 grid grid-cols-3 gap-2 rounded-2xl border border-slate-800 bg-slate-900/90 p-3 text-center text-xs backdrop-blur-md">
              <div>
                <p className="text-[10px] text-slate-400">Total Distance</p>
                <p className="font-bold text-teal-400">{selectedStaff.distanceCovered}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400">Client Check-ins</p>
                <p className="font-bold text-teal-400">{selectedStaff.checkIns} Visits</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400">Device Battery</p>
                <p className="font-bold text-teal-400">{selectedStaff.battery}</p>
              </div>
            </div>
          </div>

          {/* Timeline of client check-ins */}
          <div className="rounded-2xl border border-teal-100/80 bg-white p-5 shadow-sm">
            <h3 className="font-display text-sm font-bold text-slate-950 mb-3">
              Today&apos;s Geofence Activity Log
            </h3>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">09:15 AM</span> — Marked In from designated Delhi Territory Geofence
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">11:30 AM</span> — Client Check-in: ABC Retailers (Selfie uploaded)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">02:10 PM</span> — Client Check-in: Sharma Distributors (Order booked: ₹85,000)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkspaceShell>
  );
}
