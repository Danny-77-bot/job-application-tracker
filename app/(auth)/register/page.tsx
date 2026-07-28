"use client";

import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <Card className="w-full max-w-md shadow-xl">

        <CardHeader className="space-y-4 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
            <BriefcaseBusiness className="text-white" size={28} />
          </div>

          <CardTitle className="text-3xl">
            Create Account
          </CardTitle>

          <CardDescription>
            Start tracking your job applications today.
          </CardDescription>

        </CardHeader>

        <form>

          <CardContent className="space-y-5">

            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name
              </Label>

              <Input
                id="name"
                type="text"
                placeholder="Yohanis Getachew"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="yohanis.getachew@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                Password
              </Label>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                Confirm Password
              </Label>

              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

          </CardContent>

          <CardFooter className="flex flex-col gap-4">

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-600 hover:underline"
              >
                Log in
              </Link>
            </p>

          </CardFooter>

        </form>

      </Card>
    </main>
  );
}
