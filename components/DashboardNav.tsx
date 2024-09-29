"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingCart, Package, Users, LineChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DashboardNavProps {
  onLinkClick?: () => void;
}

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/orders", label: "Orders", icon: ShoppingCart, badge: "6" },
  { href: "/dashboard/products", label: "Products", icon: Package },
  { href: "/dashboard/customers", label: "Customers", icon: Users },
  { href: "/dashboard/analytics", label: "Analytics", icon: LineChart },
]

export function DashboardNav({ onLinkClick }: DashboardNavProps) {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={onLinkClick}
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
