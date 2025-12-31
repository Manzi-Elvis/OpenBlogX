"use client"

import { useState } from "react"
import { Mail, Calendar, Edit2, Settings } from "lucide-react"
import type { User } from "@/lib/types"

interface ProfileHeaderProps {
  user: User
  isOwnProfile: boolean
  onEditClick: () => void
}

export function ProfileHeader({ user, isOwnProfile, onEditClick }: ProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className="border-b border-border bg-background">
      <div className="container-wide py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Cover area */}
          <div className="h-32 md:h-48 bg-gradient-to-r from-accent/20 to-accent/5 rounded-lg mb-8 flex items-center justify-center">
            <div className="text-center text-foreground-light">Profile Background</div>
          </div>

          {/* Profile info */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end">
            {/* Avatar */}
            <div className="relative -mt-16 md:-mt-20 flex-shrink-0">
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-accent/20 flex items-center justify-center border-4 border-background overflow-hidden">
                {user.avatar ? (
                  <img src={user.avatar || "/placeholder.png"} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-4xl font-bold text-accent">{user.name[0]}</span>
                )}
              </div>
            </div>

            {/* Profile details */}
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-h1">{user.name}</h1>
                  <p className="text-foreground-light mt-1">@{user.email.split("@")[0]}</p>
                </div>
                {isOwnProfile ? (
                  <div className="flex gap-2">
                    <button onClick={onEditClick} className="btn btn-outline px-4 py-2 flex items-center gap-2">
                      <Edit2 size={18} />
                      Edit Profile
                    </button>
                    <button className="btn btn-outline px-4 py-2 flex items-center gap-2">
                      <Settings size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`btn px-6 py-2 ${isFollowing ? "btn-outline" : "btn-primary"}`}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </button>
                )}
              </div>

              {/* Bio */}
              <p className="text-body text-foreground-light mb-4">
                {user.bio || "No bio added yet. " + (isOwnProfile ? "Edit your profile to add one." : "")}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-foreground-light">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    Joined {new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
