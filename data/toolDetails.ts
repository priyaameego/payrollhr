export interface ToolDetail {
  slug: string;
  name: string;
  category: "Salary & Pay" | "Attendance & Leave" | "Statutory & Exit";
  short: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  introduction: string;
  whoIsItFor: {
    role: string;
    benefit: string;
  }[];
  whatItDoes: string[];
  howToUseSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  formulaHeading: string;
  formulaCode: string;
  formulaBreakdown: {
    variable: string;
    meaning: string;
  }[];
  workedExample: {
    scenario: string;
    inputs: { label: string; value: string }[];
    calculation: string[];
    result: string;
    note: string;
  };
  interpretationAndTips: string[];
  faqs: {
    q: string;
    a: string;
  }[];
  relatedToolSlugs: string[];
  relatedFeature: {
    name: string;
    slug: string;
    tagline: string;
  };
}

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  "salary-per-day-calculator": {
    slug: "salary-per-day-calculator",
    name: "Salary Per Day Calculator",
    category: "Salary & Pay",
    short: "Calculate daily wage rate and hourly pay from monthly gross salary across 26-day, 30-day, or calendar basis.",
    h1: "Salary Per Day Calculator (Daily & Hourly Wage Engine)",
    metaTitle: "Salary Per Day Calculator — Calculate Daily & Hourly Rate | PayroleHR",
    metaDescription: "Free online salary per day calculator for Indian businesses. Compute daily wage, hourly rate, and payable amount across 26-day, 30-day, and calendar month formulas.",
    heroBadge: "Wage Rate Calculator",
    introduction: "Accurately compute daily wage rates, hourly earnings, and payable monthly salary based on attended working days. Tailored for Indian payroll operations where wage divisors vary between factories, commercial offices, and service enterprises.",
    whoIsItFor: [
      { role: "Factory Owners & Plant Managers", benefit: "Calculate daily wages for workers based on the statutory 26 working days standard." },
      { role: "HR Executives & Payroll Teams", benefit: "Quickly determine salary deductions for loss of pay (LOP) or partial-month joiners." },
      { role: "Employees & Contractors", benefit: "Verify per-day take-home calculations and ensure accurate payment for attended days." },
      { role: "Commercial Office Admins", benefit: "Choose between calendar day divisor or fixed 30-day corporate wage conventions." },
    ],
    whatItDoes: [
      "Calculates the exact daily earning rate from any monthly gross or basic salary.",
      "Derives standard hourly rates based on typical 8-hour or 9-hour work shifts.",
      "Calculates total payable salary based on actual paid and attended days in the cycle.",
      "Supports 4 flexible divisor conventions: 26 Days (Factories), 30 Days (Commercial), Calendar Month Days, and Custom Days.",
    ],
    howToUseSteps: [
      { step: 1, title: "Enter Monthly Gross Salary", description: "Input the total agreed monthly salary before statutory deductions." },
      { step: 2, title: "Select Days Basis", description: "Choose the wage divisor your employment agreement follows (26 days, 30 days, calendar days, or custom)." },
      { step: 3, title: "Input Paid / Attended Days", description: "Enter the number of present days including eligible paid weekly offs and holidays." },
      { step: 4, title: "View & Copy Results", description: "Instantly see daily wage, hourly rate, and total payable amount with 1-click clipboard copy." },
    ],
    formulaHeading: "Salary Per Day Mathematical Formula",
    formulaCode: "Per-Day Rate = Monthly Gross Salary ÷ Days in Wage Basis\nHourly Rate = Per-Day Rate ÷ Standard Shift Hours (8 hrs)\nTotal Payable = Per-Day Rate × Actual Paid Days",
    formulaBreakdown: [
      { variable: "Monthly Gross Salary", meaning: "Total fixed monthly compensation including Basic, HRA, and fixed allowances." },
      { variable: "Wage Basis (Divisor)", meaning: "26 days (excluding 4 Sundays for industrial staff), 30 days, or calendar month days (28-31)." },
      { variable: "Actual Paid Days", meaning: "Sum of attended days, approved paid leaves, and entitled weekly rest days." },
    ],
    workedExample: {
      scenario: "A manufacturing supervisor earns a monthly gross salary of ₹26,000 in a factory operating on a standard 26-working-day divisor. The supervisor attends 24 paid days in October.",
      inputs: [
        { label: "Monthly Gross Salary", value: "₹26,000" },
        { label: "Wage Basis", value: "Fixed 26 Days" },
        { label: "Shift Duration", value: "8 Hours / Day" },
        { label: "Attended Paid Days", value: "24 Days" },
      ],
      calculation: [
        "Per-Day Rate = ₹26,000 ÷ 26 = ₹1,000.00 per day",
        "Hourly Rate = ₹1,000 ÷ 8 = ₹125.00 per hour",
        "Total Payable = ₹1,000 × 24 = ₹24,000.00",
      ],
      result: "Daily Rate: ₹1,000.00 | Total Payable: ₹24,000.00",
      note: "If calendar month (31 days) was used, daily rate would be ₹838.71, demonstrating why standardizing wage basis is essential in employment contracts.",
    },
    interpretationAndTips: [
      "Manufacturing & Factory standard: The 26-day basis is standard under Indian industrial jurisprudence because weekly rest days are non-working.",
      "Corporate standard: White-collar commercial establishments typically utilize calendar month days (28 to 31) where weekly offs are included as paid days.",
      "Mid-month joiners: Always calculate partial salaries using the organization's designated divisor to prevent payroll disputes.",
    ],
    faqs: [
      { q: "Which wage divisor basis should my company use?", a: "Follow what is defined in your employment contract or standing orders. Industrial units governed by the Factories Act commonly use 26 days. Commercial and tech firms often use calendar days (28, 30, or 31) or fixed 30 days." },
      { q: "Are weekly offs and holidays included in paid days?", a: "If you calculate on a calendar month basis (30/31 days), weekly offs are counted as paid days. If you use a 26-day basis, weekly offs are already excluded from the divisor." },
      { q: "How is Loss of Pay (LOP) calculated using this daily rate?", a: "Loss of pay deduction equals the calculated per-day salary multiplied by the number of unapproved absent days." },
      { q: "Does this daily rate include employer statutory contributions?", a: "No, the per-day rate should be calculated on the employee's gross salary, excluding employer PF and ESIC contributions." },
    ],
    relatedToolSlugs: ["overtime-calculator", "working-days-calculator", "attendance-calculator", "salary-breakup-calculator"],
    relatedFeature: {
      name: "Payroll Processing Engine",
      slug: "payroll-processing",
      tagline: "Automate daily wage calculations, loss-of-pay deductions, and monthly salary disbursement in seconds.",
    },
  },

  "attendance-calculator": {
    slug: "attendance-calculator",
    name: "Attendance Calculator",
    category: "Attendance & Leave",
    short: "Calculate employee attendance percentage, half-day impacts, and days needed to reach attendance compliance targets.",
    h1: "Attendance Calculator (Percentage & Compliance Engine)",
    metaTitle: "Attendance Calculator — Calculate Attendance Percentage & Days | PayroleHR",
    metaDescription: "Free employee attendance percentage calculator. Compute attendance rate, evaluate half-day deductions, and determine days needed to meet attendance thresholds.",
    heroBadge: "Attendance Compliance",
    introduction: "Calculate accurate attendance percentages and compliance rates for shift workers, corporate employees, and students. Factored for half-day punches, approved leaves, and customizable total working periods.",
    whoIsItFor: [
      { role: "HR Executives", benefit: "Evaluate monthly attendance percentages for incentive eligibility and performance appraisals." },
      { role: "Store & Branch Supervisors", benefit: "Track shift punctuality and attendance compliance across retail outlets and field offices." },
      { role: "Payroll Administrators", benefit: "Ensure employees meet mandatory attendance thresholds for full salary eligibility." },
      { role: "Institutes & Training Centers", benefit: "Track student and trainee attendance compliance against minimum statutory requirements." },
    ],
    whatItDoes: [
      "Computes exact attendance percentage considering both full days and half days.",
      "Calculates total effective present days with weighted half-day credits (0.5 day).",
      "Identifies absenteeism count and rate across any customized working period.",
      "Provides clear compliance assessment against 75%, 85%, or 90% attendance standards.",
    ],
    howToUseSteps: [
      { step: 1, title: "Input Total Working Days", description: "Enter total scheduled working days in the month or evaluation period." },
      { step: 2, title: "Enter Present Full Days", description: "Input days the employee completed full scheduled shift hours." },
      { step: 3, title: "Enter Half Days (If Any)", description: "Specify half-day punches or authorized half-day leaves (each weighted at 0.5)." },
      { step: 4, title: "Review Percentage & Status", description: "Get the effective present days, absenteeism count, and percentage instantly." },
    ],
    formulaHeading: "Attendance Percentage Formula",
    formulaCode: "Effective Present Days = Full Days Present + (Half Days × 0.5)\nAttendance Percentage = (Effective Present Days ÷ Total Working Days) × 100\nAbsent Days = Total Working Days − Effective Present Days",
    formulaBreakdown: [
      { variable: "Total Working Days", meaning: "Total scheduled operational days excluding paid weekly offs and statutory holidays." },
      { variable: "Full Days Present", meaning: "Days where biometric check-in and check-out met full shift requirements." },
      { variable: "Half Days", meaning: "Shifts with partial attendance (late arrival or early departure exceeding grace limit)." },
    ],
    workedExample: {
      scenario: "An employee has 24 scheduled working days in a month. They attended 20 full days, took 2 half-days due to personal permissions, and were absent on 2 days.",
      inputs: [
        { label: "Total Working Days", value: "24 Days" },
        { label: "Full Days Present", value: "20 Days" },
        { label: "Half Days", value: "2 Days" },
      ],
      calculation: [
        "Effective Present Days = 20 + (2 × 0.5) = 21.0 Days",
        "Attendance % = (21.0 ÷ 24) × 100 = 87.50%",
        "Absenteeism = 24 − 21.0 = 3.0 Days (12.50%)",
      ],
      result: "Attendance Percentage: 87.50% | Effective Present: 21.0 Days",
      note: "Meeting an 85% attendance incentive threshold requires at least 20.4 effective days, meaning this employee comfortably qualifies.",
    },
    interpretationAndTips: [
      "Incentive eligibility: Most Indian manufacturing plants require 85% to 90% attendance for monthly attendance allowance payouts.",
      "Half-day rules: Ensure your company policy clearly specifies the minimum work hours (usually 4 to 4.5 hours) needed to count as a half-day.",
      "Sandwich rule: Ensure unapproved leave bordering weekly offs does not inflate absent counts unless company policy specifically enforces sandwich leave.",
    ],
    faqs: [
      { q: "How are half days treated in the attendance formula?", a: "Each half day is weighted as 0.5 present day and 0.5 absent day in accordance with standard Indian industrial norms." },
      { q: "Are paid holidays and weekly offs included in total working days?", a: "No, total working days should only include days the employee was expected to attend work, excluding paid weekly offs and public holidays." },
      { q: "How does PayroleHR automate attendance percentage calculation?", a: "PayroleHR connects biometric face kiosks and GPS mobile punches directly into the live muster roll, calculating attendance percentages automatically." },
    ],
    relatedToolSlugs: ["working-days-calculator", "leave-calculator", "salary-per-day-calculator", "overtime-calculator"],
    relatedFeature: {
      name: "Time & Attendance Module",
      slug: "attendance-management",
      tagline: "Track real-time biometric and mobile GPS check-ins with automated attendance registers and percentage reports.",
    },
  },

  "overtime-calculator": {
    slug: "overtime-calculator",
    name: "Overtime Calculator",
    category: "Salary & Pay",
    short: "Calculate overtime wage payments using ordinary hourly rates, statutory multipliers (1.5x, 2x), and total OT hours.",
    h1: "Overtime Calculator (Factories Act & Commercial OT Engine)",
    metaTitle: "Overtime Calculator — Calculate OT Pay & Hourly Rate | PayroleHR",
    metaDescription: "Free overtime calculator for Indian companies. Calculate overtime wages at 1.5x or 2x rate under the Factories Act 1948 and Shops & Establishments Acts.",
    heroBadge: "Overtime Compliance",
    introduction: "Calculate compliant overtime compensation for industrial workers, shift operators, and staff. Built with Indian statutory rules including Section 59 of the Factories Act 1948 (double rate) and commercial establishment rates.",
    whoIsItFor: [
      { role: "Factory & Plant Managers", benefit: "Ensure compliance with Section 59 of the Factories Act regarding mandatory 2x overtime rates." },
      { role: "Payroll & Accounts Officers", benefit: "Accurately compute total OT earnings and prevent wage calculation disputes." },
      { role: "Shift Supervisors", benefit: "Budget and forecast overtime expenditure before approving extended shifts." },
      { role: "Workers & Employees", benefit: "Verify overtime payments reflected on monthly salary slips." },
    ],
    whatItDoes: [
      "Determines the ordinary hourly rate from gross or basic wages.",
      "Applies legal overtime multipliers: 2.0x (Factories Act / Industrial), 1.5x (Commercial), or custom multipliers.",
      "Calculates total overtime remuneration based on verified OT hours.",
      "Projects combined monthly payout including basic salary and overtime compensation.",
    ],
    howToUseSteps: [
      { step: 1, title: "Enter Monthly Base Salary", description: "Input the salary component applicable for OT calculations (typically Basic + DA or Gross as per policy)." },
      { step: 2, title: "Specify Working Days & Shift Hours", description: "Enter divisor days (typically 26 days in factories) and normal shift hours (typically 8 hours)." },
      { step: 3, title: "Select Overtime Multiplier", description: "Choose 2.0x for Factories Act compliance or 1.5x for commercial establishments." },
      { step: 4, title: "Input Total Overtime Hours", description: "Enter total verified overtime hours worked during the payroll cycle." },
    ],
    formulaHeading: "Statutory Overtime Calculation Formula",
    formulaCode: "Hourly Rate = Applicable Monthly Wage ÷ (Days in Month × Shift Hours)\nOvertime Rate per Hour = Hourly Rate × Overtime Multiplier (2.0x or 1.5x)\nTotal Overtime Pay = Overtime Rate per Hour × Total Overtime Hours Worked",
    formulaBreakdown: [
      { variable: "Applicable Monthly Wage", meaning: "Ordinary rate of wages (under the Factories Act, this includes Basic + DA + cash allowances, excluding bonus)." },
      { variable: "Shift Hours", meaning: "Standard statutory shift duration, usually 8 hours per day / 48 hours per week." },
      { variable: "Overtime Multiplier", meaning: "2.0x ordinary rate under Section 59 of Factories Act; 1.5x or 2.0x under various State Shops & Establishments Acts." },
    ],
    workedExample: {
      scenario: "A factory machine operator earns a base salary (Basic + DA) of ₹26,000 on a 26-day basis with 8-hour daily shifts. The operator worked 16 overtime hours in a month.",
      inputs: [
        { label: "Base Salary", value: "₹26,000" },
        { label: "Days Basis", value: "26 Days" },
        { label: "Shift Duration", value: "8 Hours / Day" },
        { label: "OT Multiplier", value: "2.0x (Double Ordinary Rate)" },
        { label: "OT Hours Worked", value: "16 Hours" },
      ],
      calculation: [
        "Ordinary Hourly Rate = ₹26,000 ÷ (26 × 8) = ₹26,000 ÷ 208 = ₹125.00 / hr",
        "Overtime Rate = ₹125.00 × 2.0 = ₹250.00 / hr",
        "Total Overtime Pay = ₹250.00 × 16 hrs = ₹4,000.00",
      ],
      result: "OT Rate: ₹250.00/hr | Total Overtime Pay: ₹4,000.00",
      note: "Total monthly earnings become ₹26,000 + ₹4,000 = ₹30,000.00 before statutory deductions.",
    },
    interpretationAndTips: [
      "Factories Act Section 59: Any worker working more than 9 hours in a day or 48 hours in a week is entitled to wages at twice their ordinary rate.",
      "Quarterly limits: Indian labor laws restrict total overtime to 50 to 125 hours per quarter (depending on state amendment rules).",
      "Salary component: Overtime cannot be paid below the minimum wage threshold applicable to the skill category.",
    ],
    faqs: [
      { q: "What is the statutory overtime rate in India?", a: "Under Section 59 of the Factories Act 1948, overtime must be paid at twice (2x) the ordinary rate of wages. For commercial establishments, state Shops & Establishments Acts specify either 1.5x or 2x." },
      { q: "Is HRA included in the overtime wage calculation?", a: "Under the Factories Act definition of 'ordinary rate of wages', house rent allowance and other cash value allowances are generally included, whereas performance bonuses are excluded." },
      { q: "Can overtime be compensated with comp-off leaves instead of pay?", a: "In factories, monetary overtime compensation is mandatory under the Factories Act. In commercial establishments, comp-offs may be permitted if aligned with company policy and state rules." },
    ],
    relatedToolSlugs: ["salary-per-day-calculator", "working-days-calculator", "payroll-cost-calculator", "attendance-calculator"],
    relatedFeature: {
      name: "Shift & Overtime Management",
      slug: "shift-management",
      tagline: "Track punch in/out times and automate overtime pay calculations with compliance limits.",
    },
  },

  "leave-calculator": {
    slug: "leave-calculator",
    name: "Leave Calculator",
    category: "Attendance & Leave",
    short: "Calculate leave accruals, available balances, carry forward limits, and lapsed leaves across CL, SL, and PL.",
    h1: "Leave Balance & Carry Forward Calculator",
    metaTitle: "Leave Calculator — Calculate Accrued Leave & Carry Forward | PayroleHR",
    metaDescription: "Free annual leave calculator for HR managers. Calculate opening balance, monthly accrual, leaves taken, carry forward caps, and encashment.",
    heroBadge: "Leave Ledger Engine",
    introduction: "Accurately compute leave entitlement, monthly accrual balances, carry forward limits, and year-end lapsed leaves. Supports Casual Leave (CL), Sick Leave (SL), and Earned / Privilege Leave (EL/PL).",
    whoIsItFor: [
      { role: "HR Executives", benefit: "Maintain error-free leave ledgers and calculate year-end carry forward balances." },
      { role: "Employees", benefit: "Check remaining leave balances and plan vacations without manual HR enquiries." },
      { role: "Finance Teams", benefit: "Calculate leave encashment liability for full and final settlement (FnF)." },
      { role: "Operations Heads", benefit: "Prevent staff absenteeism spikes during holiday seasons by monitoring leave caps." },
    ],
    whatItDoes: [
      "Calculates total leaves accrued based on tenure and monthly accrual rate.",
      "Computes remaining available balance after accounting for leaves taken.",
      "Applies company carry forward caps to determine allowable balance for next year.",
      "Calculates lapsed leaves that exceed statutory or organization accumulation limits.",
    ],
    howToUseSteps: [
      { step: 1, title: "Enter Opening Balance", description: "Input leave balance brought forward from the previous calendar year." },
      { step: 2, title: "Specify Monthly Accrual Rate", description: "Enter leaves credited per month (e.g. 1.5 days for Privilege Leave)." },
      { step: 3, title: "Input Months Worked & Leaves Taken", description: "Enter completed tenure months and total leaves availed during the period." },
      { step: 4, title: "Set Carry Forward Cap", description: "Enter maximum allowable leave accumulation limit as per company policy." },
    ],
    formulaHeading: "Leave Accrual & Balance Formula",
    formulaCode: "Total Accrued = Opening Balance + (Monthly Accrual Rate × Tenure Months)\nAvailable Balance = Total Accrued − Leaves Taken\nCarry Forward to Next Year = Minimum(Available Balance, Carry Forward Cap)\nLapsed Leaves = Maximum(0, Available Balance − Carry Forward Cap)",
    formulaBreakdown: [
      { variable: "Opening Balance", meaning: "Unused leaves carried forward from the preceding year's closing ledger." },
      { variable: "Monthly Accrual Rate", meaning: "Statutory credit rate (typically 1.25 to 1.75 days per month for Earned Leaves)." },
      { variable: "Carry Forward Cap", meaning: "Statutory or policy ceiling (commonly 30 to 45 days in India)." },
    ],
    workedExample: {
      scenario: "An employee begins the year with 4 unused leaves. Company policy accrues 1.5 privilege leaves per month with a maximum carry-forward limit of 15 days. Over 12 months, the employee takes 8 leaves.",
      inputs: [
        { label: "Opening Balance", value: "4.0 Days" },
        { label: "Accrual Rate", value: "1.5 Days / Month" },
        { label: "Tenure Evaluated", value: "12 Months" },
        { label: "Leaves Taken", value: "8.0 Days" },
        { label: "Carry Forward Cap", value: "15.0 Days" },
      ],
      calculation: [
        "Total Accrued = 4.0 + (1.5 × 12) = 4.0 + 18.0 = 22.0 Days",
        "Available Balance = 22.0 − 8.0 = 14.0 Days",
        "Carry Forward to Next Year = Min(14.0, 15.0) = 14.0 Days",
        "Lapsed Leaves = 0.0 Days (within cap)",
      ],
      result: "Available Balance: 14.0 Days | Carried Forward: 14.0 Days",
      note: "Because available balance (14 days) is below the 15-day cap, zero leaves lapse, and all 14 days roll into the next year.",
    },
    interpretationAndTips: [
      "Factories Act Section 79: Every worker who has worked 240 days in a calendar year is entitled to annual leave with wages at the rate of 1 day for every 20 days worked.",
      "Leave encashment: Accumulated privilege leaves up to statutory limits can be encashed during service or at separation (tax-exempt up to ₹25 lakh for non-government employees under Section 10(10AA)).",
      "Casual leave lapse: Casual Leave (CL) and Sick Leave (SL) typically lapse at calendar year-end and cannot be carried forward.",
    ],
    faqs: [
      { q: "What is the difference between lapsed leave and carry forward leave?", a: "Carry forward leave is the unused balance rolled over to the next calendar year up to the company cap. Any unused leaves exceeding this limit lapse and are forfeited unless encashed." },
      { q: "Can casual leave (CL) be accumulated or carried forward?", a: "In most Indian organizations, Casual Leave is meant for unforeseen personal needs and must be utilized within the calendar year. Unused CL usually lapses on December 31." },
      { q: "How is leave encashment calculated at exit?", a: "Leave encashment is calculated as: (Basic Salary + DA ÷ 30 or 26) × Accumulated Earned Leave days, subject to company policy and statutory limits." },
    ],
    relatedToolSlugs: ["attendance-calculator", "working-days-calculator", "salary-per-day-calculator", "gratuity-calculator"],
    relatedFeature: {
      name: "Leave Management System",
      slug: "leave-management",
      tagline: "Automate leave balances, multi-tier approvals on WhatsApp, and leave encashment rules seamlessly.",
    },
  },

  "salary-breakup-calculator": {
    slug: "salary-breakup-calculator",
    name: "Salary Breakup Calculator",
    category: "Salary & Pay",
    short: "Split annual CTC into Basic Salary, HRA, Provident Fund, ESIC, and Special Allowances matching Indian payroll standards.",
    h1: "Salary Breakup Calculator (CTC to Components Split)",
    metaTitle: "Salary Breakup Calculator — Split CTC into Basic, HRA & Allowances | PayroleHR",
    metaDescription: "Free salary breakup calculator for Indian employers. Split annual CTC into Basic (40-50%), HRA, Employer PF, Gratuity provision, and Special Allowance.",
    heroBadge: "CTC Structure Builder",
    introduction: "Structure compliant, tax-optimized CTC salary breakdowns for job offers and salary revisions. Automatically separates employee gross salary from employer statutory liabilities (PF, ESI, Gratuity).",
    whoIsItFor: [
      { role: "HR & Recruitment Teams", benefit: "Generate compliant salary breakdown annexures for offer letters in under 60 seconds." },
      { role: "Compensation & Benefits Heads", benefit: "Optimize tax efficiency for staff while maintaining statutory EPF and ESIC compliance." },
      { role: "Job Seekers & Employees", benefit: "Understand the difference between Cost to Company (CTC), Gross Salary, and In-Hand Pay." },
      { role: "Startup Founders", benefit: "Design competitive, legally sound compensation structures without consulting high-cost advisory." },
    ],
    whatItDoes: [
      "Splits total annual CTC into monthly earnings, employer statutory contributions, and net pay.",
      "Calculates Basic Salary (40% to 50% of CTC), HRA (40% non-metro / 50% metro), and balancing Special Allowance.",
      "Accurately separates Employer PF (12% of Basic, capped at ₹1,800/month if applicable) and Employer ESIC (3.25%).",
      "Provides ready-to-copy salary structure annexure for employee offer letters.",
    ],
    howToUseSteps: [
      { step: 1, title: "Enter Annual CTC (Cost to Company)", description: "Input the total yearly compensation agreed with the employee." },
      { step: 2, title: "Set Basic Salary Percentage", description: "Choose 40% (common for higher brackets) or 50% (Code on Wages benchmark)." },
      { step: 3, title: "Select Metro or Non-Metro HRA", description: "HRA is typically 50% of Basic for metro cities (Delhi, Mumbai, Kolkata, Chennai) or 40% for others." },
      { step: 4, title: "Generate Monthly & Annual Split", description: "Get the complete breakdown including Gross, Deductions, and Take-Home pay." },
    ],
    formulaHeading: "Standard CTC Breakup Structure",
    formulaCode: "Annual CTC = Gross Salary + Employer PF (12%) + Employer ESIC (3.25%) + Gratuity (4.81%)\nMonthly Gross = Basic + HRA + Special Allowance + Other Allowances\nSpecial Allowance = Monthly Gross − (Basic + HRA + Other Fixed Components)",
    formulaBreakdown: [
      { variable: "Basic Salary", meaning: "Core salary component, typically 40% to 50% of CTC. Basis for PF, ESIC, Gratuity, and overtime." },
      { variable: "House Rent Allowance (HRA)", meaning: "Tax-exempt allowance under Section 10(13A), calculated as 40% or 50% of Basic." },
      { variable: "Employer EPF", meaning: "12% of Basic (capped at ₹1,800 per month on ₹15,000 statutory wage ceiling if opted)." },
      { variable: "Special Allowance", meaning: "Balancing component ensuring total package matches agreed CTC." },
    ],
    workedExample: {
      scenario: "An employer offers an annual CTC of ₹6,00,000 (₹50,000 per month) in Bangalore with a 50% Basic salary and 40% HRA.",
      inputs: [
        { label: "Annual CTC", value: "₹6,00,000" },
        { label: "Monthly CTC", value: "₹50,000" },
        { label: "Basic %", value: "50% of Gross" },
        { label: "HRA %", value: "40% of Basic" },
      ],
      calculation: [
        "Employer PF (12% capped) = ₹1,800 / month",
        "Monthly Gross = ₹50,000 − ₹1,800 = ₹48,200",
        "Basic Salary = ₹24,100 / month (₹2,89,200 / yr)",
        "HRA (40% of Basic) = ₹9,640 / month (₹1,15,680 / yr)",
        "Special Allowance = ₹48,200 − (₹24,100 + ₹9,640) = ₹14,460 / month",
      ],
      result: "Monthly Gross: ₹48,200 | Basic: ₹24,100 | HRA: ₹9,640 | Special: ₹14,460",
      note: "Employee takes home approximately ₹43,000 to ₹44,500 after employee PF and professional tax.",
    },
    interpretationAndTips: [
      "Code on Wages recommendation: Indian labor reforms stipulate that Basic + DA should be at least 50% of total compensation to prevent artificial dilution of retirement benefits.",
      "Statutory PF capping: Employees earning Basic above ₹15,000/month can cap employer and employee PF contributions at ₹1,800/month (12% of ₹15,000).",
      "ESIC wage limit: If Gross monthly wages are ₹21,000 or below, mandatory ESIC contribution applies (3.25% employer, 0.75% employee).",
    ],
    faqs: [
      { q: "What is the difference between CTC and Gross Salary?", a: "CTC (Cost to Company) includes all employer expenses including employer PF, employer ESIC, and gratuity provisions. Gross Salary is the amount payable to the employee before employee deductions (PF, ESIC, PT, TDS)." },
      { q: "Why is Special Allowance included in salary structures?", a: "Special Allowance acts as a flexible balancing component so that the sum of Basic, HRA, and statutory contributions exactly equals the agreed CTC." },
      { q: "Can an employee choose not to contribute to PF?", a: "If an employee's starting Basic salary in their first job is above ₹15,000/month, they can opt out of PF by submitting Form 11, provided the employer allows it." },
    ],
    relatedToolSlugs: ["ctc-to-in-hand-calculator", "salary-per-day-calculator", "payroll-cost-calculator", "gratuity-calculator"],
    relatedFeature: {
      name: "Salary Structure Builder",
      slug: "salary-structure-management",
      tagline: "Design customized salary structures, configure statutory tax allowances, and automate offer letter annexures.",
    },
  },

  "working-days-calculator": {
    slug: "working-days-calculator",
    name: "Working Days Calculator",
    category: "Attendance & Leave",
    short: "Calculate net working days between any two dates excluding weekly offs and public holidays.",
    h1: "Working Days Calculator (Dates & Holiday Exclusions)",
    metaTitle: "Working Days Calculator — Calculate Net Working Days | PayroleHR",
    metaDescription: "Free working days calculator for Indian workplaces. Calculate total days, exclude weekly offs (5-day or 6-day week), and deduct gazetted holidays.",
    heroBadge: "Shift Calendar Tool",
    introduction: "Determine exact net operational working days between any two calendar dates. Highly useful for monthly payroll cycles, project sprint milestones, probation completions, and notice period counts.",
    whoIsItFor: [
      { role: "Payroll Specialists", benefit: "Establish the exact working day divisor for upcoming payroll months." },
      { role: "Project Managers & Scrum Masters", benefit: "Plan realistic sprint deliveries by factoring in actual working days and festival holidays." },
      { role: "HR Business Partners", benefit: "Calculate accurate notice period end dates and probation completion timelines." },
      { role: "Operations Planners", benefit: "Forecast shift requirements across 5-day or 6-day work weeks." },
    ],
    whatItDoes: [
      "Counts total calendar days between selected start and end dates inclusive.",
      "Automatically identifies and excludes chosen weekly offs (e.g. Sundays only, or Saturday & Sunday).",
      "Deducts gazetted public and optional regional holidays from the total.",
      "Outputs exact net working days available for productive shifts.",
    ],
    howToUseSteps: [
      { step: 1, title: "Select Start & End Dates", description: "Choose the date range you wish to calculate working days for." },
      { step: 2, title: "Configure Weekly Offs", description: "Select Sundays only (6-day week) or Saturdays & Sundays (5-day week)." },
      { step: 3, title: "Add Holiday Deductions", description: "Input the number of declared public or festival holidays falling in the period." },
      { step: 4, title: "Get Net Working Days", description: "Instantly view total calendar days, non-working days, and net working days." },
    ],
    formulaHeading: "Working Days Calculation Formula",
    formulaCode: "Total Calendar Days = (End Date − Start Date + 1)\nWeekly Off Count = Number of designated rest days (Sundays / Saturdays) in period\nNet Working Days = Total Calendar Days − Weekly Offs − Public Holidays",
    formulaBreakdown: [
      { variable: "Total Calendar Days", meaning: "Gross day count spanning start to end date inclusive." },
      { variable: "Weekly Off Count", meaning: "Designated rest days (e.g. 4 or 5 Sundays per month)." },
      { variable: "Public Holidays", meaning: "Mandatory national holidays (Republic Day, Independence Day, Gandhi Jayanti) and festival holidays." },
    ],
    workedExample: {
      scenario: "An HR manager wants to determine the working days in November 2026 for a branch operating on a 6-day work week (Sundays off) with 2 declared festival holidays (Diwali and Guru Nanak Jayanti).",
      inputs: [
        { label: "Period", value: "Nov 1, 2026 to Nov 30, 2026" },
        { label: "Calendar Days", value: "30 Days" },
        { label: "Weekly Offs", value: "5 Sundays" },
        { label: "Declared Holidays", value: "2 Holidays" },
      ],
      calculation: [
        "Total Calendar Days = 30",
        "Sundays in Nov 2026 = 5",
        "Public Holidays = 2",
        "Net Working Days = 30 − 5 − 2 = 23 Days",
      ],
      result: "Net Working Days: 23 Days | Total Non-Working Days: 7 Days",
      note: "For a 5-day week company (Saturdays & Sundays off), total weekly offs would be 9, yielding 19 working days.",
    },
    interpretationAndTips: [
      "National holidays: India mandates at least 3 national holidays (January 26, August 15, October 2) under the National and Festival Holidays Act.",
      "State variations: State festival calendars vary (e.g. Pongal in Tamil Nadu, Chhath in Bihar, Onam in Kerala); always factor regional holiday lists.",
      "Notice periods: Notice periods in employment agreements are usually calendar days unless explicitly stated as working days.",
    ],
    faqs: [
      { q: "Are working days and business days the same?", a: "Yes, business days and working days both refer to operational days when employees are expected to work, excluding weekends and official holidays." },
      { q: "How does PayroleHR handle multi-shift and multi-branch holiday lists?", a: "PayroleHR allows employers to create branch-specific and state-specific holiday calendars that automatically link to employee rosters and payroll." },
      { q: "Does a 5-day week reduce monthly salary compared to a 6-day week?", a: "No, monthly gross salary remains identical; the daily rate is simply adjusted based on the company's designated wage basis." },
    ],
    relatedToolSlugs: ["attendance-calculator", "salary-per-day-calculator", "leave-calculator", "overtime-calculator"],
    relatedFeature: {
      name: "Workforce Scheduling & Rosters",
      slug: "workforce-scheduling",
      tagline: "Plan shift schedules, manage multiple branch calendars, and sync holidays directly into payroll.",
    },
  },

  "ctc-to-in-hand-calculator": {
    slug: "ctc-to-in-hand-calculator",
    name: "CTC to In-Hand Calculator",
    category: "Statutory & Exit",
    short: "Estimate monthly take-home salary from annual CTC under the revised Indian New Tax Regime with standard deductions.",
    h1: "CTC to In-Hand Salary Calculator (Take-Home Estimator)",
    metaTitle: "CTC to In-Hand Calculator — Calculate Take-Home Salary | PayroleHR",
    metaDescription: "Free CTC to In-Hand salary calculator for India. Calculate monthly take-home pay under the new tax regime, factoring EPF, ESIC, PT, and income tax slabs.",
    heroBadge: "Take-Home Estimator",
    introduction: "Estimate your true monthly in-hand take-home salary from your annual Cost to Company (CTC). Automatically calculates employee EPF, ESIC, State Professional Tax (PT), and annual Income Tax under the revised New Tax Regime.",
    whoIsItFor: [
      { role: "Job Seekers Evaluating Offers", benefit: "Discover the real cash in bank you will receive each month before accepting a new job." },
      { role: "HR & Recruitment Teams", benefit: "Answer candidate questions about take-home pay and explain CTC deductions transparently." },
      { role: "Employees Planning Budgets", benefit: "Plan EMIs, savings, and living expenses based on realistic net earnings." },
      { role: "Hiring Managers", benefit: "Structure attractive compensation packages that maximize monthly cash-in-hand." },
    ],
    whatItDoes: [
      "Converts annual CTC into realistic monthly take-home pay.",
      "Separates employer statutory costs (Employer PF, ESIC) from the employee's gross pay.",
      "Deducts mandatory employee contributions: Employee PF (12%), Employee ESIC (0.75%), and State PT.",
      "Computes income tax liability under the revised New Tax Regime (including standard deduction and Section 87A rebate).",
    ],
    howToUseSteps: [
      { step: 1, title: "Enter Annual CTC", description: "Input your total yearly package as offered in your appointment letter." },
      { step: 2, title: "Specify Basic Salary Ratio", description: "Typically 40% to 50% of CTC (default 50% for standard compliance)." },
      { step: 3, title: "Review Deductions Breakdown", description: "See exact deductions for Employee PF, State Professional Tax, and Income Tax." },
      { step: 4, title: "Inspect Monthly Take-Home", description: "View your final estimated net bank credit on payday." },
    ],
    formulaHeading: "In-Hand Salary Calculation Formula",
    formulaCode: "Gross Salary = CTC − Employer PF (12%) − Employer ESIC (3.25%)\nTotal Deductions = Employee PF (12%) + Employee ESIC (0.75%) + State PT + Monthly TDS\nNet In-Hand Salary = Gross Salary − Total Deductions",
    formulaBreakdown: [
      { variable: "Employer PF", meaning: "12% of Basic contributed by employer to EPFO, deducted from total CTC package." },
      { variable: "Employee PF", meaning: "12% of Basic deducted from employee gross salary and credited to PF account." },
      { variable: "Professional Tax (PT)", meaning: "State government tax, typically ₹200 per month (max ₹2,500/year)." },
      { variable: "Monthly TDS", meaning: "Estimated annual income tax under new tax slabs divided over 12 months." },
    ],
    workedExample: {
      scenario: "An employee receives an offer of ₹12,00,000 annual CTC (₹1,00,000/month) with a 50% Basic salary structure under the New Tax Regime in Maharashtra.",
      inputs: [
        { label: "Annual CTC", value: "₹12,00,000" },
        { label: "Monthly CTC", value: "₹1,00,000" },
        { label: "Basic Salary (50%)", value: "₹50,000 / month" },
        { label: "Tax Regime", value: "New Tax Regime (FY 2025-26)" },
      ],
      calculation: [
        "Employer PF (capped) = ₹1,800 / month",
        "Monthly Gross = ₹1,00,000 − ₹1,800 = ₹98,200",
        "Employee PF = ₹1,800 / month",
        "Professional Tax (PT) = ₹200 / month",
        "Taxable Income = ₹12,00,000 − ₹75,000 standard deduction = ₹11,25,000",
        "Estimated Income Tax ≈ ₹5,200 / month",
        "Net In-Hand = ₹98,200 − (₹1,800 + ₹200 + ₹5,200) = ₹91,000",
      ],
      result: "Estimated Monthly In-Hand: ~₹91,000 | Annual Take-Home: ~₹10,92,000",
      note: "Take-home pay increases if PF is un-capped or bonus components are paid semi-annually.",
    },
    interpretationAndTips: [
      "Tax rebate up to ₹7-12 Lakhs: Under recent budget provisions, taxpayers with income up to ₹7.75 Lakhs (new regime with standard deduction) pay zero income tax due to the Section 87A rebate.",
      "Standard deduction: A standard deduction of ₹75,000 is available for salaried employees under the new tax regime.",
      "PF capping effect: Capping PF at ₹1,800/month on higher salaries immediately increases monthly cash in hand.",
    ],
    faqs: [
      { q: "Why is my in-hand salary significantly lower than my monthly CTC?", a: "CTC includes costs you don't receive directly in your bank account, such as employer PF contributions, gratuity provisions, insurance premiums, and performance-linked annual bonuses." },
      { q: "How much standard deduction is allowed in FY 2025-26?", a: "Salaried employees receive a flat standard deduction of ₹75,000 under the New Tax Regime, reducing taxable income directly." },
      { q: "Does this calculator account for annual bonuses or variable pay?", a: "This tool calculates monthly fixed pay. If your CTC includes a 10% annual bonus, that amount is typically disbursed at year-end rather than in your regular monthly paycheck." },
    ],
    relatedToolSlugs: ["salary-breakup-calculator", "payroll-cost-calculator", "salary-per-day-calculator", "gratuity-calculator"],
    relatedFeature: {
      name: "Payroll Processing Engine",
      slug: "payroll-processing",
      tagline: "Automate TDS deductions, PF/ESIC compliance, and generate branded payslips in 1 click.",
    },
  },

  "gratuity-calculator": {
    slug: "gratuity-calculator",
    name: "Gratuity Calculator",
    category: "Statutory & Exit",
    short: "Calculate statutory gratuity payout under the Payment of Gratuity Act 1972 based on completed service years and last drawn Basic + DA.",
    h1: "Gratuity Calculator (Payment of Gratuity Act 1972)",
    metaTitle: "Gratuity Calculator — Calculate Gratuity Payout Online | PayroleHR",
    metaDescription: "Free statutory gratuity calculator for Indian employees. Calculate gratuity entitlement based on 15 days wages per completed service year capped at ₹20 Lakhs.",
    heroBadge: "Statutory Gratuity",
    introduction: "Calculate statutory gratuity payout eligibility and amounts in strict compliance with the Payment of Gratuity Act 1972. Tailored for full-and-final settlement (FnF), employee exits, retirement planning, and HR provisions.",
    whoIsItFor: [
      { role: "Retiring or Exiting Employees", benefit: "Verify your legal gratuity payout amount before signing off on final settlement documents." },
      { role: "HR & FnF Specialists", benefit: "Accurately compute separation liabilities without manual spreadsheet calculation errors." },
      { role: "Finance Controllers", benefit: "Establish annual actuarial provisioning for company-wide gratuity liabilities." },
      { role: "Business Owners", benefit: "Ensure compliance with statutory timelines to avoid penalty interest under the Gratuity Act." },
    ],
    whatItDoes: [
      "Determines gratuity eligibility based on the statutory 5 years continuous service rule (waived in case of death or disablement).",
      "Calculates gratuity using the legal 15/26 wage divisor formula.",
      "Applies the statutory rounding rule: service exceeding 6 months in the final year is rounded up to a full year.",
      "Enforces the maximum statutory ceiling limit of ₹20,00,000 (tax-exempt under Section 10(10)).",
    ],
    howToUseSteps: [
      { step: 1, title: "Enter Last Drawn Basic + DA", description: "Input your final monthly Basic salary plus Dearness Allowance (DA)." },
      { step: 2, title: "Specify Completed Service Years", description: "Enter total full years of continuous employment with the organization." },
      { step: 3, title: "Enter Additional Months", description: "If additional months exceed 6 (e.g. 7 months), it automatically rounds up to another year." },
      { step: 4, title: "View Statutory Payout", description: "Get the exact gratuity amount and statutory tax-exemption verification." },
    ],
    formulaHeading: "Statutory Gratuity Formula (Act Covered)",
    formulaCode: "Gratuity = (15 × Last Drawn Basic + DA × Completed Years of Service) ÷ 26\nStatutory Maximum Cap = ₹20,00,000 (20 Lakhs)",
    formulaBreakdown: [
      { variable: "15 Days Wages", meaning: "Half a month's wages computed on the statutory 26-day working divisor." },
      { variable: "Last Drawn Basic + DA", meaning: "Only Basic salary and Dearness Allowance are counted; HRA and special allowances are excluded." },
      { variable: "26 Divisor", meaning: "The Payment of Gratuity Act considers 26 working days in a month (excluding 4 Sundays)." },
      { variable: "Completed Years", meaning: "Total years of continuous service; fractions above 6 months round up to the next full year." },
    ],
    workedExample: {
      scenario: "An employee leaves an organization after 7 years and 8 months of continuous service. Their last drawn Basic salary was ₹40,000 and DA was ₹5,000 (Total Basic + DA = ₹45,000).",
      inputs: [
        { label: "Last Drawn Basic + DA", value: "₹45,000" },
        { label: "Tenure", value: "7 Years 8 Months" },
        { label: "Rounded Service Tenure", value: "8 Years (8 months > 6 months)" },
        { label: "Statutory Cap", value: "₹20,00,000" },
      ],
      calculation: [
        "One Day Wage = ₹45,000 ÷ 26 = ₹1,730.77",
        "15 Days Wage = ₹1,730.77 × 15 = ₹25,961.54",
        "Total Gratuity = ₹25,961.54 × 8 Years = ₹2,07,692.31",
      ],
      result: "Statutory Gratuity Payable: ₹2,07,692.00 (100% Tax Exempt)",
      note: "Because the tenure was 7 years and 8 months, the additional 8 months rounded up the tenure to 8 full years as per Section 4(2) of the Act.",
    },
    interpretationAndTips: [
      "5-Year eligibility rule: Gratuity is payable on exit only if an employee has completed at least 5 years of continuous service with the same employer.",
      "Exception to 5-year rule: The 5-year requirement is waived in the unfortunate event of an employee's death or permanent disablement.",
      "Tax exemption: Gratuity received under the Payment of Gratuity Act is exempt from income tax up to ₹20 Lakhs under Section 10(10)(ii).",
      "Mandatory payment timeline: Employers must pay gratuity within 30 days of it becoming payable; delays incur simple interest under Section 7(3A).",
    ],
    faqs: [
      { q: "Is gratuity mandatory for all private companies in India?", a: "Yes, the Payment of Gratuity Act 1972 applies to every factory, mine, oilfield, plantation, port, railway company, shop, or establishment in which 10 or more persons are employed." },
      { q: "Are allowances like HRA and Special Allowance included in gratuity calculation?", a: "No, gratuity is strictly calculated on Basic Salary plus Dearness Allowance (DA). Allowances such as HRA, conveyance, and performance bonuses are excluded." },
      { q: "What happens if an employee completes 4 years and 240 days?", a: "Judicial precedents in India (including Madras and Supreme Court interpretations) have established that working 240 days in the 5th year fulfills the 'continuous service' condition for gratuity eligibility." },
      { q: "Can an employer deduct gratuity from the employee's monthly salary?", a: "No, gratuity is an exclusive statutory liability of the employer. It cannot be deducted from employee gross salary." },
    ],
    relatedToolSlugs: ["salary-breakup-calculator", "ctc-to-in-hand-calculator", "payroll-cost-calculator", "leave-calculator"],
    relatedFeature: {
      name: "Full & Final Settlement (FnF)",
      slug: "arrears-management",
      tagline: "Automate gratuity calculations, leave encashment, and exit clearance in PayroleHR.",
    },
  },

  "payroll-cost-calculator": {
    slug: "payroll-cost-calculator",
    name: "Payroll Cost Calculator",
    category: "Salary & Pay",
    short: "Calculate total employer personnel cost across team headcount, employer PF (12%), ESIC (3.25%), insurance, and overheads.",
    h1: "Employer Payroll Cost & Budgeting Calculator",
    metaTitle: "Payroll Cost Calculator — Calculate Total Employer Cost & Budget | PayroleHR",
    metaDescription: "Free employer payroll cost calculator. Estimate total monthly and annual personnel cost across headcount, employer PF, ESIC, insurance, and benefits.",
    heroBadge: "Workforce Budgeting",
    introduction: "Forecast total monthly and annual employer personnel expenditure beyond basic wages. Accurately factors employer statutory contributions (EPF 12%, ESIC 3.25%), health insurance overheads, and administrative costs across entire headcounts.",
    whoIsItFor: [
      { role: "Founders & CEOs", benefit: "Forecast financial runway and total hiring expenses before expanding department teams." },
      { role: "CFOs & Finance Controllers", benefit: "Budget quarterly payroll cash outgo including all mandatory statutory overheads." },
      { role: "HR Directors", benefit: "Present realistic manpower budgets to management with clear statutory and benefits breakdowns." },
      { role: "Operations Heads", benefit: "Compare personnel costs across factory branches and regional corporate offices." },
    ],
    whatItDoes: [
      "Calculates total monthly and annual employer payroll commitment across team sizes.",
      "Separates gross salary payout from employer statutory burdens (Employer PF & ESIC).",
      "Factors customized per-employee overheads such as group health insurance, meals, and software tools.",
      "Projects total manpower outgo per employee and aggregate organization budget.",
    ],
    howToUseSteps: [
      { step: 1, title: "Enter Team Headcount", description: "Input the total number of employees in the department or organization." },
      { step: 2, title: "Specify Average Monthly Gross Salary", description: "Enter the average monthly gross salary per employee." },
      { step: 3, title: "Select Statutory Coverages", description: "Toggle Employer PF (12% of basic) and Employer ESIC (3.25% if applicable)." },
      { step: 4, title: "Add Monthly Overhead per Head", description: "Include costs like group mediclaim, transport, or software licenses." },
    ],
    formulaHeading: "Total Employer Payroll Cost Formula",
    formulaCode: "Cost per Employee = Gross Salary + Employer PF + Employer ESIC + Insurance/Overhead\nTotal Monthly Payroll Cost = Cost per Employee × Headcount\nAnnual Payroll Outgo = Total Monthly Payroll Cost × 12 Months",
    formulaBreakdown: [
      { variable: "Gross Salary", meaning: "Total fixed earnings paid to the employee each month." },
      { variable: "Employer PF", meaning: "12% of Basic contributed directly to EPFO on behalf of the employee." },
      { variable: "Employer ESIC", meaning: "3.25% of gross wages contributed to ESIC for employees earning up to ₹21,000/month." },
      { variable: "Monthly Overheads", meaning: "Group health insurance, work tools, and employee welfare amenities." },
    ],
    workedExample: {
      scenario: "A growing logistics enterprise employs 40 staff members at an average monthly gross salary of ₹25,000 (Basic ₹12,500). Employer contributes to PF and provides ₹1,000/month health insurance per employee.",
      inputs: [
        { label: "Headcount", value: "40 Employees" },
        { label: "Avg Gross Salary", value: "₹25,000 / month" },
        { label: "Employer PF (12% on ₹12,500)", value: "₹1,500 / month" },
        { label: "Insurance & Welfare", value: "₹1,000 / month" },
      ],
      calculation: [
        "Cost per Employee = ₹25,000 + ₹1,500 + ₹1,000 = ₹27,500 / month",
        "Total Monthly Payroll = ₹27,500 × 40 = ₹11,00,000 (11 Lakhs / month)",
        "Annual Manpower Budget = ₹11,00,000 × 12 = ₹1,32,00,000 (1.32 Crore / year)",
      ],
      result: "Monthly Commitment: ₹11,00,000 | Annual Budget: ₹1.32 Crore",
      note: "Statutory and insurance overheads represent an additional 10% on top of gross wages, highlighting why payroll budgeting must extend beyond base salaries.",
    },
    interpretationAndTips: [
      "Rule of thumb: In India, total employer cost typically ranges from 10% to 15% above gross salary once PF, ESIC, insurance, and gratuity provisions are accounted for.",
      "ESIC applicability threshold: Employer ESIC (3.25%) only applies to staff whose gross wages are ₹21,000 per month or less.",
      "Cash flow planning: Always reserve employer PF and ESIC funds by the 15th of each subsequent month to prevent interest penalties.",
    ],
    faqs: [
      { q: "What statutory overheads must an employer budget in India?", a: "Mandatory statutory overheads include Employer Provident Fund (12% of Basic), Employer ESIC (3.25% of gross for wages up to ₹21,000), Gratuity provision (~4.81% of Basic), and State Labour Welfare Fund (LWF)." },
      { q: "How can PayroleHR reduce employer payroll administration overheads?", a: "PayroleHR automates attendance sync, biometric face punches, and one-click bank payout files, eliminating manual payroll calculation errors and administrative delays." },
      { q: "Does this cost include one-time hiring or recruitment fees?", a: "No, this calculator projects ongoing recurring manpower payroll costs. Recruitment commissions and onboarding equipment should be budgeted separately." },
    ],
    relatedToolSlugs: ["salary-breakup-calculator", "ctc-to-in-hand-calculator", "salary-per-day-calculator", "overtime-calculator"],
    relatedFeature: {
      name: "Payroll & Payout Engine",
      slug: "payroll-processing",
      tagline: "Run multi-branch payroll in under 30 seconds with automated statutory calculations and 1-click bank transfer files.",
    },
  },
  "8th-pay-commission-calculator": {
    slug: "8th-pay-commission-calculator",
    name: "8th Pay Commission Salary Calculator",
    category: "Salary & Pay",
    short: "Estimate your revised salary under the 8th Pay Commission using your current pay level and expected fitment factor. Covers Basic Pay, HRA, and gross salary comparison.",
    h1: "Free 8th Pay Commission Salary Calculator India",
    metaTitle: "Free 8th Pay Commission Salary Calculator India — 8th CPC Estimator | PayroleHR",
    metaDescription: "Estimate your revised basic pay, HRA, DA, and gross salary under the 8th Central Pay Commission with fitment factor projections for all pay levels.",
    heroBadge: "8th CPC Projections • 2026 Ready",
    introduction: "Estimate your revised salary under the 8th Pay Commission using your current pay level and the expected fitment factor. Covers Basic Pay, HRA, and gross salary comparison.",
    whoIsItFor: [
      { role: "Central Government Employees", benefit: "Project revised pay level, allowances, and monthly salary hike under anticipated fitment factors." },
      { role: "Defence & Railway Personnel", benefit: "Compare current gross earnings with new pay band structures and revised transport allowance." },
      { role: "HR & Pension Analysts", benefit: "Model organizational manpower cost impacts before official Gazette implementation." },
    ],
    whatItDoes: [
      "Covers central government employees, defence personnel, and pensioners across all pay levels (approximately 50 lakh employees and 65 lakh pensioners)",
      "New pay will be calculated by applying a fitment factor to the current 7th CPC basic pay",
      "DA resets to 0% on the new basic pay after implementation. Use the calculator to check your current DA amount before the revision",
      "HRA, Transport Allowance, and other allowances are also revised based on the new basic pay",
      "Minimum basic pay is expected to rise significantly from the current ₹18,000 per month",
    ],
    howToUseSteps: [
      { step: 1, title: "Select Pay Level", description: "Choose your pay level from the 7th CPC pay matrix (Level 1 to Level 18) to auto-fill the standard basic pay." },
      { step: 2, title: "Verify Basic Pay & DA", description: "Confirm your actual current basic pay and current DA percentage (central government DA as of Jan 2026 is 53%)." },
      { step: 3, title: "Set Fitment Factor & City", description: "Adjust the expected fitment factor slider (e.g. 2.28x) and select your city tier (X, Y, or Z) for HRA computation." },
      { step: 4, title: "View Revised Breakdown", description: "Click Calculate to see revised basic pay, revised HRA, transport allowance, and estimated new monthly gross." },
    ],
    formulaHeading: "How is 8th CPC Salary Calculated?",
    formulaCode: "New Basic Pay = Current Basic Pay × Fitment Factor",
    formulaBreakdown: [
      { variable: "New Basic Pay", meaning: "Revised base monthly wage after merging current basic with the recommended fitment multiplier." },
      { variable: "Current Basic Pay", meaning: "Existing entry-level or stepped basic pay under the 7th CPC pay matrix." },
      { variable: "Fitment Factor", meaning: "Consolidated index factor (expected between 1.92x and 2.86x; 2.57x was used in 7th CPC)." },
      { variable: "DA Reset", meaning: "Dearness Allowance drops to 0% on new basic from implementation date and accrues bi-annually thereafter." },
    ],
    workedExample: {
      scenario: "Example (Pay Level 7, ₹44,900 basic, fitment 2.28x, X city):",
      inputs: [
        { label: "Pay Level", value: "Level 7 (Grade Pay 4600)" },
        { label: "Current Basic Pay", value: "₹44,900" },
        { label: "Current DA (53%)", value: "₹23,797" },
        { label: "Expected Fitment Factor", value: "2.28x" },
        { label: "City Classification", value: "X City (Metro, 27% HRA)" },
      ],
      calculation: [
        "New Basic Pay: ₹44,900 × 2.28 = ₹1,02,372",
        "DA on new basic: 0% (DA resets to zero on implementation date)",
        "New HRA (X city, 27%): ₹1,02,372 × 27% = ₹27,640",
        "Transport Allowance: ₹8,208 (₹3,600 × 2.28 fitment)",
        "Estimated New Gross: ₹1,02,372 + ₹0 + ₹27,640 + ₹8,208 = ₹1,38,220",
      ],
      result: "New Basic: ₹1,02,372 | Estimated New Gross: ₹1,38,220",
      note: "Estimates are indicative. Final 8th CPC pay revision will be announced by the Government of India. DA resets to 0% on new basic after implementation.",
    },
    interpretationAndTips: [
      "Fitment factor impact: Every 0.1 increase in the fitment factor boosts the revised basic pay by approximately 10% of existing basic wages.",
      "DA absorption: Because the existing 53% DA is absorbed into basic pay, take-home increments are driven primarily by the incremental fitment above 1.53x and revised allowance multipliers.",
      "Pensioner parity: Pensioners benefit equally as basic pension is revised proportionally by multiplying current pension by the same fitment factor.",
    ],
    faqs: [
      { q: "What is the expected fitment factor for the 8th Pay Commission?", a: "Economic analysts and employee unions anticipate a fitment factor between 1.92x and 2.86x, with 2.28x widely considered the median baseline estimate." },
      { q: "When will the 8th Pay Commission recommendations take effect?", a: "Following the historic 10-year cycle (5th CPC in 1996, 6th CPC in 2006, 7th CPC in 2016), the 8th CPC recommendations are expected to take effect from January 1, 2026." },
      { q: "What happens to accumulated Dearness Allowance upon implementation?", a: "Accumulated DA is merged into the revised basic salary structure, and the DA rate resets to zero percent on the effective rollout date." },
      { q: "How are city allowances (HRA) calculated under revised basic pay?", a: "HRA is recalculated as a percentage of the new higher basic pay (27% for X class metros, 18% for Y class urban centres, and 9% for Z class rural locations)." },
    ],
    relatedToolSlugs: ["salary-breakup-calculator", "ctc-to-in-hand-calculator", "salary-per-day-calculator", "payroll-cost-calculator"],
    relatedFeature: {
      name: "Configurable Salary Structures",
      slug: "salary-structure-management",
      tagline: "Easily adapt your organization's pay matrix and grade formulas when national pay scales are revised.",
    },
  },
};
