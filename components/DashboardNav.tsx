"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingCart, Package, Users, LineChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/orders", label: "Orders", icon: ShoppingCart, badge: "6" },
  { href: "/dashboard/products", label: "Products", icon: Package },
  { href: "/dashboard/customers", label: "Customers", icon: Users },
  { href: "/dashboard/analytics", label: "Analytics", icon: LineChart },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
            pathname === item.href
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground"
          }`}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
          {item.badge && (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              {item.badge}
            </Badge>
          )}
        </Link>
      ))}
    </nav>
  )
}
