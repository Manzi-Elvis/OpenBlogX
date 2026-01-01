"use client"

import { useState, useEffect } from "react"
import { CommentForm } from "./comment-form"
import { CommentItem } from "./comment-item"
import type { Comment } from "@/lib/types"

interface CommentsSectionProps {
  postId: string
}

export function CommentsSection({ postId }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock loading comments
    setIsLoading(true)
    setTimeout(() => {
      const mockComments: Comment[] = [
        {
          id: "1",
          postId,
          author: {
            id: "user1",
            email: "john@example.com",
            name: "John Doe",
            createdAt: new Date(),
          },
          content: "This is a great article! Very informative and well-written.",
          likes: 12,
          replies: [
            {
              id: "1-1",
              postId,
              author: {
                id: "user2",
                email: "jane@example.com",
                name: "Jane Smith",
                createdAt: new Date(),
              },
              content: "Thanks! I'm glad you found it helpful.",
              likes: 3,
              replies: [],
              createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            },
          ],
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "2",
          postId,
          author: {
            id: "user3",
            email: "bob@example.com",
            name: "Bob Johnson",
            createdAt: new Date(),
          },
          content: "I have a question about the implementation. How would you handle edge cases?",
          likes: 5,
          replies: [],
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        },
      ]
      setComments(mockComments)
      setIsLoading(false)
    }, 300)
  }, [postId])

  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      postId,
      author: {
        id: "current-user",
        email: "you@example.com",
        name: "You",
        createdAt: new Date(),
      },
      content,
      likes: 0,
      replies: [],
      createdAt: new Date(),
    }
    setComments([newComment, ...comments])
  }

  const handleReply = (parentId: string, content: string) => {
    // In a real app, this would make an API call
    console.log("Reply to comment:", parentId, content)
  }

  return (
    <section className="border-t border-border bg-background">
      <div className="container-wide py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h3 mb-8">Comments ({comments.length})</h2>

          {/* Comment form */}
          <div className="mb-12">
            <CommentForm onSubmit={handleAddComment} />
          </div>

          {/* Comments list */}
          {isLoading ? (
            <div className="space-y-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-border shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-border rounded w-1/4"></div>
                      <div className="h-16 bg-border rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : comments.length > 0 ? (
            <div className="space-y-8">
              {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} onReply={handleReply} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground-light">No comments yet. Be the first to share your thoughts!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
