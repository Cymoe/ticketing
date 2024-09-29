import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-background border-b">
      <Link href="/" className="text-xl font-bold">
        Acme Inc
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Button variant="ghost" asChild>
              <Link href="/auth/sign-in">Sign In</Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link href="/auth/sign-up">Sign Up</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
    );
}

