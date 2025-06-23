import { signUp } from "@/services/supabase/auth";

export const handleSignup = async (email: string, password: string) => {
  const { data, error } = await signUp(email, password);

  if (error) {
    console.error("Signup failed:", error.message);
    return { success: false, error: error.message };
  }

  console.log("Signup successful:", data);
  return { success: true, data };
};