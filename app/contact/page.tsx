"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle, Mail, Send, CheckCircle2, Clock } from "lucide-react";
import { contactDetails } from "@/data/navigation";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#12B5A5]">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-800">Contact</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12B5A5]">
          Direct Support
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-slate-950 sm:text-5xl">
          Talk to us
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Questions about features, migration or custom payroll rules? We are based in India and ready to help.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Channels */}
        <div className="space-y-4">
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-3xl border border-teal-100/80 bg-white p-6 shadow-card hover:shadow-card-hover hover:border-teal-300 transition-all"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6F9F6] text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-base font-bold text-slate-900 group-hover:text-[#12B5A5]">
                WhatsApp
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Fastest way to reach us. Text us with any question.
              </p>
              <span className="mt-3 inline-block text-xs font-bold text-[#12B5A5]">
                Chat on WhatsApp →
              </span>
            </div>
          </a>

          <a
            href={contactDetails.tel}
            className="group flex items-start gap-4 rounded-3xl border border-teal-100/80 bg-white p-6 shadow-card hover:shadow-card-hover hover:border-teal-300 transition-all"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-base font-bold text-slate-900 group-hover:text-[#12B5A5]">
                Phone
              </h2>
              <p className="mt-1 text-xs text-slate-500">{contactDetails.phone}</p>
              <span className="mt-3 inline-block text-xs font-bold text-[#12B5A5]">
                Call our support team →
              </span>
            </div>
          </a>

          <a
            href={`mailto:${contactDetails.email}`}
            className="group flex items-start gap-4 rounded-3xl border border-teal-100/80 bg-white p-6 shadow-card hover:shadow-card-hover hover:border-teal-300 transition-all"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-[#12B5A5] group-hover:bg-[#12B5A5] group-hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-base font-bold text-slate-900 group-hover:text-[#12B5A5]">
                Email
              </h2>
              <p className="mt-1 text-xs text-slate-500">{contactDetails.email}</p>
              <span className="mt-3 inline-block text-xs font-bold text-[#12B5A5]">
                Send an email inquiry →
              </span>
            </div>
          </a>

          <div className="rounded-3xl border border-teal-100 bg-[#F0FDFB] p-6 text-xs text-slate-600 space-y-2">
            <span className="font-bold text-[#0E7A6E] block text-sm">Working Hours</span>
            <p>Monday to Saturday: 9:00 AM – 7:00 PM IST</p>
            <p>Emergency kiosk / attendance support available 24/7 for active organisations.</p>
          </div>
        </div>

        {/* Quick Message Form */}
        <div>
          {sent ? (
            <div className="rounded-3xl border border-teal-100 bg-[#F0FDFB] p-8 text-center sm:p-10 shadow-card">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#12B5A5] text-white">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                Message received!
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Thank you, {form.name}. We have received your inquiry and will reach out shortly.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-teal-200 bg-white px-5 py-2 text-xs font-bold text-[#0E7A6E]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-8 shadow-card">
              <h2 className="font-display text-lg font-bold text-slate-900">
                Send a quick message
              </h2>

              <div>
                <label className="block text-xs font-bold text-slate-700">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Asha Sharma"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#12B5A5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="asha@example.com"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#12B5A5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#12B5A5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">Message / Requirement</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your organization and requirements..."
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#12B5A5]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Send className="h-4 w-4" />
                Submit message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
