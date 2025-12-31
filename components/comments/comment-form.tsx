"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

interface CommentFormProps {
  onSubmit: (content: string) => void
  isReply?: boolean
}

export function CommentForm({ onSubmit, isReply }: CommentFormProps) {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsSubmitting(true)
    onSubmit(content)
    setContent("")
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={isReply ? "Write a reply..." : "Share your thoughts..."}
        className="w-full rounded-lg border border-border bg-card p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
        rows={isReply ? 2 : 4}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!content.trim() || isSubmitting}
          className="btn btn-primary px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Send size={16} />
          {isSubmitting ? "Posting..." : isReply ? "Reply" : "Comment"}
        </button>
      </div>
    </form>
  )
}
