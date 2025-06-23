import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleSignup } from "@/handlers/auth/handleSignup"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await handleSignup(email, password);

    if (result.success) {
      toast.success("🎉 Signup successful! Welcome aboard.");
      navigate("/");
    } else {
      toast.error("❌ Signup failed. " + (result.error || "Please try again."));
      console.error("❌ Signup failed:", result.error);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Join the conversation, build your wall, and you’re in.
            <br/>
            No fuss — just sign up and vibe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSignup}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
                            <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input id="confirm-password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  SignUp
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Log In
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
