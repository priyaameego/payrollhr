"use client";

import Link from "next/link";
import {
  Users,
  UserCheck,
  Calendar,
  CreditCard,
  Camera,
  UserPlus,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building,
  TrendingUp,
} from "lucide-react";
import WorkspaceShell from "@/components/WorkspaceShell";

const stats = [
  {
    name: "Total Employees",
    value: "148",
    change: "+4 this month",
    changeType: "positive",
    icon: Users,
    detail: "142 Active · 6 Onboarding",
  },
  {
    name: "Today's Attendance",
    value: "92.4%",
    change: "136 Present",
    changeType: "positive",
    icon: UserCheck,
    detail: "7 On Leave · 5 Late marks",
  },
  {
    name: "Pending Leaves",
    value: "3",
    change: "Requires review",
    changeType: "warning",
    icon: Calendar,
    detail: "2 Sick · 1 Casual",
  },
  {
    name: "Last Payroll Run",
    value: "₹64.28L",
    change: "Locked & Paid",
    changeType: "positive",
    icon: CreditCard,
    detail: "148 payslips dispatched",
  },
];

const departments = [
  { name: "Engineering & Tech", count: 42, pct: "28%" },
  { name: "Operations & Logistics", count: 56, pct: "38%" },
  { name: "Sales & Marketing", count: 28, pct: "19%" },
  { name: "Finance & Accounts", count: 14, pct: "10%" },
  { name: "HR & People", count: 8, pct: "5%" },
];

const recentActivity = [
  {
    title: "Face attendance punch verified",
    time: "2 mins ago",
    user: "Arun Sharma (EMP-0142)",
    kiosk: "Reception Tablet 01",
    status: "On Time (09:02 AM)",
  },
  {
    title: "Face attendance punch verified",
    time: "5 mins ago",
    user: "Kavita Verma (EMP-0098)",
    kiosk: "Warehouse Main Gate",
    status: "On Time (08:58 AM)",
  },
  {
    title: "New leave request submitted",
    time: "25 mins ago",
    user: "Rohan Gupta (EMP-0063)",
    kiosk: "Casual Leave · 2 days",
    status: "Pending HR Approval",
  },
  {
    title: "Bank salary payout file exported",
    time: "Yesterday, 05:40 PM",
    user: "HDFC CMS File (148 credits)",
    kiosk: "October 2026 Salary Run",
    status: "Processed",
  },
];

export default function DashboardPage() {
  return (
    <WorkspaceShell
      title="Organization Overview"
      subtitle="Real-time attendance, live kiosk health, and monthly payroll summary"
      action={
        <div className="flex items-center gap-3">
          <Link
            href="/attendance/face"
            className="inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-[#E8FAF7] px-4 py-2 text-xs font-bold text-[#0E7A6E] shadow-sm hover:bg-teal-100/60 transition-colors"
          >
            <Camera className="h-4 w-4 text-[#12B5A5]" />
            Launch Face Kiosk
          </Link>
          <Link
            href="/payroll"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] px-4 py-2 text-xs font-bold text-white shadow-sm hover:from-[#0E9486] hover:to-[#0B7A6E] transition-all"
          >
            <CreditCard className="h-4 w-4" />
            Run Payroll
          </Link>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="attendo-card attendo-card-hover group relative overflow-hidden p-5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">{s.name}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-100/80 text-[#12B5A5] transition-all duration-300 group-hover:bg-[#12B5A5] group-hover:text-white group-hover:scale-105 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="font-display text-2xl font-black text-slate-950 sm:text-3xl tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                        s.changeType === "positive"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : s.changeType === "warning"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-slate-50 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {s.change}
                    </span>
                    <span className="text-slate-400 font-medium">{s.detail}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions Bar */}
        <div className="attendo-card p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Actions
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/employees/new"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5] hover:border-teal-200 transition-all shadow-sm"
              >
                <UserPlus className="h-3.5 w-3.5 text-[#12B5A5]" />
                Add Employee
              </Link>
              <Link
                href="/attendance/face"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5] hover:border-teal-200 transition-all shadow-sm"
              >
                <Camera className="h-3.5 w-3.5 text-[#12B5A5]" />
                Enroll Face
              </Link>
              <Link
                href="/leaves"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5] hover:border-teal-200 transition-all shadow-sm"
              >
                <Calendar className="h-3.5 w-3.5 text-[#12B5A5]" />
                Review Leaves (3)
              </Link>
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5] hover:border-teal-200 transition-all shadow-sm"
              >
                <TrendingUp className="h-3.5 w-3.5 text-[#12B5A5]" />
                Attendance Master
              </Link>
            </div>
          </div>
        </div>

        {/* 2-Column: Live Kiosk Status & Department Breakdown */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Live Punches */}
          <div className="lg:col-span-2 attendo-card p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="font-display text-base font-bold text-slate-950">
                  Live Attendance Activity
                </h2>
                <p className="text-xs text-slate-500">
                  Real-time face recognition events from active tablets
                </p>
              </div>
              <Link
                href="/attendance"
                className="text-xs font-bold text-[#12B5A5] hover:text-[#0E9486] flex items-center gap-1 transition-colors"
              >
                Full register <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-4 divide-y divide-slate-100">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex items-center justify-between py-3 hover:bg-slate-50/60 rounded-xl px-2 -mx-2 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-50 border border-teal-100/80 text-[#12B5A5]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{act.user}</p>
                      <p className="text-[11px] text-slate-500">
                        {act.title} · <span className="text-slate-700 font-medium">{act.kiosk}</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                      {act.status}
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Department Distribution */}
          <div className="attendo-card p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-base font-bold text-slate-950">
                Department Staffing
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Headcount distribution across teams
              </p>

              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.name}>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                      <span>{dept.name}</span>
                      <span className="font-bold text-slate-900">{dept.count}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] transition-all duration-500"
                        style={{ width: dept.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4">
              <Link
                href="/employees"
                className="block text-center rounded-xl border border-teal-200 bg-teal-50/60 py-2.5 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100/80 hover:border-teal-300 transition-all shadow-sm"
              >
                View all 148 employees →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </WorkspaceShell>
  );
}
