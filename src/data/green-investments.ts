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
  url?: string;
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
    sectorFocus: ["Renewable Energy", "Green Technology", "Sustainable Manufacturing"],
    url: "https://www.sbimf.com"
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
    sectorFocus: ["Clean Energy", "Green Infrastructure", "Sustainable Consumer Goods"],
    url: "https://www.axismf.com"
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
    sectorFocus: ["Solar Energy", "Wind Energy", "Hydro Power", "Biomass"],
    url: "https://www.ireda.in"
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
    sectorFocus: ["Solar Energy", "Wind Energy"],
    url: "https://www.ntpc.co.in"
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
    sectorFocus: ["Renewable Energy", "Power Distribution", "Solar Manufacturing"],
    url: "https://www.tatapower.com"
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
    sectorFocus: ["Solar Energy"],
    url: "https://scatec.com/projects/india"
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
    sectorFocus: ["Wind Energy", "Renewable Technology"],
    url: "https://www.suzlon.com"
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
    sectorFocus: ["Solar Energy", "Wind Energy", "Hydro Power", "Energy Storage"],
    url: "https://www.greenkogroup.com"
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
    sectorFocus: ["Clean Energy", "Sustainable Technology", "Green Manufacturing"],
    url: "https://www.miraeassetmf.co.in"
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
    sectorFocus: ["Solar Energy", "Wind Energy"],
    url: "https://www.herofutureenergies.com/investors"
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
    sectorFocus: ["Renewable Energy", "Waste Management", "Clean Transportation", "Water"],
    url: "https://www.eversourcecapital.com/ggef"
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
    sectorFocus: ["Renewable Energy", "Sustainable Manufacturing", "Green Technology"],
    url: "https://www.quantmutual.com"
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
    sectorFocus: ["Solar Energy"],
    url: "https://www.azurepower.com"
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
    sectorFocus: ["Green Infrastructure", "Transportation"],
    url: "https://www.nhai.gov.in/green-highways"
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
    sectorFocus: ["Solar Energy"],
    url: "https://www.avaada.com/investors"
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
      environmentalImpact: "Supports entire clean energy ecosystem",
      sdgGoals: ["Clean Energy", "Industry Innovation", "Climate Action"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Renewable Energy", "Clean Technology", "Energy Storage"],
    url: "https://www.hdfcfund.com"
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
    sectorFocus: ["Solar Energy"],
    url: "https://www.sterlingandwilson.com"
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
    sectorFocus: ["Solar Energy", "Wind Energy"],
    url: "https://www.renewpower.in"
  },
  {
    id: "ev-infrastructure-fund",
    name: "Electric Vehicle Infrastructure Growth Fund",
    type: "Infrastructure",
    description: "A specialized fund investing in electric vehicle charging infrastructure and related technologies across major Indian cities. The fund aims to support India's EV adoption goals.",
    expectedReturns: "13-16% (IRR)",
    minimumInvestment: 100000,
    riskLevel: "High",
    sustainability: {
      environmentalImpact: "Enables transition to electric mobility and reduces transport emissions",
      sdgGoals: ["Sustainable Cities", "Climate Action", "Innovation"]
    },
    investmentPeriod: "7-10 years",
    sectorFocus: ["Electric Vehicles", "Charging Infrastructure", "Green Transportation"],
    url: "https://www.fastcharge.in"
  },
  {
    id: "green-building-reit",
    name: "Sustainable Real Estate Investment Trust",
    type: "Infrastructure",
    description: "A REIT focused on green-certified commercial buildings and sustainable housing projects. Properties feature energy efficiency, water conservation, and renewable energy integration.",
    expectedReturns: "8-10% (Annual)",
    minimumInvestment: 50000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Promotes sustainable construction and reduces building emissions",
      sdgGoals: ["Sustainable Cities", "Climate Action", "Responsible Consumption"]
    },
    investmentPeriod: "3-5 years",
    sectorFocus: ["Green Buildings", "Sustainable Real Estate", "Energy Efficiency"],
    url: "https://www.embassyofficeparks.com"
  },
  {
    id: "water-conservation-project",
    name: "Smart Water Management Project",
    type: "Project",
    description: "Investment in advanced water conservation and management projects using IoT and AI technologies. Includes water recycling, smart metering, and leak detection systems.",
    expectedReturns: "9-11% (IRR)",
    minimumInvestment: 75000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Conserves water resources and reduces water waste",
      sdgGoals: ["Clean Water", "Sustainable Cities", "Climate Action"]
    },
    investmentPeriod: "5-7 years",
    sectorFocus: ["Water Management", "Smart Infrastructure", "Conservation Technology"],
    url: "https://www.ministryofwater.in"
  },
  {
    id: "agritech-sustainability-fund",
    name: "Agricultural Technology and Sustainability Fund",
    type: "Mutual Fund",
    description: "A fund investing in companies developing sustainable agricultural technologies, including precision farming, drought-resistant crops, and organic farming solutions.",
    expectedReturns: "11-14% (CAGR)",
    minimumInvestment: 5000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Promotes sustainable farming practices and food security",
      sdgGoals: ["Zero Hunger", "Climate Action", "Responsible Production"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Agricultural Technology", "Sustainable Farming", "Food Security"],
    url: "https://www.agritechfund.in"
  },
  {
    id: "green-hydrogen-equity",
    name: "Green Hydrogen Development Company",
    type: "Equity",
    description: "Investment in a company focused on developing green hydrogen production facilities and infrastructure. The company aims to make hydrogen a viable clean energy alternative.",
    expectedReturns: "Market-linked (Potential for 15-20%)",
    minimumInvestment: 10000,
    riskLevel: "High",
    sustainability: {
      environmentalImpact: "Develops zero-emission fuel alternatives",
      sdgGoals: ["Clean Energy", "Industry Innovation", "Climate Action"]
    },
    investmentPeriod: "7+ years",
    sectorFocus: ["Green Hydrogen", "Clean Energy", "Industrial Decarbonization"],
    url: "https://www.greenhydrogenindia.com"
  },
  {
    id: "circular-economy-fund",
    name: "Circular Economy Innovation Fund",
    type: "Mutual Fund",
    description: "A specialized fund investing in companies implementing circular economy principles, including recycling technologies, remanufacturing, and sustainable packaging solutions.",
    expectedReturns: "10-13% (CAGR)",
    minimumInvestment: 5000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Reduces waste and promotes resource efficiency",
      sdgGoals: ["Responsible Consumption", "Sustainable Production", "Climate Action"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Circular Economy", "Recycling Technology", "Sustainable Manufacturing"],
    url: "https://www.circulareconomyfund.in"
  },
  {
    id: "adani-green-energy",
    name: "Adani Green Energy Limited",
    type: "Equity",
    description: "One of India's largest renewable energy companies, focusing on solar and wind power generation. The company aims to achieve 45 GW of renewable energy capacity by 2030.",
    expectedReturns: "Market-linked (Potential for 15-20%)",
    minimumInvestment: 5000,
    riskLevel: "High",
    sustainability: {
      environmentalImpact: "Large-scale renewable energy generation and carbon emission reduction",
      sdgGoals: ["Clean Energy", "Climate Action", "Industry Innovation"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Solar Energy", "Wind Energy", "Renewable Power"],
    url: "https://www.adanigreenenergy.com"
  },
  {
    id: "icici-esg-fund",
    name: "ICICI Prudential ESG Fund",
    type: "Mutual Fund",
    description: "An open-ended equity scheme investing in companies with strong ESG practices. The fund uses a proprietary ESG scoring system to select investments.",
    expectedReturns: "11-14% (CAGR)",
    minimumInvestment: 5000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Invests in companies with sustainable business practices and positive environmental impact",
      sdgGoals: ["Responsible Consumption", "Climate Action", "Industry Innovation"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Renewable Energy", "Sustainable Technology", "Green Manufacturing"],
    url: "https://www.icicipruamc.com"
  },
  {
    id: "kotak-esg-fund",
    name: "Kotak ESG Opportunities Fund",
    type: "Mutual Fund",
    description: "An actively managed fund investing in companies with strong ESG practices and sustainable business models. Uses a comprehensive ESG scoring system.",
    expectedReturns: "11-14% (CAGR)",
    minimumInvestment: 5000,
    riskLevel: "Medium",
    sustainability: {
      environmentalImpact: "Invests in companies with positive environmental impact and sustainable practices",
      sdgGoals: ["Responsible Consumption", "Climate Action", "Industry Innovation"]
    },
    investmentPeriod: "5+ years",
    sectorFocus: ["Renewable Energy", "Sustainable Technology", "Green Manufacturing"],
    url: "https://www.kotakmf.com"
  }
];
