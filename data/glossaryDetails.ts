export interface GlossaryTermDetail {
  slug: string;
  term: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  overview: string;
  keyImpacts: {
    title: string;
    description: string;
  }[];
  statutoryBasis: {
    lawOrAct: string;
    rule: string;
    complianceNote: string;
  };
  practicalScenario: {
    headline: string;
    example: string;
    calculation?: string[];
    resultLabel: string;
    resultValue: string;
  };
  howPayroleHrHelps: {
    featureName: string;
    featureSlug: string;
    points: string[];
  };
  faqs: {
    q: string;
    a: string;
  }[];
  relatedTermSlugs: string[];
}

export function termToSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const GLOSSARY_DETAILS: Record<string, GlossaryTermDetail> = {
  absenteeism: {
    slug: "absenteeism",
    term: "Absenteeism",
    category: "Attendance & Time Tracking",
    metaTitle: "What is Absenteeism in HR? Meaning, Causes, Legal Rules & Rate Formula | PayroleHR",
    metaDescription: "Understand absenteeism in Indian workplaces: definitions, loss of pay (LOP) deductions, Industrial Employment Standing Orders Act, and how PayroleHR tracks unscheduled absences automatically.",
    definition: "A persistent or unannounced failure by an employee to report for scheduled work shifts without prior approval, valid medical justification, or authorized leave.",
    overview: "In Indian manufacturing, retail, healthcare, and IT enterprises, absenteeism refers to unapproved time away from duty that disrupts factory shift planning, retail floor coverage, and project deliverables. While casual, sick, and privilege leaves are statutory entitlements, unannounced absence creates severe staffing deficits, sudden operational downtime, and wage computation disputes.",
    keyImpacts: [
      {
        title: "Loss of Pay (LOP) Salary Reductions",
        description: "Unscheduled absences are marked as LOP in the monthly muster roll, directly reducing the employee's gross payable working days and net monthly take-home."
      },
      {
        title: "Shift Disruption & Overtime Costs",
        description: "In continuous manufacturing plants and retail outlets, a missing worker forces supervisors to pay 2x overtime rates to other operators to keep lines running."
      },
      {
        title: "Statutory Muster Roll Non-Compliance",
        description: "Under the Factories Act 1948, employers must maintain Form 25 muster rolls. Unreconciled discrepancies between biometric logs and physical rolls invite labor inspection penalties."
      },
      {
        title: "Team Morale & Operational Friction",
        description: "Chronic absenteeism by select staff increases the workload on punctual colleagues, causing resentment and avoidable attrition in high-volume teams."
      }
    ],
    statutoryBasis: {
      lawOrAct: "Industrial Employment (Standing Orders) Act, 1946 & Model Standing Orders",
      rule: "Habitual absence without leave or absence without leave for more than 8 consecutive days constitutes misconduct and warrants formal show-cause proceedings before disciplinary action.",
      complianceNote: "Employers cannot arbitrarily deduct wages or terminate staff without documented attendance records, biometric timestamp logs, and formal written show-cause notices."
    },
    practicalScenario: {
      headline: "Machinist Missing 3 Unannounced Shifts in a 26-Day Month",
      example: "Ramesh earns a monthly gross salary of ₹26,000 under a standard 26-day wage structure (₹1,000/day). He fails to report to the plant on Monday, Tuesday, and Wednesday without submitting a leave slip or informing his supervisor.",
      calculation: [
        "Daily Wage Rate = ₹26,000 Monthly Gross ÷ 26 Fixed Days = ₹1,000 / Day",
        "Loss of Pay (LOP) Deduction = 3 Days Absent × ₹1,000 = ₹3,000",
        "Adjusted Gross Pay = ₹26,000 - ₹3,000 = ₹23,000",
        "Statutory PF & ESI = Computed on revised basic wage after LOP deduction"
      ],
      resultLabel: "Total Net Wage Deduction (LOP):",
      resultValue: "₹3,000 LOP Deduction + HR Misconduct Alert"
    },
    howPayroleHrHelps: {
      featureName: "Attendance Management & Face Kiosk",
      featureSlug: "attendance-management",
      points: [
        "Real-time instant supervisor WhatsApp notifications when an employee has not punched in within 30 minutes of shift start.",
        "Touchless biometric face recognition on standard Android tablets that eliminates proxy punching and fake manual entries.",
        "1-tap shift regularisation in the employee self-service app where staff can attach doctor prescriptions or emergency notes.",
        "Automated sync with the month-end payroll register, deducting LOP days accurately without manual spreadsheet calculations."
      ]
    },
    faqs: [
      {
        q: "What is the difference between absenteeism and casual leave?",
        a: "Casual leave is a planned, authorized statutory leave entitlement applied for in advance and sanctioned by HR. Absenteeism is an unannounced, unapproved absence from duty that results in Loss of Pay (LOP) and formal misconduct tracking."
      },
      {
        q: "Can an employer terminate an employee for absenteeism under Indian labor laws?",
        a: "Under the Model Standing Orders and state Shops and Establishment Acts, continuous unapproved absence (usually 8 to 10 consecutive working days) constitutes misconduct. However, HR must follow due legal process: issuing a formal show-cause letter, granting time to explain, and holding a domestic inquiry before termination."
      },
      {
        q: "How is the absenteeism rate calculated in HR?",
        a: "Absenteeism Rate (%) = (Total Unscheduled Absent Days ÷ Total Planned Working Days) × 100. For example, if a team had 40 unplanned absent days across 1,000 total planned shifts, the absenteeism rate is 4%."
      }
    ],
    relatedTermSlugs: ["attendance-regularisation", "lop", "paid-days", "unpaid-days", "roster"]
  },

  arrears: {
    slug: "arrears",
    term: "Arrears",
    category: "Payroll & Salary Structures",
    metaTitle: "What are Salary Arrears in Payroll? Tax Rules & Calculation Formula | PayroleHR",
    metaDescription: "Understand salary arrears in Indian payroll: definitions, Section 89(1) tax relief, retrospective increments, and how PayroleHR computes back-dated pay automatically.",
    definition: "Salary or allowance amounts owed to an employee for a past work period that are disbursed in a subsequent month, commonly triggered by backdated wage revisions.",
    overview: "In Indian corporate and public-sector payroll, arrears arise when an employee's salary increment, promotion, Dearness Allowance (DA) revision, or minimum wage adjustment is applied retrospectively. Because the increment applies to months already closed and paid, the incremental difference must be computed, taxed, and disbursed in the current active payroll cycle.",
    keyImpacts: [
      {
        title: "Retrospective Wage Reconciliation",
        description: "HR must calculate the exact difference across all affected earning components (Basic, HRA, Special Allowance) for every past month."
      },
      {
        title: "Statutory PF & ESI Adjustments",
        description: "Back-dated basic salary increases require supplementary PF (12%) and ESI (0.75%) contributions for both employee and employer."
      },
      {
        title: "Income Tax & Section 89 Relief",
        description: "Receiving accumulated arrears in a single month can push employees into higher tax brackets. Employees can claim tax relief under Section 89(1) via Form 10E."
      },
      {
        title: "Transparent Payslip Reporting",
        description: "Arrears must be clearly itemized on monthly payslips so employees can distinguish regular current-month earnings from one-time back-pay."
      }
    ],
    statutoryBasis: {
      lawOrAct: "Payment of Wages Act, 1936 & Income Tax Act (Section 89)",
      rule: "All dues and arrears arising from bilateral agreements, wage boards, or promotions must be disbursed within the stipulated wage period without unauthorized deductions.",
      complianceNote: "Supplementary PF and ESI contributions on wage arrears must be remitted through the respective unified portal challans with past wage month references."
    },
    practicalScenario: {
      headline: "Software Engineer Awarded ₹10,000/Month Increment Effective 3 Months Back",
      example: "Priya receives a salary appraisal in October with an increment of ₹10,000 per month, made effective retrospectively from July 1st (affecting July, August, and September).",
      calculation: [
        "Monthly Increment = ₹10,000 / month",
        "Number of Retrospective Months = 3 Months (Jul, Aug, Sep)",
        "Gross Salary Arrears = 3 × ₹10,000 = ₹30,000",
        "October Regular Salary = ₹75,000",
        "October Total Gross Earnings = ₹75,000 + ₹30,000 Arrears = ₹1,05,000"
      ],
      resultLabel: "Total Arrears Disbursed in October:",
      resultValue: "₹30,000 Gross Arrears (Itemized on Payslip)"
    },
    howPayroleHrHelps: {
      featureName: "Arrears Management & Backdated Adjustments",
      featureSlug: "arrears-management",
      points: [
        "1-click retrospective increment processing where HR simply enters the effective past date and new salary structure.",
        "Automatic component-by-component difference calculation across all historical payroll records with zero manual spreadsheet math.",
        "Automatic supplementary EPF and ESIC contribution calculations ready for official portal upload.",
        "Detailed arrears breakdown annexure printed directly on the employee's PDF payslip."
      ]
    },
    faqs: [
      {
        q: "Are salary arrears taxable in India?",
        a: "Yes. Salary arrears are fully taxable in the financial year in which they are received. However, if the lump-sum payment pushes the employee into a higher income tax bracket, they can file Form 10E to claim tax relief under Section 89(1)."
      },
      {
        q: "Is Provident Fund (PF) deducted on salary arrears?",
        a: "Yes. If the basic salary is revised retrospectively, the 12% employee PF and 12% employer PF must be calculated on the incremental basic wages and remitted to the EPFO."
      },
      {
        q: "How does PayroleHR handle arrears when an employee worked partial days in past months?",
        a: "PayroleHR checks the historical attendance records for each past month. If the employee had 2 days of LOP in August, the arrears for August are automatically prorated based on actual paid days."
      }
    ],
    relatedTermSlugs: ["basic-salary", "gross-salary", "deductions", "tds", "payroll"]
  },

  "attendance-regularisation": {
    slug: "attendance-regularisation",
    term: "Attendance Regularisation",
    category: "Attendance & Time Tracking",
    metaTitle: "What is Attendance Regularisation in HR? Rules, Process & Workflow | PayroleHR",
    metaDescription: "Learn how attendance regularisation works in Indian companies: missed punch policies, approval workflows, grace times, and how PayroleHR automates requests.",
    definition: "The formal process where an employee submits an official correction request for a missed, erroneous, or outdoor punch, which must be approved by HR or their reporting manager.",
    overview: "Even in modern organizations equipped with biometric scanners or mobile GPS apps, employees occasionally forget to punch out, encounter biometric sensor timeouts, or work off-site on client visits. Without an attendance regularisation workflow, these punch omissions are automatically treated as half-days or Loss of Pay (LOP), leading to payroll disputes at month-end.",
    keyImpacts: [
      {
        title: "Prevents Unwarranted Salary Deductions",
        description: "Approved regularisations restore the employee's attendance status to 'Present', preventing incorrect LOP wage cuts."
      },
      {
        title: "Transparent Audit & Approval Trail",
        description: "Managers review the stated reason (e.g. client meeting, technical glitch) and approve or reject with a full digital timestamp log."
      },
      {
        title: "Policy Limits & Abuse Prevention",
        description: "Companies typically cap regularisations to 2 or 3 requests per month to discourage chronic carelessness or habit forming."
      },
      {
        title: "Streamlines Month-End Payroll Locking",
        description: "Automated cutoff dates force all pending regularisation requests to be cleared before the attendance register is locked for payroll."
      }
    ],
    statutoryBasis: {
      lawOrAct: "Factories Act, 1948 & State Shops and Commercial Establishments Acts",
      rule: "Employers are legally mandated to maintain true and accurate daily muster rolls showing exact hours worked by every adult employee.",
      complianceNote: "Manual modifications to biometric logs without an employee request and managerial sign-off expose companies to statutory inspection queries."
    },
    practicalScenario: {
      headline: "Sales Executive Forgets to Punch Out During Field Client Visit",
      example: "Vikram checks in at the office at 9:15 AM but leaves at 2:00 PM for client demonstrations across the city, unable to return to punch out at 6:00 PM.",
      calculation: [
        "Raw System Record = In: 09:15 AM | Out: Missing -> Flagged as Half-Day",
        "Vikram raises Regularisation Request in PayroleHR mobile app stating 'Field Client Meetings at Whitefield'",
        "Reporting Manager verifies client meeting notes and taps 'Approve'",
        "System Status = Updated from 'Half-Day' to 'Full Day Present (On-Duty)'"
      ],
      resultLabel: "Salary Impact:",
      resultValue: "0 LOP Deduction (Full Day Paid)"
    },
    howPayroleHrHelps: {
      featureName: "Attendance Tracking & Mobile Self-Service",
      featureSlug: "attendance-management",
      points: [
        "Staff can raise regularisation requests directly from the PayroleHR mobile portal with 1 tap.",
        "Managers receive instant push and WhatsApp approval alerts with reason details.",
        "Configurable organizational rules: set monthly limits (e.g., max 3/month) and past-day request windows (e.g., within 48 hours).",
        "Direct synchronization with payroll calculations so approved requests reflect instantly in net payable days."
      ]
    },
    faqs: [
      {
        q: "How many attendance regularisations are allowed in Indian companies?",
        a: "Most Indian organizations permit 2 to 3 attendance regularisations per employee per calendar month. Requests beyond this limit require special authorization from HR."
      },
      {
        q: "What happens if a regularisation request is rejected by the manager?",
        a: "If rejected, the system applies default organization policy rules—usually marking the day as a half-day or Loss of Pay (LOP), unless the employee applies for casual or sick leave."
      },
      {
        q: "Can attendance regularisation be automated for field staff?",
        a: "Yes. With PayroleHR's geofenced mobile attendance feature, field staff punch in and out using GPS on their phones, eliminating the need for regularisation altogether."
      }
    ],
    relatedTermSlugs: ["absenteeism", "grace-time", "half-day", "lop", "paid-days"]
  },

  "basic-salary": {
    slug: "basic-salary",
    term: "Basic Salary",
    category: "Payroll & Salary Structures",
    metaTitle: "What is Basic Salary in India? Percentage of CTC, PF Rules & Tax | PayroleHR",
    metaDescription: "Understand Basic Salary in Indian payroll structures: ideal percentage of CTC (40-50%), statutory links to PF, Gratuity, and ESI, and how PayroleHR manages salary grades.",
    definition: "The primary, fixed core component of an employee's salary package before any allowances (HRA, DA, Special) or statutory deductions (PF, PT, TDS) are applied.",
    overview: "In Indian compensation design, Basic Salary is the benchmark anchor around which all statutory contributions and post-retirement benefits revolve. Crucial benefits including Employee Provident Fund (EPF), Payment of Gratuity, and House Rent Allowance (HRA) exemptions are calculated as statutory percentages of the Basic Salary.",
    keyImpacts: [
      {
        title: "Statutory Anchor for PF & Gratuity",
        description: "12% EPF contribution and the 15/26 gratuity formula are computed strictly on Basic Salary (plus Dearness Allowance where applicable)."
      },
      {
        title: "Benchmark for HRA Tax Exemption",
        description: "Income Tax rules cap HRA exemption at 50% of Basic for metro cities and 40% for non-metros, making Basic central to employee tax planning."
      },
      {
        title: "40% to 50% CTC Best Practice",
        description: "Indian HR best practice allocates 40% to 50% of the annual CTC to Basic Salary to balance compliant social security with healthy employee take-home."
      },
      {
        title: "Fixed & 100% Taxable",
        description: "Unlike specialized reimbursements, Basic Salary is fully taxable in the hands of the employee under the Indian Income Tax Act."
      }
    ],
    statutoryBasis: {
      lawOrAct: "Code on Wages 2019 & Employees' Provident Funds Act, 1952",
      rule: "Under proposed Code on Wages norms, specified allowances cannot exceed 50% of the total compensation package, ensuring Basic comprises at least 50% of wages.",
      complianceNote: "Artificially suppressing Basic Salary below minimum wage standards to avoid employer PF contributions violates labor department regulations."
    },
    practicalScenario: {
      headline: "Structuring Basic Salary for a ₹60,000 Monthly CTC Package",
      example: "An employer in Bangalore offers an employee a monthly gross package of ₹60,000 and allocates 50% to Basic Salary according to compliance standards.",
      calculation: [
        "Monthly Gross CTC = ₹60,000",
        "Basic Salary (50% of Gross) = ₹30,000",
        "House Rent Allowance (50% of Basic) = ₹15,000",
        "Special Allowance (Remaining balance) = ₹15,000",
        "Employee PF Deduction (12% of Basic, capped at ₹1,800 or full) = ₹1,800 / ₹3,600",
        "Annual Gratuity Provision Accrual = (15 × ₹30,000) ÷ 26 = ₹17,308 / year"
      ],
      resultLabel: "Compliant Basic Salary Component:",
      resultValue: "₹30,000 / month (50% of Gross)"
    },
    howPayroleHrHelps: {
      featureName: "Salary Structure & Formula Management",
      featureSlug: "salary-structure-management",
      points: [
        "Pre-built compliant salary templates with configurable 40% to 50% Basic Salary ratios.",
        "Automatic cascading formulas: when Basic Salary changes, HRA, PF, and Gratuity recalculate automatically.",
        "Built-in minimum wage validation checks ensuring Basic meets state-specific statutory minimums.",
        "1-click export of salary breakup annexures for employee offer letters and appointment orders."
      ]
    },
    faqs: [
      {
        q: "What percentage of CTC should be Basic Salary in India?",
        a: "In India, Basic Salary typically comprises 40% to 50% of an employee's total Cost to Company (CTC). Under the proposed Code on Wages, Basic must constitute at least 50% of total compensation."
      },
      {
        q: "Can Basic Salary be lower than the state Minimum Wage?",
        a: "No. In most Indian states, the Basic Salary (plus Dearness Allowance) must meet or exceed the statutory minimum wage prescribed for that specific employee category and zone."
      },
      {
        q: "Is Basic Salary subject to income tax deductions?",
        a: "Yes. Basic Salary is 100% taxable in India with zero exemptions. However, statutory deductions like employee PF (under Section 80C) help offset taxable income."
      }
    ],
    relatedTermSlugs: ["ctc", "gross-salary", "hra", "epf-pf", "gratuity"]
  },

  ctc: {
    slug: "ctc",
    term: "CTC",
    category: "Payroll & Salary Structures",
    metaTitle: "What is CTC (Cost to Company)? Meaning, Components & In-Hand Formula | PayroleHR",
    metaDescription: "Understand CTC in India: Cost to Company breakdown, difference between CTC, Gross, and Net In-Hand Salary, and how PayroleHR generates transparent offer letters.",
    definition: "The total annual financial cost that an employer incurs to recruit, employ, and maintain an employee on the company payroll.",
    overview: "Cost to Company (CTC) is the comprehensive figure quoted in Indian job offer letters. It includes direct cash earnings (Basic, HRA, allowances), employer statutory contributions (Employer PF 12%, Employer ESI 3.25%), annual performance bonuses, medical insurance premiums, and statutory gratuity provisions. Because CTC includes employer overheads, it is significantly higher than the employee's monthly take-home salary.",
    keyImpacts: [
      {
        title: "Includes Employer-Side Statutory Costs",
        description: "CTC bundles employer contributions (12% PF, 3.25% ESI, gratuity accrual) that never appear in the employee's monthly bank transfer."
      },
      {
        title: "Drives Realistic Take-Home Expectations",
        description: "Misunderstandings between annual CTC and net in-hand pay are the #1 source of candidate dissatisfaction in Indian hiring."
      },
      {
        title: "Budget & Staff Cost Forecasting",
        description: "Finance and management use CTC to project total manpower expenditure across departments, branches, and fiscal years."
      },
      {
        title: "Benchmarking Employee Benefits",
        description: "Allows comparing packages across different bonus structures, health insurance covers, and statutory provisions."
      }
    ],
    statutoryBasis: {
      lawOrAct: "Indian Contract Act, 1872 & Relevant Statutory Benefit Enactments",
      rule: "Offer letters must accurately detail the breakdown of cash in-hand salary versus statutory provisions and non-cash benefits.",
      complianceNote: "Employers cannot deduct employer-side PF or ESI contributions from the employee's gross wage without contractually defining them within the agreed CTC."
    },
    practicalScenario: {
      headline: "Breaking Down a ₹6,00,000 Annual CTC Offer to Monthly In-Hand Pay",
      example: "Rohan receives a job offer in Hyderabad for ₹6,00,000 annual CTC (₹50,000/month CTC).",
      calculation: [
        "Annual CTC = ₹6,00,000 | Monthly CTC = ₹50,000",
        "Less: Employer PF (12% of Basic ₹25,000) = -₹1,800 / month",
        "Less: Annual Gratuity Provision (15/26 formula) = -₹1,200 / month",
        "Monthly Gross Salary = ₹47,000",
        "Less: Employee PF (12% of Basic) = -₹1,800",
        "Less: Professional Tax (Telangana) = -₹200",
        "Less: TDS Income Tax Provision = -₹1,500",
        "Net Monthly Take-Home (In-Hand) = ₹47,000 - ₹3,500 = ₹43,500"
      ],
      resultLabel: "Net Monthly Take-Home (In-Hand):",
      resultValue: "₹43,500 / month (vs ₹50,000 CTC)"
    },
    howPayroleHrHelps: {
      featureName: "CTC Breakup & In-Hand Calculator",
      featureSlug: "salary-structure-management",
      points: [
        "Interactive CTC-to-in-hand simulator that candidates and HR can test in real time before releasing offer letters.",
        "1-click offer letter generator that prints clear salary annexures comparing CTC, Gross, and Net Take-Home.",
        "Automatic ledger bifurcation between employee deductions and company overhead costs.",
        "Full support for new and old income tax regimes with live TDS forecasting."
      ]
    },
    faqs: [
      {
        q: "What is the difference between CTC, Gross Salary, and In-Hand Salary?",
        a: "CTC is the total expense incurred by the company (including employer PF, gratuity, and insurance). Gross Salary is earnings before deductions (Basic + allowances). In-Hand Salary is the actual cash deposited into the employee's bank account after all taxes and employee deductions."
      },
      {
        q: "Why is monthly in-hand salary less than CTC divided by 12?",
        a: "Because CTC includes employer-side expenses (Employer PF, Employer ESI, gratuity accrual, bonus provisions) and excludes employee-side deductions (Employee PF, Professional Tax, TDS income tax)."
      },
      {
        q: "Can gratuity be deducted from monthly CTC?",
        a: "Gratuity is an annual provision (approximately 4.81% of Basic Salary) accrued by the company for employees completing 5+ years of service. It is accounted for in CTC budgets but is not a cash deduction from wages."
      }
    ],
    relatedTermSlugs: ["basic-salary", "gross-salary", "net-salary", "epf-pf", "gratuity"]
  },

  gratuity: {
    slug: "gratuity",
    term: "Gratuity",
    category: "Statutory Compliance & Exit",
    metaTitle: "What is Gratuity in India? Eligibility Rules, Formula & Tax Exemption | PayroleHR",
    metaDescription: "Learn how gratuity works in India: 5-year eligibility criteria, the 15/26 calculation formula, ₹20 lakh tax exemption limit, and how PayroleHR automates exit payouts.",
    definition: "A statutory monetary retirement benefit paid by an employer to an employee as a token of gratitude for continuous service of 5 years or more.",
    overview: "Under the Payment of Gratuity Act 1972, gratuity is a mandatory terminal benefit for establishments employing 10 or more workers. When an employee completes 5 continuous years of tenure and resigns, retires, or faces retrenchment, the employer is legally obligated to disburse a lump-sum gratuity based on their last drawn basic salary and tenure.",
    keyImpacts: [
      {
        title: "Statutory 5-Year Continuous Service Requirement",
        description: "Employees become eligible after completing 5 continuous years (defined as 240 working days per year in non-seasonal establishments)."
      },
      {
        title: "Official 15/26 Mathematical Formula",
        description: "Computed as 15 days of wages for every completed year of service, using a statutory 26-day divisor."
      },
      {
        title: "₹20 Lakh Tax Exemption Cap",
        description: "Under Section 10(10) of the Income Tax Act, cumulative gratuity received up to ₹20,00,000 is 100% tax-free for private-sector employees."
      },
      {
        title: "Mandatory Full & Final (FnF) Inclusion",
        description: "Must be settled within 30 days of the employee's exit date, failing which employers face statutory interest penalties."
      }
    ],
    statutoryBasis: {
      lawOrAct: "Payment of Gratuity Act, 1972 & Income Tax Act (Section 10(10))",
      rule: "Gratuity = (15 × Last Drawn Basic + DA × Completed Years of Service) ÷ 26. Periods of 6 months or more are rounded up to the nearest whole year.",
      complianceNote: "Gratuity cannot be forfeited except in cases of employee termination for proven moral turpitude, violence, or intentional damage to company property."
    },
    practicalScenario: {
      headline: "Senior Plant Engineer Retiring After 7 Years and 8 Months of Service",
      example: "Sunil resigns after completing 7 years and 8 months of continuous service. His last drawn Basic Salary is ₹42,000 per month.",
      calculation: [
        "Tenure = 7 Years & 8 Months -> Rounded up to 8 Completed Years",
        "Last Drawn Basic Salary = ₹42,000",
        "Statutory Formula = (15 × ₹42,000 × 8) ÷ 26",
        "Numerator = 15 × 42,000 × 8 = 5,040,000",
        "Gratuity Payable = 5,040,000 ÷ 26 = ₹1,93,846.15"
      ],
      resultLabel: "Total Statutory Gratuity Payout:",
      resultValue: "₹1,93,846 (100% Tax-Free)"
    },
    howPayroleHrHelps: {
      featureName: "Gratuity Management & Full and Final Settlement",
      featureSlug: "gratuity-management",
      points: [
        "Automatic eligibility tracker flagging staff who have crossed the 5-year continuous service milestone.",
        "Instant calculation in the Full & Final (FnF) exit workflow with automatic rounding of fractions over 6 months.",
        "Monthly actuarial liability reporting allowing finance to budget gratuity provisions accurately.",
        "Generation of official Form I and Form L notices prescribed under the Payment of Gratuity Act."
      ]
    },
    faqs: [
      {
        q: "Is gratuity mandatory for all companies in India?",
        a: "Yes. The Payment of Gratuity Act 1972 applies to any factory, mine, oilfield, plantation, port, railway company, shop, or commercial establishment that employs 10 or more persons on any day of the preceding 12 months."
      },
      {
        q: "Is 4 years and 8 months eligible for gratuity?",
        a: "Under several High Court rulings (including the Madras High Court), completing 4 years and 240 days in the 5th year fulfills the continuous service requirement and qualifies the employee for statutory gratuity."
      },
      {
        q: "What is the maximum gratuity tax exemption limit?",
        a: "The Government of India raised the lifetime tax-free gratuity exemption limit to ₹20,00,000 (₹20 Lakhs) under Section 10(10) of the Income Tax Act."
      }
    ],
    relatedTermSlugs: ["basic-salary", "full-and-final-settlement", "ctc", "gross-salary", "payroll"]
  }
};

