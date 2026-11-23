export interface GlossaryTermDetail {
  slug: string;
  term: string;
  h1Title: string;
  letter: string;
  readTime: string;
  updatedDate: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  audioDuration: string;

  // Section 1: What is ...
  overviewHeading: string;
  overviewParagraphs: string[];

  // Section 2: Calculation / Formula
  calculationHeading: string;
  calculationIntro: string;
  formula?: string;
  formulaRules?: {
    label: string;
    description: string;
  }[];
  formulaPostNote?: string;
  hasBellCurveChart?: boolean;

  // Section 3: Comparison Table
  comparisonHeading: string;
  comparisonTable: {
    headers: string[];
    rows: string[][];
  };

  // Section 4: Worked Example
  exampleHeading: string;
  exampleIntro: string;
  exampleTable?: {
    headers: string[];
    rows: string[][];
  };
  exampleNote?: string;
  exampleExplanation: string;

  // Section 5: Indian Law & Statutory Rules
  lawHeading: string;
  lawIntro?: string;
  lawRules: string[];
  lawDetails: string[];

  // Section 6: Finding the Cause / Operational Guidance
  causeHeading: string;
  causeIntro: string;
  causePoints: string[];
  causeConclusion?: string;

  // Section 7: Software & Report
  reportHeading: string;
  reportIntro: string;
  reportFeatures: string[];
  reportCtaText: string;
  featureSlug: string;

  // Section 8: FAQs
  faqs: {
    q: string;
    a: string;
  }[];

  // Sidebar Table of Contents
  tocSections: {
    id: string;
    number: number;
    title: string;
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
  // =========================================================================
  // 1. ABSENTEEISM (Matching 100% of User's 6 Screenshots from AttendoHR)
  // =========================================================================
  absenteeism: {
    slug: "absenteeism",
    term: "Absenteeism",
    h1Title: "Absenteeism: Meaning, Rate Formula & Indian Law",
    letter: "A",
    readTime: "4 min read",
    updatedDate: "Updated 16 October 2026",
    category: "Attendance & Time Tracking",
    metaTitle: "Absenteeism: Meaning, Rate Formula & Indian Law | PayroleHR",
    metaDescription: "Understand absenteeism in Indian workplaces: definition, rate calculation formula, comparison with approved leave, biscuit factory example, Model Standing Orders 2026, and muster reports.",
    definition: "Absenteeism is an employee's repeated, unplanned absence from scheduled work, without approved leave or a good reason.",
    audioDuration: "5:19",

    // Section 1
    overviewHeading: "What Is Absenteeism?",
    overviewParagraphs: [
      "A single missed day is an absence, while a pattern of unplanned missed days is what HR teams track.",
      "Absenteeism is an employee's repeated, unplanned absence from scheduled work, without approved leave or a good reason. No Labour Code uses the word. In India, the Model Standing Orders, 2026, made under the Industrial Relations Code, 2020, treat habitual absence without leave as misconduct where 300 or more workers are employed."
    ],

    // Section 2
    calculationHeading: "How to Calculate the Absenteeism Rate",
    calculationIntro: "The rate shows what share of scheduled work was lost to unplanned absence:",
    formula: "Absenteeism rate (%) = unplanned absent days ÷ scheduled working days × 100",
    formulaRules: [
      {
        label: "Count",
        description: "days someone was rostered to work and did not come, with no approved leave"
      },
      {
        label: "Leave out of the top line",
        description: "approved leave, paid or unpaid, so it does not look like a problem"
      },
      {
        label: "Leave out of both lines",
        description: "holidays and week-offs, because nobody was due to work"
      },
      {
        label: "Half days",
        description: "count them as 0.5 if your policy marks them that way"
      }
    ],
    formulaPostNote: "Our guide to calculating attendance percentage shows how one month can give three different answers depending on what you divide by.",

    // Section 3
    comparisonHeading: "Absenteeism vs Approved Leave",
    comparisonTable: {
      headers: ["Aspect", "Absenteeism", "Approved leave"],
      rows: [
        ["Planned", "No", "Yes, applied for"],
        ["Permission", "None given", "Granted in writing"],
        ["Pay impact", "Deduction (loss of pay)", "Paid from leave balance"],
        ["Statutory standing", "Potential misconduct inquiry", "Protected legal entitlement"],
        ["Shift coverage", "Unexpected floor vacancy & overtime strain", "Planned coverage arranged in advance in shift roster"]
      ]
    },

    // Section 4
    exampleHeading: "Absenteeism Example",
    exampleIntro: "The packing floor of a biscuit factory in Mumbai (an example) has 40 packers in September 2026. With Sundays off, each is rostered for 26 days.",
    exampleTable: {
      headers: ["Item", "Days"],
      rows: [
        ["Rostered", "1,040"],
        ["Approved", "31"],
        ["Unplanned", "47"],
        ["Rate", "4.52%"]
      ]
    },
    exampleNote: "Note: this is an invented example for illustration only. The factory, headcount and days are made up.",
    exampleExplanation: "Here 47 ÷ 1,040 × 100 gives 4.52%. Count the 31 approved days as well and the rate jumps to 7.50%, which blames the floor for leave the factory granted. One packer missed 6 of her 26 days without leave, a personal rate of 23.08%, so that is where the conversation starts.",

    // Section 5
    lawHeading: "What Indian Law Says About Absence",
    lawIntro: "Where 300 or more workers are employed, the Model Standing Orders apply until the employer's own standing orders are certified. They draw two lines:",
    lawRules: [
      "1. A worker who habitually reports late or stays absent is liable to a wage deduction under the Code on Wages, 2019.",
      "2. Habitual absence without leave or without sufficient cause is misconduct."
    ],
    lawDetails: [
      "Any penalty follows the enquiry the standing orders set out. Below 300 workers, the appointment letter and your state's shops and establishments law usually set the rules instead.",
      "Whatever the headcount, a deduction for absence has a ceiling. Section 20 of the Code on Wages allows it only for the absence, and never in a larger proportion than the time missed. Our guide to leave without pay works through the maths."
    ],

    // Section 6
    causeHeading: "Finding the Cause Before the Penalty",
    causeIntro: "Before jumping straight to wage deductions or disciplinary notices, experienced HR managers look for systemic patterns:",
    causePoints: [
      "Personal or family medical emergencies without accessible leave channels",
      "Workplace burnout or rigid, unmanageable rotating night shifts",
      "Long, exhausting commutes or localized public transit disruptions",
      "Friction with supervisors or lack of transparent leave approval workflows"
    ],
    causeConclusion: "Clear communication and fair regularisation policies prevent minor attendance slips from escalating into legal disputes.",

    // Section 7
    reportHeading: "See Every Absent Day in One Report",
    reportIntro: "To act on absenteeism fairly, you need each person's absent days counted separately from their approved leave.",
    reportFeatures: [
      "PayroleHR is a complete workforce management system for every kind of business.",
      "Its Muster Report lists Full Days, Half Days, Absent, Week Off, Leaves and Holidays for each employee.",
      "Its Attendance Master report shows the day-by-day status behind those totals with face and GPS biometric proof.",
      "Approved regularisations sync seamlessly into the salary engine, avoiding manual spreadsheet adjustments."
    ],
    reportCtaText: "To see that split for your own team, explore PayroleHR.",
    featureSlug: "attendance-management",

    // Section 8
    faqs: [
      {
        q: "What Is a Good Absenteeism Rate?",
        a: "In Indian manufacturing and retail, an absenteeism rate between 2% and 4% is generally considered normal. Rates exceeding 6% typically indicate shift dissatisfaction, burnout, or unaddressed workplace issues requiring HR review."
      },
      {
        q: "How Long Before Absence Becomes Misconduct?",
        a: "Under the Model Standing Orders, habitual absence without leave or absence without sanction for more than 8 to 10 consecutive working days is classified as major misconduct, allowing the employer to issue a formal show-cause letter and initiate an inquiry."
      },
      {
        q: "Can You Deduct 8 Days of Pay for 1 Day of Absence?",
        a: "No. Under Section 20 of the Code on Wages, 2019, deductions for absence from duty cannot exceed the wage corresponding to the period of absence. A penalty deduction of up to 8 days is only permissible in cases of illegal concerted strikes by 10 or more workers under certified standing orders."
      },
      {
        q: "How Does PayroleHR Calculate Absenteeism Automatically?",
        a: "PayroleHR connects real-time facial recognition check-ins, mobile geofenced punches, and shift rosters. If an employee does not check in, the system marks the shift as absent and alerts the supervisor, while approved leave regularisations automatically adjust the muster roll."
      }
    ],

    tocSections: [
      { id: "section-1", number: 1, title: "What Is Absenteeism?" },
      { id: "section-2", number: 2, title: "How to Calculate the Absenteeism Rate" },
      { id: "section-3", number: 3, title: "Absenteeism vs Approved Leave" },
      { id: "section-4", number: 4, title: "Absenteeism Example" },
      { id: "section-5", number: 5, title: "What Indian Law Says About Absence" },
      { id: "section-6", number: 6, title: "Finding the Cause Before the Penalty" },
      { id: "section-7", number: 7, title: "See Every Absent Day in One Report" },
      { id: "section-8", number: 8, title: "Frequently Asked Questions" }
    ],
    relatedTermSlugs: ["attendance-regularisation", "lop", "paid-days", "unpaid-days", "roster"]
  },

  // =========================================================================
  // 2. BELL CURVE (Forced Distribution Appraisal Model with Interactive Chart)
  // =========================================================================
  "bell-curve": {
    slug: "bell-curve",
    term: "Bell curve",
    h1Title: "Bell Curve Appraisal: Meaning, Rate Formula, Normal Distribution & Indian Law",
    letter: "B",
    readTime: "5 min read",
    updatedDate: "Updated 18 October 2026",
    category: "Performance & Compensation",
    metaTitle: "Bell Curve Appraisal: Meaning, Rate Formula, Normal Distribution & Indian Law | PayroleHR",
    metaDescription: "Understand Bell Curve forced ranking in Indian HR appraisals: statistical normal distribution, 10-20-40-20-10 quota bands, Bell Curve vs Absolute Rating, Code on Wages compliance, and PIP rules.",
    definition: "A performance appraisal method based on forced distribution, where a fixed percentage of employees must be ranked into predetermined rating bands (such as 10% top, 20% above, 40% middle, 20% below, and 10% bottom).",
    audioDuration: "6:20",

    // Section 1
    overviewHeading: "What Is a Bell Curve in Performance Appraisals?",
    overviewParagraphs: [
      "A Bell Curve appraisal, also known as forced distribution or forced ranking, is a performance evaluation method that maps employee ratings onto a statistical normal distribution curve.",
      "Under this model, managers cannot give high marks to everyone. Instead, HR mandates that a predetermined quota of staff fall into specific performance tiers: a small percentage at the top, the largest majority clustered around the average middle, and a fixed percentage forced into the bottom tier."
    ],

    // Section 2
    calculationHeading: "How the Bell Curve is Calculated & Distributed",
    calculationIntro: "The standard forced distribution model divides an organization's headcount into 5 calibrated performance tiers:",
    formula: "Forced Distribution Split = 10% (Top) + 20% (Above) + 40% (Middle) + 20% (Below) + 10% (Bottom)",
    formulaRules: [
      {
        label: "Manager rating",
        description: "Supervisors evaluate staff on predefined annual goals and operational KPIs"
      },
      {
        label: "HR score pooling",
        description: "Ratings from all departments are compiled to neutralize lenient or overly strict grading"
      },
      {
        label: "Calibration review",
        description: "Leadership normalizes scores into strict quota percentages to fit the bell shape"
      },
      {
        label: "Pay increment mapping",
        description: "Salary hikes, promotions, and variable bonuses are allocated directly by rating tier"
      }
    ],
    formulaPostNote: "Use the interactive simulator below to see how a team of 50, 100, or 250 employees gets distributed across salary increment bands:",
    hasBellCurveChart: true,

    // Section 3
    comparisonHeading: "Bell Curve vs Absolute Rating",
    comparisonTable: {
      headers: ["Aspect", "Bell Curve (Forced Ranking)", "Absolute Rating Standard"],
      rows: [
        ["Evaluation standard", "Relative: employees are evaluated against each other", "Objective: employees are evaluated against preset targets"],
        ["Team collaboration", "Can foster hyper-competition and friction between peers", "Promotes open teamwork since anyone meeting goals scores high"],
        ["Quota enforcement", "Strict: fixed % must land in bottom and top categories", "Flexible: no artificial limits on high or low scores"],
        ["High-performing teams", "Forces capable contributors into bottom tiers arbitrarily", "Allows an entire exceptional team to receive top recognition"],
        ["Rating inflation", "Eliminates manager leniency and grade inflation effectively", "Prone to grade inflation if managers avoid tough reviews"]
      ]
    },

    // Section 4
    exampleHeading: "Worked Bell Curve Example: 100-Member Tech Team",
    exampleIntro: "Consider a mid-sized IT engineering department in Bengaluru with 100 engineers undergoing annual salary appraisals in September 2026:",
    exampleTable: {
      headers: ["Performance Band", "Quota %", "Headcount", "Appraisal Outcome"],
      rows: [
        ["Band 5: Star Performers", "10%", "10 Engineers", "18% – 25% Hike + 1.5x Bonus + Fast-track Promotion"],
        ["Band 4: Above Average", "20%", "20 Engineers", "12% – 16% Hike + 1.25x Target Bonus"],
        ["Band 3: Meets Expectations (The Peak)", "40%", "40 Engineers", "8% – 11% Standard Annual Increment"],
        ["Band 2: Below Average (Developing)", "20%", "20 Engineers", "3% – 5% Cost of Living Adjustment + Targeted Upskilling"],
        ["Band 1: Low Performers", "10%", "10 Engineers", "0% (Salary Frozen) + Placed on 90-Day PIP"]
      ]
    },
    exampleNote: "Note: In calibrated appraisals, managers can appeal borderline cases during committee sessions before final salary lock.",
    exampleExplanation: "In a team of 100, exactly 10 engineers are placed in Band 1 regardless of individual effort. If all 100 engineers met their sprint targets, the bottom 10 still face salary freezes and PIPs. This is why modern Indian companies combine bell curves with flexible calibration.",

    // Section 5
    lawHeading: "What Indian Law Says About Forced Ranking",
    lawIntro: "While no specific Indian statute mandates or bans forced distribution, courts and labor tribunals enforce clear employee protection boundaries:",
    lawRules: [
      "1. Under the Code on Wages 2019 and Equal Remuneration principles, bell curve distributions cannot produce gender, caste, or discriminatory pay disparities for similar work.",
      "2. Termination based solely on a bell curve rating without a formal Performance Improvement Plan (PIP) is treated as arbitrary dismissal by labor courts."
    ],
    lawDetails: [
      "Under the Industrial Disputes Act, 1947, and Model Standing Orders, an employer must provide written documentation of performance shortfalls, offer reasonable mentorship or training, and allow time for improvement before taking contractual action.",
      "For white-collar employees, employment contracts and company appraisal policies govern increments, but arbitrary demotions without due process invite breach-of-contract disputes."
    ],

    // Section 6
    causeHeading: "Calibrating the Curve: Modern Best Practices",
    causeIntro: "To prevent talent attrition and demoralization, forward-thinking Indian enterprises adopt calibrated evaluation models:",
    causePoints: [
      "Conduct cross-functional calibration committees so no single manager's bias determines an employee's band",
      "Allow high-performing teams to have wider top bands (e.g., 20% top rather than rigid 10%)",
      "Shift from once-a-year surprise ratings to monthly 1-on-1 performance check-ins",
      "Separate development coaching from financial compensation reviews so employees speak openly about challenges"
    ],
    causeConclusion: "A flexible, data-backed bell curve controls salary budgets without destroying teamwork and psychological safety.",

    // Section 7
    reportHeading: "Link Performance Directly to Payroll with PayroleHR",
    reportIntro: "Eliminate spreadsheet chaos when translating appraisal rating scores into month-end salary adjustments.",
    reportFeatures: [
      "PayroleHR's Performance module allows HR to configure customizable rating criteria and approval hierarchies.",
      "Approved increment percentages and bonus multipliers automatically update employee CTC structures in 1 click.",
      "Detailed revision letters and revised payslips are generated automatically in the employee self-service mobile app.",
      "Maintains tamper-proof historical logs of past appraisal cycles for audit and succession planning."
    ],
    reportCtaText: "Experience streamlined appraisal-to-payroll workflows with PayroleHR.",
    featureSlug: "payroll-management",

    // Section 8
    faqs: [
      {
        q: "Can an employee challenge their bell curve rating in India?",
        a: "Yes. Most enterprise HR policies provide an internal grievance escalation mechanism where employees can request a review by the calibration committee. Legally, while companies have managerial discretion over increments, arbitrary terminations without prior PIP notices can be challenged in labor courts."
      },
      {
        q: "Why are many tech companies moving away from strict bell curves?",
        a: "Strict forced ranking often creates toxic peer competition, encourages managers to hoard low-performing projects to protect star performers, and penalizes exceptional teams where every member contributed significantly."
      },
      {
        q: "What is the difference between calibration and forced ranking?",
        a: "Forced ranking strictly requires a mathematical percentage (e.g. 10-20-40-20-10) regardless of actual output. Calibration is a collaborative review meeting where department heads adjust rankings to account for project difficulty, team composition, and fair evaluation standards."
      },
      {
        q: "How does PayroleHR handle annual salary increments from appraisals?",
        a: "PayroleHR allows HR admins to upload approved appraisal rating bands or enter percentage hikes. The system automatically recalculates Basic, HRA, statutory PF, ESIC, and net in-hand pay across the entire organization with backdated arrears if applicable."
      }
    ],

    tocSections: [
      { id: "section-1", number: 1, title: "What Is a Bell Curve?" },
      { id: "section-2", number: 2, title: "How the Bell Curve is Calculated" },
      { id: "section-3", number: 3, title: "Bell Curve vs Absolute Rating" },
      { id: "section-4", number: 4, title: "100-Staff Worked Example" },
      { id: "section-5", number: 5, title: "What Indian Law Says About Appraisals" },
      { id: "section-6", number: 6, title: "Calibrating the Curve & Best Practices" },
      { id: "section-7", number: 7, title: "Automate Appraisals in PayroleHR" },
      { id: "section-8", number: 8, title: "Frequently Asked Questions" }
    ],
    relatedTermSlugs: ["basic-salary", "ctc", "deductions", "arrears", "statutory-bonus"]
  }
};

// Fallback generator for remaining glossary terms ensuring 8 complete sections
export function getGlossaryDetail(
  slug: string,
  matchedTerm?: { term: string; def: string }
): GlossaryTermDetail {
  if (GLOSSARY_DETAILS[slug]) {
    return GLOSSARY_DETAILS[slug];
  }

  const termName = matchedTerm ? matchedTerm.term : slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const definition = matchedTerm
    ? matchedTerm.def
    : `A fundamental Indian payroll, statutory compliance, or workforce attendance parameter governing employee compensation and labor law adherence.`;
  const firstLetter = termName[0].toUpperCase();

  return {
    slug,
    term: termName,
    h1Title: `${termName}: Meaning, Calculation & Indian Law`,
    letter: firstLetter,
    readTime: "4 min read",
    updatedDate: "Updated 18 October 2026",
    category: "Payroll & Compliance",
    metaTitle: `${termName}: Meaning, Calculation & Indian Law | PayroleHR`,
    metaDescription: `Comprehensive guide to ${termName} in Indian payroll: definitions, statutory calculation rules, comparison with related payroll concepts, and automated software workflows.`,
    definition,
    audioDuration: "4:45",

    overviewHeading: `What Is ${termName} in Indian HR & Payroll?`,
    overviewParagraphs: [
      `${termName} is a core operational parameter within Indian human resources, payroll computation, and statutory compliance management.`,
      `Proper administration of ${termName} ensures that organizations avoid financial penalties during EPFO, ESIC, or state labor commissioner audits while maintaining total transparency with their workforce.`
    ],

    calculationHeading: `How ${termName} Is Calculated & Applied`,
    calculationIntro: `In standard Indian payroll practice, ${termName} is computed following statutory schedules and organizational policy guidelines:`,
    formula: `${termName} Computation = Standard Statutory Rate (%) × Relevant Base Earnings / Days`,
    formulaRules: [
      {
        label: "Base Salary Verification",
        description: `Check qualifying components (Basic Salary, Dearness Allowance) as mandated by labor regulations`
      },
      {
        label: "Attendance Reconciliation",
        description: `Cross-verify physical or biometric punch records against sanctioned leaves and weekly off entitlements`
      },
      {
        label: "Statutory Ceiling Check",
        description: `Apply relevant wage ceilings (e.g. ₹15,000 for EPF or ₹21,000 for ESIC) where applicable`
      },
      {
        label: "Disbursement Schedule",
        description: `Ensure payout or remittance complies with Payment of Wages Act timelines (before the 7th or 10th of the month)`
      }
    ],
    formulaPostNote: `Automating this calculation eliminates rounding errors and manual spreadsheet reconciliations.`,

    comparisonHeading: `${termName} vs Standard Statutory Practices`,
    comparisonTable: {
      headers: ["Aspect", `Managed with ${termName}`, "Manual Spreadsheet Approach"],
      rows: [
        ["Statutory compliance", "100% compliant with Indian labor codes and EPFO/ESIC schedules", "Prone to outdated percentage rates and missed ceiling caps"],
        ["Employee transparency", "Instant visibility on mobile self-service app with detailed breakdown", "Delayed payslip queries requiring constant HR follow-up"],
        ["Audit readiness", "Tamper-proof digital timestamp records ready for labor inspectors", "Scattered physical registers and manual muster roll discrepancies"],
        ["Processing speed", "1-click automated calculation across entire workforce headcount", "Hours spent copying formulas across multiple disconnected sheets"]
      ]
    },

    exampleHeading: `Practical Scenario: Managing ${termName} for a 50-Member Workforce`,
    exampleIntro: `Consider an enterprise with 50 employees operating across factory shifts and corporate departments in India:`,
    exampleTable: {
      headers: ["Stage", "Parameter / Value", "Operational Outcome"],
      rows: [
        ["Input Data", "Biometric face punches & wage structure", "Verified in PayroleHR Master Database"],
        ["Computation", "Statutory formula and tax regime rules", "Calculated automatically with zero rounding error"],
        ["Verification", "EPF (12%), ESIC (0.75%), PT verified", "Statutory challan records generated"],
        ["Disbursement", "Direct export to HDFC/ICICI/SBI bank file", "Salaries credited and WhatsApp payslips delivered"]
      ]
    },
    exampleNote: "Note: Real-time synchronization eliminates end-of-month payroll fire drills.",
    exampleExplanation: `By applying standardized rules for ${termName}, the organization saves up to 15 hours each month while ensuring 100% adherence to Indian statutory regulations.`,

    lawHeading: `What Indian Law & Compliance Regulations Say About ${termName}`,
    lawIntro: `Under the Code on Wages, 2019, and corresponding state Shops & Commercial Establishments Acts:`,
    lawRules: [
      `1. Employers must maintain authentic, accurate digital registers of wages, attendance, and statutory deductions pertaining to ${termName}.`,
      `2. Wage deductions or statutory contributions related to ${termName} must follow certified rules and cannot exceed statutory limits.`
    ],
    lawDetails: [
      `All records must be preserved for inspection by authorized labor inspectors under the relevant Central and State rules.`,
      `Non-compliance or arbitrary withholding of wages can attract statutory penalties and compounding interest under Indian labor codes.`
    ],

    causeHeading: `Best Practices for Administering ${termName}`,
    causeIntro: `Experienced HR and payroll managers follow these operational guidelines:`,
    causePoints: [
      `Establish transparent written policies in the employee handbook and appointment letters`,
      `Automate time and attendance records with touchless biometric devices or geofenced mobile check-ins`,
      `Run periodic internal payroll audits before filing monthly EPFO and ESIC ECR challans`,
      `Provide staff with self-service mobile access to check calculations and payslips anytime`
    ],
    causeConclusion: `Adopting transparent digital workflows builds employee trust while protecting the business from statutory audit penalties.`,

    reportHeading: `Automate ${termName} in One Unified Platform with PayroleHR`,
    reportIntro: `Stop managing compliance on complicated Excel sheets. PayroleHR connects attendance, statutory calculations, and bank payouts in one seamless cloud system.`,
    reportFeatures: [
      `Automates every statutory rule for ${termName} in PayroleHR's integrated payroll engine.`,
      `Eliminates manual data entry errors, spreadsheet crashes, and month-end payroll stress.`,
      `Staff view detailed breakdowns directly from their self-service mobile app.`,
      `Generates 1-click bank transfer files and statutory portal compliance exports.`
    ],
    reportCtaText: `Explore how PayroleHR simplifies ${termName} for modern businesses.`,
    featureSlug: "payroll-processing",

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

    tocSections: [
      { id: "section-1", number: 1, title: `What Is ${termName}?` },
      { id: "section-2", number: 2, title: `How It Is Calculated` },
      { id: "section-3", number: 3, title: `Comparison & Standard Practices` },
      { id: "section-4", number: 4, title: `Practical Worked Example` },
      { id: "section-5", number: 5, title: `What Indian Law Says` },
      { id: "section-6", number: 6, title: `Operational Best Practices` },
      { id: "section-7", number: 7, title: `Automate with PayroleHR` },
      { id: "section-8", number: 8, title: `Frequently Asked Questions` }
    ],
    relatedTermSlugs: ["basic-salary", "ctc", "gross-salary", "net-salary", "payroll"]
  };
}
