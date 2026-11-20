export interface ProductGroup {
  title: string;
  items: string[];
}

export interface GroupMeta {
  headline: string;
  points: string[];
  lead: string;
  highlight: string[];
  mock: [string, string][];
}

export const productGroups: ProductGroup[] = [
  {
    title: "Core HR",
    items: [
      "employee-management",
      "employee-database",
      "employee-self-service",
      "onboarding-offboarding",
      "organization-management",
      "departments-designations",
    ],
  },
  {
    title: "Time & Attendance",
    items: [
      "attendance-management",
      "face-attendance",
      "attendance-reports",
      "shift-management",
      "workforce-scheduling",
      "roster-management",
      "geo-fencing-attendance",
    ],
  },
  {
    title: "Leave & Payroll",
    items: [
      "leave-management",
      "advanced-leave-management",
      "salary-structure-management",
      "payroll-processing",
      "payslip-management",
      "arrears-management",
      "gratuity-management",
      "bank-salary-export",
    ],
  },
  {
    title: "Performance & Workforce",
    items: [
      "performance-management",
      "goals-kpis",
      "performance-reviews",
      "continuous-feedback",
      "asset-management",
      "helpdesk",
      "document-management",
    ],
  },
  {
    title: "Insights & Rules",
    items: [
      "reports-analytics",
      "payroll-reports",
      "employee-reports",
      "organization-policies",
      "configurable-rules",
    ],
  },
];

export const groupMeta: Record<string, GroupMeta> = {
  "Core HR": {
    headline: "Every staff record, organised and up to date",
    points: [
      "Profiles with your own custom fields",
      "Documents stored with each employee",
      "Staff update their own details in the portal",
      "Onboarding and exit steps tracked",
    ],
    lead: "employee-management",
    highlight: ["employee-management", "employee-self-service", "onboarding-offboarding"],
    mock: [
      ["Active staff", "128"],
      ["Departments", "9"],
      ["Pending joiners", "3"],
      ["Documents to verify", "5"],
    ],
  },
  "Time & Attendance": {
    headline: "Attendance that marks itself",
    points: [
      "Face check-in at a kiosk or on the phone",
      "Shift and grace rules applied to every punch",
      "Late, half-day and early-leave marked automatically",
      "Daily and monthly attendance reports",
    ],
    lead: "face-attendance",
    highlight: ["face-attendance", "attendance-management", "shift-management"],
    mock: [
      ["Present today", "112"],
      ["Late", "6"],
      ["On leave", "7"],
      ["Absent", "3"],
    ],
  },
  "Leave & Payroll": {
    headline: "From leave balance to bank file",
    points: [
      "Your own leave types and rules",
      "Salary columns and formulas you define",
      "Approvals before payroll is locked",
      "Payslips and bank salary file in one click",
    ],
    lead: "payroll-processing",
    highlight: ["payroll-processing", "leave-management", "bank-salary-export"],
    mock: [
      ["Payroll month", "Oct 2026"],
      ["Staff paid", "126"],
      ["Net payable", "₹18,42,300"],
      ["Status", "Locked"],
    ],
  },
  "Performance & Workforce": {
    headline: "Goals, reviews and everyday requests",
    points: [
      "Goals and KPIs per employee",
      "Review cycles and feedback",
      "Assets handed out and returned",
      "Helpdesk for staff questions",
    ],
    lead: "performance-management",
    highlight: ["performance-management", "goals-kpis", "helpdesk"],
    mock: [
      ["Review cycle", "Q3 2026"],
      ["Goals set", "94%"],
      ["Open tickets", "2"],
      ["Assets tracked", "48"],
    ],
  },
  "Insights & Rules": {
    headline: "Answers in Excel and policies you control",
    points: [
      "Payroll register, PF, ESI and attendance reports",
      "Organisation policies for grace, rounding and working days",
      "Custom roles and permissions for office users",
      "Export every table to Excel in one click",
    ],
    lead: "reports-analytics",
    highlight: ["reports-analytics", "organization-policies", "configurable-rules"],
    mock: [
      ["Grace time", "15 min"],
      ["Working days", "Fixed 26"],
      ["Roles defined", "4"],
      ["Export ready", "Yes"],
    ],
  },
};

export const resourceLinks = [
  {
    to: "/resources/guides",
    name: "HR & payroll guides",
    short: "Step-by-step explanations.",
  },
  {
    to: "/resources/templates",
    name: "HR templates",
    short: "Free downloadable sheets.",
  },
  {
    to: "/resources/glossary",
    name: "HR glossary",
    short: "Payroll terms in plain words.",
  },
  {
    to: "/resources/blog",
    name: "Articles & blog",
    short: "Practical tips for HR teams.",
  },
  {
    to: "/faq",
    name: "FAQ",
    short: "Common questions answered.",
  },
];

export const companyLinks = [
  {
    to: "/about",
    name: "About us",
    short: "Who we are and what we build.",
  },
  {
    to: "/contact",
    name: "Contact us",
    short: "Phone, WhatsApp and email.",
  },
  {
    to: "/book-a-demo",
    name: "Book a demo",
    short: "See PayroleHR with your data.",
  },
];

export const contactDetails = {
  phone: "+91 70079 01057",
  tel: "tel:+917007901057",
  whatsapp: "https://wa.me/917007901057",
  email: "support@payrolehr.com",
};
