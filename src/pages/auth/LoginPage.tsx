import { LoginForm } from "@/components/form/login-form";
import Logo from "@/components/ui/LogoLarge";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10 gap-2">
      <Logo />
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
