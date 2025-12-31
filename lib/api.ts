// Mock API client - replace with real endpoints
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export const apiClient = {
  // Auth endpoints
  async login(email: string, password: string) {
    return fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then((r) => r.json())
  },

  async register(email: string, password: string, name: string) {
    return fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    }).then((r) => r.json())
  },

  async logout() {
    return fetch(`${API_BASE}/auth/logout`, { method: "POST" }).then((r) => r.json())
  },

  // Blog endpoints
  async getPosts(page = 1, limit = 10) {
    return fetch(`${API_BASE}/posts?page=${page}&limit=${limit}`).then((r) => r.json())
  },

  async getPost(slug: string) {
    return fetch(`${API_BASE}/posts/${slug}`).then((r) => r.json())
  },

  async createPost(data: any) {
    return fetch(`${API_BASE}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => r.json())
  },

  async updatePost(id: string, data: any) {
    return fetch(`${API_BASE}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => r.json())
  },

  // Comments endpoints
  async getComments(postId: string) {
    return fetch(`${API_BASE}/comments/post/${postId}`).then((r) => r.json())
  },

  async createComment(postId: string, content: string) {
    return fetch(`${API_BASE}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId, content }),
    }).then((r) => r.json())
  },

  // User endpoints
  async getUser(id: string) {
    return fetch(`${API_BASE}/users/${id}`).then((r) => r.json())
  },

  async updateProfile(data: any) {
    return fetch(`${API_BASE}/profile`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => r.json())
  },
}
