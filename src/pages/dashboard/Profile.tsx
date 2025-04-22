
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useProfile } from '@/contexts/ProfileContext';
import { User, Mail, Map, Briefcase, IndianRupee, UserRound } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/contexts/AuthContext';

// Helper function to format currency values
const formatCurrency = (amount: number | null) => {
  if (amount === null) return 'Not specified';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const Profile = () => {
  const { profile, loading } = useProfile();
  const { user } = useAuth();
  
  if (loading) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
          </div>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Profile</h1>
          <p className="text-muted-foreground">
            View and manage your personal information
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Information */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Your basic profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <User className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{profile?.name || 'Not specified'}</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{user?.email || 'Not specified'}</p>
                  </div>
                </div>
                
                {/* Age */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <UserRound className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">{profile?.age || 'Not specified'}</p>
                  </div>
                </div>
                
                {/* Gender */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <UserRound className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p className="font-medium">{profile?.gender || 'Not specified'}</p>
                  </div>
                </div>
                
                {/* State */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Map className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">State</p>
                    <p className="font-medium">{profile?.state || 'Not specified'}</p>
                  </div>
                </div>
                
                {/* Occupation */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Briefcase className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Occupation</p>
                    <p className="font-medium">{profile?.occupation || 'Not specified'}</p>
                  </div>
                </div>
                
                {/* Annual Income */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <IndianRupee className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Annual Income</p>
                    <p className="font-medium">{formatCurrency(profile?.income)}</p>
                  </div>
                </div>
                
                {/* Caste */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <UserRound className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Caste</p>
                    <p className="font-medium">{profile?.caste || 'Not specified'}</p>
                  </div>
                </div>
                
                {/* Category */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <UserRound className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium">{profile?.category || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Eligibility Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Eligibility Summary</CardTitle>
              <CardDescription>
                Based on your profile information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Eligible Government Schemes</p>
                <p className="text-2xl font-bold text-secondary">
                  {profile ? '25+' : '0'}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Budget Provisions</p>
                <p className="text-2xl font-bold text-secondary">
                  {profile ? '18+' : '0'}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Recommended Investments</p>
                <p className="text-2xl font-bold text-secondary">
                  {profile ? '10+' : '0'}
                </p>
              </div>
              
              <Button
                className="w-full mt-4"
                variant="outline"
              >
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
