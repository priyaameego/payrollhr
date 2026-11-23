import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTextAnimator from "@/components/ScrollTextAnimator";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PayroleHR — Payroll, HR & Face Attendance for Organisations",
  description:
    "Face attendance at the door or on the phone, leave and payroll in one place, set up with your organisation's own rules.",
  keywords: [
    "HR software",
    "payroll India",
    "face attendance",
    "attendance kiosk",
    "leave management",
    "salary structure",
    "bank salary export",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "PayroleHR — Payroll, HR & Face Attendance for Organisations",
    description:
      "Face attendance, leave and payroll in one place, set up with your organisation's own rules.",
    url: "https://payrolehr.com",
    siteName: "PayroleHR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-[#FAFCFE] text-slate-800 antialiased flex flex-col selection:bg-teal-100 selection:text-teal-900">
        <Header />
        <ScrollTextAnimator />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
