"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="font-bold text-lg">OpenBlogX</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground-light hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-foreground-light hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-foreground-light hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden gap-3 md:flex">
          <Link href="/login" className="btn btn-outline px-4 py-2 text-sm">
            Log in
          </Link>
          <Link href="/register" className="btn btn-primary px-4 py-2 text-sm">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
            <Link href="/#features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="/#pricing" className="text-sm font-medium">
              Pricing
            </Link>
            <div className="border-t border-border pt-4 flex flex-col gap-3">
              <Link href="/login" className="btn btn-outline px-4 py-2 text-sm w-full">
                Log in
              </Link>
              <Link href="/register" className="btn btn-primary px-4 py-2 text-sm w-full">
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
