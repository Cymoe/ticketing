"use client";

import Link from "next/link"
import { SignIn } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Sign In</CardTitle>
          <CardDescription>
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90',
                card: 'shadow-none',
                footer: 'hidden',
                formFieldInput: 'h-9 border-input',
                formFieldLabel: 'text-sm font-medium',
                socialButtonsIconButton: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                socialButtonsBlockButton: 'bg-background text-foreground border border-input hover:bg-accent hover:text-accent-foreground',
              },
            }}
          />
        </CardContent>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/auth/sign-up" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}