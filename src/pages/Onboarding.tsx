
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useProfile } from '@/contexts/ProfileContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

// Indian states
const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
  'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 
  'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 
  'Lakshadweep', 'Puducherry'
];

// Common gender options
const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

// Common occupations
const occupations = [
  'Student', 'Salaried Employee', 'Business Owner', 'Self-Employed', 'Farmer', 
  'Government Employee', 'Private Sector Employee', 'Homemaker', 'Retired', 'Unemployed', 'Other'
];

// Caste categories in India
const casteCategories = ['General', 'OBC', 'SC', 'ST', 'EWS', 'Other'];

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { saveProfile } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  
  // Form state
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [income, setIncome] = useState<number | null>(null);
  const [occupation, setOccupation] = useState<string | null>(null);
  const [caste, setCaste] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      
      await saveProfile({
        name,
        age,
        gender,
        state,
        income,
        occupation,
        caste,
        category
      });
      
      toast({
        title: "Profile saved successfully",
        description: "Welcome to Aarthik Saathi Dashboard",
      });
      
      navigate('/dashboard/profile');
    } catch (error) {
      console.error('Error saving profile:', error);
      
      toast({
        title: "Failed to save profile",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-accent">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Complete Your Profile</CardTitle>
          <CardDescription>
            Help us personalize your Aarthik Saathi experience by providing some information
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  min={18}
                  max={120}
                  value={age === null ? '' : age}
                  onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : null)}
                  required
                />
              </div>
              
              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={gender || ''}
                  onValueChange={(value) => setGender(value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    {genderOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* State */}
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Select
                  value={state || ''}
                  onValueChange={(value) => setState(value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Annual Income */}
              <div className="space-y-2">
                <Label htmlFor="income">Annual Income (₹)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="Enter your annual income"
                  min={0}
                  value={income === null ? '' : income}
                  onChange={(e) => setIncome(e.target.value ? parseInt(e.target.value) : null)}
                  required
                />
              </div>
              
              {/* Occupation */}
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Select
                  value={occupation || ''}
                  onValueChange={(value) => setOccupation(value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    {occupations.map((occupation) => (
                      <SelectItem key={occupation} value={occupation}>
                        {occupation}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Caste */}
              <div className="space-y-2">
                <Label htmlFor="caste">Caste (Optional)</Label>
                <Input
                  id="caste"
                  placeholder="Enter your caste"
                  value={caste || ''}
                  onChange={(e) => setCaste(e.target.value || null)}
                />
              </div>
              
              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={category || ''}
                  onValueChange={(value) => setCategory(value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent>
                    {casteCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-secondary text-white"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Saving Profile..." : "Complete Profile & Continue"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Onboarding;
