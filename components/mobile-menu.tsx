'use client'

import React, { useState } from 'react'
import Link from "next/link"
import { Package2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { DashboardNav } from "@/components/DashboardNav"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setOpen(false)}>
            <Package2 className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
          <DashboardNav onLinkClick={() => setOpen(false)} />
        </nav>
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our
                support team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
