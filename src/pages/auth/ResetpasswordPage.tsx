import { ResetPasswordForm } from "@/components/form/reset-password-form";
import Logo from "@/components/ui/LogoLarge";

const ResetpasswordPage = () => {
  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10 gap-2">
      <Logo />
      <div className="w-full max-w-sm">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetpasswordPage;
