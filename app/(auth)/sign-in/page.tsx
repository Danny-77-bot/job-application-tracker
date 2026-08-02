"use client";

import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import { useState } from "react";
import { signIn} from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const  [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const router= useRouter();

    async  function handleSubmit(e:React.FormEvent) {
      e.preventDefault();
      setLoading(true);
setError("");
      try {
        const result = await signIn.email({ email, password });
        if (result.error) {
          setError(result.error.message ?? "Failed to sign in.");
        } else {
          // Handle successful sign-in (e.g., redirect to dashboard)
          router.push("/dashboard");
        }
      } catch (error) {
        setError("Failed to sign in.");
      } finally {
        setLoading(false);
      }
    }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <AuthCard
        title="Welcome Back"
        description="Sign in to continue managing your job applications."
        buttonText="Sign In"
        footerText="Don't have an account?"
        footerLink="/sign-up"
        footerLinkText="Create one"
        loading={loading}
        onSubmit={handleSubmit}
        
      >
        <AuthInput 
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
         onChange={(e) => setEmail(e.target.value)}      

        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}   
            
            />
      </AuthCard>
    </div>
  );
}