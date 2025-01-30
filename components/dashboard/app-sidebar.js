"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, DollarSign, FileText, Users, Settings } from "lucide-react"

const menuItems = [
  {
    title: "Overview",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Finances",
    icon: DollarSign,
    href: "/dashboard/finances",
  },
  {
    title: "Tenants",
    icon: Users,
    href: "/dashboard/tenants",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="border-r bg-background min-h-screen w-64 p-4 space-y-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold">Properly</h2>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
} 