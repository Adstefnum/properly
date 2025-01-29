"use client"

import React, { createContext, useContext, useState } from 'react'

// Dummy data for properties
const propertyData = {
  "all": {
    totalRevenue: 45231.89,
    totalProperties: 12,
    totalTenants: 34,
    pendingPayments: 4,
    pendingAmount: 5231,
    revenueData: [6500, 5900, 8000, 8100, 7800, 9000],
    outstandingData: [1200, 1900, 300, 500, 800, 300],
    recentPayments: [
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
    ]
  },
  "sunset-apartments": {
    totalRevenue: 25130.50,
    totalProperties: 1,
    totalTenants: 15,
    pendingPayments: 2,
    pendingAmount: 2800,
    revenueData: [3500, 3200, 4000, 4100, 3800, 4500],
    outstandingData: [800, 1200, 200, 300, 400, 200],
    recentPayments: [
      {
        id: "3",
        amount: 1500,
        status: "completed",
        tenant: {
          name: "Mike Johnson",
          email: "mike@example.com",
          image: "/avatars/03.png",
        },
        property: "Sunset Apartments",
        date: "2024-03-13",
      },
      {
        id: "4",
        amount: 1200,
        status: "completed",
        tenant: {
          name: "Sarah Wilson",
          email: "sarah@example.com",
          image: "/avatars/04.png",
        },
        property: "Sunset Apartments",
        date: "2024-03-12",
      },
    ]
  },
  "oak-residences": {
    totalRevenue: 20101.39,
    totalProperties: 1,
    totalTenants: 19,
    pendingPayments: 2,
    pendingAmount: 2431,
    revenueData: [3000, 2700, 4000, 4000, 4000, 4500],
    outstandingData: [400, 700, 100, 200, 400, 100],
    recentPayments: [
      {
        id: "5",
        amount: 900,
        status: "completed",
        tenant: {
          name: "Tom Brown",
          email: "tom@example.com",
          image: "/avatars/05.png",
        },
        property: "Oak Residences",
        date: "2024-03-11",
      },
      {
        id: "6",
        amount: 1100,
        status: "completed",
        tenant: {
          name: "Lisa Davis",
          email: "lisa@example.com",
          image: "/avatars/06.png",
        },
        property: "Oak Residences",
        date: "2024-03-10",
      },
    ]
  }
}

const PropertyContext = createContext()

export function PropertyProvider({ children }) {
  const [selectedProperty, setSelectedProperty] = useState("all")
  const currentPropertyData = propertyData[selectedProperty]

  return (
    <PropertyContext.Provider value={{ selectedProperty, setSelectedProperty, currentPropertyData }}>
      {children}
    </PropertyContext.Provider>
  )
}

export function useProperty() {
  const context = useContext(PropertyContext)
  if (!context) {
    throw new Error('useProperty must be used within a PropertyProvider')
  }
  return context
} 