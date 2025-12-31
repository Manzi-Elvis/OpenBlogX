"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, MessageSquare, BarChart3, Settings, LogOut } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="border-b border-border px-6 py-8">
        <Link href="/dashboard" className="font-bold text-lg">
          OpenBlogX
        </Link>
        <p className="text-xs text-foreground-light mt-1">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {[
          { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
          { icon: FileText, label: "Posts", href: "/dashboard/posts" },
          { icon: MessageSquare, label: "Comments", href: "/dashboard/comments" },
          { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-200 ${
              isActive(item.href)
                ? "bg-accent text-white"
                : "text-foreground-light hover:bg-border hover:text-foreground"
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-border space-y-2 p-4">
        <Link
          href="/dashboard/settings"
          className={`flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-200 ${
            isActive("/dashboard/settings")
              ? "bg-accent text-white"
              : "text-foreground-light hover:bg-border hover:text-foreground"
          }`}
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        <button className="w-full flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-foreground-light hover:bg-border hover:text-foreground transition-all duration-200">
          <LogOut size={20} />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  )
}
