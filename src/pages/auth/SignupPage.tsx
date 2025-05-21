import { SignupForm } from "@/components/form/signup-form";
import Logo from "@/components/ui/LogoLarge";

const SignupPage = () => {
  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10 gap-2">
      <Logo />
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
