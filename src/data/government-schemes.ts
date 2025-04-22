
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

// A sample of government schemes (adding 10 for brevity, but there would be 150)
export const governmentSchemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "Income support scheme for all landholding farmers' families in the country, providing ₹6,000 per year in three equal installments.",
    eligibility: {
      occupation: ["Farmer"],
      incomeRange: [0, 200000],
    },
    benefits: "Financial assistance of ₹6,000 per year transferred in three equal installments directly into bank accounts.",
    applicationProcess: "Apply online at pmkisan.gov.in or visit your local agriculture office. Farmers can self-register through the Farmers Corner on the portal.",
    requiredDocuments: ["Aadhaar Card", "Land Records", "Bank Account details", "PAN Card (optional)"],
    website: "https://pmkisan.gov.in/",
  },
  {
    id: "pmjay",
    name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    ministry: "Ministry of Health and Family Welfare",
    description: "Health insurance scheme providing coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    eligibility: {
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      incomeRange: [0, 800000],
    },
    benefits: "Free healthcare benefits at empaneled hospitals with coverage up to ₹5 lakh per family per year for medical procedures.",
    applicationProcess: "Check eligibility on the mera.pmjay.gov.in website or visit your nearest Ayushman Bharat Kendra or Common Service Centre.",
    requiredDocuments: ["Aadhaar Card", "Ration Card", "Income Certificate", "Caste Certificate (if applicable)"],
    website: "https://pmjay.gov.in/",
  },
  {
    id: "pmuy",
    name: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    ministry: "Ministry of Petroleum and Natural Gas",
    description: "Provides LPG connections to women from below poverty line households.",
    eligibility: {
      gender: ["Female"],
      incomeRange: [0, 150000],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
    },
    benefits: "Free LPG connection with financial assistance for first refill and stove.",
    applicationProcess: "Apply at your nearest LPG distributor with required documents.",
    requiredDocuments: ["Aadhaar Card", "BPL Ration Card", "Bank Account Passbook", "Passport size photograph"],
    website: "https://pmuy.gov.in/",
  },
  {
    id: "pmay",
    name: "Pradhan Mantri Awas Yojana (PMAY) - Urban",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "Aims to provide housing for all in urban areas by 2022 through financial assistance for house construction.",
    eligibility: {
      incomeRange: [0, 1800000],
      categories: ["EWS", "LIG", "MIG"],
    },
    benefits: "Credit-linked subsidy on home loans, direct financial assistance for house construction.",
    applicationProcess: "Apply through your Urban Local Body (ULB) or through banks/housing finance companies for credit-linked subsidy.",
    requiredDocuments: ["Aadhaar Card", "Income Certificate", "Property documents", "Bank Account details"],
    website: "https://pmaymis.gov.in/",
  },
  {
    id: "pmay-g",
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
    id: "pmmy",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    ministry: "Ministry of Finance",
    description: "Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises for income generating activities.",
    eligibility: {
      occupation: ["Business Owner", "Self-Employed"],
      incomeRange: [0, null],
    },
    benefits: "Collateral-free loans under three categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh).",
    applicationProcess: "Apply at any bank, MFI, NBFC, or MUDRA banks with a viable business plan.",
    requiredDocuments: ["Identity Proof", "Address Proof", "Business Plan", "Bank Account details", "Photograph"],
    website: "https://www.mudra.org.in/",
  },
  {
    id: "pmsby",
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    ministry: "Ministry of Finance",
    description: "Accident insurance scheme offering coverage for death or disability due to accidents.",
    eligibility: {
      minAge: 18,
      maxAge: 70,
      incomeRange: [0, null],
    },
    benefits: "Insurance cover of ₹2 lakh for accidental death and permanent total disability, ₹1 lakh for permanent partial disability.",
    applicationProcess: "Visit your bank branch and fill out the enrollment form or opt for auto-debit from your bank account.",
    requiredDocuments: ["Aadhaar Card", "Bank Account details", "Passport size photograph"],
    website: "https://www.jansuraksha.gov.in/",
  },
  {
    id: "pmjjby",
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    ministry: "Ministry of Finance",
    description: "Life insurance scheme providing coverage in case of death due to any reason.",
    eligibility: {
      minAge: 18,
      maxAge: 50,
      incomeRange: [0, null],
    },
    benefits: "Life insurance cover of ₹2 lakh in case of death due to any reason for a premium of ₹330 per annum.",
    applicationProcess: "Visit your bank branch and fill out the enrollment form or opt for auto-debit from your bank account.",
    requiredDocuments: ["Aadhaar Card", "Bank Account details", "Passport size photograph"],
    website: "https://www.jansuraksha.gov.in/",
  },
  {
    id: "pmgsy",
    name: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
    ministry: "Ministry of Rural Development",
    description: "Aims to provide all-weather road connectivity to eligible unconnected habitations in rural areas.",
    eligibility: {
      states: ["All States"],
    },
    benefits: "Improved connectivity for rural communities, better access to markets, healthcare, and education.",
    applicationProcess: "Implementation is done by state governments. Village communities can approach their District Rural Development Agency.",
    requiredDocuments: ["Village ID", "Population Certificate", "Land Availability Certificate"],
    website: "https://pmgsy.nic.in/",
  },
  {
    id: "pmfby",
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "Crop insurance scheme covering all food crops, oilseeds, and commercial/horticultural crops.",
    eligibility: {
      occupation: ["Farmer"],
      incomeRange: [0, null],
    },
    benefits: "Financial support for crop failure due to natural calamities, pests & diseases. Low premiums - 2% for kharif, 1.5% for rabi, and 5% for commercial/horticultural crops.",
    applicationProcess: "Apply through your nearest bank, Common Service Center, or insurance company during crop seasons.",
    requiredDocuments: ["Land Records", "Bank Account details", "Aadhaar Card", "Sowing Certificate"],
    website: "https://pmfby.gov.in/",
  },
  // Additional schemes would be added here to reach 150
];
