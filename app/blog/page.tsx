"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BlogCard } from "@/components/ui/blog-card"
import { FeaturedPost } from "@/components/ui/featured-post"
import type { BlogPost } from "@/lib/types"
import { Search, TrendingUp, Clock, Users } from "lucide-react"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Mock data - replace with real API call
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      const mockPosts: BlogPost[] = [
        {
          id: "1",
          title: "The Future of Web Development",
          slug: "future-of-web-development",
          excerpt: "Exploring emerging trends and technologies that will shape web development in the coming years.",
          content: [],
          author: {
            id: "author1",
            email: "alex@example.com",
            name: "Alex Chen",
            avatar: undefined,
            createdAt: new Date(),
          },
          tags: ["Web Development", "Future Trends"],
          featured: true,
          published: true,
          views: 2543,
          likes: 342,
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          readingTime: 8,
        },
        {
          id: "2",
          title: "Building with TypeScript: Advanced Patterns",
          slug: "typescript-advanced-patterns",
          excerpt: "Master advanced TypeScript patterns and techniques to write more robust and maintainable code.",
          content: [],
          author: {
            id: "author2",
            email: "jordan@example.com",
            name: "Jordan Smith",
            avatar: undefined,
            createdAt: new Date(),
          },
          tags: ["TypeScript", "Programming"],
          featured: false,
          published: true,
          views: 1823,
          likes: 245,
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          readingTime: 12,
        },
        {
          id: "3",
          title: "Design Systems: A Complete Guide",
          slug: "design-systems-guide",
          excerpt: "Everything you need to know about creating and maintaining a design system.",
          content: [],
          author: {
            id: "author3",
            email: "maya@example.com",
            name: "Maya Patel",
            avatar: undefined,
            createdAt: new Date(),
          },
          tags: ["Design", "UI/UX"],
          featured: false,
          published: true,
          views: 3421,
          likes: 567,
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          readingTime: 15,
        },
        {
          id: "4",
          title: "React Server Components Explained",
          slug: "react-server-components",
          excerpt: "Deep dive into React Server Components and how they change app architecture.",
          content: [],
          author: {
            id: "author4",
            email: "sam@example.com",
            name: "Sam Wilson",
            avatar: undefined,
            createdAt: new Date(),
          },
          tags: ["React", "Next.js"],
          featured: false,
          published: true,
          views: 2156,
          likes: 431,
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          readingTime: 10,
        },
        {
          id: "5",
          title: "CSS Grid vs Flexbox: When to Use Each",
          slug: "css-grid-vs-flexbox",
          excerpt: "A practical guide to choosing between CSS Grid and Flexbox for your layouts.",
          content: [],
          author: {
            id: "author5",
            email: "casey@example.com",
            name: "Casey Rodriguez",
            avatar: undefined,
            createdAt: new Date(),
          },
          tags: ["CSS", "Design"],
          featured: false,
          published: true,
          views: 4123,
          likes: 678,
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          readingTime: 7,
        },
        {
          id: "6",
          title: "Performance Optimization Techniques",
          slug: "performance-optimization",
          excerpt: "Essential techniques for optimizing web application performance.",
          content: [],
          author: {
            id: "author6",
            email: "taylor@example.com",
            name: "Taylor Kim",
            avatar: undefined,
            createdAt: new Date(),
          },
          tags: ["Performance", "Optimization"],
          featured: false,
          published: true,
          views: 3876,
          likes: 523,
          createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
          readingTime: 9,
        },
      ]
      setPosts(mockPosts)
      setFilteredPosts(mockPosts)
      setIsLoading(false)
    }, 300)
  }, [])

  // Filter posts based on search and selected tag
  useEffect(() => {
    let filtered = posts
    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag))
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }
    setFilteredPosts(filtered)
  }, [searchQuery, selectedTag, posts])

  const featuredPost = posts.find((p) => p.featured)
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)))

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background border-b border-border">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container-wide py-16 md:py-24 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display mb-4 text-balance text-gradient">Read. Learn. Grow.</h1>
              <p className="text-body text-foreground-light text-balance mb-8">
                Discover in-depth articles and guides on web development, design, and technology from our community of
                expert writers.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-accent">{posts.length}</p>
                    <p className="text-xs text-foreground-light">Articles</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-2xl font-bold text-secondary">500K+</p>
                    <p className="text-xs text-foreground-light">Reads</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-tertiary" />
                  <div>
                    <p className="text-2xl font-bold text-tertiary">200+</p>
                    <p className="text-xs text-foreground-light">Writers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="border-b border-border bg-gradient-to-b from-background to-card/30">
          <div className="container-wide py-8">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-foreground-light" />
                  <input
                    type="text"
                    placeholder="Search articles by title or topic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                    selectedTag === null
                      ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg scale-105"
                      : "bg-card border-2 border-border text-foreground hover:border-accent/50 hover:bg-accent/5"
                  }`}
                >
                  All Articles
                </button>
                {allTags.map((tag, idx) => {
                  const gradients = [
                    "from-accent to-secondary",
                    "from-secondary to-quaternary",
                    "from-tertiary to-accent",
                    "from-quaternary to-secondary",
                  ]
                  const gradient = gradients[idx % gradients.length]

                  return (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                        selectedTag === tag
                          ? `bg-gradient-to-r ${gradient} text-white shadow-lg scale-105`
                          : "bg-card border-2 border-border text-foreground hover:border-accent/50 hover:bg-accent/5"
                      }`}
                    >
                      {tag}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="border-b border-border bg-background">
            <div className="container-wide py-16">
              <FeaturedPost post={featuredPost} />
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="border-b border-border bg-background">
          <div className="container-wide py-16">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card animate-pulse bg-card/50">
                    <div className="h-32 bg-border rounded mb-4"></div>
                    <div className="h-4 bg-border rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-border rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, idx) => (
                  <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4">
                  <Search className="w-8 h-8 text-accent" />
                </div>
                <p className="text-foreground-light text-lg font-semibold">No articles found</p>
                <p className="text-foreground-light mt-2">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
