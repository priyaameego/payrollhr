export interface TemplateDetail {
  slug: string;
  name: string;
  file: string;
  h1Title: string;
  badge: string;
  subtitle: string;
  benefits: string[];
  packCover: {
    badge: string;
    title: string;
    subtitle: string;
    statNumber: string;
    statLabel: string;
  };
  whatsInside: {
    heading: string;
    subheading: string;
    cards: {
      tag: string;
      title: string;
      description: string;
      miniTable?: {
        headers: string[];
        rows: string[][];
      };
    }[];
  };
  whyThisMatters: {
    heading: string;
    intro: string;
    paragraphs: string[];
  };
  automationSection: {
    headline: string;
    description: string;
    featureSlug: string;
    featureName: string;
  };
  faqs: {
    q: string;
    a: string;
  }[];
  csvContent: string;
}

export function templateSlug(file: string): string {
  return file.replace(/\.csv$/, "");
}

export const TEMPLATES_DATA: Record<string, TemplateDetail> = {
  // 1. Employee Information Form
  "employee-information-form": {
    slug: "employee-information-form",
    name: "Employee Information Form",
    file: "employee-information-form.csv",
    h1Title: "Employee Information Form Format for Indian Employers",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Complete employee onboarding capture format: personal background, emergency contacts, statutory EPF/ESIC/PAN details, bank accounts, and family nomination schedules.",
    benefits: [
      "Covers all 24 mandatory Indian statutory onboarding fields",
      "Unified bank disbursement and UAN/ESIC mapping columns",
      "Ready to import into Excel, Google Sheets, or PayroleHR"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Employee Master Onboarding Pack",
      subtitle: "For Indian enterprise staff & factory workers",
      statNumber: "24",
      statLabel: "statutory fields & nomination forms"
    },
    whatsInside: {
      heading: "What is inside the onboarding format",
      subheading: "Structured across 4 specialized capture schedules for audit-ready compliance.",
      cards: [
        {
          tag: "Schedule 01 to 02",
          title: "Personal, Identity & Contact Records",
          description: "Full legal name as per Aadhaar, date of birth, permanent and residential addresses, emergency contacts, and personal mobile/email.",
          miniTable: {
            headers: ["Record Item", "Statutory Requirement", "Verification Doc"],
            rows: [
              ["Aadhaar & PAN", "Mandatory for TDS & EPFO", "Scanned Copy"],
              ["Bank Account", "Mandatory for direct salary credit", "Cancelled Cheque"],
              ["Emergency Contact", "Mandatory under Factories Act", "HR Master Card"]
            ]
          }
        },
        {
          tag: "Schedule 03",
          title: "Statutory EPFO, ESIC & PT Enrollment",
          description: "Universal Account Number (UAN), previous PF member ID for online transfer (Form 11), ESIC insurance number, and state-specific professional tax applicability."
        },
        {
          tag: "Schedule 04",
          title: "Bank Disbursement & Family Nomination",
          description: "Bank IFSC, account numbers, branch details, and Form 2 nomination split for provident fund and gratuity entitlements."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why complete employee records protect against statutory penalties",
      intro: "Under the Code on Wages 2019 and EPFO compliance guidelines, inaccurate employee master data is the primary cause of rejected PF claims and delayed salary credits.",
      paragraphs: [
        "In India, discrepancy between an employee's name on their salary slip, PAN, and Aadhaar prevents electronic UAN seeding and causes ECR challan upload rejections on the EPFO unified portal.",
        "Furthermore, under the Digital Personal Data Protection (DPDP) Act, 2023, employers must obtain documented consent when storing employee biometric, financial, and familial records. This template incorporates standard statutory consent notices so your organization remains fully compliant from day one."
      ]
    },
    automationSection: {
      headline: "Stop collecting paper forms. Onboard staff on mobile in 2 minutes.",
      description: "PayroleHR allows new joiners to upload their Aadhaar, PAN, and bank documents directly from their mobile phones. Optical Character Recognition (OCR) auto-verifies details with zero manual typing.",
      featureSlug: "employee-self-service",
      featureName: "Employee Self-Service & Onboarding"
    },
    faqs: [
      {
        q: "Is this employee information format valid for contract staff and permanent employees?",
        a: "Yes. The format contains universal statutory fields applicable to managerial staff, permanent corporate employees, and factory floor workers under Indian labor laws."
      },
      {
        q: "Can this CSV be directly imported into PayroleHR?",
        a: "Yes. The column headers match PayroleHR's bulk employee import format, allowing you to upload hundreds of employee records in seconds."
      }
    ],
    csvContent: `Employee_ID,Full_Name_As_Per_Aadhaar,DOB,Gender,Mobile,Email,Father_Name,PAN,Aadhaar_Number,UAN_Number,ESIC_Number,Bank_Name,Bank_Account_Number,IFSC_Code,Joining_Date,Department,Designation,Basic_Salary,PF_Applicable,ESI_Applicable,PT_Applicable,Permanent_Address,Emergency_Contact_Name,Emergency_Contact_Phone\nEMP001,Rajesh Kumar Sharma,1992-05-14,Male,9876543210,rajesh@example.com,Ramesh Sharma,ABCDE1234F,123456789012,100987654321,2109876543,HDFC Bank,50100123456789,HDFC0001234,2026-01-10,Manufacturing,Machining Operator,22000,Yes,No,Yes,"Plot 45, MIDC Chakan, Pune",Sunita Sharma,9876543211\n`
  },

  // 2. Leave Application Form
  "leave-application-form": {
    slug: "leave-application-form",
    name: "Leave Application Form",
    file: "leave-application-form.csv",
    h1Title: "Leave Application Form Format for Indian Organizations",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Standard statutory leave application format: casual leave (CL), paid earned leave (EL/PL), sick/medical leave (SL), compensatory off (Comp-off), and loss of pay tracking.",
    benefits: [
      "Structured breakdown of CL, PL, SL and maternity leave",
      "Documented manager approval and handover sign-off rows",
      "Prevents unannounced absenteeism and payroll LOP errors"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Statutory Leave Request Pack",
      subtitle: "For Indian factories, IT firms & retail units",
      statNumber: "06",
      statLabel: "leave categories & approval workflows"
    },
    whatsInside: {
      heading: "What is inside the leave application pack",
      subheading: "Designed to meet statutory leave record mandates under the Factories Act and state Shops Acts.",
      cards: [
        {
          tag: "Section 01",
          title: "Leave Category & Dates",
          description: "Clearly separates Casual Leave (CL), Privilege/Earned Leave (PL/EL), Sick Leave (SL), and Maternity/Paternity leave with start/end dates and half-day options."
        },
        {
          tag: "Section 02",
          title: "Reason & Handover Details",
          description: "Documented justification, contact address/number during leave period, and designated peer taking shift or project handover."
        },
        {
          tag: "Section 03",
          title: "HR Leave Balance Ledger & Manager Sign-off",
          description: "Tracks opening leave balance, days requested, remaining balance, and formal written authorization from department head."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why written leave applications protect against unauthorized absenteeism",
      intro: "Under the Model Standing Orders and state labor enactments, unannounced absence without written sanction can be categorized as industrial misconduct.",
      paragraphs: [
        "A documented leave application provides clear legal proof of whether time away from duty was authorized or constitutes Loss of Pay (LOP).",
        "Additionally, under the Factories Act 1948, workers are entitled to 1 day of earned leave for every 20 days worked. Maintaining accurate written or digital records prevents wage disputes during month-end payroll settlement."
      ]
    },
    automationSection: {
      headline: "Replace paper leave slips with 1-tap mobile leave requests.",
      description: "PayroleHR's employee self-service mobile app lets staff check live leave balances and apply for leaves in seconds. Managers approve with 1 tap, and the payroll muster roll updates automatically.",
      featureSlug: "leave-management",
      featureName: "Leave & Holiday Management"
    },
    faqs: [
      {
        q: "What is the notice period required for privilege leave under Indian labor law?",
        a: "Under the Factories Act, applications for privilege/earned leave generally require a minimum 15 to 30 days prior notice, except in urgent medical cases."
      },
      {
        q: "Can unused casual leave be carried forward into the next calendar year?",
        a: "In most Indian states, casual leave lapses at the end of the calendar year and cannot be carried forward or encashed, unlike earned/privilege leave."
      }
    ],
    csvContent: `Application_ID,Employee_ID,Employee_Name,Department,Leave_Type,Start_Date,End_Date,Total_Days,Half_Day_Session,Reason,Handover_Employee_Name,Contact_During_Leave,Opening_Balance,Closing_Balance,Approval_Status,Manager_Name,Approval_Date\nLV-2026-001,EMP014,Pooja Verma,Quality Assurance,Privilege Leave (PL),2026-11-04,2026-11-06,3,Full Day,Family Function,Arun Nair,9811223344,12,9,Approved,Sunil Kulkarni,2026-10-28\n`
  },

  // 3. Attendance Register Template
  "attendance-register": {
    slug: "attendance-register",
    name: "Attendance Register",
    file: "attendance-register.csv",
    h1Title: "Monthly Attendance Register Format (Form 25 / Form B Equivalent)",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Complete monthly muster roll register for Indian businesses: daily punch status, weekly offs, paid holidays, overtime hours, and net payable days.",
    benefits: [
      "Compatible with Form 25 (Factories Act) & state Shops Act formats",
      "Standard attendance codes: P, A, WO, PH, HD, CL, PL, LOP",
      "Auto-calculates total present, absent, and payable days"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Monthly Muster Roll Register",
      subtitle: "Factories Act Form 25 & Shops Act standard",
      statNumber: "31",
      statLabel: "day columns & payable day formulas"
    },
    whatsInside: {
      heading: "What is inside the attendance register",
      subheading: "Complete month-end muster roll format ready for labor inspection audits.",
      cards: [
        {
          tag: "Daily Columns",
          title: "Days 1 to 31 Status Matrix",
          description: "Captures daily punch status using standardized Indian labor inspection codes: Present (P), Absent (A), Half Day (HD), Weekly Off (WO), Paid Holiday (PH), and Casual Leave (CL)."
        },
        {
          tag: "Overtime Tracking",
          title: "OT Hours & Rate Multiplier",
          description: "Dedicated columns to record overtime hours worked beyond 9 daily hours or 48 weekly hours, calculated at statutory 2x normal wage rates."
        },
        {
          tag: "Payable Days Formula",
          title: "Total Payable Days Calculation",
          description: "Formula row summing Present Days + Paid Leaves + Weekly Offs + Holidays, deducting LOP days for error-free salary computation."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why an authentic attendance register is legally mandatory in India",
      intro: "Under Section 62 of the Factories Act 1948 and state Shops & Establishments rules, every employer must maintain an active register of adult workers.",
      paragraphs: [
        "Failure to produce an authentic muster roll during an unannounced inspection by state labor enforcement officers invites prosecution and heavy monetary penalties.",
        "Furthermore, statutory PF and ESI wage filings require reconciling attendance registers with wage registers to ensure contributions match actual paid working days."
      ]
    },
    automationSection: {
      headline: "Eliminate manual muster rolls. Switch to touchless face check-in.",
      description: "PayroleHR replaces paper attendance books with AI facial recognition on any standard tablet. Real-time punches auto-generate Form 25 muster rolls with zero manual tallying.",
      featureSlug: "attendance-management",
      featureName: "Touchless Biometric Attendance"
    },
    faqs: [
      {
        q: "How are weekly offs treated when an employee is absent before and after a Sunday?",
        a: "Under the 'Sandwich Rule', if an organization's policy specifies, a weekly off falling between two unexcused absent days may be treated as Loss of Pay (LOP)."
      },
      {
        q: "What is the statutory overtime pay rate in Indian manufacturing units?",
        a: "Under Section 59 of the Factories Act 1948, overtime must be compensated at twice the ordinary rate of wages (2x Basic + DA)."
      }
    ],
    csvContent: `Emp_ID,Employee_Name,Designation,D01,D02,D03,D04,D05,D06,D07,D08,D09,D10,D11,D12,D13,D14,D15,D16,D17,D18,D19,D20,D21,D22,D23,D24,D25,D26,D27,D28,D29,D30,D31,Total_Present,Total_Leaves,Weekly_Offs,Holidays,LOP_Days,Total_Payable_Days,OT_Hours\nEMP002,Amit Patil,Assembly Tech,P,P,P,P,P,P,WO,P,P,P,P,P,P,WO,P,P,P,P,P,P,WO,P,P,A,P,P,P,WO,P,P,P,24,0,4,1,1,29,8\n`
  },

  // 4. Salary Structure Template
  "salary-structure-template": {
    slug: "salary-structure-template",
    name: "Salary Structure Template",
    file: "salary-structure-template.csv",
    h1Title: "Salary Structure & CTC Breakup Template for Indian Employers",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Indian payroll salary structuring format: 50% Basic wage rule, HRA, statutory EPF (12%), ESIC (3.25%), Professional Tax (PT), and CTC to in-hand reconciliation.",
    benefits: [
      "100% compliant with the Code on Wages 50% basic salary rule",
      "Accurate employer and employee statutory PF & ESI formulas",
      "Clear distinction between monthly gross pay and annual CTC"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Salary Structure & CTC Pack",
      subtitle: "Code on Wages & New Tax Regime Compliant",
      statNumber: "15",
      statLabel: "earning & deduction components"
    },
    whatsInside: {
      heading: "What is inside the salary structure template",
      subheading: "Lays out all fixed earnings, flexible allowances, employer contributions, and net in-hand formulas.",
      cards: [
        {
          tag: "Earnings",
          title: "Fixed Salary Components",
          description: "Basic Salary (mandated at 40-50% of CTC), House Rent Allowance (HRA), Dearness Allowance (DA), Conveyance, and Special Allowance."
        },
        {
          tag: "Deductions",
          title: "Statutory & Voluntary Deductions",
          description: "Employee PF contribution (12% of basic, capped at ₹1,800 or uncapped), ESIC (0.75%), State Professional Tax (PT), and TDS withholding."
        },
        {
          tag: "Employer Share",
          title: "Cost to Company (CTC) Inclusions",
          description: "Employer PF (12%), Employer ESIC (3.25%), statutory gratuity accrual (4.81% of basic), and group medical insurance premiums."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why proper salary structuring prevents retrospective PF & tax liabilities",
      intro: "Under the Supreme Court ruling in the Vivekananda Vidyamandir case and the Code on Wages, basic wages cannot be artificially suppressed to avoid statutory contributions.",
      paragraphs: [
        "If basic salary is set too low (e.g., 20% of CTC), EPFO authorities can classify special allowances as part of wages and demand retrospective arrears along with penal damages under Section 14B.",
        "Structuring compensation properly ensures optimal tax benefits for employees under Section 10(13A) for HRA while keeping the employer 100% compliant during statutory audits."
      ]
    },
    automationSection: {
      headline: "Stop calculating CTC in-hand formulas manually.",
      description: "PayroleHR's payroll engine lets you create unlimited salary structures with custom formulas. One click processes salaries, generates payslips, and prepares bank transfer files.",
      featureSlug: "payroll-management",
      featureName: "Automated Indian Payroll Processing"
    },
    faqs: [
      {
        q: "What is the minimum percentage of CTC that must be allocated to Basic Salary in India?",
        a: "Under the Code on Wages, wages (Basic + DA + retaining allowance) must constitute at least 50% of total employee remuneration."
      },
      {
        q: "Is EPF contribution mandatory for employees earning above ₹15,000 basic per month?",
        a: "PF is mandatory for employees with basic salary up to ₹15,000 per month. For basic above ₹15,000, employer and employee can mutually opt to cap PF on ₹15,000 (₹1,800/month) or contribute on actual basic wages."
      }
    ],
    csvContent: `Component_Type,Component_Name,Monthly_Formula,Monthly_Amount_INR,Annual_Amount_INR,Taxable_Status,PF_Considered,ESI_Considered\nEarning,Basic Salary,50% of Gross,25000,300000,Fully Taxable,Yes,Yes\nEarning,House Rent Allowance (HRA),40% of Basic,10000,120000,Exempt under Sec 10(13A),No,Yes\nEarning,Special Allowance,Balancing Allowance,15000,180000,Fully Taxable,No,Yes\nTotal,Gross Monthly Pay,Sum of Earnings,50000,600000,Gross Earnings,-,-\nDeduction,Employee EPF,12% of Basic (capped 1800),1800,21600,80C Deduction,-,-\nDeduction,Professional Tax (PT),State Slab,200,2500,Sec 16(iii) Deduction,-,-\nDeduction,Income Tax (TDS),As per Tax Regime,2200,26400,Withholding Tax,-,-\nTotal,Total Deductions,Sum of Deductions,4200,50500,-,-,-\nBenefit,Net In-Hand Salary,Gross Pay - Deductions,45800,549500,Net Take-Home,-,-\nEmployer,Employer EPF,12% of Basic (capped 1800),1800,21600,CTC Component,-,-\nEmployer,Gratuity Accrual,4.81% of Basic,1203,14436,CTC Component,-,-\nTotal,Cost to Company (CTC),Gross + Employer Benefits,53003,636036,Annual CTC,-,-\n`
  },

  // 5. Employee Exit Checklist
  "employee-exit-checklist": {
    slug: "employee-exit-checklist",
    name: "Employee Exit Checklist",
    file: "employee-exit-checklist.csv",
    h1Title: "Employee Exit & Offboarding Clearance Checklist for Indian Companies",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Complete offboarding checklist: IT asset returns, department NOC clearances, notice period reconciliation, Full & Final (FnF) sign-offs, and relieving letters.",
    benefits: [
      "Department-wise clearance sign-offs: IT, Admin, Finance & HR",
      "Tracks laptop, ID card, SIM, and proprietary data surrender",
      "Ensures audit-proof Full & Final settlement disbursements"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Employee Offboarding & Clearance Pack",
      subtitle: "Multi-department NOC & asset handover standard",
      statNumber: "18",
      statLabel: "clearance checkpoints & handover protocols"
    },
    whatsInside: {
      heading: "What is inside the exit clearance checklist",
      subheading: "Ensures comprehensive handover before releasing final dues and service certificates.",
      cards: [
        {
          tag: "IT & Security",
          title: "Hardware & Software Access Revocation",
          description: "Physical surrender of company laptop, access keys, security tokens, and immediate deactivation of Google Workspace, Slack, and VPN credentials."
        },
        {
          tag: "Finance & Accounts",
          title: "Loan Recoveries & Travel Advances",
          description: "Clearance of outstanding corporate credit cards, travel claim reimbursements, salary advances, and tax declaration submission for Form 16 Part B."
        },
        {
          tag: "HR & Department NOC",
          title: "Project Handover & Documentation",
          description: "Handover of ongoing client projects, notice period buyout reconciliation, resignation acceptance letter, and release of relieving certificate."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why a formal exit checklist prevents financial loss and data leakage",
      intro: "Under Indian commercial and contract law, releasing Full and Final settlement before receiving formal No Objection Certificates (NOC) leaves employers vulnerable to unrecovered assets.",
      paragraphs: [
        "Unrevoked access to corporate repositories and customer databases poses severe compliance risks under the Digital Personal Data Protection Act, 2023.",
        "A signed exit clearance provides legal documentation that all company property was returned in good order and that the employee has zero pending wage claims against the establishment."
      ]
    },
    automationSection: {
      headline: "Automate offboarding clearances and 1-click FnF settlement.",
      description: "PayroleHR automates multi-department exit workflows. Department heads approve clearances online, and the system automatically calculates encashable leaves, gratuity, and net payable dues.",
      featureSlug: "payroll-management",
      featureName: "Full & Final Settlement Automation"
    },
    faqs: [
      {
        q: "What is the statutory timeline for disbursing Full and Final (FnF) settlement in India?",
        a: "Under the Code on Wages 2019, an employer must settle and disburse final wages to a separated employee within 2 working days of their last working day."
      },
      {
        q: "Can an employer withhold an experience letter if notice period is not served?",
        a: "Labor tribunals hold that service certificates must reflect factual employment history. If notice period was short-served, employers can deduct notice pay from FnF settlement rather than unlawfully withholding certificates."
      }
    ],
    csvContent: `Checklist_Item_ID,Department,Clearance_Task,Asset_Details,Condition_Verified,Clearance_Status,Department_Head_Name,Sign_Off_Date,Remarks\nEX-01,IT Infrastructure,Laptop & Charger Return,"Dell Latitude 5420, S/N: 8XYZ123",Working Condition,Approved,Sanjay Rao,2026-10-31,All local data formatted\nEX-02,IT Security,Email & VPN Account Deactivation,Google Workspace & Slack,Deactivated,Approved,Sanjay Rao,2026-10-31,Access revoked at 6:00 PM\nEX-03,Administration,Biometric Access & ID Badge Return,RFID Card #4582,Surrendered,Approved,Meena Joshi,2026-10-31,Entry rights removed\nEX-04,Finance,Corporate Credit Card & Travel Advances,HDFC Corporate Card,Zero Balance,Approved,Karan Mehta,2026-10-31,No pending advance claims\nEX-05,Human Resources,Notice Period Reconciliation,30 Days Required / 30 Served,Completed,Approved,Sunita Sen,2026-10-31,Eligible for FnF disbursement\n`
  },

  // 6. Shift Roster Template
  "shift-roster-template": {
    slug: "shift-roster-template",
    name: "Shift Roster Template",
    file: "shift-roster-template.csv",
    h1Title: "Employee Shift Roster & Schedule Template for Indian Factories & Retail",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Multi-shift scheduling format for 24/7 manufacturing plants, hospitals, and retail stores: Morning (A), Evening (B), Night (C), rotational shift off rules, and daily headcount planning.",
    benefits: [
      "Complies with Factories Act 48-hour weekly work limits",
      "Built-in shift handover and mandatory weekly rest periods",
      "Visual shift codes: M (Morning), E (Evening), N (Night), WO (Off)"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Rotational Shift Roster Pack",
      subtitle: "Factories Act compliant 3-shift scheduling",
      statNumber: "03",
      statLabel: "shift rotations & weekly off rules"
    },
    whatsInside: {
      heading: "What is inside the shift roster template",
      subheading: "Ensures balanced shift coverage while preventing statutory overtime and fatigue violations.",
      cards: [
        {
          tag: "Shift Matrix",
          title: "Rotational Shift Planning Grid",
          description: "Maps operators and supervisors across Shift A (06:00 - 14:00), Shift B (14:00 - 22:00), and Shift C (22:00 - 06:00) with automatic weekly rotation."
        },
        {
          tag: "Headcount Balancing",
          title: "Minimum Staffing Requirements",
          description: "Summary rows calculate total available operators per shift to ensure critical production lines or retail floors never face staffing deficits."
        },
        {
          tag: "Statutory Compliance",
          title: "Mandatory Rest Period Enforcement",
          description: "Enforces Section 51 of the Factories Act: ensuring every worker receives at least 24 consecutive hours of rest after 6 days of work."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why proper shift scheduling prevents labor code violations and industrial accidents",
      intro: "Under Indian factory regulations, scheduling workers for back-to-back shifts without mandatory rest intervals violates occupational safety laws.",
      paragraphs: [
        "Fatigue on manufacturing lines is the primary driver of workplace mishaps. Rotational rosters ensure equitable night shift distribution and prevent excessive overtime penalties.",
        "A clear published roster also eliminates unexcused absenteeism by giving staff advance visibility over their duty hours and scheduled weekly offs."
      ]
    },
    automationSection: {
      headline: "Publish shift rosters to staff mobile phones with 1 click.",
      description: "PayroleHR's smart shift scheduler auto-rotates shifts, checks compliance rules, and sends instant push notifications to employees when schedules change.",
      featureSlug: "shift-management",
      featureName: "Smart Shift & Roster Scheduling"
    },
    faqs: [
      {
        q: "What is the maximum number of hours an employee can work in a week under Indian labor law?",
        a: "Under Section 51 of the Factories Act, no adult worker can be required or allowed to work in a factory for more than 48 hours in any week without statutory overtime pay."
      },
      {
        q: "What are the legal requirements for employing female workers on night shifts in India?",
        a: "Under recent amendments to the Occupational Safety and Health Code and state rules, female employees can work night shifts (7:00 PM to 6:00 AM) provided the employer ensures secure doorstep transportation, CCTV security, and written consent."
      }
    ],
    csvContent: `Emp_ID,Employee_Name,Designation,Skill_Level,Mon_01,Tue_02,Wed_03,Thu_04,Fri_05,Sat_06,Sun_07,Total_Weekly_Hours,Weekly_Off_Granted\nEMP101,Vikas Shinde,Senior Welder,Grade A,A,A,A,A,A,A,WO,48,Yes (Sunday)\nEMP102,Deepak More,Machine Operator,Grade B,B,B,B,B,B,B,WO,48,Yes (Sunday)\nEMP103,Rohan Kale,Night Maintenance,Grade A,C,C,C,C,C,C,WO,48,Yes (Sunday)\nEMP104,Sachin Jadhav,Relief Operator,Grade B,WO,A,A,A,A,A,A,48,Yes (Monday)\n`
  },

  // 7. Performance Review Template
  "performance-review-template": {
    slug: "performance-review-template",
    name: "Performance Review Template",
    file: "performance-review-template.csv",
    h1Title: "Annual Performance Review & Appraisal Template for Indian Companies",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Objective appraisal format: Key Result Areas (KRAs), KPI scorecards, self-evaluation, manager ratings, core competencies, and development goals.",
    benefits: [
      "Structured 5-point rating scale with defined performance rubrics",
      "Combines quantitative KPI weights with qualitative competencies",
      "Directly linkable to annual salary increments and bonus payouts"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Annual Appraisal Scorecard Pack",
      subtitle: "KRA, KPI & Competency Assessment Standard",
      statNumber: "05",
      statLabel: "rating bands & weighted goal scorecards"
    },
    whatsInside: {
      heading: "What is inside the performance appraisal template",
      subheading: "Balances quantitative business goals with leadership and behavioral values.",
      cards: [
        {
          tag: "KRA Assessment",
          title: "Weighted Business Goals & KPIs",
          description: "Sets measurable targets with specific percentage weights (e.g., Sales Target: 40%, Defect Reduction: 20%, Project Delivery: 20%)."
        },
        {
          tag: "Behavioral Competencies",
          title: "Core Values & Team Collaboration",
          description: "Evaluates workplace communication, cross-functional ownership, problem-solving, and adherence to company ethics."
        },
        {
          tag: "Development Planning",
          title: "Training Needs & Career Goals",
          description: "Identifies skill gaps, targeted training programs for the coming financial year, and succession readiness."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why objective performance appraisals eliminate employee grievances",
      intro: "Under Indian labor jurisprudence, performance-linked pay cuts or contract terminations must be supported by verifiable, documented goal appraisals.",
      paragraphs: [
        "A structured appraisal scorecard ensures employees understand why specific increment percentages were awarded, eliminating perceptions of managerial bias.",
        "If a low-performing employee must be placed on a Performance Improvement Plan (PIP), objective appraisal documentation is essential to withstand legal scrutiny in labor tribunals."
      ]
    },
    automationSection: {
      headline: "Link appraisal ratings directly to month-end salary increments.",
      description: "PayroleHR's performance management module allows managers to submit appraisals online. Approved rating bands automatically calculate revised CTCs and arrears in 1 click.",
      featureSlug: "payroll-management",
      featureName: "Appraisal-to-Payroll Integration"
    },
    faqs: [
      {
        q: "What is the recommended weighting between business KRAs and behavioral competencies?",
        a: "Most Indian organizations assign 70% weight to objective quantitative KRAs and 30% weight to qualitative behavioral competencies and core company values."
      },
      {
        q: "How does self-appraisal benefit the performance review process?",
        a: "Self-appraisals encourage employees to reflect on achievements and challenges, establishing a constructive basis for the subsequent manager appraisal dialogue."
      }
    ],
    csvContent: `Goal_ID,Category,Key_Result_Area_Description,Target_Metric,Achieved_Metric,Weightage_Percent,Self_Rating_1_to_5,Manager_Rating_1_to_5,Weighted_Score,Comments\nKRA-01,Revenue,Achieve Annual Enterprise Sales Target,₹1.50 Crore,₹1.65 Crore,40%,5,5,2.00,Exceeded target by 10%\nKRA-02,Customer,Maintain Net Promoter Score (NPS),85%+,88%,20%,4,4,0.80,Consistent client satisfaction\nKRA-03,Process,Reduce Turnaround Time for Client Onboarding,3 Days,2.5 Days,20%,4,5,1.00,Implemented automated checklist\nKRA-04,Values,Team Mentorship & Technical Training,4 Workshops,4 Workshops,20%,4,4,0.80,Mentored 3 junior developers\nTotal,Summary,Annual Appraisal Composite Score,-,-,100%,4.25,4.60,4.60,Consistently Exceeds Expectations (Band 5)\n`
  },

  // 8. Offer Letter Template
  "offer-letter-template": {
    slug: "offer-letter-template",
    name: "Offer Letter Template",
    file: "offer-letter-template.csv",
    h1Title: "Formal Employment Offer Letter Format for Indian Companies",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Complete candidate job offer format: designation, reporting location, compensation CTC annexure, joining deadlines, and conditional offer terms.",
    benefits: [
      "Legally vetted employment terms and probation provisions",
      "Detailed salary annexure showing Monthly Gross vs Annual CTC",
      "Contains formal candidate acceptance sign-off section"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Job Offer Letter & Annexure Pack",
      subtitle: "Standard Indian employment offer protocol",
      statNumber: "12",
      statLabel: "contractual clauses & CTC schedules"
    },
    whatsInside: {
      heading: "What is inside the job offer template",
      subheading: "Clear contractual terms outlining job duties, probation terms, and compensation.",
      cards: [
        {
          tag: "Core Terms",
          title: "Role, Designation & Location",
          description: "Specifies official corporate title, department, reporting manager, workplace location (office, hybrid, or field), and expected joining date."
        },
        {
          tag: "Annexure A",
          title: "Detailed CTC Compensation Breakdown",
          description: "Itemized schedule of Basic, HRA, allowances, employer PF, insurance benefits, and estimated net monthly in-hand take-home pay."
        },
        {
          tag: "Conditions",
          title: "Background Verification & Acceptance",
          description: "Outlines background check contingencies, document submission deadlines, and written acceptance sign-off slip."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why a clear offer letter prevents pre-joining disputes",
      intro: "Under the Indian Contract Act 1872, an offer letter becomes a binding agreement once accepted in writing by the prospective candidate.",
      paragraphs: [
        "Vague descriptions of salary components (such as quoting an inflated CTC without disclosing PF or tax deductions) leads to early employee disillusionment and offer reneging.",
        "Providing an itemized CTC annexure establishes total compensation transparency before the candidate tenders resignation with their current employer."
      ]
    },
    automationSection: {
      headline: "Issue digital offer letters with 1-click candidate acceptance.",
      description: "PayroleHR generates branded offer letters with dynamic salary annexures automatically. Candidates review and sign digitally from their smartphone.",
      featureSlug: "employee-self-service",
      featureName: "Digital Recruitment & Onboarding"
    },
    faqs: [
      {
        q: "What is the difference between an Offer Letter and an Appointment Letter in India?",
        a: "An Offer Letter expresses intent to employ with basic terms before joining. An Appointment Letter is the comprehensive, binding legal employment contract issued upon joining."
      },
      {
        q: "Can an employer revoke an offer letter before the joining date?",
        a: "Yes, provided the offer letter contains clear conditional clauses (such as unsatisfactory background verification or failed medical fitness tests)."
      }
    ],
    csvContent: `Clause_Number,Clause_Title,Contractual_Term_Description,Sample_Text_Value\n01,Position & Title,Official Designation,Senior Software Engineer\n02,Department,Organizational Business Unit,Engineering & Technology\n03,Work Location,Designated Office / Hybrid Hub,"E-City Tech Park, Bengaluru"\n04,Proposed Joining Date,Expected Reporting Day,1st December 2026\n05,Probation Period,Evaluation Duration,6 Months from Joining\n06,Annual CTC,Total Cost to Company,₹14,00,000 per Annum\n07,Offer Validity,Deadline for Acceptance,7 Days from Issue Date\n`
  },

  // 9. Appointment Letter Template
  "appointment-letter-template": {
    slug: "appointment-letter-template",
    name: "Appointment Letter Template",
    file: "appointment-letter-template.csv",
    h1Title: "Comprehensive Employment Appointment Letter Format (Indian Labor Standard)",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Complete formal employment contract: confidentiality, intellectual property (IP) assignment, non-solicitation, notice period, code of conduct, and termination terms.",
    benefits: [
      "Vetted against the Industrial Relations Code and Shops Act rules",
      "Robust non-disclosure (NDA) and intellectual property clauses",
      "Clear notice period buyout and disciplinary dismissal protocols"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Employment Contract & Appointment Pack",
      subtitle: "Comprehensive legal appointment documentation",
      statNumber: "16",
      statLabel: "statutory clauses & service terms"
    },
    whatsInside: {
      heading: "What is inside the appointment letter pack",
      subheading: "The master employment contract executed upon the employee's first working day.",
      cards: [
        {
          tag: "Service Terms",
          title: "Working Hours, Probation & Confirmation",
          description: "Defines daily working hours, shift timings, 6-month probation evaluation, and formal written confirmation procedure."
        },
        {
          tag: "Legal Safeguards",
          title: "IP Assignment & Non-Disclosure (NDA)",
          description: "Protects proprietary software, trade secrets, customer records, and assigns all employee work inventions to the employer."
        },
        {
          tag: "Separation Terms",
          title: "Notice Period & Disciplinary Exit",
          description: "Specifies 30 to 90 days notice requirement, notice pay recovery in lieu, and grounds for summary dismissal without notice."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why a comprehensive appointment letter is your company's strongest legal safeguard",
      intro: "Under Indian labor enactments, in the event of an employment dispute or wrongful termination claim, courts rely strictly on the signed appointment letter.",
      paragraphs: [
        "Without explicit written clauses governing intellectual property ownership, confidentiality, and notice periods, employers have limited legal recourse if an employee misuses proprietary assets or exits abruptly.",
        "Executing a legally sound appointment contract protects your business from breach-of-trust disputes while clarifying mutual rights and responsibilities."
      ]
    },
    automationSection: {
      headline: "Manage employee contracts and digital records effortlessly.",
      description: "PayroleHR archives signed appointment letters securely in the cloud. Maintain full document audit trails accessible directly from employee profiles.",
      featureSlug: "employee-self-service",
      featureName: "Cloud Document Management"
    },
    faqs: [
      {
        q: "Is a non-compete clause enforceable after employment ends in India?",
        a: "Under Section 27 of the Indian Contract Act 1872, non-compete restrictions post-employment are generally void as restraints on trade. However, non-disclosure (NDA) and non-solicitation clauses remain strictly enforceable."
      },
      {
        q: "How does the probation clause protect the employer?",
        a: "A clearly drafted probation clause allows the employer to evaluate suitability and terminate the contract with shorter notice (typically 7 to 15 days) if performance standards are not met."
      }
    ],
    csvContent: `Clause_ID,Heading,Legal_Clause_Summary,Compliance_Reference\nSEC-01,Probation Period,6 months probation with confirmation based on satisfactory review,Industrial Standing Orders\nSEC-02,Compensation,Salary payable as per Annexure A subject to statutory tax deductions,Payment of Wages Act\nSEC-03,Working Hours,48 hours per week with designated weekly rest day,Factories Act / Shops Act\nSEC-04,Intellectual Property,All inventions and works created during employment belong to employer,Copyright Act 1957\nSEC-05,Confidentiality,Strict non-disclosure of client data and trade secrets,Information Technology Act\nSEC-06,Notice Period,60 days written notice or gross salary in lieu thereof,Indian Contract Act\n`
  },

  // 10. Salary Slip Template
  "salary-slip-template": {
    slug: "salary-slip-template",
    name: "Salary Slip Template",
    file: "salary-slip-template.csv",
    h1Title: "Monthly Salary Slip / Payslip Format for Indian Businesses",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Compliant Indian payslip format: itemized earnings, statutory PF/ESI/PT/TDS deductions, UAN & bank account masking, attendance days, and net pay in words.",
    benefits: [
      "Complies with Payment of Wages Act and State Payslip mandates",
      "Itemizes Basic, HRA, Special Allowance, and overtime earnings",
      "Displays UAN, ESIC, PAN, and bank transaction reference numbers"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Monthly Salary Slip & Payslip Pack",
      subtitle: "Official Indian statutory payslip layout",
      statNumber: "20",
      statLabel: "itemized earnings, deductions & bank fields"
    },
    whatsInside: {
      heading: "What is inside the salary slip format",
      subheading: "The official proof of income issued to employees at each monthly payroll run.",
      cards: [
        {
          tag: "Employee & Pay Header",
          title: "Attendance & Master Details",
          description: "Displays employee ID, PAN, UAN, ESIC number, designated bank account, wage month, total calendar days, and net paid working days."
        },
        {
          tag: "Earnings Side",
          title: "Itemized Gross Wages",
          description: "Itemizes Basic Salary, Dearness Allowance (DA), House Rent Allowance (HRA), Special Allowance, and overtime disbursements."
        },
        {
          tag: "Deductions Side",
          title: "Statutory & Net Pay Reconciliation",
          description: "Details Employee PF (12%), ESIC (0.75%), Professional Tax (PT), TDS income tax, salary advance recoveries, and net pay in numbers and words."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why a compliant salary slip is a statutory requirement under Indian law",
      intro: "Under Section 136 of the Code on Wages 2019 and various state Shops and Commercial Establishments rules, every employer must issue a wage slip to employees on or before wage disbursement.",
      paragraphs: [
        "A compliant payslip serves as crucial documentary evidence for employees when applying for home loans, credit facilities, and personal income tax returns (ITR).",
        "Transparent itemization of deductions protects the organization against wage dispute claims and proves prompt remittance of statutory contributions."
      ]
    },
    automationSection: {
      headline: "Deliver password-protected payslips on WhatsApp and Mobile App in 1 click.",
      description: "PayroleHR generates branded PDF payslips automatically after each payroll run. Employees download payslips directly from their mobile portal with zero HR effort.",
      featureSlug: "payroll-management",
      featureName: "1-Click Payslip Generation"
    },
    faqs: [
      {
        q: "Is it legally acceptable to issue digital PDF payslips instead of paper slips in India?",
        a: "Yes. Under the Information Technology Act 2000 and modern labor rules, digitally generated electronic payslips sent via portal or email are fully valid legal records."
      },
      {
        q: "What details are legally mandatory on an Indian payslip?",
        a: "A valid payslip must display company name, employee designation, UAN/PAN, total days worked, gross wages earned, itemized statutory deductions (PF/ESI/PT), and net payable amount."
      }
    ],
    csvContent: `Company_Name,Pay_Month,Employee_ID,Employee_Name,Designation,Department,PAN,UAN,Bank_Account_Masked,Total_Days,Paid_Days,LOP_Days,Basic_Salary,HRA,Special_Allowance,Gross_Earnings,Employee_PF,ESIC,Professional_Tax,TDS_Tax,Total_Deductions,Net_Payable_Salary,Net_Pay_In_Words\n"PayroleHR Enterprise Pvt Ltd",October 2026,EMP005,Ananya Sen,Product Manager,Technology,ABCDE9999F,100123456789,XXXXXX5678,31,31,0,35000,17500,22500,75000,1800,0,200,4500,6500,68500,"Sixty Eight Thousand Five Hundred Rupees Only"\n`
  },

  // 11. Full & Final Settlement Checklist
  "full-and-final-settlement-checklist": {
    slug: "full-and-final-settlement-checklist",
    name: "Full & Final Settlement Checklist",
    file: "full-and-final-settlement-checklist.csv",
    h1Title: "Full and Final (FnF) Settlement Statement & Calculation Format",
    badge: "FREE EXCEL & CSV PACK",
    subtitle: "Complete exit payroll settlement statement: earned wages up to last working day, leave encashment, statutory gratuity, notice pay adjustments, and tax calculations.",
    benefits: [
      "15/26 statutory gratuity formula calculation included",
      "Leave encashment tax exemption reconciliation (Section 10(10AA))",
      "Prevents post-exit wage claims and provides clear audit documentation"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Full & Final Settlement Pack",
      subtitle: "Comprehensive separation payroll & gratuity standard",
      statNumber: "14",
      statLabel: "settlement components & clearance schedules"
    },
    whatsInside: {
      heading: "What is inside the Full & Final settlement format",
      subheading: "Lays out all final credit and debit components to compute net separation payout.",
      cards: [
        {
          tag: "Earnings Side",
          title: "All Separation Dues Payable",
          description: "Earned salary for days worked in exit month, encashment of accumulated privilege leave balance, statutory gratuity (if 5+ years of service), and accrued annual bonus."
        },
        {
          tag: "Deductions Side",
          title: "Recoveries & Statutory Deductions",
          description: "Notice period short-fall recovery (if applicable), unreturned company asset costs, outstanding loan/advance balances, and final TDS tax computation."
        },
        {
          tag: "Sign-Off Section",
          title: "Employee Discharge & Receipt Voucher",
          description: "Employee sign-off confirming receipt of all terminal dues in full satisfaction of all claims against the company."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why accurate FnF calculations protect against labor court recovery proceedings",
      intro: "Under the Payment of Wages Act and the Code on Wages 2019, delayed or disputed terminal settlements are heavily penalized by labor authorities.",
      paragraphs: [
        "Calculating leave encashment (tax exempt up to ₹25 Lakhs under Section 10(10AA) for non-government employees) and gratuity accurately avoids tax withholding discrepancies.",
        "A signed FnF statement acts as a complete legal release, preventing former employees from filing retrospective claims regarding unpaid overtime or bonuses."
      ]
    },
    automationSection: {
      headline: "Compute Full and Final settlements in 60 seconds with PayroleHR.",
      description: "PayroleHR automatically reconciles attendance, remaining leave balances, notice periods, and gratuity formulas to generate complete audit-ready FnF statements instantly.",
      featureSlug: "payroll-management",
      featureName: "Automated Exit Payroll Settlement"
    },
    faqs: [
      {
        q: "What is the formula for calculating statutory gratuity in India?",
        a: "Under the Payment of Gratuity Act 1972: Gratuity = (15 × Last Drawn Basic + DA × Completed Years of Service) ÷ 26."
      },
      {
        q: "Is an employee entitled to gratuity if they resign before 5 years of service?",
        a: "Generally, gratuity mandates a minimum of 5 years of continuous service. The only exception is termination due to death or permanent disablement, where the 5-year condition does not apply."
      }
    ],
    csvContent: `FnF_Statement_ID,Employee_ID,Employee_Name,Date_Of_Joining,Last_Working_Date,Total_Service_Years,Last_Drawn_Basic,Exit_Month_Days_Worked,Earned_Salary,Leave_Balance_Days,Leave_Encashment_Amount,Gratuity_Payable,Total_Dues_A,Notice_Period_Short_Days,Notice_Pay_Recovery,Loan_Recovery,TDS_Deduction,Total_Recoveries_B,Net_FnF_Payable\nFNF-2026-08,EMP009,Kavita Deshmukh,2020-03-01,2026-10-31,6,32000,31,32000,18,19200,110769,161969,0,0,0,8500,8500,153469\n`
  },

  // 12. Appreciation Letter Format (From User Screenshot 2)
  "appreciation-letter-format": {
    slug: "appreciation-letter-format",
    name: "Appreciation Letter Format",
    file: "appreciation-letter-format.csv",
    h1Title: "Appreciation Letter Format for Indian Employers",
    badge: "FREE WORD & PDF PACK",
    subtitle: "Formal letters of appreciation, employee of the month scheme and certificate, and the tax, PF and consent rules for any cash, gift or voucher that goes with them.",
    benefits: [
      "Four letter formats: project milestone, peer thank-you, leadership, and long service",
      "Employee of the month scheme: written scoring rubric and printable certificate",
      "Complete guide on perquisite taxation for cash awards, gift hampers, and vouchers"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: "Appreciation Letter & Recognition Pack",
      subtitle: "For Indian employers, retail & corporate teams",
      statNumber: "11",
      statLabel: "formats, letters to recognition schemes"
    },
    whatsInside: {
      heading: "What is inside the appreciation pack",
      subheading: "Eleven formats and compliance schedules. Read section 2 before any award is disbursed.",
      cards: [
        {
          tag: "Formats 01 to 04",
          title: "Four Distinct Appreciation Letters",
          description: "Formal achievement citation, quick peer thank-you note, team project success acknowledgment, and long-service milestone letter. Each letter expresses gratitude without triggering contractual commitments.",
          miniTable: {
            headers: ["One Employee's Annual Gifts", "Taxable Treatment under Indian IT Act"],
            rows: [
              ["Diwali Festive Hamper (₹4,500)", "Nil (Exempt below ₹5,000 threshold)"],
              ["Employee of Month Voucher (₹4,000)", "Nil (Cumulative under ₹5,000)"],
              ["Annual Total Reaching ₹12,000", "Entire ₹12,000 Taxable under Section 17(2)"],
              ["Direct Cash Reward (Any Amount)", "Treated as Salary; Taxed with TDS"]
            ]
          }
        },
        {
          tag: "Formats 05 to 07",
          title: "Employee of the Month Scheme",
          description: "A formal scheme notice with transparent evaluation criteria, departmental nomination scorecard, and high-resolution printable award certificate."
        },
        {
          tag: "Sections 08 to 11",
          title: "Tax, PF & DPDP Consent Guidelines",
          description: "Clarifies why fixed recurring monetary awards risk becoming regular wages subject to PF, and includes employee consent forms for publishing winner photos on LinkedIn under the DPDP Act 2023."
        }
      ]
    },
    whyThisMatters: {
      heading: "Why employee recognition rewards need more compliance care than the letter itself",
      intro: "While an appreciation letter costs nothing in tax, the accompanying financial award or gift voucher carries distinct statutory implications under Indian tax and labor laws.",
      paragraphs: [
        "Under Rule 3(7)(iv) of the Income Tax Rules, non-monetary gifts or vouchers provided to an employee are exempt from perquisite tax only if their aggregate value remains below ₹5,000 in a financial year. Once the total gifts exceed ₹5,000, the entire amount becomes taxable as a perquisite under Section 17(2) with TDS withheld.",
        "Furthermore, any cash award is legally classified as salary and must be processed through payroll with appropriate TDS withholding. Promising a fixed recurring award each month may cause labor courts to classify it as wages subject to EPF contributions. This template pack ensures your rewards program remains generous yet strictly compliant."
      ]
    },
    automationSection: {
      headline: "Recognize top performers and process awards directly in payroll.",
      description: "PayroleHR connects employee recognition with payroll processing. Issue digital appreciation badges, announce winners on the employee self-service app, and route taxable vouchers into payroll seamlessly.",
      featureSlug: "payroll-management",
      featureName: "Recognition & Incentive Payroll Processing"
    },
    faqs: [
      {
        q: "Are gift vouchers given to employees subject to PF deduction in India?",
        a: "Ad-hoc non-cash vouchers given for special performance or festivals are not considered 'basic wages' under the EPF Act. However, regular monthly cash performance bonuses must be reviewed against wage ceiling rules."
      },
      {
        q: "Do employers need consent to post an award winner's photograph on social media?",
        a: "Under the Digital Personal Data Protection (DPDP) Act, 2023, publishing an employee's photo and full name on external public platforms like LinkedIn requires explicit written consent."
      }
    ],
    csvContent: `Letter_Template_ID,Letter_Category,Target_Audience,Tone_Style,Accompanying_Reward_Type,Tax_Treatment_Note\nLTR-01,Project Milestone Appreciation,Individual Contributor,Formal Professional,Plaque / Certificate,Non-taxable\nLTR-02,Employee of the Month Citation,Outstanding Performer,Inspirational,Gift Voucher (₹3,000),Exempt under ₹5,000 annual perquisite threshold\nLTR-03,Long Service Award (5+ Years),Tenured Employee,Celebratory & Warm,Gold Coin / Travel Voucher,Taxable under Sec 17(2) if exceeding ₹5,000\nLTR-04,Peer Recognition Thank-You,Cross-Functional Team,Collegiate & Friendly,Thank-You Card,Non-taxable\n`
  }
};

export function getTemplateDetail(slug: string): TemplateDetail {
  if (TEMPLATES_DATA[slug]) {
    return TEMPLATES_DATA[slug];
  }

  // Fallback for any unknown slug
  const cleanName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    slug,
    name: cleanName,
    file: `${slug}.csv`,
    h1Title: `${cleanName} for Indian Employers`,
    badge: "FREE EXCEL & CSV PACK",
    subtitle: `Downloadable Indian HR and statutory document template for ${cleanName}, designed to streamline workforce management.`,
    benefits: [
      "Standard Indian compliance and labor law alignment",
      "Ready to customize in Excel, Google Sheets, or PayroleHR",
      "Instant download with zero registration required"
    ],
    packCover: {
      badge: "PAYROLEHR PRESENTS",
      title: `${cleanName} Pack`,
      subtitle: "For Indian enterprises & growing teams",
      statNumber: "10",
      statLabel: "standard fields & guidance schedules"
    },
    whatsInside: {
      heading: `What is inside the ${cleanName} pack`,
      subheading: "Designed by Indian payroll and compliance specialists.",
      cards: [
        {
          tag: "Section 01",
          title: "Master Document Format",
          description: `Comprehensive structure with all necessary data capture fields for ${cleanName}.`
        },
        {
          tag: "Section 02",
          title: "Guidance & Statutory Rules",
          description: "Clear instructions on compliance rules under the Code on Wages and state labor acts."
        }
      ]
    },
    whyThisMatters: {
      heading: `Why standardized documentation for ${cleanName} matters`,
      intro: "Maintaining structured HR documentation eliminates compliance ambiguities and audit liabilities.",
      paragraphs: [
        `Standardized documentation for ${cleanName} provides clear evidentiary records for internal audits and statutory inspections.`,
        "Transitioning from loose spreadsheets to structured formats ensures consistent employee governance across all company locations."
      ]
    },
    automationSection: {
      headline: `Automate ${cleanName} with PayroleHR software.`,
      description: "Replace manual spreadsheet tracking with PayroleHR's unified cloud platform.",
      featureSlug: "payroll-management",
      featureName: "Core HR Automation"
    },
    faqs: [
      {
        q: `How can I customize this ${cleanName} format?`,
        a: "You can download the CSV file and open it in Microsoft Excel, Google Sheets, or Apple Numbers to adapt fields to your specific policy."
      }
    ],
    csvContent: `Field_ID,Field_Name,Data_Type,Description,Sample_Value\n01,Record_ID,Alphanumeric,Unique Identifier,REC001\n02,Employee_Name,Text,Full Legal Name,Amit Kumar\n03,Date,Date (YYYY-MM-DD),Action Date,2026-10-15\n`
  };
}
