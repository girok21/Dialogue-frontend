import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

export const loginWithGoogle = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      toast.error("❌ Google Sign-in failed");
      return { success: false, error };
    }

    return { success: true };
  } catch (err) {
    toast.error("❌ Something went wrong during Google sign-in.");
    console.error(err);
    return { success: false, error: err };
  }
};
