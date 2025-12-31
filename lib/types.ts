export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  bio?: string
  createdAt: Date
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: EditorBlock[]
  author: User
  tags: string[]
  featured: boolean
  published: boolean
  views: number
  likes: number
  createdAt: Date
  updatedAt: Date
  readingTime: number
}

export interface EditorBlock {
  id: string
  type: "heading1" | "heading2" | "heading3" | "paragraph" | "image" | "code" | "quote" | "list"
  content: any
  metadata?: Record<string, any>
}

export interface Comment {
  id: string
  postId: string
  author: User
  content: string
  likes: number
  replies: Comment[]
  createdAt: Date
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
}
