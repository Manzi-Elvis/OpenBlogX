"use client"

interface ProfileStatsProps {
  posts: number
  followers: number
  following: number
}

export function ProfileStats({ posts, followers, following }: ProfileStatsProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="container-wide py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 md:gap-8">
          {[
            { label: "Posts", value: posts },
            { label: "Followers", value: followers },
            { label: "Following", value: following },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-h2 font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-foreground-light mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
