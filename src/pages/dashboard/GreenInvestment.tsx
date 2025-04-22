import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, TrendingUp, Leaf, BarChart } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { GreenInvestment as InvestmentType, greenInvestments } from '@/data/green-investments';

// Helper function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const getRiskBadgeColor = (risk: string) => {
  switch (risk) {
    case 'Low':
      return 'bg-green-100 text-green-800 hover:bg-green-100';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
    case 'High':
      return 'bg-red-100 text-red-800 hover:bg-red-100';
    default:
      return '';
  }
};

const InvestmentCard = ({ investment }: { investment: InvestmentType }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{investment.name}</CardTitle>
          <Badge variant="outline">{investment.type}</Badge>
        </div>
        <CardDescription>
          <div className="flex flex-wrap gap-1 mt-1">
            <Badge variant="outline" className={getRiskBadgeColor(investment.riskLevel)}>
              {investment.riskLevel} Risk
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              {investment.investmentPeriod}
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 pb-4 flex-grow">
        <p className="text-sm mb-4">{investment.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Expected Returns:</span>
            <span className="font-medium text-sm flex items-center gap-1">
              <TrendingUp className="h-3.5 w-3.5 text-green-600" />
              {investment.expectedReturns}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Min Investment:</span>
            <span className="font-medium text-sm">{formatCurrency(investment.minimumInvestment)}</span>
          </div>
        </div>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="text-sm font-medium mb-2">Environmental Impact</h4>
            <p className="text-sm mb-3">{investment.sustainability.environmentalImpact}</p>
            
            <h4 className="text-sm font-medium mb-2">SDG Goals</h4>
            <div className="flex flex-wrap gap-1 mb-3">
              {investment.sustainability.sdgGoals.map((goal, index) => (
                <Badge key={index} variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                  {goal}
                </Badge>
              ))}
            </div>
            
            <h4 className="text-sm font-medium mb-2">Sector Focus</h4>
            <div className="flex flex-wrap gap-1">
              {investment.sectorFocus.map((sector, index) => (
                <Badge key={index} variant="outline">
                  {sector}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 mt-auto">
        <div className="w-full grid grid-cols-2 gap-2">
          <Button
            variant="outline" 
            className="w-full"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Show Less' : 'Show More'}
          </Button>
          <Button 
            className="w-full bg-secondary"
            onClick={() => window.open(investment.url, '_blank')}
          >
            Learn More
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const GreenInvestmentPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedRisk, setSelectedRisk] = useState<string>('');
  const [selectedSector, setSelectedSector] = useState<string>('');
  
  // Extract unique values for filters
  const sectors = useMemo(() => {
    const sectorSet = new Set<string>();
    greenInvestments.forEach(investment => {
      investment.sectorFocus.forEach(sector => sectorSet.add(sector));
    });
    return Array.from(sectorSet).sort();
  }, []);
  
  const types = useMemo(() => {
    const typeSet = new Set(greenInvestments.map(investment => investment.type));
    return Array.from(typeSet).sort();
  }, []);
  
  // Filter investments based on search and filters
  const filteredInvestments = useMemo(() => {
    let result = searchQuery.trim() === '' ? greenInvestments : 
      greenInvestments.filter(investment => 
        investment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        investment.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    if (selectedType) {
      result = result.filter(investment => investment.type === selectedType);
    }
    
    if (selectedRisk) {
      result = result.filter(investment => investment.riskLevel === selectedRisk);
    }
    
    if (selectedSector) {
      result = result.filter(investment => investment.sectorFocus.includes(selectedSector));
    }
    
    return result;
  }, [searchQuery, selectedType, selectedRisk, selectedSector]);
  
  // Group investments by risk for the overview tab
  const investmentsByRisk = useMemo(() => {
    return {
      low: greenInvestments.filter(i => i.riskLevel === 'Low'),
      medium: greenInvestments.filter(i => i.riskLevel === 'Medium'),
      high: greenInvestments.filter(i => i.riskLevel === 'High')
    };
  }, []);
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Green Investment Opportunities</h1>
          <p className="text-muted-foreground">
            Explore eco-friendly investment options with potential for sustainable returns
          </p>
        </div>
        
        {/* Investment Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Renewable Energy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center gap-2 text-green-600">
                <Leaf className="h-5 w-5" />
                {greenInvestments.filter(i => i.sectorFocus.some(s => 
                  ['Solar Energy', 'Wind Energy', 'Hydro Power', 'Clean Energy'].includes(s)
                )).length}
              </div>
              <p className="text-xs text-muted-foreground">investment opportunities</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Sustainable Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center gap-2 text-green-600">
                <BarChart className="h-5 w-5" />
                {greenInvestments.filter(i => i.sectorFocus.some(s => 
                  ['Green Infrastructure', 'Sustainable Cities', 'Waste Management', 'Clean Transportation'].includes(s)
                )).length}
              </div>
              <p className="text-xs text-muted-foreground">investment opportunities</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Expected Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center gap-2 text-green-600">
                <TrendingUp className="h-5 w-5" />
                10-15%
              </div>
              <p className="text-xs text-muted-foreground">potential annual returns</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <TabsList className="mb-0">
              <TabsTrigger value="all">All Investments</TabsTrigger>
              <TabsTrigger value="by-risk">By Risk Level</TabsTrigger>
            </TabsList>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search investments..."
                  className="pl-9 w-full md:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Investment Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedRisk} onValueChange={setSelectedRisk}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Risk Levels</SelectItem>
                  <SelectItem value="Low">Low Risk</SelectItem>
                  <SelectItem value="Medium">Medium Risk</SelectItem>
                  <SelectItem value="High">High Risk</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="w-full md:w-[230px]">
                  <SelectValue placeholder="Sector Focus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Sectors</SelectItem>
                  {sectors.map((sector) => (
                    <SelectItem key={sector} value={sector}>
                      {sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <TabsContent value="all" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInvestments.length > 0 ? (
                filteredInvestments.map((investment) => (
                  <InvestmentCard key={investment.id} investment={investment} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No investments found matching your search criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedType('');
                      setSelectedRisk('');
                      setSelectedSector('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="by-risk" className="m-0">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                    Low Risk
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    Conservative investments with stable returns
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {investmentsByRisk.low.map((investment) => (
                    <InvestmentCard key={investment.id} investment={investment} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    Medium Risk
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    Balanced investments with moderate growth potential
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {investmentsByRisk.medium.map((investment) => (
                    <InvestmentCard key={investment.id} investment={investment} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
                    High Risk
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    Growth-focused investments with higher potential returns
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {investmentsByRisk.high.map((investment) => (
                    <InvestmentCard key={investment.id} investment={investment} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default GreenInvestmentPage;
