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
  {
    id: "article-mutual-funds-basics",
    title: "Understanding Mutual Funds: A Complete Guide for Beginners",
    type: "Article",
    category: "Financial Literacy",
    source: "Money Control",
    url: "https://example.com/mutual-funds-basics",
    description: "A comprehensive guide to mutual funds, explaining different types, risk factors, and how to start investing in them.",
    publishedDate: "2023-08-10",
    readTime: "12 min read",
    tags: ["Mutual Funds", "Investing", "Financial Education", "Wealth Creation"]
  },
  {
    id: "video-stock-market-basics",
    title: "Stock Market Basics: How to Start Investing in Stocks",
    type: "Video",
    category: "Financial Literacy",
    source: "Zerodha Varsity",
    url: "https://example.com/stock-market-basics",
    description: "A beginner-friendly video series explaining stock market fundamentals, trading basics, and investment strategies.",
    publishedDate: "2023-07-05",
    duration: "25:15",
    tags: ["Stock Market", "Trading", "Investing", "Financial Education"]
  },
  {
    id: "podcast-retirement-planning",
    title: "Retirement Planning in India: Strategies for a Secure Future",
    type: "Podcast",
    category: "Financial Literacy",
    source: "Financial Freedom Podcast",
    url: "https://example.com/retirement-planning",
    description: "Expert discussion on retirement planning strategies, pension schemes, and investment options for a secure retirement.",
    publishedDate: "2023-06-20",
    duration: "38:45",
    tags: ["Retirement", "Pension", "Financial Planning", "Long-term Investment"]
  },
  {
    id: "infographic-tax-saving-options",
    title: "Tax Saving Options in India: A Visual Guide",
    type: "Infographic",
    category: "Income Tax",
    source: "Tax Guru",
    url: "https://example.com/tax-saving-options",
    description: "Visual representation of various tax-saving investment options under different sections of the Income Tax Act.",
    publishedDate: "2023-08-15",
    tags: ["Tax Planning", "Section 80C", "Tax Deductions", "Investment"]
  },
  {
    id: "article-digital-payment-security",
    title: "Digital Payment Security: Best Practices for Safe Transactions",
    type: "Article",
    category: "Financial Literacy",
    source: "Digital Payments Today",
    url: "https://example.com/digital-payment-security",
    description: "Essential tips and best practices for securing your digital payments and protecting against fraud.",
    publishedDate: "2023-07-25",
    readTime: "8 min read",
    tags: ["Digital Payments", "Security", "Fraud Prevention", "Online Banking"]
  },
  {
    id: "blog-real-estate-investment",
    title: "Real Estate Investment in India: A Comprehensive Guide",
    type: "Blog",
    category: "Financial Literacy",
    source: "Property Insights",
    url: "https://example.com/real-estate-investment",
    description: "Detailed guide on real estate investment opportunities, market trends, and factors to consider before investing.",
    publishedDate: "2023-08-05",
    readTime: "14 min read",
    tags: ["Real Estate", "Property Investment", "Market Analysis", "Investment Strategy"]
  },
  {
    id: "video-gold-investment-options",
    title: "Gold Investment Options in India: Which One is Right for You?",
    type: "Video",
    category: "Financial Literacy",
    source: "Gold Investment Guide",
    url: "https://example.com/gold-investment-options",
    description: "Comparison of different gold investment options including physical gold, gold ETFs, and sovereign gold bonds.",
    publishedDate: "2023-07-15",
    duration: "20:10",
    tags: ["Gold Investment", "Gold ETFs", "Sovereign Gold Bonds", "Commodity Investment"]
  },
  {
    id: "article-insurance-planning",
    title: "Insurance Planning: Protecting Your Financial Future",
    type: "Article",
    category: "Financial Literacy",
    source: "Insurance Times",
    url: "https://example.com/insurance-planning",
    description: "Comprehensive guide to different types of insurance and how to choose the right coverage for your needs.",
    publishedDate: "2023-08-12",
    readTime: "10 min read",
    tags: ["Insurance", "Life Insurance", "Health Insurance", "Financial Protection"]
  },
  {
    id: "podcast-wealth-management",
    title: "Wealth Management Strategies for Indian Investors",
    type: "Podcast",
    category: "Financial Literacy",
    source: "Wealth Matters",
    url: "https://example.com/wealth-management",
    description: "Expert discussion on wealth management strategies, asset allocation, and long-term financial planning.",
    publishedDate: "2023-07-30",
    duration: "42:20",
    tags: ["Wealth Management", "Asset Allocation", "Financial Planning", "Investment Strategy"]
  },
  {
    id: "article-cryptocurrency-investment",
    title: "Cryptocurrency Investment in India: Risks and Opportunities",
    type: "Article",
    category: "Financial Literacy",
    source: "Crypto Insights",
    url: "https://example.com/crypto-investment",
    description: "A comprehensive guide to cryptocurrency investment in India, covering regulations, risks, and investment strategies.",
    publishedDate: "2023-08-20",
    readTime: "15 min read",
    tags: ["Cryptocurrency", "Blockchain", "Digital Assets", "Investment"]
  },
  {
    id: "video-fixed-deposits-comparison",
    title: "Fixed Deposits: Comparing Banks and Interest Rates",
    type: "Video",
    category: "Financial Literacy",
    source: "Banking Today",
    url: "https://example.com/fixed-deposits-comparison",
    description: "Detailed comparison of fixed deposit schemes across major banks, including interest rates and features.",
    publishedDate: "2023-08-08",
    duration: "12:45",
    tags: ["Fixed Deposits", "Banking", "Interest Rates", "Safe Investment"]
  },
  {
    id: "blog-sip-investment-guide",
    title: "Systematic Investment Plans (SIP): A Complete Guide",
    type: "Blog",
    category: "Financial Literacy",
    source: "Investment Guru",
    url: "https://example.com/sip-guide",
    description: "Everything you need to know about SIP investments, including benefits, types, and how to start.",
    publishedDate: "2023-08-25",
    readTime: "10 min read",
    tags: ["SIP", "Mutual Funds", "Regular Investment", "Wealth Creation"]
  },
  {
    id: "infographic-debt-management",
    title: "Debt Management: A Visual Guide to Getting Out of Debt",
    type: "Infographic",
    category: "Financial Literacy",
    source: "Debt Free India",
    url: "https://example.com/debt-management",
    description: "Visual guide to managing and reducing debt, including strategies and tools for debt repayment.",
    publishedDate: "2023-08-18",
    tags: ["Debt Management", "Personal Finance", "Financial Freedom", "Debt Repayment"]
  },
  {
    id: "article-nps-explained",
    title: "National Pension System (NPS): A Complete Guide",
    type: "Article",
    category: "Financial Literacy",
    source: "Pension Matters",
    url: "https://example.com/nps-guide",
    description: "Detailed explanation of the National Pension System, its benefits, and how to invest in it.",
    publishedDate: "2023-08-22",
    readTime: "12 min read",
    tags: ["NPS", "Pension", "Retirement Planning", "Government Scheme"]
  },
  {
    id: "video-credit-score-improvement",
    title: "How to Improve Your Credit Score: A Step-by-Step Guide",
    type: "Video",
    category: "Financial Literacy",
    source: "Credit Score Academy",
    url: "https://example.com/credit-score-improvement",
    description: "Practical tips and strategies to improve your credit score and maintain good credit health.",
    publishedDate: "2023-08-15",
    duration: "18:30",
    tags: ["Credit Score", "Credit Health", "Financial Planning", "Loan Eligibility"]
  },
  {
    id: "podcast-entrepreneur-finance",
    title: "Financial Management for Entrepreneurs and Startups",
    type: "Podcast",
    category: "Financial Literacy",
    source: "Startup Finance",
    url: "https://example.com/entrepreneur-finance",
    description: "Expert advice on financial management for entrepreneurs, covering funding, cash flow, and growth strategies.",
    publishedDate: "2023-08-28",
    duration: "45:15",
    tags: ["Entrepreneurship", "Startup Finance", "Business Growth", "Financial Management"]
  },
  {
    id: "blog-education-loan-guide",
    title: "Education Loans in India: A Complete Guide",
    type: "Blog",
    category: "Financial Literacy",
    source: "Education Finance",
    url: "https://example.com/education-loan-guide",
    description: "Comprehensive guide to education loans, including eligibility, interest rates, and repayment options.",
    publishedDate: "2023-08-30",
    readTime: "14 min read",
    tags: ["Education Loan", "Student Finance", "Higher Education", "Loan Planning"]
  },
  {
    id: "article-forex-trading-basics",
    title: "Forex Trading in India: A Beginner's Guide",
    type: "Article",
    category: "Financial Literacy",
    source: "Forex Trading India",
    url: "https://example.com/forex-trading-basics",
    description: "Introduction to forex trading in India, covering regulations, risks, and basic trading strategies.",
    publishedDate: "2023-09-01",
    readTime: "16 min read",
    tags: ["Forex Trading", "Currency Trading", "Investment", "Trading Strategies"]
  },
  // Additional resources would be added here to reach 100
];
