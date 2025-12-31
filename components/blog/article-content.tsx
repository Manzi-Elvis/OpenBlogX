"use client"

import type { EditorBlock } from "@/lib/types"

interface ArticleContentProps {
  content: EditorBlock[]
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="space-y-8">
        {content.map((block) => (
          <div key={block.id}>
            {block.type === "heading1" && <h2 className="text-h2 mt-12 mb-4">{block.content.text}</h2>}
            {block.type === "heading2" && <h3 className="text-h3 mt-10 mb-3">{block.content.text}</h3>}
            {block.type === "heading3" && <h4 className="text-h4 mt-8 mb-2">{block.content.text}</h4>}
            {block.type === "paragraph" && <p className="text-body leading-relaxed">{block.content.text}</p>}
            {block.type === "image" && (
              <figure className="my-8">
                <img
                  src={block.content.url || "/placeholder.png"}
                  alt={block.content.alt}
                  className="rounded-lg w-full"
                />
                {block.content.caption && (
                  <figcaption className="text-center text-sm text-foreground-light mt-2">
                    {block.content.caption}
                  </figcaption>
                )}
              </figure>
            )}
            {block.type === "code" && (
              <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm font-mono">{block.content.code}</code>
              </pre>
            )}
            {block.type === "quote" && (
              <blockquote className="border-l-4 border-accent pl-4 italic text-foreground-light my-6">
                {block.content.text}
              </blockquote>
            )}
            {block.type === "list" && (
              <ul className="list-disc list-inside space-y-2 text-body">
                {block.content.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}
