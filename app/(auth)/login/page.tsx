import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <AuthCard
        title="Welcome Back"
        description="Sign in to continue managing your job applications."
        buttonText="Sign In"
        footerText="Don't have an account?"
        footerLink="/register"
        footerLinkText="Create one"
      >
        <AuthInput
          label="Email"
          type="email"
          placeholder="you@example.com"
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
        />
      </AuthCard>
    </div>
  );
}