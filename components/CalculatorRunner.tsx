"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  Printer,
  RotateCcw,
  Sparkles,
  Calculator,
  Info,
  ArrowRight,
  Layers,
  HelpCircle,
} from "lucide-react";

interface CalculatorRunnerProps {
  slug: string;
  name: string;
}

export default function CalculatorRunner({ slug, name }: CalculatorRunnerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="rounded-3xl shadow-xl overflow-hidden border border-slate-200/90 bg-white">
      {/* Dark Top Header Bar (Matching Reference Screenshot 1) */}
      <div className="bg-[#18181B] px-6 py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-2.5 font-bold font-display text-base sm:text-lg text-white">
          <Layers className="h-5 w-5 text-[#12B5A5]" />
          <span>{name}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="rounded-full border border-slate-700 bg-slate-800/90 px-3 py-1 text-[11px] font-bold text-slate-300 uppercase tracking-wider">
            FREE TOOL
          </span>
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-[11px] font-semibold text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <Printer className="h-3 w-3" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Calculator Body (2-Column Grid Layout) */}
      <div>
        {slug === "8th-pay-commission-calculator" && <EighthPayCommissionCalc onCopy={handleCopy} copied={copied} />}
        {slug === "salary-per-day-calculator" && <SalaryPerDayCalc onCopy={handleCopy} copied={copied} />}
        {slug === "attendance-calculator" && <AttendanceCalc onCopy={handleCopy} copied={copied} />}
        {slug === "overtime-calculator" && <OvertimeCalc onCopy={handleCopy} copied={copied} />}
        {slug === "leave-calculator" && <LeaveCalc onCopy={handleCopy} copied={copied} />}
        {slug === "salary-breakup-calculator" && <SalaryBreakupCalc onCopy={handleCopy} copied={copied} />}
        {slug === "working-days-calculator" && <WorkingDaysCalc onCopy={handleCopy} copied={copied} />}
        {slug === "ctc-to-in-hand-calculator" && <CtcToInHandCalc onCopy={handleCopy} copied={copied} />}
        {slug === "gratuity-calculator" && <GratuityCalc onCopy={handleCopy} copied={copied} />}
        {slug === "payroll-cost-calculator" && <PayrollCostCalc onCopy={handleCopy} copied={copied} />}
      </div>
    </div>
  );
}

