"use client"

import { useState } from "react"
import { Trash2, GripVertical } from "lucide-react"
import type { EditorBlock as EditorBlockType } from "@/lib/types"

interface EditorBlockProps {
  block: EditorBlockType
  onUpdate: (block: EditorBlockType) => void
  onDelete: (id: string) => void
}

export function EditorBlock({ block, onUpdate, onDelete }: EditorBlockProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (content: any) => {
    onUpdate({
      ...block,
      content,
    })
  }

  const renderBlockEditor = () => {
    switch (block.type) {
      case "paragraph":
        return (
          <textarea
            value={block.content.text || ""}
            onChange={(e) => handleChange({ ...block.content, text: e.target.value })}
            placeholder="Write something..."
            className="w-full bg-transparent text-body resize-none focus:outline-none min-h-24"
          />
        )

      case "heading1":
        return (
          <input
            type="text"
            value={block.content.text || ""}
            onChange={(e) => handleChange({ ...block.content, text: e.target.value })}
            placeholder="Heading 1"
            className="w-full bg-transparent text-h1 font-bold focus:outline-none"
          />
        )

      case "heading2":
        return (
          <input
            type="text"
            value={block.content.text || ""}
            onChange={(e) => handleChange({ ...block.content, text: e.target.value })}
            placeholder="Heading 2"
            className="w-full bg-transparent text-h2 font-bold focus:outline-none"
          />
        )

      case "heading3":
        return (
          <input
            type="text"
            value={block.content.text || ""}
            onChange={(e) => handleChange({ ...block.content, text: e.target.value })}
            placeholder="Heading 3"
            className="w-full bg-transparent text-h3 font-bold focus:outline-none"
          />
        )

      case "quote":
        return (
          <textarea
            value={block.content.text || ""}
            onChange={(e) => handleChange({ ...block.content, text: e.target.value })}
            placeholder="Quote text..."
            className="w-full bg-transparent text-body italic border-l-4 border-accent pl-4 resize-none focus:outline-none min-h-20"
          />
        )

      case "code":
        return (
          <textarea
            value={block.content.code || ""}
            onChange={(e) => handleChange({ ...block.content, code: e.target.value })}
            placeholder="Paste your code here..."
            className="w-full bg-background font-mono text-sm p-4 rounded border border-border resize-none focus:outline-none focus:ring-2 focus:ring-accent min-h-32"
          />
        )

      case "list":
        return (
          <div className="space-y-2">
            {block.content.items?.map((item: string, index: number) => (
              <input
                key={index}
                type="text"
                value={item}
                onChange={(e) => {
                  const items = [...(block.content.items || [])]
                  items[index] = e.target.value
                  handleChange({ ...block.content, items })
                }}
                placeholder={`List item ${index + 1}`}
                className="w-full bg-transparent text-body pl-6 focus:outline-none relative"
              />
            ))}
            <button
              onClick={() => {
                const items = [...(block.content.items || []), ""]
                handleChange({ ...block.content, items })
              }}
              className="text-accent text-sm hover:opacity-75 transition-colors"
            >
              + Add item
            </button>
          </div>
        )

      case "image":
        return (
          <div className="space-y-3">
            <input
              type="text"
              value={block.content.url || ""}
              onChange={(e) => handleChange({ ...block.content, url: e.target.value })}
              placeholder="Image URL"
              className="w-full bg-background px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              value={block.content.alt || ""}
              onChange={(e) => handleChange({ ...block.content, alt: e.target.value })}
              placeholder="Alt text"
              className="w-full bg-background px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {block.content.url && (
              <img
                src={block.content.url || "/placeholder.svg"}
                alt={block.content.alt}
                className="rounded-lg max-h-96"
              />
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div
      className={`flex gap-3 group transition-all ${isFocused ? "bg-accent/5 p-4 rounded-lg" : ""}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <button className="p-2 text-foreground-light hover:text-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing">
        <GripVertical size={20} />
      </button>

      <div className="flex-1 min-w-0">{renderBlockEditor()}</div>

      <button
        onClick={() => onDelete(block.id)}
        className="p-2 text-foreground-light hover:text-red-500 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 size={20} />
      </button>
    </div>
  )
}
