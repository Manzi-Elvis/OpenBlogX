"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileStats } from "@/components/profile/profile-stats"
import { EditProfileModal } from "@/components/profile/edit-profile-modal"
import { BlogCard } from "@/components/ui/blog-card"
import type { User, BlogPost } from "@/lib/types"
import { MessageSquare, Settings2, Share2 } from "lucide-react"

export default function ProfilePage() {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [user, setUser] = useState<User>({
    id: "user-123",
    email: "alex@example.com",
    name: "Alex Chen",
    bio: "Full-stack developer passionate about building beautiful web experiences. Coffee enthusiast and open source contributor.",
    createdAt: new Date("2023-01-15"),
  })

  // Mock user posts
  const userPosts: BlogPost[] = [
    {
      id: "1",
      title: "Building Design Systems at Scale",
      slug: "building-design-systems",
      excerpt: "Lessons learned from scaling a design system to 50+ products.",
      content: [],
      author: user,
      tags: ["Design", "Systems"],
      featured: false,
      published: true,
      views: 1250,
      likes: 245,
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      readingTime: 8,
    },
    {
      id: "2",
      title: "Advanced React Patterns in 2025",
      slug: "advanced-react-patterns",
      excerpt: "Deep dive into composition, render props, and custom hooks.",
      content: [],
      author: user,
      tags: ["React", "Programming"],
      featured: false,
      published: true,
      views: 2100,
      likes: 456,
      createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
      readingTime: 12,
    },
    {
      id: "3",
      title: "Web Performance Optimization Guide",
      slug: "performance-guide",
      excerpt: "Practical techniques to improve your web app's speed.",
      content: [],
      author: user,
      tags: ["Performance", "Web Development"],
      featured: false,
      published: true,
      views: 3200,
      likes: 678,
      createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
      readingTime: 10,
    },
  ]

  const handleSaveProfile = (data: Partial<User>) => {
    setUser({
      ...user,
      ...data,
    })
  }

  return (
    <>
      <Header />
      <main>
        <ProfileHeader user={user} isOwnProfile={true} onEditClick={() => setIsEditOpen(true)} />
        <ProfileStats posts={3} followers={1234} following={567} />

        {/* Tabs */}
        <section className="border-b border-border bg-background">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto flex gap-8 border-b border-border">
              {[
                { id: "posts", label: "Posts", icon: MessageSquare },
                { id: "drafts", label: "Drafts", icon: Settings2 },
                { id: "saved", label: "Saved", icon: Share2 },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className="flex items-center gap-2 px-4 py-4 font-medium border-b-2 border-transparent hover:border-accent transition-colors"
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="border-b border-border bg-background">
          <div className="container-wide py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Edit Profile Modal */}
      <EditProfileModal
        user={user}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={handleSaveProfile}
      />

      <Footer />
    </>
  )
}
