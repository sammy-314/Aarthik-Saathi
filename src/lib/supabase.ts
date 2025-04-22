
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database.types';

// Initialize Supabase client with the correct URL and anon key
const supabaseUrl = 'https://ymodflxaqfapokvsdivd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inltb2RmbHhhcWZhcG9rdnNkaXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNDcxMzQsImV4cCI6MjA2MDkyMzEzNH0.fjkUm37ZZ1eQ3FFo9E2ysW87ouD-xv1xxEFPnPrBy6o';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
