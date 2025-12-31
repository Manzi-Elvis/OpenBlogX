"use client"

import { useState } from "react"
import { Heart, MessageCircle } from "lucide-react"
import type { Comment } from "@/lib/types"
import { CommentForm } from "./comment-form"

interface CommentItemProps {
  comment: Comment
  onReply: (parentId: string, content: string) => void
}

export function CommentItem({ comment, onReply }: CommentItemProps) {
  const [isReplying, setIsReplying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="space-y-4">
      {/* Comment */}
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 overflow-hidden">
          {comment.author.avatar ? (
            <img
              src={comment.author.avatar || "/placeholder.png"}
              alt={comment.author.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm font-semibold text-accent">{comment.author.name[0]}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="rounded-lg bg-card border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <p className="font-semibold">{comment.author.name}</p>
              <p className="text-xs text-foreground-light">{new Date(comment.createdAt).toLocaleDateString()}</p>
            </div>
            <p className="text-body text-foreground-light">{comment.content}</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-3 text-sm">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center gap-1 text-foreground-light hover:text-accent transition-colors"
            >
              <Heart size={16} fill={isLiked ? "currentColor" : "none"} className={isLiked ? "text-red-500" : ""} />
              <span>{comment.likes + (isLiked ? 1 : 0)}</span>
            </button>
            <button
              onClick={() => setIsReplying(!isReplying)}
              className="flex items-center gap-1 text-foreground-light hover:text-accent transition-colors"
            >
              <MessageCircle size={16} />
              <span>Reply</span>
            </button>
          </div>

          {/* Reply form */}
          {isReplying && (
            <div className="mt-4">
              <CommentForm
                isReply
                onSubmit={(content) => {
                  onReply(comment.id, content)
                  setIsReplying(false)
                }}
              />
            </div>
          )}

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 space-y-4 border-l-2 border-border pl-4">
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} onReply={onReply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
