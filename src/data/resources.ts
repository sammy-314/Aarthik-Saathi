
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

// Sample resources (adding 10 for brevity, but there would be 100)
export const resources: Resource[] = [
  {
    id: "article-pmkisan-explained",
    title: "PM-KISAN Scheme Explained: Eligibility, Benefits, and Application Process",
    type: "Article",
    category: "Government Schemes",
    source: "Financial Express",
    url: "https://example.com/pm-kisan-explained",
    description: "A comprehensive guide to the Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme, covering eligibility criteria, benefits, and step-by-step application process.",
    publishedDate: "2023-06-15",
    readTime: "8 min read",
    tags: ["Agriculture", "Farmer Welfare", "Rural Development", "Government Scheme"]
  },
  {
    id: "video-budget-impact-middle-class",
    title: "Budget 2023: Impact on Middle Class Families Explained",
    type: "Video",
    category: "Budget",
    source: "Economic Times",
    url: "https://example.com/budget-impact-video",
    description: "An expert analysis of how the latest Union Budget affects middle-class families, focusing on tax implications, savings opportunities, and key policy changes.",
    publishedDate: "2023-02-02",
    duration: "15:24",
    tags: ["Union Budget", "Middle Class", "Tax Planning", "Financial Planning"]
  },
  {
    id: "blog-tax-saving-investments",
    title: "10 Best Tax-Saving Investment Options for Salaried Individuals",
    type: "Blog",
    category: "Income Tax",
    source: "Mint Money",
    url: "https://example.com/tax-saving-investments",
    description: "Discover the top tax-saving investment options available for salaried individuals, with detailed analysis of returns, risks, and tax benefits.",
    publishedDate: "2023-07-10",
    readTime: "12 min read",
    tags: ["Tax Saving", "Investment", "Section 80C", "Financial Planning"]
  },
  {
    id: "article-green-bonds-india",
    title: "Green Bonds in India: A Growing Sustainable Investment Avenue",
    type: "Article",
    category: "Green Investment",
    source: "Business Standard",
    url: "https://example.com/green-bonds-india",
    description: "An in-depth look at the growing market for green bonds in India, their impact on sustainability, and how retail investors can participate in this eco-friendly investment option.",
    publishedDate: "2023-04-22",
    readTime: "10 min read",
    tags: ["Green Finance", "Bonds", "Sustainable Investment", "Climate Finance"]
  },
  {
    id: "podcast-ayushman-bharat-scheme",
    title: "Understanding Ayushman Bharat: India's Healthcare Revolution",
    type: "Podcast",
    category: "Government Schemes",
    source: "Healthcare Policy Matters",
    url: "https://example.com/ayushman-bharat-podcast",
    description: "A detailed discussion with policy experts on the Ayushman Bharat scheme, its implementation, benefits, and impact on healthcare accessibility in India.",
    publishedDate: "2023-05-05",
    duration: "45:12",
    tags: ["Healthcare", "Health Insurance", "Public Health", "Government Scheme"]
  },
  {
    id: "video-new-tax-regime-explained",
    title: "New vs Old Tax Regime: Which One Should You Choose?",
    type: "Video",
    category: "Income Tax",
    source: "Tax Guru",
    url: "https://example.com/tax-regime-comparison",
    description: "A comparative analysis of India's new and old tax regimes, helping you decide which option is better suited for your financial situation.",
    publishedDate: "2023-03-15",
    duration: "18:30",
    tags: ["Tax Planning", "Income Tax", "Tax Regime", "Personal Finance"]
  },
  {
    id: "blog-union-budget-agriculture",
    title: "Union Budget 2023: Key Initiatives for Agricultural Sector",
    type: "Blog",
    category: "Budget",
    source: "Agriculture Today",
    url: "https://example.com/budget-agriculture",
    description: "Analysis of the key budget provisions for agriculture, including credit availability, infrastructure development, and new schemes for farmers.",
    publishedDate: "2023-02-10",
    readTime: "9 min read",
    tags: ["Agriculture", "Farmer Welfare", "Union Budget", "Rural Economy"]
  },
  {
    id: "infographic-solar-investment",
    title: "Solar Energy Investment in India: Growth Trends and Opportunities",
    type: "Infographic",
    category: "Green Investment",
    source: "Renewable Energy World",
    url: "https://example.com/solar-investment-infographic",
    description: "A visual representation of the growth trends, investment opportunities, and government incentives in India's solar energy sector.",
    publishedDate: "2023-06-30",
    tags: ["Solar Energy", "Renewable Energy", "Green Investment", "Sustainable Development"]
  },
  {
    id: "article-pmay-housing-scheme",
    title: "PMAY Housing Scheme: A Step Towards Housing for All",
    type: "Article",
    category: "Government Schemes",
    source: "Housing.com",
    url: "https://example.com/pmay-housing",
    description: "Detailed information about the Pradhan Mantri Awas Yojana (PMAY), including eligibility, subsidy benefits, and application procedure for urban and rural beneficiaries.",
    publishedDate: "2023-07-22",
    readTime: "11 min read",
    tags: ["Housing", "Urban Development", "Rural Housing", "Government Scheme"]
  },
  {
    id: "blog-financial-planning-beginners",
    title: "Financial Planning 101: A Beginner's Guide to Securing Your Future",
    type: "Blog",
    category: "Financial Literacy",
    source: "Personal Finance Club",
    url: "https://example.com/financial-planning-beginners",
    description: "An easy-to-follow guide for beginners on financial planning, covering budgeting, saving, investing, insurance, and retirement planning.",
    publishedDate: "2023-05-18",
    readTime: "15 min read",
    tags: ["Financial Planning", "Personal Finance", "Investing", "Savings"]
  },
  // Additional resources would be added here to reach 100
];
