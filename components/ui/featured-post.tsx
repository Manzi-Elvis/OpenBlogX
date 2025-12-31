"use client"

import Link from "next/link"
import { Heart, MessageCircle, Eye, Flame } from "lucide-react"
import type { BlogPost } from "@/lib/types"

interface FeaturedPostProps {
  post: BlogPost
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="group relative rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 via-card to-secondary/5 overflow-hidden transition-all duration-300 hover:border-accent/60 hover:shadow-2xl">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
        <div className="md:col-span-1 bg-gradient-to-br from-accent via-secondary to-quaternary h-48 md:h-auto flex items-center justify-center p-6 shadow-lg">
          <div className="text-center animate-slide-up">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/20 backdrop-blur-lg text-white mb-4 shadow-lg">
              <Flame className="w-10 h-10" />
            </div>
            <p className="text-sm font-bold text-white drop-shadow-lg">Featured</p>
          </div>
        </div>

        {/* Content area */}
        <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, idx) => {
                const colors = [
                  { bg: "bg-accent/15", text: "text-accent" },
                  { bg: "bg-secondary/15", text: "text-secondary" },
                  { bg: "bg-tertiary/15", text: "text-tertiary" },
                ]
                const color = colors[idx % colors.length]
                return (
                  <span
                    key={tag}
                    className={`inline-flex items-center rounded-full ${color.bg} ${color.text} px-3 py-1 text-xs font-semibold`}
                  >
                    {tag}
                  </span>
                )
              })}
            </div>

            {/* Title */}
            <Link href={`/blog/${post.slug}`} className="group/link">
              <h2 className="text-h3 group-hover/link:text-gradient transition-colors line-clamp-3 mb-3">
                {post.title}
              </h2>
            </Link>

            <p className="text-body text-foreground-light line-clamp-3 mb-4">{post.excerpt}</p>
          </div>

          {/* Author and Stats */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center overflow-hidden shadow-lg">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold text-white">{post.author.name[0]}</span>
                )}
              </div>
              <div>
                <p className="text-sm font-bold">{post.author.name}</p>
                <p className="text-xs text-foreground-light">
                  {new Date(post.createdAt).toLocaleDateString()} • {post.readingTime} min read
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <button className="flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors group/btn font-semibold">
                <Heart size={18} className="group-hover/btn:fill-secondary" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-tertiary hover:text-tertiary-light transition-colors group/btn font-semibold">
                <MessageCircle size={18} className="group-hover/btn:fill-tertiary" />
              </button>
              <div className="flex items-center gap-2 ml-auto text-accent font-semibold">
                <Eye size={18} />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
