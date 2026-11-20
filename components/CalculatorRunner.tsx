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
    <div className="rounded-3xl border border-teal-100/90 bg-white p-6 sm:p-8 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F9F6] px-3 py-1 text-xs font-bold text-[#0E7A6E]">
            <Calculator className="h-3.5 w-3.5 text-[#12B5A5]" />
            Interactive Calculator
          </span>
          <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900">
            {name}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Printer className="h-3.5 w-3.5" />
            Print
          </button>
        </div>
      </div>

      <div className="mt-6">
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

// 1. SALARY PER DAY
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

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Monthly Gross Salary (₹)</label>
          <input
            type="number"
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(Number(e.target.value))}
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700">Days Basis</label>
          <select
            value={basis}
            onChange={(e) => setBasis(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 focus:border-[#12B5A5] focus:ring-1 focus:ring-[#12B5A5] outline-none"
          >
            <option value="fixed26">Fixed 26 days (Factory / Standard work days)</option>
            <option value="fixed30">Fixed 30 days (Commercial basis)</option>
            <option value="calendar">Calendar month (28, 29, 30 or 31)</option>
            <option value="custom">Custom days</option>
          </select>
        </div>

        {basis === "custom" && (
          <div>
            <label className="block text-sm font-semibold text-slate-700">Custom Days in Basis</label>
            <input
              type="number"
              value={customDays}
              onChange={(e) => setCustomDays(Number(e.target.value))}
              className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 focus:border-[#12B5A5] outline-none"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-slate-700">Days Attended / Paid</label>
          <input
            type="number"
            value={paidDays}
            onChange={(e) => setPaidDays(Number(e.target.value))}
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 focus:border-[#12B5A5] outline-none"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 space-y-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">Calculation Results</span>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Per-Day Salary:</span>
              <span className="font-display text-xl font-bold text-[#0E7A6E]">₹{perDay.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Per-Hour Rate (8h day):</span>
              <span className="text-base font-bold text-slate-800">₹{perHour8.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-semibold text-slate-800">Payable for {paidDays} days:</span>
              <span className="font-display text-2xl font-extrabold text-[#12B5A5]">₹{totalPay.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(resultText)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied Result!" : "Copy Results"}
        </button>
      </div>
    </div>
  );
}

// 2. ATTENDANCE CALCULATOR
function AttendanceCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [totalWorkingDays, setTotalWorkingDays] = useState<number>(24);
  const [presentDays, setPresentDays] = useState<number>(20);
  const [halfDays, setHalfDays] = useState<number>(2);
  const [targetPct, setTargetPct] = useState<number>(75);

  const attended = presentDays + halfDays * 0.5;
  const pct = totalWorkingDays > 0 ? (attended / totalWorkingDays) * 100 : 0;
  const absentDays = Math.max(0, totalWorkingDays - attended);
  const neededDays = Math.max(0, Math.ceil((targetPct / 100) * totalWorkingDays - attended));

  const resultText = `Attended Days: ${attended} / ${totalWorkingDays} | Attendance: ${pct.toFixed(1)}% | Absent: ${absentDays}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Total Working Days</label>
          <input
            type="number"
            value={totalWorkingDays}
            onChange={(e) => setTotalWorkingDays(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Full Present Days</label>
          <input
            type="number"
            value={presentDays}
            onChange={(e) => setPresentDays(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Half Days (counts as 0.5)</label>
          <input
            type="number"
            value={halfDays}
            onChange={(e) => setHalfDays(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Target Attendance %</label>
          <input
            type="number"
            value={targetPct}
            onChange={(e) => setTargetPct(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 space-y-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">Attendance Result</span>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Effective Attended Days:</span>
              <span className="text-lg font-bold text-slate-900">{attended} days</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Attendance Percentage:</span>
              <span className={`font-display text-2xl font-extrabold ${pct >= targetPct ? "text-[#12B5A5]" : "text-amber-600"}`}>
                {pct.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Absent Days:</span>
              <span className="text-base font-bold text-rose-600">{absentDays} days</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-slate-600">Days needed to reach {targetPct}%:</span>
              <span className="text-base font-bold text-[#0E7A6E]">{neededDays} days</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(resultText)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Result"}
        </button>
      </div>
    </div>
  );
}

// 3. OVERTIME CALCULATOR
function OvertimeCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [salary, setSalary] = useState(26000);
  const [basisDays, setBasisDays] = useState(26);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [otHours, setOtHours] = useState(10);
  const [multiplier, setMultiplier] = useState(2.0);

  const hourlyRate = basisDays > 0 && hoursPerDay > 0 ? salary / basisDays / hoursPerDay : 0;
  const otRate = hourlyRate * multiplier;
  const totalOtPay = otRate * otHours;

  const resultText = `Hourly: ₹${hourlyRate.toFixed(2)} | OT Rate (${multiplier}x): ₹${otRate.toFixed(2)} | Total OT Pay (${otHours} hrs): ₹${totalOtPay.toFixed(2)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Monthly Basic / Fixed Salary (₹)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Basis Days</label>
            <input
              type="number"
              value={basisDays}
              onChange={(e) => setBasisDays(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Hours per day</label>
            <input
              type="number"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Overtime Hours</label>
            <input
              type="number"
              value={otHours}
              onChange={(e) => setOtHours(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Multiplier</label>
            <select
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            >
              <option value="1.0">1.0x (Single rate)</option>
              <option value="1.5">1.5x (Time-and-a-half)</option>
              <option value="2.0">2.0x (Factories Act double rate)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 space-y-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">Overtime Computation</span>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Standard Hourly Rate:</span>
              <span className="text-base font-bold text-slate-800">₹{hourlyRate.toFixed(2)} / hr</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Overtime Rate ({multiplier}x):</span>
              <span className="text-lg font-bold text-[#0E7A6E]">₹{otRate.toFixed(2)} / hr</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-semibold text-slate-800">Total OT Pay ({otHours} hours):</span>
              <span className="font-display text-2xl font-extrabold text-[#12B5A5]">₹{totalOtPay.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(resultText)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Result"}
        </button>
      </div>
    </div>
  );
}

// 4. LEAVE CALCULATOR
function LeaveCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [opening, setOpening] = useState(2);
  const [perMonth, setPerMonth] = useState(1.5);
  const [months, setMonths] = useState(12);
  const [taken, setTaken] = useState(10);
  const [carryCap, setCarryCap] = useState(8);

  const accrued = perMonth * months;
  const available = opening + accrued - taken;
  const carryForward = Math.min(Math.max(0, available), carryCap);
  const lapsed = Math.max(0, available - carryForward);

  const resultText = `Accrued: ${accrued} | Available: ${available} | Carry forward: ${carryForward} | Lapsed: ${lapsed}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Opening Balance</label>
            <input
              type="number"
              value={opening}
              onChange={(e) => setOpening(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Accrual per month</label>
            <input
              type="number"
              step="0.25"
              value={perMonth}
              onChange={(e) => setPerMonth(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Months Elapsed</label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Leaves Taken</label>
            <input
              type="number"
              value={taken}
              onChange={(e) => setTaken(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Carry Forward Max Cap</label>
          <input
            type="number"
            value={carryCap}
            onChange={(e) => setCarryCap(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 space-y-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">Leave Balance Summary</span>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Total Accrued this year:</span>
              <span className="text-base font-bold text-slate-800">{accrued} days</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Current Available Balance:</span>
              <span className="font-display text-xl font-bold text-[#0E7A6E]">{available} days</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Carry Forward to Next Year:</span>
              <span className="text-base font-bold text-[#12B5A5]">{carryForward} days</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-slate-600">Lapsed / Lost Leaves:</span>
              <span className="text-base font-bold text-rose-500">{lapsed} days</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(resultText)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Result"}
        </button>
      </div>
    </div>
  );
}

// 5. SALARY BREAKUP CALCULATOR
function SalaryBreakupCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [monthlyGross, setMonthlyGross] = useState(45000);
  const [basicPct, setBasicPct] = useState(50);
  const [hasPf, setHasPf] = useState(true);
  const [hasEsi, setHasEsi] = useState(false);
  const [pt, setPt] = useState(200);

  const basic = (monthlyGross * basicPct) / 100;
  const hra = basic * 0.4;
  const specialAllowance = Math.max(0, monthlyGross - basic - hra);

  // PF: 12% of basic up to 15000 ceiling
  const pfWage = Math.min(basic, 15000);
  const employeePf = hasPf ? pfWage * 0.12 : 0;

  // ESI: 0.75% of gross if gross <= 21000
  const employeeEsi = hasEsi && monthlyGross <= 21000 ? monthlyGross * 0.0075 : 0;

  const totalDeductions = employeePf + employeeEsi + pt;
  const netInHand = monthlyGross - totalDeductions;

  const resultText = `Gross: ₹${monthlyGross} | Basic: ₹${basic} | HRA: ₹${hra} | Special: ₹${specialAllowance} | Deductions: ₹${totalDeductions} | Net In-Hand: ₹${netInHand}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Monthly Gross Salary (₹)</label>
          <input
            type="number"
            value={monthlyGross}
            onChange={(e) => setMonthlyGross(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Basic Salary Percentage ({basicPct}%)</label>
          <input
            type="range"
            min="30"
            max="60"
            value={basicPct}
            onChange={(e) => setBasicPct(Number(e.target.value))}
            className="w-full accent-[#12B5A5]"
          />
        </div>
        <div className="flex items-center gap-6 pt-2">
          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={hasPf}
              onChange={(e) => setHasPf(e.target.checked)}
              className="accent-[#12B5A5] h-4 w-4"
            />
            PF Deduction (12%)
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={hasEsi}
              onChange={(e) => setHasEsi(e.target.checked)}
              className="accent-[#12B5A5] h-4 w-4"
            />
            ESI Deduction (0.75%)
          </label>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Professional Tax (PT)</label>
          <input
            type="number"
            value={pt}
            onChange={(e) => setPt(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 space-y-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">Salary Breakup Structure</span>
          <div className="mt-3 space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between py-1.5 border-b border-teal-100">
              <span className="text-slate-600">Basic Salary ({basicPct}%):</span>
              <span className="font-bold text-slate-800">₹{basic.toFixed(0)}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-teal-100">
              <span className="text-slate-600">HRA (40% of Basic):</span>
              <span className="font-bold text-slate-800">₹{hra.toFixed(0)}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-teal-100">
              <span className="text-slate-600">Special Allowance:</span>
              <span className="font-bold text-slate-800">₹{specialAllowance.toFixed(0)}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-teal-100 text-rose-600">
              <span>Employee PF (12%):</span>
              <span className="font-bold">-₹{employeePf.toFixed(0)}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-teal-100 text-rose-600">
              <span>Professional Tax:</span>
              <span className="font-bold">-₹{pt.toFixed(0)}</span>
            </div>
            <div className="flex justify-between py-2 pt-3">
              <span className="text-sm font-bold text-slate-900">Net Take-Home Salary:</span>
              <span className="font-display text-2xl font-extrabold text-[#12B5A5]">₹{netInHand.toFixed(0)}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(resultText)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Result"}
        </button>
      </div>
    </div>
  );
}

// 6. WORKING DAYS CALCULATOR
function WorkingDaysCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(11); // Nov
  const [weeklyOffRule, setWeeklyOffRule] = useState("sundays_only");
  const [holidays, setHolidays] = useState(2);

  const daysInMonth = new Date(year, month, 0).getDate();
  let sundays = 0;
  let saturdays = 0;
  for (let d = 1; d <= daysInMonth; d++) {
    const dayOfWeek = new Date(year, month - 1, d).getDay();
    if (dayOfWeek === 0) sundays++;
    if (dayOfWeek === 6) saturdays++;
  }

  let weeklyOffs = sundays;
  if (weeklyOffRule === "all_sats") weeklyOffs += saturdays;
  else if (weeklyOffRule === "second_fourth_sat") weeklyOffs += 2;

  const netWorkingDays = Math.max(0, daysInMonth - weeklyOffs - holidays);
  const resultText = `Total Days: ${daysInMonth} | Weekly Offs: ${weeklyOffs} | Holidays: ${holidays} | Working Days: ${netWorkingDays}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Month</label>
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            >
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ].map((m, i) => (
                <option key={m} value={i + 1}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700">Weekly Off Pattern</label>
          <select
            value={weeklyOffRule}
            onChange={(e) => setWeeklyOffRule(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          >
            <option value="sundays_only">Sundays Only (6-day week)</option>
            <option value="second_fourth_sat">2nd & 4th Saturdays + Sundays</option>
            <option value="all_sats">All Saturdays & Sundays (5-day week)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700">Declared Public / Festival Holidays</label>
          <input
            type="number"
            value={holidays}
            onChange={(e) => setHolidays(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 space-y-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">Working Days Analysis</span>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Calendar Days in Month:</span>
              <span className="text-base font-bold text-slate-800">{daysInMonth} days</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Weekly Offs:</span>
              <span className="text-base font-bold text-slate-800">{weeklyOffs} days</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Public Holidays:</span>
              <span className="text-base font-bold text-slate-800">{holidays} days</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-bold text-slate-900">Net Working Days:</span>
              <span className="font-display text-2xl font-extrabold text-[#12B5A5]">{netWorkingDays} days</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(resultText)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Result"}
        </button>
      </div>
    </div>
  );
}

// 7. CTC TO IN-HAND CALCULATOR
function CtcToInHandCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [annualCtc, setAnnualCtc] = useState(600000);
  const [variablePay, setVariablePay] = useState(50000);

  const fixedCtc = Math.max(0, annualCtc - variablePay);
  const monthlyGross = fixedCtc / 12;
  const basic = monthlyGross * 0.5;
  const pf = Math.min(basic, 15000) * 0.12;
  const pt = 200;
  const monthlyInHand = monthlyGross - pf - pt;
  const annualInHand = monthlyInHand * 12 + variablePay * 0.9;

  const resultText = `CTC: ₹${annualCtc} | Monthly In-Hand: ₹${monthlyInHand.toFixed(0)} | Annual In-Hand: ₹${annualInHand.toFixed(0)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Annual CTC (₹)</label>
          <input
            type="number"
            value={annualCtc}
            onChange={(e) => setAnnualCtc(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Annual Variable Pay / Bonus (₹)</label>
          <input
            type="number"
            value={variablePay}
            onChange={(e) => setVariablePay(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 space-y-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">In-Hand Salary Breakdown</span>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Fixed Monthly Gross:</span>
              <span className="text-base font-bold text-slate-800">₹{monthlyGross.toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Monthly Deductions (PF + PT):</span>
              <span className="text-base font-bold text-rose-600">-₹{(pf + pt).toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm font-semibold text-slate-800">Monthly Take-Home:</span>
              <span className="font-display text-2xl font-extrabold text-[#12B5A5]">₹{monthlyInHand.toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-slate-600">Estimated Annual In-Hand:</span>
              <span className="text-lg font-bold text-[#0E7A6E]">₹{annualInHand.toFixed(0)}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(resultText)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Result"}
        </button>
      </div>
    </div>
  );
}

// 8. GRATUITY CALCULATOR
function GratuityCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [basicSalary, setBasicSalary] = useState(40000);
  const [years, setYears] = useState(6);

  const isEligible = years >= 5;
  // Formula: (15 * last drawn basic * years) / 26
  const rawGratuity = (15 * basicSalary * years) / 26;
  const gratuity = Math.min(rawGratuity, 2000000); // capped at 20L under Payment of Gratuity Act

  const resultText = `Basic: ₹${basicSalary} | Service: ${years} yrs | Gratuity: ₹${gratuity.toFixed(0)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Last Drawn Basic Salary + DA (₹)</label>
          <input
            type="number"
            value={basicSalary}
            onChange={(e) => setBasicSalary(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Completed Years of Service</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
          <p className="mt-1 text-xs text-slate-500">Minimum 5 years of continuous service required for gratuity eligibility.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 space-y-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">Gratuity Computation</span>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Eligibility Status:</span>
              <span className={`text-sm font-bold ${isEligible ? "text-[#12B5A5]" : "text-amber-600"}`}>
                {isEligible ? "Eligible (>= 5 Years)" : "Not eligible (< 5 Years)"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Formula:</span>
              <span className="text-xs font-mono text-slate-700">(15 × {basicSalary} × {years}) ÷ 26</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-bold text-slate-900">Payable Gratuity:</span>
              <span className="font-display text-2xl font-extrabold text-[#12B5A5]">₹{gratuity.toFixed(0)}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(resultText)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Result"}
        </button>
      </div>
    </div>
  );
}

// 9. PAYROLL COST CALCULATOR
function PayrollCostCalc({ onCopy, copied }: { onCopy: (s: string) => void; copied: boolean }) {
  const [employees, setEmployees] = useState(50);
  const [avgSalary, setAvgSalary] = useState(35000);
  const [employerPf, setEmployerPf] = useState(true);
  const [softwareFeePerStaff, setSoftwareFeePerStaff] = useState(40);

  const grossWages = employees * avgSalary;
  const basicWages = grossWages * 0.5;
  const pfCost = employerPf ? Math.min(basicWages, employees * 15000) * 0.12 : 0;
  const softwareCost = employees * softwareFeePerStaff;
  const totalMonthlyCost = grossWages + pfCost + softwareCost;
  const annualCost = totalMonthlyCost * 12;

  const resultText = `Employees: ${employees} | Monthly Payroll Cost: ₹${totalMonthlyCost.toFixed(0)} | Annual Cost: ₹${annualCost.toFixed(0)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Total Headcount</label>
          <input
            type="number"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Average Gross Salary per Employee (₹)</label>
          <input
            type="number"
            value={avgSalary}
            onChange={(e) => setAvgSalary(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-[#12B5A5]"
          />
        </div>
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            checked={employerPf}
            onChange={(e) => setEmployerPf(e.target.checked)}
            className="accent-[#12B5A5] h-4 w-4"
          />
          <span className="text-sm text-slate-700">Include Employer PF Contribution (12%)</span>
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-[#F0FDFB] p-6 space-y-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7A6E]">Total Employer Payroll Cost</span>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Total Gross Salaries:</span>
              <span className="text-base font-bold text-slate-800">₹{grossWages.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm text-slate-600">Employer PF Contribution:</span>
              <span className="text-base font-bold text-[#0E7A6E]">₹{pfCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-teal-100">
              <span className="text-sm font-bold text-slate-900">Total Monthly Cost:</span>
              <span className="font-display text-2xl font-extrabold text-[#12B5A5]">₹{totalMonthlyCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-slate-600">Projected Annual Cost:</span>
              <span className="text-lg font-bold text-slate-800">₹{annualCost.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(resultText)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12B5A5] to-[#0E9486] py-3 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Result"}
        </button>
      </div>
    </div>
  );
}
