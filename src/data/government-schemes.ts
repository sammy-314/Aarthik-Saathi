
export type Scheme = {
  id: string;
  name: string;
  ministry: string;
  description: string;
  eligibility: {
    states?: string[];
    gender?: string[];
    minAge?: number;
    maxAge?: number;
    incomeRange?: [number, number | null]; // [min, max] - null for no upper limit
    categories?: string[];
    occupation?: string[];
  };
  benefits: string;
  applicationProcess: string;
  requiredDocuments: string[];
  website: string;
};

export const governmentSchemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "Income support scheme for landholding farmer families with ₹6,000 per year.",
    eligibility: { occupation: ["Farmer"], incomeRange: [0, 200000] },
    benefits: "₹6,000/year in three equal installments directly into bank accounts.",
    applicationProcess: "Apply online or visit local agriculture office.",
    requiredDocuments: ["Aadhaar Card", "Land Records", "Bank Account details", "PAN Card (optional)"],
    website: "https://pmkisan.gov.in/"
  },
  {
    id: "pmjay",
    name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    ministry: "Ministry of Health and Family Welfare",
    description: "Health insurance with ₹5 lakh cover per family for hospitalization care.",
    eligibility: { categories: ["General", "OBC", "SC", "ST", "EWS"], incomeRange: [0, 800000] },
    benefits: "Free healthcare at empaneled hospitals, up to ₹5 lakh per family/year.",
    applicationProcess: "Check eligibility online or at nearest Kendra.",
    requiredDocuments: ["Aadhaar Card", "Ration Card", "Income Certificate", "Caste Certificate (if applicable)"],
    website: "https://pmjay.gov.in/"
  },
  {
    id: "pmuy",
    name: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    ministry: "Ministry of Petroleum and Natural Gas",
    description: "Provides LPG connections to women from below poverty households.",
    eligibility: { gender: ["Female"], incomeRange: [0, 150000], categories: ["General", "OBC", "SC", "ST", "EWS"] },
    benefits: "Free LPG connection and financial assistance for first refill.",
    applicationProcess: "Apply at LPG distributor with required documents.",
    requiredDocuments: ["Aadhaar Card", "BPL Ration Card", "Bank Account Passbook", "Passport size photograph"],
    website: "https://pmuy.gov.in/"
  },
  {
    id: "pmay",
    name: "Pradhan Mantri Awas Yojana (Urban)",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "Housing for all urban poor by 2022 with financial assistance.",
    eligibility: { incomeRange: [0, 1800000], categories: ["EWS", "LIG", "MIG"] },
    benefits: "Credit linked subsidies & financial help for construction.",
    applicationProcess: "Apply through ULB/bank/HFC or via online portal.",
    requiredDocuments: ["Aadhaar Card", "Income Certificate", "Property documents", "Bank Account details"],
    website: "https://pmaymis.gov.in/"
  },
  {
    id: "pmay-g",
    name: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    ministry: "Ministry of Rural Development",
    description: "Pucca house for rural poor with financial support.",
    eligibility: { incomeRange: [0, 120000], categories: ["General", "OBC", "SC", "ST"] },
    benefits: "₹1.20/1.30 lakh for plain/hilly areas for house construction.",
    applicationProcess: "Contact Gram Panchayat or Block Office.",
    requiredDocuments: ["Aadhaar Card", "BPL Certificate", "Land Documents", "Bank Account details"],
    website: "https://pmayg.nic.in/"
  },
  {
    id: "nrega",
    name: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
    ministry: "Ministry of Rural Development",
    description: "Statutory guarantee of 100 days of wage employment in rural India.",
    eligibility: { categories: ["General", "OBC", "SC", "ST"], incomeRange: [0, 300000] },
    benefits: "Wage employment, unskilled manual work near village.",
    applicationProcess: "Register at local Gram Panchayat.",
    requiredDocuments: ["Job Card", "Aadhaar", "Residence Proof"],
    website: "https://nrega.nic.in/"
  },
  {
    id: "pmgramin-sadak-yojana",
    name: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
    ministry: "Ministry of Rural Development",
    description: "All-weather road connectivity to eligible rural habitations.",
    eligibility: { states: ["All States"] },
    benefits: "New roads and infrastructure for villages.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Village ID", "Population Certificate", "Land Availability Certificate"],
    website: "https://pmgsy.nic.in/"
  },
  {
    id: "pmfby",
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "Crop insurance for all food and commercial crops.",
    eligibility: { occupation: ["Farmer"], incomeRange: [0, null] },
    benefits: "Low premium crop insurance cover, calamity protection.",
    applicationProcess: "Apply at nearest bank, CSC, or insurer.",
    requiredDocuments: ["Land Records", "Aadhaar Card", "Bank details", "Sowing Certificate"],
    website: "https://pmfby.gov.in/"
  },
  {
    id: "pmsby",
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    ministry: "Ministry of Finance",
    description: "Accident insurance with coverage for death/disability.",
    eligibility: { minAge: 18, maxAge: 70, incomeRange: [0, null] },
    benefits: "₹2 lakh cover for death/permanent disability, ₹1 lakh for partial.",
    applicationProcess: "Opt at bank branch/auto-debit facility.",
    requiredDocuments: ["Aadhaar Card", "Bank Account details", "Passport size photograph"],
    website: "https://jansuraksha.gov.in/"
  },
  {
    id: "pmjjby",
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    ministry: "Ministry of Finance",
    description: "Life insurance scheme for death due to any reason.",
    eligibility: { minAge: 18, maxAge: 50, incomeRange: [0, null] },
    benefits: "₹2 lakh in case of death, paying nominal premium.",
    applicationProcess: "Apply/renew through savings bank.",
    requiredDocuments: ["Aadhaar Card", "Bank Account details"],
    website: "https://jansuraksha.gov.in/"
  },
  {
    id: "standup-india",
    name: "Stand-Up India Scheme",
    ministry: "Ministry of Finance",
    description: "Promotes entrepreneurship among women and SC/ST communities.",
    eligibility: { categories: ["SC", "ST"], gender: ["Female"], minAge: 18 },
    benefits: "Bank loans between ₹10 lakh and ₹1 crore.",
    applicationProcess: "Apply at bank branches.",
    requiredDocuments: ["Identity Proof", "Address Proof", "Business Plan"],
    website: "https://www.standupindia.org.in/"
  },
  {
    id: "startup-india",
    name: "Startup India Initiative",
    ministry: "Ministry of Commerce and Industry",
    description: "Promotes startups through funding, tax benefits, and support.",
    eligibility: { occupation: ["Business Owner"], incomeRange: [0, null] },
    benefits: "Tax exemptions, easier compliance, funding access.",
    applicationProcess: "Register on Startup India portal.",
    requiredDocuments: ["Company Registration", "Business Plan"],
    website: "https://www.startupindia.gov.in/"
  },
  {
    id: "mudra-yojana",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    ministry: "Ministry of Finance",
    description: "Loans up to ₹10 lakh for non-corporate small businesses.",
    eligibility: { occupation: ["Business Owner", "Self-Employed"], incomeRange: [0, null] },
    benefits: "Collateral-free loans under Shishu, Kishore, and Tarun categories.",
    applicationProcess: "Apply at banks, MFIs, or NBFCs.",
    requiredDocuments: ["Identity Proof", "Address Proof", "Business Plan"],
    website: "https://www.mudra.org.in/"
  },
  {
    id: "skill-india-mission",
    name: "Skill India Mission",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    description: "Training and skill development for Indian youth.",
    eligibility: { minAge: 15, maxAge: 45, categories: ["General", "OBC", "SC", "ST"] },
    benefits: "Skill training, certification, and job placement.",
    applicationProcess: "Enroll at training centers.",
    requiredDocuments: ["Aadhaar Card", "Educational Certificates"],
    website: "https://www.skillindiadigi.gov.in/"
  },
  {
    id: "deendayal-antyodaya",
    name: "Deendayal Antyodaya Yojana-National Rural Livelihoods Mission (DAY-NRLM)",
    ministry: "Ministry of Rural Development",
    description: "Empowers women through self-help groups.",
    eligibility: { gender: ["Female"], incomeRange: [0, 100000] },
    benefits: "Financial assistance, skill training, and market linkages.",
    applicationProcess: "Join local self-help groups.",
    requiredDocuments: ["Aadhaar Card", "BPL Card"],
    website: "https://nrlm.gov.in/"
  },
  {
    id: "deendayal-urban",
    name: "Deendayal Antyodaya Yojana-National Urban Livelihoods Mission (DAY-NULM)",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "Enhances livelihoods of urban poor through skill development.",
    eligibility: { incomeRange: [0, 100000], categories: ["EWS", "LIG"] },
    benefits: "Skill training, self-employment opportunities, and shelter.",
    applicationProcess: "Enroll at urban local bodies.",
    requiredDocuments: ["Aadhaar Card", "Income Certificate"],
    website: "https://nulm.gov.in/"
  },
  {
    id: "national-apprenticeship",
    name: "National Apprenticeship Promotion Scheme (NAPS)",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    description: "Provides apprenticeship training to youth.",
    eligibility: { minAge: 14, categories: ["General", "OBC", "SC", "ST"] },
    benefits: "Stipend during apprenticeship and job opportunities.",
    applicationProcess: "Register on apprenticeship portal.",
    requiredDocuments: ["Aadhaar Card", "Educational Certificates"],
    website: "https://www.apprenticeshipindia.gov.in/"
  },
  {
    id: "pm-awas-plus",
    name: "Pradhan Mantri Awas Yojana Plus (PMAY+)",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "Affordable housing with sustainable technology.",
    eligibility: { incomeRange: [0, 300000], categories: ["EWS", "LIG"] },
    benefits: "Subsidized housing with eco-friendly features.",
    applicationProcess: "Apply through ULBs.",
    requiredDocuments: ["Aadhaar Card", "Income Certificate", "Property Documents"],
    website: "https://pmaymis.gov.in/"
  },
  {
    id: "pm-kisan-maan",
    name: "Pradhan Mantri Kisan Maan Dhan Yojana",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "Pension scheme for small and marginal farmers.",
    eligibility: { occupation: ["Farmer"], minAge: 18, maxAge: 40 },
    benefits: "Monthly pension of ₹3,000 after 60 years.",
    applicationProcess: "Enroll at Common Service Centres.",
    requiredDocuments: ["Aadhaar Card", "Land Records", "Bank Account Details"],
    website: "https://pmkmy.gov.in/"
  },
  {
    id: "pm-shram-yogi",
    name: "Pradhan Mantri Shram Yogi Maan-dhan (PMSYM)",
    ministry: "Ministry of Labour and Employment",
    description: "Pension scheme for unorganized sector workers.",
    eligibility: { occupation: ["Self-Employed"], incomeRange: [0, 15000], minAge: 18, maxAge: 40 },
    benefits: "Monthly pension of ₹3,000 after 60 years.",
    applicationProcess: "Enroll at Common Service Centres.",
    requiredDocuments: ["Aadhaar Card", "Bank Account Details"],
    website: "https://labour.gov.in/"
  },
  {
    id: "national-education-mission",
    name: "National Education Mission",
    ministry: "Ministry of Education",
    description: "Comprehensive program for improving education quality.",
    eligibility: { categories: ["General", "OBC", "SC", "ST"] },
    benefits: "Improved school infrastructure and teacher training.",
    applicationProcess: "Through educational institutions.",
    requiredDocuments: ["Student ID", "Aadhaar Card"],
    website: "https://education.gov.in/"
  },
  {
    id: "national-health-mission",
    name: "National Health Mission (NHM)",
    ministry: "Ministry of Health and Family Welfare",
    description: "Addresses healthcare needs in rural and urban areas.",
    eligibility: { categories: ["General", "OBC", "SC", "ST"] },
    benefits: "Improved healthcare services and infrastructure.",
    applicationProcess: "Through local health centers.",
    requiredDocuments: ["Aadhaar Card", "Ration Card"],
    website: "https://nhm.gov.in/"
  },
  {
    id: "integrated-child",
    name: "Integrated Child Development Services (ICDS)",
    ministry: "Ministry of Women and Child Development",
    description: "Provides nutrition, health, and education to children.",
    eligibility: { minAge: 0, maxAge: 6 },
    benefits: "Supplementary nutrition, immunization, and preschool education.",
    applicationProcess: "Enroll at Anganwadi centers.",
    requiredDocuments: ["Birth Certificate", "Aadhaar Card"],
    website: "https://wcd.nic.in/"
  },
  {
    id: "poshan-abhiyaan",
    name: "POSHAN Abhiyaan",
    ministry: "Ministry of Women and Child Development",
    description: "Improves nutritional outcomes for children, pregnant women, and lactating mothers.",
    eligibility: { gender: ["Female"] },
    benefits: "Improved nutrition and health services.",
    applicationProcess: "Through Anganwadi centers.",
    requiredDocuments: ["Aadhaar Card", "Ration Card"],
    website: "https://poshanabhiyaan.gov.in/"
  },
  {
    id: "beti-bachao",
    name: "Beti Bachao Beti Padhao",
    ministry: "Ministry of Women and Child Development",
    description: "Promotes the education and welfare of the girl child.",
    eligibility: { gender: ["Female"] },
    benefits: "Awareness campaigns and financial assistance.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Birth Certificate", "Aadhaar Card"],
    website: "https://wcd.nic.in/"
  },
  {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana",
    ministry: "Ministry of Finance",
    description: "Savings scheme for the education and marriage of the girl child.",
    eligibility: { gender: ["Female"], maxAge: 10 },
    benefits: "High-interest savings account.",
    applicationProcess: "Open account at banks or post offices.",
    requiredDocuments: ["Birth Certificate", "Aadhaar Card"],
    website: "https://nsiindia.gov.in/"
  },
  {
    id: "pradhan-mantri-matru",
    name: "Pradhan Mantri Matru Vandana Yojana",
    ministry: "Ministry of Women and Child Development",
    description: "Financial assistance to pregnant women and lactating mothers.",
    eligibility: { gender: ["Female"], incomeRange: [0, 300000] },
    benefits: "₹5,000 in installments.",
    applicationProcess: "Register at Anganwadi centers.",
    requiredDocuments: ["Aadhaar Card", "Bank Account Details"],
    website: "https://wcd.nic.in/"
  },
  {
    id: "national-food-security",
    name: "National Food Security Act (NFSA)",
    ministry: "Ministry of Consumer Affairs, Food and Public Distribution",
    description: "Provides subsidized food grains to eligible households.",
    eligibility: { categories: ["General", "OBC", "SC", "ST"] },
    benefits: "Subsidized food grains.",
    applicationProcess: "Through ration cards.",
    requiredDocuments: ["Aadhaar Card", "Ration Card"],
    website: "https://dfpd.nic.in/"
  },
  {
    id: "pm-formalisation-micro",
    name: "PM Formalisation of Micro food processing Enterprises (PMFME) Scheme",
    ministry: "Ministry of Food Processing Industries",
    description: "Support for micro food processing enterprises.",
    eligibility: { occupation: ["Business Owner"], incomeRange: [0, 500000] },
    benefits: "Financial assistance and skill training.",
    applicationProcess: "Apply through district authorities.",
    requiredDocuments: ["Aadhaar Card", "Business Plan"],
    website: "https://mofpi.nic.in/"
  },
  {
    id: "pradhan-mantri-kushal",
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    description: "Skill development training for youth.",
    eligibility: { minAge: 18, maxAge: 35, categories: ["General", "OBC", "SC", "ST"] },
    benefits: "Skill training and certification.",
    applicationProcess: "Enroll at training centers.",
    requiredDocuments: ["Aadhaar Card", "Educational Certificates"],
    website: "https://pmkvyofficial.org/"
  },
  {
    id: "atal-pension-yojana",
    name: "Atal Pension Yojana (APY)",
    ministry: "Ministry of Finance",
    description: "Pension scheme for unorganized sector workers.",
    eligibility: { minAge: 18, maxAge: 40 },
    benefits: "Guaranteed monthly pension after 60 years.",
    applicationProcess: "Open account at banks.",
    requiredDocuments: ["Aadhaar Card", "Bank Account Details"],
    website: "https://npscra.nsdl.co.in/"
  },
  {
    id: "pradhan-mantri-jandhan",
    name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    ministry: "Ministry of Finance",
    description: "Access to financial services for all households.",
    eligibility: { categories: ["General", "OBC", "SC", "ST"] },
    benefits: "Bank accounts with zero balance and overdraft facility.",
    applicationProcess: "Open account at banks.",
    requiredDocuments: ["Aadhaar Card", "Address Proof"],
    website: "https://pmjdy.gov.in/"
  },
  {
    id: "swachh-bharat-mission",
    name: "Swachh Bharat Mission",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "Improves sanitation and cleanliness in urban and rural areas.",
    eligibility: { categories: ["General", "OBC", "SC", "ST"] },
    benefits: "Improved sanitation facilities.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "Address Proof"],
    website: "https://swachhbharatmission.gov.in/"
  },
  {
    id: "namami-gange",
    name: "Namami Gange Programme",
    ministry: "Ministry of Jal Shakti",
    description: "Conserves and rejuvenates the River Ganga.",
    eligibility: { states: ["Uttarakhand", "Uttar Pradesh", "Bihar", "Jharkhand", "West Bengal"] },
    benefits: "Clean and healthy River Ganga.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "Address Proof"],
    website: "https://nmcg.nic.in/"
  },
  {
    id: "smart-cities-mission",
    name: "Smart Cities Mission",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "Develops smart and sustainable cities.",
    eligibility: { states: ["All States"] },
    benefits: "Improved urban infrastructure and services.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "Address Proof"],
    website: "https://smartcities.gov.in/"
  },
  {
    id: "amrut-mission",
    name: "Atal Mission for Rejuvenation and Urban Transformation (AMRUT)",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "Improves basic infrastructure in cities.",
    eligibility: { states: ["All States"] },
    benefits: "Improved water supply, sewerage, and urban transport.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "Address Proof"],
    website: "https://amrut.gov.in/"
  },
  {
    id: "pradhan-mantri-awas-yojana-rural",
    name: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    ministry: "Ministry of Rural Development",
    description: "Provides financial assistance for construction of pucca houses for rural houseless or households living in dilapidated houses.",
    eligibility: {
      incomeRange: [0, 120000],
      categories: ["General", "OBC", "SC", "ST"],
    },
    benefits: "Financial assistance of ₹1.20 lakh in plain areas and ₹1.30 lakh in hilly/difficult areas for house construction.",
    applicationProcess: "Contact your Gram Panchayat or Block Development Officer to apply.",
    requiredDocuments: ["Aadhaar Card", "BPL Certificate", "Land Documents", "Bank Account details"],
    website: "https://pmayg.nic.in/",
  },
  {
    id: "national-rural-livelihood-mission",
    name: "National Rural Livelihood Mission (NRLM)",
    ministry: "Ministry of Rural Development",
    description: "To reduce poverty through building strong institutions of the poor, particularly women, and enabling these institutions to access a range of financial services",
    eligibility: {
      gender: ["Female"],
      incomeRange: [0, 100000],
    },
    benefits: "Financial assistance, skill training, and market linkages.",
    applicationProcess: "Join local self-help groups.",
    requiredDocuments: ["Aadhaar Card", "BPL Card"],
    website: "https://nrlm.gov.in/",
  },
  {
    id: "national-urban-livelihood-mission",
    name: "National Urban Livelihood Mission (NULM)",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "To reduce poverty and vulnerability of the urban poor households by enabling them to access gainful self-employment and skilled wage employment opportunities",
    eligibility: {
      incomeRange: [0, 100000],
      categories: ["EWS", "LIG"],
    },
    benefits: "Skill training, self-employment opportunities, and shelter.",
    applicationProcess: "Enroll at urban local bodies.",
    requiredDocuments: ["Aadhaar Card", "Income Certificate"],
    website: "https://nulm.gov.in/",
  },
  {
    id: "pradhan-mantri-krishi-sinchai-yojana",
    name: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "To enhance physical access of water on farm and expand cultivable area under assured irrigation, improve on farm water use efficiency",
    eligibility: {
      occupation: ["Farmer"],
      incomeRange: [0, null],
    },
    benefits: "Improved irrigation facilities and water use efficiency.",
    applicationProcess: "Apply through local agriculture department.",
    requiredDocuments: ["Land Records", "Aadhaar Card", "Bank details"],
    website: "https://pmksy.gov.in/",
  },
  {
    id: "soil-health-card-scheme",
    name: "Soil Health Card Scheme",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "To issue soil health cards every two years, to farmers so as to provide a basis to address nutritional deficiencies in Fertilizers application",
    eligibility: {
      occupation: ["Farmer"],
      incomeRange: [0, null],
    },
    benefits: "Soil health cards with recommendations for fertilizer application.",
    applicationProcess: "Contact local agriculture department.",
    requiredDocuments: ["Land Records", "Aadhaar Card"],
    website: "https://soilhealth.dac.gov.in/",
  },
  {
    id: "paramparagat-krishi-vikas-yojana",
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "To promote organic farming through adoption of organic production standards and certification",
    eligibility: {
      occupation: ["Farmer"],
      incomeRange: [0, null],
    },
    benefits: "Promotion of organic farming and certification.",
    applicationProcess: "Contact local agriculture department.",
    requiredDocuments: ["Land Records", "Aadhaar Card"],
    website: "https://pgsindia-ncof.gov.in/",
  },
  {
    id: "mission-for-integrated-development-of-horticulture",
    name: "Mission for Integrated Development of Horticulture (MIDH)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "To promote holistic growth of the horticulture sector, including fruits, vegetables, root & tuber crops, mushrooms, spices, flowers, aromatic plants, coconut, cashew, cocoa and bamboo",
    eligibility: {
      occupation: ["Farmer"],
      incomeRange: [0, null],
    },
    benefits: "Promotion of horticulture sector.",
    applicationProcess: "Contact local horticulture department.",
    requiredDocuments: ["Land Records", "Aadhaar Card"],
    website: "https://midh.gov.in/",
  },
  {
    id: "national-mission-on-sustainable-agriculture",
    name: "National Mission on Sustainable Agriculture (NMSA)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "To promote sustainable agriculture practices to enhance agricultural productivity and income",
    eligibility: {
      occupation: ["Farmer"],
      incomeRange: [0, null],
    },
    benefits: "Promotion of sustainable agriculture practices.",
    applicationProcess: "Contact local agriculture department.",
    requiredDocuments: ["Land Records", "Aadhaar Card"],
    website: "https://nmsa.dac.gov.in/",
  },
  {
    id: "national-livestock-mission",
    name: "National Livestock Mission (NLM)",
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    description: "To promote livestock development, including cattle, buffalo, sheep, goat, piggery, poultry",
    eligibility: {
      occupation: ["Farmer"],
      incomeRange: [0, null],
    },
    benefits: "Promotion of livestock development.",
    applicationProcess: "Contact local animal husbandry department.",
    requiredDocuments: ["Land Records", "Aadhaar Card"],
    website: "https://nlm.dac.gov.in/",
  },
  {
    id: "blue-revolution",
    name: "Blue Revolution",
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    description: "To promote fisheries development",
    eligibility: {
      occupation: ["Fisherman"],
      incomeRange: [0, null],
    },
    benefits: "Promotion of fisheries development.",
    applicationProcess: "Contact local fisheries department.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://dof.gov.in/",
  },
  {
    id: "pradhan-mantri-matsya-sampada-yojana",
    name: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    description: "To enhance fish production and productivity",
    eligibility: {
      occupation: ["Fisherman"],
      incomeRange: [0, null],
    },
    benefits: "Enhancement of fish production and productivity.",
    applicationProcess: "Contact local fisheries department.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://dof.gov.in/",
  },
  {
    id: "national-AYUSH-mission",
    name: "National AYUSH Mission",
    ministry: "Ministry of AYUSH",
    description: "To promote AYUSH systems of medicine",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
    },
    benefits: "Promotion of AYUSH systems of medicine.",
    applicationProcess: "Contact local AYUSH department.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://nam.ayush.gov.in/",
  },
  {
    id: "national-mental-health-programme",
    name: "National Mental Health Programme (NMHP)",
    ministry: "Ministry of Health and Family Welfare",
    description: "To provide mental health services",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
    },
    benefits: "Provision of mental health services.",
    applicationProcess: "Contact local health department.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://mohfw.gov.in/",
  },
  {
    id: "janani-shishu-suraksha-karyakram",
    name: "Janani Shishu Suraksha Karyakram (JSSK)",
    ministry: "Ministry of Health and Family Welfare",
    description: "To provide free and cashless services to pregnant women and sick newborns",
    eligibility: {
      gender: ["Female"],
    },
    benefits: "Free and cashless services to pregnant women and sick newborns.",
    applicationProcess: "Contact local health department.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://mohfw.gov.in/",
  },
  {
    id: "rashtriya-kishor-swasthya-karyakram",
    name: "Rashtriya Kishor Swasthya Karyakram (RKSK)",
    ministry: "Ministry of Health and Family Welfare",
    description: "To improve the health and well-being of adolescents",
    eligibility: {
      minAge: 10,
      maxAge: 19,
    },
    benefits: "Improvement of health and well-being of adolescents.",
    applicationProcess: "Contact local health department.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://mohfw.gov.in/",
  },
  {
    id: "national-programme-for-prevention-and-control-of-cancer",
    name: "National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCS)",
    ministry: "Ministry of Health and Family Welfare",
    description: "To prevent and control cancer, diabetes, cardiovascular diseases and stroke",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
    },
    benefits: "Prevention and control of cancer, diabetes, cardiovascular diseases and stroke.",
    applicationProcess: "Contact local health department.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://mohfw.gov.in/",
  },
  {
    id: "revised-national-tuberculosis-control-programme",
    name: "Revised National Tuberculosis Control Programme (RNTCP)",
    ministry: "Ministry of Health and Family Welfare",
    description: "To prevent and control tuberculosis",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
    },
    benefits: "Prevention and control of tuberculosis.",
    applicationProcess: "Contact local health department.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://mohfw.gov.in/",
  },
  {
    id: "national-vector-borne-disease-control-programme",
    name: "National Vector Borne Disease Control Programme (NVBDCP)",
    ministry: "Ministry of Health and Family Welfare",
    description: "To prevent and control vector borne diseases",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
    },
    benefits: "Prevention and control of vector borne diseases.",
    applicationProcess: "Contact local health department.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://nvbdcp.gov.in/"
  },
  {
    id: "jan-shikshan-sansthan",
    name: "Jan Shikshan Sansthan (JSS)",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    description: "Vocational training program for non-literate, neo-literates, and school dropouts",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
      incomeRange: [0, 200000]
    },
    benefits: "Vocational training and skill development.",
    applicationProcess: "Contact local JSS center.",
    requiredDocuments: ["Aadhaar Card", "Income Certificate"],
    website: "https://jss.gov.in/"
  },
  {
    id: "national-rural-drinking-water-programme",
    name: "National Rural Drinking Water Programme (NRDWP)",
    ministry: "Ministry of Jal Shakti",
    description: "Provides safe drinking water to rural areas",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"]
    },
    benefits: "Access to safe drinking water.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://jaljeevanmission.gov.in/"
  },
  {
    id: "national-child-labour-project",
    name: "National Child Labour Project (NCLP)",
    ministry: "Ministry of Labour and Employment",
    description: "Rehabilitation of child laborers",
    eligibility: {
      maxAge: 14
    },
    benefits: "Education and vocational training for former child laborers.",
    applicationProcess: "Through district administration.",
    requiredDocuments: ["Birth Certificate", "Aadhaar Card"],
    website: "https://labour.gov.in/"
  },
  {
    id: "national-food-for-work-programme",
    name: "National Food for Work Programme (NFWP)",
    ministry: "Ministry of Rural Development",
    description: "Employment generation and food security",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
      incomeRange: [0, 150000]
    },
    benefits: "Employment and food grains.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "BPL Card"],
    website: "https://rural.nic.in/"
  },
  {
    id: "national-literacy-mission",
    name: "National Literacy Mission (NLM)",
    ministry: "Ministry of Education",
    description: "Eradication of illiteracy",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"]
    },
    benefits: "Basic literacy and education.",
    applicationProcess: "Through local centers.",
    requiredDocuments: ["Aadhaar Card"],
    website: "https://nlm.gov.in/"
  },
  {
    id: "sampoorna-grameen-rozgar-yojana",
    name: "Sampoorna Grameen Rozgar Yojana (SGRY)",
    ministry: "Ministry of Rural Development",
    description: "Rural employment and food security",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
      incomeRange: [0, 150000]
    },
    benefits: "Employment and food grains.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "BPL Card"],
    website: "https://rural.nic.in/"
  },
  {
    id: "swarnjayanti-gram-swarozgar-yojana",
    name: "Swarnjayanti Gram Swarozgar Yojana (SGSY)",
    ministry: "Ministry of Rural Development",
    description: "Self-employment for rural poor",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
      incomeRange: [0, 150000]
    },
    benefits: "Self-employment opportunities.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "BPL Card"],
    website: "https://rural.nic.in/"
  },
  {
    id: "integrated-rural-development-programme",
    name: "Integrated Rural Development Programme (IRDP)",
    ministry: "Ministry of Rural Development",
    description: "Poverty alleviation in rural areas",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
      incomeRange: [0, 150000]
    },
    benefits: "Financial assistance for income-generating assets.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "BPL Card"],
    website: "https://rural.nic.in/"
  },
  {
    id: "jawahar-rozgar-yojana",
    name: "Jawahar Rozgar Yojana (JRY)",
    ministry: "Ministry of Rural Development",
    description: "Employment generation in rural areas",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
      incomeRange: [0, 150000]
    },
    benefits: "Employment opportunities.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "BPL Card"],
    website: "https://rural.nic.in/"
  },
  {
    id: "employment-assurance-scheme",
    name: "Employment Assurance Scheme (EAS)",
    ministry: "Ministry of Rural Development",
    description: "Employment generation in rural areas",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
      incomeRange: [0, 150000]
    },
    benefits: "Employment opportunities during the lean agricultural season.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Aadhaar Card", "BPL Card"],
    website: "https://rural.nic.in/"
  },
  {
    id: "pradhan-mantri-gram-sadak-yojana",
    name: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
    ministry: "Ministry of Rural Development",
    description: "Rural road connectivity",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"]
    },
    benefits: "All-weather road connectivity to unconnected habitations.",
    applicationProcess: "Through local government.",
    requiredDocuments: ["Village ID"],
    website: "https://pmgsy.nic.in/"
  },
  {
    id: "swarna-jayanti-shahari-rozgar-yojana",
    name: "Swarna Jayanti Shahari Rozgar Yojana (SJSRY)",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "Urban employment and poverty alleviation",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST"],
      incomeRange: [0, 150000]
    },
    benefits: "Employment opportunities and skill development.",
    applicationProcess: "Through urban local bodies.",
    requiredDocuments: ["Aadhaar Card", "BPL Card"],
    website: "https://mohua.gov.in/"
  }
];
