"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react"

interface AuthFormProps {
  type: "login" | "register"
  onSubmit: (data: any) => Promise<void>
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validation
    if (type === "register") {
      if (!formData.name.trim()) {
        setError("Name is required")
        return
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        return
      }
    }

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Email and password are required")
      return
    }

    try {
      setIsLoading(true)
      await onSubmit(formData)
    } catch (err: any) {
      setError(err.message || "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {type === "register" && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-3.5 h-5 w-5 text-foreground-light" />
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Alex Chen"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-3.5 h-5 w-5 text-foreground-light" />
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-3.5 h-5 w-5 text-foreground-light" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full pl-12 pr-12 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3.5 text-foreground-light hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {type === "register" && (
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 h-5 w-5 text-foreground-light" />
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-12 pr-12 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-3.5 text-foreground-light hover:text-foreground transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      )}

      {type === "login" && (
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-border w-4 h-4" />
            <span>Remember me</span>
          </label>
          <Link href="#" className="text-accent transition-colors hover:opacity-75">
            Forgot password?
          </Link>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Please wait..." : type === "login" ? "Sign in" : "Create account"}
      </button>

      {type === "login" ? (
        <p className="text-center text-sm text-foreground-light">
          Don{"'"}t have an account?{" "}
          <Link href="/register" className="text-accent transition-colors hover:opacity-75 font-medium">
            Sign up
          </Link>
        </p>
      ) : (
        <p className="text-center text-sm text-foreground-light">
          Already have an account?{" "}
          <Link href="/login" className="text-accent transition-colors hover:opacity-75 font-medium">
            Sign in
          </Link>
        </p>
      )}
    </form>
  )
}
