import { supabase } from "@/lib/supabaseClient";

export const signUp = async (email: string, password: string) => {
    return await supabase.auth.signUp({email, password});
};

export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const getUserSession = async () => {
  return await supabase.auth.getSession();
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};