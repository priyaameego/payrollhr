import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, BookOpen, FileSpreadsheet, Sparkles, HelpCircle, FileText, Calculator } from "lucide-react";
import { resourceLinks } from "@/data/navigation";

export const metadata = {
  title: "HR & Payroll Resources — PayroleHR",
  description:
    "Free practical guides, templates, glossary and articles for HR and payroll practitioners in India.",
};

export default function ResourcesHubPage() {
  const resourceCategories = [
    {
      title: "HR & Payroll Guides",
      href: "/resources/guides",
      desc: "Step-by-step practical guides to payroll cycles, salary components, attendance rules, leave accrual and overtime.",
      icon: BookOpen,
      count: "7 guides",
    },
    {
      title: "Free HR Calculators",
      href: "/free-tools",
      desc: "Interactive calculators for daily wages, overtime, attendance rate, CTC in-hand, leave balances and statutory gratuity.",
      icon: Calculator,
      count: "9 calculators",
    },
    {
      title: "HR Templates",
      href: "/templates",
      desc: "Free downloadable spreadsheet templates for staff registration, attendance registers, exit checklists and salary slips.",
      icon: FileSpreadsheet,
      count: "12 templates",
    },
    {
      title: "HR Glossary",
      href: "/glossary",
      desc: "Payroll and statutory terms explained in plain, simple language: CTC, basic salary, arrears, regularisation and more.",
      icon: FileText,
      count: "38 terms",
    },
    {
      title: "Articles & Blog",
      href: "/resources/blog",
      desc: "Field-tested advice on replacing register books with face recognition, month-end payroll checklists, and CTC breakdown.",
      icon: Sparkles,
      count: "3 articles",
    },
    {
      title: "Frequently Asked Questions",
      href: "/faq",
      desc: "Comprehensive answers about setup, biometric hardware, mobile access, data isolation and pricing.",
      icon: HelpCircle,
      count: "5 categories",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Resources</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Knowledge Base & Toolkit
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          HR & Payroll Resources
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Free templates, step-by-step guides, statutory explanations and plain-English definitions written for Indian HR teams.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resourceCategories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="lux-card-target lux-card-sheen group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-white to-[#F8FDFD]/50 p-7 shadow-xs hover:shadow-2xl hover:shadow-teal-900/10 hover:border-teal-400 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Top Animated Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#12B5A5]/0 to-transparent group-hover:via-[#12B5A5] transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FAF7] border border-teal-200/70 text-[#0E7A6E] shadow-2xs group-hover:scale-110 group-hover:rotate-1 group-hover:bg-gradient-to-br group-hover:from-[#12B5A5] group-hover:to-[#0E7A6E] group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-500/25 group-hover:border-transparent transition-all duration-300">
                  <cat.icon className="h-6 w-6 stroke-[2.2]" />
                </div>
                <span className="rounded-full bg-slate-100/90 border border-slate-200/80 px-3 py-1 text-xs font-bold text-slate-600 group-hover:bg-teal-50 group-hover:border-teal-200 group-hover:text-[#0E7A6E] transition-all duration-300">
                  {cat.count}
                </span>
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-slate-900 group-hover:text-[#0E7A6E] group-hover:translate-x-0.5 transition-all duration-300">
                {cat.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal group-hover:text-slate-700 transition-colors duration-300">
                {cat.desc}
              </p>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E7A6E]">
              <span className="group-hover:text-[#12B5A5] group-hover:translate-x-0.5 transition-all duration-300 font-bold">
                Explore {cat.title}
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50/90 text-[#0E7A6E] border border-teal-100 group-hover:bg-gradient-to-r group-hover:from-[#12B5A5] group-hover:to-[#0E7A6E] group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-teal-500/30 group-hover:scale-110 transition-all duration-300">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
