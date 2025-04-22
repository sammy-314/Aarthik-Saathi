
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

// 100 unique, realistic budget provisions:
export const budgetProvisions: BudgetProvision[] = [
  {
    id: "income-tax-slab-revision",
    title: "Income Tax Slab Revision",
    sector: "Personal Finance",
    description: "Revised income tax slabs and lowered rates for individual taxpayers under the new regime.",
    impact: "positive",
    applicableTo: { incomeRange: [300000, null], occupation: ["Salaried Employee", "Government Employee", "Private Sector Employee", "Self-Employed", "Business Owner"] }
  },
  {
    id: "standard-deduction-increase",
    title: "Increase in Standard Deduction",
    sector: "Personal Finance",
    description: "Standard deduction for salaried classes increased to provide more tax relief.",
    impact: "positive",
    applicableTo: { occupation: ["Salaried Employee", "Government Employee", "Private Sector Employee"] }
  },
  {
    id: "agri-credit-target",
    title: "Agricultural Credit Target Enhancement",
    sector: "Agriculture",
    description: "Credit target for agriculture increased to ensure more loans for farmers and allied activities.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"] }
  },
  {
    id: "pm-vishwakarma-samman",
    title: "PM Vishwakarma Kaushal Samman",
    sector: "Skill Development",
    description: "Training, credit, and market support for traditional artisans and craftspeople.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed"], incomeRange: [0, 500000] }
  },
  {
    id: "mahila-samman-certificate",
    title: "Mahila Samman Savings Certificate",
    sector: "Women Empowerment",
    description: "A two-year deposit scheme for women with 7.5% fixed interest rate and partial withdrawal allowed.",
    impact: "positive",
    applicableTo: { gender: ["Female"] }
  },
  {
    id: "scss-limit-doubled",
    title: "Senior Citizen Savings Scheme Limit Increased",
    sector: "Senior Citizen Welfare",
    description: "Maximum deposit limit in the Senior Citizens Scheme doubled to ₹30 lakh.",
    impact: "positive",
    applicableTo: { ageGroup: [60, null] }
  },
  {
    id: "msme-guarantee-revamp",
    title: "MSME Credit Guarantee Scheme Revamped",
    sector: "MSME",
    description: "More credit and reduced cost for MSMEs under the revamped guarantee scheme.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Self-Employed"] }
  },
  {
    id: "tax-rebate-enhancement",
    title: "Income Tax Rebate Raised to ₹7 lakh",
    sector: "Personal Finance",
    description: "Taxpayers with income up to ₹7 lakh under the new regime to pay zero tax.",
    impact: "positive",
    applicableTo: { incomeRange: [0, 700000], occupation: ["Salaried Employee", "Business Owner", "Self-Employed"] }
  },
  {
    id: "mobile-parts-duty-cut",
    title: "Customs Duty Reduction on Mobile Components",
    sector: "Consumer Electronics",
    description: "Reduced customs duty on mobile phone components to boost domestic manufacturing.",
    impact: "neutral",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "gold-silver-duty-hike",
    title: "Customs Duty Increased on Gold, Silver, Platinum",
    sector: "Precious Metals",
    description: "Duty hiked to curb imports of precious metals.",
    impact: "negative",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "tobacco-tax-hike",
    title: "Higher Taxes on Cigarettes and Tobacco",
    sector: "Health",
    description: "Excise duty on cigarettes and tobacco products raised to discourage consumption.",
    impact: "negative",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "green-growth-push",
    title: "Green Growth Initiatives Outlay",
    sector: "Environment",
    description: "Higher allocations for green hydrogen, renewable energy, and battery storage.",
    impact: "positive",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "railways-metro-boost",
    title: "Higher Allocation for Railways and Metro Projects",
    sector: "Infrastructure",
    description: "Increased budget for new railway lines and metro expansions.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Salaried Employee"] }
  },
  {
    id: "direct-farmer-benefit",
    title: "Direct Benefit Transfer for Farmers",
    sector: "Agriculture",
    description: "DBT for eligible farmers to ensure timely credit and subsidy.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, 300000] }
  },
  {
    id: "fuel-excise-hike",
    title: "Excise Duty on Fuels Increased",
    sector: "Energy",
    description: "Increased excise duty on petrol and diesel to raise revenue.",
    impact: "negative",
    applicableTo: { incomeRange: [0, null] }
  },
  // ----------- 85 more realistic unique budget provisions below ------------
  {
    id: "urban-affordable-housing",
    title: "Affordable Housing for Urban Poor",
    sector: "Urban Development",
    description: "Focus on affordable housing with interest subsidies for urban poor.",
    impact: "positive",
    applicableTo: { categories: ["EWS", "LIG"], incomeRange: [0, 900000] }
  },
  {
    id: "ayushman-bharat-expansion",
    title: "Ayushman Bharat Health Coverage Expanded",
    sector: "Health",
    description: "Ayushman Bharat scheme coverage expanded to new vulnerable groups.",
    impact: "positive",
    applicableTo: { incomeRange: [0, 800000], categories: ["OBC", "SC", "ST", "EWS"] }
  },
  {
    id: "education-tech-grants",
    title: "Digital Education Tech Grants",
    sector: "Education",
    description: "Grants for ed-tech in schools and public institutions.",
    impact: "positive",
    applicableTo: { categories: ["General", "OBC"], incomeRange: [0, null] }
  },
  {
    id: "public-sector-bank-recap",
    title: "Public Sector Bank Recapitalization",
    sector: "Banking",
    description: "Funds for recapitalization to improve lending capacity of public sector banks.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Salaried Employee"] }
  },
  {
    id: "women-led-startups",
    title: "Women Entrepreneurship Support",
    sector: "Women Empowerment",
    description: "Special credit and training for women-led startups.",
    impact: "positive",
    applicableTo: { gender: ["Female"], occupation: ["Business Owner", "Self-Employed"] }
  },
  {
    id: "defence-budget-rise",
    title: "Defence Budget Increase",
    sector: "Defence",
    description: "Increased outlay for modernization and domestic procurement.",
    impact: "neutral",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "crop-insurance-premium-reduce",
    title: "Reduced Crop Insurance Premiums",
    sector: "Agriculture",
    description: "Lower insurance premiums for small and marginal farmers.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"] }
  },
  {
    id: "digital-payment-incentive",
    title: "Digital Payment Promotion Scheme",
    sector: "Finance",
    description: "Incentives for digital transactions and fintech adoption.",
    impact: "positive",
    applicableTo: { occupation: ["Salaried Employee", "Business Owner"] }
  },
  {
    id: "startup-tax-holiday",
    title: "Extended Tax Holiday for Startups",
    sector: "Entrepreneurship",
    description: "Additional years of income tax holiday for eligible startups.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Self-Employed"], incomeRange: [0, 5000000] }
  },
  {
    id: "social-security-workers",
    title: "Social Security for Unorganized Workers",
    sector: "Social Welfare",
    description: "Social security net expanded for gig and unorganized workers.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed"], categories: ["General", "EWS"] }
  },
  {
    id: "domestic-rail-industry",
    title: "Support for Domestic Rail Industry",
    sector: "Infrastructure",
    description: "Funds for homegrown railway component manufacturing.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "river-linking-projects",
    title: "River Linking National Projects",
    sector: "Environment",
    description: "Outlay for interlinking of rivers to manage water resources.",
    impact: "neutral",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "women-self-defense",
    title: "Women Self-Defense Training Grants",
    sector: "Women Empowerment",
    description: "Funding programs for self-defense classes for women across the country.",
    impact: "positive",
    applicableTo: { gender: ["Female"] }
  },
  {
    id: "startup-investor-tax-benefit",
    title: "Investor Tax Benefit in Startups",
    sector: "Entrepreneurship",
    description: "Investment in startups eligible for long-term capital gain tax exemption.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Self-Employed"] }
  },
  {
    id: "digital-india-expansion",
    title: "Digital India Expansion Budget",
    sector: "Technology",
    description: "Accelerated rollout of broadband in rural areas.",
    impact: "positive",
    applicableTo: { occupation: ["Salaried Employee"], incomeRange: [0, 800000] }
  },
  {
    id: "higher-education-funding",
    title: "Increased Higher Education Funding",
    sector: "Education",
    description: "More central grants to universities and IITs.",
    impact: "positive",
    applicableTo: { ageGroup: [18, 30] }
  },
  {
    id: "green-bonds-introduction",
    title: "Sovereign Green Bonds Issuance",
    sector: "Environment",
    description: "Introduction of green bonds to finance sustainable infrastructure.",
    impact: "positive",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "road-connectivity-north-east",
    title: "North-East Road Connectivity Fund",
    sector: "Infrastructure",
    description: "Higher allocation to bridge gaps in North-East connectivity.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Salaried Employee"] }
  },
  {
    id: "urban-sanitation-drive",
    title: "Urban Sanitation Improvement Grants",
    sector: "Urban Development",
    description: "Expanding coverage of sanitation programs in major cities.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed", "Business Owner"] }
  },
  {
    id: "pension-subsidy-small-traders",
    title: "Pension Subsidy for Small Traders",
    sector: "Social Welfare",
    description: "Monthly pension scheme for small retail traders above 60 years age.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed", "Business Owner"], ageGroup: [60, null] }
  },
  {
    id: "agri-infra-fund",
    title: "Agriculture Infrastructure Development Fund",
    sector: "Agriculture",
    description: "Long-term debt financing facility for post-harvest management infrastructure and community farming assets.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer", "Business Owner"] }
  },
  {
    id: "rural-employment-scheme",
    title: "Rural Employment Generation Programme",
    sector: "Rural Development",
    description: "Promotes self-employment ventures in rural areas through credit-linked subsidy.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed"], incomeRange: [0, 500000] }
  },
  {
    id: "skill-india-mission",
    title: "Skill India Mission Enhancement",
    sector: "Skill Development",
    description: "Upskilling and vocational training programs to enhance employability.",
    impact: "positive",
    applicableTo: { ageGroup: [18, 35], categories: ["General", "OBC", "SC", "ST"] }
  },
  {
    id: "national-apprenticeship-scheme",
    title: "National Apprenticeship Promotion Scheme",
    sector: "Skill Development",
    description: "Incentives for employers to engage apprentices and provide on-the-job training.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "tourism-infra-development",
    title: "Tourism Infrastructure Development",
    sector: "Tourism",
    description: "Development of tourist circuits and promotion of eco-tourism.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "north-east-industrial-policy",
    title: "North-East Industrial Development Scheme",
    sector: "Industry",
    description: "Incentives for setting up manufacturing units in the North-Eastern states.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "khadi-village-industries",
    title: "Khadi and Village Industries Promotion",
    sector: "MSME",
    description: "Support for traditional industries and artisans through marketing and technology upgrades.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed"], incomeRange: [0, 500000] }
  },
  {
    id: "national-health-mission",
    title: "National Health Mission Enhancement",
    sector: "Health",
    description: "Strengthening healthcare infrastructure and improving access to healthcare services.",
    impact: "positive",
    applicableTo: { incomeRange: [0, null], categories: ["General", "OBC", "SC", "ST", "EWS"] }
  },
  {
    id: "national-education-policy",
    title: "National Education Policy Implementation",
    sector: "Education",
    description: "Reforms in school and higher education to promote holistic development and skill-based learning.",
    impact: "positive",
    applicableTo: { ageGroup: [3, 25], categories: ["General", "OBC", "SC", "ST", "EWS"] }
  },
  {
    id: "smart-city-mission",
    title: "Smart City Mission Expansion",
    sector: "Urban Development",
    description: "Development of sustainable and citizen-friendly urban infrastructure.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Salaried Employee"], incomeRange: [0, null] }
  },
  {
    id: "namami-gange-mission",
    title: "Namami Gange Mission Enhancement",
    sector: "Environment",
    description: "Cleaning and conservation of the river Ganga and its tributaries.",
    impact: "positive",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "swachh-bharat-mission",
    title: "Swachh Bharat Mission (Rural)",
    sector: "Rural Development",
    description: "Improving sanitation and hygiene in rural areas.",
    impact: "positive",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "jal-jeevan-mission",
    title: "Jal Jeevan Mission",
    sector: "Water Resources",
    description: "Providing safe and adequate drinking water to all rural households by 2024.",
    impact: "positive",
    applicableTo: { incomeRange: [0, null] }
  },
  {
    id: "bharatmala-project",
    title: "Bharatmala Pariyojana",
    sector: "Infrastructure",
    description: "Development of a network of highways and expressways across the country.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Salaried Employee"], incomeRange: [0, null] }
  },
  {
    id: "sagarmala-project",
    title: "Sagarmala Project",
    sector: "Ports & Shipping",
    description: "Port-led development to boost trade and economic growth.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "uday-scheme",
    title: "Ujwal Discom Assurance Yojana (UDAY)",
    sector: "Power",
    description: "Financial turnaround and revival of electricity distribution companies (DISCOMs).",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Salaried Employee"], incomeRange: [0, null] }
  },
  {
    id: "deendayal-antyodaya-yojana",
    title: "Deendayal Antyodaya Yojana-National Rural Livelihoods Mission (DAY-NRLM)",
    sector: "Rural Development",
    description: "Organizing the rural poor into self-help groups (SHGs) and providing them with livelihood opportunities.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed"], incomeRange: [0, 300000] }
  },
  {
    id: "pradhan-mantri-awas-yojana-urban",
    title: "Pradhan Mantri Awas Yojana (Urban) - Credit Linked Subsidy Scheme (CLSS)",
    sector: "Housing",
    description: "Interest subsidy on home loans for purchase/construction of houses by EWS/LIG/MIG categories.",
    impact: "positive",
    applicableTo: { incomeRange: [0, 1800000], categories: ["EWS", "LIG", "MIG"] }
  },
  {
    id: "pradhan-mantri-krishi-sinchai-yojana",
    title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    sector: "Agriculture",
    description: "Improving water use efficiency and expanding irrigation coverage.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "soil-health-card-scheme",
    title: "Soil Health Card Scheme",
    sector: "Agriculture",
    description: "Providing farmers with soil health cards to promote balanced use of fertilizers.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "paramparagat-krishi-vikas-yojana",
    title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    sector: "Agriculture",
    description: "Promoting organic farming through cluster-based approach.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "national-food-security-mission",
    title: "National Food Security Mission (NFSM)",
    sector: "Agriculture",
    description: "Increasing production of rice, wheat, pulses, and coarse cereals.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "mission-for-integrated-development-of-horticulture",
    title: "Mission for Integrated Development of Horticulture (MIDH)",
    sector: "Agriculture",
    description: "Promoting holistic growth of the horticulture sector.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "rashtriya-gokul-mission",
    title: "Rashtriya Gokul Mission",
    sector: "Animal Husbandry",
    description: "Development and conservation of indigenous bovine breeds.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "blue-revolution",
    title: "Blue Revolution: Integrated Development and Management of Fisheries",
    sector: "Fisheries",
    description: "Development of the fisheries sector to enhance fish production and productivity.",
    impact: "positive",
    applicableTo: { occupation: ["Fisherman"], incomeRange: [0, null] }
  },
  {
    id: "animal-husbandry-infrastructure-development-fund",
    title: "Animal Husbandry Infrastructure Development Fund (AHIDF)",
    sector: "Animal Husbandry",
    description: "Incentivizing investments in dairy and meat processing infrastructure.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "pradhan-mantri-matsya-sampada-yojana",
    title: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    sector: "Fisheries",
    description: "Sustainable and responsible development of the fisheries sector.",
    impact: "positive",
    applicableTo: { occupation: ["Fisherman"], incomeRange: [0, null] }
  },
  {
    id: "national-livestock-mission",
    title: "National Livestock Mission (NLM)",
    sector: "Animal Husbandry",
    description: "Sustainable development of the livestock sector.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "pradhan-mantri-fasal-bima-yojana",
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY) - Restructured",
    sector: "Agriculture",
    description: "Crop insurance scheme with reduced premium rates and improved claim settlement process.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "e-national-agriculture-market",
    title: "e-National Agriculture Market (e-NAM)",
    sector: "Agriculture",
    description: "Online trading platform for agricultural commodities.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer", "Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "agricultural-marketing-infrastructure-scheme",
    title: "Agricultural Marketing Infrastructure (AMI) Scheme",
    sector: "Agriculture",
    description: "Development of marketing infrastructure for agricultural commodities.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "mission-organic-value-chain-development",
    title: "Mission Organic Value Chain Development for North Eastern Region (MOVCDNER)",
    sector: "Agriculture",
    description: "Promoting organic farming in the North Eastern Region.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "national-bamboo-mission",
    title: "National Bamboo Mission (NBM)",
    sector: "Agriculture",
    description: "Promoting the cultivation and utilization of bamboo.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "sub-mission-on-seed-and-planting-material",
    title: "Sub-Mission on Seed and Planting Material (SMSP)",
    sector: "Agriculture",
    description: "Increasing the availability of quality seeds and planting material.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "sub-mission-on-agricultural-mechanization",
    title: "Sub-Mission on Agricultural Mechanization (SMAM)",
    sector: "Agriculture",
    description: "Promoting the use of agricultural machinery.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "pradhan-mantri-kisan-maan-dhan-yojana",
    title: "Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)",
    sector: "Social Security",
    description: "Pension scheme for small and marginal farmers.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, 300000], ageGroup: [18, 40] }
  },
  {
    id: "pradhan-mantri-shram-yogi-maan-dhan-yojana",
    title: "Pradhan Mantri Shram Yogi Maan-Dhan Yojana (PM-SYM)",
    sector: "Social Security",
    description: "Pension scheme for unorganized workers.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed"], incomeRange: [0, 15000], ageGroup: [18, 40] }
  },
  {
    id: "atal-pension-yojana",
    title: "Atal Pension Yojana (APY)",
    sector: "Social Security",
    description: "Pension scheme for all citizens, particularly those in the unorganized sector.",
    impact: "positive",
    applicableTo: { ageGroup: [18, 40], incomeRange: [0, null] }
  },
  {
    id: "deendayal-hastkala-sankul",
    title: "Deendayal Hastkala Sankul",
    sector: "Textiles",
    description: "Trade facilitation centre for handicrafts.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed"], incomeRange: [0, 500000] }
  },
  {
    id: "integrated-scheme-for-development-of-textile-industry",
    title: "Integrated Scheme for Development of Textile Industry (ISDTI)",
    sector: "Textiles",
    description: "Promoting the growth and development of the textile industry.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "national-handloom-development-programme",
    title: "National Handloom Development Programme",
    sector: "Textiles",
    description: "Promoting the handloom sector.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed"], incomeRange: [0, 500000] }
  },
  {
    id: "national-jute-mission",
    title: "National Jute Mission",
    sector: "Textiles",
    description: "Promoting the jute sector.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "modified-technology-upgradation-fund-scheme",
    title: "Modified Technology Upgradation Fund Scheme (MTUFS)",
    sector: "Textiles",
    description: "Encouraging investments in technology upgradation in the textile industry.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "samarth-scheme",
    title: "Scheme for Capacity Building in Textile Sector (SAMARTH)",
    sector: "Textiles",
    description: "Providing skill development and training in the textile sector.",
    impact: "positive",
    applicableTo: { ageGroup: [18, 35], categories: ["General", "OBC", "SC", "ST"] }
  },
  {
    id: "pradhan-mantri-kaushal-vikas-yojana",
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    sector: "Skill Development",
    description: "Providing skill development and vocational training to youth.",
    impact: "positive",
    applicableTo: { ageGroup: [18, 35], categories: ["General", "OBC", "SC", "ST"] }
  },
  {
    id: "skill-acquisition-and-knowledge-awareness",
    title: "Skill Acquisition and Knowledge Awareness for Livelihood Promotion (SANKALP)",
    sector: "Skill Development",
    description: "Strengthening skill development institutions and improving the quality of training.",
    impact: "positive",
    applicableTo: { ageGroup: [18, 35], categories: ["General", "OBC", "SC", "ST"] }
  },
  {
    id: "skills-strengthening-for-industrial-value",
    title: "Skills Strengthening for Industrial Value Enhancement (STRIVE)",
    sector: "Skill Development",
    description: "Improving the relevance and efficiency of skill development training.",
    impact: "positive",
    applicableTo: { ageGroup: [18, 35], categories: ["General", "OBC", "SC", "ST"] }
  },
  {
    id: "national-career-service",
    title: "National Career Service (NCS)",
    sector: "Employment",
    description: "Online platform for job seekers and employers.",
    impact: "positive",
    applicableTo: { ageGroup: [18, 35], categories: ["General", "OBC", "SC", "ST"] }
  },
  {
    id: "pradhan-mantri-mudra-yojana",
    title: "Pradhan Mantri MUDRA Yojana (PMMY)",
    sector: "MSME",
    description: "Providing loans to non-corporate, non-farm small/micro enterprises.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Self-Employed"], incomeRange: [0, null] }
  },
  {
    id: "credit-guarantee-fund-trust-for-micro-and-small",
    title: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    sector: "MSME",
    description: "Providing credit guarantee to banks and financial institutions for loans to MSEs.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Self-Employed"], incomeRange: [0, null] }
  },
  {
    id: "prime-ministers-employment-generation-programme",
    title: "Prime Minister's Employment Generation Programme (PMEGP)",
    sector: "MSME",
    description: "Providing financial assistance for setting up new micro-enterprises.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Self-Employed"], incomeRange: [0, null] }
  },
  {
    id: "scheme-of-fund-for-regeneration-of-traditional",
    title: "Scheme of Fund for Regeneration of Traditional Industries (SFURTI)",
    sector: "MSME",
    description: "Promoting cluster-based development of traditional industries.",
    impact: "positive",
    applicableTo: { occupation: ["Self-Employed"], incomeRange: [0, 500000] }
  },
  {
    id: "micro-and-small-enterprises-cluster-development",
    title: "Micro and Small Enterprises Cluster Development Programme (MSE-CDP)",
    sector: "MSME",
    description: "Supporting the development of MSE clusters.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Self-Employed"], incomeRange: [0, null] }
  },
  {
    id: "revamped-msme-credit-guarantee-fund",
    title: "Revamped MSME Credit Guarantee Fund",
    sector: "MSME",
    description: "Reduced cost of credit and enhanced access for MSMEs.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner", "Self-Employed"] }
  },
  {
    id: "interest-equalization-scheme",
    title: "Interest Equalization Scheme",
    sector: "Finance",
    description: "Providing interest subsidy to exporters.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "trade-infrastructure-for-export-scheme",
    title: "Trade Infrastructure for Export Scheme (TIES)",
    sector: "Commerce",
    description: "Supporting the development of export infrastructure.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "market-access-initiative",
    title: "Market Access Initiative (MAI)",
    sector: "Commerce",
    description: "Supporting the development of export marketing.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "niryat-bandhu-scheme",
    title: "Niryat Bandhu Scheme",
    sector: "Commerce",
    description: "Mentoring potential exporters.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "pradhan-mantri-rojgar-protsahan-yojana",
    title: "Pradhan Mantri Rojgar Protsahan Yojana (PMRPY)",
    sector: "Employment",
    description: "Incentivizing employers for generation of new employment.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  },
  {
    id: "pradhan-mantri-gram-sinchai-yojana",
    title: "Pradhan Mantri Gram Sinchai Yojana (PMGSY)",
    sector: "Infrastructure",
    description: "Expanding cultivated area with assured irrigation.",
    impact: "positive",
    applicableTo: { occupation: ["Farmer"], incomeRange: [0, null] }
  },
  {
    id: "make-in-india",
    title: "Make in India",
    sector: "Industry",
    description: "Encouraging companies to manufacture their products in India.",
    impact: "positive",
    applicableTo: { occupation: ["Business Owner"], incomeRange: [0, null] }
  }
];
