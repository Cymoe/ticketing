"use client";

import Link from "next/link"
import { SignUp } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Create an account or sign up with GitHub
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <SignUp
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
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}
