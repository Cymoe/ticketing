"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SignOutPage() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(() => router.push("/"));
  };

  return (
    <Card className="w-[350px] mx-auto mt-16">
      <CardHeader>
        <CardTitle>Sign Out</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Are you sure you want to sign out?</p>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </CardContent>
    </Card>
  );
}
