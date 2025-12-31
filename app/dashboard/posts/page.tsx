"use client"

import { Sidebar } from "@/components/dashboard/sidebar"
import { TopBar } from "@/components/dashboard/top-bar"
import { FileText, MoreVertical, Eye, Heart, MessageSquare, Trash2, Edit2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PostsPage() {
  const [posts] = useState([
    {
      id: "1",
      title: "Server Components Explained",
      status: "published",
      views: 2400,
      likes: 342,
      comments: 45,
      date: "Dec 28, 2025",
    },
    {
      id: "2",
      title: "Advanced TypeScript Patterns",
      status: "published",
      views: 1823,
      likes: 245,
      comments: 32,
      date: "Dec 25, 2025",
    },
    {
      id: "3",
      title: "Building with AI",
      status: "draft",
      views: 0,
      likes: 0,
      comments: 0,
      date: "Dec 24, 2025",
    },
  ])

  const [menuOpen, setMenuOpen] = useState<string | null>(null)

  return (
    <>
      <TopBar />
      <Sidebar />
      <main className="md:ml-64 bg-background min-h-screen">
        <div className="p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-h1 mb-2">Posts</h1>
                <p className="text-foreground-light">Manage and organize your published and draft posts.</p>
              </div>
              <Link href="/dashboard/posts/new" className="btn btn-primary px-4 py-2 flex items-center gap-2">
                <FileText size={18} />
                New Post
              </Link>
            </div>

            {/* Posts Table */}
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">Engagement</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-border/50 transition-colors">
                        <td className="px-6 py-4">
                          <Link href={`/blog/${post.id}`} className="font-medium hover:text-accent transition-colors">
                            {post.title}
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                              post.status === "published"
                                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                                : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                            }`}
                          >
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-4 text-sm text-foreground-light">
                            <span className="flex items-center gap-1">
                              <Eye size={16} />
                              {post.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart size={16} />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare size={16} />
                              {post.comments}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground-light">{post.date}</td>
                        <td className="px-6 py-4">
                          <div className="relative">
                            <button
                              onClick={() => setMenuOpen(menuOpen === post.id ? null : post.id)}
                              className="p-2 rounded-lg hover:bg-border transition-colors"
                            >
                              <MoreVertical size={18} />
                            </button>
                            {menuOpen === post.id && (
                              <div className="absolute right-0 mt-2 w-40 rounded-lg border border-border bg-card shadow-lg z-10">
                                <button className="w-full text-left px-4 py-2 hover:bg-border flex items-center gap-2 text-sm">
                                  <Edit2 size={16} />
                                  Edit
                                </button>
                                <button className="w-full text-left px-4 py-2 hover:bg-border flex items-center gap-2 text-sm text-red-600">
                                  <Trash2 size={16} />
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
