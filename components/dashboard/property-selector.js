"use client"

import * as React from "react"
import { useProperty } from "@/contexts/PropertyContext"

const properties = [
  {
    value: "all",
    label: "All Properties",
  },
  {
    value: "sunset-apartments",
    label: "Sunset Apartments",
  },
  {
    value: "oak-residences",
    label: "Oak Residences",
  },
]

export function PropertySelector() {
  const { selectedProperty, setSelectedProperty } = useProperty()

  return (
    <select
      value={selectedProperty}
      onChange={(e) => setSelectedProperty(e.target.value)}
      className="h-10 w-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
    >
      {properties.map((property) => (
        <option key={property.value} value={property.value}>
          {property.label}
        </option>
      ))}
    </select>
  )
} 