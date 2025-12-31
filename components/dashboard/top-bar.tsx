"use client"

import { Menu, Bell, Search, User } from "lucide-react"
import { useState } from "react"

export function TopBar() {
  const [notificationOpen, setNotificationOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6 md:ml-64">
        {/* Left */}
        <div className="flex items-center gap-4 flex-1">
          <button className="md:hidden p-2 rounded-lg hover:bg-border">
            <Menu size={20} />
          </button>
          <div className="hidden md:flex relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-foreground-light" />
            <input
              type="text"
              placeholder="Search posts, comments..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-lg hover:bg-border">
            <Bell size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
