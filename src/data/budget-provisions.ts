export type BudgetProvision = {
  id: string;
  title: string;
  sector: string;
  description: string;
  impact: 'positive' | 'neutral' | 'negative';
  applicableTo: {
    incomeRange?: [number, number | null]; // [min, max] - null for no upper limit
    categories?: string[];
    occupation?: string[];
    ageGroup?: [number, number | null]; // [min, max] - null for no upper limit
    gender?: string[];
  };
};

// Sample budget provisions (adding 10 for brevity, but there would be 150)
export const budgetProvisions: BudgetProvision[] = [
  {
    id: "income-tax-slab-revision",
    title: "Income Tax Slab Revision",
    sector: "Personal Finance",
    description: "New tax regime with revised slabs and reduced rates for individual taxpayers. Zero tax up to ₹3 lakh, 5% for ₹3-6 lakh, 10% for ₹6-9 lakh, 15% for ₹9-12 lakh, 20% for ₹12-15 lakh, and 30% for above ₹15 lakh.",
    impact: "positive",
    applicableTo: {
      incomeRange: [300000, null],
      occupation: ["Salaried Employee", "Self-Employed", "Business Owner", "Government Employee", "Private Sector Employee"],
    },
  },
  {
    id: "standard-deduction-increase",
    title: "Increase in Standard Deduction",
    sector: "Personal Finance",
    description: "Standard deduction for salaried employees increased from ₹50,000 to ₹75,000 under the new tax regime.",
    impact: "positive",
    applicableTo: {
      occupation: ["Salaried Employee", "Government Employee", "Private Sector Employee"],
    },
  },
  {
    id: "agriculture-credit-target",
    title: "Agricultural Credit Target Enhancement",
    sector: "Agriculture",
    description: "Agricultural credit target increased to ₹20 lakh crore with focus on animal husbandry, dairy, and fisheries.",
    impact: "positive",
    applicableTo: {
      occupation: ["Farmer"],
    },
  },
  {
    id: "pm-vishwakarma-kaushal-samman",
    title: "PM Vishwakarma Kaushal Samman (PM VIKAS)",
    sector: "Skill Development",
    description: "Financial support and training for traditional artisans and craftspeople. Credit support, modern tools, and market linkages provided.",
    impact: "positive",
    applicableTo: {
      occupation: ["Self-Employed"],
      incomeRange: [0, 500000],
    },
  },
  {
    id: "mahila-samman-savings-certificate",
    title: "Mahila Samman Savings Certificate",
    sector: "Women Empowerment",
    description: "Fixed deposit scheme for women with 7.5% interest rate. Allows partial withdrawal and has 2-year deposit tenure.",
    impact: "positive",
    applicableTo: {
      gender: ["Female"],
    },
  },
  {
    id: "senior-citizen-savings-scheme-limit",
    title: "Senior Citizen Savings Scheme Deposit Limit",
    sector: "Senior Citizens Welfare",
    description: "Deposit limit for Senior Citizen Savings Scheme increased from ₹15 lakh to ₹30 lakh.",
    impact: "positive",
    applicableTo: {
      ageGroup: [60, null],
    },
  },
  {
    id: "msme-credit-guarantee-scheme",
    title: "MSME Credit Guarantee Scheme Revamp",
    sector: "MSME",
    description: "Revamped credit guarantee scheme for MSMEs with additional credit of ₹2 lakh crore and reduced cost of credit by 1%.",
    impact: "positive",
    applicableTo: {
      occupation: ["Business Owner", "Self-Employed"],
    },
  },
  {
    id: "income-tax-rebate-limit",
    title: "Income Tax Rebate Limit Increase",
    sector: "Personal Finance",
    description: "Maximum rebate limit increased from ₹5 lakh to ₹7 lakh in the new tax regime.",
    impact: "positive",
    applicableTo: {
      incomeRange: [0, 700000],
      occupation: ["Salaried Employee", "Self-Employed", "Business Owner", "Government Employee", "Private Sector Employee"],
    },
  },
  {
    id: "customs-duty-mobile-phones",
    title: "Customs Duty on Mobile Phones",
    sector: "Consumer Electronics",
    description: "Customs duty on certain parts of mobile phones reduced to promote domestic manufacturing.",
    impact: "neutral",
    applicableTo: {
      incomeRange: [0, null],
    },
  },
  {
    id: "customs-duty-gold-silver",
    title: "Customs Duty on Gold and Silver",
    sector: "Precious Metals",
    description: "Customs duty on gold, silver, and platinum increased, making these metals more expensive.",
    impact: "negative",
    applicableTo: {
      incomeRange: [0, null],
    },
  },
  {
    id: "cigarettes-tobacco-taxes",
    title: "Cigarettes and Tobacco Products Tax",
    sector: "Health",
    description: "National Calamity Contingent Duty (NCCD) on cigarettes increased by 16%, making cigarettes more expensive.",
    impact: "negative",
    applicableTo: {
      incomeRange: [0, null],
    },
  },
  {
    id: "green-growth-initiatives",
    title: "Green Growth Initiatives",
    sector: "Environment",
    description: "Budget allocation for green initiatives, including green hydrogen mission, energy transition, and battery storage projects.",
    impact: "positive",
    applicableTo: {
      incomeRange: [0, null],
    },
  },
  {
    id: "infra-development-13",
    title: "Infrastructure Development Fund 13",
    sector: "Infrastructure",
    description: "Increased allocation for national highways and rural roads.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Self-Employed"] }
  },
  {
    id: "agri-subsidy-14",
    title: "Agriculture Subsidy Scheme 14",
    sector: "Agriculture",
    description: "Direct farmer transfer of crop subsidies under new guidelines.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, 300000] }
  },
  {
    id: "fuel-tax-increase-15",
    title: "Fuel Excise Tax Increase 15",
    sector: "Energy",
    description: "Excise duty on petrol and diesel increased by ₹2/litre.",
    impact: "negative",
    applicableTo: { incomeRange: [0, null] }
  }
];

// Add 98+ more provisions in the same style.
for(let i=16; i<=110; i++) {
  budgetProvisions.push({
    id: `demo-budget-provision-${i}`,
    title: `Demo Budget Provision ${i}`,
    sector: i % 2 === 0 ? "Healthcare" : "Education",
    description: `Description for Demo Budget Provision ${i}.`,
    impact: i % 3 === 0 ? "positive" : (i % 3 === 1 ? "neutral" : "negative"),
    applicableTo: {
      occupation: i % 2 === 0 ? ["Salaried Employee", "Homemaker"] : ["Retired", "Student"],
      incomeRange: [0, i * 15000],
      gender: i % 5 === 0 ? ["Female"] : undefined,
      ageGroup: i % 7 === 0 ? [25, 60] : undefined,
      categories: ["General"]
    }
  });
}
