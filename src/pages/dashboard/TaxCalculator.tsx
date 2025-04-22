import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { CheckCircle2, IndianRupee } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

// Helper function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

// Individual tax calculator component
const IndividualTaxCalculator = () => {
  // Basic income details
  const [salary, setSalary] = useState<number>(0);
  const [otherIncome, setOtherIncome] = useState<number>(0);
  
  // Tax regime
  const [taxRegime, setTaxRegime] = useState<'old' | 'new'>('new');
  
  // Deductions (for old regime)
  const [standardDeduction] = useState<number>(50000); // Fixed as per rules
  const [section80C, setSection80C] = useState<number>(0);
  const [section80D, setSection80D] = useState<number>(0);
  const [homeInterest, setHomeInterest] = useState<number>(0);
  const [educationLoan, setEducationLoan] = useState<number>(0);
  const [otherDeductions, setOtherDeductions] = useState<number>(0);
  
  // Calculate taxable income
  const calculateTaxableIncome = () => {
    const grossIncome = salary + otherIncome;
    
    if (taxRegime === 'new') {
      // Apply standard deduction of ₹50,000 for new regime
      return Math.max(0, grossIncome - standardDeduction);
    } else {
      // Apply all deductions for old regime
      const totalDeductions = standardDeduction + 
        Math.min(section80C, 150000) + // 80C capped at 1.5L
        section80D + 
        Math.min(homeInterest, 200000) + // Home loan interest capped at 2L
        educationLoan + 
        otherDeductions;
      
      return Math.max(0, grossIncome - totalDeductions);
    }
  };
  
  // Calculate tax
  const calculateTax = () => {
    const taxableIncome = calculateTaxableIncome();
    let tax = 0;
    
    if (taxRegime === 'new') {
      // New Regime Tax Slabs for FY 2023-24 (A.Y. 2024-25)
      if (taxableIncome <= 300000) {
        tax = 0;
      } else if (taxableIncome <= 600000) {
        tax = (taxableIncome - 300000) * 0.05;
      } else if (taxableIncome <= 900000) {
        tax = 15000 + (taxableIncome - 600000) * 0.1;
      } else if (taxableIncome <= 1200000) {
        tax = 45000 + (taxableIncome - 900000) * 0.15;
      } else if (taxableIncome <= 1500000) {
        tax = 90000 + (taxableIncome - 1200000) * 0.2;
      } else {
        tax = 150000 + (taxableIncome - 1500000) * 0.3;
      }
    } else {
      // Old Regime Tax Slabs for FY 2023-24 (A.Y. 2024-25)
      if (taxableIncome <= 250000) {
        tax = 0;
      } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
      } else if (taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.2;
      } else {
        tax = 112500 + (taxableIncome - 1000000) * 0.3;
      }
    }
    
    // Apply rebate if applicable (for both regimes)
    if (taxRegime === 'new' && taxableIncome <= 700000) {
      tax = 0;
    } else if (taxRegime === 'old' && taxableIncome <= 500000) {
      tax = 0;
    }
    
    // Calculate cess (4% Health and Education Cess)
    const cess = tax * 0.04;
    
    // Calculate surcharge based on income
    let surcharge = 0;
    if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
      surcharge = tax * 0.1;
    } else if (taxableIncome > 10000000 && taxableIncome <= 20000000) {
      surcharge = tax * 0.15;
    } else if (taxableIncome > 20000000 && taxableIncome <= 50000000) {
      surcharge = tax * 0.25;
    } else if (taxableIncome > 50000000) {
      surcharge = tax * 0.37;
    }
    
    // Calculate total tax including cess and surcharge
    const totalTax = tax + cess + surcharge;
    
    return {
      taxableIncome,
      basicTax: tax,
      cess,
      surcharge,
      totalTax
    };
  };
  
  const taxDetails = calculateTax();
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Income Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Income Details</CardTitle>
            <CardDescription>Enter your income from all sources</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="salary">Salary Income</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="salary"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={salary || ''}
                  onChange={(e) => setSalary(Number(e.target.value) || 0)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="other-income">Other Income</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="other-income"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={otherIncome || ''}
                  onChange={(e) => setOtherIncome(Number(e.target.value) || 0)}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Include rental income, interest, capital gains, etc.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tax-regime">Tax Regime</Label>
              <Select 
                value={taxRegime} 
                onValueChange={(value) => setTaxRegime(value as 'old' | 'new')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select tax regime" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New Regime</SelectItem>
                  <SelectItem value="old">Old Regime (with deductions)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        
        {/* Deductions (Only for Old Regime) */}
        <Card className={taxRegime === 'old' ? 'opacity-100' : 'opacity-50 pointer-events-none'}>
          <CardHeader>
            <CardTitle className="text-xl">Deductions</CardTitle>
            <CardDescription>
              Standard deduction of ₹50,000 is applied automatically
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="section-80c">Section 80C (max ₹1,50,000)</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="section-80c"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={section80C || ''}
                  onChange={(e) => setSection80C(Number(e.target.value) || 0)}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                PPF, ELSS, Life Insurance, etc.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="section-80d">Section 80D (Health Insurance)</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="section-80d"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={section80D || ''}
                  onChange={(e) => setSection80D(Number(e.target.value) || 0)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="home-interest">Home Loan Interest (max ₹2,00,000)</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="home-interest"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={homeInterest || ''}
                  onChange={(e) => setHomeInterest(Number(e.target.value) || 0)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="education-loan">Education Loan Interest</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="education-loan"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={educationLoan || ''}
                  onChange={(e) => setEducationLoan(Number(e.target.value) || 0)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="other-deductions">Other Deductions</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="other-deductions"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={otherDeductions || ''}
                  onChange={(e) => setOtherDeductions(Number(e.target.value) || 0)}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                NPS, 80G donations, etc.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Tax Calculation Results */}
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Tax Calculation</CardTitle>
          <CardDescription>
            Based on FY 2023-24 tax rates using {taxRegime === 'new' ? 'new' : 'old'} regime
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Gross Income</p>
                <p className="text-lg font-medium">{formatCurrency(salary + otherIncome)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Taxable Income</p>
                <p className="text-lg font-medium">{formatCurrency(taxDetails.taxableIncome)}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Basic Tax</p>
                <p>{formatCurrency(taxDetails.basicTax)}</p>
              </div>
              <div className="flex justify-between">
                <p>Health & Education Cess (4%)</p>
                <p>{formatCurrency(taxDetails.cess)}</p>
              </div>
              <div className="flex justify-between">
                <p>Surcharge</p>
                <p>{formatCurrency(taxDetails.surcharge)}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Total Tax Liability</p>
              <p className="text-xl font-bold text-secondary">{formatCurrency(taxDetails.totalTax)}</p>
            </div>
            
            {/* Tax Saving Note */}
            {taxRegime === 'new' && (
              <div className="mt-4 text-sm p-3 bg-background rounded-md">
                <p className="font-medium mb-1">Note:</p>
                <p>Switch to the old regime to see potential tax savings through deductions.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Business tax calculator component
const BusinessTaxCalculator = () => {
  // Basic income details
  const [businessIncome, setBusinessIncome] = useState<number>(0);
  const [businessExpenses, setBusinessExpenses] = useState<number>(0);
  const [businessType, setBusinessType] = useState<string>('proprietorship');
  const [turnover, setTurnover] = useState<number>(0);
  
  // Tax calculations for business
  const calculateBusinessTax = () => {
    const netBusinessIncome = businessIncome - businessExpenses;
    
    let taxableIncome = netBusinessIncome;
    let taxRate = 0.3; // Default 30% for most businesses
    let tax = 0;
    
    // Apply presumptive taxation for eligible small businesses
    if (businessType === 'proprietorship' && turnover <= 2000000) {
      // 8% of turnover or 6% if digital transactions
      taxableIncome = Math.max(turnover * 0.08, netBusinessIncome);
    }
    
    // Apply tax slabs based on type
    if (businessType === 'proprietorship') {
      // Use individual tax slabs
      if (taxableIncome <= 250000) {
        tax = 0;
      } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
      } else if (taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.2;
      } else {
        tax = 112500 + (taxableIncome - 1000000) * 0.3;
      }
    } else if (businessType === 'partnership') {
      // Flat 30% on taxable income
      tax = taxableIncome * 0.3;
    } else if (businessType === 'company-domestic') {
      // 25% for companies with turnover <= 400Cr
      taxRate = turnover <= 4000000000 ? 0.25 : 0.3;
      tax = taxableIncome * taxRate;
    }
    
    // Calculate cess (4% Health and Education Cess)
    const cess = tax * 0.04;
    
    // Calculate surcharge based on income and business type
    let surcharge = 0;
    if (businessType === 'company-domestic') {
      if (taxableIncome > 10000000 && taxableIncome <= 100000000) {
        surcharge = tax * 0.07;
      } else if (taxableIncome > 100000000) {
        surcharge = tax * 0.12;
      }
    } else {
      if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
        surcharge = tax * 0.1;
      } else if (taxableIncome > 10000000 && taxableIncome <= 20000000) {
        surcharge = tax * 0.15;
      } else if (taxableIncome > 20000000 && taxableIncome <= 50000000) {
        surcharge = tax * 0.25;
      } else if (taxableIncome > 50000000) {
        surcharge = tax * 0.37;
      }
    }
    
    const totalTax = tax + cess + surcharge;
    
    return {
      taxableIncome,
      basicTax: tax,
      taxRate,
      cess,
      surcharge,
      totalTax
    };
  };
  
  const taxDetails = calculateBusinessTax();
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Business Income Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Business Details</CardTitle>
            <CardDescription>Enter your business financial information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="business-type">Business Type</Label>
              <Select 
                value={businessType} 
                onValueChange={setBusinessType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="proprietorship">Proprietorship / Individual</SelectItem>
                  <SelectItem value="partnership">Partnership Firm</SelectItem>
                  <SelectItem value="company-domestic">Domestic Company</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="turnover">Annual Turnover</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="turnover"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={turnover || ''}
                  onChange={(e) => setTurnover(Number(e.target.value) || 0)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="business-income">Business Income</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="business-income"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={businessIncome || ''}
                  onChange={(e) => setBusinessIncome(Number(e.target.value) || 0)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="business-expenses">Business Expenses</Label>
              <div className="relative">
                <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="business-expenses"
                  type="number"
                  placeholder="0"
                  className="pl-9"
                  value={businessExpenses || ''}
                  onChange={(e) => setBusinessExpenses(Number(e.target.value) || 0)}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Include all eligible business expenses and deductions
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Tax Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Available Tax Benefits</CardTitle>
            <CardDescription>Benefits based on business type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {businessType === 'proprietorship' && (
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Presumptive Taxation (Section 44AD)</p>
                    <p className="text-sm text-muted-foreground">
                      If turnover is up to ₹2 crore, tax on 8% of turnover (6% for digital transactions).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Standard Deduction</p>
                    <p className="text-sm text-muted-foreground">
                      Eligible for standard deduction and other individual benefits.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {businessType === 'partnership' && (
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Partner Salary Deduction</p>
                    <p className="text-sm text-muted-foreground">
                      Salary to partners can be deducted from firm's profits (subject to limits).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Interest to Partners</p>
                    <p className="text-sm text-muted-foreground">
                      Interest up to 12% paid to partners is deductible.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {businessType === 'company-domestic' && (
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Lower Tax Rate</p>
                    <p className="text-sm text-muted-foreground">
                      25% tax rate for companies with turnover up to ₹400 crore.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Section 115BAA Option</p>
                    <p className="text-sm text-muted-foreground">
                      Flat 22% tax rate (effective ~25.17% with cess) with no exemptions/deductions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Depreciation</p>
                    <p className="text-sm text-muted-foreground">
                      Eligible for depreciation on fixed assets.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Tax Calculation Results */}
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-xl">Tax Calculation</CardTitle>
          <CardDescription>
            Based on FY 2023-24 tax rates for {businessType === 'proprietorship' ? 'Individual' : businessType === 'partnership' ? 'Partnership Firm' : 'Domestic Company'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Net Business Income</p>
                <p className="text-lg font-medium">{formatCurrency(businessIncome - businessExpenses)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Taxable Income</p>
                <p className="text-lg font-medium">{formatCurrency(taxDetails.taxableIncome)}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Basic Tax {businessType === 'proprietorship' ? '(Slab based)' : `(@ ${(taxDetails.taxRate * 100).toFixed(0)}%)`}</p>
                <p>{formatCurrency(taxDetails.basicTax)}</p>
              </div>
              <div className="flex justify-between">
                <p>Health & Education Cess (4%)</p>
                <p>{formatCurrency(taxDetails.cess)}</p>
              </div>
              <div className="flex justify-between">
                <p>Surcharge</p>
                <p>{formatCurrency(taxDetails.surcharge)}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Total Tax Liability</p>
              <p className="text-xl font-bold text-secondary">{formatCurrency(taxDetails.totalTax)}</p>
            </div>
            
            {/* Business Tax Note */}
            <div className="mt-4 text-sm p-3 bg-background rounded-md">
              <p className="font-medium mb-1">Note:</p>
              <p>This is a simplified calculation. Please consult a tax professional for detailed advice based on your specific business situation.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const TaxCalculator = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Income Tax Calculator</h1>
          <p className="text-muted-foreground">
            Calculate your tax liability based on current rates
          </p>
        </div>
        
        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="individual">Individual</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>
          
          <TabsContent value="individual" className="m-0">
            <IndividualTaxCalculator />
          </TabsContent>
          
          <TabsContent value="business" className="m-0">
            <BusinessTaxCalculator />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default TaxCalculator;
