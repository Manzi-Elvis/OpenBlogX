"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, Zap, Users, Sparkles, Bookmark, TrendingUp, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Gradient Background */}
        <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-accent/5 border-b border-border">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container-wide py-20 md:py-32 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl animate-slide-up">
                <h1 className="text-display mb-6 text-balance text-gradient">Share your ideas with the world</h1>
                <p className="text-body text-foreground-light mb-8 text-balance">
                  OpenBlogX is the modern platform for publishing, managing, and growing your audience. Built for
                  creators, writers, and developers who demand excellence.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/register" className="btn btn-primary px-8 py-3">
                    Get started free
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/blog" className="btn btn-outline px-8 py-3">
                    Explore blogs
                  </Link>
                </div>
                <div className="mt-8 flex items-center gap-4 text-sm text-foreground-light">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-linear-to-br from-accent to-secondary border-2 border-background"
                      />
                    ))}
                  </div>
                  <span>Join 10k+ creators already publishing</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20" />
                <div className="w-full h-full bg-gradient-to-br from-accent/10 via-secondary/10 to-tertiary/10 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-20 h-20 text-accent/50 mx-auto mb-4" />
                    <p className="text-foreground-light">Beautiful content awaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="border-b border-border bg-white dark:bg-card/30">
          <div className="container-wide py-16">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Active Writers", value: "10,000+" },
                { label: "Posts Published", value: "500K+" },
                { label: "Monthly Readers", value: "50M+" },
                { label: "Uptime", value: "99.9%" },
              ].map((stat, i) => (
                <div key={i} className="text-center animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-foreground-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="border-b border-border bg-background">
          <div className="container-wide py-20">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-h2 mb-4">Everything you need to succeed</h2>
              <p className="text-body text-foreground-light">
                Powerful tools designed for modern content creators and developers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Built on Next.js for blazing-fast performance and instant loading.",
                  color: "from-accent to-secondary",
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  description: "Engage with readers through comments, reactions, and discussions.",
                  color: "from-secondary to-quaternary",
                },
                {
                  icon: Sparkles,
                  title: "Beautiful Editor",
                  description: "Block-based editor inspired by Notion. Write beautifully with ease.",
                  color: "from-tertiary to-accent",
                },
              ].map((feature, i) => (
                <div key={i} className="card group cursor-pointer">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-h4 mb-2">{feature.title}</h3>
                  <p className="text-body-sm text-foreground-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Features Section */}
        <section className="border-b border-border bg-gradient-to-b from-accent/5 to-background">
          <div className="container-wide py-20">
            <div className="mb-16">
              <h2 className="text-h2 mb-4">Powerful Features</h2>
              <p className="text-body text-foreground-light">Designed for the modern creator</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: Bookmark,
                  title: "Save & Organize",
                  description: "Bookmark your favorite posts and organize them into custom collections.",
                  color: "bg-secondary",
                },
                {
                  icon: TrendingUp,
                  title: "Analytics Dashboard",
                  description: "Real-time insights into your audience, engagement, and growth metrics.",
                  color: "bg-quaternary",
                },
                {
                  icon: MessageCircle,
                  title: "Rich Comments",
                  description: "Threaded discussions with nested replies and author responses.",
                  color: "bg-tertiary",
                },
                {
                  icon: Zap,
                  title: "Auto-publishing",
                  description: "Schedule posts in advance and let them publish automatically.",
                  color: "bg-accent",
                },
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div
                    className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">{feature.title}</h3>
                    <p className="text-foreground-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-border bg-gradient-accent text-white">
          <div className="container-wide py-20 text-center">
            <h2 className="text-h2 mb-4">Ready to start publishing?</h2>
            <p className="text-lg mb-8 opacity-95">Join thousands of creators already using OpenBlogX.</p>
            <Link
              href="/register"
              className="btn bg-white text-accent hover:bg-accent/95 hover:text-white px-8 py-3 font-semibold inline-flex"
            >
              Sign up now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
