"use client"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopBar } from "@/components/dashboard/top-bar"
import { StatCard } from "@/components/dashboard/stat-card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { FileText, Eye, Heart, Users } from "lucide-react"

export default function DashboardPage() {
  const statsData = [
    { icon: <FileText size={24} />, label: "Published Posts", value: 12, change: "+2 this month", positive: true },
    { icon: <Eye size={24} />, label: "Total Views", value: "24.5K", change: "+12% from last month", positive: true },
    { icon: <Heart size={24} />, label: "Total Likes", value: "2,340", change: "+8% from last month", positive: true },
    { icon: <Users size={24} />, label: "Followers", value: "1,234", change: "+45 new followers", positive: true },
  ]

  const viewsData = [
    { name: "Mon", views: 2400 },
    { name: "Tue", views: 1398 },
    { name: "Wed", views: 9800 },
    { name: "Thu", views: 3908 },
    { name: "Fri", views: 4800 },
    { name: "Sat", views: 3800 },
    { name: "Sun", views: 4300 },
  ]

  const engagementData = [
    { name: "Week 1", likes: 400, comments: 240 },
    { name: "Week 2", likes: 300, comments: 221 },
    { name: "Week 3", likes: 200, comments: 229 },
    { name: "Week 4", likes: 278, comments: 200 },
  ]

  return (
    <>
      <TopBar />
      <Sidebar />
      <main className="md:ml-64 bg-background min-h-screen">
        <div className="p-6 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-h1 mb-2">Dashboard</h1>
              <p className="text-foreground-light">Welcome back! Here's your blog performance overview.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, i) => (
                <StatCard key={i} {...stat} />
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Views Chart */}
              <div className="lg:col-span-2 card">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-h4">Views</h2>
                    <p className="text-sm text-foreground-light">This week's traffic</p>
                  </div>
                  <div className="flex gap-2">
                    {["Week", "Month", "Year"].map((period) => (
                      <button key={period} className="px-3 py-1 text-xs rounded-lg hover:bg-border transition-colors">
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={viewsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="name" stroke="var(--foreground-light)" />
                    <YAxis stroke="var(--foreground-light)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="views" fill="var(--accent)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Top Posts */}
              <div className="card">
                <h2 className="text-h4 mb-6">Top Posts</h2>
                <div className="space-y-4">
                  {[
                    { title: "Server Components", views: "2.4K" },
                    { title: "React Patterns", views: "1.8K" },
                    { title: "CSS Grid Guide", views: "1.2K" },
                  ].map((post, i) => (
                    <div key={i} className="p-3 rounded-lg bg-background hover:bg-border transition-colors">
                      <p className="font-medium line-clamp-1 text-sm">{post.title}</p>
                      <p className="text-xs text-foreground-light mt-1">{post.views} views</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Engagement Chart */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-h4">Engagement</h2>
                  <p className="text-sm text-foreground-light">Likes and comments over time</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--foreground-light)" />
                  <YAxis stroke="var(--foreground-light)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="likes"
                    stroke="hsl(216 100% 55%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(216 100% 55%)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="comments"
                    stroke="var(--accent-light)"
                    strokeWidth={2}
                    dot={{ fill: "var(--accent-light)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activity */}
            <div className="card">
              <h2 className="text-h4 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: "New comment", post: "Server Components", author: "John Doe", time: "2 hours ago" },
                  { action: "Post liked", post: "React Patterns", author: "Jane Smith", time: "5 hours ago" },
                  { action: "New follower", post: "Alex Chen", author: "Taylor Kim", time: "1 day ago" },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-border transition-colors"
                  >
                    <div>
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-foreground-light mt-1">
                        {activity.post} by {activity.author}
                      </p>
                    </div>
                    <p className="text-xs text-foreground-light">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
