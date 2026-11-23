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
      href: "/resources/templates",
      desc: "Free downloadable spreadsheet templates for staff registration, attendance registers, exit checklists and salary slips.",
      icon: FileSpreadsheet,
      count: "11 templates",
    },
    {
      title: "HR Glossary",
      href: "/glossary",
      desc: "Payroll and statutory terms explained in plain, simple language: CTC, basic salary, arrears, regularisation and more.",
      icon: FileText,
      count: "33 terms",
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
            className="attendo-card attendo-card-hover group p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="attendo-icon-box h-12 w-12 shrink-0">
                  <cat.icon className="h-6 w-6 stroke-[2.2]" />
                </div>
                <span className="rounded-full bg-[#E8FAF7] border border-teal-200/80 px-3 py-1 text-xs font-bold text-[#0E7A6E]">
                  {cat.count}
                </span>
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-slate-900 text-hover-lux">
                {cat.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {cat.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12B5A5] group-hover:text-[#0E7A6E] transition-colors">
              <span className="text-hover-lux font-bold">Explore {cat.title}</span>
              <ArrowRight className="h-4 w-4 arrow-hover-lux" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