// Generic Fallback Generator for all other terms in glossary.json
export function getGlossaryDetail(slug: string, termFromList?: { term: string; def: string }): GlossaryTermDetail {
  if (GLOSSARY_DETAILS[slug]) {
    return GLOSSARY_DETAILS[slug];
  }

  const termName = termFromList ? termFromList.term : slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const baseDef = termFromList ? termFromList.def : `A standard HR and payroll term used across Indian enterprises.`;

  return {
    slug,
    term: termName,
    category: "HR & Payroll Operations",
    metaTitle: `What is ${termName} in HR & Payroll? Definition, Rules & Examples | PayroleHR`,
    metaDescription: `Plain English guide to ${termName} for Indian businesses: definitions, compliance rules, payroll impact, and how PayroleHR automates workforce workflows.`,
    definition: baseDef,
    overview: `In Indian workplace management, ${termName} plays a critical operational role in maintaining transparent payroll registers, attendance records, and statutory compliance. Understanding the exact mechanics of ${termName} ensures that HR administrators and finance teams avoid costly calculation errors, audit penalties, and employee dissatisfaction during monthly salary processing.`,
    keyImpacts: [
      {
        title: `Direct Impact on Monthly Payroll Processing`,
        description: `Accurately computing ${termName} ensures that monthly salary registers, payslips, and bank payment export files remain error-free.`
      },
      {
        title: `Statutory Labor Law Compliance`,
        description: `Adheres strictly to Indian compliance standards under the Factories Act, Payment of Wages Act, and state Shops & Establishment rules.`
      },
      {
        title: `Enhanced Employee Trust & Transparency`,
        description: `Clear policies surrounding ${termName} provide employees with transparent visibility over their attendance, earnings, and statutory rights.`
      },
      {
        title: `Automated Audit Defense`,
        description: `Maintaining digital timestamp logs and structured records for ${termName} ensures seamless readiness for annual PF, ESI, and labor audits.`
      }
    ],
    statutoryBasis: {
      lawOrAct: "Code on Wages & State Labor Regulations",
      rule: `Mandates transparent maintenance of wage registers, attendance logs, and deduction records for ${termName}.`,
      complianceNote: `Employers must ensure that records pertaining to ${termName} are archived digitally for statutory inspections.`
    },
    practicalScenario: {
      headline: `Managing ${termName} Across a 50-Member Indian Workforce`,
      example: `An organization processes month-end payroll and requires reconciling ${termName} across shift employees and salaried office staff.`,
      calculation: [
        `Base Employee Record = Verified in PayroleHR Master Database`,
        `Policy Rules Applied = Automated calculation matching organizational settings`,
        `Statutory Deduction Check = PF (12%), ESI (0.75%), and PT verified`,
        `Final Disbursed Pay = Exported directly to HDFC, ICICI, SBI bank file`
      ],
      resultLabel: "Status & Execution:",
      resultValue: `100% Reconciled & Audit-Ready`
    },
    howPayroleHrHelps: {
      featureName: "Core HR & Payroll Automation",
      featureSlug: "payroll-processing",
      points: [
        `Automates every aspect of ${termName} inside PayroleHR's integrated payroll engine.`,
        `Eliminates manual Excel spreadsheets, human calculation errors, and month-end payroll delays.`,
        `Staff access self-service records directly from their mobile portal with zero HR dependency.`,
        `1-click compliance export ready for statutory portals and internal financial audits.`
      ]
    },
    faqs: [
      {
        q: `What is the significance of ${termName} in Indian payroll?`,
        a: `${termName} ensures that salary calculations, attendance regularisation, and statutory contributions adhere to legal requirements without discrepancies.`
      },
      {
        q: `How does PayroleHR automate ${termName}?`,
        a: `PayroleHR connects biometric face check-ins, leave balance ledgers, and salary formulas directly, updating ${termName} in real time.`
      },
      {
        q: `Where can employees view their records for ${termName}?`,
        a: `Employees can log into the PayroleHR mobile self-service portal to check their personal records, payslips, and status anytime.`
      }
    ],
    relatedTermSlugs: ["basic-salary", "ctc", "gross-salary", "net-salary", "payroll"]
  };
}
