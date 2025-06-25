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
import { isValidEmail, doPasswordsMatch, isStrongPassword } from "@/utils/validation"
import { Eye, EyeOff } from "lucide-react"
import { loginWithGoogle } from "@/services/google/auth"
export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validation, setValidation] = useState({
    isEmailValid: true,
    doPasswordsMatch: true,
    isPasswordStrong: true
  })
  const [errorText, setErrorText] = useState({
    email: '',
    password: ''
  })
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
  const handleBlur = async () => {
    setValidation({
      isEmailValid: isValidEmail(email),
      doPasswordsMatch: doPasswordsMatch(password, confirmPassword),
      isPasswordStrong: isStrongPassword(password)
    })
    setErrorText(prev => ({
      ...prev,
      email: email && !isValidEmail(email) ? 'Please enter a valid email address.' : '',
      password: password && !isStrongPassword(password) ? 'Password must be at least 8 characters long, include a number and a special character.' : ''
    }))
  }
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
            <div className="flex flex-col gap-3">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  onBlur={handleBlur}
                  required
                />
                <div className="min-h-[10px]">
                  {!validation.isEmailValid && <p className="text-sm text-red-500 transform translate-y-[-10px]">{errorText.email}</p>}
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} required onChange={(e)=>{setPassword(e.target.value)}} onBlur={handleBlur}/>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="min-h-[10px]">
                  {!validation.isPasswordStrong && <p className="text-sm text-red-500">{errorText.password}</p>}
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <div className="relative">
                  <Input id="confirm-password" type={showPassword ? "text" : "password"} required onChange={(e)=>{setConfirmPassword(e.target.value)}}  onBlur={handleBlur}/>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="min-h-[10px]">
                  {!validation.doPasswordsMatch && confirmPassword && <p className="text-sm text-red-500">Passwords do not match.</p>}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  SignUp
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={loginWithGoogle}
                >
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
