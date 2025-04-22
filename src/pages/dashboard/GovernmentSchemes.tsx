
import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Search, Info } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Scheme, governmentSchemes } from '@/data/government-schemes';
import { useProfile } from '@/contexts/ProfileContext';

const SchemeCard = ({ scheme }: { scheme: Scheme }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{scheme.name}</CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowDetails(!showDetails)}>
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-64">Click for details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>{scheme.ministry}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-grow flex flex-col">
        <p className="text-sm mb-4 flex-grow">{scheme.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="bg-accent text-secondary">
              {scheme.eligibility.incomeRange ? 
                (scheme.eligibility.incomeRange[1] ? 
                  `Income: ₹${scheme.eligibility.incomeRange[0].toLocaleString()} - ₹${scheme.eligibility.incomeRange[1].toLocaleString()}` : 
                  `Income: ₹${scheme.eligibility.incomeRange[0].toLocaleString()}+`) : 
                'All Incomes'}
            </Badge>
            {scheme.eligibility.categories && (
              <Badge variant="outline" className="bg-accent text-secondary">
                {scheme.eligibility.categories.join(', ')}
              </Badge>
            )}
          </div>
          <a 
            href={scheme.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="secondary" className="w-full">
              Visit Website
            </Button>
          </a>
        </div>
      </CardContent>

      {/* Expandable details */}
      {showDetails && (
        <div className="p-4 bg-muted mt-2 rounded-b-lg border-t">
          <h4 className="font-semibold mb-2">Benefits</h4>
          <p className="text-sm mb-4">{scheme.benefits}</p>
          
          <h4 className="font-semibold mb-2">Application Process</h4>
          <p className="text-sm mb-4">{scheme.applicationProcess}</p>
          
          <h4 className="font-semibold mb-2">Required Documents</h4>
          <ul className="list-disc list-inside text-sm">
            {scheme.requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

const GovernmentSchemes = () => {
  const { profile } = useProfile();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMinistry, setSelectedMinistry] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Extract unique ministries for filter
  const ministries = useMemo(() => {
    const ministrySet = new Set(governmentSchemes.map(scheme => scheme.ministry));
    return Array.from(ministrySet);
  }, []);
  
  // Filter schemes based on profile
  const eligibleSchemes = useMemo(() => {
    if (!profile) return [];
    
    return governmentSchemes.filter(scheme => {
      const { eligibility } = scheme;
      
      // Check state eligibility
      if (eligibility.states && profile.state && !eligibility.states.includes(profile.state) && !eligibility.states.includes('All States')) {
        return false;
      }
      
      // Check gender eligibility
      if (eligibility.gender && profile.gender && !eligibility.gender.includes(profile.gender)) {
        return false;
      }
      
      // Check age eligibility
      if (eligibility.minAge && profile.age && profile.age < eligibility.minAge) {
        return false;
      }
      
      if (eligibility.maxAge && profile.age && profile.age > eligibility.maxAge) {
        return false;
      }
      
      // Check income eligibility
      if (eligibility.incomeRange && profile.income) {
        const [minIncome, maxIncome] = eligibility.incomeRange;
        if (profile.income < minIncome) {
          return false;
        }
        if (maxIncome !== null && profile.income > maxIncome) {
          return false;
        }
      }
      
      // Check category eligibility
      if (eligibility.categories && profile.category && !eligibility.categories.includes(profile.category)) {
        return false;
      }
      
      // Check occupation eligibility
      if (eligibility.occupation && profile.occupation && !eligibility.occupation.includes(profile.occupation)) {
        return false;
      }
      
      return true;
    });
  }, [profile]);
  
  // Filter schemes based on search and filters
  const filteredSchemes = useMemo(() => {
    let result = searchQuery.trim() === '' ? governmentSchemes : 
      governmentSchemes.filter(scheme => 
        scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    if (selectedMinistry && selectedMinistry !== 'all') {
      result = result.filter(scheme => scheme.ministry === selectedMinistry);
    }
    
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(scheme => 
        scheme.eligibility.categories?.includes(selectedCategory)
      );
    }
    
    return result;
  }, [searchQuery, selectedMinistry, selectedCategory]);
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Government Schemes</h1>
          <p className="text-muted-foreground">
            Explore government schemes based on your eligibility
          </p>
        </div>
        
        <Tabs defaultValue="eligible" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <TabsList className="mb-0">
              <TabsTrigger value="eligible">Eligible Schemes</TabsTrigger>
              <TabsTrigger value="all">All Schemes</TabsTrigger>
            </TabsList>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search schemes..."
                  className="pl-9 w-full md:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Select value={selectedMinistry} onValueChange={setSelectedMinistry}>
                <SelectTrigger className="w-full md:w-[250px]">
                  <SelectValue placeholder="Filter by Ministry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ministries</SelectItem>
                  {ministries.map((ministry) => (
                    <SelectItem key={ministry} value={ministry}>
                      {ministry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                  <SelectItem value="OBC">OBC</SelectItem>
                  <SelectItem value="SC">SC</SelectItem>
                  <SelectItem value="ST">ST</SelectItem>
                  <SelectItem value="EWS">EWS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <TabsContent value="eligible" className="m-0">
            {profile ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eligibleSchemes.length > 0 ? (
                  eligibleSchemes.map((scheme) => (
                    <SchemeCard key={scheme.id} scheme={scheme} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      No eligible schemes found based on your profile.
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
                  Complete your profile to see eligible schemes.
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
              {filteredSchemes.length > 0 ? (
                filteredSchemes.map((scheme) => (
                  <SchemeCard key={scheme.id} scheme={scheme} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No schemes found matching your search criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedMinistry('all');
                      setSelectedCategory('all');
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

export default GovernmentSchemes;
