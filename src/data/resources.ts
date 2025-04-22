export type ResourceType = 'Article' | 'Blog' | 'Video' | 'Infographic' | 'Podcast';

export type Resource = {
  id: string;
  title: string;
  type: ResourceType;
  category: 'Government Schemes' | 'Budget' | 'Income Tax' | 'Green Investment' | 'Financial Literacy';
  source: string;
  url: string;
  description: string;
  publishedDate: string;
  readTime?: string; // For articles and blogs
  duration?: string; // For videos and podcasts
  tags: string[];
};

export const resources: Resource[] = [
  {
    id: "article-pmkisan",
    title: "PM-KISAN Scheme: Complete Information",
    type: "Article",
    category: "Government Schemes",
    source: "PM-KISAN Official Portal",
    url: "https://pmkisan.gov.in/",
    description: "Official portal of Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme with complete information about benefits and registration.",
    publishedDate: "2023-06-15",
    readTime: "10 min read",
    tags: ["Agriculture", "Farmer Welfare", "Government Scheme"]
  },
  {
    id: "article-pmay",
    title: "PMAY (Urban) Scheme Details",
    type: "Article",
    category: "Government Schemes",
    source: "PMAY Official Portal",
    url: "https://pmaymis.gov.in/",
    description: "Official portal of Pradhan Mantri Awas Yojana (Urban) with complete scheme details and application process.",
    publishedDate: "2023-07-22",
    readTime: "12 min read",
    tags: ["Housing", "Urban Development", "Government Scheme"]
  },
  {
    id: "article-ayushman-bharat",
    title: "Ayushman Bharat PM-JAY Scheme",
    type: "Article",
    category: "Government Schemes",
    source: "Ayushman Bharat Official Portal",
    url: "https://pmjay.gov.in/",
    description: "Official portal of Ayushman Bharat Pradhan Mantri Jan Arogya Yojana with complete scheme details.",
    publishedDate: "2023-05-05",
    readTime: "8 min read",
    tags: ["Healthcare", "Health Insurance", "Government Scheme"]
  },
  {
    id: "article-mudra-loan",
    title: "Pradhan Mantri MUDRA Yojana",
    type: "Article",
    category: "Government Schemes",
    source: "MUDRA Official Portal",
    url: "https://www.mudra.org.in/",
    description: "Official portal of Pradhan Mantri MUDRA Yojana with complete information about loan schemes for entrepreneurs.",
    publishedDate: "2023-08-10",
    readTime: "10 min read",
    tags: ["Entrepreneurship", "Loans", "Government Scheme"]
  },
  {
    id: "article-union-budget",
    title: "Union Budget 2023-24",
    type: "Article",
    category: "Budget",
    source: "Ministry of Finance",
    url: "https://www.indiabudget.gov.in/",
    description: "Official Union Budget 2023-24 documents and highlights from the Ministry of Finance.",
    publishedDate: "2023-02-01",
    readTime: "15 min read",
    tags: ["Union Budget", "Government Policy", "Economic Policy"]
  },
  {
    id: "article-income-tax",
    title: "Income Tax Department",
    type: "Article",
    category: "Income Tax",
    source: "Income Tax Department",
    url: "https://www.incometax.gov.in/iec/foportal/",
    description: "Official Income Tax Department portal with complete information about tax laws and filing.",
    publishedDate: "2023-08-15",
    readTime: "12 min read",
    tags: ["Income Tax", "Tax Filing", "Government Portal"]
  },
  {
    id: "article-gst",
    title: "GST Portal",
    type: "Article",
    category: "Financial Literacy",
    source: "GST Department",
    url: "https://www.gst.gov.in/",
    description: "Official GST portal with complete information about GST laws, filing, and services.",
    publishedDate: "2023-07-20",
    readTime: "10 min read",
    tags: ["GST", "Taxation", "Government Portal"]
  },
  {
    id: "article-epf",
    title: "Employees' Provident Fund",
    type: "Article",
    category: "Financial Literacy",
    source: "EPFO",
    url: "https://www.epfindia.gov.in/",
    description: "Official EPFO portal with information about provident fund, pension, and insurance schemes.",
    publishedDate: "2023-06-10",
    readTime: "8 min read",
    tags: ["Provident Fund", "Pension", "Government Portal"]
  },
  {
    id: "article-nps",
    title: "National Pension System",
    type: "Article",
    category: "Financial Literacy",
    source: "PFRDA",
    url: "https://www.pfrda.org.in/",
    description: "Official PFRDA portal with complete information about National Pension System.",
    publishedDate: "2023-05-15",
    readTime: "10 min read",
    tags: ["Pension", "Retirement", "Government Scheme"]
  },
  {
    id: "article-sebi",
    title: "SEBI Investor Education",
    type: "Article",
    category: "Financial Literacy",
    source: "SEBI",
    url: "https://investor.sebi.gov.in/",
    description: "Official SEBI investor education portal with comprehensive financial literacy resources.",
    publishedDate: "2023-04-20",
    readTime: "12 min read",
    tags: ["Investor Education", "Financial Literacy", "Government Portal"]
  },
  {
    id: "article-rbi",
    title: "RBI Financial Education",
    type: "Article",
    category: "Financial Literacy",
    source: "RBI",
    url: "https://www.rbi.org.in/scripts/BS_ViewBulletin.aspx?Id=21089",
    description: "Official RBI financial education resources and guidelines.",
    publishedDate: "2023-03-25",
    readTime: "10 min read",
    tags: ["Banking", "Financial Literacy", "Government Portal"]
  },
  {
    id: "article-green-bonds",
    title: "Green Bonds Framework",
    type: "Article",
    category: "Green Investment",
    source: "SEBI",
    url: "https://www.sebi.gov.in/sebi_data/attachdocs/1601286985815.pdf",
    description: "Official SEBI framework for green bonds in India.",
    publishedDate: "2023-02-15",
    readTime: "15 min read",
    tags: ["Green Bonds", "Sustainable Finance", "Government Guidelines"]
  },
  {
    id: "article-solar-energy",
    title: "Solar Energy in India",
    type: "Article",
    category: "Green Investment",
    source: "MNRE",
    url: "https://mnre.gov.in/solar/current-status/",
    description: "Official MNRE portal with information about solar energy initiatives and policies.",
    publishedDate: "2023-01-20",
    readTime: "12 min read",
    tags: ["Solar Energy", "Renewable Energy", "Government Portal"]
  },
  {
    id: "article-wind-energy",
    title: "Wind Energy in India",
    type: "Article",
    category: "Green Investment",
    source: "MNRE",
    url: "https://mnre.gov.in/wind/current-status/",
    description: "Official MNRE portal with information about wind energy initiatives and policies.",
    publishedDate: "2023-01-15",
    readTime: "10 min read",
    tags: ["Wind Energy", "Renewable Energy", "Government Portal"]
  },
  {
    id: "article-hydrogen-mission",
    title: "National Green Hydrogen Mission",
    type: "Article",
    category: "Green Investment",
    source: "MNRE",
    url: "https://mnre.gov.in/hydrogen-mission/",
    description: "Official information about India's National Green Hydrogen Mission.",
    publishedDate: "2023-01-10",
    readTime: "12 min read",
    tags: ["Green Hydrogen", "Renewable Energy", "Government Mission"]
  },
  {
    id: "article-atmanirbhar-bharat",
    title: "Atmanirbhar Bharat: Self-Reliant India Mission",
    type: "Article",
    category: "Government Schemes",
    source: "Ministry of Finance",
    url: "https://www.makeinindia.com/",
    description: "Official information about the Atmanirbhar Bharat initiative and its various components.",
    publishedDate: "2023-09-01",
    readTime: "12 min read",
    tags: ["Self-Reliance", "Economic Growth", "Government Initiative"]
  },
  {
    id: "article-startup-india",
    title: "Startup India: Complete Guide",
    type: "Article",
    category: "Government Schemes",
    source: "Startup India",
    url: "https://www.startupindia.gov.in/",
    description: "Official portal for Startup India initiative with complete information about benefits and registration.",
    publishedDate: "2023-08-15",
    readTime: "10 min read",
    tags: ["Startups", "Entrepreneurship", "Government Scheme"]
  },
  {
    id: "article-digital-india",
    title: "Digital India: Transforming India into a Digital Society",
    type: "Article",
    category: "Government Schemes",
    source: "Digital India",
    url: "https://digitalindia.gov.in/",
    description: "Official portal of Digital India initiative with information about various digital services and programs.",
    publishedDate: "2023-07-20",
    readTime: "8 min read",
    tags: ["Digital Transformation", "Technology", "Government Initiative"]
  },
  {
    id: "article-skill-india",
    title: "Skill India Mission: Empowering Youth with Skills",
    type: "Article",
    category: "Government Schemes",
    source: "Skill India",
    url: "https://www.skillindia.gov.in/",
    description: "Official portal of Skill India Mission with information about skill development programs.",
    publishedDate: "2023-06-25",
    readTime: "10 min read",
    tags: ["Skill Development", "Employment", "Government Scheme"]
  },
  {
    id: "article-standup-india",
    title: "Stand Up India: Supporting Entrepreneurship",
    type: "Article",
    category: "Government Schemes",
    source: "Stand Up India",
    url: "https://www.standupmitra.in/",
    description: "Official portal for Stand Up India scheme supporting SC/ST and women entrepreneurs.",
    publishedDate: "2023-05-30",
    readTime: "8 min read",
    tags: ["Entrepreneurship", "Loans", "Government Scheme"]
  },
  {
    id: "article-udan-scheme",
    title: "UDAN Scheme: Regional Connectivity",
    type: "Article",
    category: "Government Schemes",
    source: "Ministry of Civil Aviation",
    url: "https://www.udan.gov.in/",
    description: "Official information about UDAN (Ude Desh ka Aam Nagrik) scheme for regional air connectivity.",
    publishedDate: "2023-04-15",
    readTime: "10 min read",
    tags: ["Aviation", "Regional Development", "Government Scheme"]
  },
  {
    id: "article-sagarmala",
    title: "Sagarmala: Port-led Development",
    type: "Article",
    category: "Government Schemes",
    source: "Sagarmala",
    url: "https://sagarmala.gov.in/",
    description: "Official portal of Sagarmala initiative for port-led development and coastal community development.",
    publishedDate: "2023-03-20",
    readTime: "12 min read",
    tags: ["Port Development", "Infrastructure", "Government Initiative"]
  },
  {
    id: "article-bharatmala",
    title: "Bharatmala Pariyojana: Road Infrastructure",
    type: "Article",
    category: "Government Schemes",
    source: "Ministry of Road Transport",
    url: "https://www.bharatmala.gov.in/",
    description: "Official information about Bharatmala Pariyojana for road infrastructure development.",
    publishedDate: "2023-02-10",
    readTime: "10 min read",
    tags: ["Road Infrastructure", "Development", "Government Scheme"]
  },
  {
    id: "article-smart-cities",
    title: "Smart Cities Mission",
    type: "Article",
    category: "Government Schemes",
    source: "Smart Cities",
    url: "https://smartcities.gov.in/",
    description: "Official portal of Smart Cities Mission with information about urban development projects.",
    publishedDate: "2023-01-05",
    readTime: "12 min read",
    tags: ["Urban Development", "Smart Cities", "Government Initiative"]
  },
  {
    id: "article-amrut",
    title: "AMRUT: Urban Transformation",
    type: "Article",
    category: "Government Schemes",
    source: "AMRUT",
    url: "https://amrut.gov.in/",
    description: "Official portal of Atal Mission for Rejuvenation and Urban Transformation (AMRUT).",
    publishedDate: "2022-12-15",
    readTime: "8 min read",
    tags: ["Urban Development", "Infrastructure", "Government Scheme"]
  },
  {
    id: "article-rbi-monetary-policy",
    title: "RBI Monetary Policy Framework",
    type: "Article",
    category: "Financial Literacy",
    source: "RBI",
    url: "https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1213",
    description: "Official RBI document explaining the monetary policy framework and its impact on the economy.",
    publishedDate: "2023-09-10",
    readTime: "15 min read",
    tags: ["Monetary Policy", "Economy", "RBI"]
  },
  {
    id: "article-sebi-investor-protection",
    title: "SEBI Investor Protection Guidelines",
    type: "Article",
    category: "Financial Literacy",
    source: "SEBI",
    url: "https://www.sebi.gov.in/sebi_data/attachdocs/1601286985815.pdf",
    description: "Official SEBI guidelines for investor protection and education.",
    publishedDate: "2023-08-25",
    readTime: "12 min read",
    tags: ["Investor Protection", "Regulations", "SEBI"]
  },
  {
    id: "article-insurance-regulations",
    title: "IRDAI Insurance Regulations",
    type: "Article",
    category: "Financial Literacy",
    source: "IRDAI",
    url: "https://www.irdai.gov.in/ADMINCMS/cms/Regulation.aspx",
    description: "Official IRDAI regulations and guidelines for insurance sector.",
    publishedDate: "2023-07-30",
    readTime: "10 min read",
    tags: ["Insurance", "Regulations", "IRDAI"]
  },
  {
    id: "article-pension-reforms",
    title: "Pension Reforms in India",
    type: "Article",
    category: "Financial Literacy",
    source: "PFRDA",
    url: "https://www.pfrda.org.in/writereaddata/links/Annual%20Report%202022-23.pdf",
    description: "Official PFRDA annual report detailing pension reforms and developments.",
    publishedDate: "2023-06-20",
    readTime: "15 min read",
    tags: ["Pension", "Reforms", "PFRDA"]
  },
  {
    id: "article-green-energy-policy",
    title: "National Green Energy Policy",
    type: "Article",
    category: "Green Investment",
    source: "MNRE",
    url: "https://mnre.gov.in/policy/",
    description: "Official MNRE policy documents on renewable energy and green initiatives.",
    publishedDate: "2023-05-15",
    readTime: "12 min read",
    tags: ["Renewable Energy", "Policy", "MNRE"]
  },
  {
    id: "article-climate-change",
    title: "India's Climate Change Initiatives",
    type: "Article",
    category: "Green Investment",
    source: "Ministry of Environment",
    url: "https://moef.gov.in/en/division/climate-change/",
    description: "Official information about India's climate change initiatives and commitments.",
    publishedDate: "2023-04-10",
    readTime: "10 min read",
    tags: ["Climate Change", "Environment", "Government Initiative"]
  },
  {
    id: "article-waste-management",
    title: "National Waste Management Policy",
    type: "Article",
    category: "Green Investment",
    source: "Ministry of Environment",
    url: "https://moef.gov.in/en/division/waste-management/",
    description: "Official guidelines and policies for waste management in India.",
    publishedDate: "2023-03-05",
    readTime: "8 min read",
    tags: ["Waste Management", "Environment", "Government Policy"]
  },
  {
    id: "article-water-conservation",
    title: "National Water Conservation Mission",
    type: "Article",
    category: "Green Investment",
    source: "Ministry of Jal Shakti",
    url: "https://jalshakti-dowr.gov.in/",
    description: "Official information about water conservation initiatives and programs.",
    publishedDate: "2023-02-01",
    readTime: "10 min read",
    tags: ["Water Conservation", "Environment", "Government Mission"]
  },
  {
    id: "article-forest-conservation",
    title: "Forest Conservation Initiatives",
    type: "Article",
    category: "Green Investment",
    source: "Ministry of Environment",
    url: "https://moef.gov.in/en/division/forest-conservation/",
    description: "Official information about forest conservation and sustainable forestry initiatives.",
    publishedDate: "2023-01-15",
    readTime: "12 min read",
    tags: ["Forest Conservation", "Environment", "Government Initiative"]
  }
];
