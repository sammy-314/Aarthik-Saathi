
export type ProfileFormData = {
  name: string;
  age: number | null;
  gender: string | null;
  state: string | null;
  income: number | null;
  occupation: string | null;
  caste: string | null;
  category: string | null;
};

export type ProfileData = ProfileFormData & {
  id: string;
  created_at: string;
  user_id: string;
};
