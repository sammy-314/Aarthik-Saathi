
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { ProfileData, ProfileFormData } from '@/types/profile.types';

type ProfileContextType = {
  profile: ProfileData | null;
  loading: boolean;
  saveProfile: (data: ProfileFormData) => Promise<void>;
  fetchProfile: () => Promise<ProfileData | null>;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setProfile(null);
      setLoading(false);
    }
  }, [user]);

  const fetchProfile = async (): Promise<ProfileData | null> => {
    if (!user) return null;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }

      setProfile(data as ProfileData);
      return data as ProfileData;
    } catch (error) {
      console.error('Unexpected error fetching profile:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async (profileData: ProfileFormData) => {
    if (!user) return;

    try {
      setLoading(true);

      // Check if profile already exists
      const { data: existingProfile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (existingProfile) {
        // Update existing profile
        const { error } = await supabase
          .from('user_profiles')
          .update(profileData)
          .eq('user_id', user.id);

        if (error) throw error;
      } else {
        // Insert new profile
        const { error } = await supabase
          .from('user_profiles')
          .insert([{ ...profileData, user_id: user.id }]);

        if (error) throw error;
      }

      // Refresh profile data
      await fetchProfile();
    } catch (error) {
      console.error('Error saving profile:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    profile,
    loading,
    saveProfile,
    fetchProfile
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
