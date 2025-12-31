"use client"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import type { BlogPost } from "@/lib/types"
import { useState } from "react"

interface ArticleHeaderProps {
  post: BlogPost
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  return (
    <header className="border-b border-border bg-background">
      <div className="container-wide py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-h1 mb-6 text-balance">{post.title}</h1>

          {/* Meta info */}
          <div className="space-y-6">
            {/* Author and date */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar || "/placeholder.png"}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-semibold text-accent">{post.author.name[0]}</span>
                )}
              </div>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-foreground-light">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  • {post.readingTime} min read
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card transition-colors"
              >
                <Heart size={18} fill={isLiked ? "currentColor" : "none"} className={isLiked ? "text-red-500" : ""} />
                <span className="text-sm">{post.likes + (isLiked ? 1 : 0)}</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card transition-colors">
                <MessageCircle size={18} />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card transition-colors">
                <Share2 size={18} />
              </button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card transition-colors ml-auto"
              >
                <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} className={isSaved ? "text-accent" : ""} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
