
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
import { Search, FileText, PlayCircle, BookOpen, BarChart, Calculator, Leaf } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Resource, ResourceType, resources } from '@/data/resources';

const getResourceIcon = (type: ResourceType) => {
  switch (type) {
    case 'Article':
      return <FileText className="h-4 w-4" />;
    case 'Blog':
      return <BookOpen className="h-4 w-4" />;
    case 'Video':
      return <PlayCircle className="h-4 w-4" />;
    case 'Podcast':
      return <PlayCircle className="h-4 w-4" />;
    case 'Infographic':
      return <BarChart className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Government Schemes':
      return <FileText className="h-4 w-4" />;
    case 'Budget':
      return <BarChart className="h-4 w-4" />;
    case 'Income Tax':
      return <Calculator className="h-4 w-4" />;
    case 'Green Investment':
      return <Leaf className="h-4 w-4" />;
    case 'Financial Literacy':
      return <BookOpen className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="outline" className="flex items-center gap-1">
            {getResourceIcon(resource.type)}
            {resource.type}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            {getCategoryIcon(resource.category)}
            {resource.category}
          </Badge>
        </div>
        <CardTitle className="text-lg">{resource.title}</CardTitle>
        <CardDescription>
          {resource.source} • {resource.publishedDate}
          {resource.readTime && ` • ${resource.readTime}`}
          {resource.duration && ` • ${resource.duration}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 pb-4 flex-grow">
        <p className="text-sm">{resource.description}</p>
        
        <div className="flex flex-wrap gap-1 mt-4">
          {resource.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="secondary" className="w-full">
            {resource.type === 'Video' || resource.type === 'Podcast' ? 'Watch/Listen Now' : 'Read Now'}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Extract unique values for filters
  const resourceTypes = useMemo(() => {
    const typeSet = new Set(resources.map(resource => resource.type));
    return Array.from(typeSet).sort();
  }, []);
  
  const categories = useMemo(() => {
    const categorySet = new Set(resources.map(resource => resource.category));
    return Array.from(categorySet).sort();
  }, []);
  
  // Filter resources based on search and filters
  const filteredResources = useMemo(() => {
    let result = searchQuery.trim() === '' ? resources : 
      resources.filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    
    if (selectedType && selectedType !== 'all') {
      result = result.filter(resource => resource.type === selectedType);
    }
    
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(resource => resource.category === selectedCategory);
    }
    
    return result;
  }, [searchQuery, selectedType, selectedCategory]);
  
  // Group resources by category for the categorized view
  const resourcesByCategory = useMemo(() => {
    const grouped: { [key: string]: Resource[] } = {};
    
    categories.forEach(category => {
      grouped[category] = resources.filter(r => r.category === category);
    });
    
    return grouped;
  }, [categories]);
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Resources</h1>
          <p className="text-muted-foreground">
            Explore educational content to improve your financial knowledge
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <TabsList className="mb-0">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="by-category">By Category</TabsTrigger>
            </TabsList>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search resources..."
                  className="pl-9 w-full md:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Resource Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {resourceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[230px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <TabsContent value="all" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.length > 0 ? (
                filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No resources found matching your search criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedType('all');
                      setSelectedCategory('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="by-category" className="m-0">
            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category}>
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    {getCategoryIcon(category)}
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resourcesByCategory[category].map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Resources;
