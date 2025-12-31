"use client"

import type React from "react"

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string | number
  change?: string
  positive?: boolean
}

export function StatCard({ icon, label, value, change, positive }: StatCardProps) {
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-4">
        <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">{icon}</div>
        {change && (
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
              positive ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"
            }`}
          >
            {change}
          </span>
        )}
      </div>
      <p className="text-foreground-light text-sm mb-1">{label}</p>
      <p className="text-h3 font-bold">{value}</p>
    </div>
  )
}
