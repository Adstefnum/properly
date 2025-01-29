import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentPayments = [
  {
    id: "1",
    amount: 1200,
    status: "completed",
    tenant: {
      name: "John Doe",
      email: "john@example.com",
      image: "/avatars/01.png",
    },
    property: "Sunset Apartments",
    date: "2024-03-15",
  },
  {
    id: "2",
    amount: 950,
    status: "completed",
    tenant: {
      name: "Jane Smith",
      email: "jane@example.com",
      image: "/avatars/02.png",
    },
    property: "Oak Residences",
    date: "2024-03-14",
  },
  // Add more dummy data as needed
]

export function RecentPayments() {
  return (
    <div className="space-y-8">
      {recentPayments.map((payment) => (
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