import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Search, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { BudgetProvision, budgetProvisions } from '@/data/budget-provisions';
import { useProfile } from '@/contexts/ProfileContext';

const BudgetProvisionCard = ({ provision }: { provision: BudgetProvision }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{provision.title}</CardTitle>
          <Badge 
            variant={
              provision.impact === 'positive' 
                ? 'default' 
                : provision.impact === 'negative' 
                  ? 'destructive' 
                  : 'outline'
            }
            className={
              provision.impact === 'positive' 
                ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                : provision.impact === 'negative' 
                  ? 'bg-red-100 text-red-800 hover:bg-red-100' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-100'
            }
          >
            <span className="flex items-center gap-1">
              {provision.impact === 'positive' && <TrendingUp className="h-3 w-3" />}
              {provision.impact === 'negative' && <TrendingDown className="h-3 w-3" />}
              {provision.impact === 'neutral' && <Minus className="h-3 w-3" />}
              {provision.impact.charAt(0).toUpperCase() + provision.impact.slice(1)}
            </span>
          </Badge>
        </div>
        <CardDescription>
          <Badge variant="outline">{provision.sector}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 pb-4 flex-grow">
        <p className="text-sm">{provision.description}</p>
      </CardContent>
    </Card>
  );
};

const Budget = () => {
  const { profile } = useProfile();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [selectedImpact, setSelectedImpact] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<'relevant' | 'all'>('relevant');
  
  // Extract unique sectors for filter
  const sectors = useMemo(() => {
    const sectorSet = new Set(budgetProvisions.map(provision => provision.sector));
    return Array.from(sectorSet);
  }, []);
  
  // Filter provisions based on profile
  const relevantProvisions = useMemo(() => {
    if (!profile) return [];
    
    return budgetProvisions.filter(provision => {
      const { applicableTo } = provision;
      
      // Check income eligibility
      if (applicableTo.incomeRange && profile.income) {
        const [minIncome, maxIncome] = applicableTo.incomeRange;
        if (profile.income < minIncome) {
          return false;
        }
        if (maxIncome !== null && profile.income > maxIncome) {
          return false;
        }
      }
      
      // Check category eligibility
      if (applicableTo.categories && profile.category && !applicableTo.categories.includes(profile.category)) {
        return false;
      }
      
      // Check occupation eligibility
      if (applicableTo.occupation && profile.occupation && !applicableTo.occupation.includes(profile.occupation)) {
        return false;
      }
      
      // Check age eligibility
      if (applicableTo.ageGroup && profile.age) {
        const [minAge, maxAge] = applicableTo.ageGroup;
        if (profile.age < minAge) {
          return false;
        }
        if (maxAge !== null && profile.age > maxAge) {
          return false;
        }
      }
      
      // Check gender eligibility
      if (applicableTo.gender && profile.gender && !applicableTo.gender.includes(profile.gender)) {
        return false;
      }
      
      return true;
    });
  }, [profile]);
  
  // Filter provisions based on search and filters
  const filteredProvisions = useMemo(() => {
    // Use the appropriate base provisions based on the active tab
    const baseProvisions = selectedTab === 'relevant' ? relevantProvisions : budgetProvisions;
    
    let result = searchQuery.trim() === '' ? baseProvisions : 
      baseProvisions.filter(provision => 
        provision.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provision.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    if (selectedSector) {
      result = result.filter(provision => provision.sector === selectedSector);
    }
    
    if (selectedImpact) {
      result = result.filter(provision => provision.impact === selectedImpact);
    }
    
    return result;
  }, [searchQuery, selectedSector, selectedImpact, selectedTab, relevantProvisions]);
  
  // Reset filters when tab changes
  useEffect(() => {
    setSearchQuery('');
    setSelectedSector('');
    setSelectedImpact('');
  }, [selectedTab]);
  
  // Count provisions by impact
  const impactCounts = useMemo(() => {
    if (!relevantProvisions.length) return { positive: 0, neutral: 0, negative: 0 };
    
    return relevantProvisions.reduce((counts, provision) => {
      counts[provision.impact]++;
      return counts;
    }, { positive: 0, neutral: 0, negative: 0 } as Record<string, number>);
  }, [relevantProvisions]);
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Budget Provisions</h1>
          <p className="text-muted-foreground">
            Explore how the latest Union Budget affects you
          </p>
        </div>
        
        {/* Impact Summary */}
        {profile && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Positive Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center gap-2 text-green-600">
                  <TrendingUp className="h-5 w-5" />
                  {impactCounts.positive}
                </div>
                <p className="text-xs text-muted-foreground">provisions relevant to you</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Neutral Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center gap-2 text-gray-600">
                  <Minus className="h-5 w-5" />
                  {impactCounts.neutral}
                </div>
                <p className="text-xs text-muted-foreground">provisions relevant to you</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Negative Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center gap-2 text-red-600">
                  <TrendingDown className="h-5 w-5" />
                  {impactCounts.negative}
                </div>
                <p className="text-xs text-muted-foreground">provisions relevant to you</p>
              </CardContent>
            </Card>
          </div>
        )}
        
        <Tabs defaultValue="relevant" className="w-full" onValueChange={(value) => setSelectedTab(value as 'relevant' | 'all')}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <TabsList className="mb-0">
              <TabsTrigger value="relevant">Relevant to You</TabsTrigger>
              <TabsTrigger value="all">All Provisions</TabsTrigger>
            </TabsList>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search provisions..."
                  className="pl-9 w-full md:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="w-full md:w-[250px]">
                  <SelectValue placeholder="Filter by Sector" />
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
              
              <Select value={selectedImpact} onValueChange={setSelectedImpact}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by Impact" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Impacts</SelectItem>
                  <SelectItem value="positive">Positive</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                  <SelectItem value="negative">Negative</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <TabsContent value="relevant" className="m-0">
            {profile ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProvisions.length > 0 ? (
                  filteredProvisions.map((provision) => (
                    <BudgetProvisionCard key={provision.id} provision={provision} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      No relevant budget provisions found based on your profile.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => window.location.href = '/dashboard/profile'}
                    >
                      Update Profile
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  Complete your profile to see relevant budget provisions.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => window.location.href = '/dashboard/profile'}
                >
                  Complete Profile
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="all" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProvisions.length > 0 ? (
                filteredProvisions.map((provision) => (
                  <BudgetProvisionCard key={provision.id} provision={provision} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No budget provisions found matching your search criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedSector('');
                      setSelectedImpact('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Budget;
