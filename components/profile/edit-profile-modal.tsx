"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import type { User } from "@/lib/types"

interface EditProfileModalProps {
  user: User
  isOpen: boolean
  onClose: () => void
  onSave: (data: Partial<User>) => void
}

export function EditProfileModal({ user, isOpen, onClose, onSave }: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    name: user.name,
    bio: user.bio || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-h3">Edit Profile</h2>
          <button onClick={onClose} className="p-1 hover:bg-border rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              rows={4}
              className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            />
            <p className="text-xs text-foreground-light mt-1">{formData.bio.length}/500</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 btn btn-outline px-4 py-2">
              Cancel
            </button>
            <button type="submit" className="flex-1 btn btn-primary px-4 py-2">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
