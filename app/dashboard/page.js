"use client"

import { Card } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentPayments } from "@/components/dashboard/recent-payments"
import { PropertySelector } from "@/components/dashboard/property-selector"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { PropertyStats } from "@/components/dashboard/property-stats"
import { PropertyProvider } from "@/contexts/PropertyContext"

export default function DashboardPage() {
  return (
    <PropertyProvider>
      <DashboardShell>
        <DashboardHeader 
          heading="Dashboard"
          text="Overview of your rental properties and financial status."
        >
          <PropertySelector />
        </DashboardHeader>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <PropertyStats />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <div className="p-6">
              <h3 className="text-xl font-semibold">Revenue Overview</h3>
              <Overview />
            </div>
          </Card>
          <Card className="col-span-3">
            <div className="p-6">
              <h3 className="text-xl font-semibold">Recent Payments</h3>
              <RecentPayments />
            </div>
          </Card>
        </div>
      </DashboardShell>
    </PropertyProvider>
  )
} 