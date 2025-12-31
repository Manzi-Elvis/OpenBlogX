"use client"

import Link from "next/link"
import { Heart, MessageCircle, Eye } from "lucide-react"
import type { BlogPost } from "@/lib/types"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const tagColors = [
    { bg: "bg-accent/10", text: "text-accent" },
    { bg: "bg-secondary/10", text: "text-secondary" },
    { bg: "bg-tertiary/10", text: "text-tertiary" },
    { bg: "bg-quaternary/10", text: "text-quaternary" },
  ]

  return (
    <article className="group card bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-accent/30 hover:shadow-2xl hover:scale-105">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag, idx) => {
            const color = tagColors[idx % tagColors.length]
            return (
              <span
                key={tag}
                className={`inline-flex items-center rounded-full ${color.bg} ${color.text} px-3 py-1 text-xs font-semibold transition-all group-hover:scale-110`}
              >
                {tag}
              </span>
            )
          })}
        </div>

        {/* Title and Excerpt */}
        <Link href={`/blog/${post.slug}`} className="group/link">
          <h3 className="text-h4 group-hover/link:text-accent transition-colors line-clamp-2 mb-2">{post.title}</h3>
        </Link>

        <p className="text-body-sm text-foreground-light line-clamp-2">{post.excerpt}</p>

        {/* Author and Meta */}
        <div className="flex items-center gap-3 pt-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center overflow-hidden shadow-md">
            {post.author.avatar ? (
              <img
                src={post.author.avatar || "/placeholder.png"}
                alt={post.author.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm font-bold text-white">{post.author.name[0]}</span>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold">{post.author.name}</p>
            <p className="text-xs text-foreground-light">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-3 flex items-center justify-between text-xs text-foreground-light">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 hover:text-secondary transition-colors group/btn">
              <Heart size={16} className="group-hover/btn:fill-secondary" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-tertiary transition-colors group/btn">
              <MessageCircle size={16} className="group-hover/btn:fill-tertiary" />
            </button>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <Eye size={16} className="text-accent" />
            <span className="text-accent font-semibold">{post.views}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
