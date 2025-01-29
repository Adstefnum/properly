"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useProperty } from "@/contexts/PropertyContext"

export function RecentPayments() {
  const { currentPropertyData } = useProperty()

  return (
    <div className="space-y-8">
      {currentPropertyData.recentPayments.map((payment) => (
        <div key={payment.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={payment.tenant.image} alt="Avatar" />
            <AvatarFallback>
              {payment.tenant.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{payment.tenant.name}</p>
            <p className="text-sm text-muted-foreground">
              {payment.property}
            </p>
          </div>
          <div className="ml-auto font-medium">
            +${payment.amount}
          </div>
        </div>
      ))}
    </div>
  )
} 