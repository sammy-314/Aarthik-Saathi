
export type GreenInvestment = {
  id: string;
  name: string;
  type: 'Mutual Fund' | 'Bond' | 'Equity' | 'Infrastructure' | 'Project';
  description: string;
  expectedReturns: string;
  minimumInvestment: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  sustainability: {
    environmentalImpact: string;
    sdgGoals: string[];
  };
  investmentPeriod: string;
  sectorFocus: string[];
};

export const greenInvestments: GreenInvestment[] = [
  {
    id: "sbi-esg-fund",
    name: "SBI Magnum Equity ESG Fund",
    type: "Mutual Fund",
    description: "An open-ended equity scheme investing in companies following Environmental, Social, and Governance (ESG) criteria. It focuses on environmentally conscious companies with sustainable business practices.",
    expectedReturns: "12-15% (CAGR)",
    minimumInvestment: 5000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Invests in companies with lower carbon footprints and sustainable practices",
      sdgGoals: ["Climate Action", "Responsible Consumption", "Clean Energy"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Renewable Energy", "Green Technology", "Sustainable Manufacturing"]
  },
  {
    id: "axis-esg-fund",
    name: "Axis ESG Equity Fund",
    type: "Mutual Fund",
    description: "An open-ended fund that invests in companies demonstrating sustainable business practices, good governance, and social responsibility. The fund emphasizes companies with positive environmental impacts.",
    expectedReturns: "11-14% (CAGR)",
    minimumInvestment: 5000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Prioritizes companies reducing environmental footprint",
      sdgGoals: ["Sustainable Cities", "Responsible Consumption", "Industry Innovation"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Clean Energy", "Green Infrastructure", "Sustainable Consumer Goods"]
  },
  {
    id: "green-masala-bonds",
    name: "Green Masala Bonds by IREDA",
    type: "Bond",
    description: "Bonds issued by Indian Renewable Energy Development Agency (IREDA) to finance renewable energy projects across India. These bonds provide stable returns while supporting green energy initiatives.",
    expectedReturns: "7-8.5% (Annual)",
    minimumInvestment: 10000,
    riskLevel: "Low",
    sustainability: {
      environmentalImpact: "Directly finances solar, wind, and other renewable energy projects",
      sdgGoals: ["Affordable and Clean Energy", "Climate Action"]
    },
    investmentPeriod: "3-5 years",
    sectorFocus: ["Solar Energy", "Wind Energy", "Hydro Power", "Biomass"]
  },
  {
    id: "ntpc-green-bonds",
    name: "NTPC Green Bonds",
    type: "Bond",
    description: "Bonds issued by National Thermal Power Corporation (NTPC) to fund renewable energy projects. NTPC is transitioning from thermal to renewable energy, and these bonds support that transition.",
    expectedReturns: "7.5-8.25% (Annual)",
    minimumInvestment: 10000,
    riskLevel: "Low",
    sustainability: {
      environmentalImpact: "Supports transition from fossil fuels to renewable energy",
      sdgGoals: ["Clean Energy", "Climate Action", "Industry Innovation"]
    },
    investmentPeriod: "5-7 years",
    sectorFocus: ["Solar Energy", "Wind Energy"]
  },
  {
    id: "tata-power-equity",
    name: "Tata Power Company Limited",
    type: "Equity",
    description: "Tata Power is one of India's largest integrated power companies, with a significant focus on renewable energy. They aim to have 60-70% of their capacity from renewables by 2030.",
    expectedReturns: "Market-linked (Potential for 15-18%)",
    minimumInvestment: 5000,
    riskLevel: "High",
    sustainability: {
      environmentalImpact: "Leading transition to clean energy in India",
      sdgGoals: ["Affordable and Clean Energy", "Sustainable Cities"]
    },
    investmentPeriod: "7+ years",
    sectorFocus: ["Renewable Energy", "Power Distribution", "Solar Manufacturing"]
  },
  {
    id: "scatec-insolation-india",
    name: "Scatec Solar - Insolation Energy Private Limited",
    type: "Project",
    description: "Direct investment opportunity in utility-scale solar projects in Rajasthan developed by Scatec Solar, a global renewable energy producer. The project aims to provide clean energy to thousands of homes.",
    expectedReturns: "10-12% (IRR)",
    minimumInvestment: 100000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Displaces fossil fuel generation with clean solar energy",
      sdgGoals: ["Climate Action", "Affordable and Clean Energy"]
    },
    investmentPeriod: "10-15 years",
    sectorFocus: ["Solar Energy"]
  },
  {
    id: "suzlon-energy-equity",
    name: "Suzlon Energy Limited",
    type: "Equity",
    description: "Suzlon is one of India's largest renewable energy solutions providers, specializing in wind energy equipment. The company is at the forefront of India's renewable energy transition.",
    expectedReturns: "Market-linked (Potential for 12-20%)",
    minimumInvestment: 5000,
    riskLevel: "High",
    sustainability: {
      environmentalImpact: "Enables wind energy deployment across India",
      sdgGoals: ["Clean Energy", "Climate Action", "Innovation"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Wind Energy", "Renewable Technology"]
  },
  {
    id: "greenko-energy-bonds",
    name: "Greenko Energy Holdings Green Bonds",
    type: "Bond",
    description: "Bonds issued by Greenko, one of India's leading renewable energy companies. These bonds fund hydro, solar, and wind energy projects with integrated storage solutions.",
    expectedReturns: "8-9% (Annual)",
    minimumInvestment: 20000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Develops renewable energy with storage to replace baseload coal power",
      sdgGoals: ["Clean Energy", "Climate Action", "Innovation"]
    },
    investmentPeriod: "5-7 years",
    sectorFocus: ["Solar Energy", "Wind Energy", "Hydro Power", "Energy Storage"]
  },
  {
    id: "mirae-esg-sector-fund",
    name: "Mirae Asset ESG Sector Leaders Fund of Fund",
    type: "Mutual Fund",
    description: "A fund of funds that invests in global ESG-focused ETFs and mutual funds, providing exposure to international ESG leaders while focusing on sustainability.",
    expectedReturns: "10-13% (CAGR)",
    minimumInvestment: 5000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Invests in global companies with highest ESG ratings",
      sdgGoals: ["Responsible Consumption", "Climate Action", "Sustainable Communities"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Clean Energy", "Sustainable Technology", "Green Manufacturing"]
  },
  {
    id: "hero-future-energies",
    name: "Hero Future Energies Private Limited",
    type: "Project",
    description: "Direct investment opportunity in Hero Group's renewable energy company focusing on solar and wind power projects across India, with ambitious expansion plans.",
    expectedReturns: "11-14% (IRR)",
    minimumInvestment: 100000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Accelerates India's transition to renewable energy",
      sdgGoals: ["Affordable and Clean Energy", "Climate Action"]
    },
    investmentPeriod: "7-10 years",
    sectorFocus: ["Solar Energy", "Wind Energy"]
  },
  {
    id: "green-growth-equity-fund",
    name: "Green Growth Equity Fund",
    type: "Infrastructure",
    description: "A private equity fund focused on green infrastructure investments in India, managed by EverSource Capital. The fund targets sectors like renewable energy, waste management, and clean transportation.",
    expectedReturns: "14-18% (IRR)",
    minimumInvestment: 500000,
    riskLevel: "High",
    sustainability: {
      environmentalImpact: "Builds critical green infrastructure in high-impact sectors",
      sdgGoals: ["Sustainable Cities", "Climate Action", "Industry Innovation"]
    },
    investmentPeriod: "7-10 years",
    sectorFocus: ["Renewable Energy", "Waste Management", "Clean Transportation", "Water"]
  },
  {
    id: "quant-esg-equity-fund",
    name: "Quant ESG Equity Fund",
    type: "Mutual Fund",
    description: "An actively managed fund using quantitative models to identify companies with strong ESG profiles and growth potential. The fund balances financial returns with positive environmental impact.",
    expectedReturns: "12-16% (CAGR)",
    minimumInvestment: 5000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Prioritizes companies with sustainable business models",
      sdgGoals: ["Responsible Consumption", "Climate Action", "Industry Innovation"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Renewable Energy", "Sustainable Manufacturing", "Green Technology"]
  },
  {
    id: "azure-power-global",
    name: "Azure Power Global Limited",
    type: "Equity",
    description: "Azure Power is a leading independent solar power producer with a portfolio of projects across India. The company develops, constructs, owns, and operates utility-scale solar projects.",
    expectedReturns: "Market-linked (Potential for 14-18%)",
    minimumInvestment: 5000,
    riskLevel: "High",
    sustainability: {
      environmentalImpact: "Produces clean solar energy at utility scale",
      sdgGoals: ["Clean Energy", "Climate Action"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Solar Energy"]
  },
  {
    id: "green-highways-infra-bond",
    name: "Green Highways Infrastructure Bonds",
    type: "Bond",
    description: "Bonds issued for financing eco-friendly highway projects with features like rainwater harvesting, solar lighting, and extensive plantation. These projects aim to reduce the carbon footprint of India's expanding highway network.",
    expectedReturns: "7-8% (Annual)",
    minimumInvestment: 10000,
    riskLevel: "Low",
    sustainability: {
      environmentalImpact: "Creates environmentally sustainable transportation infrastructure",
      sdgGoals: ["Sustainable Infrastructure", "Climate Action"]
    },
    investmentPeriod: "5-7 years",
    sectorFocus: ["Green Infrastructure", "Transportation"]
  },
  {
    id: "avaada-energy-project",
    name: "Avaada Energy Solar Project",
    type: "Project",
    description: "Direct investment opportunity in Avaada Energy's solar projects across multiple Indian states. Avaada is committed to developing 11 GW of renewable energy projects by 2025.",
    expectedReturns: "10-13% (IRR)",
    minimumInvestment: 100000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Large-scale displacement of coal-based electricity",
      sdgGoals: ["Affordable and Clean Energy", "Climate Action"]
    },
    investmentPeriod: "10-15 years",
    sectorFocus: ["Solar Energy"]
  },
  {
    id: "hdfc-clean-energy-fund",
    name: "HDFC Clean Energy Fund",
    type: "Mutual Fund",
    description: "A thematic fund focusing specifically on companies in the clean energy value chain, including renewable energy producers, equipment manufacturers, and supporting technologies.",
    expectedReturns: "12-15% (CAGR)",
    minimumInvestment: 5000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Channels capital to clean energy transition",
      sdgGoals: ["Clean Energy", "Climate Action", "Industry Innovation"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Solar Energy", "Wind Energy", "Energy Storage", "Smart Grid"]
  },
  {
    id: "sterling-green-bond",
    name: "Sterling and Wilson Green Energy Bonds",
    type: "Bond",
    description: "Bonds issued by Sterling and Wilson Renewable Energy, one of the world's largest solar EPC solutions providers. The bonds finance global solar installation projects.",
    expectedReturns: "8-9% (Annual)",
    minimumInvestment: 10000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Enables solar energy deployment globally",
      sdgGoals: ["Clean Energy", "Climate Action"]
    },
    investmentPeriod: "3-5 years",
    sectorFocus: ["Solar Energy"]
  },
  {
    id: "renew-power-ventures",
    name: "ReNew Power Ventures Private Limited",
    type: "Project",
    description: "Investment opportunity in ReNew Power's renewable energy projects. ReNew is India's largest renewable energy company with over 10 GW of operational capacity.",
    expectedReturns: "12-15% (IRR)",
    minimumInvestment: 200000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Large-scale renewable energy generation across India",
      sdgGoals: ["Affordable and Clean Energy", "Climate Action", "Industry Innovation"]
    },
    investmentPeriod: "7-10 years",
    sectorFocus: ["Solar Energy", "Wind Energy"]
  },
  {
    id: "waste-mgmt-fund",
    name: "Waste Management & Recycling Fund",
    type: "Infrastructure",
    description: "A specialized fund investing in waste management, recycling, and circular economy projects across urban India. The fund aims to address India's growing waste challenges while generating financial returns.",
    expectedReturns: "13-16% (IRR)",
    minimumInvestment: 100000,
    riskLevel: "High",
    sustainability: {
      environmentalImpact: "Reduces landfill waste and promotes circular economy",
      sdgGoals: ["Sustainable Cities", "Responsible Consumption", "Climate Action"]
    },
    investmentPeriod: "5-7 years",
    sectorFocus: ["Waste Management", "Recycling", "Circular Economy"]
  },
  {
    id: "electric-mobility-bond",
    name: "Electric Mobility Green Bonds",
    type: "Bond",
    description: "Bonds issued to finance electric vehicle charging infrastructure and related technologies across major Indian cities, supporting the transition to clean transportation.",
    expectedReturns: "7.5-8.5% (Annual)",
    minimumInvestment: 10000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Enables transition from fossil fuel vehicles to electric mobility",
      sdgGoals: ["Sustainable Cities", "Climate Action", "Clean Energy"]
    },
    investmentPeriod: "5-7 years",
    sectorFocus: ["Electric Vehicles", "Clean Transportation"]
  },
  // 5 more would be added to reach 25
];
