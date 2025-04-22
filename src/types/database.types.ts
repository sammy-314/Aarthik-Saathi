
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          created_at: string
          name: string
          age: number | null
          gender: string | null
          state: string | null
          income: number | null
          occupation: string | null
          caste: string | null
          category: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          age?: number | null
          gender?: string | null
          state?: string | null
          income?: number | null
          occupation?: string | null
          caste?: string | null
          category?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          age?: number | null
          gender?: string | null
          state?: string | null
          income?: number | null
          occupation?: string | null
          caste?: string | null
          category?: string | null
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
