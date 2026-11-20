"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UserCheck,
  Users,
  Calendar,
  Clock,
  CreditCard,
  FileSpreadsheet,
  Settings,
  Camera,
  MapPin,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  ExternalLink,
  Shield,
  Smartphone,
} from "lucide-react";

interface WorkspaceShellProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  {
    name: "Attendance",
    href: "/attendance",
    icon: UserCheck,
    children: [
      { name: "Daily Register", href: "/attendance" },
      { name: "Face Kiosk (Live)", href: "/attendance/face" },
      { name: "Field Tracking", href: "/attendance/tracking" },
    ],
  },
  {
    name: "Employees",
    href: "/employees",
    icon: Users,
    children: [
      { name: "Directory", href: "/employees" },
      { name: "Departments", href: "/employees/departments" },
      { name: "Designations", href: "/employees/designations" },
    ],
  },
  {
    name: "Leaves",
    href: "/leaves",
    icon: Calendar,
    children: [
      { name: "Requests", href: "/leaves" },
      { name: "Balances", href: "/leaves/balances" },
      { name: "Policies", href: "/leaves/policies" },
    ],
  },
  { name: "Shifts & Roster", href: "/shifts", icon: Clock },
  {
    name: "Payroll",
    href: "/payroll",
    icon: CreditCard,
    children: [
      { name: "Salary Runs", href: "/payroll" },
      { name: "Payslips", href: "/payslips" },
      { name: "Bank Export", href: "/bank-export" },
      { name: "Salary Structures", href: "/salary-structures" },
    ],
  },
  { name: "Reports & Statutory", href: "/reports", icon: FileSpreadsheet },
  { name: "Organization Settings", href: "/settings", icon: Settings },
];

export default function WorkspaceShell({
  children,
  title,
  subtitle,
  action,
}: WorkspaceShellProps) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FCFB] text-slate-800">
      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white border-r border-teal-100/80 transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo & Workspace Selector */}
          <div className="flex h-16 items-center justify-between border-b border-teal-100/60 px-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/payrolehr-icon.png"
                alt="PayroleHR"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg shadow-sm"
              />
              <span className="font-display text-lg font-bold tracking-tight text-slate-900">
                Payrole<span className="text-[#12B5A5]">HR</span>
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Org Info Banner */}
          <div className="mx-3 mt-3 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50/50 p-3 border border-teal-100/70">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0E7A6E]">
                  Workspace
                </p>
                <p className="text-xs font-bold text-slate-900 truncate">
                  Apex Tech Solutions
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                Live
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 text-xs font-medium">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              const Icon = item.icon;

              return (
                <div key={item.name} className="space-y-0.5">
                  <Link
                    href={item.href}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[#12B5A5] to-[#0E9486] font-semibold text-white shadow-sm"
                        : "text-slate-600 hover:bg-teal-50/60 hover:text-[#12B5A5]"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.name}</span>
                  </Link>

                  {/* Sub links if active */}
                  {item.children && isActive && (
                    <div className="ml-7 space-y-0.5 border-l-2 border-teal-200/60 pl-2 pt-0.5">
                      {item.children.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileSidebarOpen(false)}
                            className={`block rounded-lg px-2 py-1.5 text-[11px] transition-colors ${
                              isSubActive
                                ? "font-bold text-[#0E7A6E] bg-teal-50"
                                : "text-slate-500 hover:text-slate-900"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Portal Switcher & Footer */}
          <div className="border-t border-teal-100/60 p-3 space-y-2">
            <Link
              href="/portal/dashboard"
              className="flex items-center justify-between rounded-xl border border-teal-200 bg-white p-2.5 text-xs font-semibold text-[#0E7A6E] hover:bg-teal-50/50 transition-colors shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-[#12B5A5]" />
                Employee Portal
              </span>
              <ExternalLink className="h-3 w-3 text-slate-400" />
            </Link>

            <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-slate-400">
              <span>PayroleHR v2.4</span>
              <Link href="/privacy" className="hover:text-slate-600">
                Security
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-teal-100/80 bg-white/90 px-4 backdrop-blur-md sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Quick search */}
            <div className="relative hidden sm:block w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search staff, shifts, reports..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-[#12B5A5] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#12B5A5]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick kiosk shortcut */}
            <Link
              href="/attendance/face"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-[#E8FAF7] px-3 py-1.5 text-xs font-bold text-[#0E7A6E] hover:bg-teal-100/70 transition-colors"
            >
              <Camera className="h-3.5 w-3.5 text-[#12B5A5]" />
              Open Face Kiosk
            </Link>

            {/* Notifications */}
            <button
              type="button"
              className="relative rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#12B5A5]" />
            </button>

            {/* User Profile */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200 p-1.5 pr-2.5 hover:bg-slate-50"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-[#12B5A5] to-[#0E9486] font-display text-xs font-bold text-white shadow-sm">
                  HR
                </div>
                <div className="hidden text-left text-xs sm:block">
                  <p className="font-semibold text-slate-900 leading-tight">Admin User</p>
                  <p className="text-[10px] text-slate-500">hr@apextech.com</p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-teal-100 bg-white p-2 shadow-xl">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900">Apex Tech Solutions</p>
                    <p className="text-[10px] text-slate-500">Plan: Enterprise (Active)</p>
                  </div>
                  <Link
                    href="/settings"
                    onClick={() => setUserDropdownOpen(false)}
                    className="block rounded-lg px-3 py-2 text-xs text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5]"
                  >
                    Organization Settings
                  </Link>
                  <Link
                    href="/portal/dashboard"
                    onClick={() => setUserDropdownOpen(false)}
                    className="block rounded-lg px-3 py-2 text-xs text-slate-700 hover:bg-teal-50 hover:text-[#12B5A5]"
                  >
                    Switch to Employee Portal
                  </Link>
                  <div className="my-1 border-t border-slate-100" />
                  <Link
                    href="/auth/sign-in"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-rose-600 hover:bg-rose-50"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  {subtitle}
                </p>
              )}
            </div>
            {action && <div>{action}</div>}
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
