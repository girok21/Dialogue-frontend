// routes/index.tsx
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import ResetpasswordPage from "@/pages/auth/ResetpasswordPage";
import SettingsPage from "@/pages/settings/SettingsPage";

export default [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/chat",
    element: <ResetpasswordPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
];