// ============================================================================
// 1. 8TH PAY COMMISSION SALARY CALCULATOR (Matching Screenshots 1, 2, 3)
// ============================================================================
function EighthPayCommissionCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const payMatrixLevels: Record<string, { label: string; basic: number; defaultTA: number }> = {
    "1": { label: "Level 1 (GP 1800, ₹18,000)", basic: 18000, defaultTA: 1350 },
    "2": { label: "Level 2 (GP 1900, ₹19,900)", basic: 19900, defaultTA: 1350 },
    "3": { label: "Level 3 (GP 2000, ₹21,700)", basic: 21700, defaultTA: 3600 },
    "4": { label: "Level 4 (GP 2400, ₹25,500)", basic: 25500, defaultTA: 3600 },
    "5": { label: "Level 5 (GP 2800, ₹29,200)", basic: 29200, defaultTA: 3600 },
    "6": { label: "Level 6 (GP 4200, ₹35,400)", basic: 35400, defaultTA: 3600 },
    "7": { label: "Level 7 (GP 4600, ₹44,900)", basic: 44900, defaultTA: 3600 },
    "8": { label: "Level 8 (GP 4800, ₹47,600)", basic: 47600, defaultTA: 3600 },
    "9": { label: "Level 9 (GP 5400, ₹53,100)", basic: 53100, defaultTA: 7200 },
    "10": { label: "Level 10 (GP 5400, ₹56,100)", basic: 56100, defaultTA: 7200 },
    "11": { label: "Level 11 (GP 6600, ₹67,700)", basic: 67700, defaultTA: 7200 },
    "12": { label: "Level 12 (GP 7600, ₹78,800)", basic: 78800, defaultTA: 7200 },
    "13": { label: "Level 13 (GP 8700, ₹1,18,500)", basic: 118500, defaultTA: 7200 },
    "14": { label: "Level 14 (GP 10000, ₹1,44,200)", basic: 144200, defaultTA: 7200 },
  };

  const [payLevel, setPayLevel] = useState<string>("7");
  const [basicPay, setBasicPay] = useState<number>(44900);
  const [daPct, setDaPct] = useState<number>(53);
  const [fitment, setFitment] = useState<number>(2.28);
  const [cityType, setCityType] = useState<string>("X");
  const [hasCalculated, setHasCalculated] = useState<boolean>(true);

  const handleLevelChange = (lvl: string) => {
    setPayLevel(lvl);
    if (payMatrixLevels[lvl]) {
      setBasicPay(payMatrixLevels[lvl].basic);
    }
  };

  const handleReset = () => {
    setPayLevel("7");
    setBasicPay(44900);
    setDaPct(53);
    setFitment(2.28);
    setCityType("X");
    setHasCalculated(true);
  };

  // Calculations
  const hraRate = cityType === "X" ? 0.27 : cityType === "Y" ? 0.18 : 0.09;
  const currentDAAmount = Math.round(basicPay * (daPct / 100));
  const currentHRA = Math.round(basicPay * hraRate);
  const baseTA = payMatrixLevels[payLevel]?.defaultTA || 3600;
  const currentTA = Math.round(baseTA * (1 + daPct / 100));
  const currentGross = basicPay + currentDAAmount + currentHRA + currentTA;

  const newBasicPay = Math.round(basicPay * fitment);
  const newHRA = Math.round(newBasicPay * hraRate);
  const newTA = Math.round(baseTA * fitment);
  const newGross = newBasicPay + 0 + newHRA + newTA; // DA resets to 0%
  const monthlyHike = newGross - currentGross;

  const resultText = `8th CPC Revision: Basic ₹${basicPay.toLocaleString("en-IN")} → ₹${newBasicPay.toLocaleString("en-IN")} (Fitment ${fitment}x) | New Gross: ₹${newGross.toLocaleString("en-IN")} | Monthly Hike: ₹${monthlyHike.toLocaleString("en-IN")}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      {/* Left Column: Inputs */}
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        {/* Pay Level Input */}
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Pay Level</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="7th CPC Pay Matrix level">
              ?
            </span>
          </div>
          <select
            value={payLevel}
            onChange={(e) => handleLevelChange(e.target.value)}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-2 focus:ring-teal-100 outline-none shadow-xs font-medium"
          >
            {Object.entries(payMatrixLevels).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1.5">
            Pay level as per 7th CPC pay matrix. Selecting a level auto-fills the basic pay below.
          </p>
        </div>

        {/* Current Basic Pay */}
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Current Basic Pay (₹)</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Your monthly entry or stepped basic pay">
              ?
            </span>
          </div>
          <input
            type="number"
            value={basicPay}
            onChange={(e) => setBasicPay(Number(e.target.value))}
            placeholder="e.g. 44,900"
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-2 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1.5">
            Enter your actual basic pay. Auto-filled when you select a pay level above.
          </p>
        </div>

        {/* Current DA Percentage */}
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Current DA Percentage (%)</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Existing Dearness Allowance percentage">
              ?
            </span>
          </div>
          <input
            type="number"
            value={daPct}
            onChange={(e) => setDaPct(Number(e.target.value))}
            placeholder="e.g. 53"
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-2 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1.5">
            Central government DA as of Jan 2026 is 53%. Used to compute your current gross for comparison.
          </p>
        </div>

        {/* Expected Fitment Factor Slider */}
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Expected Fitment Factor</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Multiplication index factor">
              ?
            </span>
          </div>
          <input
            type="range"
            min="1.92"
            max="2.86"
            step="0.01"
            value={fitment}
            onChange={(e) => setFitment(parseFloat(e.target.value))}
            className="w-full accent-[#12B5A5] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
            <span>1.92x</span>
            <span>2.57x (7th CPC)</span>
            <span>2.86x</span>
          </div>
          <div className="mt-2">
            <span className="inline-block rounded-xl border border-teal-200 bg-[#E8FAF7] px-3 py-1 text-xs font-black text-[#0E7A6E]">
              {fitment.toFixed(2)}x
            </span>
          </div>
          <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1.5">
            The 7th CPC used 2.57x. Most 8th CPC estimates range 1.92x to 2.86x. Default is 2.28x.
          </p>
        </div>

        {/* City Type for HRA */}
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">City Type for HRA</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="City classification tier">
              ?
            </span>
          </div>
          <select
            value={cityType}
            onChange={(e) => setCityType(e.target.value)}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-2 focus:ring-teal-100 outline-none shadow-xs font-medium"
          >
            <option value="X">X City (Metro - 27% HRA)</option>
            <option value="Y">Y City (Tier-2 - 18% HRA)</option>
            <option value="Z">Z City (Rural / Other - 9% HRA)</option>
          </select>
          <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1.5">
            HRA calculated on new 8th CPC basic pay after implementation.
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => setHasCalculated(true)}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate 8th CPC Salary →</span>
        </button>
      </div>

      {/* Right Column: Results Display (Matching Screenshot 1 & 2) */}
      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">
            NEW BASIC PAY (8TH CPC)
          </span>

          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            ₹{newBasicPay.toLocaleString("en-IN")}
          </div>

          <p className="text-xs text-slate-500 mb-6">
            Estimated revised basic with {fitment}x fitment factor
          </p>

          {/* Breakdown Rows */}
          <div className="space-y-2.5 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Current Gross Pay:</span>
              <span className="font-semibold text-slate-800">₹{currentGross.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Revised DA (resets to 0%):</span>
              <span className="font-semibold text-slate-800">₹0</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Revised HRA ({Math.round(hraRate * 100)}%):</span>
              <span className="font-semibold text-slate-800">₹{newHRA.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Revised Transport Allowance:</span>
              <span className="font-semibold text-slate-800">₹{newTA.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 font-bold text-slate-900 border-b border-teal-200/80">
              <span>Estimated New Gross:</span>
              <span className="text-base text-[#0E7A6E]">₹{newGross.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between items-center py-1 text-emerald-700 font-bold bg-emerald-50/80 px-2.5 py-1.5 rounded-xl border border-emerald-100">
              <span>Estimated Monthly Hike:</span>
              <span>+₹{monthlyHike.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>

        {/* Action Controls & Disclaimer */}
        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>

          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Calculation Copied!" : "Copy Full Summary"}</span>
          </button>

          <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-2 border-t border-teal-100/80">
            * Estimates are indicative. Final 8th CPC pay revision will be announced by the Government of India. DA resets to 0% on new basic after implementation.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. SALARY PER DAY CALCULATOR
// ============================================================================
function SalaryPerDayCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [monthlySalary, setMonthlySalary] = useState<number>(30000);
  const [basis, setBasis] = useState<string>("fixed26");
  const [customDays, setCustomDays] = useState<number>(30);
  const [paidDays, setPaidDays] = useState<number>(24);

  const daysInBasis = basis === "fixed26" ? 26 : basis === "fixed30" ? 30 : customDays || 26;
  const perDay = daysInBasis > 0 ? monthlySalary / daysInBasis : 0;
  const perHour8 = perDay / 8;
  const totalPay = perDay * paidDays;

  const resultText = `Daily Rate: ₹${perDay.toFixed(2)} | Hourly Rate: ₹${perHour8.toFixed(2)} | Total Pay (${paidDays} days): ₹${totalPay.toFixed(2)}`;

  const handleReset = () => {
    setMonthlySalary(30000);
    setBasis("fixed26");
    setCustomDays(30);
    setPaidDays(24);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Monthly Gross Salary (₹)</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Monthly wage basis">?</span>
          </div>
          <input
            type="number"
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal mt-1.5">Enter the gross monthly wages before deductions.</p>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Days Basis</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Divisor basis">?</span>
          </div>
          <select
            value={basis}
            onChange={(e) => setBasis(e.target.value)}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          >
            <option value="fixed26">Fixed 26 days (Factory / Standard work days)</option>
            <option value="fixed30">Fixed 30 days (Commercial basis)</option>
            <option value="calendar">Calendar month (30/31 days)</option>
            <option value="custom">Custom days</option>
          </select>
          <p className="text-xs text-slate-500 font-normal mt-1.5">Factories Act commonly uses 26 days to exclude Sundays.</p>
        </div>

        {basis === "custom" && (
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Custom Days in Basis</label>
            <input
              type="number"
              value={customDays}
              onChange={(e) => setCustomDays(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
        )}

        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Days Attended / Paid</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Present + paid leaves">?</span>
          </div>
          <input
            type="number"
            value={paidDays}
            onChange={(e) => setPaidDays(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal mt-1.5">Number of payable days in the current salary cycle.</p>
        </div>

        <button
          type="button"
          onClick={() => {}}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate Daily Salary →</span>
        </button>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">DAILY SALARY RATE</span>
          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            ₹{perDay.toFixed(2)}
          </div>
          <p className="text-xs text-slate-500 mb-6">Calculated rate per payable working day</p>

          <div className="space-y-3 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Hourly Rate (8h Shift):</span>
              <span className="font-semibold text-slate-800">₹{perHour8.toFixed(2)} / hr</span>
            </div>
            <div className="flex justify-between items-center py-1.5 font-bold text-slate-900 border-b border-teal-200/80">
              <span>Payable for {paidDays} Days:</span>
              <span className="text-base text-[#0E7A6E]">₹{totalPay.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>
          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-2 border-t border-teal-100/80">
            * Standard calculation divisor based on Indian payroll practices.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. ATTENDANCE CALCULATOR
// ============================================================================
function AttendanceCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [totalWorkingDays, setTotalWorkingDays] = useState<number>(24);
  const [presentDays, setPresentDays] = useState<number>(20);
  const [halfDays, setHalfDays] = useState<number>(2);
  const [targetPct, setTargetPct] = useState<number>(75);

  const attended = presentDays + halfDays * 0.5;
  const pct = totalWorkingDays > 0 ? (attended / totalWorkingDays) * 100 : 0;
  const absentDays = Math.max(0, totalWorkingDays - attended);

  const resultText = `Attended Days: ${attended} / ${totalWorkingDays} | Attendance: ${pct.toFixed(1)}% | Absent: ${absentDays}`;

  const handleReset = () => {
    setTotalWorkingDays(24);
    setPresentDays(20);
    setHalfDays(2);
    setTargetPct(75);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Total Working Days</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Total rostered working days">?</span>
          </div>
          <input
            type="number"
            value={totalWorkingDays}
            onChange={(e) => setTotalWorkingDays(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal mt-1.5">Scheduled shift days in the calendar month.</p>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Full Present Days</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Punches with full hours">?</span>
          </div>
          <input
            type="number"
            value={presentDays}
            onChange={(e) => setPresentDays(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal mt-1.5">Days with successful check-in & check-out.</p>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Half Days (Counted as 0.5)</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Half-day deductions or partial shifts">?</span>
          </div>
          <input
            type="number"
            value={halfDays}
            onChange={(e) => setHalfDays(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal mt-1.5">Each half day counts as 0.5 present day.</p>
        </div>

        <button
          type="button"
          onClick={() => {}}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate Attendance Rate →</span>
        </button>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">ATTENDANCE PERCENTAGE</span>
          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            {pct.toFixed(1)}%
          </div>
          <p className="text-xs text-slate-500 mb-6">Attended {attended} out of {totalWorkingDays} days</p>

          <div className="space-y-3 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Effective Attended Days:</span>
              <span className="font-semibold text-slate-800">{attended} Days</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Loss of Pay / Absent Days:</span>
              <span className="font-semibold text-rose-600">{absentDays} Days</span>
            </div>
            <div className="flex justify-between items-center py-1.5 font-bold text-slate-900">
              <span>Policy Compliance:</span>
              <span className={pct >= 75 ? "text-emerald-600" : "text-amber-600"}>
                {pct >= 75 ? "✓ Meets Threshold" : "⚠ Below 75% Threshold"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>
          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-2 border-t border-teal-100/80">
            * Standard attendance calculation used across Indian payroll.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. OVERTIME CALCULATOR
// ============================================================================
function OvertimeCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [basicSalary, setBasicSalary] = useState<number>(26000);
  const [days, setDays] = useState<number>(26);
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [otHours, setOtHours] = useState<number>(10);
  const [multiplier, setMultiplier] = useState<number>(2.0);

  const hourlyRate = days > 0 && hoursPerDay > 0 ? basicSalary / days / hoursPerDay : 0;
  const otHourlyRate = hourlyRate * multiplier;
  const totalOtPay = otHourlyRate * otHours;

  const resultText = `Hourly Rate: ₹${hourlyRate.toFixed(2)} | OT Rate (${multiplier}x): ₹${otHourlyRate.toFixed(2)} | Total OT Pay (${otHours} hrs): ₹${totalOtPay.toFixed(2)}`;

  const handleReset = () => {
    setBasicSalary(26000);
    setDays(26);
    setHoursPerDay(8);
    setOtHours(10);
    setMultiplier(2.0);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <label className="text-sm font-bold text-slate-800">Monthly Basic Salary (₹)</label>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-teal-100/90 text-[#0E7A6E] text-[10px] font-bold cursor-help" title="Ordinary wage rate basis">?</span>
          </div>
          <input
            type="number"
            value={basicSalary}
            onChange={(e) => setBasicSalary(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal mt-1.5">Under the Factories Act, ordinary rate of wages is based on Basic + DA.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Days in Month</label>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Shift Hours / Day</label>
            <input
              type="number"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Overtime Hours</label>
            <input
              type="number"
              value={otHours}
              onChange={(e) => setOtHours(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">OT Multiplier</label>
            <select
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            >
              <option value="2.0">2.0× (Factories Act Statutory)</option>
              <option value="1.5">1.5× (Standard Commercial)</option>
              <option value="1.0">1.0× (Single Rate)</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {}}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate Overtime Payout →</span>
        </button>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">TOTAL OVERTIME PAY</span>
          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            ₹{totalOtPay.toFixed(2)}
          </div>
          <p className="text-xs text-slate-500 mb-6">Payout for {otHours} extra hours at {multiplier}x rate</p>

          <div className="space-y-3 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Standard Hourly Rate:</span>
              <span className="font-semibold text-slate-800">₹{hourlyRate.toFixed(2)} / hr</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Overtime Rate ({multiplier}×):</span>
              <span className="font-semibold text-slate-800">₹{otHourlyRate.toFixed(2)} / hr</span>
            </div>
            <div className="flex justify-between items-center py-1.5 font-bold text-slate-900">
              <span>Total Overtime Earnings:</span>
              <span className="text-base text-[#0E7A6E]">₹{totalOtPay.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>
          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-2 border-t border-teal-100/80">
            * Overtime rules conform to Indian statutory provisions.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. LEAVE BALANCE CALCULATOR
// ============================================================================
function LeaveCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [opening, setOpening] = useState<number>(2);
  const [accrualRate, setAccrualRate] = useState<number>(1.5);
  const [months, setMonths] = useState<number>(12);
  const [taken, setTaken] = useState<number>(10);
  const [cap, setCap] = useState<number>(15);

  const earned = accrualRate * months;
  const available = Math.max(0, opening + earned - taken);
  const carryForward = Math.min(available, cap);
  const lapsed = Math.max(0, available - cap);

  const resultText = `Available Leave: ${available} | Carried Forward: ${carryForward} | Lapsed: ${lapsed}`;

  const handleReset = () => {
    setOpening(2);
    setAccrualRate(1.5);
    setMonths(12);
    setTaken(10);
    setCap(15);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Opening Balance</label>
            <input
              type="number"
              value={opening}
              onChange={(e) => setOpening(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Monthly Accrual Rate</label>
            <input
              type="number"
              step="0.25"
              value={accrualRate}
              onChange={(e) => setAccrualRate(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Months Completed</label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Leaves Taken</label>
            <input
              type="number"
              value={taken}
              onChange={(e) => setTaken(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Annual Carry-Forward Cap</label>
          <input
            type="number"
            value={cap}
            onChange={(e) => setCap(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal mt-1.5">Maximum leave days allowed to roll into next year.</p>
        </div>

        <button
          type="button"
          onClick={() => {}}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate Leave Balance →</span>
        </button>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">AVAILABLE LEAVE BALANCE</span>
          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            {available.toFixed(1)} Days
          </div>
          <p className="text-xs text-slate-500 mb-6">Earned {earned} days, availed {taken} days</p>

          <div className="space-y-3 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Eligible to Carry Forward:</span>
              <span className="font-semibold text-slate-800">{carryForward.toFixed(1)} Days</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Lapsed Beyond Cap:</span>
              <span className="font-semibold text-rose-600">{lapsed.toFixed(1)} Days</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>
          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-2 border-t border-teal-100/80">
            * Conforms to Factories Act & Shops Act leave accrual provisions.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 6. SALARY BREAKUP (CTC) CALCULATOR
// ============================================================================
function SalaryBreakupCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [annualCtc, setAnnualCtc] = useState<number>(600000);
  const [basicPct, setBasicPct] = useState<number>(50);
  const [cityType, setCityType] = useState<string>("metro");

  const monthlyGross = annualCtc / 12;
  const basicMonthly = monthlyGross * (basicPct / 100);
  const hraRate = cityType === "metro" ? 0.5 : 0.4;
  const hraMonthly = basicMonthly * hraRate;
  const pfMonthly = Math.min(basicMonthly, 15000) * 0.12;
  const specialAllowance = Math.max(0, monthlyGross - basicMonthly - hraMonthly - pfMonthly);

  const resultText = `Annual CTC: ₹${annualCtc.toLocaleString("en-IN")} | Monthly Gross: ₹${monthlyGross.toFixed(0)} | Basic: ₹${basicMonthly.toFixed(0)} | HRA: ₹${hraMonthly.toFixed(0)} | Employer PF: ₹${pfMonthly.toFixed(0)} | Special Allowance: ₹${specialAllowance.toFixed(0)}`;

  const handleReset = () => {
    setAnnualCtc(600000);
    setBasicPct(50);
    setCityType("metro");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Annual CTC (₹)</label>
          <input
            type="number"
            value={annualCtc}
            onChange={(e) => setAnnualCtc(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal mt-1.5">Total annual cost to company.</p>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Basic Salary % of CTC: {basicPct}%</label>
          <input
            type="range"
            min="35"
            max="60"
            value={basicPct}
            onChange={(e) => setBasicPct(Number(e.target.value))}
            className="w-full accent-[#12B5A5] cursor-pointer"
          />
          <p className="text-xs text-slate-500 font-normal mt-1">Recommended 50% for optimal statutory compliance.</p>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">City Classification (for HRA %)</label>
          <select
            value={cityType}
            onChange={(e) => setCityType(e.target.value)}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          >
            <option value="metro">Metro (50% of Basic HRA)</option>
            <option value="nonmetro">Non-Metro (40% of Basic HRA)</option>
          </select>
        </div>

        <button
          type="button"
          onClick={() => {}}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate CTC Breakup →</span>
        </button>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">MONTHLY GROSS SALARY</span>
          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            ₹{monthlyGross.toFixed(0)}
          </div>
          <p className="text-xs text-slate-500 mb-6">Derived from ₹{(annualCtc / 100000).toFixed(1)} Lakh Annual CTC</p>

          <div className="space-y-2.5 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Basic Pay ({basicPct}%):</span>
              <span className="font-semibold text-slate-800">₹{basicMonthly.toFixed(0)} / mo</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">House Rent Allowance (HRA):</span>
              <span className="font-semibold text-slate-800">₹{hraMonthly.toFixed(0)} / mo</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Employer PF Contribution:</span>
              <span className="font-semibold text-slate-800">₹{pfMonthly.toFixed(0)} / mo</span>
            </div>
            <div className="flex justify-between items-center py-1.5 font-bold text-slate-900">
              <span>Special Allowance (Balancing):</span>
              <span className="text-base text-[#0E7A6E]">₹{specialAllowance.toFixed(0)} / mo</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>
          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-2 border-t border-teal-100/80">
            * Standard Indian CTC structure meeting Code on Wages requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 7. WORKING DAYS CALCULATOR
// ============================================================================
function WorkingDaysCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [totalCalendarDays, setTotalCalendarDays] = useState<number>(30);
  const [sundays, setSundays] = useState<number>(4);
  const [saturdaysOff, setSaturdaysOff] = useState<number>(2);
  const [publicHolidays, setPublicHolidays] = useState<number>(1);

  const totalOffs = sundays + saturdaysOff + publicHolidays;
  const workingDays = Math.max(0, totalCalendarDays - totalOffs);

  const resultText = `Total Days: ${totalCalendarDays} | Weekly Offs: ${sundays + saturdaysOff} | Holidays: ${publicHolidays} | Working Days: ${workingDays}`;

  const handleReset = () => {
    setTotalCalendarDays(30);
    setSundays(4);
    setSaturdaysOff(2);
    setPublicHolidays(1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Total Calendar Days</label>
          <input
            type="number"
            value={totalCalendarDays}
            onChange={(e) => setTotalCalendarDays(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Sundays Off</label>
            <input
              type="number"
              value={sundays}
              onChange={(e) => setSundays(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Saturdays Off</label>
            <input
              type="number"
              value={saturdaysOff}
              onChange={(e) => setSaturdaysOff(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Public / Paid Holidays</label>
          <input
            type="number"
            value={publicHolidays}
            onChange={(e) => setPublicHolidays(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
        </div>

        <button
          type="button"
          onClick={() => {}}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate Working Days →</span>
        </button>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">TOTAL WORKING DAYS</span>
          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            {workingDays} Days
          </div>
          <p className="text-xs text-slate-500 mb-6">{totalOffs} non-working days deducted</p>

          <div className="space-y-2.5 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Total Calendar Days:</span>
              <span className="font-semibold text-slate-800">{totalCalendarDays} Days</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Weekly Offs:</span>
              <span className="font-semibold text-slate-800">{sundays + saturdaysOff} Days</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Public Holidays:</span>
              <span className="font-semibold text-slate-800">{publicHolidays} Days</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>
          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 8. CTC TO IN-HAND CALCULATOR
// ============================================================================
function CtcToInHandCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [annualCtc, setAnnualCtc] = useState<number>(900000);
  const [regime, setRegime] = useState<string>("new");

  const monthlyGross = annualCtc / 12;
  const monthlyBasic = monthlyGross * 0.5;
  const pfEmployee = Math.min(monthlyBasic, 15000) * 0.12;
  const ptMonthly = 200; // Standard PT

  // Rough estimation under New Tax Regime
  let annualTax = 0;
  if (regime === "new") {
    const taxableAnnual = Math.max(0, annualCtc - 75000); // Std deduction 75k
    if (taxableAnnual > 1200000) {
      annualTax = (taxableAnnual - 1200000) * 0.15 + 40000;
    } else if (taxableAnnual > 700000) {
      annualTax = (taxableAnnual - 700000) * 0.1;
    }
  } else {
    const taxableAnnual = Math.max(0, annualCtc - 50000);
    if (taxableAnnual > 1000000) {
      annualTax = (taxableAnnual - 1000000) * 0.3 + 112500;
    } else if (taxableAnnual > 500000) {
      annualTax = (taxableAnnual - 500000) * 0.2 + 12500;
    }
  }

  const monthlyTds = Math.round(annualTax / 12);
  const inHandMonthly = Math.max(0, monthlyGross - pfEmployee - ptMonthly - monthlyTds);

  const resultText = `Annual CTC: ₹${annualCtc.toLocaleString("en-IN")} | Monthly Gross: ₹${monthlyGross.toFixed(0)} | In-Hand Take Home: ₹${inHandMonthly.toFixed(0)} | Projected TDS: ₹${monthlyTds} | PF: ₹${pfEmployee}`;

  const handleReset = () => {
    setAnnualCtc(900000);
    setRegime("new");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Annual CTC (₹)</label>
          <input
            type="number"
            value={annualCtc}
            onChange={(e) => setAnnualCtc(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Tax Regime</label>
          <select
            value={regime}
            onChange={(e) => setRegime(e.target.value)}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          >
            <option value="new">New Tax Regime (Default, ₹75k Std Deduction)</option>
            <option value="old">Old Tax Regime (With 80C Deductions)</option>
          </select>
        </div>

        <button
          type="button"
          onClick={() => {}}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate In-Hand Salary →</span>
        </button>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">ESTIMATED MONTHLY TAKE-HOME</span>
          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            ₹{inHandMonthly.toLocaleString("en-IN")}
          </div>
          <p className="text-xs text-slate-500 mb-6">Net salary credited to your bank account each month</p>

          <div className="space-y-2.5 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Monthly Gross Salary:</span>
              <span className="font-semibold text-slate-800">₹{monthlyGross.toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Employee PF (12%):</span>
              <span className="font-semibold text-slate-800">₹{pfEmployee.toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Professional Tax (PT):</span>
              <span className="font-semibold text-slate-800">₹{ptMonthly}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Projected Monthly TDS:</span>
              <span className="font-semibold text-rose-600">₹{monthlyTds}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>
          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-2 border-t border-teal-100/80">
            * Estimated under Indian Income Tax Act. Real figures depend on individual investments.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 9. GRATUITY CALCULATOR
// ============================================================================
function GratuityCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [basicAndDa, setBasicAndDa] = useState<number>(30000);
  const [years, setYears] = useState<number>(5);
  const [months, setMonths] = useState<number>(7);

  const roundedYears = months >= 6 ? years + 1 : years;
  const rawGratuity = Math.round((15 / 26) * basicAndDa * roundedYears);
  const cappedGratuity = Math.min(rawGratuity, 2000000); // ₹20 lakh statutory ceiling

  const resultText = `Basic+DA: ₹${basicAndDa} | Tenure: ${years} yrs ${months} mos (Counted: ${roundedYears} yrs) | Gratuity: ₹${cappedGratuity.toLocaleString("en-IN")}`;

  const handleReset = () => {
    setBasicAndDa(30000);
    setYears(5);
    setMonths(7);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Last Drawn Basic + DA (₹)</label>
          <input
            type="number"
            value={basicAndDa}
            onChange={(e) => setBasicAndDa(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
          <p className="text-xs text-slate-500 font-normal mt-1.5">Under Payment of Gratuity Act 1972, wage basis is last drawn Basic + DA.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Completed Years</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Extra Months</label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
        </div>

        <p className="text-xs text-slate-500 font-normal">
          Note: More than 6 months of service rounds up to a full year for gratuity calculation.
        </p>

        <button
          type="button"
          onClick={() => {}}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate Gratuity Amount →</span>
        </button>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">ESTIMATED GRATUITY PAYOUT</span>
          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            ₹{cappedGratuity.toLocaleString("en-IN")}
          </div>
          <p className="text-xs text-slate-500 mb-6">Qualifying tenure: {roundedYears} completed years</p>

          <div className="space-y-2.5 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Daily Gratuity Wage (15/26):</span>
              <span className="font-semibold text-slate-800">₹{(basicAndDa * (15 / 26)).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Qualifying Years Counted:</span>
              <span className="font-semibold text-slate-800">{roundedYears} Years</span>
            </div>
            <div className="flex justify-between items-center py-1.5 font-bold text-slate-900">
              <span>Statutory Ceiling:</span>
              <span className="text-base text-[#0E7A6E]">₹20,00,000 (20 Lakhs)</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>
          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-2 border-t border-teal-100/80">
            * As per Payment of Gratuity Act 1972.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 10. PAYROLL COST CALCULATOR
// ============================================================================
function PayrollCostCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [headcount, setHeadcount] = useState<number>(40);
  const [avgGross, setAvgGross] = useState<number>(25000);
  const [pfRate, setPfRate] = useState<number>(12);
  const [benefitsPerHead, setBenefitsPerHead] = useState<number>(1000);

  const avgBasic = avgGross * 0.5;
  const employerPfPerHead = Math.min(avgBasic, 15000) * (pfRate / 100);
  const costPerEmployee = avgGross + employerPfPerHead + benefitsPerHead;
  const totalMonthlyPayroll = costPerEmployee * headcount;
  const annualPayroll = totalMonthlyPayroll * 12;

  const resultText = `Headcount: ${headcount} | Cost / Head: ₹${costPerEmployee.toFixed(0)} | Monthly Payroll: ₹${totalMonthlyPayroll.toLocaleString("en-IN")} | Annual Budget: ₹${(annualPayroll / 10000000).toFixed(2)} Cr`;

  const handleReset = () => {
    setHeadcount(40);
    setAvgGross(25000);
    setPfRate(12);
    setBenefitsPerHead(1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Total Employee Headcount</label>
          <input
            type="number"
            value={headcount}
            onChange={(e) => setHeadcount(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">Average Monthly Gross Salary / Employee (₹)</label>
          <input
            type="number"
            value={avgGross}
            onChange={(e) => setAvgGross(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Employer PF (%)</label>
            <input
              type="number"
              value={pfRate}
              onChange={(e) => setPfRate(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">Insurance / Welfare (₹/mo)</label>
            <input
              type="number"
              value={benefitsPerHead}
              onChange={(e) => setBenefitsPerHead(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm sm:text-base text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-teal-100 outline-none shadow-xs font-medium"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => {}}
          className="w-full rounded-2xl bg-gradient-to-r from-[#12B5A5] via-[#0E9486] to-[#0A7B6E] hover:from-[#0E9486] hover:to-[#086359] py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
        >
          <span>Calculate Total Payroll Cost →</span>
        </button>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#F0FDFB]/90 via-[#FAFDFD] to-white border-t lg:border-t-0 lg:border-l border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#0E7A6E] uppercase tracking-wider block">TOTAL MONTHLY COMMITMENT</span>
          <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-2">
            ₹{totalMonthlyPayroll.toLocaleString("en-IN")}
          </div>
          <p className="text-xs text-slate-500 mb-6">Total monthly payroll outgo for {headcount} team members</p>

          <div className="space-y-2.5 pt-4 border-t border-teal-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Cost per Employee:</span>
              <span className="font-semibold text-slate-800">₹{costPerEmployee.toFixed(0)} / mo</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Total Gross Wages:</span>
              <span className="font-semibold text-slate-800">₹{(avgGross * headcount).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-100/80">
              <span className="text-slate-600">Total Statutory Overheads:</span>
              <span className="font-semibold text-slate-800">₹{((employerPfPerHead + benefitsPerHead) * headcount).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 font-bold text-slate-900">
              <span>Annual Manpower Budget:</span>
              <span className="text-base text-[#0E7A6E]">₹{(annualPayroll / 10000000).toFixed(2)} Crore</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-2xl border border-teal-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-[#0E7A6E] hover:bg-teal-50/80 hover:border-teal-300 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Calculator</span>
          </button>
          <button
            type="button"
            onClick={() => onCopy(resultText)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0E7A6E] transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
