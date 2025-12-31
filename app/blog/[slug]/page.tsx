"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArticleHeader } from "@/components/blog/article-header"
import { ArticleContent } from "@/components/blog/article-content"
import { CommentsSection } from "@/components/comments/comments-section"
import type { BlogPost, EditorBlock } from "@/lib/types"

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock fetching post by slug
    setIsLoading(true)
    setTimeout(() => {
      const mockPost: BlogPost = {
        id: "1",
        title: "The Future of Web Development: Embracing Server Components and AI-Powered Development",
        slug: "future-of-web-development",
        excerpt: "Exploring emerging trends and technologies that will shape web development in the coming years.",
        content: [
          {
            id: "1",
            type: "paragraph",
            content: {
              text: "The web development landscape is evolving at an unprecedented pace. From server-side rendering resurgence to AI-powered development tools, the next few years will fundamentally change how we build web applications.",
            },
          },
          {
            id: "2",
            type: "heading1",
            content: { text: "The Rise of Server Components" },
          },
          {
            id: "3",
            type: "paragraph",
            content: {
              text: "React Server Components represent a paradigm shift in how we think about component architecture. By moving computation to the server, we can reduce JavaScript sent to the client, improve security, and simplify data fetching patterns.",
            },
          },
          {
            id: "4",
            type: "heading2",
            content: { text: "Benefits of Server Components" },
          },
          {
            id: "5",
            type: "list",
            content: {
              items: ["Reduced bundle size", "Direct database access", "Secure API keys", "Better performance"],
            },
          },
          {
            id: "6",
            type: "quote",
            content: {
              text: "Server Components don't just offer performance benefits—they fundamentally change how we reason about data fetching and component design.",
            },
          },
          {
            id: "7",
            type: "heading1",
            content: { text: "AI-Powered Development" },
          },
          {
            id: "8",
            type: "paragraph",
            content: {
              text: "AI tools are becoming increasingly sophisticated in understanding code patterns and generating solutions. From IDE assistance to automated testing, AI will handle more of the repetitive work, freeing developers to focus on architecture and user experience.",
            },
          },
          {
            id: "9",
            type: "code",
            content: {
              code: "// AI can help generate boilerplate code\nconst generateComponent = async (description: string) => {\n  return await aiService.generateComponent(description);\n};",
            },
          },
          {
            id: "10",
            type: "heading1",
            content: { text: "The Future is Here" },
          },
          {
            id: "11",
            type: "paragraph",
            content: {
              text: "The future of web development isn't about adopting every new tool. It's about understanding which technologies solve real problems for your use case. Server Components, AI assistance, and better developer tooling are not trends—they're the foundation of the next generation of web applications.",
            },
          },
        ] as EditorBlock[],
        author: {
          id: "author1",
          email: "alex@example.com",
          name: "Alex Chen",
          avatar: undefined,
          bio: "Full-stack developer and web enthusiast exploring the future of the web.",
          createdAt: new Date(),
        },
        tags: ["Web Development", "Future Trends", "React"],
        featured: true,
        published: true,
        views: 2543,
        likes: 342,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        readingTime: 8,
      }
      setPost(mockPost)
      setIsLoading(false)
    }, 300)
  }, [slug])

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="bg-background">
          <div className="container-wide py-16">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="h-12 bg-border rounded animate-pulse"></div>
              <div className="h-32 bg-border rounded animate-pulse"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="bg-background">
          <div className="container-wide py-16 text-center">
            <p className="text-foreground-light text-lg">Post not found</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="bg-background">
        <ArticleHeader post={post} />

        {/* Article content */}
        <section className="bg-background border-b border-border">
          <div className="container-wide py-12 md:py-16">
            <div className="max-w-3xl mx-auto">
              <ArticleContent content={post.content} />
            </div>
          </div>
        </section>

        {/* Author card */}
        <section className="border-b border-border bg-card/50">
          <div className="container-wide py-12 md:py-16">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-lg border border-border bg-card p-8 flex gap-6">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {post.author.avatar ? (
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-semibold text-accent">{post.author.name[0]}</span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">{post.author.name}</p>
                  <p className="text-foreground-light mb-4">
                    {post.author.bio || "Passionate about web development and sharing knowledge."}
                  </p>
                  <a href="#" className="btn btn-outline px-4 py-2 text-sm">
                    Follow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments */}
        <CommentsSection postId={post.id} />
      </main>
      <Footer />
    </>
  )
}
