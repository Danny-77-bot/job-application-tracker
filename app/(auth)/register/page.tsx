import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <AuthCard
        title="Create Account"
        description="Start tracking your job applications today."
        buttonText="Create Account"
        footerText="Already have an account?"
        footerLink="/login"
        footerLinkText="Sign In"
      >
        <AuthInput
          label="Full Name"
          placeholder="John Doe"
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="you@example.com"
        />

        <PasswordInput
          label="Password"
          placeholder="Create a password"
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
        />
      </AuthCard>
    </div>
  );
}