"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AuthForm } from "@/components/auth/auth-form"
import { Check } from "lucide-react"

export default function RegisterPage() {
  const [isSuccess, setIsSuccess] = useState(false)

  const handleRegister = async (data: any) => {
    // Mock API call
    console.log("Registration attempt:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <main className="min-h-[calc(100vh-8rem)] bg-background flex items-center justify-center">
          <div className="container-wide">
            <div className="max-w-md mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h1 className="text-h2">Welcome to OpenBlogX!</h1>
              <p className="text-body text-foreground-light">
                Your account has been created successfully. Let's get you started.
              </p>
              <Link href="/dashboard" className="btn btn-primary px-6 py-3 inline-flex">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-8rem)] bg-background flex items-center justify-center">
        <div className="container-wide w-full">
          <div className="max-w-md mx-auto py-12">
            {/* Header */}
            <div className="space-y-2 mb-8">
              <h1 className="text-h2">Create account</h1>
              <p className="text-body text-foreground-light">Join thousands of creators and start publishing today.</p>
            </div>

            {/* Form */}
            <AuthForm type="register" onSubmit={handleRegister} />

            {/* Features */}
            <div className="mt-8 space-y-3 p-6 rounded-lg bg-card/50 border border-border">
              <p className="text-sm font-medium mb-3">What you can do:</p>
              {[
                { icon: "✓", text: "Write and publish articles" },
                { icon: "✓", text: "Engage with readers" },
                { icon: "✓", text: "Build your audience" },
                { icon: "✓", text: "Earn from your content" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-accent font-bold">{item.icon}</span>
                  <span className="text-foreground-light">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
